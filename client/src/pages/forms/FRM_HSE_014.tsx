import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";
import { DEPARTMENTS } from "@/lib/formConstants";

// ── Section 3: Kit Condition Check — static HTML ──────────────────────────────
const CHECKS: [string, string][] = [
  ["1", "All required items present per PPE Kit Contents Matrix (FRM-HSE-016)."],
  ["2", "Items clean and in good condition \u2014 no visible damage, tears, or cracks."],
  ["3", "No expired items \u2014 inspection dates current on respirators, harnesses, cartridges."],
  ["4", "Employee demonstrates correct donning, adjustment, and use."],
  ["5", "Kit stored correctly in a clean, dry, and secure location."],
  ["6", "Employee confirms daily inspection routine and log kept up to date."],
  ["7", "PPE matches the hazard of the actual task performed today."],
  ["8", "No unauthorised modification, paint, or tampering with PPE."],
];

const checkRows = CHECKS.map(([num, item], idx) =>
  `<tr style="background:${idx % 2 === 0 ? "#ffffff" : "#f8f9fb"};">
    <td style="padding:8px 10px;text-align:center;border:1px solid #e0e4ea;color:#081C2E;font-weight:600;">${num}</td>
    <td style="padding:8px 12px;border:1px solid #e0e4ea;color:#081C2E;font-size:13px;">${item}</td>
    <td style="padding:6px 8px;text-align:center;border:1px solid #e0e4ea;">
      <select style="border:1px solid #c8d0db;border-radius:4px;padding:4px 8px;font-size:12px;background:#fff;color:#081C2E;cursor:pointer;min-width:90px;">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
        <option value="na">N/A</option>
      </select>
    </td>
    <td style="padding:6px 8px;border:1px solid #e0e4ea;">
      <input type="text" placeholder="Comments..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/>
    </td>
  </tr>`
).join("");

const KIT_CONDITION_HTML = `
<table style="width:100%;border-collapse:collapse;table-layout:fixed;font-size:13px;">
  <colgroup>
    <col style="width:5%"/>
    <col style="width:50%"/>
    <col style="width:15%"/>
    <col style="width:30%"/>
  </colgroup>
  <thead>
    <tr style="background:#081C2E;color:#fff;">
      <th style="padding:9px 8px;text-align:center;border:1px solid #2a3f55;">#</th>
      <th style="padding:9px 12px;text-align:left;border:1px solid #2a3f55;">Check Item</th>
      <th style="padding:9px 8px;text-align:center;border:1px solid #2a3f55;">Yes / No / N/A</th>
      <th style="padding:9px 12px;text-align:left;border:1px solid #2a3f55;">Comments</th>
    </tr>
  </thead>
  <tbody>${checkRows}</tbody>
</table>`;

// ── Section 4: Corrective Actions — static HTML ───────────────────────────────
const CA_ROWS = [1, 2, 3].map((n, idx) =>
  `<tr style="background:${idx % 2 === 0 ? "#ffffff" : "#f8f9fb"};">
    <td style="padding:8px 10px;text-align:center;border:1px solid #e0e4ea;color:#081C2E;font-weight:600;">0${n}</td>
    <td style="padding:6px 8px;border:1px solid #e0e4ea;">
      <input type="text" placeholder="Describe action taken..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/>
    </td>
    <td style="padding:6px 8px;border:1px solid #e0e4ea;">
      <input type="text" placeholder="Name / Due Date" style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/>
    </td>
  </tr>`
).join("");

