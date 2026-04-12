import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_LOG_002() {
  const [formData, setFormData] = useState({
    vehicleId: "",
    vehicleType: "",
    odometer: "",
    siteProject: "",
    date: "",
    driverName: "",
    driverId: "",
    // Exterior and Safety
    exterior1: "",
    exterior2: "",
    exterior3: "",
    exterior4: "",
    exterior5: "",
    exterior6: "",
    exterior7: "",
    // Under Hood
    hood1: "",
    hood2: "",
    hood3: "",
    hood4: "",
    hood5: "",
    hood6: "",
    // Interior and Controls
    interior1: "",
    interior2: "",
    interior3: "",
    interior4: "",
    interior5: "",
    // Overall Condition
    isSafe: "",
    defectsDescription: "",
    vehicleStatus: "",
    // Driver Declaration
    driverSignature: "",
    driverPrintedName: "",
    driverDateTime: "",
    // Supervisor Verification
    reviewerName: "",
    reviewerPosition: "",
    maintenanceRequired: "",
    workOrderRef: "",
    reviewerSignature: "",
    reviewerDate: "",
  });

  const [actions, setActions] = useState([
    { id: 1, defect: "", reportedTo: "" },
  ]);

  const mutation = trpc.formSubmissions.submit.useMutation();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleActionChange = (index: number, field: string, value: string) => {
    const newActions = [...actions];
    newActions[index] = { ...newActions[index], [field]: value };
    setActions(newActions);
  };

  const addActionRow = () => {
    setActions([...actions, { id: actions.length + 1, defect: "", reportedTo: "" }]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const headers = [
      "Vehicle ID / Registration No.",
      "Vehicle Type",
      "Odometer Reading (km)",
      "Site / Project",
      "Date",
      "Driver Name",
      "Driver ID / Badge No.",
      "Exterior 1: Tyres",
      "Exterior 2: Lights/Indicators",
      "Exterior 3: Mirrors/Windows",
      "Exterior 4: Wipers/Washer",
      "Exterior 5: Body/Exterior",
      "Exterior 6: Buggy whip/Beacon",
      "Exterior 7: Emergency kit",
      "Hood 1: Engine oil",
      "Hood 2: Coolant level",
      "Hood 3: Brake fluid",
      "Hood 4: Power steering fluid",
      "Hood 5: Windscreen washer fluid",
      "Hood 6: No visible leaks",
      "Interior 1: Seat belts",
      "Interior 2: Brakes/Handbrake",
      "Interior 3: Steering/Suspension",
      "Interior 4: Gauges/Warning lights",
      "Interior 5: Cab interior",
      "Is vehicle safe?",
      "Defects description",
      "Vehicle status",
      "Actions Taken",
      "Driver Signature",
      "Driver Printed Name",
      "Driver Date/Time",
      "Reviewed by",
      "Position",
      "Maintenance required?",
      "Work order reference",
      "Reviewer Signature",
      "Reviewer Date",
    ];

    const actionsString = actions
      .filter((a) => a.defect || a.reportedTo)
      .map((a) => `${a.defect} (Reported to: ${a.reportedTo})`)
      .join("; ");

    const values = [
      formData.vehicleId,
      formData.vehicleType,
      formData.odometer,
      formData.siteProject,
      formData.date,
      formData.driverName,
      formData.driverId,
      formData.exterior1,
      formData.exterior2,
      formData.exterior3,
      formData.exterior4,
      formData.exterior5,
      formData.exterior6,
      formData.exterior7,
      formData.hood1,
      formData.hood2,
      formData.hood3,
      formData.hood4,
      formData.hood5,
      formData.hood6,
      formData.interior1,
      formData.interior2,
      formData.interior3,
      formData.interior4,
      formData.interior5,
      formData.isSafe,
      formData.defectsDescription,
      formData.vehicleStatus,
      actionsString,
      formData.driverSignature,
      formData.driverPrintedName,
      formData.driverDateTime,
      formData.reviewerName,
      formData.reviewerPosition,
      formData.maintenanceRequired,
      formData.workOrderRef,
      formData.reviewerSignature,
      formData.reviewerDate,
    ];

    try {
      await mutation.mutateAsync({
        formCode: "TE-IMS-FRM-LOG-002",
        headers,
        values,
      });
      setSubmitted(true);
    } catch (err) {
      setError("Failed to submit form. Please try again.");
    }
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto py-12 px-4">
          <div className="bg-white p-8 rounded-lg shadow-md border border-[#dde3ec] text-center">
            <h2 className="text-2xl font-bold text-[#081C2E] mb-4">Form submitted successfully.</h2>
            <p className="mb-6">Your daily vehicle checklist has been recorded.</p>
            <a
              href={mutation.data?.sheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C49A28] font-semibold hover:underline"
            >
              View register: {mutation.data?.sheetUrl}
            </a>
            <div className="mt-8">
              <Link href="/" className="text-navy hover:underline">← Back to Portal</Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  const ratingOptions = ["G", "F", "P", "N/A"];

  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-8 px-4 font-['Nunito_Sans']">
        <nav className="mb-6">
          <Link href="/" className="text-[#081C2E] hover:text-[#C49A28] font-medium">← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/docs/frm" className="text-gray-600 hover:text-[#C49A28] transition-colors cursor-pointer">FRM</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600 font-semibold">Daily Vehicle Checklist</span>
        </nav>

        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg overflow-hidden border border-[#dde3ec]">
          {/* Header Strip */}
          <div className="bg-[#081C2E] text-white p-6">
            <h1 className="text-2xl font-bold uppercase tracking-wide">Daily Vehicle Checklist</h1>
            <p className="text-sm opacity-80 mt-1">True East Mining Company - Integrated Management System</p>
          </div>

          {/* Document Control Table */}
          <div className="p-6 bg-gray-50 border-b border-[#dde3ec]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              <div className="flex flex-col">
                <span className="font-bold text-[#081C2E]">Form Code:</span>
                <span>TE-IMS-FRM-LOG-002</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[#081C2E]">Revision:</span>
                <span>01</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[#081C2E]">Date:</span>
                <span>10.04.2026</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[#081C2E]">Status:</span>
                <span className="text-green-600 font-semibold uppercase">Approved</span>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Section 1: Vehicle Information */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase text-sm mb-4">
                1. Vehicle Information
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#081C2E] mb-1">Vehicle ID / Registration No. *</label>
                  <input
                    type="text"
                    name="vehicleId"
                    required
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                    value={formData.vehicleId}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#081C2E] mb-1">Vehicle Type (4x4, LDV, Bus, Truck) *</label>
                  <select
                    name="vehicleType"
                    required
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                    value={formData.vehicleType}
                    onChange={handleChange}
                  >
                    <option value="">Select Type</option>
                    <option value="4x4">4x4</option>
                    <option value="LDV">LDV</option>
                    <option value="Bus">Bus</option>
                    <option value="Truck">Truck</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#081C2E] mb-1">Odometer Reading (km) *</label>
                  <input
                    type="number"
                    name="odometer"
                    required
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                    value={formData.odometer}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#081C2E] mb-1">Site / Project *</label>
                  <input
                    type="text"
                    name="siteProject"
                    required
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                    value={formData.siteProject}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#081C2E] mb-1">Date *</label>
                  <input
                    type="date"
                    name="date"
                    required
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#081C2E] mb-1">Driver Name *</label>
                  <input
                    type="text"
                    name="driverName"
                    required
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                    value={formData.driverName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#081C2E] mb-1">Driver ID / Badge No. *</label>
                  <input
                    type="text"
                    name="driverId"
                    required
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                    value={formData.driverId}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </section>

            {/* Inspection Tables */}
            <div className="space-y-6">
              <div className="bg-yellow-50 border-l-4 border-[#C49A28] p-4 text-sm text-gray-700">
                <strong>Instructions:</strong> Rate each item: Good (G), Fair (F), Poor (P), N/A. 
                <span className="text-red-600 font-bold ml-1">Any item rated Poor places the vehicle OUT OF SERVICE.</span>
              </div>

              {/* Section 2: Exterior and Safety */}
              <section>
                <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase text-sm mb-0">
                  2. Exterior and Safety Equipment
                </div>
                <table className="w-full border-collapse border border-[#dde3ec]">
                  <thead className="bg-[#081C2E] text-white text-xs uppercase">
                    <tr>
                      <th className="p-2 border border-[#dde3ec] text-left w-12">#</th>
                      <th className="p-2 border border-[#dde3ec] text-left">Inspection Item</th>
                      <th className="p-2 border border-[#dde3ec] text-center w-48">Rating (G / F / P / N/A)</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {[
                      { id: 1, name: "exterior1", label: "Tyres — tread depth, pressure, no cuts or bulges; spare present and inflated." },
                      { id: 2, name: "exterior2", label: "Lights, indicators, brake lights, reversing lights, hazards, and horn — all functional." },
                      { id: 3, name: "exterior3", label: "Mirrors and windows — clean, undamaged, and properly adjusted." },
                      { id: 4, name: "exterior4", label: "Wipers and washer fluid — functional, blades in good condition." },
                      { id: 5, name: "exterior5", label: "Body and exterior — no damage affecting safety; doors, bonnet, tailgate close properly." },
                      { id: 6, name: "exterior6", label: "Buggy whip, reverse hooter, amber beacon — present and working (site requirement)." },
                      { id: 7, name: "exterior7", label: "Emergency kit — first aid kit, fire extinguisher (in-date), triangle, wheel chocks, recovery strap." },
                    ].map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="p-2 border border-[#dde3ec] text-center">{item.id}</td>
                        <td className="p-2 border border-[#dde3ec]">{item.label}</td>
                        <td className="p-2 border border-[#dde3ec] text-center">
                          <div className="flex justify-around">
                            {ratingOptions.map((opt) => (
                              <label key={opt} className="flex flex-col items-center cursor-pointer">
                                <input
                                  type="radio"
                                  name={item.name}
                                  value={opt}
                                  required
                                  className="accent-[#C49A28]"
                                  onChange={handleChange}
                                />
                                <span className="text-[10px] mt-1">{opt}</span>
                              </label>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>

              {/* Section 3: Under Hood and Fluids */}
              <section>
                <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase text-sm mb-0">
                  3. Under Hood and Fluids
                </div>
                <table className="w-full border-collapse border border-[#dde3ec]">
                  <thead className="bg-[#081C2E] text-white text-xs uppercase">
                    <tr>
                      <th className="p-2 border border-[#dde3ec] text-left w-12">#</th>
                      <th className="p-2 border border-[#dde3ec] text-left">Inspection Item</th>
                      <th className="p-2 border border-[#dde3ec] text-center w-48">Rating (G / F / P / N/A)</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {[
                      { id: 1, name: "hood1", label: "Engine oil level and condition." },
                      { id: 2, name: "hood2", label: "Coolant level and radiator condition — no leaks." },
                      { id: 3, name: "hood3", label: "Brake fluid level." },
                      { id: 4, name: "hood4", label: "Power steering fluid level." },
                      { id: 5, name: "hood5", label: "Windscreen washer fluid level." },
                      { id: 6, name: "hood6", label: "No visible leaks — oil, fuel, coolant, hydraulic." },
                    ].map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="p-2 border border-[#dde3ec] text-center">{item.id}</td>
                        <td className="p-2 border border-[#dde3ec]">{item.label}</td>
                        <td className="p-2 border border-[#dde3ec] text-center">
                          <div className="flex justify-around">
                            {ratingOptions.map((opt) => (
                              <label key={opt} className="flex flex-col items-center cursor-pointer">
                                <input
                                  type="radio"
                                  name={item.name}
                                  value={opt}
                                  required
                                  className="accent-[#C49A28]"
                                  onChange={handleChange}
                                />
                                <span className="text-[10px] mt-1">{opt}</span>
                              </label>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>

              {/* Section 4: Interior and Controls */}
              <section>
                <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase text-sm mb-0">
                  4. Interior and Controls
                </div>
                <table className="w-full border-collapse border border-[#dde3ec]">
                  <thead className="bg-[#081C2E] text-white text-xs uppercase">
                    <tr>
                      <th className="p-2 border border-[#dde3ec] text-left w-12">#</th>
                      <th className="p-2 border border-[#dde3ec] text-left">Inspection Item</th>
                      <th className="p-2 border border-[#dde3ec] text-center w-48">Rating (G / F / P / N/A)</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {[
                      { id: 1, name: "interior1", label: "Seat belts — all functional, no cuts or fraying; retract and latch properly." },
                      { id: 2, name: "interior2", label: "Brakes and handbrake — firm pedal, handbrake holds on incline." },
                      { id: 3, name: "interior3", label: "Steering and suspension — no excessive play or unusual noises." },
                      { id: 4, name: "interior4", label: "Gauges, warning lights, dashboard indicators — no active fault lights." },
                      { id: 5, name: "interior5", label: "Cab interior — no prohibited items (lighters, aerosols, loose heavy objects); cab clean." },
                    ].map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="p-2 border border-[#dde3ec] text-center">{item.id}</td>
                        <td className="p-2 border border-[#dde3ec]">{item.label}</td>
                        <td className="p-2 border border-[#dde3ec] text-center">
                          <div className="flex justify-around">
                            {ratingOptions.map((opt) => (
                              <label key={opt} className="flex flex-col items-center cursor-pointer">
                                <input
                                  type="radio"
                                  name={item.name}
                                  value={opt}
                                  required
                                  className="accent-[#C49A28]"
                                  onChange={handleChange}
                                />
                                <span className="text-[10px] mt-1">{opt}</span>
                              </label>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            </div>

            {/* Section 5: Overall Vehicle Condition */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase text-sm mb-4">
                5. Overall Vehicle Condition
              </div>
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-[#081C2E]">Is the vehicle safe and roadworthy for use today? *</span>
                    <label className="inline-flex items-center">
                      <input type="radio" name="isSafe" value="Yes" required onChange={handleChange} className="accent-[#C49A28]" />
                      <span className="ml-2 text-sm">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" name="isSafe" value="No" required onChange={handleChange} className="accent-[#C49A28]" />
                      <span className="ml-2 text-sm">No</span>
                    </label>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-[#081C2E]">Vehicle status *</span>
                    <label className="inline-flex items-center">
                      <input type="radio" name="vehicleStatus" value="In Service" required onChange={handleChange} className="accent-[#C49A28]" />
                      <span className="ml-2 text-sm">In Service</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" name="vehicleStatus" value="Out of Service" required onChange={handleChange} className="accent-[#C49A28]" />
                      <span className="ml-2 text-sm text-red-600 font-bold">Out of Service</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#081C2E] mb-1">If NO — describe defects and immediate action taken</label>
                  <textarea
                    name="defectsDescription"
                    rows={3}
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                    value={formData.defectsDescription}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </section>

            {/* Section 6: Actions Taken or Reported */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase text-sm mb-0">
                6. Actions Taken or Reported
              </div>
              <table className="w-full border-collapse border border-[#dde3ec]">
                <thead className="bg-[#081C2E] text-white text-xs uppercase">
                  <tr>
                    <th className="p-2 border border-[#dde3ec] text-left w-12">#</th>
                    <th className="p-2 border border-[#dde3ec] text-left">Defect / Action Taken or Reported</th>
                    <th className="p-2 border border-[#dde3ec] text-left w-1/3">Reported To / Date</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {actions.map((action, index) => (
                    <tr key={action.id}>
                      <td className="p-2 border border-[#dde3ec] text-center">{index + 1}</td>
                      <td className="p-2 border border-[#dde3ec]">
                        <input
                          type="text"
                          className="w-full p-1 outline-none"
                          value={action.defect}
                          onChange={(e) => handleActionChange(index, "defect", e.target.value)}
                        />
                      </td>
                      <td className="p-2 border border-[#dde3ec]">
                        <input
                          type="text"
                          className="w-full p-1 outline-none"
                          value={action.reportedTo}
                          onChange={(e) => handleActionChange(index, "reportedTo", e.target.value)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                type="button"
                onClick={addActionRow}
                className="mt-2 text-sm text-[#C49A28] font-bold hover:underline"
              >
                + Add Row
              </button>
            </section>

            {/* Section 7: Driver Declaration */}
            <section className="bg-gray-50 p-6 rounded border border-[#dde3ec]">
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase text-sm -mx-6 -mt-6 mb-6">
                7. Driver Declaration
              </div>
              <p className="text-sm text-gray-700 mb-6 italic leading-relaxed">
                "I declare that I have personally inspected this vehicle today before use, and that the information recorded above is true and correct to the best of my knowledge. I confirm that I hold a valid KSA driver's licence for this vehicle class, that I am fit to drive (not fatigued, not under the influence of alcohol, drugs, or prescription medication that affects driving), and that I will not operate this vehicle if any item is rated Poor or if any defect affecting safe operation has been identified."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#081C2E] mb-1">Driver Signature (Full Name) *</label>
                  <input
                    type="text"
                    name="driverSignature"
                    required
                    placeholder="Full name (acts as signature)"
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                    value={formData.driverSignature}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#081C2E] mb-1">Printed Name *</label>
                  <input
                    type="text"
                    name="driverPrintedName"
                    required
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                    value={formData.driverPrintedName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#081C2E] mb-1">Date / Time *</label>
                  <input
                    type="datetime-local"
                    name="driverDateTime"
                    required
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                    value={formData.driverDateTime}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </section>

            {/* Section 8: Supervisor / HSE Verification */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase text-sm mb-4">
                8. Supervisor / HSE Verification
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#081C2E] mb-1">Reviewed by (Logistics Supervisor / HSE)</label>
                  <input
                    type="text"
                    name="reviewerName"
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                    value={formData.reviewerName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#081C2E] mb-1">Position</label>
                  <input
                    type="text"
                    name="reviewerPosition"
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                    value={formData.reviewerPosition}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-[#081C2E]">Any defects requiring maintenance?</span>
                  <label className="inline-flex items-center">
                    <input type="radio" name="maintenanceRequired" value="Yes" onChange={handleChange} className="accent-[#C49A28]" />
                    <span className="ml-2 text-sm">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="maintenanceRequired" value="No" onChange={handleChange} className="accent-[#C49A28]" />
                    <span className="ml-2 text-sm">No</span>
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#081C2E] mb-1">Work order reference (if raised)</label>
                  <input
                    type="text"
                    name="workOrderRef"
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                    value={formData.workOrderRef}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#081C2E] mb-1">Signature</label>
                  <input
                    type="text"
                    name="reviewerSignature"
                    placeholder="Full name"
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                    value={formData.reviewerSignature}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#081C2E] mb-1">Date</label>
                  <input
                    type="date"
                    name="reviewerDate"
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                    value={formData.reviewerDate}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </section>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded">
                {error}
              </div>
            )}

            <div className="flex justify-end pt-6">
              <button
                type="submit"
                disabled={mutation.isPending}
                className={`px-8 py-3 bg-[#081C2E] text-white font-bold rounded shadow-lg hover:bg-[#C49A28] transition-colors uppercase tracking-wider ${
                  mutation.isPending ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {mutation.isPending ? "Submitting..." : "Submit Daily Checklist"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
