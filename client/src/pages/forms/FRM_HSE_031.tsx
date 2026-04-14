import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const DEPARTMENT_LIST = [
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
  "Other",
];

const SCHEMA = {
  title: "Equipment Inspection and Deviation Register",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "section_inspection_details",
          title: "1. Inspection Details",
          elements: [
            {
              type: "text",
              name: "reportNo",
              title: "Report No.",
              isRequired: true,
              readOnly: true,
              description: "Auto-assigned on submission",
            },
            {
              type: "checkbox",
              name: "inspectionType",
              title: "Inspection Type",
              isRequired: true,
              choices: ["Safety Harness", "Monthly Safety", "Other"],
              colCount: 3,
            },
            {
              type: "checkbox",
              name: "equipmentCategory",
              title: "Equipment Category",
              isRequired: true,
              choices: ["Drilling", "Vehicles", "Lifting", "Electrical", "Other"],
              colCount: 5,
            },
            {
              type: "text",
              name: "location",
              title: "Site / Location",
              isRequired: true,
            },
            {
              type: "text",
              name: "reportedBy",
              title: "Inspector Full Name",
              isRequired: true,
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "employeeId",
              title: "Inspector Employee ID",
              isRequired: true,
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "year",
              title: "Year",
              isRequired: true,
              placeholder: "e.g., 2026",
            },
            {
              type: "radiogroup",
              name: "inspectionFrequency",
              title: "Inspection Frequency",
              isRequired: true,
              choices: ["Daily", "Weekly", "Monthly", "Quarterly"],
              colCount: 4,
            },
            {
              type: "dropdown",
              name: "department",
              title: "Department",
              isRequired: true,
              choices: DEPARTMENT_LIST,
            },
          ],
        },
        {
          type: "panel",
          name: "section_status_legend",
          title: "2. Status Legend",
          elements: [
            {
              type: "html",
              name: "status_legend_html",
              html: `
                <div style="padding: 15px; border: 1px solid #081C2E; border-radius: 4px; background-color: #f8f9fa;">
                  <p style="margin: 0; font-weight: bold; color: #081C2E; margin-bottom: 8px;">Inspection Status Codes:</p>
                  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px;">
                    <div><strong>OK</strong> = Pass</div>
                    <div><strong>D1, D2, D3...</strong> = Deviation Ref No.</div>
                    <div><strong>X</strong> = Not Inspected</div>
                    <div><strong>N/A</strong> = Not Applicable</div>
                    <div><strong>R</strong> = Requires Repair</div>
                  </div>
                </div>
              `,
            },
          ],
        },
        {
          type: "panel",
          name: "section_inspection_register",
          title: "3. Monthly Inspection Register",
          elements: [
            {
              type: "matrixdynamic",
              name: "inspectionRegister",
              title: "Record each equipment item. Use status codes for each month.",
              isRequired: true,
              columns: [
                { name: "no", title: "#", cellType: "text", width: "50px" },
                {
                  name: "description",
                  title: "Item / Equipment Description",
                  cellType: "text",
                  isRequired: true,
                  width: "250px",
                },
                { name: "jan", title: "JAN", cellType: "text", width: "60px" },
                { name: "feb", title: "FEB", cellType: "text", width: "60px" },
                { name: "mar", title: "MAR", cellType: "text", width: "60px" },
                { name: "apr", title: "APR", cellType: "text", width: "60px" },
                { name: "may", title: "MAY", cellType: "text", width: "60px" },
                { name: "jun", title: "JUN", cellType: "text", width: "60px" },
                { name: "jul", title: "JUL", cellType: "text", width: "60px" },
                { name: "aug", title: "AUG", cellType: "text", width: "60px" },
                { name: "sep", title: "SEP", cellType: "text", width: "60px" },
                { name: "oct", title: "OCT", cellType: "text", width: "60px" },
                { name: "nov", title: "NOV", cellType: "text", width: "60px" },
                { name: "dec", title: "DEC", cellType: "text", width: "60px" },
              ],
              rowCount: 10,
              minRowCount: 1,
              addRowText: "+ Add Item",
            },
          ],
        },
        {
          type: "panel",
          name: "section_deviations",
          title: "4. Deviation and Follow-Up Report",
          elements: [
            {
              type: "matrixdynamic",
              name: "deviations",
              title: "Record all deviations identified during inspection.",
              columns: [
                { name: "devNo", title: "Dev. No.", cellType: "text" },
                { name: "date", title: "Date", cellType: "text", inputType: "date" },
                {
                  name: "description",
                  title: "Deviation Description",
                  cellType: "text",
                  isRequired: true,
                },
                {
                  name: "action",
                  title: "Follow-Up Action",
                  cellType: "text",
                  isRequired: true,
                },
                {
                  name: "responsible",
                  title: "Responsible",
                  cellType: "text",
                  isRequired: true,
                },
                { name: "targetDate", title: "Target Date", cellType: "text", inputType: "date" },
                {
                  name: "severity",
                  title: "Severity",
                  cellType: "dropdown",
                  choices: ["Minor", "Major", "Critical"],
                },
                { name: "completionDate", title: "Completion Date", cellType: "text", inputType: "date" },
              ],
              rowCount: 0,
              minRowCount: 0,
              addRowText: "+ Add Deviation",
            },
          ],
        },
        {
          type: "panel",
          name: "section_submitted_by",
          title: "5. Submitted By",
          elements: [
            {
              type: "comment",
              name: "comments",
              title: "Comments",
              rows: 3,
            },
            {
              type: "text",
              name: "signoffReportedByName",
              title: "Submitted By — Full Name",
              isRequired: true,
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "signoffReportedByDate",
              title: "Submission Date",
              isRequired: true,
              readOnly: true,
              inputType: "date",
              description: "Auto-filled with today's date",
            },
          ],
        },
      ],
    },
  ],
  checkErrorsMode: "onComplete",
  showPrevButton: false,
};

export default function FRM_HSE_031() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-031"
        title="Equipment Inspection and Deviation Register"
        revision="02"
        approvalDate="April 2026"
        minRole="field_worker"
        wideTable={true}
        schema={SCHEMA}
        identityFields={{
          fullName: "reportedBy",
          employeeId: "employeeId",
          department: "department",
          position: "position",
        }}
      />
    </Layout>
  );
}
