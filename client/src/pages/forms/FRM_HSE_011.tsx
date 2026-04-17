import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";
import { DEPARTMENTS } from "@/lib/formConstants";

// ── HTML table helpers ──────────────────────────────────────────────────────
const TH = `style="background:#081C2E;color:#fff;font-weight:700;font-size:12px;padding:10px 8px;text-align:center;border:1px solid #c8d0da;"`;
const TD = `style="border:1px solid #c8d0da;padding:6px 8px;font-size:12px;vertical-align:top;"`;
const INPUT = `style="width:100%;border:none;background:transparent;font-size:12px;padding:2px 4px;outline:none;"`;
const SELECT = `style="width:100%;border:none;background:transparent;font-size:12px;padding:2px 4px;outline:none;"`;

// ── Section 3: Associated Documents HTML ────────────────────────────────────
const ASSOC_DOCS_HTML = `
<div style="overflow-x:auto;">
<table style="width:100%;border-collapse:collapse;font-family:inherit;table-layout:fixed;">
  <colgroup><col style="width:25%"><col style="width:75%"></colgroup>
  <thead>
    <tr>
      <th ${TH}>Document Type</th>
      <th ${TH}>Reference / Details</th>
    </tr>
  </thead>
  <tbody id="assocDocsBody">
    ${[1,2,3,4,5,6].map(i => `
    <tr>
      <td ${TD}>
        <select ${SELECT} data-field="assocDoc_type_${i}" onchange="window.__imsSetValue('assocDoc_type_${i}',this.value)">
          <option value="">— Select —</option>
          <option>JHA No</option>
          <option>SWMS/SOP No</option>
          <option>Risk Assessment No</option>
          <option>Confined Space Permit No</option>
          <option>Isolation Certificate No</option>
          <option>Excavation Permit No</option>
        </select>
      </td>
      <td ${TD}><input ${INPUT} data-field="assocDoc_ref_${i}" onchange="window.__imsSetValue('assocDoc_ref_${i}',this.value)" /></td>
    </tr>`).join("")}
  </tbody>
</table>
</div>`;

// ── Section 4: Hazard Identification — per-hazard control measure checkboxes ─
const HAZARD_DATA: { label: string; controls: string[] }[] = [
  {
    label: "Flammable materials present",
    controls: [
      "Remove / isolate all flammable materials from work area",
      "Fire extinguisher positioned and checked",
      "Fire watch assigned and briefed",
      "Hot work permit issued",
      "No ignition sources within 10 m",
      "Flammable gas detector in use",
      "Spill containment in place"
    ]
  },
  {
    label: "Toxic substances",
    controls: [
      "SDS reviewed and available on site",
      "Appropriate PPE confirmed (respirator, gloves, goggles)",
      "Forced ventilation in place",
      "Exposure limits monitored",
      "Emergency eyewash / shower accessible",
      "Waste disposal plan confirmed",
      "Personnel trained on substance hazards"
    ]
  },
  {
    label: "Non-inert atmosphere / Low oxygen",
    controls: [
      "Continuous atmospheric gas monitoring in place",
      "Forced ventilation installed and running",
      "Standby / rescue person assigned",
      "SCBA / supplied air available",
      "Confined space entry permit issued",
      "Atmospheric readings recorded before entry",
      "Evacuation alarm tested"
    ]
  },
  {
    label: "Electrical hazards",
    controls: [
      "LOTO applied and verified",
      "Electrical isolation confirmed by authorised person",
      "Insulated tools in use",
      "Exclusion zone established",
      "Permit to work on electrical systems issued",
      "Residual voltage tested and confirmed zero",
      "Personnel hold valid electrical competency"
    ]
  },
  {
    label: "Pressure / Stored energy",
    controls: [
      "System fully depressurised and bled",
      "LOTO applied to all energy sources",
      "Pressure gauge confirmed at zero",
      "Bleed / vent valve locked open",
      "Hydraulic / pneumatic lines disconnected",
      "Spring-loaded components secured",
      "Isolation confirmed by authorised person"
    ]
  },
  {
    label: "Work at height",
    controls: [
      "Fall arrest / harness system in use",
      "Scaffold inspected and tagged",
      "Exclusion zone established below work area",
      "Tools and materials secured against falling",
      "Safe access / egress route confirmed",
      "Weather conditions assessed (wind, rain)",
      "Rescue plan in place"
    ]
  },
  {
    label: "Confined space conditions",
    controls: [
      "Confined space entry permit issued",
      "Atmospheric testing completed (O₂, LEL, H₂S, CO)",
      "Forced ventilation running continuously",
      "Standby / rescue person assigned at entry point",
      "Communication system tested",
      "Rescue equipment on standby",
      "Entry log maintained"
    ]
  },
  {
    label: "Excavation activity",
    controls: [
      "Excavation permit issued",
      "Underground services identified and marked",
      "Ground support / shoring in place",
      "Exclusion zone established",
      "Competent person inspects excavation daily",
      "Spoil kept minimum 1 m from edge",
      "Safe access / egress (ladder) provided"
    ]
  },
  {
    label: "SIMOPS (Simultaneous Operations) risk",
    controls: [
      "SIMOPS plan reviewed and approved",
      "All affected parties briefed",
      "Work sequencing confirmed",
      "Radio communication tested",
      "Exclusion zones between operations defined",
      "Dedicated SIMOPS coordinator assigned",
      "Stop-work authority communicated to all"
    ]
  },
  {
    label: "Environmental impact risk",
    controls: [
      "Spill kit on standby",
      "Secondary containment in place",
      "Waste disposal plan confirmed",
      "Drainage / waterways protected",
      "Chemical / fuel storage compliant",
      "Environmental monitoring in place",
      "Incident reporting procedure briefed"
    ]
  }
];

