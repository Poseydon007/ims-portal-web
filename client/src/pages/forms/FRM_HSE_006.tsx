import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";
import { DEPARTMENTS } from "@/lib/formConstants";

// ── Agenda items from DOCX (per ISO 45001 Clause 5.4) ──────────────────────
const STANDING_AGENDA = [
  "Review of previous minutes and actions",
  "Incident / accident review",
  "Near miss and hazard reports",
  "HSE inspection findings",
  "Training and competency update",
  "Emergency preparedness",
  "Regulatory compliance update",
  "Worker consultation and feedback",
  "Any other business (AOB)",
];

const SCHEMA = {
  title: "HSE Committee Meeting Minutes",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        // ── Section 1: Meeting Details ────────────────────────────────────
        {
          type: "panel",
          name: "section_meetingDetails",
          title: "1. Meeting Details",
          elements: [
            {
              type: "text",
              name: "reportNo",
              title: "Meeting Minutes No.",
              isRequired: true,
              readOnly: true,
              description: "Auto-assigned",
            },
            {
              type: "text",
              name: "reportedBy",
              title: "Minutes Taken By (Full Name)",
              isRequired: true,
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "employeeId",
              title: "Employee ID",
              isRequired: true,
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "position",
              title: "Position / Job Title",
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
              name: "meetingDate",
              title: "Meeting Date",
              isRequired: true,
              inputType: "date",
            },
            {
              type: "text",
              name: "meetingTime",
              title: "Meeting Time",
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
              name: "chairedBy",
              title: "Chaired By",
              isRequired: true,
            },
            {
              type: "text",
              name: "nextMeetingDate",
              title: "Next Meeting Date",
              inputType: "date",
            },
          ],
        },

        // ── Section 2: Attendance Register ───────────────────────────────
        {
          type: "panel",
          name: "section_attendance",
          title: "2. Attendance Register",
          description:
            "Record all committee members and attendees present at this meeting.",
          elements: [
            {
              type: "matrixdynamic",
              name: "attendance",
              title: "Attendance Register",
              titleLocation: "hidden",
              columns: [
                {
                  name: "no",
                  title: "#",
                  cellType: "text",
                  width: "50px",
                  readOnly: true,
                },
                {
                  name: "fullName",
                  title: "Name",
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
                  name: "dept",
                  title: "Department",
                  cellType: "dropdown",
                  choices: DEPARTMENTS,
                },
                {
                  name: "present",
                  title: "Present / Apologies",
                  cellType: "dropdown",
                  choices: ["Present", "Apologies", "Absent"],
                  defaultValue: "Present",
                },
              ],
              rowCount: 5,
              minRowCount: 1,
              addRowText: "+ Add Attendee",
            },
          ],
        },

        // ── Section 3: Standing Agenda Items ─────────────────────────────
        {
          type: "panel",
          name: "section_agenda",
          title: "3. Standing Agenda Items (per ISO 45001 Clause 5.4)",
          description:
            "Record discussion notes for each standing agenda item. Add additional items as required.",
          elements: [
            {
              type: "matrixdynamic",
              name: "agendaItems",
              title: "Agenda Items",
              titleLocation: "hidden",
              columns: [
                {
                  name: "no",
                  title: "#",
                  cellType: "text",
                  width: "50px",
                  readOnly: true,
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
                  cellType: "comment",
                  rows: 2,
                  isRequired: true,
                },
              ],
              rowCount: 9,
              minRowCount: 9,
              addRowText: "+ Add Agenda Item",
              defaultValue: STANDING_AGENDA.map((item, i) => ({
                no: String(i + 1),
                item,
                notes: "",
              })),
            },
          ],
        },

        // ── Section 4: Action Items ───────────────────────────────────────
        {
          type: "panel",
          name: "section_actions",
          title: "4. Action Items",
          description:
            "Record all actions arising from this meeting. Reference the corresponding investigation or report number where applicable.",
          elements: [
            {
              type: "matrixdynamic",
              name: "actionItems",
              title: "Action Items",
              titleLocation: "hidden",
              columns: [
                {
                  name: "no",
                  title: "#",
                  cellType: "text",
                  width: "50px",
                  readOnly: true,
                },
                {
                  name: "action",
                  title: "Action",
                  cellType: "text",
                  isRequired: true,
                },
                {
                  name: "responsible",
                  title: "Responsible",
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

        // ── Section 5: Submitted By ───────────────────────────────────────
        {
          type: "panel",
          name: "section_signoff",
          title: "5. Submitted By",
          elements: [
            {
              type: "text",
              name: "signoffReportedByName",
              title: "Submitted By — Full Name",
              isRequired: true,
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "signoffReportedByDate",
              title: "Submission Date",
              inputType: "date",
              isRequired: true,
              readOnly: true,
              description: "Auto-filled with today's date",
            },
            {
              type: "text",
              name: "signoffSubmissionTime",
              title: "Submission Time",
              isRequired: true,
              readOnly: true,
              description: "Auto-filled with current time",
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
        wideTable
        identityFields={{
          fullName: "reportedBy",
          employeeId: "employeeId",
          position: "position",
          department: "department",
        }}
      />
    </Layout>
  );
}
