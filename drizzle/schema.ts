import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing Manus OAuth auth flow (kept for compatibility).
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

/**
 * IMS Portal Users — custom email/password authentication.
 * Roles: admin, supervisor, field_worker
 */
export const imsUsers = mysqlTable("ims_users", {
  id: int("id").autoincrement().primaryKey(),
  email: varchar("email", { length: 320 }).notNull().unique(),
  passwordHash: text("passwordHash").notNull(),
  fullName: varchar("fullName", { length: 255 }).notNull(),
  employeeId: varchar("employeeId", { length: 64 }),
  role: mysqlEnum("role", ["admin", "supervisor", "field_worker"]).default("field_worker").notNull(),
  department: varchar("department", { length: 128 }),
  position: varchar("position", { length: 128 }),
  status: mysqlEnum("status", ["active", "inactive"]).default("active").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn"),
});

export type ImsUser = typeof imsUsers.$inferSelect;
export type InsertImsUser = typeof imsUsers.$inferInsert;

/**
 * IMS Portal Sessions — JWT session tracking.
 */
export const imsSessions = mysqlTable("ims_sessions", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  token: varchar("token", { length: 512 }).notNull().unique(),
  expiresAt: timestamp("expiresAt").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type ImsSession = typeof imsSessions.$inferSelect;
export type InsertImsSession = typeof imsSessions.$inferInsert;

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

  // Submitter identity
  submittedByUserId: int("submittedByUserId"),

  // Metadata
  submittedAt: timestamp("submittedAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  sheetSynced: int("sheetSynced").default(0), // 0 = not synced, 1 = synced to Google Sheet
});

export type NearMissSubmission = typeof nearMissSubmissions.$inferSelect;
export type InsertNearMissSubmission = typeof nearMissSubmissions.$inferInsert;

// ── Job Hazard Analysis Submissions ──
export const jhaSubmissions = mysqlTable("jha_submissions", {
  id: int("id").autoincrement().primaryKey(),
  submissionId: varchar("submissionId", { length: 32 }).notNull().unique(), // e.g. JHA-2026-0001
  status: mysqlEnum("status", ["submitted", "under_review", "closed"]).default("submitted").notNull(),

  // Section 1: Job Information
  jobTask: text("jobTask").notNull(),
  date: varchar("date", { length: 20 }).notNull(),
  departmentSite: text("departmentSite"),
  jhaNumber: varchar("jhaNumber", { length: 32 }),
  supervisor: text("supervisor"),
  reviewedBy: text("reviewedBy"),

  // Section 3: Task Step Hazard Analysis (JSON array)
  // [{step, taskStep, hazards, initialRisk, controls, residualRisk, responsible}]
  taskSteps: text("taskSteps").notNull(),

  // Section 4: Sign-Off
  completedByName: text("completedByName"),
  completedByDate: varchar("completedByDate", { length: 20 }),
  reviewedByName: text("reviewedByName"),
  reviewedByDate: varchar("reviewedByDate", { length: 20 }),
  siteManagerName: text("siteManagerName"),
  siteManagerDate: varchar("siteManagerDate", { length: 20 }),

  // Submitter identity
  submittedByUserId: int("submittedByUserId"),

  // Metadata
  submittedAt: timestamp("submittedAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  sheetSynced: int("sheetSynced").default(0),
});

export type JhaSubmission = typeof jhaSubmissions.$inferSelect;
export type InsertJhaSubmission = typeof jhaSubmissions.$inferInsert;

// ── Generic Form Responses — stores all form submissions as JSON ──
export const formResponses = mysqlTable("form_responses", {
  id: int("id").autoincrement().primaryKey(),
  submissionId: varchar("submissionId", { length: 64 }).notNull().unique(),
  formCode: varchar("formCode", { length: 64 }).notNull(),   // e.g. TE-IMS-FRM-HSE-003
  formTitle: varchar("formTitle", { length: 255 }),
  responseData: text("responseData").notNull(),               // JSON blob of all form fields
  status: mysqlEnum("status", ["pending_supervisor_review", "pending_hse_approval", "returned", "closed"]).default("pending_supervisor_review").notNull(),
  currentStep: int("currentStep").default(1),                  // 1=supervisor, 2=hse_officer, 3=closed
  submittedByUserId: int("submittedByUserId"),
  submittedByName: varchar("submittedByName", { length: 255 }),
  submittedAt: timestamp("submittedAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type FormResponse = typeof formResponses.$inferSelect;
export type InsertFormResponse = typeof formResponses.$inferInsert;

/**
 * Approval Steps — tracks each approval/return action in the workflow.
 */
export const approvalSteps = mysqlTable("approval_steps", {
  id: int("id").autoincrement().primaryKey(),
  submissionId: varchar("submissionId", { length: 64 }).notNull(),  // FK to formResponses.submissionId
  step: int("step").notNull(),                                       // 1=supervisor, 2=hse_officer
  stepLabel: varchar("stepLabel", { length: 128 }),                  // e.g. "Supervisor Review"
  action: mysqlEnum("action", ["approved", "returned"]).notNull(),
  actorUserId: int("actorUserId").notNull(),
  actorName: varchar("actorName", { length: 255 }),
  actorRole: varchar("actorRole", { length: 64 }),
  comment: text("comment"),
  actionAt: timestamp("actionAt").defaultNow().notNull(),
});
export type ApprovalStep = typeof approvalSteps.$inferSelect;
export type InsertApprovalStep = typeof approvalSteps.$inferInsert;

// ── IMS Master Document Register ──
export const imsRegister = mysqlTable("ims_register", {
  id: int("id").autoincrement().primaryKey(),
  code: varchar("code", { length: 64 }).notNull().unique(),   // e.g. TE-IMS-FRM-HSE-001
  type: varchar("type", { length: 64 }).notNull(),             // FRM, PROC, SOP, PLN, REG, MAN, POL, REF
  typeLabel: varchar("typeLabel", { length: 128 }),            // Full label e.g. "FRM — Form / Template"
  department: varchar("department", { length: 64 }),           // HSE, OPS, SYS, etc.
  departmentLabel: varchar("departmentLabel", { length: 128 }), // Full label
  seq: varchar("seq", { length: 16 }),                        // sequence number
  rev: varchar("rev", { length: 16 }),                        // e.g. Rev01
  title: varchar("title", { length: 512 }).notNull(),
  format: varchar("format", { length: 32 }),                  // DOCX, XLSX, PDF
  status: mysqlEnum("status", ["ACTIVE", "RETIRED", "MERGED", "LEGACY"]).default("ACTIVE").notNull(),
  filename: varchar("filename", { length: 512 }),
  note: text("note"),
  viewUrl: varchar("viewUrl", { length: 512 }),               // internal portal URL if page exists

  // Audit trail
  createdByUserId: int("createdByUserId"),
  updatedByUserId: int("updatedByUserId"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ImsRegisterEntry = typeof imsRegister.$inferSelect;
export type InsertImsRegisterEntry = typeof imsRegister.$inferInsert;
