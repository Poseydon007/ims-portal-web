/**
 * TE-IMS-FRM-HSE-001 — Job Hazard Analysis (JHA)
 * Source: TE-IMS-FRM-HSE-001_Rev01-JobHazardAnalysis.docx
 * Rules applied:
 *   1. Report No. at top with identity fields
 *   2. IMS portal colors only (navy #081C2E, gold #C49A28)
 *   3. wideTable — Task Steps table has 7 columns
 *   4. Sign-off: name + date + time, all auto-filled
 *   5. Digital-first: paper metadata removed, real content preserved
 */

import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

// ── Risk Matrix — displayed as a read-only HTML panel ────────────────────────
// Colors: L = green, M = amber, H = orange, E = dark red (IMS standard tiers)
const RISK_MATRIX_HTML = `
<div style="font-family:'Nunito Sans',sans-serif;font-size:13px;color:#081C2E;">
  <p style="margin-bottom:8px;font-weight:600;">
    Use this matrix to assign Initial Risk and Residual Risk ratings in the Task Steps table below.
  </p>
  <p style="margin-bottom:4px;font-size:11px;color:#6b7a8d;">
    <strong>Likelihood (rows):</strong> A = Almost Certain &nbsp;|&nbsp; B = Likely &nbsp;|&nbsp; C = Possible &nbsp;|&nbsp; D = Unlikely &nbsp;|&nbsp; E = Rare
  </p>
  <p style="margin-bottom:10px;font-size:11px;color:#6b7a8d;">
    <strong>Consequence (columns):</strong> 1 = Minor &nbsp;|&nbsp; 2 = Moderate &nbsp;|&nbsp; 3 = Major &nbsp;|&nbsp; 4 = Catastrophic
  </p>
  <table style="border-collapse:collapse;min-width:320px;">
    <thead>
      <tr>
        <th style="border:1px solid #dde3ec;padding:6px 12px;background:#081C2E;color:#C49A28;font-weight:700;text-align:center;">L \\ C</th>
        <th style="border:1px solid #dde3ec;padding:6px 18px;background:#081C2E;color:#C49A28;font-weight:700;text-align:center;">1</th>
        <th style="border:1px solid #dde3ec;padding:6px 18px;background:#081C2E;color:#C49A28;font-weight:700;text-align:center;">2</th>
        <th style="border:1px solid #dde3ec;padding:6px 18px;background:#081C2E;color:#C49A28;font-weight:700;text-align:center;">3</th>
        <th style="border:1px solid #dde3ec;padding:6px 18px;background:#081C2E;color:#C49A28;font-weight:700;text-align:center;">4</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #dde3ec;padding:6px 12px;background:#f8fafc;font-weight:600;">A (Almost Certain)</td>
        <td style="border:1px solid #dde3ec;padding:6px;text-align:center;background:#d97706;color:#fff;font-weight:700;">H</td>
        <td style="border:1px solid #dde3ec;padding:6px;text-align:center;background:#d97706;color:#fff;font-weight:700;">H</td>
        <td style="border:1px solid #dde3ec;padding:6px;text-align:center;background:#991b1b;color:#fff;font-weight:700;">E</td>
        <td style="border:1px solid #dde3ec;padding:6px;text-align:center;background:#991b1b;color:#fff;font-weight:700;">E</td>
      </tr>
      <tr>
        <td style="border:1px solid #dde3ec;padding:6px 12px;background:#f8fafc;font-weight:600;">B (Likely)</td>
        <td style="border:1px solid #dde3ec;padding:6px;text-align:center;background:#ca8a04;color:#fff;font-weight:700;">M</td>
        <td style="border:1px solid #dde3ec;padding:6px;text-align:center;background:#d97706;color:#fff;font-weight:700;">H</td>
        <td style="border:1px solid #dde3ec;padding:6px;text-align:center;background:#d97706;color:#fff;font-weight:700;">H</td>
        <td style="border:1px solid #dde3ec;padding:6px;text-align:center;background:#991b1b;color:#fff;font-weight:700;">E</td>
      </tr>
      <tr>
        <td style="border:1px solid #dde3ec;padding:6px 12px;background:#f8fafc;font-weight:600;">C (Possible)</td>
        <td style="border:1px solid #dde3ec;padding:6px;text-align:center;background:#15803d;color:#fff;font-weight:700;">L</td>
        <td style="border:1px solid #dde3ec;padding:6px;text-align:center;background:#ca8a04;color:#fff;font-weight:700;">M</td>
        <td style="border:1px solid #dde3ec;padding:6px;text-align:center;background:#d97706;color:#fff;font-weight:700;">H</td>
        <td style="border:1px solid #dde3ec;padding:6px;text-align:center;background:#d97706;color:#fff;font-weight:700;">H</td>
      </tr>
      <tr>
        <td style="border:1px solid #dde3ec;padding:6px 12px;background:#f8fafc;font-weight:600;">D (Unlikely)</td>
        <td style="border:1px solid #dde3ec;padding:6px;text-align:center;background:#15803d;color:#fff;font-weight:700;">L</td>
        <td style="border:1px solid #dde3ec;padding:6px;text-align:center;background:#15803d;color:#fff;font-weight:700;">L</td>
        <td style="border:1px solid #dde3ec;padding:6px;text-align:center;background:#ca8a04;color:#fff;font-weight:700;">M</td>
        <td style="border:1px solid #dde3ec;padding:6px;text-align:center;background:#d97706;color:#fff;font-weight:700;">H</td>
      </tr>
      <tr>
        <td style="border:1px solid #dde3ec;padding:6px 12px;background:#f8fafc;font-weight:600;">E (Rare)</td>
        <td style="border:1px solid #dde3ec;padding:6px;text-align:center;background:#15803d;color:#fff;font-weight:700;">L</td>
        <td style="border:1px solid #dde3ec;padding:6px;text-align:center;background:#15803d;color:#fff;font-weight:700;">L</td>
        <td style="border:1px solid #dde3ec;padding:6px;text-align:center;background:#15803d;color:#fff;font-weight:700;">L</td>
        <td style="border:1px solid #dde3ec;padding:6px;text-align:center;background:#ca8a04;color:#fff;font-weight:700;">M</td>
      </tr>
    </tbody>
  </table>
  <p style="margin-top:8px;font-size:11px;color:#6b7a8d;">
    <span style="display:inline-block;width:14px;height:14px;background:#15803d;border-radius:2px;vertical-align:middle;margin-right:4px;"></span>L = Low &nbsp;
    <span style="display:inline-block;width:14px;height:14px;background:#ca8a04;border-radius:2px;vertical-align:middle;margin-right:4px;"></span>M = Medium &nbsp;
    <span style="display:inline-block;width:14px;height:14px;background:#d97706;border-radius:2px;vertical-align:middle;margin-right:4px;"></span>H = High &nbsp;
    <span style="display:inline-block;width:14px;height:14px;background:#991b1b;border-radius:2px;vertical-align:middle;margin-right:4px;"></span>E = Extreme
  </p>
</div>
`;

