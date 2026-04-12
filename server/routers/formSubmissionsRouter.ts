import { z } from "zod";
import { protectedProcedure, router } from "../_core/trpc";
import { appendFormSubmission, getOrCreateSheet, getSheetUrl } from "../googleSheets";
import { TRPCError } from "@trpc/server";

// Generic form submission — accepts any form code + field map
const submitFormSchema = z.object({
  formCode: z.string(), // e.g. "TE-IMS-FRM-HSE-001"
  headers: z.array(z.string()), // column headers matching form fields
  values: z.array(z.union([z.string(), z.number(), z.null()])), // row values
});

export const formSubmissionsRouter = router({
  // Submit any form — appends one row to the form's Google Sheet register
  submit: protectedProcedure
    .input(submitFormSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        // Prepend submission metadata columns
        const allHeaders = [
          "Submission ID",
          "Submitted By",
          "Submitted At",
          ...input.headers,
        ];
        const submissionId = `${input.formCode}-${Date.now()}`;
        const allValues = [
          submissionId,
          ctx.user.name || ctx.user.email || ctx.user.openId,
          new Date().toISOString(),
          ...input.values,
        ];

        const result = await appendFormSubmission(
          input.formCode,
          allHeaders,
          allValues
        );

        return {
          success: true,
          submissionId,
          spreadsheetId: result.spreadsheetId,
          sheetUrl: getSheetUrl(result.spreadsheetId),
        };
      } catch (err) {
        console.error("[formSubmissions.submit] Error:", err);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to save form submission. Please try again.",
        });
      }
    }),

  // Get the Google Sheets URL for a specific form's register
  getRegisterUrl: protectedProcedure
    .input(z.object({ formCode: z.string(), headers: z.array(z.string()) }))
    .query(async ({ input }) => {
      try {
        const spreadsheetId = await getOrCreateSheet(
          input.formCode,
          ["Submission ID", "Submitted By", "Submitted At", ...input.headers]
        );
        return {
          spreadsheetId,
          sheetUrl: getSheetUrl(spreadsheetId),
        };
      } catch (err) {
        console.error("[formSubmissions.getRegisterUrl] Error:", err);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to retrieve register URL.",
        });
      }
    }),
});
