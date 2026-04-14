import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Take 5 Hazard Assessment Form",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "section1",
          title: "1. Task Details",
          elements: [
            {
              type: "text",
              name: "date",
              title: "Date",
              inputType: "date",
              readOnly: true,
              description: "Auto-filled with today's date",
              defaultValueExpression: "today()"
            },
            {
              type: "text",
              name: "time",
              title: "Time",
              inputType: "time",
              isRequired: true
            },
            {
              type: "text",
              name: "location",
              title: "Location / Site",
              isRequired: true
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
              name: "equipmentTask",
              title: "Equipment / Task",
              isRequired: true
            },
            {
              type: "comment",
              name: "jobDescription",
              title: "Job Description",
              rows: 3,
              isRequired: true
            },
            {
              type: "text",
              name: "reportedBy",
              title: "Assessed By Full Name",
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
            }
          ]
        },
        {
          type: "panel",
          name: "section2",
          title: "2. Step 1 — Stop & Think Through the Task",
          elements: [
            {
              type: "radiogroup",
              name: "workScopeUnderstood",
              title: "Work scope and methods understood?",
              isRequired: true,
              choices: ["Yes", "No"]
            },
            {
              type: "radiogroup",
              name: "ptwRequired",
              title: "Permit to Work (PTW) required?",
              description: "If yes, use PTW + JHA",
              isRequired: true,
              choices: ["Yes", "No"]
            },
            {
              type: "radiogroup",
              name: "groupIsolationRequired",
              title: "Group isolation required?",
              description: "If yes, use PTW + JHA",
              isRequired: true,
              choices: ["Yes", "No"]
            },
            {
              type: "radiogroup",
              name: "performedBefore",
              title: "Have you performed this task before?",
              isRequired: true,
              choices: ["Yes", "No"]
            },
            {
              type: "html",
              name: "step1Note",
              html: "<p style='color: red; font-weight: bold;'>If any answer indicates a higher-risk situation, STOP and consult your supervisor before proceeding.</p>"
            }
          ]
        },
        {
          type: "panel",
          name: "section3",
          title: "3. Step 2 — Identify the Hazards",
          elements: [
            {
              type: "checkbox",
              name: "hazardsGroupA",
              title: "Group A — Energy Sources",
              choices: [
                "Chemical",
                "Mechanical",
                "Temperature / Heat",
                "Noise",
                "Ignition sources",
                "Electrical",
                "Pressure"
              ]
            },
            {
              type: "checkbox",
              name: "hazardsGroupB",
              title: "Group B — Mobile Plant & Equipment",
              choices: [
                "Licences / tickets required",
                "Vehicle interaction",
                "Pedestrians",
                "Cranes / lifting",
                "Rotating equipment / drill rig"
              ]
            },
            {
              type: "checkbox",
              name: "hazardsGroupC",
              title: "Group C — Slips, Trips & Falls",
              choices: [
                "Working at heights",
                "Slippery surfaces",
                "Steps / uneven surfaces",
                "Trip hazards",
                "Excavation edges / unstable ground"
              ]
            },
            {
              type: "checkbox",
              name: "hazardsGroupD",
              title: "Group D — Manual Handling",
              choices: [
                "Fatigue",
                "Repetitive task",
                "Pinching / crushing",
                "Twisting / lifting technique",
                "Weight / mass",
                "Restrictive area / workstation"
              ]
            },
            {
              type: "checkbox",
              name: "hazardsGroupE",
              title: "Group E — Dust, Fumes & Substances",
              choices: ["Dust / pollutants", "Hazardous substances", "Fumes / vapors"]
            },
            {
              type: "checkbox",
              name: "hazardsGroupF",
              title: "Group F — Access & Environment",
              choices: [
                "Confined space",
                "Hazardous area",
                "Insufficient light",
                "Barricading required",
                "Inadequate machine guarding",
                "Other work in vicinity / above",
                "Weather conditions"
              ]
            },
            {
              type: "checkbox",
              name: "hazardsGroupG",
              title: "Group G — KSA / Site-Specific",
              choices: [
                "Heat stress / sun exposure",
                "Dehydration",
                "Snakes / scorpions / wildlife",
                "Sandstorm / low visibility",
                "Radiation (density gauges)"
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "section4",
          title: "4. Step 3 — Assess the Risk",
          elements: [
            {
              type: "dropdown",
              name: "likelihood",
              title: "Likelihood",
              isRequired: true,
              choices: [
                { value: 1, text: "1 – Unlikely" },
                { value: 2, text: "2 – Possible" },
                { value: 3, text: "3 – Likely" }
              ]
            },
            {
              type: "dropdown",
              name: "consequence",
              title: "Consequence",
              isRequired: true,
              choices: [
                { value: 1, text: "1 – Minor (First Aid)" },
                { value: 2, text: "2 – Moderate (Medical Treatment)" },
                { value: 3, text: "3 – Serious (Lost Time / Fatality)" }
              ]
            },
            {
              type: "expression",
              name: "riskScore",
              title: "Risk Score",
              expression: "{likelihood} * {consequence}"
            },
            {
              type: "expression",
              name: "riskLevel",
              title: "Risk Level",
              expression:
                "iif({riskScore} <= 2, 'Low', iif({riskScore} <= 4, 'Medium', 'High/Critical'))"
            }
          ]
        },
        {
          type: "panel",
          name: "section5",
          title: "5. Step 4 — Control the Hazards",
          elements: [
            {
              type: "checkbox",
              name: "safetyEquipment",
              title: "Safety Equipment Required",
              choices: [
                "PPE",
                "Harness / lanyard",
                "Eye wash / shower",
                "Barricading",
                "Radio / comms",
                "Platform / step",
                "Fire extinguisher",
                "First aid kit"
              ]
            },
            {
              type: "matrixdynamic",
              name: "controlMeasures",
              title: "Control Measures Table",
              columns: [
                {
                  name: "hazardIdentified",
                  title: "Hazard Identified",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "controlMeasure",
                  title: "Control Measure",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "done",
                  title: "Done",
                  cellType: "radiogroup",
                  choices: ["Yes", "No"]
                }
              ],
              minRowCount: 1,
              rowCount: 4,
              addRowText: "+ Add Control"
            }
          ]
        },
        {
          type: "panel",
          name: "section6",
          title: "6. Step 5 — Proceed Safely",
          elements: [
            {
              type: "radiogroup",
              name: "proceedSafely",
              title: "All hazards controlled and risk at acceptable level?",
              isRequired: true,
              choices: [
                { value: "Yes", text: "Yes — Proceed" },
                { value: "No", text: "No — Do NOT proceed" }
              ]
            },
            {
              type: "checkbox",
              name: "stayAlert",
              title: "Stay alert for changing conditions",
              choices: [{ value: "acknowledged", text: "I acknowledge" }],
              isRequired: true
            },
            {
              type: "checkbox",
              name: "housekeeping",
              title: "Maintain good housekeeping standards throughout",
              choices: [{ value: "acknowledged", text: "I acknowledge" }],
              isRequired: true
            }
          ]
        },
        {
          type: "panel",
          name: "section7",
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
              description: "Auto-filled with today's date",
              defaultValueExpression: "today()"
            }
          ]
        }
      ]
    }
  ],
  checkErrorsMode: "onComplete",
  showPrevButton: false
};

export default function FRM_HSE_009() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-009"
        title="Take 5 Hazard Assessment Form"
        revision="01"
        approvalDate="April 2026"
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
