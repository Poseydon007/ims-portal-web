import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_032() {
  const [submitted, setSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    projectSite: "",
    location: "",
    presenterName: "",
    position: "",
    departmentWorkGroup: "",
    topicTitle: "",
    topicCategory: {
      hseGeneral: false,
      heatStress: false,
      ppe: false,
      incidentLessons: false,
      emergency: false,
      environment: false,
      housekeeping: false,
      other: false,
    },
    otherCategory: "",
    keyDiscussionPoints: "",
    totalAttendees: "",
    presenterNameSignOff: "",
    presenterSignature: "",
    presenterDate: "",
    supervisorName: "",
    supervisorSignature: "",
    supervisorDate: "",
    siteManagerName: "",
    siteManagerSignature: "",
    siteManagerDate: "",
  });

  const [attendance, setAttendance] = useState([
    { id: 1, fullName: "", employeeId: "", company: "", signature: "" },
  ]);

  const [actions, setActions] = useState([
    { id: 1, description: "" },
  ]);

  const mutation = trpc.formSubmissions.submit.useMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      if (name.startsWith("cat_")) {
        const catName = name.replace("cat_", "");
        setFormData((prev) => ({
          ...prev,
          topicCategory: { ...prev.topicCategory, [catName]: checked },
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addAttendanceRow = () => {
    setAttendance((prev) => [
      ...prev,
      { id: prev.length + 1, fullName: "", employeeId: "", company: "", signature: "" },
    ]);
  };

  const addActionRow = () => {
    setActions((prev) => [
      ...prev,
      { id: prev.length + 1, description: "" },
    ]);
  };

  const handleAttendanceChange = (index: number, field: string, value: string) => {
    const updated = [...attendance];
    updated[index] = { ...updated[index], [field]: value };
    setAttendance(updated);
  };

  const handleActionChange = (index: number, value: string) => {
    const updated = [...actions];
    updated[index] = { ...updated[index], description: value };
    setActions(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const headers = [
      "Date", "Time", "Project/Site", "Location", "Presenter Name", "Position", "Department/Work Group",
      "Topic Title", "Topic Categories", "Other Category", "Key Discussion Points", "Total Attendees",
      "Attendance List", "Actions/Feedback",
      "Presenter Sign-off Name", "Presenter Sign-off Date",
      "Supervisor Sign-off Name", "Supervisor Sign-off Date",
      "Site Manager Sign-off Name", "Site Manager Sign-off Date"
    ];

    const categories = Object.entries(formData.topicCategory)
      .filter(([_, checked]) => checked)
      .map(([name]) => name)
      .join(", ");

    const attendanceString = attendance
      .map((a) => `${a.fullName} (${a.employeeId}) - ${a.company}`)
      .join(" | ");

    const actionsString = actions
      .map((a) => a.description)
      .filter(d => d.trim() !== "")
      .join(" | ");

    const values = [
      formData.date, formData.time, formData.projectSite, formData.location, formData.presenterName, formData.position, formData.departmentWorkGroup,
      formData.topicTitle, categories, formData.otherCategory, formData.keyDiscussionPoints, formData.totalAttendees,
      attendanceString, actionsString,
      formData.presenterNameSignOff, formData.presenterDate,
      formData.supervisorName, formData.supervisorDate,
      formData.siteManagerName, formData.siteManagerDate
    ];

    try {
      const result = await mutation.mutateAsync({
        formCode: "TE-IMS-FRM-HSE-032",
        headers,
        values,
      });
      setSheetUrl(result.sheetUrl);
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Failed to submit form");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 text-center">
          <h2 className="text-2xl font-bold text-[#081C2E] mb-4">Form submitted successfully</h2>
          <p className="mb-6">View register: <a href={sheetUrl} target="_blank" rel="noopener noreferrer" className="text-[#C49A28] underline font-semibold">Google Sheet</a></p>
          <Link href="/" className="text-navy-600 hover:underline">← Return to Portal Home</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-6 bg-[#f4f6f9] min-h-screen font-['Nunito_Sans']">
        <div className="mb-4">
          <Link href="/" className="text-[#081C2E] hover:underline">← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/docs/frm" className="text-gray-600 hover:text-[#C49A28] transition-colors cursor-pointer">FRM</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Toolbox Talk Daily Attendance Register</span>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-none border border-[#dde3ec]">
          {/* Document Control Table */}
          <table className="w-full border-collapse border border-[#dde3ec] text-sm mb-6">
            <tbody>
              <tr>
                <td className="border border-[#dde3ec] p-2 font-bold bg-gray-50 w-1/4">Document Code</td>
                <td className="border border-[#dde3ec] p-2 w-1/4">TE-IMS-FRM-HSE-032</td>
                <td className="border border-[#dde3ec] p-2 font-bold bg-gray-50 w-1/4">Revision</td>
                <td className="border border-[#dde3ec] p-2 w-1/4">Rev01</td>
              </tr>
              <tr>
                <td className="border border-[#dde3ec] p-2 font-bold bg-gray-50">Date</td>
                <td className="border border-[#dde3ec] p-2">09 Apr 2026</td>
                <td className="border border-[#dde3ec] p-2 font-bold bg-gray-50">Status</td>
                <td className="border border-[#dde3ec] p-2 text-green-700 font-semibold">Approved for Implementation</td>
              </tr>
            </tbody>
          </table>

          <div className="p-6">
            <h1 className="text-2xl font-bold text-[#081C2E] mb-2 text-center">TOOLBOX TALK DAILY ATTENDANCE REGISTER</h1>
            <p className="text-xs text-gray-500 mb-6 italic text-center">Note: 5-minute SHE talks to be held daily with all employees before commencement of work. This form must be filed and retained for audit purposes.</p>

            {/* Section 1: Details */}
            <div className="mb-8">
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">1. TOOLBOX TALK DETAILS</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-1">Date *</label>
                  <input type="date" name="date" required value={formData.date} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Time *</label>
                  <input type="time" name="time" required value={formData.time} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Project/Site *</label>
                  <input type="text" name="projectSite" required value={formData.projectSite} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Location *</label>
                  <input type="text" name="location" required value={formData.location} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Presenter Name *</label>
                  <input type="text" name="presenterName" required value={formData.presenterName} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Position *</label>
                  <input type="text" name="position" required value={formData.position} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold mb-1">Department / Work Group *</label>
                  <input type="text" name="departmentWorkGroup" required value={formData.departmentWorkGroup} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]" />
                </div>
              </div>
            </div>

            {/* Section 2: Topic */}
            <div className="mb-8">
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">2. TOPIC DISCUSSED</div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-1">Topic Title *</label>
                <input type="text" name="topicTitle" required value={formData.topicTitle} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Topic Category *</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3 bg-gray-50 border border-[#dde3ec] rounded">
                  {Object.keys(formData.topicCategory).map((cat) => (
                    <label key={cat} className="flex items-center space-x-2 text-sm cursor-pointer">
                      <input 
                        type="checkbox" 
                        name={`cat_${cat}`} 
                        checked={(formData.topicCategory as any)[cat]} 
                        onChange={handleInputChange}
                        className="w-4 h-4 accent-[#C49A28]"
                      />
                      <span className="capitalize">{cat.replace(/([A-Z])/g, ' $1').trim()}</span>
                    </label>
                  ))}
                </div>
                {formData.topicCategory.other && (
                  <div className="mt-2">
                    <input 
                      type="text" 
                      name="otherCategory" 
                      placeholder="Specify other category" 
                      value={formData.otherCategory} 
                      onChange={handleInputChange} 
                      className="w-full border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]" 
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Section 3: Key Points */}
            <div className="mb-8">
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">3. KEY DISCUSSION POINTS</div>
              <textarea 
                name="keyDiscussionPoints" 
                rows={5} 
                value={formData.keyDiscussionPoints} 
                onChange={handleInputChange} 
                className="w-full border border-[#dde3ec] p-3 rounded focus:outline-none focus:border-[#C49A28]"
                placeholder="List the main points covered during the talk..."
              ></textarea>
            </div>

            {/* Section 4: Attendance */}
            <div className="mb-8">
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">4. ATTENDANCE REGISTER</div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[#dde3ec] text-sm">
                  <thead>
                    <tr className="bg-[#081C2E] text-white">
                      <th className="border border-[#dde3ec] p-2 w-12">No.</th>
                      <th className="border border-[#dde3ec] p-2">Full Name</th>
                      <th className="border border-[#dde3ec] p-2">Employee ID</th>
                      <th className="border border-[#dde3ec] p-2">Company</th>
                      <th className="border border-[#dde3ec] p-2">Signature (Full Name)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendance.map((row, index) => (
                      <tr key={row.id}>
                        <td className="border border-[#dde3ec] p-2 text-center">{index + 1}</td>
                        <td className="border border-[#dde3ec] p-1">
                          <input type="text" value={row.fullName} onChange={(e) => handleAttendanceChange(index, 'fullName', e.target.value)} className="w-full p-1 border-none focus:ring-0" />
                        </td>
                        <td className="border border-[#dde3ec] p-1">
                          <input type="text" value={row.employeeId} onChange={(e) => handleAttendanceChange(index, 'employeeId', e.target.value)} className="w-full p-1 border-none focus:ring-0" />
                        </td>
                        <td className="border border-[#dde3ec] p-1">
                          <input type="text" value={row.company} onChange={(e) => handleAttendanceChange(index, 'company', e.target.value)} className="w-full p-1 border-none focus:ring-0" />
                        </td>
                        <td className="border border-[#dde3ec] p-1">
                          <input type="text" value={row.signature} onChange={(e) => handleAttendanceChange(index, 'signature', e.target.value)} className="w-full p-1 border-none focus:ring-0" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <button type="button" onClick={addAttendanceRow} className="bg-[#C49A28] text-white px-4 py-2 rounded hover:bg-[#a38021] transition-colors text-sm font-bold">
                  + Add Row
                </button>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-sm">Total Attendees:</span>
                  <input type="number" name="totalAttendees" value={formData.totalAttendees} onChange={handleInputChange} className="w-20 border border-[#dde3ec] p-1 rounded text-center" />
                </div>
              </div>
            </div>

            {/* Section 5: Actions */}
            <div className="mb-8">
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">5. QUESTIONS / FEEDBACK / ACTIONS RAISED</div>
              <table className="w-full border-collapse border border-[#dde3ec] text-sm">
                <thead>
                  <tr className="bg-[#081C2E] text-white">
                    <th className="border border-[#dde3ec] p-2 w-12">Item</th>
                    <th className="border border-[#dde3ec] p-2">Description / Action Required</th>
                  </tr>
                </thead>
                <tbody>
                  {actions.map((row, index) => (
                    <tr key={row.id}>
                      <td className="border border-[#dde3ec] p-2 text-center">{index + 1}</td>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="text" value={row.description} onChange={(e) => handleActionChange(index, e.target.value)} className="w-full p-1 border-none focus:ring-0" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button type="button" onClick={addActionRow} className="mt-4 bg-[#C49A28] text-white px-4 py-2 rounded hover:bg-[#a38021] transition-colors text-sm font-bold">
                + Add Action
              </button>
            </div>

            {/* Section 6: Sign-off */}
            <div className="mb-8">
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">6. SIGN-OFF</div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[#dde3ec] text-sm">
                  <thead>
                    <tr className="bg-[#081C2E] text-white">
                      <th className="border border-[#dde3ec] p-2">Role</th>
                      <th className="border border-[#dde3ec] p-2">Name</th>
                      <th className="border border-[#dde3ec] p-2">Signature (Full Name)</th>
                      <th className="border border-[#dde3ec] p-2">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-[#dde3ec] p-2 font-bold bg-gray-50">Presenter / HSE Officer</td>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="text" name="presenterNameSignOff" value={formData.presenterNameSignOff} onChange={handleInputChange} className="w-full p-1 border-none focus:ring-0" />
                      </td>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="text" name="presenterSignature" value={formData.presenterSignature} onChange={handleInputChange} className="w-full p-1 border-none focus:ring-0 placeholder-gray-300" placeholder="Full name" />
                      </td>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="date" name="presenterDate" value={formData.presenterDate} onChange={handleInputChange} className="w-full p-1 border-none focus:ring-0" />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#dde3ec] p-2 font-bold bg-gray-50">Supervisor</td>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="text" name="supervisorName" value={formData.supervisorName} onChange={handleInputChange} className="w-full p-1 border-none focus:ring-0" />
                      </td>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="text" name="supervisorSignature" value={formData.supervisorSignature} onChange={handleInputChange} className="w-full p-1 border-none focus:ring-0 placeholder-gray-300" placeholder="Full name" />
                      </td>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="date" name="supervisorDate" value={formData.supervisorDate} onChange={handleInputChange} className="w-full p-1 border-none focus:ring-0" />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#dde3ec] p-2 font-bold bg-gray-50">Site Manager (if applicable)</td>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="text" name="siteManagerName" value={formData.siteManagerName} onChange={handleInputChange} className="w-full p-1 border-none focus:ring-0" />
                      </td>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="text" name="siteManagerSignature" value={formData.siteManagerSignature} onChange={handleInputChange} className="w-full p-1 border-none focus:ring-0 placeholder-gray-300" placeholder="Full name" />
                      </td>
                      <td className="border border-[#dde3ec] p-1">
                        <input type="date" name="siteManagerDate" value={formData.siteManagerDate} onChange={handleInputChange} className="w-full p-1 border-none focus:ring-0" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {error && <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">{error}</div>}

            <div className="flex justify-center mt-10">
              <button 
                type="submit" 
                disabled={loading}
                className={`px-10 py-3 bg-[#081C2E] text-white font-bold rounded shadow-lg hover:bg-[#0c2a45] transition-all flex items-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    SUBMITTING...
                  </>
                ) : 'SUBMIT ATTENDANCE REGISTER'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
