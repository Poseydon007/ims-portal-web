import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";
import { DEPARTMENTS } from "@/lib/formConstants";

const RISK_MATRIX_HTML = `
<div style="margin-bottom:8px;">
  <p style="font-size:12px;color:#4b5563;margin-bottom:8px;">Rate the highest risk identified using Likelihood × Consequence. Select your values below.</p>
  <table style="border-collapse:collapse;width:100%;font-size:12px;max-width:600px;">
    <thead>
      <tr>
        <th style="background:#081C2E;color:#fff;border:1px solid #dde3ec;padding:6px 10px;text-align:center;">L \\ C</th>
        <th style="background:#081C2E;color:#fff;border:1px solid #dde3ec;padding:6px 10px;text-align:center;">1 — Minor<br/>(First Aid)</th>
        <th style="background:#081C2E;color:#fff;border:1px solid #dde3ec;padding:6px 10px;text-align:center;">2 — Moderate<br/>(Medical Treatment)</th>
        <th style="background:#081C2E;color:#fff;border:1px solid #dde3ec;padding:6px 10px;text-align:center;">3 — Serious<br/>(Lost Time / Fatality)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="background:#081C2E;color:#fff;border:1px solid #dde3ec;padding:6px 10px;font-weight:600;">1 — Unlikely</td>
        <td style="background:#15803d;color:#fff;border:1px solid #dde3ec;padding:6px 10px;text-align:center;font-weight:700;">1 (Low)</td>
        <td style="background:#15803d;color:#fff;border:1px solid #dde3ec;padding:6px 10px;text-align:center;font-weight:700;">2 (Low)</td>
        <td style="background:#ca8a04;color:#fff;border:1px solid #dde3ec;padding:6px 10px;text-align:center;font-weight:700;">3 (Medium)</td>
      </tr>
      <tr>
        <td style="background:#081C2E;color:#fff;border:1px solid #dde3ec;padding:6px 10px;font-weight:600;">2 — Possible</td>
        <td style="background:#15803d;color:#fff;border:1px solid #dde3ec;padding:6px 10px;text-align:center;font-weight:700;">2 (Low)</td>
        <td style="background:#ca8a04;color:#fff;border:1px solid #dde3ec;padding:6px 10px;text-align:center;font-weight:700;">4 (Medium)</td>
        <td style="background:#d97706;color:#fff;border:1px solid #dde3ec;padding:6px 10px;text-align:center;font-weight:700;">6 (High)</td>
      </tr>
      <tr>
        <td style="background:#081C2E;color:#fff;border:1px solid #dde3ec;padding:6px 10px;font-weight:600;">3 — Likely</td>
        <td style="background:#ca8a04;color:#fff;border:1px solid #dde3ec;padding:6px 10px;text-align:center;font-weight:700;">3 (Medium)</td>
        <td style="background:#d97706;color:#fff;border:1px solid #dde3ec;padding:6px 10px;text-align:center;font-weight:700;">6 (High)</td>
        <td style="background:#991b1b;color:#fff;border:1px solid #dde3ec;padding:6px 10px;text-align:center;font-weight:700;">9 (Critical)</td>
      </tr>
    </tbody>
  </table>
  <p style="font-size:11px;color:#6b7a8d;margin-top:6px;">
    <span style="display:inline-block;width:12px;height:12px;background:#15803d;border-radius:2px;vertical-align:middle;margin-right:4px;"></span>Low: Proceed with standard controls &nbsp;|&nbsp;
    <span style="display:inline-block;width:12px;height:12px;background:#ca8a04;border-radius:2px;vertical-align:middle;margin-right:4px;"></span>Medium: Proceed with extra caution &nbsp;|&nbsp;
    <span style="display:inline-block;width:12px;height:12px;background:#d97706;border-radius:2px;vertical-align:middle;margin-right:4px;"></span>High: Supervisor review required &nbsp;|&nbsp;
    <span style="display:inline-block;width:12px;height:12px;background:#991b1b;border-radius:2px;vertical-align:middle;margin-right:4px;"></span>Critical: STOP — do not proceed
  </p>
</div>
`;

