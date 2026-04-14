import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Site HSE Monthly Report Template",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "section1",
          title: "1. Report Details",
          elements: [
            {
              type: "text",
              name: "siteProject",
              title: "Site / Project",
              isRequired: true
            },
            {
              type: "text",
              name: "reportDate",
              title: "Report Date",
              inputType: "date",
              readOnly: true,
              defaultValueExpression: "today()",
              description: "Auto-filled with today's date"
            },
            {
              type: "text",
              name: "reportedBy",
              title: "Prepared By Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "employeeId",
              title: "Prepared By Employee ID",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "position",
              title: "Prepared By Position",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "reportingPeriod",
              title: "Reporting Period",
              isRequired: true,
              placeholder: "e.g., April 2026"
            },
            {
              type: "text",
              name: "reportNumber",
              title: "Report No.",
              readOnly: true,
              description: "Auto-assigned on submission"
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
            }
          ]
        },
        {
          type: "panel",
          name: "section2",
          title: "2. Executive Summary",
          elements: [
            {
              type: "comment",
              name: "executiveSummary",
              title: "Executive Summary",
              rows: 5,
              isRequired: true
            }
          ]
        },
        {
          type: "panel",
          name: "section3",
          title: "3. Key Safety Statistics",
          elements: [
            {
              type: "matrixdynamic",
              name: "safetyStatistics",
              title: "Enter statistics for this month and year to date",
              columns: [
                { name: "metric", title: "Metric", cellType: "text", readOnly: true },
                { name: "thisMonth", title: "This Month", cellType: "text" },
                { name: "ytd", title: "Year to Date", cellType: "text" },
                { name: "target", title: "Target", cellType: "text" }
              ],
              rowCount: 14,
              minRowCount: 14,
              allowAddRows: false,
              allowRemoveRows: false,
              defaultValue: [
                { metric: "Total Man-Hours Worked" },
                { metric: "Near Misses Reported" },
                { metric: "First Aid Cases (FAC)" },
                { metric: "Medical Treatment Cases (MTC)" },
                { metric: "Restricted Work Cases (RWC)" },
                { metric: "Lost Time Injuries (LTI)" },
                { metric: "Fatalities" },
                { metric: "Total Recordable Incidents (TRI)" },
                { metric: "TRIR (per 200,000 hrs)" },
                { metric: "LTIR (per 200,000 hrs)" },
                { metric: "Severity Rate" },
                { metric: "Safety Observations / Interventions" },
                { metric: "Toolbox Talks Conducted" },
                { metric: "HSE Inspections Completed" }
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "section4",
          title: "4. Incident Summary",
          elements: [
            {
              type: "matrixdynamic",
              name: "incidentSummary",
              columns: [
                { name: "no", title: "No.", cellType: "text" },
                { name: "date", title: "Date", cellType: "text", inputType: "date" },
                { name: "type", title: "Type", cellType: "text", isRequired: true },
                { name: "location", title: "Location", cellType: "text", isRequired: true },
                { name: "description", title: "Description", cellType: "text", isRequired: true },
                { name: "rootCause", title: "Root Cause", cellType: "text" },
                { 
                  name: "status", 
                  title: "Status", 
                  cellType: "dropdown", 
                  choices: ["Open", "In Progress", "Closed"] 
                }
              ],
              rowCount: 3,
              minRowCount: 0,
              addRowText: "+ Add Incident"
            }
          ]
        },
        {
          type: "panel",
          name: "section5",
          title: "5. Safety Activities Completed",
          elements: [
            {
              type: "text",
              name: "weeklyInspections",
              title: "Weekly Inspections Conducted",
              placeholder: "Dates conducted"
            },
            {
              type: "text",
              name: "safetyDrills",
              title: "Safety Drills Conducted"
            },
            {
              type: "text",
              name: "trainingSessions",
              title: "Training Sessions Held"
            },
            {
              type: "text",
              name: "ptos",
              title: "Planned Task Observations (PTOs)"
            },
            {
              type: "text",
              name: "emergencyResponse",
              title: "Emergency Response Exercises"
            }
          ]
        },
        {
          type: "panel",
          name: "section6",
          title: "6. Issues and Recommendations",
          elements: [
            {
              type: "matrixdynamic",
              name: "issuesRecommendations",
              columns: [
                { name: "no", title: "No.", cellType: "text" },
                { name: "observation", title: "Observation / Issue", cellType: "text", isRequired: true },
                { name: "recommendation", title: "Recommendation", cellType: "text", isRequired: true },
                { name: "responsible", title: "Responsible", cellType: "text", isRequired: true }
              ],
              rowCount: 3,
              minRowCount: 0,
              addRowText: "+ Add Issue"
            }
          ]
        },
        {
          type: "panel",
          name: "section7",
          title: "7. Planned Safety Activities – Next Month",
          elements: [
            {
              type: "comment",
              name: "plannedActivities",
              title: "Planned activities",
              rows: 4
            }
          ]
        },
        {
          type: "panel",
          name: "section8",
          title: "8. Quality Control and Assurance",
          elements: [
            {
              type: "matrixdynamic",
              name: "qcMetrics",
              title: "QC metrics for the reporting period",
              columns: [
                { name: "metric", title: "Metric", cellType: "text", readOnly: true },
                { name: "thisMonth", title: "This Month", cellType: "text" },
                { name: "target", title: "Target", cellType: "text" },
                { name: "comments", title: "Comments", cellType: "text" }
              ],
              rowCount: 6,
              minRowCount: 6,
              allowAddRows: false,
              allowRemoveRows: false,
              defaultValue: [
                { metric: "Core Recovery (%)" },
                { metric: "Core Orientation Accuracy" },
                { metric: "Sample Labelling Compliance" },
                { metric: "Chain of Custody Breaches" },
                { metric: "Re-drills Required" },
                { metric: "QA/QC Sample Issues (duplicates, blanks)" }
              ]
            },
            {
              type: "text",
              name: "qualityAudits",
              title: "Quality Audits Conducted"
            },
            {
              type: "text",
              name: "issuesIdentified",
              title: "Issues Identified"
            },
            {
              type: "text",
              name: "correctiveActionsQC",
              title: "Corrective Actions"
            },
            {
              type: "text",
              name: "continuousImprovement",
              title: "Continuous Improvement"
            }
          ]
        },
        {
          type: "panel",
          name: "section9",
          title: "9. Environmental Management",
          elements: [
            {
              type: "matrixdynamic",
              name: "environmentalMetrics",
              columns: [
                { name: "metric", title: "Metric", cellType: "text", readOnly: true },
                { name: "thisMonth", title: "This Month", cellType: "text" },
                { name: "ytd", title: "YTD", cellType: "text" },
                { name: "comments", title: "Comments", cellType: "text" }
              ],
              rowCount: 6,
              minRowCount: 6,
              allowAddRows: false,
              allowRemoveRows: false,
              defaultValue: [
                { metric: "Fuel Spills (litres)" },
                { metric: "Hazardous Waste Disposals" },
                { metric: "Grey Water Discharges" },
                { metric: "Dust Events / Complaints" },
                { metric: "Non-Compliance Reports" },
                { metric: "Waste Segregation Compliance (%)" }
              ]
            },
            {
              type: "text",
              name: "environmentalInspections",
              title: "Environmental Inspections Conducted"
            },
            {
              type: "text",
              name: "actionsTakenEnv",
              title: "Actions Taken"
            },
            {
              type: "text",
              name: "improvementInitiatives",
              title: "Improvement Initiatives"
            }
          ]
        },
        {
          type: "panel",
          name: "section10",
          title: "10. Attachments Checklist",
          elements: [
            {
              type: "matrixdynamic",
              name: "attachmentsChecklist",
              columns: [
                { name: "document", title: "Document", cellType: "text", readOnly: true },
                { 
                  name: "attached", 
                  title: "Attached", 
                  cellType: "radiogroup", 
                  choices: ["Yes", "No"] 
                },
                { name: "referenceNo", title: "Reference No.", cellType: "text" }
              ],
              rowCount: 6,
              minRowCount: 6,
              allowAddRows: false,
              allowRemoveRows: false,
              defaultValue: [
                { document: "Site Inspection Checklists" },
                { document: "Incident Investigation Reports" },
                { document: "Training Attendance Sheets" },
                { document: "Toolbox Talk Records" },
                { document: "Environmental Monitoring Data" },
                { document: "Corrective Action Reports" }
              ]
            }
          ]
        },
        {
          type: "panel",
          name: "section11",
          title: "11. Submitted By",
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
              defaultValueExpression: "today()",
              description: "Auto-filled with today's date"
            }
          ]
        }
      ]
    }
  ],
  checkErrorsMode: "onComplete",
  showPrevButton: false,
};

export default function FRM_HSE_033() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-033"
        title="Site HSE Monthly Report Template"
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
