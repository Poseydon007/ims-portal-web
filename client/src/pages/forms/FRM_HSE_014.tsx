import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "PPE Kit Spot-Check Verification Form",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "section1",
          title: "1. Spot-Check Details",
          elements: [
            {
              type: "text",
              name: "employeeFullName",
              title: "Employee Full Name",
              isRequired: true
            },
            {
              type: "text",
              name: "employeeId",
              title: "Employee ID"
            },
            {
              type: "text",
              name: "position",
              title: "Position"
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
                "Other"
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
              name: "dateOfCheck",
              title: "Date of Check",
              inputType: "date",
              readOnly: true,
              defaultValueExpression: "today()",
              description: "Auto-filled with today's date"
            },
            {
              type: "text",
              name: "timeOfCheck",
              title: "Time of Check",
              inputType: "time",
              isRequired: true
            },
            {
              type: "dropdown",
              name: "checkType",
              title: "Check Type",
              isRequired: true,
              choices: ["Scheduled", "Random", "Post-Incident"]
            },
            {
              type: "text",
              name: "verifierFullName",
              title: "Verifier Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "verifierEmployeeId",
              title: "Verifier Employee ID",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "verifierPosition",
              title: "Verifier Position",
              readOnly: true,
              description: "Auto-filled from your login profile"
            }
          ]
        },
        {
          type: "panel",
          name: "section2",
          title: "2. Kit Condition Checks",
          elements: [
            {
              type: "matrixdynamic",
              name: "kitConditionChecks",
              title: "Verify each item against the PPE Kit Contents Matrix (FRM-HSE-016)",
              columns: [
                {
                  name: "col1",
                  title: "#",
                  cellType: "text",
                  readOnly: true
                },
                {
                  name: "col2",
                  title: "Item / Check",
                  cellType: "text",
                  readOnly: true
                },
                {
                  name: "col3",
                  title: "Result",
                  cellType: "dropdown",
                  isRequired: true,
                  choices: ["Yes", "No", "N/A"]
                },
                {
                  name: "col4",
                  title: "Comments",
                  cellType: "text"
                }
              ],
              rowCount: 8,
              minRowCount: 8,
              defaultValue: [
                {
                  col1: "1",
                  col2: "All required items present per PPE Kit Contents Matrix (FRM-HSE-016)"
                },
                {
                  col1: "2",
                  col2: "Items clean and in good condition — no visible damage, tears, or cracks"
                },
                {
                  col1: "3",
                  col2: "No expired items — inspection dates current on respirators, harnesses, cartridges"
                },
                {
                  col1: "4",
                  col2: "Employee demonstrates correct donning, adjustment, and use"
                },
                {
                  col1: "5",
                  col2: "Kit stored correctly in a clean, dry, and secure location"
                },
                {
                  col1: "6",
                  col2: "Employee confirms daily inspection routine and log kept up to date"
                },
                {
                  col1: "7",
                  col2: "PPE matches the hazard of the actual task performed today"
                },
                {
                  col1: "8",
                  col2: "No unauthorised modification, paint, or tampering with PPE"
                }
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "section3",
          title: "3. Outcome",
          elements: [
            {
              type: "radiogroup",
              name: "deficienciesFound",
              title: "Any deficiencies found?",
              isRequired: true,
              choices: ["No — Kit fully compliant", "Yes — Action required"]
            },
            {
              type: "matrixdynamic",
              name: "actionsRequired",
              title: "Actions Required",
              visibleIf: "{deficienciesFound} = 'Yes — Action required'",
              columns: [
                {
                  name: "col1",
                  title: "#",
                  cellType: "text"
                },
                {
                  name: "col2",
                  title: "Action Taken",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "col3",
                  title: "Responsible / Due Date",
                  cellType: "text"
                }
              ],
              minRowCount: 1,
              rowCount: 3,
              addRowText: "+ Add Action"
            }
          ]
        },
        {
          type: "panel",
          name: "section4",
          title: "4. Follow-Up",
          elements: [
            {
              type: "radiogroup",
              name: "followUpCompleted",
              title: "Follow-up completed?",
              isRequired: true,
              choices: ["Yes", "No", "N/A"]
            },
            {
              type: "text",
              name: "dateOfFollowUp",
              title: "Date of Follow-Up",
              inputType: "date",
              visibleIf: "{followUpCompleted} = 'Yes'"
            },
            {
              type: "comment",
              name: "closeOutNotes",
              title: "Close-Out Notes",
              rows: 2
            }
          ]
        },
        {
          type: "panel",
          name: "section5",
          title: "5. Submitted By",
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

export default function FRM_HSE_014() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-014"
        title="PPE Kit Spot-Check Verification Form"
        revision="01"
        approvalDate="10 April 2026"
        minRole="field_worker"
        wideTable={false}
        schema={SCHEMA}
        identityFields={{
          fullName: "verifierFullName",
          employeeId: "verifierEmployeeId",
          position: "verifierPosition",
          department: "department"
        }}
      />
    </Layout>
  );
}
