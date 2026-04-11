// ── IMS Document Portal — True East Mining Company ──
// Central data store for all document categories and document listings

export interface DocCategory {
  code: string;
  name: string;
  description: string;
  count: number;
  slug: string;
}

export interface ImsDocument {
  code: string;
  title: string;
  rev: string;
  date: string;
  status: "approved" | "pending" | "draft";
  slug: string; // URL slug for the document view page
  available: boolean; // whether the HTML view is built
  formUrl?: string; // if set, this document has a live digital form at this URL
  viewUrl?: string; // if set, this document has a live HTML view page at this URL
}

export const categories: DocCategory[] = [
  {
    code: "FRM",
    name: "Forms & Templates",
    description: "Operational forms, checklists, inspection sheets, and templates used across all site activities.",
    count: 53,
    slug: "frm",
  },
  {
    code: "PROC",
    name: "Procedures",
    description: "Documented procedures governing HSE, operations, logistics, maintenance, and system management.",
    count: 33,
    slug: "proc",
  },
  {
    code: "REG",
    name: "Registers & Logs",
    description: "Live registers, tracking logs, compliance records, and performance monitoring tools.",
    count: 16,
    slug: "reg",
  },
  {
    code: "SOP",
    name: "Standard Operating Procedures",
    description: "Step-by-step operational instructions for high-risk and critical site tasks.",
    count: 10,
    slug: "sop",
  },
  {
    code: "REF",
    name: "References",
    description: "Supporting reference documents, ISO certificates, regulatory frameworks, and KPI data.",
    count: 9,
    slug: "ref",
  },
  {
    code: "POL",
    name: "Policies",
    description: "Company-level policy statements governing HSE, governance, and operational commitments.",
    count: 4,
    slug: "pol",
  },
  {
    code: "PLN",
    name: "Plans",
    description: "Strategic and operational plans supporting IMS implementation and project delivery.",
    count: 3,
    slug: "pln",
  },
];

// ── Documents per category ──

