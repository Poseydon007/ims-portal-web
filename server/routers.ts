import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import {
  createNearMissSubmission,
  getNearMissSubmissions,
  getNearMissSubmissionById,
  updateNearMissStatus,
  markSheetSynced,
  createJhaSubmission,
  getJhaSubmissions,
  getJhaSubmissionById,
  updateJhaStatus,
  markJhaSheetSynced,
  getRegisterEntries,
  getRegisterEntryById,
  createRegisterEntry,
  updateRegisterEntry,
  bulkInsertRegisterEntries,
} from "./db";
import { z } from "zod";
import { notifyOwner } from "./_core/notification";
import { exec } from "child_process";
import { promisify } from "util";
import { imsAuthRouter } from "./routers/imsAuthRouter";

const execAsync = promisify(exec);

const correctiveActionSchema = z.object({
  action: z.string(),
  responsible: z.string(),
  dueDate: z.string(),
  status: z.string(),
});

// ── Google Sheets sync helper ──
async function syncToGoogleSheet(submission: {
  submissionId: string;
  submittedAt: Date;
  status: string;
  dateOfOccurrence: string;
  timeOfOccurrence?: string | null;
  location?: string | null;
  departmentSite?: string | null;
  reportedBy: string;
  employeeId?: string | null;
  classification?: string | null;
  classificationOther?: string | null;
  description: string;
  contributingFactors?: string | null;
  contributingFactorsOther?: string | null;
  potentialSeverity?: string | null;
  potentialLikelihood?: string | null;
  correctiveActions?: string | null;
  supervisorName?: string | null;
  hseOfficerName?: string | null;
}) {
  try {
    const actions = submission.correctiveActions
      ? JSON.parse(submission.correctiveActions)
          .map((a: { action: string; responsible: string; dueDate: string; status: string }) =>
            `${a.action} (${a.responsible}, ${a.dueDate}, ${a.status})`
          )
          .join(" | ")
      : "";

    const row = [
      submission.submissionId,
      submission.submittedAt.toISOString(),
      submission.status,
      submission.submissionId,
      submission.dateOfOccurrence,
      submission.timeOfOccurrence ?? "",
      submission.location ?? "",
      submission.departmentSite ?? "",
      submission.reportedBy,
      submission.employeeId ?? "",
      submission.classification ?? "",
      submission.classificationOther ?? "",
      submission.description,
      submission.contributingFactors ?? "",
      submission.contributingFactorsOther ?? "",
      submission.potentialSeverity ?? "",
      submission.potentialLikelihood ?? "",
      actions,
      "",
      "",
      submission.supervisorName ?? "",
      submission.hseOfficerName ?? "",
    ];

    const rowJson = JSON.stringify(row);
    const cmd = `gws sheets spreadsheets values append --params '{"spreadsheetId":"1yF54b5SGJcl7avg0rq6a-JzSR4NJ3gmZl7vTi28B9Dg","range":"Near Miss Reports!A:V","valueInputOption":"RAW","insertDataOption":"INSERT_ROWS"}' --json '{"values":[${rowJson}]}'`;
    await execAsync(cmd);
    return true;
  } catch (err) {
    console.error("[Sheets Sync] Failed:", err);
    return false;
  }
}

