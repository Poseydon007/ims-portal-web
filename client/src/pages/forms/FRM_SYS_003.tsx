import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Corrective Action Request (CAR) Form",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "car_details",
          title: "1. CAR Details",
          elements: [
            {
              type: "text",
              name: "reportNo",
              title: "CAR No.",
              readOnly: true,
              description: "Auto-assigned on submission"
            },
            {
              type: "text",
              name: "dateIssued",
              title: "Date Issued",
              inputType: "date",
              readOnly: true,
              description: "Auto-filled with today's date"
            },
            {
              type: "text",
              name: "reportedBy",
              title: "Originator Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "employeeId",
              title: "Originator Employee ID",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "dropdown",
              name: "department",
              title: "Department",
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
              type: "checkbox",
              name: "source",
              title: "Source",
              isRequired: true,
              choices: [
                "Audit Finding", "Incident", "Inspection", "Customer Complaint", 
                "Management Review", "Other"
              ]
            },
            {
              type: "radiogroup",
              name: "priority",
              title: "Priority",
              isRequired: true,
              choices: ["Critical", "Major", "Minor", "Observation"]
            },
            {
              type: "text",
              name: "isoClause",
              title: "ISO Clause Reference",
              placeholder: "e.g., ISO 9001:2015 Cl. 10.2"
            }
          ]
        },
        {
          type: "panel",
          name: "nonconformance_description",
          title: "2. Description of Nonconformance / Finding",
          elements: [
            {
              type: "comment",
              name: "description",
              title: "Description",
              rows: 4,
              isRequired: true
            }
          ]
        },
        {
          type: "panel",
          name: "root_cause_analysis",
          title: "3. Root Cause Analysis",
          elements: [
            {
              type: "comment",
              name: "rootCause",
              title: "Root Cause",
              rows: 4,
              isRequired: true
            }
          ]
        },
        {
          type: "panel",
          name: "corrective_preventive_actions",
          title: "4. Corrective and Preventive Actions",
          elements: [
            {
              type: "matrixdynamic",
              name: "actions",
              title: "Actions",
              titleLocation: "hidden",
              isRequired: true,
              columns: [
                {
                  name: "no",
                  title: "No.",
                  cellType: "text"
                },
                {
                  name: "actionRequired",
                  title: "Action Required",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "responsible",
                  title: "Responsible",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "targetDate",
                  title: "Target Date",
                  cellType: "text",
                  inputType: "date",
                  isRequired: true
                },
                {
                  name: "completionDate",
                  title: "Completion Date",
                  cellType: "text",
                  inputType: "date"
                },
                {
                  name: "status",
                  title: "Status",
                  cellType: "dropdown",
                  isRequired: true,
                  choices: ["Open", "In Progress", "Closed"]
                }
              ],
              minRowCount: 1,
              rowCount: 6,
              addRowText: "+ Add Action"
            }
          ]
        },
        {
          type: "panel",
          name: "verification_effectiveness",
          title: "5. Verification of Effectiveness",
          elements: [
            {
              type: "text",
              name: "verificationDate",
              title: "Verification Date",
              inputType: "date"
            },
            {
              type: "text",
              name: "verifiedBy",
              title: "Verified By"
            },
            {
              type: "radiogroup",
              name: "actionsEffective",
              title: "Actions Effective",
              choices: [
                { value: "Yes", text: "Yes — CAR Closed" },
                { value: "No", text: "No — Further Action Required" },
                "Partial"
              ]
            },
            {
              type: "comment",
              name: "comments",
              title: "Comments",
              rows: 2
            }
          ]
        },
        {
          type: "panel",
          name: "submission_section",
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
              description: "Auto-filled with today's date"
            },
            {
              type: "html",
              name: "workflow_note",
              html: "<div style='padding: 10px; background-color: #f8f9fa; border-radius: 4px; margin-top: 10px; font-style: italic;'>Note: Responsible Manager, QA / IMS Manager, and Verified & Closed By approvals handled by digital workflow</div>"
            }
          ]
        }
      ]
    }
  ],
  checkErrorsMode: "onComplete",
  showPrevButton: false
};

export default function FRM_SYS_003() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-SYS-003"
        title="Corrective Action Request (CAR) Form"
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
