import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Critical Training Adherence Form",
  showTitle: false,
  checkErrorsMode: "onComplete",
  showPrevButton: false,
  pages: [
    {
      name: "page1",
      elements: [
            { type: "text", name: "reportNo", title: "Report No.", isRequired: true, readOnly: true, description: "Auto-assigned on submission" },
        {
          type: "panel",
          name: "employee_details",
          title: "1. Employee Details",
          elements: [
            {
              type: "text",
              name: "reportedBy",
              title: "Employee Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "employeeId",
              title: "Employee ID",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "position",
              title: "Job Title / Position",
              readOnly: true,
              description: "Auto-filled from your login profile"
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
            },
            {
              type: "text",
              name: "inductionDate",
              title: "Date of Induction",
              inputType: "date",
              isRequired: true
            },
            {
              type: "text",
              name: "reportsTo",
              title: "Reports To",
              isRequired: true
            },
            {
              type: "text",
              name: "siteLocation",
              title: "Site / Location",
              isRequired: true
            },
            {
              type: "text",
              name: "trainerName",
              title: "Trainer Name",
              isRequired: true
            }
          ]
        },
        {
          type: "panel",
          name: "training_topics",
          title: "2. Critical Training Topics",
          elements: [
            {
              type: "matrixdynamic",
              name: "trainingTopics",
              title: "Confirm each topic was covered, understood, and carried out during induction",
              rowCount: 15,
              minRowCount: 15,
              confirmDelete: false,
              columns: [
                {
                  name: "no",
                  title: "No.",
                  cellType: "text",
                  readOnly: true,
                  width: "50px"
                },
                {
                  name: "topic",
                  title: "Orientation / Training Topic",
                  cellType: "text",
                  readOnly: true
                },
                {
                  name: "explained",
                  title: "Explained",
                  cellType: "radiogroup",
                  isRequired: true,
                  choices: ["Yes", "No"]
                },
                {
                  name: "understood",
                  title: "Understood",
                  cellType: "radiogroup",
                  isRequired: true,
                  choices: ["Yes", "No"]
                },
                {
                  name: "carriedOut",
                  title: "Carried Out",
                  cellType: "radiogroup",
                  isRequired: true,
                  choices: ["Yes", "No", "N/A"]
                },
                {
                  name: "initials",
                  title: "Initials",
                  cellType: "text"
                }
              ],
              defaultValue: [
                { no: "1", topic: "Compliance with International Safety Protocols / Company QHSE policies" },
                { no: "2", topic: "Thorough Equipment Checks / Periodic Tool Checks and Inspections" },
                { no: "3", topic: "Operational Guidelines / Safety Instructions for assigned tasks" },
                { no: "4", topic: "Mandatory PPE Gear – selection, use, care, and replacement" },
                { no: "5", topic: "Drilling Work Preparedness – rig safety, exclusion zones, moving parts" },
                { no: "6", topic: "Risk Assessment – JHA, Take 5, HIRA procedures" },
                { no: "7", topic: "Toolbox Talk participation and daily safety briefing requirements" },
                { no: "8", topic: "First Aid / Fire Extinguisher locations and emergency response" },
                { no: "9", topic: "Heat Stress Awareness – hydration, rest schedules, symptoms recognition" },
                { no: "10", topic: "LOTO (Lockout/Tagout) procedures and energy isolation" },
                { no: "11", topic: "Environmental Responsibilities – waste, spills, protected areas" },
                { no: "12", topic: "Incident & Near Miss Reporting procedures" },
                { no: "13", topic: "Emergency Evacuation Plan – assembly points and alarms" },
                { no: "14", topic: "Permit to Work system (hot work, confined space, working at height)" },
                { no: "15", topic: "Site-specific hazards and local regulations (KSA MHRSD/NCEC)" }
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "remarks_section",
          title: "3. Remarks / Additional Notes",
          elements: [
            {
              type: "comment",
              name: "remarks",
              title: "Remarks",
              rows: 3
            }
          ]
        },
        {
          type: "panel",
          name: "submission_section",
          title: "4. Submitted By (Trainer)",
          elements: [
            {
              type: "text",
              name: "trainerFullName",
              title: "Trainer Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "trainerEmployeeId",
              title: "Trainer Employee ID",
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
  ]
};

export default function FRM_TRN_002() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-TRN-002"
        title="Critical Training Adherence Form"
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
