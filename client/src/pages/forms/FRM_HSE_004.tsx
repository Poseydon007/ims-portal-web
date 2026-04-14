/**
 * TE-IMS-FRM-HSE-004 — First Aid Kit Inspection
 * Rebuilt using SurveyJS + ImsForm wrapper.
 */
import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const DEPARTMENT_LIST = [
  "HSE", "Operations – Drilling", "Operations – Geology", "Operations – Survey",
  "Maintenance", "Logistics & Transport", "Warehouse & Supply", "Security",
  "Administration", "Finance & Accounting", "Human Resources", "IT & Communications",
  "Management", "Quality Assurance", "Environmental", "Training & Competency",
  "Contracts & Procurement", "Camp & Catering", "Medical & First Aid", "Other",
];

const SCHEMA = {
  title: "",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        // ── Section 1: Inspection Identity ──
        {
          type: "panel",
          name: "section_identity",
          title: "1. Inspection Identity",
          elements: [
            { type: "text", name: "reportNo", title: "Report No.", isRequired: true, readOnly: true, description: "Auto-assigned" },
            { type: "text", name: "inspectedBy", title: "Inspected By (Full Name)", isRequired: true, readOnly: true, description: "Auto-filled from your login profile" },
            { type: "text", name: "employeeId", title: "Employee ID", isRequired: true, readOnly: true, description: "Auto-filled from your login profile" },
            { type: "text", name: "position", title: "Position / Job Title", readOnly: true, description: "Auto-filled from your login profile" },
            { type: "dropdown", name: "department", title: "Department", isRequired: true, choices: DEPARTMENT_LIST },
            { type: "text", name: "site", title: "Site / Location", isRequired: true },
            { type: "text", name: "kitId", title: "First Aid Kit ID / Reference No.", isRequired: true },
            { type: "text", name: "kitLocation", title: "Kit Location (exact area)", isRequired: true },
            { type: "text", name: "signoffReportedByDate", title: "Inspection Date", inputType: "date", isRequired: true, readOnly: true, description: "Auto-filled with today's date" },
            { type: "text", name: "nextInspectionDate", title: "Next Scheduled Inspection Date", inputType: "date", isRequired: true },
          ],
        },

        // ── Section 2: Kit Condition ──
        {
          type: "panel",
          name: "section_kit_condition",
          title: "2. Kit Condition",
          elements: [
            {
              type: "radiogroup",
              name: "kitCondition",
              title: "Overall Kit Condition",
              isRequired: true,
              choices: ["Good — Clean, intact, accessible", "Fair — Minor issues noted", "Poor — Requires immediate attention"],
            },
            {
              type: "radiogroup",
              name: "kitAccessible",
              title: "Is the kit clearly marked and accessible?",
              isRequired: true,
              choices: ["Yes", "No"],
            },
            {
              type: "radiogroup",
              name: "kitSealed",
              title: "Is the kit sealed / tamper-evident seal intact?",
              isRequired: true,
              choices: ["Yes", "No", "N/A"],
            },
          ],
        },

        // ── Section 3: Contents Checklist ──
        {
          type: "panel",
          name: "section_contents",
          title: "3. Contents Checklist",
          description: "For each item, record the quantity present and whether it is adequate (Yes/No). Note expiry dates where applicable.",
          elements: [
            {
              type: "matrixdynamic",
              name: "contentsChecklist",
              title: "First Aid Kit Contents",
              addRowText: "+ Add Item",
              rowCount: 20,
              minRowCount: 1,
              defaultValue: [
                { item: "Adhesive bandages (assorted sizes)", required: "10", present: "", adequate: "Yes", expiryDate: "", notes: "" },
                { item: "Sterile gauze pads (5×5 cm)", required: "5", present: "", adequate: "Yes", expiryDate: "", notes: "" },
                { item: "Sterile gauze pads (10×10 cm)", required: "5", present: "", adequate: "Yes", expiryDate: "", notes: "" },
                { item: "Roller bandage (5 cm)", required: "2", present: "", adequate: "Yes", expiryDate: "", notes: "" },
                { item: "Roller bandage (10 cm)", required: "2", present: "", adequate: "Yes", expiryDate: "", notes: "" },
                { item: "Triangular bandage", required: "2", present: "", adequate: "Yes", expiryDate: "", notes: "" },
                { item: "Sterile eye pad", required: "2", present: "", adequate: "Yes", expiryDate: "", notes: "" },
                { item: "Eye wash solution (500 ml)", required: "1", present: "", adequate: "Yes", expiryDate: "", notes: "" },
                { item: "Antiseptic wipes / swabs", required: "10", present: "", adequate: "Yes", expiryDate: "", notes: "" },
                { item: "Antiseptic cream / ointment", required: "1", present: "", adequate: "Yes", expiryDate: "", notes: "" },
                { item: "Burn gel / dressing", required: "2", present: "", adequate: "Yes", expiryDate: "", notes: "" },
                { item: "Disposable gloves (pairs)", required: "5", present: "", adequate: "Yes", expiryDate: "", notes: "" },
                { item: "CPR face shield / mask", required: "1", present: "", adequate: "Yes", expiryDate: "", notes: "" },
                { item: "Scissors (blunt-end)", required: "1", present: "", adequate: "Yes", expiryDate: "", notes: "" },
                { item: "Tweezers / forceps", required: "1", present: "", adequate: "Yes", expiryDate: "", notes: "" },
                { item: "Safety pins (assorted)", required: "6", present: "", adequate: "Yes", expiryDate: "", notes: "" },
                { item: "Thermometer", required: "1", present: "", adequate: "Yes", expiryDate: "", notes: "" },
                { item: "Instant cold pack", required: "2", present: "", adequate: "Yes", expiryDate: "", notes: "" },
                { item: "Emergency blanket / foil blanket", required: "1", present: "", adequate: "Yes", expiryDate: "", notes: "" },
                { item: "First aid manual / instruction card", required: "1", present: "", adequate: "Yes", expiryDate: "", notes: "" },
              ],
              columns: [
                { name: "item", title: "Item Description", cellType: "text", isRequired: true },
                { name: "required", title: "Required Qty", cellType: "text" },
                { name: "present", title: "Qty Present", cellType: "text", isRequired: true },
                { name: "adequate", title: "Adequate?", cellType: "dropdown", choices: ["Yes", "No", "N/A"] },
                { name: "expiryDate", title: "Expiry Date", cellType: "text" },
                { name: "notes", title: "Notes / Action Required", cellType: "text" },
              ],
            },
          ],
        },

        // ── Section 4: Deficiencies ──
        {
          type: "panel",
          name: "section_deficiencies",
          title: "4. Deficiencies & Actions",
          elements: [
            {
              type: "radiogroup",
              name: "deficienciesFound",
              title: "Were any deficiencies found?",
              isRequired: true,
              choices: ["No — Kit is complete and compliant", "Yes — See details below"],
            },
            {
              type: "comment",
              name: "deficiencyDetails",
              title: "Deficiency Details",
              rows: 4,
              visibleIf: "{deficienciesFound} = 'Yes — See details below'",
              placeholder: "Describe each deficiency, missing item, or expired item...",
            },
            {
              type: "matrixdynamic",
              name: "correctiveActions",
              title: "Corrective Actions Required",
              addRowText: "+ Add Action",
              rowCount: 1,
              visibleIf: "{deficienciesFound} = 'Yes — See details below'",
              columns: [
                { name: "action", title: "Action", cellType: "text", isRequired: true },
                { name: "responsible", title: "Responsible Person", cellType: "text", isRequired: true },
                { name: "targetDate", title: "Target Date", cellType: "text" },
                { name: "status", title: "Status", cellType: "dropdown", choices: ["Open", "In Progress", "Closed"] },
              ],
            },
          ],
        },

        // ── Section 5: Sign-Off ──
        {
          type: "panel",
          name: "section_signoff",
          title: "5. Sign-Off",
          elements: [
            { type: "text", name: "signoffReportedByName", title: "Inspected By — Full Name", isRequired: true, readOnly: true, description: "Auto-filled from your login profile" },
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
        title="First Aid Kit Inspection"
        revision="01"
        approvalDate="01 March 2026"
        minRole="field_worker"
        schema={SCHEMA}
        identityFields={{
          fullName: "inspectedBy",
          employeeId: "employeeId",
          department: "department",
          position: "position",
        }}
      />
    </Layout>
  );
}
