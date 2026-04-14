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
  "Other"
];

const SCHEMA = {
  title: "PPE Replacement Request Form",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "section1",
          title: "1. EMPLOYEE INFORMATION",
          elements: [
            {
              type: "text",
              name: "reportedBy",
              title: "Employee Full Name",
              isRequired: true,
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "employeeId",
              title: "Employee ID",
              isRequired: true,
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "position",
              title: "Position",
              isRequired: true,
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "dropdown",
              name: "department",
              title: "Department",
              isRequired: true,
              choices: DEPARTMENT_LIST
            },
            {
              type: "text",
              name: "siteLocation",
              title: "Site / Location",
              isRequired: true
            },
            {
              type: "text",
              name: "requestDate",
              title: "Request Date",
              inputType: "date",
              isRequired: true,
              readOnly: true,
              description: "Auto-filled with today's date"
            },
            {
              type: "text",
              name: "kitReferenceNumber",
              title: "Kit Reference Number",
              placeholder: "If applicable"
            }
          ]
        },
        {
          type: "panel",
          name: "section2",
          title: "2. TYPE OF REPLACEMENT REQUESTED",
          elements: [
            {
              type: "radiogroup",
              name: "replacementType",
              title: "Replacement Type",
              isRequired: true,
              choices: [
                {
                  value: "Full PPE Kit Replacement",
                  text: "Full PPE Kit Replacement — all items replaced (e.g., new role, total loss)"
                },
                {
                  value: "Specific Item(s) Replacement",
                  text: "Specific Item(s) Replacement — list items in Section 4"
                }
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "section3",
          title: "3. REASON FOR REPLACEMENT",
          elements: [
            {
              type: "checkbox",
              name: "reasonForReplacement",
              title: "Reason for Replacement (select all that apply)",
              isRequired: true,
              choices: [
                "Damage / wear from normal use",
                "Accidental damage (describe incident below)",
                "Loss / theft (describe circumstances below)",
                "Expiry / out of date (list item and expiry date below)",
                "Defect found on issuance or inspection",
                "Wrong size or fit from original issue",
                "Contamination (chemical, biological, blood)",
                "Other (describe below)"
              ]
            },
            {
              type: "comment",
              name: "reasonDetails",
              title: "Reason Details",
              rows: 3,
              placeholder: "Describe incident, circumstances, expiry dates, or other details as applicable"
            }
          ]
        },
        {
          type: "panel",
          name: "section4",
          title: "4. SPECIFIC ITEMS REQUESTED",
          visibleIf: "{replacementType} = 'Specific Item(s) Replacement'",
          elements: [
            {
              type: "matrixdynamic",
              name: "specificItems",
              title: "Items List",
              isRequired: true,
              columns: [
                {
                  name: "itemNo",
                  title: "#",
                  cellType: "text",
                  width: "50px"
                },
                {
                  name: "itemDescription",
                  title: "Item Description — include standard e.g. EN 397",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "quantity",
                  title: "Qty",
                  cellType: "text",
                  inputType: "number",
                  isRequired: true,
                  width: "80px"
                }
              ],
              minRowCount: 1,
              rowCount: 3,
              addRowText: "+ Add Item"
            }
          ]
        },
        {
          type: "panel",
          name: "section5",
          title: "5. EMPLOYEE DECLARATION",
          elements: [
            {
              type: "boolean",
              name: "declarationConfirmed",
              title: "Declaration",
              label: "I confirm the above declaration",
              description: "I confirm the above information is accurate. I understand that providing false information may result in disciplinary action under Saudi Labor Law and TEMC internal policy. I request replacement PPE as indicated and agree to return the damaged item (if available) for inspection.",
              isRequired: true
            }
          ]
        },
        {
          type: "panel",
          name: "section6",
          title: "6. SUBMITTED BY",
          elements: [
            {
              type: "text",
              name: "signoffReportedByName",
              title: "Submitted By Full Name",
              isRequired: true,
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "signoffReportedByDate",
              title: "Submission Date",
              inputType: "date",
              isRequired: true,
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

export default function FRM_HSE_015() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-015"
        title="PPE Replacement Request Form"
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
