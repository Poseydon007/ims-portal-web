import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Fire Drill Report",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "drill_information",
          title: "1. Drill Information",
          elements: [
            {
              type: "text",
              name: "drillDate",
              title: "Date",
              inputType: "date",
              readOnly: true,
              defaultValueExpression: "today()",
              description: "Auto-filled with today's date"
            },
            {
              type: "text",
              name: "drillTime",
              title: "Time",
              inputType: "time",
              isRequired: true
            },
            {
              type: "text",
              name: "location",
              title: "Location / Building",
              isRequired: true
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
                "Other"
              ]
            },
            {
              type: "text",
              name: "reportedBy",
              title: "Drill Observed By Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "employeeId",
              title: "Drill Observer Employee ID",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "position",
              title: "Drill Observer Position",
              readOnly: true,
              description: "Auto-filled from your login profile"
            }
          ]
        },
        {
          type: "panel",
          name: "performance_assessment",
          title: "2. Performance Assessment",
          elements: [
            {
              type: "matrixdynamic",
              name: "performanceChecklist",
              title: "Rate each checklist item",
              columns: [
                {
                  name: "item",
                  title: "Checklist Item",
                  cellType: "text",
                  readOnly: true
                },
                {
                  name: "rating",
                  title: "Rating",
                  cellType: "dropdown",
                  isRequired: true,
                  choices: ["Excellent", "Good", "Fair", "Needs Improvement"]
                }
              ],
              rowCount: 8,
              minRowCount: 8,
              allowAddRows: false,
              allowRemoveRows: false,
              defaultValue: [
                { item: "Alarm condition and activation" },
                { item: "Alarm sound audibility" },
                { item: "Responsiveness of workers" },
                { item: "Responsiveness of emergency action team" },
                { item: "Workers gathered at assembly area" },
                { item: "Time taken to gather at assembly area" },
                { item: "Communication during drill" },
                { item: "Use of fire extinguishers (if applicable)" }
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "overall_remarks",
          title: "3. Overall Remarks",
          elements: [
            {
              type: "comment",
              name: "remarks",
              title: "Remarks",
              rows: 4
            }
          ]
        },
        {
          type: "panel",
          name: "areas_to_be_improved",
          title: "4. Areas to Be Improved",
          elements: [
            {
              type: "matrixdynamic",
              name: "improvements",
              title: "Observations and Actions",
              columns: [
                {
                  name: "id",
                  title: "#",
                  cellType: "text",
                  width: "50px"
                },
                {
                  name: "observation",
                  title: "Observation",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "action",
                  title: "Recommended Action",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "responsible",
                  title: "Responsible",
                  cellType: "text",
                  isRequired: true
                }
              ],
              rowCount: 3,
              minRowCount: 0,
              addRowText: "+ Add Observation"
            }
          ]
        },
        {
          type: "panel",
          name: "next_drill",
          title: "5. Next Drill",
          elements: [
            {
              type: "text",
              name: "nextDrillDate",
              title: "Next Drill Planned Date",
              inputType: "date"
            }
          ]
        },
        {
          type: "panel",
          name: "submitted_by",
          title: "6. Submitted By",
          elements: [
            {
              type: "text",
              name: "submitterName",
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
              defaultValueExpression: "today()",
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

export default function FRM_HSE_019() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-019"
        title="Fire Drill Report"
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
