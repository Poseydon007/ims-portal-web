/**
 * TE-IMS-FRM-HSE-002 — Incident Flash Notification
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
        {
          type: "panel",
          name: "section_identity",
          title: "1. Report Identity",
          elements: [
            { type: "text", name: "reportNo", title: "Report No.", isRequired: true, readOnly: true, description: "Auto-assigned" },
            { type: "text", name: "reportedBy", title: "Reported By (Full Name)", isRequired: true, readOnly: true, description: "Auto-filled from your login profile" },
            { type: "text", name: "employeeId", title: "Employee ID", isRequired: true, readOnly: true, description: "Auto-filled from your login profile" },
            { type: "text", name: "position", title: "Position / Job Title", readOnly: true, description: "Auto-filled from your login profile" },
            { type: "dropdown", name: "department", title: "Department", isRequired: true, choices: DEPARTMENT_LIST },
            { type: "text", name: "site", title: "Site / Project Name", isRequired: true },
            { type: "text", name: "signoffReportedByDate", title: "Submission Date", inputType: "date", isRequired: true, readOnly: true, description: "Auto-filled with today's date" },
          ],
        },
        {
          type: "panel",
          name: "section_incident_details",
          title: "2. Incident Details",
          elements: [
            { type: "text", name: "dateOfIncident", title: "Date of Incident", inputType: "date", isRequired: true },
            { type: "text", name: "timeOfIncident", title: "Time of Incident", inputType: "time", isRequired: true },
            { type: "text", name: "location", title: "Exact Location / Area", isRequired: true },
            { type: "text", name: "incidentNumber", title: "Incident Number (if already assigned)" },
          ],
        },
        {
          type: "panel",
          name: "section_severity",
          title: "3. Severity Classification",
          elements: [
            {
              type: "checkbox",
              name: "severity",
              title: "Incident Type — select all that apply",
              isRequired: true,
              choices: [
                "First Aid", "Medical Treatment", "Lost Time Injury (LTI)",
                "Fatality", "Property Damage", "Environmental Release",
                "Near Miss", "Dangerous Occurrence",
              ],
            },
          ],
        },
        {
          type: "panel",
          name: "section_description",
          title: "4. Brief Description of Incident",
          elements: [
            {
              type: "comment",
              name: "briefDescription",
              title: "What happened? Provide a clear, factual account.",
              isRequired: true,
              rows: 5,
              placeholder: "Describe what happened, the sequence of events, and the immediate context.",
            },
          ],
        },
        {
          type: "panel",
          name: "section_persons",
          title: "5. Persons Involved",
          elements: [
            {
              type: "matrixdynamic",
              name: "personsInvolved",
              title: "List all persons directly involved",
              addRowText: "+ Add Person",
              rowCount: 1,
              minRowCount: 1,
              columns: [
                { name: "fullName", title: "Full Name", cellType: "text", isRequired: true },
                { name: "employeeId", title: "Employee ID", cellType: "text" },
                { name: "position", title: "Position / Role", cellType: "text" },
                { name: "company", title: "Company / Contractor", cellType: "text" },
                { name: "injuryDescription", title: "Nature of Injury / Involvement", cellType: "text" },
              ],
            },
          ],
        },
        {
          type: "panel",
          name: "section_body_part",
          title: "6. Body Part Affected (if injury)",
          elements: [
            {
              type: "checkbox",
              name: "bodyPartAffected",
              title: "Select all body parts affected",
              choices: [
                "Head", "Eyes", "Face", "Neck", "Chest / Torso",
                "Back", "Arms / Shoulders", "Hands / Fingers",
                "Legs / Knees", "Feet / Toes", "Internal", "Multiple",
              ],
              hasOther: true,
              otherText: "Other (specify)",
            },
          ],
        },
        {
          type: "panel",
          name: "section_immediate_actions",
          title: "7. Immediate Actions Taken",
          elements: [
            {
              type: "comment",
              name: "immediateActionsTaken",
              title: "What actions were taken immediately after the incident?",
              isRequired: true,
              rows: 4,
              placeholder: "e.g. First aid administered, area isolated, emergency services called, supervisor notified...",
            },
          ],
        },
        {
          type: "panel",
          name: "section_escalation",
          title: "8. Escalation — Who Was Notified",
          elements: [
            {
              type: "matrixdynamic",
              name: "escalation",
              title: "List all persons / authorities notified",
              addRowText: "+ Add Entry",
              rowCount: 1,
              minRowCount: 1,
              columns: [
                { name: "name", title: "Name / Authority", cellType: "text", isRequired: true },
                { name: "role", title: "Role / Position", cellType: "text" },
                { name: "time", title: "Time Notified", cellType: "text" },
                { name: "method", title: "Method", cellType: "dropdown", choices: ["Phone", "Email", "In Person", "Radio", "WhatsApp", "Other"] },
                { name: "confirmed", title: "Confirmed?", cellType: "dropdown", choices: ["Yes", "No", "Pending"] },
              ],
            },
          ],
        },
        {
          type: "panel",
          name: "section_corrective_actions",
          title: "9. Immediate Corrective Actions",
          elements: [
            {
              type: "matrixdynamic",
              name: "correctiveActions",
              title: "List corrective actions identified",
              addRowText: "+ Add Action",
              rowCount: 1,
              minRowCount: 1,
              columns: [
                { name: "action", title: "Action Description", cellType: "text", isRequired: true },
                { name: "responsible", title: "Responsible Person", cellType: "text", isRequired: true },
                { name: "targetDate", title: "Target Date", cellType: "text" },
                { name: "status", title: "Status", cellType: "dropdown", choices: ["Open", "In Progress", "Closed"] },
              ],
            },
          ],
        },
        {
          type: "panel",
          name: "section_signoff",
          title: "10. Submitted By",
          elements: [
            { type: "text", name: "signoffReportedByName", title: "Submitted By — Full Name", isRequired: true, readOnly: true, description: "Auto-filled from your login profile" },
          ],
        },
      ],
    },
  ],
  checkErrorsMode: "onComplete",
  showPrevButton: false,
};

export default function FRM_HSE_002() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-002"
        title="Incident Flash Notification"
        revision="01"
        approvalDate="01 March 2026"
        minRole="field_worker"
        schema={SCHEMA}
        identityFields={{
          fullName: "reportedBy",
          employeeId: "employeeId",
          department: "department",
          position: "position",
        }}
      />
    </Layout>
  );
}
