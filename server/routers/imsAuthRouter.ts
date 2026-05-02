// IMS Auth Router — email/password login, logout, me, user management,
// plus passwordless magic-link sign-in for external roles (auditor / client).
import { z } from "zod";
import { randomBytes } from "node:crypto";
import { parse as parseCookie } from "cookie";
import { TRPCError } from "@trpc/server";
import { router, publicProcedure, imsProtectedProcedure, imsAdminProcedure } from "../_core/trpc";
import { getSessionCookieOptions } from "../_core/cookies";
import {
  hashPassword,
  verifyPassword,
  createSessionToken,
  IMS_COOKIE_NAME,
} from "../imsAuth";
import {
  getImsUserByEmail,
  getImsUserById,
  createImsUser,
  getAllImsUsers,
  updateImsUser,
  updateImsUserLastSignedIn,
  deleteImsSession,
  deleteImsSessionsByUserId,
  deleteImsUser,
  createMagicLinkToken,
  getMagicLinkToken,
  markMagicLinkTokenUsed,
} from "../db";
import { sendMagicLinkEmail } from "../sendpulseEmail";

// External roles that may sign in via magic link.
// Source of truth: shared/permissions.ts → EXTERNAL_READ_ONLY.
// Hardcoded here to avoid cross-package import friction on the server.
const MAGIC_LINK_ROLES = ["auditor", "client"] as const;
type MagicLinkRole = typeof MAGIC_LINK_ROLES[number];

function isMagicLinkRole(r: string): r is MagicLinkRole {
  return (MAGIC_LINK_ROLES as readonly string[]).includes(r);
}

// Mask token for logs — never log the full hex token.
function maskToken(t: string): string {
  if (t.length < 12) return "****";
  return `${t.slice(0, 6)}…${t.slice(-4)}`;
}

