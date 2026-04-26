// Single source of truth for role-based permissions across the IMS portal.
// Imported by both client (page gating) and server (procedure middleware).
//
// The role matrix lives in §"matrix" below and mirrors the spec confirmed
// with Melo on 2026-04-26. Edit there to change behavior — every consumer
// reads through the helper functions and stays in sync automatically.

export type Role =
  | "admin"
  | "hse_manager"
  | "supervisor"
  | "field_worker"
  | "auditor"
  | "client";

export const ALL_ROLES: Role[] = [
  "admin",
  "hse_manager",
  "supervisor",
  "field_worker",
  "auditor",
  "client",
];

// Roles that fill out & submit forms (internal staff doing real work).
export const INTERNAL_STAFF: Role[] = ["admin", "hse_manager", "supervisor", "field_worker"];

// Roles with no write privileges anywhere — external read-only personas.
export const EXTERNAL_READ_ONLY: Role[] = ["auditor", "client"];

// ── Capability checks ───────────────────────────────────────────────────────
// Each function takes a role and returns whether that role is allowed.
// Page gating: `if (!can.viewSubmissions(role)) return <NotAuthorized/>`
// Server gating: `if (!can.editRegister(ctx.imsUser.role)) throw FORBIDDEN`

export const can = {
  // Documents (POL/PROC/SOP/PLN/REF) — full body
  viewDocs:        (r: Role) => r !== "client",          // client sees tour previews only

  // Education
  browseEducation:    (r: Role) => true,                 // everyone — client gets tour mode
  consumeEducation:   (r: Role) => r !== "client",       // watch full videos / read full PDFs
  takeQuiz:           (r: Role) => INTERNAL_STAFF.includes(r),
  viewOwnTraining:    (r: Role) => INTERNAL_STAFF.includes(r),
  viewTeamTraining:   (r: Role) => r === "admin" || r === "hse_manager" || r === "supervisor" || r === "auditor",
  assignTraining:     (r: Role) => r === "admin" || r === "hse_manager",
  manageEducation:    (r: Role) => r === "admin" || r === "hse_manager",

  // Forms
  viewFormCatalog: (r: Role) => r !== "client",
  submitForm:      (r: Role) => INTERNAL_STAFF.includes(r),

  // Submissions
  viewOwnSubmissions: (r: Role) => INTERNAL_STAFF.includes(r),
  viewAllSubmissions: (r: Role) => r === "admin" || r === "hse_manager" || r === "auditor",
  viewDeptSubmissions:(r: Role) => r === "supervisor",   // own department only

  // Approvals
  approveStep1: (r: Role) => r === "supervisor" || r === "hse_manager" || r === "admin",
  approveStep2: (r: Role) => r === "hse_manager" || r === "admin",
  approveStep3: (r: Role) => r === "admin",

  // Registers
  openRegister:        (r: Role) => true,                // everyone gets the preview link
  editRegister:        (r: Role) => r === "admin" || r === "hse_manager",

  // Exports
  exportOwn:  (r: Role) => INTERNAL_STAFF.includes(r),
  exportDept: (r: Role) => r === "supervisor" || r === "hse_manager" || r === "admin",
  exportAll:  (r: Role) => r === "admin" || r === "hse_manager",

  // Admin
  manageUsers:    (r: Role) => r === "admin",
  manageSettings: (r: Role) => r === "admin",

  // Composite UI helpers — derived from the primitives above.
  // Use these for nav-tab gating; use the primitives for in-page action gating.
  seeApprovalsTab:   (r: Role) => r === "supervisor" || r === "hse_manager" || r === "admin",
  // Auditor needs read-only access to the all-submissions table; supervisor
  // sees a department-scoped variant; admin + hse_manager see everything.
  seeSubmissionsTab: (r: Role) =>
    r === "admin" || r === "hse_manager" || r === "auditor" || r === "supervisor",
};

// ── Display helpers ─────────────────────────────────────────────────────────

export const ROLE_LABEL: Record<Role, string> = {
  admin:        "Admin",
  hse_manager:  "HSE Manager",
  supervisor:   "Supervisor",
  field_worker: "User",          // surfaced as "User Basic" in some contexts
  auditor:      "Auditor",
  client:       "Client",
};

// Roles an admin can create from the user-management UI. Order matters —
// most senior first.
export const ASSIGNABLE_ROLES: Role[] = [
  "admin",
  "hse_manager",
  "supervisor",
  "field_worker",
  "auditor",
  "client",
];

export function isInternalStaff(role: Role): boolean {
  return INTERNAL_STAFF.includes(role);
}

export function isExternal(role: Role): boolean {
  return EXTERNAL_READ_ONLY.includes(role);
}
