import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_030() {
  const [submitted, setSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    siteLocation: "",
    year: "",
    inspectorName: "",
    inspectionFrequency: "",
    inspectionRows: Array(25).fill(null).map((_, i) => ({
      id: i + 1,
      tag: "",
      type: "",
      q1: "",
      q2: "",
      q3: "",
      q4: ""
    })),
    dateInspectorFooter: "",
    deviationRows: Array(15).fill(null).map((_, i) => ({
      id: i + 1,
      date: "",
      description: "",
      action: "",
      responsible: "",
      targetDate: "",
      completionDate: "",
      signature: ""
    })),
    hseRepName: "",
    hseRepSig: "",
    hseRepDate: "",
    hseMgrName: "",
    hseMgrSig: "",
    hseMgrDate: "",
    siteSupName: "",
    siteSupSig: "",
    siteSupDate: ""
  });

  const submitMutation = trpc.formSubmissions.submit.useMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRowChange = (index: number, field: string, value: string, type: 'inspection' | 'deviation') => {
    if (type === 'inspection') {
      const newRows = [...formData.inspectionRows];
      newRows[index] = { ...newRows[index], [field]: value };
      setFormData(prev => ({ ...prev, inspectionRows: newRows }));
    } else {
      const newRows = [...formData.deviationRows];
      newRows[index] = { ...newRows[index], [field]: value };
      setFormData(prev => ({ ...prev, deviationRows: newRows }));
    }
  };

  const addInspectionRow = () => {
    setFormData(prev => ({
      ...prev,
      inspectionRows: [
        ...prev.inspectionRows,
        { id: prev.inspectionRows.length + 1, tag: "", type: "", q1: "", q2: "", q3: "", q4: "" }
      ]
    }));
  };

  const addDeviationRow = () => {
    setFormData(prev => ({
      ...prev,
      deviationRows: [
        ...prev.deviationRows,
        { id: prev.deviationRows.length + 1, date: "", description: "", action: "", responsible: "", targetDate: "", completionDate: "", signature: "" }
      ]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const headers = [
      "Site / Location", "Year", "Inspector Name", "Inspection Frequency",
      ...formData.inspectionRows.flatMap((r, i) => [
        `Eq ${i+1} Tag`, `Eq ${i+1} Type`, `Eq ${i+1} Q1`, `Eq ${i+1} Q2`, `Eq ${i+1} Q3`, `Eq ${i+1} Q4`
      ]),
      "Date Inspected / Inspector Initials",
      ...formData.deviationRows.flatMap((r, i) => [
        `Dev ${i+1} Date`, `Dev ${i+1} Desc`, `Dev ${i+1} Action`, `Dev ${i+1} Resp`, `Dev ${i+1} Target`, `Dev ${i+1} Done`, `Dev ${i+1} Sig`
      ]),
      "HSE Rep Name", "HSE Rep Date", "HSE Mgr Name", "HSE Mgr Date", "Site Sup Name", "Site Sup Date"
    ];

    const values = [
      formData.siteLocation, formData.year, formData.inspectorName, formData.inspectionFrequency,
      ...formData.inspectionRows.flatMap(r => [r.tag, r.type, r.q1, r.q2, r.q3, r.q4]),
      formData.dateInspectorFooter,
      ...formData.deviationRows.flatMap(r => [r.date, r.description, r.action, r.responsible, r.targetDate, r.completionDate, r.signature]),
      formData.hseRepName, formData.hseRepDate, formData.hseMgrName, formData.hseMgrDate, formData.siteSupName, formData.siteSupDate
    ];

    try {
      const result = await submitMutation.mutateAsync({
        formCode: "TE-IMS-FRM-HSE-030",
        headers,
        values
      });
      setSheetUrl(result.sheetUrl);
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Failed to submit form");
    }
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-8 text-center">
          <h2 className="text-2xl font-bold text-[#081C2E] mb-4">Form submitted successfully</h2>
          <p className="mb-6">View register: <a href={sheetUrl} target="_blank" rel="noopener noreferrer" className="text-[#C49A28] underline">{sheetUrl}</a></p>
          <Link href="/" className="bg-[#081C2E] text-white px-6 py-2 rounded">Return to Portal</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto p-4 font-['Nunito_Sans'] text-[#081C2E]">
        <div className="mb-4">
          <Link href="/" className="text-[#081C2E] hover:underline">← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-500 font-semibold">FRM</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-500">Fire Fighting Equipment Register Checklist</span>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg overflow-hidden border border-[#dde3ec]">
          {/* Header Section */}
          <div className="bg-[#081C2E] p-4 text-white flex justify-between items-center">
            <h1 className="text-xl font-bold uppercase tracking-wider">Fire Fighting Equipment Register Checklist</h1>
            <div className="text-right text-xs">
              <p>TE-IMS-FRM-HSE-030</p>
              <p>Rev: 01 | April 2026</p>
            </div>
          </div>

          <div className="p-6 space-y-8">
            {/* Document Control Table */}
            <table className="w-full border-collapse border border-[#dde3ec] text-sm mb-6">
              <thead>
                <tr className="bg-[#081C2E] text-white">
                  <th className="border border-[#dde3ec] p-2 text-left">Document</th>
                  <th className="border border-[#dde3ec] p-2 text-left">Revision</th>
                  <th className="border border-[#dde3ec] p-2 text-left">Date</th>
                  <th className="border border-[#dde3ec] p-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#dde3ec] p-2">TE-IMS-FRM-HSE-030_Rev01</td>
                  <td className="border border-[#dde3ec] p-2">Rev01</td>
                  <td className="border border-[#dde3ec] p-2">April 2026</td>
                  <td className="border border-[#dde3ec] p-2">Approved for Implementation</td>
                </tr>
              </tbody>
            </table>

            {/* Inspection Details */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-1 font-bold mb-4">INSPECTION DETAILS</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-[#dde3ec] p-4 rounded bg-[#f4f6f9]">
                <div className="flex items-center gap-2">
                  <label className="font-semibold w-32">Site / Location*:</label>
                  <input required type="text" name="siteLocation" value={formData.siteLocation} onChange={handleInputChange} className="flex-1 p-2 border border-[#dde3ec] rounded" />
                </div>
                <div className="flex items-center gap-2">
                  <label className="font-semibold w-32">Year*:</label>
                  <input required type="number" name="year" value={formData.year} onChange={handleInputChange} className="flex-1 p-2 border border-[#dde3ec] rounded" placeholder="e.g. 2026" />
                </div>
                <div className="flex items-center gap-2">
                  <label className="font-semibold w-32">Inspector Name*:</label>
                  <input required type="text" name="inspectorName" value={formData.inspectorName} onChange={handleInputChange} className="flex-1 p-2 border border-[#dde3ec] rounded" />
                </div>
                <div className="flex items-center gap-2">
                  <label className="font-semibold w-32">Frequency*:</label>
                  <select required name="inspectionFrequency" value={formData.inspectionFrequency} onChange={handleInputChange} className="flex-1 p-2 border border-[#dde3ec] rounded">
                    <option value="">Select Frequency</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Quarterly">Quarterly</option>
                    <option value="Annual">Annual</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Deviation Legend */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-1 font-bold mb-4 uppercase">Deviation Legend — Use Code Numbers Instead of Ticks</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[10px] leading-tight">
                <div className="border border-[#dde3ec] p-2 bg-[#f4f6f9]">
                  <h4 className="font-bold border-b border-[#dde3ec] mb-1">Fire Extinguishers</h4>
                  <p>FE1. Due for service</p>
                  <p>FE2. Label missing/damaged</p>
                  <p>FE3. Incorrectly located</p>
                  <p>FE4. Wrong type for risk</p>
                  <p>FE5. Seal missing/broken</p>
                  <p>FE6. Corroded/damaged</p>
                  <p>FE7. No/damaged symbolic signs</p>
                  <p>FE8. Obstructed/inaccessible</p>
                  <p>FE9. Hose/nozzle missing/damaged</p>
                  <p>FE10. Stored pressure low/high</p>
                </div>
                <div className="border border-[#dde3ec] p-2 bg-[#f4f6f9]">
                  <h4 className="font-bold border-b border-[#dde3ec] mb-1">Hose Reels</h4>
                  <p>HR1. No/damaged symbolic signs</p>
                  <p>HR2. Due for annual service</p>
                  <p>HR3. Incomplete (nozzle/stop valve)</p>
                  <p>HR4. Label missing/damaged</p>
                  <p>HR5. Reel obstructed/inaccessible</p>
                  <p>HR6. Hose not through run-out guide</p>
                  <p>HR7. Used for non-fire activities</p>
                  <p>HR8. Not rolled up</p>
                  <p>HR9. Corroded/damaged</p>
                </div>
                <div className="border border-[#dde3ec] p-2 bg-[#f4f6f9]">
                  <h4 className="font-bold border-b border-[#dde3ec] mb-1">Hydrants</h4>
                  <p>HY1. No/damaged symbolic signs</p>
                  <p>HY2. Due for annual service</p>
                  <p>HY3. Leaking</p>
                  <p>HY4. Wheel valve missing/damaged</p>
                  <p>HY5. No hydrant washer</p>
                  <p>HY6. Damaged</p>
                  <p>HY7. Lug not functional</p>
                  <p>HY8. Obstructed/inaccessible</p>
                  <p className="mt-2 font-bold text-[#C49A28]">SFU = Satisfactory for Use</p>
                </div>
              </div>
            </section>

            {/* Quarterly Inspection Register */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-1 font-bold mb-4">QUARTERLY INSPECTION REGISTER</div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[#dde3ec] text-xs">
                  <thead>
                    <tr className="bg-[#081C2E] text-white">
                      <th className="border border-[#dde3ec] p-2 w-10">#</th>
                      <th className="border border-[#dde3ec] p-2 min-w-[150px]">Equipment ID / Tag</th>
                      <th className="border border-[#dde3ec] p-2 w-32">Type (FE/HR/HY)</th>
                      <th className="border border-[#dde3ec] p-2">Q1 (Jan-Mar)</th>
                      <th className="border border-[#dde3ec] p-2">Q2 (Apr-Jun)</th>
                      <th className="border border-[#dde3ec] p-2">Q3 (Jul-Sep)</th>
                      <th className="border border-[#dde3ec] p-2">Q4 (Oct-Dec)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.inspectionRows.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-[#f4f6f9]"}>
                        <td className="border border-[#dde3ec] p-1 text-center font-bold">{row.id}</td>
                        <td className="border border-[#dde3ec] p-1">
                          <input type="text" value={row.tag} onChange={(e) => handleRowChange(index, 'tag', e.target.value, 'inspection')} className="w-full p-1 border-none bg-transparent focus:ring-1 focus:ring-[#C49A28]" />
                        </td>
                        <td className="border border-[#dde3ec] p-1">
                          <select value={row.type} onChange={(e) => handleRowChange(index, 'type', e.target.value, 'inspection')} className="w-full p-1 border-none bg-transparent focus:ring-1 focus:ring-[#C49A28]">
                            <option value=""></option>
                            <option value="FE">FE</option>
                            <option value="HR">HR</option>
                            <option value="HY">HY</option>
                          </select>
                        </td>
                        <td className="border border-[#dde3ec] p-1">
                          <input type="text" value={row.q1} onChange={(e) => handleRowChange(index, 'q1', e.target.value, 'inspection')} className="w-full p-1 border-none bg-transparent text-center focus:ring-1 focus:ring-[#C49A28]" placeholder="SFU/Code" />
                        </td>
                        <td className="border border-[#dde3ec] p-1">
                          <input type="text" value={row.q2} onChange={(e) => handleRowChange(index, 'q2', e.target.value, 'inspection')} className="w-full p-1 border-none bg-transparent text-center focus:ring-1 focus:ring-[#C49A28]" placeholder="SFU/Code" />
                        </td>
                        <td className="border border-[#dde3ec] p-1">
                          <input type="text" value={row.q3} onChange={(e) => handleRowChange(index, 'q3', e.target.value, 'inspection')} className="w-full p-1 border-none bg-transparent text-center focus:ring-1 focus:ring-[#C49A28]" placeholder="SFU/Code" />
                        </td>
                        <td className="border border-[#dde3ec] p-1">
                          <input type="text" value={row.q4} onChange={(e) => handleRowChange(index, 'q4', e.target.value, 'inspection')} className="w-full p-1 border-none bg-transparent text-center focus:ring-1 focus:ring-[#C49A28]" placeholder="SFU/Code" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-[#081C2E] text-white">
                      <td colSpan={3} className="border border-[#dde3ec] p-2 font-bold text-right italic">Date Inspected / Inspector Initials</td>
                      <td colSpan={4} className="border border-[#dde3ec] p-1">
                        <input type="text" name="dateInspectorFooter" value={formData.dateInspectorFooter} onChange={handleInputChange} className="w-full p-1 bg-transparent text-white border-none focus:ring-1 focus:ring-[#C49A28]" placeholder="e.g. 15/04/26 - JS" />
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <button type="button" onClick={addInspectionRow} className="mt-2 text-xs text-[#C49A28] font-bold hover:underline">+ ADD ROW</button>
            </section>

            {/* Deviation and Follow-up Report */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-1 font-bold mb-4 uppercase">Deviation and Follow-Up Report</div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[#dde3ec] text-[10px]">
                  <thead>
                    <tr className="bg-[#081C2E] text-white">
                      <th className="border border-[#dde3ec] p-1 w-8">No.</th>
                      <th className="border border-[#dde3ec] p-1 w-20">Date</th>
                      <th className="border border-[#dde3ec] p-1">Deviation Description</th>
                      <th className="border border-[#dde3ec] p-1">Follow-Up Action</th>
                      <th className="border border-[#dde3ec] p-1 w-24">Responsible</th>
                      <th className="border border-[#dde3ec] p-1 w-20">Target Date</th>
                      <th className="border border-[#dde3ec] p-1 w-20">Completion Date</th>
                      <th className="border border-[#dde3ec] p-1 w-24">Signature</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.deviationRows.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-[#f4f6f9]"}>
                        <td className="border border-[#dde3ec] p-1 text-center font-bold">{row.id}</td>
                        <td className="border border-[#dde3ec] p-1">
                          <input type="date" value={row.date} onChange={(e) => handleRowChange(index, 'date', e.target.value, 'deviation')} className="w-full p-0.5 border-none bg-transparent focus:ring-1 focus:ring-[#C49A28]" />
                        </td>
                        <td className="border border-[#dde3ec] p-1">
                          <input type="text" value={row.description} onChange={(e) => handleRowChange(index, 'description', e.target.value, 'deviation')} className="w-full p-0.5 border-none bg-transparent focus:ring-1 focus:ring-[#C49A28]" />
                        </td>
                        <td className="border border-[#dde3ec] p-1">
                          <input type="text" value={row.action} onChange={(e) => handleRowChange(index, 'action', e.target.value, 'deviation')} className="w-full p-0.5 border-none bg-transparent focus:ring-1 focus:ring-[#C49A28]" />
                        </td>
                        <td className="border border-[#dde3ec] p-1">
                          <input type="text" value={row.responsible} onChange={(e) => handleRowChange(index, 'responsible', e.target.value, 'deviation')} className="w-full p-0.5 border-none bg-transparent focus:ring-1 focus:ring-[#C49A28]" />
                        </td>
                        <td className="border border-[#dde3ec] p-1">
                          <input type="date" value={row.targetDate} onChange={(e) => handleRowChange(index, 'targetDate', e.target.value, 'deviation')} className="w-full p-0.5 border-none bg-transparent focus:ring-1 focus:ring-[#C49A28]" />
                        </td>
                        <td className="border border-[#dde3ec] p-1">
                          <input type="date" value={row.completionDate} onChange={(e) => handleRowChange(index, 'completionDate', e.target.value, 'deviation')} className="w-full p-0.5 border-none bg-transparent focus:ring-1 focus:ring-[#C49A28]" />
                        </td>
                        <td className="border border-[#dde3ec] p-1">
                          <input type="text" placeholder="Sig" value={row.signature} onChange={(e) => handleRowChange(index, 'signature', e.target.value, 'deviation')} className="w-full p-0.5 border-none bg-transparent focus:ring-1 focus:ring-[#C49A28]" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button type="button" onClick={addDeviationRow} className="mt-2 text-xs text-[#C49A28] font-bold hover:underline">+ ADD ROW</button>
            </section>

            {/* Sign-off */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-1 font-bold mb-4">SIGN-OFF</div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[#dde3ec] text-sm">
                  <thead>
                    <tr className="bg-[#081C2E] text-white">
                      <th className="border border-[#dde3ec] p-2 text-left">Role</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Name</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Signature</th>
                      <th className="border border-[#dde3ec] p-2 text-left w-40">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-[#dde3ec] p-2 font-semibold bg-[#f4f6f9]">HSE Representative</td>
                      <td className="border border-[#dde3ec] p-2">
                        <input type="text" name="hseRepName" value={formData.hseRepName} onChange={handleInputChange} className="w-full p-1 border-none focus:ring-1 focus:ring-[#C49A28]" />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input type="text" placeholder="Full name" name="hseRepSig" value={formData.hseRepSig} onChange={handleInputChange} className="w-full p-1 border-none focus:ring-1 focus:ring-[#C49A28]" />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input type="date" name="hseRepDate" value={formData.hseRepDate} onChange={handleInputChange} className="w-full p-1 border-none focus:ring-1 focus:ring-[#C49A28]" />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#dde3ec] p-2 font-semibold bg-[#f4f6f9]">HSE Manager</td>
                      <td className="border border-[#dde3ec] p-2">
                        <input type="text" name="hseMgrName" value={formData.hseMgrName} onChange={handleInputChange} className="w-full p-1 border-none focus:ring-1 focus:ring-[#C49A28]" />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input type="text" placeholder="Full name" name="hseMgrSig" value={formData.hseMgrSig} onChange={handleInputChange} className="w-full p-1 border-none focus:ring-1 focus:ring-[#C49A28]" />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input type="date" name="hseMgrDate" value={formData.hseMgrDate} onChange={handleInputChange} className="w-full p-1 border-none focus:ring-1 focus:ring-[#C49A28]" />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#dde3ec] p-2 font-semibold bg-[#f4f6f9]">Site Supervisor</td>
                      <td className="border border-[#dde3ec] p-2">
                        <input type="text" name="siteSupName" value={formData.siteSupName} onChange={handleInputChange} className="w-full p-1 border-none focus:ring-1 focus:ring-[#C49A28]" />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input type="text" placeholder="Full name" name="siteSupSig" value={formData.siteSupSig} onChange={handleInputChange} className="w-full p-1 border-none focus:ring-1 focus:ring-[#C49A28]" />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input type="date" name="siteSupDate" value={formData.siteSupDate} onChange={handleInputChange} className="w-full p-1 border-none focus:ring-1 focus:ring-[#C49A28]" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 text-red-700 text-sm">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={submitMutation.isPending}
                className={`
                  bg-[#081C2E] text-white px-8 py-3 rounded-lg font-bold transition-all
                  ${submitMutation.isPending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#C49A28]'}
                `}
              >
                {submitMutation.isPending ? 'SUBMITTING...' : 'SUBMIT INSPECTION REGISTER'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
