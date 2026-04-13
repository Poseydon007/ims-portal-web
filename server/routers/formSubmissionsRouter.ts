import { z } from "zod";
import { protectedProcedure, router } from "../_core/trpc";
import { TRPCError } from "@trpc/server";
import { getDb } from "../db";
import { formResponses } from "../../drizzle/schema";
import { eq, desc } from "drizzle-orm";

// Generic form submission — accepts any form code + JSON data blob
const submitFormSchema = z.object({
  formCode: z.string(), // e.g. "TE-IMS-FRM-HSE-003"
  formTitle: z.string().optional(),
  data: z.record(z.unknown()), // full SurveyJS result data as JSON object
});

export const formSubmissionsRouter = router({
  // Submit any form — saves one row to the formResponses table
  submit: protectedProcedure
    .input(submitFormSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        const submissionId = `${input.formCode}-${Date.now()}`;

        const db = await getDb();
        if (!db) throw new Error("Database not available");
        await db.insert(formResponses).values({
          submissionId,
          formCode: input.formCode,
          formTitle: input.formTitle ?? input.formCode,
          responseData: JSON.stringify(input.data),
          submittedByUserId: ctx.user.id,
          submittedByName: ctx.user.name ?? ctx.user.email ?? ctx.user.openId,
          status: "submitted",
        });

        return {
          success: true,
          submissionId,
        };
      } catch (err) {
        console.error("[formSubmissions.submit] Error:", err);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to save form submission. Please try again.",
        });
      }
    }),

  // List all submissions for a specific form (admin only)
  listByForm: protectedProcedure
    .input(z.object({ formCode: z.string() }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) return [];
      const rows = await db
        .select()
        .from(formResponses)
        .where(eq(formResponses.formCode, input.formCode))
        .orderBy(desc(formResponses.submittedAt));
      return rows.map((r) => ({
        ...r,
        responseData: JSON.parse(r.responseData ?? "{}"),
      }));
    }),

  // List all submissions across all forms (admin only)
  listAll: protectedProcedure.query(async () => {
    const db = await getDb();
    if (!db) return [];
    const rows = await db
      .select()
      .from(formResponses)
      .orderBy(desc(formResponses.submittedAt));
    return rows.map((r) => ({
      ...r,
      responseData: JSON.parse(r.responseData ?? "{}"),
    }));
  }),
});
