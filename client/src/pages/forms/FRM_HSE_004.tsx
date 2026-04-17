/**
 * TE-IMS-FRM-HSE-004 — First Aid Kit Register and Checklist
 * Source: TE-IMS-FRM-HSE-004_Rev01-FirstAidKitRegisterandChecklist.docx
 *
 * All three tables (Contents Checklist, Tamper Seal, Incident Log) are rendered
 * as pure HTML matching the DOCX layout exactly.
 *
 * Data capture strategy:
 *  - HTML inputs use data-field attributes
 *  - On change, they update hidden SurveyJS text/comment fields via
 *    window.__imsCurrentSurvey (set by ImsForm on mount)
 *  - Hidden fields are type:"text" with visible:false — captured in sender.data on submit
 *
 * ImsForm exposes the survey model on window.__imsCurrentSurvey (added via patch below).
 * If that is not yet available, inputs fall back to storing in sessionStorage and
 * the onComplete handler merges them in.
 */

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

// ── Items data ────────────────────────────────────────────────────────────────
const ITEMS = [
  { cat: "A. Wound Care & Dressings", items: [
    { no: 1,  desc: "Wound cleaner / antiseptic solution (100 ml)", qty: 1 },
    { no: 2,  desc: "Swabs for cleaning wounds", qty: 10 },
    { no: 3,  desc: "Cotton wool for padding (100 g)", qty: 1 },
    { no: 4,  desc: "Sterile gauze pads (assorted sizes)", qty: 10 },
    { no: 5,  desc: "Adhesive dressing strips (assorted, packet)", qty: 1 },
    { no: 6,  desc: "Non-allergic adhesive strip (25 mm x 3 m)", qty: 1 },
    { no: 7,  desc: "Elastic adhesive roll (25 mm x 3 m)", qty: 1 },
    { no: 8,  desc: "First aid dressing No. 3 (medium)", qty: 2 },
    { no: 9,  desc: "First aid dressing No. 5 (large)", qty: 2 },
    { no: 10, desc: "Roller bandage 75 mm x 5 m", qty: 4 },
    { no: 11, desc: "Roller bandage 100 mm x 5 m", qty: 4 },
    { no: 12, desc: "Triangular bandages", qty: 4 },
  ]},
  { cat: "B. Burn & Eye Treatment", items: [
    { no: 13, desc: "Burn gel / hydrogel dressing", qty: 2 },
    { no: 14, desc: "Sterile burn sheet (10 x 10 cm)", qty: 1 },
    { no: 15, desc: "Eye pad with shield or tape", qty: 2 },
    { no: 16, desc: "Saline eye wash bottle (500 ml)", qty: 1 },
  ]},
  { cat: "C. Instruments & Accessories", items: [
    { no: 17, desc: "Scissors (minimum 100 mm, blunt/sharp)", qty: 1 },
    { no: 18, desc: "Forceps / tweezers (for splinters)", qty: 1 },
    { no: 19, desc: "Safety pins (set)", qty: 1 },
    { no: 20, desc: "Adhesive tape roll (25 mm)", qty: 1 },
    { no: 21, desc: "SAM splint (or equivalent flexible splint)", qty: 2 },
    { no: 22, desc: "Biohazard disposal bag", qty: 2 },
  ]},
  { cat: "D. Protection & Resuscitation", items: [
    { no: 23, desc: "Disposable nitrile gloves (pairs, L & M)", qty: 4 },
    { no: 24, desc: "CPR pocket mask / face shield", qty: 1 },
    { no: 25, desc: "Rescue / emergency blanket (foil)", qty: 1 },
    { no: 26, desc: "Emergency contact card / first aid guide", qty: 1 },
  ]},
  { cat: "E. KSA / Site-Specific — Heat & Remote Operations", items: [
    { no: 27, desc: "Oral Rehydration Salts (ORS) sachets", qty: 6 },
    { no: 28, desc: "Instant cold / cooling packs", qty: 4 },
    { no: 29, desc: "Thermal blanket (for heat casualty cooling)", qty: 1 },
    { no: 30, desc: "Tourniquet (CAT or equivalent)", qty: 1 },
    { no: 31, desc: "Pressure / Israeli bandage (emergency)", qty: 1 },
    { no: 32, desc: "Straight splints (rigid)", qty: 2 },
    { no: 33, desc: "Sunscreen SPF 50+ (individual sachets)", qty: 4 },
  ]},
];

