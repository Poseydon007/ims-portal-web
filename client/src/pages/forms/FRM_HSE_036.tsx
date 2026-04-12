import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_036() {
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
  const [error, setError] = useState<string | null>(null);

  const mutation = trpc.formSubmissions.submit.useMutation({
    onSuccess: (data) => {
      setSubmitted(true);
      setSheetUrl(data.sheetUrl);
      setError(null);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formCode = "TE-IMS-FRM-HSE-036";
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

    mutation.mutate({ formCode, headers, values });
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 text-center">
          <h1 className="text-2xl font-bold text-[#081C2E] mb-4">Form submitted successfully.</h1>
          <p className="mb-6">
            View register:{" "}
            <a
              href={sheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C49A28] underline font-semibold"
            >
              Google Sheet
            </a>
          </p>
          <Link href="/">
            <button className="bg-[#081C2E] text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors">
              Return to Portal
            </button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-4 md:p-8 font-['Nunito_Sans'] text-[#081C2E]">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <Link href="/" className="text-[#C49A28] hover:underline flex items-center gap-2">
            ← Portal Home
          </Link>
          <span className="text-gray-400 mx-2">/</span>
          <span className="text-gray-600">FRM</span>
          <span className="text-gray-400 mx-2">/</span>
          <span className="text-gray-900 font-semibold">Fire Fighter Appointment Letter</span>
        </nav>

        {/* Document Control Table */}
        <div className="overflow-x-auto mb-8 border border-[#dde3ec]">
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
              <tr className="bg-white">
                <td className="p-2 border border-[#dde3ec]">TE-IMS-FRM-HSE-036</td>
                <td className="p-2 border border-[#dde3ec]">Rev01</td>
                <td className="p-2 border border-[#dde3ec]">09 Apr 2026</td>
                <td className="p-2 border border-[#dde3ec]">Approved for Implementation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-6 rounded shadow-sm border border-[#dde3ec]">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold uppercase border-b-2 border-[#C49A28] pb-2 inline-block">
              Fire Fighter Appointment Letter
            </h1>
          </div>

          {/* Section 1: Employee Details */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 uppercase tracking-wider">
              1. EMPLOYEE DETAILS
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Date *</label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="p-2 border border-[#dde3ec] rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Ref No. *</label>
                <input
                  type="text"
                  name="refNo"
                  required
                  value={formData.refNo}
                  onChange={handleChange}
                  className="p-2 border border-[#dde3ec] rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
              <div className="flex flex-col gap-1 md:col-span-2">
                <label className="text-sm font-semibold">Employee Name *</label>
                <input
                  type="text"
                  name="employeeName"
                  required
                  value={formData.employeeName}
                  onChange={handleChange}
                  className="p-2 border border-[#dde3ec] rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Employee ID *</label>
                <input
                  type="text"
                  name="employeeId"
                  required
                  value={formData.employeeId}
                  onChange={handleChange}
                  className="p-2 border border-[#dde3ec] rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Department / Site *</label>
                <input
                  type="text"
                  name="departmentSite"
                  required
                  value={formData.departmentSite}
                  onChange={handleChange}
                  className="p-2 border border-[#dde3ec] rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Job Title *</label>
                <input
                  type="text"
                  name="jobTitle"
                  required
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="p-2 border border-[#dde3ec] rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Designation *</label>
                <input
                  type="text"
                  name="designation"
                  required
                  value={formData.designation}
                  onChange={handleChange}
                  className="p-2 border border-[#dde3ec] rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
            </div>
          </section>

          {/* Section 2: Appointment Text */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 uppercase tracking-wider">
              2. APPOINTMENT
            </div>
            <div className="p-4 bg-[#f4f6f9] border-l-4 border-[#C49A28] italic text-sm leading-relaxed">
              <p className="font-bold mb-2 underline">Subject: Appointment as Workplace Firefighter / Fire Warden</p>
              <p>
                Pursuant to the requirements of the Executive Regulations of the Saudi Labor Law and the Occupational Safety and Health (OSH) Guidelines issued by the Ministry of Human Resources and Social Development (MHRSD), and in compliance with the Saudi Civil Defense regulations and ISO 45001:2018, you are hereby appointed as a Firefighter / Fire Warden at True East Mining Company.
              </p>
            </div>
          </section>

          {/* Section 3: Scope of Responsibilities */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 uppercase tracking-wider">
              3. SCOPE OF RESPONSIBILITIES
            </div>
            <div className="text-sm space-y-3 p-4 border border-[#dde3ec] rounded bg-white">
              <p className="font-semibold">As a designated Firefighter / Fire Warden, your key responsibilities include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Emergency Fire Response:</strong> Take immediate action in the event of a fire to control or extinguish small fires if safe to do so, and activate the fire alarm system.</li>
                <li><strong>Evacuation Coordination:</strong> Assist in the safe and orderly evacuation of all personnel during fire or smoke emergencies.</li>
                <li><strong>Fire Safety Inspections:</strong> Conduct routine checks of fire extinguishers, hoses, and other fire safety equipment to ensure compliance with company and Saudi Civil Defense standards.</li>
                <li><strong>Reporting Hazards:</strong> Report fire hazards, unsafe practices, or malfunctioning equipment to the HSE Department immediately.</li>
                <li><strong>Training & Drills:</strong> Attend and participate in fire safety training sessions and mock drills as scheduled by the HSE Unit.</li>
                <li><strong>Compliance:</strong> Ensure adherence to ISO 45001:2018 and national fire safety standards regulated by the Saudi Civil Defense (General Directorate of Civil Defence).</li>
              </ul>
            </div>
          </section>

          {/* Section 4: Terms of Appointment */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 uppercase tracking-wider">
              4. TERMS OF APPOINTMENT
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Effective Date *</label>
                <input
                  type="date"
                  name="effectiveDate"
                  required
                  value={formData.effectiveDate}
                  onChange={handleChange}
                  className="p-2 border border-[#dde3ec] rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Duration / Validity *</label>
                <input
                  type="text"
                  name="durationValidity"
                  required
                  placeholder="e.g., 2 years or Until further notice"
                  value={formData.durationValidity}
                  onChange={handleChange}
                  className="p-2 border border-[#dde3ec] rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Work Location *</label>
                <input
                  type="text"
                  name="workLocation"
                  required
                  value={formData.workLocation}
                  onChange={handleChange}
                  className="p-2 border border-[#dde3ec] rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Training Requirement *</label>
                <input
                  type="text"
                  name="trainingRequirement"
                  required
                  placeholder="e.g., Basic Fire Fighting Training"
                  value={formData.trainingRequirement}
                  onChange={handleChange}
                  className="p-2 border border-[#dde3ec] rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
            </div>
          </section>

          {/* Section 5: Issued By */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 uppercase tracking-wider">
              5. ISSUED BY
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Name *</label>
                <input
                  type="text"
                  name="issuedByName"
                  required
                  value={formData.issuedByName}
                  onChange={handleChange}
                  className="p-2 border border-[#dde3ec] rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Position *</label>
                <input
                  type="text"
                  name="issuedByPosition"
                  required
                  value={formData.issuedByPosition}
                  onChange={handleChange}
                  className="p-2 border border-[#dde3ec] rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Signature (Full Name) *</label>
                <input
                  type="text"
                  name="issuedBySignature"
                  required
                  placeholder="Full name (acts as signature)"
                  value={formData.issuedBySignature}
                  onChange={handleChange}
                  className="p-2 border border-[#dde3ec] rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Date *</label>
                <input
                  type="date"
                  name="issuedByDate"
                  required
                  value={formData.issuedByDate}
                  onChange={handleChange}
                  className="p-2 border border-[#dde3ec] rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
            </div>
          </section>

          {/* Section 6: Employee Acknowledgment and Acceptance */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 uppercase tracking-wider">
              6. EMPLOYEE ACKNOWLEDGMENT AND ACCEPTANCE
            </div>
            <div className="p-4 bg-[#f4f6f9] mb-4 text-sm border-l-4 border-[#C49A28]">
              I acknowledge the receipt of this appointment letter and accept the role of Firefighter / Fire Warden as described above. I commit to fulfilling the responsibilities outlined and adhering to the applicable safety standards and regulations.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Employee Name *</label>
                <input
                  type="text"
                  name="ackEmployeeName"
                  required
                  value={formData.ackEmployeeName}
                  onChange={handleChange}
                  className="p-2 border border-[#dde3ec] rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Signature (Full Name) *</label>
                <input
                  type="text"
                  name="ackSignature"
                  required
                  placeholder="Full name (acts as signature)"
                  value={formData.ackSignature}
                  onChange={handleChange}
                  className="p-2 border border-[#dde3ec] rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Date *</label>
                <input
                  type="date"
                  name="ackDate"
                  required
                  value={formData.ackDate}
                  onChange={handleChange}
                  className="p-2 border border-[#dde3ec] rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Witness *</label>
                <input
                  type="text"
                  name="ackWitness"
                  required
                  value={formData.ackWitness}
                  onChange={handleChange}
                  className="p-2 border border-[#dde3ec] rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                />
              </div>
            </div>
          </section>

          {/* Submit Button & Messages */}
          <div className="pt-6 border-t border-[#dde3ec]">
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded border border-red-200">
                {error}
              </div>
            )}
            <button
              type="submit"
              disabled={mutation.isPending}
              className={`w-full md:w-auto px-8 py-3 bg-[#081C2E] text-white font-bold rounded shadow hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 ${
                mutation.isPending ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {mutation.isPending ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                "Submit Appointment Letter"
              )}
            </button>
          </div>
        </form>

        {/* Revision History Table */}
        <div className="mt-12 overflow-x-auto border border-[#dde3ec]">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-[#081C2E] text-white">
                <th className="p-2 border border-[#dde3ec] text-left">Rev</th>
                <th className="p-2 border border-[#dde3ec] text-left">Date</th>
                <th className="p-2 border border-[#dde3ec] text-left">Description of Changes</th>
                <th className="p-2 border border-[#dde3ec] text-left">Author</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-2 border border-[#dde3ec]">Rev00</td>
                <td className="p-2 border border-[#dde3ec]">—</td>
                <td className="p-2 border border-[#dde3ec]">Initial issue</td>
                <td className="p-2 border border-[#dde3ec]">—</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-2 border border-[#dde3ec]">Rev01</td>
                <td className="p-2 border border-[#dde3ec]">09 Apr 2026</td>
                <td className="p-2 border border-[#dde3ec]">
                  Reformatted to TE IMS standard with structured sections, employee details table, formal sign-off, and witness field. Content preserved from Rev00.
                </td>
                <td className="p-2 border border-[#dde3ec]">IMS Team</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
