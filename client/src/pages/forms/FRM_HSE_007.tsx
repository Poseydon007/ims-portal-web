import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";
import { DEPARTMENTS } from "@/lib/formConstants";

const SCHEMA = {
  title: "Planned Task Observation (PTO) Form",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        // ── Section 1: Observation Details ──────────────────────────────────
        {
          type: "panel",
          name: "section_observation_details",
          title: "1. Observation Details",
          elements: [
            {
              type: "text",
              name: "reportNo",
              title: "PTO Number",
              isRequired: true,
              readOnly: true,
              description: "Auto-assigned on submission"
            },
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
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "dropdown",
              name: "department",
              title: "Department",
              isRequired: true,
              choices: DEPARTMENTS
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
              title: "Task Duration (minutes)",
              inputType: "number"
            },
            {
              type: "text",
              name: "lightingConditions",
              title: "Lighting Conditions",
              description: "e.g., 540 lux at rig, 215 lux walkways — required for night shift",
              visibleIf: "{shift} = 'Night Shift'",
              isRequired: true
            }
          ]
        },

        // ── Section 2: Observation Checklist — Safe Acts ─────────────────────
        {
          type: "panel",
          name: "section_safe_acts",
          title: "2. Observation Checklist — Safe Acts",
          description: "Tick all safe behaviours observed",
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
                "Adequate lighting for task (night shift)",
                "Visibility aids in use — reflective vests, task lights (night shift)"
              ]
            },
            {
              type: "text",
              name: "safeActsOther",
              title: "Other positive observation",
              placeholder: "Describe any other safe act observed"
            }
          ]
        },

        // ── Section 3: Unsafe Acts / Conditions Identified ───────────────────
        {
          type: "panel",
          name: "section_unsafe_acts",
          title: "3. Unsafe Acts / Conditions Identified",
          description: "Tick all unsafe acts or conditions observed",
          elements: [
            {
              type: "checkbox",
              name: "unsafeActs",
              title: "Select all that apply",
              choices: [
                "PPE missing / incorrect",
                "Unsafe lifting / body positioning",
                "Line-of-fire exposure",
                "Poor communication",
                "Trip / slip hazards",
                "Improper tool / equipment use",
                "Fatigue / heat signs",
                "Inadequate lighting (night shift)"
              ]
            },
            {
              type: "text",
              name: "unsafeActsOther",
              title: "Other unsafe act / condition",
              placeholder: "Describe any other unsafe act or condition"
            }
          ]
        },

        // ── Section 4: Immediate Feedback Given ──────────────────────────────
        {
          type: "panel",
          name: "section_feedback",
          title: "4. Immediate Feedback Given",
          elements: [
            {
              type: "radiogroup",
              name: "positiveFeedbackGiven",
              title: "Positive feedback provided",
              isRequired: true,
              choices: ["Yes", "No"]
            },
            {
              type: "radiogroup",
              name: "unsafeActsDiscussed",
              title: "Unsafe acts / conditions discussed with employee",
              isRequired: true,
              choices: ["Yes", "No"]
            },
            {
              type: "comment",
              name: "employeeResponse",
              title: "Employee response / commitment",
              rows: 3,
              placeholder: "Record the employee's response and any commitment made"
            }
          ]
        },

        // ── Section 5: Recommendations / Action Items ────────────────────────
        {
          type: "panel",
          name: "section_recommendations",
          title: "5. Recommendations / Action Items",
          elements: [
            {
              type: "matrixdynamic",
              name: "recommendations",
              title: "Action Items",
              addRowText: "+ Add Action",
              rowCount: 4,
              minRowCount: 1,
              columns: [
                {
                  name: "itemNo",
                  title: "#",
                  cellType: "text",
                  readOnly: true
                },
                {
                  name: "recommendation",
                  title: "Recommendation / Action",
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
                  name: "dueDate",
                  title: "Due Date",
                  cellType: "text",
                  inputType: "date",
                  isRequired: true
                }
              ],
              defaultValue: [
                { itemNo: "01", recommendation: "", responsible: "", dueDate: "" },
                { itemNo: "02", recommendation: "", responsible: "", dueDate: "" },
                { itemNo: "03", recommendation: "", responsible: "", dueDate: "" },
                { itemNo: "04", recommendation: "", responsible: "", dueDate: "" }
              ]
            }
          ]
        },

        // ── Section 6: Submitted By ───────────────────────────────────────────
        {
          type: "panel",
          name: "section_signoff",
          title: "6. Submitted By",
          elements: [
            {
              type: "text",
              name: "signoffReportedByName",
              title: "Submitted By — Full Name",
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
            },
            {
              type: "text",
              name: "signoffSubmissionTime",
              title: "Submission Time",
              isRequired: true,
              readOnly: true,
              description: "Auto-filled with current time"
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
