import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_006() {
  const [submitted, setSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    meetingDate: "",
    time: "",
    location: "",
    chairedBy: "",
    minutesTakenBy: "",
    nextMeetingDate: "",
    chairSignOffName: "",
    chairSignOffDate: "",
    hseManagerSignOffName: "",
    hseManagerSignOffDate: "",
    minutesTakenBySignOffName: "",
    minutesTakenBySignOffDate: "",
  });

  const [attendance, setAttendance] = useState([
    { id: 1, name: "", position: "", department: "", signature: "" },
    { id: 2, name: "", position: "", department: "", signature: "" },
    { id: 3, name: "", position: "", department: "", signature: "" },
  ]);

  const [agendaItems, setAgendaItems] = useState([
    { id: 1, item: "Review of previous minutes and actions", discussion: "" },
    { id: 2, item: "Incident / accident review", discussion: "" },
    { id: 3, item: "Near miss and hazard reports", discussion: "" },
    { id: 4, item: "HSE inspection findings", discussion: "" },
    { id: 5, item: "Training and competency update", discussion: "" },
    { id: 6, item: "Emergency preparedness", discussion: "" },
    { id: 7, item: "Regulatory compliance update", discussion: "" },
    { id: 8, item: "Worker consultation and feedback", discussion: "" },
    { id: 9, item: "Any other business (AOB)", discussion: "" },
  ]);

  const [actionItems, setActionItems] = useState([
    { id: 1, action: "", responsible: "", dueDate: "", status: "", remarks: "" },
  ]);

  const mutation = trpc.formSubmissions.submit.useMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAttendanceChange = (id: number, field: string, value: string) => {
    setAttendance((prev) =>
      prev.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const addAttendanceRow = () => {
    setAttendance((prev) => [
      ...prev,
      { id: prev.length + 1, name: "", position: "", department: "", signature: "" },
    ]);
  };

  const handleAgendaChange = (id: number, value: string) => {
    setAgendaItems((prev) =>
      prev.map((row) => (row.id === id ? { ...row, discussion: value } : row))
    );
  };

  const handleActionChange = (id: number, field: string, value: string) => {
    setActionItems((prev) =>
      prev.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const addActionRow = () => {
    setActionItems((prev) => [
      ...prev,
      { id: prev.length + 1, action: "", responsible: "", dueDate: "", status: "", remarks: "" },
    ]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const headers = [
      "Meeting Date", "Time", "Location", "Chaired By", "Minutes Taken By", "Next Meeting Date",
      ...attendance.flatMap((a, i) => [`Attendee ${i+1} Name`, `Attendee ${i+1} Position`, `Attendee ${i+1} Dept`, `Attendee ${i+1} Sign`]),
      ...agendaItems.flatMap(a => [`Agenda: ${a.item}`]),
      ...actionItems.flatMap((a, i) => [`Action ${i+1}`, `Action ${i+1} Resp`, `Action ${i+1} Due`, `Action ${i+1} Status`, `Action ${i+1} Remarks`]),
      "Chair Sign-Off Name", "Chair Sign-Off Date",
      "HSE Manager Sign-Off Name", "HSE Manager Sign-Off Date",
      "Minutes Taken By Sign-Off Name", "Minutes Taken By Sign-Off Date"
    ];

    const values = [
      formData.meetingDate, formData.time, formData.location, formData.chairedBy, formData.minutesTakenBy, formData.nextMeetingDate,
      ...attendance.flatMap(a => [a.name, a.position, a.department, a.signature]),
      ...agendaItems.flatMap(a => [a.discussion]),
      ...actionItems.flatMap(a => [a.action, a.responsible, a.dueDate, a.status, a.remarks]),
      formData.chairSignOffName, formData.chairSignOffDate,
      formData.hseManagerSignOffName, formData.hseManagerSignOffDate,
      formData.minutesTakenBySignOffName, formData.minutesTakenBySignOffDate
    ];

    try {
      const result = await mutation.mutateAsync({
        formCode: "TE-IMS-FRM-HSE-006",
        headers,
        values,
      });
      setSheetUrl(result.sheetUrl);
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "An error occurred during submission.");
    }
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto py-10 px-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Form submitted successfully</h2>
            <p className="text-green-700 mb-6">
              The HSE Committee Meeting Minutes have been recorded and synced to the Google Sheet register.
            </p>
            <a
              href={sheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#081C2E] text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors"
            >
              View register
            </a>
            <div className="mt-8">
              <Link href="/" className="text-[#C49A28] hover:underline">← Back to Portal Home</Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <Link href="/" className="text-[#081C2E] hover:text-[#C49A28] transition-colors">← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/docs/frm" className="text-gray-600 hover:text-[#C49A28] transition-colors cursor-pointer">FRM</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 font-semibold">HSE Committee Meeting Minutes</span>
        </nav>

        {/* Document Control Table */}
        <div className="overflow-x-auto mb-8 border border-[#dde3ec]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#081C2E] text-white">
                <th colSpan={4} className="p-3 text-center uppercase tracking-wider">HSE Committee Meeting Minutes</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr>
                <td className="p-2 border-b border-r border-[#dde3ec] bg-gray-50 font-bold w-1/4">Document</td>
                <td className="p-2 border-b border-r border-[#dde3ec] w-1/4">TE-IMS-FRM-HSE-006</td>
                <td className="p-2 border-b border-r border-[#dde3ec] bg-gray-50 font-bold w-1/4">Revision</td>
                <td className="p-2 border-b border-[#dde3ec] w-1/4">01</td>
              </tr>
              <tr>
                <td className="p-2 border-r border-[#dde3ec] bg-gray-50 font-bold">Date</td>
                <td className="p-2 border-r border-[#dde3ec]">01 March 2026</td>
                <td className="p-2 border-r border-[#dde3ec] bg-gray-50 font-bold">Status</td>
                <td className="p-2 border-[#dde3ec]">Approved for Implementation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Meeting Details Section */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 uppercase tracking-wide">
              Meeting Details
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 border border-[#dde3ec] rounded-sm">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Meeting Date *</label>
                <input
                  type="date"
                  name="meetingDate"
                  required
                  value={formData.meetingDate}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Time *</label>
                <input
                  type="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Location *</label>
                <input
                  type="text"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Chaired By *</label>
                <input
                  type="text"
                  name="chairedBy"
                  required
                  value={formData.chairedBy}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Minutes Taken By *</label>
                <input
                  type="text"
                  name="minutesTakenBy"
                  required
                  value={formData.minutesTakenBy}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Next Meeting Date</label>
                <input
                  type="date"
                  name="nextMeetingDate"
                  value={formData.nextMeetingDate}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                />
              </div>
            </div>
          </section>

          {/* Attendance Section */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 uppercase tracking-wide">
              Attendance
            </div>
            <div className="overflow-x-auto border border-[#dde3ec]">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#081C2E] text-white text-sm">
                    <th className="p-2 border border-[#dde3ec] w-12 text-center">#</th>
                    <th className="p-2 border border-[#dde3ec]">Name</th>
                    <th className="p-2 border border-[#dde3ec]">Position</th>
                    <th className="p-2 border border-[#dde3ec]">Department</th>
                    <th className="p-2 border border-[#dde3ec]">Signature (Full Name)</th>
                  </tr>
                </thead>
                <tbody>
                  {attendance.map((row, index) => (
                    <tr key={row.id}>
                      <td className="p-2 border border-[#dde3ec] text-center text-sm">{index + 1}</td>
                      <td className="p-2 border border-[#dde3ec]">
                        <input
                          type="text"
                          value={row.name}
                          onChange={(e) => handleAttendanceChange(row.id, "name", e.target.value)}
                          className="w-full p-1 text-sm outline-none focus:bg-yellow-50"
                        />
                      </td>
                      <td className="p-2 border border-[#dde3ec]">
                        <input
                          type="text"
                          value={row.position}
                          onChange={(e) => handleAttendanceChange(row.id, "position", e.target.value)}
                          className="w-full p-1 text-sm outline-none focus:bg-yellow-50"
                        />
                      </td>
                      <td className="p-2 border border-[#dde3ec]">
                        <input
                          type="text"
                          value={row.department}
                          onChange={(e) => handleAttendanceChange(row.id, "department", e.target.value)}
                          className="w-full p-1 text-sm outline-none focus:bg-yellow-50"
                        />
                      </td>
                      <td className="p-2 border border-[#dde3ec]">
                        <input
                          type="text"
                          placeholder="Full name"
                          value={row.signature}
                          onChange={(e) => handleAttendanceChange(row.id, "signature", e.target.value)}
                          className="w-full p-1 text-sm outline-none focus:bg-yellow-50 italic"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
              type="button"
              onClick={addAttendanceRow}
              className="mt-2 text-sm text-[#C49A28] font-semibold hover:underline"
            >
              + Add Attendee
            </button>
          </section>

          {/* Standing Agenda Items Section */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 uppercase tracking-wide">
              Standing Agenda Items (per ISO 45001 Clause 5.4)
            </div>
            <div className="overflow-x-auto border border-[#dde3ec]">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#081C2E] text-white text-sm">
                    <th className="p-2 border border-[#dde3ec] w-12 text-center">#</th>
                    <th className="p-2 border border-[#dde3ec] w-1/3">Agenda Item</th>
                    <th className="p-2 border border-[#dde3ec]">Discussion / Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {agendaItems.map((row, index) => (
                    <tr key={row.id}>
                      <td className="p-2 border border-[#dde3ec] text-center text-sm">{index + 1}</td>
                      <td className="p-2 border border-[#dde3ec] text-sm font-medium bg-gray-50">{row.item}</td>
                      <td className="p-2 border border-[#dde3ec]">
                        <textarea
                          rows={2}
                          value={row.discussion}
                          onChange={(e) => handleAgendaChange(row.id, e.target.value)}
                          className="w-full p-1 text-sm outline-none focus:bg-yellow-50 resize-y"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Action Items Section */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 uppercase tracking-wide">
              Action Items
            </div>
            <div className="overflow-x-auto border border-[#dde3ec]">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#081C2E] text-white text-sm">
                    <th className="p-2 border border-[#dde3ec] w-12 text-center">#</th>
                    <th className="p-2 border border-[#dde3ec]">Action</th>
                    <th className="p-2 border border-[#dde3ec]">Responsible</th>
                    <th className="p-2 border border-[#dde3ec]">Due Date</th>
                    <th className="p-2 border border-[#dde3ec]">Status</th>
                    <th className="p-2 border border-[#dde3ec]">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {actionItems.map((row, index) => (
                    <tr key={row.id}>
                      <td className="p-2 border border-[#dde3ec] text-center text-sm">{index + 1}</td>
                      <td className="p-2 border border-[#dde3ec]">
                        <input
                          type="text"
                          value={row.action}
                          onChange={(e) => handleActionChange(row.id, "action", e.target.value)}
                          className="w-full p-1 text-sm outline-none focus:bg-yellow-50"
                        />
                      </td>
                      <td className="p-2 border border-[#dde3ec]">
                        <input
                          type="text"
                          value={row.responsible}
                          onChange={(e) => handleActionChange(row.id, "responsible", e.target.value)}
                          className="w-full p-1 text-sm outline-none focus:bg-yellow-50"
                        />
                      </td>
                      <td className="p-2 border border-[#dde3ec]">
                        <input
                          type="date"
                          value={row.dueDate}
                          onChange={(e) => handleActionChange(row.id, "dueDate", e.target.value)}
                          className="w-full p-1 text-sm outline-none focus:bg-yellow-50"
                        />
                      </td>
                      <td className="p-2 border border-[#dde3ec]">
                        <select
                          value={row.status}
                          onChange={(e) => handleActionChange(row.id, "status", e.target.value)}
                          className="w-full p-1 text-sm outline-none focus:bg-yellow-50"
                        >
                          <option value="">Select...</option>
                          <option value="Open">Open</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Closed">Closed</option>
                          <option value="Pending">Pending</option>
                        </select>
                      </td>
                      <td className="p-2 border border-[#dde3ec]">
                        <input
                          type="text"
                          value={row.remarks}
                          onChange={(e) => handleActionChange(row.id, "remarks", e.target.value)}
                          className="w-full p-1 text-sm outline-none focus:bg-yellow-50"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
              type="button"
              onClick={addActionRow}
              className="mt-2 text-sm text-[#C49A28] font-semibold hover:underline"
            >
              + Add Action Item
            </button>
          </section>

          {/* Sign-Off Section */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 uppercase tracking-wide">
              Sign-Off
            </div>
            <div className="overflow-x-auto border border-[#dde3ec]">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#081C2E] text-white text-sm">
                    <th className="p-2 border border-[#dde3ec] w-1/4">Role</th>
                    <th className="p-2 border border-[#dde3ec] w-1/4">Name</th>
                    <th className="p-2 border border-[#dde3ec] w-1/4">Signature (Full Name)</th>
                    <th className="p-2 border border-[#dde3ec] w-1/4">Date</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="p-2 border border-[#dde3ec] bg-gray-50 font-medium">Committee Chair</td>
                    <td className="p-2 border border-[#dde3ec]">
                      <input
                        type="text"
                        name="chairSignOffName"
                        value={formData.chairSignOffName}
                        onChange={handleInputChange}
                        className="w-full p-1 outline-none focus:bg-yellow-50"
                      />
                    </td>
                    <td className="p-2 border border-[#dde3ec]">
                      <input
                        type="text"
                        placeholder="Acts as signature"
                        className="w-full p-1 outline-none italic text-gray-500 bg-gray-50 cursor-not-allowed"
                        disabled
                        value={formData.chairSignOffName}
                      />
                    </td>
                    <td className="p-2 border border-[#dde3ec]">
                      <input
                        type="date"
                        name="chairSignOffDate"
                        value={formData.chairSignOffDate}
                        onChange={handleInputChange}
                        className="w-full p-1 outline-none focus:bg-yellow-50"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-[#dde3ec] bg-gray-50 font-medium">HSE Manager</td>
                    <td className="p-2 border border-[#dde3ec]">
                      <input
                        type="text"
                        name="hseManagerSignOffName"
                        value={formData.hseManagerSignOffName}
                        onChange={handleInputChange}
                        className="w-full p-1 outline-none focus:bg-yellow-50"
                      />
                    </td>
                    <td className="p-2 border border-[#dde3ec]">
                      <input
                        type="text"
                        placeholder="Acts as signature"
                        className="w-full p-1 outline-none italic text-gray-500 bg-gray-50 cursor-not-allowed"
                        disabled
                        value={formData.hseManagerSignOffName}
                      />
                    </td>
                    <td className="p-2 border border-[#dde3ec]">
                      <input
                        type="date"
                        name="hseManagerSignOffDate"
                        value={formData.hseManagerSignOffDate}
                        onChange={handleInputChange}
                        className="w-full p-1 outline-none focus:bg-yellow-50"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-[#dde3ec] bg-gray-50 font-medium">Minutes Taken By</td>
                    <td className="p-2 border border-[#dde3ec]">
                      <input
                        type="text"
                        name="minutesTakenBySignOffName"
                        value={formData.minutesTakenBySignOffName}
                        onChange={handleInputChange}
                        className="w-full p-1 outline-none focus:bg-yellow-50"
                      />
                    </td>
                    <td className="p-2 border border-[#dde3ec]">
                      <input
                        type="text"
                        placeholder="Acts as signature"
                        className="w-full p-1 outline-none italic text-gray-500 bg-gray-50 cursor-not-allowed"
                        disabled
                        value={formData.minutesTakenBySignOffName}
                      />
                    </td>
                    <td className="p-2 border border-[#dde3ec]">
                      <input
                        type="date"
                        name="minutesTakenBySignOffDate"
                        value={formData.minutesTakenBySignOffDate}
                        onChange={handleInputChange}
                        className="w-full p-1 outline-none focus:bg-yellow-50"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Error Message */}
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={mutation.isPending}
              className={`
                bg-[#081C2E] text-white px-8 py-3 rounded font-bold uppercase tracking-wider
                hover:bg-opacity-90 transition-all shadow-md
                ${mutation.isPending ? "opacity-70 cursor-not-allowed" : ""}
              `}
            >
              {mutation.isPending ? "Submitting..." : "Submit Meeting Minutes"}
            </button>
          </div>
        </form>

        {/* Revision History */}
        <div className="mt-12 pt-8 border-t border-[#dde3ec]">
          <h3 className="text-sm font-bold text-gray-500 uppercase mb-4">Revision History</h3>
          <div className="overflow-x-auto border border-[#dde3ec]">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-gray-100 text-gray-600">
                  <th className="p-2 border-b border-r border-[#dde3ec]">Rev</th>
                  <th className="p-2 border-b border-r border-[#dde3ec]">Date</th>
                  <th className="p-2 border-b border-r border-[#dde3ec]">Description of Changes</th>
                  <th className="p-2 border-b border-[#dde3ec]">Author</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border-r border-[#dde3ec]">00</td>
                  <td className="p-2 border-r border-[#dde3ec]">01 Mar 2026</td>
                  <td className="p-2 border-r border-[#dde3ec]">Initial approved release</td>
                  <td className="p-2 border-[#dde3ec]">Joao Melo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
