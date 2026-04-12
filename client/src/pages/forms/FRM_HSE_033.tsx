import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_033() {
  const [submitted, setSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState("");

  const mutation = trpc.formSubmissions.submit.useMutation({
    onSuccess: (data) => {
      setSubmitted(true);
      setSheetUrl(data.sheetUrl);
    },
    onError: (err) => {
      setError(err.message || "An error occurred during submission.");
    },
  });

  const [formData, setFormData] = useState({
    siteProject: "",
    reportDate: "",
    preparedBy: "",
    position: "",
    reportingPeriod: "",
    reportNo: "",
    executiveSummary: "",
    // Key Safety Statistics
    manHoursThisMonth: "",
    manHoursYTD: "",
    manHoursTarget: "",
    nearMissesThisMonth: "",
    nearMissesYTD: "",
    nearMissesTarget: "",
    facThisMonth: "",
    facYTD: "",
    facTarget: "",
    mtcThisMonth: "",
    mtcYTD: "",
    mtcTarget: "",
    rwcThisMonth: "",
    rwcYTD: "",
    rwcTarget: "",
    ltiThisMonth: "",
    ltiYTD: "",
    ltiTarget: "",
    fatalitiesThisMonth: "",
    fatalitiesYTD: "",
    fatalitiesTarget: "",
    triThisMonth: "",
    triYTD: "",
    triTarget: "",
    trirThisMonth: "",
    trirYTD: "",
    trirTarget: "",
    ltirThisMonth: "",
    ltirYTD: "",
    ltirTarget: "",
    severityRateThisMonth: "",
    severityRateYTD: "",
    severityRateTarget: "",
    observationsThisMonth: "",
    observationsYTD: "",
    observationsTarget: "",
    toolboxTalksThisMonth: "",
    toolboxTalksYTD: "",
    toolboxTalksTarget: "",
    inspectionsThisMonth: "",
    inspectionsYTD: "",
    inspectionsTarget: "",
    // Safety Activities
    weeklyInspections: "",
    safetyDrills: "",
    trainingSessions: "",
    ptos: "",
    emergencyExercises: "",
    // Planned Safety Activities
    plannedActivitiesNextMonth: "",
    // Quality Control
    coreRecoveryThisMonth: "",
    coreRecoveryTarget: "",
    coreRecoveryComments: "",
    coreOrientationThisMonth: "",
    coreOrientationTarget: "",
    coreOrientationComments: "",
    sampleLabellingThisMonth: "",
    sampleLabellingTarget: "",
    sampleLabellingComments: "",
    cocBreachesThisMonth: "",
    cocBreachesTarget: "",
    cocBreachesComments: "",
    redrillsThisMonth: "",
    redrillsTarget: "",
    redrillsComments: "",
    qaqcIssuesThisMonth: "",
    qaqcIssuesTarget: "",
    qaqcIssuesComments: "",
    // Quality Audits
    auditsConducted: "",
    issuesIdentified: "",
    correctiveActions: "",
    continuousImprovement: "",
    // Environmental
    fuelSpillsThisMonth: "",
    fuelSpillsYTD: "",
    fuelSpillsComments: "",
    hazWasteThisMonth: "",
    hazWasteYTD: "",
    hazWasteComments: "",
    greyWaterThisMonth: "",
    greyWaterYTD: "",
    greyWaterComments: "",
    dustEventsThisMonth: "",
    dustEventsYTD: "",
    dustEventsComments: "",
    ncrThisMonth: "",
    ncrYTD: "",
    ncrComments: "",
    wasteSegregationThisMonth: "",
    wasteSegregationYTD: "",
    wasteSegregationComments: "",
    // Environmental Improvement
    envInspections: "",
    envActionsTaken: "",
    envImprovementInitiatives: "",
    // Attachments (Y/N and Ref)
    attachInspectionYN: false,
    attachInspectionRef: "",
    attachIncidentYN: false,
    attachIncidentRef: "",
    attachTrainingYN: false,
    attachTrainingRef: "",
    attachToolboxYN: false,
    attachToolboxRef: "",
    attachEnvYN: false,
    attachEnvRef: "",
    attachCorrectiveYN: false,
    attachCorrectiveRef: "",
    // Sign-off
    signOffHseOfficerName: "",
    signOffHseOfficerDate: "",
    signOffHseManagerName: "",
    signOffHseManagerDate: "",
    signOffSiteManagerName: "",
    signOffSiteManagerDate: "",
    signOffOpsManagerName: "",
    signOffOpsManagerDate: "",
  });

  const [incidents, setIncidents] = useState([
    { date: "", type: "", location: "", description: "", rootCause: "", status: "" }
  ]);

  const [recommendations, setRecommendations] = useState([
    { issue: "", recommendation: "", responsible: "" }
  ]);

  const addIncident = () => {
    setIncidents([...incidents, { date: "", type: "", location: "", description: "", rootCause: "", status: "" }]);
  };

  const addRecommendation = () => {
    setRecommendations([...recommendations, { issue: "", recommendation: "", responsible: "" }]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleIncidentChange = (index: number, field: string, value: string) => {
    const updated = [...incidents];
    updated[index] = { ...updated[index], [field]: value };
    setIncidents(updated);
  };

  const handleRecChange = (index: number, field: string, value: string) => {
    const updated = [...recommendations];
    updated[index] = { ...updated[index], [field]: value };
    setRecommendations(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const headers = [
      "Site / Project", "Report Date", "Prepared By", "Position", "Reporting Period", "Report No.", "Executive Summary",
      "Total Man-Hours (Month)", "Total Man-Hours (YTD)", "Total Man-Hours (Target)",
      "Near Misses (Month)", "Near Misses (YTD)", "Near Misses (Target)",
      "FAC (Month)", "FAC (YTD)", "FAC (Target)",
      "MTC (Month)", "MTC (YTD)", "MTC (Target)",
      "RWC (Month)", "RWC (YTD)", "RWC (Target)",
      "LTI (Month)", "LTI (YTD)", "LTI (Target)",
      "Fatalities (Month)", "Fatalities (YTD)", "Fatalities (Target)",
      "TRI (Month)", "TRI (YTD)", "TRI (Target)",
      "TRIR (Month)", "TRIR (YTD)", "TRIR (Target)",
      "LTIR (Month)", "LTIR (YTD)", "LTIR (Target)",
      "Severity Rate (Month)", "Severity Rate (YTD)", "Severity Rate (Target)",
      "Observations (Month)", "Observations (YTD)", "Observations (Target)",
      "Toolbox Talks (Month)", "Toolbox Talks (YTD)", "Toolbox Talks (Target)",
      "HSE Inspections (Month)", "HSE Inspections (YTD)", "HSE Inspections (Target)",
      "Incidents Data",
      "Weekly Inspections Conducted", "Safety Drills Conducted", "Training Sessions Held", "PTOs", "Emergency Response Exercises",
      "Issues & Recommendations Data",
      "Planned Safety Activities Next Month",
      "Core Recovery (Month)", "Core Recovery (Target)", "Core Recovery (Comments)",
      "Core Orientation (Month)", "Core Orientation (Target)", "Core Orientation (Comments)",
      "Sample Labelling (Month)", "Sample Labelling (Target)", "Sample Labelling (Comments)",
      "COC Breaches (Month)", "COC Breaches (Target)", "COC Breaches (Comments)",
      "Re-drills (Month)", "Re-drills (Target)", "Re-drills (Comments)",
      "QA/QC Issues (Month)", "QA/QC Issues (Target)", "QA/QC Issues (Comments)",
      "Quality Audits Conducted", "Quality Issues Identified", "Quality Corrective Actions", "Quality Continuous Improvement",
      "Fuel Spills (Month)", "Fuel Spills (YTD)", "Fuel Spills (Comments)",
      "Haz Waste (Month)", "Haz Waste (YTD)", "Haz Waste (Comments)",
      "Grey Water (Month)", "Grey Water (YTD)", "Grey Water (Comments)",
      "Dust Events (Month)", "Dust Events (YTD)", "Dust Events (Comments)",
      "NCRs (Month)", "NCRs (YTD)", "NCRs (Comments)",
      "Waste Segregation (Month)", "Waste Segregation (YTD)", "Waste Segregation (Comments)",
      "Env Inspections Conducted", "Env Actions Taken", "Env Improvement Initiatives",
      "Attach Site Inspection", "Attach Site Inspection Ref",
      "Attach Incident Investigation", "Attach Incident Investigation Ref",
      "Attach Training Attendance", "Attach Training Attendance Ref",
      "Attach Toolbox Talk", "Attach Toolbox Talk Ref",
      "Attach Env Monitoring", "Attach Env Monitoring Ref",
      "Attach Corrective Action", "Attach Corrective Action Ref",
      "Sign-off HSE Officer Name", "Sign-off HSE Officer Date",
      "Sign-off HSE Manager Name", "Sign-off HSE Manager Date",
      "Sign-off Site Manager Name", "Sign-off Site Manager Date",
      "Sign-off Operations Manager Name", "Sign-off Operations Manager Date"
    ];

    const values = [
      formData.siteProject, formData.reportDate, formData.preparedBy, formData.position, formData.reportingPeriod, formData.reportNo, formData.executiveSummary,
      formData.manHoursThisMonth, formData.manHoursYTD, formData.manHoursTarget,
      formData.nearMissesThisMonth, formData.nearMissesYTD, formData.nearMissesTarget,
      formData.facThisMonth, formData.facYTD, formData.facTarget,
      formData.mtcThisMonth, formData.mtcYTD, formData.mtcTarget,
      formData.rwcThisMonth, formData.rwcYTD, formData.rwcTarget,
      formData.ltiThisMonth, formData.ltiYTD, formData.ltiTarget,
      formData.fatalitiesThisMonth, formData.fatalitiesYTD, formData.fatalitiesTarget,
      formData.triThisMonth, formData.triYTD, formData.triTarget,
      formData.trirThisMonth, formData.trirYTD, formData.trirTarget,
      formData.ltirThisMonth, formData.ltirYTD, formData.ltirTarget,
      formData.severityRateThisMonth, formData.severityRateYTD, formData.severityRateTarget,
      formData.observationsThisMonth, formData.observationsYTD, formData.observationsTarget,
      formData.toolboxTalksThisMonth, formData.toolboxTalksYTD, formData.toolboxTalksTarget,
      formData.inspectionsThisMonth, formData.inspectionsYTD, formData.inspectionsTarget,
      JSON.stringify(incidents),
      formData.weeklyInspections, formData.safetyDrills, formData.trainingSessions, formData.ptos, formData.emergencyExercises,
      JSON.stringify(recommendations),
      formData.plannedActivitiesNextMonth,
      formData.coreRecoveryThisMonth, formData.coreRecoveryTarget, formData.coreRecoveryComments,
      formData.coreOrientationThisMonth, formData.coreOrientationTarget, formData.coreOrientationComments,
      formData.sampleLabellingThisMonth, formData.sampleLabellingTarget, formData.sampleLabellingComments,
      formData.cocBreachesThisMonth, formData.cocBreachesTarget, formData.cocBreachesComments,
      formData.redrillsThisMonth, formData.redrillsTarget, formData.redrillsComments,
      formData.qaqcIssuesThisMonth, formData.qaqcIssuesTarget, formData.qaqcIssuesComments,
      formData.auditsConducted, formData.issuesIdentified, formData.correctiveActions, formData.continuousImprovement,
      formData.fuelSpillsThisMonth, formData.fuelSpillsYTD, formData.fuelSpillsComments,
      formData.hazWasteThisMonth, formData.hazWasteYTD, formData.hazWasteComments,
      formData.greyWaterThisMonth, formData.greyWaterYTD, formData.greyWaterComments,
      formData.dustEventsThisMonth, formData.dustEventsYTD, formData.dustEventsComments,
      formData.ncrThisMonth, formData.ncrYTD, formData.ncrComments,
      formData.wasteSegregationThisMonth, formData.wasteSegregationYTD, formData.wasteSegregationComments,
      formData.envInspections, formData.envActionsTaken, formData.envImprovementInitiatives,
      formData.attachInspectionYN ? "Y" : "N", formData.attachInspectionRef,
      formData.attachIncidentYN ? "Y" : "N", formData.attachIncidentRef,
      formData.attachTrainingYN ? "Y" : "N", formData.attachTrainingRef,
      formData.attachToolboxYN ? "Y" : "N", formData.attachToolboxRef,
      formData.attachEnvYN ? "Y" : "N", formData.attachEnvRef,
      formData.attachCorrectiveYN ? "Y" : "N", formData.attachCorrectiveRef,
      formData.signOffHseOfficerName, formData.signOffHseOfficerDate,
      formData.signOffHseManagerName, formData.signOffHseManagerDate,
      formData.signOffSiteManagerName, formData.signOffSiteManagerDate,
      formData.signOffOpsManagerName, formData.signOffOpsManagerDate
    ];

    mutation.mutate({
      formCode: "TE-IMS-FRM-HSE-033",
      headers,
      values,
    });
  };

  const navy = "#081C2E";
  const gold = "#C49A28";
  const lightBg = "#f4f6f9";
  const border = "#dde3ec";

  const inputStyle = "w-full p-2 border border-[#dde3ec] rounded-sm focus:outline-none focus:border-[#C49A28]";
  const headerStyle = "bg-[#081C2E] text-white p-2 font-bold uppercase text-sm tracking-wider";
  const subHeaderStyle = "bg-[#081C2E] text-white p-2 font-bold text-sm mt-6 mb-2";
  const tableHeaderStyle = "bg-[#081C2E] text-white p-2 text-xs font-semibold text-center border border-white/10";
  const tableCellStyle = "p-1 border border-[#dde3ec]";

  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg my-8 font-['Nunito_Sans']">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/" className="text-[#C49A28] hover:underline flex items-center gap-2">
            ← Portal Home
          </Link>
          <div className="flex items-center gap-1 text-sm mt-1"><Link href="/" className="text-gray-500 hover:text-[#C49A28]">Portal Home</Link><span className="text-gray-400 mx-1">/</span><Link href="/docs/frm" className="text-gray-500 hover:text-[#C49A28]">FRM</Link></div>
          <h1 className="text-2xl font-bold text-[#081C2E] mt-2">SITE HSE MONTHLY REPORT TEMPLATE</h1>
        </div>

        {/* Document Control Table */}
        <div className="mb-8 overflow-x-auto">
          <table className="w-full border-collapse border border-[#dde3ec] text-sm">
            <tbody>
              <tr>
                <td className="bg-[#081C2E] text-white p-2 font-bold w-1/4">Document</td>
                <td className="p-2 border border-[#dde3ec] w-1/4">TE-IMS-FRM-HSE-033</td>
                <td className="bg-[#081C2E] text-white p-2 font-bold w-1/4">Revision</td>
                <td className="p-2 border border-[#dde3ec] w-1/4">Rev01</td>
              </tr>
              <tr>
                <td className="bg-[#081C2E] text-white p-2 font-bold">Date</td>
                <td className="p-2 border border-[#dde3ec]">09 Apr 2026</td>
                <td className="bg-[#081C2E] text-white p-2 font-bold">Status</td>
                <td className="p-2 border border-[#dde3ec]">Approved for Implementation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <form onSubmit={handleSubmit}>
          {/* 1. REPORT DETAILS */}
          <div className={subHeaderStyle}>1. REPORT DETAILS</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-semibold mb-1">Site / Project *</label>
              <input type="text" name="siteProject" required value={formData.siteProject} onChange={handleInputChange} className={inputStyle} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Report Date *</label>
              <input type="date" name="reportDate" required value={formData.reportDate} onChange={handleInputChange} className={inputStyle} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Prepared By *</label>
              <input type="text" name="preparedBy" required value={formData.preparedBy} onChange={handleInputChange} className={inputStyle} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Position *</label>
              <input type="text" name="position" required value={formData.position} onChange={handleInputChange} className={inputStyle} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Reporting Period *</label>
              <input type="text" name="reportingPeriod" placeholder="e.g. March 2026" required value={formData.reportingPeriod} onChange={handleInputChange} className={inputStyle} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Report No. *</label>
              <input type="text" name="reportNo" required value={formData.reportNo} onChange={handleInputChange} className={inputStyle} />
            </div>
          </div>

          {/* 2. EXECUTIVE SUMMARY */}
          <div className={subHeaderStyle}>2. EXECUTIVE SUMMARY</div>
          <textarea name="executiveSummary" rows={4} value={formData.executiveSummary} onChange={handleInputChange} className={inputStyle} placeholder="Provide a brief overview of HSE performance and key highlights for the month..."></textarea>

          {/* 3. KEY SAFETY STATISTICS */}
          <div className={subHeaderStyle}>3. KEY SAFETY STATISTICS</div>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-[#dde3ec] text-sm">
              <thead>
                <tr>
                  <th className={tableHeaderStyle}>Metric</th>
                  <th className={tableHeaderStyle}>This Month</th>
                  <th className={tableHeaderStyle}>Year to Date</th>
                  <th className={tableHeaderStyle}>Target</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Total Man-Hours Worked", prefix: "manHours" },
                  { label: "Near Misses Reported", prefix: "nearMisses" },
                  { label: "First Aid Cases (FAC)", prefix: "fac" },
                  { label: "Medical Treatment Cases (MTC)", prefix: "mtc" },
                  { label: "Restricted Work Cases (RWC)", prefix: "rwc" },
                  { label: "Lost Time Injuries (LTI)", prefix: "lti" },
                  { label: "Fatalities", prefix: "fatalities" },
                  { label: "Total Recordable Incidents (TRI)", prefix: "tri" },
                  { label: "TRIR (per 200,000 hrs)", prefix: "trir" },
                  { label: "LTIR (per 200,000 hrs)", prefix: "ltir" },
                  { label: "Severity Rate", prefix: "severityRate" },
                  { label: "Safety Observations / Interventions", prefix: "observations" },
                  { label: "Toolbox Talks Conducted", prefix: "toolboxTalks" },
                  { label: "HSE Inspections Completed", prefix: "inspections" },
                ].map((item) => (
                  <tr key={item.prefix}>
                    <td className={tableCellStyle + " font-semibold bg-[#f4f6f9]"}>{item.label}</td>
                    <td className={tableCellStyle}><input type="number" step="any" name={`${item.prefix}ThisMonth`} value={(formData as any)[`${item.prefix}ThisMonth`]} onChange={handleInputChange} className="w-full p-1 border-none outline-none text-center" /></td>
                    <td className={tableCellStyle}><input type="number" step="any" name={`${item.prefix}YTD`} value={(formData as any)[`${item.prefix}YTD`]} onChange={handleInputChange} className="w-full p-1 border-none outline-none text-center" /></td>
                    <td className={tableCellStyle}><input type="number" step="any" name={`${item.prefix}Target`} value={(formData as any)[`${item.prefix}Target`]} onChange={handleInputChange} className="w-full p-1 border-none outline-none text-center" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 4. INCIDENT SUMMARY */}
          <div className={subHeaderStyle}>4. INCIDENT SUMMARY</div>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse border border-[#dde3ec] text-sm">
              <thead>
                <tr>
                  <th className={tableHeaderStyle + " w-12"}>No.</th>
                  <th className={tableHeaderStyle}>Date</th>
                  <th className={tableHeaderStyle}>Type</th>
                  <th className={tableHeaderStyle}>Location</th>
                  <th className={tableHeaderStyle}>Description</th>
                  <th className={tableHeaderStyle}>Root Cause</th>
                  <th className={tableHeaderStyle}>Status</th>
                </tr>
              </thead>
              <tbody>
                {incidents.map((incident, idx) => (
                  <tr key={idx}>
                    <td className={tableCellStyle + " text-center"}>{idx + 1}</td>
                    <td className={tableCellStyle}><input type="date" value={incident.date} onChange={(e) => handleIncidentChange(idx, "date", e.target.value)} className="w-full p-1 border-none outline-none" /></td>
                    <td className={tableCellStyle}><input type="text" value={incident.type} onChange={(e) => handleIncidentChange(idx, "type", e.target.value)} className="w-full p-1 border-none outline-none" /></td>
                    <td className={tableCellStyle}><input type="text" value={incident.location} onChange={(e) => handleIncidentChange(idx, "location", e.target.value)} className="w-full p-1 border-none outline-none" /></td>
                    <td className={tableCellStyle}><input type="text" value={incident.description} onChange={(e) => handleIncidentChange(idx, "description", e.target.value)} className="w-full p-1 border-none outline-none" /></td>
                    <td className={tableCellStyle}><input type="text" value={incident.rootCause} onChange={(e) => handleIncidentChange(idx, "rootCause", e.target.value)} className="w-full p-1 border-none outline-none" /></td>
                    <td className={tableCellStyle}><input type="text" value={incident.status} onChange={(e) => handleIncidentChange(idx, "status", e.target.value)} className="w-full p-1 border-none outline-none" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button type="button" onClick={addIncident} className="mb-6 px-4 py-2 bg-[#081C2E] text-white text-xs rounded hover:bg-opacity-90 transition-all">
            + Add Incident
          </button>

          {/* 5. SAFETY ACTIVITIES COMPLETED */}
          <div className={subHeaderStyle}>5. SAFETY ACTIVITIES COMPLETED</div>
          <div className="grid grid-cols-1 gap-4 mb-6">
            <div>
              <label className="block text-sm font-semibold mb-1">Weekly Inspections Conducted (dates):</label>
              <input type="text" name="weeklyInspections" value={formData.weeklyInspections} onChange={handleInputChange} className={inputStyle} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Safety Drills Conducted:</label>
              <input type="text" name="safetyDrills" value={formData.safetyDrills} onChange={handleInputChange} className={inputStyle} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Training Sessions Held:</label>
              <input type="text" name="trainingSessions" value={formData.trainingSessions} onChange={handleInputChange} className={inputStyle} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Planned Task Observations (PTOs):</label>
              <input type="text" name="ptos" value={formData.ptos} onChange={handleInputChange} className={inputStyle} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Emergency Response Exercises:</label>
              <input type="text" name="emergencyExercises" value={formData.emergencyExercises} onChange={handleInputChange} className={inputStyle} />
            </div>
          </div>

          {/* 6. ISSUES & RECOMMENDATIONS */}
          <div className={subHeaderStyle}>6. ISSUES & RECOMMENDATIONS</div>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse border border-[#dde3ec] text-sm">
              <thead>
                <tr>
                  <th className={tableHeaderStyle + " w-12"}>No.</th>
                  <th className={tableHeaderStyle}>Observation / Issue</th>
                  <th className={tableHeaderStyle}>Recommendation</th>
                  <th className={tableHeaderStyle}>Responsible</th>
                </tr>
              </thead>
              <tbody>
                {recommendations.map((rec, idx) => (
                  <tr key={idx}>
                    <td className={tableCellStyle + " text-center"}>{idx + 1}</td>
                    <td className={tableCellStyle}><input type="text" value={rec.issue} onChange={(e) => handleRecChange(idx, "issue", e.target.value)} className="w-full p-1 border-none outline-none" /></td>
                    <td className={tableCellStyle}><input type="text" value={rec.recommendation} onChange={(e) => handleRecChange(idx, "recommendation", e.target.value)} className="w-full p-1 border-none outline-none" /></td>
                    <td className={tableCellStyle}><input type="text" value={rec.responsible} onChange={(e) => handleRecChange(idx, "responsible", e.target.value)} className="w-full p-1 border-none outline-none" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button type="button" onClick={addRecommendation} className="mb-6 px-4 py-2 bg-[#081C2E] text-white text-xs rounded hover:bg-opacity-90 transition-all">
            + Add Recommendation
          </button>

          {/* 7. PLANNED SAFETY ACTIVITIES – NEXT MONTH */}
          <div className={subHeaderStyle}>7. PLANNED SAFETY ACTIVITIES – NEXT MONTH</div>
          <textarea name="plannedActivitiesNextMonth" rows={4} value={formData.plannedActivitiesNextMonth} onChange={handleInputChange} className={inputStyle} placeholder="Outline key safety activities, audits, or training planned for the upcoming month..."></textarea>

          {/* 8. QUALITY CONTROL & ASSURANCE */}
          <div className={subHeaderStyle}>8. QUALITY CONTROL & ASSURANCE</div>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-[#dde3ec] text-sm">
              <thead>
                <tr>
                  <th className={tableHeaderStyle}>Metric</th>
                  <th className={tableHeaderStyle}>This Month</th>
                  <th className={tableHeaderStyle}>Target</th>
                  <th className={tableHeaderStyle}>Comments</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Core Recovery (%)", prefix: "coreRecovery" },
                  { label: "Core Orientation Accuracy", prefix: "coreOrientation" },
                  { label: "Sample Labelling Compliance", prefix: "sampleLabelling" },
                  { label: "Chain of Custody Breaches", prefix: "cocBreaches" },
                  { label: "Re-drills Required", prefix: "redrills" },
                  { label: "QA/QC Sample Issues (duplicates, blanks)", prefix: "qaqcIssues" },
                ].map((item) => (
                  <tr key={item.prefix}>
                    <td className={tableCellStyle + " font-semibold bg-[#f4f6f9]"}>{item.label}</td>
                    <td className={tableCellStyle}><input type="text" name={`${item.prefix}ThisMonth`} value={(formData as any)[`${item.prefix}ThisMonth`]} onChange={handleInputChange} className="w-full p-1 border-none outline-none text-center" /></td>
                    <td className={tableCellStyle}><input type="text" name={`${item.prefix}Target`} value={(formData as any)[`${item.prefix}Target`]} onChange={handleInputChange} className="w-full p-1 border-none outline-none text-center" /></td>
                    <td className={tableCellStyle}><input type="text" name={`${item.prefix}Comments`} value={(formData as any)[`${item.prefix}Comments`]} onChange={handleInputChange} className="w-full p-1 border-none outline-none" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 8A. QUALITY AUDITS / CHECKS */}
          <div className={subHeaderStyle}>8A. QUALITY AUDITS / CHECKS</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-semibold mb-1">Audits Conducted:</label>
              <input type="text" name="auditsConducted" value={formData.auditsConducted} onChange={handleInputChange} className={inputStyle} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Issues Identified:</label>
              <input type="text" name="issuesIdentified" value={formData.issuesIdentified} onChange={handleInputChange} className={inputStyle} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Corrective Actions:</label>
              <input type="text" name="correctiveActions" value={formData.correctiveActions} onChange={handleInputChange} className={inputStyle} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Continuous Improvement:</label>
              <input type="text" name="continuousImprovement" value={formData.continuousImprovement} onChange={handleInputChange} className={inputStyle} />
            </div>
          </div>

          {/* 9. ENVIRONMENTAL MANAGEMENT */}
          <div className={subHeaderStyle}>9. ENVIRONMENTAL MANAGEMENT</div>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-[#dde3ec] text-sm">
              <thead>
                <tr>
                  <th className={tableHeaderStyle}>Metric</th>
                  <th className={tableHeaderStyle}>This Month</th>
                  <th className={tableHeaderStyle}>YTD</th>
                  <th className={tableHeaderStyle}>Comments</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Fuel Spills (litres)", prefix: "fuelSpills" },
                  { label: "Hazardous Waste Disposals", prefix: "hazWaste" },
                  { label: "Grey Water Discharges", prefix: "greyWater" },
                  { label: "Dust Events / Complaints", prefix: "dustEvents" },
                  { label: "Non-Compliance Reports", prefix: "ncr" },
                  { label: "Waste Segregation Compliance (%)", prefix: "wasteSegregation" },
                ].map((item) => (
                  <tr key={item.prefix}>
                    <td className={tableCellStyle + " font-semibold bg-[#f4f6f9]"}>{item.label}</td>
                    <td className={tableCellStyle}><input type="text" name={`${item.prefix}ThisMonth`} value={(formData as any)[`${item.prefix}ThisMonth`]} onChange={handleInputChange} className="w-full p-1 border-none outline-none text-center" /></td>
                    <td className={tableCellStyle}><input type="text" name={`${item.prefix}YTD`} value={(formData as any)[`${item.prefix}YTD`]} onChange={handleInputChange} className="w-full p-1 border-none outline-none text-center" /></td>
                    <td className={tableCellStyle}><input type="text" name={`${item.prefix}Comments`} value={(formData as any)[`${item.prefix}Comments`]} onChange={handleInputChange} className="w-full p-1 border-none outline-none" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 9A. ENVIRONMENTAL INSPECTIONS & IMPROVEMENT */}
          <div className={subHeaderStyle}>9A. ENVIRONMENTAL INSPECTIONS & IMPROVEMENT</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-semibold mb-1">Inspections Conducted:</label>
              <input type="text" name="envInspections" value={formData.envInspections} onChange={handleInputChange} className={inputStyle} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Actions Taken:</label>
              <input type="text" name="envActionsTaken" value={formData.envActionsTaken} onChange={handleInputChange} className={inputStyle} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Improvement Initiatives:</label>
              <input type="text" name="envImprovementInitiatives" value={formData.envImprovementInitiatives} onChange={handleInputChange} className={inputStyle} />
            </div>
          </div>

          {/* 10. ATTACHMENTS */}
          <div className={subHeaderStyle}>10. ATTACHMENTS</div>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-[#dde3ec] text-sm">
              <thead>
                <tr>
                  <th className={tableHeaderStyle}>Document</th>
                  <th className={tableHeaderStyle}>Attached (Y/N)</th>
                  <th className={tableHeaderStyle}>Reference No.</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Site Inspection Checklists", prefix: "attachInspection" },
                  { label: "Incident Investigation Reports", prefix: "attachIncident" },
                  { label: "Training Attendance Sheets", prefix: "attachTraining" },
                  { label: "Toolbox Talk Records", prefix: "attachToolbox" },
                  { label: "Environmental Monitoring Data", prefix: "attachEnv" },
                  { label: "Corrective Action Reports", prefix: "attachCorrective" },
                ].map((item) => (
                  <tr key={item.prefix}>
                    <td className={tableCellStyle + " font-semibold bg-[#f4f6f9]"}>{item.label}</td>
                    <td className={tableCellStyle + " text-center"}>
                      <input type="checkbox" name={`${item.prefix}YN`} checked={(formData as any)[`${item.prefix}YN`]} onChange={handleInputChange} className="h-4 w-4 accent-[#081C2E]" />
                    </td>
                    <td className={tableCellStyle}><input type="text" name={`${item.prefix}Ref`} value={(formData as any)[`${item.prefix}Ref`]} onChange={handleInputChange} className="w-full p-1 border-none outline-none" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 11. SIGN-OFF */}
          <div className={subHeaderStyle}>11. SIGN-OFF</div>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-[#dde3ec] text-sm">
              <thead>
                <tr>
                  <th className={tableHeaderStyle}>Role</th>
                  <th className={tableHeaderStyle}>Name *</th>
                  <th className={tableHeaderStyle}>Signature (Full Name) *</th>
                  <th className={tableHeaderStyle}>Date *</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { role: "HSE Officer / Prepared By", prefix: "signOffHseOfficer" },
                  { role: "HSE Manager / Reviewed By", prefix: "signOffHseManager" },
                  { role: "Site Manager / Approved By", prefix: "signOffSiteManager" },
                  { role: "Operations Manager", prefix: "signOffOpsManager" },
                ].map((item) => (
                  <tr key={item.prefix}>
                    <td className={tableCellStyle + " font-semibold bg-[#f4f6f9]"}>{item.role}</td>
                    <td className={tableCellStyle}><input type="text" required name={`${item.prefix}Name`} value={(formData as any)[`${item.prefix}Name`]} onChange={handleInputChange} className="w-full p-1 border-none outline-none" /></td>
                    <td className={tableCellStyle}><input type="text" required placeholder="Full Name" className="w-full p-1 border-none outline-none italic" /></td>
                    <td className={tableCellStyle}><input type="date" required name={`${item.prefix}Date`} value={(formData as any)[`${item.prefix}Date`]} onChange={handleInputChange} className="w-full p-1 border-none outline-none" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex flex-col items-center">
            {error && <div className="text-red-600 mb-4 font-bold">{error}</div>}
            {submitted ? (
              <div className="text-green-700 bg-green-100 p-4 rounded-md text-center border border-green-300 w-full">
                <p className="font-bold text-lg mb-2">Form submitted successfully.</p>
                <a href={sheetUrl} target="_blank" rel="noopener noreferrer" className="text-[#081C2E] font-semibold underline hover:text-[#C49A28]">
                  View register: Google Sheet
                </a>
              </div>
            ) : (
              <button
                type="submit"
                disabled={mutation.isPending}
                className="bg-[#081C2E] text-white px-12 py-3 rounded-sm font-bold uppercase tracking-widest hover:bg-[#C49A28] transition-colors disabled:bg-gray-400"
              >
                {mutation.isPending ? "Submitting..." : "Submit Monthly Report"}
              </button>
            )}
          </div>
        </form>

        {/* Revision History */}
        <div className="mt-12 pt-8 border-t border-[#dde3ec]">
          <h3 className="text-sm font-bold text-[#081C2E] mb-4 uppercase">Revision History</h3>
          <table className="w-full border-collapse border border-[#dde3ec] text-[10px]">
            <thead>
              <tr className="bg-[#f4f6f9]">
                <th className="p-1 border border-[#dde3ec]">Rev</th>
                <th className="p-1 border border-[#dde3ec]">Date</th>
                <th className="p-1 border border-[#dde3ec]">Description of Changes</th>
                <th className="p-1 border border-[#dde3ec]">Author</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-1 border border-[#dde3ec] text-center">Rev00</td>
                <td className="p-1 border border-[#dde3ec] text-center">—</td>
                <td className="p-1 border border-[#dde3ec]">Initial issue</td>
                <td className="p-1 border border-[#dde3ec] text-center">—</td>
              </tr>
              <tr>
                <td className="p-1 border border-[#dde3ec] text-center font-bold">Rev01</td>
                <td className="p-1 border border-[#dde3ec] text-center">09 Apr 2026</td>
                <td className="p-1 border border-[#dde3ec]">Expanded safety KPIs (TRIR/LTIR/Severity Rate), added incident summary table, structured issues & recommendations, environmental improvement section, attachments checklist, 4-role sign-off. Reformatted to TE IMS standard.</td>
                <td className="p-1 border border-[#dde3ec] text-center">IMS Team</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
