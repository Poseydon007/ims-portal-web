import Layout from "@/components/Layout";
import ImsForm from "@/components/ImsForm";
import { DEPARTMENTS } from "@/lib/formConstants";

const PERF_HTML = `<table style="width:100%;border-collapse:collapse;table-layout:fixed;font-size:13px;"><colgroup><col style="width:40%"/><col style="width:15%"/><col style="width:15%"/><col style="width:15%"/><col style="width:15%"/></colgroup><thead><tr style="background:#081C2E;color:#fff;"><th style="padding:9px 12px;text-align:left;border:1px solid #2a3f55;">Checklist Item</th><th style="padding:9px 8px;text-align:center;border:1px solid #2a3f55;">Excellent</th><th style="padding:9px 8px;text-align:center;border:1px solid #2a3f55;">Good</th><th style="padding:9px 8px;text-align:center;border:1px solid #2a3f55;">Fair</th><th style="padding:9px 8px;text-align:center;border:1px solid #2a3f55;">Needs Improvement</th></tr></thead><tbody><tr style="background:#ffffff;"><td style="padding:8px 12px;border:1px solid #e0e4ea;color:#081C2E;">Alarm condition and activation</td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_0" value="Excellent" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_0" value="Good" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_0" value="Fair" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_0" value="Needs Improvement" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td></tr><tr style="background:#f8f9fb;"><td style="padding:8px 12px;border:1px solid #e0e4ea;color:#081C2E;">Alarm sound audibility</td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_1" value="Excellent" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_1" value="Good" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_1" value="Fair" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_1" value="Needs Improvement" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td></tr><tr style="background:#ffffff;"><td style="padding:8px 12px;border:1px solid #e0e4ea;color:#081C2E;">Responsiveness of workers</td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_2" value="Excellent" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_2" value="Good" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_2" value="Fair" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_2" value="Needs Improvement" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td></tr><tr style="background:#f8f9fb;"><td style="padding:8px 12px;border:1px solid #e0e4ea;color:#081C2E;">Responsiveness of emergency action team</td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_3" value="Excellent" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_3" value="Good" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_3" value="Fair" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_3" value="Needs Improvement" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td></tr><tr style="background:#ffffff;"><td style="padding:8px 12px;border:1px solid #e0e4ea;color:#081C2E;">Workers gathered at assembly area</td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_4" value="Excellent" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_4" value="Good" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_4" value="Fair" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_4" value="Needs Improvement" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td></tr><tr style="background:#f8f9fb;"><td style="padding:8px 12px;border:1px solid #e0e4ea;color:#081C2E;">Time taken to gather at assembly area</td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_5" value="Excellent" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_5" value="Good" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_5" value="Fair" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_5" value="Needs Improvement" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td></tr><tr style="background:#ffffff;"><td style="padding:8px 12px;border:1px solid #e0e4ea;color:#081C2E;">Communication during drill</td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_6" value="Excellent" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_6" value="Good" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_6" value="Fair" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_6" value="Needs Improvement" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td></tr><tr style="background:#f8f9fb;"><td style="padding:8px 12px;border:1px solid #e0e4ea;color:#081C2E;">Use of fire extinguishers (if applicable)</td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_7" value="Excellent" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_7" value="Good" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_7" value="Fair" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;"><input type="radio" name="perf_7" value="Needs Improvement" style="width:16px;height:16px;accent-color:#081C2E;cursor:pointer;"/></td></tr></tbody></table>`;

const IMPROVE_HTML = `<table style="width:100%;border-collapse:collapse;table-layout:fixed;font-size:13px;"><colgroup><col style="width:6%"/><col style="width:32%"/><col style="width:38%"/><col style="width:24%"/></colgroup><thead><tr style="background:#081C2E;color:#fff;"><th style="padding:9px 8px;text-align:center;border:1px solid #2a3f55;">#</th><th style="padding:9px 12px;text-align:left;border:1px solid #2a3f55;">Observation</th><th style="padding:9px 12px;text-align:left;border:1px solid #2a3f55;">Recommended Action</th><th style="padding:9px 12px;text-align:left;border:1px solid #2a3f55;">Responsible</th></tr></thead><tbody><tr style="background:#ffffff;"><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;color:#081C2E;font-weight:600;">1</td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Observation..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Recommended action..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Name..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td></tr><tr style="background:#f8f9fb;"><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;color:#081C2E;font-weight:600;">2</td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Observation..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Recommended action..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Name..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td></tr><tr style="background:#ffffff;"><td style="padding:8px;text-align:center;border:1px solid #e0e4ea;color:#081C2E;font-weight:600;">3</td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Observation..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Recommended action..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Name..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td></tr></tbody></table>`;

