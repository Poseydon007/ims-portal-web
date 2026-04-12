import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_012() {
  const [formData, setFormData] = useState({
    inspectionDate: "",
    weekNo: "",
    location: "",
    areaDepartment: "",
    inspectorName: "",
    employeeId: "",
    checklist: Array(34).fill({ y: false, n: false, na: false, comments: "" }),
    correctiveActions: [
      { id: 1, nonConformance: "", correctiveAction: "", responsible: "", dueDate: "", status: "" }
    ],
    overallResult: "",
    inspectorSignature: "",
    inspectorDate: "",
    hseOfficerSignature: "",
    hseOfficerDate: ""
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
    }
  });

  const handleChecklistChange = (index: number, field: string, value: any) => {
    const newChecklist = [...formData.checklist];
    if (field === 'y' || field === 'n' || field === 'na') {
      newChecklist[index] = { ...newChecklist[index], y: false, n: false, na: false, [field]: value };
    } else {
      newChecklist[index] = { ...newChecklist[index], [field]: value };
    }
    setFormData({ ...formData, checklist: newChecklist });
  };

  const handleCorrectiveActionChange = (index: number, field: string, value: string) => {
    const newActions = [...formData.correctiveActions];
    newActions[index] = { ...newActions[index], [field]: value };
    setFormData({ ...formData, correctiveActions: newActions });
  };

  const addCorrectiveActionRow = () => {
    setFormData({
      ...formData,
      correctiveActions: [
        ...formData.correctiveActions,
        { id: formData.correctiveActions.length + 1, nonConformance: "", correctiveAction: "", responsible: "", dueDate: "", status: "" }
      ]
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const headers = [
      "Inspection Date", "Week No", "Location / Site", "Area / Department", "Inspector Name", "Employee ID",
      ...checklistItems.map(item => `${item.id}. ${item.desc} (Y/N/NA)`),
      ...checklistItems.map(item => `${item.id}. ${item.desc} Comments`),
      "Corrective Actions",
      "Overall Inspection Result",
      "Inspector Signature", "Inspector Date",
      "HSE Officer Signature", "HSE Officer Date"
    ];

    const values = [
      formData.inspectionDate, formData.weekNo, formData.location, formData.areaDepartment, formData.inspectorName, formData.employeeId,
      ...formData.checklist.map(item => item.y ? "Y" : item.n ? "N" : item.na ? "NA" : ""),
      ...formData.checklist.map(item => item.comments),
      JSON.stringify(formData.correctiveActions),
      formData.overallResult,
      formData.inspectorSignature, formData.inspectorDate,
      formData.hseOfficerSignature, formData.hseOfficerDate
    ];

    mutation.mutate({
      formCode: "TE-IMS-FRM-HSE-012",
      headers,
      values
    });
  };

  const checklistItems = [
    { id: 1, section: "1. General PPE Program Compliance", desc: "Hazard assessment complete and documented" },
    { id: 2, section: "1. General PPE Program Compliance", desc: "PPE selection based upon hazard assessment" },
    { id: 3, section: "1. General PPE Program Compliance", desc: "Review of employee-owned PPE complete" },
    { id: 4, section: "1. General PPE Program Compliance", desc: "Defective or damaged PPE removed from use" },
    { id: 5, section: "1. General PPE Program Compliance", desc: "PPE training complete and documented" },
    { id: 6, section: "2. Eye & Face Protection", desc: "Eye and face protection appropriate to the hazard" },
    { id: 7, section: "2. Eye & Face Protection", desc: "Side protectors used where flying object hazards exist" },
    { id: 8, section: "2. Eye & Face Protection", desc: "Eye protection compatible with prescription lenses" },
    { id: 9, section: "2. Eye & Face Protection", desc: "Filter lenses with appropriate shade number for light radiation" },
    { id: 10, section: "2. Eye & Face Protection", desc: "Maintained per manufacturer recommendations" },
    { id: 11, section: "3. Head Protection", desc: "Hard hats used where potential for head injury from falling objects" },
    { id: 12, section: "3. Head Protection", desc: "Hard hats used where potential for contact with electrical conductors" },
    { id: 13, section: "3. Head Protection", desc: "Maintained per manufacturer recommendations" },
    { id: 14, section: "4. Hearing Protection", desc: "Hearing protection available and used in high-noise areas (>85 dB)" },
    { id: 15, section: "4. Hearing Protection", desc: "Type appropriate to noise level (earplugs / earmuffs)" },
    { id: 16, section: "4. Hearing Protection", desc: "Maintained per manufacturer recommendations" },
    { id: 17, section: "5. Respiratory Protection", desc: "RPE available for dusty, fume, or vapour environments" },
    { id: 18, section: "5. Respiratory Protection", desc: "Correct filter type selected for the specific hazard" },
    { id: 19, section: "5. Respiratory Protection", desc: "Fit-tested and maintained per manufacturer recommendations" },
    { id: 20, section: "6. Foot Protection", desc: "Appropriate for protection from falling or rolling objects" },
    { id: 21, section: "6. Foot Protection", desc: "Appropriate for protection from objects piercing the sole" },
    { id: 22, section: "6. Foot Protection", desc: "Appropriate for protection from electrical conductors" },
    { id: 23, section: "6. Foot Protection", desc: "Maintained per manufacturer recommendations" },
    { id: 24, section: "7. Hand Protection", desc: "Hand protection appropriate to the hazard" },
    { id: 25, section: "7. Hand Protection", desc: "Maintained per manufacturer recommendations" },
    { id: 26, section: "8. Fall Protection", desc: "Harnesses and lanyards available for work at height" },
    { id: 27, section: "8. Fall Protection", desc: "Anchor points inspected and load-rated" },
    { id: 28, section: "8. Fall Protection", desc: "Maintained per manufacturer recommendations" },
    { id: 29, section: "9. High-Visibility & Heat Protection", desc: "Hi-vis vests / clothing worn in vehicle interaction zones" },
    { id: 30, section: "9. High-Visibility & Heat Protection", desc: "Sun and heat protection measures in place (shade, cooling, hydration)" },
    { id: 31, section: "9. High-Visibility & Heat Protection", desc: "Clothing appropriate for weather conditions and task" },
    { id: 32, section: "10. General / Task-Specific", desc: "Appropriate PPE available for hot work (cutting, welding, brazing)" },
    { id: 33, section: "10. General / Task-Specific", desc: "PPE storage area clean, accessible, and clearly marked" },
    { id: 34, section: "10. General / Task-Specific", desc: "All PPE compliant with applicable standards (EN / ANSI / SASO)" }
  ];

  const sections = Array.from(new Set(checklistItems.map(item => item.section)));

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto py-12 px-4 text-center">
          <div className="bg-white p-8 rounded-lg shadow-md border border-[#dde3ec]">
            <h2 className="text-2xl font-bold text-[#081C2E] mb-4">Form submitted successfully</h2>
            <p className="text-gray-600 mb-6">Your PPE Issue and Inspection Checklist has been recorded.</p>
            <a
              href={sheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C49A28] text-white px-6 py-2 rounded font-semibold hover:bg-[#a38021] transition-colors"
            >
              View register
            </a>
            <div className="mt-8">
              <Link href="/" className="text-[#081C2E] hover:underline">← Return to Portal Home</Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-8 px-4 font-['Nunito_Sans']">
        <div className="mb-6">
          <Link href="/" className="text-[#081C2E] hover:underline">← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">FRM</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 font-semibold">PPE Issue and Inspection Checklist</span>
        </div>

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
                  <td className="border border-[#dde3ec] p-2">TE-IMS-FRM-HSE-012</td>
                  <td className="border border-[#dde3ec] p-2">01</td>
                  <td className="border border-[#dde3ec] p-2">April 2026</td>
                  <td className="border border-[#dde3ec] p-2">Approved for Implementation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-6">
            <h1 className="text-2xl font-bold text-[#081C2E] mb-6 text-center">PPE ISSUE AND INSPECTION CHECKLIST</h1>

            {/* Inspection Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 bg-[#f4f6f9] p-4 rounded-lg border border-[#dde3ec]">
              <div>
                <label className="block text-sm font-bold text-[#081C2E] mb-1">Inspection Date *</label>
                <input
                  type="date"
                  required
                  className="w-full p-2 border border-[#dde3ec] rounded"
                  value={formData.inspectionDate}
                  onChange={(e) => setFormData({ ...formData, inspectionDate: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#081C2E] mb-1">Week No. *</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border border-[#dde3ec] rounded"
                  value={formData.weekNo}
                  onChange={(e) => setFormData({ ...formData, weekNo: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#081C2E] mb-1">Location / Site *</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border border-[#dde3ec] rounded"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#081C2E] mb-1">Area / Department *</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border border-[#dde3ec] rounded"
                  value={formData.areaDepartment}
                  onChange={(e) => setFormData({ ...formData, areaDepartment: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#081C2E] mb-1">Inspector Name *</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border border-[#dde3ec] rounded"
                  value={formData.inspectorName}
                  onChange={(e) => setFormData({ ...formData, inspectorName: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#081C2E] mb-1">Employee ID *</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border border-[#dde3ec] rounded"
                  value={formData.employeeId}
                  onChange={(e) => setFormData({ ...formData, employeeId: e.target.value })}
                />
              </div>
            </div>

            {/* Checklist Sections */}
            <div className="mb-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse mb-4">
                  <thead>
                    <tr className="bg-[#081C2E] text-white">
                      <th className="border border-[#dde3ec] p-2 text-center w-12">#</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Description</th>
                      <th className="border border-[#dde3ec] p-2 text-center w-12">Y</th>
                      <th className="border border-[#dde3ec] p-2 text-center w-12">N</th>
                      <th className="border border-[#dde3ec] p-2 text-center w-12">N/A</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Comments</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sections.map((sectionName) => (
                      <>
                        <tr key={sectionName} className="bg-gray-100">
                          <td colSpan={6} className="border border-[#dde3ec] p-2 font-bold text-[#081C2E]">{sectionName}</td>
                        </tr>
                        {checklistItems
                          .filter(item => item.section === sectionName)
                          .map((item, idx) => {
                            const actualIndex = item.id - 1;
                            return (
                              <tr key={item.id}>
                                <td className="border border-[#dde3ec] p-2 text-center">{item.id}</td>
                                <td className="border border-[#dde3ec] p-2">{item.desc}</td>
                                <td className="border border-[#dde3ec] p-2 text-center">
                                  <input
                                    type="checkbox"
                                    checked={formData.checklist[actualIndex]?.y || false}
                                    onChange={(e) => handleChecklistChange(actualIndex, 'y', e.target.checked)}
                                  />
                                </td>
                                <td className="border border-[#dde3ec] p-2 text-center">
                                  <input
                                    type="checkbox"
                                    checked={formData.checklist[actualIndex]?.n || false}
                                    onChange={(e) => handleChecklistChange(actualIndex, 'n', e.target.checked)}
                                  />
                                </td>
                                <td className="border border-[#dde3ec] p-2 text-center">
                                  <input
                                    type="checkbox"
                                    checked={formData.checklist[actualIndex]?.na || false}
                                    onChange={(e) => handleChecklistChange(actualIndex, 'na', e.target.checked)}
                                  />
                                </td>
                                <td className="border border-[#dde3ec] p-2">
                                  <input
                                    type="text"
                                    className="w-full p-1 border border-[#dde3ec] rounded text-sm"
                                    value={formData.checklist[actualIndex]?.comments || ""}
                                    onChange={(e) => handleChecklistChange(actualIndex, 'comments', e.target.value)}
                                  />
                                </td>
                              </tr>
                            );
                          })}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Corrective Actions */}
            <div className="mb-8">
              <div className="bg-[#081C2E] text-white p-2 font-bold mb-2">Corrective Actions</div>
              <p className="text-sm text-gray-600 mb-4">Record any non-conformances identified during the inspection and the corrective actions required.</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#f4f6f9]">
                      <th className="border border-[#dde3ec] p-2 text-center w-12">#</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Non-Conformance</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Corrective Action</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Responsible</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Due Date</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.correctiveActions.map((action, index) => (
                      <tr key={index}>
                        <td className="border border-[#dde3ec] p-2 text-center">{index + 1}</td>
                        <td className="border border-[#dde3ec] p-2">
                          <textarea
                            className="w-full p-1 border border-[#dde3ec] rounded text-sm"
                            rows={2}
                            value={action.nonConformance}
                            onChange={(e) => handleCorrectiveActionChange(index, 'nonConformance', e.target.value)}
                          />
                        </td>
                        <td className="border border-[#dde3ec] p-2">
                          <textarea
                            className="w-full p-1 border border-[#dde3ec] rounded text-sm"
                            rows={2}
                            value={action.correctiveAction}
                            onChange={(e) => handleCorrectiveActionChange(index, 'correctiveAction', e.target.value)}
                          />
                        </td>
                        <td className="border border-[#dde3ec] p-2">
                          <input
                            type="text"
                            className="w-full p-1 border border-[#dde3ec] rounded text-sm"
                            value={action.responsible}
                            onChange={(e) => handleCorrectiveActionChange(index, 'responsible', e.target.value)}
                          />
                        </td>
                        <td className="border border-[#dde3ec] p-2">
                          <input
                            type="date"
                            className="w-full p-1 border border-[#dde3ec] rounded text-sm"
                            value={action.dueDate}
                            onChange={(e) => handleCorrectiveActionChange(index, 'dueDate', e.target.value)}
                          />
                        </td>
                        <td className="border border-[#dde3ec] p-2">
                          <select
                            className="w-full p-1 border border-[#dde3ec] rounded text-sm"
                            value={action.status}
                            onChange={(e) => handleCorrectiveActionChange(index, 'status', e.target.value)}
                          >
                            <option value="">Select Status</option>
                            <option value="Open">Open</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Closed">Closed</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button
                type="button"
                onClick={addCorrectiveActionRow}
                className="mt-2 text-sm text-[#C49A28] font-bold hover:underline"
              >
                + Add Another Action
              </button>
            </div>

            {/* Inspection Outcome */}
            <div className="mb-8 p-4 bg-[#f4f6f9] border border-[#dde3ec] rounded-lg">
              <h3 className="font-bold text-[#081C2E] mb-4">Overall Inspection Result *</h3>
              <div className="flex flex-wrap gap-6">
                {["Satisfactory", "Requires Corrective Action", "Unsatisfactory"].map((option) => (
                  <label key={option} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="overallResult"
                      required
                      value={option}
                      checked={formData.overallResult === option}
                      onChange={(e) => setFormData({ ...formData, overallResult: e.target.value })}
                      className="text-[#C49A28] focus:ring-[#C49A28]"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Sign-Off */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="p-4 border border-[#dde3ec] rounded-lg">
                <h3 className="font-bold text-[#081C2E] mb-4 border-b border-[#dde3ec] pb-2">Inspector Sign-Off</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Signature (Full Name) *</label>
                    <input
                      type="text"
                      required
                      placeholder="Full name (acts as signature)"
                      className="w-full p-2 border border-[#dde3ec] rounded"
                      value={formData.inspectorSignature}
                      onChange={(e) => setFormData({ ...formData, inspectorSignature: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Date *</label>
                    <input
                      type="date"
                      required
                      className="w-full p-2 border border-[#dde3ec] rounded"
                      value={formData.inspectorDate}
                      onChange={(e) => setFormData({ ...formData, inspectorDate: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <div className="p-4 border border-[#dde3ec] rounded-lg">
                <h3 className="font-bold text-[#081C2E] mb-4 border-b border-[#dde3ec] pb-2">HSE Officer Sign-Off</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Signature (Full Name)</label>
                    <input
                      type="text"
                      placeholder="Full name (acts as signature)"
                      className="w-full p-2 border border-[#dde3ec] rounded"
                      value={formData.hseOfficerSignature}
                      onChange={(e) => setFormData({ ...formData, hseOfficerSignature: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Date</label>
                    <input
                      type="date"
                      className="w-full p-2 border border-[#dde3ec] rounded"
                      value={formData.hseOfficerDate}
                      onChange={(e) => setFormData({ ...formData, hseOfficerDate: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded text-sm">
                {error}
              </div>
            )}

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={mutation.isPending}
                className="bg-[#081C2E] text-white px-10 py-3 rounded-lg font-bold hover:bg-[#12304d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {mutation.isPending ? "Submitting..." : "Submit Inspection Checklist"}
              </button>
            </div>
          </div>
        </form>

        {/* Revision History */}
        <div className="mt-12 overflow-x-auto">
          <h3 className="text-lg font-bold text-[#081C2E] mb-4">Revision History</h3>
          <table className="w-full text-sm border-collapse border border-[#dde3ec]">
            <thead>
              <tr className="bg-[#f4f6f9]">
                <th className="border border-[#dde3ec] p-2 text-left">Rev</th>
                <th className="border border-[#dde3ec] p-2 text-left">Date</th>
                <th className="border border-[#dde3ec] p-2 text-left">Description of Changes</th>
                <th className="border border-[#dde3ec] p-2 text-left">Author</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#dde3ec] p-2">00</td>
                <td className="border border-[#dde3ec] p-2">—</td>
                <td className="border border-[#dde3ec] p-2">Initial release — 23 items across 6 categories, basic Y/N/NA checklist</td>
                <td className="border border-[#dde3ec] p-2">True East</td>
              </tr>
              <tr>
                <td className="border border-[#dde3ec] p-2 font-bold">01</td>
                <td className="border border-[#dde3ec] p-2">April 2026</td>
                <td className="border border-[#dde3ec] p-2">Added hearing, respiratory, fall, and heat protection sections. Added corrective action tracking, inspection outcome, header identification. Expanded to 34 items across 10 categories.</td>
                <td className="border border-[#dde3ec] p-2">True East</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
