import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const DEPARTMENTS = [
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
  "Other",
];

const SCHEMA = {
  title: "HSE Committee Meeting Minutes",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "meetingDetails",
          title: "1. Meeting Details",
          elements: [
            {
              type: "text",
              name: "meetingDate",
              title: "Meeting Date",
              isRequired: true,
              inputType: "date",
            },
            {
              type: "text",
              name: "meetingTime",
              title: "Time",
              isRequired: true,
              inputType: "time",
            },
            {
              type: "text",
              name: "location",
              title: "Location",
              isRequired: true,
            },
            {
              type: "text",
              name: "chairedByFullName",
              title: "Chaired By Full Name",
              isRequired: true,
            },
            {
              type: "text",
              name: "chairedByPosition",
              title: "Chaired By Position",
            },
            {
              type: "text",
              name: "minutesTakenBy",
              title: "Minutes Taken By Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "employeeId",
              title: "Minutes Taken By Employee ID",
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "position",
              title: "Minutes Taken By Position",
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
            {
              type: "dropdown",
              name: "department",
              title: "Department",
              isRequired: true,
              choices: DEPARTMENTS,
            },
            {
              type: "text",
              name: "nextMeetingDate",
              title: "Next Meeting Date",
              inputType: "date",
            },
          ],
        },
        {
          type: "panel",
          name: "attendanceRegister",
          title: "2. Attendance Register",
          elements: [
            {
              type: "matrixdynamic",
              name: "attendance",
              title: "Attendance Register",
              titleLocation: "hidden",
              columns: [
                {
                  name: "id",
                  title: "#",
                  cellType: "text",
                  width: "50px",
                },
                {
                  name: "fullName",
                  title: "Full Name",
                  cellType: "text",
                  isRequired: true,
                },
                {
                  name: "position",
                  title: "Position",
                  cellType: "text",
                  isRequired: true,
                },
                {
                  name: "department",
                  title: "Department",
                  cellType: "dropdown",
                  choices: DEPARTMENTS,
                },
                {
                  name: "present",
                  title: "Present",
                  cellType: "radiogroup",
                  choices: ["Yes", "No", "Apologies"],
                },
              ],
              rowCount: 5,
              minRowCount: 1,
              addRowText: "+ Add Attendee",
            },
          ],
        },
        {
          type: "panel",
          name: "standingAgendaItems",
          title: "3. Standing Agenda Items (per ISO 45001 Clause 5.4)",
          elements: [
            {
              type: "matrixdynamic",
              name: "agendaItems",
              title: "Agenda Items — record discussion notes for each item",
              columns: [
                {
                  name: "id",
                  title: "#",
                  cellType: "text",
                  width: "50px",
                },
                {
                  name: "item",
                  title: "Agenda Item",
                  cellType: "text",
                  isRequired: true,
                },
                {
                  name: "notes",
                  title: "Discussion / Notes",
                  cellType: "text",
                  isRequired: true,
                },
              ],
              rowCount: 9,
              minRowCount: 9,
              addRowText: "+ Add Agenda Item",
              defaultValue: [
                { id: "1", item: "Review of previous minutes and actions" },
                { id: "2", item: "Incident / accident review" },
                { id: "3", item: "Near miss and hazard reports" },
                { id: "4", item: "HSE inspection findings" },
                { id: "5", item: "Training and competency update" },
                { id: "6", item: "Emergency preparedness" },
                { id: "7", item: "Regulatory compliance update" },
                { id: "8", item: "Worker consultation and feedback" },
                { id: "9", item: "Any other business (AOB)" },
              ],
            },
          ],
        },
        {
          type: "panel",
          name: "actionItems",
          title: "4. Action Items",
          elements: [
            {
              type: "matrixdynamic",
              name: "actions",
              title: "Action Items",
              titleLocation: "hidden",
              columns: [
                {
                  name: "id",
                  title: "#",
                  cellType: "text",
                  width: "50px",
                },
                {
                  name: "action",
                  title: "Action",
                  cellType: "text",
                  isRequired: true,
                },
                {
                  name: "responsible",
                  title: "Responsible Person",
                  cellType: "text",
                  isRequired: true,
                },
                {
                  name: "dueDate",
                  title: "Due Date",
                  cellType: "text",
                  inputType: "date",
                },
                {
                  name: "status",
                  title: "Status",
                  cellType: "dropdown",
                  choices: ["Open", "In Progress", "Closed", "Overdue"],
                  defaultValue: "Open",
                },
                {
                  name: "remarks",
                  title: "Remarks",
                  cellType: "text",
                },
              ],
              rowCount: 3,
              minRowCount: 1,
              addRowText: "+ Add Action",
            },
          ],
        },
        {
          type: "panel",
          name: "submittedBy",
          title: "5. Submitted By",
          elements: [
            {
              type: "text",
              name: "submittedBy",
              title: "Submitted By Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "submissionDate",
              title: "Submission Date",
              inputType: "date",
              readOnly: true,
              description: "Auto-filled with today's date",
            },
          ],
        },
      ],
    },
  ],
  checkErrorsMode: "onComplete",
  showPrevButton: false,
};

export default function FRM_HSE_006() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-006"
        title="HSE Committee Meeting Minutes"
        revision="01"
        approvalDate="01 March 2026"
        minRole="field_worker"
        schema={SCHEMA}
        wideTable={true}
        identityFields={{
          fullName: "minutesTakenBy",
          employeeId: "employeeId",
          position: "position",
          department: "department",
        }}
      />
    </Layout>
  );
}
