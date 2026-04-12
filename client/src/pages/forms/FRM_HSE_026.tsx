import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_026() {
  const [formData, setFormData] = useState({
    // Section 1: Incident Reference
    incidentFlashReportNo: "",
    dateOfIncident: "",
    timeOfIncident: "",
    siteProjectName: "",
    exactLocationOnSite: "",
    typeOfIncident: {
      injury: false,
      nearMiss: false,
      propertyDamage: false,
      environmental: false,
      fire: false,
      vehicle: false,
      security: false,
      other: false,
    },
    investigationLead: "",
    statementTakenBy: "",
    dateStatementTaken: "",

    // Section 2: Witness Identity
    witnessFullName: "",
    witnessPosition: "",
    witnessEmployer: "",
    witnessIDNo: "",
    witnessIqamaNo: "",
    witnessNationality: "",
    witnessMobileNumber: "",
    witnessYearsExperience: "",
    languageOfStatement: {
      english: false,
      arabic: false,
      other: false,
      otherText: "",
    },
    translatorRequired: {
      no: false,
      yes: false,
      translatorName: "",
    },

    // Section 3: Witness Position and Role at Time of Incident
    relationshipToIncident: {
      directlyInvolved: false,
      directWitness: false,
      nearby: false,
      firstResponder: false,
      arrivedAfter: false,
    },
    yourTaskAtTime: "",
    distanceFromIncident: "",
    lineOfSight: {
      clear: false,
      partial: false,
      obstructed: false,
    },
    lightingConditions: {
      daylight: false,
      duskDawn: false,
      artificial: false,
      dark: false,
    },
    weatherEnvironment: "",
    noiseLevel: {
      quiet: false,
      normal: false,
      loud: false,
    },
    ppeWearing: "",
    whoElseWasPresent: "",

    // Section 4: Narrative Statement
    narrativeStatement: "",

    // Section 5: Structured Questions
    q5_1: "",
    q5_2: "",
    q5_3: "",
    q5_4: "",
    q5_5: "",
    q5_6: "",
    q5_7: "",
    q5_8: "",
    q5_9: "",
    q5_10: "",
    q5_11: "",
    q5_12: "",

    // Section 7: Witness Declaration
    witnessSignature: "",
    witnessPrintedName: "",
    witnessSignDate: "",
    witnessSignTime: "",
    locationOfStatement: "",

    // Section 8: Statement Taker / Investigator
    investigatorName: "",
    investigatorPosition: "",
    investigatorRole: {
      leadInvestigator: false,
      hseOfficer: false,
      supervisor: false,
      other: false,
      otherText: "",
    },
    investigatorTranslatorUsed: "",
    investigatorSignature: "",
    investigatorDate: "",

    // Section 9: HSE Review and Linking
    hseReviewedBy: "",
    hseDateReviewed: "",
    hseConsistency: {
      consistent: false,
      minorVariance: false,
      materialVariance: false,
      varianceExplanation: "",
    },
    hseLinkedNCR: "",
    hseLinkedInvestigation: "",
    hseAddedToIndex: {
      yes: false,
      no: false,
    },
    hseManagerComments: "",
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      if (name.includes(".")) {
        const [parent, child] = name.split(".");
        setFormData((prev: any) => ({
          ...prev,
          [parent]: {
            ...prev[parent],
            [child]: checked,
          },
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleNestedChange = (parent: string, child: string, value: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [child]: value,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const headers = [
      "Incident Flash Report No", "Date of Incident", "Time of Incident", "Site/Project Name", "Exact Location", "Type: Injury", "Type: Near-Miss", "Type: Property Damage", "Type: Environmental", "Type: Fire", "Type: Vehicle", "Type: Security", "Type: Other", "Investigation Lead", "Statement Taken By", "Date Statement Taken",
      "Witness Full Name", "Witness Position", "Witness Employer", "Witness ID No", "Witness Iqama No", "Witness Nationality", "Witness Mobile", "Witness Years Exp", "Lang: English", "Lang: Arabic", "Lang: Other", "Lang: Other Text", "Translator Required: No", "Translator Required: Yes", "Translator Name",
      "Rel: Directly Involved", "Rel: Direct Witness", "Rel: Nearby", "Rel: First Responder", "Rel: Arrived After", "Task at Time", "Distance from Incident", "Sight: Clear", "Sight: Partial", "Sight: Obstructed", "Light: Daylight", "Light: Dusk/Dawn", "Light: Artificial", "Light: Dark", "Weather/Env", "Noise: Quiet", "Noise: Normal", "Noise: Loud", "PPE Wearing", "Who Else Present",
      "Narrative Statement",
      "Q5.1 Before Incident", "Q5.2 What Seen", "Q5.3 What Heard", "Q5.4 What Smelled", "Q5.5 What Done", "Q5.6 Others Involved", "Q5.7 Equip/Tools", "Q5.8 Normal Way?", "Q5.9 Controls/PPE?", "Q5.10 Unusual Events", "Q5.11 Briefing/Warning", "Q5.12 Prevention",
      "Witness Signature", "Witness Printed Name", "Witness Sign Date", "Witness Sign Time", "Location Given",
      "Investigator Name", "Investigator Position", "Inv Role: Lead", "Inv Role: HSE", "Inv Role: Supervisor", "Inv Role: Other", "Inv Role: Other Text", "Inv Translator Used", "Investigator Signature", "Investigator Date",
      "HSE Reviewed By", "HSE Date Reviewed", "HSE Consistency: Consistent", "HSE Consistency: Minor", "HSE Consistency: Material", "HSE Variance Expl", "HSE Linked NCR", "HSE Linked Investigation", "HSE Added to Index: Yes", "HSE Added to Index: No", "HSE Manager Comments"
    ];

    const values = [
      formData.incidentFlashReportNo, formData.dateOfIncident, formData.timeOfIncident, formData.siteProjectName, formData.exactLocationOnSite, formData.typeOfIncident.injury ? "Yes" : "No", formData.typeOfIncident.nearMiss ? "Yes" : "No", formData.typeOfIncident.propertyDamage ? "Yes" : "No", formData.typeOfIncident.environmental ? "Yes" : "No", formData.typeOfIncident.fire ? "Yes" : "No", formData.typeOfIncident.vehicle ? "Yes" : "No", formData.typeOfIncident.security ? "Yes" : "No", formData.typeOfIncident.other ? "Yes" : "No", formData.investigationLead, formData.statementTakenBy, formData.dateStatementTaken,
      formData.witnessFullName, formData.witnessPosition, formData.witnessEmployer, formData.witnessIDNo, formData.witnessIqamaNo, formData.witnessNationality, formData.witnessMobileNumber, formData.witnessYearsExperience, formData.languageOfStatement.english ? "Yes" : "No", formData.languageOfStatement.arabic ? "Yes" : "No", formData.languageOfStatement.other ? "Yes" : "No", formData.languageOfStatement.otherText, formData.translatorRequired.no ? "Yes" : "No", formData.translatorRequired.yes ? "Yes" : "No", formData.translatorRequired.translatorName,
      formData.relationshipToIncident.directlyInvolved ? "Yes" : "No", formData.relationshipToIncident.directWitness ? "Yes" : "No", formData.relationshipToIncident.nearby ? "Yes" : "No", formData.relationshipToIncident.firstResponder ? "Yes" : "No", formData.relationshipToIncident.arrivedAfter ? "Yes" : "No", formData.yourTaskAtTime, formData.distanceFromIncident, formData.lineOfSight.clear ? "Yes" : "No", formData.lineOfSight.partial ? "Yes" : "No", formData.lineOfSight.obstructed ? "Yes" : "No", formData.lightingConditions.daylight ? "Yes" : "No", formData.lightingConditions.duskDawn ? "Yes" : "No", formData.lightingConditions.artificial ? "Yes" : "No", formData.lightingConditions.dark ? "Yes" : "No", formData.weatherEnvironment, formData.noiseLevel.quiet ? "Yes" : "No", formData.noiseLevel.normal ? "Yes" : "No", formData.noiseLevel.loud ? "Yes" : "No", formData.ppeWearing, formData.whoElseWasPresent,
      formData.narrativeStatement,
      formData.q5_1, formData.q5_2, formData.q5_3, formData.q5_4, formData.q5_5, formData.q5_6, formData.q5_7, formData.q5_8, formData.q5_9, formData.q5_10, formData.q5_11, formData.q5_12,
      formData.witnessSignature, formData.witnessPrintedName, formData.witnessSignDate, formData.witnessSignTime, formData.locationOfStatement,
      formData.investigatorName, formData.investigatorPosition, formData.investigatorRole.leadInvestigator ? "Yes" : "No", formData.investigatorRole.hseOfficer ? "Yes" : "No", formData.investigatorRole.supervisor ? "Yes" : "No", formData.investigatorRole.other ? "Yes" : "No", formData.investigatorRole.otherText, formData.investigatorTranslatorUsed, formData.investigatorSignature, formData.investigatorDate,
      formData.hseReviewedBy, formData.hseDateReviewed, formData.hseConsistency.consistent ? "Yes" : "No", formData.hseConsistency.minorVariance ? "Yes" : "No", formData.hseConsistency.materialVariance ? "Yes" : "No", formData.hseConsistency.varianceExplanation, formData.hseLinkedNCR, formData.hseLinkedInvestigation, formData.hseAddedToIndex.yes ? "Yes" : "No", formData.hseAddedToIndex.no ? "Yes" : "No", formData.hseManagerComments
    ];

    mutation.mutate({
      formCode: "TE-IMS-FRM-HSE-026",
      headers,
      values,
    });
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
          <h2 className="text-2xl font-bold text-[#081C2E] mb-4">Form submitted successfully.</h2>
          <p className="mb-6">Your incident witness statement has been recorded.</p>
          <a
            href={sheetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C49A28] text-white px-6 py-2 rounded hover:bg-[#a38021] transition-colors"
          >
            View register (Google Sheet)
          </a>
          <div className="mt-8">
            <Link href="/" className="text-[#081C2E] hover:underline">← Back to Portal Home</Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-6 bg-[#f4f6f9] min-h-screen">
        <div className="mb-6">
          <Link href="/" className="text-[#081C2E] hover:underline font-semibold">← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">FRM</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 font-bold">Incident Witness Statement Form</span>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg overflow-hidden border border-[#dde3ec]">
          {/* Header Section */}
          <div className="bg-[#081C2E] p-4 flex justify-between items-center text-white">
            <div>
              <h1 className="text-xl font-bold tracking-wide">INCIDENT WITNESS STATEMENT FORM</h1>
              <p className="text-sm opacity-80">True East Mining Company (TEMC)</p>
            </div>
            <div className="text-right text-xs">
              <p>Code: TE-IMS-FRM-HSE-026</p>
              <p>Rev: 02</p>
              <p>Date: 11.04.2026</p>
            </div>
          </div>

          <div className="p-6 space-y-8">
            {/* Purpose & Scope Info */}
            <div className="bg-blue-50 p-4 rounded border-l-4 border-[#081C2E] text-sm text-gray-700">
              <p className="font-bold mb-1">Purpose & Scope:</p>
              <p>Captures formal witness statements following any incident. Applies to all TEMC employees, contractors, and visitors at exploration or drilling sites in KSA.</p>
            </div>

            {/* Section 1: Incident Reference */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-1 font-bold mb-4 uppercase text-sm tracking-wider">
                1. Incident Reference
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700">Incident Flash Report No. (FRM-HSE-002) *</label>
                  <input type="text" name="incidentFlashReportNo" required value={formData.incidentFlashReportNo} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-gray-700">Date of Incident *</label>
                    <input type="date" name="dateOfIncident" required value={formData.dateOfIncident} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-gray-700">Time (24h) *</label>
                    <input type="time" name="timeOfIncident" required value={formData.timeOfIncident} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700">Site / Project Name *</label>
                  <input type="text" name="siteProjectName" required value={formData.siteProjectName} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700">Exact Location on Site *</label>
                  <input type="text" name="exactLocationOnSite" required value={formData.exactLocationOnSite} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <label className="block text-xs font-bold text-gray-700">Type of Incident (Check all that apply) *</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                  {Object.entries(formData.typeOfIncident).filter(([key]) => key !== 'other').map(([key, val]) => (
                    <label key={key} className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" name={`typeOfIncident.${key}`} checked={val as boolean} onChange={handleInputChange} className="w-4 h-4 accent-[#C49A28]" />
                      <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                    </label>
                  ))}
                  <label className="flex items-center space-x-2 cursor-pointer col-span-1">
                    <input type="checkbox" name="typeOfIncident.other" checked={formData.typeOfIncident.other} onChange={handleInputChange} className="w-4 h-4 accent-[#C49A28]" />
                    <span>Other</span>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700">Investigation Lead</label>
                  <input type="text" name="investigationLead" value={formData.investigationLead} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700">Statement Taken By *</label>
                  <input type="text" name="statementTakenBy" required value={formData.statementTakenBy} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700">Date Statement Taken *</label>
                  <input type="date" name="dateStatementTaken" required value={formData.dateStatementTaken} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
              </div>
            </section>

            {/* Section 2: Witness Identity */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-1 font-bold mb-4 uppercase text-sm tracking-wider">
                2. Witness Identity
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700">Full Name *</label>
                  <input type="text" name="witnessFullName" required value={formData.witnessFullName} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700">Position / Job Title *</label>
                  <input type="text" name="witnessPosition" required value={formData.witnessPosition} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700">Employer (TEMC / Contractor name) *</label>
                  <input type="text" name="witnessEmployer" required value={formData.witnessEmployer} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-gray-700">Employee/Contractor ID</label>
                    <input type="text" name="witnessIDNo" value={formData.witnessIDNo} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-gray-700">Iqama / National ID *</label>
                    <input type="text" name="witnessIqamaNo" required value={formData.witnessIqamaNo} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700">Nationality</label>
                  <input type="text" name="witnessNationality" value={formData.witnessNationality} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-gray-700">Mobile Number *</label>
                    <input type="text" name="witnessMobileNumber" required value={formData.witnessMobileNumber} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-gray-700">Years of Experience</label>
                    <input type="number" name="witnessYearsExperience" value={formData.witnessYearsExperience} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-700">Language of Statement</label>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <label className="flex items-center space-x-2"><input type="checkbox" name="languageOfStatement.english" checked={formData.languageOfStatement.english} onChange={handleInputChange} className="accent-[#C49A28]" /><span>English</span></label>
                    <label className="flex items-center space-x-2"><input type="checkbox" name="languageOfStatement.arabic" checked={formData.languageOfStatement.arabic} onChange={handleInputChange} className="accent-[#C49A28]" /><span>Arabic</span></label>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" name="languageOfStatement.other" checked={formData.languageOfStatement.other} onChange={handleInputChange} className="accent-[#C49A28]" />
                      <span>Other:</span>
                      <input type="text" name="languageOfStatement.otherText" value={formData.languageOfStatement.otherText} onChange={handleInputChange} className="border-b border-gray-300 outline-none text-xs w-24" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-700">Translator Required?</label>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <label className="flex items-center space-x-2"><input type="checkbox" name="translatorRequired.no" checked={formData.translatorRequired.no} onChange={handleInputChange} className="accent-[#C49A28]" /><span>No</span></label>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" name="translatorRequired.yes" checked={formData.translatorRequired.yes} onChange={handleInputChange} className="accent-[#C49A28]" />
                      <span>Yes — Name:</span>
                      <input type="text" name="translatorRequired.translatorName" value={formData.translatorRequired.translatorName} onChange={handleInputChange} className="border-b border-gray-300 outline-none text-xs w-32" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Witness Position and Role */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-1 font-bold mb-4 uppercase text-sm tracking-wider">
                3. Witness Position and Role at Time of Incident
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-700">Relationship to the Incident *</label>
                  <div className="flex flex-wrap gap-4 text-sm">
                    {Object.entries(formData.relationshipToIncident).map(([key, val]) => (
                      <label key={key} className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" name={`relationshipToIncident.${key}`} checked={val as boolean} onChange={handleInputChange} className="accent-[#C49A28]" />
                        <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-gray-700">Your Task at the Time</label>
                    <input type="text" name="yourTaskAtTime" value={formData.yourTaskAtTime} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-gray-700">Distance from Incident Point</label>
                    <input type="text" name="distanceFromIncident" value={formData.distanceFromIncident} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-gray-700">Line of Sight</label>
                    <div className="flex flex-wrap gap-2 text-sm">
                      {['clear', 'partial', 'obstructed'].map(key => (
                        <label key={key} className="flex items-center space-x-2"><input type="checkbox" name={`lineOfSight.${key}`} checked={(formData.lineOfSight as any)[key]} onChange={handleInputChange} className="accent-[#C49A28]" /><span className="capitalize">{key}</span></label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-gray-700">Lighting Conditions</label>
                    <div className="flex flex-wrap gap-2 text-sm">
                      {['daylight', 'duskDawn', 'artificial', 'dark'].map(key => (
                        <label key={key} className="flex items-center space-x-2"><input type="checkbox" name={`lightingConditions.${key}`} checked={(formData.lightingConditions as any)[key]} onChange={handleInputChange} className="accent-[#C49A28]" /><span className="capitalize">{key.replace('Dawn', ' / Dawn')}</span></label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-gray-700">Noise Level</label>
                    <div className="flex flex-wrap gap-2 text-sm">
                      {['quiet', 'normal', 'loud'].map(key => (
                        <label key={key} className="flex items-center space-x-2"><input type="checkbox" name={`noiseLevel.${key}`} checked={(formData.noiseLevel as any)[key]} onChange={handleInputChange} className="accent-[#C49A28]" /><span className="capitalize">{key}</span></label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-gray-700">Weather / Environment</label>
                    <input type="text" name="weatherEnvironment" value={formData.weatherEnvironment} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-gray-700">PPE You Were Wearing</label>
                    <input type="text" name="ppeWearing" value={formData.ppeWearing} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-gray-700">Who Else Was Present</label>
                    <input type="text" name="whoElseWasPresent" value={formData.whoElseWasPresent} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Narrative Statement */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-1 font-bold mb-4 uppercase text-sm tracking-wider">
                4. Narrative Statement
              </div>
              <p className="text-xs text-gray-600 mb-2 italic">Describe in your own words exactly what you observed, in the order it happened. Cover the period before, during, and after the incident.</p>
              <textarea name="narrativeStatement" rows={10} value={formData.narrativeStatement} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-3 rounded focus:ring-1 focus:ring-[#C49A28] outline-none text-sm" placeholder="Type your full statement here..."></textarea>
            </section>

            {/* Section 5: Structured Questions */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-1 font-bold mb-4 uppercase text-sm tracking-wider">
                5. Structured Questions
              </div>
              <p className="text-xs text-gray-600 mb-4 italic">Answer only the questions relevant to what you personally experienced. Write "do not recall" or "not applicable" where appropriate.</p>
              <div className="space-y-4">
                {[
                  { id: 'q5_1', q: '5.1 What were you doing immediately before the incident?' },
                  { id: 'q5_2', q: '5.2 What did you see happen?' },
                  { id: 'q5_3', q: '5.3 What did you hear (shouts, alarms, mechanical sounds, silence)?' },
                  { id: 'q5_4', q: '5.4 What did you smell (fuel, smoke, chemicals, gases)?' },
                  { id: 'q5_5', q: '5.5 What did you do when you realised something had happened?' },
                  { id: 'q5_6', q: '5.6 Who else was involved or nearby, and what were they doing?' },
                  { id: 'q5_7', q: '5.7 Was any equipment, tool, or vehicle involved? Describe its condition.' },
                  { id: 'q5_8', q: '5.8 Was the task being done in the normal way? If not, what was different?' },
                  { id: 'q5_9', q: '5.9 Were all required permits, PPE, and controls in place (as far as you know)?' },
                  { id: 'q5_10', q: '5.10 Had you seen anything unusual earlier that day or shift?' },
                  { id: 'q5_11', q: '5.11 Did you hear any pre-incident briefing, toolbox talk, or warning given?' },
                  { id: 'q5_12', q: '5.12 Is there anything you believe could have prevented this incident?' },
                ].map((item) => (
                  <div key={item.id} className="space-y-1">
                    <label className="block text-xs font-bold text-gray-700">{item.q}</label>
                    <textarea name={item.id} value={(formData as any)[item.id]} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none text-sm" rows={2}></textarea>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Witness Declaration */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-1 font-bold mb-4 uppercase text-sm tracking-wider">
                7. Witness Declaration
              </div>
              <div className="bg-gray-50 p-4 border border-gray-200 text-xs text-gray-700 mb-4 leading-relaxed">
                I confirm that the statement above is given voluntarily and is true and correct to the best of my knowledge and recollection. I understand that this statement will be used by True East Mining Company for the purpose of incident investigation, HSE improvement, and — where required — reporting to Saudi regulatory authorities. I have not been pressured to give any particular version of events. I have reviewed my statement before signing.
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700">Witness Signature (Full Name) *</label>
                  <input type="text" name="witnessSignature" required placeholder="Full name (acts as signature)" value={formData.witnessSignature} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none italic" />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700">Printed Name *</label>
                  <input type="text" name="witnessPrintedName" required value={formData.witnessPrintedName} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-gray-700">Date *</label>
                    <input type="date" name="witnessSignDate" required value={formData.witnessSignDate} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-gray-700">Time *</label>
                    <input type="time" name="witnessSignTime" required value={formData.witnessSignTime} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700">Location Where Statement Was Given</label>
                  <input type="text" name="locationOfStatement" value={formData.locationOfStatement} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
              </div>
            </section>

            {/* Section 8: Statement Taker / Investigator */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-1 font-bold mb-4 uppercase text-sm tracking-wider">
                8. Statement Taker / Investigator
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700">Name</label>
                  <input type="text" name="investigatorName" value={formData.investigatorName} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700">Position</label>
                  <input type="text" name="investigatorPosition" value={formData.investigatorPosition} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <label className="block text-xs font-bold text-gray-700">Role in Investigation</label>
                <div className="flex flex-wrap gap-4 text-sm">
                  {['leadInvestigator', 'hseOfficer', 'supervisor'].map(key => (
                    <label key={key} className="flex items-center space-x-2"><input type="checkbox" name={`investigatorRole.${key}`} checked={(formData.investigatorRole as any)[key]} onChange={handleInputChange} className="accent-[#C49A28]" /><span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</span></label>
                  ))}
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" name="investigatorRole.other" checked={formData.investigatorRole.other} onChange={handleInputChange} className="accent-[#C49A28]" />
                    <span>Other:</span>
                    <input type="text" name="investigatorRole.otherText" value={formData.investigatorRole.otherText} onChange={handleInputChange} className="border-b border-gray-300 outline-none text-xs w-24" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700">Translator Used (if any)</label>
                  <input type="text" name="investigatorTranslatorUsed" value={formData.investigatorTranslatorUsed} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700">Signature (Full Name)</label>
                  <input type="text" name="investigatorSignature" placeholder="Full name" value={formData.investigatorSignature} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none italic" />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700">Date</label>
                  <input type="date" name="investigatorDate" value={formData.investigatorDate} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
              </div>
            </section>

            {/* Section 9: HSE Review and Linking */}
            <section className="bg-gray-50 p-4 rounded-lg border border-[#dde3ec]">
              <div className="bg-[#081C2E] text-white px-4 py-1 font-bold mb-4 uppercase text-sm tracking-wider">
                9. HSE Review and Linking (Office Use Only)
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700">Reviewed By (HSE Manager)</label>
                  <input type="text" name="hseReviewedBy" value={formData.hseReviewedBy} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700">Date Reviewed</label>
                  <input type="date" name="hseDateReviewed" value={formData.hseDateReviewed} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <label className="block text-xs font-bold text-gray-700">Consistency With Other Witness Statements</label>
                <div className="flex flex-wrap gap-4 text-sm">
                  <label className="flex items-center space-x-2"><input type="checkbox" name="hseConsistency.consistent" checked={formData.hseConsistency.consistent} onChange={handleInputChange} className="accent-[#C49A28]" /><span>Consistent</span></label>
                  <label className="flex items-center space-x-2"><input type="checkbox" name="hseConsistency.minorVariance" checked={formData.hseConsistency.minorVariance} onChange={handleInputChange} className="accent-[#C49A28]" /><span>Minor variance</span></label>
                  <label className="flex items-center space-x-2"><input type="checkbox" name="hseConsistency.materialVariance" checked={formData.hseConsistency.materialVariance} onChange={handleInputChange} className="accent-[#C49A28]" /><span>Material variance</span></label>
                </div>
                <textarea name="hseConsistency.varianceExplanation" placeholder="Explain variance if any..." value={formData.hseConsistency.varianceExplanation} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none text-xs" rows={2}></textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700">Linked to NCR / CAR No. (REG-SYS-002)</label>
                  <input type="text" name="hseLinkedNCR" value={formData.hseLinkedNCR} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700">Linked to Investigation Report</label>
                  <input type="text" name="hseLinkedInvestigation" value={formData.hseLinkedInvestigation} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-4 text-sm">
                <label className="font-bold text-xs text-gray-700">Added to Incident Index (REG-HSE-005)?</label>
                <label className="flex items-center space-x-1"><input type="checkbox" name="hseAddedToIndex.yes" checked={formData.hseAddedToIndex.yes} onChange={handleInputChange} className="accent-[#C49A28]" /><span>Yes</span></label>
                <label className="flex items-center space-x-1"><input type="checkbox" name="hseAddedToIndex.no" checked={formData.hseAddedToIndex.no} onChange={handleInputChange} className="accent-[#C49A28]" /><span>No</span></label>
              </div>
              <div className="mt-4 space-y-1">
                <label className="block text-xs font-bold text-gray-700">HSE Manager Comments</label>
                <textarea name="hseManagerComments" value={formData.hseManagerComments} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none text-sm" rows={3}></textarea>
              </div>
            </section>

            {/* Submit Button */}
            <div className="pt-6 border-t border-[#dde3ec] flex flex-col items-center">
              {error && <div className="text-red-600 mb-4 text-sm font-semibold">{error}</div>}
              <button
                type="submit"
                disabled={mutation.isLoading}
                className="bg-[#081C2E] text-white px-12 py-3 rounded-lg font-bold hover:bg-[#12304d] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {mutation.isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>Submit Witness Statement</span>
                )}
              </button>
              <p className="text-[10px] text-gray-500 mt-4 text-center">
                By submitting, you confirm this statement is true and correct to the best of your knowledge.<br />
                Retention: 5 years minimum, per PROC-SYS-003 Document Control.
              </p>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
