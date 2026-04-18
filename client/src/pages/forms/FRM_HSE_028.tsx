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
  title: "",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [

        // ── Section 1: Report Details ──
        {
          type: "panel",
          name: "section1",
          title: "1. Report Details",
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
              type: "text",
              name: "reportedBy",
              title: "Prepared By — Full Name",
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
              type: "text",
              name: "employeeId",
              title: "Employee ID",
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
              name: "reportingMonth",
              title: "Reporting Month",
              isRequired: true,
              placeholder: "e.g., April",
            },
            {
              type: "text",
              name: "reportingYear",
              title: "Reporting Year",
              isRequired: true,
              inputType: "number",
              placeholder: "e.g., 2026",
            },
            {
              type: "text",
              name: "siteProject",
              title: "Site / Project",
              isRequired: true,
            },
            {
              type: "text",
              name: "datePrepared",
              title: "Date Prepared",
              isRequired: true,
              inputType: "date",
            },
            {
              type: "text",
              name: "distribution",
              title: "Distribution",
              readOnly: true,
              defaultValue: "HSE Manager, Site Manager, CEO, IMS File",
            },
          ],
        },

        // ── Section 2: Violation Categories Reference ──
        {
          type: "panel",
          name: "section2",
          title: "2. Violation Categories Reference",
          elements: [
            {
              type: "html",
              name: "categoryReference",
              html: `<div style="font-size:13px;line-height:1.6;font-family:'Nunito Sans',sans-serif;">
<table style="width:100%;border-collapse:collapse;font-size:12px;margin-bottom:10px">
  <thead>
    <tr style="background:#081C2E;color:#fff">
      <th style="padding:7px 10px;border:1px solid #dde3ec;text-align:left;white-space:nowrap">Code</th>
      <th style="padding:7px 10px;border:1px solid #dde3ec;text-align:left;white-space:nowrap">Category</th>
      <th style="padding:7px 10px;border:1px solid #dde3ec;text-align:left">Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="padding:6px 10px;border:1px solid #dde3ec;font-weight:700;color:#C49A28">UA</td><td style="padding:6px 10px;border:1px solid #dde3ec">Unsafe Act</td><td style="padding:6px 10px;border:1px solid #dde3ec;color:#555">Bypassing a control, not following procedure, horseplay, unauthorised entry</td></tr>
    <tr style="background:#f9fafb"><td style="padding:6px 10px;border:1px solid #dde3ec;font-weight:700;color:#C49A28">UC</td><td style="padding:6px 10px;border:1px solid #dde3ec">Unsafe Condition</td><td style="padding:6px 10px;border:1px solid #dde3ec;color:#555">Damaged equipment, poor housekeeping, missing guards, defective PPE stock</td></tr>
    <tr><td style="padding:6px 10px;border:1px solid #dde3ec;font-weight:700;color:#C49A28">PPE</td><td style="padding:6px 10px;border:1px solid #dde3ec">PPE Violation</td><td style="padding:6px 10px;border:1px solid #dde3ec;color:#555">Not wearing required PPE, wearing damaged PPE, wrong PPE for the task</td></tr>
    <tr style="background:#f9fafb"><td style="padding:6px 10px;border:1px solid #dde3ec;font-weight:700;color:#C49A28">PTW</td><td style="padding:6px 10px;border:1px solid #dde3ec">Permit-to-Work Breach</td><td style="padding:6px 10px;border:1px solid #dde3ec;color:#555">Work without valid permit, working outside permit scope, permit expired</td></tr>
    <tr><td style="padding:6px 10px;border:1px solid #dde3ec;font-weight:700;color:#C49A28">LOTO</td><td style="padding:6px 10px;border:1px solid #dde3ec">Lockout/Tagout Violation</td><td style="padding:6px 10px;border:1px solid #dde3ec;color:#555">Energising locked-out equipment, missing lock, unauthorised removal of tag</td></tr>
    <tr style="background:#f9fafb"><td style="padding:6px 10px;border:1px solid #dde3ec;font-weight:700;color:#C49A28">TRF</td><td style="padding:6px 10px;border:1px solid #dde3ec">Traffic / Driving Violation</td><td style="padding:6px 10px;border:1px solid #dde3ec;color:#555">Speeding, seatbelt, mobile phone use, unauthorised driver, reversing without spotter</td></tr>
    <tr><td style="padding:6px 10px;border:1px solid #dde3ec;font-weight:700;color:#C49A28">HK</td><td style="padding:6px 10px;border:1px solid #dde3ec">Housekeeping</td><td style="padding:6px 10px;border:1px solid #dde3ec;color:#555">Blocked access, trip hazards, untidy work area, debris around drill pad</td></tr>
    <tr style="background:#f9fafb"><td style="padding:6px 10px;border:1px solid #dde3ec;font-weight:700;color:#C49A28">ENV</td><td style="padding:6px 10px;border:1px solid #dde3ec">Environmental Violation</td><td style="padding:6px 10px;border:1px solid #dde3ec;color:#555">Spill without bund, improper waste segregation, unbunded fuel storage</td></tr>
    <tr><td style="padding:6px 10px;border:1px solid #dde3ec;font-weight:700;color:#C49A28">FIRE</td><td style="padding:6px 10px;border:1px solid #dde3ec">Fire / Hot Work</td><td style="padding:6px 10px;border:1px solid #dde3ec;color:#555">Hot work without permit, missing extinguisher, blocked escape route</td></tr>
    <tr style="background:#f9fafb"><td style="padding:6px 10px;border:1px solid #dde3ec;font-weight:700;color:#C49A28">DRG</td><td style="padding:6px 10px;border:1px solid #dde3ec">Drugs &amp; Alcohol</td><td style="padding:6px 10px;border:1px solid #dde3ec;color:#555">Positive test, refusal to test, failure to declare medication</td></tr>
    <tr><td style="padding:6px 10px;border:1px solid #dde3ec;font-weight:700;color:#C49A28">OTH</td><td style="padding:6px 10px;border:1px solid #dde3ec">Other</td><td style="padding:6px 10px;border:1px solid #dde3ec;color:#555">Any violation not covered above (specify in description)</td></tr>
  </tbody>
</table>
<div style="padding:8px 12px;background:#fffbf0;border:1px solid #f0d98a;border-radius:4px;font-size:12px;color:#5a4a1a">
  <strong>Severity Scale:</strong>&nbsp; 1 = Minor (verbal warning, no harm potential) &nbsp;|&nbsp; 2 = Moderate (written warning, low harm potential) &nbsp;|&nbsp; 3 = Major (serious harm potential, formal CAR required) &nbsp;|&nbsp; 4 = Critical (stop-work triggered, immediate escalation to CEO)
</div>
</div>`,
            },
          ],
        },

        // ── Section 3: Violation Log ──
        {
          type: "panel",
          name: "section3",
          title: "3. Violation Log",
          description: "Log each violation on a separate row. Use data from FRM-HSE-004 (HSE Observation Cards), FRM-HSE-001/002 (Incident Flash), toolbox talks, site walk-downs and audits.",
          elements: [
            {
              type: "matrixdynamic",
              name: "violationLog",
              title: "Record all violations for the month. Complete one row per violation.",
              columns: [
                { name: "no", title: "#", cellType: "text", width: "40px" },
                { name: "date", title: "Date", cellType: "text", inputType: "date", width: "120px" },
                {
                  name: "category",
                  title: "Category",
                  cellType: "dropdown",
                  width: "120px",
                  choices: ["UA", "UC", "PPE", "PTW", "LOTO", "TRF", "HK", "ENV", "FIRE", "DRG", "OTH"],
                  isRequired: true,
                },
                {
                  name: "severity",
                  title: "Severity",
                  cellType: "dropdown",
                  width: "120px",
                  choices: ["1 — Minor", "2 — Moderate", "3 — Major", "4 — Critical"],
                  isRequired: true,
                },
                { name: "description", title: "Description of Violation", cellType: "text", width: "200px", isRequired: true },
                { name: "person", title: "Person", cellType: "text", width: "120px" },
                { name: "role", title: "Role / Position", cellType: "text", width: "120px" },
                { name: "company", title: "Company", cellType: "text", width: "120px" },
                { name: "immediateAction", title: "Immediate Action", cellType: "text", width: "180px" },
                { name: "carNo", title: "CAR No.", cellType: "text", width: "100px" },
              ],
              minRowCount: 0,
              rowCount: 15,
              addRowText: "+ Add Violation",
            },
          ],
        },

        // ── Section 4: Monthly Summary — By Category ──
        {
          type: "panel",
          name: "section4",
          title: "4. Monthly Summary — By Category",
          elements: [
            {
              type: "matrixdropdown",
              name: "summaryByCategory",
              title: "Count of violations per category (this month vs previous month)",
              titleLocation: "hidden",
              columns: [
                {
                  name: "count",
                  title: "Count",
                  cellType: "text",
                  inputType: "number",
                },
                {
                  name: "reportDate",
                  title: "Date",
                  cellType: "text",
                  inputType: "date",
                  maxValueExpression: "today()",
                  minValueExpression: "dateAdd(today(), -60, 'days')",
                },
              ],
              rows: [
                { value: "ua", text: "UA — Unsafe Act" },
                { value: "uc", text: "UC — Unsafe Condition" },
                { value: "ppe", text: "PPE — PPE Violation" },
                { value: "ptw", text: "PTW — Permit-to-Work Breach" },
                { value: "loto", text: "LOTO — Lockout/Tagout" },
                { value: "trf", text: "TRF — Traffic / Driving" },
                { value: "hk", text: "HK — Housekeeping" },
                { value: "env", text: "ENV — Environmental" },
                { value: "fire", text: "FIRE — Fire / Hot Work" },
                { value: "drg", text: "DRG — Drugs & Alcohol" },
                { value: "oth", text: "OTH — Other" },
                { value: "total", text: "TOTAL" },
              ],
            },
          ],
        },

        // ── Section 5: Monthly Summary — By Severity ──
        {
          type: "panel",
          name: "section5",
          title: "5. Monthly Summary — By Severity",
          elements: [
            {
              type: "matrixdropdown",
              name: "summaryBySeverity",
              title: "Count of violations per severity level",
              titleLocation: "hidden",
              columns: [
                {
                  name: "count",
                  title: "Count",
                  cellType: "text",
                  inputType: "number",
                },
                {
                  name: "reportDate",
                  title: "Date",
                  cellType: "text",
                  inputType: "date",
                  maxValueExpression: "today()",
                  minValueExpression: "dateAdd(today(), -60, 'days')",
                },
              ],
              rows: [
                { value: "minor", text: "1 — Minor" },
                { value: "moderate", text: "2 — Moderate" },
                { value: "major", text: "3 — Major (CAR raised)" },
                { value: "critical", text: "4 — Critical (stop-work)" },
                { value: "total", text: "TOTAL" },
              ],
            },
          ],
        },

        // ── Section 6: Monthly Summary — By Department / Contractor ──
        {
          type: "panel",
          name: "section6",
          title: "6. Monthly Summary — By Department / Contractor",
          elements: [
            {
              type: "matrixdynamic",
              name: "summaryByDept",
              title: "Violations by department or contractor",
              titleLocation: "hidden",
              columns: [
                { name: "deptContractor", title: "Department / Contractor", cellType: "text", width: "220px" },
                { name: "count", title: "Count", cellType: "text", inputType: "number", width: "100px" },
                { name: "notes", title: "Notes", cellType: "text", width: "300px" },
              ],
              minRowCount: 0,
              rowCount: 9,
              addRowText: "+ Add Department / Contractor",
              defaultValue: [
                { deptContractor: "Drilling Crew A", count: "", notes: "" },
                { deptContractor: "Drilling Crew B", count: "", notes: "" },
                { deptContractor: "Geology / Sampling", count: "", notes: "" },
                { deptContractor: "Logistics / Vehicles", count: "", notes: "" },
                { deptContractor: "Maintenance", count: "", notes: "" },
                { deptContractor: "Camp Services", count: "", notes: "" },
                { deptContractor: "Visitors", count: "", notes: "" },
                { deptContractor: "Sub-contractor:", count: "", notes: "" },
                { deptContractor: "Sub-contractor:", count: "", notes: "" },
              ],
            },
          ],
        },

        // ── Section 7: Repeat Offenders / Escalation ──
        {
          type: "panel",
          name: "section7",
          title: "7. Repeat Offenders / Escalation",
          description: "List any individual or contractor who has committed more than one violation this month, or who is flagged for disciplinary escalation under the Stop Work Authority Policy and Saudi Labour Law.",
          elements: [
            {
              type: "matrixdynamic",
              name: "repeatOffenders",
              title: "Repeat offenders and escalation actions.",
              titleLocation: "hidden",
              columns: [
                { name: "nameCompany", title: "Name / Company", cellType: "text", width: "200px" },
                { name: "violationsCount", title: "Violations Count", cellType: "text", inputType: "number", width: "130px" },
                { name: "escalationAction", title: "Escalation Action", cellType: "text", width: "300px" },
              ],
              minRowCount: 0,
              rowCount: 3,
              addRowText: "+ Add Offender",
            },
          ],
        },

        // ── Section 8: Corrective Actions Raised ──
        {
          type: "panel",
          name: "section8",
          title: "8. Corrective Actions Raised",
          description: "Every Major (severity 3) and Critical (severity 4) violation must have a CAR raised in REG-SYS-002. List the CARs opened this month and their status.",
          elements: [
            {
              type: "matrixdynamic",
              name: "correctiveActions",
              title: "CARs opened this month.",
              titleLocation: "hidden",
              columns: [
                { name: "carNo", title: "CAR No.", cellType: "text", width: "100px", isRequired: true },
                { name: "linkedViolation", title: "Linked Violation / Description", cellType: "text", width: "260px", isRequired: true },
                { name: "status", title: "Status", cellType: "dropdown", width: "130px", choices: ["Open", "In Progress", "Closed", "Overdue"] },
                { name: "targetCloseDate", title: "Target Close Date", cellType: "text", inputType: "date", width: "140px" },
                { name: "owner", title: "Owner", cellType: "text", width: "140px" },
              ],
              minRowCount: 0,
              rowCount: 3,
              addRowText: "+ Add CAR",
            },
          ],
        },

        // ── Section 9: Trend Commentary and Target for Next Month ──
        {
          type: "panel",
          name: "section9",
          title: "9. Trend Commentary and Target for Next Month",
          description: "HSE Manager commentary on what the data shows (trend vs previous month, areas of concern, positive improvements, training needs) and the specific target for the coming month.",
          elements: [
            {
              type: "radiogroup",
              name: "trendVsPreviousMonth",
              title: "Trend vs Previous Month",
              isRequired: true,
              choices: ["Improving", "Stable", "Deteriorating"],
              colCount: 3,
            },
            {
              type: "text",
              name: "keyConcernArea",
              title: "Key Concern Area",
            },
            {
              type: "comment",
              name: "rootCauseThemes",
              title: "Root Cause Themes",
              rows: 3,
            },
            {
              type: "comment",
              name: "trainingPlanned",
              title: "Training / Toolbox Talks Planned",
              rows: 2,
            },
            {
              type: "comment",
              name: "targetNextMonth",
              title: "Target for Next Month (measurable)",
              rows: 2,
            },
            {
              type: "comment",
              name: "hseManagerCommentary",
              title: "HSE Manager Commentary",
              rows: 5,
            },
          ],
        },

        // ── Section 10: Submitted By ──
        {
          type: "panel",
          name: "section10",
          title: "10. Submitted By",
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

export default function FRM_HSE_028() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-028"
        title="Monthly HSE Violation Report"
        revision="02"
        approvalDate="11 April 2026"
        minRole="hse_manager"
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
