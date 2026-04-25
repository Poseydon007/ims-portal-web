import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import {
  getRegisterEntries,
  getRegisterEntryById,
  createRegisterEntry,
  updateRegisterEntry,
  bulkInsertRegisterEntries,
} from "./db";
import { z } from "zod";
import { imsAuthRouter } from "./routers/imsAuthRouter";
import { formSubmissionsRouter } from "./routers/formSubmissionsRouter";
import { educationRouter } from "./routers/educationRouter";

const _appRouterBase = router({
  system: systemRouter,
  imsAuth: imsAuthRouter,
  formSubmissions: formSubmissionsRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),
});

// ── IMS Master Register ──
const registerEntryInput = z.object({
  code: z.string().min(1).max(64),
  type: z.string().min(1).max(64),
  typeLabel: z.string().optional(),
  department: z.string().optional(),
  departmentLabel: z.string().optional(),
  seq: z.string().optional(),
  rev: z.string().optional(),
  title: z.string().min(1).max(512),
  format: z.string().optional(),
  status: z.enum(["ACTIVE", "RETIRED", "MERGED", "LEGACY"]).default("ACTIVE"),
  filename: z.string().optional(),
  note: z.string().optional(),
  viewUrl: z.string().optional(),
});

export const registerRouter = router({
  // Public: all logged-in users can list and search
  list: publicProcedure
    .input(z.object({
      search: z.string().optional(),
      type: z.string().optional(),
      department: z.string().optional(),
      status: z.string().optional(),
    }).optional())
    .query(async ({ input }) => {
      return getRegisterEntries(input ?? {});
    }),

  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      return getRegisterEntryById(input.id);
    }),

  // Admin only: create new entry
  create: publicProcedure
    .input(registerEntryInput)
    .mutation(async ({ input, ctx }) => {
      const imsUser = ctx.imsUser;
      if (!imsUser || imsUser.role !== "admin") throw new Error("Admin access required");
      return createRegisterEntry({
        ...input,
        typeLabel: input.typeLabel ?? null,
        departmentLabel: input.departmentLabel ?? null,
        seq: input.seq ?? null,
        rev: input.rev ?? null,
        format: input.format ?? null,
        filename: input.filename ?? null,
        note: input.note ?? null,
        viewUrl: input.viewUrl ?? null,
        createdByUserId: imsUser.id,
        updatedByUserId: imsUser.id,
      });
    }),

  // Admin only: update entry
  update: publicProcedure
    .input(z.object({ id: z.number() }).merge(registerEntryInput.partial()))
    .mutation(async ({ input, ctx }) => {
      const imsUser = ctx.imsUser;
      if (!imsUser || imsUser.role !== "admin") throw new Error("Admin access required");
      const { id, ...data } = input;
      await updateRegisterEntry(id, { ...data, updatedByUserId: imsUser.id });
      return { success: true };
    }),

  // Admin only: change status only
  changeStatus: publicProcedure
    .input(z.object({
      id: z.number(),
      status: z.enum(["ACTIVE", "RETIRED", "MERGED", "LEGACY"]),
    }))
    .mutation(async ({ input, ctx }) => {
      const imsUser = ctx.imsUser;
      if (!imsUser || imsUser.role !== "admin") throw new Error("Admin access required");
      await updateRegisterEntry(input.id, { status: input.status, updatedByUserId: imsUser.id });
      return { success: true };
    }),

  // Admin only: bulk seed from XLSX data
  bulkSeed: publicProcedure
    .input(z.array(z.object({
      code: z.string(),
      type: z.string(),
      typeLabel: z.string().optional(),
      department: z.string().optional(),
      departmentLabel: z.string().optional(),
      seq: z.string().optional(),
      rev: z.string().optional(),
      title: z.string(),
      format: z.string().optional(),
      status: z.enum(["ACTIVE", "RETIRED", "MERGED", "LEGACY"]),
      filename: z.string().optional(),
      note: z.string().optional(),
    })))
    .mutation(async ({ input, ctx }) => {
      const imsUser = ctx.imsUser;
      if (!imsUser || imsUser.role !== "admin") throw new Error("Admin access required");
      const entries = input.map(e => ({
        code: e.code,
        type: e.type,
        typeLabel: e.typeLabel ?? null,
        department: e.department ?? null,
        departmentLabel: e.departmentLabel ?? null,
        seq: e.seq ?? null,
        rev: e.rev ?? null,
        title: e.title,
        format: e.format ?? null,
        status: e.status,
        filename: e.filename ?? null,
        note: e.note ?? null,
        viewUrl: null,
        createdByUserId: imsUser.id,
        updatedByUserId: imsUser.id,
      }));
      const count = await bulkInsertRegisterEntries(entries);
      return { inserted: count };
    }),
});

export const appRouter = router({
  ..._appRouterBase._def.record,
  register: registerRouter,
  education: educationRouter,
});

export type AppRouter = typeof appRouter;

