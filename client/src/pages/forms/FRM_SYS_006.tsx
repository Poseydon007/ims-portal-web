import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_SYS_006() {
  const [submitted, setSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    siteProjectDept: "",
    periodCovered: "",
    reviewedBy: "",
    reviewDate: "",
    reviewerComments: "",
    qaImsOfficerName: "",
    qaImsOfficerSig: "",
    qaImsOfficerDate: "",
    hseManagerName: "",
    hseManagerSig: "",
    hseManagerDate: "",
    siteManagerName: "",
    siteManagerSig: "",
    siteManagerDate: "",
  });

  const [dailyTasks, setDailyTasks] = useState([
    { task: "Corrective Action Requests reviewed and actioned (ISO 9001:2015 Cl. 10.2)", status: "", comments: "" },
    { task: "Risk & Opportunities Assessment Record (QA/QC) (ISO 9001:2015 Cl. 6.1)", status: "", comments: "" },
    { task: "Waste Handling & Disposal Schedule compliance (ISO 14001:2015 Cl. 8.1)", status: "", comments: "" },
    { task: "Observation / Incident Cards reviewed (ISO 45001:2018 Cl. 10.2)", status: "", comments: "" },
    { task: "Incident / Accident Flash Notifications issued (ISO 45001:2018 Cl. 10.2)", status: "", comments: "" },
    { task: "Incident & Accident Investigation Reports filed (ISO 45001:2018 Cl. 10.2)", status: "", comments: "" },
    { task: "Dangerous Occurrence Reports filed (ISO 45001:2018 Cl. 10.2)", status: "", comments: "" },
    { task: "Incident Statements collected (ISO 45001:2018 Cl. 10.2)", status: "" , comments: ""},
    { task: "Near Miss Reports filed and reviewed (ISO 45001:2018 Cl. 10.2)", status: "", comments: "" },
    { task: "Visitor Register maintained (ISO 45001:2018 Cl. 8.1.4.2)", status: "", comments: "" },
  ]);

  const [weeklyTasks, setWeeklyTasks] = useState([
    { task: "Corrective Action Log reviewed and updated (ISO 9001:2015 Cl. 10.2)", status: "", comments: "" },
    { task: "Fire Prevention Checklist completed (ISO 45001:2018 Cl. 8.1.2, 8.2)", status: "", comments: "" },
    { task: "Index Register – Accident / Incident updated (ISO 45001:2018 Cl. 10.2)", status: "", comments: "" },
    { task: "Toolbox Talk records filed (ISO 45001:2018 Cl. 7.3)", status: "", comments: "" },
  ]);

  const [monthlyTasks, setMonthlyTasks] = useState([
    { task: "Emergency Evacuation Drill Record completed (ISO 45001:2018 Cl. 8.2)", status: "", comments: "" },
    { task: "Aspect Impact Assessment – HSE reviewed (ISO 45001:2018 Cl. 6.1.2)", status: "", comments: "" },
    { task: "Aspect Impact Assessment – Maintenance reviewed (ISO 45001:2018 Cl. 6.1.2)", status: "", comments: "" },
    { task: "Monthly Injury Summary compiled (ISO 45001:2018 Cl. 9.1)", status: "", comments: "" },
    { task: "Monthly Violation Report issued (ISO 45001:2018 Cl. 9.1)", status: "", comments: "" },
    { task: "Risk & Opportunities Assessment – Warehouse (ISO 9001:2015 Cl. 6.1)", status: "", comments: "" },
    { task: "Emergency Plan reviewed (ISO 45001:2018 Cl. 8.2)", status: "", comments: "" },
    { task: "Fire Drill Report completed (ISO 45001:2018 Cl. 8.2)", status: "", comments: "" },
  ]);

  const [annualTasks, setAnnualTasks] = useState([
    { task: "Mock Drill Instructions reviewed and updated (ISO 9001:2015 Cl. 8.2)", status: "", comments: "" },
    { task: "JHA / Job Hazard Assessment Template reviewed (ISO 45001:2018 Cl. 6.1.2)", status: "", comments: "" },
    { task: "Register of Environment Aspect-Impact Evaluation (ISO 14001:2015 Cl. 6.1.2)", status: "", comments: "" },
    { task: "Fire Extinguisher Inspection Log annual review (ISO 45001:2018 Cl. 8.2)", status: "", comments: "" },
    { task: "Employee Safety Culture Survey conducted (ISO 45001:2018 Cl. 5.4)", status: "", comments: "" },
    { task: "HIRA – Hazard Identification & Risk Assessment (ISO 45001:2018 Cl. 6.1.2)", status: "", comments: "" },
    { task: "Major Emergency Preparedness Plan reviewed (ISO 45001:2018 Cl. 8.2, 9.1)", status: "", comments: "" },
  ]);

  const [correctiveActions, setCorrectiveActions] = useState([
    { issue: "", action: "", responsible: "", deadline: "", status: "" }
  ]);

  const mutation = trpc.formSubmissions.submit.useMutation({
    onSuccess: (data) => {
      setSubmitted(true);
      setSheetUrl(data.sheetUrl);
      window.scrollTo(0, 0);
    },
    onError: (err) => {
      setError(err.message || "An error occurred during submission.");
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTaskChange = (
    type: "daily" | "weekly" | "monthly" | "annual",
    index: number,
    field: "status" | "comments",
    value: string
  ) => {
    const update = (prev: any[]) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    };

    if (type === "daily") setDailyTasks(update);
    else if (type === "weekly") setWeeklyTasks(update);
    else if (type === "monthly") setMonthlyTasks(update);
    else if (type === "annual") setAnnualTasks(update);
  };

  const handleCorrectiveActionChange = (index: number, field: string, value: string) => {
    const next = [...correctiveActions];
    next[index] = { ...next[index], [field]: value };
    setCorrectiveActions(next);
  };

  const addCorrectiveActionRow = () => {
    setCorrectiveActions([...correctiveActions, { issue: "", action: "", responsible: "", deadline: "", status: "" }]);
  };

  const removeCorrectiveActionRow = (index: number) => {
    if (correctiveActions.length > 1) {
      setCorrectiveActions(correctiveActions.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const headers = [
      "Site / Project / Dept", "Period Covered", "Reviewed By", "Review Date",
      ...dailyTasks.flatMap(t => [`Daily: ${t.task} - Status`, `Daily: ${t.task} - Comments`]),
      ...weeklyTasks.flatMap(t => [`Weekly: ${t.task} - Status`, `Weekly: ${t.task} - Comments`]),
      ...monthlyTasks.flatMap(t => [`Monthly: ${t.task} - Status`, `Monthly: ${t.task} - Comments`]),
      ...annualTasks.flatMap(t => [`Annual: ${t.task} - Status`, `Annual: ${t.task} - Comments`]),
      "Corrective Actions",
      "Reviewer Comments",
      "QA / IMS Officer Name", "QA / IMS Officer Signature", "QA / IMS Officer Date",
      "HSE Manager Name", "HSE Manager Signature", "HSE Manager Date",
      "Site Manager Name", "Site Manager Signature", "Site Manager Date"
    ];

    const values = [
      formData.siteProjectDept, formData.periodCovered, formData.reviewedBy, formData.reviewDate,
      ...dailyTasks.flatMap(t => [t.status, t.comments]),
      ...weeklyTasks.flatMap(t => [t.status, t.comments]),
      ...monthlyTasks.flatMap(t => [t.status, t.comments]),
      ...annualTasks.flatMap(t => [t.status, t.comments]),
      JSON.stringify(correctiveActions),
      formData.reviewerComments,
      formData.qaImsOfficerName, formData.qaImsOfficerSig, formData.qaImsOfficerDate,
      formData.hseManagerName, formData.hseManagerSig, formData.hseManagerDate,
      formData.siteManagerName, formData.siteManagerSig, formData.siteManagerDate
    ];

    mutation.mutate({
      formCode: "TE-IMS-FRM-SYS-006",
      headers,
      values
    });
  };

  const renderTaskTable = (title: string, tasks: any[], type: "daily" | "weekly" | "monthly" | "annual") => (
    <div className="mb-8 overflow-hidden border border-[#dde3ec] rounded-lg">
      <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider">
        {title}
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#081C2E] text-white">
            <th className="p-3 text-left border border-[#dde3ec] w-1/2">Task / Activity</th>
            <th className="p-3 text-center border border-[#dde3ec] w-12">Yes</th>
            <th className="p-3 text-center border border-[#dde3ec] w-12">No</th>
            <th className="p-3 text-center border border-[#dde3ec] w-12">N/A</th>
            <th className="p-3 text-left border border-[#dde3ec]">Comments / Findings</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, idx) => (
            <tr key={idx} className="hover:bg-gray-50 transition-colors">
              <td className="p-3 border border-[#dde3ec] text-sm">{task.task}</td>
              <td className="p-3 border border-[#dde3ec] text-center">
                <input
                  type="radio"
                  name={`${type}-status-${idx}`}
                  checked={task.status === "Yes"}
                  onChange={() => handleTaskChange(type, idx, "status", "Yes")}
                  className="w-4 h-4 cursor-pointer"
                />
              </td>
              <td className="p-3 border border-[#dde3ec] text-center">
                <input
                  type="radio"
                  name={`${type}-status-${idx}`}
                  checked={task.status === "No"}
                  onChange={() => handleTaskChange(type, idx, "status", "No")}
                  className="w-4 h-4 cursor-pointer"
                />
              </td>
              <td className="p-3 border border-[#dde3ec] text-center">
                <input
                  type="radio"
                  name={`${type}-status-${idx}`}
                  checked={task.status === "N/A"}
                  onChange={() => handleTaskChange(type, idx, "status", "N/A")}
                  className="w-4 h-4 cursor-pointer"
                />
              </td>
              <td className="p-3 border border-[#dde3ec]">
                <input
                  type="text"
                  value={task.comments}
                  onChange={(e) => handleTaskChange(type, idx, "comments", e.target.value)}
                  className="w-full p-1 border border-transparent hover:border-[#dde3ec] focus:border-[#C49A28] focus:outline-none rounded transition-all"
                  placeholder="Add notes..."
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-6 bg-white shadow-sm rounded-xl my-8 font-['Nunito_Sans']">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-[#C49A28] hover:underline font-semibold">← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-500 uppercase tracking-wider font-bold">FRM</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-800 font-bold">QA Task Follow-Up Checklist</span>
        </nav>

        {/* Document Control Table */}
        <div className="mb-8 overflow-hidden border border-[#dde3ec] rounded-lg">
          <table className="w-full border-collapse">
            <tbody>
              <tr>
                <td className="bg-[#081C2E] text-white p-3 font-bold w-1/4 border border-[#dde3ec]">Document</td>
                <td className="p-3 border border-[#dde3ec] w-1/4">TE-IMS-FRM-SYS-006</td>
                <td className="bg-[#081C2E] text-white p-3 font-bold w-1/4 border border-[#dde3ec]">Revision</td>
                <td className="p-3 border border-[#dde3ec] w-1/4">Rev01</td>
              </tr>
              <tr>
                <td className="bg-[#081C2E] text-white p-3 font-bold border border-[#dde3ec]">Date</td>
                <td className="p-3 border border-[#dde3ec]">09 Apr 2026</td>
                <td className="bg-[#081C2E] text-white p-3 font-bold border border-[#dde3ec]">Status</td>
                <td className="p-3 border border-[#dde3ec]">Approved for Implementation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h1 className="text-3xl font-extrabold text-[#081C2E] mb-8 text-center uppercase tracking-tight">QA Task Follow-Up Checklist</h1>

        {submitted ? (
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-8">
            <h2 className="text-green-800 text-xl font-bold mb-2">Form submitted successfully.</h2>
            <p className="text-green-700">
              View register: <a href={sheetUrl} target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-green-900 transition-colors">Google Sheet</a>
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
            >
              Submit Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded mb-6 text-red-700 font-semibold">
                {error}
              </div>
            )}

            {/* Header Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 p-6 bg-[#f4f6f9] rounded-lg border border-[#dde3ec]">
              <div>
                <label className="block text-sm font-bold text-[#081C2E] mb-2 uppercase tracking-wide">Site / Project / Dept *</label>
                <input
                  type="text"
                  name="siteProjectDept"
                  required
                  value={formData.siteProjectDept}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#081C2E] mb-2 uppercase tracking-wide">Period Covered *</label>
                <input
                  type="text"
                  name="periodCovered"
                  required
                  placeholder="e.g. April 2026"
                  value={formData.periodCovered}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#081C2E] mb-2 uppercase tracking-wide">Reviewed By *</label>
                <input
                  type="text"
                  name="reviewedBy"
                  required
                  value={formData.reviewedBy}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#081C2E] mb-2 uppercase tracking-wide">Review Date *</label>
                <input
                  type="date"
                  name="reviewDate"
                  required
                  value={formData.reviewDate}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Task Sections */}
            {renderTaskTable("Daily Tasks", dailyTasks, "daily")}
            {renderTaskTable("Weekly Tasks", weeklyTasks, "weekly")}
            {renderTaskTable("Monthly Tasks", monthlyTasks, "monthly")}
            {renderTaskTable("Annual Tasks", annualTasks, "annual")}

            {/* Corrective Actions */}
            <div className="mb-8 overflow-hidden border border-[#dde3ec] rounded-lg shadow-sm">
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider flex justify-between items-center">
                <span>Corrective Actions Required</span>
                <button
                  type="button"
                  onClick={addCorrectiveActionRow}
                  className="bg-[#C49A28] text-white px-3 py-1 rounded text-xs hover:bg-[#a68221] transition-colors"
                >
                  + Add Row
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#081C2E] text-white">
                      <th className="p-3 text-left border border-[#dde3ec]">Non-Conformity / Issue</th>
                      <th className="p-3 text-left border border-[#dde3ec]">Action Required</th>
                      <th className="p-3 text-left border border-[#dde3ec]">Responsible</th>
                      <th className="p-3 text-left border border-[#dde3ec]">Deadline</th>
                      <th className="p-3 text-left border border-[#dde3ec]">Status</th>
                      <th className="p-3 text-center border border-[#dde3ec] w-12"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {correctiveActions.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition-colors">
                        <td className="p-2 border border-[#dde3ec]">
                          <textarea
                            value={row.issue}
                            onChange={(e) => handleCorrectiveActionChange(idx, "issue", e.target.value)}
                            className="w-full p-1 border border-transparent hover:border-[#dde3ec] focus:border-[#C49A28] focus:outline-none rounded transition-all min-h-[60px]"
                          />
                        </td>
                        <td className="p-2 border border-[#dde3ec]">
                          <textarea
                            value={row.action}
                            onChange={(e) => handleCorrectiveActionChange(idx, "action", e.target.value)}
                            className="w-full p-1 border border-transparent hover:border-[#dde3ec] focus:border-[#C49A28] focus:outline-none rounded transition-all min-h-[60px]"
                          />
                        </td>
                        <td className="p-2 border border-[#dde3ec]">
                          <input
                            type="text"
                            value={row.responsible}
                            onChange={(e) => handleCorrectiveActionChange(idx, "responsible", e.target.value)}
                            className="w-full p-1 border border-transparent hover:border-[#dde3ec] focus:border-[#C49A28] focus:outline-none rounded transition-all"
                          />
                        </td>
                        <td className="p-2 border border-[#dde3ec]">
                          <input
                            type="date"
                            value={row.deadline}
                            onChange={(e) => handleCorrectiveActionChange(idx, "deadline", e.target.value)}
                            className="w-full p-1 border border-transparent hover:border-[#dde3ec] focus:border-[#C49A28] focus:outline-none rounded transition-all"
                          />
                        </td>
                        <td className="p-2 border border-[#dde3ec]">
                          <select
                            value={row.status}
                            onChange={(e) => handleCorrectiveActionChange(idx, "status", e.target.value)}
                            className="w-full p-1 border border-transparent hover:border-[#dde3ec] focus:border-[#C49A28] focus:outline-none rounded transition-all"
                          >
                            <option value="">Select...</option>
                            <option value="Open">Open</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Closed">Closed</option>
                          </select>
                        </td>
                        <td className="p-2 border border-[#dde3ec] text-center">
                          <button
                            type="button"
                            onClick={() => removeCorrectiveActionRow(idx)}
                            className="text-red-500 hover:text-red-700 font-bold text-xl"
                            title="Remove row"
                          >
                            ×
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Reviewer Comments */}
            <div className="mb-8 overflow-hidden border border-[#dde3ec] rounded-lg">
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider">
                Reviewer Comments
              </div>
              <textarea
                name="reviewerComments"
                value={formData.reviewerComments}
                onChange={handleInputChange}
                className="w-full p-4 min-h-[120px] border-none focus:ring-2 focus:ring-[#C49A28] outline-none"
                placeholder="Enter any additional comments or observations here..."
              />
            </div>

            {/* Sign-off Section */}
            <div className="mb-8 overflow-hidden border border-[#dde3ec] rounded-lg shadow-sm">
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider">
                Sign-Off
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#f4f6f9]">
                      <th className="p-3 text-left border border-[#dde3ec] text-[#081C2E] w-1/4">Role</th>
                      <th className="p-3 text-left border border-[#dde3ec] text-[#081C2E] w-1/4">Name</th>
                      <th className="p-3 text-left border border-[#dde3ec] text-[#081C2E] w-1/4">Signature (Full Name)</th>
                      <th className="p-3 text-left border border-[#dde3ec] text-[#081C2E] w-1/4">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-[#dde3ec] font-bold text-[#081C2E]">QA / IMS Officer</td>
                      <td className="p-3 border border-[#dde3ec]">
                        <input
                          type="text"
                          name="qaImsOfficerName"
                          value={formData.qaImsOfficerName}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-transparent hover:border-[#dde3ec] focus:border-[#C49A28] focus:outline-none rounded transition-all"
                        />
                      </td>
                      <td className="p-3 border border-[#dde3ec]">
                        <input
                          type="text"
                          name="qaImsOfficerSig"
                          placeholder="Full name acts as signature"
                          value={formData.qaImsOfficerSig}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-transparent hover:border-[#dde3ec] focus:border-[#C49A28] focus:outline-none rounded transition-all italic"
                        />
                      </td>
                      <td className="p-3 border border-[#dde3ec]">
                        <input
                          type="date"
                          name="qaImsOfficerDate"
                          value={formData.qaImsOfficerDate}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-transparent hover:border-[#dde3ec] focus:border-[#C49A28] focus:outline-none rounded transition-all"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-[#dde3ec] font-bold text-[#081C2E]">HSE Manager</td>
                      <td className="p-3 border border-[#dde3ec]">
                        <input
                          type="text"
                          name="hseManagerName"
                          value={formData.hseManagerName}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-transparent hover:border-[#dde3ec] focus:border-[#C49A28] focus:outline-none rounded transition-all"
                        />
                      </td>
                      <td className="p-3 border border-[#dde3ec]">
                        <input
                          type="text"
                          name="hseManagerSig"
                          placeholder="Full name acts as signature"
                          value={formData.hseManagerSig}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-transparent hover:border-[#dde3ec] focus:border-[#C49A28] focus:outline-none rounded transition-all italic"
                        />
                      </td>
                      <td className="p-3 border border-[#dde3ec]">
                        <input
                          type="date"
                          name="hseManagerDate"
                          value={formData.hseManagerDate}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-transparent hover:border-[#dde3ec] focus:border-[#C49A28] focus:outline-none rounded transition-all"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-[#dde3ec] font-bold text-[#081C2E]">Site Manager / Approved By</td>
                      <td className="p-3 border border-[#dde3ec]">
                        <input
                          type="text"
                          name="siteManagerName"
                          value={formData.siteManagerName}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-transparent hover:border-[#dde3ec] focus:border-[#C49A28] focus:outline-none rounded transition-all"
                        />
                      </td>
                      <td className="p-3 border border-[#dde3ec]">
                        <input
                          type="text"
                          name="siteManagerSig"
                          placeholder="Full name acts as signature"
                          value={formData.siteManagerSig}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-transparent hover:border-[#dde3ec] focus:border-[#C49A28] focus:outline-none rounded transition-all italic"
                        />
                      </td>
                      <td className="p-3 border border-[#dde3ec]">
                        <input
                          type="date"
                          name="siteManagerDate"
                          value={formData.siteManagerDate}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-transparent hover:border-[#dde3ec] focus:border-[#C49A28] focus:outline-none rounded transition-all"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Revision History (Read-only) */}
            <div className="mb-8 overflow-hidden border border-[#dde3ec] rounded-lg opacity-75">
              <div className="bg-gray-100 text-[#081C2E] px-4 py-2 font-bold uppercase tracking-wider text-sm border-b border-[#dde3ec]">
                Revision History
              </div>
              <table className="w-full border-collapse text-xs">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-2 text-left border border-[#dde3ec]">Rev</th>
                    <th className="p-2 text-left border border-[#dde3ec]">Date</th>
                    <th className="p-2 text-left border border-[#dde3ec]">Description</th>
                    <th className="p-2 text-left border border-[#dde3ec]">Author</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border border-[#dde3ec]">Rev00</td>
                    <td className="p-2 border border-[#dde3ec]">—</td>
                    <td className="p-2 border border-[#dde3ec]">Initial issue (text-based format)</td>
                    <td className="p-2 border border-[#dde3ec]">—</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-[#dde3ec]">Rev01</td>
                    <td className="p-2 border border-[#dde3ec]">09 Apr 2026</td>
                    <td className="p-2 border border-[#dde3ec]">Restructured into tabular format with Y/N/NA checkboxes. Preserved all 29 tasks.</td>
                    <td className="p-2 border border-[#dde3ec]">IMS Team</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-6 border-t border-[#dde3ec]">
              <button
                type="submit"
                disabled={mutation.isLoading}
                className={`
                  bg-[#081C2E] text-white px-10 py-4 rounded-lg font-bold uppercase tracking-widest shadow-lg
                  hover:bg-[#122b42] hover:scale-[1.02] active:scale-[0.98] transition-all
                  disabled:bg-gray-400 disabled:cursor-not-allowed
                `}
              >
                {mutation.isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : "Submit Checklist"}
              </button>
            </div>
          </form>
        )}
      </div>
    </Layout>
  );
}
