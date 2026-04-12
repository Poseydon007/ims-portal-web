import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_019() {
  const [submitted, setSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    location: "",
    observedBy: "",
    designation: "",
    alarmCondition: "",
    alarmAudibility: "",
    workerResponsiveness: "",
    teamResponsiveness: "",
    assemblyGathering: "",
    timeTaken: "",
    communication: "",
    extinguisherUse: "",
    overallRemarks: "",
    nextDrillDate: "",
    observerName: "",
    observerDate: "",
    hseManagerName: "",
    hseManagerDate: "",
    siteManagerName: "",
    siteManagerDate: "",
  });

  // Dynamic table state for Table 5: Areas to Be Improved
  const [improvements, setImprovements] = useState([
    { id: 1, observation: "", recommendedAction: "", responsible: "" }
  ]);

  const addImprovementRow = () => {
    setImprovements([
      ...improvements,
      { id: improvements.length + 1, observation: "", recommendedAction: "", responsible: "" }
    ]);
  };

  const updateImprovement = (index: number, field: string, value: string) => {
    const updated = [...improvements];
    updated[index] = { ...updated[index], [field]: value };
    setImprovements(updated);
  };

  const submitMutation = trpc.formSubmissions.submit.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const headers = [
      "Form Code", "Revision", "Date of Report", "Status",
      "Drill Date", "Drill Time", "Location / Building", "Drill Observed By", "Designation",
      "Alarm condition and activation", "Alarm sound audibility", "Responsiveness of workers",
      "Responsiveness of emergency action team", "Workers gathered at assembly area",
      "Time taken to gather at assembly area", "Communication during drill", "Use of fire extinguishers",
      "Overall Remarks",
      "Improvements (Observation | Action | Responsible)",
      "Next Drill Planned Date",
      "Observer Name", "Observer Date",
      "HSE Manager Name", "HSE Manager Date",
      "Site Manager Name", "Site Manager Date"
    ];

    const improvementsString = improvements
      .map(i => `${i.observation} | ${i.recommendedAction} | ${i.responsible}`)
      .join("; ");

    const values = [
      "TE-IMS-FRM-HSE-019", "01", "01 March 2026", "Approved for Implementation",
      formData.date, formData.time, formData.location, formData.observedBy, formData.designation,
      formData.alarmCondition, formData.alarmAudibility, formData.workerResponsiveness,
      formData.teamResponsiveness, formData.assemblyGathering,
      formData.timeTaken, formData.communication, formData.extinguisherUse,
      formData.overallRemarks,
      improvementsString,
      formData.nextDrillDate,
      formData.observerName, formData.observerDate,
      formData.hseManagerName, formData.hseManagerDate,
      formData.siteManagerName, formData.siteManagerDate
    ];

    try {
      const result = await submitMutation.mutateAsync({
        formCode: "TE-IMS-FRM-HSE-019",
        headers,
        values,
      });
      setSheetUrl(result.sheetUrl);
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "An error occurred during submission.");
    }
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto py-10 px-6">
          <div className="bg-green-50 border border-green-200 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Form submitted successfully</h2>
            <p className="text-green-700 mb-6">
              The fire drill report has been recorded and synced to the master register.
            </p>
            <a 
              href={sheetUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#081C2E] text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors"
            >
              View register
            </a>
            <div className="mt-8">
              <Link href="/" className="text-[#C49A28] hover:underline font-semibold">
                ← Return to Portal Home
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  const assessmentOptions = ["Excellent", "Good", "Fair", "Needs Improvement"];

  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-8 px-4 font-['Nunito_Sans'] text-[#081C2E]">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <Link href="/" className="text-[#C49A28] hover:underline font-semibold">
            ← Portal Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/docs/frm" className="text-gray-500 uppercase text-sm tracking-wider hover:text-[#C49A28] transition-colors cursor-pointer">FRM</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-500 uppercase text-sm tracking-wider">Fire Drill Report</span>
        </nav>

        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg overflow-hidden border border-[#dde3ec]">
          {/* Header Section */}
          <div className="bg-[#081C2E] p-6 text-white flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-tight uppercase">Fire Drill Report</h1>
            <div className="text-right">
              <p className="text-xs opacity-80">TE-IMS-FRM-HSE-019</p>
              <p className="text-xs opacity-80">Revision: 01</p>
            </div>
          </div>

          {/* Document Control Table */}
          <div className="overflow-x-auto border-b border-[#dde3ec]">
            <table className="w-full text-sm">
              <thead className="bg-[#081C2E] text-white">
                <tr>
                  <th className="p-2 border-r border-white/20 text-left">Document Code</th>
                  <th className="p-2 border-r border-white/20 text-left">Revision</th>
                  <th className="p-2 border-r border-white/20 text-left">Date</th>
                  <th className="p-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="p-2 border-r border-[#dde3ec]">TE-IMS-FRM-HSE-019</td>
                  <td className="p-2 border-r border-[#dde3ec]">01</td>
                  <td className="p-2 border-r border-[#dde3ec]">01 March 2026</td>
                  <td className="p-2 italic">Approved for Implementation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-8 space-y-8">
            {/* 1. Drill Information */}
            <section>
              <h2 className="bg-[#081C2E] text-white px-4 py-2 text-lg font-bold mb-4">1. Drill Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-1">Date *</label>
                  <input 
                    type="date" 
                    required
                    className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Time *</label>
                  <input 
                    type="time" 
                    required
                    className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                    value={formData.time}
                    onChange={e => setFormData({...formData, time: e.target.value})}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold mb-1">Location / Building *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Enter drill location"
                    className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                    value={formData.location}
                    onChange={e => setFormData({...formData, location: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Drill Observed By *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Name of observer"
                    className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                    value={formData.observedBy}
                    onChange={e => setFormData({...formData, observedBy: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Designation *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Observer's job title"
                    className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                    value={formData.designation}
                    onChange={e => setFormData({...formData, designation: e.target.value})}
                  />
                </div>
              </div>
            </section>

            {/* 2. Performance Assessment */}
            <section>
              <h2 className="bg-[#081C2E] text-white px-4 py-2 text-lg font-bold mb-4">2. Performance Assessment</h2>
              <div className="overflow-x-auto border border-[#dde3ec] rounded">
                <table className="w-full text-sm">
                  <thead className="bg-[#081C2E] text-white">
                    <tr>
                      <th className="p-3 text-left w-1/2">Checklist Item</th>
                      <th className="p-3 text-center">Rating</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#dde3ec]">
                    {[
                      { id: "alarmCondition", label: "Alarm condition and activation" },
                      { id: "alarmAudibility", label: "Alarm sound audibility" },
                      { id: "workerResponsiveness", label: "Responsiveness of workers" },
                      { id: "teamResponsiveness", label: "Responsiveness of emergency action team" },
                      { id: "assemblyGathering", label: "Workers gathered at assembly area" },
                      { id: "timeTaken", label: "Time taken to gather at assembly area" },
                      { id: "communication", label: "Communication during drill" },
                      { id: "extinguisherUse", label: "Use of fire extinguishers (if applicable)" },
                    ].map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="p-3 font-medium">{item.label}</td>
                        <td className="p-3">
                          <select 
                            className="w-full border border-[#dde3ec] p-1 rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                            value={(formData as any)[item.id]}
                            onChange={e => setFormData({...formData, [item.id]: e.target.value})}
                          >
                            <option value="">Select Rating</option>
                            {assessmentOptions.map(opt => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 3. Overall Remarks */}
            <section>
              <h2 className="bg-[#081C2E] text-white px-4 py-2 text-lg font-bold mb-4">3. Overall Remarks</h2>
              <textarea 
                className="w-full border border-[#dde3ec] p-3 rounded min-h-[120px] focus:ring-1 focus:ring-[#C49A28] outline-none"
                placeholder="Enter overall summary and observations of the drill..."
                value={formData.overallRemarks}
                onChange={e => setFormData({...formData, overallRemarks: e.target.value})}
              />
            </section>

            {/* 4. Areas to Be Improved */}
            <section>
              <div className="flex justify-between items-center mb-4 bg-[#081C2E] text-white px-4 py-2">
                <h2 className="text-lg font-bold">4. Areas to Be Improved</h2>
                <button 
                  type="button"
                  onClick={addImprovementRow}
                  className="bg-[#C49A28] text-white text-xs px-3 py-1 rounded hover:bg-opacity-90 transition-colors"
                >
                  + Add Row
                </button>
              </div>
              <div className="overflow-x-auto border border-[#dde3ec] rounded">
                <table className="w-full text-sm">
                  <thead className="bg-[#081C2E] text-white text-left">
                    <tr>
                      <th className="p-2 border-r border-white/20 w-12 text-center">#</th>
                      <th className="p-2 border-r border-white/20">Observation</th>
                      <th className="p-2 border-r border-white/20">Recommended Action</th>
                      <th className="p-2">Responsible</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#dde3ec]">
                    {improvements.map((row, idx) => (
                      <tr key={row.id}>
                        <td className="p-2 text-center bg-gray-50 border-r border-[#dde3ec] font-bold">{idx + 1}</td>
                        <td className="p-2 border-r border-[#dde3ec]">
                          <input 
                            type="text" 
                            className="w-full p-1 outline-none focus:bg-yellow-50"
                            value={row.observation}
                            onChange={e => updateImprovement(idx, "observation", e.target.value)}
                          />
                        </td>
                        <td className="p-2 border-r border-[#dde3ec]">
                          <input 
                            type="text" 
                            className="w-full p-1 outline-none focus:bg-yellow-50"
                            value={row.recommendedAction}
                            onChange={e => updateImprovement(idx, "recommendedAction", e.target.value)}
                          />
                        </td>
                        <td className="p-2">
                          <input 
                            type="text" 
                            className="w-full p-1 outline-none focus:bg-yellow-50"
                            value={row.responsible}
                            onChange={e => updateImprovement(idx, "responsible", e.target.value)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 5. Next Drill */}
            <section>
              <h2 className="bg-[#081C2E] text-white px-4 py-2 text-lg font-bold mb-4">5. Next Drill</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-1">Next Drill Planned Date</label>
                  <input 
                    type="date" 
                    className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                    value={formData.nextDrillDate}
                    onChange={e => setFormData({...formData, nextDrillDate: e.target.value})}
                  />
                </div>
              </div>
            </section>

            {/* Sign-Off */}
            <section>
              <h2 className="bg-[#081C2E] text-white px-4 py-2 text-lg font-bold mb-4">Sign-Off</h2>
              <div className="overflow-x-auto border border-[#dde3ec] rounded">
                <table className="w-full text-sm">
                  <thead className="bg-[#081C2E] text-white text-left">
                    <tr>
                      <th className="p-3 border-r border-white/20">Role</th>
                      <th className="p-3 border-r border-white/20">Name (Signature)</th>
                      <th className="p-3">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#dde3ec]">
                    <tr>
                      <td className="p-3 font-bold bg-gray-50 border-r border-[#dde3ec]">Drill Observer</td>
                      <td className="p-3 border-r border-[#dde3ec]">
                        <input 
                          type="text" 
                          placeholder="Full name acts as signature"
                          className="w-full p-1 outline-none focus:bg-yellow-50"
                          value={formData.observerName}
                          onChange={e => setFormData({...formData, observerName: e.target.value})}
                        />
                      </td>
                      <td className="p-3">
                        <input 
                          type="date" 
                          className="w-full p-1 outline-none focus:bg-yellow-50"
                          value={formData.observerDate}
                          onChange={e => setFormData({...formData, observerDate: e.target.value})}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold bg-gray-50 border-r border-[#dde3ec]">HSE Manager</td>
                      <td className="p-3 border-r border-[#dde3ec]">
                        <input 
                          type="text" 
                          placeholder="Full name acts as signature"
                          className="w-full p-1 outline-none focus:bg-yellow-50"
                          value={formData.hseManagerName}
                          onChange={e => setFormData({...formData, hseManagerName: e.target.value})}
                        />
                      </td>
                      <td className="p-3">
                        <input 
                          type="date" 
                          className="w-full p-1 outline-none focus:bg-yellow-50"
                          value={formData.hseManagerDate}
                          onChange={e => setFormData({...formData, hseManagerDate: e.target.value})}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold bg-gray-50 border-r border-[#dde3ec]">Site Manager</td>
                      <td className="p-3 border-r border-[#dde3ec]">
                        <input 
                          type="text" 
                          placeholder="Full name acts as signature"
                          className="w-full p-1 outline-none focus:bg-yellow-50"
                          value={formData.siteManagerName}
                          onChange={e => setFormData({...formData, siteManagerName: e.target.value})}
                        />
                      </td>
                      <td className="p-3">
                        <input 
                          type="date" 
                          className="w-full p-1 outline-none focus:bg-yellow-50"
                          value={formData.siteManagerDate}
                          onChange={e => setFormData({...formData, siteManagerDate: e.target.value})}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded text-sm font-medium">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end pt-4 border-t border-[#dde3ec]">
              <button
                type="submit"
                disabled={submitMutation.isPending}
                className={`
                  bg-[#081C2E] text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all
                  ${submitMutation.isPending ? "opacity-50 cursor-not-allowed" : "hover:scale-105 active:scale-95"}
                `}
              >
                {submitMutation.isPending ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : "Submit Fire Drill Report"}
              </button>
            </div>
          </div>
        </form>

        {/* Revision History Footer */}
        <div className="mt-12 bg-gray-50 border border-[#dde3ec] rounded p-4">
          <h3 className="text-xs font-bold uppercase text-gray-500 mb-2 tracking-widest">Revision History</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-[10px] text-gray-600">
              <thead>
                <tr className="border-b border-[#dde3ec] text-left">
                  <th className="pb-1 w-12">Rev</th>
                  <th className="pb-1 w-24">Date</th>
                  <th className="pb-1">Description of Changes</th>
                  <th className="pb-1 w-32">Author</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pt-1">00</td>
                  <td className="pt-1">01 Mar 2026</td>
                  <td className="pt-1">Initial approved release</td>
                  <td className="pt-1">Joao Melo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
