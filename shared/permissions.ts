// Single source of truth for role-based permissions across the IMS portal.
// Imported by both client (page gating) and server (procedure middleware).
//
// The role matrix lives in §"matrix" below and mirrors the spec confirmed
// with Melo on 2026-04-26. Edit there to change behavior — every consumer
// reads through the helper functions and stays in sync automatically.

export type Role =
  | "admin"
  | "top_management"
  | "hse_manager"
  | "supervisor"
  | "field_worker"
  | "auditor"
  | "client";

export const ALL_ROLES: Role[] = [
  "admin",
  "top_management",
  "hse_manager",
  "supervisor",
  "field_worker",
  "auditor",
  "client",
];

// Roles that fill out & submit forms (internal staff doing real work).
export const INTERNAL_STAFF: Role[] = ["admin", "hse_manager", "supervisor", "field_worker"];

// Roles with full read visibility but no write/delete/approve.
// top_management: board / C-suite — sees everything, changes nothing.
export const READ_ONLY_MANAGEMENT: Role[] = ["top_management"];

// Roles with no write privileges anywhere — external read-only personas.
export const EXTERNAL_READ_ONLY: Role[] = ["auditor", "client"];

// ── Capability checks ───────────────────────────────────────────────────────
// Each function takes a role and returns whether that role is allowed.
// Page gating: `if (!can.viewSubmissions(role)) return <NotAuthorized/>`
// Server gating: `if (!can.editRegister(ctx.imsUser.role)) throw FORBIDDEN`

export const can = {
  // Documents (POL/PROC/SOP/PLN/REF) — full body
  viewDocs:        (r: Role) => r !== "client",

  // Education
  browseEducation:    (r: Role) => true,
  consumeEducation:   (r: Role) => r !== "client",
  takeQuiz:           (r: Role) => INTERNAL_STAFF.includes(r),
  viewOwnTraining:    (r: Role) => INTERNAL_STAFF.includes(r) || r === "top_management",
  viewTeamTraining:   (r: Role) => r === "admin" || r === "top_management" || r === "hse_manager" || r === "supervisor" || r === "auditor",
  assignTraining:     (r: Role) => r === "admin" || r === "hse_manager",            // write — top_management excluded
  manageEducation:    (r: Role) => r === "admin" || r === "hse_manager",            // write — top_management excluded

  // Forms
  viewFormCatalog: (r: Role) => r !== "client",
  submitForm:      (r: Role) => INTERNAL_STAFF.includes(r),                         // write — top_management excluded

  // Submissions
  viewOwnSubmissions: (r: Role) => INTERNAL_STAFF.includes(r) || r === "top_management",
  viewAllSubmissions: (r: Role) => r === "admin" || r === "top_management" || r === "hse_manager" || r === "auditor",
  viewDeptSubmissions:(r: Role) => r === "supervisor",

  // Approvals — top_management can VIEW the approval trail but cannot act
  approveStep1: (r: Role) => r === "supervisor" || r === "hse_manager" || r === "admin",
  approveStep2: (r: Role) => r === "hse_manager" || r === "admin",
  approveStep3: (r: Role) => r === "admin",

  // Registers
  openRegister:        (r: Role) => true,
  editRegister:        (r: Role) => r === "admin" || r === "hse_manager",           // write — top_management excluded

  // Exports — top_management can export everything (read-only action)
  exportOwn:  (r: Role) => INTERNAL_STAFF.includes(r) || r === "top_management",
  exportDept: (r: Role) => r === "supervisor" || r === "hse_manager" || r === "admin" || r === "top_management",
  exportAll:  (r: Role) => r === "admin" || r === "hse_manager" || r === "top_management",

  // Admin — top_management cannot manage users or settings
  manageUsers:    (r: Role) => r === "admin",
  manageSettings: (r: Role) => r === "admin",

  // Composite UI helpers
  seeApprovalsTab:   (r: Role) => r === "supervisor" || r === "hse_manager" || r === "admin" || r === "top_management",
  seeSubmissionsTab: (r: Role) =>
    r === "admin" || r === "top_management" || r === "hse_manager" || r === "auditor" || r === "supervisor",
};

// ── Display helpers ─────────────────────────────────────────────────────────

export const ROLE_LABEL: Record<Role, string> = {
  admin:          "Admin",
  top_management: "Top Management",
  hse_manager:    "HSE Manager",
  supervisor:     "Supervisor",
  field_worker:   "Field Worker",
  auditor:        "Auditor",
  client:         "Client",
};

// Roles an admin can create from the user-management UI. Order matters —
// most senior first.
export const ASSIGNABLE_ROLES: Role[] = [
  "admin",
  "top_management",
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
