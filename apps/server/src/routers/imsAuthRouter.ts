// IMS Auth Router — email/password login, logout, me, user management
import { randomBytes } from "crypto";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { and, eq, isNull, gt } from "drizzle-orm";
import { parse as parseCookie } from "cookie";
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
  getDb,
} from "../db";
import { magicLinkTokens } from "../../drizzle/schema";
import { sendMagicLinkEmail } from "../sendpulseEmail";

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
      // password is optional for auditor/client (they sign in via magic link only)
      password: z.string().min(6, "Password must be at least 6 characters").optional(),
      fullName: z.string().min(1),
      employeeId: z.string().optional(),
      role: z.enum(["admin", "hse_manager", "supervisor", "field_worker", "auditor", "client"]),
      department: z.string().optional(),
      position: z.string().optional(),
    }))
    .mutation(async ({ input }) => {
      // Check if email already exists
      const existing = await getImsUserByEmail(input.email.toLowerCase());
      if (existing) {
        return { success: false, error: "A user with this email already exists" };
      }

      const isMagicLinkRole = input.role === "auditor" || input.role === "client";

      if (!isMagicLinkRole && !input.password) {
        return { success: false, error: "Password is required for this role" };
      }

      // For auditor/client: generate an unusable password hash so the NOT NULL column stays satisfied.
      // Nobody knows the plaintext — these users authenticate exclusively via magic link.
      const passwordHash = isMagicLinkRole && !input.password
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
      role: z.enum(["admin", "hse_manager", "supervisor", "field_worker", "auditor", "client"]).optional(),
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

  // ── Admin: Generate & email a magic sign-in link (auditor/client only) ──
  generateMagicLink: imsAdminProcedure
    .input(z.object({ userId: z.number().int() }))
    .mutation(async ({ input }) => {
      const target = await getImsUserById(input.userId);
      if (!target) {
        throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });
      }
      if (target.role !== "auditor" && target.role !== "client") {
        throw new TRPCError({ code: "BAD_REQUEST", message: "Magic links are only for auditor or client roles" });
      }
      if (target.status !== "active") {
        throw new TRPCError({ code: "BAD_REQUEST", message: "Cannot send a magic link to an inactive user" });
      }

      const token = randomBytes(32).toString("hex"); // 64 hex chars
      const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days

      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database not available" });

      // Delete any existing unused tokens for this user (cleanup)
      await db.delete(magicLinkTokens)
        .where(and(eq(magicLinkTokens.userId, input.userId), isNull(magicLinkTokens.usedAt)));

      // Insert new token
      await db.insert(magicLinkTokens).values({
        token,
        userId: input.userId,
        expiresAt,
      });

      const portalUrl = process.env.PORTAL_URL ?? "https://ims-portal.site";
      const magicLink = `${portalUrl}/auth/magic?token=${token}`;

      // Send email — non-blocking: if it fails the admin still gets the link back
      sendMagicLinkEmail({
        to: target.email,
        fullName: target.fullName,
        magicLink,
        expiresAt,
      }).catch((err: unknown) => {
        console.error("[generateMagicLink] Email send failed:", err instanceof Error ? err.message : err);
      });

      return { magicLink };
    }),

  // ── Public: Redeem a magic link token and open a session ──
  redeemMagicLink: publicProcedure
    .input(z.object({ token: z.string().min(1).max(64) }))
    .mutation(async ({ input, ctx }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database not available" });

      // Find valid, unused, non-expired token
      const now = new Date();
      const rows = await db.select().from(magicLinkTokens)
        .where(
          and(
            eq(magicLinkTokens.token, input.token),
            isNull(magicLinkTokens.usedAt),
            gt(magicLinkTokens.expiresAt, now),
          )
        )
        .limit(1);

      if (rows.length === 0) {
        throw new TRPCError({ code: "UNAUTHORIZED", message: "Invalid or expired sign-in link." });
      }

      const linkRow = rows[0];

      // Mark token as used
      await db.update(magicLinkTokens)
        .set({ usedAt: now })
        .where(eq(magicLinkTokens.id, linkRow.id));

      // Fetch user
      const user = await getImsUserById(linkRow.userId);
      if (!user || user.status !== "active") {
        throw new TRPCError({ code: "UNAUTHORIZED", message: "Invalid or expired sign-in link." });
      }

      // Update last signed in
      await updateImsUserLastSignedIn(user.id);

      // Create session token (JWT + DB row) — same as login mutation
      const { token: sessionToken, expiresAt } = await createSessionToken(user);

      // Set session cookie — same name, flags, and expiry as login
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.cookie(IMS_COOKIE_NAME, sessionToken, {
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
});
