import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "LOTO Logout Logbook",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "logbook_details",
          title: "1. LOTO Logbook Details",
          elements: [
            {
              type: "text",
              name: "reportedBy",
              title: "Lockout Officer Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "employeeId",
              title: "Lockout Officer Employee ID",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "position",
              title: "Lockout Officer Position",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "location",
              title: "Site / Location",
              isRequired: true
            },
            {
              type: "text",
              name: "reportingPeriod",
              title: "Reporting Period",
              placeholder: "e.g., April 2026",
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
            }
          ]
        },
        {
          type: "panel",
          name: "event_log_panel",
          title: "2. LOTO Event Log",
          elements: [
            {
              type: "matrixdynamic",
              name: "loto_events",
              title: "Record every LOTO event. One row per equipment isolation.",
              isRequired: true,
              columns: [
                {
                  name: "no",
                  title: "No.",
                  cellType: "text",
                  width: "60px"
                },
                {
                  name: "equipmentId",
                  title: "Equipment / Plant ID",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "description",
                  title: "Description of Work",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "lockDate",
                  title: "Lock Date",
                  cellType: "text",
                  inputType: "date",
                  isRequired: true
                },
                {
                  name: "lockTime",
                  title: "Lock Time",
                  cellType: "text",
                  inputType: "time"
                },
                {
                  name: "lockedBy",
                  title: "Locked Out By",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "reason",
                  title: "Reason for Isolation",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "energyType",
                  title: "Energy Type",
                  cellType: "dropdown",
                  choices: [
                    "Electrical",
                    "Hydraulic",
                    "Pneumatic",
                    "Mechanical",
                    "Thermal",
                    "Chemical",
                    "Gravity",
                    "Multiple"
                  ]
                },
                {
                  name: "testedDead",
                  title: "Tested Dead",
                  cellType: "radiogroup",
                  isRequired: true,
                  choices: ["Yes", "No"]
                },
                {
                  name: "returnDate",
                  title: "Return Date",
                  cellType: "text",
                  inputType: "date"
                },
                {
                  name: "returnTime",
                  title: "Return Time",
                  cellType: "text",
                  inputType: "time"
                },
                {
                  name: "returnedBy",
                  title: "Returned By",
                  cellType: "text"
                }
              ],
              rowCount: 10,
              minRowCount: 1,
              addRowText: "+ Add LOTO Event"
            }
          ]
        },
        {
          type: "panel",
          name: "submission_panel",
          title: "3. Submitted By",
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

export default function FRM_HSE_039() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-039"
        title="LOTO Logout Logbook"
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
