import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Emergency Evacuation Drill Record",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "panel1",
          title: "1. Drill Details",
          elements: [
            {
              type: "dropdown",
              name: "department",
              title: "Department / Section",
              isRequired: true,
              choices: [
                "HSE", "Operations – Drilling", "Operations – Geology", "Operations – Survey", "Maintenance", "Logistics & Transport", "Warehouse & Supply", "Security", "Administration", "Finance & Accounting", "Human Resources", "IT & Communications", "Management", "Quality Assurance", "Environmental", "Training & Competency", "Contracts & Procurement", "Camp & Catering", "Medical & First Aid", "Other"
              ]
            },
            {
              type: "text",
              name: "location",
              title: "Location",
              isRequired: true
            },
            {
              type: "text",
              name: "drillDate",
              title: "Date of Drill",
              inputType: "date",
              readOnly: true,
              description: "Auto-filled with today's date"
            },
            {
              type: "text",
              name: "proposedTime",
              title: "Proposed Evacuation Time in minutes",
              inputType: "number",
              isRequired: true
            },
            {
              type: "text",
              name: "actualTime",
              title: "Actual Evacuation Time in minutes",
              inputType: "number",
              isRequired: true
            },
            {
              type: "text",
              name: "nextDrillDate",
              title: "Date of Next Drill",
              inputType: "date"
            },
            {
              type: "text",
              name: "reportedBy",
              title: "Submitted By Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "employeeId",
              title: "Submitted By Employee ID",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "position",
              title: "Submitted By Position",
              readOnly: true,
              description: "Auto-filled from your login profile"
            }
          ]
        },
        {
          type: "panel",
          name: "panel2",
          title: "2. Drill Type",
          elements: [
            {
              type: "checkbox",
              name: "drillType",
              title: "Drill Type (select all that apply)",
              isRequired: true,
              hasOther: true,
              otherText: "Other (specify)",
              choices: [
                "Fire", "Bomb Threat", "Chemical Spill", "General Evacuation"
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "panel3",
          title: "3. Personnel Mustered",
          elements: [
            {
              type: "matrixdynamic",
              name: "personnelMustered",
              title: "Personnel Mustered",
              columns: [
                { name: "id", title: "#", cellType: "text" },
                { name: "fullName", title: "Full Name", cellType: "text", isRequired: true },
                { name: "dept", title: "Department", cellType: "text", isRequired: true },
                { name: "mustered", title: "Mustered", cellType: "radiogroup", choices: ["Yes", "No"] },
                { name: "remarks", title: "Remarks", cellType: "text" }
              ],
              minRowCount: 1,
              rowCount: 10,
              addRowText: "+ Add Person"
            }
          ]
        },
        {
          type: "panel",
          name: "panel4",
          title: "4. Drill Checklist",
          elements: [
            {
              type: "matrixdynamic",
              name: "drillChecklist",
              title: "Drill Checklist",
              columns: [
                { name: "item", title: "Item", cellType: "text", readOnly: true },
                { name: "result", title: "Result", cellType: "dropdown", isRequired: true, choices: ["Yes", "No", "N/A"] }
              ],
              rowCount: 7,
              minRowCount: 7,
              allowAddRows: false,
              allowRemoveRows: false,
              defaultValue: [
                { item: "Siren loud enough" },
                { item: "Emergency team responded promptly" },
                { item: "Emergency team informed in time" },
                { item: "Emergency equipment available" },
                { item: "Wardens and checkers available" },
                { item: "Evacuation completed in time" },
                { item: "List of employees available at muster point" }
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "panel5",
          title: "5. Deviations",
          elements: [
            {
              type: "matrixdynamic",
              name: "deviations",
              title: "Deviations",
              columns: [
                { name: "deviation", title: "Deviation", cellType: "text", isRequired: true },
                { name: "action", title: "Follow-Up Action", cellType: "text", isRequired: true },
                { name: "responsible", title: "Responsible", cellType: "text", isRequired: true },
                { name: "targetDate", title: "Target Date", cellType: "text", inputType: "date" },
                { name: "completionDate", title: "Completion Date", cellType: "text", inputType: "date" }
              ],
              minRowCount: 0,
              rowCount: 0,
              addRowText: "+ Add Deviation"
            }
          ]
        },
        {
          type: "panel",
          name: "panel6",
          title: "6. Submitted By",
          elements: [
            {
              type: "text",
              name: "reportedBy_footer",
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

export default function FRM_HSE_018() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-018"
        title="Emergency Evacuation Drill Record"
        revision="01"
        approvalDate="01 March 2026"
        minRole="field_worker"
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
