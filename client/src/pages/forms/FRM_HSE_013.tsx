import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_013() {
  const [formData, setFormData] = useState({
    employeeName: "",
    employeeId: "",
    positionRole: "",
    siteDepartment: "",
    nationality: "",
    kitType: "",
    issuedByName: "",
    issuedByPosition: "",
    dateOfIssue: "",
    kitNumberRef: "",
    reason: "",
    ppeItems: {
      hardHat: false,
      safetyGlasses: false,
      cutResistantGloves: false,
      chemicalResistantGloves: false,
      flameResistantOveralls: false,
      highVisibilityVest: false,
      steelToeSafetyBoots: false,
      earProtection: false,
      dustMaskRespirator: false,
      fullBodyHarness: false,
      hydrationFlask: false,
    },
    otherPpe: "",
    otherPpeChecked: false,
    employeeSignature: "",
    employeePrintName: "",
    employeeSignDate: "",
    issuedBySignName: "",
    issuedBySignPosition: "",
    issuedBySignature: "",
    issuedBySignDate: "",
    allVerified: "",
    dateVerified: "",
    verifierNamePosition: "",
    verifierSignature: "",
    commentsNonConformities: "",
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      if (name.startsWith("ppe_")) {
        const ppeKey = name.replace("ppe_", "");
        setFormData((prev) => ({
          ...prev,
          ppeItems: { ...prev.ppeItems, [ppeKey]: checked },
        }));
      } else if (name === "otherPpeChecked") {
        setFormData((prev) => ({ ...prev, otherPpeChecked: checked }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const headers = [
      "Employee Name",
      "Employee ID / Badge No.",
      "Position / Role",
      "Site / Department",
      "Nationality",
      "Kit Type",
      "Issued By (Name)",
      "Issued By Position",
      "Date of Issue",
      "Kit Number / Reference",
      "Reason",
      "Hard Hat",
      "Safety Glasses",
      "Cut-Resistant Gloves",
      "Chemical-Resistant Gloves",
      "Flame-Resistant Overalls",
      "High-Visibility Vest",
      "Steel-Toe Safety Boots",
      "Ear Protection",
      "Dust Mask / Respirator",
      "Full-Body Harness",
      "Hydration Flask",
      "Other PPE Item",
      "Employee Signature",
      "Employee Printed Name",
      "Employee Sign Date",
      "Issuer Name",
      "Issuer Position",
      "Issuer Signature",
      "Issuer Sign Date",
      "All Items Verified?",
      "Date Verified",
      "Verifier Name & Position",
      "Verifier Signature",
      "Comments / Non-conformities",
    ];

    const values = [
      formData.employeeName,
      formData.employeeId,
      formData.positionRole,
      formData.siteDepartment,
      formData.nationality,
      formData.kitType,
      formData.issuedByName,
      formData.issuedByPosition,
      formData.dateOfIssue,
      formData.kitNumberRef,
      formData.reason,
      formData.ppeItems.hardHat ? "Yes" : "No",
      formData.ppeItems.safetyGlasses ? "Yes" : "No",
      formData.ppeItems.cutResistantGloves ? "Yes" : "No",
      formData.ppeItems.chemicalResistantGloves ? "Yes" : "No",
      formData.ppeItems.flameResistantOveralls ? "Yes" : "No",
      formData.ppeItems.highVisibilityVest ? "Yes" : "No",
      formData.ppeItems.steelToeSafetyBoots ? "Yes" : "No",
      formData.ppeItems.earProtection ? "Yes" : "No",
      formData.ppeItems.dustMaskRespirator ? "Yes" : "No",
      formData.ppeItems.fullBodyHarness ? "Yes" : "No",
      formData.ppeItems.hydrationFlask ? "Yes" : "No",
      formData.otherPpeChecked ? formData.otherPpe : "N/A",
      formData.employeeSignature,
      formData.employeePrintName,
      formData.employeeSignDate,
      formData.issuedBySignName,
      formData.issuedBySignPosition,
      formData.issuedBySignature,
      formData.issuedBySignDate,
      formData.allVerified,
      formData.dateVerified,
      formData.verifierNamePosition,
      formData.verifierSignature,
      formData.commentsNonConformities,
    ];

    mutation.mutate({
      formCode: "TE-IMS-FRM-HSE-013",
      headers,
      values,
    });
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 text-center">
          <h2 className="text-2xl font-bold text-[#081C2E] mb-4">Form Submitted Successfully</h2>
          <p className="mb-6">The PPE Kit Issuance and Acceptance Form has been recorded.</p>
          <a
            href={sheetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C49A28] text-white px-6 py-2 rounded hover:bg-[#a38021] transition-colors"
          >
            View register
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
      <div className="max-w-5xl mx-auto p-4 md:p-8 font-['Nunito_Sans'] text-[#081C2E]">
        <nav className="mb-6">
          <Link href="/" className="text-[#081C2E] hover:underline font-semibold">← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-500">FRM</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-500">PPE Kit Issuance and Acceptance Form</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-3xl font-bold text-[#081C2E] mb-2">PPE KIT ISSUANCE AND ACCEPTANCE FORM</h1>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-[#dde3ec]">
              <thead>
                <tr className="bg-[#081C2E] text-white">
                  <th className="border border-[#dde3ec] p-2 text-left">Document Code</th>
                  <th className="border border-[#dde3ec] p-2 text-left">Revision</th>
                  <th className="border border-[#dde3ec] p-2 text-left">Date</th>
                  <th className="border border-[#dde3ec] p-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#dde3ec] p-2">TE-IMS-FRM-HSE-013</td>
                  <td className="border border-[#dde3ec] p-2">01</td>
                  <td className="border border-[#dde3ec] p-2">10.04.2026</td>
                  <td className="border border-[#dde3ec] p-2">Approved for Implementation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </header>

        <section className="mb-8 bg-[#f4f6f9] p-4 rounded-lg border border-[#dde3ec]">
          <h2 className="font-bold mb-2">Purpose</h2>
          <p className="text-sm">
            This form records the issuance of a complete PPE Kit to an employee, driver, or contractor, and captures their formal acceptance and declaration of responsibility. It supports compliance with TE-IMS-PROC-HSE-016 (Personal Protective Equipment Procedure), ISO 45001:2018 (Clause 8.1.2), and KSA MHRSD occupational safety requirements.
          </p>
        </section>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section 1: Employee Information */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">1. Employee Information</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-[#dde3ec] p-4 rounded">
              <div className="space-y-1">
                <label className="block text-sm font-semibold">Employee Name *</label>
                <input
                  type="text"
                  name="employeeName"
                  required
                  value={formData.employeeName}
                  onChange={handleChange}
                  className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-semibold">Employee ID / Badge No. *</label>
                <input
                  type="text"
                  name="employeeId"
                  required
                  value={formData.employeeId}
                  onChange={handleChange}
                  className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-semibold">Position / Role *</label>
                <input
                  type="text"
                  name="positionRole"
                  required
                  value={formData.positionRole}
                  onChange={handleChange}
                  className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-semibold">Site / Department *</label>
                <input
                  type="text"
                  name="siteDepartment"
                  required
                  value={formData.siteDepartment}
                  onChange={handleChange}
                  className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-semibold">Nationality *</label>
                <input
                  type="text"
                  name="nationality"
                  required
                  value={formData.nationality}
                  onChange={handleChange}
                  className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-semibold">Kit Type *</label>
                <input
                  type="text"
                  name="kitType"
                  placeholder="e.g., Driller — Day Shift, Mechanic, etc."
                  required
                  value={formData.kitType}
                  onChange={handleChange}
                  className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]"
                />
              </div>
            </div>
          </section>

          {/* Section 2: Issuance Details */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">2. Issuance Details</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-[#dde3ec] p-4 rounded">
              <div className="space-y-1">
                <label className="block text-sm font-semibold">Issued By (Name) *</label>
                <input
                  type="text"
                  name="issuedByName"
                  required
                  value={formData.issuedByName}
                  onChange={handleChange}
                  className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-semibold">Position *</label>
                <input
                  type="text"
                  name="issuedByPosition"
                  required
                  value={formData.issuedByPosition}
                  onChange={handleChange}
                  className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-semibold">Date of Issue *</label>
                <input
                  type="date"
                  name="dateOfIssue"
                  required
                  value={formData.dateOfIssue}
                  onChange={handleChange}
                  className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-semibold">Kit Number / Reference (if applicable)</label>
                <input
                  type="text"
                  name="kitNumberRef"
                  value={formData.kitNumberRef}
                  onChange={handleChange}
                  className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]"
                />
              </div>
              <div className="space-y-1 md:col-span-2">
                <label className="block text-sm font-semibold">Reason for Issuance *</label>
                <select
                  name="reason"
                  required
                  value={formData.reason}
                  onChange={handleChange}
                  className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]"
                >
                  <option value="">Select Reason</option>
                  <option value="New hire">New hire</option>
                  <option value="Replacement">Replacement</option>
                  <option value="Shift change">Shift change</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </section>

          {/* Section 3: Kit Contents */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">3. Kit Contents — Verify Each Item Present and in Good Condition</div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-[#dde3ec]">
                <thead>
                  <tr className="bg-[#081C2E] text-white">
                    <th className="border border-[#dde3ec] p-2 text-center w-12">Tick</th>
                    <th className="border border-[#dde3ec] p-2 text-left">PPE Item</th>
                    <th className="border border-[#dde3ec] p-2 text-left">Standard / Reference</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { key: "hardHat", label: "Hard Hat", std: "ANSI Z89.1 / EN 397" },
                    { key: "safetyGlasses", label: "Safety Glasses — Clear and Dark", std: "ANSI Z87.1 / EN 166" },
                    { key: "cutResistantGloves", label: "Cut-Resistant Gloves", std: "EN 388 Level 5" },
                    { key: "chemicalResistantGloves", label: "Chemical-Resistant Gloves", std: "EN 374" },
                    { key: "flameResistantOveralls", label: "Flame-Resistant Overalls", std: "EN ISO 11612" },
                    { key: "highVisibilityVest", label: "High-Visibility Vest", std: "EN ISO 20471" },
                    { key: "steelToeSafetyBoots", label: "Steel-Toe Safety Boots", std: "EN ISO 20345" },
                    { key: "earProtection", label: "Ear Protection (plugs or muffs)", std: "NRR 25+ dB / EN 352" },
                    { key: "dustMaskRespirator", label: "Dust Mask / Respirator", std: "FFP2 / FFP3 / EN 149" },
                    { key: "fullBodyHarness", label: "Full-Body Harness and Lanyard (if required)", std: "EN 361 / EN 355" },
                    { key: "hydrationFlask", label: "Hydration Flask / Insulated Water Bottle", std: "KSA heat stress controls" },
                  ].map((item) => (
                    <tr key={item.key}>
                      <td className="border border-[#dde3ec] p-2 text-center">
                        <input
                          type="checkbox"
                          name={`ppe_${item.key}`}
                          checked={(formData.ppeItems as any)[item.key]}
                          onChange={handleChange}
                          className="w-4 h-4"
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2">{item.label}</td>
                      <td className="border border-[#dde3ec] p-2 text-sm text-gray-600">{item.std}</td>
                    </tr>
                  ))}
                  <tr>
                    <td className="border border-[#dde3ec] p-2 text-center">
                      <input
                        type="checkbox"
                        name="otherPpeChecked"
                        checked={formData.otherPpeChecked}
                        onChange={handleChange}
                        className="w-4 h-4"
                      />
                    </td>
                    <td className="border border-[#dde3ec] p-2" colSpan={2}>
                      <div className="flex items-center space-x-2">
                        <span>Other (specify):</span>
                        <input
                          type="text"
                          name="otherPpe"
                          value={formData.otherPpe}
                          onChange={handleChange}
                          className="flex-1 border-b border-[#dde3ec] focus:outline-none focus:border-[#C49A28]"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: Employee Acceptance and Declaration */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">4. Employee Acceptance and Declaration</div>
            <div className="border border-[#dde3ec] p-4 rounded space-y-4">
              <p className="font-semibold italic">
                I confirm that I have received the above PPE Kit in good working condition. I understand and accept full responsibility for the following:
              </p>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Performing daily visual inspection and cleaning of the kit before use.</li>
                <li>Storing the kit properly in a clean, dry, and secure location.</li>
                <li>Reporting any damage, loss, theft, or expiry immediately to my Supervisor or HSE Officer.</li>
                <li>Never using damaged, expired, or defective PPE.</li>
                <li>Using the PPE correctly in accordance with my training and the task hazard controls.</li>
                <li>Understanding that negligence in PPE care may result in cost recovery or disciplinary action under Saudi Labor Law.</li>
              </ul>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-[#dde3ec]">
                <div className="space-y-1">
                  <label className="block text-sm font-semibold">Employee Signature *</label>
                  <input
                    type="text"
                    name="employeeSignature"
                    placeholder="Full name (acts as signature)"
                    required
                    value={formData.employeeSignature}
                    onChange={handleChange}
                    className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-semibold">Printed Name *</label>
                  <input
                    type="text"
                    name="employeePrintName"
                    required
                    value={formData.employeePrintName}
                    onChange={handleChange}
                    className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-semibold">Date *</label>
                  <input
                    type="date"
                    name="employeeSignDate"
                    required
                    value={formData.employeeSignDate}
                    onChange={handleChange}
                    className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Issued By */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">5. Issued By</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 border border-[#dde3ec] p-4 rounded">
              <div className="space-y-1">
                <label className="block text-sm font-semibold">Name *</label>
                <input
                  type="text"
                  name="issuedBySignName"
                  required
                  value={formData.issuedBySignName}
                  onChange={handleChange}
                  className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-semibold">Position *</label>
                <input
                  type="text"
                  name="issuedBySignPosition"
                  required
                  value={formData.issuedBySignPosition}
                  onChange={handleChange}
                  className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-semibold">Signature *</label>
                <input
                  type="text"
                  name="issuedBySignature"
                  placeholder="Full name (acts as signature)"
                  required
                  value={formData.issuedBySignature}
                  onChange={handleChange}
                  className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-semibold">Date *</label>
                <input
                  type="date"
                  name="issuedBySignDate"
                  required
                  value={formData.issuedBySignDate}
                  onChange={handleChange}
                  className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]"
                />
              </div>
            </div>
          </section>

          {/* Section 6: HSE / Supervisor Verification */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">6. HSE / Supervisor Verification (Initial Check)</div>
            <div className="border border-[#dde3ec] p-4 rounded space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-sm font-semibold">All items verified present and serviceable? *</label>
                  <select
                    name="allVerified"
                    required
                    value={formData.allVerified}
                    onChange={handleChange}
                    className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]"
                  >
                    <option value="">Select Option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-semibold">Date verified *</label>
                  <input
                    type="date"
                    name="dateVerified"
                    required
                    value={formData.dateVerified}
                    onChange={handleChange}
                    className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-semibold">Verifier name and position *</label>
                  <input
                    type="text"
                    name="verifierNamePosition"
                    required
                    value={formData.verifierNamePosition}
                    onChange={handleChange}
                    className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-semibold">Verifier signature *</label>
                  <input
                    type="text"
                    name="verifierSignature"
                    placeholder="Full name (acts as signature)"
                    required
                    value={formData.verifierSignature}
                    onChange={handleChange}
                    className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-semibold">Comments / Non-conformities</label>
                <textarea
                  name="commentsNonConformities"
                  rows={3}
                  value={formData.commentsNonConformities}
                  onChange={handleChange}
                  className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]"
                />
              </div>
            </div>
          </section>

          {error && <div className="text-red-600 font-bold">{error}</div>}

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={mutation.isLoading}
              className="bg-[#081C2E] text-white px-10 py-3 rounded font-bold hover:bg-[#122b42] transition-colors disabled:opacity-50"
            >
              {mutation.isLoading ? "Submitting..." : "SUBMIT FORM"}
            </button>
          </div>
        </form>

        <footer className="mt-12 pt-8 border-t border-[#dde3ec] text-xs text-gray-500">
          <p>Retain completed form in the employee's HSE file for the life of employment + 3 years.</p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse border border-[#dde3ec]">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-[#dde3ec] p-1 text-left">Rev</th>
                  <th className="border border-[#dde3ec] p-1 text-left">Date</th>
                  <th className="border border-[#dde3ec] p-1 text-left">Description of Changes</th>
                  <th className="border border-[#dde3ec] p-1 text-left">Author</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#dde3ec] p-1 text-center">00</td>
                  <td className="border border-[#dde3ec] p-1">01.03.2026</td>
                  <td className="border border-[#dde3ec] p-1">Initial release — Kit-based PPE issuance form</td>
                  <td className="border border-[#dde3ec] p-1">JM ALICE / IMS Project Lead</td>
                </tr>
                <tr>
                  <td className="border border-[#dde3ec] p-1 text-center">01</td>
                  <td className="border border-[#dde3ec] p-1">10.04.2026</td>
                  <td className="border border-[#dde3ec] p-1">Rebuilt to TE design standard; added nationality, reason, hydration flask, strengthened declaration.</td>
                  <td className="border border-[#dde3ec] p-1">HSE Manager</td>
                </tr>
              </tbody>
            </table>
          </div>
        </footer>
      </div>
    </Layout>
  );
}
