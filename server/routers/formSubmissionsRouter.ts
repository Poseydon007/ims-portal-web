import { z } from "zod";
import { imsProtectedProcedure, publicProcedure, router } from "../_core/trpc";
import { TRPCError } from "@trpc/server";
import { getDb } from "../db";
import { formResponses, approvalSteps } from "../../drizzle/schema";
import { eq, desc, and, like, sql } from "drizzle-orm";
import { notifyOwner } from "../_core/notification";
import {
  notifyNewSubmission,
  notifyForwardedToHseManager,
  notifyForwardedToHse,
  notifyReturned,
  notifyClosed,
} from "../sendpulseEmail";
import { imsUsers } from "../../drizzle/schema";

// ── Workflow definition ──────────────────────────────────────────────────────
// Step 1: Supervisor Review      (role: supervisor or admin)
// Step 2: HSE Manager Review     (role: hse_manager or admin)
// Step 3: HSE Officer Approval   (role: admin)
// Step 4: Closed

const WORKFLOW_STEPS = [
  { step: 1, label: "Supervisor Review",    requiredRoles: ["supervisor", "admin"] as string[], nextStatus: "pending_hse_manager_review" as const },
  { step: 2, label: "HSE Manager Review",   requiredRoles: ["hse_manager", "admin"] as string[], nextStatus: "pending_hse_approval" as const },
  { step: 3, label: "HSE Officer Approval", requiredRoles: ["admin"] as string[],              nextStatus: "closed" as const },
];

// ── Report Number Prefix Map ─────────────────────────────────────────────────
// Maps formCode suffix → short prefix for the report number
// e.g. TE-IMS-FRM-HSE-003 → NM (Near Miss)
const FORM_CODE_PREFIX: Record<string, string> = {
  "TE-IMS-FRM-HSE-001": "JHA",
  "TE-IMS-FRM-HSE-002": "IFN",   // Incident Flash Notification
  "TE-IMS-FRM-HSE-003": "NM",
  "TE-IMS-FRM-HSE-004": "FAK",   // First Aid Kit Inspection
  "TE-IMS-FRM-HSE-006": "MTG",   // HSE Meeting Minutes
  "TE-IMS-FRM-HSE-007": "AUDIT",
  "TE-IMS-FRM-HSE-009": "T5",
  "TE-IMS-FRM-HSE-010": "CAPA",
  "TE-IMS-FRM-HSE-011": "PTW",
  "TE-IMS-FRM-HSE-012": "TOOL",
  "TE-IMS-FRM-HSE-013": "HIRA",
  "TE-IMS-FRM-HSE-014": "EMRG",
  "TE-IMS-FRM-HSE-015": "RISK",
  "TE-IMS-FRM-HSE-016": "PPE",
  "TE-IMS-FRM-HSE-017": "MHND",
  "TE-IMS-FRM-HSE-018": "ENV",
  "TE-IMS-FRM-HSE-019": "APPT",
  "TE-IMS-FRM-HSE-020": "FIRE",
  "TE-IMS-FRM-HSE-021": "EVAC",
  "TE-IMS-FRM-HSE-022": "INV",
  "TE-IMS-FRM-HSE-023": "STAT",
  "TE-IMS-FRM-HSE-024": "CHEM",
  "TE-IMS-FRM-HSE-025": "NOISE",
  "TE-IMS-FRM-HSE-026": "DUST",
  "TE-IMS-FRM-HSE-027": "HEAT",
  "TE-IMS-FRM-HSE-028": "FATG",
  "TE-IMS-FRM-HSE-029": "DRIV",
  "TE-IMS-FRM-HSE-030": "CONF",
  "TE-IMS-FRM-HSE-031": "LOTO",
  "TE-IMS-FRM-HSE-032": "TBT",
  "TE-IMS-FRM-HSE-033": "HOTW",
  "TE-IMS-FRM-HSE-034": "ELEC",
  "TE-IMS-FRM-HSE-035": "LIFT",
  "TE-IMS-FRM-HSE-036": "WAH",
  "TE-IMS-FRM-HSE-037": "SPILL",
  "TE-IMS-FRM-HSE-039": "WASTE",
  "TE-IMS-FRM-HSE-040": "REHAB",
  "TE-IMS-FRM-LOG-001": "LOG",
  "TE-IMS-FRM-LOG-002": "JRN",
  "TE-IMS-FRM-MAINT-001": "MAINT",
  "TE-IMS-FRM-MAINT-002": "MAINT",
  "TE-IMS-FRM-MAINT-003": "MAINT",
  "TE-IMS-FRM-OPS-001": "OPS",
  "TE-IMS-FRM-OPS-002": "OPS",
  "TE-IMS-FRM-SEC-001": "SEC",
  "TE-IMS-FRM-SEC-002": "SEC",
  "TE-IMS-FRM-SYS-001": "SYS",
  "TE-IMS-FRM-SYS-002": "SYS",
  "TE-IMS-FRM-SYS-003": "SYS",
  "TE-IMS-FRM-SYS-005": "SYS",
  "TE-IMS-FRM-SYS-006": "SYS",
  "TE-IMS-FRM-TRN-002": "TRN",
  "TE-IMS-FRM-TRN-003": "TRN",
};

