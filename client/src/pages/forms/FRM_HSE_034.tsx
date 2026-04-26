import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Planned Task Observation (PTO) Form",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
            { type: "text", name: "reportNo", title: "Report No.", isRequired: true, readOnly: true, description: "Auto-assigned on submission" },
        {
          type: "html",
          name: "purpose",
          html: "<div style='padding: 10px; background-color: #f8f9fa; border-left: 4px solid #007bff; margin-bottom: 20px;'><strong>Purpose:</strong> To observe all steps of a task as it is being carried out, to identify deviations from the safe work procedure, and to implement corrective actions.</div>"
        },
        {
          type: "panel",
          name: "section1",
          title: "1. Observation Details",
          elements: [
            {
              type: "text",
              name: "observationDate",
              title: "Date",
              inputType: "date",
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
              name: "taskObserved",
              title: "Job / Task Observed",
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
              name: "locationArea",
              title: "Location / Area",
              isRequired: true
            },
            {
              type: "text",
              name: "crew",
              title: "Crew"
            },
            {
              type: "text",
              name: "reportedBy",
              title: "Observer Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "employeeId",
              title: "Observer Employee ID",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "position",
              title: "Observer Position",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "personObservedName",
              title: "Person Observed Full Name",
              isRequired: true
            },
            {
              type: "text",
              name: "personObservedId",
              title: "Person Observed Employee ID",
              isRequired: true
            },
            {
              type: "text",
              name: "periodInJob",
              title: "Period in Job",
              placeholder: "e.g., 3 months"
            },
            {
              type: "text",
              name: "sopReference",
              title: "Relevant SOP/SWP/HIRA Reference"
            },
            {
              type: "radiogroup",
              name: "notificationGiven",
              title: "Notification Given in Advance",
              isRequired: true,
              choices: ["Yes", "No"]
            }
          ]
        },
        {
          type: "panel",
          name: "section2",
          title: "2. Reason for Observation",
          elements: [
            {
              type: "checkbox",
              name: "reasonForObservation",
              title: "Select all that apply",
              isRequired: true,
              choices: [
                "New Worker",
                "Worker with Known Ability Problem",
                "Good Performer / Experienced Employee",
                "Routine Observation",
                "Poor Performer",
                "Risk Taker",
                "Injury / Damage",
                "Tool / Equipment / Process / System Change",
                "Efficiency"
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "section3",
          title: "3. Task Evaluation",
          elements: [
            {
              type: "matrixdynamic",
              name: "taskEvaluation",
              title: "Evaluate each criterion during the observation",
              columns: [
                {
                  name: "criteria",
                  title: "Evaluation Criteria",
                  cellType: "text",
                  readOnly: true
                },
                {
                  name: "result",
                  title: "Result",
                  cellType: "radiogroup",
                  isRequired: true,
                  choices: ["Yes", "No"]
                },
                {
                  name: "comments",
                  title: "Comments",
                  cellType: "text"
                }
              ],
              rowCount: 10,
              minRowCount: 10,
              allowAddRows: false,
              allowRemoveRows: false,
              defaultValue: [
                { criteria: "Safe and logical steps followed" },
                { criteria: "Used correct tools for the task" },
                { criteria: "Used correct PPE as required" },
                { criteria: "Workplace safe and organised" },
                { criteria: "Health and safety of other workers considered" },
                { criteria: "Work orderly and clean up performed" },
                { criteria: "Dangers / hazards recognised and controlled" },
                { criteria: "Body positioning and ergonomics appropriate" },
                { criteria: "Communication and signalling adequate" },
                { criteria: "Permits and authorisations in place (if required)" }
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "section4",
          title: "4. Recommendations",
          elements: [
            {
              type: "matrixdynamic",
              name: "recommendations",
              columns: [
                {
                  name: "recommendation",
                  title: "Recommendation",
                  cellType: "text",
                  readOnly: true
                },
                {
                  name: "apply",
                  title: "Apply",
                  cellType: "radiogroup",
                  choices: ["Yes", "No"]
                },
                {
                  name: "responsiblePerson",
                  title: "Responsible Person",
                  cellType: "text"
                }
              ],
              rowCount: 7,
              minRowCount: 7,
              allowAddRows: false,
              allowRemoveRows: false,
              defaultValue: [
                { recommendation: "Write New SWP" },
                { recommendation: "Modify SWP" },
                { recommendation: "Repair Equipment" },
                { recommendation: "Re-arrange Equipment" },
                { recommendation: "Introduce New HSE Rule" },
                { recommendation: "Retrain Worker" },
                { recommendation: "Other (specify)" }
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "section5",
          title: "5. Competency Outcome",
          elements: [
            {
              type: "radiogroup",
              name: "competencyOutcome",
              title: "Overall Assessment",
              isRequired: true,
              choices: ["Competent", "Not Yet Competent", "Re-observation Required"]
            }
          ]
        },
        {
          type: "panel",
          name: "section6",
          title: "6. General Comments / Observations",
          elements: [
            {
              type: "comment",
              name: "generalComments",
              title: "Comments",
              rows: 4
            }
          ]
        },
        {
          type: "panel",
          name: "section7",
          title: "7. Immediate Corrective Actions",
          elements: [
            {
              type: "matrixdynamic",
              name: "correctiveActions",
              columns: [
                {
                  name: "actionRequired",
                  title: "Action Required",
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
              rowCount: 0,
              minRowCount: 0,
              addRowText: "+ Add Action"
            }
          ]
        },
        {
          type: "panel",
          name: "section8",
          title: "8. Personal Commitment by Worker",
          elements: [
            {
              type: "comment",
              name: "workerCommitment",
              title: "Worker's personal commitment statement",
              rows: 3,
              placeholder: "Worker to describe their commitment to safe work practices"
            }
          ]
        },
        {
          type: "panel",
          name: "section9",
          title: "9. Crew Observation Attendance",
          elements: [
            {
              type: "matrixdynamic",
              name: "crewAttendance",
              columns: [
                {
                  name: "no",
                  title: "No.",
                  cellType: "text"
                },
                {
                  name: "fullName",
                  title: "Full Name",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "position",
                  title: "Position",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "employeeId",
                  title: "Employee ID",
                  cellType: "text",
                  isRequired: true
                }
              ],
              rowCount: 0,
              minRowCount: 0,
              addRowText: "+ Add Crew Member"
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

export default function FRM_HSE_034() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-034"
        title="Planned Task Observation (PTO) Form"
        revision="01"
        approvalDate="09 April 2026"
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
