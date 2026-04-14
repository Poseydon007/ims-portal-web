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
  title: "Incident Flash Notification",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "section1_incident_details",
          title: "1. Incident Details",
          elements: [
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
              title: "Location",
              isRequired: true,
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
              title: "Site",
              isRequired: true,
            },
            {
              type: "text",
              name: "reportNo",
              title: "Incident Number",
              readOnly: true,
              description: "Auto-assigned on submission",
            },
            {
              type: "text",
              name: "reportedBy",
              title: "Reported By Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "employeeId",
              title: "Employee ID",
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "position",
              title: "Position",
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
          ],
        },
        {
          type: "panel",
          name: "section2_severity",
          title: "2. Severity Classification",
          elements: [
            {
              type: "checkbox",
              name: "severityClassification",
              title: "Select all that apply",
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
        {
          type: "panel",
          name: "section3_description",
          title: "3. Brief Description",
          elements: [
            {
              type: "comment",
              name: "incidentDescription",
              title: "Description of incident",
              isRequired: true,
              rows: 5,
              placeholder:
                "Describe what happened, where, and when. Be factual and concise.",
            },
          ],
        },
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
                  title: "Designation/Position",
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
        {
          type: "panel",
          name: "section5_immediate_actions",
          title: "5. Immediate Actions Taken",
          elements: [
            {
              type: "comment",
              name: "immediateActions",
              title: "Actions taken",
              isRequired: true,
              rows: 4,
            },
          ],
        },
        {
          type: "panel",
          name: "section6_escalation",
          title: "6. Escalation — Notifications Made",
          elements: [
            {
              type: "matrixdynamic",
              name: "notificationsMade",
              title: "Details of notifications",
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
                    "MHRSD",
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
                { notifiedTo: "MHRSD" },
              ],
            },
          ],
        },
        {
          type: "panel",
          name: "section7_body_parts",
          title: "7. Body Part Affected",
          elements: [
            {
              type: "checkbox",
              name: "bodyPartsAffected",
              title: "Select all that apply",
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
        {
          type: "panel",
          name: "section8_submitted_by",
          title: "8. Submitted By",
          elements: [
            {
              type: "text",
              name: "signoffReportedByName",
              title: "Submitted By Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "signoffReportedByDate",
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
