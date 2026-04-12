import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_OPS_002() {
  const [formData, setFormData] = useState({
    rigId: "",
    siteName: "",
    incidentDateTime: "",
    shift: "",
    stuckPointDepth: "",
    rigManager: "",
    drillerName: "",
    totalTimeLost: "",
    incidentWhatHappened: "",
    lastSuccessfulAction: "",
    drillingParameters: "",
    formationConditions: "",
    engineStopped: "",
    personnelEvacuated: "",
    riskAssessmentConducted: "",
    lotoApplied: "",
    supervisorNotified: "",
    recoveryGentlePullback: false,
    recoveryGentlePullbackDetails: "",
    recoveryPumpFlush: false,
    recoveryPumpFlushDetails: "",
    recoveryInjectLubricant: false,
    recoveryInjectLubricantDetails: "",
    recoveryBackoff: false,
    recoveryBackoffDetails: "",
    recoveryFishing: false,
    recoveryFishingDetails: "",
    recoveryOther: false,
    recoveryOtherDetails: "",
    outcome: "",
    abandonmentReason: "",
    metresLost: "",
    costImpactSar: "",
    toolsUsed: "",
    equipmentDamaged: "",
    maintenanceRequired: "",
    lihItems: "",
    rootCause: "",
    contributingFactors: "",
    preventRecurrenceActions: "",
    trainingNeeded: "",
    targetProcedureUpdate: "",
    completedByName: "",
    completedByPosition: "",
    completedBySignature: "",
    completedByDate: "",
    reviewedBy: "",
    correctiveActionRaised: "",
    ncrCarRef: "",
    commentsCloseOut: "",
    reviewSignature: "",
    reviewDate: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  const mutation = trpc.formSubmissions.submit.useMutation({
    onSuccess: (data) => {
      setIsSubmitted(true);
      setSheetUrl(data.sheetUrl);
    },
    onError: (err) => {
      setError(err.message || "An error occurred during submission.");
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const headers = [
      "Rig ID / Hole ID",
      "Site / Project Name",
      "Shift Date and Time of Incident",
      "Shift",
      "Depth at Stuck Point (metres)",
      "Rig Manager",
      "Driller Name",
      "Total time lost (hours)",
      "What happened",
      "Last successful action",
      "Drilling parameters",
      "Formation and conditions",
      "Engine stopped?",
      "Personnel evacuated?",
      "Risk assessment conducted?",
      "LOTO applied?",
      "Supervisor/HSE notified?",
      "Recovery: Gentle pullback",
      "Recovery: Gentle pullback details",
      "Recovery: Pump/flush",
      "Recovery: Pump/flush details",
      "Recovery: Inject lubricant",
      "Recovery: Inject lubricant details",
      "Recovery: Backoff",
      "Recovery: Backoff details",
      "Recovery: Fishing",
      "Recovery: Fishing details",
      "Recovery: Other",
      "Recovery: Other details",
      "Outcome",
      "Reason for abandonment",
      "Metres lost",
      "Estimated cost impact (SAR)",
      "Tools used",
      "Equipment damaged",
      "Maintenance required",
      "LIH items",
      "Root cause",
      "Contributing factors",
      "Actions to prevent recurrence",
      "Training/Procedure update needed",
      "Target procedure for update",
      "Completed By Name",
      "Completed By Position",
      "Completed By Signature",
      "Completed By Date",
      "Reviewed By",
      "Corrective action raised?",
      "NCR/CAR reference",
      "Comments/Close-out",
      "Review Signature",
      "Review Date",
    ];

    const values = [
      formData.rigId,
      formData.siteName,
      formData.incidentDateTime,
      formData.shift,
      formData.stuckPointDepth,
      formData.rigManager,
      formData.drillerName,
      formData.totalTimeLost,
      formData.incidentWhatHappened,
      formData.lastSuccessfulAction,
      formData.drillingParameters,
      formData.formationConditions,
      formData.engineStopped,
      formData.personnelEvacuated,
      formData.riskAssessmentConducted,
      formData.lotoApplied,
      formData.supervisorNotified,
      formData.recoveryGentlePullback ? "Yes" : "No",
      formData.recoveryGentlePullbackDetails,
      formData.recoveryPumpFlush ? "Yes" : "No",
      formData.recoveryPumpFlushDetails,
      formData.recoveryInjectLubricant ? "Yes" : "No",
      formData.recoveryInjectLubricantDetails,
      formData.recoveryBackoff ? "Yes" : "No",
      formData.recoveryBackoffDetails,
      formData.recoveryFishing ? "Yes" : "No",
      formData.recoveryFishingDetails,
      formData.recoveryOther ? "Yes" : "No",
      formData.recoveryOtherDetails,
      formData.outcome,
      formData.abandonmentReason,
      formData.metresLost,
      formData.costImpactSar,
      formData.toolsUsed,
      formData.equipmentDamaged,
      formData.maintenanceRequired,
      formData.lihItems,
      formData.rootCause,
      formData.contributingFactors,
      formData.preventRecurrenceActions,
      formData.trainingNeeded,
      formData.targetProcedureUpdate,
      formData.completedByName,
      formData.completedByPosition,
      formData.completedBySignature,
      formData.completedByDate,
      formData.reviewedBy,
      formData.correctiveActionRaised,
      formData.ncrCarRef,
      formData.commentsCloseOut,
      formData.reviewSignature,
      formData.reviewDate,
    ];

    mutation.mutate({
      formCode: "TE-IMS-FRM-OPS-002",
      headers,
      values,
    });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Form submitted successfully</h2>
            <p className="text-green-700 mb-6">
              The Stuck Rod Recovery Report has been recorded in the system.
            </p>
            <a
              href={sheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#081C2E] text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors"
            >
              View register: Google Sheet
            </a>
            <div className="mt-8">
              <Link href="/" className="text-[#C49A28] hover:underline">
                ← Return to Portal Home
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  const inputClasses = "w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]";
  const labelClasses = "block text-sm font-semibold mb-1";
  const sectionHeaderClasses = "bg-[#081C2E] text-white px-4 py-2 font-bold mt-6 mb-4 uppercase text-sm tracking-wider";
  const tableHeaderClasses = "bg-[#081C2E] text-white p-2 text-left text-sm font-semibold";
  const tableCellClasses = "border border-[#dde3ec] p-2";

  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-6 bg-white shadow-sm border border-[#dde3ec]">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-[#C49A28] hover:underline font-medium">
            ← Portal Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/docs/frm" className="text-gray-500 uppercase tracking-tight hover:text-[#C49A28] transition-colors cursor-pointer">FRM</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-800 font-semibold">Stuck Rod Recovery Report</span>
        </nav>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 border-b-2 border-[#081C2E] pb-4">
          <div>
            <h1 className="text-2xl font-bold text-[#081C2E]">STUCK ROD RECOVERY REPORT</h1>
            <p className="text-gray-600 text-sm mt-1">True East Mining Company IMS Portal</p>
          </div>
          <div className="mt-4 md:mt-0 overflow-x-auto">
            <table className="text-xs border-collapse">
              <tbody>
                <tr>
                  <td className="border border-[#dde3ec] bg-gray-50 px-3 py-1 font-bold">Document Code</td>
                  <td className="border border-[#dde3ec] px-3 py-1">TE-IMS-FRM-OPS-002</td>
                </tr>
                <tr>
                  <td className="border border-[#dde3ec] bg-gray-50 px-3 py-1 font-bold">Revision</td>
                  <td className="border border-[#dde3ec] px-3 py-1">01</td>
                </tr>
                <tr>
                  <td className="border border-[#dde3ec] bg-gray-50 px-3 py-1 font-bold">Date</td>
                  <td className="border border-[#dde3ec] px-3 py-1">10.04.2026</td>
                </tr>
                <tr>
                  <td className="border border-[#dde3ec] bg-gray-50 px-3 py-1 font-bold">Status</td>
                  <td className="border border-[#dde3ec] px-3 py-1 text-green-700 font-semibold">Approved</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* 1. Incident Details */}
          <div className={sectionHeaderClasses}>1. Incident Details</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClasses}>Rig ID / Hole ID *</label>
              <input
                type="text"
                name="rigId"
                required
                className={inputClasses}
                value={formData.rigId}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className={labelClasses}>Site / Project Name *</label>
              <input
                type="text"
                name="siteName"
                required
                className={inputClasses}
                value={formData.siteName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className={labelClasses}>Shift Date and Time of Incident *</label>
              <input
                type="datetime-local"
                name="incidentDateTime"
                required
                className={inputClasses}
                value={formData.incidentDateTime}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className={labelClasses}>Shift *</label>
              <select
                name="shift"
                required
                className={inputClasses}
                value={formData.shift}
                onChange={handleChange}
              >
                <option value="">Select Shift</option>
                <option value="Day">Day</option>
                <option value="Night">Night</option>
              </select>
            </div>
            <div>
              <label className={labelClasses}>Depth at Stuck Point (metres) *</label>
              <input
                type="number"
                step="0.1"
                name="stuckPointDepth"
                required
                className={inputClasses}
                value={formData.stuckPointDepth}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className={labelClasses}>Rig Manager *</label>
              <input
                type="text"
                name="rigManager"
                required
                className={inputClasses}
                value={formData.rigManager}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className={labelClasses}>Driller Name *</label>
              <input
                type="text"
                name="drillerName"
                required
                className={inputClasses}
                value={formData.drillerName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className={labelClasses}>Total time lost (hours) *</label>
              <input
                type="number"
                step="0.1"
                name="totalTimeLost"
                required
                className={inputClasses}
                value={formData.totalTimeLost}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* 2. Incident Description */}
          <div className={sectionHeaderClasses}>2. Incident Description</div>
          <div className="space-y-4">
            <div>
              <label className={labelClasses}>What happened (e.g., loss of rotation, excessive torque, sudden stop) *</label>
              <textarea
                name="incidentWhatHappened"
                required
                rows={3}
                className={inputClasses}
                value={formData.incidentWhatHappened}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className={labelClasses}>Last successful action before stuck *</label>
              <input
                type="text"
                name="lastSuccessfulAction"
                required
                className={inputClasses}
                value={formData.lastSuccessfulAction}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className={labelClasses}>Drilling parameters at time of stuck (WOB, RPM, flow rate, mud type) *</label>
              <textarea
                name="drillingParameters"
                required
                rows={2}
                className={inputClasses}
                value={formData.drillingParameters}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className={labelClasses}>Formation and conditions (e.g., swelling clay, fractured zone, cavity) *</label>
              <textarea
                name="formationConditions"
                required
                rows={2}
                className={inputClasses}
                value={formData.formationConditions}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* 3. Immediate Actions */}
          <div className={sectionHeaderClasses}>3. Immediate Actions</div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className={tableHeaderClasses}>Action</th>
                  <th className={`${tableHeaderClasses} w-32 text-center`}>Response</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tableCellClasses}>Engine stopped?</td>
                  <td className={`${tableCellClasses} text-center`}>
                    <select
                      name="engineStopped"
                      className="w-full border-none p-1 focus:ring-0"
                      value={formData.engineStopped}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className={tableCellClasses}>Non-essential personnel evacuated from rig floor?</td>
                  <td className={`${tableCellClasses} text-center`}>
                    <select
                      name="personnelEvacuated"
                      className="w-full border-none p-1 focus:ring-0"
                      value={formData.personnelEvacuated}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className={tableCellClasses}>Pre-task risk assessment / toolbox talk conducted before recovery?</td>
                  <td className={`${tableCellClasses} text-center`}>
                    <select
                      name="riskAssessmentConducted"
                      className="w-full border-none p-1 focus:ring-0"
                      value={formData.riskAssessmentConducted}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className={tableCellClasses}>LOTO applied (if maintenance involved)?</td>
                  <td className={`${tableCellClasses} text-center`}>
                    <select
                      name="lotoApplied"
                      className="w-full border-none p-1 focus:ring-0"
                      value={formData.lotoApplied}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className={tableCellClasses}>Supervisor and HSE Officer notified?</td>
                  <td className={`${tableCellClasses} text-center`}>
                    <select
                      name="supervisorNotified"
                      className="w-full border-none p-1 focus:ring-0"
                      value={formData.supervisorNotified}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 4. Recovery Steps Taken */}
          <div className={sectionHeaderClasses}>4. Recovery Steps Taken (tick all that apply and describe)</div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className={`${tableHeaderClasses} w-12 text-center`}>Tick</th>
                  <th className={`${tableHeaderClasses} w-64`}>Recovery Method</th>
                  <th className={tableHeaderClasses}>Details / Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={`${tableCellClasses} text-center`}>
                    <input
                      type="checkbox"
                      name="recoveryGentlePullback"
                      checked={formData.recoveryGentlePullback}
                      onChange={handleChange}
                    />
                  </td>
                  <td className={tableCellClasses}>Gentle pullback and rotation</td>
                  <td className={tableCellClasses}>
                    <input
                      type="text"
                      name="recoveryGentlePullbackDetails"
                      className="w-full border-none p-1 focus:ring-0"
                      value={formData.recoveryGentlePullbackDetails}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={`${tableCellClasses} text-center`}>
                    <input
                      type="checkbox"
                      name="recoveryPumpFlush"
                      checked={formData.recoveryPumpFlush}
                      onChange={handleChange}
                    />
                  </td>
                  <td className={tableCellClasses}>Pump / flush drilling fluid / air</td>
                  <td className={tableCellClasses}>
                    <input
                      type="text"
                      name="recoveryPumpFlushDetails"
                      className="w-full border-none p-1 focus:ring-0"
                      value={formData.recoveryPumpFlushDetails}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={`${tableCellClasses} text-center`}>
                    <input
                      type="checkbox"
                      name="recoveryInjectLubricant"
                      checked={formData.recoveryInjectLubricant}
                      onChange={handleChange}
                    />
                  </td>
                  <td className={tableCellClasses}>Inject lubricant / surfactant</td>
                  <td className={tableCellClasses}>
                    <input
                      type="text"
                      name="recoveryInjectLubricantDetails"
                      className="w-full border-none p-1 focus:ring-0"
                      value={formData.recoveryInjectLubricantDetails}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={`${tableCellClasses} text-center`}>
                    <input
                      type="checkbox"
                      name="recoveryBackoff"
                      checked={formData.recoveryBackoff}
                      onChange={handleChange}
                    />
                  </td>
                  <td className={tableCellClasses}>Backoff at joint above stuck section</td>
                  <td className={tableCellClasses}>
                    <input
                      type="text"
                      name="recoveryBackoffDetails"
                      className="w-full border-none p-1 focus:ring-0"
                      value={formData.recoveryBackoffDetails}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={`${tableCellClasses} text-center`}>
                    <input
                      type="checkbox"
                      name="recoveryFishing"
                      checked={formData.recoveryFishing}
                      onChange={handleChange}
                    />
                  </td>
                  <td className={tableCellClasses}>Fishing operation (overshot, spear, taper tap)</td>
                  <td className={tableCellClasses}>
                    <input
                      type="text"
                      name="recoveryFishingDetails"
                      className="w-full border-none p-1 focus:ring-0"
                      value={formData.recoveryFishingDetails}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={`${tableCellClasses} text-center`}>
                    <input
                      type="checkbox"
                      name="recoveryOther"
                      checked={formData.recoveryOther}
                      onChange={handleChange}
                    />
                  </td>
                  <td className={tableCellClasses}>Other (describe)</td>
                  <td className={tableCellClasses}>
                    <input
                      type="text"
                      name="recoveryOtherDetails"
                      className="w-full border-none p-1 focus:ring-0"
                      value={formData.recoveryOtherDetails}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 5. Outcome */}
          <div className={sectionHeaderClasses}>5. Outcome (tick one)</div>
          <div className="space-y-2 border border-[#dde3ec] p-4 rounded">
            <div className="flex items-center space-x-3">
              <input
                type="radio"
                name="outcome"
                id="outcome_success"
                value="Rods freed successfully — hole recovered and drilling resumed."
                checked={formData.outcome === "Rods freed successfully — hole recovered and drilling resumed."}
                onChange={handleChange}
                className="text-[#C49A28] focus:ring-[#C49A28]"
              />
              <label htmlFor="outcome_success" className="text-sm">Rods freed successfully — hole recovered and drilling resumed.</label>
            </div>
            <div className="flex items-center space-x-3">
              <input
                type="radio"
                name="outcome"
                id="outcome_partial"
                value="Rods partially recovered — lost section downhole."
                checked={formData.outcome === "Rods partially recovered — lost section downhole."}
                onChange={handleChange}
                className="text-[#C49A28] focus:ring-[#C49A28]"
              />
              <label htmlFor="outcome_partial" className="text-sm">Rods partially recovered — lost section downhole.</label>
            </div>
            <div className="flex items-center space-x-3">
              <input
                type="radio"
                name="outcome"
                id="outcome_abandonment"
                value="Abandonment — hole cut and cemented / sealed."
                checked={formData.outcome === "Abandonment — hole cut and cemented / sealed."}
                onChange={handleChange}
                className="text-[#C49A28] focus:ring-[#C49A28]"
              />
              <label htmlFor="outcome_abandonment" className="text-sm">Abandonment — hole cut and cemented / sealed.</label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div>
              <label className={labelClasses}>Reason for abandonment (if applicable)</label>
              <input
                type="text"
                name="abandonmentReason"
                className={inputClasses}
                value={formData.abandonmentReason}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className={labelClasses}>Metres lost (if applicable)</label>
              <input
                type="number"
                step="0.1"
                name="metresLost"
                className={inputClasses}
                value={formData.metresLost}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className={labelClasses}>Estimated cost impact (SAR)</label>
              <input
                type="number"
                name="costImpactSar"
                className={inputClasses}
                value={formData.costImpactSar}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* 6. Equipment Used and Damaged */}
          <div className={sectionHeaderClasses}>6. Equipment Used and Damaged</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClasses}>Tools used (e.g., fishing spear, overshot, taper tap)</label>
              <textarea
                name="toolsUsed"
                rows={2}
                className={inputClasses}
                value={formData.toolsUsed}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className={labelClasses}>Equipment damaged</label>
              <textarea
                name="equipmentDamaged"
                rows={2}
                className={inputClasses}
                value={formData.equipmentDamaged}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className={labelClasses}>Maintenance required</label>
              <textarea
                name="maintenanceRequired"
                rows={2}
                className={inputClasses}
                value={formData.maintenanceRequired}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className={labelClasses}>Lost-in-hole (LIH) items — type and approx value</label>
              <textarea
                name="lihItems"
                rows={2}
                className={inputClasses}
                value={formData.lihItems}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* 7. Lessons Learned and Recommendations */}
          <div className={sectionHeaderClasses}>7. Lessons Learned and Recommendations</div>
          <div className="space-y-4">
            <div>
              <label className={labelClasses}>Root cause (if known)</label>
              <textarea
                name="rootCause"
                rows={2}
                className={inputClasses}
                value={formData.rootCause}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className={labelClasses}>Contributing factors</label>
              <textarea
                name="contributingFactors"
                rows={2}
                className={inputClasses}
                value={formData.contributingFactors}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className={labelClasses}>Actions to prevent recurrence</label>
              <textarea
                name="preventRecurrenceActions"
                rows={2}
                className={inputClasses}
                value={formData.preventRecurrenceActions}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClasses}>Additional training or procedure update needed</label>
                <input
                  type="text"
                  name="trainingNeeded"
                  className={inputClasses}
                  value={formData.trainingNeeded}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className={labelClasses}>Target procedure / SOP for update</label>
                <input
                  type="text"
                  name="targetProcedureUpdate"
                  className={inputClasses}
                  value={formData.targetProcedureUpdate}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* 8. Completed By */}
          <div className={sectionHeaderClasses}>8. Completed By</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className={labelClasses}>Name *</label>
              <input
                type="text"
                name="completedByName"
                required
                className={inputClasses}
                value={formData.completedByName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className={labelClasses}>Position *</label>
              <input
                type="text"
                name="completedByPosition"
                required
                className={inputClasses}
                value={formData.completedByPosition}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className={labelClasses}>Signature *</label>
              <input
                type="text"
                name="completedBySignature"
                placeholder="Full name (acts as signature)"
                required
                className={inputClasses}
                value={formData.completedBySignature}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className={labelClasses}>Date *</label>
              <input
                type="date"
                name="completedByDate"
                required
                className={inputClasses}
                value={formData.completedByDate}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* 9. HSE / Supervisor Follow-Up */}
          <div className={sectionHeaderClasses}>9. HSE / Supervisor Follow-Up</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClasses}>Reviewed by (name and position)</label>
              <input
                type="text"
                name="reviewedBy"
                className={inputClasses}
                value={formData.reviewedBy}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className={labelClasses}>Any corrective action raised in NCR / CAR system?</label>
              <select
                name="correctiveActionRaised"
                className={inputClasses}
                value={formData.correctiveActionRaised}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label className={labelClasses}>NCR / CAR reference</label>
              <input
                type="text"
                name="ncrCarRef"
                className={inputClasses}
                value={formData.ncrCarRef}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className={labelClasses}>Comments / Close-out</label>
              <textarea
                name="commentsCloseOut"
                rows={2}
                className={inputClasses}
                value={formData.commentsCloseOut}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className={labelClasses}>Signature</label>
              <input
                type="text"
                name="reviewSignature"
                placeholder="Full name (acts as signature)"
                className={inputClasses}
                value={formData.reviewSignature}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className={labelClasses}>Date</label>
              <input
                type="date"
                name="reviewDate"
                className={inputClasses}
                value={formData.reviewDate}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              disabled={mutation.isPending}
              className={`bg-[#081C2E] text-white px-10 py-3 rounded font-bold uppercase tracking-wide hover:bg-opacity-90 transition-colors shadow-md ${
                mutation.isPending ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {mutation.isPending ? "Submitting..." : "Submit Recovery Report"}
            </button>
          </div>
        </form>

        {/* Footer info */}
        <div className="mt-12 pt-6 border-t border-[#dde3ec] text-[10px] text-gray-500 flex flex-col md:flex-row justify-between">
          <div>
            <p>TE-IMS-FRM-OPS-002 | Revision 01 | 10.04.2026</p>
            <p>Aligned with PROC-OPS-001, ISO 9001:2015, ISO 45001:2018</p>
          </div>
          <div className="mt-2 md:mt-0 text-right font-medium">
            TRUE EAST MINING COMPANY
          </div>
        </div>
      </div>
    </Layout>
  );
}
