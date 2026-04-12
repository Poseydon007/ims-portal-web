import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_010() {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    siteLocation: "",
    taskActivity: "",
    date: "",
    time: "",
    shift: "",
    // People and Behaviour
    fatigueHeatStress: false,
    inadequateTraining: false,
    distraction: false,
    unsafeAct: false,
    workingAlone: false,
    // Equipment and Tools
    missingGuards: false,
    damagedTools: false,
    improperPPE: false,
    unstableRig: false,
    pressureHoses: false,
    // Environment and Conditions
    poorLighting: false,
    slipperyTrip: false,
    dustFumes: false,
    extremeHeat: false,
    wildlifePresence: false,
    // Task and Process
    lineOfFire: false,
    energyIsolation: false,
    confinedSpace: false,
    hotWork: false,
    workingAtHeight: false,
    simops: false,
    // Other / Site-Specific
    unauthorisedPersonnel: false,
    chemicalSpill: false,
    buriedServices: false,
    otherHazard: "",
    // Residual Risk
    residualRisk: "",
    // Employee Declaration
    employeeName: "",
    employeeSignature: "",
    employeeDateTime: "",
    // HSE / Supervisor Follow-Up
    reviewedBy: "",
    highRiskEscalated: "",
    actionTaken: "",
    reviewerSignature: "",
    reviewerDateTime: "",
  });

  const [controls, setControls] = useState([
    { id: 1, measure: "", responsible: "" },
    { id: 2, measure: "", responsible: "" },
    { id: 3, measure: "", responsible: "" },
    { id: 4, measure: "", responsible: "" },
    { id: 5, measure: "", responsible: "" },
  ]);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState("");

  const mutation = trpc.formSubmissions.submit.useMutation({
    onSuccess: (data) => {
      setIsSubmitted(true);
      setSheetUrl(data.sheetUrl);
    },
    onError: (err) => {
      setError(err.message || "An error occurred during submission.");
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleControlChange = (index: number, field: string, value: string) => {
    const newControls = [...controls];
    newControls[index] = { ...newControls[index], [field]: value };
    setControls(newControls);
  };

  const addControlRow = () => {
    setControls([...controls, { id: controls.length + 1, measure: "", responsible: "" }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const headers = [
      "Name", "Position", "Site / Location", "Task / Activity", "Date", "Time", "Shift",
      "Fatigue/Heat Stress", "Inadequate Training", "Distraction", "Unsafe Act", "Working Alone",
      "Missing Guards", "Damaged Tools", "Improper PPE", "Unstable Rig", "Pressure Hoses",
      "Poor Lighting", "Slippery/Trip Hazards", "Dust/Fumes", "Extreme Heat", "Wildlife Presence",
      "Line of Fire", "Energy Isolation", "Confined Space", "Hot Work", "Working at Height", "SIMOPs",
      "Unauthorised Personnel", "Chemical Spill", "Buried Services", "Other Hazard Description",
      ...controls.flatMap((c, i) => [`Control ${i + 1}`, `Responsible ${i + 1}`]),
      "Residual Risk Level",
      "Employee Name", "Employee Signature", "Employee Date/Time",
      "Reviewed By", "High-Risk Escalated", "Action Taken", "Reviewer Signature", "Reviewer Date/Time"
    ];

    const values = [
      formData.name, formData.position, formData.siteLocation, formData.taskActivity, formData.date, formData.time, formData.shift,
      formData.fatigueHeatStress ? "Yes" : "No", formData.inadequateTraining ? "Yes" : "No", formData.distraction ? "Yes" : "No", formData.unsafeAct ? "Yes" : "No", formData.workingAlone ? "Yes" : "No",
      formData.missingGuards ? "Yes" : "No", formData.damagedTools ? "Yes" : "No", formData.improperPPE ? "Yes" : "No", formData.unstableRig ? "Yes" : "No", formData.pressureHoses ? "Yes" : "No",
      formData.poorLighting ? "Yes" : "No", formData.slipperyTrip ? "Yes" : "No", formData.dustFumes ? "Yes" : "No", formData.extremeHeat ? "Yes" : "No", formData.wildlifePresence ? "Yes" : "No",
      formData.lineOfFire ? "Yes" : "No", formData.energyIsolation ? "Yes" : "No", formData.confinedSpace ? "Yes" : "No", formData.hotWork ? "Yes" : "No", formData.workingAtHeight ? "Yes" : "No", formData.simops ? "Yes" : "No",
      formData.unauthorisedPersonnel ? "Yes" : "No", formData.chemicalSpill ? "Yes" : "No", formData.buriedServices ? "Yes" : "No", formData.otherHazard,
      ...controls.flatMap(c => [c.measure, c.responsible]),
      formData.residualRisk,
      formData.employeeName, formData.employeeSignature, formData.employeeDateTime,
      formData.reviewedBy, formData.highRiskEscalated, formData.actionTaken, formData.reviewerSignature, formData.reviewerDateTime
    ];

    mutation.mutate({
      formCode: "TE-IMS-FRM-HSE-010",
      headers,
      values,
    });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-10 text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">Form submitted successfully.</h2>
          <p className="mb-6">Thank you for completing the Hazard Identification Prompt Checklist.</p>
          <a
            href={sheetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors"
          >
            View register
          </a>
          <div className="mt-8">
            <Link href="/" className="text-navy hover:underline">← Back to Portal Home</Link>
          </div>
        </div>
      </Layout>
    );
  }

  const sectionHeaderStyle = "bg-[#081C2E] text-white px-4 py-2 font-bold mt-6 mb-4 uppercase tracking-wider";
  const labelStyle = "block text-sm font-semibold text-[#081C2E] mb-1";
  const inputStyle = "w-full p-2 border border-[#dde3ec] rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]";
  const tableHeaderStyle = "bg-[#081C2E] text-white p-2 text-sm font-bold text-left";

  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-6 bg-[#f4f6f9] min-h-screen">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <Link href="/" className="text-[#081C2E] hover:underline font-medium">← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/docs/frm" className="text-gray-600 hover:text-[#C49A28] transition-colors cursor-pointer">FRM</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Hazard Identification Prompt Checklist</span>
        </nav>

        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg overflow-hidden border border-[#dde3ec]">
          {/* Document Control Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className={tableHeaderStyle} colSpan={4}>HAZARD IDENTIFICATION PROMPT CHECKLIST</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                <tr>
                  <td className="border p-2 font-bold bg-gray-50">Document</td>
                  <td className="border p-2">TE-IMS-FRM-HSE-010</td>
                  <td className="border p-2 font-bold bg-gray-50">Revision</td>
                  <td className="border p-2">01</td>
                </tr>
                <tr>
                  <td className="border p-2 font-bold bg-gray-50">Date</td>
                  <td className="border p-2">10.04.2026</td>
                  <td className="border p-2 font-bold bg-gray-50">Status</td>
                  <td className="border p-2">Approved for Implementation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-6">
            <div className="mb-8 p-4 bg-blue-50 border-l-4 border-navy text-sm text-gray-700">
              <p className="font-bold mb-2">Purpose & Instructions:</p>
              <p>This checklist provides a quick, structured prompt to identify hazards before starting any task, shift, or activity. Complete before starting any task or shift. Mark "Yes" if a hazard is present — identify controls, then re-assess. Submit to Supervisor / HSE Officer if high-risk hazards are found.</p>
            </div>

            {/* General Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className={labelStyle}>Name *</label>
                <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className={inputStyle} />
              </div>
              <div>
                <label className={labelStyle}>Position *</label>
                <input type="text" name="position" required value={formData.position} onChange={handleInputChange} className={inputStyle} />
              </div>
              <div>
                <label className={labelStyle}>Site / Location *</label>
                <input type="text" name="siteLocation" required value={formData.siteLocation} onChange={handleInputChange} className={inputStyle} />
              </div>
              <div className="md:col-span-2">
                <label className={labelStyle}>Task / Activity *</label>
                <input type="text" name="taskActivity" required value={formData.taskActivity} onChange={handleInputChange} className={inputStyle} />
              </div>
              <div>
                <label className={labelStyle}>Shift *</label>
                <select name="shift" required value={formData.shift} onChange={handleInputChange} className={inputStyle}>
                  <option value="">Select Shift</option>
                  <option value="Day">Day</option>
                  <option value="Night">Night</option>
                </select>
              </div>
              <div>
                <label className={labelStyle}>Date *</label>
                <input type="date" name="date" required value={formData.date} onChange={handleInputChange} className={inputStyle} />
              </div>
              <div>
                <label className={labelStyle}>Time *</label>
                <input type="time" name="time" required value={formData.time} onChange={handleInputChange} className={inputStyle} />
              </div>
            </div>

            {/* Hazard Categories */}
            <div className={sectionHeaderStyle}>1. People and Behaviour</div>
            <div className="space-y-2 mb-6">
              {[
                { name: "fatigueHeatStress", label: "Fatigue, heat stress, or illness signs in self or team." },
                { name: "inadequateTraining", label: "Inadequate training or competency for the task." },
                { name: "distraction", label: "Distraction (phone, conversation, rushing)." },
                { name: "unsafeAct", label: "Unsafe act observed (shortcut, improper lifting, horseplay)." },
                { name: "workingAlone", label: "Working alone without communication or check-in." },
              ].map((item) => (
                <label key={item.name} className="flex items-center p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" name={item.name} checked={(formData as any)[item.name]} onChange={handleInputChange} className="h-5 w-5 text-gold border-gray-300 rounded focus:ring-gold" />
                  <span className="ml-3 text-sm text-gray-700">{item.label}</span>
                </label>
              ))}
            </div>

            <div className={sectionHeaderStyle}>2. Equipment and Tools</div>
            <div className="space-y-2 mb-6">
              {[
                { name: "missingGuards", label: "Missing or defective guards (machine guarding)." },
                { name: "damagedTools", label: "Damaged tools or equipment (e.g., frayed wireline, cracked hard hat)." },
                { name: "improperPPE", label: "Improper PPE (missing, worn, expired, wrong type)." },
                { name: "unstableRig", label: "Unstable rig or equipment (uneven ground, outriggers not set)." },
                { name: "pressureHoses", label: "Pressure hoses or hydraulic lines showing leaks or damage." },
              ].map((item) => (
                <label key={item.name} className="flex items-center p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" name={item.name} checked={(formData as any)[item.name]} onChange={handleInputChange} className="h-5 w-5 text-gold border-gray-300 rounded focus:ring-gold" />
                  <span className="ml-3 text-sm text-gray-700">{item.label}</span>
                </label>
              ))}
            </div>

            <div className={sectionHeaderStyle}>3. Environment and Conditions</div>
            <div className="space-y-2 mb-6">
              {[
                { name: "poorLighting", label: "Poor lighting, glare, or shadows (night shift, tunnel, enclosed area)." },
                { name: "slipperyTrip", label: "Slippery or trip hazards (oil, mud, hoses, uneven terrain)." },
                { name: "dustFumes", label: "Dust, fumes, or hazardous atmosphere (silica, diesel exhaust, H₂S)." },
                { name: "extremeHeat", label: "Extreme heat, wind, or dust storm conditions." },
                { name: "wildlifePresence", label: "Wildlife or reptile presence (scorpions, snakes) in remote location." },
              ].map((item) => (
                <label key={item.name} className="flex items-center p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" name={item.name} checked={(formData as any)[item.name]} onChange={handleInputChange} className="h-5 w-5 text-gold border-gray-300 rounded focus:ring-gold" />
                  <span className="ml-3 text-sm text-gray-700">{item.label}</span>
                </label>
              ))}
            </div>

            <div className={sectionHeaderStyle}>4. Task and Process</div>
            <div className="space-y-2 mb-6">
              {[
                { name: "lineOfFire", label: "Line-of-fire exposure (rotating rods, winch cable, pinch points)." },
                { name: "energyIsolation", label: "Energy sources not isolated (LOTO not applied, stored energy)." },
                { name: "confinedSpace", label: "Confined space entry without permit and attendant." },
                { name: "hotWork", label: "Hot work without permit, fire watch, or gas test." },
                { name: "workingAtHeight", label: "Working at height (>1.8 m) without fall protection." },
                { name: "simops", label: "Simultaneous operations (SIMOPs) not deconflicted." },
              ].map((item) => (
                <label key={item.name} className="flex items-center p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" name={item.name} checked={(formData as any)[item.name]} onChange={handleInputChange} className="h-5 w-5 text-gold border-gray-300 rounded focus:ring-gold" />
                  <span className="ml-3 text-sm text-gray-700">{item.label}</span>
                </label>
              ))}
            </div>

            <div className={sectionHeaderStyle}>5. Other / Site-Specific</div>
            <div className="space-y-2 mb-6">
              {[
                { name: "unauthorisedPersonnel", label: "Unauthorised personnel in exclusion zone." },
                { name: "chemicalSpill", label: "Chemical or fuel spill risk during handling or refuelling." },
                { name: "buriedServices", label: "Buried or overhead services not identified or marked." },
              ].map((item) => (
                <label key={item.name} className="flex items-center p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <input type="checkbox" name={item.name} checked={(formData as any)[item.name]} onChange={handleInputChange} className="h-5 w-5 text-gold border-gray-300 rounded focus:ring-gold" />
                  <span className="ml-3 text-sm text-gray-700">{item.label}</span>
                </label>
              ))}
              <div className="mt-4">
                <label className={labelStyle}>Other hazard (describe):</label>
                <textarea name="otherHazard" value={formData.otherHazard} onChange={handleInputChange} className={inputStyle} rows={2}></textarea>
              </div>
            </div>

            {/* Controls */}
            <div className={sectionHeaderStyle}>6. Controls Identified (for any "Yes" above)</div>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className={`${tableHeaderStyle} w-12`}>#</th>
                    <th className={tableHeaderStyle}>Control Measure Applied</th>
                    <th className={`${tableHeaderStyle} w-1/3`}>Responsible / Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  {controls.map((control, index) => (
                    <tr key={control.id}>
                      <td className="border p-2 text-center text-sm">{String(index + 1).padStart(2, '0')}</td>
                      <td className="border p-1">
                        <input
                          type="text"
                          value={control.measure}
                          onChange={(e) => handleControlChange(index, "measure", e.target.value)}
                          className="w-full p-1 focus:outline-none"
                        />
                      </td>
                      <td className="border p-1">
                        <input
                          type="text"
                          value={control.responsible}
                          onChange={(e) => handleControlChange(index, "responsible", e.target.value)}
                          className="w-full p-1 focus:outline-none"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button type="button" onClick={addControlRow} className="mt-2 text-sm text-navy font-bold hover:text-gold transition-colors">+ Add Control Row</button>
            </div>

            {/* Risk Level */}
            <div className={sectionHeaderStyle}>7. Risk Level After Controls</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                { value: "LOW", label: "LOW — Safe to proceed with normal controls.", color: "bg-green-100 border-green-500" },
                { value: "MEDIUM", label: "MEDIUM — Additional controls needed; supervisor approval required.", color: "bg-yellow-100 border-yellow-500" },
                { value: "HIGH", label: "HIGH — STOP WORK. Notify Supervisor and HSE Officer immediately.", color: "bg-red-100 border-red-500" },
              ].map((risk) => (
                <label key={risk.value} className={`flex items-start p-3 border-l-4 rounded cursor-pointer ${risk.color} ${formData.residualRisk === risk.value ? 'ring-2 ring-navy' : ''}`}>
                  <input
                    type="radio"
                    name="residualRisk"
                    value={risk.value}
                    checked={formData.residualRisk === risk.value}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 text-navy border-gray-300 focus:ring-navy"
                    required
                  />
                  <span className="ml-3 text-xs font-bold text-gray-800">{risk.label}</span>
                </label>
              ))}
            </div>

            {/* Employee Declaration */}
            <div className={sectionHeaderStyle}>8. Employee Declaration</div>
            <div className="p-4 bg-gray-50 border border-gray-200 rounded mb-6 italic text-sm text-gray-700">
              I confirm that I have identified the hazards above to the best of my ability, applied the controls listed, and I am competent and fit to proceed with this task.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div>
                <label className={labelStyle}>Employee Name *</label>
                <input type="text" name="employeeName" required value={formData.employeeName} onChange={handleInputChange} className={inputStyle} />
              </div>
              <div>
                <label className={labelStyle}>Signature (Full Name) *</label>
                <input type="text" name="employeeSignature" required placeholder="Full name (acts as signature)" value={formData.employeeSignature} onChange={handleInputChange} className={inputStyle} />
              </div>
              <div>
                <label className={labelStyle}>Date / Time *</label>
                <input type="datetime-local" name="employeeDateTime" required value={formData.employeeDateTime} onChange={handleInputChange} className={inputStyle} />
              </div>
            </div>

            {/* Supervisor Follow-up */}
            <div className={sectionHeaderStyle}>9. HSE / Supervisor Follow-Up</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className={labelStyle}>Reviewed by (Supervisor / HSE)</label>
                <input type="text" name="reviewedBy" value={formData.reviewedBy} onChange={handleInputChange} className={inputStyle} />
              </div>
              <div>
                <label className={labelStyle}>High-risk hazard escalated?</label>
                <select name="highRiskEscalated" value={formData.highRiskEscalated} onChange={handleInputChange} className={inputStyle}>
                  <option value="">Select Option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className={labelStyle}>Action taken</label>
                <textarea name="actionTaken" value={formData.actionTaken} onChange={handleInputChange} className={inputStyle} rows={2}></textarea>
              </div>
              <div>
                <label className={labelStyle}>Signature (Full Name)</label>
                <input type="text" name="reviewerSignature" placeholder="Full name (acts as signature)" value={formData.reviewerSignature} onChange={handleInputChange} className={inputStyle} />
              </div>
              <div>
                <label className={labelStyle}>Date / Time</label>
                <input type="datetime-local" name="reviewerDateTime" value={formData.reviewerDateTime} onChange={handleInputChange} className={inputStyle} />
              </div>
            </div>

            {error && (
              <div className="mt-4 p-3 bg-red-100 text-red-700 border border-red-400 rounded">
                {error}
              </div>
            )}

            <div className="mt-10 flex justify-end">
              <button
                type="submit"
                disabled={mutation.isPending}
                className={`bg-[#081C2E] text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg ${mutation.isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {mutation.isPending ? "Submitting..." : "Submit Checklist"}
              </button>
            </div>
          </div>
        </form>

        {/* Revision History */}
        <div className="mt-12 bg-white shadow border border-[#dde3ec] rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-4 py-2 border-b font-bold text-[#081C2E]">Revision History</div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Rev</th>
                  <th className="border p-2 text-left">Date</th>
                  <th className="border p-2 text-left">Description of Changes</th>
                  <th className="border p-2 text-left">Author</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">00</td>
                  <td className="border p-2">01.03.2026</td>
                  <td className="border p-2">Initial release — Hazard Identification Prompt Checklist</td>
                  <td className="border p-2">JM ALICE / IMS Project Lead</td>
                </tr>
                <tr>
                  <td className="border p-2 font-bold">01</td>
                  <td className="border p-2 font-bold">10.04.2026</td>
                  <td className="border p-2 font-bold">Rebuilt to TE design standard; preserved all five hazard categories and checkbox structure; added Site/Task/Time header block, Employee Declaration, expanded prompts, and explicit linkage to PROC-HSE-003.</td>
                  <td className="border p-2 font-bold">HSE Manager</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
