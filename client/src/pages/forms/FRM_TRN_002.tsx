import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_TRN_002() {
  const [formData, setFormData] = useState({
    employeeName: "",
    employeeNo: "",
    jobTitle: "",
    department: "",
    dateOfInduction: "",
    reportsTo: "",
    siteLocation: "",
    trainerName: "",
    remarks: "",
    employeeSignName: "",
    employeeSignDate: "",
    trainerSignName: "",
    trainerSignDate: "",
    supervisorSignName: "",
    supervisorSignDate: "",
    hseManagerSignName: "",
    hseManagerSignDate: "",
  });

  const [topics, setTopics] = useState([
    { id: 1, topic: "Compliance with International Safety Protocols / Company QHSE policies", explained: false, understood: false, carriedOut: false, initials: "" },
    { id: 2, topic: "Thorough Equipment Checks / Periodic Tool Checks and Inspections", explained: false, understood: false, carriedOut: false, initials: "" },
    { id: 3, topic: "Operational Guidelines / Safety Instructions for assigned tasks", explained: false, understood: false, carriedOut: false, initials: "" },
    { id: 4, topic: "Mandatory PPE Gear – selection, use, care, and replacement", explained: false, understood: false, carriedOut: false, initials: "" },
    { id: 5, topic: "Drilling Work Preparedness – rig safety, exclusion zones, moving parts", explained: false, understood: false, carriedOut: false, initials: "" },
    { id: 6, topic: "Risk Assessment – JHA, Take 5, HIRA procedures", explained: false, understood: false, carriedOut: false, initials: "" },
    { id: 7, topic: "Toolbox Talk participation and daily safety briefing requirements", explained: false, understood: false, carriedOut: false, initials: "" },
    { id: 8, topic: "First Aid / Fire Extinguisher locations and emergency response", explained: false, understood: false, carriedOut: false, initials: "" },
    { id: 9, topic: "Heat Stress Awareness – hydration, rest schedules, symptoms recognition", explained: false, understood: false, carriedOut: false, initials: "" },
    { id: 10, topic: "LOTO (Lockout/Tagout) procedures and energy isolation", explained: false, understood: false, carriedOut: false, initials: "" },
    { id: 11, topic: "Environmental Responsibilities – waste, spills, protected areas", explained: false, understood: false, carriedOut: false, initials: "" },
    { id: 12, topic: "Incident & Near Miss Reporting procedures", explained: false, understood: false, carriedOut: false, initials: "" },
    { id: 13, topic: "Emergency Evacuation Plan – assembly points and alarms", explained: false, understood: false, carriedOut: false, initials: "" },
    { id: 14, topic: "Permit to Work system (hot work, confined space, working at height)", explained: false, understood: false, carriedOut: false, initials: "" },
    { id: 15, topic: "Site-specific hazards and local regulations (KSA MHRSD/NCEC)", explained: false, understood: false, carriedOut: false, initials: "" },
  ]);

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
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTopicChange = (index: number, field: string, value: any) => {
    const newTopics = [...topics];
    (newTopics[index] as any)[field] = value;
    setTopics(newTopics);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const headers = [
      "Employee Name", "Employee No", "Job Title", "Department", "Date of Induction", "Reports To", "Site/Location", "Trainer Name",
      ...topics.flatMap(t => [
        `Topic ${t.id} Explained`, `Topic ${t.id} Understood`, `Topic ${t.id} Carried Out`, `Topic ${t.id} Initials`
      ]),
      "Remarks",
      "Employee Sign Name", "Employee Sign Date",
      "Trainer Sign Name", "Trainer Sign Date",
      "Supervisor Sign Name", "Supervisor Sign Date",
      "HSE Manager Sign Name", "HSE Manager Sign Date"
    ];

    const values = [
      formData.employeeName, formData.employeeNo, formData.jobTitle, formData.department, formData.dateOfInduction, formData.reportsTo, formData.siteLocation, formData.trainerName,
      ...topics.flatMap(t => [
        t.explained ? "Yes" : "No", t.understood ? "Yes" : "No", t.carriedOut ? "Yes" : "No", t.initials
      ]),
      formData.remarks,
      formData.employeeSignName, formData.employeeSignDate,
      formData.trainerSignName, formData.trainerSignDate,
      formData.supervisorSignName, formData.supervisorSignDate,
      formData.hseManagerSignName, formData.hseManagerSignDate
    ];

    mutation.mutate({
      formCode: "TE-IMS-FRM-TRN-002",
      headers,
      values,
    });
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
          <h1 className="text-2xl font-bold text-[#081C2E] mb-4">Form Submitted Successfully</h1>
          <p className="text-gray-700 mb-6">
            Your training adherence form has been recorded.
          </p>
          <a
            href={sheetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C49A28] text-white px-6 py-2 rounded hover:bg-[#a38021] transition-colors"
          >
            View register: Google Sheet
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
      <div className="max-w-5xl mx-auto pb-12">
        <nav className="mb-6">
          <Link href="/" className="text-[#081C2E] hover:underline font-semibold">← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-500">FRM</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-500 font-medium">Critical Training Adherence Form</span>
        </nav>

        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg overflow-hidden border border-[#dde3ec]">
          {/* Document Control Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
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
                  <td className="border border-[#dde3ec] p-2 font-bold">TE-IMS-FRM-TRN-002</td>
                  <td className="border border-[#dde3ec] p-2">Rev01</td>
                  <td className="border border-[#dde3ec] p-2">09 Apr 2026</td>
                  <td className="border border-[#dde3ec] p-2 text-green-700 font-semibold">Approved for Implementation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-8">
            <h1 className="text-3xl font-bold text-[#081C2E] text-center mb-8 uppercase tracking-wide">
              Critical Training Adherence Form
            </h1>

            {/* 1. EMPLOYEE DETAILS */}
            <section className="mb-10">
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider mb-4">
                1. EMPLOYEE DETAILS
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#081C2E] mb-1">Employee Name *</label>
                  <input
                    type="text"
                    name="employeeName"
                    required
                    value={formData.employeeName}
                    onChange={handleInputChange}
                    className="w-full border border-[#dde3ec] p-2 rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#081C2E] mb-1">Employee No. *</label>
                  <input
                    type="text"
                    name="employeeNo"
                    required
                    value={formData.employeeNo}
                    onChange={handleInputChange}
                    className="w-full border border-[#dde3ec] p-2 rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#081C2E] mb-1">Job Title *</label>
                  <input
                    type="text"
                    name="jobTitle"
                    required
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    className="w-full border border-[#dde3ec] p-2 rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#081C2E] mb-1">Department *</label>
                  <input
                    type="text"
                    name="department"
                    required
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full border border-[#dde3ec] p-2 rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#081C2E] mb-1">Date of Induction *</label>
                  <input
                    type="date"
                    name="dateOfInduction"
                    required
                    value={formData.dateOfInduction}
                    onChange={handleInputChange}
                    className="w-full border border-[#dde3ec] p-2 rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#081C2E] mb-1">Reports To *</label>
                  <input
                    type="text"
                    name="reportsTo"
                    required
                    value={formData.reportsTo}
                    onChange={handleInputChange}
                    className="w-full border border-[#dde3ec] p-2 rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#081C2E] mb-1">Site / Location *</label>
                  <input
                    type="text"
                    name="siteLocation"
                    required
                    value={formData.siteLocation}
                    onChange={handleInputChange}
                    className="w-full border border-[#dde3ec] p-2 rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#081C2E] mb-1">Trainer Name *</label>
                  <input
                    type="text"
                    name="trainerName"
                    required
                    value={formData.trainerName}
                    onChange={handleInputChange}
                    className="w-full border border-[#dde3ec] p-2 rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                  />
                </div>
              </div>
            </section>

            {/* 2. CRITICAL TRAINING TOPICS */}
            <section className="mb-10">
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider mb-4">
                2. CRITICAL TRAINING TOPICS
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#081C2E] text-white">
                      <th className="border border-[#dde3ec] p-2 w-12 text-center">No.</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Orientation / Training Topic</th>
                      <th className="border border-[#dde3ec] p-2 w-24 text-center">Explained</th>
                      <th className="border border-[#dde3ec] p-2 w-24 text-center">Understood</th>
                      <th className="border border-[#dde3ec] p-2 w-24 text-center">Carried Out</th>
                      <th className="border border-[#dde3ec] p-2 w-32 text-center">Initials</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topics.map((topic, index) => (
                      <tr key={topic.id} className={index % 2 === 0 ? "bg-white" : "bg-[#f4f6f9]"}>
                        <td className="border border-[#dde3ec] p-2 text-center font-medium">{topic.id}</td>
                        <td className="border border-[#dde3ec] p-2">{topic.topic}</td>
                        <td className="border border-[#dde3ec] p-2 text-center">
                          <input
                            type="checkbox"
                            checked={topic.explained}
                            onChange={(e) => handleTopicChange(index, "explained", e.target.checked)}
                            className="w-5 h-5 accent-[#C49A28]"
                          />
                        </td>
                        <td className="border border-[#dde3ec] p-2 text-center">
                          <input
                            type="checkbox"
                            checked={topic.understood}
                            onChange={(e) => handleTopicChange(index, "understood", e.target.checked)}
                            className="w-5 h-5 accent-[#C49A28]"
                          />
                        </td>
                        <td className="border border-[#dde3ec] p-2 text-center">
                          <input
                            type="checkbox"
                            checked={topic.carriedOut}
                            onChange={(e) => handleTopicChange(index, "carriedOut", e.target.checked)}
                            className="w-5 h-5 accent-[#C49A28]"
                          />
                        </td>
                        <td className="border border-[#dde3ec] p-2">
                          <input
                            type="text"
                            value={topic.initials}
                            onChange={(e) => handleTopicChange(index, "initials", e.target.value)}
                            className="w-full border border-[#dde3ec] p-1 rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 3. REMARKS / ADDITIONAL NOTES */}
            <section className="mb-10">
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider mb-4">
                3. REMARKS / ADDITIONAL NOTES
              </div>
              <textarea
                name="remarks"
                rows={4}
                value={formData.remarks}
                onChange={handleInputChange}
                className="w-full border border-[#dde3ec] p-3 rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                placeholder="Enter any additional notes or remarks here..."
              ></textarea>
            </section>

            {/* 4. SIGN-OFF */}
            <section className="mb-10">
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider mb-4">
                4. SIGN-OFF
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#081C2E] text-white">
                      <th className="border border-[#dde3ec] p-2 text-left">Role</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Name *</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Signature (Type Name) *</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Date *</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-[#dde3ec] p-2 font-semibold">Employee</td>
                      <td className="border border-[#dde3ec] p-2">
                        <input
                          type="text"
                          name="employeeSignName"
                          required
                          value={formData.employeeSignName}
                          onChange={handleInputChange}
                          className="w-full p-1 outline-none focus:ring-1 focus:ring-[#C49A28]"
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2 italic text-gray-400">Acts as signature</td>
                      <td className="border border-[#dde3ec] p-2">
                        <input
                          type="date"
                          name="employeeSignDate"
                          required
                          value={formData.employeeSignDate}
                          onChange={handleInputChange}
                          className="w-full p-1 outline-none focus:ring-1 focus:ring-[#C49A28]"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#dde3ec] p-2 font-semibold">Trainer / Presenter</td>
                      <td className="border border-[#dde3ec] p-2">
                        <input
                          type="text"
                          name="trainerSignName"
                          required
                          value={formData.trainerSignName}
                          onChange={handleInputChange}
                          className="w-full p-1 outline-none focus:ring-1 focus:ring-[#C49A28]"
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2 italic text-gray-400">Acts as signature</td>
                      <td className="border border-[#dde3ec] p-2">
                        <input
                          type="date"
                          name="trainerSignDate"
                          required
                          value={formData.trainerSignDate}
                          onChange={handleInputChange}
                          className="w-full p-1 outline-none focus:ring-1 focus:ring-[#C49A28]"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#dde3ec] p-2 font-semibold">Supervisor</td>
                      <td className="border border-[#dde3ec] p-2">
                        <input
                          type="text"
                          name="supervisorSignName"
                          required
                          value={formData.supervisorSignName}
                          onChange={handleInputChange}
                          className="w-full p-1 outline-none focus:ring-1 focus:ring-[#C49A28]"
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2 italic text-gray-400">Acts as signature</td>
                      <td className="border border-[#dde3ec] p-2">
                        <input
                          type="date"
                          name="supervisorSignDate"
                          required
                          value={formData.supervisorSignDate}
                          onChange={handleInputChange}
                          className="w-full p-1 outline-none focus:ring-1 focus:ring-[#C49A28]"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#dde3ec] p-2 font-semibold">HSE Manager</td>
                      <td className="border border-[#dde3ec] p-2">
                        <input
                          type="text"
                          name="hseManagerSignName"
                          required
                          value={formData.hseManagerSignName}
                          onChange={handleInputChange}
                          className="w-full p-1 outline-none focus:ring-1 focus:ring-[#C49A28]"
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2 italic text-gray-400">Acts as signature</td>
                      <td className="border border-[#dde3ec] p-2">
                        <input
                          type="date"
                          name="hseManagerSignDate"
                          required
                          value={formData.hseManagerSignDate}
                          onChange={handleInputChange}
                          className="w-full p-1 outline-none focus:ring-1 focus:ring-[#C49A28]"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-md">
                {error}
              </div>
            )}

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={mutation.isLoading}
                className={`
                  bg-[#081C2E] text-white px-10 py-3 rounded-md font-bold uppercase tracking-widest
                  hover:bg-[#C49A28] transition-all duration-300 shadow-lg
                  ${mutation.isLoading ? "opacity-50 cursor-not-allowed" : ""}
                `}
              >
                {mutation.isLoading ? "Submitting..." : "Submit Form"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
