import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";
import { DEPARTMENTS } from "@/lib/formConstants";

// ── HTML helpers ────────────────────────────────────────────────────────────
const inp = (ph: string) => `<input type="text" placeholder="${ph}" style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 7px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/>`;
const dateInp = `<input type="date" style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 7px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/>`;

// Section 4 — Equipment (3 rows)
const equipRows = [1,2,3].map(i => {
  const bg = i%2===1?"#ffffff":"#f8f9fb";
  return `<tr style="background:${bg};"><td style="padding:6px 8px;border:1px solid #e0e4ea;">${inp("Equipment type...")}</td><td style="padding:6px 8px;border:1px solid #e0e4ea;">${inp("ID / Registration...")}</td><td style="padding:6px 8px;border:1px solid #e0e4ea;">${inp("Condition...")}</td></tr>`;
}).join("");
const EQUIP_HTML = `<table style="width:100%;border-collapse:collapse;table-layout:fixed;font-size:12px;"><colgroup><col style="width:40%"/><col style="width:30%"/><col style="width:30%"/></colgroup><thead><tr style="background:#081C2E;color:#fff;"><th style="padding:9px 10px;text-align:left;border:1px solid #2a3f55;">Equipment Type</th><th style="padding:9px 10px;text-align:left;border:1px solid #2a3f55;">ID / Registration</th><th style="padding:9px 10px;text-align:left;border:1px solid #2a3f55;">Condition</th></tr></thead><tbody>${equipRows}</tbody></table>`;

// Section 7 — Persons (4 rows)
const personRows = [1,2,3,4].map(i => {
  const bg = i%2===1?"#ffffff":"#f8f9fb";
  return `<tr style="background:${bg};"><td style="padding:6px 8px;border:1px solid #e0e4ea;">${inp("Full name...")}</td><td style="padding:6px 8px;border:1px solid #e0e4ea;">${inp("Employee No...")}</td><td style="padding:6px 8px;border:1px solid #e0e4ea;">${inp("Designation...")}</td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><select style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 7px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"><option value="">--</option><option>Injured</option><option>Witness</option><option>Other</option></select></td><td style="padding:6px 8px;border:1px solid #e0e4ea;">${inp("Contact...")}</td></tr>`;
}).join("");
const PERSONS_HTML = `<table style="width:100%;border-collapse:collapse;table-layout:fixed;font-size:12px;"><colgroup><col style="width:25%"/><col style="width:15%"/><col style="width:20%"/><col style="width:18%"/><col style="width:22%"/></colgroup><thead><tr style="background:#081C2E;color:#fff;"><th style="padding:9px 10px;text-align:left;border:1px solid #2a3f55;">Name</th><th style="padding:9px 10px;text-align:left;border:1px solid #2a3f55;">Employee No.</th><th style="padding:9px 10px;text-align:left;border:1px solid #2a3f55;">Designation</th><th style="padding:9px 10px;text-align:left;border:1px solid #2a3f55;">Role</th><th style="padding:9px 10px;text-align:left;border:1px solid #2a3f55;">Contact</th></tr></thead><tbody>${personRows}</tbody></table>`;

// Section 12 — Corrective actions (6 rows)
const caRows = [1,2,3,4,5,6].map(i => {
  const bg = i%2===1?"#ffffff":"#f8f9fb";
  return `<tr style="background:${bg};"><td style="padding:6px 4px;text-align:center;border:1px solid #e0e4ea;font-weight:600;font-size:11px;color:#081C2E;">${i}</td><td style="padding:5px 6px;border:1px solid #e0e4ea;">${inp("Action required...")}</td><td style="padding:5px 6px;border:1px solid #e0e4ea;">${inp("Name...")}</td><td style="padding:5px 6px;border:1px solid #e0e4ea;">${dateInp}</td><td style="padding:5px 6px;border:1px solid #e0e4ea;"><select style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 7px;font-size:11px;background:#fff;color:#081C2E;box-sizing:border-box;"><option value="">--</option><option>Elimination</option><option>Substitution</option><option>Engineering</option><option>Administrative</option><option>PPE</option></select></td><td style="padding:5px 6px;border:1px solid #e0e4ea;"><select style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 7px;font-size:11px;background:#fff;color:#081C2E;box-sizing:border-box;"><option value="">--</option><option>Open</option><option>In Progress</option><option>Closed</option></select></td><td style="padding:5px 6px;border:1px solid #e0e4ea;">${inp("Signature...")}</td></tr>`;
}).join("");
const CA_HTML = `<div style="overflow-x:auto;"><table style="width:100%;min-width:900px;border-collapse:collapse;font-size:12px;"><thead><tr style="background:#081C2E;color:#fff;"><th style="padding:9px 4px;text-align:center;border:1px solid #2a3f55;white-space:nowrap;">#</th><th style="padding:9px 8px;text-align:left;border:1px solid #2a3f55;white-space:nowrap;">Action Required</th><th style="padding:9px 8px;text-align:left;border:1px solid #2a3f55;white-space:nowrap;">Responsible Person</th><th style="padding:9px 8px;text-align:left;border:1px solid #2a3f55;white-space:nowrap;">Target Date</th><th style="padding:9px 8px;text-align:left;border:1px solid #2a3f55;white-space:nowrap;">Control Type</th><th style="padding:9px 8px;text-align:left;border:1px solid #2a3f55;white-space:nowrap;">Status</th><th style="padding:9px 8px;text-align:left;border:1px solid #2a3f55;white-space:nowrap;">Signature</th></tr></thead><tbody>${caRows}</tbody></table></div>`;

