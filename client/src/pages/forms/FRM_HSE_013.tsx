import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";
import { DEPARTMENTS } from "@/lib/formConstants";

const KIT_ITEMS: [string, string][] = [
  ["Hard Hat", "ANSI Z89.1 / EN 397"],
  ["Safety Glasses \u2014 Clear and Dark", "ANSI Z87.1 / EN 166"],
  ["Cut-Resistant Gloves", "EN 388 Level 5"],
  ["Chemical-Resistant Gloves", "EN 374"],
  ["Flame-Resistant Overalls", "EN ISO 11612"],
  ["High-Visibility Vest", "EN ISO 20471"],
  ["Steel-Toe Safety Boots", "EN ISO 20345"],
  ["Ear Protection (plugs or muffs)", "NRR 25+ dB / EN 352"],
  ["Dust Mask / Respirator", "FFP2 / FFP3 / EN 149"],
  ["Full-Body Harness and Lanyard (if required)", "EN 361 / EN 355"],
  ["Hydration Flask / Insulated Water Bottle", "KSA heat stress controls"],
  ["Other (specify)", "\u2014"],
];

const rows = KIT_ITEMS.map(([item, std], idx) =>
  `<tr style="background:${idx % 2 === 0 ? "#ffffff" : "#f8f9fb"};">
    <td style="padding:8px 6px;text-align:center;border:1px solid #e0e4ea;"><input type="checkbox" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td>
    <td style="padding:8px 8px;border:1px solid #e0e4ea;color:#081C2E;font-size:13px;">${item}</td>
    <td style="padding:8px 8px;border:1px solid #e0e4ea;color:#6b7a8d;font-size:12px;">${std}</td>
  </tr>`
).join("");

const KIT_CONTENTS_HTML = `
<table style="width:100%;border-collapse:collapse;table-layout:fixed;font-size:13px;">
  <colgroup><col style="width:6%"/><col style="width:54%"/><col style="width:40%"/></colgroup>
  <thead>
    <tr style="background:#081C2E;color:#fff;">
      <th style="padding:8px 6px;text-align:center;border:1px solid #2a3f55;">Tick</th>
      <th style="padding:8px 6px;text-align:left;border:1px solid #2a3f55;">PPE Item</th>
      <th style="padding:8px 6px;text-align:left;border:1px solid #2a3f55;">Standard / Reference</th>
    </tr>
  </thead>
  <tbody>${rows}</tbody>
</table>`;

const DECLARATION_HTML = `<div style="background:#fffbf0;border:1px solid #f0d98a;border-radius:4px;padding:14px 16px;font-size:13px;color:#5a4a1a;line-height:1.7;">
  <p style="font-weight:700;margin:0 0 8px 0;">I confirm that I have received the above PPE Kit in good working condition. I understand and accept full responsibility for the following:</p>
  <ul style="margin:0;padding-left:20px;">
    <li>Performing daily visual inspection and cleaning of the kit before use.</li>
    <li>Storing the kit properly in a clean, dry, and secure location.</li>
    <li>Reporting any damage, loss, theft, or expiry immediately to my Supervisor or HSE Officer.</li>
    <li>Never using damaged, expired, or defective PPE.</li>
    <li>Using the PPE correctly in accordance with my training and the task hazard controls.</li>
    <li>Understanding that negligence in PPE care may result in cost recovery or disciplinary action under Saudi Labor Law.</li>
  </ul>
</div>`;

