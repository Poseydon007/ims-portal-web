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
  title: "Planned Task Observation (PTO) Form",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "section_observation_details",
          title: "1. Observation Details",
          elements: [
            {
              type: "text",
              name: "reportedBy",
              title: "Observer Name",
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
              name: "observationDate",
              title: "Date of Observation",
              inputType: "date",
              isRequired: true,
              readOnly: true,
              description: "Auto-filled with today's date"
            },
            {
              type: "text",
              name: "observationTime",
              title: "Time",
              inputType: "time",
              isRequired: true
            },
            {
              type: "radiogroup",
              name: "shift",
              title: "Shift",
              isRequired: true,
              choices: ["Day Shift", "Night Shift"]
            },
            {
              type: "text",
              name: "location",
              title: "Location / Site",
              isRequired: true
            },
            {
              type: "text",
              name: "taskObserved",
              title: "Task Observed",
              isRequired: true,
              placeholder: "e.g., rod handling, rig setup, manual lifting"
            },
            {
              type: "text",
              name: "employeesObserved",
              title: "Employee(s) Observed",
              isRequired: true
            },
            {
              type: "text",
              name: "taskDuration",
              title: "Task Duration in minutes",
              inputType: "number"
            },
            {
              type: "text",
              name: "lightingConditions",
              title: "Lighting Conditions",
              visibleIf: "{shift} = 'Night Shift'",
              isRequired: true
            }
          ]
        },
        {
          type: "panel",
          name: "section_observation_checklist",
          title: "2. Observation Checklist — Safe Acts",
          elements: [
            {
              type: "checkbox",
              name: "safeActs",
              title: "Select all that apply",
              choices: [
                "Proper PPE worn and used correctly",
                "Safe lifting / manual handling technique",
                "Line-of-fire awareness (hands off moving parts)",
                "Clear communication with team",
                "Housekeeping maintained (no trip hazards)",
                "Equipment used correctly (no shortcuts)",
                "Fatigue / heat stress managed (breaks, hydration)",
                {
                  value: "Adequate lighting for task",
                  text: "Adequate lighting for task (night shift only)",
                  visibleIf: "{shift} = 'Night Shift'"
                },
                {
                  value: "Visibility aids in use",
                  text: "Visibility aids in use — reflective vests etc. (night shift only)",
                  visibleIf: "{shift} = 'Night Shift'"
                }
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "section_unsafe_acts",
          title: "3. Unsafe Acts / Conditions Identified",
          elements: [
            {
              type: "matrixdynamic",
              name: "unsafeItems",
              title: "Unsafe Acts / Conditions",
              addRowText: "+ Add Item",
              rowCount: 0,
              minRowCount: 0,
              columns: [
                {
                  name: "itemNo",
                  title: "Item No.",
                  cellType: "text"
                },
                {
                  name: "description",
                  title: "Description of Unsafe Act/Condition",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "riskLevel",
                  title: "Risk Level",
                  cellType: "dropdown",
                  isRequired: true,
                  choices: ["Low", "Medium", "High", "Extreme"]
                },
                {
                  name: "immediateAction",
                  title: "Immediate Action Taken",
                  cellType: "text"
                }
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "section_feedback",
          title: "4. Feedback Given to Worker",
          elements: [
            {
              type: "radiogroup",
              name: "feedbackGiven",
              title: "Was feedback given?",
              isRequired: true,
              choices: ["Yes", "No"]
            },
            {
              type: "dropdown",
              name: "feedbackType",
              title: "Type of Feedback",
              visibleIf: "{feedbackGiven} = 'Yes'",
              isRequired: true,
              choices: ["Positive", "Corrective", "Both"]
            },
            {
              type: "comment",
              name: "feedbackSummary",
              title: "Summary of Feedback",
              visibleIf: "{feedbackGiven} = 'Yes'",
              isRequired: true,
              rows: 3
            }
          ]
        },
        {
          type: "panel",
          name: "section_overall_assessment",
          title: "5. Overall Safety Assessment",
          elements: [
            {
              type: "dropdown",
              name: "overallRating",
              title: "Overall Rating",
              isRequired: true,
              choices: [
                "Excellent",
                "Good",
                "Satisfactory",
                "Needs Improvement",
                "Unsafe — Stop Work"
              ]
            },
            {
              type: "comment",
              name: "comments",
              title: "Comments / Recommendations",
              rows: 4
            },
            {
              type: "radiogroup",
              name: "followUpRequired",
              title: "Follow-up action required?",
              isRequired: true,
              choices: ["Yes", "No"]
            },
            {
              type: "text",
              name: "followUpDueDate",
              title: "Follow-up Due Date",
              inputType: "date",
              visibleIf: "{followUpRequired} = 'Yes'",
              isRequired: true
            }
          ]
        },
        {
          type: "panel",
          name: "section_submitted_by",
          title: "6. Submitted By",
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

export default function FRM_HSE_007() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-007"
        title="Planned Task Observation (PTO) Form"
        revision="01"
        approvalDate="09 April 2026"
        minRole="field_worker"
        wideTable={true}
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