export const imsAuthRouter = router({
  // ── Login ──
  login: publicProcedure
    .input(z.object({
      email: z.string().email(),
      password: z.string().min(1),
    }))
    .mutation(async ({ input, ctx }) => {
      const user = await getImsUserByEmail(input.email.toLowerCase());
      if (!user) {
        return { success: false, error: "Invalid email or password" };
      }

      if (user.status !== "active") {
        return { success: false, error: "Your account has been deactivated. Contact your administrator." };
      }

      const valid = await verifyPassword(input.password, user.passwordHash);
      if (!valid) {
        return { success: false, error: "Invalid email or password" };
      }

      // Create session
      const { token, expiresAt } = await createSessionToken(user);
      await updateImsUserLastSignedIn(user.id);

      // Set cookie
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.cookie(IMS_COOKIE_NAME, token, {
        ...cookieOptions,
        maxAge: expiresAt.getTime() - Date.now(),
      });

      return {
        success: true,
        user: {
          id: user.id,
          email: user.email,
          fullName: user.fullName,
          employeeId: user.employeeId,
          role: user.role,
          department: user.department,
          position: user.position,
        },
      };
    }),

  // ── Logout ──
  logout: publicProcedure.mutation(({ ctx }) => {
    const cookieOptions = getSessionCookieOptions(ctx.req);
    // Try to delete session from DB
    const cookies = ctx.req.headers.cookie;
    if (cookies) {
      const parsed = parseCookie(cookies);
      const token = parsed[IMS_COOKIE_NAME];
      if (token) {
        deleteImsSession(token).catch(() => {});
      }
    }
    ctx.res.clearCookie(IMS_COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
    return { success: true };
  }),

  // ── Current User (me) ──
  me: publicProcedure.query(({ ctx }) => {
    if (!ctx.imsUser) return null;
    return {
      id: ctx.imsUser.id,
      email: ctx.imsUser.email,
      fullName: ctx.imsUser.fullName,
      employeeId: ctx.imsUser.employeeId,
      role: ctx.imsUser.role,
      department: ctx.imsUser.department,
      position: ctx.imsUser.position,
      status: ctx.imsUser.status,
    };
  }),

  // ── Admin: Create User ──
  createUser: imsAdminProcedure
    .input(z.object({
      email: z.string().email(),
      password: z.string().min(6, "Password must be at least 6 characters").optional(),
      fullName: z.string().min(1),
      employeeId: z.string().optional(),
      role: z.enum(["admin", "top_management", "hse_manager", "supervisor", "field_worker", "auditor", "client"]),
      department: z.string().optional(),
      position: z.string().optional(),
    }))
    .mutation(async ({ input }) => {
      const existing = await getImsUserByEmail(input.email.toLowerCase());
      if (existing) {
        return { success: false, error: "A user with this email already exists" };
      }

      const isMagicLinkOnlyRole = input.role === "auditor" || input.role === "client";
      if (!isMagicLinkOnlyRole && !input.password) {
        return { success: false, error: "Password is required for this role" };
      }

      const passwordHash = isMagicLinkOnlyRole && !input.password
        ? await hashPassword(randomBytes(32).toString("hex"))
        : await hashPassword(input.password!);

      const user = await createImsUser({
        email: input.email.toLowerCase(),
        passwordHash,
        fullName: input.fullName,
        employeeId: input.employeeId ?? null,
        role: input.role,
        department: input.department ?? null,
        position: input.position ?? null,
        status: "active",
      });

      return {
        success: true,
        user: {
          id: user.id,
          email: user.email,
          fullName: user.fullName,
          role: user.role,
        },
      };
    }),

  // ── Admin: List Users ──
  listUsers: imsAdminProcedure.query(async () => {
    const users = await getAllImsUsers();
    return users.map(u => ({
      id: u.id,
      email: u.email,
      fullName: u.fullName,
      employeeId: u.employeeId,
      role: u.role,
      department: u.department,
      position: u.position,
      status: u.status,
      lastSignedIn: u.lastSignedIn,
      createdAt: u.createdAt,
    }));
  }),

  // ── Admin: Update User ──
  updateUser: imsAdminProcedure
    .input(z.object({
      id: z.number(),
      fullName: z.string().min(1).optional(),
      employeeId: z.string().optional(),
      role: z.enum(["admin", "top_management", "hse_manager", "supervisor", "field_worker", "auditor", "client"]).optional(),
      department: z.string().optional(),
      position: z.string().optional(),
      status: z.enum(["active", "inactive"]).optional(),
      password: z.string().min(6).optional(),
    }))
    .mutation(async ({ input }) => {
      const updateData: Record<string, unknown> = {};
      if (input.fullName) updateData.fullName = input.fullName;
      if (input.employeeId !== undefined) updateData.employeeId = input.employeeId;
      if (input.role) updateData.role = input.role;
      if (input.department !== undefined) updateData.department = input.department;
      if (input.position !== undefined) updateData.position = input.position;
      if (input.status) updateData.status = input.status;
      if (input.password) updateData.passwordHash = await hashPassword(input.password);

      await updateImsUser(input.id, updateData as any);

      // If deactivating, kill all sessions
      if (input.status === "inactive") {
        await deleteImsSessionsByUserId(input.id);
      }

      return { success: true };
    }),

  // ── Admin: Delete User (cannot delete self) ──
  deleteUser: imsAdminProcedure
    .input(z.object({ userId: z.number().int() }))
    .mutation(async ({ input, ctx }) => {
      if (input.userId === ctx.imsUser.id) {
        throw new TRPCError({ code: "BAD_REQUEST", message: "You cannot delete your own account." });
      }
      await deleteImsUser(input.userId);
      return { success: true };
    }),

  // ── Change own password ──
  changePassword: imsProtectedProcedure
    .input(z.object({
      currentPassword: z.string().min(1),
      newPassword: z.string().min(6),
    }))
    .mutation(async ({ input, ctx }) => {
      const user = ctx.imsUser;
      const valid = await verifyPassword(input.currentPassword, user.passwordHash);
      if (!valid) {
        return { success: false, error: "Current password is incorrect" };
      }

      const newHash = await hashPassword(input.newPassword);
      await updateImsUser(user.id, { passwordHash: newHash });
      return { success: true };
    }),

  // ── Admin: Generate Magic Link (auditor / client only) ──
  generateMagicLink: imsAdminProcedure
    .input(z.object({
      userId: z.number().int().positive(),
      expiresInDays: z.number().int().min(1).max(90).default(30),
    }))
    .mutation(async ({ input, ctx }) => {
      const target = await getImsUserById(input.userId);
      if (!target) {
        throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });
      }
      if (!isMagicLinkRole(target.role)) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: `Magic-link sign-in is only available for external roles (${MAGIC_LINK_ROLES.join(", ")}).`,
        });
      }
      if (target.status !== "active") {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Cannot send magic link to an inactive user.",
        });
      }

      const token = randomBytes(32).toString("hex"); // 64-char hex
      const expiresAt = new Date(Date.now() + input.expiresInDays * 24 * 60 * 60 * 1000);

      await createMagicLinkToken({
        token,
        userId: target.id,
        expiresAt,
        usedAt: null,
        createdBy: ctx.imsUser.id,
      });

      const portalUrl = process.env.PORTAL_URL ?? "https://ims-portal.site";
      const magicLink = `${portalUrl.replace(/\/$/, "")}/auth/magic?token=${token}`;

      // Fire-and-forget email — log but never block on failure.
      sendMagicLinkEmail({
        to: target.email,
        fullName: target.fullName,
        magicLink,
        expiresAt,
      }).catch(err => {
        console.warn(`[MagicLink] Email send failed for token ${maskToken(token)} → ${target.email}:`, err?.message ?? err);
      });

      console.log(`[MagicLink] Generated token ${maskToken(token)} for user #${target.id} (${target.role}) by admin #${ctx.imsUser.id}`);

      return {
        success: true as const,
        magicLink, // admin-visible fallback if email fails
        expiresAt,
      };
    }),

  // ── Public: Redeem Magic Link → set ims_session cookie ──
  // We use a tRPC mutation rather than a plain Express route because the
  // existing imsAuth.login mutation already sets the session cookie via
  // ctx.res.cookie(...) — keeping both flows symmetrical avoids duplicating
  // cookie-option logic and lets the SPA reuse its tRPC client end-to-end.
  redeemMagicLink: publicProcedure
    .input(z.object({ token: z.string().regex(/^[a-f0-9]{64}$/i, "Invalid token format") }))
    .mutation(async ({ input, ctx }) => {
      const masked = maskToken(input.token);
      const row = await getMagicLinkToken(input.token);
      if (!row) {
        throw new TRPCError({ code: "NOT_FOUND", message: "This sign-in link is invalid." });
      }

      const now = new Date();
      if (row.usedAt) {
        throw new TRPCError({
          code: "FORBIDDEN", // tRPC has no GONE; FORBIDDEN is the closest semantic
          message: "This sign-in link has already been used. Please request a new one.",
        });
      }
      if (new Date(row.expiresAt).getTime() < now.getTime()) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "This sign-in link has expired. Please request a new one.",
        });
      }

      // Mark single-use BEFORE issuing the session — guarantees the row is
      // burned even if downstream calls fail. (Race-tolerant: a second click
      // will see usedAt set on the next read.)
      await markMagicLinkTokenUsed(input.token);

      const user = await getImsUserById(row.userId);
      if (!user) {
        throw new TRPCError({ code: "NOT_FOUND", message: "User account no longer exists." });
      }
      if (user.status !== "active") {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Your account has been deactivated. Contact your administrator.",
        });
      }
      // Defense in depth — only auditor/client can use magic links.
      if (!isMagicLinkRole(user.role)) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Magic-link sign-in is not available for this account.",
        });
      }

      const { token: sessionToken, expiresAt } = await createSessionToken(user);
      await updateImsUserLastSignedIn(user.id);

      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.cookie(IMS_COOKIE_NAME, sessionToken, {
        ...cookieOptions,
        maxAge: expiresAt.getTime() - Date.now(),
      });

      console.log(`[MagicLink] Redeemed token ${masked} → user #${user.id} (${user.role})`);

      return {
        success: true as const,
        user: {
          id: user.id,
          email: user.email,
          fullName: user.fullName,
          employeeId: user.employeeId,
          role: user.role,
          department: user.department,
          position: user.position,
          hrEmployeeUuid: user.hrEmployeeUuid,
        },
      };
    }),

  // ── Admin: link an IMS user to their HR Service record ──
  // Sets hrEmployeeUuid on the ims_users row. After this, the IMS portal
  // will fetch live HR data (name, dept, title, photo) from the HR Service
  // instead of relying solely on the local IMS copy.
  linkHrEmployee: imsAdminProcedure
    .input(z.object({
      userId: z.number().int().positive(),
      hrEmployeeUuid: z.string().uuid().nullable(),
    }))
    .mutation(async ({ input }) => {
      await updateImsUser(input.userId, { hrEmployeeUuid: input.hrEmployeeUuid ?? undefined });
      return { success: true as const };
    }),
});
