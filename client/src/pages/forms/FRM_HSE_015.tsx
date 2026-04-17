import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";
import { DEPARTMENTS } from "@/lib/formConstants";

// ── Section 3: Reason for Replacement — static HTML ───────────────────────────
const REASONS: [string, string][] = [
  ["Damage / wear from normal use", ""],
  ["Accidental damage (describe incident)", ""],
  ["Loss / theft (describe circumstances)", ""],
  ["Expiry / out of date (list item and expiry date)", ""],
  ["Defect found on issuance or inspection", ""],
  ["Wrong size or fit from original issue", ""],
  ["Contamination (chemical, biological, blood)", ""],
  ["Other (describe)", ""],
];

const reasonRows = REASONS.map(([reason], idx) =>
  `<tr style="background:${idx % 2 === 0 ? "#ffffff" : "#f8f9fb"};">
    <td style="padding:8px 10px;text-align:center;border:1px solid #e0e4ea;">
      <input type="checkbox" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/>
    </td>
    <td style="padding:8px 12px;border:1px solid #e0e4ea;color:#081C2E;font-size:13px;">${reason}</td>
    <td style="padding:6px 8px;border:1px solid #e0e4ea;">
      <input type="text" placeholder="Details / Description..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/>
    </td>
  </tr>`
).join("");

const REASON_HTML = `
<table style="width:100%;border-collapse:collapse;table-layout:fixed;font-size:13px;">
  <colgroup>
    <col style="width:6%"/>
    <col style="width:44%"/>
    <col style="width:50%"/>
  </colgroup>
  <thead>
    <tr style="background:#081C2E;color:#fff;">
      <th style="padding:9px 8px;text-align:center;border:1px solid #2a3f55;">Tick</th>
      <th style="padding:9px 12px;text-align:left;border:1px solid #2a3f55;">Reason</th>
      <th style="padding:9px 12px;text-align:left;border:1px solid #2a3f55;">Details / Description</th>
    </tr>
  </thead>
  <tbody>${reasonRows}</tbody>
</table>`;

// ── Section 4: Specific Items Requested — static HTML ────────────────────────
const itemRows = [1,2,3,4,5].map((n, idx) =>
  `<tr style="background:${idx % 2 === 0 ? "#ffffff" : "#f8f9fb"};">
    <td style="padding:8px 10px;text-align:center;border:1px solid #e0e4ea;color:#081C2E;font-weight:600;">0${n}</td>
    <td style="padding:6px 8px;border:1px solid #e0e4ea;">
      <input type="text" placeholder="Item description (include standard, e.g., EN 397, EN ISO 20345)..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/>
    </td>
    <td style="padding:6px 8px;text-align:center;border:1px solid #e0e4ea;">
      <input type="number" min="1" placeholder="Qty" style="width:60px;border:1px solid #c8d0db;border-radius:4px;padding:5px 6px;font-size:12px;background:#fff;color:#081C2E;text-align:center;"/>
    </td>
  </tr>`
).join("");

const ITEMS_HTML = `
<table style="width:100%;border-collapse:collapse;table-layout:fixed;font-size:13px;">
  <colgroup>
    <col style="width:6%"/>
    <col style="width:80%"/>
    <col style="width:14%"/>
  </colgroup>
  <thead>
    <tr style="background:#081C2E;color:#fff;">
      <th style="padding:9px 8px;text-align:center;border:1px solid #2a3f55;">#</th>
      <th style="padding:9px 12px;text-align:left;border:1px solid #2a3f55;">Item Description (include standard, e.g., EN 397, EN ISO 20345)</th>
      <th style="padding:9px 8px;text-align:center;border:1px solid #2a3f55;">Qty</th>
    </tr>
  </thead>
  <tbody>${itemRows}</tbody>
</table>`;

const DECLARATION_HTML = `<div style="background:#fffbf0;border:1px solid #f0d98a;border-radius:4px;padding:14px 16px;font-size:13px;color:#5a4a1a;line-height:1.7;">
  I confirm the above information is accurate to the best of my knowledge. I understand that providing false information may result in disciplinary action under Saudi Labor Law and TEMC internal policy. I request replacement PPE as indicated above and agree to return the damaged item (if available) for inspection.
</div>`;

