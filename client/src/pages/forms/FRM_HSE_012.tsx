import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";
import { DEPARTMENTS } from "@/lib/formConstants";

// ── Build PPE checklist HTML statically (no JS required) ─────────────────────
const PPE_CATEGORIES: { label: string; items: [number, string][] }[] = [
  {
    label: "1. General PPE Program Compliance",
    items: [
      [1, "Hazard assessment complete and documented"],
      [2, "PPE selection based upon hazard assessment"],
      [3, "Review of employee-owned PPE complete"],
      [4, "Defective or damaged PPE removed from use"],
      [5, "PPE training complete and documented"],
    ],
  },
  {
    label: "2. Eye & Face Protection",
    items: [
      [6, "Eye and face protection appropriate to the hazard"],
      [7, "Side protectors used where flying object hazards exist"],
      [8, "Eye protection compatible with prescription lenses"],
      [9, "Filter lenses with appropriate shade number for light radiation"],
      [10, "Maintained per manufacturer recommendations"],
    ],
  },
  {
    label: "3. Head Protection",
    items: [
      [11, "Hard hats used where potential for head injury from falling objects"],
      [12, "Hard hats used where potential for contact with electrical conductors"],
      [13, "Maintained per manufacturer recommendations"],
    ],
  },
  {
    label: "4. Hearing Protection",
    items: [
      [14, "Hearing protection available and used in high-noise areas (>85 dB)"],
      [15, "Type appropriate to noise level (earplugs / earmuffs)"],
      [16, "Maintained per manufacturer recommendations"],
    ],
  },
  {
    label: "5. Respiratory Protection",
    items: [
      [17, "RPE available for dusty, fume, or vapour environments"],
      [18, "Correct filter type selected for the specific hazard"],
      [19, "Fit-tested and maintained per manufacturer recommendations"],
    ],
  },
  {
    label: "6. Foot Protection",
    items: [
      [20, "Appropriate for protection from falling or rolling objects"],
      [21, "Appropriate for protection from objects piercing the sole"],
      [22, "Appropriate for protection from electrical conductors"],
      [23, "Maintained per manufacturer recommendations"],
    ],
  },
  {
    label: "7. Hand Protection",
    items: [
      [24, "Hand protection appropriate to the hazard"],
      [25, "Maintained per manufacturer recommendations"],
    ],
  },
  {
    label: "8. Fall Protection",
    items: [
      [26, "Harnesses and lanyards available for work at height"],
      [27, "Anchor points inspected and load-rated"],
      [28, "Maintained per manufacturer recommendations"],
    ],
  },
  {
    label: "9. High-Visibility & Heat Protection",
    items: [
      [29, "Hi-vis vests / clothing worn in vehicle interaction zones"],
      [30, "Sun and heat protection measures in place (shade, cooling, hydration)"],
      [31, "Clothing appropriate for weather conditions and task"],
    ],
  },
  {
    label: "10. General / Task-Specific",
    items: [
      [32, "Appropriate PPE available for hot work (cutting, welding, brazing)"],
      [33, "PPE storage area clean, accessible, and clearly marked"],
      [34, "All PPE compliant with applicable standards (EN / ANSI / SASO)"],
    ],
  },
];

function buildChecklistRows(): string {
  return PPE_CATEGORIES.map((cat) => {
    const catRow = `<tr><td colspan="6" style="padding:7px 10px;background:#1a3550;color:#C49A28;font-weight:700;font-size:12px;border:1px solid #2a3f55;letter-spacing:0.05em;">${cat.label}</td></tr>`;
    const itemRows = cat.items
      .map(([n, desc], idx) => {
        const bg = idx % 2 === 0 ? "#ffffff" : "#f8f9fb";
        return `<tr style="background:${bg};">
  <td style="padding:7px 6px;text-align:center;border:1px solid #e0e4ea;color:#6b7a8d;font-size:12px;">${n}</td>
  <td style="padding:7px 8px;border:1px solid #e0e4ea;color:#081C2E;font-size:13px;">${desc}</td>
  <td style="padding:4px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="ppe_item_${n}" value="Y" style="accent-color:#081C2E;width:16px;height:16px;cursor:pointer;"/></td>
  <td style="padding:4px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="ppe_item_${n}" value="N" style="accent-color:#d97706;width:16px;height:16px;cursor:pointer;"/></td>
  <td style="padding:4px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="ppe_item_${n}" value="NA" style="accent-color:#6b7a8d;width:16px;height:16px;cursor:pointer;"/></td>
  <td style="padding:4px 6px;border:1px solid #e0e4ea;"><input type="text" placeholder="Comments..." style="width:100%;border:none;background:transparent;font-size:12px;color:#081C2E;outline:none;padding:2px 4px;"/></td>
</tr>`;
      })
      .join("");
    return catRow + itemRows;
  }).join("");
}

