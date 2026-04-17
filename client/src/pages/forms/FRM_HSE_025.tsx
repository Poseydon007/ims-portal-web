import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Dangerous Occurrence Investigation Report",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        // ── Section 1: Investigation Details ──────────────────────────────
        {
          type: "panel",
          name: "panel1",
          title: "1. Investigation Details",
          elements: [
            {
              type: "text",
              name: "reportNo",
              title: "Investigation Report No.",
              description: "Auto-assigned on submission",
            },
            {
              type: "text",
              name: "occurrenceReference",
              title: "Occurrence Reference (FRM-HSE-024 No.)",
              placeholder: "Enter reference number from initial report",
              isRequired: true,
            },
            {
              type: "text",
              name: "investigationStartDate",
              title: "Investigation Start Date",
              inputType: "date",
              isRequired: true,
            },
            {
              type: "text",
              name: "investigationLead",
              title: "Investigation Lead — Full Name",
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "investigationLeadId",
              title: "Investigation Lead — Employee ID",
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "investigationLeadPosition",
              title: "Investigation Lead — Position",
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "teamMembers",
              title: "Investigation Team Members",
              placeholder: "Names and roles of all team members",
            },
            {
              type: "text",
              name: "locationSite",
              title: "Location / Site",
              isRequired: true,
            },
            {
              type: "text",
              name: "originalOccurrenceDate",
              title: "Original Occurrence Date",
              inputType: "date",
              isRequired: true,
            },
            {
              type: "text",
              name: "originalClassification",
              title: "Original Classification",
              placeholder: "From initial FRM-HSE-024 report",
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
                "Other",
              ],
            },
          ],
        },

        // ── Section 2: Occurrence Summary ─────────────────────────────────
        {
          type: "panel",
          name: "panel2",
          title: "2. Occurrence Summary",
          elements: [
            {
              type: "comment",
              name: "briefDescription",
              title: "Brief Description of the Dangerous Occurrence",
              description: "Summarise from the initial FRM-HSE-024 report",
              rows: 5,
              isRequired: true,
            },
          ],
        },

        // ── Section 3: Sequence of Events ─────────────────────────────────
        {
          type: "panel",
          name: "panel3",
          title: "3. Sequence of Events",
          elements: [
            {
              type: "matrixdynamic",
              name: "sequenceOfEvents",
              title: "Timeline",
              titleLocation: "hidden",
              columns: [
                {
                  name: "time",
                  title: "Time",
                  cellType: "text",
                  inputType: "time",
                  width: "120px",
                },
                {
                  name: "event",
                  title: "Event / Action",
                  cellType: "text",
                  isRequired: true,
                },
                {
                  name: "sourceOfInfo",
                  title: "Source of Info",
                  cellType: "text",
                  width: "180px",
                },
              ],
              minRowCount: 3,
              rowCount: 6,
              addRowText: "+ Add Event",
            },
          ],
        },

        // ── Section 4: Root Cause Analysis ────────────────────────────────
        {
          type: "panel",
          name: "panel4",
          title: "4. Root Cause Analysis",
          elements: [
            {
              type: "comment",
              name: "directCause",
              title: "Direct Cause",
              description: "The immediate physical cause of the occurrence",
              rows: 3,
              isRequired: true,
            },
            {
              type: "comment",
              name: "contributingFactors",
              title: "Contributing Factors",
              description: "Conditions or actions that contributed to the occurrence",
              rows: 3,
              isRequired: true,
            },
            {
              type: "comment",
              name: "rootCause",
              title: "Root Cause",
              description: "The fundamental systemic cause",
              rows: 3,
              isRequired: true,
            },
          ],
        },

        // ── Section 5: Findings ───────────────────────────────────────────
        {
          type: "panel",
          name: "panel5",
          title: "5. Findings",
          elements: [
            {
              type: "matrixdynamic",
              name: "findings",
              title: "Findings",
              titleLocation: "hidden",
              columns: [
                {
                  name: "no",
                  title: "No.",
                  cellType: "text",
                  width: "60px",
                },
                {
                  name: "finding",
                  title: "Finding",
                  cellType: "text",
                  isRequired: true,
                },
                {
                  name: "severity",
                  title: "Severity",
                  cellType: "dropdown",
                  choices: ["Critical", "High", "Medium", "Low"],
                  width: "130px",
                },
                {
                  name: "reference",
                  title: "Reference",
                  cellType: "text",
                  width: "160px",
                },
              ],
              minRowCount: 1,
              rowCount: 4,
              addRowText: "+ Add Finding",
            },
          ],
        },

        // ── Section 6: Corrective and Preventive Actions ──────────────────
        {
          type: "panel",
          name: "panel6",
          title: "6. Corrective and Preventive Actions",
          elements: [
            {
              type: "matrixdynamic",
              name: "capaActions",
              title: "CAPA Log",
              titleLocation: "hidden",
              columns: [
                {
                  name: "no",
                  title: "No.",
                  cellType: "text",
                  width: "50px",
                },
                {
                  name: "actionRequired",
                  title: "Action Required",
                  cellType: "text",
                  isRequired: true,
                },
                {
                  name: "responsible",
                  title: "Responsible",
                  cellType: "text",
                  isRequired: true,
                  width: "150px",
                },
                {
                  name: "targetDate",
                  title: "Target Date",
                  cellType: "text",
                  inputType: "date",
                  width: "130px",
                },
                {
                  name: "controlType",
                  title: "Control Type",
                  cellType: "dropdown",
                  choices: [
                    "Elimination",
                    "Substitution",
                    "Engineering Control",
                    "Administrative Control",
                    "PPE",
                  ],
                  width: "160px",
                },
                {
                  name: "status",
                  title: "Status",
                  cellType: "dropdown",
                  defaultValue: "Open",
                  choices: ["Open", "In Progress", "Closed", "Overdue"],
                  width: "120px",
                },
              ],
              minRowCount: 1,
              rowCount: 4,
              addRowText: "+ Add Action",
            },
          ],
        },

        // ── Section 7: Regulatory Follow-Up (KSA) ────────────────────────
        {
          type: "panel",
          name: "panel7",
          title: "7. Regulatory Follow-Up (KSA)",
          elements: [
            {
              type: "checkbox",
              name: "regulatoryNotifications",
              title: "Notifications",
              choices: [
                "N/A",
                "MHRSD Notified",
                "GOSI Notified",
                "Civil Defence Notified",
                "Client Notified",
              ],
            },
            {
              type: "comment",
              name: "complianceActionsRequired",
              title: "Compliance Actions Required",
              rows: 3,
            },
            {
              type: "text",
              name: "notificationReference",
              title: "Notification Reference No.",
            },
          ],
        },

        // ── Section 8: Photos / Evidence ──────────────────────────────────
        {
          type: "panel",
          name: "panel8",
          title: "8. Photos / Evidence",
          elements: [
            {
              type: "comment",
              name: "evidenceDescription",
              title: "Evidence Collected / Photos Description",
              description: "List all physical evidence, photos, and documents collected",
              rows: 4,
            },
            {
              type: "text",
              name: "evidenceStorageRef",
              title: "Evidence Storage Reference / Location",
              placeholder: "e.g., HSE folder, site safe, digital drive path",
            },
          ],
        },

        // ── Section 9: Remarks / Additional Information ───────────────────
        {
          type: "panel",
          name: "panel9",
          title: "9. Remarks / Additional Information",
          elements: [
            {
              type: "comment",
              name: "additionalRemarks",
              title: "Remarks",
              rows: 4,
            },
          ],
        },

        // ── Section 10: Submitted By ──────────────────────────────────────
        {
          type: "panel",
          name: "panel10",
          title: "10. Submitted By",
          elements: [
            {
              type: "text",
              name: "signoffReportedByName",
              title: "Submitted By — Full Name",
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "signoffReportedByDate",
              title: "Submission Date",
              inputType: "date",
              description: "Auto-filled with today's date",
            },
            {
              type: "text",
              name: "signoffSubmissionTime",
              title: "Submission Time",
              inputType: "time",
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

export default function FRM_HSE_025() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-025"
        title="Dangerous Occurrence Investigation Report"
        revision="02"
        approvalDate="April 2026"
        minRole="hse_manager"
        wideTable={true}
        schema={SCHEMA}
        identityFields={{
          fullName: "investigationLead",
          employeeId: "investigationLeadId",
          position: "investigationLeadPosition",
        }}
      />
    </Layout>
  );
}
