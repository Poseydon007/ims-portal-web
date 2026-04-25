// ── IMS Form Global Constants ──
// Shared across all 53 FRM forms

export const DEPARTMENTS = [
  "HSE",
  "Operations – Drilling",
  "Operations – Geology",
  "Operations – Survey",
  "Maintenance",
  "Logistics & Transport",
  "Warehouse & Supply",
  "Security",
  "Administration",
  "Finance & Accounting",
  "Human Resources",
  "IT & Communications",
  "Management",
  "Quality Assurance",
  "Environmental",
  "Training & Competency",
  "Contracts & Procurement",
  "Camp & Catering",
  "Medical & First Aid",
  "Other",
];

// Likelihood scale (ISO 45001 / AS/NZS 4360 aligned)
export const LIKELIHOOD_OPTIONS = [
  { value: "A", label: "A – Almost Certain (expected to occur in most circumstances)" },
  { value: "B", label: "B – Likely (will probably occur in most circumstances)" },
  { value: "C", label: "C – Possible (might occur at some time)" },
  { value: "D", label: "D – Unlikely (could occur at some time)" },
  { value: "E", label: "E – Rare (may occur only in exceptional circumstances)" },
];

// Consequence scale
export const CONSEQUENCE_OPTIONS = [
  { value: "1", label: "1 – Minor (first aid, minor property damage)" },
  { value: "2", label: "2 – Moderate (medical treatment, moderate damage)" },
  { value: "3", label: "3 – Major (lost time injury, major damage)" },
  { value: "4", label: "4 – Catastrophic (fatality, permanent disability, total loss)" },
];

// Risk matrix: [likelihood][consequence] → rating
const RISK_MATRIX: Record<string, Record<string, string>> = {
  A: { "1": "H", "2": "H", "3": "E", "4": "E" },
  B: { "1": "M", "2": "H", "3": "H", "4": "E" },
  C: { "1": "L", "2": "M", "3": "H", "4": "H" },
  D: { "1": "L", "2": "L", "3": "M", "4": "H" },
  E: { "1": "L", "2": "L", "3": "M", "4": "M" },
};

export function calculateRiskRating(likelihood: string, consequence: string): string {
  if (!likelihood || !consequence) return "";
  return RISK_MATRIX[likelihood]?.[consequence] ?? "";
}

export const RISK_RATING_COLORS: Record<string, string> = {
  L: "bg-green-100 text-green-800 border-green-300",
  M: "bg-yellow-100 text-yellow-800 border-yellow-300",
  H: "bg-orange-100 text-orange-800 border-orange-300",
  E: "bg-red-100 text-red-800 border-red-300",
};

export const RISK_RATING_LABELS: Record<string, string> = {
  L: "Low",
  M: "Medium",
  H: "High",
  E: "Extreme",
};

// Standard action statuses
export const ACTION_STATUSES = ["Open", "In Progress", "Closed", "Overdue"];

// Standard condition options
export const CONDITION_OPTIONS = ["Good", "Fair", "Poor", "N/A"];

// Standard yes/no options
export const YES_NO_OPTIONS = ["Yes", "No", "N/A"];

// Form minimum role requirements
// field_worker < supervisor < hse_manager < admin
export type ImsRole = "field_worker" | "supervisor" | "hse_manager" | "admin";