const ynSelect = (field: string) =>
  `<select ${SELECT} data-field="${field}" onchange="window.__imsSetValue('${field}',this.value)"><option value="">—</option><option>Y</option><option>N</option></select>`;

const ynnaSelect = (field: string) =>
  `<select ${SELECT} data-field="${field}" onchange="window.__imsSetValue('${field}',this.value)"><option value="">—</option><option>Y</option><option>N</option><option>NA</option></select>`;

// Build hazard HTML: each hazard is a 2-row block
// Row 1: hazard name | Y/N present | colspan control measures header | verified
// Row 2: (merged) | (merged) | checkboxes for each control + Other | (merged)
const buildHazardHTML = () => {
  const rows = HAZARD_DATA.map((h, i) => {
    const idx = i + 1;
    const checkboxes = h.controls.map((c, ci) => {
      const cbField = `haz_ctrl_cb_${idx}_${ci + 1}`;
      return `<label style="display:flex;align-items:flex-start;gap:6px;margin-bottom:5px;cursor:pointer;font-size:12px;">
        <input type="checkbox" data-field="${cbField}" style="margin-top:2px;accent-color:#081C2E;" onchange="window.__imsSetValue('${cbField}',this.checked?'Y':'')"> ${c}
      </label>`;
    }).join("");
    const otherField = `haz_ctrl_other_${idx}`;
    return `
    <tr style="background:${i % 2 === 0 ? '#fff' : '#f8f9fb'};">
      <td style="border:1px solid #c8d0da;padding:8px;font-size:12px;font-weight:600;vertical-align:top;width:22%;">${h.label}</td>
      <td style="border:1px solid #c8d0da;padding:6px;text-align:center;vertical-align:top;width:8%;">${ynSelect(`haz_present_${idx}`)}</td>
      <td style="border:1px solid #c8d0da;padding:8px;vertical-align:top;">
        ${checkboxes}
        <div style="display:flex;align-items:center;gap:6px;margin-top:4px;">
          <span style="font-size:11px;color:#6b7a8d;white-space:nowrap;">Other:</span>
          <input ${INPUT} data-field="${otherField}" placeholder="Specify other control measure..." onchange="window.__imsSetValue('${otherField}',this.value)" style="flex:1;border-bottom:1px solid #c8d0da;background:transparent;font-size:12px;padding:2px 4px;outline:none;" />
        </div>
      </td>
      <td style="border:1px solid #c8d0da;padding:6px;text-align:center;vertical-align:top;width:8%;">${ynSelect(`haz_verified_${idx}`)}</td>
    </tr>`;
  }).join("");

  return `
<div style="overflow-x:auto;">
<table style="width:100%;border-collapse:collapse;font-family:inherit;table-layout:fixed;">
  <colgroup><col style="width:22%"><col style="width:8%"><col><col style="width:8%"></colgroup>
  <thead>
    <tr>
      <th ${TH}>Hazard</th>
      <th ${TH}>Present Y/N</th>
      <th ${TH}>Control Measures Applied (tick all that apply)</th>
      <th ${TH}>Verified Y/N</th>
    </tr>
  </thead>
  <tbody>
    ${rows}
  </tbody>
</table>
</div>`;
};

