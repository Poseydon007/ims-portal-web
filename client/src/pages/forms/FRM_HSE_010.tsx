import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Hazard Identification Prompt Checklist",
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
        {
          type: "panel",
          name: "section2",
          title: "2. A. People & Behaviour Hazards",
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
        {
          type: "panel",
          name: "section3",
          title: "3. B. Equipment & Tools Hazards",
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
        {
          type: "panel",
          name: "section4",
          title: "4. C. Environment & Site Conditions",
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
        {
          type: "panel",
          name: "section5",
          title: "5. D. High-Risk Activities",
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
        {
          type: "panel",
          name: "section6",
          title: "6. E. Other Hazards",
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
        {
          type: "panel",
          name: "section7",
          title: "7. Control Measures",
          elements: [
            {
              type: "matrixdynamic",
              name: "controlMeasures",
              title: "Control Measures Applied",
              columns: [
                { name: "rowNumber", title: "#", cellType: "text" },
                { name: "controlMeasure", title: "Control Measure Applied", cellType: "text", isRequired: true },
                { name: "responsibleDate", title: "Responsible / Due Date", cellType: "text" }
              ],
              minRowCount: 1,
              rowCount: 3,
              addRowText: "+ Add Control"
            }
          ]
        },
        {
          type: "panel",
          name: "section8",
          title: "8. Residual Risk Assessment",
          elements: [
            {
              type: "dropdown",
              name: "residualRisk",
              title: "Residual Risk Level",
              isRequired: true,
              choices: [
                "Low — Proceed",
                "Medium — Proceed with caution",
                "High — Stop and consult supervisor"
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "section9",
          title: "9. Declaration",
          elements: [
            {
              type: "boolean",
              name: "declaration",
              title: "I have identified the hazards listed, applied the controls listed, and I am competent and fit to proceed with this task.",
              label: "I confirm the above declaration",
              isRequired: true
            }
          ]
        },
        {
          type: "panel",
          name: "section10",
          title: "10. Submitted By",
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