const _appRouterBase = router({
  system: systemRouter,
  imsAuth: imsAuthRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  // ── Near Miss Form ──
  nearMiss: router({
    submit: publicProcedure
      .input(z.object({
        dateOfOccurrence: z.string().min(1),
        timeOfOccurrence: z.string().optional(),
        location: z.string().optional(),
        departmentSite: z.string().optional(),
        reportedBy: z.string().min(1),
        employeeId: z.string().optional(),
        classification: z.string().optional(),
        classificationOther: z.string().optional(),
        description: z.string().min(1),
        contributingFactors: z.string().optional(),
        contributingFactorsOther: z.string().optional(),
        potentialSeverity: z.string().optional(),
        potentialLikelihood: z.string().optional(),
        correctiveActions: z.array(correctiveActionSchema).optional(),
        supervisorName: z.string().optional(),
        supervisorDate: z.string().optional(),
        hseOfficerName: z.string().optional(),
        hseOfficerDate: z.string().optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        // Generate submission ID: NM-YYYY-XXXX
        const year = new Date().getFullYear();
        const rand = Math.floor(1000 + Math.random() * 9000);
        const submissionId = `NM-${year}-${rand}`;

        // Server-side identity: use IMS auth user if available
        const imsUser = ctx.imsUser;
        const reportedBy = imsUser ? imsUser.fullName : input.reportedBy;
        const employeeId = imsUser?.employeeId ?? input.employeeId ?? null;

        const submission = await createNearMissSubmission({
          submissionId,
          status: "submitted",
          dateOfOccurrence: input.dateOfOccurrence,
          timeOfOccurrence: input.timeOfOccurrence ?? null,
          location: input.location ?? null,
          departmentSite: input.departmentSite ?? null,
          reportedBy,
          employeeId,
          submittedByUserId: imsUser?.id ?? null,
          classification: input.classification ?? null,
          classificationOther: input.classificationOther ?? null,
          description: input.description,
          contributingFactors: input.contributingFactors ?? null,
          contributingFactorsOther: input.contributingFactorsOther ?? null,
          potentialSeverity: input.potentialSeverity ?? null,
          potentialLikelihood: input.potentialLikelihood ?? null,
          correctiveActions: input.correctiveActions
            ? JSON.stringify(input.correctiveActions)
            : null,
          supervisorName: input.supervisorName ?? null,
          supervisorDate: input.supervisorDate ?? null,
          hseOfficerName: input.hseOfficerName ?? null,
          hseOfficerDate: input.hseOfficerDate ?? null,
          sheetSynced: 0,
        });

        // Sync to Google Sheets asynchronously
        if (submission) {
          syncToGoogleSheet(submission).then(synced => {
            if (synced) markSheetSynced(submission.id);
          });

          // Notify owner
          await notifyOwner({
            title: `New Near Miss Report: ${submissionId}`,
            content: `Submitted by ${input.reportedBy} on ${input.dateOfOccurrence}. Location: ${input.location ?? "N/A"}. Description: ${input.description.substring(0, 120)}...`,
          });
        }

        return { success: true, submissionId };
      }),

    list: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user.role !== "admin") {
        throw new Error("Access denied");
      }
      return getNearMissSubmissions();
    }),

    getById: protectedProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input, ctx }) => {
        if (ctx.user.role !== "admin") throw new Error("Access denied");
        return getNearMissSubmissionById(input.id);
      }),

    updateStatus: protectedProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(["submitted", "under_review", "closed"]),
        supervisorName: z.string().optional(),
        supervisorDate: z.string().optional(),
        hseOfficerName: z.string().optional(),
        hseOfficerDate: z.string().optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user.role !== "admin") throw new Error("Access denied");
        await updateNearMissStatus(input.id, input.status, {
          supervisorName: input.supervisorName,
          supervisorDate: input.supervisorDate,
          hseOfficerName: input.hseOfficerName,
          hseOfficerDate: input.hseOfficerDate,
        });
        return { success: true };
      }),
  }),

  // ── JHA Form ──
  jha: router({
    submit: publicProcedure
      .input(z.object({
        jobTask: z.string().min(1),
        date: z.string().min(1),
        departmentSite: z.string().optional(),
        jhaNumber: z.string().optional(),
        supervisor: z.string().optional(),
        reviewedBy: z.string().optional(),
        taskSteps: z.array(z.object({
          step: z.number(),
          taskStep: z.string(),
          hazards: z.string(),
          initialRisk: z.string(),
          controls: z.string(),
          residualRisk: z.string(),
          responsible: z.string(),
        })).min(1),
        completedByName: z.string().optional(),
        completedByDate: z.string().optional(),
        reviewedByName: z.string().optional(),
        reviewedByDate: z.string().optional(),
        siteManagerName: z.string().optional(),
        siteManagerDate: z.string().optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        const year = new Date().getFullYear();
        const rand = Math.floor(1000 + Math.random() * 9000);
        const submissionId = `JHA-${year}-${rand}`;

        // Server-side identity: use IMS auth user if available
        const imsUser = ctx.imsUser;
        const completedByName = imsUser ? imsUser.fullName : (input.completedByName ?? null);

        const submission = await createJhaSubmission({
          submissionId,
          status: "submitted",
          jobTask: input.jobTask,
          date: input.date,
          departmentSite: input.departmentSite ?? null,
          jhaNumber: submissionId,
          supervisor: input.supervisor ?? null,
          reviewedBy: input.reviewedBy ?? null,
          taskSteps: JSON.stringify(input.taskSteps),
          completedByName,
          submittedByUserId: imsUser?.id ?? null,
          completedByDate: input.completedByDate ?? null,
          reviewedByName: input.reviewedByName ?? null,
          reviewedByDate: input.reviewedByDate ?? null,
          siteManagerName: input.siteManagerName ?? null,
          siteManagerDate: input.siteManagerDate ?? null,
          sheetSynced: 0,
        });

        // Sync to Google Sheets asynchronously
        if (submission) {
          try {
            const steps = input.taskSteps
              .map((s) => `${s.step}. ${s.taskStep} | Hazards: ${s.hazards} | Initial: ${s.initialRisk} | Controls: ${s.controls} | Residual: ${s.residualRisk} | Resp: ${s.responsible}`)
              .join(" || ");
            const row = [
              submissionId,
              submission.submittedAt.toISOString(),
              "submitted",
              input.jobTask,
              input.date,
              input.departmentSite ?? "",
              input.supervisor ?? "",
              input.reviewedBy ?? "",
              steps,
              input.completedByName ?? "",
              input.siteManagerName ?? "",
            ];
            const rowJson = JSON.stringify(row);
            const cmd = `gws sheets spreadsheets values append --params '{"spreadsheetId":"1yF54b5SGJcl7avg0rq6a-JzSR4NJ3gmZl7vTi28B9Dg","range":"JHA Submissions!A:K","valueInputOption":"RAW","insertDataOption":"INSERT_ROWS"}' --json '{"values":[${rowJson}]}'`;
            await execAsync(cmd);
            await markJhaSheetSynced(submission.id);
          } catch (err) {
            console.error("[Sheets Sync JHA] Failed:", err);
          }

          await notifyOwner({
            title: `New JHA Submitted: ${submissionId}`,
            content: `Job/Task: ${input.jobTask}. Date: ${input.date}. Site: ${input.departmentSite ?? "N/A"}. Steps: ${input.taskSteps.length}.`,
          });
        }

        return { success: true, submissionId };
      }),

    list: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user.role !== "admin") throw new Error("Access denied");
      return getJhaSubmissions();
    }),

    getById: protectedProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input, ctx }) => {
        if (ctx.user.role !== "admin") throw new Error("Access denied");
        return getJhaSubmissionById(input.id);
      }),

    updateStatus: protectedProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(["submitted", "under_review", "closed"]),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user.role !== "admin") throw new Error("Access denied");
        await updateJhaStatus(input.id, input.status);
        return { success: true };
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
});

export type AppRouter = typeof appRouter;

