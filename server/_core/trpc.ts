import { NOT_ADMIN_ERR_MSG, UNAUTHED_ERR_MSG } from '@shared/const';
import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import type { TrpcContext } from "./context";

const t = initTRPC.context<TrpcContext>().create({
  transformer: superjson,
});

export const router = t.router;
export const publicProcedure = t.procedure;

// Manus OAuth protected procedure (existing)
const requireUser = t.middleware(async opts => {
  const { ctx, next } = opts;

  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: UNAUTHED_ERR_MSG });
  }

  return next({
    ctx: {
      ...ctx,
      user: ctx.user,
    },
  });
});

export const protectedProcedure = t.procedure.use(requireUser);

export const adminProcedure = t.procedure.use(
  t.middleware(async opts => {
    const { ctx, next } = opts;

    if (!ctx.user || ctx.user.role !== 'admin') {
      throw new TRPCError({ code: "FORBIDDEN", message: NOT_ADMIN_ERR_MSG });
    }

    return next({
      ctx: {
        ...ctx,
        user: ctx.user,
      },
    });
  }),
);

// ── IMS Custom Auth Middleware ──
// Requires imsUser to be authenticated via email/password
const requireImsUser = t.middleware(async opts => {
  const { ctx, next } = opts;

  if (!ctx.imsUser) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Please log in to access this resource" });
  }

  if (ctx.imsUser.status !== "active") {
    throw new TRPCError({ code: "FORBIDDEN", message: "Your account has been deactivated" });
  }

  return next({
    ctx: {
      ...ctx,
      imsUser: ctx.imsUser,
    },
  });
});

export const imsProtectedProcedure = t.procedure.use(requireImsUser);

// IMS Admin — requires imsUser with admin role
export const imsAdminProcedure = t.procedure.use(
  t.middleware(async opts => {
    const { ctx, next } = opts;

    if (!ctx.imsUser || ctx.imsUser.role !== "admin") {
      throw new TRPCError({ code: "FORBIDDEN", message: "Admin access required" });
    }

    return next({
      ctx: {
        ...ctx,
        imsUser: ctx.imsUser,
      },
    });
  }),
);