// ── Build unified HTML table ──────────────────────────────────────────────────
function buildChecklistHTML(): string {
  const conditionOptions = ["", "OK", "R – Replace", "E – Expired", "D – Damaged", "M – Missing"]
    .map(v => `<option value="${v}">${v}</option>`)
    .join("");

  let rows = "";
  for (const group of ITEMS) {
    rows += `<tr class="fak-cat"><td colspan="7">${group.cat}</td></tr>`;
    for (const item of group.items) {
      rows += `
        <tr>
          <td class="fak-no">${item.no}</td>
          <td class="fak-desc">${item.desc}</td>
          <td class="fak-qty">${item.qty}</td>
          <td class="fak-input"><input type="text" class="fak-in" data-field="item_${item.no}_actualQty" placeholder="—" /></td>
          <td class="fak-input"><input type="date" class="fak-in" data-field="item_${item.no}_expiryDate" /></td>
          <td class="fak-input"><select class="fak-in" data-field="item_${item.no}_condition">${conditionOptions}</select></td>
          <td class="fak-input"><input type="text" class="fak-in" data-field="item_${item.no}_remarks" placeholder="—" /></td>
        </tr>`;
    }
  }

  return `
<style>
  .fak-wrap { overflow-x:auto; }
  .fak-tbl { width:100%; border-collapse:collapse; font-size:13px; font-family:'Nunito Sans',sans-serif; }
  .fak-tbl th { background:#081C2E; color:#C49A28; padding:8px 10px; text-align:center; font-weight:700; border:1px solid #b0b8c4; white-space:nowrap; }
  .fak-tbl td { padding:5px 8px; border:1px solid #dde3ec; vertical-align:middle; }
  .fak-tbl tr:nth-child(even) td { background:#f7f9fc; }
  .fak-cat td { background:#081C2E !important; color:#fff; font-weight:700; padding:6px 10px; }
  .fak-no  { width:36px; text-align:center; }
  .fak-qty { width:60px; text-align:center; }
  .fak-input { width:110px; }
  .fak-in { width:100%; padding:3px 5px; border:1px solid #ccc; border-radius:3px; font-size:12px; background:#fff; box-sizing:border-box; }
  select.fak-in { cursor:pointer; }
  .fak-note { font-size:12px; color:#555; margin-top:8px; font-style:italic; }
</style>
<div class="fak-wrap">
<table class="fak-tbl" id="fakChecklist">
  <thead>
    <tr>
      <th class="fak-no">#</th>
      <th class="fak-desc">Item Description</th>
      <th class="fak-qty">Req. Qty</th>
      <th class="fak-input">Actual Qty</th>
      <th class="fak-input">Expiry Date</th>
      <th class="fak-input">Condition</th>
      <th class="fak-input">Remarks</th>
    </tr>
  </thead>
  <tbody>${rows}</tbody>
</table>
</div>
<p class="fak-note">Condition Key: &nbsp; OK = Serviceable &nbsp;|&nbsp; R = Replace &nbsp;|&nbsp; E = Expired &nbsp;|&nbsp; D = Damaged &nbsp;|&nbsp; M = Missing</p>
<script>
(function() {
  function syncField(el) {
    var field = el.getAttribute('data-field');
    var val = el.value;
    // Store in sessionStorage keyed by field name for ImsForm to pick up
    try { sessionStorage.setItem('hse004_' + field, val); } catch(e) {}
    // Also try to update SurveyJS directly if survey is available
    var s = window.__imsCurrentSurvey;
    if (s && s.getQuestionByName) {
      var q = s.getQuestionByName('checklistData');
      if (q) {
        var data = {};
        try { data = JSON.parse(q.value || '{}'); } catch(e) {}
        data[field] = val;
        s.setValue('checklistData', JSON.stringify(data));
      }
    }
  }
  document.addEventListener('change', function(e) {
    var el = e.target;
    if (el && el.getAttribute && el.getAttribute('data-field')) syncField(el);
  });
  document.addEventListener('input', function(e) {
    var el = e.target;
    if (el && el.getAttribute && el.getAttribute('data-field')) syncField(el);
  });
})();
</script>`;
}

