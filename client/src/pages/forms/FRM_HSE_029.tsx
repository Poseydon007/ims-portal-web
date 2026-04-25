import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";
import { DEPARTMENTS } from "@/lib/formConstants";

const YN_NA = ["Yes", "No", "N/A"];

const CHECKLIST_ROWS = [
  // A. PPE Program
  { value: "a1", text: "A1. Hazard assessment complete and documented" },
  { value: "a2", text: "A2. PPE selection based upon hazard assessment" },
  { value: "a3", text: "A3. Review of employee-owned PPE complete" },
  { value: "a4", text: "A4. Defective or damaged PPE not in use" },
  { value: "a5", text: "A5. Training on PPE use complete and documented" },
  // B. Eye and Face Protection
  { value: "b6",  text: "B6. Eye/face protection appropriate to the hazard used" },
  { value: "b7",  text: "B7. Side protectors used where flying objects hazards are found" },
  { value: "b8",  text: "B8. Eye protection incorporates prescription or can be worn without disturbing prescription lenses" },
  { value: "b9",  text: "B9. Filter lenses with appropriate shade number available where work involves injurious light radiation" },
  { value: "b10", text: "B10. Maintained per manufacturer's recommendations" },
  // C. Head Protection
  { value: "c11", text: "C11. Hard hats used where potential for head injury from falling objects" },
  { value: "c12", text: "C12. Hard hats used where potential for head injury from exposed electrical conductors" },
  { value: "c13", text: "C13. Maintained per manufacturer's recommendations" },
  // D. Foot Protection
  { value: "d14", text: "D14. Appropriate for protection from falling or rolling objects" },
  { value: "d15", text: "D15. Appropriate for protection from objects piercing the sole" },
  { value: "d16", text: "D16. Appropriate for protection from exposed electrical conductors" },
  { value: "d17", text: "D17. Maintained per manufacturer's recommendations" },
  // E. Hand Protection
  { value: "e18", text: "E18. Hand protection appropriate to the hazard" },
  { value: "e19", text: "E19. Maintained per manufacturer's recommendations" },
  // F. Hearing Protection
  { value: "f20", text: "F20. Hearing protection available in high-noise areas (>85 dB)" },
  { value: "f21", text: "F21. Correct type used (earplugs / earmuffs) for noise level" },
  { value: "f22", text: "F22. Maintained and replaced per schedule" },
  // G. Respiratory Protection
  { value: "g23", text: "G23. Respiratory protection available for dust/fume/gas exposure" },
  { value: "g24", text: "G24. Correct type and filter for contaminant" },
  { value: "g25", text: "G25. Fit testing completed and documented" },
  // H. Heat Stress / High-Visibility / General
  { value: "h26", text: "H26. Appropriate PPE available for hot work (cutting, welding, brazing)" },
  { value: "h27", text: "H27. Clothing and shoes worn appropriate for tasks being performed" },
  { value: "h28", text: "H28. Reflective vests used where appropriate" },
  { value: "h29", text: "H29. Barricades / warning signs used where appropriate" },
  { value: "h30", text: "H30. Heat stress prevention measures in place (cooling vests, hydration)" },
];

const SCHEMA = {
  title: "",
  showTitle: false,
  pages: [{
    name: "page1",
    elements: [

      // ── Section 1: Report Details ──
      {
        type: "panel",
        name: "section1",
        title: "1. Report Details",
        elements: [
          { type: "text", name: "reportNo", title: "Report No.", isRequired: true, readOnly: true, description: "Auto-assigned on submission" },
          { type: "text", name: "reportedBy", title: "Inspector Name / Role", isRequired: true, readOnly: true, description: "Auto-filled from your login profile" },
          { type: "text", name: "employeeId", title: "Employee ID", readOnly: true, description: "Auto-filled from your login profile" },
          { type: "text", name: "position", title: "Position / Job Title", readOnly: true, description: "Auto-filled from your login profile" },
          { type: "dropdown", name: "department", title: "Department", isRequired: true, choices: DEPARTMENTS },
          { type: "text", name: "siteLocation", title: "Site / Location", isRequired: true },
          { type: "text", name: "weekEnding", title: "Week Ending (Date)", inputType: "date", isRequired: true },
        ],
      },

      // ── Section 2: PPE Inspection Checklist ──
      {
        type: "panel",
        name: "section2",
        title: "2. PPE Inspection Checklist",
        description: "For each item, mark Yes / No / N/A and add comments where required. Categories: A. PPE Program · B. Eye/Face · C. Head · D. Foot · E. Hand · F. Hearing · G. Respiratory · H. Heat Stress / Hi-Vis / General.",
        elements: [
          {
            type: "matrixdropdown",
            name: "ppeChecklist",
            titleLocation: "hidden",
            columns: [
              {
                name: "status",
                title: "Status",
                cellType: "dropdown",
                choices: YN_NA,
                width: "100px",
                isRequired: true,
              },
              { name: "comments", title: "Comments", cellType: "text", width: "260px" },
            ],
            rows: CHECKLIST_ROWS,
          },
        ],
      },

      // ── Section 3: Corrective Actions Required ──
      {
        type: "panel",
        name: "section3",
        title: "3. Corrective Actions Required",
        description: "Log every 'No' finding from Section 2 with the corrective action, owner, due date, and status. Add rows as needed.",
        elements: [
          {
            type: "matrixdynamic",
            name: "correctiveActions",
            titleLocation: "hidden",
            columns: [
              { name: "no", title: "#", cellType: "text", width: "40px" },
              { name: "issue", title: "Issue / Non-Conformance", cellType: "text", width: "240px", isRequired: true },
              { name: "actionRequired", title: "Action Required", cellType: "text", width: "240px", isRequired: true },
              { name: "responsible", title: "Responsible", cellType: "text", width: "140px" },
              { name: "targetDate", title: "Target Date", cellType: "text", inputType: "date", width: "140px" },
              {
                name: "status",
                title: "Status",
                cellType: "dropdown",
                choices: ["Open", "In Progress", "Closed", "Overdue"],
                width: "120px",
              },
            ],
            minRowCount: 0,
            rowCount: 4,
            addRowText: "+ Add Corrective Action",
          },
        ],
      },

      // ── Section 4: Sign-off ──
      {
        type: "panel",
        name: "section4",
        title: "4. Sign-off",
        description: "Inspector signs digitally on submission. HSE Officer and Site Supervisor sign through the approval workflow.",
        elements: [
          { type: "text", name: "signoffReportedByName", title: "Inspector — Full Name", isRequired: true, readOnly: true, description: "Auto-filled from your login profile" },
          { type: "text", name: "signoffReportedByDate", title: "Inspection Date", inputType: "date", isRequired: true, readOnly: true, description: "Auto-filled with today's date" },
          { type: "text", name: "signoffSubmissionTime", title: "Submission Time", isRequired: true, readOnly: true, description: "Auto-filled with current time" },
        ],
      },

    ],
  }],
  checkErrorsMode: "onComplete",
  showPrevButton: false,
};

export default function FRM_HSE_029() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-029"
        title="PPE Weekly Inspection Checklist"
        revision="01"
        approvalDate="April 2026"
        minRole="field_worker"
        wideTable
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
