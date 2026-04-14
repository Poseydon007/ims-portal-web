import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Monthly Injury Summary",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "section1",
          title: "1. Project Information",
          elements: [
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
              name: "monthYear",
              title: "Month / Year",
              isRequired: true,
              placeholder: "e.g., April 2026"
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
          title: "2. Monthly Injury Log",
          elements: [
            {
              type: "matrixdynamic",
              name: "injuryLog",
              title: "Record all injuries and incidents for the month. Complete one row per case.",
              columns: [
                { name: "no", title: "#", cellType: "text" },
                { name: "date", title: "Date", cellType: "text", inputType: "date" },
                { name: "employeeNo", title: "Employee No.", cellType: "text" },
                { name: "incidentRefNo", title: "Incident Ref No.", cellType: "text" },
                { name: "nameDept", title: "Name / Department", cellType: "text", isRequired: true },
                { name: "natureOfInjury", title: "Nature of Injury", cellType: "text", isRequired: true },
                { name: "bodyPart", title: "Body Part", cellType: "text" },
                { 
                  name: "treatmentType", 
                  title: "Treatment Type", 
                  cellType: "dropdown",
                  choices: ["First Aid", "Medical Treatment", "Restricted Work", "Lost Time Injury", "Fatality"]
                },
                { 
                  name: "onOffSite", 
                  title: "On-Site / Off-Site", 
                  cellType: "radiogroup",
                  choices: ["On-Site", "Off-Site"]
                },
                { name: "restDays", title: "Rest Days", cellType: "text", inputType: "number", min: 0 },
                { name: "hospitalFollowUp", title: "Hospital / Follow-Up", cellType: "text" }
              ],
              minRowCount: 0,
              rowCount: 5,
              addRowText: "+ Add Case"
            }
          ]
        },
        {
          type: "panel",
          name: "section3",
          title: "3. Monthly KPI Summary",
          elements: [
            {
              type: "html",
              name: "kpiTitle",
              html: "<b>Complete after all cases are recorded</b>"
            },
            {
              type: "text",
              name: "fac",
              title: "First Aid Cases (FAC)",
              inputType: "number",
              min: 0,
              isRequired: true
            },
            {
              type: "text",
              name: "mtc",
              title: "Medical Treatment Cases (MTC)",
              inputType: "number",
              min: 0,
              isRequired: true
            },
            {
              type: "text",
              name: "rwc",
              title: "Restricted Work Cases (RWC)",
              inputType: "number",
              min: 0,
              isRequired: true
            },
            {
              type: "text",
              name: "lti",
              title: "Lost Time Injuries (LTI)",
              inputType: "number",
              min: 0,
              isRequired: true
            },
            {
              type: "text",
              name: "fatalities",
              title: "Fatalities",
              inputType: "number",
              min: 0,
              isRequired: true
            },
            {
              type: "text",
              name: "totalRecordableIncidents",
              title: "Total Recordable Incidents",
              inputType: "number",
              min: 0,
              isRequired: true
            },
            {
              type: "text",
              name: "totalDaysLost",
              title: "Total Days Lost",
              inputType: "number",
              min: 0
            },
            {
              type: "text",
              name: "totalManHoursWorked",
              title: "Total Man-Hours Worked",
              inputType: "number",
              min: 0,
              isRequired: true
            },
            {
              type: "text",
              name: "trir",
              title: "TRIR per 200,000 hrs",
              inputType: "number",
              description: "Total Recordable Incident Rate = (Total Recordable Incidents x 200,000) / Man-Hours Worked"
            },
            {
              type: "text",
              name: "ltir",
              title: "LTIR per 200,000 hrs",
              inputType: "number",
              description: "Lost Time Injury Rate = (LTI x 200,000) / Man-Hours Worked"
            },
            {
              type: "text",
              name: "severityRate",
              title: "Severity Rate",
              inputType: "number",
              description: "Severity Rate = (Total Days Lost x 200,000) / Man-Hours Worked"
            },
            {
              type: "text",
              name: "nearMissesReported",
              title: "Near Misses Reported",
              inputType: "number",
              min: 0
            }
          ]
        },
        {
          type: "panel",
          name: "section4",
          title: "4. Remarks",
          elements: [
            {
              type: "comment",
              name: "remarks",
              title: "Remarks",
              rows: 4
            }
          ]
        },
        {
          type: "panel",
          name: "section5",
          title: "5. Submitted By",
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

export default function FRM_HSE_027() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-027"
        title="Monthly Injury Summary"
        revision="02"
        approvalDate="April 2026"
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
