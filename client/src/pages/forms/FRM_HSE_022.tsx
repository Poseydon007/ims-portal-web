import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_022() {
  const [submitted, setSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState("");

  // Form State
  const [formData, setFormData] = useState({
    // Section 1: Incident Details
    department: "",
    locationSite: "",
    dateOfIncident: "",
    timeOfIncident: "",
    incidentReferenceNo: "",
    reportedByNameRole: "",
    dateReported: "",

    // Section 2: Incident Classification
    classification: {
      nearMiss: false,
      firstAidCase: false,
      medicalTreatment: false,
      lostTimeInjury: false,
      fatality: false,
      propertyDamage: false,
      environmentalRelease: false,
      vehicleIncident: false,
      fireExplosion: false,
      securityIncident: false,
    },
    severityRating: "",
    potentialSeverity: "",

    // Section 3: Immediate Actions Taken
    immediateActions: "",

    // Section 5: Description of Occurrence
    briefDescription: "",
    sequenceOfEvents: "",

    // Section 8: Injury / Illness Details
    injuredPersonName: "",
    bodyPartAffected: "",
    natureOfInjury: "",
    treatmentProvided: "",
    referredToHospital: "",
    daysLost: "",

    // Section 9: Barrier Analysis
    barrierEnergyHazard: "",
    barrierRequired: "",
    barrierExisting: "",
    barrierGapAnalysis: "",

    // Section 10: Contributing Factors
    unsafeActs: {
      operatingWithoutAuthority: false,
      failureToSecure: false,
      operatingAtUnsafeSpeed: false,
      usingDefectiveEquipment: false,
      unsafeUseOfEquipment: false,
      improperPositioning: false,
      unsafeLoadingOrPlacement: false,
      horseplay: false,
      intoxicated: false,
      failureToLOTO: false,
      failureToUsePPE: false,
      incorrectUseOfTools: false,
      noAdherenceToProcedures: false,
      takingShortcuts: false,
      improperLifting: false,
      other: "",
    },
    unsafeConditions: {
      inadequateGuards: false,
      poorVisibility: false,
      defectiveTools: false,
      inadequateVentilation: false,
      inadequateIllumination: false,
      inadequatePPE: false,
      poorHousekeeping: false,
      trippingSlipping: false,
      fireExplosion: false,
      confinedSpace: false,
      hazardousAtmosphere: false,
      excessiveNoise: false,
      excessiveVibration: false,
      inadequateWarning: false,
      oilFuelSpillage: false,
      other: "",
    },
    personalFactors: {
      lackOfKnowledge: false,
      improperAttitude: false,
      physicalDeficiency: false,
      mentalDeficiency: false,
      takingShortcuts: false,
      alcoholDrugAbuse: false,
      failureToComply: false,
      other: "",
    },
    jobFactors: {
      inadequateStandards: false,
      inadequateEnforcement: false,
      inadequateObservations: false,
      inadequateSafetyMeetings: false,
      inadequateMaintenanceDesign: false,
      inadequatePurchasing: false,
      normalWearTear: false,
      inadequateSupervision: false,
      improperEnvironment: false,
      inadequateEMS: false,
      poorRiskAssessment: false,
      other: "",
    },

    // Section 11: Root Cause Statement
    directCause: "",
    rootCause: "",

    // Section 13: Regulatory Notification
    regulatory: {
      notRequired: false,
      gosi: false,
      civilDefence: false,
      mhrsd: false,
      client: false,
    },
    notificationRefNo: "",
    dateNotified: "",

    // Section 14: Required Documents
    documents: {
      witnessStatements: false,
      medicalReport: false,
      photosVideo: false,
      equipmentInspection: false,
      riskAssessmentJSA: false,
      trainingRecords: false,
      maintenanceRecords: false,
      cctvFootage: false,
      weatherReport: false,
      permitsToWork: false,
    },
    otherDocuments: "",

    // Section 15: HOD Follow-up
    hodName: "",
    investigationClosed: "",
    dateClosed: "",
    hodComments: "",

    // Section 16: Sign-off
    signOff: {
      hseOfficerName: "",
      hseOfficerDate: "",
      hseManagerName: "",
      hseManagerDate: "",
      siteManagerName: "",
      siteManagerDate: "",
      hodName: "",
      hodDate: "",
      gmName: "",
      gmDate: "",
    }
  });

  // Dynamic Tables
  const [equipment, setEquipment] = useState([{ type: "", id: "", condition: "" }]);
  const [persons, setPersons] = useState([{ name: "", empNo: "", designation: "", role: "", contact: "" }]);
  const [actions, setActions] = useState([{ no: "1", action: "", responsible: "", targetDate: "", controlType: "", status: "", signature: "" }]);

  const addEquipmentRow = () => setEquipment([...equipment, { type: "", id: "", condition: "" }]);
  const addPersonRow = () => setPersons([...persons, { name: "", empNo: "", designation: "", role: "", contact: "" }]);
  const addActionRow = () => setActions([...actions, { no: (actions.length + 1).toString(), action: "", responsible: "", targetDate: "", controlType: "", status: "", signature: "" }]);

  const mutation = trpc.formSubmissions.submit.useMutation({
    onSuccess: (data) => {
      setSubmitted(true);
      setSheetUrl(data.sheetUrl);
    },
    onError: (err) => {
      setError(err.message || "An error occurred during submission.");
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const headers = [
      "Department", "Location/Site", "Date of Incident", "Time of Incident", "Incident Ref No", "Reported By", "Date Reported",
      "Classification", "Severity Rating", "Potential Severity",
      "Immediate Actions",
      "Equipment Involved",
      "Brief Description", "Sequence of Events",
      "Persons Involved",
      "Injured Person", "Body Part", "Nature of Injury", "Treatment", "Hospital Referred", "Days Lost",
      "Barrier Energy/Hazard", "Required Barriers", "Existing Barriers", "Gap Analysis",
      "Unsafe Acts", "Unsafe Conditions", "Personal Factors", "Job Factors",
      "Direct Cause", "Root Cause",
      "Corrective Actions",
      "Regulatory Notification", "Notification Ref No", "Date Notified",
      "Required Documents", "Other Documents",
      "HOD Name", "Investigation Closed", "Date Closed", "HOD Comments",
      "Sign-off HSE Officer", "Sign-off HSE Manager", "Sign-off Site Manager", "Sign-off HOD", "Sign-off GM"
    ];

    const values = [
      formData.department, formData.locationSite, formData.dateOfIncident, formData.timeOfIncident, formData.incidentReferenceNo, formData.reportedByNameRole, formData.dateReported,
      Object.entries(formData.classification).filter(([_, v]) => v).map(([k]) => k).join(", "), formData.severityRating, formData.potentialSeverity,
      formData.immediateActions,
      equipment.map(e => `${e.type} (${e.id}) - ${e.condition}`).join(" | "),
      formData.briefDescription, formData.sequenceOfEvents,
      persons.map(p => `${p.name} (${p.empNo}) - ${p.role}`).join(" | "),
      formData.injuredPersonName, formData.bodyPartAffected, formData.natureOfInjury, formData.treatmentProvided, formData.referredToHospital, formData.daysLost,
      formData.barrierEnergyHazard, formData.barrierRequired, formData.barrierExisting, formData.barrierGapAnalysis,
      Object.entries(formData.unsafeActs).filter(([_, v]) => v === true).map(([k]) => k).join(", ") + (formData.unsafeActs.other ? `, Other: ${formData.unsafeActs.other}` : ""),
      Object.entries(formData.unsafeConditions).filter(([_, v]) => v === true).map(([k]) => k).join(", ") + (formData.unsafeConditions.other ? `, Other: ${formData.unsafeConditions.other}` : ""),
      Object.entries(formData.personalFactors).filter(([_, v]) => v === true).map(([k]) => k).join(", ") + (formData.personalFactors.other ? `, Other: ${formData.personalFactors.other}` : ""),
      Object.entries(formData.jobFactors).filter(([_, v]) => v === true).map(([k]) => k).join(", ") + (formData.jobFactors.other ? `, Other: ${formData.jobFactors.other}` : ""),
      formData.directCause, formData.rootCause,
      actions.map(a => `${a.no}. ${a.action} (Resp: ${a.responsible}, Target: ${a.targetDate}, Control: ${a.controlType}, Status: ${a.status})`).join(" | "),
      Object.entries(formData.regulatory).filter(([_, v]) => v).map(([k]) => k).join(", "), formData.notificationRefNo, formData.dateNotified,
      Object.entries(formData.documents).filter(([_, v]) => v).map(([k]) => k).join(", "), formData.otherDocuments,
      formData.hodName, formData.investigationClosed, formData.dateClosed, formData.hodComments,
      `${formData.signOff.hseOfficerName} (${formData.signOff.hseOfficerDate})`,
      `${formData.signOff.hseManagerName} (${formData.signOff.hseManagerDate})`,
      `${formData.signOff.siteManagerName} (${formData.signOff.siteManagerDate})`,
      `${formData.signOff.hodName} (${formData.signOff.hodDate})`,
      `${formData.signOff.gmName} (${formData.signOff.gmDate})`
    ];

    mutation.mutate({
      formCode: "TE-IMS-FRM-HSE-022",
      headers,
      values
    });
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 text-center">
          <h1 className="text-2xl font-bold text-[#081C2E] mb-4">Form submitted successfully.</h1>
          <p className="mb-6">View register: <a href={sheetUrl} target="_blank" rel="noopener noreferrer" className="text-[#C49A28] underline font-semibold">Google Sheet</a></p>
          <Link href="/" className="inline-block bg-[#081C2E] text-white px-6 py-2 rounded hover:bg-[#0a263d]">Return to Portal</Link>
        </div>
      </Layout>
    );
  }

  const sectionHeaderStyle = "bg-[#081C2E] text-white px-4 py-2 font-bold mt-6 mb-4";
  const labelStyle = "block text-sm font-semibold text-[#081C2E] mb-1";
  const inputStyle = "w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]";
  const tableHeaderStyle = "bg-[#081C2E] text-white p-2 text-sm font-semibold";

  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-6 bg-[#f4f6f9]">
        <nav className="mb-6">
          <Link href="/" className="text-[#081C2E] hover:text-[#C49A28] font-semibold">← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">FRM</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 font-bold">Incident and Accident Investigation Report</span>
        </nav>

        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg overflow-hidden border border-[#dde3ec]">
          {/* Document Control Table */}
          <div className="p-6 border-b border-[#dde3ec]">
            <table className="w-full border-collapse border border-[#dde3ec]">
              <tbody>
                <tr>
                  <td className="border border-[#dde3ec] p-2 bg-gray-50 font-bold w-1/4">Document Code</td>
                  <td className="border border-[#dde3ec] p-2 w-1/4 text-center">TE-IMS-FRM-HSE-022</td>
                  <td className="border border-[#dde3ec] p-2 bg-gray-50 font-bold w-1/4">Revision</td>
                  <td className="border border-[#dde3ec] p-2 w-1/4 text-center">Rev01</td>
                </tr>
                <tr>
                  <td className="border border-[#dde3ec] p-2 bg-gray-50 font-bold">Date</td>
                  <td className="border border-[#dde3ec] p-2 text-center">April 2026</td>
                  <td className="border border-[#dde3ec] p-2 bg-gray-50 font-bold">Status</td>
                  <td className="border border-[#dde3ec] p-2 text-center">Approved</td>
                </tr>
              </tbody>
            </table>
            <h1 className="text-2xl font-bold text-[#081C2E] mt-6 text-center">INCIDENT AND ACCIDENT INVESTIGATION REPORT</h1>
          </div>

          <div className="p-6">
            {/* Section 1: Incident Details */}
            <div className={sectionHeaderStyle}>SECTION 1 — INCIDENT DETAILS</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelStyle}>Department *</label>
                <input type="text" required className={inputStyle} value={formData.department} onChange={e => setFormData({...formData, department: e.target.value})} />
              </div>
              <div>
                <label className={labelStyle}>Location / Site *</label>
                <input type="text" required className={inputStyle} value={formData.locationSite} onChange={e => setFormData({...formData, locationSite: e.target.value})} />
              </div>
              <div>
                <label className={labelStyle}>Date of Incident *</label>
                <input type="date" required className={inputStyle} value={formData.dateOfIncident} onChange={e => setFormData({...formData, dateOfIncident: e.target.value})} />
              </div>
              <div>
                <label className={labelStyle}>Time of Incident *</label>
                <input type="time" required className={inputStyle} value={formData.timeOfIncident} onChange={e => setFormData({...formData, timeOfIncident: e.target.value})} />
              </div>
              <div>
                <label className={labelStyle}>Incident Reference No</label>
                <input type="text" className={inputStyle} value={formData.incidentReferenceNo} onChange={e => setFormData({...formData, incidentReferenceNo: e.target.value})} />
              </div>
              <div>
                <label className={labelStyle}>Reported By (Name / Role) *</label>
                <input type="text" required className={inputStyle} value={formData.reportedByNameRole} onChange={e => setFormData({...formData, reportedByNameRole: e.target.value})} />
              </div>
              <div>
                <label className={labelStyle}>Date Reported *</label>
                <input type="date" required className={inputStyle} value={formData.dateReported} onChange={e => setFormData({...formData, dateReported: e.target.value})} />
              </div>
            </div>

            {/* Section 2: Incident Classification */}
            <div className={sectionHeaderStyle}>SECTION 2 — INCIDENT CLASSIFICATION</div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-4">
              {Object.keys(formData.classification).map((key) => (
                <label key={key} className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" checked={(formData.classification as any)[key]} onChange={e => setFormData({...formData, classification: {...formData.classification, [key]: e.target.checked}})} />
                  <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                </label>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelStyle}>Severity Rating</label>
                <input type="text" className={inputStyle} value={formData.severityRating} onChange={e => setFormData({...formData, severityRating: e.target.value})} />
              </div>
              <div>
                <label className={labelStyle}>Potential Severity</label>
                <input type="text" className={inputStyle} value={formData.potentialSeverity} onChange={e => setFormData({...formData, potentialSeverity: e.target.value})} />
              </div>
            </div>

            {/* Section 3: Immediate Actions Taken */}
            <div className={sectionHeaderStyle}>SECTION 3 — IMMEDIATE ACTIONS TAKEN</div>
            <textarea className={inputStyle} rows={3} value={formData.immediateActions} onChange={e => setFormData({...formData, immediateActions: e.target.value})} placeholder="Describe actions taken immediately after the incident..."></textarea>

            {/* Section 4: Vehicles, Machinery or Equipment Involved */}
            <div className={sectionHeaderStyle}>SECTION 4 — VEHICLES, MACHINERY OR EQUIPMENT INVOLVED</div>
            <table className="w-full border-collapse border border-[#dde3ec] mb-2">
              <thead>
                <tr>
                  <th className={tableHeaderStyle}>Equipment Type</th>
                  <th className={tableHeaderStyle}>ID / Registration</th>
                  <th className={tableHeaderStyle}>Condition</th>
                </tr>
              </thead>
              <tbody>
                {equipment.map((row, idx) => (
                  <tr key={idx}>
                    <td className="border border-[#dde3ec] p-1"><input type="text" className="w-full p-1" value={row.type} onChange={e => {
                      const newEq = [...equipment];
                      newEq[idx].type = e.target.value;
                      setEquipment(newEq);
                    }} /></td>
                    <td className="border border-[#dde3ec] p-1"><input type="text" className="w-full p-1" value={row.id} onChange={e => {
                      const newEq = [...equipment];
                      newEq[idx].id = e.target.value;
                      setEquipment(newEq);
                    }} /></td>
                    <td className="border border-[#dde3ec] p-1"><input type="text" className="w-full p-1" value={row.condition} onChange={e => {
                      const newEq = [...equipment];
                      newEq[idx].condition = e.target.value;
                      setEquipment(newEq);
                    }} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button type="button" onClick={addEquipmentRow} className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 mb-4">+ Add Row</button>

            {/* Section 5: Description of Occurrence */}
            <div className={sectionHeaderStyle}>SECTION 5 — DESCRIPTION OF OCCURRENCE</div>
            <div className="space-y-4">
              <div>
                <label className={labelStyle}>Brief Description *</label>
                <textarea required className={inputStyle} rows={3} value={formData.briefDescription} onChange={e => setFormData({...formData, briefDescription: e.target.value})}></textarea>
              </div>
              <div>
                <label className={labelStyle}>Sequence of Events *</label>
                <textarea required className={inputStyle} rows={4} value={formData.sequenceOfEvents} onChange={e => setFormData({...formData, sequenceOfEvents: e.target.value})} placeholder="1. Event A... 2. Event B..."></textarea>
              </div>
            </div>

            {/* Section 7: Persons Involved */}
            <div className={sectionHeaderStyle}>SECTION 7 — PERSONS INVOLVED</div>
            <table className="w-full border-collapse border border-[#dde3ec] mb-2">
              <thead>
                <tr>
                  <th className={tableHeaderStyle}>Name</th>
                  <th className={tableHeaderStyle}>Emp No.</th>
                  <th className={tableHeaderStyle}>Designation</th>
                  <th className={tableHeaderStyle}>Role</th>
                  <th className={tableHeaderStyle}>Contact</th>
                </tr>
              </thead>
              <tbody>
                {persons.map((p, idx) => (
                  <tr key={idx}>
                    <td className="border border-[#dde3ec] p-1"><input type="text" className="w-full p-1 text-xs" value={p.name} onChange={e => {
                      const newP = [...persons]; newP[idx].name = e.target.value; setPersons(newP);
                    }} /></td>
                    <td className="border border-[#dde3ec] p-1"><input type="text" className="w-full p-1 text-xs" value={p.empNo} onChange={e => {
                      const newP = [...persons]; newP[idx].empNo = e.target.value; setPersons(newP);
                    }} /></td>
                    <td className="border border-[#dde3ec] p-1"><input type="text" className="w-full p-1 text-xs" value={p.designation} onChange={e => {
                      const newP = [...persons]; newP[idx].designation = e.target.value; setPersons(newP);
                    }} /></td>
                    <td className="border border-[#dde3ec] p-1"><input type="text" className="w-full p-1 text-xs" value={p.role} onChange={e => {
                      const newP = [...persons]; newP[idx].role = e.target.value; setPersons(newP);
                    }} /></td>
                    <td className="border border-[#dde3ec] p-1"><input type="text" className="w-full p-1 text-xs" value={p.contact} onChange={e => {
                      const newP = [...persons]; newP[idx].contact = e.target.value; setPersons(newP);
                    }} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button type="button" onClick={addPersonRow} className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 mb-4">+ Add Person</button>

            {/* Section 8: Injury / Illness Details */}
            <div className={sectionHeaderStyle}>SECTION 8 — INJURY / ILLNESS DETAILS</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelStyle}>Injured Person Name</label>
                <input type="text" className={inputStyle} value={formData.injuredPersonName} onChange={e => setFormData({...formData, injuredPersonName: e.target.value})} />
              </div>
              <div>
                <label className={labelStyle}>Body Part Affected</label>
                <input type="text" className={inputStyle} value={formData.bodyPartAffected} onChange={e => setFormData({...formData, bodyPartAffected: e.target.value})} />
              </div>
              <div>
                <label className={labelStyle}>Nature of Injury</label>
                <input type="text" className={inputStyle} value={formData.natureOfInjury} onChange={e => setFormData({...formData, natureOfInjury: e.target.value})} />
              </div>
              <div>
                <label className={labelStyle}>Treatment Provided</label>
                <input type="text" className={inputStyle} value={formData.treatmentProvided} onChange={e => setFormData({...formData, treatmentProvided: e.target.value})} />
              </div>
              <div>
                <label className={labelStyle}>Referred to Hospital (Y/N)</label>
                <select className={inputStyle} value={formData.referredToHospital} onChange={e => setFormData({...formData, referredToHospital: e.target.value})}>
                  <option value="">Select...</option>
                  <option value="Y">Yes</option>
                  <option value="N">No</option>
                </select>
              </div>
              <div>
                <label className={labelStyle}>Days Lost (if LTI)</label>
                <input type="number" className={inputStyle} value={formData.daysLost} onChange={e => setFormData({...formData, daysLost: e.target.value})} />
              </div>
            </div>

            {/* Section 9: Barrier Analysis */}
            <div className={sectionHeaderStyle}>SECTION 9 — BARRIER ANALYSIS</div>
            <div className="space-y-4">
              <div>
                <label className={labelStyle}>Step 1 — Identify the energy/hazard relevant to this incident</label>
                <textarea className={inputStyle} rows={2} value={formData.barrierEnergyHazard} onChange={e => setFormData({...formData, barrierEnergyHazard: e.target.value})}></textarea>
              </div>
              <div>
                <label className={labelStyle}>Step 2 — Required barriers (what should have been in place)</label>
                <textarea className={inputStyle} rows={2} value={formData.barrierRequired} onChange={e => setFormData({...formData, barrierRequired: e.target.value})}></textarea>
              </div>
              <div>
                <label className={labelStyle}>Step 3 — Existing barriers (what was actually in place)</label>
                <textarea className={inputStyle} rows={2} value={formData.barrierExisting} onChange={e => setFormData({...formData, barrierExisting: e.target.value})}></textarea>
              </div>
              <div>
                <label className={labelStyle}>Step 4 — Gap analysis (gaps between required and existing barriers)</label>
                <textarea className={inputStyle} rows={2} value={formData.barrierGapAnalysis} onChange={e => setFormData({...formData, barrierGapAnalysis: e.target.value})}></textarea>
              </div>
            </div>

            {/* Section 10: Contributing Factors */}
            <div className={sectionHeaderStyle}>SECTION 10 — CONTRIBUTING FACTORS</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Unsafe Acts */}
              <div>
                <h3 className="font-bold border-b border-gray-300 mb-2 text-[#081C2E]">Unsafe Acts</h3>
                <div className="space-y-1">
                  {Object.keys(formData.unsafeActs).filter(k => k !== 'other').map(k => (
                    <label key={k} className="flex items-center space-x-2 text-xs">
                      <input type="checkbox" checked={(formData.unsafeActs as any)[k]} onChange={e => setFormData({...formData, unsafeActs: {...formData.unsafeActs, [k]: e.target.checked}})} />
                      <span className="capitalize">{k.replace(/([A-Z])/g, ' $1')}</span>
                    </label>
                  ))}
                  <input type="text" className="w-full mt-2 text-xs border p-1" placeholder="Other..." value={formData.unsafeActs.other} onChange={e => setFormData({...formData, unsafeActs: {...formData.unsafeActs, other: e.target.value}})} />
                </div>
              </div>
              {/* Unsafe Conditions */}
              <div>
                <h3 className="font-bold border-b border-gray-300 mb-2 text-[#081C2E]">Unsafe Conditions</h3>
                <div className="space-y-1">
                  {Object.keys(formData.unsafeConditions).filter(k => k !== 'other').map(k => (
                    <label key={k} className="flex items-center space-x-2 text-xs">
                      <input type="checkbox" checked={(formData.unsafeConditions as any)[k]} onChange={e => setFormData({...formData, unsafeConditions: {...formData.unsafeConditions, [k]: e.target.checked}})} />
                      <span className="capitalize">{k.replace(/([A-Z])/g, ' $1')}</span>
                    </label>
                  ))}
                  <input type="text" className="w-full mt-2 text-xs border p-1" placeholder="Other..." value={formData.unsafeConditions.other} onChange={e => setFormData({...formData, unsafeConditions: {...formData.unsafeConditions, other: e.target.value}})} />
                </div>
              </div>
              {/* Personal Factors */}
              <div>
                <h3 className="font-bold border-b border-gray-300 mb-2 text-[#081C2E]">Personal Factors</h3>
                <div className="space-y-1">
                  {Object.keys(formData.personalFactors).filter(k => k !== 'other').map(k => (
                    <label key={k} className="flex items-center space-x-2 text-xs">
                      <input type="checkbox" checked={(formData.personalFactors as any)[k]} onChange={e => setFormData({...formData, personalFactors: {...formData.personalFactors, [k]: e.target.checked}})} />
                      <span className="capitalize">{k.replace(/([A-Z])/g, ' $1')}</span>
                    </label>
                  ))}
                  <input type="text" className="w-full mt-2 text-xs border p-1" placeholder="Other..." value={formData.personalFactors.other} onChange={e => setFormData({...formData, personalFactors: {...formData.personalFactors, other: e.target.value}})} />
                </div>
              </div>
              {/* Job Factors */}
              <div>
                <h3 className="font-bold border-b border-gray-300 mb-2 text-[#081C2E]">Job Factors</h3>
                <div className="space-y-1">
                  {Object.keys(formData.jobFactors).filter(k => k !== 'other').map(k => (
                    <label key={k} className="flex items-center space-x-2 text-xs">
                      <input type="checkbox" checked={(formData.jobFactors as any)[k]} onChange={e => setFormData({...formData, jobFactors: {...formData.jobFactors, [k]: e.target.checked}})} />
                      <span className="capitalize">{k.replace(/([A-Z])/g, ' $1')}</span>
                    </label>
                  ))}
                  <input type="text" className="w-full mt-2 text-xs border p-1" placeholder="Other..." value={formData.jobFactors.other} onChange={e => setFormData({...formData, jobFactors: {...formData.jobFactors, other: e.target.value}})} />
                </div>
              </div>
            </div>

            {/* Section 11: Root Cause Statement */}
            <div className={sectionHeaderStyle}>SECTION 11 — ROOT CAUSE STATEMENT</div>
            <div className="space-y-4">
              <div>
                <label className={labelStyle}>Direct Cause *</label>
                <textarea required className={inputStyle} rows={2} value={formData.directCause} onChange={e => setFormData({...formData, directCause: e.target.value})}></textarea>
              </div>
              <div>
                <label className={labelStyle}>Root Cause *</label>
                <textarea required className={inputStyle} rows={3} value={formData.rootCause} onChange={e => setFormData({...formData, rootCause: e.target.value})}></textarea>
              </div>
            </div>

            {/* Section 12: Corrective Actions */}
            <div className={sectionHeaderStyle}>SECTION 12 — CORRECTIVE AND PREVENTIVE ACTIONS</div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-[#dde3ec] mb-2">
                <thead>
                  <tr>
                    <th className={tableHeaderStyle}>No.</th>
                    <th className={tableHeaderStyle}>Action Required</th>
                    <th className={tableHeaderStyle}>Responsible</th>
                    <th className={tableHeaderStyle}>Target Date</th>
                    <th className={tableHeaderStyle}>Control Type</th>
                    <th className={tableHeaderStyle}>Status</th>
                    <th className={tableHeaderStyle}>Signature</th>
                  </tr>
                </thead>
                <tbody>
                  {actions.map((a, idx) => (
                    <tr key={idx}>
                      <td className="border border-[#dde3ec] p-1 text-center text-xs">{a.no}</td>
                      <td className="border border-[#dde3ec] p-1"><input type="text" className="w-full p-1 text-xs" value={a.action} onChange={e => {
                        const newA = [...actions]; newA[idx].action = e.target.value; setActions(newA);
                      }} /></td>
                      <td className="border border-[#dde3ec] p-1"><input type="text" className="w-full p-1 text-xs" value={a.responsible} onChange={e => {
                        const newA = [...actions]; newA[idx].responsible = e.target.value; setActions(newA);
                      }} /></td>
                      <td className="border border-[#dde3ec] p-1"><input type="date" className="w-full p-1 text-xs" value={a.targetDate} onChange={e => {
                        const newA = [...actions]; newA[idx].targetDate = e.target.value; setActions(newA);
                      }} /></td>
                      <td className="border border-[#dde3ec] p-1">
                        <select className="w-full p-1 text-xs" value={a.controlType} onChange={e => {
                          const newA = [...actions]; newA[idx].controlType = e.target.value; setActions(newA);
                        }}>
                          <option value="">Select...</option>
                          <option value="Elimination">Elimination</option>
                          <option value="Substitution">Substitution</option>
                          <option value="Engineering">Engineering</option>
                          <option value="Administrative">Administrative</option>
                          <option value="PPE">PPE</option>
                        </select>
                      </td>
                      <td className="border border-[#dde3ec] p-1"><input type="text" className="w-full p-1 text-xs" value={a.status} onChange={e => {
                        const newA = [...actions]; newA[idx].status = e.target.value; setActions(newA);
                      }} /></td>
                      <td className="border border-[#dde3ec] p-1"><input type="text" className="w-full p-1 text-xs" placeholder="Sign" value={a.signature} onChange={e => {
                        const newA = [...actions]; newA[idx].signature = e.target.value; setActions(newA);
                      }} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button type="button" onClick={addActionRow} className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 mb-4">+ Add Action</button>

            {/* Section 13: Regulatory Notification */}
            <div className={sectionHeaderStyle}>SECTION 13 — REGULATORY NOTIFICATION (KSA)</div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-4">
              {Object.keys(formData.regulatory).map((key) => (
                <label key={key} className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" checked={(formData.regulatory as any)[key]} onChange={e => setFormData({...formData, regulatory: {...formData.regulatory, [key]: e.target.checked}})} />
                  <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                </label>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelStyle}>Notification Reference No</label>
                <input type="text" className={inputStyle} value={formData.notificationRefNo} onChange={e => setFormData({...formData, notificationRefNo: e.target.value})} />
              </div>
              <div>
                <label className={labelStyle}>Date Notified</label>
                <input type="date" className={inputStyle} value={formData.dateNotified} onChange={e => setFormData({...formData, dateNotified: e.target.value})} />
              </div>
            </div>

            {/* Section 14: Required Documents */}
            <div className={sectionHeaderStyle}>SECTION 14 — REQUIRED DOCUMENTS</div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-4">
              {Object.keys(formData.documents).map((key) => (
                <label key={key} className="flex items-center space-x-2 text-xs">
                  <input type="checkbox" checked={(formData.documents as any)[key]} onChange={e => setFormData({...formData, documents: {...formData.documents, [key]: e.target.checked}})} />
                  <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                </label>
              ))}
            </div>
            <div>
              <label className={labelStyle}>Other Documents</label>
              <input type="text" className={inputStyle} value={formData.otherDocuments} onChange={e => setFormData({...formData, otherDocuments: e.target.value})} />
            </div>

            {/* Section 15: HOD Follow-up */}
            <div className={sectionHeaderStyle}>SECTION 15 — HOD / MANAGEMENT FOLLOW-UP</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className={labelStyle}>HOD Name</label>
                <input type="text" className={inputStyle} value={formData.hodName} onChange={e => setFormData({...formData, hodName: e.target.value})} />
              </div>
              <div>
                <label className={labelStyle}>Investigation Closed (Y/N)</label>
                <select className={inputStyle} value={formData.investigationClosed} onChange={e => setFormData({...formData, investigationClosed: e.target.value})}>
                  <option value="">Select...</option>
                  <option value="Y">Yes</option>
                  <option value="N">No</option>
                </select>
              </div>
              <div>
                <label className={labelStyle}>Date Closed</label>
                <input type="date" className={inputStyle} value={formData.dateClosed} onChange={e => setFormData({...formData, dateClosed: e.target.value})} />
              </div>
            </div>
            <div>
              <label className={labelStyle}>HOD Comments</label>
              <textarea className={inputStyle} rows={3} value={formData.hodComments} onChange={e => setFormData({...formData, hodComments: e.target.value})}></textarea>
            </div>

            {/* Section 16: Sign-off */}
            <div className={sectionHeaderStyle}>SECTION 16 — SIGN-OFF AND ROUTING</div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-[#dde3ec]">
                <thead>
                  <tr>
                    <th className={tableHeaderStyle}>Role</th>
                    <th className={tableHeaderStyle}>Name</th>
                    <th className={tableHeaderStyle}>Signature (Full Name)</th>
                    <th className={tableHeaderStyle}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { role: "HSE Officer", key: "hseOfficer" },
                    { role: "HSE Manager", key: "hseManager" },
                    { role: "Site Manager", key: "siteManager" },
                    { role: "HOD", key: "hod" },
                    { role: "General Manager", key: "gm" }
                  ].map((item) => (
                    <tr key={item.key}>
                      <td className="border border-[#dde3ec] p-2 bg-gray-50 font-bold text-xs">{item.role}</td>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="text" className="w-full p-1 text-xs" value={(formData.signOff as any)[`${item.key}Name`]} onChange={e => setFormData({...formData, signOff: {...formData.signOff, [`${item.key}Name`]: e.target.value}})} />
                      </td>
                      <td className="border border-[#dde3ec] p-1 text-center text-gray-400 italic text-xs">Full name acts as signature</td>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="date" className="w-full p-1 text-xs" value={(formData.signOff as any)[`${item.key}Date`]} onChange={e => setFormData({...formData, signOff: {...formData.signOff, [`${item.key}Date`]: e.target.value}})} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {error && <div className="mt-6 p-4 bg-red-50 text-red-700 border border-red-200 rounded">{error}</div>}

            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                disabled={mutation.isLoading}
                className={`bg-[#081C2E] text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-[#0a263d] transition-colors ${mutation.isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {mutation.isLoading ? "Submitting..." : "Submit Investigation Report"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
