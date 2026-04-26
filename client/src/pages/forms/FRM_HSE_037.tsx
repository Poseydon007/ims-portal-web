import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Lockout Officer Appointment Letter",
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
            { type: "text", name: "reportNo", title: "Report No.", isRequired: true, readOnly: true, description: "Auto-assigned on submission" },
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
              name: "employeeFullName",
              title: "Employee Full Name",
              isRequired: true
            },
            {
              type: "text",
              name: "employeeId",
              title: "Employee ID",
              isRequired: true
            },
            {
              type: "dropdown",
              name: "department",
              title: "Department / Site",
              isRequired: true,
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
              name: "jobTitle",
              title: "Job Title",
              isRequired: true
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
              name: "duration",
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
              placeholder: "e.g., LOTO Certification required"
            },
            {
              type: "text",
              name: "authorityLevel",
              title: "Authority Level",
              defaultValue: "Stop Work Authority: Authorised to stop work if LOTO protocols are not followed"
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
              name: "scopeInfo",
              html: `
                <div style="padding: 15px; border: 1px solid #ccc; border-radius: 5px; background-color: #f9f9f9;">
                  <ul style="margin: 0; padding-left: 20px;">
                    <li><strong>Control of Hazardous Energy:</strong> Implement, supervise, and verify LOTO procedures during maintenance and servicing</li>
                    <li><strong>Tagging and Locking:</strong> Ensure all energy sources are properly isolated, locked, and tagged before work begins</li>
                    <li><strong>Training & Awareness:</strong> Assist in training personnel on correct LOTO procedures per ISO 45001:2018</li>
                    <li><strong>Verification:</strong> Conduct verification before equipment is re-energised to ensure all LOTO devices are removed</li>
                    <li><strong>Audit & Recordkeeping:</strong> Maintain logs of LOTO events, audits, and equipment-specific procedures</li>
                    <li><strong>Regulatory Compliance:</strong> Ensure compliance with MHRSD and relevant international standards</li>
                    <li><strong>Stop Work Authority:</strong> Authorised to stop work if LOTO protocols are not being followed</li>
                  </ul>
                </div>
              `
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
              name: "issuedBy",
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
              title: "I acknowledge receipt of this appointment letter and accept the role of Lockout/Tagout (LOTO) Officer as described. I commit to fulfilling the responsibilities and adhering to applicable safety standards and regulations.",
              isRequired: true,
              labelTrue: "Yes",
              labelFalse: "No"
            },
            {
              type: "text",
              name: "employeePrintedName",
              title: "Employee Printed Name",
              isRequired: true
            },
            {
              type: "text",
              name: "acknowledgmentDate",
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
              name: "reportedBy",
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

export default function FRM_HSE_037() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-037"
        title="Lockout Officer Appointment Letter"
        revision="01"
        approvalDate="09 April 2026"
        minRole="field_worker"
        wideTable={false}
        schema={SCHEMA}
        identityFields={{ 
          fullName: "reportedBy", 
          employeeId: "employeeId", 
          department: "department", 
          position: "jobTitle" 
        }}
      />
    </Layout>
  );
}
