import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";
import { DEPARTMENTS } from "@/lib/formConstants";

const PERF_HTML = `<table style="width:100%;border-collapse:collapse;table-layout:fixed;font-size:13px;"><colgroup><col style="width:52%"/><col style="width:12%"/><col style="width:12%"/><col style="width:12%"/><col style="width:12%"/></colgroup><thead><tr style="background:#081C2E;color:#fff;"><th style="padding:9px 12px;text-align:left;border:1px solid #2a3f55;">Criteria</th><th style="padding:9px 8px;text-align:center;border:1px solid #2a3f55;">Excellent</th><th style="padding:9px 8px;text-align:center;border:1px solid #2a3f55;">Good</th><th style="padding:9px 8px;text-align:center;border:1px solid #2a3f55;">Fair</th><th style="padding:9px 8px;text-align:center;border:1px solid #2a3f55;">Poor</th></tr></thead><tbody><tr style="background:#ffffff;"><td style="padding:8px 12px;border:1px solid #e0e4ea;color:#081C2E;">Alarm audibility and response</td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_0" value="Excellent" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_0" value="Good" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_0" value="Fair" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_0" value="Poor" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td></tr><tr style="background:#f8f9fb;"><td style="padding:8px 12px;border:1px solid #e0e4ea;color:#081C2E;">Emergency team response time</td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_1" value="Excellent" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_1" value="Good" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_1" value="Fair" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_1" value="Poor" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td></tr><tr style="background:#ffffff;"><td style="padding:8px 12px;border:1px solid #e0e4ea;color:#081C2E;">Evacuation orderliness</td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_2" value="Excellent" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_2" value="Good" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_2" value="Fair" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_2" value="Poor" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td></tr><tr style="background:#f8f9fb;"><td style="padding:8px 12px;border:1px solid #e0e4ea;color:#081C2E;">Muster point procedure</td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_3" value="Excellent" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_3" value="Good" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_3" value="Fair" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_3" value="Poor" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td></tr><tr style="background:#ffffff;"><td style="padding:8px 12px;border:1px solid #e0e4ea;color:#081C2E;">Communication effectiveness</td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_4" value="Excellent" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_4" value="Good" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_4" value="Fair" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_4" value="Poor" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td></tr><tr style="background:#f8f9fb;"><td style="padding:8px 12px;border:1px solid #e0e4ea;color:#081C2E;">Equipment availability and condition</td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_5" value="Excellent" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_5" value="Good" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_5" value="Fair" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_5" value="Poor" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td></tr><tr style="background:#ffffff;"><td style="padding:8px 12px;border:1px solid #e0e4ea;color:#081C2E;font-weight:600;">Overall drill performance</td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_6" value="Excellent" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_6" value="Good" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_6" value="Fair" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_6" value="Poor" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td></tr></tbody></table>`;

const DEV_HTML = `<table style="width:100%;border-collapse:collapse;table-layout:fixed;font-size:13px;"><colgroup><col style="width:5%"/><col style="width:28%"/><col style="width:28%"/><col style="width:22%"/><col style="width:17%"/></colgroup><thead><tr style="background:#081C2E;color:#fff;"><th style="padding:9px 8px;text-align:center;border:1px solid #2a3f55;">#</th><th style="padding:9px 12px;text-align:left;border:1px solid #2a3f55;">Deviation Observed</th><th style="padding:9px 12px;text-align:left;border:1px solid #2a3f55;">Corrective Action</th><th style="padding:9px 12px;text-align:left;border:1px solid #2a3f55;">Responsible Person</th><th style="padding:9px 12px;text-align:left;border:1px solid #2a3f55;">Target Date</th></tr></thead><tbody><tr style="background:#ffffff;"><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;color:#081C2E;font-weight:600;">1</td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Describe deviation..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Corrective action..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Name..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="date" style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td></tr><tr style="background:#f8f9fb;"><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;color:#081C2E;font-weight:600;">2</td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Describe deviation..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Corrective action..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Name..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="date" style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td></tr><tr style="background:#ffffff;"><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;color:#081C2E;font-weight:600;">3</td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Describe deviation..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Corrective action..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Name..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="date" style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td></tr><tr style="background:#f8f9fb;"><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;color:#081C2E;font-weight:600;">4</td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Describe deviation..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Corrective action..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Name..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="date" style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td></tr><tr style="background:#ffffff;"><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;color:#081C2E;font-weight:600;">5</td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Describe deviation..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Corrective action..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Name..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="date" style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td></tr></tbody></table>`;

const SIGNOFF_HTML = `<table style="width:100%;border-collapse:collapse;table-layout:fixed;font-size:13px;"><colgroup><col style="width:25%"/><col style="width:30%"/><col style="width:25%"/><col style="width:20%"/></colgroup><thead><tr style="background:#081C2E;color:#fff;"><th style="padding:9px 12px;text-align:left;border:1px solid #2a3f55;">Role</th><th style="padding:9px 12px;text-align:left;border:1px solid #2a3f55;">Name</th><th style="padding:9px 12px;text-align:left;border:1px solid #2a3f55;">Signature</th><th style="padding:9px 12px;text-align:left;border:1px solid #2a3f55;">Date</th></tr></thead><tbody><tr style="background:#ffffff;"><td style="padding:8px 12px;border:1px solid #e0e4ea;color:#081C2E;font-weight:600;">Drill Coordinator</td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Full name..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Signature..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="date" style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td></tr><tr style="background:#f8f9fb;"><td style="padding:8px 12px;border:1px solid #e0e4ea;color:#081C2E;font-weight:600;">HSE Manager</td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Full name..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Signature..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="date" style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td></tr><tr style="background:#ffffff;"><td style="padding:8px 12px;border:1px solid #e0e4ea;color:#081C2E;font-weight:600;">Site Manager</td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Full name..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Signature..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="date" style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td></tr></tbody></table>`;

