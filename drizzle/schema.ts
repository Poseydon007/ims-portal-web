import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// ── Near Miss Report Submissions ──
export const nearMissSubmissions = mysqlTable("near_miss_submissions", {
  id: int("id").autoincrement().primaryKey(),
  submissionId: varchar("submissionId", { length: 32 }).notNull().unique(), // e.g. NM-2026-0001
  status: mysqlEnum("status", ["submitted", "under_review", "closed"]).default("submitted").notNull(),

  // Section 1: Report Details
  dateOfOccurrence: varchar("dateOfOccurrence", { length: 20 }).notNull(),
  timeOfOccurrence: varchar("timeOfOccurrence", { length: 10 }),
  location: text("location"),
  departmentSite: text("departmentSite"),
  reportedBy: text("reportedBy").notNull(),
  employeeId: varchar("employeeId", { length: 64 }),

  // Section 2: Classification (comma-separated selected values)
  classification: text("classification"),
  classificationOther: text("classificationOther"),

  // Section 3: Description
  description: text("description").notNull(),

  // Section 4: Contributing Factors (comma-separated)
  contributingFactors: text("contributingFactors"),
  contributingFactorsOther: text("contributingFactorsOther"),

  // Section 5: Risk Assessment
  potentialSeverity: varchar("potentialSeverity", { length: 20 }),
  potentialLikelihood: varchar("potentialLikelihood", { length: 20 }),

  // Section 6: Corrective Actions (JSON array stored as text)
  correctiveActions: text("correctiveActions"), // JSON: [{action, responsible, dueDate, status}]

  // Sign-off
  supervisorName: text("supervisorName"),
  supervisorDate: varchar("supervisorDate", { length: 20 }),
  hseOfficerName: text("hseOfficerName"),
  hseOfficerDate: varchar("hseOfficerDate", { length: 20 }),

  // Metadata
  submittedAt: timestamp("submittedAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  sheetSynced: int("sheetSynced").default(0), // 0 = not synced, 1 = synced to Google Sheet
});

export type NearMissSubmission = typeof nearMissSubmissions.$inferSelect;
export type InsertNearMissSubmission = typeof nearMissSubmissions.$inferInsert;
