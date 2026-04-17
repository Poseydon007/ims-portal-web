import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";
import { DEPARTMENTS } from "@/lib/formConstants";

const SCHEMA = {
  title: "Hazard Identification Prompt Checklist",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        // ── Section 1: Report Details ──
        {
          type: "panel",
          name: "section1",
          title: "1. Report Details",
          elements: [
            {
              type: "text",
              name: "reportNo",
              title: "HID Number",
              isRequired: true,
              readOnly: true,
              description: "Auto-assigned on submission"
            },
            {
              type: "text",
              name: "reportedBy",
              title: "Full Name",
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
              name: "location",
              title: "Site / Location",
              isRequired: true
            },
            {
              type: "text",
              name: "activity",
              title: "Task / Activity",
              isRequired: true
            },
            {
              type: "text",
              name: "date",
              title: "Date",
              inputType: "date",
              readOnly: true,
              description: "Auto-filled with today's date"
            },
            {
              type: "text",
              name: "time",
              title: "Time",
              inputType: "time",
              isRequired: true
            },
            {
              type: "radiogroup",
              name: "shift",
              title: "Shift",
              isRequired: true,
              choices: ["Day", "Night"]
            }
          ]
        },

        // ── Section 2: People & Behaviour Hazards ──
        {
          type: "panel",
          name: "section2",
          title: "2. People & Behaviour Hazards",
          description: "Tick all that apply",
          elements: [
            {
              type: "checkbox",
              name: "peopleHazards",
              title: "Select all that apply:",
              choices: [
                "Fatigue, heat stress, or illness signs in self or team",
                "Inadequate training or competency for the task",
                "Distraction (phone, conversation, rushing)",
                "Unsafe act observed (shortcut, improper lifting, horseplay)",
                "Working alone without communication or check-in"
              ]
            }
          ]
        },

        // ── Section 3: Equipment & Tools Hazards ──
        {
          type: "panel",
          name: "section3",
          title: "3. Equipment & Tools Hazards",
          description: "Tick all that apply",
          elements: [
            {
              type: "checkbox",
              name: "equipmentHazards",
              title: "Select all that apply:",
              choices: [
                "Missing or defective guards (machine guarding)",
                "Damaged tools or equipment (e.g., frayed wireline, cracked hard hat, mushroomed chisel)",
                "Improper PPE (missing, worn, expired, wrong type)",
                "Unstable rig or equipment (uneven ground, outriggers not set, pre-start not completed)",
                "Pressure hoses or hydraulic lines showing leaks or damage"
              ]
            }
          ]
        },

        // ── Section 4: Environment & Site Conditions ──
        {
          type: "panel",
          name: "section4",
          title: "4. Environment & Site Conditions",
          description: "Tick all that apply",
          elements: [
            {
              type: "checkbox",
              name: "environmentHazards",
              title: "Select all that apply:",
              choices: [
                "Poor lighting, glare, or shadows (night shift, tunnel, enclosed area)",
                "Slippery or trip hazards (oil, mud, hoses, uneven terrain, poor housekeeping)",
                "Dust, fumes, or hazardous atmosphere (silica, diesel exhaust, H₂S, confined space)",
                "Extreme heat, wind, or dust storm conditions",
                "Wildlife or reptile presence (scorpions, snakes) in remote desert location"
              ]
            }
          ]
        },

        // ── Section 5: High-Risk Activities ──
        {
          type: "panel",
          name: "section5",
          title: "5. High-Risk Activities",
          description: "Tick all that apply",
          elements: [
            {
              type: "checkbox",
              name: "highRiskHazards",
              title: "Select all that apply:",
              choices: [
                "Line-of-fire exposure (rotating rods, winch cable, pinch points, swing radius)",
                "Energy sources not isolated (LOTO not applied, stored energy in lines)",
                "Confined space entry without permit and attendant",
                "Hot work without permit, fire watch, or gas test",
                "Working at height (>1.8 m) without fall protection and inspected harness",
                "Simultaneous operations (SIMOPs) not deconflicted"
              ]
            }
          ]
        },

        // ── Section 6: Other / Site-Specific Hazards ──
        {
          type: "panel",
          name: "section6",
          title: "6. Other / Site-Specific Hazards",
          description: "Tick all that apply",
          elements: [
            {
              type: "checkbox",
              name: "otherHazards",
              title: "Select all that apply:",
              hasOther: true,
              otherText: "Other hazard (describe)",
              choices: [
                "Unauthorised personnel in exclusion zone",
                "Chemical or fuel spill risk during handling or refuelling",
                "Buried or overhead services not identified or marked"
              ]
            }
          ]
        },

        // ── Section 7: Controls Identified ──
        {
          type: "panel",
          name: "section7",
          title: "7. Controls Identified",
          description: "Complete for any hazard ticked above",
          elements: [
            {
              type: "matrixdynamic",
              name: "controlMeasures",
              title: "Control Measures Applied",
              columns: [
                { name: "no", title: "#", cellType: "text", maxWidth: "50px" },
                { name: "controlMeasure", title: "Control Measure Applied", cellType: "text", isRequired: true },
                { name: "responsible", title: "Responsible", cellType: "text" },
                { name: "dueDate", title: "Due Date", cellType: "text" }
              ],
              rowCount: 5,
              minRowCount: 1,
              addRowText: "+ Add Control",
              defaultValue: [
                { no: "01" },
                { no: "02" },
                { no: "03" },
                { no: "04" },
                { no: "05" }
              ]
            }
          ]
        },

        // ── Section 8: Risk Level After Controls ──
        {
          type: "panel",
          name: "section8",
          title: "8. Risk Level After Controls",
          description: "Tick one",
          elements: [
            {
              type: "radiogroup",
              name: "residualRisk",
              title: "Residual Risk Level",
              isRequired: true,
              choices: [
                { value: "low", text: "LOW — Safe to proceed with normal controls" },
                { value: "medium", text: "MEDIUM — Additional controls needed; supervisor approval required before proceeding" },
                { value: "high", text: "HIGH — STOP WORK. Notify Supervisor and HSE Officer immediately. Do not proceed" }
              ]
            }
          ]
        },

        // ── Section 9: Employee Declaration ──
        {
          type: "panel",
          name: "section9",
          title: "9. Employee Declaration",
          elements: [
            {
              type: "boolean",
              name: "declaration",
              title: "I confirm that I have identified the hazards above to the best of my ability, applied the controls listed, and I am competent and fit to proceed with this task.",
              label: "I confirm the above declaration",
              isRequired: true
            }
          ]
        },

        // ── Section 10: HSE / Supervisor Follow-Up ──
        {
          type: "panel",
          name: "section10",
          title: "10. HSE / Supervisor Follow-Up",
          elements: [
            {
              type: "text",
              name: "followUpReviewedBy",
              title: "Reviewed by (Supervisor / HSE)",
              isRequired: true
            },
            {
              type: "radiogroup",
              name: "highRiskEscalated",
              title: "High-risk hazard escalated?",
              isRequired: true,
              choices: ["Yes", "No"]
            },
            {
              type: "comment",
              name: "followUpActionTaken",
              title: "Action Taken",
              rows: 3
            },
            {
              type: "text",
              name: "followUpDateTime",
              title: "Date / Time",
              inputType: "datetime-local"
            }
          ]
        },

        // ── Section 11: Submitted By ──
        {
          type: "panel",
          name: "section11",
          title: "11. Submitted By",
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

export default function FRM_HSE_010() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-010"
        title="Hazard Identification Prompt Checklist"
        revision="01"
        approvalDate="10 April 2026"
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
