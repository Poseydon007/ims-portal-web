import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Emergency Drill Planning and Record",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "section1",
          title: "1. Drill Planning",
          elements: [
            {
              type: "text",
              name: "drillType",
              title: "Drill Type",
              isRequired: true,
              placeholder: "e.g., Fire Evacuation, Confined Space Rescue"
            },
            {
              type: "comment",
              name: "scenarioDescription",
              title: "Scenario Description",
              isRequired: true,
              rows: 3
            },
            {
              type: "text",
              name: "datePlanned",
              title: "Date Planned",
              isRequired: true,
              inputType: "date"
            },
            {
              type: "text",
              name: "timePlanned",
              title: "Time Planned",
              isRequired: true,
              inputType: "time"
            },
            {
              type: "text",
              name: "locationArea",
              title: "Location / Area",
              isRequired: true
            },
            {
              type: "text",
              name: "drillCoordinator",
              title: "Drill Coordinator Full Name",
              isRequired: true
            },
            {
              type: "text",
              name: "observersNominated",
              title: "Observers Nominated",
              placeholder: "Names of nominated observers"
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
              name: "reportedBy",
              title: "Submitted By Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "employeeId",
              title: "Submitted By Employee ID",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "position",
              title: "Submitted By Position",
              readOnly: true,
              description: "Auto-filled from your login profile"
            }
          ]
        },
        {
          type: "panel",
          name: "section2",
          title: "2. Emergency Scenarios Covered",
          elements: [
            {
              type: "checkbox",
              name: "scenariosCovered",
              title: "Select all that apply",
              isRequired: true,
              choices: [
                "Fire",
                "Explosion",
                "Chemical Spill",
                "Medical Emergency",
                "Confined Space Rescue",
                "Working at Height Rescue",
                "Lightning / Severe Weather",
                "Building Collapse",
                "Security Breach",
                "Vehicle Incident",
                "Flooding"
              ],
              hasOther: true,
              otherText: "Other (specify)"
            }
          ]
        },
        {
          type: "panel",
          name: "section3",
          title: "3. Drill Execution Record",
          elements: [
            {
              type: "text",
              name: "alarmInitiatedAt",
              title: "Alarm Initiated At",
              isRequired: true,
              inputType: "time"
            },
            {
              type: "text",
              name: "assemblyCompleteAt",
              title: "Assembly Complete At",
              isRequired: true,
              inputType: "time"
            },
            {
              type: "text",
              name: "allClearGivenAt",
              title: "All Clear Given At",
              isRequired: true,
              inputType: "time"
            },
            {
              type: "text",
              name: "totalEvacuationTime",
              title: "Total Evacuation Time in minutes",
              isRequired: true,
              inputType: "number"
            },
            {
              type: "text",
              name: "totalPersonsMustered",
              title: "Total Persons Mustered",
              isRequired: true,
              inputType: "number"
            },
            {
              type: "text",
              name: "missingPersons",
              title: "Missing Persons",
              isRequired: true,
              inputType: "number",
              defaultValue: 0
            },
            {
              type: "text",
              name: "missingPersonsDetails",
              title: "Missing Persons Details",
              visibleIf: "{missingPersons} > 0"
            }
          ]
        },
        {
          type: "panel",
          name: "section4",
          title: "4. Performance Assessment",
          elements: [
            {
              type: "matrixdynamic",
              name: "performanceAssessment",
              title: "Rate each performance criteria",
              columns: [
                {
                  name: "criteria",
                  title: "Criteria",
                  cellType: "text",
                  readOnly: true
                },
                {
                  name: "rating",
                  title: "Rating",
                  cellType: "dropdown",
                  isRequired: true,
                  choices: ["Excellent", "Good", "Fair", "Poor"]
                }
              ],
              rowCount: 7,
              minRowCount: 7,
              allowAddRows: false,
              allowRemoveRows: false,
              defaultValue: [
                { criteria: "Alarm audibility and response" },
                { criteria: "Emergency team response time" },
                { criteria: "Evacuation orderliness" },
                { criteria: "Muster point procedure" },
                { criteria: "Communication effectiveness" },
                { criteria: "Equipment availability and condition" },
                { criteria: "Overall drill performance" }
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "section5",
          title: "5. Deviations and Follow-Up Actions",
          elements: [
            {
              type: "matrixdynamic",
              name: "deviations",
              title: "Deviations and Follow-Up Actions",
              columns: [
                {
                  name: "no",
                  title: "#",
                  cellType: "text"
                },
                {
                  name: "deviation",
                  title: "Deviation Observed",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "correctiveAction",
                  title: "Corrective Action",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "responsiblePerson",
                  title: "Responsible Person",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "targetDate",
                  title: "Target Date",
                  cellType: "text",
                  inputType: "date"
                }
              ],
              minRowCount: 0,
              rowCount: 3,
              addRowText: "+ Add Deviation"
            }
          ]
        },
        {
          type: "panel",
          name: "section6",
          title: "6. Post-Drill Review Notes",
          elements: [
            {
              type: "comment",
              name: "generalObservations",
              title: "General Observations",
              rows: 4
            },
            {
              type: "text",
              name: "nextDrillPlannedDate",
              title: "Next Drill Planned Date",
              inputType: "date"
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
              name: "reportedBy_final",
              title: "Submitted By Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "submissionDate",
              title: "Submission Date",
              readOnly: true,
              description: "Auto-filled with today's date",
              inputType: "date"
            }
          ]
        }
      ]
    }
  ],
  checkErrorsMode: "onComplete",
  showPrevButton: false
};

export default function FRM_HSE_017() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-017"
        title="Emergency Drill Planning and Record"
        revision="01"
        approvalDate="01 March 2026"
        minRole="field_worker"
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
