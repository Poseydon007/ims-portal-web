import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_003() {
  const formCode = "TE-IMS-FRM-HSE-003";
  const [submitted, setSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    reportNo: "",
    dateOfOccurrence: "",
    timeOfOccurrence: "",
    location: "",
    departmentSite: "",
    reportedBy: "",
    employeeId: "",
    classification: {
      unsafeAct: false,
      unsafeCondition: false,
      equipmentFailure: false,
      environmental: false,
      procedural: false,
      other: false,
      otherText: "",
    },
    description: "",
    contributingFactors: {
      fatigue: false,
      lackOfTraining: false,
      poorCommunication: false,
      inadequatePPE: false,
      equipmentDefect: false,
      weather: false,
      rushing: false,
      inadequateProcedure: false,
      other: false,
      otherText: "",
    },
    potentialSeverity: "",
    potentialLikelihood: "",
    actions: [{ id: 1, action: "", responsible: "", dueDate: "", status: "" }],
    signOff: {
      reportedByName: "",
      reportedByDate: "",
      supervisorName: "",
      supervisorDate: "",
      hseOfficerName: "",
      hseOfficerDate: "",
    },
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

  const handleCheckboxChange = (section: "classification" | "contributingFactors", field: string) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: !prev[section][field as keyof typeof prev.classification],
      },
    }));
  };

  const handleActionChange = (index: number, field: string, value: string) => {
    const newActions = [...formData.actions];
    newActions[index] = { ...newActions[index], [field]: value };
    setFormData((prev) => ({ ...prev, actions: newActions }));
  };

  const addActionRow = () => {
    setFormData((prev) => ({
      ...prev,
      actions: [...prev.actions, { id: prev.actions.length + 1, action: "", responsible: "", dueDate: "", status: "" }],
    }));
  };

  const handleSignOffChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      signOff: { ...prev.signOff, [field]: value },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const headers = [
      "Form Code",
      "Report No",
      "Date of Occurrence",
      "Time of Occurrence",
      "Location",
      "Department / Site",
      "Reported By",
      "Employee ID",
      "Classification: Unsafe Act",
      "Classification: Unsafe Condition",
      "Classification: Equipment Failure",
      "Classification: Environmental",
      "Classification: Procedural",
      "Classification: Other",
      "Classification: Other Text",
      "Description of Near Miss",
      "Factors: Fatigue / Inattention",
      "Factors: Lack of Training",
      "Factors: Poor Communication",
      "Factors: Inadequate PPE",
      "Factors: Equipment Defect",
      "Factors: Weather / Environment",
      "Factors: Rushing / Shortcut",
      "Factors: Inadequate Procedure",
      "Factors: Other",
      "Factors: Other Text",
      "Potential Severity",
      "Potential Likelihood",
      "Actions Taken",
      "Sign-off Reported By",
      "Sign-off Reported By Date",
      "Sign-off Supervisor",
      "Sign-off Supervisor Date",
      "Sign-off HSE Officer",
      "Sign-off HSE Officer Date",
    ];

    const values = [
      formCode,
      formData.reportNo,
      formData.dateOfOccurrence,
      formData.timeOfOccurrence,
      formData.location,
      formData.departmentSite,
      formData.reportedBy,
      formData.employeeId,
      formData.classification.unsafeAct ? "Yes" : "No",
      formData.classification.unsafeCondition ? "Yes" : "No",
      formData.classification.equipmentFailure ? "Yes" : "No",
      formData.classification.environmental ? "Yes" : "No",
      formData.classification.procedural ? "Yes" : "No",
      formData.classification.other ? "Yes" : "No",
      formData.classification.otherText,
      formData.description,
      formData.contributingFactors.fatigue ? "Yes" : "No",
      formData.contributingFactors.lackOfTraining ? "Yes" : "No",
      formData.contributingFactors.poorCommunication ? "Yes" : "No",
      formData.contributingFactors.inadequatePPE ? "Yes" : "No",
      formData.contributingFactors.equipmentDefect ? "Yes" : "No",
      formData.contributingFactors.weather ? "Yes" : "No",
      formData.contributingFactors.rushing ? "Yes" : "No",
      formData.contributingFactors.inadequateProcedure ? "Yes" : "No",
      formData.contributingFactors.other ? "Yes" : "No",
      formData.contributingFactors.otherText,
      formData.potentialSeverity,
      formData.potentialLikelihood,
      JSON.stringify(formData.actions),
      formData.signOff.reportedByName,
      formData.signOff.reportedByDate,
      formData.signOff.supervisorName,
      formData.signOff.supervisorDate,
      formData.signOff.hseOfficerName,
      formData.signOff.hseOfficerDate,
    ];

    mutation.mutate({ formCode, headers, values });
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6">
          <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-2">Form submitted successfully.</h2>
            <p className="mb-4">The near miss report has been recorded and the register has been updated.</p>
            <a
              href={sheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C49A28] text-white px-6 py-2 rounded hover:bg-[#A38122] transition-colors"
            >
              View register
            </a>
            <div className="mt-6">
              <Link href="/" className="text-[#081C2E] hover:underline">← Back to Portal Home</Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-6 font-['Nunito_Sans'] text-[#081C2E]">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-[#C49A28] hover:underline">← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">FRM</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="font-semibold text-[#081C2E]">Near Miss Report Form</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-3xl font-bold text-[#081C2E] mb-2 uppercase tracking-tight">Near Miss Report Form</h1>
          <p className="text-gray-600">Complete this form to report any near miss incident for investigation and corrective action.</p>
        </header>

        {/* Document Control Table */}
        <div className="overflow-x-auto mb-8 border border-[#dde3ec] rounded-lg shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#081C2E] text-white">
                <th className="p-3 border border-[#081C2E]">Document Code</th>
                <th className="p-3 border border-[#081C2E]">Revision</th>
                <th className="p-3 border border-[#081C2E]">Date</th>
                <th className="p-3 border border-[#081C2E]">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 border border-[#dde3ec] font-mono text-sm">TE-IMS-FRM-HSE-003</td>
                <td className="p-3 border border-[#dde3ec]">01</td>
                <td className="p-3 border border-[#dde3ec]">01 March 2026</td>
                <td className="p-3 border border-[#dde3ec]">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                    Approved for Implementation
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section 1: Report Details */}
          <section className="bg-white border border-[#dde3ec] rounded-lg overflow-hidden shadow-sm">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider text-sm">
              1. Report Details
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold">Near Miss Report No. *</label>
                <input
                  type="text"
                  name="reportNo"
                  required
                  value={formData.reportNo}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                  placeholder="e.g. NM-2026-001"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold">Date of Occurrence *</label>
                <input
                  type="date"
                  name="dateOfOccurrence"
                  required
                  value={formData.dateOfOccurrence}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold">Time of Occurrence *</label>
                <input
                  type="time"
                  name="timeOfOccurrence"
                  required
                  value={formData.timeOfOccurrence}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold">Location *</label>
                <input
                  type="text"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold">Department / Site *</label>
                <input
                  type="text"
                  name="departmentSite"
                  required
                  value={formData.departmentSite}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold">Reported By *</label>
                <input
                  type="text"
                  name="reportedBy"
                  required
                  value={formData.reportedBy}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold">Employee ID</label>
                <input
                  type="text"
                  name="employeeId"
                  value={formData.employeeId}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                />
              </div>
            </div>
          </section>

          {/* Section 2: Near Miss Classification */}
          <section className="bg-white border border-[#dde3ec] rounded-lg overflow-hidden shadow-sm">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider text-sm">
              2. Near Miss Classification
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { id: "unsafeAct", label: "Unsafe Act" },
                  { id: "unsafeCondition", label: "Unsafe Condition" },
                  { id: "equipmentFailure", label: "Equipment Failure" },
                  { id: "environmental", label: "Environmental" },
                  { id: "procedural", label: "Procedural" },
                  { id: "other", label: "Other" },
                ].map((item) => (
                  <label key={item.id} className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={formData.classification[item.id as keyof typeof formData.classification] as boolean}
                      onChange={() => handleCheckboxChange("classification", item.id)}
                      className="w-5 h-5 rounded border-gray-300 text-[#C49A28] focus:ring-[#C49A28]"
                    />
                    <span className="text-sm group-hover:text-[#C49A28] transition-colors">{item.label}</span>
                  </label>
                ))}
              </div>
              {formData.classification.other && (
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Please specify other classification..."
                    value={formData.classification.otherText}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      classification: { ...prev.classification, otherText: e.target.value }
                    }))}
                    className="w-full p-2 border-b border-[#dde3ec] focus:border-[#C49A28] outline-none transition-colors"
                  />
                </div>
              )}
            </div>
          </section>

          {/* Section 3: Description of Near Miss */}
          <section className="bg-white border border-[#dde3ec] rounded-lg overflow-hidden shadow-sm">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider text-sm">
              3. Description of Near Miss
            </div>
            <div className="p-6 space-y-2">
              <label className="block text-sm font-semibold">Describe what happened, what could have happened, and any contributing factors: *</label>
              <textarea
                name="description"
                required
                rows={5}
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-3 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none resize-y"
                placeholder="Provide a detailed description..."
              />
            </div>
          </section>

          {/* Section 4: Contributing Factors */}
          <section className="bg-white border border-[#dde3ec] rounded-lg overflow-hidden shadow-sm">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider text-sm">
              4. Contributing Factors
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { id: "fatigue", label: "Fatigue / Inattention" },
                  { id: "lackOfTraining", label: "Lack of Training" },
                  { id: "poorCommunication", label: "Poor Communication" },
                  { id: "inadequatePPE", label: "Inadequate PPE" },
                  { id: "equipmentDefect", label: "Equipment Defect" },
                  { id: "weather", label: "Weather / Environment" },
                  { id: "rushing", label: "Rushing / Shortcut" },
                  { id: "inadequateProcedure", label: "Inadequate Procedure" },
                  { id: "other", label: "Other" },
                ].map((item) => (
                  <label key={item.id} className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={formData.contributingFactors[item.id as keyof typeof formData.contributingFactors] as boolean}
                      onChange={() => handleCheckboxChange("contributingFactors", item.id)}
                      className="w-5 h-5 rounded border-gray-300 text-[#C49A28] focus:ring-[#C49A28]"
                    />
                    <span className="text-sm group-hover:text-[#C49A28] transition-colors">{item.label}</span>
                  </label>
                ))}
              </div>
              {formData.contributingFactors.other && (
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Please specify other factors..."
                    value={formData.contributingFactors.otherText}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      contributingFactors: { ...prev.contributingFactors, otherText: e.target.value }
                    }))}
                    className="w-full p-2 border-b border-[#dde3ec] focus:border-[#C49A28] outline-none transition-colors"
                  />
                </div>
              )}
            </div>
          </section>

          {/* Section 5: Risk Assessment */}
          <section className="bg-white border border-[#dde3ec] rounded-lg overflow-hidden shadow-sm">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider text-sm">
              5. Risk Assessment
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold mb-4 italic">What was the potential severity if the near miss had resulted in an incident?</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="block text-sm font-bold border-b border-[#dde3ec] pb-1">Potential Severity *</label>
                  <div className="flex flex-wrap gap-4">
                    {["Minor", "Moderate", "Major", "Catastrophic"].map((val) => (
                      <label key={val} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="potentialSeverity"
                          required
                          value={val}
                          checked={formData.potentialSeverity === val}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#C49A28] focus:ring-[#C49A28]"
                        />
                        <span className="text-sm">{val}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="block text-sm font-bold border-b border-[#dde3ec] pb-1">Potential Likelihood *</label>
                  <div className="flex flex-wrap gap-4">
                    {["Rare", "Unlikely", "Possible", "Likely"].map((val) => (
                      <label key={val} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="potentialLikelihood"
                          required
                          value={val}
                          checked={formData.potentialLikelihood === val}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#C49A28] focus:ring-[#C49A28]"
                        />
                        <span className="text-sm">{val}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Recommended Corrective Actions */}
          <section className="bg-white border border-[#dde3ec] rounded-lg overflow-hidden shadow-sm">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider text-sm flex justify-between items-center">
              <span>6. Recommended Corrective Actions</span>
              <button
                type="button"
                onClick={addActionRow}
                className="bg-[#C49A28] text-white text-xs px-3 py-1 rounded hover:bg-[#A38122] transition-colors"
              >
                + Add Action
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f4f6f9] text-[#081C2E] text-xs uppercase">
                    <th className="p-3 border-b border-[#dde3ec] w-12">#</th>
                    <th className="p-3 border-b border-[#dde3ec]">Action</th>
                    <th className="p-3 border-b border-[#dde3ec]">Responsible</th>
                    <th className="p-3 border-b border-[#dde3ec]">Due Date</th>
                    <th className="p-3 border-b border-[#dde3ec]">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.actions.map((row, index) => (
                    <tr key={row.id} className="bg-white">
                      <td className="p-3 border-b border-[#dde3ec] text-sm text-gray-500">{index + 1}</td>
                      <td className="p-2 border-b border-[#dde3ec]">
                        <input
                          type="text"
                          value={row.action}
                          onChange={(e) => handleActionChange(index, "action", e.target.value)}
                          className="w-full p-1 text-sm border-none focus:ring-0 outline-none"
                          placeholder="Action details..."
                        />
                      </td>
                      <td className="p-2 border-b border-[#dde3ec]">
                        <input
                          type="text"
                          value={row.responsible}
                          onChange={(e) => handleActionChange(index, "responsible", e.target.value)}
                          className="w-full p-1 text-sm border-none focus:ring-0 outline-none"
                          placeholder="Name..."
                        />
                      </td>
                      <td className="p-2 border-b border-[#dde3ec]">
                        <input
                          type="date"
                          value={row.dueDate}
                          onChange={(e) => handleActionChange(index, "dueDate", e.target.value)}
                          className="w-full p-1 text-sm border-none focus:ring-0 outline-none"
                        />
                      </td>
                      <td className="p-2 border-b border-[#dde3ec]">
                        <select
                          value={row.status}
                          onChange={(e) => handleActionChange(index, "status", e.target.value)}
                          className="w-full p-1 text-sm border-none bg-transparent focus:ring-0 outline-none"
                        >
                          <option value="">Select...</option>
                          <option value="Open">Open</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Sign-Off Section */}
          <section className="bg-white border border-[#dde3ec] rounded-lg overflow-hidden shadow-sm">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider text-sm">
              Sign-Off
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f4f6f9] text-[#081C2E] text-xs uppercase">
                    <th className="p-3 border-b border-[#dde3ec]">Role</th>
                    <th className="p-3 border-b border-[#dde3ec]">Name</th>
                    <th className="p-3 border-b border-[#dde3ec]">Signature (Full Name)</th>
                    <th className="p-3 border-b border-[#dde3ec]">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { role: "Reported By", key: "reportedBy" },
                    { role: "Supervisor", key: "supervisor" },
                    { role: "HSE Officer", key: "hseOfficer" },
                  ].map((item) => (
                    <tr key={item.key} className="bg-white">
                      <td className="p-3 border-b border-[#dde3ec] text-sm font-semibold">{item.role}</td>
                      <td className="p-2 border-b border-[#dde3ec]">
                        <input
                          type="text"
                          value={formData.signOff[`${item.key}Name` as keyof typeof formData.signOff]}
                          onChange={(e) => handleSignOffChange(`${item.key}Name`, e.target.value)}
                          className="w-full p-1 text-sm border-none focus:ring-0 outline-none"
                          placeholder="Name..."
                        />
                      </td>
                      <td className="p-2 border-b border-[#dde3ec]">
                        <input
                          type="text"
                          className="w-full p-1 text-sm border-none focus:ring-0 outline-none italic"
                          placeholder="Full name acts as signature"
                        />
                      </td>
                      <td className="p-2 border-b border-[#dde3ec]">
                        <input
                          type="date"
                          value={formData.signOff[`${item.key}Date` as keyof typeof formData.signOff]}
                          onChange={(e) => handleSignOffChange(`${item.key}Date`, e.target.value)}
                          className="w-full p-1 text-sm border-none focus:ring-0 outline-none"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Revision History */}
          <section className="bg-white border border-[#dde3ec] rounded-lg overflow-hidden shadow-sm opacity-60 grayscale hover:grayscale-0 transition-all">
            <div className="bg-gray-100 text-gray-700 px-4 py-1 font-bold uppercase tracking-wider text-[10px]">
              Revision History
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-[10px]">
                <thead>
                  <tr className="bg-gray-50 text-gray-600">
                    <th className="p-2 border-b border-[#dde3ec]">Rev</th>
                    <th className="p-2 border-b border-[#dde3ec]">Date</th>
                    <th className="p-2 border-b border-[#dde3ec]">Description of Changes</th>
                    <th className="p-2 border-b border-[#dde3ec]">Author</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border-b border-[#dde3ec]">00</td>
                    <td className="p-2 border-b border-[#dde3ec]">01 Mar 2026</td>
                    <td className="p-2 border-b border-[#dde3ec]">Initial approved release</td>
                    <td className="p-2 border-b border-[#dde3ec]">Joao Melo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Error Message */}
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={mutation.isLoading}
              className={`
                px-8 py-3 rounded-lg font-bold text-white transition-all shadow-lg
                ${mutation.isLoading 
                  ? "bg-gray-400 cursor-not-allowed" 
                  : "bg-[#081C2E] hover:bg-[#1a3a5a] active:transform active:scale-95"}
              `}
            >
              {mutation.isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : "Submit Near Miss Report"}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