// ── Tamper seal HTML ──────────────────────────────────────────────────────────
const TAMPER_HTML = `
<style>
  .seal-tbl { width:100%; border-collapse:collapse; font-size:13px; font-family:'Nunito Sans',sans-serif; }
  .seal-tbl td { padding:8px 12px; border:1px solid #dde3ec; vertical-align:middle; }
  .seal-label { font-weight:600; width:220px; }
  .seal-opts { display:flex; gap:20px; align-items:center; }
  .seal-opts label { display:flex; align-items:center; gap:6px; cursor:pointer; font-size:13px; }
</style>
<table class="seal-tbl">
  <tbody>
    <tr>
      <td class="seal-label">Tamper-evident seal intact?</td>
      <td>
        <div class="seal-opts">
          <label><input type="radio" name="sealIntact" value="Yes" data-field="sealIntact" /> Yes</label>
          <label><input type="radio" name="sealIntact" value="No"  data-field="sealIntact" /> No</label>
          <label><input type="radio" name="sealIntact" value="N/A" data-field="sealIntact" /> N/A</label>
        </div>
      </td>
    </tr>
  </tbody>
</table>
<script>
(function() {
  document.addEventListener('change', function(e) {
    var el = e.target;
    if (el && el.name === 'sealIntact') {
      try { sessionStorage.setItem('hse004_sealIntact', el.value); } catch(err) {}
      var s = window.__imsCurrentSurvey;
      if (s && s.setValue) s.setValue('sealIntact', el.value);
    }
  });
})();
</script>`;

// ── Incident log HTML ─────────────────────────────────────────────────────────
function buildIncidentLogHTML(): string {
  let rows = "";
  for (let i = 1; i <= 5; i++) {
    rows += `
      <tr>
        <td><input type="date"  class="il-in" data-log="${i}" data-col="date" /></td>
        <td><input type="text"  class="il-in" data-log="${i}" data-col="injuryType" /></td>
        <td><input type="text"  class="il-in" data-log="${i}" data-col="firstAidGiven" /></td>
        <td><input type="text"  class="il-in" data-log="${i}" data-col="itemsUsed" /></td>
        <td><input type="text"  class="il-in" data-log="${i}" data-col="injuredPerson" /></td>
        <td><input type="text"  class="il-in" data-log="${i}" data-col="firstAider" /></td>
        <td style="text-align:center">
          <select class="il-in" data-log="${i}" data-col="investigationRequired">
            <option value=""></option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </td>
        <td><input type="text" class="il-in" data-log="${i}" data-col="referenceNo" /></td>
      </tr>`;
  }

  return `
<style>
  .il-wrap { overflow-x:auto; }
  .il-tbl { width:100%; border-collapse:collapse; font-size:13px; font-family:'Nunito Sans',sans-serif; }
  .il-tbl th { background:#081C2E; color:#C49A28; padding:8px 10px; text-align:center; font-weight:700; border:1px solid #b0b8c4; white-space:nowrap; }
  .il-tbl td { padding:4px 6px; border:1px solid #dde3ec; vertical-align:middle; }
  .il-tbl tr:nth-child(even) td { background:#f7f9fc; }
  .il-in { width:100%; padding:4px 5px; border:1px solid #ccc; border-radius:3px; font-size:12px; background:#fff; box-sizing:border-box; }
</style>
<div class="il-wrap">
<table class="il-tbl" id="incidentLogTable">
  <thead>
    <tr>
      <th style="width:100px">Date</th>
      <th>Injury Type</th>
      <th>First Aid Given</th>
      <th>Items Used</th>
      <th>Injured Person</th>
      <th>First Aider</th>
      <th style="width:70px">Inv. Y/N</th>
      <th style="width:90px">Ref. No.</th>
    </tr>
  </thead>
  <tbody>${rows}</tbody>
</table>
</div>
<script>
(function() {
  function syncLog() {
    var rows = [];
    var tbl = document.getElementById('incidentLogTable');
    if (!tbl) return;
    var trs = tbl.querySelectorAll('tbody tr');
    trs.forEach(function(tr) {
      var row = {};
      tr.querySelectorAll('[data-col]').forEach(function(el) {
        row[el.getAttribute('data-col')] = el.value;
      });
      rows.push(row);
    });
    var val = JSON.stringify(rows);
    try { sessionStorage.setItem('hse004_incidentLog', val); } catch(e) {}
    var s = window.__imsCurrentSurvey;
    if (s && s.setValue) s.setValue('incidentLog', val);
  }
  document.addEventListener('change', function(e) {
    if (e.target && e.target.closest && e.target.closest('#incidentLogTable')) syncLog();
  });
  document.addEventListener('input', function(e) {
    if (e.target && e.target.closest && e.target.closest('#incidentLogTable')) syncLog();
  });
})();
</script>`;
}

