import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_035() {
  const [formData, setFormData] = useState({
    date: "",
    refNo: "",
    employeeName: "",
    employeeId: "",
    departmentSite: "",
    jobTitle: "",
    designation: "",
    effectiveDate: "",
    durationValidity: "",
    workLocation: "",
    trainingRequirement: "",
    issuedByName: "",
    issuedByPosition: "",
    issuedBySignature: "",
    issuedByDate: "",
    ackEmployeeName: "",
    ackSignature: "",
    ackDate: "",
    ackWitness: "",
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
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    setError("");

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
      formCode: "TE-IMS-FRM-HSE-035",
      headers,
      values,
    });
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 text-center">
          <h1 className="text-2xl font-bold text-[#081C2E] mb-4">Form submitted successfully.</h1>
          <p className="mb-6">Your appointment letter has been recorded.</p>
          <a
            href={sheetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C49A28] text-white px-6 py-2 rounded hover:bg-[#a37f21] transition-colors"
          >
            View Register
          </a>
          <div className="mt-8">
            <Link href="/" className="text-[#081C2E] hover:underline">
              ← Back to Portal Home
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-4 sm:p-8 bg-[#f4f6f9] min-h-screen">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <Link href="/" className="text-[#081C2E] hover:underline flex items-center gap-2 font-semibold">
            ← Portal Home
          </Link>
          <div className="flex items-center gap-1 text-sm mt-1"><Link href="/" className="text-gray-500 hover:text-[#C49A28]">Portal Home</Link><span className="text-gray-400 mx-1">/</span><Link href="/docs/frm" className="text-gray-500 hover:text-[#C49A28]">FRM</Link></div>
        </nav>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-[#dde3ec]">
          {/* Document Control Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#081C2E] text-white">
                  <th colSpan={4} className="p-4 text-center text-xl font-bold uppercase tracking-wider">
                    First Aider Appointment Letter
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#dde3ec]">
                  <td className="p-3 font-bold bg-[#f8fafc] border-r border-[#dde3ec] w-1/4">Document Code</td>
                  <td className="p-3 w-1/4 border-r border-[#dde3ec]">TE-IMS-FRM-HSE-035</td>
                  <td className="p-3 font-bold bg-[#f8fafc] border-r border-[#dde3ec] w-1/4">Revision</td>
                  <td className="p-3 w-1/4">Rev01</td>
                </tr>
                <tr className="border-b border-[#dde3ec]">
                  <td className="p-3 font-bold bg-[#f8fafc] border-r border-[#dde3ec]">Date</td>
                  <td className="p-3 border-r border-[#dde3ec]">09 Apr 2026</td>
                  <td className="p-3 font-bold bg-[#f8fafc] border-r border-[#dde3ec]">Status</td>
                  <td className="p-3 text-green-700 font-semibold">Approved for Implementation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-8">
            {/* Section 1: Employee Details */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">1. EMPLOYEE DETAILS</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-[#081C2E]">Date *</label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#C49A28]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-[#081C2E]">Ref No.</label>
                  <input
                    type="text"
                    name="refNo"
                    value={formData.refNo}
                    onChange={handleChange}
                    className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#C49A28]"
                  />
                </div>
                <div className="flex flex-col gap-1 md:col-span-2">
                  <label className="text-sm font-semibold text-[#081C2E]">Employee Name *</label>
                  <input
                    type="text"
                    name="employeeName"
                    required
                    value={formData.employeeName}
                    onChange={handleChange}
                    className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#C49A28]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-[#081C2E]">Employee ID *</label>
                  <input
                    type="text"
                    name="employeeId"
                    required
                    value={formData.employeeId}
                    onChange={handleChange}
                    className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#C49A28]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-[#081C2E]">Department / Site *</label>
                  <input
                    type="text"
                    name="departmentSite"
                    required
                    value={formData.departmentSite}
                    onChange={handleChange}
                    className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#C49A28]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-[#081C2E]">Job Title *</label>
                  <input
                    type="text"
                    name="jobTitle"
                    required
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#C49A28]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-[#081C2E]">Designation *</label>
                  <input
                    type="text"
                    name="designation"
                    required
                    value={formData.designation}
                    onChange={handleChange}
                    className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#C49A28]"
                  />
                </div>
              </div>
            </section>

            {/* Section 2: Appointment */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">2. APPOINTMENT</div>
              <div className="p-4 bg-gray-50 border border-[#dde3ec] rounded italic text-gray-700">
                <p className="font-bold mb-2">Subject: Appointment as Workplace First Aider</p>
                <p>
                  In line with the Occupational Safety and Health (OSH) provisions of the Executive Regulations of the Saudi Labor Law, as issued by the Ministry of Human Resources and Social Development (MHRSD), and in accordance with ISO 45001:2018 requirements, you are hereby appointed as a First Aider at True East Mining Company.
                </p>
              </div>
            </section>

            {/* Section 3: Scope of Responsibilities */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">3. SCOPE OF RESPONSIBILITIES</div>
              <div className="p-4 bg-gray-50 border border-[#dde3ec] rounded text-gray-700 space-y-3">
                <p className="font-semibold">As a designated First Aider, your key responsibilities include:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Administering First Aid:</strong> Provide immediate and appropriate first aid to any injured or ill person in the workplace until professional medical help is available.</li>
                  <li><strong>Incident Reporting:</strong> Document and report all cases of injury, illness, or health incidents in coordination with the HSE department.</li>
                  <li><strong>Equipment Management:</strong> Regularly inspect and maintain assigned first aid kits and ensure they are fully stocked and accessible.</li>
                  <li><strong>Regulatory Compliance:</strong> Act in accordance with ISO 45001:2018 and Saudi Arabia’s national occupational health regulations.</li>
                  <li><strong>Training & Drills:</strong> Participate in required first aid training and emergency response drills as scheduled by the HSE Unit.</li>
                  <li><strong>Confidentiality:</strong> Maintain confidentiality of all health-related matters and handle sensitive information with discretion.</li>
                </ul>
              </div>
            </section>

            {/* Section 4: Terms of Appointment */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">4. TERMS OF APPOINTMENT</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-[#081C2E]">Effective Date *</label>
                  <input
                    type="date"
                    name="effectiveDate"
                    required
                    value={formData.effectiveDate}
                    onChange={handleChange}
                    className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#C49A28]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-[#081C2E]">Duration / Validity *</label>
                  <input
                    type="text"
                    name="durationValidity"
                    required
                    placeholder="e.g. 2 years, until revoked"
                    value={formData.durationValidity}
                    onChange={handleChange}
                    className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#C49A28]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-[#081C2E]">Work Location *</label>
                  <input
                    type="text"
                    name="workLocation"
                    required
                    value={formData.workLocation}
                    onChange={handleChange}
                    className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#C49A28]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-[#081C2E]">Training Requirement *</label>
                  <input
                    type="text"
                    name="trainingRequirement"
                    required
                    placeholder="e.g. Valid First Aid Certificate"
                    value={formData.trainingRequirement}
                    onChange={handleChange}
                    className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#C49A28]"
                  />
                </div>
              </div>
            </section>

            {/* Section 5: Issued By */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">5. ISSUED BY</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-[#081C2E]">Name *</label>
                  <input
                    type="text"
                    name="issuedByName"
                    required
                    value={formData.issuedByName}
                    onChange={handleChange}
                    className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#C49A28]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-[#081C2E]">Position *</label>
                  <input
                    type="text"
                    name="issuedByPosition"
                    required
                    value={formData.issuedByPosition}
                    onChange={handleChange}
                    className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#C49A28]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-[#081C2E]">Signature (Full Name) *</label>
                  <input
                    type="text"
                    name="issuedBySignature"
                    required
                    placeholder="Full name acts as signature"
                    value={formData.issuedBySignature}
                    onChange={handleChange}
                    className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#C49A28]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-[#081C2E]">Date *</label>
                  <input
                    type="date"
                    name="issuedByDate"
                    required
                    value={formData.issuedByDate}
                    onChange={handleChange}
                    className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#C49A28]"
                  />
                </div>
              </div>
            </section>

            {/* Section 6: Employee Acknowledgment */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">6. EMPLOYEE ACKNOWLEDGMENT AND ACCEPTANCE</div>
              <div className="p-4 bg-gray-50 border border-[#dde3ec] rounded mb-4 text-gray-700 italic">
                I acknowledge the receipt of this appointment letter and accept the role of First Aider as described above. I commit to fulfilling the responsibilities outlined and adhering to the applicable safety standards and regulations.
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-[#081C2E]">Employee Name *</label>
                  <input
                    type="text"
                    name="ackEmployeeName"
                    required
                    value={formData.ackEmployeeName}
                    onChange={handleChange}
                    className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#C49A28]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-[#081C2E]">Signature (Full Name) *</label>
                  <input
                    type="text"
                    name="ackSignature"
                    required
                    placeholder="Full name acts as signature"
                    value={formData.ackSignature}
                    onChange={handleChange}
                    className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#C49A28]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-[#081C2E]">Date *</label>
                  <input
                    type="date"
                    name="ackDate"
                    required
                    value={formData.ackDate}
                    onChange={handleChange}
                    className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#C49A28]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-[#081C2E]">Witness *</label>
                  <input
                    type="text"
                    name="ackWitness"
                    required
                    value={formData.ackWitness}
                    onChange={handleChange}
                    className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#C49A28]"
                  />
                </div>
              </div>
            </section>

            {error && <div className="text-red-600 font-semibold text-center">{error}</div>}

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={mutation.isPending}
                className="bg-[#081C2E] text-white px-8 py-3 rounded font-bold hover:bg-[#112e4a] transition-colors disabled:opacity-50 flex items-center gap-2"
              >
                {mutation.isPending ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit Appointment Letter"
                )}
              </button>
            </div>
          </form>

          {/* Revision History */}
          <div className="border-t border-[#dde3ec] p-6 bg-gray-50">
            <h3 className="text-sm font-bold text-[#081C2E] mb-2">REVISION HISTORY</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse border border-[#dde3ec]">
                <thead className="bg-[#081C2E] text-white">
                  <tr>
                    <th className="p-2 border border-[#dde3ec]">Rev</th>
                    <th className="p-2 border border-[#dde3ec]">Date</th>
                    <th className="p-2 border border-[#dde3ec]">Description of Changes</th>
                    <th className="p-2 border border-[#dde3ec]">Author</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border border-[#dde3ec]">Rev00</td>
                    <td className="p-2 border border-[#dde3ec]">—</td>
                    <td className="p-2 border border-[#dde3ec]">Initial issue</td>
                    <td className="p-2 border border-[#dde3ec]">—</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-[#dde3ec]">Rev01</td>
                    <td className="p-2 border border-[#dde3ec]">09 Apr 2026</td>
                    <td className="p-2 border border-[#dde3ec]">Reformatted to TE IMS standard with structured sections, employee details table, formal sign-off, and witness field.</td>
                    <td className="p-2 border border-[#dde3ec]">IMS Team</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
