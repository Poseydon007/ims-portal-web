import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_031() {
  const [submitted, setSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    inspectionType: {
      safetyHarness: false,
      monthlySafety: false,
      other: false,
      otherText: "",
    },
    equipmentCategory: {
      drilling: false,
      vehicles: false,
      lifting: false,
      electrical: false,
      other: false,
    },
    siteLocation: "",
    inspectorName: "",
    year: "",
    inspectionFrequency: {
      daily: false,
      weekly: false,
      monthly: false,
      quarterly: false,
    },
    items: Array.from({ length: 25 }, (_, i) => ({
      id: i + 1,
      description: "",
      jan: "", feb: "", mar: "", apr: "", may: "", jun: "",
      jul: "", aug: "", sep: "", oct: "", nov: "", dec: ""
    })),
    deviations: Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      date: "",
      description: "",
      followUp: "",
      responsible: "",
      targetDate: "",
      severity: "",
      completion: ""
    })),
    comments: "",
    signOff: {
      hseRep: { name: "", signature: "", date: "" },
      hseChair: { name: "", signature: "", date: "" },
      siteSupervisor: { name: "", signature: "", date: "" },
      hseManager: { name: "", signature: "", date: "" },
    }
  });

  const mutation = trpc.formSubmissions.submit.useMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement;
      const [section, field] = name.split(".");
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...(prev[section as keyof typeof prev] as any),
          [field]: checkbox.checked
        }
      }));
    } else if (name.includes(".")) {
      const [section, field] = name.split(".");
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...(prev[section as keyof typeof prev] as any),
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleItemChange = (index: number, field: string, value: string) => {
    const newItems = [...formData.items];
    newItems[index] = { ...newItems[index], [field]: value };
    setFormData(prev => ({ ...prev, items: newItems }));
  };

  const handleDeviationChange = (index: number, field: string, value: string) => {
    const newDeviations = [...formData.deviations];
    newDeviations[index] = { ...newDeviations[index], [field]: value };
    setFormData(prev => ({ ...prev, deviations: newDeviations }));
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
    setError(null);

    const headers = [
      "Form Code", "Inspection Type", "Other Type", "Equipment Category", "Site/Location", "Inspector Name", "Year", "Inspection Frequency",
      ...formData.items.flatMap(item => [`Item ${item.id} Desc`, `Item ${item.id} JAN`, `Item ${item.id} FEB`, `Item ${item.id} MAR`, `Item ${item.id} APR`, `Item ${item.id} MAY`, `Item ${item.id} JUN`, `Item ${item.id} JUL`, `Item ${item.id} AUG`, `Item ${item.id} SEP`, `Item ${item.id} OCT`, `Item ${item.id} NOV`, `Item ${item.id} DEC`]),
      ...formData.deviations.flatMap(dev => [`Dev ${dev.id} Date`, `Dev ${dev.id} Desc`, `Dev ${dev.id} Follow-up`, `Dev ${dev.id} Resp`, `Dev ${dev.id} Target`, `Dev ${dev.id} Severity`, `Dev ${dev.id} Completion`]),
      "Comments", "HSE Rep Name", "HSE Rep Date", "HSE Chair Name", "HSE Chair Date", "Site Supervisor Name", "Site Supervisor Date", "HSE Manager Name", "HSE Manager Date"
    ];

    const values = [
      "TE-IMS-FRM-HSE-031",
      Object.entries(formData.inspectionType).filter(([k, v]) => v && k !== "otherText").map(([k]) => k).join(", "),
      formData.inspectionType.otherText,
      Object.entries(formData.equipmentCategory).filter(([_, v]) => v).map(([k]) => k).join(", "),
      formData.siteLocation,
      formData.inspectorName,
      formData.year,
      Object.entries(formData.inspectionFrequency).filter(([_, v]) => v).map(([k]) => k).join(", "),
      ...formData.items.flatMap(item => [item.description, item.jan, item.feb, item.mar, item.apr, item.may, item.jun, item.jul, item.aug, item.sep, item.oct, item.nov, item.dec]),
      ...formData.deviations.flatMap(dev => [dev.date, dev.description, dev.followUp, dev.responsible, dev.targetDate, dev.severity, dev.completion]),
      formData.comments,
      formData.signOff.hseRep.name, formData.signOff.hseRep.date,
      formData.signOff.hseChair.name, formData.signOff.hseChair.date,
      formData.signOff.siteSupervisor.name, formData.signOff.siteSupervisor.date,
      formData.signOff.hseManager.name, formData.signOff.hseManager.date
    ];

    try {
      const result = await mutation.mutateAsync({
        formCode: "TE-IMS-FRM-HSE-031",
        headers,
        values
      });
      setSheetUrl(result.sheetUrl);
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "An error occurred during submission.");
    }
  };

  const styles = {
    navy: "#081C2E",
    gold: "#C49A28",
    lightBg: "#f4f6f9",
    border: "#dde3ec",
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto my-10 p-8 bg-white shadow-lg rounded-lg text-center">
          <h1 className="text-3xl font-bold mb-4" style={{ color: styles.navy }}>Submission Successful</h1>
          <p className="text-lg mb-6">Form submitted successfully. View register:</p>
          <a 
            href={sheetUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-white font-semibold rounded-md transition-colors"
            style={{ backgroundColor: styles.gold }}
          >
            Open Google Sheet
          </a>
          <div className="mt-8">
            <Link href="/" className="text-blue-600 hover:underline">← Return to Portal Home</Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-[1400px] mx-auto p-6 font-['Nunito_Sans']">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <Link href="/" className="text-gray-600 hover:text-navy-900 transition-colors">← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-400">FRM</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="font-semibold" style={{ color: styles.navy }}>Equipment Inspection and Deviation Register</span>
        </nav>

        {/* Header Section */}
        <div className="mb-8 bg-white border rounded-lg overflow-hidden shadow-sm" style={{ borderColor: styles.border }}>
          <div className="p-4 flex justify-between items-center text-white" style={{ backgroundColor: styles.navy }}>
            <h1 className="text-xl font-bold uppercase tracking-wider">Equipment Inspection and Deviation Register</h1>
            <span className="text-sm font-medium">TE-IMS-FRM-HSE-031</span>
          </div>
          <div className="grid grid-cols-4 divide-x text-center text-sm" style={{ borderColor: styles.border }}>
            <div className="p-3">
              <p className="text-gray-500 uppercase text-xs font-bold mb-1">Document Code</p>
              <p className="font-semibold">TE-IMS-FRM-HSE-031_Rev02</p>
            </div>
            <div className="p-3">
              <p className="text-gray-500 uppercase text-xs font-bold mb-1">Revision</p>
              <p className="font-semibold">Rev02</p>
            </div>
            <div className="p-3">
              <p className="text-gray-500 uppercase text-xs font-bold mb-1">Date</p>
              <p className="font-semibold">April 2026</p>
            </div>
            <div className="p-3">
              <p className="text-gray-500 uppercase text-xs font-bold mb-1">Status</p>
              <p className="text-green-600 font-bold">Approved</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section 1: Inspection Details */}
          <section className="bg-white border rounded-lg overflow-hidden shadow-sm" style={{ borderColor: styles.border }}>
            <div className="px-4 py-2 text-white font-bold text-sm uppercase tracking-wide" style={{ backgroundColor: styles.navy }}>
              1. Inspection Details
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: styles.navy }}>Inspection Type *</label>
                  <div className="grid grid-cols-2 gap-2">
                    {["safetyHarness", "monthlySafety", "other"].map((type) => (
                      <label key={type} className="flex items-center space-x-2 text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          name={`inspectionType.${type}`}
                          checked={(formData.inspectionType as any)[type]}
                          onChange={handleInputChange}
                          className="w-4 h-4 rounded border-gray-300 text-gold-600 focus:ring-gold-500"
                        />
                        <span className="capitalize">{type.replace(/([A-Z])/g, ' $1')}</span>
                      </label>
                    ))}
                  </div>
                  {formData.inspectionType.other && (
                    <input
                      type="text"
                      name="inspectionType.otherText"
                      value={formData.inspectionType.otherText}
                      onChange={handleInputChange}
                      placeholder="Specify other..."
                      className="mt-2 w-full p-2 border rounded text-sm focus:ring-2 focus:ring-navy-500 outline-none"
                    />
                  )}
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: styles.navy }}>Equipment Category *</label>
                  <div className="grid grid-cols-2 gap-2">
                    {["drilling", "vehicles", "lifting", "electrical", "other"].map((cat) => (
                      <label key={cat} className="flex items-center space-x-2 text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          name={`equipmentCategory.${cat}`}
                          checked={(formData.equipmentCategory as any)[cat]}
                          onChange={handleInputChange}
                          className="w-4 h-4 rounded border-gray-300 text-gold-600 focus:ring-gold-500"
                        />
                        <span className="capitalize">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-1" style={{ color: styles.navy }}>Site / Location *</label>
                    <input
                      type="text"
                      name="siteLocation"
                      required
                      value={formData.siteLocation}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded text-sm focus:ring-2 focus:ring-navy-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1" style={{ color: styles.navy }}>Inspector Name *</label>
                    <input
                      type="text"
                      name="inspectorName"
                      required
                      value={formData.inspectorName}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded text-sm focus:ring-2 focus:ring-navy-500 outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-1" style={{ color: styles.navy }}>Year *</label>
                    <input
                      type="number"
                      name="year"
                      required
                      value={formData.year}
                      onChange={handleInputChange}
                      placeholder="YYYY"
                      className="w-full p-2 border rounded text-sm focus:ring-2 focus:ring-navy-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2" style={{ color: styles.navy }}>Inspection Frequency *</label>
                    <div className="grid grid-cols-2 gap-2">
                      {["daily", "weekly", "monthly", "quarterly"].map((freq) => (
                        <label key={freq} className="flex items-center space-x-2 text-sm cursor-pointer">
                          <input
                            type="checkbox"
                            name={`inspectionFrequency.${freq}`}
                            checked={(formData.inspectionFrequency as any)[freq]}
                            onChange={handleInputChange}
                            className="w-4 h-4 rounded border-gray-300 text-gold-600 focus:ring-gold-500"
                          />
                          <span className="capitalize">{freq}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Monthly Inspection Register */}
          <section className="bg-white border rounded-lg overflow-hidden shadow-sm" style={{ borderColor: styles.border }}>
            <div className="px-4 py-2 text-white font-bold text-sm uppercase tracking-wide flex justify-between items-center" style={{ backgroundColor: styles.navy }}>
              <span>2. Monthly Inspection Register</span>
              <span className="text-xs font-normal opacity-80">Legend: OK=Pass | D1,D2..=Dev Ref | X=Not Inspected | N/A=N.A. | R=Repair</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-white" style={{ backgroundColor: styles.navy }}>
                    <th className="p-2 border border-slate-700 w-10">#</th>
                    <th className="p-2 border border-slate-700 text-left min-w-[250px]">Item / Equipment Description</th>
                    {["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"].map(m => (
                      <th key={m} className="p-2 border border-slate-700 w-14 text-center">{m}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {formData.items.map((item, idx) => (
                    <tr key={item.id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-2 border text-center font-medium" style={{ borderColor: styles.border }}>{item.id}</td>
                      <td className="p-1 border" style={{ borderColor: styles.border }}>
                        <input
                          type="text"
                          value={item.description}
                          onChange={(e) => handleItemChange(idx, "description", e.target.value)}
                          className="w-full p-1 text-sm border-none focus:ring-1 focus:ring-navy-500 outline-none bg-transparent"
                          placeholder="Equipment description..."
                        />
                      </td>
                      {["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"].map(m => (
                        <td key={m} className="p-1 border" style={{ borderColor: styles.border }}>
                          <input
                            type="text"
                            value={(item as any)[m]}
                            onChange={(e) => handleItemChange(idx, m, e.target.value.toUpperCase())}
                            className="w-full p-1 text-center text-xs border-none focus:ring-1 focus:ring-navy-500 outline-none bg-transparent"
                            maxLength={3}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Deviation and Follow-up Report */}
          <section className="bg-white border rounded-lg overflow-hidden shadow-sm" style={{ borderColor: styles.border }}>
            <div className="px-4 py-2 text-white font-bold text-sm uppercase tracking-wide" style={{ backgroundColor: styles.navy }}>
              3. Deviation and Follow-up Report
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-white" style={{ backgroundColor: styles.navy }}>
                    <th className="p-2 border border-slate-700 w-10">Dev No.</th>
                    <th className="p-2 border border-slate-700 w-32">Date</th>
                    <th className="p-2 border border-slate-700 text-left">Deviation Description</th>
                    <th className="p-2 border border-slate-700 text-left">Follow-Up Action</th>
                    <th className="p-2 border border-slate-700 w-32">Responsible</th>
                    <th className="p-2 border border-slate-700 w-32">Target Date</th>
                    <th className="p-2 border border-slate-700 w-32">Severity</th>
                    <th className="p-2 border border-slate-700 w-40">Completion & Sig</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.deviations.map((dev, idx) => (
                    <tr key={dev.id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-2 border text-center font-medium" style={{ borderColor: styles.border }}>{dev.id}</td>
                      <td className="p-1 border" style={{ borderColor: styles.border }}>
                        <input type="date" value={dev.date} onChange={(e) => handleDeviationChange(idx, "date", e.target.value)} className="w-full p-1 text-xs border-none bg-transparent outline-none" />
                      </td>
                      <td className="p-1 border" style={{ borderColor: styles.border }}>
                        <textarea value={dev.description} onChange={(e) => handleDeviationChange(idx, "description", e.target.value)} className="w-full p-1 text-xs border-none bg-transparent outline-none resize-none" rows={1} />
                      </td>
                      <td className="p-1 border" style={{ borderColor: styles.border }}>
                        <textarea value={dev.followUp} onChange={(e) => handleDeviationChange(idx, "followUp", e.target.value)} className="w-full p-1 text-xs border-none bg-transparent outline-none resize-none" rows={1} />
                      </td>
                      <td className="p-1 border" style={{ borderColor: styles.border }}>
                        <input type="text" value={dev.responsible} onChange={(e) => handleDeviationChange(idx, "responsible", e.target.value)} className="w-full p-1 text-xs border-none bg-transparent outline-none" />
                      </td>
                      <td className="p-1 border" style={{ borderColor: styles.border }}>
                        <input type="date" value={dev.targetDate} onChange={(e) => handleDeviationChange(idx, "targetDate", e.target.value)} className="w-full p-1 text-xs border-none bg-transparent outline-none" />
                      </td>
                      <td className="p-1 border" style={{ borderColor: styles.border }}>
                        <select value={dev.severity} onChange={(e) => handleDeviationChange(idx, "severity", e.target.value)} className="w-full p-1 text-xs border-none bg-transparent outline-none">
                          <option value="">Select...</option>
                          <option value="Minor">Minor</option>
                          <option value="Major">Major</option>
                          <option value="Critical">Critical</option>
                        </select>
                      </td>
                      <td className="p-1 border" style={{ borderColor: styles.border }}>
                        <input type="text" value={dev.completion} onChange={(e) => handleDeviationChange(idx, "completion", e.target.value)} className="w-full p-1 text-xs border-none bg-transparent outline-none" placeholder="Name/Date" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: Comments and Sign-off */}
          <section className="bg-white border rounded-lg overflow-hidden shadow-sm" style={{ borderColor: styles.border }}>
            <div className="px-4 py-2 text-white font-bold text-sm uppercase tracking-wide" style={{ backgroundColor: styles.navy }}>
              4. Comments and Sign-off
            </div>
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2" style={{ color: styles.navy }}>Comments</label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 border rounded text-sm focus:ring-2 focus:ring-navy-500 outline-none"
                  placeholder="Additional notes or observations..."
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { id: "hseRep", label: "HSE Representative" },
                  { id: "hseChair", label: "HSE Committee Chair" },
                  { id: "siteSupervisor", label: "Site Supervisor" },
                  { id: "hseManager", label: "HSE Manager" }
                ].map(role => (
                  <div key={role.id} className="p-4 border rounded bg-gray-50 space-y-3" style={{ borderColor: styles.border }}>
                    <p className="font-bold text-xs uppercase text-gray-500 mb-2">{role.label}</p>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={(formData.signOff as any)[role.id].name}
                      onChange={(e) => handleSignOffChange(role.id, "name", e.target.value)}
                      className="w-full p-2 border rounded text-xs outline-none focus:ring-1 focus:ring-navy-500"
                    />
                    <input
                      type="text"
                      placeholder="Signature (Type Name)"
                      value={(formData.signOff as any)[role.id].signature}
                      onChange={(e) => handleSignOffChange(role.id, "signature", e.target.value)}
                      className="w-full p-2 border rounded text-xs italic outline-none focus:ring-1 focus:ring-navy-500"
                    />
                    <input
                      type="date"
                      value={(formData.signOff as any)[role.id].date}
                      onChange={(e) => handleSignOffChange(role.id, "date", e.target.value)}
                      className="w-full p-2 border rounded text-xs outline-none focus:ring-1 focus:ring-navy-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Submit Button */}
          <div className="flex flex-col items-center py-6">
            {error && <p className="text-red-600 mb-4 font-bold">{error}</p>}
            <button
              type="submit"
              disabled={mutation.isPending}
              className="px-12 py-4 text-white font-bold rounded-lg shadow-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
              style={{ backgroundColor: styles.gold }}
            >
              {mutation.isPending ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : "Submit Inspection Register"}
            </button>
            <p className="mt-4 text-xs text-gray-400 italic">By submitting, you confirm that all equipment has been inspected according to company standards.</p>
          </div>
        </form>
      </div>
    </Layout>
  );
}