const HAZARD_HTML = buildHazardHTML();

// ── Section 5: Gas Testing HTML ─────────────────────────────────────────────
const GAS_ROWS = [
  { test: "O₂", range: "19.5–23.5%" },
  { test: "LEL", range: "<10%" },
  { test: "H₂S", range: "<5 ppm" },
  { test: "CO", range: "<25 ppm" },
  { test: "Other", range: "" }
];

const GAS_HTML = `
<div style="overflow-x:auto;">
<table style="width:100%;border-collapse:collapse;font-family:inherit;">
  <thead>
    <tr>
      <th ${TH}>Test</th>
      <th ${TH}>Range</th>
      <th ${TH}>Time</th>
      <th ${TH}>Test 1</th>
      <th ${TH}>Test 2</th>
      <th ${TH}>Test 3</th>
      <th ${TH}>Test 4</th>
      <th ${TH}>Instr ID</th>
      <th ${TH}>Tested By/Cert</th>
    </tr>
  </thead>
  <tbody>
    ${GAS_ROWS.map((r, i) => `
    <tr>
      <td ${TD}>${r.test}</td>
      <td style="border:1px solid #c8d0da;padding:6px 8px;font-size:12px;vertical-align:middle;text-align:center;">${r.range}</td>
      <td ${TD}><input ${INPUT} data-field="gas_time_${i + 1}" onchange="window.__imsSetValue('gas_time_${i + 1}',this.value)" /></td>
      <td ${TD}><input ${INPUT} data-field="gas_t1_${i + 1}" onchange="window.__imsSetValue('gas_t1_${i + 1}',this.value)" /></td>
      <td ${TD}><input ${INPUT} data-field="gas_t2_${i + 1}" onchange="window.__imsSetValue('gas_t2_${i + 1}',this.value)" /></td>
      <td ${TD}><input ${INPUT} data-field="gas_t3_${i + 1}" onchange="window.__imsSetValue('gas_t3_${i + 1}',this.value)" /></td>
      <td ${TD}><input ${INPUT} data-field="gas_t4_${i + 1}" onchange="window.__imsSetValue('gas_t4_${i + 1}',this.value)" /></td>
      <td ${TD}><input ${INPUT} data-field="gas_instr_${i + 1}" onchange="window.__imsSetValue('gas_instr_${i + 1}',this.value)" /></td>
      <td ${TD}><input ${INPUT} data-field="gas_tester_${i + 1}" onchange="window.__imsSetValue('gas_tester_${i + 1}',this.value)" /></td>
    </tr>`).join("")}
  </tbody>
</table>
</div>`;

// ── Section 6: LOTO HTML ─────────────────────────────────────────────────────
const LOTO_HTML = `
<div style="overflow-x:auto;">
<table style="width:100%;border-collapse:collapse;font-family:inherit;">
  <thead>
    <tr>
      <th ${TH} style="width:5%">#</th>
      <th ${TH}>Equipment Isolated</th>
      <th ${TH}>Isolation Point</th>
      <th ${TH}>Method</th>
      <th ${TH} style="width:9%">Lock No</th>
      <th ${TH}>Verified By</th>
      <th ${TH} style="width:9%">Time</th>
    </tr>
  </thead>
  <tbody>
    ${[1,2,3,4].map(i => `
    <tr>
      <td style="border:1px solid #c8d0da;padding:6px 8px;font-size:12px;vertical-align:middle;text-align:center;">${i}</td>
      <td ${TD}><input ${INPUT} data-field="loto_equip_${i}" onchange="window.__imsSetValue('loto_equip_${i}',this.value)" /></td>
      <td ${TD}><input ${INPUT} data-field="loto_point_${i}" onchange="window.__imsSetValue('loto_point_${i}',this.value)" /></td>
      <td ${TD}><input ${INPUT} data-field="loto_method_${i}" onchange="window.__imsSetValue('loto_method_${i}',this.value)" /></td>
      <td ${TD}><input ${INPUT} data-field="loto_lock_${i}" onchange="window.__imsSetValue('loto_lock_${i}',this.value)" /></td>
      <td ${TD}><input ${INPUT} data-field="loto_verified_${i}" onchange="window.__imsSetValue('loto_verified_${i}',this.value)" /></td>
      <td ${TD}><input ${INPUT} data-field="loto_time_${i}" onchange="window.__imsSetValue('loto_time_${i}',this.value)" /></td>
    </tr>`).join("")}
  </tbody>
</table>
</div>`;

