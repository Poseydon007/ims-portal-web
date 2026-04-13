/**
 * TE-IMS-FRM-HSE-003 — Near Miss Report Form
 * Rebuilt using SurveyJS. All fields preserved from original.
 * Compound fields split. Risk rating uses Likelihood × Consequence matrix.
 * Identity fields auto-filled from IMS session (read-only).
 */

import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

// ── SurveyJS JSON Schema ─────────────────────────────────────────────────────
const SCHEMA = {
  title: "",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        // ── Section 1: Report Details ──
        {
          type: "panel",
          name: "section_report_details",
          title: "1. Report Details",
          elements: [
            {
              type: "text",
              name: "reportNo",
              title: "Near Miss Report No.",
              isRequired: true,
              readOnly: true,
              description: "Auto-assigned when form is opened",
            },
            {
              type: "text",
              name: "dateOfOccurrence",
              title: "Date of Occurrence",
              inputType: "date",
              isRequired: true,
            },
            {
              type: "text",
              name: "timeOfOccurrence",
              title: "Time of Occurrence",
              inputType: "time",
              isRequired: true,
            },
            {
              type: "text",
              name: "location",
              title: "Location / Site Area",
              isRequired: true,
              placeholder: "e.g. Drill Pad 3, Core Yard, Access Road",
            },
            // Compound field "Department / Site" → split into two
            {
              type: "dropdown",
              name: "department",
              title: "Department",
              isRequired: true,
              placeholder: "Select department...",
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
              name: "site",
              title: "Site / Project Name",
              isRequired: true,
              placeholder: "e.g. Block A Exploration Site",
            },
            // Identity — auto-filled and locked from session
            {
              type: "text",
              name: "reportedBy",
              title: "Reported By (Full Name)",
              isRequired: true,
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "employeeId",
              title: "Employee ID",
              isRequired: true,
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "position",
              title: "Position / Job Title",
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
          ],
        },

        // ── Section 2: Near Miss Classification ──
        {
          type: "panel",
          name: "section_classification",
          title: "2. Near Miss Classification",
          elements: [
            {
              type: "checkbox",
              name: "classification",
              title: "Select all that apply:",
              isRequired: true,
              choices: [
                { value: "unsafe_act", text: "Unsafe Act" },
                { value: "unsafe_condition", text: "Unsafe Condition" },
                { value: "equipment_failure", text: "Equipment Failure" },
                { value: "environmental", text: "Environmental" },
                { value: "procedural", text: "Procedural / Non-Compliance" },
                { value: "other", text: "Other" },
              ],
            },
            {
              type: "text",
              name: "classificationOther",
              title: "If 'Other', please specify:",
              visibleIf: "{classification} contains 'other'",
              isRequired: true,
            },
          ],
        },

        // ── Section 3: Description ──
        {
          type: "panel",
          name: "section_description",
          title: "3. Description of Near Miss",
          elements: [
            {
              type: "comment",
              name: "description",
              title: "Describe what happened, what could have happened, and the sequence of events:",
              isRequired: true,
              rows: 5,
              placeholder: "Provide a clear, factual description. Include what you were doing, what went wrong, and what the potential outcome could have been.",
            },
            {
              type: "comment",
              name: "immediateAction",
              title: "Immediate Action Taken:",
              rows: 3,
              placeholder: "Describe any immediate steps taken to control the situation.",
            },
          ],
        },

        // ── Section 4: Contributing Factors ──
        {
          type: "panel",
          name: "section_factors",
          title: "4. Contributing Factors",
          elements: [
            {
              type: "checkbox",
              name: "contributingFactors",
              title: "Select all contributing factors:",
              choices: [
                { value: "fatigue", text: "Fatigue / Inattention" },
                { value: "lack_of_training", text: "Lack of Training / Competency" },
                { value: "poor_communication", text: "Poor Communication" },
                { value: "inadequate_ppe", text: "Inadequate or Missing PPE" },
                { value: "equipment_defect", text: "Equipment Defect / Failure" },
                { value: "weather", text: "Weather / Environmental Conditions" },
                { value: "rushing", text: "Rushing / Taking Shortcuts" },
                { value: "inadequate_procedure", text: "Inadequate Procedure / Work Instruction" },
                { value: "poor_housekeeping", text: "Poor Housekeeping" },
                { value: "inadequate_supervision", text: "Inadequate Supervision" },
                { value: "other", text: "Other" },
              ],
            },
            {
              type: "text",
              name: "contributingFactorsOther",
              title: "If 'Other', please specify:",
              visibleIf: "{contributingFactors} contains 'other'",
              isRequired: true,
            },
          ],
        },

        // ── Section 5: Risk Assessment ──
        {
          type: "panel",
          name: "section_risk",
          title: "5. Risk Assessment — Potential Consequence if Near Miss Had Resulted in Incident",
          elements: [
            {
              type: "dropdown",
              name: "likelihood",
              title: "Likelihood (A–E)",
              isRequired: true,
              choices: [
                { value: "A", text: "A – Almost Certain (expected to occur in most circumstances)" },
                { value: "B", text: "B – Likely (will probably occur in most circumstances)" },
                { value: "C", text: "C – Possible (might occur at some time)" },
                { value: "D", text: "D – Unlikely (could occur at some time)" },
                { value: "E", text: "E – Rare (may occur only in exceptional circumstances)" },
              ],
            },
            {
              type: "dropdown",
              name: "consequence",
              title: "Consequence (1–4)",
              isRequired: true,
              choices: [
                { value: "1", text: "1 – Minor (first aid, minor property damage)" },
                { value: "2", text: "2 – Moderate (medical treatment, moderate damage)" },
                { value: "3", text: "3 – Major (lost time injury, major damage)" },
                { value: "4", text: "4 – Catastrophic (fatality, permanent disability, total loss)" },
              ],
            },
            {
              type: "expression",
              name: "riskRating",
              title: "Risk Rating (Auto-Calculated)",
              expression: "iif({likelihood} = 'A' and {consequence} = '1', 'H – High', iif({likelihood} = 'A' and {consequence} = '2', 'H – High', iif({likelihood} = 'A' and {consequence} = '3', 'E – Extreme', iif({likelihood} = 'A' and {consequence} = '4', 'E – Extreme', iif({likelihood} = 'B' and {consequence} = '1', 'M – Medium', iif({likelihood} = 'B' and {consequence} = '2', 'H – High', iif({likelihood} = 'B' and {consequence} = '3', 'H – High', iif({likelihood} = 'B' and {consequence} = '4', 'E – Extreme', iif({likelihood} = 'C' and {consequence} = '1', 'L – Low', iif({likelihood} = 'C' and {consequence} = '2', 'M – Medium', iif({likelihood} = 'C' and {consequence} = '3', 'H – High', iif({likelihood} = 'C' and {consequence} = '4', 'H – High', iif({likelihood} = 'D' and {consequence} = '1', 'L – Low', iif({likelihood} = 'D' and {consequence} = '2', 'L – Low', iif({likelihood} = 'D' and {consequence} = '3', 'M – Medium', iif({likelihood} = 'D' and {consequence} = '4', 'H – High', iif({likelihood} = 'E' and {consequence} = '1', 'L – Low', iif({likelihood} = 'E' and {consequence} = '2', 'L – Low', iif({likelihood} = 'E' and {consequence} = '3', 'M – Medium', iif({likelihood} = 'E' and {consequence} = '4', 'M – Medium', '')))))))))))))))))))))",
              displayStyle: "decimal",
            },
          ],
        },

        // ── Section 6: Corrective Actions ──
        {
          type: "panel",
          name: "section_actions",
          title: "6. Recommended Corrective Actions",
          elements: [
            {
              type: "matrixdynamic",
              name: "correctiveActions",
              title: "Action Items",
              addRowText: "+ Add Action",
              removeRowText: "Remove",
              rowCount: 1,
              minRowCount: 1,
              columns: [
                {
                  name: "action",
                  title: "Corrective Action",
                  cellType: "text",
                  isRequired: true,
                },
                {
                  name: "responsible",
                  title: "Responsible Person",
                  cellType: "text",
                  isRequired: true,
                },
                {
                  name: "dueDate",
                  title: "Due Date",
                  cellType: "text",
                  inputType: "date",
                  isRequired: true,
                },
                {
                  name: "status",
                  title: "Status",
                  cellType: "dropdown",
                  choices: ["Open", "In Progress", "Closed", "Overdue"],
                  defaultValue: "Open",
                },
              ],
            },
          ],
        },

        // ── Section 7: Submitted By ──
        // Supervisor Review and HSE Officer Approval are handled via the
        // digital approval workflow — they do NOT appear as manual fields here.
        {
          type: "panel",
          name: "section_signoff",
          title: "7. Submitted By",
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
            },
          ],
        },
      ],
    },
  ],
  checkErrorsMode: "onComplete",
  showPrevButton: false,
};

// ── Page component ───────────────────────────────────────────────────────────
export default function FRM_HSE_003() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-003"
        title="Near Miss Report Form"
        revision="01"
        approvalDate="01 March 2026"
        minRole="field_worker"
        schema={SCHEMA}
        identityFields={{
          fullName: "reportedBy",
          employeeId: "employeeId",
          department: "department",
          position: "position",
        }}
      />
    </Layout>
  );
}
