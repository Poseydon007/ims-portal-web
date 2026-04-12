import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_015() {
  const [submitted, setSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    employeeName: "",
    employeeId: "",
    position: "",
    siteDepartment: "",
    requestDate: "",
    kitRefNo: "",
    replacementType: "",
    reasons: [] as string[],
    reasonDetails: {
      damageNormal: "",
      accidental: "",
      lossTheft: "",
      expiry: "",
      defect: "",
      wrongSize: "",
      contamination: "",
      other: "",
    },
    specificItems: [
      { id: 1, description: "", qty: "" },
      { id: 2, description: "", qty: "" },
      { id: 3, description: "", qty: "" },
      { id: 4, description: "", qty: "" },
      { id: 5, description: "", qty: "" },
    ],
    employeeSignature: "",
    employeePrintName: "",
    employeeSignDate: "",
    requestApproved: "",
    costRecovery: "",
    costRecoveryReason: "",
    verifierName: "",
    verifierSignature: "",
    verifierDate: "",
    issuedBy: "",
    issuerPosition: "",
    issueDate: "",
    itemSerialNo: "",
    issuerSignature: "",
    followUpCompleted: "",
    followUpDate: "",
    closedBy: "",
    followUpComments: "",
  });

  const mutation = trpc.formSubmissions.submit.useMutation({
    onSuccess: (data) => {
      setSubmitted(true);
      setSheetUrl(data.sheetUrl);
    },
    onError: (err) => {
      setError(err.message || "An error occurred during submission.");
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, category: string) => {
    const { value, checked } = e.target;
    if (category === "reasons") {
      setFormData((prev) => ({
        ...prev,
        reasons: checked 
          ? [...prev.reasons, value] 
          : prev.reasons.filter((r) => r !== value),
      }));
    }
  };

  const handleReasonDetailChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setFormData((prev) => ({
      ...prev,
      reasonDetails: { ...prev.reasonDetails, [key]: e.target.value },
    }));
  };

  const handleItemChange = (id: number, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      specificItems: prev.specificItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    }));
  };

  const addRow = () => {
    setFormData((prev) => ({
      ...prev,
      specificItems: [
        ...prev.specificItems,
        { id: prev.specificItems.length + 1, description: "", qty: "" },
      ],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const headers = [
      "Form Code", "Employee Name", "Employee ID", "Position", "Site/Department", "Request Date", "Kit Ref No",
      "Replacement Type", "Reasons", 
      "Reason Details (Normal)", "Reason Details (Accidental)", "Reason Details (Loss/Theft)", 
      "Reason Details (Expiry)", "Reason Details (Defect)", "Reason Details (Wrong Size)", 
      "Reason Details (Contamination)", "Reason Details (Other)",
      "Specific Items", "Employee Signature", "Employee Print Name", "Employee Sign Date",
      "Request Approved", "Cost Recovery", "Cost Recovery Reason", "Verifier Name", "Verifier Signature", "Verifier Date",
      "Issued By", "Issuer Position", "Issue Date", "Item Serial No", "Issuer Signature",
      "Follow-up Completed", "Follow-up Date", "Closed By", "Follow-up Comments"
    ];

    const values = [
      "TE-IMS-FRM-HSE-015",
      formData.employeeName,
      formData.employeeId,
      formData.position,
      formData.siteDepartment,
      formData.requestDate,
      formData.kitRefNo,
      formData.replacementType,
      formData.reasons.join(", "),
      formData.reasonDetails.damageNormal,
      formData.reasonDetails.accidental,
      formData.reasonDetails.lossTheft,
      formData.reasonDetails.expiry,
      formData.reasonDetails.defect,
      formData.reasonDetails.wrongSize,
      formData.reasonDetails.contamination,
      formData.reasonDetails.other,
      formData.specificItems.map(i => `${i.description} (${i.qty})`).filter(s => s !== " ()").join("; "),
      formData.employeeSignature,
      formData.employeePrintName,
      formData.employeeSignDate,
      formData.requestApproved,
      formData.costRecovery,
      formData.costRecoveryReason,
      formData.verifierName,
      formData.verifierSignature,
      formData.verifierDate,
      formData.issuedBy,
      formData.issuerPosition,
      formData.issueDate,
      formData.itemSerialNo,
      formData.issuerSignature,
      formData.followUpCompleted,
      formData.followUpDate,
      formData.closedBy,
      formData.followUpComments
    ];

    mutation.mutate({
      formCode: "TE-IMS-FRM-HSE-015",
      headers,
      values,
    });
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 text-center">
          <h1 className="text-2xl font-bold text-[#081C2E] mb-4">Form Submitted Successfully</h1>
          <p className="text-gray-600 mb-6">Your PPE replacement request has been recorded.</p>
          <a 
            href={sheetUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#C49A28] text-white px-6 py-2 rounded hover:bg-[#a38021] transition-colors"
          >
            View Register
          </a>
          <div className="mt-8">
            <Link href="/" className="text-[#081C2E] hover:underline">← Back to Portal Home</Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 bg-[#f4f6f9]">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <Link href="/" className="text-[#081C2E] hover:underline font-medium">← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/docs/frm" className="text-gray-600 hover:text-[#C49A28] transition-colors cursor-pointer">FRM</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 font-semibold">PPE Replacement Request Form</span>
        </nav>

        {/* Document Control Table */}
        <div className="bg-white overflow-hidden shadow-sm border border-[#dde3ec] mb-8">
          <table className="w-full text-sm text-left">
            <thead className="bg-[#081C2E] text-white">
              <tr>
                <th className="px-4 py-2 border-r border-white/20">Document Code</th>
                <th className="px-4 py-2 border-r border-white/20">Revision</th>
                <th className="px-4 py-2 border-r border-white/20">Date</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="px-4 py-2 border-r border-[#dde3ec]">TE-IMS-FRM-HSE-015</td>
                <td className="px-4 py-2 border-r border-[#dde3ec]">01</td>
                <td className="px-4 py-2 border-r border-[#dde3ec]">10.04.2026</td>
                <td className="px-4 py-2">Approved for Implementation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <h1 className="text-3xl font-bold text-[#081C2E] text-center mb-8 uppercase tracking-wider">PPE Replacement Request Form</h1>

          {/* Section 1: Employee Information */}
          <section className="bg-white shadow-sm border border-[#dde3ec]">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wide">
              1. Employee Information
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#081C2E] mb-1">Employee Name *</label>
                <input 
                  type="text" 
                  name="employeeName" 
                  required 
                  value={formData.employeeName}
                  onChange={handleInputChange}
                  className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#081C2E] mb-1">Employee ID / Badge No. *</label>
                <input 
                  type="text" 
                  name="employeeId" 
                  required 
                  value={formData.employeeId}
                  onChange={handleInputChange}
                  className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#081C2E] mb-1">Position / Role *</label>
                <input 
                  type="text" 
                  name="position" 
                  required 
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#081C2E] mb-1">Site / Department *</label>
                <input 
                  type="text" 
                  name="siteDepartment" 
                  required 
                  value={formData.siteDepartment}
                  onChange={handleInputChange}
                  className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#081C2E] mb-1">Request Date *</label>
                <input 
                  type="date" 
                  name="requestDate" 
                  required 
                  value={formData.requestDate}
                  onChange={handleInputChange}
                  className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#081C2E] mb-1">Kit Reference Number (if applicable)</label>
                <input 
                  type="text" 
                  name="kitRefNo" 
                  value={formData.kitRefNo}
                  onChange={handleInputChange}
                  className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" 
                />
              </div>
            </div>
          </section>

          {/* Section 2: Type of Replacement Requested */}
          <section className="bg-white shadow-sm border border-[#dde3ec]">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wide">
              2. Type of Replacement Requested (tick one)
            </div>
            <div className="p-4 space-y-3">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input 
                  type="radio" 
                  name="replacementType" 
                  value="Full PPE Kit Replacement" 
                  required
                  onChange={handleInputChange}
                  className="mt-1 accent-[#C49A28]" 
                />
                <span className="text-sm text-gray-700 group-hover:text-black">
                  <strong>Full PPE Kit Replacement</strong> — all items replaced (e.g., new role, total loss).
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer group">
                <input 
                  type="radio" 
                  name="replacementType" 
                  value="Specific Item(s) Replacement" 
                  onChange={handleInputChange}
                  className="mt-1 accent-[#C49A28]" 
                />
                <span className="text-sm text-gray-700 group-hover:text-black">
                  <strong>Specific Item(s) Replacement</strong> — list items in Section 4.
                </span>
              </label>
            </div>
          </section>

          {/* Section 3: Reason for Replacement */}
          <section className="bg-white shadow-sm border border-[#dde3ec]">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wide">
              3. Reason for Replacement (tick all that apply)
            </div>
            <div className="p-0 overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-[#081C2E]">
                  <tr>
                    <th className="px-4 py-2 border-b border-[#dde3ec] w-12 text-center">Tick</th>
                    <th className="px-4 py-2 border-b border-[#dde3ec] w-1/3">Reason</th>
                    <th className="px-4 py-2 border-b border-[#dde3ec]">Details / Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#dde3ec]">
                  {[
                    { id: "damageNormal", label: "Damage / wear from normal use" },
                    { id: "accidental", label: "Accidental damage (describe incident)" },
                    { id: "lossTheft", label: "Loss / theft (describe circumstances)" },
                    { id: "expiry", label: "Expiry / out of date (list item and expiry date)" },
                    { id: "defect", label: "Defect found on issuance or inspection" },
                    { id: "wrongSize", label: "Wrong size or fit from original issue" },
                    { id: "contamination", label: "Contamination (chemical, biological, blood)" },
                    { id: "other", label: "Other (describe)" },
                  ].map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-2 text-center">
                        <input 
                          type="checkbox" 
                          value={item.label} 
                          onChange={(e) => handleCheckboxChange(e, "reasons")}
                          className="accent-[#C49A28]" 
                        />
                      </td>
                      <td className="px-4 py-2 font-medium">{item.label}</td>
                      <td className="px-4 py-2">
                        <input 
                          type="text" 
                          value={formData.reasonDetails[item.id as keyof typeof formData.reasonDetails]}
                          onChange={(e) => handleReasonDetailChange(e, item.id)}
                          className="w-full border-b border-gray-300 focus:border-[#C49A28] outline-none bg-transparent" 
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: Specific Items Requested */}
          <section className="bg-white shadow-sm border border-[#dde3ec]">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wide">
              4. Specific Items Requested (complete if not full kit)
            </div>
            <div className="p-0 overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-[#081C2E]">
                  <tr>
                    <th className="px-4 py-2 border-b border-[#dde3ec] w-12 text-center">#</th>
                    <th className="px-4 py-2 border-b border-[#dde3ec]">Item Description (include standard, e.g., EN 397, EN ISO 20345)</th>
                    <th className="px-4 py-2 border-b border-[#dde3ec] w-24">Qty</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#dde3ec]">
                  {formData.specificItems.map((item, index) => (
                    <tr key={item.id}>
                      <td className="px-4 py-2 text-center text-gray-500 font-mono">{(index + 1).toString().padStart(2, '0')}</td>
                      <td className="px-4 py-2">
                        <input 
                          type="text" 
                          value={item.description}
                          onChange={(e) => handleItemChange(item.id, "description", e.target.value)}
                          className="w-full border-b border-gray-200 focus:border-[#C49A28] outline-none bg-transparent" 
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input 
                          type="number" 
                          value={item.qty}
                          onChange={(e) => handleItemChange(item.id, "qty", e.target.value)}
                          className="w-full border-b border-gray-200 focus:border-[#C49A28] outline-none bg-transparent" 
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="p-2 bg-gray-50 border-t border-[#dde3ec]">
                <button 
                  type="button" 
                  onClick={addRow}
                  className="text-sm text-[#081C2E] hover:text-[#C49A28] font-semibold flex items-center gap-1"
                >
                  + Add Row
                </button>
              </div>
            </div>
          </section>

          {/* Section 5: Employee Declaration */}
          <section className="bg-white shadow-sm border border-[#dde3ec]">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wide">
              5. Employee Declaration
            </div>
            <div className="p-4 space-y-4">
              <p className="text-sm text-gray-700 italic leading-relaxed">
                I confirm the above information is accurate to the best of my knowledge. I understand that providing false information may result in disciplinary action under Saudi Labor Law and TEMC internal policy. I request replacement PPE as indicated above and agree to return the damaged item (if available) for inspection.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-[#081C2E] uppercase mb-1">Employee Signature *</label>
                  <input 
                    type="text" 
                    name="employeeSignature" 
                    required 
                    placeholder="Full name (acts as signature)"
                    value={formData.employeeSignature}
                    onChange={handleInputChange}
                    className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none text-sm" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#081C2E] uppercase mb-1">Printed Name *</label>
                  <input 
                    type="text" 
                    name="employeePrintName" 
                    required 
                    value={formData.employeePrintName}
                    onChange={handleInputChange}
                    className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none text-sm" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#081C2E] uppercase mb-1">Date *</label>
                  <input 
                    type="date" 
                    name="employeeSignDate" 
                    required 
                    value={formData.employeeSignDate}
                    onChange={handleInputChange}
                    className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none text-sm" 
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Supervisor / HSE Verification */}
          <section className="bg-white shadow-sm border border-[#dde3ec]">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wide">
              6. Supervisor / HSE Verification
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-[#081C2E] mb-2">Request approved?</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="requestApproved" value="Yes" onChange={handleInputChange} className="accent-[#C49A28]" /> Yes
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="requestApproved" value="No" onChange={handleInputChange} className="accent-[#C49A28]" /> No
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#081C2E] mb-2">Cost-recovery applied?</label>
                  <div className="flex gap-4 mb-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="costRecovery" value="Yes" onChange={handleInputChange} className="accent-[#C49A28]" /> Yes
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="costRecovery" value="No" onChange={handleInputChange} className="accent-[#C49A28]" /> No
                    </label>
                  </div>
                  <input 
                    type="text" 
                    name="costRecoveryReason" 
                    placeholder="Reason if applied" 
                    value={formData.costRecoveryReason}
                    onChange={handleInputChange}
                    className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none text-sm" 
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#081C2E] uppercase mb-1">Verifier name and position</label>
                  <input type="text" name="verifierName" value={formData.verifierName} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded outline-none text-sm" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#081C2E] uppercase mb-1">Signature</label>
                    <input type="text" name="verifierSignature" value={formData.verifierSignature} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#081C2E] uppercase mb-1">Date</label>
                    <input type="date" name="verifierDate" value={formData.verifierDate} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded outline-none text-sm" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Issuance of Replacement */}
          <section className="bg-white shadow-sm border border-[#dde3ec]">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wide">
              7. Issuance of Replacement
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#081C2E] uppercase mb-1">Issued by (name)</label>
                <input type="text" name="issuedBy" value={formData.issuedBy} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded outline-none text-sm" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#081C2E] uppercase mb-1">Position</label>
                <input type="text" name="issuerPosition" value={formData.issuerPosition} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded outline-none text-sm" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#081C2E] uppercase mb-1">Date of issue</label>
                <input type="date" name="issueDate" value={formData.issueDate} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded outline-none text-sm" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#081C2E] uppercase mb-1">Kit / item serial no. (if any)</label>
                <input type="text" name="itemSerialNo" value={formData.itemSerialNo} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded outline-none text-sm" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-[#081C2E] uppercase mb-1">Signature</label>
                <input type="text" name="issuerSignature" value={formData.issuerSignature} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded outline-none text-sm" />
              </div>
            </div>
          </section>

          {/* Section 8: HSE / Supervisor Follow-Up */}
          <section className="bg-white shadow-sm border border-[#dde3ec]">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wide">
              8. HSE / Supervisor Follow-Up (if action required)
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#081C2E] mb-2">Follow-up completed?</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="followUpCompleted" value="Yes" onChange={handleInputChange} className="accent-[#C49A28]" /> Yes
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="followUpCompleted" value="No" onChange={handleInputChange} className="accent-[#C49A28]" /> No
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#081C2E] uppercase mb-1">Date of follow-up</label>
                <input type="date" name="followUpDate" value={formData.followUpDate} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded outline-none text-sm" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#081C2E] uppercase mb-1">Closed-out by</label>
                <input type="text" name="closedBy" value={formData.closedBy} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded outline-none text-sm" />
              </div>
              <div className="md:col-span-3">
                <label className="block text-xs font-bold text-[#081C2E] uppercase mb-1">Comments / Root cause learnings</label>
                <textarea 
                  name="followUpComments" 
                  rows={3}
                  value={formData.followUpComments}
                  onChange={handleInputChange}
                  className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none text-sm" 
                ></textarea>
              </div>
            </div>
          </section>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 text-red-700 text-sm">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-end">
            <button 
              type="submit" 
              disabled={mutation.isPending}
              className={`
                bg-[#081C2E] text-white px-10 py-3 rounded font-bold uppercase tracking-widest
                hover:bg-[#C49A28] transition-all duration-300 shadow-lg
                ${mutation.isPending ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              {mutation.isPending ? "Submitting..." : "Submit Request"}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
