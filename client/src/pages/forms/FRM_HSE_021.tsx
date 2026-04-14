import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Fire Prevention Checklist",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "section1",
          title: "1. Inspection Details",
          elements: [
            {
              type: "text",
              name: "location",
              title: "Area / Location",
              isRequired: true
            },
            {
              type: "text",
              name: "date",
              title: "Date",
              defaultValueExpression: "today()",
              readOnly: true,
              description: "Auto-filled with today's date"
            },
            {
              type: "text",
              name: "reportedBy",
              title: "Inspected By Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "employeeId",
              title: "Inspected By Employee ID",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "position",
              title: "Inspected By Position",
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
              type: "dropdown",
              name: "frequency",
              title: "Frequency",
              isRequired: true,
              choices: ["Daily", "Weekly", "Monthly", "Quarterly", "Post-Incident"]
            }
          ]
        },
        {
          type: "panel",
          name: "section2",
          title: "2. Fire Prevention Checklist",
          elements: [
            {
              type: "matrixdynamic",
              name: "firePreventionChecklist",
              title: "Inspect each item and record result",
              rowCount: 20,
              minRowCount: 20,
              allowAddRows: false,
              allowRemoveRows: false,
              columns: [
                {
                  name: "id",
                  title: "#",
                  cellType: "text",
                  readOnly: true
                },
                {
                  name: "description",
                  title: "Description",
                  cellType: "text",
                  readOnly: true
                },
                {
                  name: "result",
                  title: "Result",
                  cellType: "dropdown",
                  isRequired: true,
                  choices: ["Yes", "No", "N/A"]
                },
                {
                  name: "remarks",
                  title: "Remarks",
                  cellType: "text"
                }
              ],
              defaultValue: [
                { id: "1", description: "Designated smoking area identified and signposted" },
                { id: "2", description: "No smoking signs and posters displayed in hazardous areas" },
                { id: "3", description: "All combustible materials removed from work site or properly stored" },
                { id: "4", description: "All electrical devices provided with protection systems" },
                { id: "5", description: "Circuit breakers provided and functional" },
                { id: "6", description: "Adequate fire extinguishers provided and accessible" },
                { id: "7", description: "Smoke detectors provided and functional in offices and stores" },
                { id: "8", description: "Fire alarm system tested and operational" },
                { id: "9", description: "Emergency exits clearly marked and unobstructed" },
                { id: "10", description: "Fire escape routes displayed and visible" },
                { id: "11", description: "Hot work permits issued where required" },
                { id: "12", description: "Flammable liquids stored in approved containers and cabinets" },
                { id: "13", description: "Fuel storage areas properly ventilated and secured" },
                { id: "14", description: "Electrical wiring inspected and in good condition" },
                { id: "15", description: "Fire extinguisher inspection tags current" },
                { id: "16", description: "Emergency lighting operational" },
                { id: "17", description: "Fire fighting equipment register up to date" },
                { id: "18", description: "Personnel trained in fire extinguisher use" },
                { id: "19", description: "Assembly points clearly marked" },
                { id: "20", description: "Emergency contact numbers posted and visible" }
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "section3",
          title: "3. Corrective Actions Required",
          elements: [
            {
              type: "matrixdynamic",
              name: "correctiveActions",
              title: "Corrective Actions Required",
              addRowText: "+ Add Action",
              minRowCount: 0,
              columns: [
                {
                  name: "id",
                  title: "#",
                  cellType: "text"
                },
                {
                  name: "itemNo",
                  title: "Item No.",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "actionRequired",
                  title: "Action Required",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "responsible",
                  title: "Responsible",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "dueDate",
                  title: "Due Date",
                  cellType: "text",
                  inputType: "date"
                },
                {
                  name: "status",
                  title: "Status",
                  cellType: "dropdown",
                  choices: ["Open", "In Progress", "Closed"],
                  defaultValue: "Open"
                }
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "section4",
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
              defaultValueExpression: "today()",
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

export default function FRM_HSE_021() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-021"
        title="Fire Prevention Checklist"
        revision="01"
        approvalDate="01 March 2026"
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