// ── Section 7: Safety Precautions HTML ──────────────────────────────────────
const PRECAUTIONS = [
  "Area barricaded / isolated",
  "Fire extinguisher(s) positioned",
  "Fire watch assigned",
  "Ventilation in place",
  "Personnel briefed",
  "Communication system tested",
  "PPE confirmed available",
  "Spill kit available",
  "Standby person assigned",
  "Fall protection verified",
  "Ground conditions safe",
  "Lifting plan approved"
];

const PRECAUTIONS_HTML = `
<div style="overflow-x:auto;">
<table style="width:100%;border-collapse:collapse;font-family:inherit;table-layout:fixed;">
  <colgroup><col style="width:35%"><col style="width:10%"><col style="width:55%"></colgroup>
  <thead>
    <tr>
      <th ${TH}>Precaution</th>
      <th ${TH}>Y / N / NA</th>
      <th ${TH}>Notes</th>
    </tr>
  </thead>
  <tbody>
    ${PRECAUTIONS.map((p, i) => `
    <tr>
      <td ${TD}>${p}</td>
      <td style="border:1px solid #c8d0da;padding:6px 8px;font-size:12px;vertical-align:middle;text-align:center;">${ynnaSelect(`prec_status_${i + 1}`)}</td>
      <td ${TD}><input ${INPUT} data-field="prec_notes_${i + 1}" onchange="window.__imsSetValue('prec_notes_${i + 1}',this.value)" /></td>
    </tr>`).join("")}
  </tbody>
</table>
</div>`;

// ── Collect all hidden field names for schema ────────────────────────────────
const hazardHiddenFields = HAZARD_DATA.flatMap((_, i) => {
  const idx = i + 1;
  const cbFields = _.controls.map((__, ci) =>
    ({ type: "text", name: `haz_ctrl_cb_${idx}_${ci + 1}`, visible: false })
  );
  return [
    { type: "text", name: `haz_present_${idx}`, visible: false },
    { type: "text", name: `haz_verified_${idx}`, visible: false },
    { type: "text", name: `haz_ctrl_other_${idx}`, visible: false },
    ...cbFields
  ];
});