const CORRECTIVE_ACTIONS_HTML = `
<table style="width:100%;border-collapse:collapse;table-layout:fixed;font-size:13px;">
  <colgroup>
    <col style="width:6%"/>
    <col style="width:67%"/>
    <col style="width:27%"/>
  </colgroup>
  <thead>
    <tr style="background:#081C2E;color:#fff;">
      <th style="padding:9px 8px;text-align:center;border:1px solid #2a3f55;">#</th>
      <th style="padding:9px 12px;text-align:left;border:1px solid #2a3f55;">Action Taken (e.g., replacement issued, retraining, verbal warning, cost recovery)</th>
      <th style="padding:9px 12px;text-align:left;border:1px solid #2a3f55;">Responsible / Due Date</th>
    </tr>
  </thead>
  <tbody>${CA_ROWS}</tbody>
</table>`;

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

      // ── Section 2: Verification Details ──────────────────────────────────
      {
        type: "panel", name: "section_verification", title: "2. Verification Details",
        elements: [
          { type: "text", name: "verifierName", title: "Verifier Name", isRequired: true },
          { type: "text", name: "verifierPosition", title: "Verifier Position", isRequired: true },
          { type: "text", name: "dateOfSpotCheck", title: "Date of Spot-Check", inputType: "date", isRequired: true },
          { type: "text", name: "timeOfSpotCheck", title: "Time of Spot-Check", inputType: "time", isRequired: true },
          {
            type: "radiogroup", name: "verificationType", title: "Verification Type", isRequired: true,
            choices: [
              { value: "scheduled", text: "Scheduled" },
              { value: "random", text: "Random" },
              { value: "post_incident", text: "Post-Incident" },
            ],
            colCount: 3,
          },
          { type: "text", name: "locationOfCheck", title: "Location of Check", isRequired: true },
        ],
      },

      // ── Section 3: Kit Condition Check ────────────────────────────────────
      {
        type: "panel", name: "section_kit_check", title: "3. Kit Condition Check",
        elements: [
          { type: "html", name: "kitConditionTable", html: KIT_CONDITION_HTML },
        ],
      },

      // ── Section 4: Corrective Action Required ────────────────────────────
      {
        type: "panel", name: "section_corrective", title: "4. Corrective Action Required?",
        elements: [
          {
            type: "radiogroup", name: "correctiveActionRequired",
            title: "Outcome of Spot-Check", isRequired: true,
            choices: [
              { value: "no", text: "NO \u2014 Kit is fully compliant. No action required." },
              { value: "yes", text: "YES \u2014 Action required. Describe below." },
            ],
            colCount: 1,
          },
          {
            type: "html", name: "correctiveActionsTable", html: CORRECTIVE_ACTIONS_HTML,
            visibleIf: "{correctiveActionRequired} = 'yes'",
          },
        ],
      },

      // ── Section 5: Employee Acknowledgement ──────────────────────────────
      {
        type: "panel", name: "section_acknowledgement", title: "5. Employee Acknowledgement",
        elements: [
          {
            type: "html", name: "ackText",
            html: `<div style="background:#fffbf0;border:1px solid #f0d98a;border-radius:4px;padding:12px 16px;font-size:13px;color:#5a4a1a;line-height:1.7;">
              I confirm the spot-check was performed in my presence, and I understand any actions required of me. I agree to comply with the corrective actions listed above within the stated timeframe.
            </div>`,
          },
          {
            type: "boolean", name: "employeeAcknowledgement",
            title: "Employee confirms acknowledgement",
            isRequired: true,
            labelTrue: "Yes \u2014 I acknowledge",
            labelFalse: "No",
          },
          { type: "text", name: "employeeAckDate", title: "Date / Time of Acknowledgement", inputType: "datetime-local", isRequired: true },
        ],
      },

      // ── Section 6: Verifier Sign-Off ──────────────────────────────────────
      {
        type: "panel", name: "section_verifier_signoff", title: "6. Verifier Sign-Off",
        elements: [
          { type: "text", name: "verifierSignoffName", title: "Verifier Name", isRequired: true },
          { type: "text", name: "verifierSignoffPosition", title: "Verifier Position", isRequired: true },
          { type: "text", name: "verifierSignoffDate", title: "Date", inputType: "date", isRequired: true },
        ],
      },

      // ── Section 7: HSE / Supervisor Follow-Up ────────────────────────────
      {
        type: "panel", name: "section_followup", title: "7. HSE / Supervisor Follow-Up (if action required)",
        visibleIf: "{correctiveActionRequired} = 'yes'",
        elements: [
          {
            type: "radiogroup", name: "followUpCompleted",
            title: "Follow-up completed?", isRequired: true,
            choices: [{ value: "yes", text: "Yes" }, { value: "no", text: "No" }],
            colCount: 2,
          },
          { type: "text", name: "followUpDate", title: "Date of Follow-Up", inputType: "date", isRequired: true, visibleIf: "{followUpCompleted} = 'yes'" },
          { type: "text", name: "followUpVerifiedBy", title: "Verified By (Name and Position)", isRequired: true, visibleIf: "{followUpCompleted} = 'yes'" },
          { type: "comment", name: "followUpComments", title: "Comments / Close-Out Notes" },
        ],
      },

      // ── Section 8: Submitted By ───────────────────────────────────────────
      {
        type: "panel", name: "section_signoff", title: "8. Submitted By",
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

export default function FRM_HSE_014() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-014"
        title="PPE Kit Spot-Check Verification Form"
        revision="01"
        approvalDate="April 2026"
        minRole="supervisor"
        wideTable
        schema={SCHEMA}
        identityFields={{ fullName: "reportedBy", employeeId: "employeeId", department: "department", position: "position" }}
      />
    </Layout>
  );
}
