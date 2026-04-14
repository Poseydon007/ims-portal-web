import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Portable Electrical Equipment Register",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "registerDetails",
          title: "1. Register Details",
          elements: [
            {
              type: "text",
              name: "location",
              title: "Site / Location",
              isRequired: true
            },
            {
              type: "text",
              name: "inspectorName",
              title: "Inspector Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "inspectorEmployeeId",
              title: "Inspector Employee ID",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "inspectorPosition",
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
          name: "equipmentRegisterPanel",
          title: "2. Equipment Register",
          elements: [
            {
              type: "matrixdynamic",
              name: "equipmentRegister",
              title: "Record all portable electrical equipment. Test and tag each item.",
              minRowCount: 1,
              rowCount: 10,
              addRowText: "+ Add Equipment",
              columns: [
                { name: "no", title: "No.", cellType: "text" },
                { name: "description", title: "Equipment Description", cellType: "text", isRequired: true },
                { name: "equipmentId", title: "Equipment ID", cellType: "text", isRequired: true },
                { name: "locationArea", title: "Location / Area", cellType: "text", isRequired: true },
                { name: "voltage", title: "Voltage", cellType: "text" },
                { name: "testDate", title: "Test Date", cellType: "text", inputType: "date" },
                { name: "nextTestDue", title: "Next Test Due", cellType: "text", inputType: "date" },
                { 
                  name: "testResult", 
                  title: "Test Result", 
                  cellType: "dropdown",
                  choices: ["Pass", "Fail", "Not Tested"]
                },
                { 
                  name: "condition", 
                  title: "Condition", 
                  cellType: "dropdown",
                  choices: ["Good", "Fair", "Poor", "Condemned"]
                },
                { name: "remarks", title: "Remarks", cellType: "text" }
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "defectsActionsPanel",
          title: "3. Defects and Actions",
          elements: [
            {
              type: "matrixdynamic",
              name: "defectsActions",
              minRowCount: 0,
              rowCount: 0,
              addRowText: "+ Add Defect",
              columns: [
                { name: "date", title: "Date", cellType: "text", inputType: "date" },
                { name: "equipmentId", title: "Equipment ID", cellType: "text", isRequired: true },
                { name: "defectDescription", title: "Defect Description", cellType: "text", isRequired: true },
                { name: "actionTaken", title: "Action Taken", cellType: "text", isRequired: true },
                { name: "responsible", title: "Responsible", cellType: "text", isRequired: true },
                { name: "completionDate", title: "Completion Date", cellType: "text", inputType: "date" }
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "submissionPanel",
          title: "4. Submitted By",
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
  showPrevButton: false
};

export default function FRM_MAINT_003() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-MAINT-003"
        title="Portable Electrical Equipment Register"
        revision="01"
        approvalDate="09 April 2026"
        minRole="field_worker"
        wideTable={true}
        schema={SCHEMA}
        identityFields={{ 
          fullName: "inspectorName", 
          employeeId: "inspectorEmployeeId", 
          department: "department", 
          position: "inspectorPosition" 
        }}
      />
    </Layout>
  );
}
