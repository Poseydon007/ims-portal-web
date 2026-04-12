import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_MAINT_001() {
  const [submitted, setSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    siteLocation: "",
    year: new Date().getFullYear().toString(),
    inspector: "",
    inspectionFrequency: "Monthly",
    maintenanceInspectorName: "",
    maintenanceInspectorDate: "",
    maintenanceSupervisorName: "",
    maintenanceSupervisorDate: "",
    hseManagerName: "",
    hseManagerDate: "",
  });

  // Dynamic tables state
  const [inspectionRows, setInspectionRows] = useState([
    { id: 1, equipmentId: "", description: "", jan: "", feb: "", mar: "", apr: "", may: "", jun: "", jul: "", aug: "", sep: "", oct: "", nov: "", dec: "" }
  ]);

  const [deviationRows, setDeviationRows] = useState([
    { id: 1, date: "", equipmentId: "", description: "", action: "", responsible: "", targetDate: "", completion: "", signature: "" }
  ]);

  const mutation = trpc.formSubmissions.submit.useMutation({
    onSuccess: (data) => {
      setSubmitted(true);
      setSheetUrl(data.sheetUrl);
    },
    onError: (err) => {
      setError(err.message || "An error occurred during submission.");
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addInspectionRow = () => {
    const newId = inspectionRows.length + 1;
    setInspectionRows([...inspectionRows, { id: newId, equipmentId: "", description: "", jan: "", feb: "", mar: "", apr: "", may: "", jun: "", jul: "", aug: "", sep: "", oct: "", nov: "", dec: "" }]);
  };

  const updateInspectionRow = (id: number, field: string, value: string) => {
    setInspectionRows(inspectionRows.map(row => row.id === id ? { ...row, [field]: value } : row));
  };

  const addDeviationRow = () => {
    const newId = deviationRows.length + 1;
    setDeviationRows([...deviationRows, { id: newId, date: "", equipmentId: "", description: "", action: "", responsible: "", targetDate: "", completion: "", signature: "" }]);
  };

  const updateDeviationRow = (id: number, field: string, value: string) => {
    setDeviationRows(deviationRows.map(row => row.id === id ? { ...row, [field]: value } : row));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const headers = [
      "Site / Location", "Year", "Inspector", "Inspection Frequency",
      ...inspectionRows.flatMap((_, i) => [
        `Eq ${i+1} ID`, `Eq ${i+1} Desc`, `Eq ${i+1} JAN`, `Eq ${i+1} FEB`, `Eq ${i+1} MAR`, `Eq ${i+1} APR`, `Eq ${i+1} MAY`, `Eq ${i+1} JUN`, `Eq ${i+1} JUL`, `Eq ${i+1} AUG`, `Eq ${i+1} SEP`, `Eq ${i+1} OCT`, `Eq ${i+1} NOV`, `Eq ${i+1} DEC`
      ]),
      ...deviationRows.flatMap((_, i) => [
        `Dev ${i+1} Date`, `Dev ${i+1} Eq ID`, `Dev ${i+1} Desc`, `Dev ${i+1} Action`, `Dev ${i+1} Resp`, `Dev ${i+1} Target`, `Dev ${i+1} Comp`, `Dev ${i+1} Sig`
      ]),
      "Maintenance Inspector Name", "Maintenance Inspector Date",
      "Maintenance Supervisor Name", "Maintenance Supervisor Date",
      "HSE Manager Name", "HSE Manager Date"
    ];

    const values = [
      formData.siteLocation, formData.year, formData.inspector, formData.inspectionFrequency,
      ...inspectionRows.flatMap(row => [
        row.equipmentId, row.description, row.jan, row.feb, row.mar, row.apr, row.may, row.jun, row.jul, row.aug, row.sep, row.oct, row.nov, row.dec
      ]),
      ...deviationRows.flatMap(row => [
        row.date, row.equipmentId, row.description, row.action, row.responsible, row.targetDate, row.completion, row.signature
      ]),
      formData.maintenanceInspectorName, formData.maintenanceInspectorDate,
      formData.maintenanceSupervisorName, formData.maintenanceSupervisorDate,
      formData.hseManagerName, formData.hseManagerDate
    ];

    mutation.mutate({
      formCode: "TE-IMS-FRM-MAINT-001",
      headers,
      values,
    });
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-8 text-center">
          <h2 className="text-2xl font-bold text-[#081C2E] mb-4">Form submitted successfully.</h2>
          <p className="mb-6">View register: <a href={sheetUrl} target="_blank" rel="noopener noreferrer" className="text-[#C49A28] underline font-bold">Google Sheet</a></p>
          <Link href="/" className="text-[#081C2E] hover:underline">← Return to Portal Home</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-[1400px] mx-auto p-4 font-['Nunito_Sans'] text-[#081C2E]">
        <nav className="mb-4">
          <Link href="/" className="text-[#081C2E] hover:underline">← Portal Home</Link>
          <span className="mx-2">/</span>
          <Link href="/docs/frm" className="text-gray-500 hover:text-[#C49A28] transition-colors cursor-pointer">FRM</Link>
          <span className="mx-2">/</span>
          <span className="font-bold">Machine Guarding Inspection Register</span>
        </nav>

        <div className="border border-[#dde3ec] rounded-lg overflow-hidden bg-white shadow-sm mb-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#081C2E] text-white">
                <th colSpan={4} className="p-3 text-lg text-center uppercase tracking-wider">Machine Guarding Inspection Register</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-[#dde3ec] bg-[#f4f6f9] font-bold w-1/4">Document</td>
                <td className="p-2 border border-[#dde3ec] w-1/4">TE-IMS-FRM-MAINT-001</td>
                <td className="p-2 border border-[#dde3ec] bg-[#f4f6f9] font-bold w-1/4">Revision</td>
                <td className="p-2 border border-[#dde3ec] w-1/4">Rev01</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#dde3ec] bg-[#f4f6f9] font-bold">Date</td>
                <td className="p-2 border border-[#dde3ec]">09 Apr 2026</td>
                <td className="p-2 border border-[#dde3ec] bg-[#f4f6f9] font-bold">Status</td>
                <td className="p-2 border border-[#dde3ec]">Approved for Implementation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wide mb-4">Inspection Details</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-[#f4f6f9] border border-[#dde3ec] rounded">
              <div>
                <label className="block text-xs font-bold uppercase mb-1">Site / Location *</label>
                <input type="text" name="siteLocation" required value={formData.siteLocation} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase mb-1">Year *</label>
                <input type="number" name="year" required value={formData.year} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase mb-1">Inspector *</label>
                <input type="text" name="inspector" required value={formData.inspector} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase mb-1">Inspection Frequency</label>
                <input type="text" name="inspectionFrequency" value={formData.inspectionFrequency} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
              </div>
            </div>
          </section>

          <section className="bg-white border border-[#dde3ec] p-4 rounded shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <div>
                <h4 className="font-bold border-b border-[#C49A28] pb-1 mb-2">LEGEND</h4>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                  <span>1 – CLEAN</span>
                  <span>2 – DIRTY</span>
                  <span>3 – DAMAGED</span>
                  <span>4 – LOOSE</span>
                  <span>5 – MISSING</span>
                  <span>6 – NO GUARD</span>
                  <span>7 – GUARD BYPASSED</span>
                  <span className="font-bold mt-1">OK – Satisfactory</span>
                  <span className="font-bold mt-1 text-red-600">X – Deviation found</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold border-b border-[#C49A28] pb-1 mb-2">GUIDELINES</h4>
                <ul className="list-disc list-inside text-xs space-y-1">
                  <li>Machine guard/cover must provide maximum protection against moving parts</li>
                  <li>Openings must not allow body parts to contact danger zones</li>
                  <li>Guards must be securely fastened and not easily removable without tools</li>
                  <li>Emergency stop buttons must be accessible and functional</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wide mb-4">Monthly Inspection Register</div>
            <div className="overflow-x-auto border border-[#dde3ec] rounded">
              <table className="w-full border-collapse text-[11px]">
                <thead>
                  <tr className="bg-[#081C2E] text-white">
                    <th className="p-2 border border-[#dde3ec] w-8">No.</th>
                    <th className="p-2 border border-[#dde3ec] min-w-[120px]">Equipment / Machine ID</th>
                    <th className="p-2 border border-[#dde3ec] min-w-[150px]">Description / Location</th>
                    {["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"].map(m => (
                      <th key={m} className="p-1 border border-[#dde3ec] w-10 text-center">{m}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {inspectionRows.map((row, index) => (
                    <tr key={row.id} className={index % 2 === 0 ? "bg-white" : "bg-[#f4f6f9]"}>
                      <td className="p-2 border border-[#dde3ec] text-center">{index + 1}</td>
                      <td className="p-1 border border-[#dde3ec]">
                        <input type="text" value={row.equipmentId} onChange={(e) => updateInspectionRow(row.id, "equipmentId", e.target.value)} className="w-full p-1 bg-transparent outline-none focus:bg-white" />
                      </td>
                      <td className="p-1 border border-[#dde3ec]">
                        <input type="text" value={row.description} onChange={(e) => updateInspectionRow(row.id, "description", e.target.value)} className="w-full p-1 bg-transparent outline-none focus:bg-white" />
                      </td>
                      {["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"].map(m => (
                        <td key={m} className="p-1 border border-[#dde3ec]">
                          <input type="text" value={(row as any)[m]} onChange={(e) => updateInspectionRow(row.id, m, e.target.value)} className="w-full p-1 text-center bg-transparent outline-none focus:bg-white" placeholder="OK/X" />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button type="button" onClick={addInspectionRow} className="mt-2 text-sm text-[#C49A28] font-bold hover:underline">+ Add Equipment Row</button>
          </section>

          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wide mb-4">Deviation & Follow-Up Report</div>
            <div className="overflow-x-auto border border-[#dde3ec] rounded">
              <table className="w-full border-collapse text-xs">
                <thead>
                  <tr className="bg-[#081C2E] text-white">
                    <th className="p-2 border border-[#dde3ec]">Date</th>
                    <th className="p-2 border border-[#dde3ec]">Equipment ID</th>
                    <th className="p-2 border border-[#dde3ec]">Deviation Description</th>
                    <th className="p-2 border border-[#dde3ec]">Follow-Up Action</th>
                    <th className="p-2 border border-[#dde3ec]">Responsible</th>
                    <th className="p-2 border border-[#dde3ec]">Target Date</th>
                    <th className="p-2 border border-[#dde3ec]">Completion</th>
                    <th className="p-2 border border-[#dde3ec]">Signature</th>
                  </tr>
                </thead>
                <tbody>
                  {deviationRows.map((row, index) => (
                    <tr key={row.id} className={index % 2 === 0 ? "bg-white" : "bg-[#f4f6f9]"}>
                      <td className="p-1 border border-[#dde3ec]"><input type="date" value={row.date} onChange={(e) => updateDeviationRow(row.id, "date", e.target.value)} className="w-full p-1 bg-transparent outline-none" /></td>
                      <td className="p-1 border border-[#dde3ec]"><input type="text" value={row.equipmentId} onChange={(e) => updateDeviationRow(row.id, "equipmentId", e.target.value)} className="w-full p-1 bg-transparent outline-none" /></td>
                      <td className="p-1 border border-[#dde3ec]"><textarea value={row.description} onChange={(e) => updateDeviationRow(row.id, "description", e.target.value)} className="w-full p-1 bg-transparent outline-none min-h-[40px]" /></td>
                      <td className="p-1 border border-[#dde3ec]"><textarea value={row.action} onChange={(e) => updateDeviationRow(row.id, "action", e.target.value)} className="w-full p-1 bg-transparent outline-none min-h-[40px]" /></td>
                      <td className="p-1 border border-[#dde3ec]"><input type="text" value={row.responsible} onChange={(e) => updateDeviationRow(row.id, "responsible", e.target.value)} className="w-full p-1 bg-transparent outline-none" /></td>
                      <td className="p-1 border border-[#dde3ec]"><input type="date" value={row.targetDate} onChange={(e) => updateDeviationRow(row.id, "targetDate", e.target.value)} className="w-full p-1 bg-transparent outline-none" /></td>
                      <td className="p-1 border border-[#dde3ec]"><input type="text" value={row.completion} onChange={(e) => updateDeviationRow(row.id, "completion", e.target.value)} className="w-full p-1 bg-transparent outline-none" placeholder="Yes/No" /></td>
                      <td className="p-1 border border-[#dde3ec]"><input type="text" value={row.signature} onChange={(e) => updateDeviationRow(row.id, "signature", e.target.value)} className="w-full p-1 bg-transparent outline-none" placeholder="Full Name" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button type="button" onClick={addDeviationRow} className="mt-2 text-sm text-[#C49A28] font-bold hover:underline">+ Add Deviation Row</button>
          </section>

          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wide mb-4">Sign-Off</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-[#dde3ec] rounded overflow-hidden">
                <div className="bg-[#f4f6f9] p-2 font-bold text-xs border-b border-[#dde3ec]">MAINTENANCE INSPECTOR</div>
                <div className="p-3 space-y-3">
                  <input type="text" name="maintenanceInspectorName" placeholder="Full Name" value={formData.maintenanceInspectorName} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded text-sm" />
                  <input type="date" name="maintenanceInspectorDate" value={formData.maintenanceInspectorDate} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded text-sm" />
                </div>
              </div>
              <div className="border border-[#dde3ec] rounded overflow-hidden">
                <div className="bg-[#f4f6f9] p-2 font-bold text-xs border-b border-[#dde3ec]">MAINTENANCE SUPERVISOR</div>
                <div className="p-3 space-y-3">
                  <input type="text" name="maintenanceSupervisorName" placeholder="Full Name" value={formData.maintenanceSupervisorName} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded text-sm" />
                  <input type="date" name="maintenanceSupervisorDate" value={formData.maintenanceSupervisorDate} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded text-sm" />
                </div>
              </div>
              <div className="border border-[#dde3ec] rounded overflow-hidden">
                <div className="bg-[#f4f6f9] p-2 font-bold text-xs border-b border-[#dde3ec]">HSE MANAGER</div>
                <div className="p-3 space-y-3">
                  <input type="text" name="hseManagerName" placeholder="Full Name" value={formData.hseManagerName} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded text-sm" />
                  <input type="date" name="hseManagerDate" value={formData.hseManagerDate} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded text-sm" />
                </div>
              </div>
            </div>
          </section>

          {error && <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded">{error}</div>}

          <div className="flex justify-end pt-4 pb-12">
            <button
              type="submit"
              disabled={mutation.isPending}
              className="bg-[#081C2E] text-white px-8 py-3 rounded font-bold hover:bg-[#112d45] transition-colors disabled:opacity-50 flex items-center"
            >
              {mutation.isPending ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : "Submit Inspection Register"}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
