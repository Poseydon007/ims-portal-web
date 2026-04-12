import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_014() {
  const [submitted, setSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    employeeName: "",
    employeeId: "",
    positionRole: "",
    siteDepartment: "",
    kitType: "",
    verifierName: "",
    verifierPosition: "",
    dateOfSpotCheck: "",
    timeOfSpotCheck: "",
    verificationType: "",
    locationOfCheck: "",
    check1: false,
    check2: false,
    check3: false,
    check4: false,
    check5: false,
    check6: false,
    check7: false,
    check8: false,
    check1Comment: "",
    check2Comment: "",
    check3Comment: "",
    check4Comment: "",
    check5Comment: "",
    check6Comment: "",
    check7Comment: "",
    check8Comment: "",
    outcomeCompliant: false,
    outcomeActionRequired: false,
    employeeSignature: "",
    employeeSignDateTime: "",
    verifierSignName: "",
    verifierSignPosition: "",
    verifierSignature: "",
    verifierSignDate: "",
    followUpCompleted: "",
    dateOfFollowUp: "",
    verifiedByFollowUp: "",
    verifierSignatureFollowUp: "",
    commentsCloseOut: "",
  });

  const [actions, setActions] = useState([
    { id: 1, description: "", responsible: "" },
  ]);

  const addAction = () => {
    setActions([...actions, { id: actions.length + 1, description: "", responsible: "" }]);
  };

  const removeAction = (id: number) => {
    if (actions.length > 1) {
      setActions(actions.filter(a => a.id !== id));
    }
  };

  const updateAction = (id: number, field: string, value: string) => {
    setActions(actions.map(a => a.id === id ? { ...a, [field]: value } : a));
  };

  const submitMutation = trpc.formSubmissions.submit.useMutation({
    onSuccess: (data) => {
      setSubmitted(true);
      setSheetUrl(data.sheetUrl);
      window.scrollTo(0, 0);
    },
    onError: (err) => {
      setError(err.message || "An error occurred during submission.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const headers = [
      "Employee Name", "Employee ID", "Position/Role", "Site/Department", "Kit Type",
      "Verifier Name", "Verifier Position", "Date of Spot-Check", "Time", "Verification Type", "Location of Check",
      "Check 1: Items Present", "Check 1 Comment",
      "Check 2: Condition", "Check 2 Comment",
      "Check 3: Expiry", "Check 3 Comment",
      "Check 4: Correct Use", "Check 4 Comment",
      "Check 5: Storage", "Check 5 Comment",
      "Check 6: Daily Inspection", "Check 6 Comment",
      "Check 7: Task Hazard Match", "Check 7 Comment",
      "Check 8: No Modification", "Check 8 Comment",
      "Outcome: Compliant", "Outcome: Action Required",
      "Corrective Actions",
      "Employee Signature", "Employee Sign Date/Time",
      "Verifier Sign Name", "Verifier Sign Position", "Verifier Signature", "Verifier Sign Date",
      "Follow-up Completed", "Date of Follow-up", "Verified By (Follow-up)", "Verifier Signature (Follow-up)", "Comments/Close-out"
    ];

    const actionStrings = actions.map(a => `${a.description} (Resp: ${a.responsible})`).join(" | ");

    const values = [
      formData.employeeName, formData.employeeId, formData.positionRole, formData.siteDepartment, formData.kitType,
      formData.verifierName, formData.verifierPosition, formData.dateOfSpotCheck, formData.timeOfSpotCheck, formData.verificationType, formData.locationOfCheck,
      formData.check1 ? "Yes" : "No", formData.check1Comment,
      formData.check2 ? "Yes" : "No", formData.check2Comment,
      formData.check3 ? "Yes" : "No", formData.check3Comment,
      formData.check4 ? "Yes" : "No", formData.check4Comment,
      formData.check5 ? "Yes" : "No", formData.check5Comment,
      formData.check6 ? "Yes" : "No", formData.check6Comment,
      formData.check7 ? "Yes" : "No", formData.check7Comment,
      formData.check8 ? "Yes" : "No", formData.check8Comment,
      formData.outcomeCompliant ? "Yes" : "No", formData.outcomeActionRequired ? "Yes" : "No",
      actionStrings,
      formData.employeeSignature, formData.employeeSignDateTime,
      formData.verifierSignName, formData.verifierSignPosition, formData.verifierSignature, formData.verifierSignDate,
      formData.followUpCompleted, formData.dateOfFollowUp, formData.verifiedByFollowUp, formData.verifierSignatureFollowUp, formData.commentsCloseOut
    ];

    submitMutation.mutate({
      formCode: "TE-IMS-FRM-HSE-014",
      headers,
      values,
    });
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto py-12 px-4">
          <div className="bg-white p-8 rounded-lg shadow-md border border-[#dde3ec] text-center">
            <h2 className="text-2xl font-bold text-[#081C2E] mb-4">Form submitted successfully.</h2>
            <p className="mb-6">View register: <a href={sheetUrl} target="_blank" rel="noopener noreferrer" className="text-[#C49A28] underline font-semibold">Google Sheet</a></p>
            <Link href="/">
              <button className="bg-[#081C2E] text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors">
                Return to Portal
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-8 px-4 font-['Nunito_Sans']">
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-[#081C2E] hover:underline">← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-500">FRM</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-500">PPE Kit Spot-Check Verification Form</span>
        </nav>

        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg overflow-hidden border border-[#dde3ec]">
          {/* Header Strip */}
          <div className="bg-[#081C2E] text-white p-6">
            <h1 className="text-2xl font-bold uppercase tracking-wide">PPE Kit Spot-Check Verification Form</h1>
          </div>

          <div className="p-6 space-y-8">
            {/* Document Control Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-[#dde3ec] text-sm">
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
                    <td className="border border-[#dde3ec] p-2 font-semibold">TE-IMS-FRM-HSE-014</td>
                    <td className="border border-[#dde3ec] p-2">01</td>
                    <td className="border border-[#dde3ec] p-2">10.04.2026</td>
                    <td className="border border-[#dde3ec] p-2">Approved for Implementation</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Section 1: Employee Information */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">1. Employee Information</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">Employee Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-[#dde3ec] p-2 rounded"
                    value={formData.employeeName}
                    onChange={(e) => setFormData({ ...formData, employeeName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Employee ID / Badge No. *</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-[#dde3ec] p-2 rounded"
                    value={formData.employeeId}
                    onChange={(e) => setFormData({ ...formData, employeeId: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Position / Role *</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-[#dde3ec] p-2 rounded"
                    value={formData.positionRole}
                    onChange={(e) => setFormData({ ...formData, positionRole: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Site / Department *</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-[#dde3ec] p-2 rounded"
                    value={formData.siteDepartment}
                    onChange={(e) => setFormData({ ...formData, siteDepartment: e.target.value })}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-1">Kit Type (e.g., Driller — Day Shift, Mechanic, Working at Height, Driver) *</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-[#dde3ec] p-2 rounded"
                    value={formData.kitType}
                    onChange={(e) => setFormData({ ...formData, kitType: e.target.value })}
                  />
                </div>
              </div>
            </section>

            {/* Section 2: Verification Details */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">2. Verification Details</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">Verifier Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-[#dde3ec] p-2 rounded"
                    value={formData.verifierName}
                    onChange={(e) => setFormData({ ...formData, verifierName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Position *</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-[#dde3ec] p-2 rounded"
                    value={formData.verifierPosition}
                    onChange={(e) => setFormData({ ...formData, verifierPosition: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Date of Spot-Check *</label>
                  <input
                    type="date"
                    required
                    className="w-full border border-[#dde3ec] p-2 rounded"
                    value={formData.dateOfSpotCheck}
                    onChange={(e) => setFormData({ ...formData, dateOfSpotCheck: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Time *</label>
                  <input
                    type="time"
                    required
                    className="w-full border border-[#dde3ec] p-2 rounded"
                    value={formData.timeOfSpotCheck}
                    onChange={(e) => setFormData({ ...formData, timeOfSpotCheck: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Verification Type *</label>
                  <select
                    required
                    className="w-full border border-[#dde3ec] p-2 rounded"
                    value={formData.verificationType}
                    onChange={(e) => setFormData({ ...formData, verificationType: e.target.value })}
                  >
                    <option value="">Select Type</option>
                    <option value="Scheduled">Scheduled</option>
                    <option value="Random">Random</option>
                    <option value="Post-Incident">Post-Incident</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Location of Check *</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-[#dde3ec] p-2 rounded"
                    value={formData.locationOfCheck}
                    onChange={(e) => setFormData({ ...formData, locationOfCheck: e.target.value })}
                  />
                </div>
              </div>
            </section>

            {/* Section 3: Kit Condition Check */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">3. Kit Condition Check (tick Yes / No)</div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[#dde3ec] text-sm">
                  <thead>
                    <tr className="bg-[#081C2E] text-white">
                      <th className="border border-[#dde3ec] p-2 w-12">#</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Item / Requirement</th>
                      <th className="border border-[#dde3ec] p-2 w-24">Yes / No</th>
                      <th className="border border-[#dde3ec] p-2">Comments</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: 1, text: "All required items present per PPE Kit Contents Matrix (FRM-HSE-016)." },
                      { id: 2, text: "Items clean and in good condition — no visible damage, tears, or cracks." },
                      { id: 3, text: "No expired items — inspection dates current on respirators, harnesses, cartridges." },
                      { id: 4, text: "Employee demonstrates correct donning, adjustment, and use." },
                      { id: 5, text: "Kit stored correctly in a clean, dry, and secure location." },
                      { id: 6, text: "Employee confirms daily inspection routine and log kept up to date." },
                      { id: 7, text: "PPE matches the hazard of the actual task performed today." },
                      { id: 8, text: "No unauthorised modification, paint, or tampering with PPE." },
                    ].map((item) => (
                      <tr key={item.id}>
                        <td className="border border-[#dde3ec] p-2 text-center font-bold">{item.id}</td>
                        <td className="border border-[#dde3ec] p-2">{item.text}</td>
                        <td className="border border-[#dde3ec] p-2 text-center">
                          <input
                            type="checkbox"
                            className="w-5 h-5 accent-[#C49A28]"
                            checked={(formData as any)[`check${item.id}`]}
                            onChange={(e) => setFormData({ ...formData, [`check${item.id}`]: e.target.checked })}
                          />
                        </td>
                        <td className="border border-[#dde3ec] p-2">
                          <input
                            type="text"
                            className="w-full border-none focus:ring-0 text-sm"
                            placeholder="Add comments..."
                            value={(formData as any)[`check${item.id}Comment`]}
                            onChange={(e) => setFormData({ ...formData, [`check${item.id}Comment`]: e.target.value })}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Corrective Action Required? */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">4. Corrective Action Required?</div>
              <div className="flex gap-8 mb-6 p-4 bg-gray-50 border border-[#dde3ec] rounded">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-[#C49A28]"
                    checked={formData.outcomeCompliant}
                    onChange={(e) => setFormData({ ...formData, outcomeCompliant: e.target.checked, outcomeActionRequired: !e.target.checked ? formData.outcomeActionRequired : false })}
                  />
                  <span className="font-semibold text-sm uppercase">NO — Kit is fully compliant. No action required.</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-[#C49A28]"
                    checked={formData.outcomeActionRequired}
                    onChange={(e) => setFormData({ ...formData, outcomeActionRequired: e.target.checked, outcomeCompliant: !e.target.checked ? formData.outcomeCompliant : false })}
                  />
                  <span className="font-semibold text-sm uppercase">YES — Action required. Describe below.</span>
                </label>
              </div>

              {formData.outcomeActionRequired && (
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-[#dde3ec] text-sm">
                      <thead>
                        <tr className="bg-[#081C2E] text-white">
                          <th className="border border-[#dde3ec] p-2 w-12">#</th>
                          <th className="border border-[#dde3ec] p-2 text-left">Action Taken (e.g., replacement issued, retraining, verbal warning, cost recovery)</th>
                          <th className="border border-[#dde3ec] p-2 text-left">Responsible / Due Date</th>
                          <th className="border border-[#dde3ec] p-2 w-12"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {actions.map((action, index) => (
                          <tr key={action.id}>
                            <td className="border border-[#dde3ec] p-2 text-center font-bold">{String(index + 1).padStart(2, '0')}</td>
                            <td className="border border-[#dde3ec] p-2">
                              <input
                                type="text"
                                className="w-full border-none focus:ring-0"
                                value={action.description}
                                onChange={(e) => updateAction(action.id, "description", e.target.value)}
                              />
                            </td>
                            <td className="border border-[#dde3ec] p-2">
                              <input
                                type="text"
                                className="w-full border-none focus:ring-0"
                                value={action.responsible}
                                onChange={(e) => updateAction(action.id, "responsible", e.target.value)}
                              />
                            </td>
                            <td className="border border-[#dde3ec] p-2 text-center">
                              <button
                                type="button"
                                onClick={() => removeAction(action.id)}
                                className="text-red-600 hover:text-red-800 font-bold"
                              >
                                ×
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <button
                    type="button"
                    onClick={addAction}
                    className="bg-[#C49A28] text-white px-4 py-2 rounded text-sm font-bold hover:bg-opacity-90 transition-colors"
                  >
                    + Add Action Row
                  </button>
                </div>
              )}
            </section>

            {/* Section 5: Employee Acknowledgement */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">5. Employee Acknowledgement</div>
              <p className="text-sm italic mb-4 p-4 bg-gray-50 border-l-4 border-[#C49A28]">
                I confirm the spot-check was performed in my presence, and I understand any actions required of me. I agree to comply with the corrective actions listed above within the stated timeframe.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">Employee Signature (Full Name) *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full name (acts as signature)"
                    className="w-full border border-[#dde3ec] p-2 rounded"
                    value={formData.employeeSignature}
                    onChange={(e) => setFormData({ ...formData, employeeSignature: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Date / Time *</label>
                  <input
                    type="datetime-local"
                    required
                    className="w-full border border-[#dde3ec] p-2 rounded"
                    value={formData.employeeSignDateTime}
                    onChange={(e) => setFormData({ ...formData, employeeSignDateTime: e.target.value })}
                  />
                </div>
              </div>
            </section>

            {/* Section 6: Verifier Sign-Off */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">6. Verifier Sign-Off</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">Verifier Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-[#dde3ec] p-2 rounded"
                    value={formData.verifierSignName}
                    onChange={(e) => setFormData({ ...formData, verifierSignName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Position *</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-[#dde3ec] p-2 rounded"
                    value={formData.verifierSignPosition}
                    onChange={(e) => setFormData({ ...formData, verifierSignPosition: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Signature (Full Name) *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full name (acts as signature)"
                    className="w-full border border-[#dde3ec] p-2 rounded"
                    value={formData.verifierSignature}
                    onChange={(e) => setFormData({ ...formData, verifierSignature: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Date *</label>
                  <input
                    type="date"
                    required
                    className="w-full border border-[#dde3ec] p-2 rounded"
                    value={formData.verifierSignDate}
                    onChange={(e) => setFormData({ ...formData, verifierSignDate: e.target.value })}
                  />
                </div>
              </div>
            </section>

            {/* Section 7: HSE / Supervisor Follow-Up */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">7. HSE / Supervisor Follow-Up (if action required)</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">Follow-up completed?</label>
                  <select
                    className="w-full border border-[#dde3ec] p-2 rounded"
                    value={formData.followUpCompleted}
                    onChange={(e) => setFormData({ ...formData, followUpCompleted: e.target.value })}
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Date of follow-up</label>
                  <input
                    type="date"
                    className="w-full border border-[#dde3ec] p-2 rounded"
                    value={formData.dateOfFollowUp}
                    onChange={(e) => setFormData({ ...formData, dateOfFollowUp: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Verified by (name and position)</label>
                  <input
                    type="text"
                    className="w-full border border-[#dde3ec] p-2 rounded"
                    value={formData.verifiedByFollowUp}
                    onChange={(e) => setFormData({ ...formData, verifiedByFollowUp: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Verifier signature</label>
                  <input
                    type="text"
                    placeholder="Full name (acts as signature)"
                    className="w-full border border-[#dde3ec] p-2 rounded"
                    value={formData.verifierSignatureFollowUp}
                    onChange={(e) => setFormData({ ...formData, verifierSignatureFollowUp: e.target.value })}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-1">Comments / Close-out notes</label>
                  <textarea
                    rows={3}
                    className="w-full border border-[#dde3ec] p-2 rounded"
                    value={formData.commentsCloseOut}
                    onChange={(e) => setFormData({ ...formData, commentsCloseOut: e.target.value })}
                  />
                </div>
              </div>
            </section>

            {/* Submit Button */}
            <div className="pt-6 border-t border-[#dde3ec]">
              {error && (
                <div className="mb-4 p-4 bg-red-50 text-red-700 border border-red-200 rounded text-sm">
                  {error}
                </div>
              )}
              <button
                type="submit"
                disabled={submitMutation.isLoading}
                className="w-full bg-[#081C2E] text-white py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {submitMutation.isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Submit PPE Spot-Check Form"
                )}
              </button>
              <p className="mt-4 text-center text-xs text-gray-500">
                Retention rule: Retain the completed form in the employee's HSE file for 3 years.
              </p>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
