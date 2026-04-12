import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_004() {
  const [submitted, setSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    kitId: "",
    kitType: "",
    location: "",
    department: "",
    inspectionDate: "",
    inspectionFreq: "Monthly",
    tamperSealIntact: "",
    inspectorRemarks: "",
    inspectedByName: "",
    inspectedByDate: "",
    reviewedByName: "",
    reviewedByDate: "",
  });

  const [checklist, setChecklist] = useState([
    { id: 1, category: "A. Wound Care & Dressings", item: "Wound cleaner / antiseptic solution (100 ml)", reqQty: "1", actualQty: "", expiry: "", condition: "", remarks: "" },
    { id: 2, category: "A. Wound Care & Dressings", item: "Swabs for cleaning wounds", reqQty: "10", actualQty: "", expiry: "", condition: "", remarks: "" },
    { id: 3, category: "A. Wound Care & Dressings", item: "Cotton wool for padding (100 g)", reqQty: "1", actualQty: "", expiry: "", condition: "", remarks: "" },
    { id: 4, category: "A. Wound Care & Dressings", item: "Sterile gauze pads (assorted sizes)", reqQty: "10", actualQty: "", expiry: "", condition: "", remarks: "" },
    { id: 5, category: "A. Wound Care & Dressings", item: "Adhesive dressing strips (assorted, packet)", reqQty: "1", actualQty: "", expiry: "", condition: "", remarks: "" },
    { id: 6, category: "A. Wound Care & Dressings", item: "Non-allergic adhesive strip (25 mm x 3 m)", reqQty: "1", actualQty: "", expiry: "", condition: "", remarks: "" },
    { id: 7, category: "A. Wound Care & Dressings", item: "Elastic adhesive roll (25 mm x 3 m)", reqQty: "1", actualQty: "", expiry: "", condition: "", remarks: "" },
    { id: 8, category: "A. Wound Care & Dressings", item: "First aid dressing No. 3 (medium)", reqQty: "2", actualQty: "", expiry: "", condition: "", remarks: "" },
    { id: 9, category: "A. Wound Care & Dressings", item: "First aid dressing No. 5 (large)", reqQty: "2", actualQty: "", expiry: "", condition: "", remarks: "" },
    { id: 10, category: "A. Wound Care & Dressings", item: "Roller bandage 75 mm x 5 m", reqQty: "4", actualQty: "", expiry: "", condition: "", remarks: "" },
    { id: 11, category: "A. Wound Care & Dressings", item: "Roller bandage 100 mm x 5 m", reqQty: "4", actualQty: "", expiry: "", condition: "", remarks: "" },
    { id: 12, category: "A. Wound Care & Dressings", item: "Triangular bandages", reqQty: "4", actualQty: "", expiry: "", condition: "", remarks: "" },
    { id: 13, category: "B. Burn & Eye Treatment", item: "Burn gel / hydrogel dressing", reqQty: "2", actualQty: "", expiry: "", condition: "", remarks: "" },
    { id: 14, category: "B. Burn & Eye Treatment", item: "Sterile burn sheet (10 x 10 cm)", reqQty: "1", actualQty: "", expiry: "", condition: "", remarks: "" },
    { id: 15, category: "B. Burn & Eye Treatment", item: "Eye pad with shield or tape", reqQty: "2", actualQty: "", expiry: "", condition: "", remarks: "" },
    { id: 16, category: "B. Burn & Eye Treatment", item: "Saline eye wash bottle (500 ml)", reqQty: "1", actualQty: "", expiry: "", condition: "", remarks: "" },
    { id: 17, category: "C. Instruments & Accessories", item: "Scissors (minimum 100 mm, blunt/sharp)", reqQty: "1", actualQty: "", expiry: "", condition: "", remarks: "" },
    { id: 18, category: "C. Instruments & Accessories", item: "Forceps / tweezers (for splinters)", reqQty: "1", actualQty: "", expiry: "", condition: "", remarks: "" },
    { id: 19, category: "C. Instruments & Accessories", item: "Safety pins (set)", reqQty: "1", actualQty: "", expiry: "", condition: "", remarks: "" },
    { id: 20, category: "C. Instruments & Accessories", item: "Adhesive tape roll (25 mm)", reqQty: "1", actualQty: "", expiry: "", condition: "", remarks: "" },
    { id: 21, category: "C. Instruments & Accessories", item: "SAM splint (or equivalent flexible splint)", reqQty: "2", actualQty: "", expiry: "", condition: "", remarks: "" },
    { id: 22, category: "C. Instruments & Accessories", item: "Biohazard disposal bag", reqQty: "2", actualQty: "", expiry: "", condition: "", remarks: "" },
    { id: 23, category: "D. Protection & Resuscitation", item: "Disposable nitrile gloves (pairs, L & M)", reqQty: "4", actualQty: "", expiry: "", condition: "", remarks: "" },
    { id: 24, category: "D. Protection & Resuscitation", item: "CPR pocket mask / face shield", reqQty: "1", actualQty: "", expiry: "", condition: "", remarks: "" },
    { id: 25, category: "D. Protection & Resuscitation", item: "Rescue / emergency blanket (foil)", reqQty: "1", actualQty: "", expiry: "", condition: "", remarks: "" },
    { id: 26, category: "D. Protection & Resuscitation", item: "Emergency contact card / first aid guide", reqQty: "1", actualQty: "", expiry: "", condition: "", remarks: "" },
    { id: 27, category: "E. KSA / Site-Specific — Heat & Remote Operations", item: "Oral Rehydration Salts (ORS) sachets", reqQty: "6", actualQty: "", expiry: "", condition: "", remarks: "" },
    { id: 28, category: "E. KSA / Site-Specific — Heat & Remote Operations", item: "Instant cold / cooling packs", reqQty: "4", actualQty: "", expiry: "", condition: "", remarks: "" },
    { id: 29, category: "E. KSA / Site-Specific — Heat & Remote Operations", item: "Thermal blanket (for heat casualty cooling)", reqQty: "1", actualQty: "", expiry: "", condition: "", remarks: "" },
    { id: 30, category: "E. KSA / Site-Specific — Heat & Remote Operations", item: "Tourniquet (CAT or equivalent)", reqQty: "1", actualQty: "", expiry: "", condition: "", remarks: "" },
    { id: 31, category: "E. KSA / Site-Specific — Heat & Remote Operations", item: "Pressure / Israeli bandage (emergency)", reqQty: "1", actualQty: "", expiry: "", condition: "", remarks: "" },
    { id: 32, category: "E. KSA / Site-Specific — Heat & Remote Operations", item: "Straight splints (rigid)", reqQty: "2", actualQty: "", expiry: "", condition: "", remarks: "" },
    { id: 33, category: "E. KSA / Site-Specific — Heat & Remote Operations", item: "Sunscreen SPF 50+ (individual sachets)", reqQty: "4", actualQty: "", expiry: "", condition: "", remarks: "" },
  ]);

  const [incidentLog, setIncidentLog] = useState([
    { date: "", injuryType: "", aidGiven: "", itemsUsed: "", person: "", aider: "", investigation: "", refNo: "" }
  ]);

  const submitMutation = trpc.formSubmissions.submit.useMutation({
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

  const handleChecklistChange = (index: number, field: string, value: string) => {
    const updated = [...checklist];
    updated[index] = { ...updated[index], [field]: value };
    setChecklist(updated);
  };

  const handleIncidentChange = (index: number, field: string, value: string) => {
    const updated = [...incidentLog];
    updated[index] = { ...updated[index], [field]: value };
    setIncidentLog(updated);
  };

  const addIncidentRow = () => {
    setIncidentLog([...incidentLog, { date: "", injuryType: "", aidGiven: "", itemsUsed: "", person: "", aider: "", investigation: "", refNo: "" }]);
  };

  const removeIncidentRow = (index: number) => {
    if (incidentLog.length > 1) {
      setIncidentLog(incidentLog.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const headers = [
      "Kit ID", "Kit Type", "Location", "Department", "Inspection Date", "Inspection Frequency",
      ...checklist.flatMap(item => [
        `${item.item} - Actual Qty`,
        `${item.item} - Expiry`,
        `${item.item} - Condition`,
        `${item.item} - Remarks`
      ]),
      "Tamper Seal Intact",
      "Inspector Remarks",
      "Inspected By Name", "Inspected By Date",
      "Reviewed By Name", "Reviewed By Date",
      "Incident Log Data"
    ];

    const values = [
      formData.kitId, formData.kitType, formData.location, formData.department, formData.inspectionDate, formData.inspectionFreq,
      ...checklist.flatMap(item => [item.actualQty, item.expiry, item.condition, item.remarks]),
      formData.tamperSealIntact,
      formData.inspectorRemarks,
      formData.inspectedByName, formData.inspectedByDate,
      formData.reviewedByName, formData.reviewedByDate,
      JSON.stringify(incidentLog)
    ];

    submitMutation.mutate({
      formCode: "TE-IMS-FRM-HSE-004",
      headers,
      values
    });
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 text-center">
          <h2 className="text-2xl font-bold text-[#081C2E] mb-4">Form submitted successfully.</h2>
          <p className="mb-6">Your inspection report has been recorded.</p>
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

  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-[#f4f6f9] min-h-screen">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-[#081C2E] hover:underline">Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-400">FRM</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-[#081C2E] font-semibold">First Aid Kit Register and Checklist</span>
        </nav>

        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg overflow-hidden border border-[#dde3ec]">
          {/* Header Strip */}
          <div className="bg-[#081C2E] text-white p-4">
            <h1 className="text-xl font-bold">FIRST AID KIT REGISTER AND CHECKLIST</h1>
          </div>

          {/* Document Control Table */}
          <div className="p-4 border-b border-[#dde3ec] bg-gray-50">
            <table className="w-full text-sm border-collapse border border-[#dde3ec]">
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
                  <td className="border border-[#dde3ec] p-2">TE-IMS-FRM-HSE-004</td>
                  <td className="border border-[#dde3ec] p-2">01</td>
                  <td className="border border-[#dde3ec] p-2">April 2026</td>
                  <td className="border border-[#dde3ec] p-2">Approved for Implementation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-6 space-y-8">
            {/* 1. Kit Identification */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-1 mb-4 font-semibold uppercase tracking-wider text-sm">
                1. Kit Identification
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Kit ID / Number *</label>
                  <input 
                    type="text" 
                    name="kitId"
                    required
                    value={formData.kitId}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Kit Type *</label>
                  <div className="flex items-center space-x-4 p-2">
                    {["Fixed", "Vehicle", "Portable"].map(type => (
                      <label key={type} className="flex items-center space-x-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="kitType" 
                          value={type}
                          checked={formData.kitType === type}
                          onChange={handleInputChange}
                          required
                          className="text-[#C49A28] focus:ring-[#C49A28]"
                        />
                        <span className="text-sm">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Location *</label>
                  <input 
                    type="text" 
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Department / Site *</label>
                  <input 
                    type="text" 
                    name="department"
                    required
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Inspection Date *</label>
                  <input 
                    type="date" 
                    name="inspectionDate"
                    required
                    value={formData.inspectionDate}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Inspection Freq</label>
                  <input 
                    type="text" 
                    name="inspectionFreq"
                    readOnly
                    value={formData.inspectionFreq}
                    className="w-full p-2 border border-[#dde3ec] rounded bg-gray-50 text-gray-500"
                  />
                </div>
              </div>
            </section>

            {/* 2. Checklist */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-1 mb-2 font-semibold uppercase tracking-wider text-sm">
                2. First Aid Kit Contents — Inspection Checklist
              </div>
              <p className="text-xs text-gray-600 mb-4 italic">
                Inspect all items. Record actual quantity, expiry date (where applicable), and condition. Mark any item requiring action in the Remarks column.
                <br />
                <strong>Condition Key:</strong> OK = Serviceable | R = Replace | E = Expired | D = Damaged | M = Missing
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse border border-[#dde3ec]">
                  <thead>
                    <tr className="bg-[#081C2E] text-white">
                      <th className="border border-[#dde3ec] p-2 text-center w-10">#</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Item Description</th>
                      <th className="border border-[#dde3ec] p-2 text-center w-16">Req. Qty</th>
                      <th className="border border-[#dde3ec] p-2 text-center w-20">Actual Qty</th>
                      <th className="border border-[#dde3ec] p-2 text-center w-32">Expiry Date</th>
                      <th className="border border-[#dde3ec] p-2 text-center w-24">Condition</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {checklist.map((item, idx) => {
                      const showCategory = idx === 0 || checklist[idx - 1].category !== item.category;
                      return (
                        <tr key={item.id} className="hover:bg-gray-50">
                          {showCategory && (
                            <td colSpan={7} className="bg-gray-100 font-bold p-2 border border-[#dde3ec] text-[#081C2E]">
                              {item.category}
                            </td>
                          )}
                          <td className="border border-[#dde3ec] p-2 text-center">{item.id}</td>
                          <td className="border border-[#dde3ec] p-2">{item.item}</td>
                          <td className="border border-[#dde3ec] p-2 text-center bg-gray-50">{item.reqQty}</td>
                          <td className="border border-[#dde3ec] p-1">
                            <input 
                              type="number" 
                              value={item.actualQty}
                              onChange={(e) => handleChecklistChange(idx, "actualQty", e.target.value)}
                              className="w-full p-1 border border-transparent focus:border-[#C49A28] outline-none text-center"
                            />
                          </td>
                          <td className="border border-[#dde3ec] p-1">
                            <input 
                              type="date" 
                              value={item.expiry}
                              onChange={(e) => handleChecklistChange(idx, "expiry", e.target.value)}
                              className="w-full p-1 border border-transparent focus:border-[#C49A28] outline-none text-xs"
                            />
                          </td>
                          <td className="border border-[#dde3ec] p-1">
                            <select 
                              value={item.condition}
                              onChange={(e) => handleChecklistChange(idx, "condition", e.target.value)}
                              className="w-full p-1 border border-transparent focus:border-[#C49A28] outline-none text-xs"
                            >
                              <option value="">Select</option>
                              <option value="OK">OK</option>
                              <option value="R">R</option>
                              <option value="E">E</option>
                              <option value="D">D</option>
                              <option value="M">M</option>
                            </select>
                          </td>
                          <td className="border border-[#dde3ec] p-1">
                            <input 
                              type="text" 
                              value={item.remarks}
                              onChange={(e) => handleChecklistChange(idx, "remarks", e.target.value)}
                              className="w-full p-1 border border-transparent focus:border-[#C49A28] outline-none"
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 3. Tamper-Evident Seal */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-1 mb-4 font-semibold uppercase tracking-wider text-sm">
                3. Tamper-Evident Seal
              </div>
              <div className="flex items-center space-x-6 p-4 border border-[#dde3ec] rounded bg-gray-50">
                <span className="text-sm font-medium text-gray-700">Tamper-evident seal intact? *</span>
                <div className="flex items-center space-x-4">
                  {["Yes", "No", "N/A"].map(option => (
                    <label key={option} className="flex items-center space-x-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="tamperSealIntact" 
                        value={option}
                        checked={formData.tamperSealIntact === option}
                        onChange={handleInputChange}
                        required
                        className="text-[#C49A28] focus:ring-[#C49A28]"
                      />
                      <span className="text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </section>

            {/* 4. Incident Log */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-1 mb-2 font-semibold uppercase tracking-wider text-sm">
                4. Incident Log
              </div>
              <p className="text-xs text-gray-600 mb-4 italic">
                Record all first aid incidents where items from this kit were used. Reference the corresponding investigation report number where applicable.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse border border-[#dde3ec]">
                  <thead>
                    <tr className="bg-[#081C2E] text-white">
                      <th className="border border-[#dde3ec] p-2 text-left">Date</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Injury Type</th>
                      <th className="border border-[#dde3ec] p-2 text-left">First Aid Given</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Items Used</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Injured Person</th>
                      <th className="border border-[#dde3ec] p-2 text-left">First Aider</th>
                      <th className="border border-[#dde3ec] p-2 text-center">Inv. Y/N</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Ref. No.</th>
                      <th className="border border-[#dde3ec] p-2 text-center w-10"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {incidentLog.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="border border-[#dde3ec] p-1"><input type="date" value={row.date} onChange={(e) => handleIncidentChange(idx, "date", e.target.value)} className="w-full p-1 border-none focus:ring-0 text-xs" /></td>
                        <td className="border border-[#dde3ec] p-1"><input type="text" value={row.injuryType} onChange={(e) => handleIncidentChange(idx, "injuryType", e.target.value)} className="w-full p-1 border-none focus:ring-0" /></td>
                        <td className="border border-[#dde3ec] p-1"><input type="text" value={row.aidGiven} onChange={(e) => handleIncidentChange(idx, "aidGiven", e.target.value)} className="w-full p-1 border-none focus:ring-0" /></td>
                        <td className="border border-[#dde3ec] p-1"><input type="text" value={row.itemsUsed} onChange={(e) => handleIncidentChange(idx, "itemsUsed", e.target.value)} className="w-full p-1 border-none focus:ring-0" /></td>
                        <td className="border border-[#dde3ec] p-1"><input type="text" value={row.person} onChange={(e) => handleIncidentChange(idx, "person", e.target.value)} className="w-full p-1 border-none focus:ring-0" /></td>
                        <td className="border border-[#dde3ec] p-1"><input type="text" value={row.aider} onChange={(e) => handleIncidentChange(idx, "aider", e.target.value)} className="w-full p-1 border-none focus:ring-0" /></td>
                        <td className="border border-[#dde3ec] p-1">
                          <select value={row.investigation} onChange={(e) => handleIncidentChange(idx, "investigation", e.target.value)} className="w-full p-1 border-none focus:ring-0 text-xs">
                            <option value="">-</option>
                            <option value="Y">Y</option>
                            <option value="N">N</option>
                          </select>
                        </td>
                        <td className="border border-[#dde3ec] p-1"><input type="text" value={row.refNo} onChange={(e) => handleIncidentChange(idx, "refNo", e.target.value)} className="w-full p-1 border-none focus:ring-0" /></td>
                        <td className="border border-[#dde3ec] p-2 text-center">
                          <button type="button" onClick={() => removeIncidentRow(idx)} className="text-red-500 hover:text-red-700 font-bold">×</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button 
                type="button" 
                onClick={addIncidentRow}
                className="mt-2 text-sm text-[#C49A28] font-semibold hover:underline"
              >
                + Add Incident Row
              </button>
            </section>

            {/* 5. Inspector Remarks */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-1 mb-4 font-semibold uppercase tracking-wider text-sm">
                5. Inspector Remarks
              </div>
              <textarea 
                name="inspectorRemarks"
                value={formData.inspectorRemarks}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-3 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                placeholder="Enter any additional findings or required actions..."
              ></textarea>
            </section>

            {/* 6. Sign-Off */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-1 mb-4 font-semibold uppercase tracking-wider text-sm">
                6. Sign-Off
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border border-[#dde3ec] rounded bg-gray-50 space-y-3">
                  <h3 className="font-bold text-[#081C2E] text-sm">Inspected By (First Aider)</h3>
                  <div className="space-y-2">
                    <input 
                      type="text" 
                      name="inspectedByName"
                      required
                      value={formData.inspectedByName}
                      onChange={handleInputChange}
                      placeholder="Full Name (Acts as Signature) *"
                      className="w-full p-2 border border-[#dde3ec] rounded bg-white"
                    />
                    <input 
                      type="date" 
                      name="inspectedByDate"
                      required
                      value={formData.inspectedByDate}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-[#dde3ec] rounded bg-white"
                    />
                  </div>
                </div>
                <div className="p-4 border border-[#dde3ec] rounded bg-gray-50 space-y-3">
                  <h3 className="font-bold text-[#081C2E] text-sm">Reviewed By (HSE Officer)</h3>
                  <div className="space-y-2">
                    <input 
                      type="text" 
                      name="reviewedByName"
                      required
                      value={formData.reviewedByName}
                      onChange={handleInputChange}
                      placeholder="Full Name (Acts as Signature) *"
                      className="w-full p-2 border border-[#dde3ec] rounded bg-white"
                    />
                    <input 
                      type="date" 
                      name="reviewedByDate"
                      required
                      value={formData.reviewedByDate}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-[#dde3ec] rounded bg-white"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end pt-6">
              <button
                type="submit"
                disabled={submitMutation.isPending}
                className="bg-[#081C2E] text-white px-10 py-3 rounded-lg font-bold hover:bg-[#12314d] transition-colors disabled:bg-gray-400 flex items-center space-x-2"
              >
                {submitMutation.isPending ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>Submit Inspection Report</span>
                )}
              </button>
            </div>
          </div>
        </form>

        {/* Revision History */}
        <div className="mt-12 mb-8 overflow-x-auto">
          <h3 className="text-lg font-bold text-[#081C2E] mb-4">7. Revision History</h3>
          <table className="w-full text-xs border-collapse border border-[#dde3ec] bg-white">
            <thead>
              <tr className="bg-[#081C2E] text-white">
                <th className="border border-[#dde3ec] p-2 text-center w-12">Rev</th>
                <th className="border border-[#dde3ec] p-2 text-center w-24">Date</th>
                <th className="border border-[#dde3ec] p-2 text-left">Description of Changes</th>
                <th className="border border-[#dde3ec] p-2 text-left w-24">Author</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#dde3ec] p-2 text-center">00</td>
                <td className="border border-[#dde3ec] p-2 text-center">—</td>
                <td className="border border-[#dde3ec] p-2">Initial release — 21 items, flat checklist, basic incident log</td>
                <td className="border border-[#dde3ec] p-2">True East</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-[#dde3ec] p-2 text-center font-bold">01</td>
                <td className="border border-[#dde3ec] p-2 text-center font-bold">April 2026</td>
                <td className="border border-[#dde3ec] p-2 font-bold">Expanded to 33 items across 5 categories. Added kit identification, expiry tracking, quantity columns, condition scoring, KSA heat-specific items, tamper seal check, improved incident log with reference number, dual sign-off.</td>
                <td className="border border-[#dde3ec] p-2 font-bold">True East</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
