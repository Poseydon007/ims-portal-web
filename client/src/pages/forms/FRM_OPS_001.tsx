import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Daily Drilling Report",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "shiftInformation",
          title: "1. Shift Information",
          elements: [
            {
              type: "text",
              name: "reportNo",
              title: "Report Number",
              readOnly: true,
              description: "Auto-assigned on submission"
            },
            {
              type: "text",
              name: "shiftDate",
              title: "Shift Date",
              inputType: "date",
              isRequired: true
            },
            {
              type: "radiogroup",
              name: "shift",
              title: "Shift",
              isRequired: true,
              choices: ["Day", "Night"]
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
              name: "shiftStartTime",
              title: "Shift Start Time",
              inputType: "time",
              isRequired: true
            },
            {
              type: "text",
              name: "shiftEndTime",
              title: "Shift End Time",
              inputType: "time",
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
          name: "drillingProgress",
          title: "2. Drilling Progress",
          elements: [
            {
              type: "text",
              name: "depthDrilledToday",
              title: "Depth Drilled Today",
              inputType: "number",
              isRequired: true,
              description: "metres"
            },
            {
              type: "text",
              name: "totalDepthToDate",
              title: "Total Depth to Date",
              inputType: "number",
              isRequired: true,
              description: "metres"
            },
            {
              type: "text",
              name: "coreRecovery",
              title: "Core Recovery",
              inputType: "number",
              isRequired: true,
              description: "%"
            },
            {
              type: "text",
              name: "rodsUsedAdded",
              title: "Rods Used / Added",
              inputType: "number",
              description: "quantity"
            },
            {
              type: "text",
              name: "drillingFluidUsed",
              title: "Drilling Fluid Used",
              inputType: "number",
              description: "litres"
            },
            {
              type: "radiogroup",
              name: "bitToolingChange",
              title: "Bit / Tooling Change",
              choices: ["Yes", "No"]
            },
            {
              type: "text",
              name: "bitToolingChangeReason",
              title: "Bit / Tooling Change Reason",
              visibleIf: "{bitToolingChange} = 'Yes'"
            },
            {
              type: "text",
              name: "formationEncountered",
              title: "Formation Encountered",
              isRequired: true
            },
            {
              type: "comment",
              name: "commentsAnomalies",
              title: "Comments / Anomalies",
              rows: 3,
              placeholder: "e.g., change in formation, water loss, cavity, stuck rod"
            }
          ]
        },
        {
          type: "panel",
          name: "safetyObservations",
          title: "3. Safety and Hazard Observations",
          elements: [
            {
              type: "radiogroup",
              name: "take5Completed",
              title: "Take 5 / JHA completed at start of shift",
              isRequired: true,
              choices: ["Yes", "No"]
            },
            {
              type: "text",
              name: "take5NotCompletedReason",
              title: "If No — explain",
              visibleIf: "{take5Completed} = 'No'"
            },
            {
              type: "radiogroup",
              name: "hazardChecklistCompleted",
              title: "Hazard Identification Checklist (FRM-HSE-010) completed",
              isRequired: true,
              choices: ["Yes", "No"]
            },
            {
              type: "comment",
              name: "keyHazardsIdentified",
              title: "Key hazards identified",
              rows: 2
            },
            {
              type: "comment",
              name: "controlsApplied",
              title: "Controls applied",
              rows: 2
            },
            {
              type: "comment",
              name: "unsafeActsConditions",
              title: "Unsafe acts or conditions observed",
              rows: 2
            },
            {
              type: "comment",
              name: "positiveSafetyObservations",
              title: "Positive safety observations",
              rows: 2
            },
            {
              type: "radiogroup",
              name: "toolboxTalkHeld",
              title: "Toolbox talk / pre-start meeting held",
              isRequired: true,
              choices: ["Yes", "No"]
            },
            {
              type: "text",
              name: "toolboxTalkTopic",
              title: "Topic of toolbox talk",
              visibleIf: "{toolboxTalkHeld} = 'Yes'"
            }
          ]
        },
        {
          type: "panel",
          name: "incidentsNearMisses",
          title: "4. Incidents and Near-Misses",
          elements: [
            {
              type: "radiogroup",
              name: "incidentOccurred",
              title: "Incident or near-miss occurred this shift",
              isRequired: true,
              choices: ["Yes", "No"]
            },
            {
              type: "comment",
              name: "incidentDescription",
              title: "If YES — brief description",
              rows: 2,
              visibleIf: "{incidentOccurred} = 'Yes'"
            },
            {
              type: "radiogroup",
              name: "reportedViaFlash",
              title: "Reported via Flash Notification FRM-HSE-002",
              visibleIf: "{incidentOccurred} = 'Yes'",
              choices: ["Yes", "No"]
            },
            {
              type: "text",
              name: "flashReferenceNumber",
              title: "Flash Notification reference number",
              visibleIf: "{incidentOccurred} = 'Yes'"
            },
            {
              type: "comment",
              name: "immediateActionTaken",
              title: "Immediate action taken",
              rows: 2,
              visibleIf: "{incidentOccurred} = 'Yes'"
            }
          ]
        },
        {
          type: "panel",
          name: "equipmentStatus",
          title: "5. Equipment Status",
          elements: [
            {
              type: "radiogroup",
              name: "preStartCompleted",
              title: "Pre-start inspection completed",
              isRequired: true,
              choices: ["Yes", "No"]
            },
            {
              type: "comment",
              name: "equipmentIssues",
              title: "Equipment issues or defects identified",
              rows: 2
            },
            {
              type: "radiogroup",
              name: "maintenancePerformed",
              title: "Maintenance performed this shift",
              choices: ["Yes", "No"]
            },
            {
              type: "comment",
              name: "maintenanceDescription",
              title: "Description of maintenance",
              rows: 2,
              visibleIf: "{maintenancePerformed} = 'Yes'"
            },
            {
              type: "radiogroup",
              name: "refuellingPerformed",
              title: "Refuelling performed",
              choices: ["Yes", "No"]
            },
            {
              type: "text",
              name: "refuellingDetails",
              title: "Fuel quantity and Refuelling Log reference",
              visibleIf: "{refuellingPerformed} = 'Yes'"
            },
            {
              type: "text",
              name: "rigDowntime",
              title: "Rig downtime",
              inputType: "number",
              description: "hours"
            },
            {
              type: "text",
              name: "downtimeReason",
              title: "Downtime reason"
            }
          ]
        },
        {
          type: "panel",
          name: "environmentalNotes",
          title: "6. Environmental and Rehabilitation Notes",
          elements: [
            {
              type: "radiogroup",
              name: "drillCuttingsManaged",
              title: "Drill cuttings managed",
              choices: ["Dispersed", "Backfilled", "Other"]
            },
            {
              type: "text",
              name: "cuttingsOtherMethod",
              title: "Cuttings other method",
              visibleIf: "{drillCuttingsManaged} = 'Other'"
            },
            {
              type: "text",
              name: "sumpHoleStatus",
              title: "Sump / hole status"
            },
            {
              type: "radiogroup",
              name: "wasteRemovedFromSite",
              title: "Waste removed from site",
              choices: ["Yes", "No"]
            },
            {
              type: "text",
              name: "wasteDetails",
              title: "Waste type and quantity",
              visibleIf: "{wasteRemovedFromSite} = 'Yes'"
            },
            {
              type: "radiogroup",
              name: "spillsOrEnvironmentalIncidents",
              title: "Spills or environmental incidents",
              choices: ["Yes", "No"]
            },
            {
              type: "text",
              name: "spillReference",
              title: "Spill reference",
              visibleIf: "{spillsOrEnvironmentalIncidents} = 'Yes'",
              placeholder: "Cross-ref FRM-HSE-002"
            },
            {
              type: "radiogroup",
              name: "wildlifeObserved",
              title: "Wildlife or sensitive receptor observed",
              choices: ["Yes", "No"]
            },
            {
              type: "text",
              name: "wildlifeDescription",
              title: "Wildlife description",
              visibleIf: "{wildlifeObserved} = 'Yes'"
            },
            {
              type: "comment",
              name: "otherEnvironmentalObservations",
              title: "Other environmental observations",
              rows: 2
            }
          ]
        },
        {
          type: "panel",
          name: "submissionDetails",
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

export default function FRM_OPS_001() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-OPS-001"
        title="Daily Drilling Report"
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
