import { imsProtectedProcedure, router } from "../_core/trpc";
import { getDb } from "../db";
import { trainingCompletions } from "../../drizzle/schema";
import { eq, and } from "drizzle-orm";
import { z } from "zod";

export const educationRouter = router({
  /**
   * Record that the current user passed a training resource quiz.
   * Idempotent — if a record already exists for this user+resource, it returns the existing record.
   */
  recordCompletion: imsProtectedProcedure
    .input(
      z.object({
        resourceId: z.string().min(1).max(64),
        score: z.number().int().min(0).max(100).optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // External roles (auditor, client) cannot record training — quizzes
      // and competency tracking are for internal staff only.
      const role = ctx.imsUser.role;
      if (role === "auditor" || role === "client") {
        throw new Error("Training quizzes are for internal staff only");
      }
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      const userId = ctx.imsUser.id;

      // Check if already completed
      const existing = await db
        .select()
        .from(trainingCompletions)
        .where(
          and(
            eq(trainingCompletions.userId, userId),
            eq(trainingCompletions.resourceId, input.resourceId)
          )
        )
        .limit(1);

      if (existing.length > 0) {
        return { alreadyCompleted: true, completion: existing[0] };
      }

      // Insert new completion record
      await db.insert(trainingCompletions).values({
        userId,
        resourceId: input.resourceId,
        score: input.score ?? null,
      });

      const [completion] = await db
        .select()
        .from(trainingCompletions)
        .where(
          and(
            eq(trainingCompletions.userId, userId),
            eq(trainingCompletions.resourceId, input.resourceId)
          )
        )
        .limit(1);

      return { alreadyCompleted: false, completion };
    }),

  /**
   * Get all training completions for the current user.
   * Returns a map of resourceId → { passedAt, score, id }
   */
  getMyCompletions: imsProtectedProcedure.query(async ({ ctx }) => {
    const db = await getDb();
    if (!db) throw new Error("Database not available");
    const userId = ctx.imsUser.id;

    const completions = await db
      .select()
      .from(trainingCompletions)
      .where(eq(trainingCompletions.userId, userId));

    const map: Record<string, { passedAt: Date; score: number | null; id: number }> = {};
    for (const c of completions) {
      map[c.resourceId] = { passedAt: c.passedAt, score: c.score, id: c.id };
    }

    return map;
  }),

  /**
   * Admin only: get all completions for a specific resource.
   */
  getResourceCompletions: imsProtectedProcedure
    .input(z.object({ resourceId: z.string() }))
    .query(async ({ ctx, input }) => {
      if (ctx.imsUser.role !== "admin") {
        throw new Error("Admin only");
      }
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      return db
        .select()
        .from(trainingCompletions)
        .where(eq(trainingCompletions.resourceId, input.resourceId));
    }),
});