const SIGNOFF_HTML = `<table style="width:100%;border-collapse:collapse;table-layout:fixed;font-size:13px;"><colgroup><col style="width:25%"/><col style="width:30%"/><col style="width:25%"/><col style="width:20%"/></colgroup><thead><tr style="background:#081C2E;color:#fff;"><th style="padding:9px 12px;text-align:left;border:1px solid #2a3f55;">Role</th><th style="padding:9px 12px;text-align:left;border:1px solid #2a3f55;">Name</th><th style="padding:9px 12px;text-align:left;border:1px solid #2a3f55;">Signature</th><th style="padding:9px 12px;text-align:left;border:1px solid #2a3f55;">Date</th></tr></thead><tbody><tr style="background:#ffffff;"><td style="padding:8px 12px;border:1px solid #e0e4ea;color:#081C2E;font-weight:600;">Drill Observer</td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Full name..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Signature..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="date" style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td></tr><tr style="background:#f8f9fb;"><td style="padding:8px 12px;border:1px solid #e0e4ea;color:#081C2E;font-weight:600;">HSE Manager</td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Full name..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Signature..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="date" style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td></tr><tr style="background:#ffffff;"><td style="padding:8px 12px;border:1px solid #e0e4ea;color:#081C2E;font-weight:600;">Site Manager</td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Full name..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="text" placeholder="Signature..." style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td><td style="padding:6px 8px;border:1px solid #e0e4ea;"><input type="date" style="width:100%;border:1px solid #c8d0db;border-radius:4px;padding:5px 8px;font-size:12px;background:#fff;color:#081C2E;box-sizing:border-box;"/></td></tr></tbody></table>`;

const SCHEMA = {
  title: "",
  showTitle: false,
  pages: [{
    name: "page1",
    elements: [
      {
        type: "panel", name: "section1", title: "1. Drill Information",
        elements: [
          { type: "text", name: "reportNo", title: "Report No.", isRequired: true, readOnly: true, description: "Auto-assigned on submission" },
          { type: "text", name: "drillDate", title: "Date", inputType: "date", isRequired: true },
          { type: "text", name: "drillTime", title: "Time", inputType: "time", isRequired: true },
          { type: "dropdown", name: "locationBuilding", title: "Location / Building", isRequired: true, choices: DEPARTMENTS },
          { type: "text", name: "drillObservedBy", title: "Drill Observed By", isRequired: true },
          { type: "text", name: "designation", title: "Designation", isRequired: true },
        ],
      },
      {
        type: "panel", name: "section2", title: "2. Performance Assessment",
        elements: [
          { type: "html", name: "perfTable", html: PERF_HTML },
        ],
      },
      {
        type: "panel", name: "section3", title: "3. Overall Remarks",
        elements: [
          { type: "comment", name: "overallRemarks", title: "Overall Remarks", rows: 4 },
        ],
      },
      {
        type: "panel", name: "section4", title: "4. Areas to Be Improved",
        elements: [
          { type: "html", name: "improveTable", html: IMPROVE_HTML },
        ],
      },
      {
        type: "panel", name: "section5", title: "5. Next Drill",
        elements: [
          { type: "text", name: "nextDrillDate", title: "Next Drill Planned Date", inputType: "date" },
        ],
      },
      {
        type: "panel", name: "section_signoff", title: "Sign-Off",
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

export default function FRM_HSE_019() {
  return (
    <Layout>
      <ImsForm
        formCode="TE-IMS-FRM-HSE-019"
        title="Fire Drill Report"
        revision="01"
        approvalDate="01 March 2026"
        minRole="field_worker"
        wideTable
        schema={SCHEMA}
        identityFields={{
          fullName: "signoffReportedByName",
          employeeId: "employeeId",
          department: "locationBuilding",
          position: "designation",
        }}
      />
    </Layout>
  );
}
