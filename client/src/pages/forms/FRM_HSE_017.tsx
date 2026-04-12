import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_017() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    drillType: "",
    scenarioDescription: "",
    datePlanned: "",
    timePlanned: "",
    locationArea: "",
    drillCoordinator: "",
    observersNominated: "",
    scenarios: {
      fire: false,
      explosion: false,
      chemicalSpill: false,
      medicalEmergency: false,
      confinedSpaceRescue: false,
      workingAtHeightRescue: false,
      lightningSevereWeather: false,
      buildingCollapse: false,
      securityBreach: false,
      vehicleIncident: false,
      flooding: false,
      other: false,
      otherText: "",
    },
    alarmInitiatedAt: "",
    assemblyCompleteAt: "",
    allClearGivenAt: "",
    totalEvacuationTime: "",
    totalPersonsMustered: "",
    missingPersons: "",
    performance: {
      alarmAudibility: "",
      emergencyTeamResponse: "",
      evacuationOrderliness: "",
      musterPointProcedure: "",
      communicationEffectiveness: "",
      equipmentAvailability: "",
      overallPerformance: "",
    },
    deviations: [
      { id: 1, deviation: "", correctiveAction: "", responsible: "", targetDate: "" },
    ],
    postDrillNotes: "",
    signOffCoordinatorName: "",
    signOffCoordinatorDate: "",
    signOffHseManagerName: "",
    signOffHseManagerDate: "",
    signOffSiteManagerName: "",
    signOffSiteManagerDate: "",
  });

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
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      scenarios: { ...prev.scenarios, [name]: checked },
    }));
  };

  const handlePerformanceChange = (criterion: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      performance: { ...prev.performance, [criterion]: value },
    }));
  };

  const handleDeviationChange = (index: number, field: string, value: string) => {
    const newDeviations = [...formData.deviations];
    newDeviations[index] = { ...newDeviations[index], [field]: value };
    setFormData((prev) => ({ ...prev, deviations: newDeviations }));
  };

  const addDeviationRow = () => {
    setFormData((prev) => ({
      ...prev,
      deviations: [
        ...prev.deviations,
        { id: prev.deviations.length + 1, deviation: "", correctiveAction: "", responsible: "", targetDate: "" },
      ],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const headers = [
      "Drill Type",
      "Scenario Description",
      "Date Planned",
      "Time Planned",
      "Location / Area",
      "Drill Coordinator",
      "Observers Nominated",
      "Scenarios Covered",
      "Alarm Initiated At",
      "Assembly Complete At",
      "All Clear Given At",
      "Total Evacuation Time",
      "Total Persons Mustered",
      "Missing Persons",
      "Alarm audibility and response",
      "Emergency team response time",
      "Evacuation orderliness",
      "Muster point procedure",
      "Communication effectiveness",
      "Equipment availability and condition",
      "Overall drill performance",
      "Deviations and Follow-Up Actions",
      "Post-Drill Review Notes",
      "Coordinator Signature",
      "Coordinator Date",
      "HSE Manager Signature",
      "HSE Manager Date",
      "Site Manager Signature",
      "Site Manager Date",
    ];

    const scenariosCovered = Object.entries(formData.scenarios)
      .filter(([key, val]) => val === true && key !== "otherText")
      .map(([key]) => key)
      .join(", ") + (formData.scenarios.other ? ` (Other: ${formData.scenarios.otherText})` : "");

    const deviationsSummary = formData.deviations
      .map((d) => `${d.deviation} | ${d.correctiveAction} | ${d.responsible} | ${d.targetDate}`)
      .join("; ");

    const values = [
      formData.drillType,
      formData.scenarioDescription,
      formData.datePlanned,
      formData.timePlanned,
      formData.locationArea,
      formData.drillCoordinator,
      formData.observersNominated,
      scenariosCovered,
      formData.alarmInitiatedAt,
      formData.assemblyCompleteAt,
      formData.allClearGivenAt,
      formData.totalEvacuationTime,
      formData.totalPersonsMustered,
      formData.missingPersons,
      formData.performance.alarmAudibility,
      formData.performance.emergencyTeamResponse,
      formData.performance.evacuationOrderliness,
      formData.performance.musterPointProcedure,
      formData.performance.communicationEffectiveness,
      formData.performance.equipmentAvailability,
      formData.performance.overallPerformance,
      deviationsSummary,
      formData.postDrillNotes,
      formData.signOffCoordinatorName,
      formData.signOffCoordinatorDate,
      formData.signOffHseManagerName,
      formData.signOffHseManagerDate,
      formData.signOffSiteManagerName,
      formData.signOffSiteManagerDate,
    ];

    mutation.mutate({
      formCode: "TE-IMS-FRM-HSE-017",
      headers,
      values,
    });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6">
          <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
            <p className="text-green-700 font-bold">Form submitted successfully.</p>
            <p className="text-green-600">
              View register:{" "}
              <a href={sheetUrl} target="_blank" rel="noopener noreferrer" className="underline font-semibold">
                Google Sheet
              </a>
            </p>
          </div>
          <Link href="/" className="text-[#081C2E] hover:underline">
            ← Back to Portal Home
          </Link>
        </div>
      </Layout>
    );
  }

  const performanceCriteria = [
    { key: "alarmAudibility", label: "Alarm audibility and response" },
    { key: "emergencyTeamResponse", label: "Emergency team response time" },
    { key: "evacuationOrderliness", label: "Evacuation orderliness" },
    { key: "musterPointProcedure", label: "Muster point procedure" },
    { key: "communicationEffectiveness", label: "Communication effectiveness" },
    { key: "equipmentAvailability", label: "Equipment availability and condition" },
    { key: "overallPerformance", label: "Overall drill performance" },
  ];

  const ratingOptions = ["Excellent", "Good", "Fair", "Poor"];

  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-6 font-['Nunito_Sans'] text-[#081C2E]">
        <div className="mb-6">
          <Link href="/" className="text-[#081C2E] hover:underline mb-4 block">
            ← Portal Home
          </Link>
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="text-gray-500 hover:text-[#C49A28]">Portal Home</Link> <span className="text-gray-400 mx-1">/</span> <Link href="/docs/frm" className="text-gray-500 hover:text-[#C49A28]">FRM</Link> <span className="text-gray-400 mx-1">/</span> <span className="font-semibold text-[#081C2E]">Emergency Drill Planning and Record</span>
          </nav>
        </div>

        <div className="border border-[#dde3ec] mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#081C2E] text-white">
                <th colSpan={4} className="p-3 text-center text-xl font-bold uppercase">
                  EMERGENCY DRILL PLANNING AND RECORD
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#dde3ec]">
                <td className="p-2 font-bold bg-gray-50 w-1/4">Document</td>
                <td className="p-2 w-1/4">TE-IMS-FRM-HSE-017</td>
                <td className="p-2 font-bold bg-gray-50 w-1/4">Revision</td>
                <td className="p-2 w-1/4">01</td>
              </tr>
              <tr className="border-b border-[#dde3ec]">
                <td className="p-2 font-bold bg-gray-50">Date</td>
                <td className="p-2">01 March 2026</td>
                <td className="p-2 font-bold bg-gray-50">Status</td>
                <td className="p-2 text-green-700 font-semibold">Approved for Implementation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section 1: Drill Planning */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase mb-4">
              1. Drill Planning
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-[#dde3ec] p-4 rounded">
              <div className="flex flex-col">
                <label className="font-semibold mb-1">Drill Type *</label>
                <input
                  type="text"
                  name="drillType"
                  required
                  value={formData.drillType}
                  onChange={handleInputChange}
                  className="border border-[#dde3ec] p-2 rounded"
                  placeholder="e.g. Announced, Unannounced"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold mb-1">Location / Area *</label>
                <input
                  type="text"
                  name="locationArea"
                  required
                  value={formData.locationArea}
                  onChange={handleInputChange}
                  className="border border-[#dde3ec] p-2 rounded"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold mb-1">Date Planned *</label>
                <input
                  type="date"
                  name="datePlanned"
                  required
                  value={formData.datePlanned}
                  onChange={handleInputChange}
                  className="border border-[#dde3ec] p-2 rounded"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold mb-1">Time Planned *</label>
                <input
                  type="time"
                  name="timePlanned"
                  required
                  value={formData.timePlanned}
                  onChange={handleInputChange}
                  className="border border-[#dde3ec] p-2 rounded"
                />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="font-semibold mb-1">Scenario Description *</label>
                <textarea
                  name="scenarioDescription"
                  required
                  rows={3}
                  value={formData.scenarioDescription}
                  onChange={handleInputChange}
                  className="border border-[#dde3ec] p-2 rounded"
                ></textarea>
              </div>
              <div className="flex flex-col">
                <label className="font-semibold mb-1">Drill Coordinator *</label>
                <input
                  type="text"
                  name="drillCoordinator"
                  required
                  value={formData.drillCoordinator}
                  onChange={handleInputChange}
                  className="border border-[#dde3ec] p-2 rounded"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold mb-1">Observers Nominated</label>
                <input
                  type="text"
                  name="observersNominated"
                  value={formData.observersNominated}
                  onChange={handleInputChange}
                  className="border border-[#dde3ec] p-2 rounded"
                />
              </div>
            </div>
          </section>

          {/* Section 2: Emergency Scenarios */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase mb-4">
              2. Emergency Scenarios
            </div>
            <p className="mb-4 italic">Select the scenario(s) covered in this drill:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border border-[#dde3ec] p-4 rounded">
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="fire" checked={formData.scenarios.fire} onChange={handleCheckboxChange} />
                <span>Fire</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="explosion" checked={formData.scenarios.explosion} onChange={handleCheckboxChange} />
                <span>Explosion</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="chemicalSpill" checked={formData.scenarios.chemicalSpill} onChange={handleCheckboxChange} />
                <span>Chemical Spill</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="medicalEmergency" checked={formData.scenarios.medicalEmergency} onChange={handleCheckboxChange} />
                <span>Medical Emergency</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="confinedSpaceRescue" checked={formData.scenarios.confinedSpaceRescue} onChange={handleCheckboxChange} />
                <span>Confined Space Rescue</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="workingAtHeightRescue" checked={formData.scenarios.workingAtHeightRescue} onChange={handleCheckboxChange} />
                <span>Working at Height Rescue</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="lightningSevereWeather" checked={formData.scenarios.lightningSevereWeather} onChange={handleCheckboxChange} />
                <span>Lightning / Severe Weather</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="buildingCollapse" checked={formData.scenarios.buildingCollapse} onChange={handleCheckboxChange} />
                <span>Building Collapse</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="securityBreach" checked={formData.scenarios.securityBreach} onChange={handleCheckboxChange} />
                <span>Security Breach</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="vehicleIncident" checked={formData.scenarios.vehicleIncident} onChange={handleCheckboxChange} />
                <span>Vehicle Incident</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="flooding" checked={formData.scenarios.flooding} onChange={handleCheckboxChange} />
                <span>Flooding</span>
              </label>
              <div className="flex items-center space-x-2 md:col-span-3">
                <input type="checkbox" name="other" checked={formData.scenarios.other} onChange={handleCheckboxChange} />
                <span>Other:</span>
                <input
                  type="text"
                  name="otherText"
                  disabled={!formData.scenarios.other}
                  value={formData.scenarios.otherText}
                  onChange={(e) => setFormData(prev => ({ ...prev, scenarios: { ...prev.scenarios, otherText: e.target.value } }))}
                  className="border-b border-[#dde3ec] outline-none flex-grow"
                />
              </div>
            </div>
          </section>

          {/* Section 3: Drill Execution Record */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase mb-4">
              3. Drill Execution Record
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border border-[#dde3ec] p-4 rounded">
              <div className="flex flex-col">
                <label className="font-semibold mb-1">Alarm Initiated At</label>
                <input
                  type="time"
                  name="alarmInitiatedAt"
                  value={formData.alarmInitiatedAt}
                  onChange={handleInputChange}
                  className="border border-[#dde3ec] p-2 rounded"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold mb-1">Assembly Complete At</label>
                <input
                  type="time"
                  name="assemblyCompleteAt"
                  value={formData.assemblyCompleteAt}
                  onChange={handleInputChange}
                  className="border border-[#dde3ec] p-2 rounded"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold mb-1">All Clear Given At</label>
                <input
                  type="time"
                  name="allClearGivenAt"
                  value={formData.allClearGivenAt}
                  onChange={handleInputChange}
                  className="border border-[#dde3ec] p-2 rounded"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold mb-1">Total Evacuation Time</label>
                <input
                  type="text"
                  name="totalEvacuationTime"
                  value={formData.totalEvacuationTime}
                  onChange={handleInputChange}
                  className="border border-[#dde3ec] p-2 rounded"
                  placeholder="e.g. 4 mins 30 secs"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold mb-1">Total Persons Mustered</label>
                <input
                  type="number"
                  name="totalPersonsMustered"
                  value={formData.totalPersonsMustered}
                  onChange={handleInputChange}
                  className="border border-[#dde3ec] p-2 rounded"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold mb-1">Missing Persons</label>
                <input
                  type="text"
                  name="missingPersons"
                  value={formData.missingPersons}
                  onChange={handleInputChange}
                  className="border border-[#dde3ec] p-2 rounded"
                  placeholder="Names or 'None'"
                />
              </div>
            </div>
          </section>

          {/* Section 4: Performance Assessment */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase mb-4">
              4. Performance Assessment
            </div>
            <div className="overflow-x-auto border border-[#dde3ec] rounded">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#081C2E] text-white">
                    <th className="p-3 text-left border border-[#dde3ec]">Criteria</th>
                    {ratingOptions.map(option => (
                      <th key={option} className="p-3 text-center border border-[#dde3ec] w-24">{option}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {performanceCriteria.map((criterion) => (
                    <tr key={criterion.key} className="border-b border-[#dde3ec] hover:bg-gray-50">
                      <td className="p-3 font-semibold border border-[#dde3ec]">{criterion.label}</td>
                      {ratingOptions.map(option => (
                        <td key={option} className="p-3 text-center border border-[#dde3ec]">
                          <input
                            type="radio"
                            name={criterion.key}
                            value={option}
                            checked={(formData.performance as any)[criterion.key] === option}
                            onChange={() => handlePerformanceChange(criterion.key, option)}
                            className="w-4 h-4 accent-[#C49A28]"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5: Deviations and Follow-Up Actions */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase mb-4 flex justify-between items-center">
              <span>5. Deviations and Follow-Up Actions</span>
              <button
                type="button"
                onClick={addDeviationRow}
                className="bg-[#C49A28] text-white px-3 py-1 rounded text-sm hover:bg-[#a38021] transition-colors"
              >
                + Add Row
              </button>
            </div>
            <div className="overflow-x-auto border border-[#dde3ec] rounded">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#081C2E] text-white text-sm">
                    <th className="p-2 border border-[#dde3ec] w-12 text-center">#</th>
                    <th className="p-2 border border-[#dde3ec]">Deviation</th>
                    <th className="p-2 border border-[#dde3ec]">Corrective Action</th>
                    <th className="p-2 border border-[#dde3ec]">Responsible</th>
                    <th className="p-2 border border-[#dde3ec] w-40">Target Date</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.deviations.map((row, index) => (
                    <tr key={row.id} className="border-b border-[#dde3ec]">
                      <td className="p-2 border border-[#dde3ec] text-center">{index + 1}</td>
                      <td className="p-2 border border-[#dde3ec]">
                        <input
                          type="text"
                          value={row.deviation}
                          onChange={(e) => handleDeviationChange(index, "deviation", e.target.value)}
                          className="w-full p-1 outline-none"
                        />
                      </td>
                      <td className="p-2 border border-[#dde3ec]">
                        <input
                          type="text"
                          value={row.correctiveAction}
                          onChange={(e) => handleDeviationChange(index, "correctiveAction", e.target.value)}
                          className="w-full p-1 outline-none"
                        />
                      </td>
                      <td className="p-2 border border-[#dde3ec]">
                        <input
                          type="text"
                          value={row.responsible}
                          onChange={(e) => handleDeviationChange(index, "responsible", e.target.value)}
                          className="w-full p-1 outline-none"
                        />
                      </td>
                      <td className="p-2 border border-[#dde3ec]">
                        <input
                          type="date"
                          value={row.targetDate}
                          onChange={(e) => handleDeviationChange(index, "targetDate", e.target.value)}
                          className="w-full p-1 outline-none"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 6: Post-Drill Review Notes */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase mb-4">
              6. Post-Drill Review Notes
            </div>
            <textarea
              name="postDrillNotes"
              rows={5}
              value={formData.postDrillNotes}
              onChange={handleInputChange}
              className="w-full border border-[#dde3ec] p-3 rounded"
              placeholder="Enter any additional observations, notes or feedback from the post-drill review meeting..."
            ></textarea>
          </section>

          {/* Sign-Off */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase mb-4">
              Sign-Off
            </div>
            <div className="overflow-x-auto border border-[#dde3ec] rounded">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#081C2E] text-white">
                    <th className="p-2 border border-[#dde3ec]">Role</th>
                    <th className="p-2 border border-[#dde3ec]">Name / Signature</th>
                    <th className="p-2 border border-[#dde3ec] w-48">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#dde3ec]">
                    <td className="p-3 font-bold bg-gray-50 border border-[#dde3ec]">Drill Coordinator</td>
                    <td className="p-2 border border-[#dde3ec]">
                      <input
                        type="text"
                        name="signOffCoordinatorName"
                        value={formData.signOffCoordinatorName}
                        onChange={handleInputChange}
                        placeholder="Full Name (Signature)"
                        className="w-full p-1 outline-none"
                      />
                    </td>
                    <td className="p-2 border border-[#dde3ec]">
                      <input
                        type="date"
                        name="signOffCoordinatorDate"
                        value={formData.signOffCoordinatorDate}
                        onChange={handleInputChange}
                        className="w-full p-1 outline-none"
                      />
                    </td>
                  </tr>
                  <tr className="border-b border-[#dde3ec]">
                    <td className="p-3 font-bold bg-gray-50 border border-[#dde3ec]">HSE Manager</td>
                    <td className="p-2 border border-[#dde3ec]">
                      <input
                        type="text"
                        name="signOffHseManagerName"
                        value={formData.signOffHseManagerName}
                        onChange={handleInputChange}
                        placeholder="Full Name (Signature)"
                        className="w-full p-1 outline-none"
                      />
                    </td>
                    <td className="p-2 border border-[#dde3ec]">
                      <input
                        type="date"
                        name="signOffHseManagerDate"
                        value={formData.signOffHseManagerDate}
                        onChange={handleInputChange}
                        className="w-full p-1 outline-none"
                      />
                    </td>
                  </tr>
                  <tr className="border-b border-[#dde3ec]">
                    <td className="p-3 font-bold bg-gray-50 border border-[#dde3ec]">Site Manager</td>
                    <td className="p-2 border border-[#dde3ec]">
                      <input
                        type="text"
                        name="signOffSiteManagerName"
                        value={formData.signOffSiteManagerName}
                        onChange={handleInputChange}
                        placeholder="Full Name (Signature)"
                        className="w-full p-1 outline-none"
                      />
                    </td>
                    <td className="p-2 border border-[#dde3ec]">
                      <input
                        type="date"
                        name="signOffSiteManagerDate"
                        value={formData.signOffSiteManagerDate}
                        onChange={handleInputChange}
                        className="w-full p-1 outline-none"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-400 p-4 text-red-700">
              {error}
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={mutation.isPending}
              className="bg-[#081C2E] text-white px-8 py-3 rounded font-bold uppercase hover:bg-[#1a3a5c] transition-colors disabled:opacity-50 flex items-center"
            >
              {mutation.isPending ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                "Submit Drill Record"
              )}
            </button>
          </div>
        </form>

        <div className="mt-12 border-t border-[#dde3ec] pt-6">
          <h3 className="font-bold text-lg mb-4 uppercase">Revision History</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border border-[#dde3ec] text-left">Rev</th>
                <th className="p-2 border border-[#dde3ec] text-left">Date</th>
                <th className="p-2 border border-[#dde3ec] text-left">Description of Changes</th>
                <th className="p-2 border border-[#dde3ec] text-left">Author</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-[#dde3ec]">00</td>
                <td className="p-2 border border-[#dde3ec]">01 Mar 2026</td>
                <td className="p-2 border border-[#dde3ec]">Initial approved release</td>
                <td className="p-2 border border-[#dde3ec]">Joao Melo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