const SCHEMA = {
  title: "",
  showTitle: false,
  pages: [{
    name: "page1",
    elements: [
      {
        type: "panel", name: "section1", title: "1. Drill Planning",
        elements: [
          { type: "text", name: "reportNo", title: "Report No.", isRequired: true, readOnly: true, description: "Auto-assigned on submission" },
          { type: "dropdown", name: "drillType", title: "Drill Type", isRequired: true,
            choices: ["Fire Evacuation","Medical Emergency","Confined Space Rescue","Working at Height Rescue","Chemical Spill Response","Vehicle Incident","Security Breach","Flooding Response","Other"] },
          { type: "comment", name: "scenarioDescription", title: "Scenario Description", isRequired: true, rows: 3 },
          { type: "text", name: "datePlanned", title: "Date Planned", inputType: "date", isRequired: true },
          { type: "text", name: "timePlanned", title: "Time Planned", inputType: "time", isRequired: true },
          { type: "dropdown", name: "locationArea", title: "Location / Area", isRequired: true, choices: DEPARTMENTS },
          { type: "text", name: "drillCoordinator", title: "Drill Coordinator", isRequired: true },
          { type: "text", name: "observersNominated", title: "Observers Nominated" },
        ],
      },
      {
        type: "panel", name: "section2", title: "2. Emergency Scenarios",
        elements: [
          {
            type: "checkbox", name: "emergencyScenarios",
            title: "Select the scenario(s) covered in this drill:",
            isRequired: true, colCount: 3,
            choices: ["Fire","Explosion","Chemical Spill","Medical Emergency","Confined Space Rescue","Working at Height Rescue","Lightning / Severe Weather","Building Collapse","Security Breach","Vehicle Incident","Flooding","Other"],
          },
          { type: "text", name: "otherScenario", title: "Other — specify", visibleIf: "{emergencyScenarios} contains 'Other'" },
        ],
      },
      {
        type: "panel", name: "section3", title: "3. Drill Execution Record",
        elements: [
          { type: "text", name: "alarmInitiatedAt", title: "Alarm Initiated At", inputType: "time", isRequired: true },
          { type: "text", name: "assemblyCompleteAt", title: "Assembly Complete At", inputType: "time", isRequired: true },
          { type: "text", name: "allClearGivenAt", title: "All Clear Given At", inputType: "time", isRequired: true },
          { type: "text", name: "totalEvacuationTime", title: "Total Evacuation Time (minutes)", inputType: "number", isRequired: true },
          { type: "text", name: "totalPersonsMustered", title: "Total Persons Mustered", inputType: "number", isRequired: true },
          { type: "text", name: "missingPersons", title: "Missing Persons", inputType: "number", isRequired: true, defaultValue: 0 },
          { type: "text", name: "missingPersonsDetails", title: "Missing Persons — Details", visibleIf: "{missingPersons} > 0" },
        ],
      },
      {
        type: "panel", name: "section4", title: "4. Performance Assessment",
        elements: [
          { type: "html", name: "perfTable", html: PERF_HTML },
          { type: "comment", name: "perfComments", title: "Performance Comments", rows: 3 },
        ],
      },
      {
        type: "panel", name: "section5", title: "5. Deviations and Follow-Up Actions",
        elements: [
          { type: "html", name: "devTable", html: DEV_HTML },
        ],
      },
      {
        type: "panel", name: "section6", title: "6. Post-Drill Review Notes",
        elements: [
          { type: "comment", name: "generalObservations", title: "General Observations", rows: 4 },
          { type: "comment", name: "lessonsLearned", title: "Lessons Learned", rows: 3 },
          { type: "text", name: "nextDrillDate", title: "Next Drill Planned Date", inputType: "date" },
        ],
      },
      {
        type: "panel", name: "section_signoff_table", title: "Sign-Off",
        elements: [
          { type: "html", name: "signoffTable", html: SIGNOFF_HTML },
        ],
      },
      {
        type: "panel", name: "section_submitted", title: "Submitted By",
        elements: [
          { type: "text", name: "signoffReportedByName", title: "Submitted By — Full Name", isRequired: true, readOnly: true, description: "Auto-filled from your login profile" },
          { type: "text", name: "signoffReportedByDate", title: "Submission Date", inputType: "date", isRequired: true, readOnly: true, description: "Auto-filled with today's date" },
          { type: "text", name: "signoffSubmissionTime", title: "Submission Time", isRequired: true, readOnly: true, description: "Auto-filled with current time" },
        ],
      },
    ],
  }],
  checkErrorsMode: "onComplete",
  showPrevButton: false,
};

export default function FRM_HSE_017() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-017"
        title="Emergency Drill Planning and Record"
        revision="01"
        approvalDate="01 March 2026"
        minRole="field_worker"
        wideTable
        schema={SCHEMA}
        identityFields={{
          fullName: "signoffReportedByName",
          employeeId: "employeeId",
          department: "locationArea",
          position: "drillCoordinator",
        }}
      />
    </Layout>
  );
}
