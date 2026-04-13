import { z } from "zod";
import { imsProtectedProcedure, router } from "../_core/trpc";
import { TRPCError } from "@trpc/server";
import { getDb } from "../db";
import { formResponses, approvalSteps } from "../../drizzle/schema";
import { eq, desc } from "drizzle-orm";
import { notifyOwner } from "../_core/notification";

// ── Workflow definition ──────────────────────────────────────────────────────
// Step 1: Supervisor Review  (role: supervisor or admin)
// Step 2: HSE Officer Approval (role: admin)
// Step 3: Closed

const WORKFLOW_STEPS = [
  { step: 1, label: "Supervisor Review",    requiredRoles: ["supervisor", "admin"] as string[], nextStatus: "pending_hse_approval" as const },
  { step: 2, label: "HSE Officer Approval", requiredRoles: ["admin"] as string[],              nextStatus: "closed" as const },
];

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
        const submissionId = `${input.formCode}-${Date.now()}`;
        const db = await getDb();
        if (!db) throw new Error("Database not available");

        await db.insert(formResponses).values({
          submissionId,
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
          content: `Submitted by ${ctx.imsUser.fullName ?? ctx.imsUser.email}. Pending Supervisor Review.\nID: ${submissionId}`,
        }).catch(() => {/* non-blocking */});

        return { success: true, submissionId };
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

      // Fetch submission
      const [submission] = await db
        .select()
        .from(formResponses)
        .where(eq(formResponses.submissionId, input.submissionId));

      if (!submission) throw new TRPCError({ code: "NOT_FOUND", message: "Submission not found" });
      if (submission.status === "closed") throw new TRPCError({ code: "BAD_REQUEST", message: "This submission is already closed" });

      const currentStep = WORKFLOW_STEPS.find(s => s.step === (submission.currentStep ?? 1));
      if (!currentStep) throw new TRPCError({ code: "BAD_REQUEST", message: "Invalid workflow step" });

      // Check actor has required role
      const actorRole = ctx.imsUser.role;
      if (!currentStep.requiredRoles.includes(actorRole)) {
        throw new TRPCError({ code: "FORBIDDEN", message: `Only a ${currentStep.requiredRoles.join(" or ")} can approve this step` });
      }

      // Record approval step
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

      // Advance workflow
      const nextStep = currentStep.step + 1;
      await db
        .update(formResponses)
        .set({ status: currentStep.nextStatus, currentStep: nextStep, updatedAt: new Date() })
        .where(eq(formResponses.submissionId, input.submissionId));

      // Notify owner of progress
      await notifyOwner({
        title:   `Form Approved — Step ${currentStep.step}: ${currentStep.label}`,
          content: `${submission.formTitle} (${input.submissionId}) approved by ${ctx.imsUser.fullName ?? ctx.imsUser.email}.\nStatus → ${currentStep.nextStatus}`,
      }).catch(() => {});

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
      if (!currentStep.requiredRoles.includes(actorRole)) {
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
          content: `${input.submissionId} returned by ${ctx.imsUser.fullName ?? ctx.imsUser.email}.\nReason: ${input.comment}`,
      }).catch(() => {});

      return { success: true, newStatus: "returned" };
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
  getSubmission: imsProtectedProcedure
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

      // Determine which statuses this role can act on
      const actionableStatuses: string[] = [];
      if (actorRole === "supervisor" || actorRole === "admin") {
        actionableStatuses.push("pending_supervisor_review");
      }
      if (actorRole === "admin") {
        actionableStatuses.push("pending_hse_approval");
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

  listAll: imsProtectedProcedure.query(async () => {
    const db = await getDb();
    if (!db) return [];
    const rows = await db
      .select()
      .from(formResponses)
      .orderBy(desc(formResponses.submittedAt));
    return rows.map(r => ({ ...r, responseData: JSON.parse(r.responseData ?? "{}") }));
  }),
});
