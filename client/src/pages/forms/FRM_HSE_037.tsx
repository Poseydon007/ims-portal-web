import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_037() {
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

  const [formData, setFormData] = useState({
    // Employee Details
    date: "",
    refNo: "",
    employeeName: "",
    employeeId: "",
    departmentSite: "",
    jobTitle: "",
    designation: "",
    // Terms of Appointment
    effectiveDate: "",
    durationValidity: "",
    workLocation: "",
    trainingRequirement: "",
    authorityLevel: "",
    // Issued By
    issuedByName: "",
    issuedByPosition: "",
    issuedBySignature: "",
    issuedByDate: "",
    // Employee Acknowledgment
    ackEmployeeName: "",
    ackSignature: "",
    ackDate: "",
    ackWitness: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const headers = [
      "Date",
      "Ref No.",
      "Employee Name",
      "Employee ID",
      "Department / Site",
      "Job Title",
      "Designation",
      "Effective Date",
      "Duration / Validity",
      "Work Location",
      "Training Requirement",
      "Authority Level",
      "Issued By Name",
      "Issued By Position",
      "Issued By Signature",
      "Issued By Date",
      "Acknowledgment Employee Name",
      "Acknowledgment Signature",
      "Acknowledgment Date",
      "Acknowledgment Witness",
    ];

    const values = [
      formData.date,
      formData.refNo,
      formData.employeeName,
      formData.employeeId,
      formData.departmentSite,
      formData.jobTitle,
      formData.designation,
      formData.effectiveDate,
      formData.durationValidity,
      formData.workLocation,
      formData.trainingRequirement,
      formData.authorityLevel,
      formData.issuedByName,
      formData.issuedByPosition,
      formData.issuedBySignature,
      formData.issuedByDate,
      formData.ackEmployeeName,
      formData.ackSignature,
      formData.ackDate,
      formData.ackWitness,
    ];

    mutation.mutate({
      formCode: "TE-IMS-FRM-HSE-037",
      headers,
      values,
    });
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6">
          <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-2">Form submitted successfully.</h2>
            <p className="mb-4">Your appointment letter has been recorded.</p>
            <a
              href={sheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy hover:underline font-semibold"
            >
              View register: {sheetUrl}
            </a>
            <div className="mt-6">
              <Link href="/">
                <a className="text-navy hover:underline">← Back to Portal Home</a>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-6 bg-white shadow-md my-8 font-['Nunito_Sans']">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/">
            <a className="text-[#081C2E] hover:underline">← Portal Home</a>
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-500">FRM</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-500">LOCKOUT OFFICER APPOINTMENT LETTER</span>
        </nav>

        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#081C2E] mb-4">LOCKOUT OFFICER APPOINTMENT LETTER</h1>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-[#dde3ec]">
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
                  <td className="border border-[#dde3ec] p-2">TE-IMS-FRM-HSE-037</td>
                  <td className="border border-[#dde3ec] p-2">Rev01</td>
                  <td className="border border-[#dde3ec] p-2">09 Apr 2026</td>
                  <td className="border border-[#dde3ec] p-2">Approved for Implementation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section 1: Employee Details */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">
              1. EMPLOYEE DETAILS
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-[#dde3ec] p-4 rounded">
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Date *</label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Ref No.</label>
                <input
                  type="text"
                  name="refNo"
                  value={formData.refNo}
                  onChange={handleChange}
                  className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-semibold mb-1">Employee Name *</label>
                <input
                  type="text"
                  name="employeeName"
                  required
                  value={formData.employeeName}
                  onChange={handleChange}
                  className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Employee ID *</label>
                <input
                  type="text"
                  name="employeeId"
                  required
                  value={formData.employeeId}
                  onChange={handleChange}
                  className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Department / Site *</label>
                <input
                  type="text"
                  name="departmentSite"
                  required
                  value={formData.departmentSite}
                  onChange={handleChange}
                  className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Job Title *</label>
                <input
                  type="text"
                  name="jobTitle"
                  required
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Designation *</label>
                <input
                  type="text"
                  name="designation"
                  required
                  value={formData.designation}
                  onChange={handleChange}
                  className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
            </div>
          </section>

          {/* Section 2: Appointment */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">
              2. APPOINTMENT
            </div>
            <div className="border border-[#dde3ec] p-4 rounded bg-gray-50 italic text-gray-700 leading-relaxed">
              <p className="font-bold mb-2">Subject: Appointment as Lockout/Tagout (LOTO) Officer</p>
              <p>
                In accordance with the Executive Regulations of the Saudi Labor Law, and under the directives issued by the Ministry of Human Resources and Social Development (MHRSD), and in compliance with ISO 45001:2018 and applicable energy control standards, you are hereby appointed as a LOTO Officer at True East Mining Company.
              </p>
            </div>
          </section>

          {/* Section 3: Scope of Responsibilities */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">
              3. SCOPE OF RESPONSIBILITIES
            </div>
            <div className="border border-[#dde3ec] p-4 rounded bg-gray-50 text-gray-700 leading-relaxed">
              <p className="mb-2">As a designated Lockout/Tagout (LOTO) Officer, your key responsibilities include:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Control of Hazardous Energy:</strong> Implement, supervise, and verify the application of Lockout/Tagout procedures during maintenance and servicing activities.</li>
                <li><strong>Tagging and Locking:</strong> Ensure that all energy sources are properly isolated, locked, and tagged using approved LOTO devices before work begins.</li>
                <li><strong>Training & Awareness:</strong> Assist in training personnel on the correct use of LOTO procedures in accordance with True East’s Energy Control Program and ISO 45001:2018.</li>
                <li><strong>Verification:</strong> Conduct verification and inspections before equipment is re-energised to ensure all LOTO devices have been removed and the area is safe.</li>
                <li><strong>Audit & Recordkeeping:</strong> Maintain logs of LOTO events, audits, and equipment-specific procedures in coordination with the HSE department.</li>
                <li><strong>Regulatory Compliance:</strong> Ensure full compliance with local regulatory bodies including MHRSD and relevant international standards.</li>
                <li><strong>Stop Work Authority:</strong> You are authorised to stop work if LOTO protocols are not being followed and report such violations to the HSE Manager immediately.</li>
              </ul>
            </div>
          </section>

          {/* Section 4: Terms of Appointment */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">
              4. TERMS OF APPOINTMENT
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-[#dde3ec] p-4 rounded">
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Effective Date *</label>
                <input
                  type="date"
                  name="effectiveDate"
                  required
                  value={formData.effectiveDate}
                  onChange={handleChange}
                  className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Duration / Validity *</label>
                <input
                  type="text"
                  name="durationValidity"
                  required
                  placeholder="e.g. 1 Year, Until revoked"
                  value={formData.durationValidity}
                  onChange={handleChange}
                  className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Work Location *</label>
                <input
                  type="text"
                  name="workLocation"
                  required
                  value={formData.workLocation}
                  onChange={handleChange}
                  className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Training Requirement *</label>
                <input
                  type="text"
                  name="trainingRequirement"
                  required
                  placeholder="e.g. LOTO Certification"
                  value={formData.trainingRequirement}
                  onChange={handleChange}
                  className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-semibold mb-1">Authority Level *</label>
                <input
                  type="text"
                  name="authorityLevel"
                  required
                  value={formData.authorityLevel}
                  onChange={handleChange}
                  className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
            </div>
          </section>

          {/* Section 5: Issued By */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">
              5. ISSUED BY
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-[#dde3ec] p-4 rounded">
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Name *</label>
                <input
                  type="text"
                  name="issuedByName"
                  required
                  value={formData.issuedByName}
                  onChange={handleChange}
                  className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Position *</label>
                <input
                  type="text"
                  name="issuedByPosition"
                  required
                  value={formData.issuedByPosition}
                  onChange={handleChange}
                  className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Signature *</label>
                <input
                  type="text"
                  name="issuedBySignature"
                  required
                  placeholder="Full name (acts as signature)"
                  value={formData.issuedBySignature}
                  onChange={handleChange}
                  className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Date *</label>
                <input
                  type="date"
                  name="issuedByDate"
                  required
                  value={formData.issuedByDate}
                  onChange={handleChange}
                  className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
            </div>
          </section>

          {/* Section 6: Employee Acknowledgment and Acceptance */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">
              6. EMPLOYEE ACKNOWLEDGMENT AND ACCEPTANCE
            </div>
            <div className="border border-[#dde3ec] p-4 rounded mb-4 bg-gray-50 text-gray-700 italic">
              I acknowledge the receipt of this appointment letter and accept the role of Lockout/Tagout (LOTO) Officer as described above. I commit to fulfilling the responsibilities outlined and adhering to the applicable safety standards and regulations.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-[#dde3ec] p-4 rounded">
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Employee Name *</label>
                <input
                  type="text"
                  name="ackEmployeeName"
                  required
                  value={formData.ackEmployeeName}
                  onChange={handleChange}
                  className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Signature *</label>
                <input
                  type="text"
                  name="ackSignature"
                  required
                  placeholder="Full name (acts as signature)"
                  value={formData.ackSignature}
                  onChange={handleChange}
                  className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Date *</label>
                <input
                  type="date"
                  name="ackDate"
                  required
                  value={formData.ackDate}
                  onChange={handleChange}
                  className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Witness *</label>
                <input
                  type="text"
                  name="ackWitness"
                  required
                  value={formData.ackWitness}
                  onChange={handleChange}
                  className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
            </div>
          </section>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={mutation.isLoading}
              className={`px-8 py-3 bg-[#081C2E] text-white font-bold rounded shadow hover:bg-[#0a263d] transition-colors ${
                mutation.isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {mutation.isLoading ? "Submitting..." : "Submit Appointment Letter"}
            </button>
          </div>
        </form>

        {/* Revision History */}
        <div className="mt-12 overflow-x-auto">
          <table className="w-full border-collapse border border-[#dde3ec] text-xs">
            <thead>
              <tr className="bg-[#081C2E] text-white">
                <th className="border border-[#dde3ec] p-2 text-left">Rev</th>
                <th className="border border-[#dde3ec] p-2 text-left">Date</th>
                <th className="border border-[#dde3ec] p-2 text-left">Description of Changes</th>
                <th className="border border-[#dde3ec] p-2 text-left">Author</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#dde3ec] p-2">Rev00</td>
                <td className="border border-[#dde3ec] p-2">—</td>
                <td className="border border-[#dde3ec] p-2">Initial issue</td>
                <td className="border border-[#dde3ec] p-2">—</td>
              </tr>
              <tr>
                <td className="border border-[#dde3ec] p-2">Rev01</td>
                <td className="border border-[#dde3ec] p-2">09 Apr 2026</td>
                <td className="border border-[#dde3ec] p-2">
                  Reformatted to TE IMS standard with structured sections, employee details table, stop work authority, formal sign-off, and witness field. Content preserved from Rev00.
                </td>
                <td className="border border-[#dde3ec] p-2">IMS Team</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
