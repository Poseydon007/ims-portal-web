import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_011() {
  const [submitted, setSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    ptwNo: "",
    dateIssued: "",
    validFrom: "",
    validUntil: "",
    siteLocation: "",
    specificAreaRig: "",
    requestedBy: "",
    company: "",
    contact: "",
    descriptionOfWork: "",
    // Permit Type
    hotWork: false,
    coldWork: false,
    confinedSpaceEntry: false,
    workAtHeight: false,
    electrical: false,
    excavation: false,
    liftingCrane: false,
    radiography: false,
    pressurisedSystems: false,
    breakingContainment: false,
    otherPermitType: false,
    // Associated Documents
    jhaNo: false,
    jhaDetails: "",
    swmsSopNo: false,
    swmsSopDetails: "",
    riskAssessmentNo: false,
    riskAssessmentDetails: "",
    confinedSpacePermitNo: false,
    confinedSpacePermitDetails: "",
    isolationCertificateNo: false,
    isolationCertificateDetails: "",
    excavationPermitNo: false,
    excavationPermitDetails: "",
    // Hazard Identification
    flammableMaterials: "",
    flammableControl: "",
    flammableVerified: "",
    toxicSubstances: "",
    toxicControl: "",
    toxicVerified: "",
    nonInertAtmosphere: "",
    nonInertControl: "",
    nonInertVerified: "",
    electricalHazards: "",
    electricalControl: "",
    electricalVerified: "",
    pressureStoredEnergy: "",
    pressureControl: "",
    pressureVerified: "",
    workAtHeightHazard: "",
    workAtHeightControl: "",
    workAtHeightVerified: "",
    confinedSpaceHazard: "",
    confinedSpaceControl: "",
    confinedSpaceVerified: "",
    excavationActivity: "",
    excavationControl: "",
    excavationVerified: "",
    simopsRisk: "",
    simopsControl: "",
    simopsVerified: "",
    environmentalRisk: "",
    environmentalControl: "",
    environmentalVerified: "",
    // Gas Testing
    gasO2Range: "19.5-23.5%",
    gasO2Time: "",
    gasO2Test1: "",
    gasO2Test2: "",
    gasO2Test3: "",
    gasO2Test4: "",
    gasO2InstrId: "",
    gasO2TestedBy: "",
    gasLelRange: "<10%",
    gasLelTime: "",
    gasLelTest1: "",
    gasLelTest2: "",
    gasLelTest3: "",
    gasLelTest4: "",
    gasLelInstrId: "",
    gasLelTestedBy: "",
    gasH2SRange: "<5ppm",
    gasH2STime: "",
    gasH2STest1: "",
    gasH2STest2: "",
    gasH2STest3: "",
    gasH2STest4: "",
    gasH2SInstrId: "",
    gasH2STestedBy: "",
    gasCORange: "<25ppm",
    gasCOTime: "",
    gasCOTest1: "",
    gasCOTest2: "",
    gasCOTest3: "",
    gasCOTest4: "",
    gasCOInstrId: "",
    gasCOTestedBy: "",
    gasOtherRange: "",
    gasOtherTime: "",
    gasOtherTest1: "",
    gasOtherTest2: "",
    gasOtherTest3: "",
    gasOtherTest4: "",
    gasOtherInstrId: "",
    gasOtherTestedBy: "",
    // Safety Precautions
    precAreaBarricaded: "",
    precAreaNotes: "",
    precFireExtinguisher: "",
    precFireNotes: "",
    precFireWatch: "",
    precFireWatchNotes: "",
    precVentilation: "",
    precVentilationNotes: "",
    precPersonnelBriefed: "",
    precBriefedNotes: "",
    precCommSystem: "",
    precCommNotes: "",
    precPpeAvailable: "",
    precPpeNotes: "",
    precSpillKit: "",
    precSpillNotes: "",
    precStandbyPerson: "",
    precStandbyNotes: "",
    precFallProtection: "",
    precFallNotes: "",
    precGroundConditions: "",
    precGroundNotes: "",
    precLiftingPlan: "",
    precLiftingNotes: "",
    // Signatures
    issuerName: "",
    issuerSignature: "",
    issuerDate: "",
    receiverName: "",
    receiverSignature: "",
    receiverDate: "",
    hseName: "",
    hseSignature: "",
    hseDate: "",
    siteManagerName: "",
    siteManagerSignature: "",
    siteManagerDate: "",
    // Extension
    extendedUntil: "",
    extensionReason: "",
    extensionGasRetest: "",
    extIssuerName: "",
    extIssuerSignature: "",
    extIssuerDate: "",
    extReceiverName: "",
    extReceiverSignature: "",
    extReceiverDate: "",
    // Closure
    workCompleted: "",
    areaCleaned: "",
    isolationsRemoved: "",
    locksRemoved: "",
    fireWatchMaintained: "",
    equipmentReturned: "",
    closureRemarks: "",
    closeIssuerName: "",
    closeIssuerSignature: "",
    closeIssuerDate: "",
    closeReceiverName: "",
    closeReceiverSignature: "",
    closeReceiverDate: "",
  });

  const [isolations, setIsolations] = useState([
    { equipment: "", point: "", method: "", lockNo: "", verifiedBy: "", time: "" },
  ]);

  const addIsolationRow = () => {
    setIsolations([...isolations, { equipment: "", point: "", method: "", lockNo: "", verifiedBy: "", time: "" }]);
  };

  const submitMutation = trpc.formSubmissions.submit.useMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleIsolationChange = (index: number, field: string, value: string) => {
    const updated = [...isolations];
    updated[index] = { ...updated[index], [field]: value };
    setIsolations(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const headers = [
      "PTW No", "Date Issued", "Valid From", "Valid Until", "Site/Location", "Specific Area/Rig", "Requested By", "Company", "Contact", "Description of Work",
      "Hot Work", "Cold Work", "Confined Space Entry", "Work at Height", "Electrical", "Excavation", "Lifting/Crane", "Radiography", "Pressurised Systems", "Breaking Containment", "Other Permit Type",
      "JHA No", "JHA Details", "SWMS/SOP No", "SWMS/SOP Details", "Risk Assessment No", "Risk Assessment Details", "Confined Space Permit No", "Confined Space Permit Details", "Isolation Certificate No", "Isolation Certificate Details", "Excavation Permit No", "Excavation Permit Details",
      "Flammable materials present", "Flammable Control", "Flammable Verified", "Toxic substances", "Toxic Control", "Toxic Verified", "Non-inert atmosphere / Low oxygen", "Non-inert Control", "Non-inert Verified", "Electrical hazards", "Electrical Control", "Electrical Verified", "Pressure / Stored energy", "Pressure Control", "Pressure Verified", "Work at height hazard", "Work at height Control", "Work at height Verified", "Confined space conditions", "Confined space Control", "Confined space Verified", "Excavation activity", "Excavation Control", "Excavation Verified", "SIMOPS risk", "SIMOPS Control", "SIMOPS Verified", "Environmental impact risk", "Environmental Control", "Environmental Verified",
      "O2 Range", "O2 Time", "O2 Test 1", "O2 Test 2", "O2 Test 3", "O2 Test 4", "O2 Instr ID", "O2 Tested By",
      "LEL Range", "LEL Time", "LEL Test 1", "LEL Test 2", "LEL Test 3", "LEL Test 4", "LEL Instr ID", "LEL Tested By",
      "H2S Range", "H2S Time", "H2S Test 1", "H2S Test 2", "H2S Test 3", "H2S Test 4", "H2S Instr ID", "H2S Tested By",
      "CO Range", "CO Time", "CO Test 1", "CO Test 2", "CO Test 3", "CO Test 4", "CO Instr ID", "CO Tested By",
      "Other Gas Range", "Other Gas Time", "Other Gas Test 1", "Other Gas Test 2", "Other Gas Test 3", "Other Gas Test 4", "Other Gas Instr ID", "Other Gas Tested By",
      "Energy Isolations",
      "Area barricaded", "Area notes", "Fire extinguisher", "Fire notes", "Fire watch", "Fire watch notes", "Ventilation", "Ventilation notes", "Personnel briefed", "Briefed notes", "Comm system", "Comm notes", "PPE available", "PPE notes", "Spill kit", "Spill notes", "Standby person", "Standby notes", "Fall protection", "Fall notes", "Ground conditions", "Ground notes", "Lifting plan", "Lifting notes",
      "Issuer Name", "Issuer Signature", "Issuer Date", "Receiver Name", "Receiver Signature", "Receiver Date", "HSE Name", "HSE Signature", "HSE Date", "Site Manager Name", "Site Manager Signature", "Site Manager Date",
      "Extended Until", "Extension Reason", "Extension Gas Retest", "Ext Issuer Name", "Ext Issuer Signature", "Ext Issuer Date", "Ext Receiver Name", "Ext Receiver Signature", "Ext Receiver Date",
      "Work completed", "Area cleaned", "Isolations removed", "Locks removed", "Fire watch maintained", "Equipment returned", "Closure Remarks", "Close Issuer Name", "Close Issuer Signature", "Close Issuer Date", "Close Receiver Name", "Close Receiver Signature", "Close Receiver Date"
    ];

    const isolationsSummary = isolations.map(i => `${i.equipment} (${i.point}, ${i.method}, Lock: ${i.lockNo}, By: ${i.verifiedBy}, Time: ${i.time})`).join(" | ");

    const values = [
      formData.ptwNo, formData.dateIssued, formData.validFrom, formData.validUntil, formData.siteLocation, formData.specificAreaRig, formData.requestedBy, formData.company, formData.contact, formData.descriptionOfWork,
      formData.hotWork ? "Yes" : "No", formData.coldWork ? "Yes" : "No", formData.confinedSpaceEntry ? "Yes" : "No", formData.workAtHeight ? "Yes" : "No", formData.electrical ? "Yes" : "No", formData.excavation ? "Yes" : "No", formData.liftingCrane ? "Yes" : "No", formData.radiography ? "Yes" : "No", formData.pressurisedSystems ? "Yes" : "No", formData.breakingContainment ? "Yes" : "No", formData.otherPermitType ? "Yes" : "No",
      formData.jhaNo ? "Yes" : "No", formData.jhaDetails, formData.swmsSopNo ? "Yes" : "No", formData.swmsSopDetails, formData.riskAssessmentNo ? "Yes" : "No", formData.riskAssessmentDetails, formData.confinedSpacePermitNo ? "Yes" : "No", formData.confinedSpacePermitDetails, formData.isolationCertificateNo ? "Yes" : "No", formData.isolationCertificateDetails, formData.excavationPermitNo ? "Yes" : "No", formData.excavationPermitDetails,
      formData.flammableMaterials, formData.flammableControl, formData.flammableVerified, formData.toxicSubstances, formData.toxicControl, formData.toxicVerified, formData.nonInertAtmosphere, formData.nonInertControl, formData.nonInertVerified, formData.electricalHazards, formData.electricalControl, formData.electricalVerified, formData.pressureStoredEnergy, formData.pressureControl, formData.pressureVerified, formData.workAtHeightHazard, formData.workAtHeightControl, formData.workAtHeightVerified, formData.confinedSpaceHazard, formData.confinedSpaceControl, formData.confinedSpaceVerified, formData.excavationActivity, formData.excavationControl, formData.excavationVerified, formData.simopsRisk, formData.simopsControl, formData.simopsVerified, formData.environmentalRisk, formData.environmentalControl, formData.environmentalVerified,
      formData.gasO2Range, formData.gasO2Time, formData.gasO2Test1, formData.gasO2Test2, formData.gasO2Test3, formData.gasO2Test4, formData.gasO2InstrId, formData.gasO2TestedBy,
      formData.gasLelRange, formData.gasLelTime, formData.gasLelTest1, formData.gasLelTest2, formData.gasLelTest3, formData.gasLelTest4, formData.gasLelInstrId, formData.gasLelTestedBy,
      formData.gasH2SRange, formData.gasH2STime, formData.gasH2STest1, formData.gasH2STest2, formData.gasH2STest3, formData.gasH2STest4, formData.gasH2SInstrId, formData.gasH2STestedBy,
      formData.gasCORange, formData.gasCOTime, formData.gasCOTest1, formData.gasCOTest2, formData.gasCOTest3, formData.gasCOTest4, formData.gasCOInstrId, formData.gasCOTestedBy,
      formData.gasOtherRange, formData.gasOtherTime, formData.gasOtherTest1, formData.gasOtherTest2, formData.gasOtherTest3, formData.gasOtherTest4, formData.gasOtherInstrId, formData.gasOtherTestedBy,
      isolationsSummary,
      formData.precAreaBarricaded, formData.precAreaNotes, formData.precFireExtinguisher, formData.precFireNotes, formData.precFireWatch, formData.precFireWatchNotes, formData.precVentilation, formData.precVentilationNotes, formData.precPersonnelBriefed, formData.precBriefedNotes, formData.precCommSystem, formData.precCommNotes, formData.precPpeAvailable, formData.precPpeNotes, formData.precSpillKit, formData.precSpillNotes, formData.precStandbyPerson, formData.precStandbyNotes, formData.precFallProtection, formData.precFallNotes, formData.precGroundConditions, formData.precGroundNotes, formData.precLiftingPlan, formData.precLiftingNotes,
      formData.issuerName, formData.issuerSignature, formData.issuerDate, formData.receiverName, formData.receiverSignature, formData.receiverDate, formData.hseName, formData.hseSignature, formData.hseDate, formData.siteManagerName, formData.siteManagerSignature, formData.siteManagerDate,
      formData.extendedUntil, formData.extensionReason, formData.extensionGasRetest, formData.extIssuerName, formData.extIssuerSignature, formData.extIssuerDate, formData.extReceiverName, formData.extReceiverSignature, formData.extReceiverDate,
      formData.workCompleted, formData.areaCleaned, formData.isolationsRemoved, formData.locksRemoved, formData.fireWatchMaintained, formData.equipmentReturned, formData.closureRemarks, formData.closeIssuerName, formData.closeIssuerSignature, formData.closeIssuerDate, formData.closeReceiverName, formData.closeReceiverSignature, formData.closeReceiverDate
    ];

    try {
      const result = await submitMutation.mutateAsync({
        formCode: "TE-IMS-FRM-HSE-011",
        headers,
        values,
      });
      setSheetUrl(result.sheetUrl);
      setSubmitted(true);
    } catch (err) {
      setError("Failed to submit form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto py-12 px-4">
          <div className="bg-white p-8 rounded-lg shadow-md border border-[#dde3ec] text-center">
            <h2 className="text-2xl font-bold text-[#081C2E] mb-4">Form submitted successfully.</h2>
            <p className="mb-6">View register: <a href={sheetUrl} target="_blank" rel="noopener noreferrer" className="text-[#C49A28] underline font-semibold">Google Sheet</a></p>
            <Link href="/">
              <a className="bg-[#081C2E] text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors">Return to Portal</a>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-8 px-4 font-['Nunito_Sans']">
        <div className="mb-6">
          <Link href="/">
            <a className="text-[#081C2E] hover:underline">← Portal Home</a>
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/docs/frm" className="text-gray-500 hover:text-[#C49A28] transition-colors cursor-pointer">FRM</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-[#081C2E] font-semibold">Permit to Work (PTW)</span>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg overflow-hidden border border-[#dde3ec]">
          {/* Document Control Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#081C2E] text-white">
                  <th className="p-2 border border-slate-600 text-left">Document</th>
                  <th className="p-2 border border-slate-600 text-left">Revision</th>
                  <th className="p-2 border border-slate-600 text-left">Date</th>
                  <th className="p-2 border border-slate-600 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-[#dde3ec]">TE-IMS-FRM-HSE-011</td>
                  <td className="p-2 border border-[#dde3ec]">Rev 01</td>
                  <td className="p-2 border border-[#dde3ec]">09 Apr 2026</td>
                  <td className="p-2 border border-[#dde3ec]">Approved for Implementation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-6">
            <h1 className="text-2xl font-bold text-[#081C2E] mb-6 text-center">PERMIT TO WORK (PTW)</h1>

            {/* General Information */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="md:col-span-1">
                <label className="block text-xs font-bold text-[#081C2E] uppercase mb-1">PTW No*</label>
                <input type="text" name="ptwNo" required value={formData.ptwNo} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded" />
              </div>
              <div className="md:col-span-1">
                <label className="block text-xs font-bold text-[#081C2E] uppercase mb-1">Date Issued*</label>
                <input type="date" name="dateIssued" required value={formData.dateIssued} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded" />
              </div>
              <div className="md:col-span-1">
                <label className="block text-xs font-bold text-[#081C2E] uppercase mb-1">Valid From*</label>
                <input type="datetime-local" name="validFrom" required value={formData.validFrom} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded" />
              </div>
              <div className="md:col-span-1">
                <label className="block text-xs font-bold text-[#081C2E] uppercase mb-1">Valid Until*</label>
                <input type="datetime-local" name="validUntil" required value={formData.validUntil} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-[#081C2E] uppercase mb-1">Site/Location*</label>
                <input type="text" name="siteLocation" required value={formData.siteLocation} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-[#081C2E] uppercase mb-1">Specific Area/Rig*</label>
                <input type="text" name="specificAreaRig" required value={formData.specificAreaRig} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded" />
              </div>
              <div className="md:col-span-1">
                <label className="block text-xs font-bold text-[#081C2E] uppercase mb-1">Requested By*</label>
                <input type="text" name="requestedBy" required value={formData.requestedBy} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded" />
              </div>
              <div className="md:col-span-1">
                <label className="block text-xs font-bold text-[#081C2E] uppercase mb-1">Company*</label>
                <input type="text" name="company" required value={formData.company} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-[#081C2E] uppercase mb-1">Contact Details*</label>
                <input type="text" name="contact" required value={formData.contact} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded" />
              </div>
              <div className="md:col-span-4">
                <label className="block text-xs font-bold text-[#081C2E] uppercase mb-1">Description of Work*</label>
                <textarea name="descriptionOfWork" required value={formData.descriptionOfWork} onChange={handleInputChange} rows={3} className="w-full p-2 border border-[#dde3ec] rounded"></textarea>
              </div>
            </div>

            {/* Permit Type */}
            <div className="mb-6">
              <div className="bg-[#081C2E] text-white p-2 text-sm font-bold uppercase mb-3">Permit Type (Select All Applicable)</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { id: "hotWork", label: "Hot Work" },
                  { id: "coldWork", label: "Cold Work" },
                  { id: "confinedSpaceEntry", label: "Confined Space Entry" },
                  { id: "workAtHeight", label: "Work at Height" },
                  { id: "electrical", label: "Electrical" },
                  { id: "excavation", label: "Excavation" },
                  { id: "liftingCrane", label: "Lifting/Crane" },
                  { id: "radiography", label: "Radiography" },
                  { id: "pressurisedSystems", label: "Pressurised Systems" },
                  { id: "breakingContainment", label: "Breaking Containment" },
                  { id: "otherPermitType", label: "Other" },
                ].map((item) => (
                  <label key={item.id} className="flex items-center space-x-2 text-sm cursor-pointer">
                    <input type="checkbox" name={item.id} checked={(formData as any)[item.id]} onChange={handleInputChange} className="w-4 h-4 text-[#C49A28]" />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Associated Documents */}
            <div className="mb-6">
              <div className="bg-[#081C2E] text-white p-2 text-sm font-bold uppercase mb-3">Associated Documents</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                {[
                  { id: "jha", label: "JHA No" },
                  { id: "swmsSop", label: "SWMS/SOP No" },
                  { id: "riskAssessment", label: "Risk Assessment No" },
                  { id: "confinedSpacePermit", label: "Confined Space Permit No" },
                  { id: "isolationCertificate", label: "Isolation Certificate No" },
                  { id: "excavationPermit", label: "Excavation Permit No" },
                ].map((item) => (
                  <div key={item.id} className="flex items-center space-x-2">
                    <input type="checkbox" name={`${item.id}No`} checked={(formData as any)[`${item.id}No`]} onChange={handleInputChange} className="w-4 h-4" />
                    <span className="text-sm min-w-[150px]">{item.label}</span>
                    <input type="text" name={`${item.id}Details`} value={(formData as any)[`${item.id}Details`]} onChange={handleInputChange} className="flex-1 p-1 text-sm border border-[#dde3ec] rounded" placeholder="Reference/Details" />
                  </div>
                ))}
              </div>
            </div>

            {/* Hazard Identification */}
            <div className="mb-6">
              <div className="bg-[#081C2E] text-white p-2 text-sm font-bold uppercase">Hazard Identification</div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-[#081C2E]">
                      <th className="p-2 border border-[#dde3ec] text-left">Hazard</th>
                      <th className="p-2 border border-[#dde3ec] text-center w-20">Y/N</th>
                      <th className="p-2 border border-[#dde3ec] text-left">Control Measure</th>
                      <th className="p-2 border border-[#dde3ec] text-center w-20">Verified</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: "flammable", label: "Flammable materials present" },
                      { id: "toxic", label: "Toxic substances" },
                      { id: "nonInert", label: "Non-inert atmosphere / Low oxygen" },
                      { id: "electricalHazards", label: "Electrical hazards" },
                      { id: "pressure", label: "Pressure / Stored energy" },
                      { id: "workAtHeightHazard", label: "Work at height" },
                      { id: "confinedSpaceHazard", label: "Confined space conditions" },
                      { id: "excavationActivity", label: "Excavation activity" },
                      { id: "simops", label: "SIMOPS (Simultaneous Operations) risk" },
                      { id: "environmental", label: "Environmental impact risk" },
                    ].map((item) => (
                      <tr key={item.id}>
                        <td className="p-2 border border-[#dde3ec]">{item.label}</td>
                        <td className="p-2 border border-[#dde3ec]">
                          <select name={`${item.id}Materials` || `${item.id}Substances` || `${item.id}Atmosphere` || `${item.id}Hazards` || `${item.id}Energy` || `${item.id}Hazard` || `${item.id}Activity` || `${item.id}Risk`} 
                            value={(formData as any)[item.id === "flammable" ? "flammableMaterials" : item.id === "toxic" ? "toxicSubstances" : item.id === "nonInert" ? "nonInertAtmosphere" : item.id === "pressure" ? "pressureStoredEnergy" : item.id === "simops" ? "simopsRisk" : item.id === "environmental" ? "environmentalRisk" : item.id]} 
                            onChange={handleInputChange} 
                            className="w-full p-1 border border-none bg-transparent">
                            <option value=""></option>
                            <option value="Y">Y</option>
                            <option value="N">N</option>
                          </select>
                        </td>
                        <td className="p-2 border border-[#dde3ec]">
                          <input type="text" name={`${item.id === "flammable" ? "flammable" : item.id === "toxic" ? "toxic" : item.id === "nonInert" ? "nonInert" : item.id === "pressure" ? "pressure" : item.id === "simops" ? "simops" : item.id === "environmental" ? "environmental" : item.id}Control`} value={(formData as any)[`${item.id === "flammable" ? "flammable" : item.id === "toxic" ? "toxic" : item.id === "nonInert" ? "nonInert" : item.id === "pressure" ? "pressure" : item.id === "simops" ? "simops" : item.id === "environmental" ? "environmental" : item.id}Control`]} onChange={handleInputChange} className="w-full p-1 border-none bg-transparent" />
                        </td>
                        <td className="p-2 border border-[#dde3ec]">
                          <input type="text" name={`${item.id === "flammable" ? "flammable" : item.id === "toxic" ? "toxic" : item.id === "nonInert" ? "nonInert" : item.id === "pressure" ? "pressure" : item.id === "simops" ? "simops" : item.id === "environmental" ? "environmental" : item.id}Verified`} value={(formData as any)[`${item.id === "flammable" ? "flammable" : item.id === "toxic" ? "toxic" : item.id === "nonInert" ? "nonInert" : item.id === "pressure" ? "pressure" : item.id === "simops" ? "simops" : item.id === "environmental" ? "environmental" : item.id}Verified`]} onChange={handleInputChange} className="w-full p-1 border-none bg-transparent text-center" placeholder="Initial" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Gas Testing */}
            <div className="mb-6">
              <div className="bg-[#081C2E] text-white p-2 text-sm font-bold uppercase">Gas Testing (If Applicable)</div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-[#081C2E]">
                      <th className="p-2 border border-[#dde3ec] text-left">Test</th>
                      <th className="p-2 border border-[#dde3ec] text-left">Range</th>
                      <th className="p-2 border border-[#dde3ec] text-left">Time</th>
                      <th className="p-2 border border-[#dde3ec] text-center">Test 1</th>
                      <th className="p-2 border border-[#dde3ec] text-center">Test 2</th>
                      <th className="p-2 border border-[#dde3ec] text-center">Test 3</th>
                      <th className="p-2 border border-[#dde3ec] text-center">Test 4</th>
                      <th className="p-2 border border-[#dde3ec] text-left">Instr ID</th>
                      <th className="p-2 border border-[#dde3ec] text-left">By/Cert</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: "O2", label: "O₂", range: "19.5-23.5%" },
                      { id: "Lel", label: "LEL", range: "<10%" },
                      { id: "H2S", label: "H₂S", range: "<5ppm" },
                      { id: "CO", label: "CO", range: "<25ppm" },
                      { id: "Other", label: "Other", range: "" },
                    ].map((item) => (
                      <tr key={item.id}>
                        <td className="p-2 border border-[#dde3ec] font-semibold">{item.label}</td>
                        <td className="p-2 border border-[#dde3ec] text-xs">{item.range || <input type="text" name={`gas${item.id}Range`} value={(formData as any)[`gas${item.id}Range`]} onChange={handleInputChange} className="w-full p-0 border-none bg-transparent" />}</td>
                        <td className="p-2 border border-[#dde3ec]"><input type="time" name={`gas${item.id}Time`} value={(formData as any)[`gas${item.id}Time`]} onChange={handleInputChange} className="w-full p-0 border-none bg-transparent" /></td>
                        <td className="p-2 border border-[#dde3ec]"><input type="text" name={`gas${item.id}Test1`} value={(formData as any)[`gas${item.id}Test1`]} onChange={handleInputChange} className="w-full p-0 border-none bg-transparent text-center" /></td>
                        <td className="p-2 border border-[#dde3ec]"><input type="text" name={`gas${item.id}Test2`} value={(formData as any)[`gas${item.id}Test2`]} onChange={handleInputChange} className="w-full p-0 border-none bg-transparent text-center" /></td>
                        <td className="p-2 border border-[#dde3ec]"><input type="text" name={`gas${item.id}Test3`} value={(formData as any)[`gas${item.id}Test3`]} onChange={handleInputChange} className="w-full p-0 border-none bg-transparent text-center" /></td>
                        <td className="p-2 border border-[#dde3ec]"><input type="text" name={`gas${item.id}Test4`} value={(formData as any)[`gas${item.id}Test4`]} onChange={handleInputChange} className="w-full p-0 border-none bg-transparent text-center" /></td>
                        <td className="p-2 border border-[#dde3ec]"><input type="text" name={`gas${item.id}InstrId`} value={(formData as any)[`gas${item.id}InstrId`]} onChange={handleInputChange} className="w-full p-0 border-none bg-transparent" /></td>
                        <td className="p-2 border border-[#dde3ec]"><input type="text" name={`gas${item.id}TestedBy`} value={(formData as any)[`gas${item.id}TestedBy`]} onChange={handleInputChange} className="w-full p-0 border-none bg-transparent" /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Energy Isolation */}
            <div className="mb-6">
              <div className="bg-[#081C2E] text-white p-2 text-sm font-bold uppercase flex justify-between items-center">
                <span>Energy Isolation / LOTO</span>
                <button type="button" onClick={addIsolationRow} className="bg-[#C49A28] text-[#081C2E] px-2 py-0.5 text-xs rounded hover:bg-opacity-90 transition-colors">Add Row</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-[#081C2E]">
                      <th className="p-2 border border-[#dde3ec] text-left w-10">#</th>
                      <th className="p-2 border border-[#dde3ec] text-left">Equipment Isolated</th>
                      <th className="p-2 border border-[#dde3ec] text-left">Isolation Point</th>
                      <th className="p-2 border border-[#dde3ec] text-left">Method</th>
                      <th className="p-2 border border-[#dde3ec] text-left">Lock No</th>
                      <th className="p-2 border border-[#dde3ec] text-left">Verified By</th>
                      <th className="p-2 border border-[#dde3ec] text-left">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isolations.map((row, idx) => (
                      <tr key={idx}>
                        <td className="p-2 border border-[#dde3ec] text-center">{idx + 1}</td>
                        <td className="p-2 border border-[#dde3ec]"><input type="text" value={row.equipment} onChange={(e) => handleIsolationChange(idx, "equipment", e.target.value)} className="w-full p-0 border-none bg-transparent" /></td>
                        <td className="p-2 border border-[#dde3ec]"><input type="text" value={row.point} onChange={(e) => handleIsolationChange(idx, "point", e.target.value)} className="w-full p-0 border-none bg-transparent" /></td>
                        <td className="p-2 border border-[#dde3ec]"><input type="text" value={row.method} onChange={(e) => handleIsolationChange(idx, "method", e.target.value)} className="w-full p-0 border-none bg-transparent" /></td>
                        <td className="p-2 border border-[#dde3ec]"><input type="text" value={row.lockNo} onChange={(e) => handleIsolationChange(idx, "lockNo", e.target.value)} className="w-full p-0 border-none bg-transparent" /></td>
                        <td className="p-2 border border-[#dde3ec]"><input type="text" value={row.verifiedBy} onChange={(e) => handleIsolationChange(idx, "verifiedBy", e.target.value)} className="w-full p-0 border-none bg-transparent" /></td>
                        <td className="p-2 border border-[#dde3ec]"><input type="time" value={row.time} onChange={(e) => handleIsolationChange(idx, "time", e.target.value)} className="w-full p-0 border-none bg-transparent" /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Safety Precautions */}
            <div className="mb-6">
              <div className="bg-[#081C2E] text-white p-2 text-sm font-bold uppercase">Safety Precautions</div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-[#081C2E]">
                      <th className="p-2 border border-[#dde3ec] text-left">Precaution</th>
                      <th className="p-2 border border-[#dde3ec] text-center w-24">Y/N/NA</th>
                      <th className="p-2 border border-[#dde3ec] text-left">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: "precAreaBarricaded", label: "Area barricaded / isolated" },
                      { id: "precFireExtinguisher", label: "Fire extinguisher(s) positioned" },
                      { id: "precFireWatch", label: "Fire watch assigned" },
                      { id: "precVentilation", label: "Ventilation in place" },
                      { id: "precPersonnelBriefed", label: "Personnel briefed" },
                      { id: "precCommSystem", label: "Communication system tested" },
                      { id: "precPpeAvailable", label: "PPE confirmed available" },
                      { id: "precSpillKit", label: "Spill kit available" },
                      { id: "precStandbyPerson", label: "Standby person assigned" },
                      { id: "precFallProtection", label: "Fall protection verified" },
                      { id: "precGroundConditions", label: "Ground conditions safe" },
                      { id: "precLiftingPlan", label: "Lifting plan approved" },
                    ].map((item) => (
                      <tr key={item.id}>
                        <td className="p-2 border border-[#dde3ec]">{item.label}</td>
                        <td className="p-2 border border-[#dde3ec]">
                          <select name={item.id} value={(formData as any)[item.id]} onChange={handleInputChange} className="w-full p-1 border-none bg-transparent">
                            <option value=""></option>
                            <option value="Y">Y</option>
                            <option value="N">N</option>
                            <option value="NA">NA</option>
                          </select>
                        </td>
                        <td className="p-2 border border-[#dde3ec]">
                          <input type="text" name={`${item.id}Notes`} value={(formData as any)[`${item.id}Notes`]} onChange={handleInputChange} className="w-full p-1 border-none bg-transparent" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Authorisation Signatures */}
            <div className="mb-6">
              <div className="bg-[#081C2E] text-white p-2 text-sm font-bold uppercase mb-3 text-center">NO WORK SHALL COMMENCE UNTIL ALL SIGNATURES OBTAINED</div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-[#081C2E]">
                      <th className="p-2 border border-[#dde3ec] text-left">Role</th>
                      <th className="p-2 border border-[#dde3ec] text-left">Name</th>
                      <th className="p-2 border border-[#dde3ec] text-left">Signature (Full Name)</th>
                      <th className="p-2 border border-[#dde3ec] text-left">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: "issuer", label: "Permit Issuer" },
                      { id: "receiver", label: "Permit Receiver" },
                      { id: "hse", label: "HSE Representative" },
                      { id: "siteManager", label: "Site Manager (if High Risk)" },
                    ].map((item) => (
                      <tr key={item.id}>
                        <td className="p-2 border border-[#dde3ec] font-semibold">{item.label}</td>
                        <td className="p-2 border border-[#dde3ec]"><input type="text" name={`${item.id}Name`} value={(formData as any)[`${item.id}Name`]} onChange={handleInputChange} className="w-full p-1 border-none bg-transparent" /></td>
                        <td className="p-2 border border-[#dde3ec]"><input type="text" name={`${item.id}Signature`} value={(formData as any)[`${item.id}Signature`]} onChange={handleInputChange} placeholder="Full name (acts as signature)" className="w-full p-1 border-none bg-transparent" /></td>
                        <td className="p-2 border border-[#dde3ec]"><input type="date" name={`${item.id}Date`} value={(formData as any)[`${item.id}Date`]} onChange={handleInputChange} className="w-full p-1 border-none bg-transparent" /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Extension */}
            <div className="mb-6">
              <div className="bg-[#081C2E] text-white p-2 text-sm font-bold uppercase mb-3">Permit Extension</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                <div>
                  <label className="block text-xs font-bold text-[#081C2E] uppercase mb-1">Extended Until</label>
                  <input type="datetime-local" name="extendedUntil" value={formData.extendedUntil} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#081C2E] uppercase mb-1">Reason</label>
                  <input type="text" name="extensionReason" value={formData.extensionReason} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#081C2E] uppercase mb-1">Gas Retest Done (Y/NA)</label>
                  <select name="extensionGasRetest" value={formData.extensionGasRetest} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded">
                    <option value=""></option>
                    <option value="Y">Y</option>
                    <option value="NA">NA</option>
                  </select>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-[#081C2E]">
                      <th className="p-2 border border-[#dde3ec] text-left">Role</th>
                      <th className="p-2 border border-[#dde3ec] text-left">Name</th>
                      <th className="p-2 border border-[#dde3ec] text-left">Signature (Full Name)</th>
                      <th className="p-2 border border-[#dde3ec] text-left">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: "extIssuer", label: "Issuer" },
                      { id: "extReceiver", label: "Receiver" },
                    ].map((item) => (
                      <tr key={item.id}>
                        <td className="p-2 border border-[#dde3ec] font-semibold">{item.label}</td>
                        <td className="p-2 border border-[#dde3ec]"><input type="text" name={`${item.id}Name`} value={(formData as any)[`${item.id}Name`]} onChange={handleInputChange} className="w-full p-1 border-none bg-transparent" /></td>
                        <td className="p-2 border border-[#dde3ec]"><input type="text" name={`${item.id}Signature`} value={(formData as any)[`${item.id}Signature`]} onChange={handleInputChange} placeholder="Full name (acts as signature)" className="w-full p-1 border-none bg-transparent" /></td>
                        <td className="p-2 border border-[#dde3ec]"><input type="date" name={`${item.id}Date`} value={(formData as any)[`${item.id}Date`]} onChange={handleInputChange} className="w-full p-1 border-none bg-transparent" /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Closure */}
            <div className="mb-6">
              <div className="bg-[#081C2E] text-white p-2 text-sm font-bold uppercase mb-3">Permit Closure</div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                {[
                  { id: "workCompleted", label: "Work completed (Y/N)" },
                  { id: "areaCleaned", label: "Area cleaned (Y/N)" },
                  { id: "isolationsRemoved", label: "Isolations removed (Y/NA)" },
                  { id: "locksRemoved", label: "Locks removed (Y/NA)" },
                  { id: "fireWatchMaintained", label: "Fire watch maintained (Y/NA)" },
                  { id: "equipmentReturned", label: "Equipment returned (Y/NA)" },
                ].map((item) => (
                  <div key={item.id}>
                    <label className="block text-xs font-bold text-[#081C2E] uppercase mb-1">{item.label}</label>
                    <select name={item.id} value={(formData as any)[item.id]} onChange={handleInputChange} className="w-full p-2 border border-[#dde3ec] rounded">
                      <option value=""></option>
                      <option value="Y">Y</option>
                      <option value="N">N</option>
                      <option value="NA">NA</option>
                    </select>
                  </div>
                ))}
                <div className="md:col-span-3">
                  <label className="block text-xs font-bold text-[#081C2E] uppercase mb-1">Remarks</label>
                  <textarea name="closureRemarks" value={formData.closureRemarks} onChange={handleInputChange} rows={2} className="w-full p-2 border border-[#dde3ec] rounded"></textarea>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-[#081C2E]">
                      <th className="p-2 border border-[#dde3ec] text-left">Role</th>
                      <th className="p-2 border border-[#dde3ec] text-left">Name</th>
                      <th className="p-2 border border-[#dde3ec] text-left">Signature (Full Name)</th>
                      <th className="p-2 border border-[#dde3ec] text-left">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: "closeIssuer", label: "Permit Issuer" },
                      { id: "closeReceiver", label: "Permit Receiver" },
                    ].map((item) => (
                      <tr key={item.id}>
                        <td className="p-2 border border-[#dde3ec] font-semibold">{item.label}</td>
                        <td className="p-2 border border-[#dde3ec]"><input type="text" name={`${item.id}Name`} value={(formData as any)[`${item.id}Name`]} onChange={handleInputChange} className="w-full p-1 border-none bg-transparent" /></td>
                        <td className="p-2 border border-[#dde3ec]"><input type="text" name={`${item.id}Signature`} value={(formData as any)[`${item.id}Signature`]} onChange={handleInputChange} placeholder="Full name (acts as signature)" className="w-full p-1 border-none bg-transparent" /></td>
                        <td className="p-2 border border-[#dde3ec]"><input type="date" name={`${item.id}Date`} value={(formData as any)[`${item.id}Date`]} onChange={handleInputChange} className="w-full p-1 border-none bg-transparent" /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isLoading}
                className={`bg-[#081C2E] text-white px-8 py-3 rounded font-bold uppercase tracking-wider hover:bg-opacity-90 transition-all shadow-md ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : "Submit Permit to Work"}
              </button>
            </div>
          </div>
        </form>

        {/* Revision History */}
        <div className="mt-8 overflow-x-auto">
          <table className="w-full text-[10px] border-collapse text-gray-500">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-1 border border-[#dde3ec] text-left">Rev</th>
                <th className="p-1 border border-[#dde3ec] text-left">Date</th>
                <th className="p-1 border border-[#dde3ec] text-left">Description of Changes</th>
                <th className="p-1 border border-[#dde3ec] text-left">Author</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-1 border border-[#dde3ec]">00</td>
                <td className="p-1 border border-[#dde3ec]">01 Mar 2026</td>
                <td className="p-1 border border-[#dde3ec]">Initial release – Permit to Work form</td>
                <td className="p-1 border border-[#dde3ec]">JM</td>
              </tr>
              <tr>
                <td className="p-1 border border-[#dde3ec]">01</td>
                <td className="p-1 border border-[#dde3ec]">09 Apr 2026</td>
                <td className="p-1 border border-[#dde3ec]">Rebuild to IMS design standard. Enhanced for drilling-specific PTW requirements.</td>
                <td className="p-1 border border-[#dde3ec]">Charlie</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
