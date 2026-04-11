import { desc, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertJhaSubmission, InsertNearMissSubmission, InsertUser, jhaSubmissions, nearMissSubmissions, users } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) throw new Error("User openId is required for upsert");
  const db = await getDb();
  if (!db) { console.warn("[Database] Cannot upsert user: database not available"); return; }
  try {
    const values: InsertUser = { openId: user.openId };
    const updateSet: Record<string, unknown> = {};
    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];
    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };
    textFields.forEach(assignNullable);
    if (user.lastSignedIn !== undefined) { values.lastSignedIn = user.lastSignedIn; updateSet.lastSignedIn = user.lastSignedIn; }
    if (user.role !== undefined) { values.role = user.role; updateSet.role = user.role; }
    else if (user.openId === ENV.ownerOpenId) { values.role = 'admin'; updateSet.role = 'admin'; }
    if (!values.lastSignedIn) values.lastSignedIn = new Date();
    if (Object.keys(updateSet).length === 0) updateSet.lastSignedIn = new Date();
    await db.insert(users).values(values).onDuplicateKeyUpdate({ set: updateSet });
  } catch (error) { console.error("[Database] Failed to upsert user:", error); throw error; }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) { console.warn("[Database] Cannot get user: database not available"); return undefined; }
  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

// ── Near Miss Submissions ──

export async function createNearMissSubmission(data: InsertNearMissSubmission) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(nearMissSubmissions).values(data);
  const result = await db.select().from(nearMissSubmissions)
    .where(eq(nearMissSubmissions.submissionId, data.submissionId)).limit(1);
  return result[0];
}

export async function getNearMissSubmissions() {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.select().from(nearMissSubmissions).orderBy(desc(nearMissSubmissions.submittedAt));
}

export async function getNearMissSubmissionById(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.select().from(nearMissSubmissions)
    .where(eq(nearMissSubmissions.id, id)).limit(1);
  return result[0] ?? null;
}

export async function updateNearMissStatus(id: number, status: "submitted" | "under_review" | "closed", reviewData?: { supervisorName?: string; supervisorDate?: string; hseOfficerName?: string; hseOfficerDate?: string }) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(nearMissSubmissions)
    .set({ status, ...reviewData })
    .where(eq(nearMissSubmissions.id, id));
}

export async function markSheetSynced(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(nearMissSubmissions).set({ sheetSynced: 1 }).where(eq(nearMissSubmissions.id, id));
}

// ── JHA Submissions ──

export async function createJhaSubmission(data: InsertJhaSubmission) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(jhaSubmissions).values(data);
  const result = await db.select().from(jhaSubmissions)
    .where(eq(jhaSubmissions.submissionId, data.submissionId)).limit(1);
  return result[0];
}

export async function getJhaSubmissions() {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.select().from(jhaSubmissions).orderBy(desc(jhaSubmissions.submittedAt));
}

export async function getJhaSubmissionById(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.select().from(jhaSubmissions)
    .where(eq(jhaSubmissions.id, id)).limit(1);
  return result[0] ?? null;
}

export async function updateJhaStatus(id: number, status: "submitted" | "under_review" | "closed") {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(jhaSubmissions).set({ status }).where(eq(jhaSubmissions.id, id));
}

export async function markJhaSheetSynced(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(jhaSubmissions).set({ sheetSynced: 1 }).where(eq(jhaSubmissions.id, id));
}
