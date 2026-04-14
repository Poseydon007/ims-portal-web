import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Fire Fighting Equipment Register Checklist",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "section1",
          title: "1. Inspection Details",
          elements: [
            {
              type: "text",
              name: "siteLocation",
              title: "Site / Location",
              isRequired: true
            },
            {
              type: "text",
              name: "year",
              title: "Year",
              placeholder: "e.g., 2026",
              isRequired: true
            },
            {
              type: "text",
              name: "reportedBy",
              title: "Inspector Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "employeeId",
              title: "Inspector Employee ID",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "radiogroup",
              name: "inspectionFrequency",
              title: "Inspection Frequency",
              choices: ["Monthly", "Quarterly", "Annual"],
              isRequired: true
            },
            {
              type: "dropdown",
              name: "department",
              title: "Department",
              choices: [
                "HSE", "Operations – Drilling", "Operations – Geology", "Operations – Survey", 
                "Maintenance", "Logistics & Transport", "Warehouse & Supply", "Security", 
                "Administration", "Finance & Accounting", "Human Resources", "IT & Communications", 
                "Management", "Quality Assurance", "Environmental", "Training & Competency", 
                "Contracts & Procurement", "Camp & Catering", "Medical & First Aid", "Other"
              ],
              isRequired: true
            }
          ]
        },
        {
          type: "panel",
          name: "section2",
          title: "2. Deviation Legend",
          elements: [
            {
              type: "html",
              name: "deviationLegend",
              html: `
                <div style="padding: 15px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #f8fafc; font-family: sans-serif;">
                  <h4 style="margin-top: 0; color: #1e293b;">Deviation Codes Reference</h4>
                  <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
                    <div>
                      <strong style="color: #334155;">Fire Extinguishers (FE)</strong>
                      <ul style="font-size: 0.85rem; padding-left: 20px; margin: 5px 0;">
                        <li>FE1: Seal broken</li>
                        <li>FE2: Pressure low</li>
                        <li>FE3: Hose damaged</li>
                        <li>FE4: Label unreadable</li>
                        <li>FE5: Mounting loose</li>
                        <li>FE6: Obstruction</li>
                        <li>FE7: Service overdue</li>
                        <li>FE8: Corrosion</li>
                        <li>FE9: Pin missing</li>
                        <li>FE10: Empty</li>
                      </ul>
                    </div>
                    <div>
                      <strong style="color: #334155;">Hose Reels (HR)</strong>
                      <ul style="font-size: 0.85rem; padding-left: 20px; margin: 5px 0;">
                        <li>HR1: Leak detected</li>
                        <li>HR2: Nozzle stuck</li>
                        <li>HR3: Hose cracked</li>
                        <li>HR4: Handle missing</li>
                        <li>HR5: Drum stiff</li>
                        <li>HR6: Obstruction</li>
                        <li>HR7: Valve leaking</li>
                        <li>HR8: Corrosion</li>
                        <li>HR9: Label missing</li>
                      </ul>
                    </div>
                    <div>
                      <strong style="color: #334155;">Hydrants (HY)</strong>
                      <ul style="font-size: 0.85rem; padding-left: 20px; margin: 5px 0;">
                        <li>HY1: Cap missing</li>
                        <li>HY2: Valve stiff</li>
                        <li>HY3: Leakage</li>
                        <li>HY4: Obstruction</li>
                        <li>HY5: Handwheel missing</li>
                        <li>HY6: Corrosion</li>
                        <li>HY7: Outlet damaged</li>
                        <li>HY8: Marker missing</li>
                      </ul>
                    </div>
                  </div>
                  <p style="margin-top: 10px; font-weight: bold; color: #0f172a;">SFU = Satisfactory for Use</p>
                </div>
              `
            }
          ]
        },
        {
          type: "panel",
          name: "section3",
          title: "3. Quarterly Inspection Register",
          elements: [
            {
              type: "matrixdynamic",
              name: "inspectionRegister",
              title: "Record each equipment item. Use deviation codes (FE1, HR2, etc.) or SFU for each quarter.",
              columns: [
                { name: "no", title: "#", cellType: "text", width: "50px" },
                { name: "tag", title: "Equipment ID / Tag", cellType: "text", isRequired: true },
                { 
                  name: "type", 
                  title: "Equipment Type", 
                  cellType: "dropdown", 
                  choices: ["Fire Extinguisher (FE)", "Hose Reel (HR)", "Hydrant (HY)", "Other"],
                  isRequired: true 
                },
                { name: "q1Status", title: "Q1 Jan-Mar Status", cellType: "text" },
                { name: "q1Initials", title: "Q1 Inspector Initials", cellType: "text" },
                { name: "q2Status", title: "Q2 Apr-Jun Status", cellType: "text" },
                { name: "q3Status", title: "Q3 Jul-Sep Status", cellType: "text" },
                { name: "q3Initials", title: "Q3 Inspector Initials", cellType: "text" },
                { name: "q4Status", title: "Q4 Oct-Dec Status", cellType: "text" }
              ],
              minRowCount: 1,
              rowCount: 10,
              addRowText: "+ Add Equipment"
            }
          ]
        },
        {
          type: "panel",
          name: "section4",
          title: "4. Deviation and Follow-Up Report",
          elements: [
            {
              type: "matrixdynamic",
              name: "deviations",
              columns: [
                { name: "no", title: "No.", cellType: "text", width: "50px" },
                { name: "date", title: "Date", cellType: "text", inputType: "date" },
                { name: "description", title: "Deviation Description", cellType: "text", isRequired: true },
                { name: "action", title: "Follow-Up Action", cellType: "text", isRequired: true },
                { name: "responsible", title: "Responsible", cellType: "text", isRequired: true },
                { name: "targetDate", title: "Target Date", cellType: "text", inputType: "date" },
                { name: "completionDate", title: "Completion Date", cellType: "text", inputType: "date" }
              ],
              minRowCount: 0,
              rowCount: 0,
              addRowText: "+ Add Deviation"
            }
          ]
        },
        {
          type: "panel",
          name: "section5",
          title: "5. Submitted By",
          elements: [
            {
              type: "comment",
              name: "comments",
              title: "Comments",
              rows: 3
            },
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

export default function FRM_HSE_030() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-030"
        title="Fire Fighting Equipment Register Checklist"
        revision="01"
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
