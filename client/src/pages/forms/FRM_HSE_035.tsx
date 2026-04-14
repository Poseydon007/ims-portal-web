import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "First Aider Appointment Letter",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "section1",
          title: "1. Employee Details",
          elements: [
            {
              type: "text",
              name: "date",
              title: "Date",
              inputType: "date",
              readOnly: true,
              defaultValueExpression: "today()",
              description: "Auto-filled with today's date"
            },
            {
              type: "text",
              name: "referenceNo",
              title: "Reference No.",
              readOnly: true,
              description: "Auto-assigned on submission"
            },
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
              type: "dropdown",
              name: "department",
              title: "Department / Site",
              isRequired: true,
              readOnly: true,
              description: "Auto-filled from your login profile",
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
                "Other"
              ]
            },
            {
              type: "text",
              name: "position",
              title: "Job Title",
              isRequired: true,
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "designation",
              title: "Designation"
            }
          ]
        },
        {
          type: "panel",
          name: "section2",
          title: "2. Appointment Details",
          elements: [
            {
              type: "text",
              name: "effectiveDate",
              title: "Effective Date",
              inputType: "date",
              isRequired: true
            },
            {
              type: "text",
              name: "durationValidity",
              title: "Duration / Validity",
              isRequired: true,
              placeholder: "e.g., 1 year from effective date"
            },
            {
              type: "text",
              name: "workLocation",
              title: "Work Location",
              isRequired: true
            },
            {
              type: "text",
              name: "trainingRequirement",
              title: "Training Requirement",
              placeholder: "e.g., Valid First Aid Certificate required"
            },
            {
              type: "text",
              name: "authorityLevel",
              title: "Authority Level",
              placeholder: "e.g., Site-level first aid response"
            }
          ]
        },
        {
          type: "panel",
          name: "section3",
          title: "3. Scope of Responsibilities",
          elements: [
            {
              type: "html",
              name: "responsibilitiesInfo",
              html: "<div style='padding: 15px; background-color: #f8f9fa; border-left: 5px solid #007bff; border-radius: 4px;'><h4 style='margin-top: 0;'>Responsibilities:</h4><ul style='margin-bottom: 0;'><li>Provide immediate first aid treatment to injured or ill persons on site</li><li>Maintain and inspect first aid kits and equipment in assigned areas</li><li>Report all first aid cases using TE-IMS-FRM-HSE-004</li><li>Coordinate with HSE Officer for medical referrals and emergency response</li><li>Participate in emergency drills and first aid training refreshers</li><li>Maintain confidentiality of all medical information</li><li>Comply with Saudi Ministry of Health and MHRSD regulations</li></ul></div>"
            }
          ]
        },
        {
          type: "panel",
          name: "section4",
          title: "4. Issued By",
          elements: [
            {
              type: "text",
              name: "issuedByFullName",
              title: "Issued By Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "issuedByPosition",
              title: "Issued By Position",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "issueDate",
              title: "Issue Date",
              inputType: "date",
              readOnly: true,
              defaultValueExpression: "today()",
              description: "Auto-filled with today's date"
            }
          ]
        },
        {
          type: "panel",
          name: "section5",
          title: "5. Employee Acknowledgment",
          elements: [
            {
              type: "boolean",
              name: "acknowledgment",
              title: "I acknowledge receipt of this appointment letter and accept the role of First Aider as described. I commit to fulfilling the responsibilities and adhering to applicable safety standards and regulations.",
              isRequired: true
            },
            {
              type: "text",
              name: "employeePrintedName",
              title: "Employee Printed Name",
              isRequired: true
            },
            {
              type: "text",
              name: "dateOfAcknowledgment",
              title: "Date of Acknowledgment",
              inputType: "date",
              readOnly: true,
              defaultValueExpression: "today()",
              description: "Auto-filled with today's date"
            },
            {
              type: "text",
              name: "witnessName",
              title: "Witness Name"
            }
          ]
        },
        {
          type: "panel",
          name: "section6",
          title: "6. Submitted By",
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

export default function FRM_HSE_035() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-035"
        title="First Aider Appointment Letter"
        revision="01"
        approvalDate="09 April 2026"
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
