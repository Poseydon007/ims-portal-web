import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Training Attendance Register",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "training_details",
          title: "1. Training Details",
          elements: [
            {
              type: "text",
              name: "trainingRefNo",
              title: "Training Reference No.",
              readOnly: true,
              description: "Auto-assigned on submission"
            },
            {
              type: "text",
              name: "trainingTitle",
              title: "Training Title / Description",
              isRequired: true
            },
            {
              type: "checkbox",
              name: "trainingType",
              title: "Training Type",
              isRequired: true,
              choices: [
                "Induction",
                "Safety",
                "Technical",
                "Competency",
                "Refresher",
                "Emergency Drill",
                "Other"
              ],
              showOtherItem: true
            },
            {
              type: "text",
              name: "reportedBy",
              title: "Trainer Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "employeeId",
              title: "Trainer Employee ID",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "position",
              title: "Trainer Position",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "date",
              title: "Date",
              inputType: "date",
              readOnly: true,
              description: "Auto-filled with today's date"
            },
            {
              type: "text",
              name: "duration",
              title: "Duration",
              inputType: "number",
              isRequired: true,
              description: "hours"
            },
            {
              type: "text",
              name: "location",
              title: "Site / Location",
              isRequired: true
            },
            {
              type: "dropdown",
              name: "department",
              title: "Department",
              isRequired: true,
              description: "Auto-filled from your login profile",
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
          name: "attendance_register",
          title: "2. Attendance Register",
          elements: [
            {
              type: "matrixdynamic",
              name: "attendanceList",
              title: "Record every attendee. One row per person.",
              description: "Record every attendee. One row per person.",
              isRequired: true,
              columns: [
                {
                  name: "no",
                  title: "No.",
                  cellType: "text"
                },
                {
                  name: "employeeName",
                  title: "Employee Name",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "employeeId",
                  title: "Employee ID",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "positionRole",
                  title: "Position / Role",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "nationality",
                  title: "Nationality",
                  cellType: "text"
                },
                {
                  name: "present",
                  title: "Present",
                  cellType: "radiogroup",
                  isRequired: true,
                  choices: ["Yes", "No"]
                }
              ],
              minRowCount: 1,
              rowCount: 15,
              addRowText: "+ Add Attendee"
            }
          ]
        },
        {
          type: "panel",
          name: "summary",
          title: "3. Summary",
          elements: [
            {
              type: "text",
              name: "totalParticipants",
              title: "Total Participants",
              inputType: "number",
              readOnly: true,
              description: "Fill after session"
            },
            {
              type: "text",
              name: "totalPresent",
              title: "Total Present",
              inputType: "number",
              readOnly: true,
              description: "Fill after session"
            }
          ]
        },
        {
          type: "panel",
          name: "submitted_by",
          title: "4. Submitted By",
          elements: [
            {
              type: "text",
              name: "submittedByFullName",
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

export default function FRM_TRN_003() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-TRN-003"
        title="Training Attendance Register"
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
