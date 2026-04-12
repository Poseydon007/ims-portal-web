import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_TRN_003() {
  const [formData, setFormData] = useState({
    trainingTitle: "",
    trainingType: {
      induction: false,
      safety: false,
      technical: false,
      competency: false,
      refresher: false,
      emergencyDrill: false,
      other: false,
    },
    trainerName: "",
    trainerPosition: "",
    date: "",
    duration: "",
    siteLocation: "",
    trainingRefNo: "",
    attendance: Array(25).fill(null).map(() => ({
      employeeName: "",
      employeeId: "",
      positionRole: "",
      nationality: "",
      present: false,
      signature: "",
    })),
    totalParticipants: "",
    totalPresent: "",
    signOff: {
      trainer: { name: "", signature: "", date: "" },
      siteManager: { name: "", signature: "", date: "" },
      hseHrManager: { name: "", signature: "", date: "" },
    },
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (category: string, field: string) => {
    setFormData((prev: any) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: !prev[category][field],
      },
    }));
  };

  const handleAttendanceChange = (index: number, field: string, value: any) => {
    const newAttendance = [...formData.attendance];
    newAttendance[index] = { ...newAttendance[index], [field]: value };
    setFormData((prev) => ({ ...prev, attendance: newAttendance }));
  };

  const handleSignOffChange = (role: string, field: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      signOff: {
        ...prev.signOff,
        [role]: { ...prev.signOff[role], [field]: value },
      },
    }));
  };

  const addRow = () => {
    setFormData((prev) => ({
      ...prev,
      attendance: [
        ...prev.attendance,
        {
          employeeName: "",
          employeeId: "",
          positionRole: "",
          nationality: "",
          present: false,
          signature: "",
        },
      ],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const headers = [
      "Training Title",
      "Training Type",
      "Trainer Name",
      "Trainer Position",
      "Date",
      "Duration (hrs)",
      "Site / Location",
      "Training Ref No.",
      "Total Participants",
      "Total Present",
      "Attendance Data",
      "Trainer Sign-off",
      "Site Manager Sign-off",
      "HSE/HR Manager Sign-off",
    ];

    const trainingTypes = Object.entries(formData.trainingType)
      .filter(([_, checked]) => checked)
      .map(([name]) => name.charAt(0).toUpperCase() + name.slice(1))
      .join(", ");

    const attendanceData = formData.attendance
      .filter((row) => row.employeeName || row.employeeId)
      .map(
        (row, idx) =>
          `${idx + 1}. ${row.employeeName} (${row.employeeId}) - ${row.positionRole}, ${row.nationality}, Present: ${
            row.present ? "Yes" : "No"
          }`
      )
      .join(" | ");

    const values = [
      formData.trainingTitle,
      trainingTypes,
      formData.trainerName,
      formData.trainerPosition,
      formData.date,
      formData.duration,
      formData.siteLocation,
      formData.trainingRefNo,
      formData.totalParticipants,
      formData.totalPresent,
      attendanceData,
      `${formData.signOff.trainer.name} (${formData.signOff.trainer.date})`,
      `${formData.signOff.siteManager.name} (${formData.signOff.siteManager.date})`,
      `${formData.signOff.hseHrManager.name} (${formData.signOff.hseHrManager.date})`,
    ];

    mutation.mutate({
      formCode: "TE-IMS-FRM-TRN-003",
      headers,
      values,
    });
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg my-8 font-['Nunito_Sans']">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-[#C49A28] hover:underline">
            ← Portal Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">FRM</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-800 font-semibold text-navy">Training Attendance Register</span>
        </nav>

        <header className="mb-8 border-b pb-4">
          <h1 className="text-2xl font-bold text-[#081C2E] uppercase">Training Attendance Register</h1>
        </header>

        {/* Document Control Table */}
        <div className="mb-8 overflow-x-auto">
          <table className="w-full border-collapse border border-[#dde3ec] text-sm">
            <tbody>
              <tr>
                <td className="border border-[#dde3ec] bg-gray-50 p-2 font-semibold w-1/4">Document Code</td>
                <td className="border border-[#dde3ec] p-2 w-1/4 text-center">TE-IMS-FRM-TRN-003</td>
                <td className="border border-[#dde3ec] bg-gray-50 p-2 font-semibold w-1/4">Revision</td>
                <td className="border border-[#dde3ec] p-2 w-1/4 text-center">Rev01</td>
              </tr>
              <tr>
                <td className="border border-[#dde3ec] bg-gray-50 p-2 font-semibold">Date</td>
                <td className="border border-[#dde3ec] p-2 text-center">09 Apr 2026</td>
                <td className="border border-[#dde3ec] bg-gray-50 p-2 font-semibold">Status</td>
                <td className="border border-[#dde3ec] p-2 text-center text-green-700 font-medium">Approved for Implementation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section 1: Training Details */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider mb-4">
              1. Training Details
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-[#dde3ec] p-4 rounded shadow-sm bg-[#f4f6f9]">
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-[#081C2E] mb-1">Training Title / Description *</label>
                <input
                  type="text"
                  name="trainingTitle"
                  required
                  value={formData.trainingTitle}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-[#081C2E] mb-2">Training Type *</label>
                <div className="flex flex-wrap gap-4 bg-white p-3 border border-[#dde3ec] rounded">
                  {[
                    { id: "induction", label: "Induction" },
                    { id: "safety", label: "Safety" },
                    { id: "technical", label: "Technical" },
                    { id: "competency", label: "Competency" },
                    { id: "refresher", label: "Refresher" },
                    { id: "emergencyDrill", label: "Emergency Drill" },
                    { id: "other", label: "Other" },
                  ].map((type) => (
                    <label key={type.id} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={(formData.trainingType as any)[type.id]}
                        onChange={() => handleCheckboxChange("trainingType", type.id)}
                        className="w-4 h-4 text-[#C49A28] border-[#dde3ec] rounded focus:ring-[#C49A28]"
                      />
                      <span className="text-sm text-gray-700">{type.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#081C2E] mb-1">Trainer Name *</label>
                <input
                  type="text"
                  name="trainerName"
                  required
                  value={formData.trainerName}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#081C2E] mb-1">Trainer Position *</label>
                <input
                  type="text"
                  name="trainerPosition"
                  required
                  value={formData.trainerPosition}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#081C2E] mb-1">Date *</label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#081C2E] mb-1">Duration (hrs) *</label>
                <input
                  type="number"
                  step="0.5"
                  name="duration"
                  required
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
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
                  className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#081C2E] mb-1">Training Ref No.</label>
                <input
                  type="text"
                  name="trainingRefNo"
                  value={formData.trainingRefNo}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                />
              </div>
            </div>
          </section>

          {/* Section 2: Attendance Register */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider mb-4">
              2. Attendance Register
            </div>
            <div className="overflow-x-auto border border-[#dde3ec] rounded shadow-sm">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#081C2E] text-white">
                    <th className="border border-[#dde3ec] p-2 text-center w-12">No.</th>
                    <th className="border border-[#dde3ec] p-2 text-left min-w-[150px]">Employee Name</th>
                    <th className="border border-[#dde3ec] p-2 text-left w-32">Employee ID</th>
                    <th className="border border-[#dde3ec] p-2 text-left min-w-[150px]">Position / Role</th>
                    <th className="border border-[#dde3ec] p-2 text-left w-32">Nationality</th>
                    <th className="border border-[#dde3ec] p-2 text-center w-20">Present?</th>
                    <th className="border border-[#dde3ec] p-2 text-left min-w-[150px]">Signature</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.attendance.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#f4f6f9]"}>
                      <td className="border border-[#dde3ec] p-2 text-center text-gray-500 font-medium">{idx + 1}</td>
                      <td className="border border-[#dde3ec] p-1">
                        <input
                          type="text"
                          value={row.employeeName}
                          onChange={(e) => handleAttendanceChange(idx, "employeeName", e.target.value)}
                          className="w-full p-1 border-none focus:ring-1 focus:ring-[#C49A28] outline-none bg-transparent"
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-1">
                        <input
                          type="text"
                          value={row.employeeId}
                          onChange={(e) => handleAttendanceChange(idx, "employeeId", e.target.value)}
                          className="w-full p-1 border-none focus:ring-1 focus:ring-[#C49A28] outline-none bg-transparent"
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-1">
                        <input
                          type="text"
                          value={row.positionRole}
                          onChange={(e) => handleAttendanceChange(idx, "positionRole", e.target.value)}
                          className="w-full p-1 border-none focus:ring-1 focus:ring-[#C49A28] outline-none bg-transparent"
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-1">
                        <input
                          type="text"
                          value={row.nationality}
                          onChange={(e) => handleAttendanceChange(idx, "nationality", e.target.value)}
                          className="w-full p-1 border-none focus:ring-1 focus:ring-[#C49A28] outline-none bg-transparent"
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-1 text-center">
                        <input
                          type="checkbox"
                          checked={row.present}
                          onChange={(e) => handleAttendanceChange(idx, "present", e.target.checked)}
                          className="w-4 h-4 text-[#C49A28] border-[#dde3ec] rounded focus:ring-[#C49A28]"
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-1">
                        <input
                          type="text"
                          placeholder="Signature"
                          value={row.signature}
                          onChange={(e) => handleAttendanceChange(idx, "signature", e.target.value)}
                          className="w-full p-1 border-none focus:ring-1 focus:ring-[#C49A28] outline-none bg-transparent italic"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3 flex justify-between items-center">
              <button
                type="button"
                onClick={addRow}
                className="px-4 py-2 bg-gray-100 text-[#081C2E] rounded border border-[#dde3ec] hover:bg-gray-200 transition-colors text-sm font-semibold"
              >
                + Add Employee Row
              </button>
              <div className="flex space-x-6 bg-[#f4f6f9] p-3 border border-[#dde3ec] rounded shadow-inner">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-semibold text-[#081C2E]">Total Participants:</span>
                  <input
                    type="number"
                    name="totalParticipants"
                    value={formData.totalParticipants}
                    onChange={handleInputChange}
                    className="w-20 p-1 border border-[#dde3ec] rounded text-center bg-white"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-semibold text-[#081C2E]">Total Present:</span>
                  <input
                    type="number"
                    name="totalPresent"
                    value={formData.totalPresent}
                    onChange={handleInputChange}
                    className="w-20 p-1 border border-[#dde3ec] rounded text-center bg-white"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Sign-off */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wider mb-4">
              3. Sign-off
            </div>
            <div className="overflow-x-auto border border-[#dde3ec] rounded shadow-sm bg-[#f4f6f9]">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#081C2E] text-white">
                    <th className="border border-[#dde3ec] p-2 text-left w-1/4">Role</th>
                    <th className="border border-[#dde3ec] p-2 text-left w-1/4">Name</th>
                    <th className="border border-[#dde3ec] p-2 text-left w-1/4">Signature (Full Name)</th>
                    <th className="border border-[#dde3ec] p-2 text-left w-1/4">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: "trainer", label: "Trainer / Presenter" },
                    { id: "siteManager", label: "Site Manager" },
                    { id: "hseHrManager", label: "HSE Manager / HR" },
                  ].map((role) => (
                    <tr key={role.id} className="bg-white">
                      <td className="border border-[#dde3ec] p-3 font-semibold text-[#081C2E]">{role.label}</td>
                      <td className="border border-[#dde3ec] p-2">
                        <input
                          type="text"
                          required
                          value={(formData.signOff as any)[role.id].name}
                          onChange={(e) => handleSignOffChange(role.id, "name", e.target.value)}
                          className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input
                          type="text"
                          required
                          placeholder="Digital Signature"
                          value={(formData.signOff as any)[role.id].signature}
                          onChange={(e) => handleSignOffChange(role.id, "signature", e.target.value)}
                          className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none italic"
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input
                          type="date"
                          required
                          value={(formData.signOff as any)[role.id].date}
                          onChange={(e) => handleSignOffChange(role.id, "date", e.target.value)}
                          className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Submission Feedback */}
          {error && (
            <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm rounded shadow-sm">
              <p className="font-bold">Submission Error</p>
              <p>{error}</p>
            </div>
          )}

          {submitted && (
            <div className="p-4 bg-green-50 border-l-4 border-green-500 text-green-700 text-sm rounded shadow-sm">
              <p className="font-bold">Form submitted successfully.</p>
              <p>
                View register:{" "}
                <a
                  href={sheetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold hover:text-green-800"
                >
                  Google Sheet
                </a>
              </p>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-end pt-6">
            <button
              type="submit"
              disabled={mutation.isLoading}
              className={`px-8 py-3 bg-[#081C2E] text-white font-bold rounded shadow-lg hover:bg-[#0a263d] transition-all transform active:scale-95 flex items-center space-x-2 ${
                mutation.isLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {mutation.isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Submitting...</span>
                </>
              ) : (
                <span>Submit Form</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