// ── SurveyJS Schema ──────────────────────────────────────────────────────────
const SCHEMA = {
  title: "Permit to Work (PTW)",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [

        // Section 1: Permit Details
        {
          type: "panel",
          name: "section1",
          title: "1. Permit Details",
          elements: [
            { type: "text", name: "reportNo", title: "PTW Number", isRequired: true, readOnly: true, description: "Auto-assigned on submission" },
            { type: "text", name: "dateIssued", title: "Date Issued", inputType: "date", isRequired: true },
            { type: "text", name: "validFrom", title: "Valid From", inputType: "datetime-local", isRequired: true },
            { type: "text", name: "validUntil", title: "Valid Until", inputType: "datetime-local", isRequired: true },
            { type: "text", name: "siteLocation", title: "Site / Location", isRequired: true },
            { type: "text", name: "specificAreaRig", title: "Specific Area / Rig", isRequired: true },
            { type: "text", name: "requestedBy", title: "Requested By", isRequired: true },
            { type: "text", name: "company", title: "Company", isRequired: true },
            { type: "text", name: "contact", title: "Contact" },
            { type: "dropdown", name: "department", title: "Department", isRequired: true, choices: DEPARTMENTS },
            { type: "comment", name: "descriptionOfWork", title: "Description of Work", isRequired: true, rows: 3 }
          ]
        },

        // Section 2: Permit Type
        {
          type: "panel",
          name: "section2",
          title: "2. Permit Type",
          description: "Select all applicable",
          elements: [
            {
              type: "checkbox",
              name: "permitType",
              title: "Permit Type(s):",
              isRequired: true,
              hasOther: true,
              otherText: "Other (specify)",
              choices: [
                "Hot Work", "Cold Work", "Confined Space Entry", "Work at Height",
                "Electrical", "Excavation", "Lifting / Crane", "Radiography",
                "Pressurised Systems", "Breaking Containment"
              ]
            }
          ]
        },

        // Section 3: Associated Documents
        {
          type: "panel",
          name: "section3",
          title: "3. Associated Documents",
          elements: [
            { type: "html", name: "assocDocsTable", html: ASSOC_DOCS_HTML },
            ...[1,2,3,4,5,6].flatMap(i => [
              { type: "text", name: `assocDoc_type_${i}`, visible: false },
              { type: "text", name: `assocDoc_ref_${i}`, visible: false }
            ])
          ]
        },

        // Section 4: Hazard Identification (per-hazard checkboxes)
        {
          type: "panel",
          name: "section4",
          title: "4. Hazard Identification",
          description: "For each hazard present, tick Y, select all applicable control measures, then verify.",
          elements: [
            { type: "html", name: "hazardTable", html: HAZARD_HTML },
            ...hazardHiddenFields
          ]
        },

        // Section 5: Gas Testing
        {
          type: "panel",
          name: "section5",
          title: "5. Gas Testing (if applicable)",
          elements: [
            { type: "html", name: "gasTable", html: GAS_HTML },
            ...GAS_ROWS.flatMap((_, i) => [
              { type: "text", name: `gas_time_${i + 1}`, visible: false },
              { type: "text", name: `gas_t1_${i + 1}`, visible: false },
              { type: "text", name: `gas_t2_${i + 1}`, visible: false },
              { type: "text", name: `gas_t3_${i + 1}`, visible: false },
              { type: "text", name: `gas_t4_${i + 1}`, visible: false },
              { type: "text", name: `gas_instr_${i + 1}`, visible: false },
              { type: "text", name: `gas_tester_${i + 1}`, visible: false }
            ])
          ]
        },

        // Section 6: Energy Isolation / LOTO
        {
          type: "panel",
          name: "section6",
          title: "6. Energy Isolation / LOTO",
          elements: [
            { type: "html", name: "lotoTableHtml", html: LOTO_HTML },
            ...[1,2,3,4].flatMap(i => [
              { type: "text", name: `loto_equip_${i}`, visible: false },
              { type: "text", name: `loto_point_${i}`, visible: false },
              { type: "text", name: `loto_method_${i}`, visible: false },
              { type: "text", name: `loto_lock_${i}`, visible: false },
              { type: "text", name: `loto_verified_${i}`, visible: false },
              { type: "text", name: `loto_time_${i}`, visible: false }
            ])
          ]
        },

        // Section 7: Safety Precautions
        {
          type: "panel",
          name: "section7",
          title: "7. Safety Precautions",
          description: "No work shall commence until all precautions are confirmed",
          elements: [
            { type: "html", name: "precautionsTableHtml", html: PRECAUTIONS_HTML },
            ...PRECAUTIONS.flatMap((_, i) => [
              { type: "text", name: `prec_status_${i + 1}`, visible: false },
              { type: "text", name: `prec_notes_${i + 1}`, visible: false }
            ])
          ]
        },

        // Section 8: Permit Authorisation
        {
          type: "panel",
          name: "section8",
          title: "8. Permit Authorisation",
          description: "No work shall commence until all signatures obtained",
          elements: [
            { type: "text", name: "issuerName", title: "Permit Issuer — Name", isRequired: true },
            { type: "text", name: "issuerDate", title: "Permit Issuer — Date", inputType: "date", isRequired: true },
            { type: "text", name: "receiverName", title: "Permit Receiver — Name", isRequired: true },
            { type: "text", name: "receiverDate", title: "Permit Receiver — Date", inputType: "date", isRequired: true },
            { type: "text", name: "hseRepName", title: "HSE Representative — Name", isRequired: true },
            { type: "text", name: "hseRepDate", title: "HSE Representative — Date", inputType: "date", isRequired: true },
            { type: "text", name: "siteManagerName", title: "Site Manager (if High Risk) — Name" },
            { type: "text", name: "siteManagerDate", title: "Site Manager — Date", inputType: "date" }
          ]
        },

        // Section 9: Permit Extension
        {
          type: "panel",
          name: "section9",
          title: "9. Permit Extension (if applicable)",
          elements: [
            { type: "text", name: "extendedUntil", title: "Extended Until", inputType: "datetime-local" },
            { type: "text", name: "extensionReason", title: "Reason for Extension" },
            { type: "radiogroup", name: "gasRetestDone", title: "Gas Retest Done", choices: ["Y", "NA"] },
            { type: "text", name: "extensionIssuerName", title: "Extension Issuer — Name" },
            { type: "text", name: "extensionIssuerDate", title: "Extension Issuer — Date", inputType: "date" },
            { type: "text", name: "extensionReceiverName", title: "Extension Receiver — Name" },
            { type: "text", name: "extensionReceiverDate", title: "Extension Receiver — Date", inputType: "date" }
          ]
        },

        // Section 10: Permit Closure
        {
          type: "panel",
          name: "section10",
          title: "10. Permit Closure",
          elements: [
            { type: "radiogroup", name: "workCompleted", title: "Work Completed", isRequired: true, choices: ["Y", "N"] },
            { type: "radiogroup", name: "areaCleaned", title: "Area Cleaned", isRequired: true, choices: ["Y", "N"] },
            { type: "radiogroup", name: "isolationsRemoved", title: "Isolations Removed", choices: ["Y", "NA"] },
            { type: "radiogroup", name: "locksRemoved", title: "Locks Removed", choices: ["Y", "NA"] },
            { type: "radiogroup", name: "fireWatchMaintained", title: "Fire Watch Maintained", choices: ["Y", "NA"] },
            { type: "radiogroup", name: "equipmentReturned", title: "Equipment Returned", choices: ["Y", "NA"] },
            { type: "comment", name: "closureRemarks", title: "Remarks", rows: 2 },
            { type: "text", name: "closureIssuerName", title: "Permit Issuer (Closure) — Name", isRequired: true },
            { type: "text", name: "closureIssuerDate", title: "Permit Issuer (Closure) — Date", inputType: "date", isRequired: true },
            { type: "text", name: "closureReceiverName", title: "Permit Receiver (Closure) — Name", isRequired: true },
            { type: "text", name: "closureReceiverDate", title: "Permit Receiver (Closure) — Date", inputType: "date", isRequired: true }
          ]
        },

        // Section 11: Submitted By
        {
          type: "panel",
          name: "section11",
          title: "11. Submitted By",
          elements: [
            { type: "text", name: "signoffReportedByName", title: "Submitted By — Full Name", isRequired: true, readOnly: true, description: "Auto-filled from your login profile" },
            { type: "text", name: "signoffReportedByDate", title: "Submission Date", inputType: "date", isRequired: true, readOnly: true, description: "Auto-filled with today's date" },
            { type: "text", name: "signoffSubmissionTime", title: "Submission Time", isRequired: true, readOnly: true, description: "Auto-filled with current time" }
          ]
        }
      ]
    }
  ],
  checkErrorsMode: "onComplete",
  showPrevButton: false
};

// ── Wire HTML table inputs → SurveyJS values ────────────────────────────────
if (typeof window !== "undefined") {
  (window as any).__imsSetValue = (field: string, value: string) => {
    const s = (window as any).__imsCurrentSurvey || (window as any).__imsSurvey;
    if (s) s.setValue(field, value);
  };
}

export default function FRM_HSE_011() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-011"
        title="Permit to Work (PTW)"
        revision="01"
        approvalDate="09 April 2026"
        minRole="field_worker"
        wideTable={true}
        schema={SCHEMA}
        identityFields={{
          fullName: "signoffReportedByName"
        }}
      />
    </Layout>
  );
}