const SCHEMA = {
  title: "",
  showTitle: false,
  pages: [{
    name: "page1",
    elements: [

      // ── Section 1: Employee Information ──────────────────────────────────
      {
        type: "panel", name: "section_employee", title: "1. Employee Information",
        elements: [
          { type: "text", name: "reportedBy", title: "Employee Full Name", isRequired: true, readOnly: true, description: "Auto-filled from your login profile" },
          { type: "text", name: "employeeId", title: "Employee ID / Badge No.", isRequired: true, readOnly: true, description: "Auto-filled from your login profile" },
          { type: "text", name: "position", title: "Position / Role", readOnly: true, description: "Auto-filled from your login profile" },
          { type: "dropdown", name: "department", title: "Site / Department", isRequired: true, choices: DEPARTMENTS },
          { type: "text", name: "requestDate", title: "Request Date", inputType: "date", isRequired: true },
          { type: "text", name: "kitReference", title: "Kit Reference Number (if applicable)" },
        ],
      },

      // ── Section 2: Type of Replacement Requested ──────────────────────────
      {
        type: "panel", name: "section_type", title: "2. Type of Replacement Requested",
        elements: [
          {
            type: "radiogroup", name: "replacementType",
            title: "Select replacement type", isRequired: true,
            choices: [
              { value: "full_kit", text: "Full PPE Kit Replacement \u2014 all items replaced (e.g., new role, total loss)." },
              { value: "specific_items", text: "Specific Item(s) Replacement \u2014 list items in Section 4." },
            ],
            colCount: 1,
          },
        ],
      },

      // ── Section 3: Reason for Replacement ────────────────────────────────
      {
        type: "panel", name: "section_reason", title: "3. Reason for Replacement (tick all that apply)",
        elements: [
          { type: "html", name: "reasonTable", html: REASON_HTML },
        ],
      },

      // ── Section 4: Specific Items Requested ──────────────────────────────
      {
        type: "panel", name: "section_items", title: "4. Specific Items Requested (complete if not full kit)",
        elements: [
          { type: "html", name: "itemsTable", html: ITEMS_HTML },
        ],
      },

      // ── Section 5: Employee Declaration ──────────────────────────────────
      {
        type: "panel", name: "section_declaration", title: "5. Employee Declaration",
        elements: [
          { type: "html", name: "declarationText", html: DECLARATION_HTML },
          {
            type: "boolean", name: "employeeDeclaration",
            title: "I confirm the above declaration",
            isRequired: true,
            labelTrue: "Yes \u2014 I confirm",
            labelFalse: "No",
          },
          { type: "text", name: "declarationDate", title: "Date", inputType: "date", isRequired: true },
        ],
      },

      // ── Section 6: Supervisor / HSE Verification ──────────────────────────
      {
        type: "panel", name: "section_verification", title: "6. Supervisor / HSE Verification",
        elements: [
          {
            type: "radiogroup", name: "requestApproved",
            title: "Request approved?", isRequired: true,
            choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
            colCount: 2,
          },
          {
            type: "radiogroup", name: "costRecoveryApplied",
            title: "Cost-recovery applied?", isRequired: true,
            choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
            colCount: 2,
          },
          { type: "text", name: "costRecoveryReason", title: "Cost-Recovery Reason", visibleIf: "{costRecoveryApplied} = 'yes'", isRequired: true },
          { type: "text", name: "verifierNamePosition", title: "Verifier Name and Position", isRequired: true },
          { type: "text", name: "verificationDate", title: "Date", inputType: "date", isRequired: true },
        ],
      },

      // ── Section 7: Issuance of Replacement ───────────────────────────────
      {
        type: "panel", name: "section_issuance", title: "7. Issuance of Replacement",
        elements: [
          { type: "text", name: "issuedByName", title: "Issued By \u2014 Full Name", isRequired: true },
          { type: "text", name: "issuedByPosition", title: "Position", isRequired: true },
          { type: "text", name: "dateOfIssue", title: "Date of Issue", inputType: "date", isRequired: true },
          { type: "text", name: "kitSerialNo", title: "Kit / Item Serial No. (if any)" },
          { type: "text", name: "issuanceSignature", title: "Signature (Issued By)" },
        ],
      },

      // ── Section 8: HSE / Supervisor Follow-Up ────────────────────────────
      {
        type: "panel", name: "section_followup", title: "8. HSE / Supervisor Follow-Up (if action required)",
        elements: [
          {
            type: "radiogroup", name: "followUpCompleted",
            title: "Follow-up completed?", isRequired: true,
            choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
            colCount: 2,
          },
          { type: "text", name: "followUpDate", title: "Date of Follow-Up", inputType: "date", visibleIf: "{followUpCompleted} = 'yes'" },
          { type: "text", name: "closedOutBy", title: "Closed-Out By", visibleIf: "{followUpCompleted} = 'yes'" },
          { type: "comment", name: "followUpComments", title: "Comments / Root Cause Learnings" },
        ],
      },

      // ── Section 9: Submitted By ───────────────────────────────────────────
      {
        type: "panel", name: "section_signoff", title: "9. Submitted By",
        elements: [
          { type: "text", name: "signoffReportedByName", title: "Submitted By \u2014 Full Name", isRequired: true, readOnly: true, description: "Auto-filled from your login profile" },
          { type: "text", name: "signoffReportedByDate", title: "Submission Date", inputType: "date", isRequired: true, readOnly: true, description: "Auto-filled with today's date" },
          { type: "text", name: "signoffSubmissionTime", title: "Submission Time", isRequired: true, readOnly: true, description: "Auto-filled with current time" },
        ],
      },

    ],
  }],
  checkErrorsMode: "onComplete",
  showPrevButton: false,
};

export default function FRM_HSE_015() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-015"
        title="PPE Replacement Request Form"
        revision="01"
        approvalDate="April 2026"
        minRole="field_worker"
        wideTable
        schema={SCHEMA}
        identityFields={{ fullName: "reportedBy", employeeId: "employeeId", department: "department", position: "position" }}
      />
    </Layout>
  );
}
