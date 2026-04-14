import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const DEPARTMENT_LIST = [
  "HSE", "Operations – Drilling", "Operations – Geology", "Operations – Survey",
  "Maintenance", "Logistics & Transport", "Warehouse & Supply", "Security",
  "Administration", "Finance & Accounting", "Human Resources", "IT & Communications",
  "Management", "Quality Assurance", "Environmental", "Training & Competency",
  "Contracts & Procurement", "Camp & Catering", "Medical & First Aid", "Other"
];

const RISK_EXPRESSION = "iif({row.likelihood} == 'A' and {row.consequence} == '1', 'H', iif({row.likelihood} == 'A' and {row.consequence} == '2', 'H', iif({row.likelihood} == 'A' and {row.consequence} == '3', 'E', iif({row.likelihood} == 'A' and {row.consequence} == '4', 'E', iif({row.likelihood} == 'B' and {row.consequence} == '1', 'M', iif({row.likelihood} == 'B' and {row.consequence} == '2', 'H', iif({row.likelihood} == 'B' and {row.consequence} == '3', 'H', iif({row.likelihood} == 'B' and {row.consequence} == '4', 'E', iif({row.likelihood} == 'C' and {row.consequence} == '1', 'L', iif({row.likelihood} == 'C' and {row.consequence} == '2', 'M', iif({row.likelihood} == 'C' and {row.consequence} == '3', 'H', iif({row.likelihood} == 'C' and {row.consequence} == '4', 'H', iif({row.likelihood} == 'D' and {row.consequence} == '1', 'L', iif({row.likelihood} == 'D' and {row.consequence} == '2', 'L', iif({row.likelihood} == 'D' and {row.consequence} == '3', 'M', iif({row.likelihood} == 'D' and {row.consequence} == '4', 'H', iif({row.likelihood} == 'E' and {row.consequence} == '1', 'L', iif({row.likelihood} == 'E' and {row.consequence} == '2', 'L', iif({row.likelihood} == 'E' and {row.consequence} == '3', 'L', iif({row.likelihood} == 'E' and {row.consequence} == '4', 'M', ''))))))))))))))))))))";

