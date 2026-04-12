import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_021() {
  const [submitted, setSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    areaLocation: "",
    date: "",
    inspectedBy: "",
    frequency: "",
    checklist: Array(20).fill(null).map((_, i) => ({
      id: i + 1,
      status: "", // "Yes", "No", "N/A"
      remarks: ""
    })),
    correctiveActions: [
      { id: 1, item: "", actionRequired: "", responsible: "", dueDate: "", status: "" }
    ],
    signOff: {
      inspectedBy: { name: "", signature: "", date: "" },
      hseManager: { name: "", signature: "", date: "" }
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

  const checklistItems = [
    "Designated smoking area identified and signposted",
    "No smoking signs and posters displayed in hazardous areas",
    "All combustible materials removed from work site or properly stored",
    "All electrical devices provided with protection systems",
    "Circuit breakers provided and functional",
    "Adequate fire extinguishers provided and accessible",
    "Smoke detectors provided and functional in offices and stores",
    "Fire alarm system tested and operational",
    "Emergency exits clearly marked and unobstructed",
    "Fire escape routes displayed and visible",
    "Hot work permits issued where required",
    "Flammable liquids stored in approved containers and cabinets",
    "Fuel storage areas properly ventilated and secured",
    "Electrical wiring inspected and in good condition",
    "Fire extinguisher inspection tags current",
    "Emergency lighting operational",
    "Fire fighting equipment register up to date",
    "Personnel trained in fire extinguisher use",
    "Assembly points clearly marked",
    "Emergency contact numbers posted and visible"
  ];

  const handleChecklistChange = (index: number, field: string, value: string) => {
    const newChecklist = [...formData.checklist];
    newChecklist[index] = { ...newChecklist[index], [field]: value };
    setFormData({ ...formData, checklist: newChecklist });
  };

  const handleActionChange = (index: number, field: string, value: string) => {
    const newActions = [...formData.correctiveActions];
    newActions[index] = { ...newActions[index], [field]: value };
    setFormData({ ...formData, correctiveActions: newActions });
  };

  const addActionRow = () => {
    setFormData({
      ...formData,
      correctiveActions: [
        ...formData.correctiveActions,
        { id: formData.correctiveActions.length + 1, item: "", actionRequired: "", responsible: "", dueDate: "", status: "" }
      ]
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const headers = [
      "Form Code",
      "Area / Location",
      "Date",
      "Inspected By",
      "Frequency",
      ...checklistItems.flatMap((item, i) => [
        `Checklist ${i + 1}: ${item} (Status)`,
        `Checklist ${i + 1}: ${item} (Remarks)`
      ]),
      ...formData.correctiveActions.flatMap((action, i) => [
        `Action ${i + 1}: Item`,
        `Action ${i + 1}: Action Required`,
        `Action ${i + 1}: Responsible`,
        `Action ${i + 1}: Due Date`,
        `Action ${i + 1}: Status`
      ]),
      "Sign-Off: Inspected By Name",
      "Sign-Off: Inspected By Date",
      "Sign-Off: HSE Manager Name",
      "Sign-Off: HSE Manager Date"
    ];

    const values = [
      "TE-IMS-FRM-HSE-021",
      formData.areaLocation,
      formData.date,
      formData.inspectedBy,
      formData.frequency,
      ...formData.checklist.flatMap(item => [item.status, item.remarks]),
      ...formData.correctiveActions.flatMap(action => [
        action.item,
        action.actionRequired,
        action.responsible,
        action.dueDate,
        action.status
      ]),
      formData.signOff.inspectedBy.name,
      formData.signOff.inspectedBy.date,
      formData.signOff.hseManager.name,
      formData.signOff.hseManager.date
    ];

    mutation.mutate({
      formCode: "TE-IMS-FRM-HSE-021",
      headers,
      values
    });
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6">
          <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-2">Form submitted successfully.</h2>
            <p className="mb-4">The fire prevention checklist has been recorded.</p>
            <a 
              href={sheetUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-navy hover:underline font-semibold"
            >
              View register: {sheetUrl}
            </a>
            <div className="mt-6">
              <Link href="/" className="text-navy hover:underline">← Return to Portal Home</Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-4 md:p-8 font-['Nunito_Sans'] text-[#081C2E]">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-[#C49A28] hover:underline">← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">FRM</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 font-semibold">Fire Prevention Checklist</span>
        </nav>

        {/* Document Control Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-[#dde3ec] text-sm">
            <thead>
              <tr className="bg-[#081C2E] text-white">
                <th colSpan={4} className="p-3 text-left uppercase tracking-wider">Fire Prevention Checklist</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#dde3ec] p-2 bg-gray-50 font-semibold w-1/4">Document</td>
                <td className="border border-[#dde3ec] p-2 w-1/4">TE-IMS-FRM-HSE-021</td>
                <td className="border border-[#dde3ec] p-2 bg-gray-50 font-semibold w-1/4">Revision</td>
                <td className="border border-[#dde3ec] p-2 w-1/4">01</td>
              </tr>
              <tr>
                <td className="border border-[#dde3ec] p-2 bg-gray-50 font-semibold">Date</td>
                <td className="border border-[#dde3ec] p-2">01 March 2026</td>
                <td className="border border-[#dde3ec] p-2 bg-gray-50 font-semibold">Status</td>
                <td className="border border-[#dde3ec] p-2">Approved for Implementation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Inspection Details */}
          <section>
            <div className="bg-[#081C2E] text-white p-2 px-4 mb-4 font-semibold uppercase tracking-wide">
              Inspection Details
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-[#dde3ec] p-4 rounded shadow-sm">
              <div className="space-y-1">
                <label className="block text-xs font-bold uppercase text-gray-500">Area / Location *</label>
                <input 
                  type="text" 
                  required
                  className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                  value={formData.areaLocation}
                  onChange={(e) => setFormData({...formData, areaLocation: e.target.value})}
                />
              </div>
              <div className="space-y-1">
                <label className="block text-xs font-bold uppercase text-gray-500">Date *</label>
                <input 
                  type="date" 
                  required
                  className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>
              <div className="space-y-1">
                <label className="block text-xs font-bold uppercase text-gray-500">Inspected By *</label>
                <input 
                  type="text" 
                  required
                  className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                  value={formData.inspectedBy}
                  onChange={(e) => setFormData({...formData, inspectedBy: e.target.value})}
                />
              </div>
              <div className="space-y-1">
                <label className="block text-xs font-bold uppercase text-gray-500">Frequency *</label>
                <select 
                  required
                  className="w-full border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none bg-white"
                  value={formData.frequency}
                  onChange={(e) => setFormData({...formData, frequency: e.target.value})}
                >
                  <option value="">Select Frequency</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Quarterly">Quarterly</option>
                </select>
              </div>
            </div>
          </section>

          {/* Checklist Section */}
          <section>
            <div className="bg-[#081C2E] text-white p-2 px-4 mb-4 font-semibold uppercase tracking-wide">
              Fire Prevention Checklist
            </div>
            <div className="overflow-x-auto border border-[#dde3ec] rounded shadow-sm">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#081C2E] text-white">
                    <th className="border border-[#dde3ec] p-2 w-12 text-center">#</th>
                    <th className="border border-[#dde3ec] p-2 text-left">Description</th>
                    <th className="border border-[#dde3ec] p-2 w-16 text-center">Yes</th>
                    <th className="border border-[#dde3ec] p-2 w-16 text-center">No</th>
                    <th className="border border-[#dde3ec] p-2 w-16 text-center">N/A</th>
                    <th className="border border-[#dde3ec] p-2 min-w-[200px]">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {checklistItems.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="border border-[#dde3ec] p-2 text-center font-semibold">{index + 1}</td>
                      <td className="border border-[#dde3ec] p-2">{item}</td>
                      <td className="border border-[#dde3ec] p-2 text-center">
                        <input 
                          type="radio" 
                          name={`item-${index}`} 
                          className="w-4 h-4 accent-[#C49A28]"
                          checked={formData.checklist[index].status === "Yes"}
                          onChange={() => handleChecklistChange(index, "status", "Yes")}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2 text-center">
                        <input 
                          type="radio" 
                          name={`item-${index}`} 
                          className="w-4 h-4 accent-[#C49A28]"
                          checked={formData.checklist[index].status === "No"}
                          onChange={() => handleChecklistChange(index, "status", "No")}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2 text-center">
                        <input 
                          type="radio" 
                          name={`item-${index}`} 
                          className="w-4 h-4 accent-[#C49A28]"
                          checked={formData.checklist[index].status === "N/A"}
                          onChange={() => handleChecklistChange(index, "status", "N/A")}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="text" 
                          className="w-full p-1 border border-transparent focus:border-[#C49A28] outline-none bg-transparent"
                          value={formData.checklist[index].remarks}
                          onChange={(e) => handleChecklistChange(index, "remarks", e.target.value)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Corrective Actions Section */}
          <section>
            <div className="bg-[#081C2E] text-white p-2 px-4 mb-4 font-semibold uppercase tracking-wide flex justify-between items-center">
              <span>Corrective Actions Required</span>
              <button 
                type="button" 
                onClick={addActionRow}
                className="bg-[#C49A28] text-white text-xs py-1 px-3 rounded hover:bg-[#a68221] transition-colors"
              >
                + Add Row
              </button>
            </div>
            <div className="overflow-x-auto border border-[#dde3ec] rounded shadow-sm">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#081C2E] text-white">
                    <th className="border border-[#dde3ec] p-2 w-12 text-center">#</th>
                    <th className="border border-[#dde3ec] p-2">Item</th>
                    <th className="border border-[#dde3ec] p-2">Action Required</th>
                    <th className="border border-[#dde3ec] p-2">Responsible</th>
                    <th className="border border-[#dde3ec] p-2">Due Date</th>
                    <th className="border border-[#dde3ec] p-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.correctiveActions.map((action, index) => (
                    <tr key={index}>
                      <td className="border border-[#dde3ec] p-2 text-center">{index + 1}</td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="text" 
                          className="w-full p-1 outline-none"
                          value={action.item}
                          onChange={(e) => handleActionChange(index, "item", e.target.value)}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="text" 
                          className="w-full p-1 outline-none"
                          value={action.actionRequired}
                          onChange={(e) => handleActionChange(index, "actionRequired", e.target.value)}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="text" 
                          className="w-full p-1 outline-none"
                          value={action.responsible}
                          onChange={(e) => handleActionChange(index, "responsible", e.target.value)}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="date" 
                          className="w-full p-1 outline-none"
                          value={action.dueDate}
                          onChange={(e) => handleActionChange(index, "dueDate", e.target.value)}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <select 
                          className="w-full p-1 outline-none bg-transparent"
                          value={action.status}
                          onChange={(e) => handleActionChange(index, "status", e.target.value)}
                        >
                          <option value="">Select</option>
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
          </section>

          {/* Sign-Off Section */}
          <section>
            <div className="bg-[#081C2E] text-white p-2 px-4 mb-4 font-semibold uppercase tracking-wide">
              Sign-Off
            </div>
            <div className="overflow-x-auto border border-[#dde3ec] rounded shadow-sm">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#081C2E] text-white">
                    <th className="border border-[#dde3ec] p-2 text-left w-1/4">Role</th>
                    <th className="border border-[#dde3ec] p-2 text-left w-1/4">Name</th>
                    <th className="border border-[#dde3ec] p-2 text-left w-1/4">Signature</th>
                    <th className="border border-[#dde3ec] p-2 text-left w-1/4">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[#dde3ec] p-2 bg-gray-50 font-semibold">Inspected By</td>
                    <td className="border border-[#dde3ec] p-2">
                      <input 
                        type="text" 
                        className="w-full p-1 outline-none"
                        value={formData.signOff.inspectedBy.name}
                        onChange={(e) => setFormData({
                          ...formData, 
                          signOff: { ...formData.signOff, inspectedBy: { ...formData.signOff.inspectedBy, name: e.target.value } }
                        })}
                      />
                    </td>
                    <td className="border border-[#dde3ec] p-2">
                      <input 
                        type="text" 
                        placeholder="Full name (acts as signature)"
                        className="w-full p-1 outline-none italic text-gray-500"
                        value={formData.signOff.inspectedBy.signature}
                        onChange={(e) => setFormData({
                          ...formData, 
                          signOff: { ...formData.signOff, inspectedBy: { ...formData.signOff.inspectedBy, signature: e.target.value } }
                        })}
                      />
                    </td>
                    <td className="border border-[#dde3ec] p-2">
                      <input 
                        type="date" 
                        className="w-full p-1 outline-none"
                        value={formData.signOff.inspectedBy.date}
                        onChange={(e) => setFormData({
                          ...formData, 
                          signOff: { ...formData.signOff, inspectedBy: { ...formData.signOff.inspectedBy, date: e.target.value } }
                        })}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#dde3ec] p-2 bg-gray-50 font-semibold">HSE Manager</td>
                    <td className="border border-[#dde3ec] p-2">
                      <input 
                        type="text" 
                        className="w-full p-1 outline-none"
                        value={formData.signOff.hseManager.name}
                        onChange={(e) => setFormData({
                          ...formData, 
                          signOff: { ...formData.signOff, hseManager: { ...formData.signOff.hseManager, name: e.target.value } }
                        })}
                      />
                    </td>
                    <td className="border border-[#dde3ec] p-2">
                      <input 
                        type="text" 
                        placeholder="Full name (acts as signature)"
                        className="w-full p-1 outline-none italic text-gray-500"
                        value={formData.signOff.hseManager.signature}
                        onChange={(e) => setFormData({
                          ...formData, 
                          signOff: { ...formData.signOff, hseManager: { ...formData.signOff.hseManager, signature: e.target.value } }
                        })}
                      />
                    </td>
                    <td className="border border-[#dde3ec] p-2">
                      <input 
                        type="date" 
                        className="w-full p-1 outline-none"
                        value={formData.signOff.hseManager.date}
                        onChange={(e) => setFormData({
                          ...formData, 
                          signOff: { ...formData.signOff, hseManager: { ...formData.signOff.hseManager, date: e.target.value } }
                        })}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Revision History */}
          <section>
            <div className="bg-[#081C2E] text-white p-2 px-4 mb-4 font-semibold uppercase tracking-wide">
              Revision History
            </div>
            <div className="overflow-x-auto border border-[#dde3ec] rounded shadow-sm">
              <table className="w-full border-collapse text-xs">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-[#dde3ec] p-2 w-16">Rev</th>
                    <th className="border border-[#dde3ec] p-2 w-24">Date</th>
                    <th className="border border-[#dde3ec] p-2">Description of Changes</th>
                    <th className="border border-[#dde3ec] p-2 w-32">Author</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[#dde3ec] p-2 text-center">00</td>
                    <td className="border border-[#dde3ec] p-2 text-center">01 Mar 2026</td>
                    <td className="border border-[#dde3ec] p-2">Initial approved release</td>
                    <td className="border border-[#dde3ec] p-2 text-center">Joao Melo</td>
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
              disabled={mutation.isLoading}
              className={`
                px-8 py-3 bg-[#081C2E] text-white font-bold rounded shadow-lg
                hover:bg-[#1a2e3f] transition-all transform hover:-translate-y-1
                disabled:opacity-50 disabled:cursor-not-allowed
                flex items-center space-x-2
              `}
            >
              {mutation.isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
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
