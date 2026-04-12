import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_040() {
  const [submitted, setSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    siteProject: "",
    reportingPeriod: "",
    preparedBy: "",
    date: "",
    wasteSchedule: [
      { no: "1", wasteType: "Drill cuttings", class: "NH", storageLocation: "Designated cuttings pit", handlingMethod: "Collect in skip bins; avoid soil contact", disposalMethod: "Approved landfill / on-site burial", frequency: "Per hole completion", responsible: "Drill Supervisor", notes: "" },
      { no: "2", wasteType: "Used drilling fluids / mud", class: "H", storageLocation: "Lined mud pit / tanks", handlingMethod: "Contain in lined sumps; no ground discharge", disposalMethod: "Licensed waste contractor removal", frequency: "Monthly / pit full", responsible: "HSE Officer", notes: "" },
      { no: "3", wasteType: "Used engine oil & lubricants", class: "H", storageLocation: "Bunded oil store area", handlingMethod: "Drain into sealed containers; use drip trays", disposalMethod: "Licensed oil recycler collection", frequency: "Monthly", responsible: "Maintenance Supervisor", notes: "" },
      { no: "4", wasteType: "Fuel spill residue / contaminated soil", class: "H", storageLocation: "Spill kit containment area", handlingMethod: "Absorb with spill kits; bag contaminated soil", disposalMethod: "Licensed hazardous waste disposal", frequency: "As required", responsible: "HSE Officer", notes: "" },
      { no: "5", wasteType: "Hydraulic fluid waste", class: "H", storageLocation: "Bunded chemical store", handlingMethod: "Sealed drums; avoid mixing with other fluids", disposalMethod: "Licensed hazardous waste contractor", frequency: "Quarterly", responsible: "Maintenance Supervisor", notes: "" },
      { no: "6", wasteType: "Empty chemical containers", class: "H", storageLocation: "Chemical rinsate area", handlingMethod: "Triple-rinse; mark as rinsed; puncture", disposalMethod: "Licensed hazardous waste disposal", frequency: "Monthly", responsible: "Store Manager", notes: "" },
      { no: "7", wasteType: "General domestic waste", class: "NH", storageLocation: "Camp waste bins / skips", handlingMethod: "Segregate from hazardous; bag and seal", disposalMethod: "Municipal collection / approved landfill", frequency: "Weekly", responsible: "Camp Supervisor", notes: "" },
      { no: "8", wasteType: "Scrap metal / used parts", class: "NH", storageLocation: "Scrap yard / laydown area", handlingMethod: "Segregate by type; keep area tidy", disposalMethod: "Scrap metal recycler collection", frequency: "Quarterly", responsible: "Maintenance Supervisor", notes: "" },
      { no: "9", wasteType: "Used PPE (contaminated)", class: "H/NH", storageLocation: "Designated PPE disposal bin", handlingMethod: "Bag separately; label if contaminated", disposalMethod: "Licensed waste contractor / landfill", frequency: "Monthly", responsible: "HSE Officer", notes: "" },
      { no: "10", wasteType: "Waste water / grey water", class: "NH", storageLocation: "Grey water holding tank", handlingMethod: "No ground discharge; contain in tanks", disposalMethod: "Authorised tanker removal", frequency: "Weekly", responsible: "Camp Supervisor", notes: "" },
      { no: "11", wasteType: "Medical / first aid waste", class: "H", storageLocation: "Sharps bin / sealed bags", handlingMethod: "Handle with gloves; seal in designated bags", disposalMethod: "Licensed medical waste contractor", frequency: "Monthly", responsible: "First Aider / HSE", notes: "" },
      { no: "12", wasteType: "Used batteries", class: "H", storageLocation: "Designated battery store", handlingMethod: "Store upright; prevent short circuit", disposalMethod: "Licensed battery recycler", frequency: "Quarterly", responsible: "Maintenance Supervisor", notes: "" },
    ],
    signOff: {
      hseOfficer: { name: "", signature: "", date: "" },
      environmentalOfficer: { name: "", signature: "", date: "" },
      hseManager: { name: "", signature: "", date: "" },
      siteManager: { name: "", signature: "", date: "" },
    }
  });

  const mutation = trpc.formSubmissions.submit.useMutation({
    onSuccess: (data) => {
      setSubmitted(true);
      setSheetUrl(data.sheetUrl);
    },
    onError: (err) => {
      setError(err.message || "An error occurred during submission.");
    }
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleScheduleChange = (index: number, field: string, value: string) => {
    const newSchedule = [...formData.wasteSchedule];
    newSchedule[index] = { ...newSchedule[index], [field]: value };
    setFormData(prev => ({ ...prev, wasteSchedule: newSchedule }));
  };

  const addScheduleRow = () => {
    setFormData(prev => ({
      ...prev,
      wasteSchedule: [
        ...prev.wasteSchedule,
        { no: (prev.wasteSchedule.length + 1).toString(), wasteType: "", class: "", storageLocation: "", handlingMethod: "", disposalMethod: "", frequency: "", responsible: "", notes: "" }
      ]
    }));
  };

  const handleSignOffChange = (role: string, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      signOff: {
        ...prev.signOff,
        [role]: { ...prev.signOff[role as keyof typeof prev.signOff], [field]: value }
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const headers = [
      "Site / Project", "Reporting Period", "Prepared By", "Date",
      ...formData.wasteSchedule.flatMap((item, i) => [
        `Waste ${i+1} Type`, `Waste ${i+1} Class`, `Waste ${i+1} Storage`, `Waste ${i+1} Handling`, `Waste ${i+1} Disposal`, `Waste ${i+1} Frequency`, `Waste ${i+1} Responsible`, `Waste ${i+1} Notes`
      ]),
      "HSE Officer Name", "HSE Officer Sig", "HSE Officer Date",
      "Environmental Officer Name", "Environmental Officer Sig", "Environmental Officer Date",
      "HSE Manager Name", "HSE Manager Sig", "HSE Manager Date",
      "Site Manager Name", "Site Manager Sig", "Site Manager Date"
    ];

    const values = [
      formData.siteProject, formData.reportingPeriod, formData.preparedBy, formData.date,
      ...formData.wasteSchedule.flatMap(item => [
        item.wasteType, item.class, item.storageLocation, item.handlingMethod, item.disposalMethod, item.frequency, item.responsible, item.notes
      ]),
      formData.signOff.hseOfficer.name, formData.signOff.hseOfficer.signature, formData.signOff.hseOfficer.date,
      formData.signOff.environmentalOfficer.name, formData.signOff.environmentalOfficer.signature, formData.signOff.environmentalOfficer.date,
      formData.signOff.hseManager.name, formData.signOff.hseManager.signature, formData.signOff.hseManager.date,
      formData.signOff.siteManager.name, formData.signOff.siteManager.signature, formData.signOff.siteManager.date
    ];

    mutation.mutate({
      formCode: "TE-IMS-FRM-HSE-040",
      headers,
      values
    });
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 text-center">
          <h2 className="text-2xl font-bold text-[#081C2E] mb-4">Form submitted successfully.</h2>
          <p className="mb-6">View register: <a href={sheetUrl} target="_blank" rel="noopener noreferrer" className="text-[#C49A28] underline font-semibold">Google Sheet</a></p>
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
      <div className="max-w-7xl mx-auto p-4 md:p-6 bg-[#f4f6f9] min-h-screen">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <Link href="/" className="text-[#081C2E] hover:text-[#C49A28] font-semibold transition-colors">
            ← Portal Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/docs/frm" className="text-gray-600 hover:text-[#C49A28] transition-colors cursor-pointer">FRM</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 font-bold">Waste Handling and Disposal Schedule</span>
        </nav>

        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg overflow-hidden border border-[#dde3ec]">
          {/* Header Section */}
          <div className="bg-[#081C2E] p-6 text-white flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h1 className="text-2xl font-bold tracking-tight">WASTE HANDLING AND DISPOSAL SCHEDULE</h1>
              <p className="text-gray-300 text-sm mt-1">H = Hazardous | NH = Non-Hazardous. All waste disposal must comply with Saudi Environmental Regulations and NCEC requirements.</p>
            </div>
            <div className="bg-white/10 p-3 rounded border border-white/20">
              <table className="text-xs text-white">
                <tbody>
                  <tr><td className="pr-4 opacity-70">Document:</td><td className="font-mono">TE-IMS-FRM-HSE-040</td></tr>
                  <tr><td className="pr-4 opacity-70">Revision:</td><td>Rev01</td></tr>
                  <tr><td className="pr-4 opacity-70">Date:</td><td>09 Apr 2026</td></tr>
                  <tr><td className="pr-4 opacity-70">Status:</td><td>Approved</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-6 space-y-8">
            {/* Site / Project Info */}
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-4 rounded-lg border border-[#dde3ec]">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-[#081C2E]">Site / Project *</label>
                  <input
                    type="text"
                    required
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                    value={formData.siteProject}
                    onChange={(e) => handleInputChange("siteProject", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-[#081C2E]">Reporting Period *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. April 2026"
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                    value={formData.reportingPeriod}
                    onChange={(e) => handleInputChange("reportingPeriod", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-[#081C2E]">Prepared By *</label>
                  <input
                    type="text"
                    required
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                    value={formData.preparedBy}
                    onChange={(e) => handleInputChange("preparedBy", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-[#081C2E]">Date *</label>
                  <input
                    type="date"
                    required
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                    value={formData.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                  />
                </div>
              </div>
            </section>

            {/* Waste Disposal Schedule Table */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold rounded-t-lg">
                WASTE DISPOSAL SCHEDULE
              </div>
              <div className="overflow-x-auto border-x border-b border-[#dde3ec] rounded-b-lg">
                <table className="w-full text-sm">
                  <thead className="bg-[#081C2E] text-white">
                    <tr>
                      <th className="p-2 border border-white/10 w-12">No.</th>
                      <th className="p-2 border border-white/10">Waste Type</th>
                      <th className="p-2 border border-white/10 w-24">Class (H/NH)</th>
                      <th className="p-2 border border-white/10">Storage Location</th>
                      <th className="p-2 border border-white/10">Handling Method</th>
                      <th className="p-2 border border-white/10">Disposal Method</th>
                      <th className="p-2 border border-white/10">Frequency</th>
                      <th className="p-2 border border-white/10">Responsible</th>
                      <th className="p-2 border border-white/10">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#dde3ec]">
                    {formData.wasteSchedule.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="p-2 text-center font-mono text-gray-500">{item.no}</td>
                        <td className="p-1">
                          <input
                            type="text"
                            className="w-full p-1 border-none focus:ring-1 focus:ring-[#C49A28] rounded"
                            value={item.wasteType}
                            onChange={(e) => handleScheduleChange(index, "wasteType", e.target.value)}
                          />
                        </td>
                        <td className="p-1">
                          <select
                            className="w-full p-1 border-none focus:ring-1 focus:ring-[#C49A28] rounded bg-transparent"
                            value={item.class}
                            onChange={(e) => handleScheduleChange(index, "class", e.target.value)}
                          >
                            <option value="">Select</option>
                            <option value="H">H</option>
                            <option value="NH">NH</option>
                            <option value="H/NH">H/NH</option>
                          </select>
                        </td>
                        <td className="p-1">
                          <input
                            type="text"
                            className="w-full p-1 border-none focus:ring-1 focus:ring-[#C49A28] rounded"
                            value={item.storageLocation}
                            onChange={(e) => handleScheduleChange(index, "storageLocation", e.target.value)}
                          />
                        </td>
                        <td className="p-1">
                          <input
                            type="text"
                            className="w-full p-1 border-none focus:ring-1 focus:ring-[#C49A28] rounded"
                            value={item.handlingMethod}
                            onChange={(e) => handleScheduleChange(index, "handlingMethod", e.target.value)}
                          />
                        </td>
                        <td className="p-1">
                          <input
                            type="text"
                            className="w-full p-1 border-none focus:ring-1 focus:ring-[#C49A28] rounded"
                            value={item.disposalMethod}
                            onChange={(e) => handleScheduleChange(index, "disposalMethod", e.target.value)}
                          />
                        </td>
                        <td className="p-1">
                          <input
                            type="text"
                            className="w-full p-1 border-none focus:ring-1 focus:ring-[#C49A28] rounded"
                            value={item.frequency}
                            onChange={(e) => handleScheduleChange(index, "frequency", e.target.value)}
                          />
                        </td>
                        <td className="p-1">
                          <input
                            type="text"
                            className="w-full p-1 border-none focus:ring-1 focus:ring-[#C49A28] rounded"
                            value={item.responsible}
                            onChange={(e) => handleScheduleChange(index, "responsible", e.target.value)}
                          />
                        </td>
                        <td className="p-1">
                          <input
                            type="text"
                            className="w-full p-1 border-none focus:ring-1 focus:ring-[#C49A28] rounded"
                            value={item.notes}
                            onChange={(e) => handleScheduleChange(index, "notes", e.target.value)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button
                type="button"
                onClick={addScheduleRow}
                className="mt-2 text-sm text-[#081C2E] hover:text-[#C49A28] font-bold flex items-center gap-1 transition-colors"
              >
                <span className="text-lg">+</span> Add Waste Type
              </button>
            </section>

            {/* Sign-Off Section */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold rounded-t-lg">
                SIGN-OFF
              </div>
              <div className="overflow-x-auto border-x border-b border-[#dde3ec] rounded-b-lg">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100 text-[#081C2E]">
                    <tr>
                      <th className="p-2 border border-[#dde3ec] text-left">Role</th>
                      <th className="p-2 border border-[#dde3ec] text-left">Name</th>
                      <th className="p-2 border border-[#dde3ec] text-left">Signature (Type Name)</th>
                      <th className="p-2 border border-[#dde3ec] text-left w-40">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { key: "hseOfficer", label: "HSE Officer / Prepared By" },
                      { key: "environmentalOfficer", label: "Environmental Officer" },
                      { key: "hseManager", label: "HSE Manager" },
                      { key: "siteManager", label: "Site Manager" },
                    ].map((role) => (
                      <tr key={role.key}>
                        <td className="p-2 border border-[#dde3ec] font-semibold bg-gray-50">{role.label}</td>
                        <td className="p-1 border border-[#dde3ec]">
                          <input
                            type="text"
                            className="w-full p-1 border-none focus:ring-1 focus:ring-[#C49A28] rounded"
                            value={formData.signOff[role.key as keyof typeof formData.signOff].name}
                            onChange={(e) => handleSignOffChange(role.key, "name", e.target.value)}
                          />
                        </td>
                        <td className="p-1 border border-[#dde3ec]">
                          <input
                            type="text"
                            placeholder="Digital Signature"
                            className="w-full p-1 border-none focus:ring-1 focus:ring-[#C49A28] rounded italic font-serif"
                            value={formData.signOff[role.key as keyof typeof formData.signOff].signature}
                            onChange={(e) => handleSignOffChange(role.key, "signature", e.target.value)}
                          />
                        </td>
                        <td className="p-1 border border-[#dde3ec]">
                          <input
                            type="date"
                            className="w-full p-1 border-none focus:ring-1 focus:ring-[#C49A28] rounded"
                            value={formData.signOff[role.key as keyof typeof formData.signOff].date}
                            onChange={(e) => handleSignOffChange(role.key, "date", e.target.value)}
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
              <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={mutation.isPending}
                className={`
                  bg-[#081C2E] text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg
                  hover:bg-[#C49A28] transition-all transform hover:-translate-y-1 active:translate-y-0
                  disabled:opacity-50 disabled:cursor-not-allowed
                  flex items-center gap-2
                `}
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
                  "Submit Schedule"
                )}
              </button>
            </div>
          </div>
        </form>

        {/* Revision History Footer */}
        <div className="mt-8 text-[10px] text-gray-400 flex justify-between items-center border-t border-gray-200 pt-4">
          <p>© True East Mining Company | IMS Portal</p>
          <p>TE-IMS-FRM-HSE-040 | Rev01 | Confidential</p>
        </div>
      </div>
    </Layout>
  );
}