const SCHEMA = {
  title: "Job Hazard Analysis (JHA)",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "section_job_information",
          title: "1. JOB INFORMATION",
          elements: [
            { type: "text", name: "jobTask", title: "Job/Task", isRequired: true },
            { type: "text", name: "date", title: "Date", inputType: "date", isRequired: true, readOnly: true, description: "Auto-filled with today's date" },
            { type: "dropdown", name: "department", title: "Department", isRequired: true, choices: DEPARTMENT_LIST },
            { type: "text", name: "site", title: "Site", isRequired: true },
            { type: "text", name: "reportNo", title: "JHA Number", isRequired: true, readOnly: true, description: "Auto-assigned on submission" },
            { type: "text", name: "supervisor", title: "Supervisor", isRequired: true, readOnly: true, description: "Auto-filled from your login profile" },
            { type: "text", name: "reviewedBy", title: "Reviewed By" },
            { type: "text", name: "reportedBy", title: "Reported By / Full Name", isRequired: true, readOnly: true, description: "Auto-filled from your login profile" },
            { type: "text", name: "employeeId", title: "Employee ID", isRequired: true, readOnly: true, description: "Auto-filled from your login profile" },
            { type: "text", name: "position", title: "Position", isRequired: true, readOnly: true, description: "Auto-filled from your login profile" }
          ]
        },
        {
          type: "panel",
          name: "section_risk_matrix_reference",
          title: "2. RISK MATRIX REFERENCE",
          elements: [
            {
              type: "html",
              name: "risk_matrix_info",
              html: `
                <div style="font-family: sans-serif; font-size: 14px; line-height: 1.6;">
                  <p><strong>Likelihood:</strong> A=Almost Certain, B=Likely, C=Possible, D=Unlikely, E=Rare</p>
                  <p><strong>Consequence:</strong> 1=Minor, 2=Moderate, 3=Major, 4=Catastrophic</p>
                  <table style="width: 100%; border-collapse: collapse; margin-top: 10px; text-align: center;">
                    <thead>
                      <tr style="background-color: #f2f2f2;">
                        <th style="border: 1px solid #ddd; padding: 8px;">Matrix</th>
                        <th style="border: 1px solid #ddd; padding: 8px;">C1</th>
                        <th style="border: 1px solid #ddd; padding: 8px;">C2</th>
                        <th style="border: 1px solid #ddd; padding: 8px;">C3</th>
                        <th style="border: 1px solid #ddd; padding: 8px;">C4</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">A</td><td style="border: 1px solid #ddd; padding: 8px; background-color: #ffcccc;">H</td><td style="border: 1px solid #ddd; padding: 8px; background-color: #ffcccc;">H</td><td style="border: 1px solid #ddd; padding: 8px; background-color: #ff0000; color: white;">E</td><td style="border: 1px solid #ddd; padding: 8px; background-color: #ff0000; color: white;">E</td></tr>
                      <tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">B</td><td style="border: 1px solid #ddd; padding: 8px; background-color: #ffffcc;">M</td><td style="border: 1px solid #ddd; padding: 8px; background-color: #ffcccc;">H</td><td style="border: 1px solid #ddd; padding: 8px; background-color: #ffcccc;">H</td><td style="border: 1px solid #ddd; padding: 8px; background-color: #ff0000; color: white;">E</td></tr>
                      <tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">C</td><td style="border: 1px solid #ddd; padding: 8px; background-color: #ccffcc;">L</td><td style="border: 1px solid #ddd; padding: 8px; background-color: #ffffcc;">M</td><td style="border: 1px solid #ddd; padding: 8px; background-color: #ffcccc;">H</td><td style="border: 1px solid #ddd; padding: 8px; background-color: #ffcccc;">H</td></tr>
                      <tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">D</td><td style="border: 1px solid #ddd; padding: 8px; background-color: #ccffcc;">L</td><td style="border: 1px solid #ddd; padding: 8px; background-color: #ccffcc;">L</td><td style="border: 1px solid #ddd; padding: 8px; background-color: #ffffcc;">M</td><td style="border: 1px solid #ddd; padding: 8px; background-color: #ffcccc;">H</td></tr>
                      <tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">E</td><td style="border: 1px solid #ddd; padding: 8px; background-color: #ccffcc;">L</td><td style="border: 1px solid #ddd; padding: 8px; background-color: #ccffcc;">L</td><td style="border: 1px solid #ddd; padding: 8px; background-color: #ccffcc;">L</td><td style="border: 1px solid #ddd; padding: 8px; background-color: #ffffcc;">M</td></tr>
                    </tbody>
                  </table>
                </div>
              `
            }
          ]
        },
        {
          type: "panel",
          name: "section_task_step_analysis",
          title: "3. TASK STEP HAZARD ANALYSIS",
          elements: [
            {
              type: "matrixdynamic",
              name: "taskSteps",
              title: "Analysis Steps",
              titleLocation: "hidden",
              addRowText: "+ Add Step",
              rowCount: 3,
              minRowCount: 1,
              columns: [
                { name: "stepNo", title: "#", cellType: "text", width: "50px" },
                { name: "taskStep", title: "Task Step", cellType: "text", isRequired: true },
                { name: "hazards", title: "Hazards Identified", cellType: "text", isRequired: true },
                {
                  name: "likelihood",
                  title: "Initial L",
                  cellType: "dropdown",
                  choices: ["A", "B", "C", "D", "E"],
                  isRequired: true
                },
                {
                  name: "consequence",
                  title: "Initial C",
                  cellType: "dropdown",
                  choices: ["1", "2", "3", "4"],
                  isRequired: true
                },
                {
                  name: "initialRiskRating",
                  title: "Initial Risk",
                  cellType: "expression",
                  expression: RISK_EXPRESSION.replace(/row\./g, ""),
                  readOnly: true
                },
                { name: "controls", title: "Controls", cellType: "text", isRequired: true },
                {
                  name: "resLikelihood",
                  title: "Res L",
                  cellType: "dropdown",
                  choices: ["A", "B", "C", "D", "E"],
                  isRequired: true
                },
                {
                  name: "resConsequence",
                  title: "Res C",
                  cellType: "dropdown",
                  choices: ["1", "2", "3", "4"],
                  isRequired: true
                },
                {
                  name: "residualRiskRating",
                  title: "Res Risk",
                  cellType: "expression",
                  expression: RISK_EXPRESSION.replace(/likelihood/g, "resLikelihood").replace(/consequence/g, "resConsequence").replace(/row\./g, ""),
                  readOnly: true
                },
                { name: "responsible", title: "Responsible", cellType: "text", isRequired: true }
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "section_signoff",
          title: "4. SUBMITTED BY",
          elements: [
            { type: "text", name: "signoffReportedByName", title: "Submitted By — Full Name", isRequired: true, readOnly: true, description: "Auto-filled from your login profile" },
            { type: "text", name: "signoffReportedByDate", title: "Submission Date", inputType: "date", isRequired: true, readOnly: true, description: "Auto-filled with today's date" }
          ]
        }
      ]
    }
  ],
  checkErrorsMode: "onComplete",
  showPrevButton: false
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
        wideTable={true}
        identityFields={{
          fullName: "reportedBy",
          employeeId: "employeeId",
          department: "department",
          position: "position"
        }}
      />
    </Layout>
  );
}
