import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "PPE Kit Issuance and Acceptance Form",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "panel1",
          title: "1. Employee Information",
          elements: [
            {
              type: "text",
              name: "reportedBy",
              title: "Employee Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "employeeId",
              title: "Employee ID",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "position",
              title: "Position",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "dropdown",
              name: "department",
              title: "Department",
              isRequired: true,
              readOnly: true,
              description: "Auto-filled from your login profile",
              choices: [
                "HSE", "Operations – Drilling", "Operations – Geology", "Operations – Survey", 
                "Maintenance", "Logistics & Transport", "Warehouse & Supply", "Security", 
                "Administration", "Finance & Accounting", "Human Resources", "IT & Communications", 
                "Management", "Quality Assurance", "Environmental", "Training & Competency", 
                "Contracts & Procurement", "Camp & Catering", "Medical & First Aid", "Other"
              ]
            },
            {
              type: "text",
              name: "siteLocation",
              title: "Site / Location",
              isRequired: true
            },
            {
              type: "text",
              name: "dateOfIssue",
              title: "Date of Issue",
              inputType: "date",
              readOnly: true,
              defaultValueExpression: "today()",
              description: "Auto-filled with today's date"
            },
            {
              type: "text",
              name: "kitReferenceNumber",
              title: "Kit Reference Number",
              readOnly: true,
              description: "Auto-assigned on submission"
            }
          ]
        },
        {
          type: "panel",
          name: "panel2",
          title: "2. Kit Type",
          elements: [
            {
              type: "dropdown",
              name: "kitType",
              title: "Kit Type",
              isRequired: true,
              choices: [
                "Standard Field Kit", "Drilling Operations Kit", "Confined Space Kit", 
                "Electrical Work Kit", "Hot Work Kit", "Height Work Kit", 
                "Chemical Handling Kit", "Visitor Kit", "Custom / Other"
              ]
            },
            {
              type: "comment",
              name: "customKitDetails",
              title: "Specify items",
              visibleIf: "{kitType} = 'Custom / Other'",
              rows: 3
            }
          ]
        },
        {
          type: "panel",
          name: "panel3",
          title: "3. Reason for Issuance",
          elements: [
            {
              type: "dropdown",
              name: "reason",
              title: "Reason",
              isRequired: true,
              choices: [
                "New Employee", "Role Change", "Replacement — Damaged", 
                "Replacement — Lost", "Replacement — Expired", 
                "Temporary Assignment", "Other"
              ]
            },
            {
              type: "text",
              name: "additionalDetails",
              title: "Additional Details",
              visibleIf: "{reason} = 'Other' or {reason} contains 'Replacement'"
            }
          ]
        },
        {
          type: "panel",
          name: "panel4",
          title: "4. PPE Kit Contents Acknowledgement",
          elements: [
            {
              type: "boolean",
              name: "confirmReceipt",
              title: "I confirm I have received a complete PPE kit as listed in the PPE Kit Contents Matrix (TE-IMS-FRM-HSE-016). All items were present, in good condition, and of the correct size at the time of issue.",
              label: "I confirm receipt of complete PPE kit",
              isRequired: true
            },
            {
              type: "radiogroup",
              name: "kitCondition",
              title: "Any items missing or defective at time of issue?",
              isRequired: true,
              choices: [
                "No — Kit fully complete",
                "Yes — See remarks below"
              ]
            },
            {
              type: "comment",
              name: "missingItemsRemarks",
              title: "Remarks on missing / defective items",
              visibleIf: "{kitCondition} = 'Yes — See remarks below'",
              rows: 3
            }
          ]
        },
        {
          type: "panel",
          name: "panel5",
          title: "5. Employee Declaration",
          elements: [
            {
              type: "boolean",
              name: "acceptResponsibility",
              title: "I understand that I am personally responsible for the correct use, daily inspection, maintenance, and secure storage of my PPE kit. I will report any damage, loss, or defect immediately to my supervisor or HSE Officer. I understand that deliberate damage or loss may result in cost recovery under TEMC policy.",
              label: "I accept responsibility for my PPE kit",
              isRequired: true
            }
          ]
        },
        {
          type: "panel",
          name: "panel6",
          title: "6. Issued By",
          elements: [
            {
              type: "text",
              name: "issuedByName",
              title: "Issued By Full Name",
              isRequired: true
            },
            {
              type: "text",
              name: "issuedByPosition",
              title: "Issued By Position"
            },
            {
              type: "text",
              name: "issuedByDate",
              title: "Date of Issue",
              inputType: "date",
              readOnly: true,
              defaultValueExpression: "today()",
              description: "Auto-filled with today's date"
            }
          ]
        },
        {
          type: "panel",
          name: "panel7",
          title: "7. Submitted By",
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
              defaultValueExpression: "today()",
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

export default function FRM_HSE_013() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-013"
        title="PPE Kit Issuance and Acceptance Form"
        revision="01"
        approvalDate="10 April 2026"
        minRole="field_worker"
        wideTable={false}
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