const SCHEMA = {
  title: "",
  showTitle: false,
  pages: [{
    name: "page1",
    elements: [
      {
        type: "panel", name: "section_employee", title: "1. Employee Information",
        elements: [
            { type: "text", name: "reportNo", title: "Report No.", isRequired: true, readOnly: true, description: "Auto-assigned on submission" },
          { type: "text", name: "reportedBy", title: "Employee Full Name", isRequired: true, readOnly: true, description: "Auto-filled from your login profile" },
          { type: "text", name: "employeeId", title: "Employee ID / Badge No.", isRequired: true, readOnly: true, description: "Auto-filled from your login profile" },
          { type: "text", name: "position", title: "Position / Role", readOnly: true, description: "Auto-filled from your login profile" },
          { type: "dropdown", name: "department", title: "Site / Department", isRequired: true, choices: DEPARTMENTS },
          { type: "text", name: "nationality", title: "Nationality", isRequired: true },
        ],
      },
      {
        type: "panel", name: "section_issuance", title: "2. Issuance Details",
        elements: [
          { type: "text", name: "issuedByName", title: "Issued By \u2014 Full Name", isRequired: true },
          { type: "text", name: "issuedByPosition", title: "Issued By \u2014 Position", isRequired: true },
          { type: "text", name: "dateOfIssue", title: "Date of Issue", inputType: "date", isRequired: true },
          { type: "text", name: "kitReference", title: "Kit Number / Reference (if applicable)" },
          {
            type: "dropdown", name: "reasonForIssuance", title: "Reason for Issuance", isRequired: true,
            choices: [
              { value: "new_hire", text: "New hire" },
              { value: "replacement", text: "Replacement" },
              { value: "shift_change", text: "Shift change" },
              { value: "other", text: "Other" },
            ],
          },
          { type: "text", name: "reasonOther", title: "Specify reason (if Other)", visibleIf: "{reasonForIssuance} = 'other'" },
          {
            type: "dropdown", name: "kitType", title: "Kit Type", isRequired: true,
            choices: [
              { value: "driller_day", text: "Driller \u2014 Day Shift" },
              { value: "driller_night", text: "Driller \u2014 Night Shift" },
              { value: "mechanic", text: "Mechanic" },
              { value: "working_at_height", text: "Working at Height" },
              { value: "driver", text: "Driver" },
              { value: "general_site", text: "General Site Worker" },
              { value: "other", text: "Other" },
            ],
          },
        ],
      },
      {
        type: "panel", name: "section_kit_contents", title: "3. Kit Contents \u2014 Verify Each Item Present and in Good Condition",
        elements: [
          { type: "html", name: "kitContentsTable", html: KIT_CONTENTS_HTML },
          {
            type: "radiogroup", name: "itemsMissingOrDefective",
            title: "Any items missing or defective at time of issue?", isRequired: true,
            choices: [
              { value: "no", text: "No \u2014 all items present and serviceable" },
              { value: "yes", text: "Yes \u2014 see remarks below" },
            ],
            colCount: 2,
          },
          { type: "text", name: "defectiveRemarks", title: "Remarks on missing / defective items", visibleIf: "{itemsMissingOrDefective} = 'yes'", isRequired: true },
        ],
      },
      {
        type: "panel", name: "section_declaration", title: "4. Employee Acceptance and Declaration",
        elements: [
          { type: "html", name: "declarationText", html: DECLARATION_HTML },
          { type: "boolean", name: "employeeAcceptance", title: "I have read and accept the above declaration", isRequired: true, labelTrue: "Yes \u2014 I accept", labelFalse: "No" },
        ],
      },
      {
        type: "panel", name: "section_verification", title: "5. HSE / Supervisor Verification",
        elements: [
          {
            type: "radiogroup", name: "allItemsVerified",
            title: "All items verified present and serviceable?", isRequired: true,
            choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
            colCount: 2,
          },
          { type: "text", name: "verifierName", title: "Verifier \u2014 Full Name", isRequired: true },
          { type: "text", name: "verifierPosition", title: "Verifier \u2014 Position", isRequired: true },
          { type: "text", name: "verificationDate", title: "Date Verified", inputType: "date", isRequired: true },
          { type: "text", name: "verificationComments", title: "Comments / Non-Conformities" },
        ],
      },
      {
        type: "panel", name: "section_signoff", title: "6. Submitted By",
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

export default function FRM_HSE_013() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-013"
        title="PPE Kit Issuance and Acceptance Form"
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