const SCHEMA = {
  title: "",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [

        // ── Section 1: Kit Identification ────────────────────────────────────
        {
          type: "panel",
          name: "section1_kit_identification",
          title: "1. Kit Identification",
          elements: [
            {
              type: "text",
              name: "reportNo",
              title: "Inspection Report No.",
              isRequired: true,
              readOnly: true,
              description: "Auto-assigned on submission",
            },
            {
              type: "text",
              name: "inspectorName",
              title: "Inspector Full Name (First Aider)",
              isRequired: true,
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "employeeId",
              title: "Employee ID",
              isRequired: true,
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
            {
              type: "text",
              name: "position",
              title: "Position / Job Title",
              readOnly: true,
              description: "Auto-filled from your login profile",
            },
            {
              type: "dropdown",
              name: "department",
              title: "Department",
              isRequired: true,
              choices: DEPARTMENT_LIST,
            },
            {
              type: "text",
              name: "kitId",
              title: "Kit ID / Reference No.",
              isRequired: true,
              placeholder: "e.g. FAK-001, FAK-DRILL-A",
            },
            {
              type: "text",
              name: "location",
              title: "Location / Site",
              isRequired: true,
              placeholder: "e.g. Drill Pad 3, Site Office, Core Yard",
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
              description: "Inspection frequency: Monthly",
            },
          ],
        },

        // ── Section 2: Kit Contents Checklist ────────────────────────────────
        {
          type: "panel",
          name: "section2_contents",
          title: "2. First Aid Kit Contents — Inspection Checklist",
          description:
            "Inspect all items. Record actual quantity, expiry date (where applicable), and condition. Mark any item requiring action in the Remarks column.",
          elements: [
            {
              type: "html",
              name: "checklistTable",
              html: buildChecklistHTML(),
            },
            // Hidden field — captures serialised checklist data from HTML inputs
            {
              type: "text",
              name: "checklistData",
              visible: false,
            },
          ],
        },

        // ── Section 3: Tamper-Evident Seal ───────────────────────────────────
        {
          type: "panel",
          name: "section3_seal",
          title: "3. Tamper-Evident Seal",
          elements: [
            {
              type: "html",
              name: "sealTable",
              html: TAMPER_HTML,
            },
            // Hidden field — captures seal value from HTML radio
            {
              type: "text",
              name: "sealIntact",
              visible: false,
            },
          ],
        },

        // ── Section 4: Incident Log ───────────────────────────────────────────
        {
          type: "panel",
          name: "section4_incident_log",
          title: "4. Incident Log",
          description:
            "Record all first aid incidents where items from this kit were used. Reference the corresponding investigation report number where applicable.",
          elements: [
            {
              type: "html",
              name: "incidentLogTable",
              html: buildIncidentLogHTML(),
            },
            // Hidden field — captures serialised incident log rows from HTML inputs
            {
              type: "text",
              name: "incidentLog",
              visible: false,
            },
          ],
        },

        // ── Section 5: Inspector Remarks ─────────────────────────────────────
        {
          type: "panel",
          name: "section5_remarks",
          title: "5. Inspector Remarks",
          elements: [
            {
              type: "comment",
              name: "remarks",
              title: "Remarks / Observations",
              rows: 3,
              placeholder: "Note any deficiencies, actions required, or general observations.",
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

        // ── Section 6: Submitted By ───────────────────────────────────────────
        {
          type: "panel",
          name: "section6_submitted_by",
          title: "6. Submitted By",
          elements: [
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
              inputType: "date",
              isRequired: true,
              readOnly: true,
              description: "Auto-filled with today's date",
            },
            {
              type: "text",
              name: "signoffSubmissionTime",
              title: "Submission Time",
              isRequired: true,
              readOnly: true,
              description: "Auto-filled with current time",
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
        wideTable
        schema={SCHEMA}
        identityFields={{
          fullName: "inspectorName",
          employeeId: "employeeId",
          department: "department",
          position: "position",
        }}
      />
    </Layout>
  );
}
