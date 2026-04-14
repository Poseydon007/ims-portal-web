import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "QA Task Follow-Up Checklist",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "checklistDetails",
          title: "1. Checklist Details",
          elements: [
            {
              type: "text",
              name: "siteProjectDepartment",
              title: "Site / Project / Department",
              isRequired: true
            },
            {
              type: "text",
              name: "periodCovered",
              title: "Period Covered",
              placeholder: "e.g., Week of 14 April 2026",
              isRequired: true
            },
            {
              type: "text",
              name: "reportedBy",
              title: "Reviewed By Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "employeeId",
              title: "Reviewed By Employee ID",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "reviewDate",
              title: "Review Date",
              inputType: "date",
              readOnly: true,
              description: "Auto-filled with today's date"
            },
            {
              type: "dropdown",
              name: "department",
              title: "Department",
              isRequired: true,
              choices: [
                "HSE", "Operations – Drilling", "Operations – Geology", "Operations – Survey", 
                "Maintenance", "Logistics & Transport", "Warehouse & Supply", "Security", 
                "Administration", "Finance & Accounting", "Human Resources", "IT & Communications", 
                "Management", "Quality Assurance", "Environmental", "Training & Competency", 
                "Contracts & Procurement", "Camp & Catering", "Medical & First Aid", "Other"
              ]
            }
          ]
        },
        {
          type: "matrixdynamic",
          name: "dailyTasks",
          title: "2. Daily Tasks — ISO References",
          columns: [
            { name: "task", title: "Task / Activity", cellType: "text", readOnly: true },
            { name: "iso", title: "ISO Reference", cellType: "text", readOnly: true },
            { 
              name: "status", 
              title: "Status", 
              cellType: "radiogroup", 
              isRequired: true,
              choices: ["Yes", "No", "N/A"]
            },
            { name: "comments", title: "Comments / Findings", cellType: "text" }
          ],
          rowCount: 10,
          minRowCount: 10,
          allowAddRows: false,
          allowRemoveRows: false,
          defaultValue: [
            { task: "Corrective Action Requests reviewed and actioned", iso: "ISO 9001:2015 Cl. 10.2" },
            { task: "Risk & Opportunities Assessment Record (QA/QC)", iso: "ISO 9001:2015 Cl. 6.1" },
            { task: "Waste Handling & Disposal Schedule compliance", iso: "ISO 14001:2015 Cl. 8.1" },
            { task: "Observation / Incident Cards reviewed", iso: "ISO 45001:2018 Cl. 10.2" },
            { task: "Incident / Accident Flash Notifications issued", iso: "ISO 45001:2018 Cl. 10.2" },
            { task: "Incident & Accident Investigation Reports filed", iso: "ISO 45001:2018 Cl. 10.2" },
            { task: "Dangerous Occurrence Reports filed", iso: "ISO 45001:2018 Cl. 10.2" },
            { task: "Incident Statements collected", iso: "ISO 45001:2018 Cl. 10.2" },
            { task: "Near Miss Reports filed and reviewed", iso: "ISO 45001:2018 Cl. 10.2" },
            { task: "Visitor Register maintained", iso: "ISO 45001:2018 Cl. 8.1.4.2" }
          ]
        },
        {
          type: "matrixdynamic",
          name: "weeklyTasks",
          title: "3. Weekly Tasks — ISO References",
          columns: [
            { name: "task", title: "Task / Activity", cellType: "text", readOnly: true },
            { name: "iso", title: "ISO Reference", cellType: "text", readOnly: true },
            { 
              name: "status", 
              title: "Status", 
              cellType: "radiogroup", 
              isRequired: true,
              choices: ["Yes", "No", "N/A"]
            },
            { name: "comments", title: "Comments / Findings", cellType: "text" }
          ],
          rowCount: 4,
          minRowCount: 4,
          allowAddRows: false,
          allowRemoveRows: false,
          defaultValue: [
            { task: "Corrective Action Log reviewed and updated", iso: "ISO 9001:2015 Cl. 10.2" },
            { task: "Fire Prevention Checklist completed", iso: "ISO 45001:2018 Cl. 8.1.2, 8.2" },
            { task: "Index Register – Accident / Incident updated", iso: "ISO 45001:2018 Cl. 10.2" },
            { task: "Toolbox Talk records filed", iso: "ISO 45001:2018 Cl. 7.3" }
          ]
        },
        {
          type: "matrixdynamic",
          name: "monthlyTasks",
          title: "4. Monthly Tasks — ISO References",
          columns: [
            { name: "task", title: "Task / Activity", cellType: "text", readOnly: true },
            { name: "iso", title: "ISO Reference", cellType: "text", readOnly: true },
            { 
              name: "status", 
              title: "Status", 
              cellType: "radiogroup", 
              isRequired: true,
              choices: ["Yes", "No", "N/A"]
            },
            { name: "comments", title: "Comments / Findings", cellType: "text" }
          ],
          rowCount: 8,
          minRowCount: 8,
          allowAddRows: false,
          allowRemoveRows: false,
          defaultValue: [
            { task: "Emergency Evacuation Drill Record completed", iso: "ISO 45001:2018 Cl. 8.2" },
            { task: "Aspect Impact Assessment – HSE reviewed", iso: "ISO 45001:2018 Cl. 6.1.2" },
            { task: "Aspect Impact Assessment – Maintenance reviewed", iso: "ISO 45001:2018 Cl. 6.1.2" },
            { task: "Monthly Injury Summary compiled", iso: "ISO 45001:2018 Cl. 9.1" },
            { task: "Monthly Violation Report issued", iso: "ISO 45001:2018 Cl. 9.1" },
            { task: "Risk & Opportunities Assessment – Warehouse", iso: "ISO 9001:2015 Cl. 6.1" },
            { task: "Emergency Plan reviewed", iso: "ISO 45001:2018 Cl. 8.2" },
            { task: "Fire Drill Report completed", iso: "ISO 45001:2018 Cl. 8.2" }
          ]
        },
        {
          type: "matrixdynamic",
          name: "annualTasks",
          title: "5. Annual Tasks — ISO References",
          columns: [
            { name: "task", title: "Task / Activity", cellType: "text", readOnly: true },
            { name: "iso", title: "ISO Reference", cellType: "text", readOnly: true },
            { 
              name: "status", 
              title: "Status", 
              cellType: "radiogroup", 
              isRequired: true,
              choices: ["Yes", "No", "N/A"]
            },
            { name: "comments", title: "Comments / Findings", cellType: "text" }
          ],
          rowCount: 7,
          minRowCount: 7,
          allowAddRows: false,
          allowRemoveRows: false,
          defaultValue: [
            { task: "Mock Drill Instructions reviewed and updated", iso: "ISO 9001:2015 Cl. 8.2" },
            { task: "JHA / Job Hazard Assessment Template reviewed", iso: "ISO 45001:2018 Cl. 6.1.2" },
            { task: "Register of Environment Aspect-Impact Evaluation", iso: "ISO 14001:2015 Cl. 6.1.2" },
            { task: "Fire Extinguisher Inspection Log annual review", iso: "ISO 45001:2018 Cl. 8.2" },
            { task: "Employee Safety Culture Survey conducted", iso: "ISO 45001:2018 Cl. 5.4" },
            { task: "HIRA – Hazard Identification & Risk Assessment", iso: "ISO 45001:2018 Cl. 6.1.2" },
            { task: "Major Emergency Preparedness Plan reviewed", iso: "ISO 45001:2018 Cl. 8.2, 9.1" }
          ]
        },
        {
          type: "matrixdynamic",
          name: "correctiveActions",
          title: "6. Corrective Actions Required",
          columns: [
            { name: "issue", title: "Non-Conformity / Issue", cellType: "text", isRequired: true },
            { name: "action", title: "Action Required", cellType: "text", isRequired: true },
            { name: "responsible", title: "Responsible", cellType: "text", isRequired: true },
            { name: "deadline", title: "Deadline", cellType: "text", inputType: "date" },
            { 
              name: "status", 
              title: "Status", 
              cellType: "dropdown",
              choices: ["Open", "In Progress", "Closed"]
            }
          ],
          rowCount: 0,
          minRowCount: 0,
          addRowText: "+ Add Action"
        },
        {
          type: "panel",
          name: "reviewerCommentsPanel",
          title: "7. Reviewer Comments",
          elements: [
            {
              type: "comment",
              name: "reviewerComments",
              title: "Comments",
              rows: 3
            }
          ]
        },
        {
          type: "panel",
          name: "submissionPanel",
          title: "8. Submitted By",
          elements: [
            {
              type: "text",
              name: "submittedBy",
              title: "Submitted By Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "submissionDate",
              title: "Submission Date",
              inputType: "date",
              readOnly: true,
              description: "Auto-filled with today's date"
            }
          ]
        }
      ]
    }
  ],
  checkErrorsMode: "onComplete",
  showPrevButton: false,
};

export default function FRM_SYS_006() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-SYS-006"
        title="QA Task Follow-Up Checklist"
        revision="01"
        approvalDate="09 April 2026"
        minRole="field_worker"
        wideTable={false}
        schema={SCHEMA}
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
