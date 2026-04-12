import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_027() {
  const [submitted, setSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    projectSite: "",
    contractCrcNo: "",
    monthYear: "",
    preparedBy: "",
    remarks: "",
    nurseName: "",
    nurseDate: "",
    hseOfficerName: "",
    hseOfficerDate: "",
    hseManagerName: "",
    hseManagerDate: "",
    siteManagerName: "",
    siteManagerDate: "",
  });

  const [injuryLog, setInjuryLog] = useState([
    { id: 1, date: "", empNo: "", incidentRef: "", nameDept: "", nature: "", bodyPart: "", treatment: "", site: "", restDays: "", followUp: "" }
  ]);

  const [summary, setSummary] = useState({
    fac: "",
    totalDaysLost: "",
    mtc: "",
    totalManHours: "",
    rwc: "",
    trir: "",
    lti: "",
    ltir: "",
    fatalities: "",
    severityRate: "",
    totalRecordable: "",
    nearMisses: ""
  });

  const mutation = trpc.formSubmissions.submit.useMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSummaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSummary(prev => ({ ...prev, [name]: value }));
  };

  const handleLogChange = (index: number, field: string, value: string) => {
    const newLog = [...injuryLog];
    newLog[index] = { ...newLog[index], [field]: value };
    setInjuryLog(newLog);
  };

  const addLogRow = () => {
    setInjuryLog([...injuryLog, { id: injuryLog.length + 1, date: "", empNo: "", incidentRef: "", nameDept: "", nature: "", bodyPart: "", treatment: "", site: "", restDays: "", followUp: "" }]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const headers = [
      "Project/Site", "Contract/CRC No", "Month/Year", "Prepared By",
      ...injuryLog.flatMap((row, i) => [
        `Log ${i+1} Date`, `Log ${i+1} Emp No`, `Log ${i+1} Incident Ref`, `Log ${i+1} Name/Dept`, 
        `Log ${i+1} Nature`, `Log ${i+1} Body Part`, `Log ${i+1} Treatment`, `Log ${i+1} Site`, 
        `Log ${i+1} Rest Days`, `Log ${i+1} Follow-Up`
      ]),
      "FAC", "Total Days Lost", "MTC", "Total Man-Hours", "RWC", "TRIR", "LTI", "LTIR", "Fatalities", "Severity Rate", "Total Recordable", "Near Misses",
      "Remarks",
      "Nurse Name", "Nurse Date", "HSE Officer Name", "HSE Officer Date", "HSE Manager Name", "HSE Manager Date", "Site Manager Name", "Site Manager Date"
    ];

    const values = [
      formData.projectSite, formData.contractCrcNo, formData.monthYear, formData.preparedBy,
      ...injuryLog.flatMap(row => [
        row.date, row.empNo, row.incidentRef, row.nameDept, row.nature, row.bodyPart, row.treatment, row.site, row.restDays, row.followUp
      ]),
      summary.fac, summary.totalDaysLost, summary.mtc, summary.totalManHours, summary.rwc, summary.trir, summary.lti, summary.ltir, summary.fatalities, summary.severityRate, summary.totalRecordable, summary.nearMisses,
      formData.remarks,
      formData.nurseName, formData.nurseDate, formData.hseOfficerName, formData.hseOfficerDate, formData.hseManagerName, formData.hseManagerDate, formData.siteManagerName, formData.siteManagerDate
    ];

    try {
      const result = await mutation.mutateAsync({
        formCode: "TE-IMS-FRM-HSE-027",
        headers,
        values
      });
      setSheetUrl(result.sheetUrl);
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "An error occurred during submission");
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-8 text-center">
          <h2 className="text-2xl font-bold text-[#081C2E] mb-4">Form submitted successfully.</h2>
          <p className="mb-6">View register: <a href={sheetUrl} target="_blank" rel="noopener noreferrer" className="text-[#C49A28] underline font-semibold">Google Sheet</a></p>
          <Link href="/">
            <button className="bg-[#081C2E] text-white px-6 py-2 rounded hover:bg-opacity-90 transition-all">
              Return to Portal
            </button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-[1200px] mx-auto p-4 md:p-8 font-['Nunito_Sans'] text-[#081C2E]">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-[#C49A28] hover:underline">← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-500">FRM</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="font-semibold">Monthly Injury Summary</span>
        </nav>

        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg overflow-hidden border border-[#dde3ec]">
          {/* Header Section */}
          <div className="bg-[#081C2E] text-white p-6 flex flex-col md:flex-row justify-between items-center border-b-4 border-[#C49A28]">
            <h1 className="text-2xl font-bold tracking-tight uppercase">Monthly Injury Summary</h1>
            <div className="mt-4 md:mt-0 text-right text-xs opacity-80 uppercase tracking-widest">
              <div>Code: TE-IMS-FRM-HSE-027</div>
              <div>Rev: 02 | Date: April 2026</div>
              <div>Status: Approved</div>
            </div>
          </div>

          <div className="p-6 space-y-8">
            {/* Project Information */}
            <section>
              <h2 className="bg-[#081C2E] text-white px-4 py-2 text-sm font-bold uppercase tracking-wider mb-4">Project Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase mb-1">Project / Site <span className="text-red-500">*</span></label>
                  <input type="text" name="projectSite" required value={formData.projectSite} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase mb-1">Contract / CRC No <span className="text-red-500">*</span></label>
                  <input type="text" name="contractCrcNo" required value={formData.contractCrcNo} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase mb-1">Month / Year <span className="text-red-500">*</span></label>
                  <input type="month" name="monthYear" required value={formData.monthYear} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase mb-1">Prepared By <span className="text-red-500">*</span></label>
                  <input type="text" name="preparedBy" required value={formData.preparedBy} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
              </div>
            </section>

            {/* Monthly Injury Log */}
            <section className="overflow-x-auto">
              <h2 className="bg-[#081C2E] text-white px-4 py-2 text-sm font-bold uppercase tracking-wider mb-4 flex justify-between items-center">
                Monthly Injury Log
                <button type="button" onClick={addLogRow} className="bg-[#C49A28] text-white px-3 py-1 text-xs rounded hover:bg-opacity-90 transition-all">+ Add Row</button>
              </h2>
              <table className="w-full border-collapse border border-[#dde3ec] text-xs">
                <thead>
                  <tr className="bg-[#081C2E] text-white">
                    <th className="border border-[#dde3ec] p-2">#</th>
                    <th className="border border-[#dde3ec] p-2 min-w-[100px]">Date</th>
                    <th className="border border-[#dde3ec] p-2">Emp. No.</th>
                    <th className="border border-[#dde3ec] p-2">Incident Ref</th>
                    <th className="border border-[#dde3ec] p-2 min-w-[150px]">Name / Dept</th>
                    <th className="border border-[#dde3ec] p-2">Nature of Injury</th>
                    <th className="border border-[#dde3ec] p-2">Body Part</th>
                    <th className="border border-[#dde3ec] p-2">Treatment</th>
                    <th className="border border-[#dde3ec] p-2">On/Off Site</th>
                    <th className="border border-[#dde3ec] p-2 w-[60px]">Rest Days</th>
                    <th className="border border-[#dde3ec] p-2 min-w-[150px]">Hospital / Follow-Up</th>
                  </tr>
                </thead>
                <tbody>
                  {injuryLog.map((row, index) => (
                    <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                      <td className="border border-[#dde3ec] p-1 text-center font-bold">{index + 1}</td>
                      <td className="border border-[#dde3ec] p-1"><input type="date" value={row.date} onChange={(e) => handleLogChange(index, "date", e.target.value)} className="w-full p-1 border-none focus:ring-0 outline-none bg-transparent" /></td>
                      <td className="border border-[#dde3ec] p-1"><input type="text" value={row.empNo} onChange={(e) => handleLogChange(index, "empNo", e.target.value)} className="w-full p-1 border-none focus:ring-0 outline-none bg-transparent" /></td>
                      <td className="border border-[#dde3ec] p-1"><input type="text" value={row.incidentRef} onChange={(e) => handleLogChange(index, "incidentRef", e.target.value)} className="w-full p-1 border-none focus:ring-0 outline-none bg-transparent" /></td>
                      <td className="border border-[#dde3ec] p-1"><input type="text" value={row.nameDept} onChange={(e) => handleLogChange(index, "nameDept", e.target.value)} className="w-full p-1 border-none focus:ring-0 outline-none bg-transparent" /></td>
                      <td className="border border-[#dde3ec] p-1"><input type="text" value={row.nature} onChange={(e) => handleLogChange(index, "nature", e.target.value)} className="w-full p-1 border-none focus:ring-0 outline-none bg-transparent" /></td>
                      <td className="border border-[#dde3ec] p-1"><input type="text" value={row.bodyPart} onChange={(e) => handleLogChange(index, "bodyPart", e.target.value)} className="w-full p-1 border-none focus:ring-0 outline-none bg-transparent" /></td>
                      <td className="border border-[#dde3ec] p-1"><input type="text" value={row.treatment} onChange={(e) => handleLogChange(index, "treatment", e.target.value)} className="w-full p-1 border-none focus:ring-0 outline-none bg-transparent" /></td>
                      <td className="border border-[#dde3ec] p-1">
                        <select value={row.site} onChange={(e) => handleLogChange(index, "site", e.target.value)} className="w-full p-1 border-none focus:ring-0 outline-none bg-transparent appearance-none">
                          <option value="">-</option>
                          <option value="On-Site">On-Site</option>
                          <option value="Off-Site">Off-Site</option>
                        </select>
                      </td>
                      <td className="border border-[#dde3ec] p-1"><input type="number" value={row.restDays} onChange={(e) => handleLogChange(index, "restDays", e.target.value)} className="w-full p-1 border-none focus:ring-0 outline-none bg-transparent text-center" /></td>
                      <td className="border border-[#dde3ec] p-1"><input type="text" value={row.followUp} onChange={(e) => handleLogChange(index, "followUp", e.target.value)} className="w-full p-1 border-none focus:ring-0 outline-none bg-transparent" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            {/* Monthly Injury Summary */}
            <section>
              <h2 className="bg-[#081C2E] text-white px-4 py-2 text-sm font-bold uppercase tracking-wider mb-4">Monthly Injury Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 border border-[#dde3ec] p-4 bg-[#f4f6f9] rounded">
                <div className="grid grid-cols-2 items-center gap-2">
                  <label className="text-xs font-bold uppercase">First Aid Cases (FAC)</label>
                  <input type="number" name="fac" value={summary.fac} onChange={handleSummaryChange} className="p-1 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div className="grid grid-cols-2 items-center gap-2">
                  <label className="text-xs font-bold uppercase">Total Days Lost</label>
                  <input type="number" name="totalDaysLost" value={summary.totalDaysLost} onChange={handleSummaryChange} className="p-1 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div className="grid grid-cols-2 items-center gap-2">
                  <label className="text-xs font-bold uppercase">Medical Treatment Cases (MTC)</label>
                  <input type="number" name="mtc" value={summary.mtc} onChange={handleSummaryChange} className="p-1 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div className="grid grid-cols-2 items-center gap-2">
                  <label className="text-xs font-bold uppercase">Total Man-Hours Worked</label>
                  <input type="number" name="totalManHours" value={summary.totalManHours} onChange={handleSummaryChange} className="p-1 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div className="grid grid-cols-2 items-center gap-2">
                  <label className="text-xs font-bold uppercase">Restricted Work Cases (RWC)</label>
                  <input type="number" name="rwc" value={summary.rwc} onChange={handleSummaryChange} className="p-1 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div className="grid grid-cols-2 items-center gap-2">
                  <label className="text-xs font-bold uppercase">TRIR (per 200,000 hrs)</label>
                  <input type="text" name="trir" value={summary.trir} onChange={handleSummaryChange} className="p-1 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div className="grid grid-cols-2 items-center gap-2">
                  <label className="text-xs font-bold uppercase">Lost Time Injuries (LTI)</label>
                  <input type="number" name="lti" value={summary.lti} onChange={handleSummaryChange} className="p-1 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div className="grid grid-cols-2 items-center gap-2">
                  <label className="text-xs font-bold uppercase">LTIR (per 200,000 hrs)</label>
                  <input type="text" name="ltir" value={summary.ltir} onChange={handleSummaryChange} className="p-1 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div className="grid grid-cols-2 items-center gap-2">
                  <label className="text-xs font-bold uppercase">Fatalities</label>
                  <input type="number" name="fatalities" value={summary.fatalities} onChange={handleSummaryChange} className="p-1 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div className="grid grid-cols-2 items-center gap-2">
                  <label className="text-xs font-bold uppercase">Severity Rate</label>
                  <input type="text" name="severityRate" value={summary.severityRate} onChange={handleSummaryChange} className="p-1 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div className="grid grid-cols-2 items-center gap-2">
                  <label className="text-xs font-bold uppercase">Total Recordable Incidents</label>
                  <input type="number" name="totalRecordable" value={summary.totalRecordable} onChange={handleSummaryChange} className="p-1 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div className="grid grid-cols-2 items-center gap-2">
                  <label className="text-xs font-bold uppercase">Near Misses Reported</label>
                  <input type="number" name="nearMisses" value={summary.nearMisses} onChange={handleSummaryChange} className="p-1 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
              </div>
            </section>

            {/* Remarks */}
            <section>
              <h2 className="bg-[#081C2E] text-white px-4 py-2 text-sm font-bold uppercase tracking-wider mb-4">Remarks</h2>
              <textarea name="remarks" value={formData.remarks} onChange={handleInputChange} rows={4} className="w-full p-3 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none" placeholder="Enter any additional comments or observations..."></textarea>
            </section>

            {/* Sign-Off */}
            <section>
              <h2 className="bg-[#081C2E] text-white px-4 py-2 text-sm font-bold uppercase tracking-wider mb-4">Sign-Off</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-[#dde3ec] p-4 bg-[#f4f6f9] rounded">
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1">Male Nurse / Medic</label>
                    <div className="grid grid-cols-2 gap-2">
                      <input type="text" name="nurseName" placeholder="Full Name" value={formData.nurseName} onChange={handleInputChange} className="p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none text-sm" />
                      <input type="date" name="nurseDate" value={formData.nurseDate} onChange={handleInputChange} className="p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1">HSE Officer</label>
                    <div className="grid grid-cols-2 gap-2">
                      <input type="text" name="hseOfficerName" placeholder="Full Name" value={formData.hseOfficerName} onChange={handleInputChange} className="p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none text-sm" />
                      <input type="date" name="hseOfficerDate" value={formData.hseOfficerDate} onChange={handleInputChange} className="p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none text-sm" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1">HSE Manager</label>
                    <div className="grid grid-cols-2 gap-2">
                      <input type="text" name="hseManagerName" placeholder="Full Name" value={formData.hseManagerName} onChange={handleInputChange} className="p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none text-sm" />
                      <input type="date" name="hseManagerDate" value={formData.hseManagerDate} onChange={handleInputChange} className="p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1">Site Manager</label>
                    <div className="grid grid-cols-2 gap-2">
                      <input type="text" name="siteManagerName" placeholder="Full Name" value={formData.siteManagerName} onChange={handleInputChange} className="p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none text-sm" />
                      <input type="date" name="siteManagerDate" value={formData.siteManagerDate} onChange={handleInputChange} className="p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none text-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="text-[10px] text-gray-500 italic mt-4">
              Distribution: Project Manager, HSE Manager, Project HSE Staff, Medical Section. To be completed on the last working day of every month.
            </div>

            {error && (
              <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm">
                {error}
              </div>
            )}

            <div className="flex justify-end pt-4 border-t border-[#dde3ec]">
              <button
                type="submit"
                disabled={isLoading}
                className={`bg-[#081C2E] text-white px-8 py-3 rounded font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all flex items-center ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : "Submit Report"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