// Section 16 — Sign-off
const signoffRoles = ["HSE Officer","HSE Manager","Site Manager","HOD","General Manager"];
const signoffRows = signoffRoles.map((role,i) => {
  const bg = i%2===0?"#ffffff":"#f8f9fb";
  return `<tr style="background:${bg};"><td style="padding:8px 12px;border:1px solid #e0e4ea;color:#081C2E;font-weight:600;">${role}</td><td style="padding:6px 8px;border:1px solid #e0e4ea;">${inp("Full name...")}</td><td style="padding:6px 8px;border:1px solid #e0e4ea;">${inp("Signature...")}</td><td style="padding:6px 8px;border:1px solid #e0e4ea;">${dateInp}</td></tr>`;
}).join("");
const SIGNOFF_HTML = `<table style="width:100%;border-collapse:collapse;table-layout:fixed;font-size:13px;"><colgroup><col style="width:25%"/><col style="width:30%"/><col style="width:25%"/><col style="width:20%"/></colgroup><thead><tr style="background:#081C2E;color:#fff;"><th style="padding:9px 12px;text-align:left;border:1px solid #2a3f55;">Role</th><th style="padding:9px 12px;text-align:left;border:1px solid #2a3f55;">Name</th><th style="padding:9px 12px;text-align:left;border:1px solid #2a3f55;">Signature</th><th style="padding:9px 12px;text-align:left;border:1px solid #2a3f55;">Date</th></tr></thead><tbody>${signoffRows}</tbody></table>`;

// ── Section 6 — Photos / Evidence (HTML) ────────────────────────────────────
const photoSlotHtml = (label: string) => `<div style="border:1px solid #dde3ec;border-radius:6px;overflow:hidden;background:#f8f9fb;"><div style="background:#081C2E;color:#fff;font-size:12px;font-weight:600;padding:6px 10px;">${label}</div><div style="height:160px;display:flex;align-items:center;justify-content:center;gap:10px;padding:10px;"><label style="display:flex;flex-direction:column;align-items:center;gap:6px;background:#081C2E;color:#fff;border-radius:6px;padding:10px 14px;cursor:pointer;font-size:11px;font-weight:600;"><span style="font-size:20px;">📷</span>Take Photo<input type="file" accept="image/*" capture="environment" style="display:none;" /></label><label style="display:flex;flex-direction:column;align-items:center;gap:6px;background:#fff;color:#081C2E;border:1px solid #c8d0db;border-radius:6px;padding:10px 14px;cursor:pointer;font-size:11px;font-weight:600;"><span style="font-size:20px;">📁</span>Upload File<input type="file" accept="image/*" style="display:none;" /></label></div></div>`;
const PHOTOS_HTML = `<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:4px 0;">${photoSlotHtml("Photo 1")}${photoSlotHtml("Photo 2")}${photoSlotHtml("Photo 3")}${photoSlotHtml("Photo 4")}</div>`;

