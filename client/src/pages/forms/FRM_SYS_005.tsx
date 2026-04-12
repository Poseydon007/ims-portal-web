import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_SYS_005() {
  const [submitted, setSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

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
    auditDate: "",
    auditors: "",
    auditPeriod: "",
    locationArea: "",
    // Section 1: Safety & Health
    safetyItems: [
      { id: "1.1", desc: "Site-specific safety induction completed for all personnel", status: "", score: "", comments: "" },
      { id: "1.2", desc: "Toolbox talks conducted regularly and documented", status: "", score: "", comments: "" },
      { id: "1.3", desc: "PPE compliance (hard hats, safety boots, hearing protection, hi-vis, gloves)", status: "", score: "", comments: "" },
      { id: "1.4", desc: "Emergency evacuation plan posted and understood by all personnel", status: "", score: "", comments: "" },
      { id: "1.5", desc: "First aid kits stocked, accessible, and within expiry", status: "", score: "", comments: "" },
      { id: "1.6", desc: "Fire extinguishers inspected and service dates current", status: "", score: "", comments: "" },
      { id: "1.7", desc: "LOTO procedures applied correctly during maintenance", status: "", score: "", comments: "" },
      { id: "1.8", desc: "Incident reports completed and investigations closed out", status: "", score: "", comments: "" },
      { id: "1.9", desc: "Heat stress controls in place (water, shade, rest schedules)", status: "", score: "", comments: "" },
      { id: "1.10", desc: "Hazard identification and risk assessments current for all activities", status: "", score: "", comments: "" },
    ],
    // Section 2: Environmental Compliance
    envItems: [
      { id: "2.1", desc: "Spill kits present and fully stocked", status: "", score: "", comments: "" },
      { id: "2.2", desc: "No evidence of fuel or chemical spills on ground", status: "", score: "", comments: "" },
      { id: "2.3", desc: "Drill cuttings and fluids managed appropriately", status: "", score: "", comments: "" },
      { id: "2.4", desc: "Waste disposed of correctly (oily rags, filters, general waste)", status: "", score: "", comments: "" },
      { id: "2.5", desc: "Bunding around fuel and chemical storage areas", status: "", score: "", comments: "" },
      { id: "2.6", desc: "Waste segregation practiced (hazardous vs non-hazardous)", status: "", score: "", comments: "" },
    ],
    // Section 3: Equipment & Maintenance
    equipItems: [
      { id: "3.1", desc: "Daily pre-start checks completed and signed", status: "", score: "", comments: "" },
      { id: "3.2", desc: "Maintenance logs up to date", status: "", score: "", comments: "" },
      { id: "3.3", desc: "Guards on all rotating equipment and belts", status: "", score: "", comments: "" },
      { id: "3.4", desc: "Emergency shut-offs functioning and accessible", status: "", score: "", comments: "" },
      { id: "3.5", desc: "Equipment clean and in good working condition", status: "", score: "", comments: "" },
      { id: "3.6", desc: "Portable electrical equipment tested and tagged", status: "", score: "", comments: "" },
    ],
    // Section 4: Drill Site Conditions
    siteItems: [
      { id: "4.1", desc: "Drill pad layout organised and free of tripping hazards", status: "", score: "", comments: "" },
      { id: "4.2", desc: "Lighting adequate for 24-hour operations (if applicable)", status: "", score: "", comments: "" },
      { id: "4.3", desc: "Core handling and storage areas maintained", status: "", score: "", comments: "" },
      { id: "4.4", desc: "Rod racks and materials stored securely", status: "", score: "", comments: "" },
    ],
    // Section 5: Documentation & Training
    docItems: [
      { id: "5.1", desc: "Permits and approvals current and available on site", status: "", score: "", comments: "" },
      { id: "5.2", desc: "Training records available and up to date", status: "", score: "", comments: "" },
      { id: "5.3", desc: "Site-specific JHAs and SWPs available", status: "", score: "", comments: "" },
      { id: "5.4", desc: "Safety data sheets (SDS) available for all hazardous substances", status: "", score: "", comments: "" },
    ],
    // Scores
    safetyScore: "",
    envScore: "",
    equipScore: "",
    siteScore: "",
    docScore: "",
    totalScore: "",
    overallAssessment: "", // Satisfactory, Needs Improvement, Non-Compliant
    // Section 7: Findings
    findings: [
      { no: "1", category: "", observation: "", risk: "", action: "", responsible: "", targetDate: "" },
      { no: "2", category: "", observation: "", risk: "", action: "", responsible: "", targetDate: "" },
      { no: "3", category: "", observation: "", risk: "", action: "", responsible: "", targetDate: "" },
      { no: "4", category: "", observation: "", risk: "", action: "", responsible: "", targetDate: "" },
      { no: "5", category: "", observation: "", risk: "", action: "", responsible: "", targetDate: "" },
      { no: "6", category: "", observation: "", risk: "", action: "", responsible: "", targetDate: "" },
    ],
    executiveSummary: "",
    // Sign-off
    leadAuditorName: "",
    leadAuditorSig: "",
    leadAuditorDate: "",
    coAuditorName: "",
    coAuditorSig: "",
    coAuditorDate: "",
    siteManagerName: "",
    siteManagerSig: "",
    siteManagerDate: "",
    hseManagerName: "",
    hseManagerSig: "",
    hseManagerDate: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleTableChange = (section: string, index: number, field: string, value: string) => {
    setFormData((prev: any) => {
      const updatedSection = [...prev[section]];
      updatedSection[index] = { ...updatedSection[index], [field]: value };
      return { ...prev, [section]: updatedSection };
    });
  };

  const addFindingRow = () => {
    setFormData((prev) => ({
      ...prev,
      findings: [
        ...prev.findings,
        { no: (prev.findings.length + 1).toString(), category: "", observation: "", risk: "", action: "", responsible: "", targetDate: "" },
      ],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const headers = [
      "Site / Project", "Audit Date", "Auditor(s)", "Audit Period", "Location / Area",
      ...formData.safetyItems.flatMap(item => [`Safety ${item.id} Status`, `Safety ${item.id} Score`, `Safety ${item.id} Comments`]),
      ...formData.envItems.flatMap(item => [`Env ${item.id} Status`, `Env ${item.id} Score`, `Env ${item.id} Comments`]),
      ...formData.equipItems.flatMap(item => [`Equip ${item.id} Status`, `Equip ${item.id} Score`, `Equip ${item.id} Comments`]),
      ...formData.siteItems.flatMap(item => [`Site ${item.id} Status`, `Site ${item.id} Score`, `Site ${item.id} Comments`]),
      ...formData.docItems.flatMap(item => [`Doc ${item.id} Status`, `Doc ${item.id} Score`, `Doc ${item.id} Comments`]),
      "Safety & Health Score", "Environmental Score", "Equipment & Maintenance Score", "Drill Site Conditions Score", "Documentation & Training Score", "TOTAL SCORE", "Overall Assessment",
      "Executive Summary",
      "Lead Auditor Name", "Lead Auditor Date",
      "Co-Auditor Name", "Co-Auditor Date",
      "Site Manager Name", "Site Manager Date",
      "HSE Manager Name", "HSE Manager Date"
    ];

    const values = [
      formData.siteProject, formData.auditDate, formData.auditors, formData.auditPeriod, formData.locationArea,
      ...formData.safetyItems.flatMap(item => [item.status, item.score, item.comments]),
      ...formData.envItems.flatMap(item => [item.status, item.score, item.comments]),
      ...formData.equipItems.flatMap(item => [item.status, item.score, item.comments]),
      ...formData.siteItems.flatMap(item => [item.status, item.score, item.comments]),
      ...formData.docItems.flatMap(item => [item.status, item.score, item.comments]),
      formData.safetyScore, formData.envScore, formData.equipScore, formData.siteScore, formData.docScore, formData.totalScore, formData.overallAssessment,
      formData.executiveSummary,
      formData.leadAuditorName, formData.leadAuditorDate,
      formData.coAuditorName, formData.coAuditorDate,
      formData.siteManagerName, formData.siteManagerDate,
      formData.hseManagerName, formData.hseManagerDate
    ];

    // Add findings to headers/values
    formData.findings.forEach((f, i) => {
      headers.push(`Finding ${i+1} Category`, `Finding ${i+1} Observation`, `Finding ${i+1} Risk`, `Finding ${i+1} Action`, `Finding ${i+1} Responsible`, `Finding ${i+1} Target Date`);
      values.push(f.category, f.observation, f.risk, f.action, f.responsible, f.targetDate);
    });

    mutation.mutate({
      formCode: "TE-IMS-FRM-SYS-005",
      headers,
      values,
    });
  };

  const renderAuditTable = (title: string, items: any[], sectionKey: string) => (
    <div className="mb-8 overflow-x-auto">
      <h3 className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider">{title}</h3>
      <table className="w-full border-collapse border border-[#dde3ec]">
        <thead>
          <tr className="bg-[#081C2E] text-white">
            <th className="border border-[#dde3ec] p-2 text-left w-16">Item</th>
            <th className="border border-[#dde3ec] p-2 text-left">Description</th>
            <th className="border border-[#dde3ec] p-2 text-center w-24">Y/N/NA</th>
            <th className="border border-[#dde3ec] p-2 text-center w-24">Score (1-5)</th>
            <th className="border border-[#dde3ec] p-2 text-left">Comments</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="border border-[#dde3ec] p-2 text-center font-semibold">{item.id}</td>
              <td className="border border-[#dde3ec] p-2 text-sm">{item.desc}</td>
              <td className="border border-[#dde3ec] p-2">
                <select 
                  className="w-full p-1 border border-[#dde3ec] rounded"
                  value={item.status}
                  onChange={(e) => handleTableChange(sectionKey, idx, "status", e.target.value)}
                >
                  <option value="">-</option>
                  <option value="Y">Y</option>
                  <option value="N">N</option>
                  <option value="NA">NA</option>
                </select>
              </td>
              <td className="border border-[#dde3ec] p-2">
                <input 
                  type="number" 
                  min="1" max="5"
                  className="w-full p-1 border border-[#dde3ec] rounded text-center"
                  value={item.score}
                  onChange={(e) => handleTableChange(sectionKey, idx, "score", e.target.value)}
                />
              </td>
              <td className="border border-[#dde3ec] p-2">
                <input 
                  type="text"
                  className="w-full p-1 border border-[#dde3ec] rounded"
                  value={item.comments}
                  onChange={(e) => handleTableChange(sectionKey, idx, "comments", e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto py-12 px-4 text-center">
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#C49A28]">
            <h2 className="text-2xl font-bold text-[#081C2E] mb-4">Form Submitted Successfully</h2>
            <p className="text-gray-600 mb-6">The Site Quarterly Audit Form has been recorded.</p>
            <a 
              href={sheetUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#C49A28] text-white px-6 py-2 rounded font-semibold hover:bg-[#a38021] transition-colors"
            >
              View Register
            </a>
            <div className="mt-8">
              <Link href="/" className="text-[#081C2E] hover:underline">← Return to Portal Home</Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-8 px-4 font-['Nunito_Sans']">
        <div className="mb-6">
          <Link href="/" className="text-[#081C2E] hover:underline font-semibold">← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-500">FRM</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-500">Site Quarterly Audit Form</span>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-[#dde3ec]">
          {/* Header Section */}
          <div className="bg-[#081C2E] p-6 text-white flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold uppercase tracking-tight">Site Quarterly Audit Form</h1>
              <p className="text-[#C49A28] font-semibold">True East Mining Company</p>
            </div>
            <div className="text-right text-sm">
              <div className="grid grid-cols-2 gap-x-4">
                <span className="text-gray-400">Code:</span> <span>TE-IMS-FRM-SYS-005</span>
                <span className="text-gray-400">Revision:</span> <span>Rev01</span>
                <span className="text-gray-400">Date:</span> <span>09 Apr 2026</span>
                <span className="text-gray-400">Status:</span> <span>Approved</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 bg-[#f4f6f9]">
            {/* Audit Details */}
            <div className="bg-white p-6 rounded-md shadow-sm border border-[#dde3ec] mb-8">
              <h3 className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider mb-4">Audit Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#081C2E] mb-1">Site / Project *</label>
                  <input required type="text" className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none" 
                    value={formData.siteProject} onChange={(e) => handleInputChange("siteProject", e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#081C2E] mb-1">Audit Date *</label>
                  <input required type="date" className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none" 
                    value={formData.auditDate} onChange={(e) => handleInputChange("auditDate", e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#081C2E] mb-1">Auditor(s) *</label>
                  <input required type="text" className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none" 
                    value={formData.auditors} onChange={(e) => handleInputChange("auditors", e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#081C2E] mb-1">Audit Period *</label>
                  <input required type="text" placeholder="e.g. Q1 2026" className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none" 
                    value={formData.auditPeriod} onChange={(e) => handleInputChange("auditPeriod", e.target.value)} />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-[#081C2E] mb-1">Location / Area *</label>
                  <input required type="text" className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none" 
                    value={formData.locationArea} onChange={(e) => handleInputChange("locationArea", e.target.value)} />
                </div>
              </div>
            </div>

            {/* Audit Tables */}
            {renderAuditTable("1. Safety & Health", formData.safetyItems, "safetyItems")}
            {renderAuditTable("2. Environmental Compliance", formData.envItems, "envItems")}
            {renderAuditTable("3. Equipment & Maintenance", formData.equipItems, "equipItems")}
            {renderAuditTable("4. Drill Site Conditions", formData.siteItems, "siteItems")}
            {renderAuditTable("5. Documentation & Training", formData.docItems, "docItems")}

            {/* Score Summary */}
            <div className="bg-white p-6 rounded-md shadow-sm border border-[#dde3ec] mb-8">
              <h3 className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider mb-4">6. Audit Score Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="font-semibold text-[#081C2E]">Safety & Health Score:</span>
                  <div className="flex items-center gap-2">
                    <input type="number" className="w-16 p-1 border rounded text-center" value={formData.safetyScore} onChange={(e) => handleInputChange("safetyScore", e.target.value)} />
                    <span className="text-gray-500">/ 50</span>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="font-semibold text-[#081C2E]">Environmental Score:</span>
                  <div className="flex items-center gap-2">
                    <input type="number" className="w-16 p-1 border rounded text-center" value={formData.envScore} onChange={(e) => handleInputChange("envScore", e.target.value)} />
                    <span className="text-gray-500">/ 30</span>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="font-semibold text-[#081C2E]">Equipment & Maintenance:</span>
                  <div className="flex items-center gap-2">
                    <input type="number" className="w-16 p-1 border rounded text-center" value={formData.equipScore} onChange={(e) => handleInputChange("equipScore", e.target.value)} />
                    <span className="text-gray-500">/ 30</span>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="font-semibold text-[#081C2E]">Drill Site Conditions:</span>
                  <div className="flex items-center gap-2">
                    <input type="number" className="w-16 p-1 border rounded text-center" value={formData.siteScore} onChange={(e) => handleInputChange("siteScore", e.target.value)} />
                    <span className="text-gray-500">/ 20</span>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="font-semibold text-[#081C2E]">Documentation & Training:</span>
                  <div className="flex items-center gap-2">
                    <input type="number" className="w-16 p-1 border rounded text-center" value={formData.docScore} onChange={(e) => handleInputChange("docScore", e.target.value)} />
                    <span className="text-gray-500">/ 20</span>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b pb-2 bg-gray-50 p-2 rounded">
                  <span className="font-bold text-[#081C2E]">TOTAL SCORE:</span>
                  <div className="flex items-center gap-2">
                    <input type="number" className="w-20 p-1 border-2 border-[#C49A28] rounded text-center font-bold" value={formData.totalScore} onChange={(e) => handleInputChange("totalScore", e.target.value)} />
                    <span className="font-bold text-[#081C2E]">/ 150</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 border border-[#dde3ec] rounded bg-gray-50">
                <p className="font-bold text-[#081C2E] mb-3">Overall Assessment:</p>
                <div className="flex flex-wrap gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="overall" value="Satisfactory" className="w-4 h-4 accent-[#C49A28]" onChange={(e) => handleInputChange("overallAssessment", e.target.value)} />
                    <span className="text-sm">Satisfactory (&gt;80%)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="overall" value="Needs Improvement" className="w-4 h-4 accent-[#C49A28]" onChange={(e) => handleInputChange("overallAssessment", e.target.value)} />
                    <span className="text-sm">Needs Improvement (60-80%)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="overall" value="Non-Compliant" className="w-4 h-4 accent-[#C49A28]" onChange={(e) => handleInputChange("overallAssessment", e.target.value)} />
                    <span className="text-sm">Non-Compliant (&lt;60%)</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Key Findings & Action Plan */}
            <div className="mb-8 overflow-x-auto">
              <h3 className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider">7. Key Findings & Action Plan</h3>
              <table className="w-full border-collapse border border-[#dde3ec]">
                <thead>
                  <tr className="bg-[#081C2E] text-white text-xs">
                    <th className="border border-[#dde3ec] p-2 text-left w-10">No.</th>
                    <th className="border border-[#dde3ec] p-2 text-left">Category</th>
                    <th className="border border-[#dde3ec] p-2 text-left">Observation</th>
                    <th className="border border-[#dde3ec] p-2 text-left">Risk Level</th>
                    <th className="border border-[#dde3ec] p-2 text-left">Action Required</th>
                    <th className="border border-[#dde3ec] p-2 text-left">Responsible</th>
                    <th className="border border-[#dde3ec] p-2 text-left">Target Date</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.findings.map((finding, idx) => (
                    <tr key={idx}>
                      <td className="border border-[#dde3ec] p-1 text-center text-xs font-bold">{finding.no}</td>
                      <td className="border border-[#dde3ec] p-1"><input type="text" className="w-full p-1 text-xs border-none" value={finding.category} onChange={(e) => handleTableChange("findings", idx, "category", e.target.value)} /></td>
                      <td className="border border-[#dde3ec] p-1"><input type="text" className="w-full p-1 text-xs border-none" value={finding.observation} onChange={(e) => handleTableChange("findings", idx, "observation", e.target.value)} /></td>
                      <td className="border border-[#dde3ec] p-1">
                        <select className="w-full p-1 text-xs border-none" value={finding.risk} onChange={(e) => handleTableChange("findings", idx, "risk", e.target.value)}>
                          <option value="">-</option>
                          <option value="Low">Low</option>
                          <option value="Medium">Medium</option>
                          <option value="High">High</option>
                          <option value="Critical">Critical</option>
                        </select>
                      </td>
                      <td className="border border-[#dde3ec] p-1"><input type="text" className="w-full p-1 text-xs border-none" value={finding.action} onChange={(e) => handleTableChange("findings", idx, "action", e.target.value)} /></td>
                      <td className="border border-[#dde3ec] p-1"><input type="text" className="w-full p-1 text-xs border-none" value={finding.responsible} onChange={(e) => handleTableChange("findings", idx, "responsible", e.target.value)} /></td>
                      <td className="border border-[#dde3ec] p-1"><input type="date" className="w-full p-1 text-xs border-none" value={finding.targetDate} onChange={(e) => handleTableChange("findings", idx, "targetDate", e.target.value)} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button type="button" onClick={addFindingRow} className="mt-2 text-sm text-[#C49A28] font-bold hover:underline">+ Add Finding Row</button>
            </div>

            {/* Executive Summary */}
            <div className="bg-white p-6 rounded-md shadow-sm border border-[#dde3ec] mb-8">
              <h3 className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider mb-4">8. Executive Summary</h3>
              <textarea 
                className="w-full p-3 border border-[#dde3ec] rounded min-h-[150px] focus:ring-2 focus:ring-[#C49A28] outline-none"
                placeholder="Provide a high-level overview of the audit results..."
                value={formData.executiveSummary}
                onChange={(e) => handleInputChange("executiveSummary", e.target.value)}
              ></textarea>
            </div>

            {/* Auditor Sign-off */}
            <div className="bg-white p-6 rounded-md shadow-sm border border-[#dde3ec] mb-8 overflow-x-auto">
              <h3 className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider mb-4">9. Auditor Sign-off</h3>
              <table className="w-full border-collapse border border-[#dde3ec]">
                <thead>
                  <tr className="bg-[#081C2E] text-white text-xs">
                    <th className="border border-[#dde3ec] p-2 text-left">Role</th>
                    <th className="border border-[#dde3ec] p-2 text-left">Name</th>
                    <th className="border border-[#dde3ec] p-2 text-left">Signature (Type Name)</th>
                    <th className="border border-[#dde3ec] p-2 text-left">Date</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="border border-[#dde3ec] p-2 font-bold">Lead Auditor</td>
                    <td className="border border-[#dde3ec] p-2"><input type="text" className="w-full p-1 border rounded" value={formData.leadAuditorName} onChange={(e) => handleInputChange("leadAuditorName", e.target.value)} /></td>
                    <td className="border border-[#dde3ec] p-2"><input type="text" className="w-full p-1 border rounded italic" placeholder="Signature" value={formData.leadAuditorSig} onChange={(e) => handleInputChange("leadAuditorSig", e.target.value)} /></td>
                    <td className="border border-[#dde3ec] p-2"><input type="date" className="w-full p-1 border rounded" value={formData.leadAuditorDate} onChange={(e) => handleInputChange("leadAuditorDate", e.target.value)} /></td>
                  </tr>
                  <tr>
                    <td className="border border-[#dde3ec] p-2 font-bold">Co-Auditor</td>
                    <td className="border border-[#dde3ec] p-2"><input type="text" className="w-full p-1 border rounded" value={formData.coAuditorName} onChange={(e) => handleInputChange("coAuditorName", e.target.value)} /></td>
                    <td className="border border-[#dde3ec] p-2"><input type="text" className="w-full p-1 border rounded italic" placeholder="Signature" value={formData.coAuditorSig} onChange={(e) => handleInputChange("coAuditorSig", e.target.value)} /></td>
                    <td className="border border-[#dde3ec] p-2"><input type="date" className="w-full p-1 border rounded" value={formData.coAuditorDate} onChange={(e) => handleInputChange("coAuditorDate", e.target.value)} /></td>
                  </tr>
                  <tr>
                    <td className="border border-[#dde3ec] p-2 font-bold">Site Manager</td>
                    <td className="border border-[#dde3ec] p-2"><input type="text" className="w-full p-1 border rounded" value={formData.siteManagerName} onChange={(e) => handleInputChange("siteManagerName", e.target.value)} /></td>
                    <td className="border border-[#dde3ec] p-2"><input type="text" className="w-full p-1 border rounded italic" placeholder="Signature" value={formData.siteManagerSig} onChange={(e) => handleInputChange("siteManagerSig", e.target.value)} /></td>
                    <td className="border border-[#dde3ec] p-2"><input type="date" className="w-full p-1 border rounded" value={formData.siteManagerDate} onChange={(e) => handleInputChange("siteManagerDate", e.target.value)} /></td>
                  </tr>
                  <tr>
                    <td className="border border-[#dde3ec] p-2 font-bold">HSE Manager</td>
                    <td className="border border-[#dde3ec] p-2"><input type="text" className="w-full p-1 border rounded" value={formData.hseManagerName} onChange={(e) => handleInputChange("hseManagerName", e.target.value)} /></td>
                    <td className="border border-[#dde3ec] p-2"><input type="text" className="w-full p-1 border rounded italic" placeholder="Signature" value={formData.hseManagerSig} onChange={(e) => handleInputChange("hseManagerSig", e.target.value)} /></td>
                    <td className="border border-[#dde3ec] p-2"><input type="date" className="w-full p-1 border rounded" value={formData.hseManagerDate} onChange={(e) => handleInputChange("hseManagerDate", e.target.value)} /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                <p className="font-bold">Error</p>
                <p>{error}</p>
              </div>
            )}

            <div className="flex justify-end gap-4">
              <button 
                type="button" 
                onClick={() => window.print()}
                className="px-6 py-2 border border-[#081C2E] text-[#081C2E] rounded font-bold hover:bg-gray-100 transition-colors"
              >
                Print to PDF
              </button>
              <button 
                type="submit" 
                disabled={mutation.isPending}
                className="px-10 py-2 bg-[#081C2E] text-white rounded font-bold hover:bg-[#122d45] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {mutation.isPending ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Submitting...
                  </>
                ) : "Submit Audit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