/**
 * Generate a sequential, human-readable report number.
 * Format: {PREFIX}-{YEAR}-{SEQ:03d}
 * e.g. NM-2026-001, NM-2026-002, ...
 * Sequence resets each year per formCode.
 */
async function generateReportNumber(db: Awaited<ReturnType<typeof getDb>>, formCode: string): Promise<string> {
  if (!db) throw new Error("DB not available");
  const prefix = FORM_CODE_PREFIX[formCode] ?? "RPT";
  const year = new Date().getFullYear();
  const pattern = `${prefix}-${year}-%`;

  // Count existing report numbers with this prefix+year
  const [row] = await db
    .select({ cnt: sql<number>`COUNT(*)` })
    .from(formResponses)
    .where(like(formResponses.reportNumber, pattern));

  const seq = (Number(row?.cnt ?? 0) + 1);
  return `${prefix}-${year}-${String(seq).padStart(3, "0")}`;
}

// ── Schemas ──────────────────────────────────────────────────────────────────
const submitFormSchema = z.object({
  formCode:  z.string(),
  formTitle: z.string().optional(),
  data:      z.string(), // JSON-serialized SurveyJS result data
});

const approveSchema = z.object({
  submissionId: z.string(),
  comment:      z.string().optional(),
});

const returnSchema = z.object({
  submissionId: z.string(),
  comment:      z.string().min(1, "A comment is required when returning a form"),
});

