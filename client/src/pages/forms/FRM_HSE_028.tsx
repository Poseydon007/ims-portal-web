import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_028() {
  const [submitted, setSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    reportingMonth: "",
    reportingYear: "",
    siteProject: "",
    preparedBy: "",
    datePrepared: "",
    reviewedByHse: "",
    approvedBySiteCeo: "",
    distribution: "HSE Manager, Site Manager, CEO, IMS File",
    // Summary Tables
    summaryCategory: {
      ua: { thisMonth: "", prevMonth: "" },
      uc: { thisMonth: "", prevMonth: "" },
      ppe: { thisMonth: "", prevMonth: "" },
      ptw: { thisMonth: "", prevMonth: "" },
      loto: { thisMonth: "", prevMonth: "" },
      trf: { thisMonth: "", prevMonth: "" },
      hk: { thisMonth: "", prevMonth: "" },
      env: { thisMonth: "", prevMonth: "" },
      fire: { thisMonth: "", prevMonth: "" },
      drg: { thisMonth: "", prevMonth: "" },
      oth: { thisMonth: "", prevMonth: "" },
      total: { thisMonth: "", prevMonth: "" },
    },
    summarySeverity: {
      minor: { thisMonth: "", prevMonth: "" },
      moderate: { thisMonth: "", prevMonth: "" },
      major: { thisMonth: "", prevMonth: "" },
      critical: { thisMonth: "", prevMonth: "" },
      total: { thisMonth: "", prevMonth: "" },
    },
    summaryDept: {
      crewA: { count: "", notes: "" },
      crewB: { count: "", notes: "" },
      geology: { count: "", notes: "" },
      logistics: { count: "", notes: "" },
      maintenance: { count: "", notes: "" },
      camp: { count: "", notes: "" },
      visitors: { count: "", notes: "" },
      subcon1Name: "",
      subcon1Count: "",
      subcon1Notes: "",
      subcon2Name: "",
      subcon2Count: "",
      subcon2Notes: "",
    },
    // Trend Commentary
    trend: "", // Improving, Stable, Deteriorating
    keyConcernArea: "",
    rootCauseThemes: "",
    trainingPlanned: "",
    targetNextMonth: "",
    hseCommentary: "",
    // Approval
    preparedByOfficer: "",
    preparedDate: "",
    reviewedByManager: "",
    reviewedDate: "",
    approvedByCeo: "",
    approvedDate: "",
  });

  const [violations, setViolations] = useState([
    { datePersonRoleCo: "", catSevDescImmActionCar: "" }
  ]);

  const [repeatOffenders, setRepeatOffenders] = useState([
    { nameCo: "", violationsCount: "", escalationAction: "" }
  ]);

  const [correctiveActions, setCorrectiveActions] = useState([
    { carNo: "", violationDesc: "", statusTargetOwner: "" }
  ]);

  const addViolation = () => setViolations([...violations, { datePersonRoleCo: "", catSevDescImmActionCar: "" }]);
  const addRepeatOffender = () => setRepeatOffenders([...repeatOffenders, { nameCo: "", violationsCount: "", escalationAction: "" }]);
  const addCorrectiveAction = () => setCorrectiveActions([...correctiveActions, { carNo: "", violationDesc: "", statusTargetOwner: "" }]);

  const mutation = trpc.formSubmissions.submit.useMutation({
    onSuccess: (data) => {
      setSubmitted(true);
      setSheetUrl(data.sheetUrl || "");
    },
    onError: (err) => {
      setError(err.message || "An error occurred during submission.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const headers = [
      "Reporting Month", "Reporting Year", "Site / Project", "Prepared By", "Date Prepared", "Reviewed By (HSE)", "Approved By (Site/CEO)", "Distribution",
      "UA - This Month", "UA - Prev Month", "UC - This Month", "UC - Prev Month", "PPE - This Month", "PPE - Prev Month", "PTW - This Month", "PTW - Prev Month",
      "LOTO - This Month", "LOTO - Prev Month", "TRF - This Month", "TRF - Prev Month", "HK - This Month", "HK - Prev Month", "ENV - This Month", "ENV - Prev Month",
      "FIRE - This Month", "FIRE - Prev Month", "DRG - This Month", "DRG - Prev Month", "OTH - This Month", "OTH - Prev Month", "TOTAL Cat - This Month", "TOTAL Cat - Prev Month",
      "1 Minor - This Month", "1 Minor - Prev Month", "2 Moderate - This Month", "2 Moderate - Prev Month", "3 Major - This Month", "3 Major - Prev Month", "4 Critical - This Month", "4 Critical - Prev Month", "TOTAL Sev - This Month", "TOTAL Sev - Prev Month",
      "Crew A Count", "Crew A Notes", "Crew B Count", "Crew B Notes", "Geology Count", "Geology Notes", "Logistics Count", "Logistics Notes", "Maintenance Count", "Maintenance Notes", "Camp Count", "Camp Notes", "Visitors Count", "Visitors Notes",
      "Subcon 1 Name", "Subcon 1 Count", "Subcon 1 Notes", "Subcon 2 Name", "Subcon 2 Count", "Subcon 2 Notes",
      "Violation Log", "Repeat Offenders", "Corrective Actions",
      "Trend", "Key Concern Area", "Root Cause Themes", "Training Planned", "Target Next Month", "HSE Commentary",
      "Prepared By Officer", "Prepared Date", "Reviewed By Manager", "Reviewed Date", "Approved By CEO", "Approved Date"
    ];

    const values = [
      formData.reportingMonth, formData.reportingYear, formData.siteProject, formData.preparedBy, formData.datePrepared, formData.reviewedByHse, formData.approvedBySiteCeo, formData.distribution,
      formData.summaryCategory.ua.thisMonth, formData.summaryCategory.ua.prevMonth,
      formData.summaryCategory.uc.thisMonth, formData.summaryCategory.uc.prevMonth,
      formData.summaryCategory.ppe.thisMonth, formData.summaryCategory.ppe.prevMonth,
      formData.summaryCategory.ptw.thisMonth, formData.summaryCategory.ptw.prevMonth,
      formData.summaryCategory.loto.thisMonth, formData.summaryCategory.loto.prevMonth,
      formData.summaryCategory.trf.thisMonth, formData.summaryCategory.trf.prevMonth,
      formData.summaryCategory.hk.thisMonth, formData.summaryCategory.hk.prevMonth,
      formData.summaryCategory.env.thisMonth, formData.summaryCategory.env.prevMonth,
      formData.summaryCategory.fire.thisMonth, formData.summaryCategory.fire.prevMonth,
      formData.summaryCategory.drg.thisMonth, formData.summaryCategory.drg.prevMonth,
      formData.summaryCategory.oth.thisMonth, formData.summaryCategory.oth.prevMonth,
      formData.summaryCategory.total.thisMonth, formData.summaryCategory.total.prevMonth,
      formData.summarySeverity.minor.thisMonth, formData.summarySeverity.minor.prevMonth,
      formData.summarySeverity.moderate.thisMonth, formData.summarySeverity.moderate.prevMonth,
      formData.summarySeverity.major.thisMonth, formData.summarySeverity.major.prevMonth,
      formData.summarySeverity.critical.thisMonth, formData.summarySeverity.critical.prevMonth,
      formData.summarySeverity.total.thisMonth, formData.summarySeverity.total.prevMonth,
      formData.summaryDept.crewA.count, formData.summaryDept.crewA.notes,
      formData.summaryDept.crewB.count, formData.summaryDept.crewB.notes,
      formData.summaryDept.geology.count, formData.summaryDept.geology.notes,
      formData.summaryDept.logistics.count, formData.summaryDept.logistics.notes,
      formData.summaryDept.maintenance.count, formData.summaryDept.maintenance.notes,
      formData.summaryDept.camp.count, formData.summaryDept.camp.notes,
      formData.summaryDept.visitors.count, formData.summaryDept.visitors.notes,
      formData.summaryDept.subcon1Name, formData.summaryDept.subcon1Count, formData.summaryDept.subcon1Notes,
      formData.summaryDept.subcon2Name, formData.summaryDept.subcon2Count, formData.summaryDept.subcon2Notes,
      violations.map(v => `${v.datePersonRoleCo} | ${v.catSevDescImmActionCar}`).join("; "),
      repeatOffenders.map(r => `${r.nameCo} | ${r.violationsCount} | ${r.escalationAction}`).join("; "),
      correctiveActions.map(c => `${c.carNo} | ${c.violationDesc} | ${c.statusTargetOwner}`).join("; "),
      formData.trend, formData.keyConcernArea, formData.rootCauseThemes, formData.trainingPlanned, formData.targetNextMonth, formData.hseCommentary,
      formData.preparedByOfficer, formData.preparedDate, formData.reviewedByManager, formData.reviewedDate, formData.approvedByCeo, formData.approvedDate
    ];

    mutation.mutate({
      formCode: "TE-IMS-FRM-HSE-028",
      headers,
      values,
    });
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto py-10 text-center">
          <h1 className="text-3xl font-bold text-[#081C2E] mb-4">Form Submitted Successfully</h1>
          <p className="text-lg mb-6">Your Monthly HSE Violation Report has been recorded.</p>
          <a
            href={sheetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C49A28] text-white px-6 py-3 rounded font-bold hover:bg-[#a38021] transition-colors"
          >
            View Register (Google Sheet)
          </a>
          <div className="mt-8">
            <Link href="/" className="text-[#081C2E] underline">← Back to Portal Home</Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto pb-20">
        <div className="mb-6">
          <Link href="/" className="text-[#081C2E] hover:underline">← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/docs/frm" className="text-gray-400 hover:text-[#C49A28] transition-colors cursor-pointer">FRM</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600 font-semibold">Monthly HSE Violation Report</span>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-lg border border-[#dde3ec]">
          {/* Document Control Header */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border-b border-[#dde3ec]">
              <thead>
                <tr className="bg-[#081C2E] text-white">
                  <th colSpan={4} className="p-4 text-left text-xl">MONTHLY HSE VIOLATION REPORT</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="p-2 border border-[#dde3ec] bg-gray-50 font-bold w-1/4">Document Code</td>
                  <td className="p-2 border border-[#dde3ec] w-1/4">TE-IMS-FRM-HSE-028</td>
                  <td className="p-2 border border-[#dde3ec] bg-gray-50 font-bold w-1/4">Revision</td>
                  <td className="p-2 border border-[#dde3ec] w-1/4">02</td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#dde3ec] bg-gray-50 font-bold">Date</td>
                  <td className="p-2 border border-[#dde3ec]">11.04.2026</td>
                  <td className="p-2 border border-[#dde3ec] bg-gray-50 font-bold">Status</td>
                  <td className="p-2 border border-[#dde3ec]">Approved for Implementation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-6 space-y-8">
            {/* 1. Report Details */}
            <section>
              <h2 className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">1. REPORT DETAILS</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-[#dde3ec] p-4 rounded bg-[#f4f6f9]">
                <div>
                  <label className="block text-sm font-bold mb-1">Reporting Month *</label>
                  <input
                    type="text"
                    required
                    className="w-full p-2 border border-[#dde3ec] rounded"
                    placeholder="e.g. April"
                    value={formData.reportingMonth}
                    onChange={(e) => setFormData({ ...formData, reportingMonth: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Reporting Year *</label>
                  <input
                    type="number"
                    required
                    className="w-full p-2 border border-[#dde3ec] rounded"
                    placeholder="2026"
                    value={formData.reportingYear}
                    onChange={(e) => setFormData({ ...formData, reportingYear: e.target.value })}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold mb-1">Site / Project *</label>
                  <input
                    type="text"
                    required
                    className="w-full p-2 border border-[#dde3ec] rounded"
                    value={formData.siteProject}
                    onChange={(e) => setFormData({ ...formData, siteProject: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Prepared By (Name / Position) *</label>
                  <input
                    type="text"
                    required
                    className="w-full p-2 border border-[#dde3ec] rounded"
                    value={formData.preparedBy}
                    onChange={(e) => setFormData({ ...formData, preparedBy: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Date Prepared *</label>
                  <input
                    type="date"
                    required
                    className="w-full p-2 border border-[#dde3ec] rounded"
                    value={formData.datePrepared}
                    onChange={(e) => setFormData({ ...formData, datePrepared: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Reviewed By (HSE Manager)</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-[#dde3ec] rounded"
                    value={formData.reviewedByHse}
                    onChange={(e) => setFormData({ ...formData, reviewedByHse: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Approved By (Site Manager / CEO)</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-[#dde3ec] rounded"
                    value={formData.approvedBySiteCeo}
                    onChange={(e) => setFormData({ ...formData, approvedBySiteCeo: e.target.value })}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold mb-1">Distribution</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-[#dde3ec] rounded bg-gray-50"
                    readOnly
                    value={formData.distribution}
                  />
                </div>
              </div>
            </section>

            {/* 2. Violation Categories Reference (Info Box) */}
            <section>
              <h2 className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">2. VIOLATION CATEGORIES REFERENCE</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[#dde3ec] text-xs">
                  <thead>
                    <tr className="bg-[#081C2E] text-white">
                      <th className="p-2 border border-[#dde3ec] w-16">Code</th>
                      <th className="p-2 border border-[#dde3ec] w-48">Category</th>
                      <th className="p-2 border border-[#dde3ec]">Examples</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { code: "UA", cat: "Unsafe Act", ex: "Bypassing a control, not following procedure, horseplay, unauthorised entry" },
                      { code: "UC", cat: "Unsafe Condition", ex: "Damaged equipment, poor housekeeping, missing guards, defective PPE stock" },
                      { code: "PPE", cat: "PPE Violation", ex: "Not wearing required PPE, wearing damaged PPE, wrong PPE for the task" },
                      { code: "PTW", cat: "Permit-to-Work Breach", ex: "Work without valid permit, working outside permit scope, permit expired" },
                      { code: "LOTO", cat: "Lockout/Tagout Violation", ex: "Energising locked-out equipment, missing lock, unauthorised removal of tag" },
                      { code: "TRF", cat: "Traffic / Driving Violation", ex: "Speeding, seatbelt, mobile phone use, unauthorised driver, reversing without spotter" },
                      { code: "HK", cat: "Housekeeping", ex: "Blocked access, trip hazards, untidy work area, debris around drill pad" },
                      { code: "ENV", cat: "Environmental Violation", ex: "Spill without bund, improper waste segregation, unbunded fuel storage" },
                      { code: "FIRE", cat: "Fire / Hot Work", ex: "Hot work without permit, missing extinguisher, blocked escape route" },
                      { code: "DRG", cat: "Drugs & Alcohol", ex: "Positive test, refusal to test, failure to declare medication" },
                      { code: "OTH", cat: "Other", ex: "Any violation not covered above (specify in description)" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="p-2 border border-[#dde3ec] font-bold text-center">{row.code}</td>
                        <td className="p-2 border border-[#dde3ec] font-bold">{row.cat}</td>
                        <td className="p-2 border border-[#dde3ec]">{row.ex}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-2 text-xs text-gray-600 bg-yellow-50 p-2 border border-yellow-200 rounded">
                <strong>Severity scale:</strong> 1 = Minor (verbal warning), 2 = Moderate (written warning), 3 = Major (formal CAR required), 4 = Critical (stop-work triggered).
              </div>
            </section>

            {/* 3. Violation Log */}
            <section>
              <h2 className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">3. VIOLATION LOG</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[#dde3ec]">
                  <thead>
                    <tr className="bg-[#081C2E] text-white text-xs">
                      <th className="p-2 border border-[#dde3ec] w-12 text-center">#</th>
                      <th className="p-2 border border-[#dde3ec]">Date / Person / Role / Company</th>
                      <th className="p-2 border border-[#dde3ec]">Category / Severity / Description / Immediate Action / CAR No.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {violations.map((row, index) => (
                      <tr key={index}>
                        <td className="p-2 border border-[#dde3ec] text-center text-sm font-bold">{String(index + 1).padStart(2, '0')}</td>
                        <td className="p-2 border border-[#dde3ec]">
                          <textarea
                            className="w-full p-1 text-sm border-none focus:ring-0 resize-none"
                            rows={2}
                            placeholder="e.g. 12.04.26 / Ahmed Khan / Driller / Contractor X"
                            value={row.datePersonRoleCo}
                            onChange={(e) => {
                              const newViolations = [...violations];
                              newViolations[index].datePersonRoleCo = e.target.value;
                              setViolations(newViolations);
                            }}
                          />
                        </td>
                        <td className="p-2 border border-[#dde3ec]">
                          <textarea
                            className="w-full p-1 text-sm border-none focus:ring-0 resize-none"
                            rows={2}
                            placeholder="e.g. PPE / 2 / No safety glasses / Issued glasses / N/A"
                            value={row.catSevDescImmActionCar}
                            onChange={(e) => {
                              const newViolations = [...violations];
                              newViolations[index].catSevDescImmActionCar = e.target.value;
                              setViolations(newViolations);
                            }}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button
                type="button"
                onClick={addViolation}
                className="mt-2 text-sm text-[#C49A28] font-bold hover:underline"
              >
                + Add Row
              </button>
            </section>

            {/* 4-6. Monthly Summaries */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Category Summary */}
              <div>
                <h2 className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 text-sm">4. SUMMARY — BY CATEGORY</h2>
                <table className="w-full border-collapse border border-[#dde3ec] text-xs">
                  <thead>
                    <tr className="bg-[#081C2E] text-white">
                      <th className="p-2 border border-[#dde3ec]">Category</th>
                      <th className="p-2 border border-[#dde3ec] w-20">This Month</th>
                      <th className="p-2 border border-[#dde3ec] w-20">Prev Month</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { key: "ua", label: "UA — Unsafe Act" },
                      { key: "uc", label: "UC — Unsafe Condition" },
                      { key: "ppe", label: "PPE — PPE Violation" },
                      { key: "ptw", label: "PTW — Permit Breach" },
                      { key: "loto", label: "LOTO — LOTO Violation" },
                      { key: "trf", label: "TRF — Traffic Violation" },
                      { key: "hk", label: "HK — Housekeeping" },
                      { key: "env", label: "ENV — Environmental" },
                      { key: "fire", label: "FIRE — Fire / Hot Work" },
                      { key: "drg", label: "DRG — Drugs & Alcohol" },
                      { key: "oth", label: "OTH — Other" },
                      { key: "total", label: "TOTAL", bold: true },
                    ].map((row) => (
                      <tr key={row.key} className={row.bold ? "bg-gray-100 font-bold" : ""}>
                        <td className="p-2 border border-[#dde3ec]">{row.label}</td>
                        <td className="p-2 border border-[#dde3ec]">
                          <input
                            type="number"
                            className="w-full p-1 text-center bg-transparent border-none"
                            value={formData.summaryCategory[row.key as keyof typeof formData.summaryCategory].thisMonth}
                            onChange={(e) => {
                              const newSummary = { ...formData.summaryCategory };
                              (newSummary[row.key as keyof typeof formData.summaryCategory] as any).thisMonth = e.target.value;
                              setFormData({ ...formData, summaryCategory: newSummary });
                            }}
                          />
                        </td>
                        <td className="p-2 border border-[#dde3ec]">
                          <input
                            type="number"
                            className="w-full p-1 text-center bg-transparent border-none"
                            value={formData.summaryCategory[row.key as keyof typeof formData.summaryCategory].prevMonth}
                            onChange={(e) => {
                              const newSummary = { ...formData.summaryCategory };
                              (newSummary[row.key as keyof typeof formData.summaryCategory] as any).prevMonth = e.target.value;
                              setFormData({ ...formData, summaryCategory: newSummary });
                            }}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Severity Summary */}
              <div className="space-y-8">
                <div>
                  <h2 className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 text-sm">5. SUMMARY — BY SEVERITY</h2>
                  <table className="w-full border-collapse border border-[#dde3ec] text-xs">
                    <thead>
                      <tr className="bg-[#081C2E] text-white">
                        <th className="p-2 border border-[#dde3ec]">Severity</th>
                        <th className="p-2 border border-[#dde3ec] w-20">This Month</th>
                        <th className="p-2 border border-[#dde3ec] w-20">Prev Month</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { key: "minor", label: "1 — Minor" },
                        { key: "moderate", label: "2 — Moderate" },
                        { key: "major", label: "3 — Major (CAR)" },
                        { key: "critical", label: "4 — Critical (Stop)" },
                        { key: "total", label: "TOTAL", bold: true },
                      ].map((row) => (
                        <tr key={row.key} className={row.bold ? "bg-gray-100 font-bold" : ""}>
                          <td className="p-2 border border-[#dde3ec]">{row.label}</td>
                          <td className="p-2 border border-[#dde3ec]">
                            <input
                              type="number"
                              className="w-full p-1 text-center bg-transparent border-none"
                              value={formData.summarySeverity[row.key as keyof typeof formData.summarySeverity].thisMonth}
                              onChange={(e) => {
                                const newSummary = { ...formData.summarySeverity };
                                (newSummary[row.key as keyof typeof formData.summarySeverity] as any).thisMonth = e.target.value;
                                setFormData({ ...formData, summarySeverity: newSummary });
                              }}
                            />
                          </td>
                          <td className="p-2 border border-[#dde3ec]">
                            <input
                              type="number"
                              className="w-full p-1 text-center bg-transparent border-none"
                              value={formData.summarySeverity[row.key as keyof typeof formData.summarySeverity].prevMonth}
                              onChange={(e) => {
                                const newSummary = { ...formData.summarySeverity };
                                (newSummary[row.key as keyof typeof formData.summarySeverity] as any).prevMonth = e.target.value;
                                setFormData({ ...formData, summarySeverity: newSummary });
                              }}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Dept Summary */}
                <div>
                  <h2 className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 text-sm">6. SUMMARY — BY DEPT / CONTRACTOR</h2>
                  <table className="w-full border-collapse border border-[#dde3ec] text-xs">
                    <thead>
                      <tr className="bg-[#081C2E] text-white">
                        <th className="p-2 border border-[#dde3ec]">Department / Contractor</th>
                        <th className="p-2 border border-[#dde3ec] w-16">Count</th>
                        <th className="p-2 border border-[#dde3ec]">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { key: "crewA", label: "Drilling Crew A" },
                        { key: "crewB", label: "Drilling Crew B" },
                        { key: "geology", label: "Geology / Sampling" },
                        { key: "logistics", label: "Logistics / Vehicles" },
                        { key: "maintenance", label: "Maintenance" },
                        { key: "camp", label: "Camp Services" },
                        { key: "visitors", label: "Visitors" },
                      ].map((row) => (
                        <tr key={row.key}>
                          <td className="p-2 border border-[#dde3ec] font-semibold">{row.label}</td>
                          <td className="p-2 border border-[#dde3ec]">
                            <input
                              type="number"
                              className="w-full p-1 text-center bg-transparent border-none"
                              value={(formData.summaryDept[row.key as keyof typeof formData.summaryDept] as { count: string; notes: string }).count}
                              onChange={(e) => {
                                const newSummary = { ...formData.summaryDept };
                                (newSummary[row.key as keyof typeof formData.summaryDept] as any).count = e.target.value;
                                setFormData({ ...formData, summaryDept: newSummary });
                              }}
                            />
                          </td>
                          <td className="p-2 border border-[#dde3ec]">
                            <input
                              type="text"
                              className="w-full p-1 bg-transparent border-none"
                              value={(formData.summaryDept[row.key as keyof typeof formData.summaryDept] as { count: string; notes: string }).notes}
                              onChange={(e) => {
                                const newSummary = { ...formData.summaryDept };
                                (newSummary[row.key as keyof typeof formData.summaryDept] as any).notes = e.target.value;
                                setFormData({ ...formData, summaryDept: newSummary });
                              }}
                            />
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td className="p-2 border border-[#dde3ec]">
                          <input
                            type="text"
                            placeholder="Sub-contractor name"
                            className="w-full p-1 font-semibold bg-transparent border-none"
                            value={formData.summaryDept.subcon1Name}
                            onChange={(e) => setFormData({ ...formData, summaryDept: { ...formData.summaryDept, subcon1Name: e.target.value } })}
                          />
                        </td>
                        <td className="p-2 border border-[#dde3ec]">
                          <input
                            type="number"
                            className="w-full p-1 text-center bg-transparent border-none"
                            value={formData.summaryDept.subcon1Count}
                            onChange={(e) => setFormData({ ...formData, summaryDept: { ...formData.summaryDept, subcon1Count: e.target.value } })}
                          />
                        </td>
                        <td className="p-2 border border-[#dde3ec]">
                          <input
                            type="text"
                            className="w-full p-1 bg-transparent border-none"
                            value={formData.summaryDept.subcon1Notes}
                            onChange={(e) => setFormData({ ...formData, summaryDept: { ...formData.summaryDept, subcon1Notes: e.target.value } })}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-[#dde3ec]">
                          <input
                            type="text"
                            placeholder="Sub-contractor name"
                            className="w-full p-1 font-semibold bg-transparent border-none"
                            value={formData.summaryDept.subcon2Name}
                            onChange={(e) => setFormData({ ...formData, summaryDept: { ...formData.summaryDept, subcon2Name: e.target.value } })}
                          />
                        </td>
                        <td className="p-2 border border-[#dde3ec]">
                          <input
                            type="number"
                            className="w-full p-1 text-center bg-transparent border-none"
                            value={formData.summaryDept.subcon2Count}
                            onChange={(e) => setFormData({ ...formData, summaryDept: { ...formData.summaryDept, subcon2Count: e.target.value } })}
                          />
                        </td>
                        <td className="p-2 border border-[#dde3ec]">
                          <input
                            type="text"
                            className="w-full p-1 bg-transparent border-none"
                            value={formData.summaryDept.subcon2Notes}
                            onChange={(e) => setFormData({ ...formData, summaryDept: { ...formData.summaryDept, subcon2Notes: e.target.value } })}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* 7. Repeat Offenders */}
            <section>
              <h2 className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">7. REPEAT OFFENDERS / ESCALATION</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[#dde3ec]">
                  <thead>
                    <tr className="bg-[#081C2E] text-white text-xs">
                      <th className="p-2 border border-[#dde3ec]">Name / Company</th>
                      <th className="p-2 border border-[#dde3ec] w-32">Violations Count</th>
                      <th className="p-2 border border-[#dde3ec]">Escalation Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {repeatOffenders.map((row, index) => (
                      <tr key={index}>
                        <td className="p-2 border border-[#dde3ec]">
                          <input
                            type="text"
                            className="w-full p-1 text-sm border-none focus:ring-0"
                            value={row.nameCo}
                            onChange={(e) => {
                              const newRows = [...repeatOffenders];
                              newRows[index].nameCo = e.target.value;
                              setRepeatOffenders(newRows);
                            }}
                          />
                        </td>
                        <td className="p-2 border border-[#dde3ec]">
                          <input
                            type="number"
                            className="w-full p-1 text-sm border-none focus:ring-0 text-center"
                            value={row.violationsCount}
                            onChange={(e) => {
                              const newRows = [...repeatOffenders];
                              newRows[index].violationsCount = e.target.value;
                              setRepeatOffenders(newRows);
                            }}
                          />
                        </td>
                        <td className="p-2 border border-[#dde3ec]">
                          <input
                            type="text"
                            className="w-full p-1 text-sm border-none focus:ring-0"
                            value={row.escalationAction}
                            onChange={(e) => {
                              const newRows = [...repeatOffenders];
                              newRows[index].escalationAction = e.target.value;
                              setRepeatOffenders(newRows);
                            }}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button
                type="button"
                onClick={addRepeatOffender}
                className="mt-2 text-sm text-[#C49A28] font-bold hover:underline"
              >
                + Add Row
              </button>
            </section>

            {/* 8. Corrective Actions Raised */}
            <section>
              <h2 className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">8. CORRECTIVE ACTIONS RAISED</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[#dde3ec]">
                  <thead>
                    <tr className="bg-[#081C2E] text-white text-xs">
                      <th className="p-2 border border-[#dde3ec] w-32">CAR No.</th>
                      <th className="p-2 border border-[#dde3ec]">Linked Violation / Description</th>
                      <th className="p-2 border border-[#dde3ec]">Status / Target Close Date / Owner</th>
                    </tr>
                  </thead>
                  <tbody>
                    {correctiveActions.map((row, index) => (
                      <tr key={index}>
                        <td className="p-2 border border-[#dde3ec]">
                          <input
                            type="text"
                            className="w-full p-1 text-sm border-none focus:ring-0"
                            placeholder="CAR-2026-XXX"
                            value={row.carNo}
                            onChange={(e) => {
                              const newRows = [...correctiveActions];
                              newRows[index].carNo = e.target.value;
                              setCorrectiveActions(newRows);
                            }}
                          />
                        </td>
                        <td className="p-2 border border-[#dde3ec]">
                          <textarea
                            className="w-full p-1 text-sm border-none focus:ring-0 resize-none"
                            rows={1}
                            value={row.violationDesc}
                            onChange={(e) => {
                              const newRows = [...correctiveActions];
                              newRows[index].violationDesc = e.target.value;
                              setCorrectiveActions(newRows);
                            }}
                          />
                        </td>
                        <td className="p-2 border border-[#dde3ec]">
                          <textarea
                            className="w-full p-1 text-sm border-none focus:ring-0 resize-none"
                            rows={1}
                            value={row.statusTargetOwner}
                            onChange={(e) => {
                              const newRows = [...correctiveActions];
                              newRows[index].statusTargetOwner = e.target.value;
                              setCorrectiveActions(newRows);
                            }}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button
                type="button"
                onClick={addCorrectiveAction}
                className="mt-2 text-sm text-[#C49A28] font-bold hover:underline"
              >
                + Add Row
              </button>
            </section>

            {/* 9. Trend Commentary */}
            <section>
              <h2 className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">9. TREND COMMENTARY AND TARGET</h2>
              <div className="grid grid-cols-1 gap-4 border border-[#dde3ec] p-4 rounded bg-[#f4f6f9]">
                <div>
                  <label className="block text-sm font-bold mb-2">Trend vs Previous Month</label>
                  <div className="flex gap-6">
                    {["Improving", "Stable", "Deteriorating"].map((opt) => (
                      <label key={opt} className="flex items-center gap-2 text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-4 h-4"
                          checked={formData.trend === opt}
                          onChange={() => setFormData({ ...formData, trend: opt })}
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-1">Key Concern Area</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-[#dde3ec] rounded"
                      value={formData.keyConcernArea}
                      onChange={(e) => setFormData({ ...formData, keyConcernArea: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1">Root Cause Themes</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-[#dde3ec] rounded"
                      value={formData.rootCauseThemes}
                      onChange={(e) => setFormData({ ...formData, rootCauseThemes: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Training / Toolbox Talks Planned</label>
                  <textarea
                    className="w-full p-2 border border-[#dde3ec] rounded"
                    rows={2}
                    value={formData.trainingPlanned}
                    onChange={(e) => setFormData({ ...formData, trainingPlanned: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Target for Next Month (measurable)</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-[#dde3ec] rounded"
                    value={formData.targetNextMonth}
                    onChange={(e) => setFormData({ ...formData, targetNextMonth: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">HSE Manager Commentary</label>
                  <textarea
                    className="w-full p-2 border border-[#dde3ec] rounded"
                    rows={3}
                    value={formData.hseCommentary}
                    onChange={(e) => setFormData({ ...formData, hseCommentary: e.target.value })}
                  />
                </div>
              </div>
            </section>

            {/* 10. Approval */}
            <section>
              <h2 className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">10. APPROVAL</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border border-[#dde3ec] p-4 rounded bg-[#f4f6f9]">
                <div>
                  <label className="block text-sm font-bold mb-1">Prepared By (HSE Officer) *</label>
                  <input
                    type="text"
                    required
                    className="w-full p-2 border border-[#dde3ec] rounded"
                    value={formData.preparedByOfficer}
                    onChange={(e) => setFormData({ ...formData, preparedByOfficer: e.target.value })}
                  />
                  <label className="block text-xs text-gray-500 mt-1">Signature (Full Name) & Date</label>
                  <input
                    type="text"
                    required
                    className="w-full p-2 border border-[#dde3ec] rounded mt-1"
                    placeholder="Signature & Date"
                    value={formData.preparedDate}
                    onChange={(e) => setFormData({ ...formData, preparedDate: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Reviewed By (HSE Manager)</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-[#dde3ec] rounded"
                    value={formData.reviewedByManager}
                    onChange={(e) => setFormData({ ...formData, reviewedByManager: e.target.value })}
                  />
                  <label className="block text-xs text-gray-500 mt-1">Signature (Full Name) & Date</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-[#dde3ec] rounded mt-1"
                    placeholder="Signature & Date"
                    value={formData.reviewedDate}
                    onChange={(e) => setFormData({ ...formData, reviewedDate: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Approved By (CEO)</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-[#dde3ec] rounded"
                    value={formData.approvedByCeo}
                    onChange={(e) => setFormData({ ...formData, approvedByCeo: e.target.value })}
                  />
                  <label className="block text-xs text-gray-500 mt-1">Signature (Full Name) & Date</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-[#dde3ec] rounded mt-1"
                    placeholder="Signature & Date"
                    value={formData.approvedDate}
                    onChange={(e) => setFormData({ ...formData, approvedDate: e.target.value })}
                  />
                </div>
              </div>
              <p className="mt-4 text-xs text-gray-500 italic">Retention: 5 years minimum, per PROC-SYS-003 Document Control</p>
            </section>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded">
                {error}
              </div>
            )}

            <div className="flex justify-end pt-6">
              <button
                type="submit"
                disabled={mutation.isPending}
                className="bg-[#081C2E] text-white px-10 py-3 rounded font-bold hover:bg-[#122b42] transition-colors disabled:opacity-50"
              >
                {mutation.isPending ? "Submitting..." : "Submit Report"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