export const FORM_MIN_ROLES: Record<string, ImsRole> = {
  // HSE Forms
  "TE-IMS-FRM-HSE-001": "field_worker",   // JHA — all workers
  "TE-IMS-FRM-HSE-002": "supervisor",      // Incident Flash Notification
  "TE-IMS-FRM-HSE-003": "field_worker",   // Near Miss Report
  "TE-IMS-FRM-HSE-004": "field_worker",   // First Aid Kit Register
  "TE-IMS-FRM-HSE-006": "field_worker",   // Daily Site Safety Inspection
  "TE-IMS-FRM-HSE-007": "supervisor",      // Working at Height Permit
  "TE-IMS-FRM-HSE-009": "supervisor",      // Confined Space Entry Permit
  "TE-IMS-FRM-HSE-010": "supervisor",      // Permit to Work (PTW)
  "TE-IMS-FRM-HSE-011": "field_worker",   // PPE Issue & Inspection Checklist
  "TE-IMS-FRM-HSE-012": "supervisor",      // PPE Kit Issuance and Acceptance
  "TE-IMS-FRM-HSE-013": "field_worker",   // PPE Kit Spot-Check Verification
  "TE-IMS-FRM-HSE-014": "field_worker",   // PPE Replacement Request
  "TE-IMS-FRM-HSE-015": "supervisor",      // PPE Kit Contents Matrix
  "TE-IMS-FRM-HSE-016": "supervisor",      // Emergency Drill Planning and Record
  "TE-IMS-FRM-HSE-017": "supervisor",      // Emergency Evacuation Drill Record
  "TE-IMS-FRM-HSE-018": "supervisor",      // Fire Drill Report
  "TE-IMS-FRM-HSE-019": "field_worker",   // Fire Extinguisher Inspection Log
  "TE-IMS-FRM-HSE-020": "field_worker",   // Fire Prevention Checklist
  "TE-IMS-FRM-HSE-021": "supervisor",      // Incident and Accident Investigation Report
  "TE-IMS-FRM-HSE-022": "field_worker",   // Employee Safety Culture Survey
  "TE-IMS-FRM-HSE-023": "supervisor",      // Dangerous Occurrence Report
  "TE-IMS-FRM-HSE-024": "supervisor",      // Dangerous Occurrence Investigation
  "TE-IMS-FRM-HSE-025": "field_worker",   // Incident Witness Statement
  "TE-IMS-FRM-HSE-026": "supervisor",      // Monthly Injury Summary
  "TE-IMS-FRM-HSE-027": "supervisor",      // Monthly HSE Violation Report
  "TE-IMS-FRM-HSE-028": "field_worker",   // PPE Weekly Inspection Checklist (legacy label — actual form is "Monthly HSE Violation Report" with minRole="hse_manager"; FORM_MIN_ROLES is unused for the form's own rendering)
  "TE-IMS-FRM-HSE-029": "field_worker",   // PPE Weekly Inspection Checklist
  "TE-IMS-FRM-HSE-030": "field_worker",   // Equipment Inspection and Deviation Register
  "TE-IMS-FRM-HSE-031": "field_worker",   // Toolbox Talk Daily Attendance Register
  "TE-IMS-FRM-HSE-032": "supervisor",      // Site HSE Monthly Report Template
  "TE-IMS-FRM-HSE-033": "supervisor",      // Planned Task Observation Form
  "TE-IMS-FRM-HSE-034": "admin",           // First Aider Appointment Letter
  "TE-IMS-FRM-HSE-035": "admin",           // Fire Fighter Appointment Letter
  "TE-IMS-FRM-HSE-036": "admin",           // Lockout Officer Appointment Letter
  "TE-IMS-FRM-HSE-037": "field_worker",   // LOTO Logout Logbook
  "TE-IMS-FRM-HSE-039": "field_worker",   // Waste Handling and Disposal Schedule
  "TE-IMS-FRM-HSE-040": "field_worker",   // Journey Management Plan Form
  // LOG Forms
  "TE-IMS-FRM-LOG-001": "field_worker",   // Daily Vehicle Checklist
  "TE-IMS-FRM-LOG-002": "field_worker",   // Machine Guarding Inspection Register
  // MAINT Forms
  "TE-IMS-FRM-MAINT-001": "field_worker", // Fuel Refueling Log
  "TE-IMS-FRM-MAINT-002": "field_worker", // Portable Electrical Equipment Register
  "TE-IMS-FRM-MAINT-003": "field_worker", // Daily Drilling Report
  // OPS Forms
  "TE-IMS-FRM-OPS-001": "supervisor",      // Stuck Rod Recovery Report
  "TE-IMS-FRM-OPS-002": "field_worker",   // Daily Drilling Report
  // SEC Forms
  "TE-IMS-FRM-SEC-001": "field_worker",   // Visitor Access and Induction
  "TE-IMS-FRM-SEC-002": "field_worker",   // Visitor Register
  // SYS Forms
  "TE-IMS-FRM-SYS-001": "supervisor",      // Audit Checklist Template
  "TE-IMS-FRM-SYS-002": "admin",           // Management Review Minutes
  "TE-IMS-FRM-SYS-003": "supervisor",      // Corrective Action Request
  "TE-IMS-FRM-SYS-005": "supervisor",      // Site Quarterly Audit Form
  "TE-IMS-FRM-SYS-006": "supervisor",      // QA Task Follow-Up Checklist
  // TRN Forms
  "TE-IMS-FRM-TRN-002": "supervisor",      // Critical Training Adherence Form
  "TE-IMS-FRM-TRN-003": "field_worker",   // Training Attendance Register
};

export function canSubmitForm(userRole: ImsRole | undefined, formCode: string): boolean {
  if (!userRole) return false;
  const minRole = FORM_MIN_ROLES[formCode] ?? "field_worker";
  const hierarchy: ImsRole[] = ["field_worker", "supervisor", "hse_manager", "admin"];
  return hierarchy.indexOf(userRole) >= hierarchy.indexOf(minRole);
}