const SCHEMA = {
  title: "Take 5 Hazard Assessment Form",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        // ── Section 1: Task Details ──────────────────────────────────────────
        {
          type: "panel",
          name: "section_task_details",
          title: "1. Task Details",
          elements: [
            {
              type: "text",
              name: "reportNo",
              title: "Take 5 Number",
              isRequired: true,
              readOnly: true,
              description: "Auto-assigned on submission"
            },
            {
              type: "text",
              name: "reportedBy",
              title: "Assessed By — Full Name",
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
              title: "Date",
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
              type: "text",
              name: "location",
              title: "Location / Site",
              isRequired: true
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
            }
          ]
        },

        // ── Section 2: Step 1 — Stop & Think ────────────────────────────────
        {
          type: "panel",
          name: "section_step1",
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
              html: "<div style='background:#fef9c3;border:1px solid #fde047;border-radius:4px;padding:10px 14px;font-size:12px;color:#713f12;font-weight:600;margin-top:4px;'>⚠ If any answer indicates a higher-risk situation, STOP and consult your supervisor before proceeding.</div>"
            }
          ]
        },

        // ── Section 3: Step 2 — Identify the Hazards ────────────────────────
        {
          type: "panel",
          name: "section_step2",
          title: "3. Step 2 — Identify the Hazards",
          description: "Tick all that apply",
          elements: [
            {
              type: "checkbox",
              name: "hazardsGroupA",
              title: "Energy Sources",
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
              title: "Mobile Plant & Equipment",
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
              title: "Slips, Trips & Falls",
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
              title: "Manual Handling",
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
              title: "Dust, Fumes & Substances",
              choices: ["Dust / pollutants", "Hazardous substances", "Fumes / vapors"]
            },
            {
              type: "checkbox",
              name: "hazardsGroupF",
              title: "Access & Environment",
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
              title: "KSA / Site-Specific",
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

        // ── Section 4: Step 3 — Assess the Risk ─────────────────────────────
        {
          type: "panel",
          name: "section_step3",
          title: "4. Step 3 — Assess the Risk",
          elements: [
            {
              type: "html",
              name: "riskMatrixRef",
              html: RISK_MATRIX_HTML
            },
            {
              type: "dropdown",
              name: "likelihood",
              title: "Likelihood",
              isRequired: true,
              choices: [
                { value: 1, text: "1 — Unlikely" },
                { value: 2, text: "2 — Possible" },
                { value: 3, text: "3 — Likely" }
              ]
            },
            {
              type: "dropdown",
              name: "consequence",
              title: "Consequence",
              isRequired: true,
              choices: [
                { value: 1, text: "1 — Minor (First Aid)" },
                { value: 2, text: "2 — Moderate (Medical Treatment)" },
                { value: 3, text: "3 — Serious (Lost Time / Fatality)" }
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
                "iif({riskScore} <= 2, 'Low', iif({riskScore} <= 4, 'Medium', iif({riskScore} <= 6, 'High', 'Critical')))"
            }
          ]
        },

        // ── Section 5: Step 4 — Control the Hazards ─────────────────────────
        {
          type: "panel",
          name: "section_step4",
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
              title: "Control Measures",
              addRowText: "+ Add Control",
              rowCount: 4,
              minRowCount: 1,
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
              ]
            }
          ]
        },

        // ── Section 6: Step 5 — Proceed Safely ──────────────────────────────
        {
          type: "panel",
          name: "section_step5",
          title: "6. Step 5 — Proceed Safely",
          elements: [
            {
              type: "radiogroup",
              name: "proceedSafely",
              title: "All hazards controlled and risk at acceptable level?",
              isRequired: true,
              choices: [
                { value: "Yes", text: "Yes — Proceed" },
                { value: "No", text: "No — Do NOT proceed. Refer to your supervisor." }
              ]
            },
            {
              type: "checkbox",
              name: "proceedAcknowledgements",
              title: "Acknowledgements",
              isRequired: true,
              choices: [
                { value: "stayAlert", text: "Stay alert for changing conditions during the task" },
                { value: "housekeeping", text: "Maintain good housekeeping standards throughout" }
              ]
            }
          ]
        },

        // ── Section 7: Submitted By ──────────────────────────────────────────
        {
          type: "panel",
          name: "section_signoff",
          title: "7. Submitted By",
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

export default function FRM_HSE_009() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-009"
        title="Take 5 Hazard Assessment Form"
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
