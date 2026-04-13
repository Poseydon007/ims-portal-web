// IMS Auth Router — email/password login, logout, me, user management
import { z } from "zod";
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
  createImsUser,
  getAllImsUsers,
  updateImsUser,
  updateImsUserLastSignedIn,
  deleteImsSession,
  deleteImsSessionsByUserId,
} from "../db";

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
      password: z.string().min(6, "Password must be at least 6 characters"),
      fullName: z.string().min(1),
      employeeId: z.string().optional(),
      role: z.enum(["admin", "supervisor", "field_worker"]),
      department: z.string().optional(),
      position: z.string().optional(),
    }))
    .mutation(async ({ input }) => {
      // Check if email already exists
      const existing = await getImsUserByEmail(input.email.toLowerCase());
      if (existing) {
        return { success: false, error: "A user with this email already exists" };
      }

      const passwordHash = await hashPassword(input.password);
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
      role: z.enum(["admin", "supervisor", "field_worker"]).optional(),
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
});