export const documentsByCategory: Record<string, ImsDocument[]> = {
  pol: [
    { code: "TE-IMS-POL-GOV-001", title: "Integrated HSE Policy Statement", rev: "Rev01", date: "10 Apr 2026", status: "approved", slug: "TE-IMS-POL-GOV-001", available: true },
    { code: "TE-IMS-POL-GOV-002", title: "Quality Policy Statement", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-POL-GOV-002", available: false },
    { code: "TE-IMS-POL-GOV-003", title: "Anti-Bribery and Ethics Policy", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-POL-GOV-003", available: false },
    { code: "TE-IMS-POL-GOV-004", title: "Drug and Alcohol Policy", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-POL-GOV-004", available: false },
  ],
  frm: [
    { code: "TE-IMS-FRM-HSE-001", title: "Job Hazard Analysis", rev: "Rev01", date: "Apr 2026", status: "approved", slug: "TE-IMS-FRM-HSE-001", available: true, formUrl: "/forms/jha" },
    { code: "TE-IMS-FRM-HSE-002", title: "Incident Flash Notification", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-002", available: false },
    { code: "TE-IMS-FRM-HSE-003", title: "Near Miss Report Form", rev: "Rev01", date: "Apr 2026", status: "approved", slug: "TE-IMS-FRM-HSE-003", available: true, formUrl: "/forms/near-miss" },
    { code: "TE-IMS-FRM-HSE-004", title: "First Aid Kit Register and Checklist", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-004", available: false },
    { code: "TE-IMS-FRM-HSE-006", title: "HSE Committee Meeting Minutes", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-006", available: false },
    { code: "TE-IMS-FRM-HSE-007", title: "Planned Task Observation (PTO) Form", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-007", available: false },
    { code: "TE-IMS-FRM-HSE-009", title: "Take 5 Hazard Assessment Form", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-009", available: false },
    { code: "TE-IMS-FRM-HSE-010", title: "Hazard Identification Prompt Checklist", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-010", available: false },
    { code: "TE-IMS-FRM-HSE-011", title: "Permit to Work (PTW)", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-011", available: false },
    { code: "TE-IMS-FRM-HSE-012", title: "PPE Issue and Inspection Checklist", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-012", available: false },
    { code: "TE-IMS-FRM-HSE-013", title: "PPE Kit Issuance and Acceptance Form", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-013", available: false },
    { code: "TE-IMS-FRM-HSE-014", title: "PPE Kit Spot-Check Verification Form", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-014", available: false },
    { code: "TE-IMS-FRM-HSE-015", title: "PPE Replacement Request Form", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-015", available: false },
    { code: "TE-IMS-FRM-HSE-016", title: "PPE Kit Contents Matrix", rev: "Rev00", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-016", available: false },
    { code: "TE-IMS-FRM-HSE-017", title: "Emergency Drill Planning and Record", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-017", available: false },
    { code: "TE-IMS-FRM-HSE-018", title: "Emergency Evacuation Drill Record", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-018", available: false },
    { code: "TE-IMS-FRM-HSE-019", title: "Fire Drill Report", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-019", available: false },
    { code: "TE-IMS-FRM-HSE-020", title: "Fire Extinguisher Inspection Log", rev: "Rev02", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-020", available: false },
    { code: "TE-IMS-FRM-HSE-021", title: "Fire Prevention Checklist", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-021", available: false },
    { code: "TE-IMS-FRM-HSE-022", title: "Incident and Accident Investigation Report", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-022", available: false },
    { code: "TE-IMS-FRM-HSE-023", title: "Employee Safety Culture Survey", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-023", available: false },
    { code: "TE-IMS-FRM-HSE-024", title: "Dangerous Occurrence Report Form", rev: "Rev02", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-024", available: false },
    { code: "TE-IMS-FRM-HSE-025", title: "Dangerous Occurrence Investigation Report", rev: "Rev02", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-025", available: false },
    { code: "TE-IMS-FRM-HSE-026", title: "Incident Witness Statement Form", rev: "Rev02", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-026", available: false },
    { code: "TE-IMS-FRM-HSE-027", title: "Monthly Injury Summary", rev: "Rev02", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-027", available: false },
    { code: "TE-IMS-FRM-HSE-028", title: "Monthly HSE Violation Report", rev: "Rev02", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-028", available: false },
    { code: "TE-IMS-FRM-HSE-029", title: "PPE Weekly Inspection Checklist", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-029", available: false },
    { code: "TE-IMS-FRM-HSE-030", title: "Fire Fighting Equipment Register Checklist", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-030", available: false },
    { code: "TE-IMS-FRM-HSE-031", title: "Equipment Inspection and Deviation Register", rev: "Rev02", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-031", available: false },
    { code: "TE-IMS-FRM-HSE-032", title: "Toolbox Talk Daily Attendance Register", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-032", available: false },
    { code: "TE-IMS-FRM-HSE-033", title: "Site HSE Monthly Report Template", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-033", available: false },
    { code: "TE-IMS-FRM-HSE-034", title: "Planned Task Observation Form", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-034", available: false },
    { code: "TE-IMS-FRM-HSE-035", title: "First Aider Appointment Letter", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-035", available: false },
    { code: "TE-IMS-FRM-HSE-036", title: "Fire Fighter Appointment Letter", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-036", available: false },
    { code: "TE-IMS-FRM-HSE-037", title: "Lockout Officer Appointment Letter", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-037", available: false },
    { code: "TE-IMS-FRM-HSE-039", title: "LOTO Logout Logbook", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-039", available: false },
    { code: "TE-IMS-FRM-HSE-040", title: "Waste Handling and Disposal Schedule", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-HSE-040", available: false },
    { code: "TE-IMS-FRM-LOG-001", title: "Journey Management Plan Form", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-LOG-001", available: false },
    { code: "TE-IMS-FRM-LOG-002", title: "Daily Vehicle Checklist", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-LOG-002", available: false },
    { code: "TE-IMS-FRM-MAINT-001", title: "Machine Guarding Inspection Register", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-MAINT-001", available: false },
    { code: "TE-IMS-FRM-MAINT-002", title: "Fuel Refueling Log - Single Event", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-MAINT-002", available: false },
    { code: "TE-IMS-FRM-MAINT-003", title: "Portable Electrical Equipment Register", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-MAINT-003", available: false },
    { code: "TE-IMS-FRM-OPS-001", title: "Daily Drilling Report", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-OPS-001", available: false },
    { code: "TE-IMS-FRM-OPS-002", title: "Stuck Rod Recovery Report", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-OPS-002", available: false },
    { code: "TE-IMS-FRM-SEC-001", title: "Visitor Access and Induction Form", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-SEC-001", available: false },
    { code: "TE-IMS-FRM-SEC-002", title: "Visitor Register", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-SEC-002", available: false },
    { code: "TE-IMS-FRM-SYS-001", title: "Audit Checklist Template", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-SYS-001", available: false },
    { code: "TE-IMS-FRM-SYS-002", title: "Management Review Minutes Template", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-SYS-002", available: false },
    { code: "TE-IMS-FRM-SYS-003", title: "Corrective Action Request Form", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-SYS-003", available: false },
    { code: "TE-IMS-FRM-SYS-005", title: "Site Quarterly Audit Form", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-SYS-005", available: false },
    { code: "TE-IMS-FRM-SYS-006", title: "QA Task Follow-Up Checklist", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-SYS-006", available: false },
    { code: "TE-IMS-FRM-TRN-002", title: "Critical Training Adherence Form", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-TRN-002", available: false },
    { code: "TE-IMS-FRM-TRN-003", title: "Training Attendance Register", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-FRM-TRN-003", available: false },
  ],
  proc: [
    { code: "TE-IMS-PROC-HSE-001", title: "Fatigue Management Procedure", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PROC-HSE-001", available: false },
    { code: "TE-IMS-PROC-HSE-002", title: "Heat Stress Prevention Procedure", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PROC-HSE-002", available: false },
    { code: "TE-IMS-PROC-HSE-003", title: "Hazard Identification and Risk Assessment Procedure", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PROC-HSE-003", available: false },
    { code: "TE-IMS-PROC-HSE-004", title: "Site Emergency Preparedness Procedure", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PROC-HSE-004", available: false },
    { code: "TE-IMS-PROC-HSE-006", title: "Incident and Accident Investigation Procedure", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PROC-HSE-006", available: false },
    { code: "TE-IMS-PROC-HSE-007", title: "Toolbox Talks Procedure", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PROC-HSE-007", available: false },
    { code: "TE-IMS-PROC-HSE-008", title: "Waste Management Procedure", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PROC-HSE-008", available: false },
    { code: "TE-IMS-PROC-HSE-009", title: "Fire Prevention, Control and Fire Fighting Procedure", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PROC-HSE-009", available: false },
    { code: "TE-IMS-PROC-HSE-010", title: "HSE Site Monthly Reporting Procedure", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PROC-HSE-010", available: false },
    { code: "TE-IMS-PROC-HSE-011", title: "Periodic Inspection Procedure", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PROC-HSE-011", available: false },
    { code: "TE-IMS-PROC-HSE-012", title: "HSE Site Audit Procedure", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PROC-HSE-012", available: false },
    { code: "TE-IMS-PROC-HSE-013", title: "Spill Management Procedure", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PROC-HSE-013", available: false },
    { code: "TE-IMS-PROC-HSE-014", title: "Site Rehabilitation Procedure", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PROC-HSE-014", available: false },
    { code: "TE-IMS-PROC-HSE-015", title: "Risk and Opportunity Procedure", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PROC-HSE-015", available: false },
    { code: "TE-IMS-PROC-HSE-016", title: "Personal Protective Equipment Procedure", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PROC-HSE-016", available: false },
    { code: "TE-IMS-PROC-HSE-017", title: "Manual Handling Procedure", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PROC-HSE-017", available: false },
    { code: "TE-IMS-PROC-HSE-018", title: "Environmental Aspects Identification Procedure", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PROC-HSE-018", available: false },
    { code: "TE-IMS-PROC-HSE-019", title: "Site Safety Appointments Procedure", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PROC-HSE-019", available: false },
    { code: "TE-IMS-PROC-LOG-001", title: "Company Vehicle Usage Procedure", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PROC-LOG-001", available: false },
    { code: "TE-IMS-PROC-LOG-002", title: "Journey Management Procedure", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PROC-LOG-002", available: false },
    { code: "TE-IMS-PROC-MAINT-001", title: "Maintenance Management Procedure", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PROC-MAINT-001", available: false },
    { code: "TE-IMS-PROC-OPS-001", title: "Drilling Operations Control Procedure", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PROC-OPS-001", available: false },
    { code: "TE-IMS-PROC-SCM-001", title: "Site Supply Procedure", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PROC-SCM-001", available: false },
    { code: "TE-IMS-PROC-SEC-001", title: "Security Procedure", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PROC-SEC-001", available: false },
    { code: "TE-IMS-PROC-SYS-001", title: "Document Control Procedure", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PROC-SYS-001", available: false },
    { code: "TE-IMS-PROC-SYS-002", title: "Management Review Procedure", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PROC-SYS-002", available: false },
    { code: "TE-IMS-PROC-SYS-003", title: "Change Management Procedure", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PROC-SYS-003", available: false },
    { code: "TE-IMS-PROC-SYS-004", title: "Internal Audit Procedure", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PROC-SYS-004", available: false },
    { code: "TE-IMS-PROC-SYS-005", title: "Continual Improvement and CAPA Procedure", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PROC-SYS-005", available: false },
    { code: "TE-IMS-PROC-SYS-006", title: "Checklist and Register Control Procedure", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PROC-SYS-006", available: false },
    { code: "TE-IMS-PROC-SYS-008", title: "Corrective Action Procedure", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PROC-SYS-008", available: false },
    { code: "TE-IMS-PROC-SYS-009", title: "QHSE Objectives Procedure", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PROC-SYS-009", available: false },
    { code: "TE-IMS-PROC-TRN-001", title: "Staff Training and Competency Procedure", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PROC-TRN-001", available: false },
  ],
  reg: [
    { code: "TE-IMS-REG-GOV-001", title: "IMS Objectives & Targets Register", rev: "Rev00", date: "—", status: "pending", slug: "TE-IMS-REG-GOV-001", available: false },
    { code: "TE-IMS-REG-HSE-001", title: "Risk Register", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-REG-HSE-001", available: false },
    { code: "TE-IMS-REG-HSE-002", title: "PPE Issue & Inspection Register", rev: "Rev00", date: "—", status: "pending", slug: "TE-IMS-REG-HSE-002", available: false },
    { code: "TE-IMS-REG-HSE-003", title: "Emergency Contacts Directory", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-REG-HSE-003", available: false },
    { code: "TE-IMS-REG-HSE-005", title: "Incident and Accident Index Register", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-REG-HSE-005", available: false },
    { code: "TE-IMS-REG-HSE-007", title: "HIRA Register", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-REG-HSE-007", available: false },
    { code: "TE-IMS-REG-HSE-010", title: "Environmental Aspect and Impact Register", rev: "Rev02", date: "—", status: "pending", slug: "TE-IMS-REG-HSE-010", available: false },
    { code: "TE-IMS-REG-LOG-001", title: "Vehicle Handover Register", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-REG-LOG-001", available: false },
    { code: "TE-IMS-REG-MAINT-001", title: "Maintenance Log and Service Record", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-REG-MAINT-001", available: false },
    { code: "TE-IMS-REG-MAINT-002", title: "Fuel Refuelling Log", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-REG-MAINT-002", available: false },
    { code: "TE-IMS-REG-SYS-001", title: "IMS Master Register and Migration Log", rev: "Rev03", date: "—", status: "pending", slug: "TE-IMS-REG-SYS-001", available: false },
    { code: "TE-IMS-REG-SYS-002", title: "KPI Dashboard & Performance Log", rev: "Rev00", date: "—", status: "pending", slug: "TE-IMS-REG-SYS-002", available: false },
    { code: "TE-IMS-REG-SYS-003", title: "Legal & Regulatory Compliance Register", rev: "Rev00", date: "—", status: "pending", slug: "TE-IMS-REG-SYS-003", available: false },
    { code: "TE-IMS-REG-SYS-004", title: "Corrective Action Request Log", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-REG-SYS-004", available: false },
    { code: "TE-IMS-REG-SYS-007", title: "Risk and Opportunity Register", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-REG-SYS-007", available: false },
    { code: "TE-IMS-REG-TRN-001", title: "Training and Competence Matrix", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-REG-TRN-001", available: false },
  ],
  sop: [
    { code: "TE-IMS-SOP-GEO-001", title: "Core Cutting and Handling SOP", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-SOP-GEO-001", available: false },
    { code: "TE-IMS-SOP-HSE-001", title: "Planned Task Observation SOP", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-SOP-HSE-001", available: false },
    { code: "TE-IMS-SOP-HSE-002", title: "Confined Space Entry SOP", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-SOP-HSE-002", available: false },
    { code: "TE-IMS-SOP-HSE-003", title: "Lock-Out Tag-Out SOP", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-SOP-HSE-003", available: false },
    { code: "TE-IMS-SOP-HSE-004", title: "Hot Work SOP", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-SOP-HSE-004", available: false },
    { code: "TE-IMS-SOP-LOG-001", title: "Driving Safety SOP", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-SOP-LOG-001", available: false },
    { code: "TE-IMS-SOP-MAINT-001", title: "Machine Guarding Inspection SOP", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-SOP-MAINT-001", available: false },
    { code: "TE-IMS-SOP-MAINT-002", title: "Refueling and Fuel Handling SOP", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-SOP-MAINT-002", available: false },
    { code: "TE-IMS-SOP-OPS-001", title: "Diamond Drilling Operation SOP", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-SOP-OPS-001", available: false },
    { code: "TE-IMS-SOP-OPS-002", title: "Night Shift Drilling SOP", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-SOP-OPS-002", available: false },
  ],
  ref: [
    { code: "TE-IMS-REF-HSE-001", title: "Emergency Preparedness Reference", rev: "Rev00", date: "—", status: "pending", slug: "TE-IMS-REF-HSE-001", available: false },
    { code: "TE-IMS-REF-HSE-002", title: "Fire Fighting Procedure Reference", rev: "Rev00", date: "—", status: "pending", slug: "TE-IMS-REF-HSE-002", available: false },
    { code: "TE-IMS-REF-SYS-000", title: "Executive Overview of the Integrated Management System", rev: "Rev00", date: "—", status: "pending", slug: "TE-IMS-REF-SYS-000", available: false },
    { code: "TE-IMS-REF-SYS-001", title: "Document Identification and Numbering Rules", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-REF-SYS-001", available: false },
    { code: "TE-IMS-REF-SYS-002", title: "Treatment of Finance and Accounting Documents", rev: "Rev00", date: "—", status: "pending", slug: "TE-IMS-REF-SYS-002", available: false },
    { code: "TE-IMS-REF-SYS-003", title: "ISO 14001 Certificate", rev: "Rev00", date: "—", status: "pending", slug: "TE-IMS-REF-SYS-003", available: false },
    { code: "TE-IMS-REF-SYS-004", title: "ISO 45001 Certificate", rev: "Rev00", date: "—", status: "pending", slug: "TE-IMS-REF-SYS-004", available: false },
    { code: "TE-IMS-REF-SYS-005", title: "ISO 9001 Certificate", rev: "Rev00", date: "—", status: "pending", slug: "TE-IMS-REF-SYS-005", available: false },
    { code: "TE-IMS-REF-SYS-006", title: "KPI Tables and Reference Data", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-REF-SYS-006", available: false },
  ],
  pln: [
    { code: "TE-IMS-PLN-GOV-000", title: "IMS Playbook — Foundation Document", rev: "Rev00", date: "01 Mar 2026", status: "approved", slug: "TE-IMS-PLN-GOV-000", available: true, viewUrl: "/docs/pln/TE-IMS-PLN-GOV-000" },
    { code: "TE-IMS-PLN-001", title: "IMS Implementation Plan", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PLN-001", available: false },
    { code: "TE-IMS-PLN-002", title: "Annual HSE Plan", rev: "Rev01", date: "—", status: "pending", slug: "TE-IMS-PLN-002", available: false },
  ],
};

export const LOGO_WHITE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663473952399/3YVZojsY2rei5QwThHiV6E/trueeastlogoWHITE_79ded02e.png";
export const LOGO_GRAY = "https://d2xsxph8kpxj0f.cloudfront.net/310519663473952399/3YVZojsY2rei5QwThHiV6E/trueeastlogovectorgray_20d7a465.png";
export const LOGO_COLOR = "https://d2xsxph8kpxj0f.cloudfront.net/310519663473952399/3YVZojsY2rei5QwThHiV6E/trueeastlogoWHITE_79ded02e.png";
export const LOGO_TRANS = "https://d2xsxph8kpxj0f.cloudfront.net/310519663473952399/3YVZojsY2rei5QwThHiV6E/trueeastlogotransback_aaedc603.png";
