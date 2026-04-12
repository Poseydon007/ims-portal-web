import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_024() {
  const [submitted, setSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    occurrenceRefNo: "",
    projectSite: "",
    contractCrcNo: "",
    dateOfOccurrence: "",
    timeOfOccurrenceAmPm: "",
    timeOfOccurrence: "",
    location: "",
    supervisorForeman: "",
    reportedBy: "",
    dateReported: "",
    classification: {
      collapseCrane: false,
      collapseScaffold: false,
      structuralCollapse: false,
      uncontrolledRelease: false,
      electricalShort: false,
      uncontrolledExplosion: false,
      failurePressureVessel: false,
      contactPowerLines: false,
      collapseExcavation: false,
      fallFromHeight: false,
      drowningAsphyxiation: false,
      vehicleRollover: false,
      lightningStrike: false,
      other: false,
    },
    otherClassification: "",
    actualOutcome: "",
    potentialOutcome: "",
    descriptionOfOccurrence: "",
    propertyEquipment: [{ description: "", estimatedDamage: "" }],
    personsInvolved: [{ name: "", employeeNo: "", role: "", injuryDetails: "" }],
    witnesses: [{ name: "", employeeNo: "", contactDept: "" }],
    immediateActions: [{ action: "", byWhom: "", time: "", status: "" }],
    regulatoryNotification: {
      notRequired: false,
      mhrsdNotified: false,
      gosiNotified: false,
      civilDefenceNotified: false,
      clientNotified: false,
    },
    notificationRefNo: "",
    dateTimeNotified: "",
    notifiedBy: "",
    fullInvestigationRequired: "",
    investigationReportNo: "",
    areaEquipmentIsolated: "",
    signOff: {
      supervisorName: "",
      supervisorDate: "",
      hseOfficerName: "",
      hseOfficerDate: "",
      projectManagerName: "",
      projectManagerDate: "",
      siteManagerName: "",
      siteManagerDate: "",
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

  const handleCheckboxChange = (section: string, field: string) => {
    setFormData((prev: any) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: !prev[section][field],
      },
    }));
  };

  const handleDynamicChange = (section: string, index: number, field: string, value: string) => {
    setFormData((prev: any) => {
      const updatedSection = [...prev[section]];
      updatedSection[index][field] = value;
      return { ...prev, [section]: updatedSection };
    });
  };

  const addRow = (section: string, emptyRow: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [section]: [...prev[section], emptyRow],
    }));
  };

  const removeRow = (section: string, index: number) => {
    setFormData((prev: any) => ({
      ...prev,
      [section]: prev[section].filter((_: any, i: number) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const headers = [
      "Occurrence Reference No", "Project / Site", "Contract / CRC No", "Date of Occurrence", "Time AM/PM", "Time", "Location", "Supervisor / Foreman", "Reported By", "Date Reported",
      "Classification: Collapse Crane", "Classification: Collapse Scaffold", "Classification: Structural Collapse", "Classification: Uncontrolled Release", "Classification: Electrical Short", "Classification: Uncontrolled Explosion", "Classification: Failure Pressure Vessel", "Classification: Contact Power Lines", "Classification: Collapse Excavation", "Classification: Fall From Height", "Classification: Drowning Asphyxiation", "Classification: Vehicle Rollover", "Classification: Lightning Strike", "Classification: Other", "Other Classification Specify",
      "Actual Outcome", "Potential Outcome", "Description of Occurrence",
      "Property/Equipment Involved", "Persons Involved", "Witnesses", "Immediate Actions",
      "Regulatory: Not Required", "Regulatory: MHRSD Notified", "Regulatory: GOSI Notified", "Regulatory: Civil Defence Notified", "Regulatory: Client Notified",
      "Notification Ref No", "Date/Time Notified", "Notified By",
      "Full Investigation Required", "Investigation Report No", "Area/Equipment Isolated",
      "Supervisor Sign-Off Name", "Supervisor Sign-Off Date",
      "HSE Officer Sign-Off Name", "HSE Officer Sign-Off Date",
      "Project Manager Sign-Off Name", "Project Manager Sign-Off Date",
      "Site Manager Sign-Off Name", "Site Manager Sign-Off Date"
    ];

    const values = [
      formData.occurrenceRefNo, formData.projectSite, formData.contractCrcNo, formData.dateOfOccurrence, formData.timeOfOccurrenceAmPm, formData.timeOfOccurrence, formData.location, formData.supervisorForeman, formData.reportedBy, formData.dateReported,
      formData.classification.collapseCrane ? "Yes" : "No", formData.classification.collapseScaffold ? "Yes" : "No", formData.classification.structuralCollapse ? "Yes" : "No", formData.classification.uncontrolledRelease ? "Yes" : "No", formData.classification.electricalShort ? "Yes" : "No", formData.classification.uncontrolledExplosion ? "Yes" : "No", formData.classification.failurePressureVessel ? "Yes" : "No", formData.classification.contactPowerLines ? "Yes" : "No", formData.classification.collapseExcavation ? "Yes" : "No", formData.classification.fallFromHeight ? "Yes" : "No", formData.classification.drowningAsphyxiation ? "Yes" : "No", formData.classification.vehicleRollover ? "Yes" : "No", formData.classification.lightningStrike ? "Yes" : "No", formData.classification.other ? "Yes" : "No", formData.otherClassification,
      formData.actualOutcome, formData.potentialOutcome, formData.descriptionOfOccurrence,
      JSON.stringify(formData.propertyEquipment), JSON.stringify(formData.personsInvolved), JSON.stringify(formData.witnesses), JSON.stringify(formData.immediateActions),
      formData.regulatoryNotification.notRequired ? "Yes" : "No", formData.regulatoryNotification.mhrsdNotified ? "Yes" : "No", formData.regulatoryNotification.gosiNotified ? "Yes" : "No", formData.regulatoryNotification.civilDefenceNotified ? "Yes" : "No", formData.regulatoryNotification.clientNotified ? "Yes" : "No",
      formData.notificationRefNo, formData.dateTimeNotified, formData.notifiedBy,
      formData.fullInvestigationRequired, formData.investigationReportNo, formData.areaEquipmentIsolated,
      formData.signOff.supervisorName, formData.signOff.supervisorDate,
      formData.signOff.hseOfficerName, formData.signOff.hseOfficerDate,
      formData.signOff.projectManagerName, formData.signOff.projectManagerDate,
      formData.signOff.siteManagerName, formData.signOff.siteManagerDate
    ];

    mutation.mutate({
      formCode: "TE-IMS-FRM-HSE-024",
      headers,
      values,
    });
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-10 text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">Form submitted successfully.</h2>
          <p className="mb-6">Your report has been recorded in the system.</p>
          <a
            href={sheetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors"
          >
            View Register (Google Sheet)
          </a>
          <div className="mt-8">
            <Link href="/" className="text-navy hover:underline">← Return to Portal Home</Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-6 bg-white shadow-sm border border-[#dde3ec] my-8 font-['Nunito_Sans']">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-navy hover:underline">← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/docs/frm" className="text-gray-600 hover:text-[#C49A28] transition-colors cursor-pointer">FRM</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-navy font-semibold">Dangerous Occurrence Report Form</span>
        </nav>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b-2 border-gold pb-4">
          <div>
            <h1 className="text-2xl font-bold text-navy uppercase">Dangerous Occurrence Report Form</h1>
            <p className="text-sm text-gray-500 mt-1">True East Mining Company IMS</p>
          </div>
          <div className="mt-4 md:mt-0 overflow-x-auto">
            <table className="text-xs border-collapse border border-[#dde3ec]">
              <tbody>
                <tr>
                  <td className="border border-[#dde3ec] bg-gray-50 px-3 py-1 font-bold">Document Code</td>
                  <td className="border border-[#dde3ec] px-3 py-1">TE-IMS-FRM-HSE-024</td>
                  <td className="border border-[#dde3ec] bg-gray-50 px-3 py-1 font-bold">Revision</td>
                  <td className="border border-[#dde3ec] px-3 py-1">Rev02</td>
                </tr>
                <tr>
                  <td className="border border-[#dde3ec] bg-gray-50 px-3 py-1 font-bold">Date</td>
                  <td className="border border-[#dde3ec] px-3 py-1">April 2026</td>
                  <td className="border border-[#dde3ec] bg-gray-50 px-3 py-1 font-bold">Status</td>
                  <td className="border border-[#dde3ec] px-3 py-1 text-green-700 font-semibold">Approved</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* SECTION 1: OCCURRENCE DETAILS */}
          <section>
            <div className="bg-navy text-white px-4 py-2 font-bold uppercase text-sm mb-4">
              SECTION 1 — OCCURRENCE DETAILS
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-navy uppercase mb-1">Occurrence Reference No *</label>
                <input type="text" name="occurrenceRefNo" value={formData.occurrenceRefNo} onChange={handleInputChange} required className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label className="block text-xs font-bold text-navy uppercase mb-1">Project / Site *</label>
                <input type="text" name="projectSite" value={formData.projectSite} onChange={handleInputChange} required className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label className="block text-xs font-bold text-navy uppercase mb-1">Contract / CRC No</label>
                <input type="text" name="contractCrcNo" value={formData.contractCrcNo} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-gold" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-bold text-navy uppercase mb-1">Date of Occurrence *</label>
                  <input type="date" name="dateOfOccurrence" value={formData.dateOfOccurrence} onChange={handleInputChange} required className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-gold" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-navy uppercase mb-1">Time of Occurrence *</label>
                  <div className="flex gap-2 items-center">
                    <select name="timeOfOccurrenceAmPm" value={formData.timeOfOccurrenceAmPm} onChange={handleInputChange} required className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-gold">
                      <option value="">Select</option>
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                    <input type="time" name="timeOfOccurrence" value={formData.timeOfOccurrence} onChange={handleInputChange} required className="flex-1 border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-gold" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-navy uppercase mb-1">Location (specific) *</label>
                <input type="text" name="location" value={formData.location} onChange={handleInputChange} required className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label className="block text-xs font-bold text-navy uppercase mb-1">Supervisor / Foreman</label>
                <input type="text" name="supervisorForeman" value={formData.supervisorForeman} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label className="block text-xs font-bold text-navy uppercase mb-1">Reported By (Name / Role) *</label>
                <input type="text" name="reportedBy" value={formData.reportedBy} onChange={handleInputChange} required className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label className="block text-xs font-bold text-navy uppercase mb-1">Date Reported *</label>
                <input type="date" name="dateReported" value={formData.dateReported} onChange={handleInputChange} required className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-gold" />
              </div>
            </div>
          </section>

          {/* SECTION 2: CLASSIFICATION */}
          <section>
            <div className="bg-navy text-white px-4 py-2 font-bold uppercase text-sm mb-4">
              SECTION 2 — CLASSIFICATION OF DANGEROUS OCCURRENCE
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
              {[
                { id: "collapseCrane", label: "Collapse of crane/lifting equipment" },
                { id: "collapseScaffold", label: "Collapse/failure of scaffold or temporary structure" },
                { id: "structuralCollapse", label: "Structural collapse of building/wall" },
                { id: "uncontrolledRelease", label: "Uncontrolled release of hazardous substance" },
                { id: "electricalShort", label: "Electrical short circuit/overload causing fire" },
                { id: "uncontrolledExplosion", label: "Uncontrolled explosion, fire, or ignition" },
                { id: "failurePressureVessel", label: "Failure of pressure vessel or pressurized system" },
                { id: "contactPowerLines", label: "Contact with overhead power lines" },
                { id: "collapseExcavation", label: "Collapse of excavation or ground instability" },
                { id: "fallFromHeight", label: "Fall from height (>2m)" },
                { id: "drowningAsphyxiation", label: "Drowning/asphyxiation risk event" },
                { id: "vehicleRollover", label: "Vehicle rollover or runaway" },
                { id: "lightningStrike", label: "Lightning strike or severe weather event" },
                { id: "other", label: "Other (specify below)" },
              ].map((item) => (
                <label key={item.id} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={(formData.classification as any)[item.id]}
                    onChange={() => handleCheckboxChange("classification", item.id)}
                    className="h-4 w-4 text-gold border-gray-300 rounded focus:ring-gold"
                  />
                  <span className="text-gray-700">{item.label}</span>
                </label>
              ))}
            </div>
            <div className="mt-4">
              <label className="block text-xs font-bold text-navy uppercase mb-1">If Other, specify:</label>
              <input type="text" name="otherClassification" value={formData.otherClassification} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-gold" />
            </div>
          </section>

          {/* SECTION 3: SEVERITY ASSESSMENT */}
          <section>
            <div className="bg-navy text-white px-4 py-2 font-bold uppercase text-sm mb-4">
              SECTION 3 — SEVERITY ASSESSMENT
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-navy uppercase mb-2">Actual Outcome *</label>
                <div className="flex flex-wrap gap-4 text-sm">
                  {["No injury/damage", "Minor injury/damage", "Serious injury/damage", "Potential fatality", "Multiple fatality potential"].map((opt) => (
                    <label key={opt} className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="actualOutcome" value={opt} checked={formData.actualOutcome === opt} onChange={handleInputChange} required className="h-4 w-4 text-gold" />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-navy uppercase mb-2">Potential Outcome *</label>
                <div className="flex flex-wrap gap-4 text-sm">
                  {["No injury/damage", "Minor injury/damage", "Serious injury/damage", "Potential fatality", "Multiple fatality potential"].map((opt) => (
                    <label key={opt} className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="potentialOutcome" value={opt} checked={formData.potentialOutcome === opt} onChange={handleInputChange} required className="h-4 w-4 text-gold" />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: DESCRIPTION */}
          <section>
            <div className="bg-navy text-white px-4 py-2 font-bold uppercase text-sm mb-4">
              SECTION 4 — DESCRIPTION OF OCCURRENCE
            </div>
            <textarea
              name="descriptionOfOccurrence"
              value={formData.descriptionOfOccurrence}
              onChange={handleInputChange}
              required
              rows={4}
              placeholder="Provide a detailed description of the occurrence, including what happened, how it happened, and immediate triggers..."
              className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-gold"
            ></textarea>
          </section>

          {/* SECTION 5: PROPERTY / EQUIPMENT */}
          <section>
            <div className="bg-navy text-white px-4 py-2 font-bold uppercase text-sm mb-4">
              SECTION 5 — PROPERTY / EQUIPMENT INVOLVED
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-[#dde3ec]">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="border border-[#dde3ec] px-3 py-2 text-left">Description</th>
                    <th className="border border-[#dde3ec] px-3 py-2 text-left w-1/3">Estimated Damage</th>
                    <th className="border border-[#dde3ec] px-3 py-2 text-center w-16">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.propertyEquipment.map((row, idx) => (
                    <tr key={idx}>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="text" value={row.description} onChange={(e) => handleDynamicChange("propertyEquipment", idx, "description", e.target.value)} className="w-full p-1 focus:outline-none" />
                      </td>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="text" value={row.estimatedDamage} onChange={(e) => handleDynamicChange("propertyEquipment", idx, "estimatedDamage", e.target.value)} className="w-full p-1 focus:outline-none" />
                      </td>
                      <td className="border border-[#dde3ec] p-1 text-center">
                        <button type="button" onClick={() => removeRow("propertyEquipment", idx)} className="text-red-500 hover:text-red-700">×</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button type="button" onClick={() => addRow("propertyEquipment", { description: "", estimatedDamage: "" })} className="mt-2 text-sm text-gold font-bold hover:underline">+ Add Property/Equipment</button>
          </section>

          {/* SECTION 6: PERSONS INVOLVED */}
          <section>
            <div className="bg-navy text-white px-4 py-2 font-bold uppercase text-sm mb-4">
              SECTION 6 — PERSONS INVOLVED
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-[#dde3ec]">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="border border-[#dde3ec] px-3 py-2 text-left">Name</th>
                    <th className="border border-[#dde3ec] px-3 py-2 text-left">Employee No.</th>
                    <th className="border border-[#dde3ec] px-3 py-2 text-left">Role / Position</th>
                    <th className="border border-[#dde3ec] px-3 py-2 text-left">Injury (Y/N) & Details</th>
                    <th className="border border-[#dde3ec] px-3 py-2 text-center w-16">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.personsInvolved.map((row, idx) => (
                    <tr key={idx}>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="text" value={row.name} onChange={(e) => handleDynamicChange("personsInvolved", idx, "name", e.target.value)} className="w-full p-1 focus:outline-none" />
                      </td>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="text" value={row.employeeNo} onChange={(e) => handleDynamicChange("personsInvolved", idx, "employeeNo", e.target.value)} className="w-full p-1 focus:outline-none" />
                      </td>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="text" value={row.role} onChange={(e) => handleDynamicChange("personsInvolved", idx, "role", e.target.value)} className="w-full p-1 focus:outline-none" />
                      </td>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="text" value={row.injuryDetails} onChange={(e) => handleDynamicChange("personsInvolved", idx, "injuryDetails", e.target.value)} className="w-full p-1 focus:outline-none" />
                      </td>
                      <td className="border border-[#dde3ec] p-1 text-center">
                        <button type="button" onClick={() => removeRow("personsInvolved", idx)} className="text-red-500 hover:text-red-700">×</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button type="button" onClick={() => addRow("personsInvolved", { name: "", employeeNo: "", role: "", injuryDetails: "" })} className="mt-2 text-sm text-gold font-bold hover:underline">+ Add Person</button>
          </section>

          {/* SECTION 7: WITNESSES */}
          <section>
            <div className="bg-navy text-white px-4 py-2 font-bold uppercase text-sm mb-4">
              SECTION 7 — WITNESSES
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-[#dde3ec]">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="border border-[#dde3ec] px-3 py-2 text-left">Name</th>
                    <th className="border border-[#dde3ec] px-3 py-2 text-left">Employee No.</th>
                    <th className="border border-[#dde3ec] px-3 py-2 text-left">Contact / Department</th>
                    <th className="border border-[#dde3ec] px-3 py-2 text-center w-16">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.witnesses.map((row, idx) => (
                    <tr key={idx}>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="text" value={row.name} onChange={(e) => handleDynamicChange("witnesses", idx, "name", e.target.value)} className="w-full p-1 focus:outline-none" />
                      </td>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="text" value={row.employeeNo} onChange={(e) => handleDynamicChange("witnesses", idx, "employeeNo", e.target.value)} className="w-full p-1 focus:outline-none" />
                      </td>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="text" value={row.contactDept} onChange={(e) => handleDynamicChange("witnesses", idx, "contactDept", e.target.value)} className="w-full p-1 focus:outline-none" />
                      </td>
                      <td className="border border-[#dde3ec] p-1 text-center">
                        <button type="button" onClick={() => removeRow("witnesses", idx)} className="text-red-500 hover:text-red-700">×</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button type="button" onClick={() => addRow("witnesses", { name: "", employeeNo: "", contactDept: "" })} className="mt-2 text-sm text-gold font-bold hover:underline">+ Add Witness</button>
          </section>

          {/* SECTION 8: IMMEDIATE ACTIONS */}
          <section>
            <div className="bg-navy text-white px-4 py-2 font-bold uppercase text-sm mb-4">
              SECTION 8 — IMMEDIATE ACTIONS TAKEN
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-[#dde3ec]">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="border border-[#dde3ec] px-3 py-2 text-center w-12">No.</th>
                    <th className="border border-[#dde3ec] px-3 py-2 text-left">Action Taken</th>
                    <th className="border border-[#dde3ec] px-3 py-2 text-left">By Whom</th>
                    <th className="border border-[#dde3ec] px-3 py-2 text-left w-24">Time</th>
                    <th className="border border-[#dde3ec] px-3 py-2 text-left w-32">Status</th>
                    <th className="border border-[#dde3ec] px-3 py-2 text-center w-16">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.immediateActions.map((row, idx) => (
                    <tr key={idx}>
                      <td className="border border-[#dde3ec] p-1 text-center">{idx + 1}</td>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="text" value={row.action} onChange={(e) => handleDynamicChange("immediateActions", idx, "action", e.target.value)} className="w-full p-1 focus:outline-none" />
                      </td>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="text" value={row.byWhom} onChange={(e) => handleDynamicChange("immediateActions", idx, "byWhom", e.target.value)} className="w-full p-1 focus:outline-none" />
                      </td>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="time" value={row.time} onChange={(e) => handleDynamicChange("immediateActions", idx, "time", e.target.value)} className="w-full p-1 focus:outline-none" />
                      </td>
                      <td className="border border-[#dde3ec] p-1">
                        <select value={row.status} onChange={(e) => handleDynamicChange("immediateActions", idx, "status", e.target.value)} className="w-full p-1 focus:outline-none">
                          <option value="">Select</option>
                          <option value="Completed">Completed</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Pending">Pending</option>
                        </select>
                      </td>
                      <td className="border border-[#dde3ec] p-1 text-center">
                        <button type="button" onClick={() => removeRow("immediateActions", idx)} className="text-red-500 hover:text-red-700">×</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button type="button" onClick={() => addRow("immediateActions", { action: "", byWhom: "", time: "", status: "" })} className="mt-2 text-sm text-gold font-bold hover:underline">+ Add Action</button>
          </section>

          {/* SECTION 9: REGULATORY NOTIFICATION */}
          <section>
            <div className="bg-navy text-white px-4 py-2 font-bold uppercase text-sm mb-4">
              SECTION 9 — REGULATORY NOTIFICATION (KSA)
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-navy uppercase mb-2">Notification Status</label>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  {[
                    { id: "notRequired", label: "Not Required" },
                    { id: "mhrsdNotified", label: "MHRSD Notified" },
                    { id: "gosiNotified", label: "GOSI Notified" },
                    { id: "civilDefenceNotified", label: "Civil Defence Notified" },
                    { id: "clientNotified", label: "Client Notified" },
                  ].map((item) => (
                    <label key={item.id} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={(formData.regulatoryNotification as any)[item.id]}
                        onChange={() => handleCheckboxChange("regulatoryNotification", item.id)}
                        className="h-4 w-4 text-gold border-gray-300 rounded focus:ring-gold"
                      />
                      <span className="text-gray-700">{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-navy uppercase mb-1">Notification Reference No</label>
                  <input type="text" name="notificationRefNo" value={formData.notificationRefNo} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-gold" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-navy uppercase mb-1">Date / Time Notified</label>
                  <input type="datetime-local" name="dateTimeNotified" value={formData.dateTimeNotified} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-gold" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-navy uppercase mb-1">Notified By</label>
                  <input type="text" name="notifiedBy" value={formData.notifiedBy} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-gold" />
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 10: FOLLOW-UP */}
          <section>
            <div className="bg-navy text-white px-4 py-2 font-bold uppercase text-sm mb-4">
              SECTION 10 — FOLLOW-UP REQUIRED
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-navy uppercase mb-2">Full Investigation Required? *</label>
                <div className="flex gap-4 text-sm">
                  {["Yes", "No"].map((opt) => (
                    <label key={opt} className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="fullInvestigationRequired" value={opt} checked={formData.fullInvestigationRequired === opt} onChange={handleInputChange} required className="h-4 w-4 text-gold" />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
                {formData.fullInvestigationRequired === "Yes" && (
                  <div className="mt-4">
                    <label className="block text-xs font-bold text-navy uppercase mb-1 italic text-gray-600">Reference Investigation Report No (use TE-IMS-FRM-HSE-022)</label>
                    <input type="text" name="investigationReportNo" value={formData.investigationReportNo} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-gold" />
                  </div>
                )}
              </div>
              <div>
                <label className="block text-xs font-bold text-navy uppercase mb-2">Area/Equipment Isolated? *</label>
                <div className="flex gap-4 text-sm">
                  {["Yes", "No", "N/A"].map((opt) => (
                    <label key={opt} className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="areaEquipmentIsolated" value={opt} checked={formData.areaEquipmentIsolated === opt} onChange={handleInputChange} required className="h-4 w-4 text-gold" />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 11: SIGN-OFF */}
          <section>
            <div className="bg-navy text-white px-4 py-2 font-bold uppercase text-sm mb-4">
              SECTION 11 — SIGN-OFF
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-[#dde3ec]">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="border border-[#dde3ec] px-3 py-2 text-left">Role</th>
                    <th className="border border-[#dde3ec] px-3 py-2 text-left">Name (Digital Signature)</th>
                    <th className="border border-[#dde3ec] px-3 py-2 text-left w-1/4">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { role: "Supervisor / Foreman", key: "supervisor" },
                    { role: "HSE Officer", key: "hseOfficer" },
                    { role: "Project Manager / In-Charge", key: "projectManager" },
                    { role: "Site Manager", key: "siteManager" },
                  ].map((row) => (
                    <tr key={row.key}>
                      <td className="border border-[#dde3ec] bg-gray-50 px-3 py-2 font-bold text-navy">{row.role}</td>
                      <td className="border border-[#dde3ec] p-1">
                        <input
                          type="text"
                          placeholder="Type full name to sign"
                          value={(formData.signOff as any)[`${row.key}Name`]}
                          onChange={(e) => setFormData(prev => ({ ...prev, signOff: { ...prev.signOff, [`${row.key}Name`]: e.target.value } }))}
                          className="w-full p-1 focus:outline-none italic"
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-1">
                        <input
                          type="date"
                          value={(formData.signOff as any)[`${row.key}Date`]}
                          onChange={(e) => setFormData(prev => ({ ...prev, signOff: { ...prev.signOff, [`${row.key}Date`]: e.target.value } }))}
                          className="w-full p-1 focus:outline-none"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Submission Footer */}
          <div className="pt-6 border-t-2 border-gold flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500 italic">
              * Required fields. Upon submission, this form will be logged in the HSE Management System.
            </p>
            <div className="flex items-center gap-4">
              {error && <span className="text-red-600 text-sm font-bold">{error}</span>}
              <button
                type="submit"
                disabled={mutation.isPending}
                className="bg-navy text-white px-10 py-3 rounded font-bold hover:bg-opacity-90 transition-all disabled:bg-gray-400 flex items-center gap-2"
              >
                {mutation.isPending ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : "Submit Report"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