// ── Router ───────────────────────────────────────────────────────────────────
export const formSubmissionsRouter = router({

  // ── Submit ────────────────────────────────────────────────────────────────
  submit: imsProtectedProcedure
    .input(submitFormSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        const db = await getDb();
        if (!db) throw new Error("Database not available");

        const submissionId   = `${input.formCode}-${Date.now()}`;
        const reportNumber   = await generateReportNumber(db, input.formCode);

        await db.insert(formResponses).values({
          submissionId,
          reportNumber,
          formCode:          input.formCode,
          formTitle:         input.formTitle ?? input.formCode,
          responseData:      input.data,
          status:            "pending_supervisor_review",
          currentStep:       1,
          submittedByUserId: ctx.imsUser.id,
          submittedByName:   ctx.imsUser.fullName ?? ctx.imsUser.email,
        });

        // Notify owner (admin) that a new submission is pending review
        await notifyOwner({
          title:   `New Form Submission — ${input.formTitle ?? input.formCode}`,
          content: `Submitted by ${ctx.imsUser.fullName ?? ctx.imsUser.email}. Pending Supervisor Review.\nReport No: ${reportNumber}\nID: ${submissionId}`,
        }).catch(() => {/* non-blocking */});

        // Email all supervisors and admins about the new submission
        const portalUrl = process.env.PORTAL_URL ?? "https://ims.tru-east.com";
        const reviewers = await db
          .select({ fullName: imsUsers.fullName, email: imsUsers.email })
          .from(imsUsers)
          .where(sql`${imsUsers.role} IN ('supervisor', 'admin')`);

        for (const reviewer of reviewers) {
          if (!reviewer.email) continue;
          notifyNewSubmission({
            supervisorName:  reviewer.fullName,
            supervisorEmail: reviewer.email,
            reportNumber,
            formTitle:       input.formTitle ?? input.formCode,
            submittedByName: ctx.imsUser.fullName ?? ctx.imsUser.email,
            submittedAt:     new Date().toLocaleString("en-SA", { timeZone: "Asia/Riyadh" }),
            portalUrl,
          }).catch(() => {});
        }

        return { success: true, submissionId, reportNumber };
      } catch (err) {
        console.error("[formSubmissions.submit] Error:", err);
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to save form submission. Please try again." });
      }
    }),

  // ── Approve ───────────────────────────────────────────────────────────────
  approve: imsProtectedProcedure
    .input(approveSchema)
    .mutation(async ({ input, ctx }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database not available" });

      const [submission] = await db
        .select()
        .from(formResponses)
        .where(eq(formResponses.submissionId, input.submissionId));

      if (!submission) throw new TRPCError({ code: "NOT_FOUND", message: "Submission not found" });
      if (submission.status === "closed") throw new TRPCError({ code: "BAD_REQUEST", message: "This submission is already closed" });

      const currentStep = WORKFLOW_STEPS.find(s => s.step === (submission.currentStep ?? 1));
      if (!currentStep) throw new TRPCError({ code: "BAD_REQUEST", message: "Invalid workflow step" });

      const actorRole = ctx.imsUser.role;
      // Admin can approve any step — they have full override authority
      if (actorRole !== "admin" && !currentStep.requiredRoles.includes(actorRole)) {
        throw new TRPCError({ code: "FORBIDDEN", message: `Only a ${currentStep.requiredRoles.join(" or ")} can approve this step` });
      }

      await db.insert(approvalSteps).values({
        submissionId: input.submissionId,
        step:         currentStep.step,
        stepLabel:    currentStep.label,
        action:       "approved",
        actorUserId:  ctx.imsUser.id,
        actorName:    ctx.imsUser.fullName ?? ctx.imsUser.email,
        actorRole,
        comment:      input.comment ?? null,
      });

      const nextStep = currentStep.step + 1;
      await db
        .update(formResponses)
        .set({ status: currentStep.nextStatus, currentStep: nextStep, updatedAt: new Date() })
        .where(eq(formResponses.submissionId, input.submissionId));

      await notifyOwner({
        title:   `Form Approved — Step ${currentStep.step}: ${currentStep.label}`,
        content: `${submission.formTitle} (${submission.reportNumber ?? input.submissionId}) approved by ${ctx.imsUser.fullName ?? ctx.imsUser.email}.\nStatus → ${currentStep.nextStatus}`,
      }).catch(() => {});

      // Send email notifications based on the step
      const portalUrl2 = process.env.PORTAL_URL ?? "https://ims.tru-east.com";
      const approvedAt = new Date().toLocaleString("en-SA", { timeZone: "Asia/Riyadh" });
      const rptNo = submission.reportNumber ?? input.submissionId;

      if (currentStep.nextStatus === "pending_hse_manager_review") {
        // Step 1 approved — notify all HSE Managers
        const hseManagers = await db
          .select({ fullName: imsUsers.fullName, email: imsUsers.email })
          .from(imsUsers)
          .where(sql`${imsUsers.role} IN ('hse_manager', 'admin')`);
        for (const mgr of hseManagers) {
          if (!mgr.email) continue;
          notifyForwardedToHseManager({
            hseManagerName:  mgr.fullName,
            hseManagerEmail: mgr.email,
            reportNumber:    rptNo,
            formTitle:       submission.formTitle ?? input.submissionId,
            submittedByName: submission.submittedByName ?? "Unknown",
            supervisorName:  ctx.imsUser.fullName ?? ctx.imsUser.email,
            approvedAt,
            portalUrl: portalUrl2,
          }).catch(() => {});
        }
      } else if (currentStep.nextStatus === "pending_hse_approval") {
        // Step 2 approved — notify all admins (HSE Officers)
        const admins = await db
          .select({ fullName: imsUsers.fullName, email: imsUsers.email })
          .from(imsUsers)
          .where(eq(imsUsers.role, "admin"));
        for (const admin of admins) {
          if (!admin.email) continue;
          notifyForwardedToHse({
            hseOfficerName:  admin.fullName,
            hseOfficerEmail: admin.email,
            reportNumber:    rptNo,
            formTitle:       submission.formTitle ?? input.submissionId,
            submittedByName: submission.submittedByName ?? "Unknown",
            supervisorName:  ctx.imsUser.fullName ?? ctx.imsUser.email,
            approvedAt,
            portalUrl: portalUrl2,
          }).catch(() => {});
        }
      } else if (currentStep.nextStatus === "closed") {
        // Step 2 approved — notify the original submitter
        if (submission.submittedByUserId) {
          const [submitter] = await db
            .select({ fullName: imsUsers.fullName, email: imsUsers.email })
            .from(imsUsers)
            .where(eq(imsUsers.id, submission.submittedByUserId));
          if (submitter?.email) {
            notifyClosed({
              submitterName:  submitter.fullName,
              submitterEmail: submitter.email,
              reportNumber:   rptNo,
              formTitle:      submission.formTitle,
              closedByName:   ctx.imsUser.fullName ?? ctx.imsUser.email,
              closedAt:       approvedAt,
              portalUrl: portalUrl2,
            }).catch(() => {});
          }
        }
      }

      return { success: true, newStatus: currentStep.nextStatus };
    }),

  // ── Return for Correction ─────────────────────────────────────────────────
  returnForCorrection: imsProtectedProcedure
    .input(returnSchema)
    .mutation(async ({ input, ctx }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database not available" });

      const [submission] = await db
        .select()
        .from(formResponses)
        .where(eq(formResponses.submissionId, input.submissionId));

      if (!submission) throw new TRPCError({ code: "NOT_FOUND", message: "Submission not found" });

      const currentStep = WORKFLOW_STEPS.find(s => s.step === (submission.currentStep ?? 1));
      if (!currentStep) throw new TRPCError({ code: "BAD_REQUEST", message: "Invalid workflow step" });

      const actorRole = ctx.imsUser.role;
      // Admin can return any step — full override authority
      if (actorRole !== "admin" && !currentStep.requiredRoles.includes(actorRole)) {
        throw new TRPCError({ code: "FORBIDDEN", message: "You do not have permission to return this submission" });
      }

      await db.insert(approvalSteps).values({
        submissionId: input.submissionId,
        step:         currentStep.step,
        stepLabel:    currentStep.label,
        action:       "returned",
        actorUserId:  ctx.imsUser.id,
        actorName:    ctx.imsUser.fullName ?? ctx.imsUser.email,
        actorRole,
        comment:      input.comment,
      });

      await db
        .update(formResponses)
        .set({ status: "returned", currentStep: 1, updatedAt: new Date() })
        .where(eq(formResponses.submissionId, input.submissionId));

      await notifyOwner({
        title:   `Form Returned — ${submission.formTitle}`,
        content: `${submission.reportNumber ?? input.submissionId} returned by ${ctx.imsUser.fullName ?? ctx.imsUser.email}.\nReason: ${input.comment}`,
      }).catch(() => {});

      // Email the original submitter about the return
      if (submission.submittedByUserId) {
        const portalUrl3 = process.env.PORTAL_URL ?? "https://ims.tru-east.com";
        const [submitter] = await db
          .select({ fullName: imsUsers.fullName, email: imsUsers.email })
          .from(imsUsers)
          .where(eq(imsUsers.id, submission.submittedByUserId));
        if (submitter?.email) {
          notifyReturned({
            submitterName:  submitter.fullName,
            submitterEmail: submitter.email,
            reportNumber:   submission.reportNumber ?? input.submissionId,
            formTitle:      submission.formTitle,
            returnedByName: ctx.imsUser.fullName ?? ctx.imsUser.email,
            returnedByRole: ctx.imsUser.role,
            comment:        input.comment,
            returnedAt:     new Date().toLocaleString("en-SA", { timeZone: "Asia/Riyadh" }),
            portalUrl: portalUrl3,
          }).catch(() => {});
        }
      }

      return { success: true, newStatus: "returned" };
    }),

  // ── Admin: Update Report Number ───────────────────────────────────────────
  updateReportNumber: imsProtectedProcedure
    .input(z.object({
      submissionId: z.string(),
      reportNumber: z.string().min(1).max(32),
    }))
    .mutation(async ({ input, ctx }) => {
      if (ctx.imsUser.role !== "admin") {
        throw new TRPCError({ code: "FORBIDDEN", message: "Only admins can modify report numbers" });
      }
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database not available" });

      // Check uniqueness
      const [existing] = await db
        .select()
        .from(formResponses)
        .where(and(
          eq(formResponses.reportNumber, input.reportNumber),
        ));
      if (existing && existing.submissionId !== input.submissionId) {
        throw new TRPCError({ code: "CONFLICT", message: `Report number ${input.reportNumber} is already in use` });
      }

      await db
        .update(formResponses)
        .set({ reportNumber: input.reportNumber, updatedAt: new Date() })
        .where(eq(formResponses.submissionId, input.submissionId));

      return { success: true };
    }),

  // ── Admin: Delete Submission ──────────────────────────────────────────────
  deleteSubmission: imsProtectedProcedure
    .input(z.object({ submissionId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      if (ctx.imsUser.role !== "admin") {
        throw new TRPCError({ code: "FORBIDDEN", message: "Only admins can delete submissions" });
      }
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database not available" });

      // Delete approval steps first (FK)
      await db
        .delete(approvalSteps)
        .where(eq(approvalSteps.submissionId, input.submissionId));

      // Delete the submission
      await db
        .delete(formResponses)
        .where(eq(formResponses.submissionId, input.submissionId));

      return { success: true };
    }),

  // ── Get Approval History for a submission ─────────────────────────────────
  getApprovalHistory: imsProtectedProcedure
    .input(z.object({ submissionId: z.string() }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) return [];
      return db
        .select()
        .from(approvalSteps)
        .where(eq(approvalSteps.submissionId, input.submissionId))
        .orderBy(approvalSteps.actionAt);
    }),

  // ── Get single submission with approval history ───────────────────────────
  // Uses publicProcedure so the print/PDF view works without IMS re-auth.
  // Security: submissionId is a long unique string (TE-IMS-FRM-HSE-003-{timestamp}) that cannot be guessed.
  getSubmission: publicProcedure
    .input(z.object({ submissionId: z.string() }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database not available" });

      const [submission] = await db
        .select()
        .from(formResponses)
        .where(eq(formResponses.submissionId, input.submissionId));

      if (!submission) throw new TRPCError({ code: "NOT_FOUND", message: "Submission not found" });

      const history = await db
        .select()
        .from(approvalSteps)
        .where(eq(approvalSteps.submissionId, input.submissionId))
        .orderBy(approvalSteps.actionAt);

      return {
        ...submission,
        responseData: JSON.parse(submission.responseData ?? "{}"),
        approvalHistory: history,
      };
    }),

  // ── List pending approvals for the current user's role ────────────────────
  listPendingApprovals: imsProtectedProcedure
    .query(async ({ ctx }) => {
      const db = await getDb();
      if (!db) return [];

      const actorRole = ctx.imsUser.role;

      const actionableStatuses: string[] = [];
      if (actorRole === "supervisor" || actorRole === "admin") {
        actionableStatuses.push("pending_supervisor_review");
      }
      if (actorRole === "hse_manager" || actorRole === "admin") {
        actionableStatuses.push("pending_hse_manager_review");
      }
      if (actorRole === "admin") {
        actionableStatuses.push("pending_hse_approval");
        actionableStatuses.push("returned");
      }

      if (actionableStatuses.length === 0) return [];

      const rows = await db
        .select()
        .from(formResponses)
        .orderBy(desc(formResponses.submittedAt));

      return rows
        .filter(r => actionableStatuses.includes(r.status))
        .map(r => ({
          submissionId:    r.submissionId,
          reportNumber:    r.reportNumber,
          formCode:        r.formCode,
          formTitle:       r.formTitle,
          status:          r.status,
          currentStep:     r.currentStep,
          submittedByName: r.submittedByName,
          submittedAt:     r.submittedAt,
        }));
    }),

  // ── List all submissions (admin view) ─────────────────────────────────────
  listByForm: imsProtectedProcedure
    .input(z.object({ formCode: z.string() }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) return [];
      const rows = await db
        .select()
        .from(formResponses)
        .where(eq(formResponses.formCode, input.formCode))
        .orderBy(desc(formResponses.submittedAt));
      return rows.map(r => ({ ...r, responseData: JSON.parse(r.responseData ?? "{}") }));
    }),

  // ── Pre-generate a report number when form opens (read-only display before submit) ──
  preGenerateReportNumber: imsProtectedProcedure
    .input(z.object({ formCode: z.string() }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Database not available" });
      const reportNumber = await generateReportNumber(db, input.formCode);
      return { reportNumber };
    }),

  listAll: imsProtectedProcedure.query(async ({ ctx }) => {
    if (ctx.imsUser.role !== "admin") {
      throw new TRPCError({ code: "FORBIDDEN", message: "Admin access required." });
    }
    const db = await getDb();
    if (!db) return [];
    const rows = await db
      .select()
      .from(formResponses)
      .orderBy(desc(formResponses.submittedAt));
    return rows.map(r => ({
      submissionId:    r.submissionId,
      reportNumber:    r.reportNumber,
      formCode:        r.formCode,
      formTitle:       r.formTitle,
      status:          r.status,
      submittedByName: r.submittedByName,
      submittedAt:     r.submittedAt,
    }));
  }),

  listAllWithData: imsProtectedProcedure.query(async ({ ctx }) => {
    if (ctx.imsUser.role !== "admin") {
      throw new TRPCError({ code: "FORBIDDEN", message: "Admin access required." });
    }
    const db = await getDb();
    if (!db) return [];
    const rows = await db
      .select()
      .from(formResponses)
      .orderBy(desc(formResponses.submittedAt));
    return rows.map(r => {
      let parsed: Record<string, unknown> = {};
      try { parsed = JSON.parse(r.responseData ?? "{}"); } catch { /* ignore */ }
      return {
        submissionId:    r.submissionId,
        reportNumber:    r.reportNumber,
        formCode:        r.formCode,
        formTitle:       r.formTitle,
        status:          r.status,
        submittedByName: r.submittedByName,
        submittedAt:     r.submittedAt,
        responseData:    parsed,
      };
    });
  }),
});
