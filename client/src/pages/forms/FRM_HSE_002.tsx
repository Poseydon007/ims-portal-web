/**
 * TE-IMS-FRM-HSE-002 — Incident Flash Notification
 * Source: TE-IMS-FRM-HSE-002_Rev01-IncidentFlashNotification.docx
 * Rules applied:
 *   1. Report No. first, grouped with identity fields
 *   2. IMS portal colors only
 *   3. wideTable — Persons Involved (4 cols) + Escalation (5 cols)
 *   4. Sign-off: name + date + time, all auto-filled
 *   5. Digital-first: paper metadata removed, all real fields preserved
 */

import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const DEPARTMENT_LIST = [
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
  title: "",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [

        // ── Section 1: Incident Details ─────────────────────────────────────
        // Rule 1: Report No. is first field
        {
          type: "panel",
          name: "section1_incident_details",
          title: "1. Incident Details",
          elements: [
            {
              type: "text",
              name: "reportNo",
              title: "Incident Number",
              isRequired: true,
              readOnly: true,
              description: "Auto-assigned on submission",
            },
            {
              type: "text",
              name: "reportedBy",
              title: "Reported By",
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
              choices: DEPARTMENT_LIST,
            },
            {
              type: "text",
              name: "site",
              title: "Site / Project Name",
              isRequired: true,
            },
            {
              type: "text",
              name: "dateOfIncident",
              title: "Date of Incident",
              inputType: "date",
              isRequired: true,
            },
            {
              type: "text",
              name: "timeOfIncident",
              title: "Time of Incident",
              inputType: "time",
              isRequired: true,
            },
            {
              type: "text",
              name: "location",
              title: "Location / Site Area",
              isRequired: true,
            },
          ],
        },

        // ── Section 2: Severity Classification ─────────────────────────────
        {
          type: "panel",
          name: "section2_severity",
          title: "2. Severity Classification",
          elements: [
            {
              type: "checkbox",
              name: "severityClassification",
              title: "Tick the applicable severity level (select all that apply)",
              isRequired: true,
              choices: [
                "First Aid",
                "Medical Treatment",
                "Lost Time Injury",
                "Fatality",
                "Property Damage",
                "Environmental",
                "Near Miss",
                "Dangerous Occurrence",
              ],
            },
          ],
        },

        // ── Section 3: Brief Description ────────────────────────────────────
        {
          type: "panel",
          name: "section3_description",
          title: "3. Brief Description",
          elements: [
            {
              type: "comment",
              name: "incidentDescription",
              title: "Description of Incident",
              isRequired: true,
              rows: 5,
              placeholder:
                "Describe what happened, where, and when. Be factual and concise.",
            },
          ],
        },

        // ── Section 4: Persons Involved ─────────────────────────────────────
        // 4 columns → wideTable required
        {
          type: "panel",
          name: "section4_persons_involved",
          title: "4. Persons Involved",
          elements: [
            {
              type: "matrixdynamic",
              name: "personsInvolved",
              title: "List all persons involved",
              addRowText: "+ Add Person",
              rowCount: 1,
              minRowCount: 1,
              columns: [
                {
                  name: "name",
                  title: "Name",
                  cellType: "text",
                  isRequired: true,
                },
                {
                  name: "employeeNo",
                  title: "Employee No.",
                  cellType: "text",
                },
                {
                  name: "designation",
                  title: "Designation / Position",
                  cellType: "text",
                  isRequired: true,
                },
                {
                  name: "capacity",
                  title: "Capacity",
                  cellType: "dropdown",
                  isRequired: true,
                  choices: ["Employee", "Contractor", "Visitor", "Other"],
                },
              ],
            },
          ],
        },

        // ── Section 5: Immediate Actions Taken ─────────────────────────────
        {
          type: "panel",
          name: "section5_immediate_actions",
          title: "5. Immediate Actions Taken",
          elements: [
            {
              type: "comment",
              name: "immediateActions",
              title: "Actions taken immediately after the incident",
              isRequired: true,
              rows: 4,
              placeholder: "Describe first aid given, area secured, equipment isolated, etc.",
            },
          ],
        },

        // ── Section 6: Escalation — Notifications Made ──────────────────────
        // 5 columns → wideTable required
        {
          type: "panel",
          name: "section6_escalation",
          title: "6. Escalation — Notifications Made",
          elements: [
            {
              type: "matrixdynamic",
              name: "notificationsMade",
              title: "Record all notifications made",
              rowCount: 3,
              minRowCount: 1,
              columns: [
                {
                  name: "notifiedTo",
                  title: "Notified To",
                  cellType: "dropdown",
                  choices: [
                    "Site Manager",
                    "HSE Manager",
                    "MHRSD (if required)",
                    "Company Director",
                    "Other",
                  ],
                },
                {
                  name: "name",
                  title: "Name",
                  cellType: "text",
                },
                {
                  name: "time",
                  title: "Time",
                  cellType: "text",
                  inputType: "time",
                },
                {
                  name: "method",
                  title: "Method",
                  cellType: "dropdown",
                  choices: ["Phone", "WhatsApp", "Email", "Radio", "In Person"],
                },
                {
                  name: "confirmed",
                  title: "Confirmed",
                  cellType: "radiogroup",
                  choices: ["Yes", "No"],
                },
              ],
              defaultValue: [
                { notifiedTo: "Site Manager" },
                { notifiedTo: "HSE Manager" },
                { notifiedTo: "MHRSD (if required)" },
              ],
            },
          ],
        },

        // ── Section 7: Body Part Affected ───────────────────────────────────
        {
          type: "panel",
          name: "section7_body_parts",
          title: "7. Body Part Affected",
          elements: [
            {
              type: "checkbox",
              name: "bodyPartsAffected",
              title: "Mark the affected area(s) — select all that apply",
              choices: [
                "Head",
                "Eyes",
                "Face",
                "Neck",
                "Chest",
                "Back",
                "Arms",
                "Hands",
                "Legs",
                "Feet",
                "Internal",
                "Multiple",
                "None / No Injury",
              ],
              hasOther: true,
              otherText: "Other (specify)",
            },
          ],
        },

        // ── Section 8: Submitted By ─────────────────────────────────────────
        // Rule 4: name + date + time, all auto-filled, no manual signature
        {
          type: "panel",
          name: "section8_submitted_by",
          title: "8. Submitted By",
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

export default function FRM_HSE_002() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-002"
        title="Incident Flash Notification"
        revision="01"
        approvalDate="01 March 2026"
        minRole="field_worker"
        wideTable
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
