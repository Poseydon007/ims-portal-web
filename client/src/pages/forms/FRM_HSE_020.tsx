import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Fire Extinguisher Inspection Log",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "inspection_details",
          title: "1. Inspection Details",
          elements: [
            {
              type: "text",
              name: "siteBuilding",
              title: "Site / Building",
              isRequired: true,
            },
            {
              type: "text",
              name: "monthYear",
              title: "Month / Year",
              placeholder: "e.g., April 2026",
              isRequired: true,
            },
            {
              type: "text",
              name: "reportedBy",
              title: "Inspector Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "inspectionDate",
              title: "Inspection Date",
              inputType: "date",
              readOnly: true,
              description: "Auto-filled with today's date",
            },
            {
              type: "text",
              name: "inspectionFrequency",
              title: "Inspection Frequency",
              readOnly: true,
              defaultValue: "Monthly",
            },
            {
              type: "text",
              name: "employeeId",
              title: "Inspector Employee ID",
              readOnly: true,
              description: "Auto-filled from your login profile",
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
                "Other",
              ],
            },
          ],
        },
        {
          type: "panel",
          name: "inspection_checklist",
          title: "2. Extinguisher Inspection Checklist",
          elements: [
            {
              type: "matrixdynamic",
              name: "inspectionTable",
              title: "For each extinguisher, inspect all items and mark status. Status Key: OK = Satisfactory | R = Requires Replacement | S = Requires Service | D = Damaged / Corroded",
              isRequired: true,
              minRowCount: 1,
              rowCount: 10,
              addRowText: "+ Add Extinguisher",
              columns: [
                {
                  name: "itemNo",
                  title: "#",
                  cellType: "text",
                  width: "50px",
                },
                {
                  name: "tagId",
                  title: "ID / Tag",
                  cellType: "text",
                  isRequired: true,
                },
                {
                  name: "location",
                  title: "Location",
                  cellType: "text",
                  isRequired: true,
                },
                {
                  name: "type",
                  title: "Type",
                  cellType: "dropdown",
                  choices: ["CO2", "Dry Powder", "Foam", "Water", "Wet Chemical", "Other"],
                },
                {
                  name: "size",
                  title: "Size",
                  cellType: "text",
                },
                {
                  name: "cylinderCondition",
                  title: "Cylinder Condition",
                  cellType: "dropdown",
                  choices: ["OK", "R", "S", "D"],
                },
                {
                  name: "pressureGauge",
                  title: "Pressure Gauge",
                  cellType: "dropdown",
                  choices: ["OK", "R", "S", "D"],
                },
                {
                  name: "pinSeal",
                  title: "Pin / Seal",
                  cellType: "dropdown",
                  choices: ["OK", "R", "S", "D"],
                },
                {
                  name: "hoseNozzle",
                  title: "Hose / Nozzle",
                  cellType: "dropdown",
                  choices: ["OK", "R", "S", "D"],
                },
                {
                  name: "signage",
                  title: "Signage",
                  cellType: "dropdown",
                  choices: ["OK", "R", "S", "D"],
                },
                {
                  name: "accessClear",
                  title: "Access Clear",
                  cellType: "dropdown",
                  choices: ["OK", "R", "S", "D"],
                },
                {
                  name: "expiryDate",
                  title: "Expiry Date",
                  cellType: "text",
                  inputType: "date",
                },
                {
                  name: "lastServiceDate",
                  title: "Last Service Date",
                  cellType: "text",
                  inputType: "date",
                },
                {
                  name: "overallStatus",
                  title: "Overall Status",
                  cellType: "dropdown",
                  isRequired: true,
                  choices: ["OK", "R", "S", "D"],
                },
              ],
            },
          ],
        },
        {
          type: "panel",
          name: "deficiency_report",
          title: "3. Deficiency Report",
          elements: [
            {
              type: "matrixdynamic",
              name: "deficiencyTable",
              minRowCount: 0,
              rowCount: 0,
              addRowText: "+ Add Deficiency",
              columns: [
                {
                  name: "itemNo",
                  title: "#",
                  cellType: "text",
                  width: "50px",
                },
                {
                  name: "extId",
                  title: "Ext. ID / Tag",
                  cellType: "text",
                  isRequired: true,
                },
                {
                  name: "deficiencyFound",
                  title: "Deficiency Found",
                  cellType: "text",
                  isRequired: true,
                },
                {
                  name: "correctiveAction",
                  title: "Corrective Action Taken",
                  cellType: "text",
                  isRequired: true,
                },
                {
                  name: "responsible",
                  title: "Responsible",
                  cellType: "text",
                  isRequired: true,
                },
                {
                  name: "dateResolved",
                  title: "Date Resolved",
                  cellType: "text",
                  inputType: "date",
                },
              ],
            },
          ],
        },
        {
          type: "panel",
          name: "submitted_by",
          title: "4. Submitted By",
          elements: [
            {
              type: "text",
              name: "submittedBy",
              title: "Submitted By Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "submissionDate",
              title: "Submission Date",
              inputType: "date",
              readOnly: true,
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

export default function FRM_HSE_020() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-020"
        title="Fire Extinguisher Inspection Log"
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
