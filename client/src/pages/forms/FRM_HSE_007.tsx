import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_007() {
  const [submitted, setSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  const mutation = trpc.formSubmissions.submit.useMutation({
    onSuccess: (data) => {
      setSubmitted(true);
      setSheetUrl(data.sheetUrl);
    },
    onError: (err) => {
      setError(err.message || "An error occurred during submission.");
    },
  });

  const [formData, setFormData] = useState({
    observerName: "",
    dateTime: "",
    location: "",
    shift: "",
    taskObserved: "",
    employeesObserved: "",
    taskDuration: "",
    lightingConditions: "",
    checklist: {
      ppe: false,
      lifting: false,
      lineOfFire: false,
      communication: false,
      housekeeping: false,
      equipment: false,
      fatigue: false,
      lightingAdequate: false,
      visibilityAids: false,
    },
    otherPositive: "",
    unsafeActs: {
      ppeMissing: false,
      unsafeLifting: false,
      lineOfFireExposure: false,
      poorCommunication: false,
      tripHazards: false,
      improperTool: false,
      fatigueSigns: false,
      inadequateLighting: false,
    },
    otherUnsafe: "",
    feedbackPositive: "",
    feedbackUnsafe: "",
    employeeResponse: "",
    recommendations: [
      { id: 1, action: "", responsible: "", dueDate: "" },
      { id: 2, action: "", responsible: "", dueDate: "" },
      { id: 3, action: "", responsible: "", dueDate: "" },
      { id: 4, action: "", responsible: "", dueDate: "" },
    ],
    signOffObserverName: "",
    signOffObserverDate: "",
    signOffEmployeeName: "",
    signOffEmployeeDate: "",
    signOffHseName: "",
    signOffHseDate: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (section: 'checklist' | 'unsafeActs', field: string) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev] as any,
        [field]: !(prev[section as keyof typeof prev] as any)[field],
      },
    }));
  };

  const handleRecommendationChange = (index: number, field: string, value: string) => {
    const newRecs = [...formData.recommendations];
    newRecs[index] = { ...newRecs[index], [field]: value };
    setFormData((prev) => ({ ...prev, recommendations: newRecs }));
  };

  const addRecommendationRow = () => {
    setFormData((prev) => ({
      ...prev,
      recommendations: [
        ...prev.recommendations,
        { id: prev.recommendations.length + 1, action: "", responsible: "", dueDate: "" },
      ],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const headers = [
      "Observer Name & Position",
      "Date & Time",
      "Location / Site",
      "Shift",
      "Task Observed",
      "Employee(s) Observed",
      "Task Duration (minutes)",
      "Lighting Conditions",
      "Checklist: Proper PPE",
      "Checklist: Safe Lifting",
      "Checklist: Line-of-fire",
      "Checklist: Communication",
      "Checklist: Housekeeping",
      "Checklist: Equipment",
      "Checklist: Fatigue/Heat",
      "Checklist: Adequate Lighting",
      "Checklist: Visibility Aids",
      "Other Positive",
      "Unsafe: PPE Missing",
      "Unsafe: Unsafe Lifting",
      "Unsafe: Line-of-fire Exposure",
      "Unsafe: Poor Communication",
      "Unsafe: Trip/Slip Hazards",
      "Unsafe: Improper Tool/Equip",
      "Unsafe: Fatigue/Heat Signs",
      "Unsafe: Inadequate Lighting",
      "Other Unsafe",
      "Positive Feedback Provided",
      "Unsafe Acts Discussed",
      "Employee Response/Commitment",
      "Recommendations",
      "Observer Sign-off",
      "Observer Date",
      "Employee Sign-off",
      "Employee Date",
      "HSE Follow-up Sign-off",
      "HSE Date"
    ];

    const values = [
      formData.observerName,
      formData.dateTime,
      formData.location,
      formData.shift,
      formData.taskObserved,
      formData.employeesObserved,
      formData.taskDuration,
      formData.lightingConditions,
      formData.checklist.ppe ? "Yes" : "No",
      formData.checklist.lifting ? "Yes" : "No",
      formData.checklist.lineOfFire ? "Yes" : "No",
      formData.checklist.communication ? "Yes" : "No",
      formData.checklist.housekeeping ? "Yes" : "No",
      formData.checklist.equipment ? "Yes" : "No",
      formData.checklist.fatigue ? "Yes" : "No",
      formData.checklist.lightingAdequate ? "Yes" : "No",
      formData.checklist.visibilityAids ? "Yes" : "No",
      formData.otherPositive,
      formData.unsafeActs.ppeMissing ? "Yes" : "No",
      formData.unsafeActs.unsafeLifting ? "Yes" : "No",
      formData.unsafeActs.lineOfFireExposure ? "Yes" : "No",
      formData.unsafeActs.poorCommunication ? "Yes" : "No",
      formData.unsafeActs.tripHazards ? "Yes" : "No",
      formData.unsafeActs.improperTool ? "Yes" : "No",
      formData.unsafeActs.fatigueSigns ? "Yes" : "No",
      formData.unsafeActs.inadequateLighting ? "Yes" : "No",
      formData.otherUnsafe,
      formData.feedbackPositive,
      formData.feedbackUnsafe,
      formData.employeeResponse,
      formData.recommendations.map(r => `${r.action} (Resp: ${r.responsible}, Due: ${r.dueDate})`).join(" | "),
      formData.signOffObserverName,
      formData.signOffObserverDate,
      formData.signOffEmployeeName,
      formData.signOffEmployeeDate,
      formData.signOffHseName,
      formData.signOffHseDate
    ];

    mutation.mutate({
      formCode: "TE-IMS-FRM-HSE-007",
      headers,
      values,
    });
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto py-10 px-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Form submitted successfully</h2>
            <p className="text-green-700 mb-6">The Planned Task Observation (PTO) Form has been recorded.</p>
            <a 
              href={sheetUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#C49A28] text-white px-6 py-2 rounded font-semibold hover:bg-[#a38021] transition-colors"
            >
              View Register
            </a>
            <div className="mt-8">
              <Link href="/" className="text-[#081C2E] hover:underline">← Back to Portal Home</Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8 font-['Nunito_Sans'] text-[#081C2E]">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <Link href="/" className="text-[#C49A28] hover:text-[#081C2E] transition-colors font-medium">← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/docs/frm" className="text-gray-500 hover:text-[#C49A28] transition-colors cursor-pointer">FRM</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 font-semibold">Planned Task Observation (PTO) Form</span>
        </nav>

        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg overflow-hidden border border-[#dde3ec]">
          {/* Header Strip */}
          <div className="bg-[#081C2E] text-white p-6">
            <h1 className="text-2xl font-bold tracking-tight">PLANNED TASK OBSERVATION (PTO) FORM</h1>
            <p className="text-blue-200 mt-2 text-sm">Proactive behavior-based safety tool to reinforce safe work practices.</p>
          </div>

          <div className="p-8 space-y-8">
            {/* Document Control Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-[#dde3ec] text-sm">
                <thead>
                  <tr className="bg-[#081C2E] text-white">
                    <th className="border border-[#dde3ec] p-2 text-left">Document Code</th>
                    <th className="border border-[#dde3ec] p-2 text-left">Version</th>
                    <th className="border border-[#dde3ec] p-2 text-left">Date</th>
                    <th className="border border-[#dde3ec] p-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[#dde3ec] p-2 bg-gray-50 font-medium text-xs">TE-IMS-FRM-HSE-007_Rev01</td>
                    <td className="border border-[#dde3ec] p-2 text-xs text-center">1.1</td>
                    <td className="border border-[#dde3ec] p-2 text-xs text-center">09 Apr 2026</td>
                    <td className="border border-[#dde3ec] p-2 text-xs text-center">Approved</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Observation Details Section */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 rounded-t">
                OBSERVATION DETAILS
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-1">Observer Name & Position *</label>
                  <input 
                    type="text" 
                    name="observerName" 
                    required 
                    value={formData.observerName}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Date & Time *</label>
                  <input 
                    type="datetime-local" 
                    name="dateTime" 
                    required 
                    value={formData.dateTime}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Location / Site *</label>
                  <input 
                    type="text" 
                    name="location" 
                    required 
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Shift *</label>
                  <div className="flex items-center space-x-6 mt-2">
                    <label className="flex items-center cursor-pointer">
                      <input 
                        type="radio" 
                        name="shift" 
                        value="Day Shift" 
                        required
                        checked={formData.shift === "Day Shift"}
                        onChange={handleInputChange}
                        className="mr-2 accent-[#C49A28]" 
                      /> Day Shift
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input 
                        type="radio" 
                        name="shift" 
                        value="Night Shift" 
                        checked={formData.shift === "Night Shift"}
                        onChange={handleInputChange}
                        className="mr-2 accent-[#C49A28]" 
                      /> Night Shift
                    </label>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold mb-1">Task Observed *</label>
                  <input 
                    type="text" 
                    name="taskObserved" 
                    required 
                    value={formData.taskObserved}
                    onChange={handleInputChange}
                    placeholder="e.g., rod handling, rig setup, manual lifting"
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Employee(s) Observed *</label>
                  <input 
                    type="text" 
                    name="employeesObserved" 
                    required 
                    value={formData.employeesObserved}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Task Duration (minutes)</label>
                  <input 
                    type="number" 
                    name="taskDuration" 
                    value={formData.taskDuration}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none" 
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold mb-1">Lighting Conditions {formData.shift === "Night Shift" && "*"}</label>
                  <input 
                    type="text" 
                    name="lightingConditions" 
                    required={formData.shift === "Night Shift"}
                    value={formData.lightingConditions}
                    onChange={handleInputChange}
                    placeholder="e.g., 540 lux at rig, 215 lux walkways (Required for night shift)"
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none" 
                  />
                </div>
              </div>
            </section>

            {/* Checklist Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <section>
                <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 rounded-t">
                  OBSERVATION CHECKLIST (Tick all that apply)
                </div>
                <div className="space-y-3 border border-[#dde3ec] p-4 rounded bg-gray-50">
                  {[
                    { id: 'ppe', label: 'Proper PPE worn and used correctly' },
                    { id: 'lifting', label: 'Safe lifting / manual handling technique' },
                    { id: 'lineOfFire', label: 'Line-of-fire awareness (hands off moving parts)' },
                    { id: 'communication', label: 'Clear communication with team' },
                    { id: 'housekeeping', label: 'Housekeeping maintained (no trip hazards)' },
                    { id: 'equipment', label: 'Equipment used correctly (no shortcuts)' },
                    { id: 'fatigue', label: 'Fatigue / heat stress managed (breaks, hydration)' },
                    { id: 'lightingAdequate', label: 'Adequate lighting for task (night shift)', nightOnly: true },
                    { id: 'visibilityAids', label: 'Visibility aids in use (reflective vests, etc.)', nightOnly: true },
                  ].map((item) => (
                    <label key={item.id} className={`flex items-start cursor-pointer p-1 hover:bg-white rounded transition-colors ${item.nightOnly && formData.shift !== "Night Shift" ? "opacity-40" : ""}`}>
                      <input 
                        type="checkbox" 
                        checked={(formData.checklist as any)[item.id]}
                        onChange={() => handleCheckboxChange('checklist', item.id)}
                        className="mt-1 mr-3 h-4 w-4 accent-[#C49A28]" 
                      />
                      <span className="text-sm">{item.label}</span>
                    </label>
                  ))}
                  <div className="mt-4 pt-4 border-t border-[#dde3ec]">
                    <label className="block text-sm font-bold mb-1">Other Positive Observations:</label>
                    <textarea 
                      name="otherPositive"
                      value={formData.otherPositive}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-[#dde3ec] rounded h-20 text-sm focus:ring-2 focus:ring-[#C49A28] outline-none"
                    ></textarea>
                  </div>
                </div>
              </section>

              <section>
                <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 rounded-t">
                  UNSAFE ACTS / CONDITIONS IDENTIFIED
                </div>
                <div className="space-y-3 border border-[#dde3ec] p-4 rounded bg-red-50/30">
                  {[
                    { id: 'ppeMissing', label: 'PPE missing / incorrect' },
                    { id: 'unsafeLifting', label: 'Unsafe lifting / body positioning' },
                    { id: 'lineOfFireExposure', label: 'Line-of-fire exposure' },
                    { id: 'poorCommunication', label: 'Poor communication' },
                    { id: 'tripHazards', label: 'Trip / slip hazards' },
                    { id: 'improperTool', label: 'Improper tool / equipment use' },
                    { id: 'fatigueSigns', label: 'Fatigue / heat signs' },
                    { id: 'inadequateLighting', label: 'Inadequate lighting (night shift)', nightOnly: true },
                  ].map((item) => (
                    <label key={item.id} className={`flex items-start cursor-pointer p-1 hover:bg-white rounded transition-colors ${item.nightOnly && formData.shift !== "Night Shift" ? "opacity-40" : ""}`}>
                      <input 
                        type="checkbox" 
                        checked={(formData.unsafeActs as any)[item.id]}
                        onChange={() => handleCheckboxChange('unsafeActs', item.id)}
                        className="mt-1 mr-3 h-4 w-4 accent-red-600" 
                      />
                      <span className="text-sm">{item.label}</span>
                    </label>
                  ))}
                  <div className="mt-4 pt-4 border-t border-[#dde3ec]">
                    <label className="block text-sm font-bold mb-1">Other Unsafe Acts/Conditions:</label>
                    <textarea 
                      name="otherUnsafe"
                      value={formData.otherUnsafe}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-[#dde3ec] rounded h-20 text-sm focus:ring-2 focus:ring-[#C49A28] outline-none"
                    ></textarea>
                  </div>
                </div>
              </section>
            </div>

            {/* Feedback Section */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 rounded-t">
                IMMEDIATE FEEDBACK GIVEN
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-[#dde3ec] p-6 rounded bg-gray-50">
                <div>
                  <label className="block text-sm font-bold mb-2">Positive feedback provided?</label>
                  <select 
                    name="feedbackPositive" 
                    value={formData.feedbackPositive}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                  >
                    <option value="">Select...</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Unsafe acts/conditions discussed?</label>
                  <select 
                    name="feedbackUnsafe" 
                    value={formData.feedbackUnsafe}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                  >
                    <option value="">Select...</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold mb-1">Employee response / commitment:</label>
                  <textarea 
                    name="employeeResponse"
                    value={formData.employeeResponse}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-[#dde3ec] rounded h-24 text-sm focus:ring-2 focus:ring-[#C49A28] outline-none"
                  ></textarea>
                </div>
              </div>
            </section>

            {/* Recommendations Table */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-0 rounded-t flex justify-between items-center">
                <span>RECOMMENDATIONS / ACTIONS</span>
                <button 
                  type="button" 
                  onClick={addRecommendationRow}
                  className="bg-[#C49A28] text-white px-3 py-1 rounded text-xs hover:bg-[#a38021] transition-colors"
                >
                  + Add Row
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[#dde3ec]">
                  <thead>
                    <tr className="bg-gray-100 text-[#081C2E] text-sm">
                      <th className="border border-[#dde3ec] p-2 w-12">#</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Recommendation / Action</th>
                      <th className="border border-[#dde3ec] p-2 text-left w-1/4">Responsible</th>
                      <th className="border border-[#dde3ec] p-2 text-left w-40">Due Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.recommendations.map((rec, index) => (
                      <tr key={rec.id}>
                        <td className="border border-[#dde3ec] p-2 text-center text-sm">{index + 1}</td>
                        <td className="border border-[#dde3ec] p-2">
                          <input 
                            type="text" 
                            value={rec.action}
                            onChange={(e) => handleRecommendationChange(index, 'action', e.target.value)}
                            className="w-full p-1 text-sm outline-none focus:bg-yellow-50" 
                          />
                        </td>
                        <td className="border border-[#dde3ec] p-2">
                          <input 
                            type="text" 
                            value={rec.responsible}
                            onChange={(e) => handleRecommendationChange(index, 'responsible', e.target.value)}
                            className="w-full p-1 text-sm outline-none focus:bg-yellow-50" 
                          />
                        </td>
                        <td className="border border-[#dde3ec] p-2">
                          <input 
                            type="date" 
                            value={rec.dueDate}
                            onChange={(e) => handleRecommendationChange(index, 'dueDate', e.target.value)}
                            className="w-full p-1 text-sm outline-none focus:bg-yellow-50" 
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Sign-Off Section */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 rounded-t">
                SIGN-OFF
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[#dde3ec]">
                  <thead>
                    <tr className="bg-gray-100 text-[#081C2E] text-sm">
                      <th className="border border-[#dde3ec] p-2 text-left">Role</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Name (Digital Signature)</th>
                      <th className="border border-[#dde3ec] p-2 text-left w-48">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-[#dde3ec] p-2 font-bold text-sm bg-gray-50">Observer *</td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="text" 
                          name="signOffObserverName"
                          required
                          value={formData.signOffObserverName}
                          onChange={handleInputChange}
                          placeholder="Full Name"
                          className="w-full p-1 text-sm outline-none focus:bg-yellow-50" 
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="date" 
                          name="signOffObserverDate"
                          required
                          value={formData.signOffObserverDate}
                          onChange={handleInputChange}
                          className="w-full p-1 text-sm outline-none focus:bg-yellow-50" 
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#dde3ec] p-2 font-bold text-sm bg-gray-50">Employee *</td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="text" 
                          name="signOffEmployeeName"
                          required
                          value={formData.signOffEmployeeName}
                          onChange={handleInputChange}
                          placeholder="Full Name"
                          className="w-full p-1 text-sm outline-none focus:bg-yellow-50" 
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="date" 
                          name="signOffEmployeeDate"
                          required
                          value={formData.signOffEmployeeDate}
                          onChange={handleInputChange}
                          className="w-full p-1 text-sm outline-none focus:bg-yellow-50" 
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#dde3ec] p-2 font-bold text-sm bg-gray-50">HSE Follow-Up</td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="text" 
                          name="signOffHseName"
                          value={formData.signOffHseName}
                          onChange={handleInputChange}
                          placeholder="Full Name"
                          className="w-full p-1 text-sm outline-none focus:bg-yellow-50" 
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="date" 
                          name="signOffHseDate"
                          value={formData.signOffHseDate}
                          onChange={handleInputChange}
                          className="w-full p-1 text-sm outline-none focus:bg-yellow-50" 
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded text-sm">
                <strong>Error:</strong> {error}
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={mutation.isPending}
                className={`
                  bg-[#081C2E] text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg
                  hover:bg-[#1a3a5a] transition-all transform hover:-translate-y-1
                  disabled:opacity-50 disabled:cursor-not-allowed
                `}
              >
                {mutation.isPending ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : "Submit PTO Form"}
              </button>
            </div>
          </div>
        </form>

        {/* Revision Footer */}
        <div className="mt-8 text-[10px] text-gray-400 text-center uppercase tracking-widest">
          True East Mining Company — Integrated Management System — Confidential
        </div>
      </div>
    </Layout>
  );
}
