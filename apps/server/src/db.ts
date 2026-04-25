import { and, desc, eq, like, or } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import {
  InsertUser,
  users,
  imsUsers, imsSessions,
  InsertImsUser, InsertImsSession, ImsUser,
  imsRegister, InsertImsRegisterEntry, ImsRegisterEntry,
} from "../drizzle/schema";
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

// ═══════════════════════════════════════════════════════════
// IMS Custom Auth — Users
// ═══════════════════════════════════════════════════════════

export async function createImsUser(data: InsertImsUser): Promise<ImsUser> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(imsUsers).values(data);
  const result = await db.select().from(imsUsers).where(eq(imsUsers.email, data.email)).limit(1);
  return result[0];
}

export async function getImsUserByEmail(email: string): Promise<ImsUser | null> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.select().from(imsUsers).where(eq(imsUsers.email, email.toLowerCase())).limit(1);
  return result[0] ?? null;
}

export async function getImsUserById(id: number): Promise<ImsUser | null> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.select().from(imsUsers).where(eq(imsUsers.id, id)).limit(1);
  return result[0] ?? null;
}

export async function getAllImsUsers(): Promise<ImsUser[]> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.select().from(imsUsers).orderBy(desc(imsUsers.createdAt));
}

export async function updateImsUser(id: number, data: Partial<Pick<ImsUser, "fullName" | "employeeId" | "role" | "department" | "status" | "passwordHash">>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(imsUsers).set(data).where(eq(imsUsers.id, id));
}

export async function updateImsUserLastSignedIn(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(imsUsers).set({ lastSignedIn: new Date() }).where(eq(imsUsers.id, id));
}

// ═══════════════════════════════════════════════════════════
// IMS Custom Auth — Sessions
// ═══════════════════════════════════════════════════════════

export async function createImsSession(data: InsertImsSession) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(imsSessions).values(data);
}

export async function getImsSessionByToken(token: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.select().from(imsSessions).where(eq(imsSessions.token, token)).limit(1);
  return result[0] ?? null;
}

export async function deleteImsSession(token: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(imsSessions).where(eq(imsSessions.token, token));
}

export async function deleteImsSessionsByUserId(userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(imsSessions).where(eq(imsSessions.userId, userId));
}

// ════════════════════════════════════════════════════════════
// IMS Master Document Register
// ════════════════════════════════════════════════════════════

export async function getRegisterEntries(opts?: { search?: string; type?: string; department?: string; status?: string }) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  let query = db.select().from(imsRegister).$dynamic();
  if (opts?.status) query = query.where(eq(imsRegister.status, opts.status as ImsRegisterEntry['status']));
  const results = await query.orderBy(imsRegister.code);
  // Apply search/type/department filters in JS (simpler than dynamic drizzle chaining)
  return results.filter(r => {
    if (opts?.type && r.type !== opts.type) return false;
    if (opts?.department && r.department !== opts.department) return false;
    if (opts?.search) {
      const s = opts.search.toLowerCase();
      return r.code.toLowerCase().includes(s) || r.title.toLowerCase().includes(s);
    }
    return true;
  });
}

export async function getRegisterEntryById(id: number): Promise<ImsRegisterEntry | null> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.select().from(imsRegister).where(eq(imsRegister.id, id)).limit(1);
  return result[0] ?? null;
}

export async function getRegisterEntryByCode(code: string): Promise<ImsRegisterEntry | null> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.select().from(imsRegister).where(eq(imsRegister.code, code)).limit(1);
  return result[0] ?? null;
}

export async function createRegisterEntry(data: InsertImsRegisterEntry): Promise<ImsRegisterEntry> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(imsRegister).values(data);
  const result = await db.select().from(imsRegister).where(eq(imsRegister.code, data.code)).limit(1);
  return result[0];
}

export async function updateRegisterEntry(id: number, data: Partial<Omit<ImsRegisterEntry, 'id' | 'createdAt' | 'createdByUserId'>>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(imsRegister).set(data).where(eq(imsRegister.id, id));
}

export async function bulkInsertRegisterEntries(entries: InsertImsRegisterEntry[]): Promise<number> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  // Insert in batches of 50
  let inserted = 0;
  for (let i = 0; i < entries.length; i += 50) {
    const batch = entries.slice(i, i + 50);
    await db.insert(imsRegister).values(batch).onDuplicateKeyUpdate({ set: { updatedAt: new Date() } });
    inserted += batch.length;
  }
  return inserted;
}
