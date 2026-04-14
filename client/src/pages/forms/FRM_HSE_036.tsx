import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Fire Fighter Appointment Letter",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "panel1",
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
                "HSE", "Operations – Drilling", "Operations – Geology", "Operations – Survey", 
                "Maintenance", "Logistics & Transport", "Warehouse & Supply", "Security", 
                "Administration", "Finance & Accounting", "Human Resources", "IT & Communications", 
                "Management", "Quality Assurance", "Environmental", "Training & Competency", 
                "Contracts & Procurement", "Camp & Catering", "Medical & First Aid", "Other"
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
          name: "panel2",
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
              placeholder: "e.g., Valid Fire Fighting Certificate required"
            },
            {
              type: "text",
              name: "authorityLevel",
              title: "Authority Level"
            }
          ]
        },
        {
          type: "panel",
          name: "panel3",
          title: "3. Scope of Responsibilities",
          elements: [
            {
              type: "html",
              name: "scopeInfo",
              html: `
                <div style="padding: 15px; border: 1px solid #ccc; border-radius: 4px; background-color: #f9f9f9;">
                  <h4 style="margin-top: 0;">Responsibilities include:</h4>
                  <ul style="margin-bottom: 0;">
                    <li>Respond to fire emergencies and activate alarm systems</li>
                    <li>Use fire extinguishers and firefighting equipment correctly</li>
                    <li>Assist in evacuation and guide personnel to assembly points</li>
                    <li>Conduct regular fire prevention inspections in assigned areas</li>
                    <li>Maintain fire fighting equipment in assigned zones</li>
                    <li>Participate in fire drills and emergency response exercises</li>
                    <li>Report fire hazards and near-miss events to HSE Officer</li>
                    <li>Comply with Civil Defence regulations and MHRSD requirements</li>
                  </ul>
                </div>
              `
            }
          ]
        },
        {
          type: "panel",
          name: "panel4",
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
          name: "panel5",
          title: "5. Employee Acknowledgment",
          elements: [
            {
              type: "boolean",
              name: "acknowledgment",
              title: "I acknowledge receipt of this appointment letter and accept the role of Firefighter / Fire Warden as described. I commit to fulfilling the responsibilities and adhering to applicable safety standards and regulations.",
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
          name: "panel6",
          title: "6. Submitted By",
          elements: [
            {
              type: "text",
              name: "submittedByFullName",
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
  showPrevButton: false,
};

export default function FRM_HSE_036() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-036"
        title="Fire Fighter Appointment Letter"
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
