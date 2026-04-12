import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_018() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    departmentSection: "",
    location: "",
    dateOfDrill: "",
    proposedEvacuationTime: "",
    actualEvacuationTime: "",
    dateOfNextDrill: "",
    drillTypeFire: false,
    drillTypeBomb: false,
    drillTypeChemical: false,
    drillTypeGeneral: false,
    drillTypeOther: "",
    sirenLoud: "",
    emergencyTeamPrompt: "",
    emergencyTeamInformed: "",
    equipmentAvailable: "",
    wardensAvailable: "",
    evacuationCompleted: "",
    employeeListAvailable: "",
    drillCoordinatorName: "",
    drillCoordinatorDate: "",
    hseOfficerName: "",
    hseOfficerDate: "",
    siteManagerName: "",
    siteManagerDate: "",
  });

  const [personnel, setPersonnel] = useState([
    { name: "", department: "", mustered: "", remarks: "" },
  ]);

  const [deviations, setDeviations] = useState([
    { deviation: "", followUp: "", responsible: "", targetDate: "", completionDate: "" },
  ]);

  const mutation = trpc.formSubmissions.submit.useMutation({
    onSuccess: (data) => {
      setIsSubmitted(true);
      setSheetUrl(data.sheetUrl);
    },
    onError: (err) => {
      setError(err.message || "An error occurred during submission.");
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addPersonnelRow = () => {
    setPersonnel([...personnel, { name: "", department: "", mustered: "", remarks: "" }]);
  };

  const handlePersonnelChange = (index: number, field: string, value: string) => {
    const updated = [...personnel];
    updated[index] = { ...updated[index], [field]: value };
    setPersonnel(updated);
  };

  const addDeviationRow = () => {
    setDeviations([...deviations, { deviation: "", followUp: "", responsible: "", targetDate: "", completionDate: "" }]);
  };

  const handleDeviationChange = (index: number, field: string, value: string) => {
    const updated = [...deviations];
    updated[index] = { ...updated[index], [field]: value };
    setDeviations(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const headers = [
      "Department / Section", "Location", "Date of Drill", "Proposed Evacuation Time", "Actual Evacuation Time", "Date of Next Drill",
      "Drill Type: Fire", "Drill Type: Bomb Threat", "Drill Type: Chemical Spill", "Drill Type: General Evacuation", "Drill Type: Other",
      "Personnel Mustered List",
      "Siren loud enough", "Emergency team responded promptly", "Emergency team informed in time", "Emergency equipment available", "Wardens and checkers available", "Evacuation completed in time", "List of employees available at muster point",
      "Deviations & Actions",
      "Drill Coordinator Name", "Drill Coordinator Date", "HSE Officer Name", "HSE Officer Date", "Site Manager Name", "Site Manager Date"
    ];

    const personnelSummary = personnel.map(p => `${p.name} (${p.department}) - Mustered: ${p.mustered} - ${p.remarks}`).join(" | ");
    const deviationsSummary = deviations.map(d => `${d.deviation} -> ${d.followUp} (Resp: ${d.responsible}, Target: ${d.targetDate}, Comp: ${d.completionDate})`).join(" | ");

    const values = [
      formData.departmentSection, formData.location, formData.dateOfDrill, formData.proposedEvacuationTime, formData.actualEvacuationTime, formData.dateOfNextDrill,
      formData.drillTypeFire ? "Yes" : "No", formData.drillTypeBomb ? "Yes" : "No", formData.drillTypeChemical ? "Yes" : "No", formData.drillTypeGeneral ? "Yes" : "No", formData.drillTypeOther,
      personnelSummary,
      formData.sirenLoud, formData.emergencyTeamPrompt, formData.emergencyTeamInformed, formData.equipmentAvailable, formData.wardensAvailable, formData.evacuationCompleted, formData.employeeListAvailable,
      deviationsSummary,
      formData.drillCoordinatorName, formData.drillCoordinatorDate,
      formData.hseOfficerName, formData.hseOfficerDate,
      formData.siteManagerName, formData.siteManagerDate
    ];

    mutation.mutate({
      formCode: "TE-IMS-FRM-HSE-018",
      headers,
      values,
    });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 text-center">
          <h2 className="text-2xl font-bold text-[#081C2E] mb-4">Form submitted successfully.</h2>
          <p className="mb-6">Your emergency evacuation drill record has been recorded.</p>
          <a
            href={sheetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C49A28] text-white px-6 py-2 rounded hover:bg-[#a38021] transition-colors"
          >
            View register
          </a>
          <div className="mt-8">
            <Link href="/" className="text-[#081C2E] hover:underline">← Return to Portal</Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-6 bg-[#f4f6f9] min-h-screen">
        <nav className="mb-6">
          <Link href="/" className="text-[#081C2E] hover:underline font-semibold">← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/docs/frm" className="text-gray-600 hover:text-[#C49A28] transition-colors cursor-pointer">FRM</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 font-bold">Emergency Evacuation Drill Record</span>
        </nav>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-[#dde3ec]">
          {/* Header Section */}
          <div className="bg-[#081C2E] p-4 text-white flex justify-between items-center">
            <h1 className="text-xl font-bold tracking-wide">EMERGENCY EVACUATION DRILL RECORD</h1>
            <div className="text-right text-xs">
              <p>TE-IMS-FRM-HSE-018</p>
              <p>Rev: 01 | 01 March 2026</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-8">
            {/* Document Control Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-[#dde3ec] text-sm">
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
                    <td className="border border-[#dde3ec] p-2">TE-IMS-FRM-HSE-018</td>
                    <td className="border border-[#dde3ec] p-2">01</td>
                    <td className="border border-[#dde3ec] p-2">01 March 2026</td>
                    <td className="border border-[#dde3ec] p-2">Approved for Implementation</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 1. Drill Details */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-1 mb-4 font-bold uppercase text-sm">
                1. Drill Details
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-[#081C2E] mb-1">Department / Section *</label>
                  <input
                    type="text"
                    name="departmentSection"
                    required
                    className="w-full p-2 border border-[#dde3ec] rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#081C2E] mb-1">Location *</label>
                  <input
                    type="text"
                    name="location"
                    required
                    className="w-full p-2 border border-[#dde3ec] rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#081C2E] mb-1">Date of Drill *</label>
                  <input
                    type="date"
                    name="dateOfDrill"
                    required
                    className="w-full p-2 border border-[#dde3ec] rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#081C2E] mb-1">Proposed Evacuation Time</label>
                  <input
                    type="time"
                    name="proposedEvacuationTime"
                    className="w-full p-2 border border-[#dde3ec] rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#081C2E] mb-1">Actual Evacuation Time</label>
                  <input
                    type="time"
                    name="actualEvacuationTime"
                    className="w-full p-2 border border-[#dde3ec] rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#081C2E] mb-1">Date of Next Drill</label>
                  <input
                    type="date"
                    name="dateOfNextDrill"
                    className="w-full p-2 border border-[#dde3ec] rounded focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </section>

            {/* 2. Drill Type */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-1 mb-4 font-bold uppercase text-sm">
                2. Drill Type
              </div>
              <div className="flex flex-wrap gap-6 items-center border border-[#dde3ec] p-4 rounded bg-white">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" name="drillTypeFire" onChange={handleInputChange} className="w-4 h-4 accent-[#C49A28]" />
                  <span className="text-sm">Fire</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" name="drillTypeBomb" onChange={handleInputChange} className="w-4 h-4 accent-[#C49A28]" />
                  <span className="text-sm">Bomb Threat</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" name="drillTypeChemical" onChange={handleInputChange} className="w-4 h-4 accent-[#C49A28]" />
                  <span className="text-sm">Chemical Spill</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" name="drillTypeGeneral" onChange={handleInputChange} className="w-4 h-4 accent-[#C49A28]" />
                  <span className="text-sm">General Evacuation</span>
                </label>
                <div className="flex items-center space-x-2 flex-1 min-w-[200px]">
                  <span className="text-sm whitespace-nowrap">Other:</span>
                  <input
                    type="text"
                    name="drillTypeOther"
                    className="flex-1 p-1 border-b border-[#dde3ec] focus:outline-none focus:border-[#C49A28] text-sm"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </section>

            {/* 3. Personnel Mustered */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-1 mb-4 font-bold uppercase text-sm flex justify-between items-center">
                <span>3. Personnel Mustered</span>
                <button
                  type="button"
                  onClick={addPersonnelRow}
                  className="bg-[#C49A28] text-white text-xs px-2 py-1 rounded hover:bg-[#a38021]"
                >
                  + Add Row
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[#dde3ec] text-sm">
                  <thead>
                    <tr className="bg-[#081C2E] text-white">
                      <th className="border border-[#dde3ec] p-2 w-12">#</th>
                      <th className="border border-[#dde3ec] p-2">Name</th>
                      <th className="border border-[#dde3ec] p-2">Department</th>
                      <th className="border border-[#dde3ec] p-2 w-32">Mustered (Y/N)</th>
                      <th className="border border-[#dde3ec] p-2">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {personnel.map((p, idx) => (
                      <tr key={idx}>
                        <td className="border border-[#dde3ec] p-2 text-center">{idx + 1}</td>
                        <td className="border border-[#dde3ec] p-2">
                          <input
                            type="text"
                            value={p.name}
                            onChange={(e) => handlePersonnelChange(idx, "name", e.target.value)}
                            className="w-full p-1 focus:outline-none"
                          />
                        </td>
                        <td className="border border-[#dde3ec] p-2">
                          <input
                            type="text"
                            value={p.department}
                            onChange={(e) => handlePersonnelChange(idx, "department", e.target.value)}
                            className="w-full p-1 focus:outline-none"
                          />
                        </td>
                        <td className="border border-[#dde3ec] p-2">
                          <select
                            value={p.mustered}
                            onChange={(e) => handlePersonnelChange(idx, "mustered", e.target.value)}
                            className="w-full p-1 focus:outline-none bg-transparent"
                          >
                            <option value="">Select</option>
                            <option value="Y">Yes</option>
                            <option value="N">No</option>
                          </select>
                        </td>
                        <td className="border border-[#dde3ec] p-2">
                          <input
                            type="text"
                            value={p.remarks}
                            onChange={(e) => handlePersonnelChange(idx, "remarks", e.target.value)}
                            className="w-full p-1 focus:outline-none"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 4. Drill Checklist */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-1 mb-4 font-bold uppercase text-sm">
                4. Drill Checklist
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[#dde3ec] text-sm">
                  <thead>
                    <tr className="bg-[#081C2E] text-white">
                      <th className="border border-[#dde3ec] p-2 text-left">Item</th>
                      <th className="border border-[#dde3ec] p-2 w-20">Yes</th>
                      <th className="border border-[#dde3ec] p-2 w-20">No</th>
                      <th className="border border-[#dde3ec] p-2 w-20">N/A</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { label: "Siren loud enough", name: "sirenLoud" },
                      { label: "Emergency team responded promptly", name: "emergencyTeamPrompt" },
                      { label: "Emergency team informed in time", name: "emergencyTeamInformed" },
                      { label: "Emergency equipment available", name: "equipmentAvailable" },
                      { label: "Wardens and checkers available", name: "wardensAvailable" },
                      { label: "Evacuation completed in time", name: "evacuationCompleted" },
                      { label: "List of employees available at muster point", name: "employeeListAvailable" },
                    ].map((item) => (
                      <tr key={item.name}>
                        <td className="border border-[#dde3ec] p-2">{item.label}</td>
                        <td className="border border-[#dde3ec] p-2 text-center">
                          <input type="radio" name={item.name} value="Yes" onChange={handleInputChange} className="accent-[#C49A28]" />
                        </td>
                        <td className="border border-[#dde3ec] p-2 text-center">
                          <input type="radio" name={item.name} value="No" onChange={handleInputChange} className="accent-[#C49A28]" />
                        </td>
                        <td className="border border-[#dde3ec] p-2 text-center">
                          <input type="radio" name={item.name} value="N/A" onChange={handleInputChange} className="accent-[#C49A28]" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 5. Deviations Identified */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-1 mb-4 font-bold uppercase text-sm flex justify-between items-center">
                <span>5. Deviations Identified</span>
                <button
                  type="button"
                  onClick={addDeviationRow}
                  className="bg-[#C49A28] text-white text-xs px-2 py-1 rounded hover:bg-[#a38021]"
                >
                  + Add Row
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[#dde3ec] text-sm">
                  <thead>
                    <tr className="bg-[#081C2E] text-white">
                      <th className="border border-[#dde3ec] p-2">Deviation</th>
                      <th className="border border-[#dde3ec] p-2">Follow-Up Action</th>
                      <th className="border border-[#dde3ec] p-2">Responsible</th>
                      <th className="border border-[#dde3ec] p-2">Target Date</th>
                      <th className="border border-[#dde3ec] p-2">Completion Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deviations.map((d, idx) => (
                      <tr key={idx}>
                        <td className="border border-[#dde3ec] p-2">
                          <textarea
                            value={d.deviation}
                            onChange={(e) => handleDeviationChange(idx, "deviation", e.target.value)}
                            className="w-full p-1 focus:outline-none min-h-[40px]"
                          />
                        </td>
                        <td className="border border-[#dde3ec] p-2">
                          <textarea
                            value={d.followUp}
                            onChange={(e) => handleDeviationChange(idx, "followUp", e.target.value)}
                            className="w-full p-1 focus:outline-none min-h-[40px]"
                          />
                        </td>
                        <td className="border border-[#dde3ec] p-2">
                          <input
                            type="text"
                            value={d.responsible}
                            onChange={(e) => handleDeviationChange(idx, "responsible", e.target.value)}
                            className="w-full p-1 focus:outline-none"
                          />
                        </td>
                        <td className="border border-[#dde3ec] p-2">
                          <input
                            type="date"
                            value={d.targetDate}
                            onChange={(e) => handleDeviationChange(idx, "targetDate", e.target.value)}
                            className="w-full p-1 focus:outline-none"
                          />
                        </td>
                        <td className="border border-[#dde3ec] p-2">
                          <input
                            type="date"
                            value={d.completionDate}
                            onChange={(e) => handleDeviationChange(idx, "completionDate", e.target.value)}
                            className="w-full p-1 focus:outline-none"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Sign-Off Section */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-1 mb-4 font-bold uppercase text-sm">
                Sign-Off
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[#dde3ec] text-sm">
                  <thead>
                    <tr className="bg-[#081C2E] text-white">
                      <th className="border border-[#dde3ec] p-2 text-left">Role</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Name (Signature)</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { role: "Drill Coordinator", prefix: "drillCoordinator" },
                      { role: "HSE Officer", prefix: "hseOfficer" },
                      { role: "Site Manager", prefix: "siteManager" },
                    ].map((row) => (
                      <tr key={row.prefix}>
                        <td className="border border-[#dde3ec] p-2 font-bold">{row.role}</td>
                        <td className="border border-[#dde3ec] p-2">
                          <input
                            type="text"
                            name={`${row.prefix}Name`}
                            placeholder="Full name (acts as signature)"
                            onChange={handleInputChange}
                            className="w-full p-1 focus:outline-none"
                          />
                        </td>
                        <td className="border border-[#dde3ec] p-2">
                          <input
                            type="date"
                            name={`${row.prefix}Date`}
                            onChange={handleInputChange}
                            className="w-full p-1 focus:outline-none"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={mutation.isPending}
                className={`bg-[#081C2E] text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-[#1a3a5a] transition-all flex items-center ${mutation.isPending ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {mutation.isPending ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : "Submit Record"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
