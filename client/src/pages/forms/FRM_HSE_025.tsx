import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_025() {
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
    },
  });

  const [formData, setFormData] = useState({
    occurrenceReference: "",
    investigationStartDate: "",
    investigationLead: "",
    investigationTeamMembers: "",
    locationSite: "",
    originalOccurrenceDate: "",
    originalClassification: "",
    occurrenceSummary: "",
    directCause: "",
    contributingFactors: "",
    rootCause: "",
    regulatoryFollowUp: {
      na: false,
      mhrsdNotified: false,
      gosiNotified: false,
      civilDefence: false,
      clientNotified: false,
    },
    complianceActionsRequired: "",
    notificationReference: "",
    photo1: "",
    photo2: "",
    remarks: "",
    hseOfficerName: "",
    hseOfficerDate: "",
    hseManagerName: "",
    hseManagerDate: "",
    projectManagerName: "",
    projectManagerDate: "",
    siteManagerName: "",
    siteManagerDate: "",
    generalManagerName: "",
    generalManagerDate: "",
  });

  const [sequenceOfEvents, setSequenceOfEvents] = useState([
    { time: "", event: "", source: "" },
  ]);

  const [findings, setFindings] = useState([
    { no: "1", finding: "", severity: "", reference: "" },
  ]);

  const [capaActions, setCapaActions] = useState([
    { no: "1", action: "", responsible: "", targetDate: "", controlType: "", status: "", signature: "" },
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      regulatoryFollowUp: {
        ...prev.regulatoryFollowUp,
        [name]: checked,
      },
    }));
  };

  const addSequenceRow = () => {
    setSequenceOfEvents([...sequenceOfEvents, { time: "", event: "", source: "" }]);
  };

  const addFindingRow = () => {
    setFindings([...findings, { no: (findings.length + 1).toString(), finding: "", severity: "", reference: "" }]);
  };

  const addCapaRow = () => {
    setCapaActions([...capaActions, { no: (capaActions.length + 1).toString(), action: "", responsible: "", targetDate: "", controlType: "", status: "", signature: "" }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const headers = [
      "Occurrence Reference", "Investigation Start Date", "Investigation Lead", "Investigation Team Members",
      "Location / Site", "Original Occurrence Date", "Original Classification", "Occurrence Summary",
      "Sequence of Events", "Direct Cause", "Contributing Factors", "Root Cause",
      "Findings", "CAPA Actions", "Regulatory: N/A", "Regulatory: MHRSD", "Regulatory: GOSI",
      "Regulatory: Civil Defence", "Regulatory: Client", "Compliance Actions Required", "Notification Reference",
      "Photo 1", "Photo 2", "Remarks", "HSE Officer Name", "HSE Officer Date", "HSE Manager Name", "HSE Manager Date",
      "Project Manager Name", "Project Manager Date", "Site Manager Name", "Site Manager Date", "General Manager Name", "General Manager Date"
    ];

    const values = [
      formData.occurrenceReference, formData.investigationStartDate, formData.investigationLead, formData.investigationTeamMembers,
      formData.locationSite, formData.originalOccurrenceDate, formData.originalClassification, formData.occurrenceSummary,
      JSON.stringify(sequenceOfEvents), formData.directCause, formData.contributingFactors, formData.rootCause,
      JSON.stringify(findings), JSON.stringify(capaActions),
      formData.regulatoryFollowUp.na ? "Yes" : "No", formData.regulatoryFollowUp.mhrsdNotified ? "Yes" : "No",
      formData.regulatoryFollowUp.gosiNotified ? "Yes" : "No", formData.regulatoryFollowUp.civilDefence ? "Yes" : "No",
      formData.regulatoryFollowUp.clientNotified ? "Yes" : "No", formData.complianceActionsRequired, formData.notificationReference,
      formData.photo1, formData.photo2, formData.remarks,
      formData.hseOfficerName, formData.hseOfficerDate, formData.hseManagerName, formData.hseManagerDate,
      formData.projectManagerName, formData.projectManagerDate, formData.siteManagerName, formData.siteManagerDate,
      formData.generalManagerName, formData.generalManagerDate
    ];

    mutation.mutate({
      formCode: "TE-IMS-FRM-HSE-025",
      headers,
      values,
    });
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-10 text-center">
          <h2 className="text-2xl font-bold text-[#081C2E] mb-4">Form submitted successfully.</h2>
          <p className="mb-6">Your investigation report has been recorded.</p>
          <a
            href={sheetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C49A28] text-white px-6 py-2 rounded hover:bg-[#a38021] transition-colors"
          >
            View register
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
      <div className="max-w-5xl mx-auto p-6 bg-[#f4f6f9]">
        <nav className="mb-6">
          <Link href="/" className="text-[#081C2E] hover:underline font-semibold">← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/docs/frm" className="text-gray-600 hover:text-[#C49A28] transition-colors cursor-pointer">FRM</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Dangerous Occurrence Investigation Report</span>
        </nav>

        <div className="bg-white shadow-sm border border-[#dde3ec] mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#081C2E] text-white">
                <th className="p-2 border border-[#dde3ec] text-left">Document Code</th>
                <th className="p-2 border border-[#dde3ec] text-left">Revision</th>
                <th className="p-2 border border-[#dde3ec] text-left">Date</th>
                <th className="p-2 border border-[#dde3ec] text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-[#dde3ec]">TE-IMS-FRM-HSE-025</td>
                <td className="p-2 border border-[#dde3ec]">Rev02</td>
                <td className="p-2 border border-[#dde3ec]">April 2026</td>
                <td className="p-2 border border-[#dde3ec]">Approved for Implementation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* SECTION 1 */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider mb-4">
              SECTION 1 — INVESTIGATION DETAILS
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 border border-[#dde3ec]">
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Occurrence Reference (FRM-HSE-024 No.) *</label>
                <input type="text" name="occurrenceReference" required value={formData.occurrenceReference} onChange={handleInputChange} className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Investigation Start Date *</label>
                <input type="date" name="investigationStartDate" required value={formData.investigationStartDate} onChange={handleInputChange} className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Investigation Lead *</label>
                <input type="text" name="investigationLead" required value={formData.investigationLead} onChange={handleInputChange} className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Investigation Team Members</label>
                <input type="text" name="investigationTeamMembers" value={formData.investigationTeamMembers} onChange={handleInputChange} className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Location / Site *</label>
                <input type="text" name="locationSite" required value={formData.locationSite} onChange={handleInputChange} className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Original Occurrence Date *</label>
                <input type="date" name="originalOccurrenceDate" required value={formData.originalOccurrenceDate} onChange={handleInputChange} className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]" />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-semibold mb-1">Original Classification *</label>
                <input type="text" name="originalClassification" required value={formData.originalClassification} onChange={handleInputChange} className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]" />
              </div>
            </div>
          </section>

          {/* SECTION 2 */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider mb-4">
              SECTION 2 — OCCURRENCE SUMMARY
            </div>
            <div className="bg-white p-4 border border-[#dde3ec]">
              <label className="text-sm font-semibold mb-1 block">Brief description of the dangerous occurrence (from initial report) *</label>
              <textarea name="occurrenceSummary" required value={formData.occurrenceSummary} onChange={handleInputChange} rows={4} className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"></textarea>
            </div>
          </section>

          {/* SECTION 3 */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider mb-4 flex justify-between items-center">
              <span>SECTION 3 — SEQUENCE OF EVENTS</span>
              <button type="button" onClick={addSequenceRow} className="bg-[#C49A28] text-white text-xs px-2 py-1 rounded hover:bg-[#a38021]">Add Row</button>
            </div>
            <div className="overflow-x-auto bg-white border border-[#dde3ec]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#081C2E] text-white">
                    <th className="p-2 border border-[#dde3ec] w-32">Time</th>
                    <th className="p-2 border border-[#dde3ec]">Event / Action</th>
                    <th className="p-2 border border-[#dde3ec] w-48">Source of Info</th>
                  </tr>
                </thead>
                <tbody>
                  {sequenceOfEvents.map((row, index) => (
                    <tr key={index}>
                      <td className="p-1 border border-[#dde3ec]">
                        <input type="time" value={row.time} onChange={(e) => {
                          const newRows = [...sequenceOfEvents];
                          newRows[index].time = e.target.value;
                          setSequenceOfEvents(newRows);
                        }} className="w-full p-1 border-none focus:ring-0" />
                      </td>
                      <td className="p-1 border border-[#dde3ec]">
                        <input type="text" value={row.event} onChange={(e) => {
                          const newRows = [...sequenceOfEvents];
                          newRows[index].event = e.target.value;
                          setSequenceOfEvents(newRows);
                        }} className="w-full p-1 border-none focus:ring-0" />
                      </td>
                      <td className="p-1 border border-[#dde3ec]">
                        <input type="text" value={row.source} onChange={(e) => {
                          const newRows = [...sequenceOfEvents];
                          newRows[index].source = e.target.value;
                          setSequenceOfEvents(newRows);
                        }} className="w-full p-1 border-none focus:ring-0" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 4 */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider mb-4">
              SECTION 4 — ROOT CAUSE ANALYSIS
            </div>
            <div className="space-y-4 bg-white p-4 border border-[#dde3ec]">
              <div>
                <label className="text-sm font-semibold mb-1 block">Direct Cause *</label>
                <textarea name="directCause" required value={formData.directCause} onChange={handleInputChange} rows={2} className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"></textarea>
              </div>
              <div>
                <label className="text-sm font-semibold mb-1 block">Contributing Factors *</label>
                <textarea name="contributingFactors" required value={formData.contributingFactors} onChange={handleInputChange} rows={3} className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"></textarea>
              </div>
              <div>
                <label className="text-sm font-semibold mb-1 block">Root Cause *</label>
                <textarea name="rootCause" required value={formData.rootCause} onChange={handleInputChange} rows={3} className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"></textarea>
              </div>
            </div>
          </section>

          {/* SECTION 5 */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider mb-4 flex justify-between items-center">
              <span>SECTION 5 — FINDINGS</span>
              <button type="button" onClick={addFindingRow} className="bg-[#C49A28] text-white text-xs px-2 py-1 rounded hover:bg-[#a38021]">Add Row</button>
            </div>
            <div className="overflow-x-auto bg-white border border-[#dde3ec]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#081C2E] text-white">
                    <th className="p-2 border border-[#dde3ec] w-12">No.</th>
                    <th className="p-2 border border-[#dde3ec]">Finding</th>
                    <th className="p-2 border border-[#dde3ec] w-32">Severity</th>
                    <th className="p-2 border border-[#dde3ec] w-48">Reference</th>
                  </tr>
                </thead>
                <tbody>
                  {findings.map((row, index) => (
                    <tr key={index}>
                      <td className="p-1 border border-[#dde3ec] text-center">{row.no}</td>
                      <td className="p-1 border border-[#dde3ec]">
                        <input type="text" value={row.finding} onChange={(e) => {
                          const newRows = [...findings];
                          newRows[index].finding = e.target.value;
                          setFindings(newRows);
                        }} className="w-full p-1 border-none focus:ring-0" />
                      </td>
                      <td className="p-1 border border-[#dde3ec]">
                        <select value={row.severity} onChange={(e) => {
                          const newRows = [...findings];
                          newRows[index].severity = e.target.value;
                          setFindings(newRows);
                        }} className="w-full p-1 border-none focus:ring-0 bg-transparent">
                          <option value="">Select</option>
                          <option value="Low">Low</option>
                          <option value="Medium">Medium</option>
                          <option value="High">High</option>
                          <option value="Critical">Critical</option>
                        </select>
                      </td>
                      <td className="p-1 border border-[#dde3ec]">
                        <input type="text" value={row.reference} onChange={(e) => {
                          const newRows = [...findings];
                          newRows[index].reference = e.target.value;
                          setFindings(newRows);
                        }} className="w-full p-1 border-none focus:ring-0" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 6 */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider mb-4 flex justify-between items-center">
              <span>SECTION 6 — CORRECTIVE AND PREVENTIVE ACTIONS</span>
              <button type="button" onClick={addCapaRow} className="bg-[#C49A28] text-white text-xs px-2 py-1 rounded hover:bg-[#a38021]">Add Row</button>
            </div>
            <div className="overflow-x-auto bg-white border border-[#dde3ec]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#081C2E] text-white">
                    <th className="p-2 border border-[#dde3ec] w-10">No.</th>
                    <th className="p-2 border border-[#dde3ec]">Action Required</th>
                    <th className="p-2 border border-[#dde3ec] w-32">Responsible</th>
                    <th className="p-2 border border-[#dde3ec] w-32">Target Date</th>
                    <th className="p-2 border border-[#dde3ec] w-32">Control Type</th>
                    <th className="p-2 border border-[#dde3ec] w-24">Status</th>
                    <th className="p-2 border border-[#dde3ec] w-32">Signature</th>
                  </tr>
                </thead>
                <tbody>
                  {capaActions.map((row, index) => (
                    <tr key={index}>
                      <td className="p-1 border border-[#dde3ec] text-center text-xs">{row.no}</td>
                      <td className="p-1 border border-[#dde3ec]">
                        <input type="text" value={row.action} onChange={(e) => {
                          const newRows = [...capaActions];
                          newRows[index].action = e.target.value;
                          setCapaActions(newRows);
                        }} className="w-full p-1 border-none focus:ring-0 text-xs" />
                      </td>
                      <td className="p-1 border border-[#dde3ec]">
                        <input type="text" value={row.responsible} onChange={(e) => {
                          const newRows = [...capaActions];
                          newRows[index].responsible = e.target.value;
                          setCapaActions(newRows);
                        }} className="w-full p-1 border-none focus:ring-0 text-xs" />
                      </td>
                      <td className="p-1 border border-[#dde3ec]">
                        <input type="date" value={row.targetDate} onChange={(e) => {
                          const newRows = [...capaActions];
                          newRows[index].targetDate = e.target.value;
                          setCapaActions(newRows);
                        }} className="w-full p-1 border-none focus:ring-0 text-xs" />
                      </td>
                      <td className="p-1 border border-[#dde3ec]">
                        <select value={row.controlType} onChange={(e) => {
                          const newRows = [...capaActions];
                          newRows[index].controlType = e.target.value;
                          setCapaActions(newRows);
                        }} className="w-full p-1 border-none focus:ring-0 bg-transparent text-xs">
                          <option value="">Select</option>
                          <option value="Elimination">Elimination</option>
                          <option value="Substitution">Substitution</option>
                          <option value="Engineering">Engineering</option>
                          <option value="Administrative">Administrative</option>
                          <option value="PPE">PPE</option>
                        </select>
                      </td>
                      <td className="p-1 border border-[#dde3ec]">
                        <select value={row.status} onChange={(e) => {
                          const newRows = [...capaActions];
                          newRows[index].status = e.target.value;
                          setCapaActions(newRows);
                        }} className="w-full p-1 border-none focus:ring-0 bg-transparent text-xs">
                          <option value="">Select</option>
                          <option value="Open">Open</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </td>
                      <td className="p-1 border border-[#dde3ec]">
                        <input type="text" placeholder="Sign" value={row.signature} onChange={(e) => {
                          const newRows = [...capaActions];
                          newRows[index].signature = e.target.value;
                          setCapaActions(newRows);
                        }} className="w-full p-1 border-none focus:ring-0 text-xs" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 7 */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider mb-4">
              SECTION 7 — REGULATORY FOLLOW-UP (KSA)
            </div>
            <div className="bg-white p-4 border border-[#dde3ec] space-y-4">
              <div className="flex flex-wrap gap-6">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" name="na" checked={formData.regulatoryFollowUp.na} onChange={handleCheckboxChange} className="w-4 h-4 text-[#C49A28] focus:ring-[#C49A28] border-gray-300 rounded" />
                  <span className="text-sm font-semibold">N/A</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" name="mhrsdNotified" checked={formData.regulatoryFollowUp.mhrsdNotified} onChange={handleCheckboxChange} className="w-4 h-4 text-[#C49A28] focus:ring-[#C49A28] border-gray-300 rounded" />
                  <span className="text-sm font-semibold">MHRSD Notified</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" name="gosiNotified" checked={formData.regulatoryFollowUp.gosiNotified} onChange={handleCheckboxChange} className="w-4 h-4 text-[#C49A28] focus:ring-[#C49A28] border-gray-300 rounded" />
                  <span className="text-sm font-semibold">GOSI Notified</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" name="civilDefence" checked={formData.regulatoryFollowUp.civilDefence} onChange={handleCheckboxChange} className="w-4 h-4 text-[#C49A28] focus:ring-[#C49A28] border-gray-300 rounded" />
                  <span className="text-sm font-semibold">Civil Defence</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" name="clientNotified" checked={formData.regulatoryFollowUp.clientNotified} onChange={handleCheckboxChange} className="w-4 h-4 text-[#C49A28] focus:ring-[#C49A28] border-gray-300 rounded" />
                  <span className="text-sm font-semibold">Client Notified</span>
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm font-semibold mb-1">Compliance Actions Required</label>
                  <input type="text" name="complianceActionsRequired" value={formData.complianceActionsRequired} onChange={handleInputChange} className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-semibold mb-1">Notification Reference</label>
                  <input type="text" name="notificationReference" value={formData.notificationReference} onChange={handleInputChange} className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]" />
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 8 */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider mb-4">
              SECTION 8 — PHOTOS / EVIDENCE
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 border border-[#dde3ec]">
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Photo 1 (Link or Description)</label>
                <input type="text" name="photo1" value={formData.photo1} onChange={handleInputChange} className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Photo 2 (Link or Description)</label>
                <input type="text" name="photo2" value={formData.photo2} onChange={handleInputChange} className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]" />
              </div>
            </div>
          </section>

          {/* SECTION 9 */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider mb-4">
              SECTION 9 — REMARKS / ADDITIONAL INFORMATION
            </div>
            <div className="bg-white p-4 border border-[#dde3ec]">
              <textarea name="remarks" value={formData.remarks} onChange={handleInputChange} rows={3} className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"></textarea>
            </div>
          </section>

          {/* SECTION 10 */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider mb-4">
              SECTION 10 — SIGN-OFF AND DISTRIBUTION
            </div>
            <div className="overflow-x-auto bg-white border border-[#dde3ec]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#081C2E] text-white">
                    <th className="p-2 border border-[#dde3ec] w-1/4">Role</th>
                    <th className="p-2 border border-[#dde3ec] w-1/4">Name (Signature)</th>
                    <th className="p-2 border border-[#dde3ec] w-1/4">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border border-[#dde3ec] font-semibold">HSE Officer</td>
                    <td className="p-1 border border-[#dde3ec]"><input type="text" name="hseOfficerName" placeholder="Full Name" value={formData.hseOfficerName} onChange={handleInputChange} className="w-full p-1 border-none focus:ring-0" /></td>
                    <td className="p-1 border border-[#dde3ec]"><input type="date" name="hseOfficerDate" value={formData.hseOfficerDate} onChange={handleInputChange} className="w-full p-1 border-none focus:ring-0" /></td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-[#dde3ec] font-semibold">HSE Manager</td>
                    <td className="p-1 border border-[#dde3ec]"><input type="text" name="hseManagerName" placeholder="Full Name" value={formData.hseManagerName} onChange={handleInputChange} className="w-full p-1 border-none focus:ring-0" /></td>
                    <td className="p-1 border border-[#dde3ec]"><input type="date" name="hseManagerDate" value={formData.hseManagerDate} onChange={handleInputChange} className="w-full p-1 border-none focus:ring-0" /></td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-[#dde3ec] font-semibold">Project Manager</td>
                    <td className="p-1 border border-[#dde3ec]"><input type="text" name="projectManagerName" placeholder="Full Name" value={formData.projectManagerName} onChange={handleInputChange} className="w-full p-1 border-none focus:ring-0" /></td>
                    <td className="p-1 border border-[#dde3ec]"><input type="date" name="projectManagerDate" value={formData.projectManagerDate} onChange={handleInputChange} className="w-full p-1 border-none focus:ring-0" /></td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-[#dde3ec] font-semibold">Site Manager</td>
                    <td className="p-1 border border-[#dde3ec]"><input type="text" name="siteManagerName" placeholder="Full Name" value={formData.siteManagerName} onChange={handleInputChange} className="w-full p-1 border-none focus:ring-0" /></td>
                    <td className="p-1 border border-[#dde3ec]"><input type="date" name="siteManagerDate" value={formData.siteManagerDate} onChange={handleInputChange} className="w-full p-1 border-none focus:ring-0" /></td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-[#dde3ec] font-semibold">General Manager</td>
                    <td className="p-1 border border-[#dde3ec]"><input type="text" name="generalManagerName" placeholder="Full Name" value={formData.generalManagerName} onChange={handleInputChange} className="w-full p-1 border-none focus:ring-0" /></td>
                    <td className="p-1 border border-[#dde3ec]"><input type="date" name="generalManagerDate" value={formData.generalManagerDate} onChange={handleInputChange} className="w-full p-1 border-none focus:ring-0" /></td>
                  </tr>
                </tbody>
              </table>
              <div className="p-4 text-xs italic text-gray-600">
                Distribution: Project Manager, QHSE Manager, Project HSE Staff, Client (if required)
              </div>
            </div>
          </section>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative">
              {error}
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={mutation.isPending}
              className={`bg-[#081C2E] text-white px-8 py-3 rounded font-bold hover:bg-[#112d47] transition-colors ${mutation.isPending ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {mutation.isPending ? "Submitting..." : "Submit Investigation Report"}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
