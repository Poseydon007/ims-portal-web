import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_009() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    location: "",
    department: "",
    equipmentTask: "",
    jobDescription: "",
    assessedBy: "",
    employeeId: "",
    // Step 1
    workScopeUnderstood: false,
    ptwRequired: false,
    groupIsolationRequired: false,
    performedTaskBefore: false,
    // Step 2 - Energy Sources
    hazardChemical: false,
    hazardMechanical: false,
    hazardTemperature: false,
    hazardNoise: false,
    hazardIgnition: false,
    hazardElectrical: false,
    hazardPressure: false,
    // Step 2 - Mobile Plant
    hazardLicences: false,
    hazardVehicleInteraction: false,
    hazardPedestrians: false,
    hazardCranes: false,
    hazardRotatingEquipment: false,
    // Step 2 - Slips, Trips & Falls
    hazardWorkingAtHeights: false,
    hazardSlipperySurfaces: false,
    hazardUnevenSurfaces: false,
    hazardTripHazards: false,
    hazardExcavationEdges: false,
    // Step 2 - Manual Handling
    hazardFatigue: false,
    hazardRepetitiveTask: false,
    hazardPinchingCrushing: false,
    hazardTwistingLifting: false,
    hazardWeightMass: false,
    hazardRestrictiveArea: false,
    // Step 2 - Dust, Fumes
    hazardDustPollutants: false,
    hazardHazardousSubstances: false,
    hazardFumesVapors: false,
    // Step 2 - Access & Environment
    hazardConfinedSpace: false,
    hazardHazardousArea: false,
    hazardInsufficientLight: false,
    hazardBarricadingRequired: false,
    hazardInadequateGuarding: false,
    hazardOtherWorkVicinity: false,
    hazardWeatherConditions: false,
    // Step 2 - KSA Specific
    hazardHeatStress: false,
    hazardDehydration: false,
    hazardWildlife: false,
    hazardSandstorm: false,
    hazardRadiation: false,
    // Step 3
    riskLikelihood: "",
    riskConsequence: "",
    riskScore: "",
    // Step 4 - Safety Equipment
    equipPpe: false,
    equipHarness: false,
    equipEyeWash: false,
    equipBarricading: false,
    equipRadio: false,
    equipPlatform: false,
    equipFireExtinguisher: false,
    equipFirstAidKit: false,
    // Step 5
    allHazardsControlled: false,
    stayAlert: false,
    maintainHousekeeping: false,
    // Sign-off
    workerName: "",
    workerSignature: "",
    workerDate: "",
    supervisorName: "",
    supervisorSignature: "",
    supervisorDate: "",
  });

  const [hazards, setHazards] = useState([{ id: 1, hazard: "", control: "", done: false }]);
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
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleHazardChange = (index: number, field: string, value: any) => {
    const newHazards = [...hazards];
    newHazards[index] = { ...newHazards[index], [field]: value };
    setHazards(newHazards);
  };

  const addHazardRow = () => {
    setHazards([...hazards, { id: hazards.length + 1, hazard: "", control: "", done: false }]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const headers = [
      "Date", "Time", "Location", "Department", "Equipment/Task", "Job Description", "Assessed By", "Employee ID",
      "Work Scope Understood", "PTW Required", "Group Isolation Required", "Performed Task Before",
      "Chemical Hazard", "Mechanical Hazard", "Temperature Hazard", "Noise Hazard", "Ignition Hazard", "Electrical Hazard", "Pressure Hazard",
      "Licences Required", "Vehicle Interaction", "Pedestrians", "Cranes/Lifting", "Rotating Equipment",
      "Working at Heights", "Slippery Surfaces", "Uneven Surfaces", "Trip Hazards", "Excavation Edges",
      "Fatigue", "Repetitive Task", "Pinching/Crushing", "Twisting/Lifting", "Weight/Mass", "Restrictive Area",
      "Dust/Pollutants", "Hazardous Substances", "Fumes/Vapors",
      "Confined Space", "Hazardous Area", "Insufficient Light", "Barricading Required", "Inadequate Guarding", "Other Work Vicinity", "Weather Conditions",
      "Heat Stress", "Dehydration", "Wildlife", "Sandstorm", "Radiation",
      "Risk Likelihood", "Risk Consequence", "Risk Score",
      "PPE", "Harness/Lanyard", "Eye Wash", "Barricading Equip", "Radio/Comms", "Platform/Step", "Fire Extinguisher", "First Aid Kit",
      "Hazards & Controls",
      "All Hazards Controlled", "Stay Alert", "Maintain Housekeeping",
      "Worker Name", "Worker Date", "Supervisor Name", "Supervisor Date"
    ];

    const hazardString = hazards.map(h => `${h.hazard} -> ${h.control} [${h.done ? 'DONE' : 'PENDING'}]`).join("; ");

    const values = [
      formData.date, formData.time, formData.location, formData.department, formData.equipmentTask, formData.jobDescription, formData.assessedBy, formData.employeeId,
      formData.workScopeUnderstood ? "Yes" : "No", formData.ptwRequired ? "Yes" : "No", formData.groupIsolationRequired ? "Yes" : "No", formData.performedTaskBefore ? "Yes" : "No",
      formData.hazardChemical ? "Yes" : "No", formData.hazardMechanical ? "Yes" : "No", formData.hazardTemperature ? "Yes" : "No", formData.hazardNoise ? "Yes" : "No", formData.hazardIgnition ? "Yes" : "No", formData.hazardElectrical ? "Yes" : "No", formData.hazardPressure ? "Yes" : "No",
      formData.hazardLicences ? "Yes" : "No", formData.hazardVehicleInteraction ? "Yes" : "No", formData.hazardPedestrians ? "Yes" : "No", formData.hazardCranes ? "Yes" : "No", formData.hazardRotatingEquipment ? "Yes" : "No",
      formData.hazardWorkingAtHeights ? "Yes" : "No", formData.hazardSlipperySurfaces ? "Yes" : "No", formData.hazardUnevenSurfaces ? "Yes" : "No", formData.hazardTripHazards ? "Yes" : "No", formData.hazardExcavationEdges ? "Yes" : "No",
      formData.hazardFatigue ? "Yes" : "No", formData.hazardRepetitiveTask ? "Yes" : "No", formData.hazardPinchingCrushing ? "Yes" : "No", formData.hazardTwistingLifting ? "Yes" : "No", formData.hazardWeightMass ? "Yes" : "No", formData.hazardRestrictiveArea ? "Yes" : "No",
      formData.hazardDustPollutants ? "Yes" : "No", formData.hazardHazardousSubstances ? "Yes" : "No", formData.hazardFumesVapors ? "Yes" : "No",
      formData.hazardConfinedSpace ? "Yes" : "No", formData.hazardHazardousArea ? "Yes" : "No", formData.hazardInsufficientLight ? "Yes" : "No", formData.hazardBarricadingRequired ? "Yes" : "No", formData.hazardInadequateGuarding ? "Yes" : "No", formData.hazardOtherWorkVicinity ? "Yes" : "No", formData.hazardWeatherConditions ? "Yes" : "No",
      formData.hazardHeatStress ? "Yes" : "No", formData.hazardDehydration ? "Yes" : "No", formData.hazardWildlife ? "Yes" : "No", formData.hazardSandstorm ? "Yes" : "No", formData.hazardRadiation ? "Yes" : "No",
      formData.riskLikelihood, formData.riskConsequence, formData.riskScore,
      formData.equipPpe ? "Yes" : "No", formData.equipHarness ? "Yes" : "No", formData.equipEyeWash ? "Yes" : "No", formData.equipBarricading ? "Yes" : "No", formData.equipRadio ? "Yes" : "No", formData.equipPlatform ? "Yes" : "No", formData.equipFireExtinguisher ? "Yes" : "No", formData.equipFirstAidKit ? "Yes" : "No",
      hazardString,
      formData.allHazardsControlled ? "Yes" : "No", formData.stayAlert ? "Yes" : "No", formData.maintainHousekeeping ? "Yes" : "No",
      formData.workerName, formData.workerDate, formData.supervisorName, formData.supervisorDate
    ];

    mutation.mutate({
      formCode: "TE-IMS-FRM-HSE-009",
      headers,
      values,
    });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 text-center">
          <h2 className="text-2xl font-bold text-[#081C2E] mb-4">Form Submitted Successfully</h2>
          <p className="mb-6">Your Take 5 Hazard Assessment has been recorded.</p>
          <a 
            href={sheetUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#C49A28] text-white px-6 py-2 rounded hover:bg-[#a38021] transition-colors"
          >
            View Register
          </a>
          <div className="mt-8">
            <Link href="/" className="text-[#081C2E] underline">Return to Portal Home</Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-6 bg-[#f4f6f9] min-h-screen">
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-[#081C2E] hover:underline">← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/docs/frm" className="text-gray-600 hover:text-[#C49A28] transition-colors cursor-pointer">FRM</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="font-semibold text-[#081C2E]">Take 5 Hazard Assessment Form</span>
        </nav>

        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg overflow-hidden border border-[#dde3ec]">
          {/* Header Section */}
          <div className="bg-[#081C2E] p-4 text-white flex justify-between items-center">
            <h1 className="text-xl font-bold uppercase tracking-wider">Take 5 Hazard Assessment Form</h1>
            <div className="text-right text-xs">
              <p>TE-IMS-FRM-HSE-009</p>
              <p>Rev 01 | April 2026</p>
            </div>
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
                    <td className="border border-[#dde3ec] p-2">TE-IMS-FRM-HSE-009</td>
                    <td className="border border-[#dde3ec] p-2">01</td>
                    <td className="border border-[#dde3ec] p-2">April 2026</td>
                    <td className="border border-[#dde3ec] p-2 text-green-600 font-semibold">Approved</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Basic Info Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded border border-[#dde3ec]">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-[#081C2E]">Date *</label>
                <input type="date" name="date" required value={formData.date} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-[#081C2E]">Time *</label>
                <input type="time" name="time" required value={formData.time} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-[#081C2E]">Location / Site *</label>
                <input type="text" name="location" required value={formData.location} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-[#081C2E]">Department *</label>
                <input type="text" name="department" required value={formData.department} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="block text-sm font-bold text-[#081C2E]">Equipment / Task *</label>
                <input type="text" name="equipmentTask" required value={formData.equipmentTask} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="block text-sm font-bold text-[#081C2E]">Job Description *</label>
                <textarea name="jobDescription" required value={formData.jobDescription} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded h-20" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-[#081C2E]">Assessed By *</label>
                <input type="text" name="assessedBy" required value={formData.assessedBy} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-[#081C2E]">Employee ID *</label>
                <input type="text" name="employeeId" required value={formData.employeeId} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded" />
              </div>
            </div>

            {/* Step 1 */}
            <section>
              <div className="bg-[#081C2E] text-white p-2 font-bold mb-4">STEP 1 — STOP & THINK THROUGH THE TASK</div>
              <div className="space-y-3 border border-[#dde3ec] p-4 rounded">
                {[
                  { label: "Work scope and methods understood?", name: "workScopeUnderstood" },
                  { label: "Permit to Work (PTW) required? (If yes, use PTW + JHA)", name: "ptwRequired" },
                  { label: "Group isolation required? (If yes, use PTW + JHA)", name: "groupIsolationRequired" },
                  { label: "Have you performed this task before?", name: "performedTaskBefore" },
                ].map((item) => (
                  <div key={item.name} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-sm">{item.label}</span>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 text-sm cursor-pointer">
                        <input type="checkbox" name={item.name} checked={(formData as any)[item.name]} onChange={handleInputChange} className="w-4 h-4 accent-[#C49A28]" />
                        Yes
                      </label>
                    </div>
                  </div>
                ))}
                <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 text-xs italic">
                  If any answer indicates a higher-risk situation, STOP and consult your supervisor before proceeding.
                </div>
              </div>
            </section>

            {/* Step 2 */}
            <section>
              <div className="bg-[#081C2E] text-white p-2 font-bold mb-4">STEP 2 — IDENTIFY THE HAZARDS (tick all that apply)</div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border border-[#dde3ec] p-4 rounded">
                {/* Energy Sources */}
                <div className="space-y-2">
                  <h3 className="font-bold text-[#C49A28] border-b border-[#dde3ec] pb-1 text-sm">Energy Sources</h3>
                  <div className="space-y-1">
                    {[
                      { label: "Chemical", name: "hazardChemical" },
                      { label: "Mechanical", name: "hazardMechanical" },
                      { label: "Temperature / Heat", name: "hazardTemperature" },
                      { label: "Noise", name: "hazardNoise" },
                      { label: "Ignition sources", name: "hazardIgnition" },
                      { label: "Electrical", name: "hazardElectrical" },
                      { label: "Pressure", name: "hazardPressure" },
                    ].map(h => (
                      <label key={h.name} className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-50 p-1 rounded">
                        <input type="checkbox" name={h.name} checked={(formData as any)[h.name]} onChange={handleInputChange} className="w-4 h-4 accent-[#C49A28]" />
                        {h.label}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Mobile Plant */}
                <div className="space-y-2">
                  <h3 className="font-bold text-[#C49A28] border-b border-[#dde3ec] pb-1 text-sm">Mobile Plant & Equipment</h3>
                  <div className="space-y-1">
                    {[
                      { label: "Licences / tickets required", name: "hazardLicences" },
                      { label: "Vehicle interaction", name: "hazardVehicleInteraction" },
                      { label: "Pedestrians", name: "hazardPedestrians" },
                      { label: "Cranes / lifting", name: "hazardCranes" },
                      { label: "Rotating equipment / drill rig", name: "hazardRotatingEquipment" },
                    ].map(h => (
                      <label key={h.name} className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-50 p-1 rounded">
                        <input type="checkbox" name={h.name} checked={(formData as any)[h.name]} onChange={handleInputChange} className="w-4 h-4 accent-[#C49A28]" />
                        {h.label}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Slips, Trips & Falls */}
                <div className="space-y-2">
                  <h3 className="font-bold text-[#C49A28] border-b border-[#dde3ec] pb-1 text-sm">Slips, Trips & Falls</h3>
                  <div className="space-y-1">
                    {[
                      { label: "Working at heights", name: "hazardWorkingAtHeights" },
                      { label: "Slippery surfaces", name: "hazardSlipperySurfaces" },
                      { label: "Steps / uneven surfaces", name: "hazardUnevenSurfaces" },
                      { label: "Trip hazards", name: "hazardTripHazards" },
                      { label: "Excavation edges / unstable ground", name: "hazardExcavationEdges" },
                    ].map(h => (
                      <label key={h.name} className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-50 p-1 rounded">
                        <input type="checkbox" name={h.name} checked={(formData as any)[h.name]} onChange={handleInputChange} className="w-4 h-4 accent-[#C49A28]" />
                        {h.label}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Manual Handling */}
                <div className="space-y-2">
                  <h3 className="font-bold text-[#C49A28] border-b border-[#dde3ec] pb-1 text-sm">Manual Handling</h3>
                  <div className="space-y-1">
                    {[
                      { label: "Fatigue", name: "hazardFatigue" },
                      { label: "Repetitive task", name: "hazardRepetitiveTask" },
                      { label: "Pinching / crushing", name: "hazardPinchingCrushing" },
                      { label: "Twisting / lifting technique", name: "hazardTwistingLifting" },
                      { label: "Weight / mass", name: "hazardWeightMass" },
                      { label: "Restrictive area / workstation", name: "hazardRestrictiveArea" },
                    ].map(h => (
                      <label key={h.name} className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-50 p-1 rounded">
                        <input type="checkbox" name={h.name} checked={(formData as any)[h.name]} onChange={handleInputChange} className="w-4 h-4 accent-[#C49A28]" />
                        {h.label}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Dust & Fumes */}
                <div className="space-y-2">
                  <h3 className="font-bold text-[#C49A28] border-b border-[#dde3ec] pb-1 text-sm">Dust, Fumes & Substances</h3>
                  <div className="space-y-1">
                    {[
                      { label: "Dust / pollutants", name: "hazardDustPollutants" },
                      { label: "Hazardous substances", name: "hazardHazardousSubstances" },
                      { label: "Fumes / vapors", name: "hazardFumesVapors" },
                    ].map(h => (
                      <label key={h.name} className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-50 p-1 rounded">
                        <input type="checkbox" name={h.name} checked={(formData as any)[h.name]} onChange={handleInputChange} className="w-4 h-4 accent-[#C49A28]" />
                        {h.label}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Access & Environment */}
                <div className="space-y-2">
                  <h3 className="font-bold text-[#C49A28] border-b border-[#dde3ec] pb-1 text-sm">Access & Environment</h3>
                  <div className="space-y-1">
                    {[
                      { label: "Confined space", name: "hazardConfinedSpace" },
                      { label: "Hazardous area", name: "hazardHazardousArea" },
                      { label: "Insufficient light", name: "hazardInsufficientLight" },
                      { label: "Barricading required", name: "hazardBarricadingRequired" },
                      { label: "Inadequate machine guarding", name: "hazardInadequateGuarding" },
                      { label: "Other work in vicinity / above", name: "hazardOtherWorkVicinity" },
                      { label: "Weather conditions", name: "hazardWeatherConditions" },
                    ].map(h => (
                      <label key={h.name} className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-50 p-1 rounded">
                        <input type="checkbox" name={h.name} checked={(formData as any)[h.name]} onChange={handleInputChange} className="w-4 h-4 accent-[#C49A28]" />
                        {h.label}
                      </label>
                    ))}
                  </div>
                </div>

                {/* KSA Specific */}
                <div className="space-y-2 lg:col-span-3">
                  <h3 className="font-bold text-[#C49A28] border-b border-[#dde3ec] pb-1 text-sm">KSA / Site-Specific</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {[
                      { label: "Heat stress / sun exposure", name: "hazardHeatStress" },
                      { label: "Dehydration", name: "hazardDehydration" },
                      { label: "Snakes / scorpions / wildlife", name: "hazardWildlife" },
                      { label: "Sandstorm / low visibility", name: "hazardSandstorm" },
                      { label: "Radiation (density gauges)", name: "hazardRadiation" },
                    ].map(h => (
                      <label key={h.name} className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-50 p-1 rounded">
                        <input type="checkbox" name={h.name} checked={(formData as any)[h.name]} onChange={handleInputChange} className="w-4 h-4 accent-[#C49A28]" />
                        {h.label}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Step 3 */}
            <section>
              <div className="bg-[#081C2E] text-white p-2 font-bold mb-4">STEP 3 — ASSESS THE RISK</div>
              <div className="space-y-4 border border-[#dde3ec] p-4 rounded">
                <p className="text-sm italic">Rate the highest risk identified: Likelihood (L) x Consequence (C) = Risk Score</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-bold">Likelihood (L)</label>
                    <select name="riskLikelihood" value={formData.riskLikelihood} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded text-sm">
                      <option value="">Select Likelihood</option>
                      <option value="1">1 — Unlikely</option>
                      <option value="2">2 — Possible</option>
                      <option value="3">3 — Likely</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold">Consequence (C)</label>
                    <select name="riskConsequence" value={formData.riskConsequence} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded text-sm">
                      <option value="">Select Consequence</option>
                      <option value="1">1 — Minor (First Aid)</option>
                      <option value="2">2 — Moderate (Medical Treatment)</option>
                      <option value="3">3 — Serious (Lost Time / Fatality)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold">Risk Score (LxC)</label>
                    <input 
                      type="number" 
                      name="riskScore" 
                      value={formData.riskScore} 
                      onChange={handleInputChange} 
                      className="w-full p-2 border border-[#dde3ec] rounded text-sm bg-gray-50" 
                      placeholder="Enter Score"
                    />
                  </div>
                </div>
                <div className="text-xs grid grid-cols-1 md:grid-cols-3 gap-2 mt-4">
                  <div className="p-2 bg-green-50 border border-green-200 text-green-800 rounded">1-2 (Low): Proceed with standard controls</div>
                  <div className="p-2 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded">3-4 (Medium): Proceed with extra caution</div>
                  <div className="p-2 bg-red-50 border border-red-200 text-red-800 rounded font-bold uppercase">6-9 (High/Critical): STOP — consult supervisor</div>
                </div>
              </div>
            </section>

            {/* Step 4 */}
            <section>
              <div className="bg-[#081C2E] text-white p-2 font-bold mb-4">STEP 4 — CONTROL THE HAZARDS</div>
              <div className="space-y-6 border border-[#dde3ec] p-4 rounded">
                <div className="space-y-2">
                  <h3 className="font-bold text-sm">Safety Equipment Required:</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {[
                      { label: "PPE", name: "equipPpe" },
                      { label: "Harness / lanyard", name: "equipHarness" },
                      { label: "Eye wash / shower", name: "equipEyeWash" },
                      { label: "Barricading", name: "equipBarricading" },
                      { label: "Radio / comms", name: "equipRadio" },
                      { label: "Platform / step", name: "equipPlatform" },
                      { label: "Fire extinguisher", name: "equipFireExtinguisher" },
                      { label: "First aid kit", name: "equipFirstAidKit" },
                    ].map(e => (
                      <label key={e.name} className="flex items-center gap-2 text-sm cursor-pointer">
                        <input type="checkbox" name={e.name} checked={(formData as any)[e.name]} onChange={handleInputChange} className="w-4 h-4 accent-[#C49A28]" />
                        {e.label}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-[#dde3ec] text-sm">
                    <thead>
                      <tr className="bg-[#081C2E] text-white">
                        <th className="border border-[#dde3ec] p-2 text-left">Hazard Identified</th>
                        <th className="border border-[#dde3ec] p-2 text-left">Control Measure</th>
                        <th className="border border-[#dde3ec] p-2 text-center w-20">Done</th>
                      </tr>
                    </thead>
                    <tbody>
                      {hazards.map((row, index) => (
                        <tr key={row.id}>
                          <td className="border border-[#dde3ec] p-1">
                            <input 
                              type="text" 
                              value={row.hazard} 
                              onChange={(e) => handleHazardChange(index, "hazard", e.target.value)}
                              className="w-full p-1 border-none focus:ring-0"
                              placeholder="Describe hazard..."
                            />
                          </td>
                          <td className="border border-[#dde3ec] p-1">
                            <input 
                              type="text" 
                              value={row.control} 
                              onChange={(e) => handleHazardChange(index, "control", e.target.value)}
                              className="w-full p-1 border-none focus:ring-0"
                              placeholder="Describe control..."
                            />
                          </td>
                          <td className="border border-[#dde3ec] p-1 text-center">
                            <input 
                              type="checkbox" 
                              checked={row.done} 
                              onChange={(e) => handleHazardChange(index, "done", e.target.checked)}
                              className="w-4 h-4 accent-[#C49A28]"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button 
                    type="button" 
                    onClick={addHazardRow}
                    className="mt-2 text-sm text-[#C49A28] font-bold hover:underline"
                  >
                    + Add Hazard Row
                  </button>
                </div>
              </div>
            </section>

            {/* Step 5 */}
            <section>
              <div className="bg-[#081C2E] text-white p-2 font-bold mb-4">STEP 5 — PROCEED SAFELY</div>
              <div className="space-y-4 border border-[#dde3ec] p-4 rounded">
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm font-bold">All hazards controlled and risk at acceptable level? *</span>
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="checkbox" name="allHazardsControlled" required checked={formData.allHazardsControlled} onChange={handleInputChange} className="w-4 h-4 accent-[#C49A28]" />
                    Yes
                  </label>
                </div>
                <div className="p-3 bg-red-50 border-l-4 border-red-400 text-xs italic mb-4">
                  If No — Do NOT proceed. Refer to your supervisor.
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="checkbox" name="stayAlert" checked={formData.stayAlert} onChange={handleInputChange} className="w-4 h-4 accent-[#C49A28]" />
                    Stay alert for changing conditions during the task
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="checkbox" name="maintainHousekeeping" checked={formData.maintainHousekeeping} onChange={handleInputChange} className="w-4 h-4 accent-[#C49A28]" />
                    Maintain good housekeeping standards throughout
                  </label>
                </div>
              </div>
            </section>

            {/* Sign-off Section */}
            <section>
              <div className="bg-[#081C2E] text-white p-2 font-bold mb-4">SIGN-OFF & VERIFICATION</div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[#dde3ec] text-sm">
                  <thead>
                    <tr className="bg-gray-100 text-[#081C2E]">
                      <th className="border border-[#dde3ec] p-2 text-left">Role</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Name</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Signature (Type Name)</th>
                      <th className="border border-[#dde3ec] p-2 text-left w-40">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-[#dde3ec] p-2 font-bold">Assessed By (Worker) *</td>
                      <td className="border border-[#dde3ec] p-2">
                        <input type="text" name="workerName" required value={formData.workerName} onChange={handleInputChange} className="w-full p-1 border-none" />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input type="text" name="workerSignature" required placeholder="Full Name Signature" value={formData.workerSignature} onChange={handleInputChange} className="w-full p-1 border-none italic" />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input type="date" name="workerDate" required value={formData.workerDate} onChange={handleInputChange} className="w-full p-1 border-none" />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#dde3ec] p-2 font-bold">Supervisor Verification</td>
                      <td className="border border-[#dde3ec] p-2">
                        <input type="text" name="supervisorName" value={formData.supervisorName} onChange={handleInputChange} className="w-full p-1 border-none" />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input type="text" name="supervisorSignature" placeholder="Full Name Signature" value={formData.supervisorSignature} onChange={handleInputChange} className="w-full p-1 border-none italic" />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input type="date" name="supervisorDate" value={formData.supervisorDate} onChange={handleInputChange} className="w-full p-1 border-none" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded text-sm">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end pt-6 border-t border-[#dde3ec]">
              <button
                type="submit"
                disabled={mutation.isPending}
                className="bg-[#081C2E] text-white px-8 py-3 rounded font-bold hover:bg-[#122b42] transition-colors disabled:bg-gray-400 flex items-center gap-2"
              >
                {mutation.isPending ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit Take 5 Assessment"
                )}
              </button>
            </div>
          </div>
        </form>

        <footer className="mt-8 text-center text-xs text-gray-500 pb-10">
          <p>© 2026 True East Mining Company. All Rights Reserved.</p>
          <p className="mt-1">Controlled Document: TE-IMS-FRM-HSE-009 | Revision 01</p>
        </footer>
      </div>
    </Layout>
  );
}
