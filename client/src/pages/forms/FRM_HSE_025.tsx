import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Dangerous Occurrence Investigation Report",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "investigationDetails",
          title: "1. Investigation Details",
          elements: [
            {
              type: "text",
              name: "occurrenceReference",
              title: "Occurrence Reference (FRM-HSE-024 No.)",
              placeholder: "Enter reference from initial report",
              isRequired: true,
            },
            {
              type: "text",
              name: "investigationStartDate",
              title: "Investigation Start Date",
              inputType: "date",
              defaultValueExpression: "today()",
              readOnly: true,
              description: "Auto-filled with today's date",
            },
            {
              type: "text",
              name: "investigationLead",
              title: "Investigation Lead Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "investigationLeadId",
              title: "Investigation Lead Employee ID",
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "investigationLeadPosition",
              title: "Investigation Lead Position",
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "teamMembers",
              title: "Investigation Team Members",
              placeholder: "Names and roles of team members",
            },
            {
              type: "text",
              name: "location",
              title: "Location / Site",
              isRequired: true,
            },
            {
              type: "text",
              name: "originalDate",
              title: "Original Occurrence Date",
              inputType: "date",
              isRequired: true,
            },
            {
              type: "text",
              name: "originalClassification",
              title: "Original Classification",
              placeholder: "From initial report",
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
        {
          type: "panel",
          name: "occurrenceSummary",
          title: "2. Occurrence Summary",
          elements: [
            {
              type: "comment",
              name: "briefDescription",
              title: "Brief description from initial report",
              rows: 4,
              isRequired: true,
            },
          ],
        },
        {
          type: "panel",
          name: "sequenceOfEvents",
          title: "3. Sequence of Events",
          elements: [
            {
              type: "matrixdynamic",
              name: "events",
              title: "Sequence of Events",
              titleLocation: "hidden",
              columns: [
                {
                  name: "time",
                  title: "Time",
                  cellType: "text",
                  inputType: "time",
                },
                {
                  name: "event",
                  title: "Event / Action",
                  cellType: "text",
                  isRequired: true,
                },
                {
                  name: "source",
                  title: "Source of Info",
                  cellType: "text",
                  isRequired: true,
                },
              ],
              minRowCount: 1,
              rowCount: 5,
              addRowText: "+ Add Event",
            },
          ],
        },
        {
          type: "panel",
          name: "rootCauseAnalysis",
          title: "4. Root Cause Analysis",
          elements: [
            {
              type: "text",
              name: "directCause",
              title: "Direct Cause",
              isRequired: true,
            },
            {
              type: "comment",
              name: "contributingFactors",
              title: "Contributing Factors",
              rows: 3,
              isRequired: true,
            },
            {
              type: "comment",
              name: "rootCause",
              title: "Root Cause",
              rows: 3,
              isRequired: true,
            },
          ],
        },
        {
          type: "panel",
          name: "findings",
          title: "5. Findings",
          elements: [
            {
              type: "matrixdynamic",
              name: "findingsList",
              title: "Findings",
              titleLocation: "hidden",
              columns: [
                {
                  name: "no",
                  title: "No.",
                  cellType: "text",
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
                },
                {
                  name: "reference",
                  title: "Reference",
                  cellType: "text",
                },
              ],
              minRowCount: 1,
              rowCount: 4,
              addRowText: "+ Add Finding",
            },
          ],
        },
        {
          type: "panel",
          name: "capa",
          title: "6. Corrective and Preventive Actions",
          elements: [
            {
              type: "matrixdynamic",
              name: "actions",
              title: "Corrective and Preventive Actions",
              titleLocation: "hidden",
              columns: [
                {
                  name: "no",
                  title: "No.",
                  cellType: "text",
                },
                {
                  name: "action",
                  title: "Action Required",
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
                  name: "targetDate",
                  title: "Target Date",
                  cellType: "text",
                  inputType: "date",
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
                },
                {
                  name: "status",
                  title: "Status",
                  cellType: "dropdown",
                  defaultValue: "Open",
                  choices: ["Open", "In Progress", "Closed", "Overdue"],
                },
              ],
              minRowCount: 1,
              rowCount: 4,
              addRowText: "+ Add Action",
            },
          ],
        },
        {
          type: "panel",
          name: "regulatory",
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
              type: "text",
              name: "complianceActions",
              title: "Compliance Actions Required",
            },
            {
              type: "text",
              name: "notificationReference",
              title: "Notification Reference",
            },
          ],
        },
        {
          type: "panel",
          name: "evidence",
          title: "8. Evidence Notes",
          elements: [
            {
              type: "comment",
              name: "evidenceNotes",
              title: "Evidence collected / photos description",
              rows: 3,
            },
          ],
        },
        {
          type: "panel",
          name: "remarks",
          title: "9. Additional Remarks",
          elements: [
            {
              type: "comment",
              name: "additionalRemarks",
              title: "Remarks",
              rows: 3,
            },
          ],
        },
        {
          type: "panel",
          name: "submission",
          title: "10. Submitted By",
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
              defaultValueExpression: "today()",
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

export default function FRM_HSE_025() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-025"
        title="Dangerous Occurrence Investigation Report"
        revision="02"
        approvalDate="April 2026"
        minRole="field_worker"
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
