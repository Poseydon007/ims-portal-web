import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_016() {
  const [submitted, setSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    inspectionDate: "",
    inspectorName: "",
    siteLocation: "",
    roleBasedRows: [
      { role: "Driller – Day Shift", hardHat: true, safetyGlasses: true, cutGloves: true, chemicalGloves: false, frHighVis: true, steelToeBoots: true, earProtection: true, respirator: "FFP2", harness: false, headlamp: false, other: "", notes: "Standard drilling PPE" },
      { role: "Driller – Night Shift", hardHat: true, safetyGlasses: true, cutGloves: true, chemicalGloves: false, frHighVis: true, steelToeBoots: true, earProtection: true, respirator: "FFP2", harness: false, headlamp: true, other: "", notes: "Headlamp mandatory" },
      { role: "Rig Mechanic / Workshop", hardHat: true, safetyGlasses: true, cutGloves: true, chemicalGloves: true, frHighVis: true, steelToeBoots: true, earProtection: true, respirator: "FFP3", harness: false, headlamp: false, other: "", notes: "Respirator if required" },
      { role: "Supervisor / HSE Personnel", hardHat: true, safetyGlasses: true, cutGloves: true, chemicalGloves: false, frHighVis: true, steelToeBoots: true, earProtection: true, respirator: "FFP2", harness: false, headlamp: false, other: "", notes: "Field standard" },
    ],
    activityBasedRows: [
      { activity: "Working at Height (>1.8 m)", hardHat: true, safetyGlasses: true, cutGloves: true, chemicalGloves: false, frHighVis: true, steelToeBoots: true, earProtection: true, respirator: "", harness: true, specialItems: "", notes: "Harness mandatory" },
      { activity: "Confined Space Entry", hardHat: true, safetyGlasses: true, cutGloves: true, chemicalGloves: true, frHighVis: true, steelToeBoots: true, earProtection: true, respirator: "As per permit", harness: true, specialItems: "Gas Detector", notes: "As per permit" },
      { activity: "Hot Work / Welding", hardHat: true, safetyGlasses: true, cutGloves: true, chemicalGloves: false, frHighVis: true, steelToeBoots: true, earProtection: true, respirator: "Welding Fume", harness: false, specialItems: "Welding Helmet", notes: "FR mandatory" },
      { activity: "General Site Visitor", hardHat: true, safetyGlasses: true, cutGloves: false, chemicalGloves: false, frHighVis: true, steelToeBoots: true, earProtection: false, respirator: "", harness: false, specialItems: "Visitor Kit", notes: "Restricted access" },
    ],
    comments: "",
    approvalDate: "",
    approverName: "Joao Melo",
  });

  const mutation = trpc.formSubmissions.submit.useMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRowChange = (type: "role" | "activity", index: number, field: string, value: any) => {
    const rowsField = type === "role" ? "roleBasedRows" : "activityBasedRows";
    const newRows = [...formData[rowsField]];
    newRows[index] = { ...newRows[index], [field]: value };
    setFormData((prev) => ({ ...prev, [rowsField]: newRows }));
  };

  const addRow = (type: "role" | "activity") => {
    if (type === "role") {
      setFormData((prev) => ({
        ...prev,
        roleBasedRows: [...prev.roleBasedRows, { role: "", hardHat: false, safetyGlasses: false, cutGloves: false, chemicalGloves: false, frHighVis: false, steelToeBoots: false, earProtection: false, respirator: "", harness: false, headlamp: false, other: "", notes: "" }],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        activityBasedRows: [...prev.activityBasedRows, { activity: "", hardHat: false, safetyGlasses: false, cutGloves: false, chemicalGloves: false, frHighVis: false, steelToeBoots: false, earProtection: false, respirator: "", harness: false, specialItems: "", notes: "" }],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const headers = [
      "Inspection Date", "Inspector Name", "Site Location",
      "Role-Based Data (JSON)", "Activity-Based Data (JSON)",
      "Comments", "Approval Date", "Approver Name"
    ];

    const values = [
      formData.inspectionDate, formData.inspectorName, formData.siteLocation,
      JSON.stringify(formData.roleBasedRows), JSON.stringify(formData.activityBasedRows),
      formData.comments, formData.approvalDate, formData.approverName
    ];

    try {
      const result = await mutation.mutateAsync({
        formCode: "TE-IMS-FRM-HSE-016",
        headers,
        values,
      });
      setSheetUrl(result.sheetUrl);
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "An error occurred during submission.");
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 text-center">
          <h1 className="text-2xl font-bold text-[#081C2E] mb-4">Form Submitted Successfully</h1>
          <p className="text-gray-600 mb-6">Your PPE Kit Contents Matrix update has been recorded.</p>
          <a
            href={sheetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C49A28] text-white px-6 py-2 rounded hover:bg-[#a38021] transition-colors"
          >
            View Register (Google Sheet)
          </a>
          <div className="mt-8">
            <Link href="/" className="text-[#081C2E] hover:underline">← Return to Portal Home</Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-[#f4f6f9] min-h-screen">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <Link href="/" className="text-[#081C2E] hover:underline font-semibold">← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/docs/frm" className="text-gray-600 hover:text-[#C49A28] transition-colors cursor-pointer">FRM</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">PPE Kit Contents Matrix</span>
        </nav>

        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg overflow-hidden border border-[#dde3ec]">
          {/* Header Section */}
          <div className="bg-[#081C2E] p-4 text-white">
            <h1 className="text-xl font-bold uppercase tracking-wider">PPE Kit Contents Matrix</h1>
          </div>

          {/* Document Control Table */}
          <div className="p-4 bg-gray-50 border-b border-[#dde3ec]">
            <table className="w-full text-sm border-collapse border border-[#dde3ec]">
              <tbody>
                <tr>
                  <td className="border border-[#dde3ec] p-2 font-bold bg-gray-100 w-1/4">Document Code</td>
                  <td className="border border-[#dde3ec] p-2 w-1/4">TE-IMS-FRM-HSE-016</td>
                  <td className="border border-[#dde3ec] p-2 font-bold bg-gray-100 w-1/4">Revision</td>
                  <td className="border border-[#dde3ec] p-2 w-1/4">00</td>
                </tr>
                <tr>
                  <td className="border border-[#dde3ec] p-2 font-bold bg-gray-100">Date</td>
                  <td className="border border-[#dde3ec] p-2">01 March 2026</td>
                  <td className="border border-[#dde3ec] p-2 font-bold bg-gray-100">Status</td>
                  <td className="border border-[#dde3ec] p-2 text-green-700 font-semibold">Approved</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-6 space-y-8">
            {/* General Information */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 mb-4 font-bold">GENERAL INFORMATION</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Inspection/Verification Date *</label>
                  <input
                    type="date"
                    name="inspectionDate"
                    required
                    value={formData.inspectionDate}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Inspector/Issuer Name *</label>
                  <input
                    type="text"
                    name="inspectorName"
                    required
                    placeholder="Full Name"
                    value={formData.inspectorName}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Site/Location *</label>
                  <input
                    type="text"
                    name="siteLocation"
                    required
                    placeholder="e.g., Ma'aden Site"
                    value={formData.siteLocation}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                  />
                </div>
              </div>
            </section>

            {/* Role-Based PPE Requirements */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 mb-4 font-bold flex justify-between items-center">
                <span>ROLE-BASED PPE REQUIREMENTS</span>
                <button type="button" onClick={() => addRow("role")} className="bg-[#C49A28] text-xs px-2 py-1 rounded hover:bg-[#a38021]">Add Role</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse border border-[#dde3ec]">
                  <thead>
                    <tr className="bg-[#081C2E] text-white">
                      <th className="border border-[#dde3ec] p-2 min-w-[150px]">Kit Type / Role</th>
                      <th className="border border-[#dde3ec] p-2">Hard Hat</th>
                      <th className="border border-[#dde3ec] p-2">Safety Glasses</th>
                      <th className="border border-[#dde3ec] p-2">Cut Gloves</th>
                      <th className="border border-[#dde3ec] p-2">Chem Gloves</th>
                      <th className="border border-[#dde3ec] p-2">FR / High-Vis</th>
                      <th className="border border-[#dde3ec] p-2">Steel-Toe Boots</th>
                      <th className="border border-[#dde3ec] p-2">Ear Prot.</th>
                      <th className="border border-[#dde3ec] p-2">Respirator</th>
                      <th className="border border-[#dde3ec] p-2">Harness</th>
                      <th className="border border-[#dde3ec] p-2">Headlamp</th>
                      <th className="border border-[#dde3ec] p-2">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.roleBasedRows.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border border-[#dde3ec] p-1">
                          <input type="text" value={row.role} onChange={(e) => handleRowChange("role", idx, "role", e.target.value)} className="w-full p-1 border-none bg-transparent" />
                        </td>
                        <td className="border border-[#dde3ec] p-1 text-center">
                          <input type="checkbox" checked={row.hardHat} onChange={(e) => handleRowChange("role", idx, "hardHat", e.target.checked)} />
                        </td>
                        <td className="border border-[#dde3ec] p-1 text-center">
                          <input type="checkbox" checked={row.safetyGlasses} onChange={(e) => handleRowChange("role", idx, "safetyGlasses", e.target.checked)} />
                        </td>
                        <td className="border border-[#dde3ec] p-1 text-center">
                          <input type="checkbox" checked={row.cutGloves} onChange={(e) => handleRowChange("role", idx, "cutGloves", e.target.checked)} />
                        </td>
                        <td className="border border-[#dde3ec] p-1 text-center">
                          <input type="checkbox" checked={row.chemicalGloves} onChange={(e) => handleRowChange("role", idx, "chemicalGloves", e.target.checked)} />
                        </td>
                        <td className="border border-[#dde3ec] p-1 text-center">
                          <input type="checkbox" checked={row.frHighVis} onChange={(e) => handleRowChange("role", idx, "frHighVis", e.target.checked)} />
                        </td>
                        <td className="border border-[#dde3ec] p-1 text-center">
                          <input type="checkbox" checked={row.steelToeBoots} onChange={(e) => handleRowChange("role", idx, "steelToeBoots", e.target.checked)} />
                        </td>
                        <td className="border border-[#dde3ec] p-1 text-center">
                          <input type="checkbox" checked={row.earProtection} onChange={(e) => handleRowChange("role", idx, "earProtection", e.target.checked)} />
                        </td>
                        <td className="border border-[#dde3ec] p-1">
                          <input type="text" value={row.respirator} onChange={(e) => handleRowChange("role", idx, "respirator", e.target.value)} className="w-full p-1 border-none bg-transparent" placeholder="Type" />
                        </td>
                        <td className="border border-[#dde3ec] p-1 text-center">
                          <input type="checkbox" checked={row.harness} onChange={(e) => handleRowChange("role", idx, "harness", e.target.checked)} />
                        </td>
                        <td className="border border-[#dde3ec] p-1 text-center">
                          <input type="checkbox" checked={row.headlamp} onChange={(e) => handleRowChange("role", idx, "headlamp", e.target.checked)} />
                        </td>
                        <td className="border border-[#dde3ec] p-1">
                          <input type="text" value={row.notes} onChange={(e) => handleRowChange("role", idx, "notes", e.target.value)} className="w-full p-1 border-none bg-transparent" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Activity-Based PPE Requirements */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 mb-4 font-bold flex justify-between items-center">
                <span>ACTIVITY-BASED PPE REQUIREMENTS</span>
                <button type="button" onClick={() => addRow("activity")} className="bg-[#C49A28] text-xs px-2 py-1 rounded hover:bg-[#a38021]">Add Activity</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse border border-[#dde3ec]">
                  <thead>
                    <tr className="bg-[#081C2E] text-white">
                      <th className="border border-[#dde3ec] p-2 min-w-[150px]">Activity</th>
                      <th className="border border-[#dde3ec] p-2">Hard Hat</th>
                      <th className="border border-[#dde3ec] p-2">Safety Glasses</th>
                      <th className="border border-[#dde3ec] p-2">Cut Gloves</th>
                      <th className="border border-[#dde3ec] p-2">Chem Gloves</th>
                      <th className="border border-[#dde3ec] p-2">FR / High-Vis</th>
                      <th className="border border-[#dde3ec] p-2">Steel-Toe Boots</th>
                      <th className="border border-[#dde3ec] p-2">Ear Prot.</th>
                      <th className="border border-[#dde3ec] p-2">Respirator</th>
                      <th className="border border-[#dde3ec] p-2">Harness</th>
                      <th className="border border-[#dde3ec] p-2">Special Items</th>
                      <th className="border border-[#dde3ec] p-2">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.activityBasedRows.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border border-[#dde3ec] p-1">
                          <input type="text" value={row.activity} onChange={(e) => handleRowChange("activity", idx, "activity", e.target.value)} className="w-full p-1 border-none bg-transparent" />
                        </td>
                        <td className="border border-[#dde3ec] p-1 text-center">
                          <input type="checkbox" checked={row.hardHat} onChange={(e) => handleRowChange("activity", idx, "hardHat", e.target.checked)} />
                        </td>
                        <td className="border border-[#dde3ec] p-1 text-center">
                          <input type="checkbox" checked={row.safetyGlasses} onChange={(e) => handleRowChange("activity", idx, "safetyGlasses", e.target.checked)} />
                        </td>
                        <td className="border border-[#dde3ec] p-1 text-center">
                          <input type="checkbox" checked={row.cutGloves} onChange={(e) => handleRowChange("activity", idx, "cutGloves", e.target.checked)} />
                        </td>
                        <td className="border border-[#dde3ec] p-1 text-center">
                          <input type="checkbox" checked={row.chemicalGloves} onChange={(e) => handleRowChange("activity", idx, "chemicalGloves", e.target.checked)} />
                        </td>
                        <td className="border border-[#dde3ec] p-1 text-center">
                          <input type="checkbox" checked={row.frHighVis} onChange={(e) => handleRowChange("activity", idx, "frHighVis", e.target.checked)} />
                        </td>
                        <td className="border border-[#dde3ec] p-1 text-center">
                          <input type="checkbox" checked={row.steelToeBoots} onChange={(e) => handleRowChange("activity", idx, "steelToeBoots", e.target.checked)} />
                        </td>
                        <td className="border border-[#dde3ec] p-1 text-center">
                          <input type="checkbox" checked={row.earProtection} onChange={(e) => handleRowChange("activity", idx, "earProtection", e.target.checked)} />
                        </td>
                        <td className="border border-[#dde3ec] p-1">
                          <input type="text" value={row.respirator} onChange={(e) => handleRowChange("activity", idx, "respirator", e.target.value)} className="w-full p-1 border-none bg-transparent" placeholder="Type" />
                        </td>
                        <td className="border border-[#dde3ec] p-1 text-center">
                          <input type="checkbox" checked={row.harness} onChange={(e) => handleRowChange("activity", idx, "harness", e.target.checked)} />
                        </td>
                        <td className="border border-[#dde3ec] p-1">
                          <input type="text" value={row.specialItems} onChange={(e) => handleRowChange("activity", idx, "specialItems", e.target.value)} className="w-full p-1 border-none bg-transparent" />
                        </td>
                        <td className="border border-[#dde3ec] p-1">
                          <input type="text" value={row.notes} onChange={(e) => handleRowChange("activity", idx, "notes", e.target.value)} className="w-full p-1 border-none bg-transparent" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Additional Notes */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 mb-4 font-bold">ADDITIONAL NOTES / CUSTOMIZATION</div>
              <textarea
                name="comments"
                rows={4}
                value={formData.comments}
                onChange={handleInputChange}
                placeholder="Enter any site-specific risk assessments or additional PPE requirements..."
                className="w-full p-3 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
              ></textarea>
            </section>

            {/* Footer / Approval */}
            <section className="bg-gray-50 p-6 rounded-lg border border-[#dde3ec]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-[#081C2E] mb-4">Matrix Approval</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Approved By (CEO / MD Name) *</label>
                      <input
                        type="text"
                        name="approverName"
                        required
                        value={formData.approverName}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-[#dde3ec] rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Approval Date *</label>
                      <input
                        type="date"
                        name="approvalDate"
                        required
                        value={formData.approvalDate}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-[#dde3ec] rounded"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-600 space-y-2">
                  <p className="font-bold text-[#081C2E]">Compliance Standards:</p>
                  <ul className="list-disc pl-5">
                    <li>TE-IMS-PROC-HSE-003 (Risk Assessment)</li>
                    <li>TE-IMS-PROC-HSE-004 (PPE Procedure)</li>
                    <li>ISO 45001:2018 (Clause 8.1.2)</li>
                    <li>SASO / CE / ANSI standards where applicable</li>
                  </ul>
                  <p className="mt-4 italic">Update the matrix only with HSE Manager approval (new revision).</p>
                </div>
              </div>
            </section>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end pt-6">
              <button
                type="submit"
                disabled={isLoading}
                className={`bg-[#081C2E] text-white px-10 py-3 rounded-lg font-bold shadow-lg hover:bg-[#1a3a5a] transition-all flex items-center ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  "Submit Matrix Update"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
