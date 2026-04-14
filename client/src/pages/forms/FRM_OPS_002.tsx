import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Stuck Rod Recovery Report",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "incidentDetails",
          title: "1. Incident Details",
          elements: [
            {
              type: "text",
              name: "reportNumber",
              title: "Report Number",
              readOnly: true,
              description: "Auto-assigned on submission"
            },
            {
              type: "text",
              name: "rigHoleId",
              title: "Rig ID / Hole ID",
              isRequired: true
            },
            {
              type: "text",
              name: "siteProjectName",
              title: "Site / Project Name",
              isRequired: true
            },
            {
              type: "text",
              name: "incidentDateTime",
              title: "Shift Date and Time of Incident",
              isRequired: true
            },
            {
              type: "radiogroup",
              name: "shift",
              title: "Shift",
              choices: ["Day", "Night"],
              isRequired: true
            },
            {
              type: "text",
              name: "stuckPointDepth",
              title: "Depth at Stuck Point",
              inputType: "number",
              description: "metres",
              isRequired: true
            },
            {
              type: "text",
              name: "rigManager",
              title: "Rig Manager",
              isRequired: true
            },
            {
              type: "text",
              name: "reportedBy",
              title: "Driller Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "employeeId",
              title: "Driller Employee ID",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "totalTimeLost",
              title: "Total Time Lost",
              inputType: "number",
              description: "hours",
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
            }
          ]
        },
        {
          type: "panel",
          name: "incidentDescription",
          title: "2. Incident Description",
          elements: [
            {
              type: "comment",
              name: "incidentDescriptionText",
              title: "What happened",
              rows: 3,
              placeholder: "e.g., loss of rotation, excessive torque, sudden stop",
              isRequired: true
            },
            {
              type: "comment",
              name: "lastSuccessfulAction",
              title: "Last successful action before stuck",
              rows: 2,
              isRequired: true
            },
            {
              type: "comment",
              name: "drillingParameters",
              title: "Drilling parameters at time of stuck",
              rows: 2,
              placeholder: "WOB, RPM, flow rate, mud type",
              isRequired: true
            },
            {
              type: "comment",
              name: "formationConditions",
              title: "Formation and conditions",
              rows: 2,
              placeholder: "e.g., swelling clay, fractured zone, cavity",
              isRequired: true
            }
          ]
        },
        {
          type: "panel",
          name: "immediateActions",
          title: "3. Immediate Actions",
          elements: [
            {
              type: "radiogroup",
              name: "engineStopped",
              title: "Engine stopped",
              choices: ["Yes", "No"],
              isRequired: true
            },
            {
              type: "radiogroup",
              name: "personnelEvacuated",
              title: "Non-essential personnel evacuated from rig floor",
              choices: ["Yes", "No"],
              isRequired: true
            },
            {
              type: "radiogroup",
              name: "riskAssessmentConducted",
              title: "Pre-task risk assessment / toolbox talk conducted before recovery",
              choices: ["Yes", "No"],
              isRequired: true
            },
            {
              type: "radiogroup",
              name: "lotoApplied",
              title: "LOTO applied if maintenance involved",
              choices: ["Yes", "No", "N/A"]
            },
            {
              type: "radiogroup",
              name: "authoritiesNotified",
              title: "Supervisor and HSE Officer notified",
              choices: ["Yes", "No"],
              isRequired: true
            }
          ]
        },
        {
          type: "panel",
          name: "recoverySteps",
          title: "4. Recovery Steps Taken",
          description: "Tick all that apply and describe results",
          elements: [
            {
              type: "boolean",
              name: "gentlePullback",
              title: "Gentle pullback and rotation",
              labelTrue: "Yes",
              labelFalse: "No"
            },
            {
              type: "text",
              name: "pullbackResult",
              title: "Pullback result",
              visibleIf: "{gentlePullback} = true"
            },
            {
              type: "boolean",
              name: "pumpFlush",
              title: "Pump / flush drilling fluid / air",
              labelTrue: "Yes",
              labelFalse: "No"
            },
            {
              type: "text",
              name: "pumpFlushResult",
              title: "Pump flush result",
              visibleIf: "{pumpFlush} = true"
            },
            {
              type: "boolean",
              name: "injectLubricant",
              title: "Inject lubricant / surfactant",
              labelTrue: "Yes",
              labelFalse: "No"
            },
            {
              type: "text",
              name: "lubricantResult",
              title: "Lubricant result",
              visibleIf: "{injectLubricant} = true"
            },
            {
              type: "boolean",
              name: "backoff",
              title: "Backoff at joint above stuck section",
              labelTrue: "Yes",
              labelFalse: "No"
            },
            {
              type: "text",
              name: "backoffResult",
              title: "Backoff result",
              visibleIf: "{backoff} = true"
            },
            {
              type: "boolean",
              name: "fishingOperation",
              title: "Fishing operation",
              description: "overshot, spear, taper tap",
              labelTrue: "Yes",
              labelFalse: "No"
            },
            {
              type: "text",
              name: "fishingResult",
              title: "Fishing result",
              visibleIf: "{fishingOperation} = true"
            },
            {
              type: "text",
              name: "otherRecoveryMethod",
              title: "Other recovery method"
            }
          ]
        },
        {
          type: "panel",
          name: "outcome",
          title: "5. Outcome",
          elements: [
            {
              type: "radiogroup",
              name: "outcome",
              title: "Outcome",
              isRequired: true,
              choices: [
                "Rods freed successfully — hole recovered and drilling resumed",
                "Rods partially recovered — lost section downhole",
                "Abandonment — hole cut and cemented / sealed"
              ]
            },
            {
              type: "comment",
              name: "reasonForAbandonment",
              title: "Reason for abandonment",
              rows: 2,
              visibleIf: '{outcome} = "Abandonment — hole cut and cemented / sealed"'
            },
            {
              type: "text",
              name: "metresLost",
              title: "Metres lost",
              inputType: "number",
              visibleIf: '{outcome} contains "lost"'
            },
            {
              type: "text",
              name: "costImpact",
              title: "Estimated cost impact",
              description: "SAR — rods, tools, downtime"
            }
          ]
        },
        {
          type: "panel",
          name: "equipmentInfo",
          title: "6. Equipment Used and Damaged",
          elements: [
            {
              type: "text",
              name: "toolsUsed",
              title: "Tools used",
              placeholder: "e.g., fishing spear, overshot, taper tap"
            },
            {
              type: "text",
              name: "equipmentDamaged",
              title: "Equipment damaged"
            },
            {
              type: "text",
              name: "maintenanceRequired",
              title: "Maintenance required"
            },
            {
              type: "text",
              name: "lostInHoleItems",
              title: "Lost-in-hole items",
              placeholder: "Type and approximate value"
            }
          ]
        },
        {
          type: "panel",
          name: "lessonsLearned",
          title: "7. Lessons Learned and Recommendations",
          elements: [
            {
              type: "comment",
              name: "lessonsLearnedText",
              title: "Lessons learned",
              rows: 3,
              isRequired: true
            },
            {
              type: "comment",
              name: "recommendations",
              title: "Recommendations to prevent recurrence",
              rows: 3,
              isRequired: true
            }
          ]
        },
        {
          type: "panel",
          name: "submission",
          title: "8. Submitted By",
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

export default function FRM_OPS_002() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-OPS-002"
        title="Stuck Rod Recovery Report"
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