// ── Section 10 — Contributing Factors (HTML) ─────────────────────────────────
const cfCheckGroup = (title: string, color: string, items: string[]) => `<div style="flex:1;min-width:220px;border:1px solid #dde3ec;border-radius:6px;overflow:hidden;background:#fff;"><div style="background:${color};color:#fff;font-size:11px;font-weight:700;padding:7px 12px;text-transform:uppercase;letter-spacing:0.05em;">${title}</div><div style="padding:10px 12px;display:flex;flex-direction:column;gap:5px;">${items.map(item=>`<label style="display:flex;align-items:flex-start;gap:7px;font-size:12px;color:#081C2E;cursor:pointer;"><input type="checkbox" style="margin-top:2px;flex-shrink:0;" /><span>${item}</span></label>`).join("")}</div></div>`;
const CONTRIBUTING_HTML = `<div style="display:flex;flex-wrap:wrap;gap:12px;padding:4px 0;">${cfCheckGroup("Unsafe Acts","#081C2E",["Operating without authority","Failure to secure","Operating at unsafe speed","Using defective equipment","Unsafe use of equipment","Improper positioning","Unsafe loading or placement","Horseplay","Intoxicated","Failure to lock-out/tag-out","Failure to use PPE","Incorrect use of tools","No adherence to procedures","Taking shortcuts","Improper lifting","Other"])}${cfCheckGroup("Unsafe Conditions","#2a4a6b",["Inadequate guards/barriers","Poor visibility","Defective tools/equipment","Inadequate ventilation","Inadequate illumination","Inadequate PPE available","Poor housekeeping","Tripping/slipping hazards","Fire/explosion hazards","Confined space","Hazardous atmosphere (gas, dust, fumes)","Excessive noise","Excessive vibration","Inadequate warning systems","Oil/fuel spillage","Other"])}${cfCheckGroup("Personal Factors","#C49A28",["Lack of knowledge/skill","Improper attitude","Physical deficiency","Mental deficiency","Taking shortcuts","Alcohol or drug abuse","Failure to comply with instructions","Other"])}${cfCheckGroup("Job Factors","#5a6a7a",["Inadequate standards","Inadequate enforcement of standards","Inadequate task observations","Inadequate safety meetings","Inadequate maintenance/design","Inadequate purchasing standards","Normal wear and tear","Inadequate supervision","Improper environment","Inadequate EMS","Poor risk assessment","Other"])}</div>`;

