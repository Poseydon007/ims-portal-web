import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_002() {
  const [formData, setFormData] = useState({
    dateOfIncident: "",
    timeOfIncident: "",
    location: "",
    departmentSite: "",
    incidentNumber: "",
    reportedBy: "",
    severity: {
      firstAid: false,
      medicalTreatment: false,
      lostTimeInjury: false,
      fatality: false,
      propertyDamage: false,
      environmental: false,
      nearMiss: false,
      dangerousOccurrence: false,
    },
    briefDescription: "",
    personsInvolved: [
      { name: "", employeeNo: "", designation: "", capacity: "" }
    ],
    immediateActionsTaken: "",
    escalation: [
      { notifiedTo: "Site Manager", name: "", time: "", method: "", confirmed: "" },
      { notifiedTo: "HSE Manager", name: "", time: "", method: "", confirmed: "" },
      { notifiedTo: "MHRSD (if required)", name: "", time: "", method: "", confirmed: "" }
    ],
    bodyPartAffected: {
      head: false,
      eyes: false,
      face: false,
      neck: false,
      chest: false,
      back: false,
      arms: false,
      hands: false,
      legs: false,
      feet: false,
      internal: false,
      multiple: false,
      other: ""
    },
    signOff: {
      reportedBy: { name: "", signature: "", date: "" },
      hseOfficer: { name: "", signature: "", date: "" },
      siteManager: { name: "", signature: "", date: "" }
    }
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
      setError(err.message || "An error occurred during submission.");
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (section: 'severity' | 'bodyPartAffected', field: string) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: !prev[section][field as keyof typeof prev[typeof section]]
      }
    }));
  };

  const handlePersonChange = (index: number, field: string, value: string) => {
    const updatedPersons = [...formData.personsInvolved];
    updatedPersons[index] = { ...updatedPersons[index], [field]: value };
    setFormData(prev => ({ ...prev, personsInvolved: updatedPersons }));
  };

  const addPersonRow = () => {
    setFormData(prev => ({
      ...prev,
      personsInvolved: [...prev.personsInvolved, { name: "", employeeNo: "", designation: "", capacity: "" }]
    }));
  };

  const handleEscalationChange = (index: number, field: string, value: string) => {
    const updatedEscalation = [...formData.escalation];
    updatedEscalation[index] = { ...updatedEscalation[index], [field]: value };
    setFormData(prev => ({ ...prev, escalation: updatedEscalation }));
  };

  const handleSignOffChange = (role: 'reportedBy' | 'hseOfficer' | 'siteManager', field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      signOff: {
        ...prev.signOff,
        [role]: { ...prev.signOff[role], [field]: value }
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const headers = [
      "Date of Incident", "Time of Incident", "Location", "Department / Site", "Incident Number", "Reported By",
      "Severity: First Aid", "Severity: Medical Treatment", "Severity: Lost Time Injury", "Severity: Fatality", "Severity: Property Damage", "Severity: Environmental", "Severity: Near Miss", "Severity: Dangerous Occurrence",
      "Brief Description",
      "Persons Involved",
      "Immediate Actions Taken",
      "Escalation: Site Manager Name", "Escalation: Site Manager Time", "Escalation: Site Manager Method", "Escalation: Site Manager Confirmed",
      "Escalation: HSE Manager Name", "Escalation: HSE Manager Time", "Escalation: HSE Manager Method", "Escalation: HSE Manager Confirmed",
      "Escalation: MHRSD Name", "Escalation: MHRSD Time", "Escalation: MHRSD Method", "Escalation: MHRSD Confirmed",
      "Body Part: Head", "Body Part: Eyes", "Body Part: Face", "Body Part: Neck", "Body Part: Chest", "Body Part: Back", "Body Part: Arms", "Body Part: Hands", "Body Part: Legs", "Body Part: Feet", "Body Part: Internal", "Body Part: Multiple", "Body Part: Other",
      "Sign-Off: Reported By Name", "Sign-Off: Reported By Signature", "Sign-Off: Reported By Date",
      "Sign-Off: HSE Officer Name", "Sign-Off: HSE Officer Signature", "Sign-Off: HSE Officer Date",
      "Sign-Off: Site Manager Name", "Sign-Off: Site Manager Signature", "Sign-Off: Site Manager Date"
    ];

    const values = [
      formData.dateOfIncident, formData.timeOfIncident, formData.location, formData.departmentSite, formData.incidentNumber, formData.reportedBy,
      formData.severity.firstAid ? "Yes" : "No", formData.severity.medicalTreatment ? "Yes" : "No", formData.severity.lostTimeInjury ? "Yes" : "No", formData.severity.fatality ? "Yes" : "No", formData.severity.propertyDamage ? "Yes" : "No", formData.severity.environmental ? "Yes" : "No", formData.severity.nearMiss ? "Yes" : "No", formData.severity.dangerousOccurrence ? "Yes" : "No",
      formData.briefDescription,
      JSON.stringify(formData.personsInvolved),
      formData.immediateActionsTaken,
      formData.escalation[0].name, formData.escalation[0].time, formData.escalation[0].method, formData.escalation[0].confirmed,
      formData.escalation[1].name, formData.escalation[1].time, formData.escalation[1].method, formData.escalation[1].confirmed,
      formData.escalation[2].name, formData.escalation[2].time, formData.escalation[2].method, formData.escalation[2].confirmed,
      formData.bodyPartAffected.head ? "Yes" : "No", formData.bodyPartAffected.eyes ? "Yes" : "No", formData.bodyPartAffected.face ? "Yes" : "No", formData.bodyPartAffected.neck ? "Yes" : "No", formData.bodyPartAffected.chest ? "Yes" : "No", formData.bodyPartAffected.back ? "Yes" : "No", formData.bodyPartAffected.arms ? "Yes" : "No", formData.bodyPartAffected.hands ? "Yes" : "No", formData.bodyPartAffected.legs ? "Yes" : "No", formData.bodyPartAffected.feet ? "Yes" : "No", formData.bodyPartAffected.internal ? "Yes" : "No", formData.bodyPartAffected.multiple ? "Yes" : "No", formData.bodyPartAffected.other,
      formData.signOff.reportedBy.name, formData.signOff.reportedBy.signature, formData.signOff.reportedBy.date,
      formData.signOff.hseOfficer.name, formData.signOff.hseOfficer.signature, formData.signOff.hseOfficer.date,
      formData.signOff.siteManager.name, formData.signOff.siteManager.signature, formData.signOff.siteManager.date
    ];

    mutation.mutate({
      formCode: "TE-IMS-FRM-HSE-002",
      headers,
      values
    });
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 text-center">
          <h2 className="text-2xl font-bold text-[#081C2E] mb-4">Form submitted successfully.</h2>
          <p className="mb-6">Your incident notification has been recorded.</p>
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
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-6 bg-[#f4f6f9]">
        <nav className="mb-6">
          <Link href="/" className="text-[#081C2E] hover:underline font-semibold">← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/docs/frm" className="text-gray-600 hover:text-[#C49A28] transition-colors cursor-pointer">FRM</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 font-bold">Incident Flash Notification</span>
        </nav>

        <header className="bg-white p-6 rounded-t-lg border-b-4 border-[#C49A28] shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-[#081C2E]">INCIDENT FLASH NOTIFICATION</h1>
              <p className="text-gray-500 uppercase tracking-wider text-sm">True East Mining Company</p>
            </div>
            <div className="text-right text-sm">
              <table className="border-collapse border border-[#dde3ec]">
                <tbody>
                  <tr>
                    <td className="border border-[#dde3ec] px-3 py-1 bg-gray-50 font-bold">Code</td>
                    <td className="border border-[#dde3ec] px-3 py-1">TE-IMS-FRM-HSE-002</td>
                  </tr>
                  <tr>
                    <td className="border border-[#dde3ec] px-3 py-1 bg-gray-50 font-bold">Revision</td>
                    <td className="border border-[#dde3ec] px-3 py-1">01</td>
                  </tr>
                  <tr>
                    <td className="border border-[#dde3ec] px-3 py-1 bg-gray-50 font-bold">Date</td>
                    <td className="border border-[#dde3ec] px-3 py-1">01 March 2026</td>
                  </tr>
                  <tr>
                    <td className="border border-[#dde3ec] px-3 py-1 bg-gray-50 font-bold">Status</td>
                    <td className="border border-[#dde3ec] px-3 py-1 text-green-600 font-semibold">Approved</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8 mt-6">
          {/* Section 1: Incident Details */}
          <section className="bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wide">
              1. Incident Details
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-[#081C2E] mb-1">Date of Incident *</label>
                <input 
                  type="date" 
                  name="dateOfIncident" 
                  required 
                  className="w-full border border-[#dde3ec] p-2 rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                  onChange={handleInputChange}
                  value={formData.dateOfIncident}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#081C2E] mb-1">Time of Incident *</label>
                <input 
                  type="time" 
                  name="timeOfIncident" 
                  required 
                  className="w-full border border-[#dde3ec] p-2 rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                  onChange={handleInputChange}
                  value={formData.timeOfIncident}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-[#081C2E] mb-1">Location *</label>
                <input 
                  type="text" 
                  name="location" 
                  required 
                  className="w-full border border-[#dde3ec] p-2 rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                  onChange={handleInputChange}
                  value={formData.location}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#081C2E] mb-1">Department / Site *</label>
                <input 
                  type="text" 
                  name="departmentSite" 
                  required 
                  className="w-full border border-[#dde3ec] p-2 rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                  onChange={handleInputChange}
                  value={formData.departmentSite}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#081C2E] mb-1">Incident Number (If known)</label>
                <input 
                  type="text" 
                  name="incidentNumber" 
                  className="w-full border border-[#dde3ec] p-2 rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                  onChange={handleInputChange}
                  value={formData.incidentNumber}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-[#081C2E] mb-1">Reported By *</label>
                <input 
                  type="text" 
                  name="reportedBy" 
                  required 
                  className="w-full border border-[#dde3ec] p-2 rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                  onChange={handleInputChange}
                  value={formData.reportedBy}
                />
              </div>
            </div>
          </section>

          {/* Section 2: Severity Classification */}
          <section className="bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wide">
              2. Severity Classification
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-4 italic">Tick the applicable severity level:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { id: 'firstAid', label: 'First Aid' },
                  { id: 'medicalTreatment', label: 'Medical Treatment' },
                  { id: 'lostTimeInjury', label: 'Lost Time Injury' },
                  { id: 'fatality', label: 'Fatality' },
                  { id: 'propertyDamage', label: 'Property Damage' },
                  { id: 'environmental', label: 'Environmental' },
                  { id: 'nearMiss', label: 'Near Miss' },
                  { id: 'dangerousOccurrence', label: 'Dangerous Occurrence' }
                ].map((item) => (
                  <label key={item.id} className="flex items-center space-x-2 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 text-[#C49A28] border-gray-300 rounded focus:ring-[#C49A28]"
                      checked={formData.severity[item.id as keyof typeof formData.severity]}
                      onChange={() => handleCheckboxChange('severity', item.id)}
                    />
                    <span className="text-sm text-[#081C2E] group-hover:text-[#C49A28] transition-colors">{item.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Brief Description */}
          <section className="bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wide">
              3. Brief Description
            </div>
            <div className="p-4">
              <textarea 
                name="briefDescription" 
                rows={4} 
                required
                placeholder="Provide a clear, factual description of what happened..."
                className="w-full border border-[#dde3ec] p-3 rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                onChange={handleInputChange}
                value={formData.briefDescription}
              ></textarea>
            </div>
          </section>

          {/* Section 4: Persons Involved */}
          <section className="bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wide">
              4. Persons Involved
            </div>
            <div className="p-0 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#081C2E] text-white text-sm">
                    <th className="border border-[#dde3ec] p-2 text-left">Name</th>
                    <th className="border border-[#dde3ec] p-2 text-left">Employee No.</th>
                    <th className="border border-[#dde3ec] p-2 text-left">Designation</th>
                    <th className="border border-[#dde3ec] p-2 text-left">Capacity</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.personsInvolved.map((person, index) => (
                    <tr key={index}>
                      <td className="border border-[#dde3ec] p-0">
                        <input 
                          type="text" 
                          className="w-full p-2 outline-none focus:bg-yellow-50"
                          value={person.name}
                          onChange={(e) => handlePersonChange(index, 'name', e.target.value)}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-0">
                        <input 
                          type="text" 
                          className="w-full p-2 outline-none focus:bg-yellow-50"
                          value={person.employeeNo}
                          onChange={(e) => handlePersonChange(index, 'employeeNo', e.target.value)}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-0">
                        <input 
                          type="text" 
                          className="w-full p-2 outline-none focus:bg-yellow-50"
                          value={person.designation}
                          onChange={(e) => handlePersonChange(index, 'designation', e.target.value)}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-0">
                        <input 
                          type="text" 
                          className="w-full p-2 outline-none focus:bg-yellow-50"
                          value={person.capacity}
                          onChange={(e) => handlePersonChange(index, 'capacity', e.target.value)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="p-2 bg-gray-50 border-t border-[#dde3ec]">
                <button 
                  type="button" 
                  onClick={addPersonRow}
                  className="text-sm font-bold text-[#C49A28] hover:text-[#081C2E] transition-colors"
                >
                  + Add Person
                </button>
              </div>
            </div>
          </section>

          {/* Section 5: Immediate Actions Taken */}
          <section className="bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wide">
              5. Immediate Actions Taken
            </div>
            <div className="p-4">
              <textarea 
                name="immediateActionsTaken" 
                rows={3} 
                required
                placeholder="What actions were taken immediately after the incident?"
                className="w-full border border-[#dde3ec] p-3 rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                onChange={handleInputChange}
                value={formData.immediateActionsTaken}
              ></textarea>
            </div>
          </section>

          {/* Section 6: Escalation */}
          <section className="bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wide">
              6. Escalation
            </div>
            <div className="p-0 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#081C2E] text-white text-sm">
                    <th className="border border-[#dde3ec] p-2 text-left">Notified To</th>
                    <th className="border border-[#dde3ec] p-2 text-left">Name</th>
                    <th className="border border-[#dde3ec] p-2 text-left">Time</th>
                    <th className="border border-[#dde3ec] p-2 text-left">Method</th>
                    <th className="border border-[#dde3ec] p-2 text-left">Confirmed</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.escalation.map((item, index) => (
                    <tr key={index}>
                      <td className="border border-[#dde3ec] p-2 bg-gray-50 font-bold text-sm">{item.notifiedTo}</td>
                      <td className="border border-[#dde3ec] p-0">
                        <input 
                          type="text" 
                          className="w-full p-2 outline-none focus:bg-yellow-50"
                          value={item.name}
                          onChange={(e) => handleEscalationChange(index, 'name', e.target.value)}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-0">
                        <input 
                          type="time" 
                          className="w-full p-2 outline-none focus:bg-yellow-50"
                          value={item.time}
                          onChange={(e) => handleEscalationChange(index, 'time', e.target.value)}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-0">
                        <input 
                          type="text" 
                          className="w-full p-2 outline-none focus:bg-yellow-50"
                          placeholder="Phone/Email/In Person"
                          value={item.method}
                          onChange={(e) => handleEscalationChange(index, 'method', e.target.value)}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-0">
                        <input 
                          type="text" 
                          className="w-full p-2 outline-none focus:bg-yellow-50"
                          placeholder="Yes/No"
                          value={item.confirmed}
                          onChange={(e) => handleEscalationChange(index, 'confirmed', e.target.value)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 7: Body Part Affected */}
          <section className="bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wide">
              7. Body Part Affected
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-4 italic">Mark the affected area(s):</p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  { id: 'head', label: 'Head' },
                  { id: 'eyes', label: 'Eyes' },
                  { id: 'face', label: 'Face' },
                  { id: 'neck', label: 'Neck' },
                  { id: 'chest', label: 'Chest' },
                  { id: 'back', label: 'Back' },
                  { id: 'arms', label: 'Arms' },
                  { id: 'hands', label: 'Hands' },
                  { id: 'legs', label: 'Legs' },
                  { id: 'feet', label: 'Feet' },
                  { id: 'internal', label: 'Internal' },
                  { id: 'multiple', label: 'Multiple' }
                ].map((item) => (
                  <label key={item.id} className="flex items-center space-x-2 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 text-[#C49A28] border-gray-300 rounded focus:ring-[#C49A28]"
                      checked={formData.bodyPartAffected[item.id as keyof typeof formData.bodyPartAffected] as boolean}
                      onChange={() => handleCheckboxChange('bodyPartAffected', item.id)}
                    />
                    <span className="text-sm text-[#081C2E] group-hover:text-[#C49A28] transition-colors">{item.label}</span>
                  </label>
                ))}
              </div>
              <div className="mt-4 flex items-center space-x-2">
                <span className="text-sm font-bold text-[#081C2E]">Other:</span>
                <input 
                  type="text" 
                  className="flex-1 border-b border-[#dde3ec] focus:border-[#C49A28] outline-none p-1"
                  value={formData.bodyPartAffected.other}
                  onChange={(e) => setFormData(prev => ({ ...prev, bodyPartAffected: { ...prev.bodyPartAffected, other: e.target.value } }))}
                />
              </div>
            </div>
          </section>

          {/* Sign-Off Section */}
          <section className="bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wide">
              Sign-Off
            </div>
            <div className="p-0 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#081C2E] text-white text-sm">
                    <th className="border border-[#dde3ec] p-2 text-left">Role</th>
                    <th className="border border-[#dde3ec] p-2 text-left">Name</th>
                    <th className="border border-[#dde3ec] p-2 text-left">Signature</th>
                    <th className="border border-[#dde3ec] p-2 text-left">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {(['reportedBy', 'hseOfficer', 'siteManager'] as const).map((role) => (
                    <tr key={role}>
                      <td className="border border-[#dde3ec] p-2 bg-gray-50 font-bold text-sm">
                        {role === 'reportedBy' ? 'Reported By' : role === 'hseOfficer' ? 'HSE Officer' : 'Site Manager'}
                      </td>
                      <td className="border border-[#dde3ec] p-0">
                        <input 
                          type="text" 
                          required
                          className="w-full p-2 outline-none focus:bg-yellow-50"
                          value={formData.signOff[role].name}
                          onChange={(e) => handleSignOffChange(role, 'name', e.target.value)}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-0">
                        <input 
                          type="text" 
                          required
                          placeholder="Full name acts as signature"
                          className="w-full p-2 outline-none focus:bg-yellow-50"
                          value={formData.signOff[role].signature}
                          onChange={(e) => handleSignOffChange(role, 'signature', e.target.value)}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-0">
                        <input 
                          type="date" 
                          required
                          className="w-full p-2 outline-none focus:bg-yellow-50"
                          value={formData.signOff[role].date}
                          onChange={(e) => handleSignOffChange(role, 'date', e.target.value)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Error Message */}
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-end pb-10">
            <button 
              type="submit" 
              disabled={mutation.isPending}
              className={`
                bg-[#081C2E] text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg
                hover:bg-[#122b42] transition-all transform hover:-translate-y-1
                ${mutation.isPending ? 'opacity-70 cursor-not-allowed' : ''}
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
              ) : 'Submit Notification'}
            </button>
          </div>
        </form>

        {/* Revision History Footer */}
        <footer className="mt-12 border-t border-[#dde3ec] pt-6">
          <h3 className="text-sm font-bold text-[#081C2E] mb-3 uppercase tracking-wider">Revision History</h3>
          <table className="w-full border-collapse text-xs text-gray-600">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-[#dde3ec] p-2 text-left">Rev</th>
                <th className="border border-[#dde3ec] p-2 text-left">Date</th>
                <th className="border border-[#dde3ec] p-2 text-left">Description of Changes</th>
                <th className="border border-[#dde3ec] p-2 text-left">Author</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#dde3ec] p-2">00</td>
                <td className="border border-[#dde3ec] p-2">01 Mar 2026</td>
                <td className="border border-[#dde3ec] p-2">Initial approved release</td>
                <td className="border border-[#dde3ec] p-2">Joao Melo</td>
              </tr>
              <tr>
                <td className="border border-[#dde3ec] p-2 font-bold">01</td>
                <td className="border border-[#dde3ec] p-2">01 March 2026</td>
                <td className="border border-[#dde3ec] p-2">Formatted for IMS Portal</td>
                <td className="border border-[#dde3ec] p-2">Manus AI</td>
              </tr>
            </tbody>
          </table>
        </footer>
      </div>
    </Layout>
  );
}
