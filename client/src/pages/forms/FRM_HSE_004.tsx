import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "First Aid Kit Register and Checklist",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "panel",
          name: "section1",
          title: "1. Kit Identification",
          elements: [
            {
              type: "text",
              name: "kitId",
              title: "Kit ID / Reference No.",
              isRequired: true,
            },
            {
              type: "text",
              name: "location",
              title: "Location / Site",
              isRequired: true,
            },
            {
              type: "text",
              name: "inspectionDate",
              title: "Inspection Date",
              inputType: "date",
              isRequired: true,
              readOnly: true,
              defaultValueExpression: "today()",
              description: "Auto-filled with today's date",
            },
            {
              type: "text",
              name: "nextInspectionDue",
              title: "Next Inspection Due",
              inputType: "date",
              isRequired: true,
            },
            {
              type: "text",
              name: "inspectorName",
              title: "Inspector Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "employeeId",
              title: "Employee ID",
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "position",
              title: "Position",
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
          name: "section2",
          title: "2. Kit Contents Checklist",
          elements: [
            {
              type: "matrixdynamic",
              name: "kitContents",
              title: "Kit Contents — verify each item against required quantity",
              columns: [
                {
                  name: "itemNo",
                  title: "Item No.",
                  cellType: "text",
                  readOnly: true,
                },
                {
                  name: "category",
                  title: "Category",
                  cellType: "text",
                  readOnly: true,
                },
                {
                  name: "description",
                  title: "Item Description",
                  cellType: "text",
                  readOnly: true,
                },
                {
                  name: "requiredQty",
                  title: "Required Qty",
                  cellType: "text",
                  readOnly: true,
                },
                {
                  name: "actualQty",
                  title: "Actual Qty",
                  cellType: "text",
                  isRequired: true,
                },
                {
                  name: "condition",
                  title: "Condition",
                  cellType: "dropdown",
                  isRequired: true,
                  choices: [
                    "Good",
                    "Expiring Soon",
                    "Expired",
                    "Missing",
                    "Damaged",
                  ],
                },
                {
                  name: "remarks",
                  title: "Remarks",
                  cellType: "text",
                },
              ],
              rowCount: 33,
              allowAddRows: false,
              allowRemoveRows: false,
              defaultValue: [
                {
                  itemNo: "1",
                  category: "A. Wound Care",
                  description: "Wound cleaner / antiseptic solution (100 ml)",
                  requiredQty: "1",
                },
                {
                  itemNo: "2",
                  category: "A. Wound Care",
                  description: "Swabs for cleaning wounds",
                  requiredQty: "10",
                },
                {
                  itemNo: "3",
                  category: "A. Wound Care",
                  description: "Cotton wool for padding (100 g)",
                  requiredQty: "1",
                },
                {
                  itemNo: "4",
                  category: "A. Wound Care",
                  description: "Sterile gauze pads (assorted sizes)",
                  requiredQty: "10",
                },
                {
                  itemNo: "5",
                  category: "A. Wound Care",
                  description: "Adhesive dressing strips (assorted, packet)",
                  requiredQty: "1",
                },
                {
                  itemNo: "6",
                  category: "A. Wound Care",
                  description: "Non-allergic adhesive strip (25 mm x 3 m)",
                  requiredQty: "1",
                },
                {
                  itemNo: "7",
                  category: "A. Wound Care",
                  description: "Elastic adhesive roll (25 mm x 3 m)",
                  requiredQty: "1",
                },
                {
                  itemNo: "8",
                  category: "A. Wound Care",
                  description: "First aid dressing No. 3 (medium)",
                  requiredQty: "2",
                },
                {
                  itemNo: "9",
                  category: "A. Wound Care",
                  description: "First aid dressing No. 5 (large)",
                  requiredQty: "2",
                },
                {
                  itemNo: "10",
                  category: "A. Wound Care",
                  description: "Roller bandage 75 mm x 5 m",
                  requiredQty: "4",
                },
                {
                  itemNo: "11",
                  category: "A. Wound Care",
                  description: "Roller bandage 100 mm x 5 m",
                  requiredQty: "4",
                },
                {
                  itemNo: "12",
                  category: "A. Wound Care",
                  description: "Triangular bandages",
                  requiredQty: "4",
                },
                {
                  itemNo: "13",
                  category: "B. Burn & Eye",
                  description: "Burn gel / hydrogel dressing",
                  requiredQty: "2",
                },
                {
                  itemNo: "14",
                  category: "B. Burn & Eye",
                  description: "Sterile burn sheet (10 x 10 cm)",
                  requiredQty: "1",
                },
                {
                  itemNo: "15",
                  category: "B. Burn & Eye",
                  description: "Eye pad with shield or tape",
                  requiredQty: "2",
                },
                {
                  itemNo: "16",
                  category: "B. Burn & Eye",
                  description: "Saline eye wash bottle (500 ml)",
                  requiredQty: "1",
                },
                {
                  itemNo: "17",
                  category: "C. Instruments",
                  description: "Scissors (minimum 100 mm, blunt/sharp)",
                  requiredQty: "1",
                },
                {
                  itemNo: "18",
                  category: "C. Instruments",
                  description: "Forceps / tweezers (for splinters)",
                  requiredQty: "1",
                },
                {
                  itemNo: "19",
                  category: "C. Instruments",
                  description: "Safety pins (set)",
                  requiredQty: "1",
                },
                {
                  itemNo: "20",
                  category: "C. Instruments",
                  description: "Adhesive tape roll (25 mm)",
                  requiredQty: "1",
                },
                {
                  itemNo: "21",
                  category: "C. Instruments",
                  description: "SAM splint (or equivalent flexible splint)",
                  requiredQty: "2",
                },
                {
                  itemNo: "22",
                  category: "C. Instruments",
                  description: "Biohazard disposal bag",
                  requiredQty: "2",
                },
                {
                  itemNo: "23",
                  category: "D. Protection",
                  description: "Disposable nitrile gloves (pairs, L & M)",
                  requiredQty: "4",
                },
                {
                  itemNo: "24",
                  category: "D. Protection",
                  description: "CPR pocket mask / face shield",
                  requiredQty: "1",
                },
                {
                  itemNo: "25",
                  category: "D. Protection",
                  description: "Rescue / emergency blanket (foil)",
                  requiredQty: "1",
                },
                {
                  itemNo: "26",
                  category: "D. Protection",
                  description: "Emergency contact card / first aid guide",
                  requiredQty: "1",
                },
                {
                  itemNo: "27",
                  category: "E. KSA/Site",
                  description: "Oral Rehydration Salts (ORS) sachets",
                  requiredQty: "6",
                },
                {
                  itemNo: "28",
                  category: "E. KSA/Site",
                  description: "Instant cold / cooling packs",
                  requiredQty: "4",
                },
                {
                  itemNo: "29",
                  category: "E. KSA/Site",
                  description: "Thermal blanket (for heat casualty cooling)",
                  requiredQty: "1",
                },
                {
                  itemNo: "30",
                  category: "E. KSA/Site",
                  description: "Tourniquet (CAT or equivalent)",
                  requiredQty: "1",
                },
                {
                  itemNo: "31",
                  category: "E. KSA/Site",
                  description: "Pressure / Israeli bandage (emergency)",
                  requiredQty: "1",
                },
                {
                  itemNo: "32",
                  category: "E. KSA/Site",
                  description: "Straight splints (rigid)",
                  requiredQty: "2",
                },
                {
                  itemNo: "33",
                  category: "E. KSA/Site",
                  description: "Sunscreen SPF 50+ (individual sachets)",
                  requiredQty: "4",
                },
              ],
            },
          ],
        },
        {
          type: "panel",
          name: "section3",
          title: "3. Tamper-Evident Seal Check",
          elements: [
            {
              type: "radiogroup",
              name: "sealIntact",
              title: "Tamper-evident seal intact?",
              isRequired: true,
              choices: ["Yes", "No", "N/A"],
            },
          ],
        },
        {
          type: "panel",
          name: "section4",
          title: "4. Incident Log — Items Used Since Last Inspection",
          elements: [
            {
              type: "matrixdynamic",
              name: "incidentLog",
              title: "Incident Log — Items Used Since Last Inspection",
              columns: [
                {
                  name: "date",
                  title: "Date",
                  cellType: "text",
                  inputType: "date",
                },
                {
                  name: "injuryType",
                  title: "Injury Type",
                  cellType: "text",
                },
                {
                  name: "firstAidGiven",
                  title: "First Aid Given",
                  cellType: "text",
                },
                {
                  name: "itemsUsed",
                  title: "Items Used",
                  cellType: "text",
                },
                {
                  name: "injuredPerson",
                  title: "Injured Person",
                  cellType: "text",
                },
                {
                  name: "firstAider",
                  title: "First Aider",
                  cellType: "text",
                },
                {
                  name: "investigationRequired",
                  title: "Investigation Required",
                  cellType: "radiogroup",
                  choices: ["Yes", "No"],
                },
                {
                  name: "referenceNo",
                  title: "Reference No.",
                  cellType: "text",
                },
              ],
              rowCount: 0,
              minRowCount: 0,
              addRowText: "+ Add Incident Entry",
            },
          ],
        },
        {
          type: "panel",
          name: "section5",
          title: "5. Inspector Remarks",
          elements: [
            {
              type: "comment",
              name: "remarks",
              title: "Remarks / Observations",
              rows: 3,
            },
            {
              type: "dropdown",
              name: "overallStatus",
              title: "Overall Kit Status",
              isRequired: true,
              choices: [
                "Fully Stocked and Compliant",
                "Minor Deficiencies — Action Required",
                "Major Deficiencies — Restock Immediately",
                "Kit Unusable — Replace",
              ],
            },
          ],
        },
        {
          type: "panel",
          name: "section6",
          title: "6. Submitted By",
          elements: [
            {
              type: "text",
              name: "submittedByName",
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
              defaultValueExpression: "today()",
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

export default function FRM_HSE_004() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-004"
        title="First Aid Kit Register and Checklist"
        revision="01"
        approvalDate="01 March 2026"
        minRole="field_worker"
        schema={SCHEMA}
        wideTable={true}
        identityFields={{
          fullName: "inspectorName",
          employeeId: "employeeId",
          position: "position",
          department: "department",
        }}
      />
    </Layout>
  );
}