// ── SCHEMA ───────────────────────────────────────────────────────────────────
const SCHEMA = {
  title: "",
  showTitle: false,
  pages: [{
    name: "page1",
    elements: [
      {
        type: "panel", name: "section1", title: "Section 1 — Incident Details",
        elements: [
          { type: "text", name: "reportNo", title: "Incident Reference No.", isRequired: true, readOnly: true, description: "Auto-assigned on submission" },
          { type: "dropdown", name: "department", title: "Department", isRequired: true, choices: DEPARTMENTS },
          { type: "dropdown", name: "locationSite", title: "Location / Site", isRequired: true, choices: DEPARTMENTS },
          { type: "text", name: "incidentDate", title: "Date of Incident", inputType: "date", isRequired: true },
          { type: "text", name: "incidentTime", title: "Time of Incident", inputType: "time", isRequired: true },
          { type: "text", name: "reportedByName", title: "Reported By — Name", isRequired: true },
          { type: "text", name: "reportedByRole", title: "Reported By — Role", isRequired: true },
          { type: "text", name: "dateReported", title: "Date Reported", inputType: "date", isRequired: true },
        ],
      },
      {
        type: "panel", name: "section2", title: "Section 2 — Incident Classification",
        elements: [
          { type: "checkbox", name: "incidentType", title: "Incident Type (select all that apply)", isRequired: true, choices: ["Near Miss","First Aid Case","Medical Treatment","Lost Time Injury","Fatality","Property Damage","Environmental Release","Vehicle Incident","Fire / Explosion","Security Incident"], colCount: 3 },
          { type: "dropdown", name: "severityRating", title: "Severity Rating", isRequired: true, choices: ["Low","Medium","High","Critical"] },
          { type: "dropdown", name: "potentialSeverity", title: "Potential Severity", isRequired: true, choices: ["Low","Medium","High","Critical"] },
        ],
      },
      {
        type: "panel", name: "section3", title: "Section 3 — Immediate Actions Taken",
        elements: [
          { type: "comment", name: "immediateActions", title: "Describe immediate actions taken", rows: 4, isRequired: true },
        ],
      },
      {
        type: "panel", name: "section4", title: "Section 4 — Vehicles, Machinery or Equipment Involved",
        elements: [
          { type: "html", name: "equipTable", html: EQUIP_HTML },
        ],
      },
      {
        type: "panel", name: "section5", title: "Section 5 — Description of Occurrence",
        elements: [
          { type: "comment", name: "briefDescription", title: "Brief Description", rows: 3, isRequired: true },
          { type: "comment", name: "sequenceOfEvents", title: "Sequence of Events", rows: 5 },
        ],
      },
      {
        type: "panel", name: "section6", title: "Section 6 — Photos / Evidence",
        elements: [
          { type: "html", name: "photosEvidence", html: PHOTOS_HTML },
        ],
      },
      {
        type: "panel", name: "section7", title: "Section 7 — Persons Involved",
        elements: [
          { type: "html", name: "personsTable", html: PERSONS_HTML },
        ],
      },
      {
        type: "panel", name: "section8", title: "Section 8 — Injury / Illness Details",
        elements: [
          { type: "text", name: "injuredPersonName", title: "Injured Person Name" },
          { type: "text", name: "bodyPartAffected", title: "Body Part Affected" },
          { type: "text", name: "natureOfInjury", title: "Nature of Injury" },
          { type: "text", name: "treatmentProvided", title: "Treatment Provided" },
          { type: "radiogroup", name: "referredToHospital", title: "Referred to Hospital", choices: ["Yes","No","N/A"], colCount: 3 },
          { type: "text", name: "daysLost", title: "Days Lost (if LTI)", inputType: "number" },
        ],
      },
      {
        type: "panel", name: "section9", title: "Section 9 — Barrier Analysis",
        elements: [
          { type: "comment", name: "barrierStep1", title: "Step 1 — Identify the energy/hazard relevant to this incident", rows: 3 },
          { type: "comment", name: "barrierStep2", title: "Step 2 — Required barriers (what should have been in place)", rows: 3 },
          { type: "comment", name: "barrierStep3", title: "Step 3 — Existing barriers (what was actually in place)", rows: 3 },
          { type: "comment", name: "barrierStep4", title: "Step 4 — Gap analysis (gaps between required and existing barriers)", rows: 3 },
        ],
      },
      {
        type: "panel", name: "section10", title: "Section 10 — Contributing Factors",
        elements: [
          { type: "html", name: "contributingFactors", html: CONTRIBUTING_HTML },
        ],
      },
      {
        type: "panel", name: "section11", title: "Section 11 — Root Cause Statement",
        elements: [
          { type: "comment", name: "directCause", title: "Direct Cause", rows: 3, isRequired: true },
          { type: "comment", name: "rootCause", title: "Root Cause", rows: 3, isRequired: true },
        ],
      },
      {
        type: "panel", name: "section12", title: "Section 12 — Corrective and Preventive Actions",
        elements: [
          { type: "html", name: "caTable", html: CA_HTML },
        ],
      },
      {
        type: "panel", name: "section13", title: "Section 13 — Regulatory Notification (KSA)",
        elements: [
          { type: "checkbox", name: "regulatoryNotification", title: "Notification Status", choices: ["Not Required","GOSI Notified","Civil Defence Notified","MHRSD Notified","Client Notified"], colCount: 3 },
          { type: "text", name: "notificationRefNo", title: "Notification Reference No." },
          { type: "text", name: "dateNotified", title: "Date Notified", inputType: "date" },
        ],
      },
      {
        type: "panel", name: "section14", title: "Section 14 — Required Documents",
        elements: [
          { type: "checkbox", name: "requiredDocs", title: "Documents Attached", choices: ["Witness Statements","Medical Report","Photos / Video","Equipment Inspection Report","Risk Assessment / JSA","Training Records","Maintenance Records","CCTV Footage","Weather Report","Permits to Work"], colCount: 3 },
          { type: "text", name: "otherDocuments", title: "Other Documents" },
        ],
      },
      {
        type: "panel", name: "section15", title: "Section 15 — HOD / Management Follow-Up",
        elements: [
          { type: "text", name: "hodName", title: "HOD Name" },
          { type: "radiogroup", name: "investigationClosed", title: "Investigation Closed", choices: ["Yes","No"], colCount: 2 },
          { type: "text", name: "dateClosed", title: "Date Closed", inputType: "date" },
          { type: "comment", name: "hodComments", title: "HOD Comments", rows: 3 },
        ],
      },
      {
        type: "panel", name: "section16", title: "Section 16 — Sign-Off and Routing",
        elements: [
          { type: "html", name: "signoffTable", html: SIGNOFF_HTML },
        ],
      },
      {
        type: "panel", name: "section_submitted", title: "Submitted By",
        elements: [
          { type: "text", name: "signoffReportedByName", title: "Submitted By — Full Name", isRequired: true, readOnly: true, description: "Auto-filled from your login profile" },
          { type: "text", name: "signoffReportedByDate", title: "Submission Date", inputType: "date", isRequired: true, readOnly: true, description: "Auto-filled with today's date" },
          { type: "text", name: "signoffSubmissionTime", title: "Submission Time", isRequired: true, readOnly: true, description: "Auto-filled with current time" },
        ],
      },
    ],
  }],
  checkErrorsMode: "onComplete",
  showPrevButton: false,
};

// ── Page Component ────────────────────────────────────────────────────────────
export default function FRM_HSE_022() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-022"
        title="Incident and Accident Investigation Report"
        revision="01"
        approvalDate="April 2026"
        minRole="field_worker"
        wideTable
        schema={SCHEMA}
        identityFields={{
          fullName: "signoffReportedByName",
          employeeId: "employeeId",
          department: "department",
          position: "reportedByRole",
        }}

      />
    </Layout>
  );
}
