import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Dangerous Occurrence Report Form",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "panel1",
          title: "1. Occurrence Details",
          elements: [
            {
              type: "text",
              name: "occurrenceReferenceNo",
              title: "Occurrence Reference No.",
              readOnly: true,
              description: "Auto-assigned on submission"
            },
            {
              type: "text",
              name: "projectSite",
              title: "Project / Site",
              isRequired: true
            },
            {
              type: "text",
              name: "contractCrcNo",
              title: "Contract / CRC No."
            },
            {
              type: "text",
              name: "dateOfOccurrence",
              title: "Date of Occurrence",
              inputType: "date",
              isRequired: true
            },
            {
              type: "text",
              name: "timeOfOccurrence",
              title: "Time of Occurrence",
              inputType: "time",
              isRequired: true
            },
            {
              type: "radiogroup",
              name: "timePeriod",
              title: "Time Period",
              choices: ["AM", "PM"],
              isRequired: true,
              colCount: 0
            },
            {
              type: "text",
              name: "location",
              title: "Location (specific)",
              isRequired: true
            },
            {
              type: "text",
              name: "supervisorForemanName",
              title: "Supervisor / Foreman Name",
              isRequired: true
            },
            {
              type: "text",
              name: "reportedBy",
              title: "Reported By Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "employeeId",
              title: "Reported By Employee ID",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "position",
              title: "Reported By Position",
              readOnly: true,
              description: "Auto-filled from your login profile"
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
              name: "dateReported",
              title: "Date Reported",
              inputType: "date",
              readOnly: true,
              description: "Auto-filled with today's date"
            }
          ]
        },
        {
          type: "panel",
          name: "panel2",
          title: "2. Classification of Dangerous Occurrence",
          elements: [
            {
              type: "checkbox",
              name: "classification",
              title: "Select all that apply",
              isRequired: true,
              choices: [
                "Collapse of crane/lifting equipment",
                "Collapse/failure of scaffold or temporary structure",
                "Structural collapse of building/wall",
                "Uncontrolled release of hazardous substance",
                "Electrical short circuit/overload causing fire",
                "Uncontrolled explosion fire or ignition",
                "Failure of pressure vessel or pressurized system",
                "Contact with overhead power lines",
                "Collapse of excavation or ground instability",
                "Fall from height (>2m)",
                "Drowning/asphyxiation risk event",
                "Vehicle rollover or runaway",
                "Lightning strike or severe weather event"
              ],
              hasOther: true,
              otherText: "Other (specify)"
            }
          ]
        },
        {
          type: "panel",
          name: "panel3",
          title: "3. Severity Assessment",
          elements: [
            {
              type: "radiogroup",
              name: "actualOutcome",
              title: "Actual Outcome",
              isRequired: true,
              choices: [
                "No injury/damage",
                "Minor injury/damage",
                "Serious injury/damage",
                "Potential fatality",
                "Multiple fatality potential"
              ]
            },
            {
              type: "radiogroup",
              name: "potentialOutcome",
              title: "Potential Outcome",
              isRequired: true,
              choices: [
                "No injury/damage",
                "Minor injury/damage",
                "Serious injury/damage",
                "Potential fatality",
                "Multiple fatality potential"
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "panel4",
          title: "4. Description of Occurrence",
          elements: [
            {
              type: "comment",
              name: "description",
              title: "Description",
              rows: 5,
              isRequired: true
            }
          ]
        },
        {
          type: "panel",
          name: "panel5",
          title: "5. Property / Equipment Involved",
          elements: [
            {
              type: "matrixdynamic",
              name: "propertyInvolved",
              title: "Items Involved",
              columns: [
                {
                  name: "description",
                  title: "Description",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "estimatedDamage",
                  title: "Estimated Damage",
                  cellType: "text"
                }
              ],
              minRowCount: 0,
              rowCount: 0,
              addRowText: "+ Add Item"
            }
          ]
        },
        {
          type: "panel",
          name: "panel6",
          title: "6. Persons Involved",
          elements: [
            {
              type: "matrixdynamic",
              name: "personsInvolved",
              title: "Personnel Details",
              columns: [
                {
                  name: "fullName",
                  title: "Full Name",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "employeeNo",
                  title: "Employee No.",
                  cellType: "text"
                },
                {
                  name: "rolePosition",
                  title: "Role / Position",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "injuryDetails",
                  title: "Injury Details",
                  cellType: "text",
                  placeholder: "Y/N and details"
                }
              ],
              minRowCount: 0,
              rowCount: 0,
              addRowText: "+ Add Person"
            }
          ]
        },
        {
          type: "panel",
          name: "panel7",
          title: "7. Witnesses",
          elements: [
            {
              type: "matrixdynamic",
              name: "witnesses",
              title: "Witness Details",
              columns: [
                {
                  name: "fullName",
                  title: "Full Name",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "employeeNo",
                  title: "Employee No.",
                  cellType: "text"
                },
                {
                  name: "contactDepartment",
                  title: "Contact / Department",
                  cellType: "text"
                }
              ],
              minRowCount: 0,
              rowCount: 0,
              addRowText: "+ Add Witness"
            }
          ]
        },
        {
          type: "panel",
          name: "panel8",
          title: "8. Immediate Actions Taken",
          elements: [
            {
              type: "matrixdynamic",
              name: "immediateActions",
              title: "Actions Log",
              columns: [
                {
                  name: "no",
                  title: "No.",
                  cellType: "text"
                },
                {
                  name: "actionTaken",
                  title: "Action Taken",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "byWhom",
                  title: "By Whom",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "time",
                  title: "Time",
                  cellType: "text",
                  inputType: "time"
                },
                {
                  name: "status",
                  title: "Status",
                  cellType: "dropdown",
                  choices: ["Completed", "In Progress", "Pending"]
                }
              ],
              minRowCount: 1,
              rowCount: 4,
              addRowText: "+ Add Action"
            }
          ]
        },
        {
          type: "panel",
          name: "panel9",
          title: "9. Regulatory Notification (KSA)",
          elements: [
            {
              type: "checkbox",
              name: "regulatoryNotification",
              title: "Notifications",
              choices: [
                "Not Required",
                "MHRSD Notified",
                "GOSI Notified",
                "Civil Defence Notified",
                "Client Notified"
              ]
            },
            {
              type: "text",
              name: "notificationRefNo",
              title: "Notification Reference No."
            },
            {
              type: "text",
              name: "dateTimeNotified",
              title: "Date / Time Notified"
            },
            {
              type: "text",
              name: "notifiedBy",
              title: "Notified By"
            }
          ]
        },
        {
          type: "panel",
          name: "panel10",
          title: "10. Follow-Up",
          elements: [
            {
              type: "radiogroup",
              name: "fullInvestigationRequired",
              title: "Full Investigation Required",
              choices: ["Yes", "No"],
              colCount: 0
            },
            {
              type: "text",
              name: "investigationReportNo",
              title: "Investigation Report No.",
              visibleIf: '{fullInvestigationRequired} = "Yes"',
              placeholder: "Reference TE-IMS-FRM-HSE-022"
            },
            {
              type: "radiogroup",
              name: "areaEquipmentIsolated",
              title: "Area/Equipment Isolated",
              choices: ["Yes", "No", "N/A"],
              colCount: 0
            }
          ]
        },
        {
          type: "panel",
          name: "panel11",
          title: "11. Submitted By",
          elements: [
            {
              type: "text",
              name: "submittedByFullName",
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

export default function FRM_HSE_024() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-024"
        title="Dangerous Occurrence Report Form"
        revision="02"
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
