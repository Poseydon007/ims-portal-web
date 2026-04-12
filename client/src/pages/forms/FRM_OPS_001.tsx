import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_OPS_001() {
  const [formData, setFormData] = useState({
    shiftDate: "",
    shift: "",
    rigIdHoleId: "",
    siteProjectName: "",
    rigManager: "",
    drillerName: "",
    shiftStartTime: "",
    shiftEndTime: "",
    depthDrilledToday: "",
    totalDepthToDate: "",
    coreRecovery: "",
    rodsUsedAdded: "",
    drillingFluidUsed: "",
    bitToolingChange: "",
    bitToolingReason: "",
    formationEncountered: "",
    drillingComments: "",
    take5Completed: "",
    take5Explanation: "",
    hazardIdCompleted: "",
    keyHazards: "",
    controlsApplied: "",
    unsafeActsObserved: "",
    positiveSafetyObservations: "",
    toolboxTalkHeld: "",
    toolboxTalkTopic: "",
    incidentOccurred: "",
    incidentDescription: "",
    reportedViaFlash: "",
    flashRefNumber: "",
    immediateAction: "",
    preStartCompleted: "",
    equipmentIssues: "",
    maintenancePerformed: "",
    maintenanceDescription: "",
    refuellingPerformed: "",
    fuelQuantity: "",
    refuellingLogRef: "",
    rigDowntime: "",
    rigDowntimeReason: "",
    cuttingsManaged: "",
    cuttingsOther: "",
    sumpHoleStatus: "",
    wasteRemoved: "",
    wasteTypeQty: "",
    spillsIncidents: "",
    wildlifeObserved: "",
    wildlifeDescription: "",
    otherEnvObservations: "",
    completedByName: "",
    completedByPosition: "",
    completedBySignature: "",
    completedByDate: "",
    reviewedByNamePos: "",
    correctiveActionRequired: "",
    commentsCloseOut: "",
    reviewedBySignature: "",
    reviewedByDate: "",
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
      setError("Failed to submit form: " + err.message);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked ? "Yes" : "No" }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const headers = [
      "Shift Date", "Shift", "Rig ID / Hole ID", "Site / Project Name", "Rig Manager", "Driller Name", "Shift Start Time", "Shift End Time",
      "Depth Drilled Today (m)", "Total Depth to Date (m)", "Core Recovery (%)", "Rods Used / Added (qty)", "Drilling Fluid Used (litres)", 
      "Bit / Tooling Change", "Bit / Tooling Reason", "Formation Encountered", "Drilling Comments / Anomalies",
      "Take 5 / JHA Completed", "Take 5 Explanation", "Hazard ID Checklist Completed", "Key Hazards Identified", "Controls Applied", 
      "Unsafe Acts/Conditions Observed", "Positive Safety Observations", "Toolbox Talk Held", "Toolbox Talk Topic",
      "Incident/Near-Miss Occurred", "Incident Description", "Reported via Flash Notification", "Flash Ref Number", "Immediate Action Taken",
      "Pre-start Inspection Completed", "Equipment Issues/Defects", "Maintenance Performed", "Maintenance Description", 
      "Refuelling Performed", "Fuel Quantity", "Refuelling Log Ref", "Rig Downtime (hours)", "Rig Downtime Reason",
      "Cuttings Managed", "Cuttings Other", "Sump / Hole Status", "Waste Removed from Site", "Waste Type and Quantity", 
      "Spills or Env Incidents", "Wildlife/Sensitive Receptor Observed", "Wildlife Description", "Other Env Observations",
      "Completed By Name", "Completed By Position", "Completed By Signature", "Completed By Date",
      "Reviewed By Name/Position", "Corrective Action Required", "Comments / Close-out", "Reviewed By Signature", "Reviewed By Date"
    ];

    const values = [
      formData.shiftDate, formData.shift, formData.rigIdHoleId, formData.siteProjectName, formData.rigManager, formData.drillerName, formData.shiftStartTime, formData.shiftEndTime,
      formData.depthDrilledToday, formData.totalDepthToDate, formData.coreRecovery, formData.rodsUsedAdded, formData.drillingFluidUsed,
      formData.bitToolingChange, formData.bitToolingReason, formData.formationEncountered, formData.drillingComments,
      formData.take5Completed, formData.take5Explanation, formData.hazardIdCompleted, formData.keyHazards, formData.controlsApplied,
      formData.unsafeActsObserved, formData.positiveSafetyObservations, formData.toolboxTalkHeld, formData.toolboxTalkTopic,
      formData.incidentOccurred, formData.incidentDescription, formData.reportedViaFlash, formData.flashRefNumber, formData.immediateAction,
      formData.preStartCompleted, formData.equipmentIssues, formData.maintenancePerformed, formData.maintenanceDescription,
      formData.refuellingPerformed, formData.fuelQuantity, formData.refuellingLogRef, formData.rigDowntime, formData.rigDowntimeReason,
      formData.cuttingsManaged, formData.cuttingsOther, formData.sumpHoleStatus, formData.wasteRemoved, formData.wasteTypeQty,
      formData.spillsIncidents, formData.wildlifeObserved, formData.wildlifeDescription, formData.otherEnvObservations,
      formData.completedByName, formData.completedByPosition, formData.completedBySignature, formData.completedByDate,
      formData.reviewedByNamePos, formData.correctiveActionRequired, formData.commentsCloseOut, formData.reviewedBySignature, formData.reviewedByDate
    ];

    mutation.mutate({
      formCode: "TE-IMS-FRM-OPS-001",
      headers,
      values,
    });
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto py-12 px-4 text-center">
          <div className="bg-white p-8 rounded-lg shadow-md border border-[#dde3ec]">
            <h2 className="text-2xl font-bold text-[#081C2E] mb-4">Form submitted successfully</h2>
            <p className="text-gray-600 mb-6">The Daily Drilling Report has been recorded.</p>
            <a 
              href={sheetUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#C49A28] text-white px-6 py-2 rounded hover:bg-[#a38021] transition-colors"
            >
              View register
            </a>
            <div className="mt-8">
              <Link href="/" className="text-[#081C2E] hover:underline">← Return to Portal Home</Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <Link href="/" className="text-[#081C2E] hover:underline flex items-center gap-2">
            ← Portal Home
          </Link>
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
            <span>Portal Home</span>
            <span>&gt;</span>
            <Link href="/docs/frm" className="text-gray-500 hover:text-[#C49A28] transition-colors cursor-pointer">FRM</Link>
            <span>&gt;</span>
            <span className="text-[#C49A28] font-semibold">Daily Drilling Report</span>
          </div>
        </nav>

        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-6 rounded-lg shadow-sm border border-[#dde3ec]">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-[#081C2E] pb-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold text-[#081C2E]">DAILY DRILLING REPORT</h1>
              <p className="text-[#C49A28] font-semibold">True East Mining Company</p>
            </div>
            <div className="mt-4 md:mt-0 overflow-x-auto">
              <table className="text-xs border-collapse border border-[#dde3ec]">
                <tbody>
                  <tr>
                    <td className="border border-[#dde3ec] bg-gray-50 px-2 py-1 font-bold">Document</td>
                    <td className="border border-[#dde3ec] px-2 py-1">TE-IMS-FRM-OPS-001</td>
                    <td className="border border-[#dde3ec] bg-gray-50 px-2 py-1 font-bold">Revision</td>
                    <td className="border border-[#dde3ec] px-2 py-1">01</td>
                  </tr>
                  <tr>
                    <td className="border border-[#dde3ec] bg-gray-50 px-2 py-1 font-bold">Date</td>
                    <td className="border border-[#dde3ec] px-2 py-1">10.04.2026</td>
                    <td className="border border-[#dde3ec] bg-gray-50 px-2 py-1 font-bold">Status</td>
                    <td className="border border-[#dde3ec] px-2 py-1">Approved</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 1. Shift Information */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">1. SHIFT INFORMATION</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Shift Date *</label>
                <input type="date" name="shiftDate" required value={formData.shiftDate} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Shift *</label>
                <select name="shift" required value={formData.shift} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2">
                  <option value="">Select Shift</option>
                  <option value="Day">Day</option>
                  <option value="Night">Night</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Rig ID / Hole ID *</label>
                <input type="text" name="rigIdHoleId" required value={formData.rigIdHoleId} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Site / Project Name *</label>
                <input type="text" name="siteProjectName" required value={formData.siteProjectName} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Rig Manager *</label>
                <input type="text" name="rigManager" required value={formData.rigManager} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Driller Name *</label>
                <input type="text" name="drillerName" required value={formData.drillerName} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Shift Start Time *</label>
                <input type="time" name="shiftStartTime" required value={formData.shiftStartTime} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Shift End Time *</label>
                <input type="time" name="shiftEndTime" required value={formData.shiftEndTime} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2" />
              </div>
            </div>
          </section>

          {/* 2. Drilling Progress */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">2. DRILLING PROGRESS</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Depth Drilled Today (metres) *</label>
                <input type="number" step="0.01" name="depthDrilledToday" required value={formData.depthDrilledToday} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Total Depth to Date (metres) *</label>
                <input type="number" step="0.01" name="totalDepthToDate" required value={formData.totalDepthToDate} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Core Recovery (%)</label>
                <input type="number" step="0.1" name="coreRecovery" value={formData.coreRecovery} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Rods Used / Added (qty)</label>
                <input type="number" name="rodsUsedAdded" value={formData.rodsUsedAdded} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Drilling Fluid Used (litres)</label>
                <input type="number" name="drillingFluidUsed" value={formData.drillingFluidUsed} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Bit / Tooling Change?</label>
                <select name="bitToolingChange" value={formData.bitToolingChange} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2">
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Reason for Bit/Tooling Change (if applicable)</label>
                <input type="text" name="bitToolingReason" value={formData.bitToolingReason} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Formation Encountered</label>
                <input type="text" name="formationEncountered" value={formData.formationEncountered} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Comments / Anomalies (e.g., change in formation, water loss, cavity, stuck rod)</label>
                <textarea name="drillingComments" value={formData.drillingComments} onChange={handleChange} rows={3} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2"></textarea>
              </div>
            </div>
          </section>

          {/* 3. Safety and Hazard Observations */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">3. SAFETY AND HAZARD OBSERVATIONS</div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Take 5 / JHA completed at start of shift? *</label>
                  <select name="take5Completed" required value={formData.take5Completed} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2">
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">If No, explain</label>
                  <input type="text" name="take5Explanation" value={formData.take5Explanation} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Hazard Identification Checklist (FRM-HSE-010) completed? *</label>
                  <select name="hazardIdCompleted" required value={formData.hazardIdCompleted} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2">
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Toolbox talk / pre-start meeting held? *</label>
                  <select name="toolboxTalkHeld" required value={formData.toolboxTalkHeld} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2">
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Topic of toolbox talk</label>
                <input type="text" name="toolboxTalkTopic" value={formData.toolboxTalkTopic} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Key hazards identified</label>
                <textarea name="keyHazards" value={formData.keyHazards} onChange={handleChange} rows={2} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Controls applied</label>
                <textarea name="controlsApplied" value={formData.controlsApplied} onChange={handleChange} rows={2} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Unsafe acts or conditions observed (describe)</label>
                <textarea name="unsafeActsObserved" value={formData.unsafeActsObserved} onChange={handleChange} rows={2} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Positive safety observations (e.g., good PPE use, safe lifting, teamwork)</label>
                <textarea name="positiveSafetyObservations" value={formData.positiveSafetyObservations} onChange={handleChange} rows={2} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2"></textarea>
              </div>
            </div>
          </section>

          {/* 4. Incidents and Near-Misses */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">4. INCIDENTS AND NEAR-MISSES</div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Incident or near-miss occurred this shift? *</label>
                  <select name="incidentOccurred" required value={formData.incidentOccurred} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2">
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Reported via Flash Notification (FRM-HSE-002)?</label>
                  <select name="reportedViaFlash" value={formData.reportedViaFlash} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2">
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">If YES — brief description</label>
                <textarea name="incidentDescription" value={formData.incidentDescription} onChange={handleChange} rows={2} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2"></textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Flash Notification reference number</label>
                  <input type="text" name="flashRefNumber" value={formData.flashRefNumber} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Immediate action taken</label>
                  <input type="text" name="immediateAction" value={formData.immediateAction} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2" />
                </div>
              </div>
            </div>
          </section>

          {/* 5. Equipment Status */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">5. EQUIPMENT STATUS</div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Pre-start inspection completed? *</label>
                  <select name="preStartCompleted" required value={formData.preStartCompleted} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2">
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Maintenance performed this shift?</label>
                  <select name="maintenancePerformed" value={formData.maintenancePerformed} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2">
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Equipment issues or defects identified</label>
                <textarea name="equipmentIssues" value={formData.equipmentIssues} onChange={handleChange} rows={2} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description of maintenance</label>
                <textarea name="maintenanceDescription" value={formData.maintenanceDescription} onChange={handleChange} rows={2} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2"></textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Refuelling performed?</label>
                  <select name="refuellingPerformed" value={formData.refuellingPerformed} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2">
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Fuel quantity (litres)</label>
                  <input type="number" name="fuelQuantity" value={formData.fuelQuantity} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Refuelling Log ref.</label>
                  <input type="text" name="refuellingLogRef" value={formData.refuellingLogRef} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Rig downtime (hours)</label>
                  <input type="number" step="0.1" name="rigDowntime" value={formData.rigDowntime} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Reason for downtime</label>
                  <input type="text" name="rigDowntimeReason" value={formData.rigDowntimeReason} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2" />
                </div>
              </div>
            </div>
          </section>

          {/* 6. Environmental and Rehabilitation Notes */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">6. ENVIRONMENTAL AND REHABILITATION NOTES</div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Drill cuttings managed</label>
                  <select name="cuttingsManaged" value={formData.cuttingsManaged} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2">
                    <option value="">Select</option>
                    <option value="Dispersed">Dispersed</option>
                    <option value="Backfilled">Backfilled</option>
                    <option value="Other">Other (specify)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">If Other, specify</label>
                  <input type="text" name="cuttingsOther" value={formData.cuttingsOther} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Sump / hole status</label>
                <input type="text" name="sumpHoleStatus" value={formData.sumpHoleStatus} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Waste removed from site? *</label>
                  <select name="wasteRemoved" required value={formData.wasteRemoved} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2">
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Type and quantity of waste</label>
                  <input type="text" name="wasteTypeQty" value={formData.wasteTypeQty} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Spills or environmental incidents? *</label>
                  <select name="spillsIncidents" required value={formData.spillsIncidents} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2">
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Wildlife/sensitive receptor observed? *</label>
                  <select name="wildlifeObserved" required value={formData.wildlifeObserved} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2">
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Wildlife description (if observed)</label>
                <textarea name="wildlifeDescription" value={formData.wildlifeDescription} onChange={handleChange} rows={2} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Other environmental observations</label>
                <textarea name="otherEnvObservations" value={formData.otherEnvObservations} onChange={handleChange} rows={2} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2"></textarea>
              </div>
            </div>
          </section>

          {/* 7. Completed By */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">7. COMPLETED BY</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name *</label>
                <input type="text" name="completedByName" required value={formData.completedByName} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Position *</label>
                <input type="text" name="completedByPosition" required value={formData.completedByPosition} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Signature (Full Name) *</label>
                <input type="text" name="completedBySignature" required placeholder="Full name (acts as signature)" value={formData.completedBySignature} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date *</label>
                <input type="date" name="completedByDate" required value={formData.completedByDate} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2" />
              </div>
            </div>
          </section>

          {/* 8. HSE / Supervisor Follow-Up */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">8. HSE / SUPERVISOR FOLLOW-UP</div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Reviewed by (name and position)</label>
                  <input type="text" name="reviewedByNamePos" value={formData.reviewedByNamePos} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Any corrective action required?</label>
                  <select name="correctiveActionRequired" value={formData.correctiveActionRequired} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2">
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Comments / Close-out</label>
                <textarea name="commentsCloseOut" value={formData.commentsCloseOut} onChange={handleChange} rows={2} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2"></textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Signature (Full Name)</label>
                  <input type="text" name="reviewedBySignature" placeholder="Full name (acts as signature)" value={formData.reviewedBySignature} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <input type="date" name="reviewedByDate" value={formData.reviewedByDate} onChange={handleChange} className="mt-1 block w-full border border-[#dde3ec] rounded px-3 py-2" />
                </div>
              </div>
            </div>
          </section>

          {/* Submit Button and Error Message */}
          <div className="pt-6 border-t border-[#dde3ec]">
            {error && <div className="mb-4 text-red-600 font-medium">{error}</div>}
            <button
              type="submit"
              disabled={mutation.isPending}
              className={`w-full md:w-auto px-8 py-3 rounded text-white font-bold transition-colors ${
                mutation.isPending ? "bg-gray-400 cursor-not-allowed" : "bg-[#081C2E] hover:bg-[#1a3a5a]"
              }`}
            >
              {mutation.isPending ? "Submitting..." : "Submit Daily Drilling Report"}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
