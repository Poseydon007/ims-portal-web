import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_MAINT_002() {
  const [formData, setFormData] = useState({
    refuellingEventCode: "",
    date: "",
    timeStarted: "",
    timeCompleted: "",
    siteProject: "",
    equipmentType: "",
    equipmentIdName: "",
    locationOnSite: "",
    fuelTypeDiesel: false,
    fuelTypeGasoline: false,
    fuelTypeOther: "",
    quantityDispensed: "",
    previousMeterReading: "",
    currentMeterReading: "",
    calculatedConsumption: "",
    notes: "",
    operatorName: "",
    operatorIdBadge: "",
    operatorPosition: "",
    operatorSignature: "",
    bowserFuelTruckId: "",
    supplierDriverName: "",
    fuelBatchRef: "",
    spillOccurred: "",
    spillVolume: "",
    actionTaken: "",
    containmentUsed: "",
    disposedPerProcedure: "",
    reportedToHse: "",
    hseReference: "",
    followUpRequired: "",
    followUpNamePosition: "",
    followUpComments: "",
    followUpSignature: "",
    followUpDate: "",
    preparedBy: "",
    preparedDate: "",
    reviewedBy: "",
    reviewedDate: "",
    approvedBy: "",
    approvedDate: "",
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
      setError("Failed to submit form: " + err.message);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const headers = [
      "Refuelling Event Code",
      "Date",
      "Time Started",
      "Time Completed",
      "Site / Project",
      "Equipment Type",
      "Equipment ID / Name",
      "Location on Site",
      "Fuel Type: Diesel",
      "Fuel Type: Gasoline",
      "Fuel Type: Other",
      "Quantity Dispensed (litres)",
      "Previous Meter Reading",
      "Current Meter Reading",
      "Calculated Consumption",
      "Notes",
      "Operator Name",
      "Operator ID / Badge No.",
      "Operator Position",
      "Operator Signature",
      "Bowser / Fuel Truck ID",
      "Supplier / Driver Name",
      "Fuel Batch / Delivery Note Ref.",
      "Spill or leak occurred?",
      "Spill Volume (litres)",
      "Action Taken",
      "Containment Used",
      "Disposed per Procedure?",
      "Reported to HSE?",
      "HSE Reference",
      "Follow-up Required?",
      "Follow-up Name and Position",
      "Follow-up Comments",
      "Follow-up Signature",
      "Follow-up Date",
      "Prepared By",
      "Prepared Date",
      "Reviewed By",
      "Reviewed Date",
      "Approved By",
      "Approved Date",
    ];

    const values = [
      formData.refuellingEventCode,
      formData.date,
      formData.timeStarted,
      formData.timeCompleted,
      formData.siteProject,
      formData.equipmentType,
      formData.equipmentIdName,
      formData.locationOnSite,
      formData.fuelTypeDiesel ? "Yes" : "No",
      formData.fuelTypeGasoline ? "Yes" : "No",
      formData.fuelTypeOther,
      formData.quantityDispensed,
      formData.previousMeterReading,
      formData.currentMeterReading,
      formData.calculatedConsumption,
      formData.notes,
      formData.operatorName,
      formData.operatorIdBadge,
      formData.operatorPosition,
      formData.operatorSignature,
      formData.bowserFuelTruckId,
      formData.supplierDriverName,
      formData.fuelBatchRef,
      formData.spillOccurred,
      formData.spillVolume,
      formData.actionTaken,
      formData.containmentUsed,
      formData.disposedPerProcedure,
      formData.reportedToHse,
      formData.hseReference,
      formData.followUpRequired,
      formData.followUpNamePosition,
      formData.followUpComments,
      formData.followUpSignature,
      formData.followUpDate,
      formData.preparedBy,
      formData.preparedDate,
      formData.reviewedBy,
      formData.reviewedDate,
      formData.approvedBy,
      formData.approvedDate,
    ];

    mutation.mutate({
      formCode: "TE-IMS-FRM-MAINT-002",
      headers,
      values,
    });
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6">
          <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Form Submitted Successfully</h2>
            <p className="mb-4">The refuelling log has been recorded and synchronized with the central register.</p>
            <a
              href={sheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C49A28] text-white px-6 py-2 rounded hover:bg-[#A37F21] transition-colors"
            >
              View register
            </a>
            <div className="mt-6">
              <Link href="/" className="text-[#081C2E] hover:underline">
                ← Back to Portal Home
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-4 md:p-6 font-['Nunito_Sans'] text-[#081C2E] bg-[#f4f6f9]">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <Link href="/" className="text-[#081C2E] hover:underline">
            ← Portal Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/docs/frm" className="text-gray-500 hover:text-[#C49A28] transition-colors cursor-pointer">FRM</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="font-semibold">Fuel Refuelling Log - Single Event</span>
        </nav>

        {/* Document Control Table */}
        <div className="bg-white border border-[#dde3ec] mb-8 overflow-hidden rounded-sm">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#081C2E] text-white">
                <th className="p-2 border border-[#dde3ec] text-left">Document Code</th>
                <th className="p-2 border border-[#dde3ec] text-left">Revision</th>
                <th className="p-2 border border-[#dde3ec] text-left">Date</th>
                <th className="p-2 border border-[#dde3ec] text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-[#dde3ec]">TE-IMS-FRM-MAINT-002</td>
                <td className="p-2 border border-[#dde3ec]">01</td>
                <td className="p-2 border border-[#dde3ec]">10.04.2026</td>
                <td className="p-2 border border-[#dde3ec]">Approved for Implementation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h1 className="text-2xl font-bold mb-6 text-center uppercase tracking-wider">
          Fuel Refuelling Log - Single Event
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section 1: Refuelling Event */}
          <section className="bg-white border border-[#dde3ec] overflow-hidden rounded-sm shadow-sm">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wide">
              1. Refuelling Event
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-bold mb-1">
                  Refuelling Event Code (format: [Site]-YYMMDD-HHMM) *
                </label>
                <input
                  type="text"
                  name="refuellingEventCode"
                  placeholder="e.g. PR001-260301-0730"
                  required
                  className="w-full p-2 border border-[#dde3ec] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                  value={formData.refuellingEventCode}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Date *</label>
                <input
                  type="date"
                  name="date"
                  required
                  className="w-full p-2 border border-[#dde3ec] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm font-bold mb-1">Time Started *</label>
                  <input
                    type="time"
                    name="timeStarted"
                    required
                    className="w-full p-2 border border-[#dde3ec] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                    value={formData.timeStarted}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Time Completed *</label>
                  <input
                    type="time"
                    name="timeCompleted"
                    required
                    className="w-full p-2 border border-[#dde3ec] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                    value={formData.timeCompleted}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold mb-1">Site / Project *</label>
                <input
                  type="text"
                  name="siteProject"
                  required
                  className="w-full p-2 border border-[#dde3ec] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                  value={formData.siteProject}
                  onChange={handleChange}
                />
              </div>
            </div>
          </section>

          {/* Section 2: Equipment / Asset Being Refuelled */}
          <section className="bg-white border border-[#dde3ec] overflow-hidden rounded-sm shadow-sm">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wide">
              2. Equipment / Asset Being Refuelled
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-1">Equipment Type *</label>
                <select
                  name="equipmentType"
                  required
                  className="w-full p-2 border border-[#dde3ec] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                  value={formData.equipmentType}
                  onChange={handleChange}
                >
                  <option value="">Select Type</option>
                  <option value="Drill Rig">Drill Rig</option>
                  <option value="Generator">Generator</option>
                  <option value="Pickup">Pickup</option>
                  <option value="Water Tanker">Water Tanker</option>
                  <option value="Compressor">Compressor</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Equipment ID / Name *</label>
                <input
                  type="text"
                  name="equipmentIdName"
                  required
                  className="w-full p-2 border border-[#dde3ec] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                  value={formData.equipmentIdName}
                  onChange={handleChange}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold mb-1">Location on Site *</label>
                <input
                  type="text"
                  name="locationOnSite"
                  required
                  className="w-full p-2 border border-[#dde3ec] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                  value={formData.locationOnSite}
                  onChange={handleChange}
                />
              </div>
            </div>
          </section>

          {/* Section 3: Fuel Details */}
          <section className="bg-white border border-[#dde3ec] overflow-hidden rounded-sm shadow-sm">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wide">
              3. Fuel Details
            </div>
            <div className="p-4 space-y-4">
              <div className="flex flex-wrap gap-6 items-center border-b border-[#dde3ec] pb-4">
                <span className="text-sm font-bold">Fuel Type (tick one) *</span>
                <label className="flex items-center space-x-2 text-sm">
                  <input
                    type="checkbox"
                    name="fuelTypeDiesel"
                    className="w-4 h-4"
                    checked={formData.fuelTypeDiesel}
                    onChange={handleChange}
                  />
                  <span>Diesel</span>
                </label>
                <label className="flex items-center space-x-2 text-sm">
                  <input
                    type="checkbox"
                    name="fuelTypeGasoline"
                    className="w-4 h-4"
                    checked={formData.fuelTypeGasoline}
                    onChange={handleChange}
                  />
                  <span>Gasoline</span>
                </label>
                <div className="flex items-center space-x-2 text-sm flex-1 min-w-[200px]">
                  <span>Other (specify):</span>
                  <input
                    type="text"
                    name="fuelTypeOther"
                    className="flex-1 p-1 border-b border-[#dde3ec] focus:outline-none focus:border-[#C49A28]"
                    value={formData.fuelTypeOther}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-1">Quantity Dispensed (litres) *</label>
                  <input
                    type="number"
                    name="quantityDispensed"
                    required
                    className="w-full p-2 border border-[#dde3ec] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                    value={formData.quantityDispensed}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">
                    Previous Meter Reading (engine hours / odometer km) *
                  </label>
                  <input
                    type="number"
                    name="previousMeterReading"
                    required
                    className="w-full p-2 border border-[#dde3ec] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                    value={formData.previousMeterReading}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">
                    Current Meter Reading (engine hours / odometer km) *
                  </label>
                  <input
                    type="number"
                    name="currentMeterReading"
                    required
                    className="w-full p-2 border border-[#dde3ec] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                    value={formData.currentMeterReading}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">
                    Calculated Consumption (litres per hour or per km) *
                  </label>
                  <input
                    type="text"
                    name="calculatedConsumption"
                    required
                    className="w-full p-2 border border-[#dde3ec] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                    value={formData.calculatedConsumption}
                    onChange={handleChange}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold mb-1">Notes (optional)</label>
                  <textarea
                    name="notes"
                    rows={2}
                    className="w-full p-2 border border-[#dde3ec] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                    value={formData.notes}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Operator / Technician */}
          <section className="bg-white border border-[#dde3ec] overflow-hidden rounded-sm shadow-sm">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wide">
              4. Operator / Technician
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-1">Name *</label>
                <input
                  type="text"
                  name="operatorName"
                  required
                  className="w-full p-2 border border-[#dde3ec] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                  value={formData.operatorName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">ID / Badge No. *</label>
                <input
                  type="text"
                  name="operatorIdBadge"
                  required
                  className="w-full p-2 border border-[#dde3ec] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                  value={formData.operatorIdBadge}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Position *</label>
                <input
                  type="text"
                  name="operatorPosition"
                  required
                  className="w-full p-2 border border-[#dde3ec] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                  value={formData.operatorPosition}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Signature *</label>
                <input
                  type="text"
                  name="operatorSignature"
                  placeholder="Full name (acts as signature)"
                  required
                  className="w-full p-2 border border-[#dde3ec] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                  value={formData.operatorSignature}
                  onChange={handleChange}
                />
              </div>
            </div>
          </section>

          {/* Section 5: Fuel Source / Bowser */}
          <section className="bg-white border border-[#dde3ec] overflow-hidden rounded-sm shadow-sm">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wide">
              5. Fuel Source / Bowser
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-1">Bowser / Fuel Truck ID *</label>
                <input
                  type="text"
                  name="bowserFuelTruckId"
                  required
                  className="w-full p-2 border border-[#dde3ec] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                  value={formData.bowserFuelTruckId}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Supplier / Driver Name (if external)</label>
                <input
                  type="text"
                  name="supplierDriverName"
                  className="w-full p-2 border border-[#dde3ec] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                  value={formData.supplierDriverName}
                  onChange={handleChange}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold mb-1">Fuel batch / delivery note ref. *</label>
                <input
                  type="text"
                  name="fuelBatchRef"
                  required
                  className="w-full p-2 border border-[#dde3ec] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                  value={formData.fuelBatchRef}
                  onChange={handleChange}
                />
              </div>
            </div>
          </section>

          {/* Section 6: Spill and Environmental Check */}
          <section className="bg-white border border-[#dde3ec] overflow-hidden rounded-sm shadow-sm">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wide">
              6. Spill and Environmental Check
            </div>
            <div className="p-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-1">Spill or leak occurred during refuelling? *</label>
                  <select
                    name="spillOccurred"
                    required
                    className="w-full p-2 border border-[#dde3ec] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                    value={formData.spillOccurred}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">If YES — estimated spill volume (litres)</label>
                  <input
                    type="number"
                    name="spillVolume"
                    className="w-full p-2 border border-[#dde3ec] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                    value={formData.spillVolume}
                    onChange={handleChange}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold mb-1">Action taken (stop, contain, clean, soil removal)</label>
                  <textarea
                    name="actionTaken"
                    rows={2}
                    className="w-full p-2 border border-[#dde3ec] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                    value={formData.actionTaken}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold mb-1">
                    Containment used (absorbents, drip tray, bund, spill kit)
                  </label>
                  <input
                    type="text"
                    name="containmentUsed"
                    className="w-full p-2 border border-[#dde3ec] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                    value={formData.containmentUsed}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">
                    Contaminated soil / absorbent disposed per NCEC waste procedure? *
                  </label>
                  <select
                    name="disposedPerProcedure"
                    required
                    className="w-full p-2 border border-[#dde3ec] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                    value={formData.disposedPerProcedure}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="N/A">N/A (No spill)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Reported to HSE Officer? *</label>
                  <select
                    name="reportedToHse"
                    required
                    className="w-full p-2 border border-[#dde3ec] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                    value={formData.reportedToHse}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="N/A">N/A</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold mb-1">
                    HSE reference / Flash Notification No. (if raised)
                  </label>
                  <input
                    type="text"
                    name="hseReference"
                    className="w-full p-2 border border-[#dde3ec] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                    value={formData.hseReference}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: HSE / Supervisor Follow-Up */}
          <section className="bg-white border border-[#dde3ec] overflow-hidden rounded-sm shadow-sm">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wide">
              7. HSE / Supervisor Follow-Up
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-1">Follow-up required? *</label>
                <select
                  name="followUpRequired"
                  required
                  className="w-full p-2 border border-[#dde3ec] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                  value={formData.followUpRequired}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Name and position</label>
                <input
                  type="text"
                  name="followUpNamePosition"
                  className="w-full p-2 border border-[#dde3ec] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                  value={formData.followUpNamePosition}
                  onChange={handleChange}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold mb-1">Comments / Corrective actions</label>
                <textarea
                  name="followUpComments"
                  rows={2}
                  className="w-full p-2 border border-[#dde3ec] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                  value={formData.followUpComments}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Signature</label>
                <input
                  type="text"
                  name="followUpSignature"
                  placeholder="Full name (acts as signature)"
                  className="w-full p-2 border border-[#dde3ec] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                  value={formData.followUpSignature}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Date</label>
                <input
                  type="date"
                  name="followUpDate"
                  className="w-full p-2 border border-[#dde3ec] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C49A28]"
                  value={formData.followUpDate}
                  onChange={handleChange}
                />
              </div>
            </div>
          </section>

          {/* Approval Section */}
          <section className="bg-white border border-[#dde3ec] overflow-hidden rounded-sm shadow-sm">
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold uppercase tracking-wide">
              Approval
            </div>
            <div className="p-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-2 border border-[#dde3ec] text-left">Role</th>
                    <th className="p-2 border border-[#dde3ec] text-left">Name</th>
                    <th className="p-2 border border-[#dde3ec] text-left">Signature / Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border border-[#dde3ec] font-bold">Prepared by (Maintenance Supervisor)</td>
                    <td className="p-2 border border-[#dde3ec]">
                      <input
                        type="text"
                        name="preparedBy"
                        className="w-full p-1 border-b border-[#dde3ec] focus:outline-none"
                        value={formData.preparedBy}
                        onChange={handleChange}
                      />
                    </td>
                    <td className="p-2 border border-[#dde3ec]">
                      <input
                        type="date"
                        name="preparedDate"
                        className="w-full p-1 border-b border-[#dde3ec] focus:outline-none"
                        value={formData.preparedDate}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-[#dde3ec] font-bold">Reviewed by (HSE Officer)</td>
                    <td className="p-2 border border-[#dde3ec]">
                      <input
                        type="text"
                        name="reviewedBy"
                        className="w-full p-1 border-b border-[#dde3ec] focus:outline-none"
                        value={formData.reviewedBy}
                        onChange={handleChange}
                      />
                    </td>
                    <td className="p-2 border border-[#dde3ec]">
                      <input
                        type="date"
                        name="reviewedDate"
                        className="w-full p-1 border-b border-[#dde3ec] focus:outline-none"
                        value={formData.reviewedDate}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-[#dde3ec] font-bold">Approved by (HSE Manager)</td>
                    <td className="p-2 border border-[#dde3ec]">
                      <input
                        type="text"
                        name="approvedBy"
                        className="w-full p-1 border-b border-[#dde3ec] focus:outline-none"
                        value={formData.approvedBy}
                        onChange={handleChange}
                      />
                    </td>
                    <td className="p-2 border border-[#dde3ec]">
                      <input
                        type="date"
                        name="approvedDate"
                        className="w-full p-1 border-b border-[#dde3ec] focus:outline-none"
                        value={formData.approvedDate}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Error Message */}
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-sm">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-end pb-12">
            <button
              type="submit"
              disabled={mutation.isPending}
              className={`bg-[#C49A28] text-white px-10 py-3 rounded-sm font-bold uppercase tracking-wider shadow-md hover:bg-[#A37F21] transition-colors ${
                mutation.isPending ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {mutation.isPending ? "Submitting..." : "Submit Refuelling Log"}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