// ── SurveyJS Schema ──────────────────────────────────────────────────────────
const SCHEMA = {
  title: "",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [

        // ── Section 1: Job Information ──────────────────────────────────────
        // Rule 1: Report No. first, grouped with identity + job fields
        {
          type: "panel",
          name: "section_job_info",
          title: "1. Job Information",
          elements: [
            {
              type: "text",
              name: "reportNo",
              title: "JHA Number",
              isRequired: true,
              readOnly: true,
              description: "Auto-assigned on submission",
            },
            {
              type: "text",
              name: "reportedBy",
              title: "Reported By",
              isRequired: true,
              readOnly: true,
              description: "Auto-filled from your profile",
            },
            {
              type: "text",
              name: "employeeId",
              title: "Employee ID",
              isRequired: true,
              readOnly: true,
              description: "Auto-filled from your profile",
            },
            {
              type: "text",
              name: "position",
              title: "Position / Job Title",
              readOnly: true,
              description: "Auto-filled from your profile",
            },
            {
              type: "dropdown",
              name: "department",
              title: "Department",
              isRequired: true,
              choices: [
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
              ],
            },
            {
              type: "text",
              name: "jobTask",
              title: "Job / Task Description",
              isRequired: true,
              placeholder: "Describe the job or task being analysed",
            },
            {
              type: "text",
              name: "site",
              title: "Site / Location",
              isRequired: true,
            },
            {
              type: "text",
              name: "supervisor",
              title: "Supervisor",
              isRequired: true,
            },
            {
              type: "text",
              name: "reviewedBy",
              title: "Reviewed By",
            },
            {
              type: "text",
              name: "date",
              title: "Date",
              inputType: "date",
              isRequired: true,
              readOnly: true,
              description: "Auto-filled with today's date",
            },
          ],
        },

        // ── Section 2: Risk Matrix Reference ───────────────────────────────
        {
          type: "panel",
          name: "section_risk_matrix",
          title: "2. Risk Matrix Reference",
          elements: [
            {
              type: "html",
              name: "riskMatrixDisplay",
              html: RISK_MATRIX_HTML,
            },
          ],
        },

        // ── Section 3: Task Step Hazard Analysis ───────────────────────────
        // Rule 3: wideTable applied — 7 columns
        {
          type: "panel",
          name: "section_task_steps",
          title: "3. Task Step Hazard Analysis",
          elements: [
            {
              type: "matrixdynamic",
              name: "taskSteps",
              title: "Task Steps — add one row per task step",
              addRowText: "+ Add Step",
              removeRowText: "Remove",
              rowCount: 3,
              minRowCount: 1,
              columns: [
                {
                  name: "stepNo",
                  title: "#",
                  cellType: "text",
                  inputType: "number",
                  isRequired: true,
                  width: "60px",
                },
                {
                  name: "taskStep",
                  title: "Task Step Description",
                  cellType: "text",
                  isRequired: true,
                },
                {
                  name: "hazardsIdentified",
                  title: "Hazards Identified",
                  cellType: "text",
                  isRequired: true,
                },
                {
                  name: "initialRisk",
                  title: "Initial Risk (L×C)",
                  cellType: "text",
                  isRequired: true,
                  placeholder: "e.g. A×3 = H",
                },
                {
                  name: "controls",
                  title: "Control Measures",
                  cellType: "text",
                  isRequired: true,
                },
                {
                  name: "residualRisk",
                  title: "Residual Risk (L×C)",
                  cellType: "text",
                  isRequired: true,
                  placeholder: "e.g. D×2 = L",
                },
                {
                  name: "responsible",
                  title: "Responsible Person",
                  cellType: "text",
                  isRequired: true,
                },
              ],
            },
          ],
        },

        // ── Section 4: Submitted By ─────────────────────────────────────────
        // Rule 4: name + date + time, all auto-filled, no manual signature
        {
          type: "panel",
          name: "section_signoff",
          title: "4. Submitted By",
          elements: [
            {
              type: "text",
              name: "signoffReportedByName",
              title: "Submitted By — Full Name",
              isRequired: true,
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "signoffReportedByDate",
              title: "Submission Date",
              inputType: "date",
              isRequired: true,
              readOnly: true,
              description: "Auto-filled with today's date",
            },
            {
              type: "text",
              name: "signoffSubmissionTime",
              title: "Submission Time",
              isRequired: true,
              readOnly: true,
              description: "Auto-filled with current time",
            },
          ],
        },

      ],
    },
  ],
  checkErrorsMode: "onComplete",
  showPrevButton: false,
};

// ── Page Component ────────────────────────────────────────────────────────────
export default function FRM_HSE_001() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-001"
        title="Job Hazard Analysis (JHA)"
        revision="01"
        approvalDate="01 March 2026"
        minRole="field_worker"
        wideTable
        schema={SCHEMA}
        identityFields={{
          fullName: "reportedBy",
          employeeId: "employeeId",
          department: "department",
          position: "position",
          date: "date",
        }}
      />
    </Layout>
  );
}