const CHECKLIST_HTML = `
<table style="width:100%;border-collapse:collapse;table-layout:fixed;font-size:13px;">
  <colgroup>
    <col style="width:4%"/>
    <col style="width:46%"/>
    <col style="width:7%"/>
    <col style="width:7%"/>
    <col style="width:7%"/>
    <col style="width:29%"/>
  </colgroup>
  <thead>
    <tr style="background:#081C2E;color:#fff;">
      <th style="padding:8px 6px;text-align:center;border:1px solid #2a3f55;">#</th>
      <th style="padding:8px 6px;text-align:left;border:1px solid #2a3f55;">Description</th>
      <th style="padding:8px 6px;text-align:center;border:1px solid #2a3f55;">Y</th>
      <th style="padding:8px 6px;text-align:center;border:1px solid #2a3f55;">N</th>
      <th style="padding:8px 6px;text-align:center;border:1px solid #2a3f55;">N/A</th>
      <th style="padding:8px 6px;text-align:left;border:1px solid #2a3f55;">Comments</th>
    </tr>
  </thead>
  <tbody>
    ${buildChecklistRows()}
  </tbody>
</table>
`;

// ── Non-Conformance Table (static rows) ──────────────────────────────────────
const NC_TABLE_HTML = `
<table style="width:100%;border-collapse:collapse;table-layout:fixed;font-size:13px;">
  <colgroup>
    <col style="width:4%"/>
    <col style="width:27%"/>
    <col style="width:30%"/>
    <col style="width:20%"/>
    <col style="width:19%"/>
  </colgroup>
  <thead>
    <tr style="background:#081C2E;color:#fff;">
      <th style="padding:8px 6px;text-align:center;border:1px solid #2a3f55;">#</th>
      <th style="padding:8px 6px;text-align:left;border:1px solid #2a3f55;">Non-Conformance</th>
      <th style="padding:8px 6px;text-align:left;border:1px solid #2a3f55;">Corrective Action</th>
      <th style="padding:8px 6px;text-align:left;border:1px solid #2a3f55;">Responsible</th>
      <th style="padding:8px 6px;text-align:left;border:1px solid #2a3f55;">Due Date</th>
    </tr>
  </thead>
  <tbody>
    ${[1, 2, 3, 4]
      .map(
        (n, idx) => `<tr style="background:${idx % 2 === 0 ? "#ffffff" : "#f8f9fb"};">
      <td style="padding:6px;text-align:center;border:1px solid #e0e4ea;color:#6b7a8d;">${n}</td>
      <td style="padding:4px 6px;border:1px solid #e0e4ea;"><input type="text" style="width:100%;border:none;background:transparent;font-size:12px;color:#081C2E;outline:none;padding:2px 4px;" placeholder="Describe non-conformance..."/></td>
      <td style="padding:4px 6px;border:1px solid #e0e4ea;"><input type="text" style="width:100%;border:none;background:transparent;font-size:12px;color:#081C2E;outline:none;padding:2px 4px;" placeholder="Corrective action..."/></td>
      <td style="padding:4px 6px;border:1px solid #e0e4ea;"><input type="text" style="width:100%;border:none;background:transparent;font-size:12px;color:#081C2E;outline:none;padding:2px 4px;" placeholder="Name..."/></td>
      <td style="padding:4px 6px;border:1px solid #e0e4ea;"><input type="date" style="width:100%;border:none;background:transparent;font-size:12px;color:#081C2E;outline:none;padding:2px 4px;"/></td>
    </tr>`
      )
      .join("")}
  </tbody>
</table>
`;

