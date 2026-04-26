import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Machine Guarding Inspection Register",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "inspection_details",
          title: "1. Inspection Details",
          elements: [
            { type: "text", name: "reportNo", title: "Report No.", isRequired: true, readOnly: true, description: "Auto-assigned on submission" },
            {
              type: "text",
              name: "siteLocation",
              title: "Site / Location",
              isRequired: true
            },
            {
              type: "text",
              name: "reportedBy",
              title: "Inspector Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "employeeId",
              title: "Inspector Employee ID",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "position",
              title: "Inspector Position",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "year",
              title: "Year",
              placeholder: "e.g., 2026",
              isRequired: true
            },
            {
              type: "dropdown",
              name: "department",
              title: "Department",
              isRequired: true,
              description: "Auto-filled from your login profile",
              readOnly: true,
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
          type: "panel",
          name: "status_legend",
          title: "2. Status Legend",
          elements: [
            {
              type: "html",
              name: "legend_info",
              html: `
                <div style="background-color: #f8f9fa; border: 1px solid #dee2e6; padding: 15px; border-radius: 4px;">
                  <p style="margin-bottom: 10px; font-weight: bold;">Status Codes:</p>
                  <ul style="list-style-type: none; padding-left: 0; margin-bottom: 0;">
                    <li><strong>OK</strong> = Guarding in place and functional</li>
                    <li><strong>D1, D2...</strong> = Deviation Reference No.</li>
                    <li><strong>X</strong> = Not Inspected</li>
                    <li><strong>N/A</strong> = Not Applicable</li>
                    <li><strong>R</strong> = Requires Repair/Replacement</li>
                  </ul>
                </div>
              `
            }
          ]
        },
        {
          type: "panel",
          name: "monthly_register",
          title: "3. Monthly Inspection Register",
          elements: [
            {
              type: "matrixdynamic",
              name: "inspectionRegister",
              title: "Record each machine/equipment. Use status codes for each month.",
              addRowText: "+ Add Equipment",
              minRowCount: 1,
              rowCount: 10,
              columns: [
                { name: "no", title: "No.", cellType: "text", width: "50px" },
                { name: "equipmentId", title: "Equipment / Machine ID", cellType: "text", isRequired: true },
                { name: "description", title: "Description / Location", cellType: "text", isRequired: true },
                { name: "jan", title: "JAN", cellType: "text", width: "60px" },
                { name: "feb", title: "FEB", cellType: "text", width: "60px" },
                { name: "mar", title: "MAR", cellType: "text", width: "60px" },
                { name: "apr", title: "APR", cellType: "text", width: "60px" },
                { name: "may", title: "MAY", cellType: "text", width: "60px" },
                { name: "jun", title: "JUN", cellType: "text", width: "60px" },
                { name: "jul", title: "JUL", cellType: "text", width: "60px" },
                { name: "aug", title: "AUG", cellType: "text", width: "60px" },
                { name: "sep", title: "SEP", cellType: "text", width: "60px" },
                { name: "oct", title: "OCT", cellType: "text", width: "60px" },
                { name: "nov", title: "NOV", cellType: "text", width: "60px" },
                { name: "dec", title: "DEC", cellType: "text", width: "60px" }
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "deviation_report",
          title: "4. Deviation and Follow-Up Report",
          elements: [
            {
              type: "matrixdynamic",
              name: "deviations",
              title: " ",
              addRowText: "+ Add Deviation",
              minRowCount: 0,
              columns: [
                { name: "date", title: "Date", cellType: "text", inputType: "date" },
                { name: "equipmentId", title: "Equipment ID", cellType: "text", isRequired: true },
                { name: "description", title: "Deviation Description", cellType: "text", isRequired: true },
                { name: "action", title: "Follow-Up Action", cellType: "text", isRequired: true },
                { name: "responsible", title: "Responsible", cellType: "text", isRequired: true },
                { name: "targetDate", title: "Target Date", cellType: "text", inputType: "date" },
                { name: "completionDate", title: "Completion Date", cellType: "text", inputType: "date" }
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "submission_section",
          title: "5. Submitted By",
          elements: [
            {
              type: "text",
              name: "submittedByName",
              title: "Submitted By Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "submissionDate",
              title: "Submission Date",
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

export default function FRM_MAINT_001() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-MAINT-001"
        title="Machine Guarding Inspection Register"
        revision="01"
        approvalDate="09 April 2026"
        minRole="field_worker"
        wideTable={true}
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
