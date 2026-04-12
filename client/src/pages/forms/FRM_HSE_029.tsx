import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_029() {
  const [submitted, setSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    siteLocation: "",
    weekEnding: "",
    inspectorName: "",
    // PPE Inspection Items
    items: Array(30).fill(null).map((_, i) => ({
      id: i + 1,
      status: "", // Y, N, N/A
      comment: ""
    })),
    // Corrective Actions
    actions: [{ id: 1, issue: "", action: "", responsible: "", targetDate: "", status: "" }],
    // Sign-off
    inspectorSign: "",
    inspectorDate: "",
    hseOfficerSign: "",
    hseOfficerDate: "",
    siteSupervisorSign: "",
    siteSupervisorDate: ""
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleItemChange = (index: number, field: string, value: string) => {
    const newItems = [...formData.items];
    newItems[index] = { ...newItems[index], [field]: value };
    setFormData(prev => ({ ...prev, items: newItems }));
  };

  const handleActionChange = (index: number, field: string, value: string) => {
    const newActions = [...formData.actions];
    newActions[index] = { ...newActions[index], [field]: value };
    setFormData(prev => ({ ...prev, actions: newActions }));
  };

  const addActionRow = () => {
    setFormData(prev => ({
      ...prev,
      actions: [...prev.actions, { id: prev.actions.length + 1, issue: "", action: "", responsible: "", targetDate: "", status: "" }]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const headers = [
      "Site / Location",
      "Week Ending (Date)",
      "Inspector Name / Role",
      ...formData.items.flatMap((item, i) => [
        `Item ${i + 1} Status`,
        `Item ${i + 1} Comment`
      ]),
      "Corrective Actions JSON",
      "Inspector Signature",
      "Inspector Date",
      "HSE Officer Signature",
      "HSE Officer Date",
      "Site Supervisor Signature",
      "Site Supervisor Date"
    ];

    const values = [
      formData.siteLocation,
      formData.weekEnding,
      formData.inspectorName,
      ...formData.items.flatMap(item => [item.status, item.comment]),
      JSON.stringify(formData.actions),
      formData.inspectorSign,
      formData.inspectorDate,
      formData.hseOfficerSign,
      formData.hseOfficerDate,
      formData.siteSupervisorSign,
      formData.siteSupervisorDate
    ];

    mutation.mutate({
      formCode: "TE-IMS-FRM-HSE-029",
      headers,
      values
    });
  };

  const inspectionItems = [
    { section: "A. PPE Program", items: [
      "Hazard assessment complete and documented",
      "PPE selection based upon hazard assessment",
      "Review of employee-owned PPE complete",
      "Defective or damaged PPE not in use",
      "Training on PPE use complete and documented"
    ]},
    { section: "B. Eye and Face Protection", items: [
      "Eye/face protection appropriate to the hazard used",
      "Side protectors used where flying objects hazards are found",
      "Eye protection incorporates prescription or can be worn without disturbing prescription lenses",
      "Filter lenses with appropriate shade number available where work involves injurious light radiation",
      "Maintained per manufacturer's recommendations"
    ]},
    { section: "C. Head Protection", items: [
      "Hard hats used where potential for head injury from falling objects",
      "Hard hats used where potential for head injury from exposed electrical conductors",
      "Maintained per manufacturer's recommendations"
    ]},
    { section: "D. Foot Protection", items: [
      "Appropriate for protection from falling or rolling objects",
      "Appropriate for protection from objects piercing the sole",
      "Appropriate for protection from exposed electrical conductors",
      "Maintained per manufacturer's recommendations"
    ]},
    { section: "E. Hand Protection", items: [
      "Hand protection appropriate to the hazard",
      "Maintained per manufacturer's recommendations"
    ]},
    { section: "F. Hearing Protection", items: [
      "Hearing protection available in high-noise areas (>85 dB)",
      "Correct type used (earplugs / earmuffs) for noise level",
      "Maintained and replaced per schedule"
    ]},
    { section: "G. Respiratory Protection", items: [
      "Respiratory protection available for dust/fume/gas exposure",
      "Correct type and filter for contaminant",
      "Fit testing completed and documented"
    ]},
    { section: "H. Heat Stress / High-Visibility / General", items: [
      "Appropriate PPE available for hot work (cutting, welding, brazing)",
      "Clothing and shoes worn appropriate for tasks being performed",
      "Reflective vests used where appropriate",
      "Barricades / warning signs used where appropriate",
      "Heat stress prevention measures in place (cooling vests, hydration)"
    ]}
  ];

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 text-center">
          <h2 className="text-2xl font-bold text-[#081C2E] mb-4">Form Submitted Successfully</h2>
          <p className="mb-6">The PPE Weekly Inspection Checklist has been recorded.</p>
          <a 
            href={sheetUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#C49A28] text-white px-6 py-2 rounded hover:bg-[#a38021] transition-colors"
          >
            View Register (Google Sheet)
          </a>
          <div className="mt-8">
            <Link href="/" className="text-[#081C2E] hover:underline">← Return to Portal Home</Link>
          </div>
        </div>
      </Layout>
    );
  }

  let globalItemIndex = 0;

  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-6 bg-[#f4f6f9]">
        <div className="mb-6">
          <Link href="/" className="text-[#081C2E] hover:underline font-semibold">← Portal Home</Link>
          <div className="text-sm text-gray-600 mt-2">Portal Home &gt; FRM &gt; PPE Weekly Inspection Checklist</div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-[#dde3ec]">
          {/* Document Control Header */}
          <div className="p-4 border-b border-[#dde3ec] bg-gray-50">
            <table className="w-full text-sm">
              <tbody>
                <tr>
                  <td className="font-bold w-24">Document:</td>
                  <td>TE-IMS-FRM-HSE-029_Rev01</td>
                  <td className="font-bold w-24">Revision:</td>
                  <td>Rev01</td>
                </tr>
                <tr>
                  <td className="font-bold">Date:</td>
                  <td>April 2026</td>
                  <td className="font-bold">Status:</td>
                  <td>Approved for Implementation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-[#081C2E] text-white p-4 text-center">
            <h1 className="text-xl font-bold tracking-wider">PPE WEEKLY INSPECTION CHECKLIST</h1>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-8">
            {/* Inspection Details */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-1 mb-4 font-semibold uppercase text-sm">
                INSPECTION DETAILS
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-1">Site / Location *</label>
                  <input 
                    type="text" 
                    name="siteLocation" 
                    required 
                    className="w-full border border-[#dde3ec] p-2 rounded"
                    value={formData.siteLocation}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Week Ending (Date) *</label>
                  <input 
                    type="date" 
                    name="weekEnding" 
                    required 
                    className="w-full border border-[#dde3ec] p-2 rounded"
                    value={formData.weekEnding}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Inspector Name / Role *</label>
                  <input 
                    type="text" 
                    name="inspectorName" 
                    required 
                    className="w-full border border-[#dde3ec] p-2 rounded"
                    value={formData.inspectorName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </section>

            {/* PPE Inspection Checklist */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-1 mb-4 font-semibold uppercase text-sm">
                PPE INSPECTION CHECKLIST
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[#dde3ec] text-sm">
                  <thead>
                    <tr className="bg-[#081C2E] text-white">
                      <th className="border border-[#dde3ec] p-2 w-12 text-center">#</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Inspection Item</th>
                      <th className="border border-[#dde3ec] p-2 w-12 text-center">Y</th>
                      <th className="border border-[#dde3ec] p-2 w-12 text-center">N</th>
                      <th className="border border-[#dde3ec] p-2 w-12 text-center">N/A</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Comments</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inspectionItems.map((section, sIdx) => (
                      <React.Fragment key={sIdx}>
                        <tr className="bg-gray-100 font-bold">
                          <td colSpan={6} className="border border-[#dde3ec] p-2">{section.section}</td>
                        </tr>
                        {section.items.map((itemText, iIdx) => {
                          const currentIndex = globalItemIndex++;
                          return (
                            <tr key={iIdx} className="hover:bg-gray-50">
                              <td className="border border-[#dde3ec] p-2 text-center">{currentIndex + 1}</td>
                              <td className="border border-[#dde3ec] p-2">{itemText}</td>
                              <td className="border border-[#dde3ec] p-2 text-center">
                                <input 
                                  type="radio" 
                                  name={`item-${currentIndex}`} 
                                  checked={formData.items[currentIndex].status === "Y"}
                                  onChange={() => handleItemChange(currentIndex, "status", "Y")}
                                />
                              </td>
                              <td className="border border-[#dde3ec] p-2 text-center">
                                <input 
                                  type="radio" 
                                  name={`item-${currentIndex}`} 
                                  checked={formData.items[currentIndex].status === "N"}
                                  onChange={() => handleItemChange(currentIndex, "status", "N")}
                                />
                              </td>
                              <td className="border border-[#dde3ec] p-2 text-center">
                                <input 
                                  type="radio" 
                                  name={`item-${currentIndex}`} 
                                  checked={formData.items[currentIndex].status === "N/A"}
                                  onChange={() => handleItemChange(currentIndex, "status", "N/A")}
                                />
                              </td>
                              <td className="border border-[#dde3ec] p-2">
                                <input 
                                  type="text" 
                                  className="w-full border-none focus:ring-0 p-0 text-sm"
                                  placeholder="Add comment..."
                                  value={formData.items[currentIndex].comment}
                                  onChange={(e) => handleItemChange(currentIndex, "comment", e.target.value)}
                                />
                              </td>
                            </tr>
                          );
                        })}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Corrective Actions */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-1 mb-4 font-semibold uppercase text-sm flex justify-between items-center">
                <span>CORRECTIVE ACTIONS REQUIRED</span>
                <button 
                  type="button" 
                  onClick={addActionRow}
                  className="bg-[#C49A28] text-white text-xs px-2 py-1 rounded hover:bg-[#a38021]"
                >
                  + Add Row
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[#dde3ec] text-sm">
                  <thead>
                    <tr className="bg-[#081C2E] text-white">
                      <th className="border border-[#dde3ec] p-2 w-12 text-center">No.</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Issue / Non-Conformance</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Action Required</th>
                      <th className="border border-[#dde3ec] p-2 text-left w-32">Responsible</th>
                      <th className="border border-[#dde3ec] p-2 text-left w-32">Target Date</th>
                      <th className="border border-[#dde3ec] p-2 text-left w-24">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.actions.map((action, index) => (
                      <tr key={index}>
                        <td className="border border-[#dde3ec] p-2 text-center">{index + 1}</td>
                        <td className="border border-[#dde3ec] p-2">
                          <input 
                            type="text" 
                            className="w-full border-none focus:ring-0 p-0"
                            value={action.issue}
                            onChange={(e) => handleActionChange(index, "issue", e.target.value)}
                          />
                        </td>
                        <td className="border border-[#dde3ec] p-2">
                          <input 
                            type="text" 
                            className="w-full border-none focus:ring-0 p-0"
                            value={action.action}
                            onChange={(e) => handleActionChange(index, "action", e.target.value)}
                          />
                        </td>
                        <td className="border border-[#dde3ec] p-2">
                          <input 
                            type="text" 
                            className="w-full border-none focus:ring-0 p-0"
                            value={action.responsible}
                            onChange={(e) => handleActionChange(index, "responsible", e.target.value)}
                          />
                        </td>
                        <td className="border border-[#dde3ec] p-2">
                          <input 
                            type="date" 
                            className="w-full border-none focus:ring-0 p-0"
                            value={action.targetDate}
                            onChange={(e) => handleActionChange(index, "targetDate", e.target.value)}
                          />
                        </td>
                        <td className="border border-[#dde3ec] p-2">
                          <select 
                            className="w-full border-none focus:ring-0 p-0 bg-transparent"
                            value={action.status}
                            onChange={(e) => handleActionChange(index, "status", e.target.value)}
                          >
                            <option value="">Select</option>
                            <option value="Open">Open</option>
                            <option value="Closed">Closed</option>
                            <option value="Pending">Pending</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Sign-off */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-1 mb-4 font-semibold uppercase text-sm">
                SIGN-OFF
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[#dde3ec] text-sm">
                  <thead>
                    <tr className="bg-[#081C2E] text-white">
                      <th className="border border-[#dde3ec] p-2 text-left">Role</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Name (Signature) *</th>
                      <th className="border border-[#dde3ec] p-2 text-left w-48">Date *</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-[#dde3ec] p-2 font-bold bg-gray-50">Inspector</td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="text" 
                          required 
                          placeholder="Full name acts as signature"
                          className="w-full border-none focus:ring-0 p-0"
                          name="inspectorSign"
                          value={formData.inspectorSign}
                          onChange={handleInputChange}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="date" 
                          required 
                          className="w-full border-none focus:ring-0 p-0"
                          name="inspectorDate"
                          value={formData.inspectorDate}
                          onChange={handleInputChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#dde3ec] p-2 font-bold bg-gray-50">HSE Officer</td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="text" 
                          required 
                          placeholder="Full name acts as signature"
                          className="w-full border-none focus:ring-0 p-0"
                          name="hseOfficerSign"
                          value={formData.hseOfficerSign}
                          onChange={handleInputChange}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="date" 
                          required 
                          className="w-full border-none focus:ring-0 p-0"
                          name="hseOfficerDate"
                          value={formData.hseOfficerDate}
                          onChange={handleInputChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#dde3ec] p-2 font-bold bg-gray-50">Site Supervisor</td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="text" 
                          required 
                          placeholder="Full name acts as signature"
                          className="w-full border-none focus:ring-0 p-0"
                          name="siteSupervisorSign"
                          value={formData.siteSupervisorSign}
                          onChange={handleInputChange}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="date" 
                          required 
                          className="w-full border-none focus:ring-0 p-0"
                          name="siteSupervisorDate"
                          value={formData.siteSupervisorDate}
                          onChange={handleInputChange}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded">
                {error}
              </div>
            )}

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={mutation.isPending}
                className="bg-[#081C2E] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#112a41] transition-colors disabled:opacity-50"
              >
                {mutation.isPending ? "Submitting..." : "Submit Inspection Report"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

import React from "react";
