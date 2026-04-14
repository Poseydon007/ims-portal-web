/**
 * TE-IMS-FRM-HSE-006 — HSE Meeting Minutes
 * Rebuilt using SurveyJS + ImsForm wrapper.
 */
import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const DEPARTMENT_LIST = [
  "HSE", "Operations – Drilling", "Operations – Geology", "Operations – Survey",
  "Maintenance", "Logistics & Transport", "Warehouse & Supply", "Security",
  "Administration", "Finance & Accounting", "Human Resources", "IT & Communications",
  "Management", "Quality Assurance", "Environmental", "Training & Competency",
  "Contracts & Procurement", "Camp & Catering", "Medical & First Aid", "Other",
];

const SCHEMA = {
  title: "",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        // ── Section 1: Meeting Identity ──
        {
          type: "panel",
          name: "section_identity",
          title: "1. Meeting Identity",
          elements: [
            { type: "text", name: "reportNo", title: "Report No.", isRequired: true, readOnly: true, description: "Auto-assigned" },
            { type: "text", name: "recordedBy", title: "Recorded By (Full Name)", isRequired: true, readOnly: true, description: "Auto-filled from your login profile" },
            { type: "text", name: "employeeId", title: "Employee ID", isRequired: true, readOnly: true, description: "Auto-filled from your login profile" },
            { type: "text", name: "position", title: "Position / Job Title", readOnly: true, description: "Auto-filled from your login profile" },
            { type: "dropdown", name: "department", title: "Department", isRequired: true, choices: DEPARTMENT_LIST },
            { type: "text", name: "signoffReportedByDate", title: "Submission Date", inputType: "date", isRequired: true, readOnly: true, description: "Auto-filled with today's date" },
          ],
        },

        // ── Section 2: Meeting Details ──
        {
          type: "panel",
          name: "section_meeting_details",
          title: "2. Meeting Details",
          elements: [
            { type: "text", name: "meetingDate", title: "Meeting Date", inputType: "date", isRequired: true },
            { type: "text", name: "meetingTime", title: "Meeting Start Time", inputType: "time", isRequired: true },
            { type: "text", name: "meetingEndTime", title: "Meeting End Time", inputType: "time" },
            { type: "text", name: "meetingLocation", title: "Meeting Location / Venue", isRequired: true },
            {
              type: "radiogroup",
              name: "meetingType",
              title: "Meeting Type",
              isRequired: true,
              choices: [
                "Weekly Toolbox Talk",
                "Monthly HSE Meeting",
                "Emergency / Incident Review",
                "Quarterly HSE Review",
                "Annual HSE Review",
                "Special / Ad-hoc Meeting",
              ],
            },
            { type: "text", name: "chairperson", title: "Meeting Chairperson", isRequired: true },
            { type: "text", name: "minutesRecordedBy", title: "Minutes Recorded By", isRequired: true },
          ],
        },

        // ── Section 3: Attendees ──
        {
          type: "panel",
          name: "section_attendees",
          title: "3. Attendance Register",
          elements: [
            {
              type: "matrixdynamic",
              name: "attendees",
              title: "List all attendees",
              addRowText: "+ Add Attendee",
              rowCount: 3,
              minRowCount: 1,
              columns: [
                { name: "fullName", title: "Full Name", cellType: "text", isRequired: true },
                { name: "employeeId", title: "Employee ID", cellType: "text" },
                { name: "position", title: "Position / Role", cellType: "text" },
                { name: "department", title: "Department / Company", cellType: "text" },
                { name: "attended", title: "Attended?", cellType: "dropdown", choices: ["Present", "Absent – Excused", "Absent – Unexcused"] },
              ],
            },
          ],
        },

        // ── Section 4: Previous Minutes Review ──
        {
          type: "panel",
          name: "section_prev_minutes",
          title: "4. Review of Previous Minutes",
          elements: [
            {
              type: "radiogroup",
              name: "prevMinutesReviewed",
              title: "Were previous meeting minutes reviewed?",
              isRequired: true,
              choices: ["Yes", "No", "N/A — First meeting"],
            },
            {
              type: "comment",
              name: "prevMinutesNotes",
              title: "Notes on previous minutes (corrections, confirmations)",
              rows: 3,
              visibleIf: "{prevMinutesReviewed} = 'Yes'",
              placeholder: "Note any amendments or confirmation of previous minutes...",
            },
          ],
        },

        // ── Section 5: Agenda Items ──
        {
          type: "panel",
          name: "section_agenda",
          title: "5. Agenda Items & Discussion",
          elements: [
            {
              type: "matrixdynamic",
              name: "agendaItems",
              title: "Agenda Items Discussed",
              addRowText: "+ Add Agenda Item",
              rowCount: 3,
              minRowCount: 1,
              columns: [
                { name: "itemNo", title: "No.", cellType: "text" },
                { name: "topic", title: "Topic / Agenda Item", cellType: "text", isRequired: true },
                { name: "presenter", title: "Presenter / Lead", cellType: "text" },
                { name: "discussion", title: "Summary of Discussion", cellType: "text", isRequired: true },
                { name: "outcome", title: "Outcome / Decision", cellType: "text" },
              ],
            },
          ],
        },

        // ── Section 6: HSE Statistics ──
        {
          type: "panel",
          name: "section_hse_stats",
          title: "6. HSE Statistics (Period Covered)",
          elements: [
            { type: "text", name: "statsPeriodFrom", title: "Period From", inputType: "date" },
            { type: "text", name: "statsPeriodTo", title: "Period To", inputType: "date" },
            { type: "text", name: "ltiCount", title: "Lost Time Injuries (LTI)", inputType: "number", defaultValue: "0" },
            { type: "text", name: "firstAidCount", title: "First Aid Cases", inputType: "number", defaultValue: "0" },
            { type: "text", name: "nearMissCount", title: "Near Misses Reported", inputType: "number", defaultValue: "0" },
            { type: "text", name: "propertyDamageCount", title: "Property Damage Incidents", inputType: "number", defaultValue: "0" },
            { type: "text", name: "ltifr", title: "LTIFR (if calculated)", placeholder: "e.g. 0.00" },
            {
              type: "comment",
              name: "statsComments",
              title: "Comments on Statistics / Trends",
              rows: 3,
              placeholder: "Note any trends, improvements, or concerns...",
            },
          ],
        },

        // ── Section 7: Action Items ──
        {
          type: "panel",
          name: "section_actions",
          title: "7. Action Items",
          elements: [
            {
              type: "matrixdynamic",
              name: "actionItems",
              title: "Actions arising from this meeting",
              addRowText: "+ Add Action",
              rowCount: 2,
              minRowCount: 1,
              columns: [
                { name: "actionNo", title: "No.", cellType: "text" },
                { name: "action", title: "Action Description", cellType: "text", isRequired: true },
                { name: "responsible", title: "Responsible Person", cellType: "text", isRequired: true },
                { name: "targetDate", title: "Target Date", cellType: "text" },
                { name: "priority", title: "Priority", cellType: "dropdown", choices: ["High", "Medium", "Low"] },
                { name: "status", title: "Status", cellType: "dropdown", choices: ["Open", "In Progress", "Closed", "Carried Forward"] },
              ],
            },
          ],
        },

        // ── Section 8: Any Other Business ──
        {
          type: "panel",
          name: "section_aob",
          title: "8. Any Other Business (AOB)",
          elements: [
            {
              type: "comment",
              name: "anyOtherBusiness",
              title: "Any other matters raised",
              rows: 4,
              placeholder: "Record any additional matters raised during the meeting...",
            },
          ],
        },

        // ── Section 9: Next Meeting ──
        {
          type: "panel",
          name: "section_next_meeting",
          title: "9. Next Meeting",
          elements: [
            { type: "text", name: "nextMeetingDate", title: "Next Meeting Date", inputType: "date" },
            { type: "text", name: "nextMeetingTime", title: "Next Meeting Time", inputType: "time" },
            { type: "text", name: "nextMeetingLocation", title: "Next Meeting Location", placeholder: "e.g. Site Office / Camp Meeting Room" },
          ],
        },

        // ── Section 10: Sign-Off ──
        {
          type: "panel",
          name: "section_signoff",
          title: "10. Sign-Off",
          elements: [
            { type: "text", name: "signoffReportedByName", title: "Recorded By — Full Name", isRequired: true, readOnly: true, description: "Auto-filled from your login profile" },
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
        title="HSE Meeting Minutes"
        revision="01"
        approvalDate="01 March 2026"
        minRole="field_worker"
        schema={SCHEMA}
        identityFields={{
          fullName: "recordedBy",
          employeeId: "employeeId",
          department: "department",
          position: "position",
        }}
      />
    </Layout>
  );
}
