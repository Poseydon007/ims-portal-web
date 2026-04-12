import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_SYS_001() {
  const [formData, setFormData] = useState({
    auditRefNo: "",
    auditType: "",
    auditScope: "",
    standardsAudited: "",
    leadAuditorName: "",
    auditTeamMembers: "",
    auditeeDetails: "",
    auditDates: "",
    openingMeeting: "",
    closingMeeting: "",
    // Tables
    policies: [
      { id: "A1", item: "Are signed IMS, Quality, Environmental, and OH&S policies in place, current, and communicated?", finding: "" },
      { id: "A2", item: "Are policies available to relevant interested parties as appropriate?", finding: "" },
      { id: "A3", item: "Is the policy aligned with the context, risks, and strategic direction of the organisation?", finding: "" },
      { id: "A4", item: "(Additional item)", finding: "" },
      { id: "A5", item: "(Additional item)", finding: "" },
    ],
    coreProcedures: [
      { id: "B1", item: "Document Control Procedure followed — current revisions in use across all sites?", finding: "" },
      { id: "B2", item: "Management Review Procedure conducted; actions tracked to closure?", finding: "" },
      { id: "B3", item: "Risk and Opportunity Management Procedure applied; register current?", finding: "" },
      { id: "B4", item: "Internal Audit Procedure followed; audit programme approved?", finding: "" },
      { id: "B5", item: "(Additional item)", finding: "" },
    ],
    sops: [
      { id: "C1", item: "Diamond Drilling Operation SOP followed on site?", finding: "" },
      { id: "C2", item: "LOTO / Hot Work / Confined Space SOPs used with valid permits?", finding: "" },
      { id: "C3", item: "Operators trained and competent on the SOPs they use?", finding: "" },
      { id: "C4", item: "Work instructions accessible at the point of use?", finding: "" },
      { id: "C5", item: "(Additional item)", finding: "" },
    ],
    formsRegisters: [
      { id: "D1", item: "Training and Competence Matrix up-to-date and reviewed?", finding: "" },
      { id: "D2", item: "PPE Kit Issuance and Spot-Check records complete?", finding: "" },
      { id: "D3", item: "Pre-start and daily inspection records (vehicles, rigs) completed?", finding: "" },
      { id: "D4", item: "CAPA Register current, with status and due dates for each action?", finding: "" },
      { id: "D5", item: "(Additional item)", finding: "" },
    ],
    performanceRecords: [
      { id: "E1", item: "KPI dashboard current, reviewed by Management, and trending?", finding: "" },
      { id: "E2", item: "Incident Flash Notifications raised, investigated, and closed-out?", finding: "" },
      { id: "E3", item: "Objectives and targets monitored and progress documented?", finding: "" },
      { id: "E4", item: "Records retention rules applied and evidenced?", finding: "" },
      { id: "E5", item: "(Additional item)", finding: "" },
    ],
    nonConformities: [
      { id: "01", description: "", targetDate: "" },
      { id: "02", description: "", targetDate: "" },
      { id: "03", description: "", targetDate: "" },
      { id: "04", description: "", targetDate: "" },
      { id: "05", description: "", targetDate: "" },
    ],
    opportunities: [
      { id: "01", description: "", owner: "" },
      { id: "02", description: "", owner: "" },
      { id: "03", description: "", owner: "" },
    ],
    // Summary
    totalAudited: "",
    compliantCount: "",
    majorNCCount: "",
    minorNCCount: "",
    ofiCount: "",
    highRisks: "",
    auditConclusion: "",
    auditorSignature: "",
    auditorDate: "",
    // Auditee Acknowledgement
    auditeeName: "",
    auditeePosition: "",
    auditeeSignature: "",
    auditeeDate: "",
    // IMS Review
    reviewedBy: "",
    capaLogged: "",
    reviewComments: "",
    reviewSignature: "",
    reviewDate: "",
  });

  const mutation = trpc.formSubmissions.submit.useMutation();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTableChange = (section: string, index: number, field: string, value: string) => {
    setFormData((prev: any) => {
      const updatedSection = [...prev[section]];
      updatedSection[index] = { ...updatedSection[index], [field]: value };
      return { ...prev, [section]: updatedSection };
    });
  };

  const addRow = (section: string, template: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [section]: [...prev[section], { ...template, id: (prev[section].length + 1).toString().padStart(2, '0') }]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const headers = [
      "Audit Reference No.", "Audit Type", "Audit Scope", "Standards Audited", "Lead Auditor", "Team Members", "Auditee Details", "Audit Dates", "Opening Meeting", "Closing Meeting",
      ...formData.policies.flatMap((p, i) => [`Policy ${p.id} Item`, `Policy ${p.id} Finding`]),
      ...formData.coreProcedures.flatMap((p, i) => [`Core ${p.id} Item`, `Core ${p.id} Finding`]),
      ...formData.sops.flatMap((p, i) => [`SOP ${p.id} Item`, `SOP ${p.id} Finding`]),
      ...formData.formsRegisters.flatMap((p, i) => [`Form/Reg ${p.id} Item`, `Form/Reg ${p.id} Finding`]),
      ...formData.performanceRecords.flatMap((p, i) => [`Perf ${p.id} Item`, `Perf ${p.id} Finding`]),
      ...formData.nonConformities.flatMap((nc, i) => [`NC ${nc.id} Description`, `NC ${nc.id} Target Date`]),
      ...formData.opportunities.flatMap((o, i) => [`OFI ${o.id} Description`, `OFI ${o.id} Owner`]),
      "Total Audited", "Compliant Count", "Major NC Count", "Minor NC Count", "OFI Count", "High Risks", "Conclusion", "Auditor Signature", "Auditor Date",
      "Auditee Name", "Auditee Position", "Auditee Signature", "Auditee Date",
      "Reviewed By", "CAPA Logged", "Review Comments", "Review Signature", "Review Date"
    ];

    const values = [
      formData.auditRefNo, formData.auditType, formData.auditScope, formData.standardsAudited, formData.leadAuditorName, formData.auditTeamMembers, formData.auditeeDetails, formData.auditDates, formData.openingMeeting, formData.closingMeeting,
      ...formData.policies.flatMap(p => [p.item, p.finding]),
      ...formData.coreProcedures.flatMap(p => [p.item, p.finding]),
      ...formData.sops.flatMap(p => [p.item, p.finding]),
      ...formData.formsRegisters.flatMap(p => [p.item, p.finding]),
      ...formData.performanceRecords.flatMap(p => [p.item, p.finding]),
      ...formData.nonConformities.flatMap(nc => [nc.description, nc.targetDate]),
      ...formData.opportunities.flatMap(o => [o.description, o.owner]),
      formData.totalAudited, formData.compliantCount, formData.majorNCCount, formData.minorNCCount, formData.ofiCount, formData.highRisks, formData.auditConclusion, formData.auditorSignature, formData.auditorDate,
      formData.auditeeName, formData.auditeePosition, formData.auditeeSignature, formData.auditeeDate,
      formData.reviewedBy, formData.capaLogged, formData.reviewComments, formData.reviewSignature, formData.reviewDate
    ];

    try {
      await mutation.mutateAsync({
        formCode: "TE-IMS-FRM-SYS-001",
        headers,
        values,
      });
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "An error occurred during submission.");
    }
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto py-12 px-4">
          <div className="bg-white p-8 rounded-lg shadow-md border border-[#dde3ec] text-center">
            <h2 className="text-2xl font-bold text-[#081C2E] mb-4">Form submitted successfully</h2>
            <p className="mb-6">View register: <a href={mutation.data?.sheetUrl} target="_blank" rel="noopener noreferrer" className="text-[#C49A28] underline font-semibold">Google Sheet</a></p>
            <Link href="/" className="inline-block bg-[#081C2E] text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors">Return to Portal</Link>
          </div>
        </div>
      </Layout>
    );
  }

  const renderAuditTable = (title: string, section: string, data: any[]) => (
    <div className="mb-8">
      <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-2 uppercase tracking-wide">{title}</div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-[#dde3ec]">
          <thead>
            <tr className="bg-[#081C2E] text-white">
              <th className="border border-[#dde3ec] p-2 text-left w-12">#</th>
              <th className="border border-[#dde3ec] p-2 text-left">Audit Item</th>
              <th className="border border-[#dde3ec] p-2 text-left w-1/3">Finding / Evidence</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="bg-white">
                <td className="border border-[#dde3ec] p-2 text-center font-bold">{row.id}</td>
                <td className="border border-[#dde3ec] p-2">
                  <textarea
                    className="w-full p-1 border border-transparent focus:border-[#C49A28] outline-none resize-none"
                    value={row.item}
                    onChange={(e) => handleTableChange(section, index, "item", e.target.value)}
                    rows={2}
                  />
                </td>
                <td className="border border-[#dde3ec] p-2">
                  <textarea
                    className="w-full p-1 border border-[#dde3ec] focus:border-[#C49A28] outline-none resize-none"
                    value={row.finding}
                    onChange={(e) => handleTableChange(section, index, "finding", e.target.value)}
                    placeholder="C / NC / OFI / N/A + Evidence"
                    rows={2}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          type="button"
          onClick={() => addRow(section, { item: "(Additional item)", finding: "" })}
          className="mt-2 text-sm text-[#C49A28] font-bold hover:underline"
        >
          + Add Row
        </button>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-8 px-4 font-['Nunito_Sans']">
        <nav className="mb-6">
          <Link href="/" className="text-[#081C2E] hover:text-[#C49A28] transition-colors font-semibold">← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">FRM</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600 font-semibold">Audit Checklist Template</span>
        </nav>

        <form onSubmit={handleSubmit} className="bg-[#f4f6f9] p-6 rounded-lg shadow-sm border border-[#dde3ec]">
          {/* Document Control Table */}
          <div className="mb-8 overflow-x-auto">
            <table className="w-full border-collapse border border-[#dde3ec] bg-white text-sm">
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
                  <td className="border border-[#dde3ec] p-2 font-bold">TE-IMS-FRM-SYS-001</td>
                  <td className="border border-[#dde3ec] p-2">01</td>
                  <td className="border border-[#dde3ec] p-2">10.04.2026</td>
                  <td className="border border-[#dde3ec] p-2">Approved for Implementation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h1 className="text-2xl font-bold text-[#081C2E] mb-8 text-center border-b-2 border-[#C49A28] pb-2 uppercase tracking-wider">
            Audit Checklist Template
          </h1>

          {/* Section 1: Audit Information */}
          <div className="mb-8">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 uppercase tracking-wide">1. Audit Information</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 border border-[#dde3ec]">
              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#081C2E] mb-1">Audit Reference No. *</label>
                <input type="text" name="auditRefNo" value={formData.auditRefNo} onChange={handleChange} required className="p-2 border border-[#dde3ec] focus:border-[#C49A28] outline-none" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#081C2E] mb-1">Audit Type *</label>
                <input type="text" name="auditType" value={formData.auditType} onChange={handleChange} required placeholder="Scheduled / Unscheduled / Pillar-Specific / Full IMS" className="p-2 border border-[#dde3ec] focus:border-[#C49A28] outline-none" />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-bold text-[#081C2E] mb-1">Audit Scope and Focus *</label>
                <textarea name="auditScope" value={formData.auditScope} onChange={handleChange} required className="p-2 border border-[#dde3ec] focus:border-[#C49A28] outline-none h-20" />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-bold text-[#081C2E] mb-1">Standards audited against *</label>
                <input type="text" name="standardsAudited" value={formData.standardsAudited} onChange={handleChange} required placeholder="ISO 9001 / 14001 / 45001 / Other" className="p-2 border border-[#dde3ec] focus:border-[#C49A28] outline-none" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#081C2E] mb-1">Lead Auditor Name *</label>
                <input type="text" name="leadAuditorName" value={formData.leadAuditorName} onChange={handleChange} required className="p-2 border border-[#dde3ec] focus:border-[#C49A28] outline-none" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#081C2E] mb-1">Audit Team Members</label>
                <input type="text" name="auditTeamMembers" value={formData.auditTeamMembers} onChange={handleChange} className="p-2 border border-[#dde3ec] focus:border-[#C49A28] outline-none" />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-bold text-[#081C2E] mb-1">Auditee(s) — Department / Site / Personnel *</label>
                <input type="text" name="auditeeDetails" value={formData.auditeeDetails} onChange={handleChange} required className="p-2 border border-[#dde3ec] focus:border-[#C49A28] outline-none" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#081C2E] mb-1">Audit Date(s) *</label>
                <input type="text" name="auditDates" value={formData.auditDates} onChange={handleChange} required className="p-2 border border-[#dde3ec] focus:border-[#C49A28] outline-none" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#081C2E] mb-1">Opening Meeting Date / Time</label>
                <input type="text" name="openingMeeting" value={formData.openingMeeting} onChange={handleChange} className="p-2 border border-[#dde3ec] focus:border-[#C49A28] outline-none" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#081C2E] mb-1">Closing Meeting Date / Time</label>
                <input type="text" name="closingMeeting" value={formData.closingMeeting} onChange={handleChange} className="p-2 border border-[#dde3ec] focus:border-[#C49A28] outline-none" />
              </div>
            </div>
          </div>

          {/* Section 2: Audit Checklist - Modular Categories */}
          <div className="mb-4">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 uppercase tracking-wide">2. Audit Checklist — Modular Categories</div>
            <p className="text-sm text-gray-600 italic mb-4">Rate each item: C = Compliant, NC = Non-Conformant, OFI = Opportunity for Improvement, N/A = Not Applicable. Record objective evidence.</p>
          </div>

          {renderAuditTable("A. Policies — Strategic Commitments", "policies", formData.policies)}
          {renderAuditTable("B. Core Procedures — Company-Wide Controls", "coreProcedures", formData.coreProcedures)}
          {renderAuditTable("C. SOPs and Work Instructions — Task-Level Execution", "sops", formData.sops)}
          {renderAuditTable("D. Forms, Registers and Checklists — Evidence", "formsRegisters", formData.formsRegisters)}
          {renderAuditTable("E. Performance and Records", "performanceRecords", formData.performanceRecords)}

          {/* Section 3: Non-Conformities Raised */}
          <div className="mb-8">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-2 uppercase tracking-wide">3. Non-Conformities Raised</div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-[#dde3ec]">
                <thead>
                  <tr className="bg-[#081C2E] text-white">
                    <th className="border border-[#dde3ec] p-2 text-left w-12">#</th>
                    <th className="border border-[#dde3ec] p-2 text-left">NC Description, Clause, Classification (Major / Minor)</th>
                    <th className="border border-[#dde3ec] p-2 text-left w-1/4">Target Closure Date</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.nonConformities.map((row, index) => (
                    <tr key={index} className="bg-white">
                      <td className="border border-[#dde3ec] p-2 text-center font-bold">{row.id}</td>
                      <td className="border border-[#dde3ec] p-2">
                        <textarea
                          className="w-full p-1 border border-[#dde3ec] focus:border-[#C49A28] outline-none resize-none"
                          value={row.description}
                          onChange={(e) => handleTableChange("nonConformities", index, "description", e.target.value)}
                          rows={2}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input
                          type="date"
                          className="w-full p-1 border border-[#dde3ec] focus:border-[#C49A28] outline-none"
                          value={row.targetDate}
                          onChange={(e) => handleTableChange("nonConformities", index, "targetDate", e.target.value)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                type="button"
                onClick={() => addRow("nonConformities", { description: "", targetDate: "" })}
                className="mt-2 text-sm text-[#C49A28] font-bold hover:underline"
              >
                + Add Row
              </button>
            </div>
          </div>

          {/* Section 4: Opportunities for Improvement */}
          <div className="mb-8">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-2 uppercase tracking-wide">4. Opportunities for Improvement</div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-[#dde3ec]">
                <thead>
                  <tr className="bg-[#081C2E] text-white">
                    <th className="border border-[#dde3ec] p-2 text-left w-12">#</th>
                    <th className="border border-[#dde3ec] p-2 text-left">OFI Description</th>
                    <th className="border border-[#dde3ec] p-2 text-left w-1/4">Proposed Owner</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.opportunities.map((row, index) => (
                    <tr key={index} className="bg-white">
                      <td className="border border-[#dde3ec] p-2 text-center font-bold">{row.id}</td>
                      <td className="border border-[#dde3ec] p-2">
                        <textarea
                          className="w-full p-1 border border-[#dde3ec] focus:border-[#C49A28] outline-none resize-none"
                          value={row.description}
                          onChange={(e) => handleTableChange("opportunities", index, "description", e.target.value)}
                          rows={2}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input
                          type="text"
                          className="w-full p-1 border border-[#dde3ec] focus:border-[#C49A28] outline-none"
                          value={row.owner}
                          onChange={(e) => handleTableChange("opportunities", index, "owner", e.target.value)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                type="button"
                onClick={() => addRow("opportunities", { description: "", owner: "" })}
                className="mt-2 text-sm text-[#C49A28] font-bold hover:underline"
              >
                + Add Row
              </button>
            </div>
          </div>

          {/* Section 5: Overall Audit Summary */}
          <div className="mb-8">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 uppercase tracking-wide">5. Overall Audit Summary</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 border border-[#dde3ec]">
              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#081C2E] mb-1">Total items audited</label>
                <input type="number" name="totalAudited" value={formData.totalAudited} onChange={handleChange} className="p-2 border border-[#dde3ec] focus:border-[#C49A28] outline-none" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#081C2E] mb-1">Number of Compliant findings (C)</label>
                <input type="number" name="compliantCount" value={formData.compliantCount} onChange={handleChange} className="p-2 border border-[#dde3ec] focus:border-[#C49A28] outline-none" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#081C2E] mb-1">Number of Non-Conformities (Major)</label>
                <input type="number" name="majorNCCount" value={formData.majorNCCount} onChange={handleChange} className="p-2 border border-[#dde3ec] focus:border-[#C49A28] outline-none" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#081C2E] mb-1">Number of Non-Conformities (Minor)</label>
                <input type="number" name="minorNCCount" value={formData.minorNCCount} onChange={handleChange} className="p-2 border border-[#dde3ec] focus:border-[#C49A28] outline-none" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#081C2E] mb-1">Number of Opportunities for Improvement (OFI)</label>
                <input type="number" name="ofiCount" value={formData.ofiCount} onChange={handleChange} className="p-2 border border-[#dde3ec] focus:border-[#C49A28] outline-none" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#081C2E] mb-1">High / Critical risks identified</label>
                <input type="text" name="highRisks" value={formData.highRisks} onChange={handleChange} className="p-2 border border-[#dde3ec] focus:border-[#C49A28] outline-none" />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-bold text-[#081C2E] mb-1">Overall audit conclusion *</label>
                <select name="auditConclusion" value={formData.auditConclusion} onChange={handleChange} required className="p-2 border border-[#dde3ec] focus:border-[#C49A28] outline-none">
                  <option value="">Select Conclusion</option>
                  <option value="Satisfactory">Satisfactory</option>
                  <option value="Requires Action">Requires Action</option>
                  <option value="Critical">Critical</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#081C2E] mb-1">Lead Auditor Signature *</label>
                <input type="text" name="auditorSignature" value={formData.auditorSignature} onChange={handleChange} required placeholder="Full Name" className="p-2 border border-[#dde3ec] focus:border-[#C49A28] outline-none" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#081C2E] mb-1">Date *</label>
                <input type="date" name="auditorDate" value={formData.auditorDate} onChange={handleChange} required className="p-2 border border-[#dde3ec] focus:border-[#C49A28] outline-none" />
              </div>
            </div>
          </div>

          {/* Section 6: Auditee Acknowledgement */}
          <div className="mb-8">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 uppercase tracking-wide">6. Auditee Acknowledgement (Department Head / Site Manager)</div>
            <div className="p-4 bg-white border border-[#dde3ec] mb-4 text-sm text-gray-700 italic">
              I confirm that the audit findings listed above have been presented and explained at the closing meeting. I accept the non-conformities raised and commit to closing out the agreed corrective actions by the target dates.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 border border-[#dde3ec]">
              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#081C2E] mb-1">Name</label>
                <input type="text" name="auditeeName" value={formData.auditeeName} onChange={handleChange} className="p-2 border border-[#dde3ec] focus:border-[#C49A28] outline-none" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#081C2E] mb-1">Position</label>
                <input type="text" name="auditeePosition" value={formData.auditeePosition} onChange={handleChange} className="p-2 border border-[#dde3ec] focus:border-[#C49A28] outline-none" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#081C2E] mb-1">Signature</label>
                <input type="text" name="auditeeSignature" value={formData.auditeeSignature} onChange={handleChange} placeholder="Full Name" className="p-2 border border-[#dde3ec] focus:border-[#C49A28] outline-none" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#081C2E] mb-1">Date</label>
                <input type="date" name="auditeeDate" value={formData.auditeeDate} onChange={handleChange} className="p-2 border border-[#dde3ec] focus:border-[#C49A28] outline-none" />
              </div>
            </div>
          </div>

          {/* Section 7: IMS Project Lead / MR Review */}
          <div className="mb-8">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 uppercase tracking-wide">7. IMS Project Lead / MR Review</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 border border-[#dde3ec]">
              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#081C2E] mb-1">Reviewed by (IMS Lead / MR)</label>
                <input type="text" name="reviewedBy" value={formData.reviewedBy} onChange={handleChange} className="p-2 border border-[#dde3ec] focus:border-[#C49A28] outline-none" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#081C2E] mb-1">CAPA entries logged in REG-SYS-002?</label>
                <select name="capaLogged" value={formData.capaLogged} onChange={handleChange} className="p-2 border border-[#dde3ec] focus:border-[#C49A28] outline-none">
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-bold text-[#081C2E] mb-1">Comments and actions</label>
                <textarea name="reviewComments" value={formData.reviewComments} onChange={handleChange} className="p-2 border border-[#dde3ec] focus:border-[#C49A28] outline-none h-20" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#081C2E] mb-1">Signature</label>
                <input type="text" name="reviewSignature" value={formData.reviewSignature} onChange={handleChange} placeholder="Full Name" className="p-2 border border-[#dde3ec] focus:border-[#C49A28] outline-none" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-[#081C2E] mb-1">Date</label>
                <input type="date" name="reviewDate" value={formData.reviewDate} onChange={handleChange} className="p-2 border border-[#dde3ec] focus:border-[#C49A28] outline-none" />
              </div>
            </div>
          </div>

          {error && <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">{error}</div>}

          <button
            type="submit"
            disabled={mutation.isPending}
            className="w-full bg-[#081C2E] text-white font-bold py-3 rounded hover:bg-opacity-90 transition-colors disabled:bg-gray-400 uppercase tracking-widest"
          >
            {mutation.isPending ? "Submitting..." : "Submit Audit Checklist"}
          </button>
        </form>
      </div>
    </Layout>
  );
}