const SCHEMA = {
  title: "",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        // ── Section 1: Report Details ────────────────────────────────────────
        {
          type: "panel",
          name: "section_report_details",
          title: "1. Report Details",
          elements: [
            { type: "text", name: "reportNo", title: "Report No.", isRequired: true, readOnly: true, description: "Auto-assigned" },
            { type: "text", name: "inspectionDate", title: "Inspection Date", inputType: "date", isRequired: true },
            { type: "text", name: "weekNo", title: "Week No.", isRequired: true },
            { type: "text", name: "locationSite", title: "Location / Site", isRequired: true },
            { type: "dropdown", name: "department", title: "Area / Department", isRequired: true, choices: DEPARTMENTS },
            { type: "text", name: "reportedBy", title: "Inspector Name", isRequired: true, readOnly: true, description: "Auto-filled from your login profile" },
            { type: "text", name: "employeeId", title: "Employee ID", isRequired: true, readOnly: true, description: "Auto-filled from your login profile" },
            { type: "text", name: "position", title: "Position / Job Title", readOnly: true, description: "Auto-filled from your login profile" },
          ],
        },

        // ── Section 2: PPE Inspection Checklist ─────────────────────────────
        {
          type: "panel",
          name: "section_checklist",
          title: "2. PPE Inspection Checklist",
          elements: [
            { type: "html", name: "ppeChecklistTable", html: CHECKLIST_HTML },
          ],
        },

        // ── Section 3: Non-Conformances & Corrective Actions ────────────────
        {
          type: "panel",
          name: "section_nc",
          title: "3. Non-Conformances & Corrective Actions",
          elements: [
            { type: "html", name: "ncTable", html: NC_TABLE_HTML },
          ],
        },

        // ── Section 4: Overall Inspection Result ────────────────────────────
        {
          type: "panel",
          name: "section_result",
          title: "4. Overall Inspection Result",
          elements: [
            {
              type: "radiogroup",
              name: "overallResult",
              title: "Overall Result",
              isRequired: true,
              choices: [
                { value: "satisfactory", text: "Satisfactory" },
                { value: "requires_corrective_action", text: "Requires Corrective Action" },
                { value: "unsatisfactory", text: "Unsatisfactory" },
              ],
              colCount: 3,
            },
            {
              type: "text",
              name: "additionalComments",
              title: "Additional Comments",
              description: "Optional — any observations not captured above",
            },
          ],
        },

        // ── Section 5: HSE Officer Review ───────────────────────────────────
        {
          type: "panel",
          name: "section_hse_review",
          title: "5. HSE Officer Review",
          elements: [
            { type: "text", name: "hseOfficerName", title: "HSE Officer Name" },
            { type: "text", name: "hseOfficerDate", title: "Review Date", inputType: "date" },
            { type: "text", name: "hseOfficerComments", title: "HSE Officer Comments" },
          ],
        },

        // ── Section 6: Submitted By ──────────────────────────────────────────
        {
          type: "panel",
          name: "section_signoff",
          title: "6. Submitted By",
          elements: [
            { type: "text", name: "signoffReportedByName", title: "Submitted By — Full Name", isRequired: true, readOnly: true, description: "Auto-filled from your login profile" },
            { type: "text", name: "signoffReportedByDate", title: "Submission Date", inputType: "date", isRequired: true, readOnly: true, description: "Auto-filled with today's date" },
            { type: "text", name: "signoffSubmissionTime", title: "Submission Time", isRequired: true, readOnly: true, description: "Auto-filled with current time" },
          ],
        },
      ],
    },
  ],
  checkErrorsMode: "onComplete",
  showPrevButton: false,
};

export default function FRM_HSE_012() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-012"
        title="PPE Issue and Inspection Checklist"
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
