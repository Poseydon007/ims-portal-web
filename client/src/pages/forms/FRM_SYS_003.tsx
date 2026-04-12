import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_SYS_003() {
  const [submitted, setSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    carNo: "",
    dateIssued: "",
    originator: "",
    department: "",
    source: "",
    priority: "",
    isoClause: "",
    description: "",
    rootCause: "",
    verificationDate: "",
    verifiedBy: "",
    effectiveness: "",
    comments: "",
    signOffOriginatorName: "",
    signOffOriginatorSig: "",
    signOffOriginatorDate: "",
    signOffManagerName: "",
    signOffManagerSig: "",
    signOffManagerDate: "",
    signOffQaName: "",
    signOffQaSig: "",
    signOffQaDate: "",
    signOffVerifiedName: "",
    signOffVerifiedSig: "",
    signOffVerifiedDate: "",
  });

  const [actions, setActions] = useState([
    { id: 1, action: "", responsible: "", targetDate: "", completion: "", status: "" },
    { id: 2, action: "", responsible: "", targetDate: "", completion: "", status: "" },
    { id: 3, action: "", responsible: "", targetDate: "", completion: "", status: "" },
    { id: 4, action: "", responsible: "", targetDate: "", completion: "", status: "" },
    { id: 5, action: "", responsible: "", targetDate: "", completion: "", status: "" },
    { id: 6, action: "", responsible: "", targetDate: "", completion: "", status: "" },
  ]);

  const mutation = trpc.formSubmissions.submit.useMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked ? value : "" }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleActionChange = (id: number, field: string, value: string) => {
    setActions(actions.map(a => a.id === id ? { ...a, [field]: value } : a));
  };

  const addActionRow = () => {
    const newId = actions.length > 0 ? Math.max(...actions.map(a => a.id)) + 1 : 1;
    setActions([...actions, { id: newId, action: "", responsible: "", targetDate: "", completion: "", status: "" }]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const headers = [
      "CAR No.", "Date Issued", "Originator", "Department", "Source", "Priority", "ISO Clause Reference",
      "Description of Nonconformance", "Root Cause Analysis",
      ...actions.flatMap((a, i) => [
        `Action ${i + 1}`, `Responsible ${i + 1}`, `Target Date ${i + 1}`, `Completion ${i + 1}`, `Status ${i + 1}`
      ]),
      "Verification Date", "Verified By", "Actions Effective?", "Comments",
      "Sign-off Originator Name", "Sign-off Originator Signature", "Sign-off Originator Date",
      "Sign-off Manager Name", "Sign-off Manager Signature", "Sign-off Manager Date",
      "Sign-off QA Name", "Sign-off QA Signature", "Sign-off QA Date",
      "Sign-off Verified Name", "Sign-off Verified Signature", "Sign-off Verified Date"
    ];

    const values = [
      formData.carNo, formData.dateIssued, formData.originator, formData.department, formData.source, formData.priority, formData.isoClause,
      formData.description, formData.rootCause,
      ...actions.flatMap(a => [a.action, a.responsible, a.targetDate, a.completion, a.status]),
      formData.verificationDate, formData.verifiedBy, formData.effectiveness, formData.comments,
      formData.signOffOriginatorName, formData.signOffOriginatorSig, formData.signOffOriginatorDate,
      formData.signOffManagerName, formData.signOffManagerSig, formData.signOffManagerDate,
      formData.signOffQaName, formData.signOffQaSig, formData.signOffQaDate,
      formData.signOffVerifiedName, formData.signOffVerifiedSig, formData.signOffVerifiedDate
    ];

    try {
      const result = await mutation.mutateAsync({
        formCode: "TE-IMS-FRM-SYS-003",
        headers,
        values,
      });
      setSheetUrl(result.sheetUrl);
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "An error occurred during submission.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 text-center">
          <h2 className="text-2xl font-bold text-[#081C2E] mb-4">Form submitted successfully.</h2>
          <p className="mb-6">Your corrective action request has been recorded.</p>
          <a
            href={sheetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C49A28] text-white px-6 py-2 rounded hover:bg-[#a38021] transition-colors"
          >
            View Register
          </a>
          <div className="mt-8">
            <Link href="/" className="text-[#081C2E] hover:underline">← Back to Portal</Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-6 bg-[#f4f6f9] min-h-screen font-['Nunito_Sans']">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <Link href="/" className="text-[#081C2E] hover:underline font-semibold">← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/docs/frm" className="text-gray-600 hover:text-[#C49A28] transition-colors cursor-pointer">FRM</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Corrective Action Request (CAR) Form</span>
        </nav>

        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg overflow-hidden border border-[#dde3ec]">
          {/* Header Section */}
          <div className="bg-[#081C2E] text-white p-4 text-center">
            <h1 className="text-xl font-bold uppercase tracking-wider">Corrective Action Request (CAR) Form</h1>
          </div>

          {/* Document Control Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border-b border-[#dde3ec]">
              <thead>
                <tr className="bg-[#081C2E] text-white text-sm">
                  <th className="border border-[#dde3ec] p-2 text-left">Document</th>
                  <th className="border border-[#dde3ec] p-2 text-left">Revision</th>
                  <th className="border border-[#dde3ec] p-2 text-left">Date</th>
                  <th className="border border-[#dde3ec] p-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-sm">
                  <td className="border border-[#dde3ec] p-2">TE-IMS-FRM-SYS-003</td>
                  <td className="border border-[#dde3ec] p-2">Rev01</td>
                  <td className="border border-[#dde3ec] p-2">09 Apr 2026</td>
                  <td className="border border-[#dde3ec] p-2 text-green-600 font-semibold">Approved for Implementation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-6 space-y-8">
            {/* Section 1: CAR Details */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 mb-4 font-bold uppercase text-sm tracking-wide">
                1. Corrective Action Request Details
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm font-bold text-[#081C2E] mb-1">CAR No. *</label>
                  <input
                    type="text"
                    name="carNo"
                    required
                    value={formData.carNo}
                    onChange={handleInputChange}
                    className="border border-[#dde3ec] p-2 rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-bold text-[#081C2E] mb-1">Date Issued *</label>
                  <input
                    type="date"
                    name="dateIssued"
                    required
                    value={formData.dateIssued}
                    onChange={handleInputChange}
                    className="border border-[#dde3ec] p-2 rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-bold text-[#081C2E] mb-1">Originator *</label>
                  <input
                    type="text"
                    name="originator"
                    required
                    value={formData.originator}
                    onChange={handleInputChange}
                    className="border border-[#dde3ec] p-2 rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-bold text-[#081C2E] mb-1">Department *</label>
                  <input
                    type="text"
                    name="department"
                    required
                    value={formData.department}
                    onChange={handleInputChange}
                    className="border border-[#dde3ec] p-2 rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                  />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-bold text-[#081C2E] mb-2 block">Source *</label>
                  <div className="grid grid-cols-2 gap-2">
                    {["Audit Finding", "Incident", "Inspection", "Customer Complaint", "Management Review", "Other"].map((src) => (
                      <label key={src} className="flex items-center space-x-2 text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          name="source"
                          value={src}
                          checked={formData.source === src}
                          onChange={handleInputChange}
                          className="w-4 h-4 accent-[#C49A28]"
                        />
                        <span>{src}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-bold text-[#081C2E] mb-2 block">Priority *</label>
                  <div className="grid grid-cols-2 gap-2">
                    {["Critical", "Major", "Minor", "Observation"].map((prio) => (
                      <label key={prio} className="flex items-center space-x-2 text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          name="priority"
                          value={prio}
                          checked={formData.priority === prio}
                          onChange={handleInputChange}
                          className="w-4 h-4 accent-[#C49A28]"
                        />
                        <span>{prio}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-col">
                <label className="text-sm font-bold text-[#081C2E] mb-1">ISO Clause Reference</label>
                <input
                  type="text"
                  name="isoClause"
                  value={formData.isoClause}
                  onChange={handleInputChange}
                  className="border border-[#dde3ec] p-2 rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                />
              </div>
            </section>

            {/* Section 2: Description */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 mb-4 font-bold uppercase text-sm tracking-wide">
                2. Description of Nonconformance / Finding
              </div>
              <textarea
                name="description"
                rows={4}
                required
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Provide a detailed description of the nonconformance or finding..."
                className="w-full border border-[#dde3ec] p-3 rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
              ></textarea>
            </section>

            {/* Section 3: Root Cause Analysis */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 mb-4 font-bold uppercase text-sm tracking-wide">
                3. Root Cause Analysis
              </div>
              <textarea
                name="rootCause"
                rows={3}
                required
                value={formData.rootCause}
                onChange={handleInputChange}
                placeholder="Explain the underlying cause(s) of the issue..."
                className="w-full border border-[#dde3ec] p-3 rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
              ></textarea>
            </section>

            {/* Section 4: Action Plan */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 mb-4 font-bold uppercase text-sm tracking-wide flex justify-between items-center">
                <span>4. Corrective & Preventive Actions</span>
                <button
                  type="button"
                  onClick={addActionRow}
                  className="bg-[#C49A28] text-white px-3 py-1 text-xs rounded hover:bg-[#a38021]"
                >
                  + Add Row
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[#dde3ec]">
                  <thead>
                    <tr className="bg-[#081C2E] text-white text-xs uppercase">
                      <th className="border border-[#dde3ec] p-2 w-10">No.</th>
                      <th className="border border-[#dde3ec] p-2 min-w-[200px]">Action Required</th>
                      <th className="border border-[#dde3ec] p-2">Responsible</th>
                      <th className="border border-[#dde3ec] p-2">Target Date</th>
                      <th className="border border-[#dde3ec] p-2">Completion</th>
                      <th className="border border-[#dde3ec] p-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {actions.map((row, index) => (
                      <tr key={row.id}>
                        <td className="border border-[#dde3ec] p-2 text-center text-sm">{index + 1}</td>
                        <td className="border border-[#dde3ec] p-1">
                          <input
                            type="text"
                            value={row.action}
                            onChange={(e) => handleActionChange(row.id, "action", e.target.value)}
                            className="w-full p-1 text-sm outline-none"
                          />
                        </td>
                        <td className="border border-[#dde3ec] p-1">
                          <input
                            type="text"
                            value={row.responsible}
                            onChange={(e) => handleActionChange(row.id, "responsible", e.target.value)}
                            className="w-full p-1 text-sm outline-none"
                          />
                        </td>
                        <td className="border border-[#dde3ec] p-1">
                          <input
                            type="date"
                            value={row.targetDate}
                            onChange={(e) => handleActionChange(row.id, "targetDate", e.target.value)}
                            className="w-full p-1 text-sm outline-none"
                          />
                        </td>
                        <td className="border border-[#dde3ec] p-1">
                          <input
                            type="date"
                            value={row.completion}
                            onChange={(e) => handleActionChange(row.id, "completion", e.target.value)}
                            className="w-full p-1 text-sm outline-none"
                          />
                        </td>
                        <td className="border border-[#dde3ec] p-1">
                          <select
                            value={row.status}
                            onChange={(e) => handleActionChange(row.id, "status", e.target.value)}
                            className="w-full p-1 text-sm outline-none"
                          >
                            <option value="">Select</option>
                            <option value="Open">Open</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                            <option value="Overdue">Overdue</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: Verification */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 mb-4 font-bold uppercase text-sm tracking-wide">
                5. Verification of Effectiveness
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col">
                  <label className="text-sm font-bold text-[#081C2E] mb-1">Verification Date</label>
                  <input
                    type="date"
                    name="verificationDate"
                    value={formData.verificationDate}
                    onChange={handleInputChange}
                    className="border border-[#dde3ec] p-2 rounded outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-bold text-[#081C2E] mb-1">Verified By</label>
                  <input
                    type="text"
                    name="verifiedBy"
                    value={formData.verifiedBy}
                    onChange={handleInputChange}
                    className="border border-[#dde3ec] p-2 rounded outline-none"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="text-sm font-bold text-[#081C2E] mb-2 block">Actions Effective?</label>
                <div className="flex flex-wrap gap-4">
                  {[
                    { label: "Yes – CAR Closed", val: "Yes – CAR Closed" },
                    { label: "No – Further Action Required", val: "No – Further Action Required" },
                    { label: "Partial", val: "Partial" }
                  ].map((opt) => (
                    <label key={opt.val} className="flex items-center space-x-2 text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        name="effectiveness"
                        value={opt.val}
                        checked={formData.effectiveness === opt.val}
                        onChange={handleInputChange}
                        className="w-4 h-4 accent-[#C49A28]"
                      />
                      <span>{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <textarea
                name="comments"
                rows={2}
                value={formData.comments}
                onChange={handleInputChange}
                placeholder="Verification comments..."
                className="w-full border border-[#dde3ec] p-3 rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
              ></textarea>
            </section>

            {/* Section 6: Sign-off */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 mb-4 font-bold uppercase text-sm tracking-wide">
                6. Sign-off
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[#dde3ec]">
                  <thead>
                    <tr className="bg-[#081C2E] text-white text-xs uppercase">
                      <th className="border border-[#dde3ec] p-2 text-left">Role</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Name</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Signature (Type Name)</th>
                      <th className="border border-[#dde3ec] p-2 text-left w-40">Date</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="border border-[#dde3ec] p-2 font-semibold">Originator / Raised By</td>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="text" name="signOffOriginatorName" value={formData.signOffOriginatorName} onChange={handleInputChange} className="w-full p-1 outline-none" />
                      </td>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="text" name="signOffOriginatorSig" value={formData.signOffOriginatorSig} onChange={handleInputChange} placeholder="Full name" className="w-full p-1 outline-none italic" />
                      </td>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="date" name="signOffOriginatorDate" value={formData.signOffOriginatorDate} onChange={handleInputChange} className="w-full p-1 outline-none" />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#dde3ec] p-2 font-semibold">Responsible Manager</td>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="text" name="signOffManagerName" value={formData.signOffManagerName} onChange={handleInputChange} className="w-full p-1 outline-none" />
                      </td>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="text" name="signOffManagerSig" value={formData.signOffManagerSig} onChange={handleInputChange} placeholder="Full name" className="w-full p-1 outline-none italic" />
                      </td>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="date" name="signOffManagerDate" value={formData.signOffManagerDate} onChange={handleInputChange} className="w-full p-1 outline-none" />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#dde3ec] p-2 font-semibold">QA / IMS Manager</td>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="text" name="signOffQaName" value={formData.signOffQaName} onChange={handleInputChange} className="w-full p-1 outline-none" />
                      </td>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="text" name="signOffQaSig" value={formData.signOffQaSig} onChange={handleInputChange} placeholder="Full name" className="w-full p-1 outline-none italic" />
                      </td>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="date" name="signOffQaDate" value={formData.signOffQaDate} onChange={handleInputChange} className="w-full p-1 outline-none" />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#dde3ec] p-2 font-semibold">Verified & Closed By</td>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="text" name="signOffVerifiedName" value={formData.signOffVerifiedName} onChange={handleInputChange} className="w-full p-1 outline-none" />
                      </td>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="text" name="signOffVerifiedSig" value={formData.signOffVerifiedSig} onChange={handleInputChange} placeholder="Full name" className="w-full p-1 outline-none italic" />
                      </td>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="date" name="signOffVerifiedDate" value={formData.signOffVerifiedDate} onChange={handleInputChange} className="w-full p-1 outline-none" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end pt-6 border-t border-[#dde3ec]">
              <button
                type="submit"
                disabled={loading}
                className={`bg-[#081C2E] text-white px-8 py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-[#12304d] transition-all flex items-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : "Submit CAR Form"}
              </button>
            </div>
          </div>
        </form>

        {/* Revision History */}
        <div className="mt-8 bg-white shadow rounded-lg overflow-hidden border border-[#dde3ec]">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#081C2E] text-white text-xs uppercase">
                <th className="border border-[#dde3ec] p-2 text-left">Rev</th>
                <th className="border border-[#dde3ec] p-2 text-left">Date</th>
                <th className="border border-[#dde3ec] p-2 text-left">Description of Changes</th>
                <th className="border border-[#dde3ec] p-2 text-left">Author</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              <tr>
                <td className="border border-[#dde3ec] p-2">Rev00</td>
                <td className="border border-[#dde3ec] p-2">—</td>
                <td className="border border-[#dde3ec] p-2">Initial issue</td>
                <td className="border border-[#dde3ec] p-2">—</td>
              </tr>
              <tr>
                <td className="border border-[#dde3ec] p-2">Rev01</td>
                <td className="border border-[#dde3ec] p-2">09 Apr 2026</td>
                <td className="border border-[#dde3ec] p-2">Added CAR source/priority checkboxes, ISO clause reference, root cause analysis section, 6-row action plan with status, verification of effectiveness, 4-role sign-off. Reformatted to TE IMS standard.</td>
                <td className="border border-[#dde3ec] p-2">IMS Team</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
