import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";

const SCHEMA = {
  title: "Monthly HSE Violation Report",
  showTitle: false,
  pages: [
    {
      name: "page1",
      elements: [
        // ── Section 1: Report Details ──────────────────────────────────────────
        {
          type: "panel",
          name: "section1",
          title: "1. Report Details",
          elements: [
            {
              type: "text",
              name: "reportingMonth",
              title: "Reporting Month",
              isRequired: true,
              placeholder: "e.g., April"
            },
            {
              type: "text",
              name: "reportingYear",
              title: "Reporting Year",
              inputType: "number",
              isRequired: true,
              placeholder: "e.g., 2026"
            },
            {
              type: "text",
              name: "siteProject",
              title: "Site / Project",
              isRequired: true
            },
            {
              type: "text",
              name: "preparedBy",
              title: "Prepared By — Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "preparedByPosition",
              title: "Prepared By — Position",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "datePrepared",
              title: "Date Prepared",
              inputType: "date",
              readOnly: true,
              description: "Auto-filled with today's date"
            }
          ]
        },

        // ── Section 2: Violation Category Reference ───────────────────────────
        {
          type: "panel",
          name: "section2",
          title: "2. Violation Categories Reference",
          elements: [
            {
              type: "html",
              name: "categoryReference",
              html: `<div style="font-size:13px;line-height:1.6">
<p style="margin-bottom:8px"><strong>Use the category codes below when logging violations in Section 3.</strong> Severity is rated using the TEMC HSE severity scale (aligned with ISO 45001 risk criteria).</p>
<p style="margin-bottom:8px"><strong>Severity scale:</strong> 1 = Minor (verbal warning, no harm potential) &nbsp;|&nbsp; 2 = Moderate (written warning, low harm potential) &nbsp;|&nbsp; 3 = Major (serious harm potential, formal CAR required) &nbsp;|&nbsp; 4 = Critical (stop-work triggered, immediate escalation to CEO)</p>
<table style="width:100%;border-collapse:collapse;font-size:12px">
  <thead><tr style="background:#081C2E;color:#fff"><th style="padding:6px 8px;border:1px solid #dde3ec;text-align:left">Code</th><th style="padding:6px 8px;border:1px solid #dde3ec;text-align:left">Category</th><th style="padding:6px 8px;border:1px solid #dde3ec;text-align:left">Examples</th></tr></thead>
  <tbody>
    <tr><td style="padding:5px 8px;border:1px solid #dde3ec"><strong>UA</strong></td><td style="padding:5px 8px;border:1px solid #dde3ec">Unsafe Act</td><td style="padding:5px 8px;border:1px solid #dde3ec">Bypassing a control, not following procedure, horseplay, unauthorised entry</td></tr>
    <tr style="background:#f9fafb"><td style="padding:5px 8px;border:1px solid #dde3ec"><strong>UC</strong></td><td style="padding:5px 8px;border:1px solid #dde3ec">Unsafe Condition</td><td style="padding:5px 8px;border:1px solid #dde3ec">Damaged equipment, poor housekeeping, missing guards, defective PPE stock</td></tr>
    <tr><td style="padding:5px 8px;border:1px solid #dde3ec"><strong>PPE</strong></td><td style="padding:5px 8px;border:1px solid #dde3ec">PPE Violation</td><td style="padding:5px 8px;border:1px solid #dde3ec">Not wearing required PPE, wearing damaged PPE, wrong PPE for the task</td></tr>
    <tr style="background:#f9fafb"><td style="padding:5px 8px;border:1px solid #dde3ec"><strong>PTW</strong></td><td style="padding:5px 8px;border:1px solid #dde3ec">Permit-to-Work Breach</td><td style="padding:5px 8px;border:1px solid #dde3ec">Work without valid permit, working outside permit scope, permit expired</td></tr>
    <tr><td style="padding:5px 8px;border:1px solid #dde3ec"><strong>LOTO</strong></td><td style="padding:5px 8px;border:1px solid #dde3ec">Lockout/Tagout Violation</td><td style="padding:5px 8px;border:1px solid #dde3ec">Energising locked-out equipment, missing lock, unauthorised removal of tag</td></tr>
    <tr style="background:#f9fafb"><td style="padding:5px 8px;border:1px solid #dde3ec"><strong>TRF</strong></td><td style="padding:5px 8px;border:1px solid #dde3ec">Traffic / Driving Violation</td><td style="padding:5px 8px;border:1px solid #dde3ec">Speeding, seatbelt, mobile phone use, unauthorised driver, reversing without spotter</td></tr>
    <tr><td style="padding:5px 8px;border:1px solid #dde3ec"><strong>HK</strong></td><td style="padding:5px 8px;border:1px solid #dde3ec">Housekeeping</td><td style="padding:5px 8px;border:1px solid #dde3ec">Blocked access, trip hazards, untidy work area, debris around drill pad</td></tr>
    <tr style="background:#f9fafb"><td style="padding:5px 8px;border:1px solid #dde3ec"><strong>ENV</strong></td><td style="padding:5px 8px;border:1px solid #dde3ec">Environmental Violation</td><td style="padding:5px 8px;border:1px solid #dde3ec">Spill without bund, improper waste segregation, unbunded fuel storage</td></tr>
    <tr><td style="padding:5px 8px;border:1px solid #dde3ec"><strong>FIRE</strong></td><td style="padding:5px 8px;border:1px solid #dde3ec">Fire / Hot Work</td><td style="padding:5px 8px;border:1px solid #dde3ec">Hot work without permit, missing extinguisher, blocked escape route</td></tr>
    <tr style="background:#f9fafb"><td style="padding:5px 8px;border:1px solid #dde3ec"><strong>DRG</strong></td><td style="padding:5px 8px;border:1px solid #dde3ec">Drugs &amp; Alcohol</td><td style="padding:5px 8px;border:1px solid #dde3ec">Positive test, refusal to test, failure to declare medication</td></tr>
    <tr><td style="padding:5px 8px;border:1px solid #dde3ec"><strong>OTH</strong></td><td style="padding:5px 8px;border:1px solid #dde3ec">Other</td><td style="padding:5px 8px;border:1px solid #dde3ec">Any violation not covered above (specify in description)</td></tr>
  </tbody>
</table>
</div>`
            }
          ]
        },

        // ── Section 3: Violation Log ───────────────────────────────────────────
        {
          type: "panel",
          name: "section3",
          title: "3. Violation Log",
          elements: [
            {
              type: "html",
              name: "violationLogNote",
              html: "<p style='font-size:12px;color:#6b7a8d;margin-bottom:8px'>Log each violation on a separate row. Use data from FRM-HSE-004 (HSE Observation Cards), FRM-HSE-001/002 (Incident Flash), toolbox talks, site walk-downs and audits.</p>"
            },
            {
              type: "matrixdynamic",
              name: "violationLog",
              title: "Violation Log",
              titleLocation: "hidden",
              columns: [
                {
                  name: "date",
                  title: "Date",
                  cellType: "text",
                  inputType: "date",
                  isRequired: true
                },
                {
                  name: "personName",
                  title: "Person Name",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "role",
                  title: "Role / Position",
                  cellType: "text"
                },
                {
                  name: "company",
                  title: "Company / Contractor",
                  cellType: "text"
                },
                {
                  name: "category",
                  title: "Category Code",
                  cellType: "dropdown",
                  isRequired: true,
                  choices: ["UA", "UC", "PPE", "PTW", "LOTO", "TRF", "HK", "ENV", "FIRE", "DRG", "OTH"]
                },
                {
                  name: "severity",
                  title: "Severity (1–4)",
                  cellType: "dropdown",
                  isRequired: true,
                  choices: ["1 — Minor", "2 — Moderate", "3 — Major", "4 — Critical"]
                },
                {
                  name: "description",
                  title: "Description of Violation",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "immediateAction",
                  title: "Immediate Action Taken",
                  cellType: "text"
                },
                {
                  name: "carNo",
                  title: "CAR No. (REG-SYS-002)",
                  cellType: "text"
                }
              ],
              minRowCount: 1,
              rowCount: 5,
              addRowText: "+ Add Violation"
            }
          ]
        },

        // ── Section 4: Monthly Summary — By Category ──────────────────────────
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
                { name: "thisMonth", title: "This Month", cellType: "text", inputType: "number" },
                { name: "previousMonth", title: "Previous Month", cellType: "text", inputType: "number" }
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
                { value: "total", text: "TOTAL" }
              ]
            }
          ]
        },

        // ── Section 5: Monthly Summary — By Severity ──────────────────────────
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
                { name: "thisMonth", title: "This Month", cellType: "text", inputType: "number" },
                { name: "previousMonth", title: "Previous Month", cellType: "text", inputType: "number" }
              ],
              rows: [
                { value: "minor", text: "1 — Minor" },
                { value: "moderate", text: "2 — Moderate" },
                { value: "major", text: "3 — Major (CAR raised)" },
                { value: "critical", text: "4 — Critical (stop-work)" },
                { value: "total", text: "TOTAL" }
              ]
            }
          ]
        },

        // ── Section 6: Monthly Summary — By Department / Contractor ───────────
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
                {
                  name: "deptContractor",
                  title: "Department / Contractor",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "count",
                  title: "Count",
                  cellType: "text",
                  inputType: "number"
                },
                {
                  name: "notes",
                  title: "Notes",
                  cellType: "text"
                }
              ],
              minRowCount: 1,
              rowCount: 5,
              addRowText: "+ Add Row",
              defaultValue: [
                { deptContractor: "Drilling Crew A" },
                { deptContractor: "Drilling Crew B" },
                { deptContractor: "Geology / Sampling" },
                { deptContractor: "Logistics / Vehicles" },
                { deptContractor: "Maintenance" }
              ]
            }
          ]
        },

        // ── Section 7: Repeat Offenders / Escalation ──────────────────────────
        {
          type: "panel",
          name: "section7",
          title: "7. Repeat Offenders / Escalation",
          elements: [
            {
              type: "html",
              name: "repeatOffenderNote",
              html: "<p style='font-size:12px;color:#6b7a8d;margin-bottom:8px'>List any individual or contractor who has committed more than one violation this month, or who is flagged for disciplinary escalation under the Stop Work Authority Policy and Saudi Labour Law.</p>"
            },
            {
              type: "matrixdynamic",
              name: "repeatOffenders",
              title: "Repeat Offenders",
              titleLocation: "hidden",
              columns: [
                {
                  name: "nameCompany",
                  title: "Name / Company",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "violationsCount",
                  title: "Violations Count",
                  cellType: "text",
                  inputType: "number"
                },
                {
                  name: "escalationAction",
                  title: "Escalation Action",
                  cellType: "text"
                }
              ],
              minRowCount: 0,
              rowCount: 3,
              addRowText: "+ Add Offender"
            }
          ]
        },

        // ── Section 8: Corrective Actions Raised ──────────────────────────────
        {
          type: "panel",
          name: "section8",
          title: "8. Corrective Actions Raised",
          elements: [
            {
              type: "html",
              name: "carNote",
              html: "<p style='font-size:12px;color:#6b7a8d;margin-bottom:8px'>Every Major (severity 3) and Critical (severity 4) violation must have a CAR raised in REG-SYS-002. List the CARs opened this month and their status.</p>"
            },
            {
              type: "matrixdynamic",
              name: "correctiveActions",
              title: "Corrective Actions",
              titleLocation: "hidden",
              columns: [
                {
                  name: "carNo",
                  title: "CAR No.",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "linkedViolation",
                  title: "Linked Violation / Description",
                  cellType: "text",
                  isRequired: true
                },
                {
                  name: "status",
                  title: "Status",
                  cellType: "dropdown",
                  choices: ["Open", "In Progress", "Closed", "Overdue"]
                },
                {
                  name: "targetCloseDate",
                  title: "Target Close Date",
                  cellType: "text",
                  inputType: "date"
                },
                {
                  name: "owner",
                  title: "Owner",
                  cellType: "text"
                }
              ],
              minRowCount: 0,
              rowCount: 4,
              addRowText: "+ Add CAR"
            }
          ]
        },

        // ── Section 9: Trend Commentary (HSE Manager Only) ────────────────────
        {
          type: "panel",
          name: "section9",
          title: "9. Trend Commentary and Target for Next Month",
          elements: [
            {
              type: "radiogroup",
              name: "trendVsPreviousMonth",
              title: "Trend vs Previous Month",
              isRequired: true,
              choices: ["Improving", "Stable", "Deteriorating"],
              colCount: 0
            },
            {
              type: "text",
              name: "keyConcernArea",
              title: "Key Concern Area"
            },
            {
              type: "comment",
              name: "rootCauseThemes",
              title: "Root Cause Themes",
              rows: 3
            },
            {
              type: "comment",
              name: "trainingPlanned",
              title: "Training / Toolbox Talks Planned",
              rows: 2
            },
            {
              type: "comment",
              name: "targetNextMonth",
              title: "Target for Next Month (measurable)",
              rows: 2
            },
            {
              type: "comment",
              name: "hseManagerCommentary",
              title: "HSE Manager Commentary",
              rows: 4
            }
          ]
        },

        // ── Section 10: Submitted By ───────────────────────────────────────────
        {
          type: "panel",
          name: "section10",
          title: "10. Submitted By",
          elements: [
            {
              type: "text",
              name: "submittedBy",
              title: "Submitted By — Full Name",
              readOnly: true,
              description: "Auto-filled from your login profile"
            },
            {
              type: "text",
              name: "submittedByTime",
              title: "Submission Time",
              readOnly: true,
              description: "Auto-filled with current time"
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

export default function FRM_HSE_028() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-028"
        title="Monthly HSE Violation Report"
        revision="02"
        approvalDate="11 April 2026"
        minRole="hse_manager"
        wideTable={true}
        schema={SCHEMA}
        identityFields={{
          fullName: "preparedBy",
          position: "preparedByPosition",
          date: "datePrepared"
        }}
        hseOnlyPanels={["section9"]}
      />
    </Layout>
  );
}
