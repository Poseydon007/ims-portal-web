/**
 * TE-IMS-FRM-HSE-001 — Job Hazard Analysis (JHA)
 * Rebuilt using SurveyJS + ImsForm wrapper.
 */
import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const DEPARTMENT_LIST = [
  "HSE", "Operations – Drilling", "Operations – Geology", "Operations – Survey",
  "Maintenance", "Logistics & Transport", "Warehouse & Supply", "Security",
  "Administration", "Finance & Accounting", "Human Resources", "IT & Communications",
  "Management", "Quality Assurance", "Environmental", "Training & Competency",
  "Contracts & Procurement", "Camp & Catering", "Medical & First Aid", "Other",
];

const RISK_LEVELS = ["Low (L)", "Medium (M)", "High (H)", "Extreme (E)"];

const SCHEMA = {
  title: "",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "section_job_info",
          title: "1. Job Information",
          elements: [
            { type: "text", name: "reportNo", title: "JHA Report No.", isRequired: true, readOnly: true, description: "Auto-assigned" },
            { type: "text", name: "jobTask", title: "Job / Task Description", isRequired: true },
            { type: "text", name: "dateOfAssessment", title: "Date of Assessment", inputType: "date", isRequired: true },
            { type: "text", name: "location", title: "Location / Site Area", isRequired: true },
            { type: "dropdown", name: "department", title: "Department", isRequired: true, choices: DEPARTMENT_LIST },
            { type: "text", name: "site", title: "Site / Project Name", isRequired: true },
            { type: "text", name: "reportedBy", title: "Prepared By (Full Name)", isRequired: true, readOnly: true, description: "Auto-filled from your login profile" },
            { type: "text", name: "employeeId", title: "Employee ID", isRequired: true, readOnly: true, description: "Auto-filled from your login profile" },
            { type: "text", name: "position", title: "Position / Job Title", readOnly: true, description: "Auto-filled from your login profile" },
            { type: "text", name: "supervisor", title: "Supervisor / Site Manager", isRequired: true },
            { type: "text", name: "reviewedBy", title: "Reviewed By" },
          ],
        },
        {
          type: "panel",
          name: "section_risk_reference",
          title: "2. Risk Rating Reference",
          elements: [
            {
              type: "html",
              name: "riskMatrixInfo",
              html: `<div style="font-size:0.82rem;color:#4a5568;line-height:1.8;padding:8px 0;">
                <strong>Likelihood:</strong> A = Almost Certain &nbsp;|&nbsp; B = Likely &nbsp;|&nbsp; C = Possible &nbsp;|&nbsp; D = Unlikely &nbsp;|&nbsp; E = Rare<br/>
                <strong>Consequence:</strong> 1 = Minor &nbsp;|&nbsp; 2 = Moderate &nbsp;|&nbsp; 3 = Major &nbsp;|&nbsp; 4 = Catastrophic<br/>
                <strong>Rating:</strong>
                <span style="color:#16a34a;font-weight:600;">L = Low</span> &nbsp;|&nbsp;
                <span style="color:#ca8a04;font-weight:600;">M = Medium</span> &nbsp;|&nbsp;
                <span style="color:#dc2626;font-weight:600;">H = High</span> &nbsp;|&nbsp;
                <span style="color:#7c3aed;font-weight:600;">E = Extreme — Stop work immediately</span>
              </div>`,
            },
          ],
        },
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
              rowCount: 1,
              minRowCount: 1,
              columns: [
                { name: "step", title: "Task Step Description", cellType: "text", isRequired: true },
                { name: "hazards", title: "Hazards Identified", cellType: "text", isRequired: true },
                { name: "initialRisk", title: "Initial Risk", cellType: "dropdown", choices: RISK_LEVELS, isRequired: true },
                { name: "controls", title: "Control Measures", cellType: "text", isRequired: true },
                { name: "residualRisk", title: "Residual Risk", cellType: "dropdown", choices: RISK_LEVELS, isRequired: true },
                { name: "responsible", title: "Responsible Person", cellType: "text" },
              ],
            },
          ],
        },
        {
          type: "panel",
          name: "section_ppe",
          title: "4. PPE Required for This Task",
          elements: [
            {
              type: "checkbox",
              name: "ppeRequired",
              title: "Select all PPE required",
              choices: [
                "Hard Hat", "Safety Glasses", "Face Shield", "Hearing Protection",
                "Dust Mask / Respirator", "High-Visibility Vest", "Safety Gloves",
                "Chemical-Resistant Gloves", "Steel-Toed Boots", "Safety Harness / Lanyard",
                "Coveralls", "Flame-Resistant Clothing",
              ],
              hasOther: true,
              otherText: "Other (specify)",
            },
          ],
        },
        {
          type: "panel",
          name: "section_emergency",
          title: "5. Emergency Arrangements",
          elements: [
            { type: "text", name: "emergencyContact", title: "Emergency Contact / Muster Point", isRequired: true },
            { type: "text", name: "firstAidLocation", title: "First Aid Kit Location" },
            { type: "text", name: "nearestHospital", title: "Nearest Medical Facility" },
          ],
        },
        {
          type: "panel",
          name: "section_signoff",
          title: "6. Submitted By",
          elements: [
            { type: "text", name: "signoffReportedByName", title: "Submitted By — Full Name", isRequired: true, readOnly: true, description: "Auto-filled from your login profile" },
            { type: "text", name: "signoffReportedByDate", title: "Submission Date", inputType: "date", isRequired: true, readOnly: true, description: "Auto-filled with today's date" },
          ],
        },
      ],
    },
  ],
  checkErrorsMode: "onComplete",
  showPrevButton: false,
};

export default function FRM_HSE_001() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-001"
        title="Job Hazard Analysis (JHA)"
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
