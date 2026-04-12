import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_LOG_001() {
  const [formData, setFormData] = useState({
    journeyId: "",
    dateOfJourney: "",
    departureTime: "",
    estimatedArrivalTime: "",
    notes: "",
    driverName: "",
    employeeId: "",
    licenseNumber: "",
    licenseExpiry: "",
    vehicleType: "",
    vehicleId: "",
    journeyPurpose: "",
    startingLocation: "",
    routeDescription: "",
    destination: "",
    totalDistance: "",
    estimatedDuration: "",
    riskLongDistance: false,
    riskLongDistanceControls: "",
    riskOffRoad: false,
    riskOffRoadControls: "",
    riskNightTravel: false,
    riskNightTravelControls: "",
    riskWeather: false,
    riskWeatherControls: "",
    riskFatigue: false,
    riskFatigueControls: "",
    riskHeavyLoad: false,
    riskHeavyLoadControls: "",
    riskOther: false,
    riskOtherControls: "",
    checkPreStart: false,
    checkRested: false,
    checkFuel: false,
    checkEmergencyKit: false,
    checkCommEquipment: false,
    medicalFacility: "",
    medicalDistance: "",
    medicalTime: "",
    clinicRoute: "",
    clinicDistance: "",
    clinicTime: "",
    checkInProtocol: "",
    triggerErp: false,
    supervisorApproval: "",
    supervisorReason: "",
    supervisorName: "",
    supervisorPosition: "",
    supervisorDate: "",
    hseReviewedBy: "",
    hseReviewDate: "",
    hseComments: "",
    actualArrivalTime: "",
    deviations: "",
    flashNotificationRef: "",
    completionDate: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  const mutation = trpc.formSubmissions.submit.useMutation({
    onSuccess: (data) => {
      setSubmitted(true);
      setSheetUrl(data.sheetUrl);
    },
    onError: (err) => {
      setError(err.message || "An error occurred during submission.");
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const headers = Object.keys(formData);
    const values = Object.values(formData).map(v => v.toString());

    mutation.mutate({
      formCode: "TE-IMS-FRM-LOG-001",
      headers,
      values,
    });
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6">
          <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-2">Form submitted successfully.</h2>
            <p className="mb-4">Your journey management plan has been recorded.</p>
            <a
              href={sheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy hover:underline font-semibold"
            >
              View register: {sheetUrl}
            </a>
            <div className="mt-6">
              <Link href="/" className="text-navy hover:underline">
                ← Return to Portal Home
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-6 font-['Nunito_Sans'] text-[#081C2E]">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-[#C49A28] hover:underline">← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/docs/frm" className="text-gray-500 hover:text-[#C49A28] transition-colors cursor-pointer">FRM</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="font-semibold text-[#081C2E]">Journey Management Plan Form</span>
        </nav>

        {/* Document Control Table */}
        <div className="mb-8 overflow-x-auto">
          <table className="w-full border-collapse border border-[#dde3ec] text-sm">
            <thead>
              <tr className="bg-[#081C2E] text-white">
                <th className="border border-[#dde3ec] p-2 text-left">Code</th>
                <th className="border border-[#dde3ec] p-2 text-left">Revision</th>
                <th className="border border-[#dde3ec] p-2 text-left">Date</th>
                <th className="border border-[#dde3ec] p-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#dde3ec] p-2">TE-IMS-FRM-LOG-001</td>
                <td className="border border-[#dde3ec] p-2">01</td>
                <td className="border border-[#dde3ec] p-2">01 March 2026</td>
                <td className="border border-[#dde3ec] p-2 text-green-600 font-semibold">Approved</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h1 className="text-3xl font-bold mb-2 text-[#081C2E]">JOURNEY MANAGEMENT PLAN FORM</h1>
        <p className="mb-6 text-gray-600 text-sm italic">
          Standardized pre-trip risk assessment for all journeys {">"}50 km, off-road, or night travel.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Journey Details Section */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">
              JOURNEY DETAILS
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-[#dde3ec] p-4 rounded bg-white">
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">Journey ID / Reference *</label>
                <input
                  type="text"
                  name="journeyId"
                  required
                  placeholder="e.g., JMP-YYYYMMDD-XXX"
                  className="border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                  value={formData.journeyId}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">Date of Journey *</label>
                <input
                  type="date"
                  name="dateOfJourney"
                  required
                  className="border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                  value={formData.dateOfJourney}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">Departure Time (Planned) *</label>
                <input
                  type="time"
                  name="departureTime"
                  required
                  className="border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                  value={formData.departureTime}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">Estimated Arrival Time *</label>
                <input
                  type="time"
                  name="estimatedArrivalTime"
                  required
                  className="border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                  value={formData.estimatedArrivalTime}
                  onChange={handleChange}
                />
              </div>
              <div className="md:col-span-2 flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">Notes</label>
                <textarea
                  name="notes"
                  rows={2}
                  className="border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                  value={formData.notes}
                  onChange={handleChange}
                />
              </div>
            </div>
          </section>

          {/* Driver Information Section */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">
              DRIVER INFORMATION
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-[#dde3ec] p-4 rounded bg-white">
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">Driver Name *</label>
                <input
                  type="text"
                  name="driverName"
                  required
                  className="border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                  value={formData.driverName}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">Employee ID / Badge No. *</label>
                <input
                  type="text"
                  name="employeeId"
                  required
                  className="border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                  value={formData.employeeId}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">Driver License Number *</label>
                <input
                  type="text"
                  name="licenseNumber"
                  required
                  className="border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                  value={formData.licenseNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">License Expiry Date *</label>
                <input
                  type="date"
                  name="licenseExpiry"
                  required
                  className="border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                  value={formData.licenseExpiry}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">Vehicle Type *</label>
                <input
                  type="text"
                  name="vehicleType"
                  required
                  placeholder="e.g., 4x4 Pickup"
                  className="border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                  value={formData.vehicleType}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">Vehicle ID *</label>
                <input
                  type="text"
                  name="vehicleId"
                  required
                  placeholder="e.g., TR-005"
                  className="border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                  value={formData.vehicleId}
                  onChange={handleChange}
                />
              </div>
            </div>
          </section>

          {/* Journey Route & Purpose Section */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">
              JOURNEY ROUTE & PURPOSE
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-[#dde3ec] p-4 rounded bg-white">
              <div className="md:col-span-2 flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">Purpose of Journey *</label>
                <input
                  type="text"
                  name="journeyPurpose"
                  required
                  placeholder="e.g., Site PR001 access, equipment delivery"
                  className="border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                  value={formData.journeyPurpose}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">Starting Location *</label>
                <input
                  type="text"
                  name="startingLocation"
                  required
                  className="border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                  value={formData.startingLocation}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">Destination / Site *</label>
                <input
                  type="text"
                  name="destination"
                  required
                  className="border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                  value={formData.destination}
                  onChange={handleChange}
                />
              </div>
              <div className="md:col-span-2 flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">Route Description *</label>
                <textarea
                  name="routeDescription"
                  required
                  rows={2}
                  placeholder="Main roads, waypoints, off-road sections"
                  className="border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                  value={formData.routeDescription}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">Total Distance (km) *</label>
                <input
                  type="number"
                  name="totalDistance"
                  required
                  className="border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                  value={formData.totalDistance}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">Estimated Duration (hours) *</label>
                <input
                  type="number"
                  step="0.5"
                  name="estimatedDuration"
                  required
                  className="border border-[#dde3ec] p-2 rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                  value={formData.estimatedDuration}
                  onChange={handleChange}
                />
              </div>
            </div>
          </section>

          {/* Risk Assessment Section */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 uppercase">
              Risk Assessment - (Check all that apply – describe controls if Yes)
            </div>
            <div className="border border-[#dde3ec] rounded overflow-hidden bg-white">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-[#dde3ec]">
                    <th className="p-3 text-left text-xs font-bold uppercase w-1/3">Risk Factor</th>
                    <th className="p-3 text-center text-xs font-bold uppercase w-16">Yes</th>
                    <th className="p-3 text-left text-xs font-bold uppercase">Controls / Mitigation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#dde3ec]">
                  <tr>
                    <td className="p-3 text-sm">Long distance ({">"}100 km)</td>
                    <td className="p-3 text-center">
                      <input type="checkbox" name="riskLongDistance" checked={formData.riskLongDistance} onChange={handleChange} />
                    </td>
                    <td className="p-3">
                      <input type="text" name="riskLongDistanceControls" className="w-full border border-[#dde3ec] p-1 rounded text-sm" value={formData.riskLongDistanceControls} onChange={handleChange} />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 text-sm">Off-road / Desert travel</td>
                    <td className="p-3 text-center">
                      <input type="checkbox" name="riskOffRoad" checked={formData.riskOffRoad} onChange={handleChange} />
                    </td>
                    <td className="p-3">
                      <input type="text" name="riskOffRoadControls" className="w-full border border-[#dde3ec] p-1 rounded text-sm" value={formData.riskOffRoadControls} onChange={handleChange} />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 text-sm">Night travel (sunset to sunrise)</td>
                    <td className="p-3 text-center">
                      <input type="checkbox" name="riskNightTravel" checked={formData.riskNightTravel} onChange={handleChange} />
                    </td>
                    <td className="p-3">
                      <input type="text" name="riskNightTravelControls" className="w-full border border-[#dde3ec] p-1 rounded text-sm" value={formData.riskNightTravelControls} onChange={handleChange} />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 text-sm">Adverse weather forecast</td>
                    <td className="p-3 text-center">
                      <input type="checkbox" name="riskWeather" checked={formData.riskWeather} onChange={handleChange} />
                    </td>
                    <td className="p-3">
                      <input type="text" name="riskWeatherControls" className="w-full border border-[#dde3ec] p-1 rounded text-sm" value={formData.riskWeatherControls} onChange={handleChange} />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 text-sm">Driver fatigue risk</td>
                    <td className="p-3 text-center">
                      <input type="checkbox" name="riskFatigue" checked={formData.riskFatigue} onChange={handleChange} />
                    </td>
                    <td className="p-3">
                      <input type="text" name="riskFatigueControls" className="w-full border border-[#dde3ec] p-1 rounded text-sm" value={formData.riskFatigueControls} onChange={handleChange} />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 text-sm">Heavy load / equipment transport</td>
                    <td className="p-3 text-center">
                      <input type="checkbox" name="riskHeavyLoad" checked={formData.riskHeavyLoad} onChange={handleChange} />
                    </td>
                    <td className="p-3">
                      <input type="text" name="riskHeavyLoadControls" className="w-full border border-[#dde3ec] p-1 rounded text-sm" value={formData.riskHeavyLoadControls} onChange={handleChange} />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 text-sm">Other risks</td>
                    <td className="p-3 text-center">
                      <input type="checkbox" name="riskOther" checked={formData.riskOther} onChange={handleChange} />
                    </td>
                    <td className="p-3">
                      <input type="text" name="riskOtherControls" className="w-full border border-[#dde3ec] p-1 rounded text-sm" value={formData.riskOtherControls} onChange={handleChange} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Pre-Trip Checks Section */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 uppercase">
              Pre-Trip Checks
            </div>
            <div className="border border-[#dde3ec] rounded overflow-hidden bg-white">
              <table className="w-full border-collapse">
                <tbody className="divide-y divide-[#dde3ec]">
                  <tr>
                    <td className="p-3 text-sm">Vehicle pre-start inspection completed? (attach checklist if required)</td>
                    <td className="p-3 text-center w-16">
                      <label className="flex items-center justify-center space-x-2">
                        <input type="checkbox" name="checkPreStart" checked={formData.checkPreStart} onChange={handleChange} />
                        <span className="text-xs font-bold">Yes</span>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 text-sm">Driver rested? (min 10 hours since last shift)</td>
                    <td className="p-3 text-center w-16">
                      <label className="flex items-center justify-center space-x-2">
                        <input type="checkbox" name="checkRested" checked={formData.checkRested} onChange={handleChange} />
                        <span className="text-xs font-bold">Yes</span>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 text-sm">Fuel sufficient for round trip + reserve?</td>
                    <td className="p-3 text-center w-16">
                      <label className="flex items-center justify-center space-x-2">
                        <input type="checkbox" name="checkFuel" checked={formData.checkFuel} onChange={handleChange} />
                        <span className="text-xs font-bold">Yes</span>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 text-sm">Emergency kit on board? (water, recovery gear, first aid, fire extinguisher)</td>
                    <td className="p-3 text-center w-16">
                      <label className="flex items-center justify-center space-x-2">
                        <input type="checkbox" name="checkEmergencyKit" checked={formData.checkEmergencyKit} onChange={handleChange} />
                        <span className="text-xs font-bold">Yes</span>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 text-sm">Communication equipment functional? (GPS, sat phone/radio, mobile)</td>
                    <td className="p-3 text-center w-16">
                      <label className="flex items-center justify-center space-x-2">
                        <input type="checkbox" name="checkCommEquipment" checked={formData.checkCommEquipment} onChange={handleChange} />
                        <span className="text-xs font-bold">Yes</span>
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Emergency & Communication Plan Section */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 uppercase">
              Emergency & Communication Plan
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border border-[#dde3ec] p-4 rounded bg-white mb-4 text-sm">
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">Nearest Medical Facility</label>
                <input type="text" name="medicalFacility" className="border border-[#dde3ec] p-2 rounded" value={formData.medicalFacility} onChange={handleChange} />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">Distance (km)</label>
                <input type="number" name="medicalDistance" className="border border-[#dde3ec] p-2 rounded" value={formData.medicalDistance} onChange={handleChange} />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">Time (min)</label>
                <input type="number" name="medicalTime" className="border border-[#dde3ec] p-2 rounded" value={formData.medicalTime} onChange={handleChange} />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">Clinic along Route</label>
                <input type="text" name="clinicRoute" className="border border-[#dde3ec] p-2 rounded" value={formData.clinicRoute} onChange={handleChange} />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">Distance (km)</label>
                <input type="number" name="clinicDistance" className="border border-[#dde3ec] p-2 rounded" value={formData.clinicDistance} onChange={handleChange} />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">Time (min)</label>
                <input type="number" name="clinicTime" className="border border-[#dde3ec] p-2 rounded" value={formData.clinicTime} onChange={handleChange} />
              </div>
            </div>

            <div className="bg-gray-50 border border-[#dde3ec] p-4 rounded mb-4">
              <h4 className="font-bold text-xs uppercase mb-2">Emergency Contacts</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>Unified Emergency: <span className="font-bold">911</span></div>
                <div>HSE Manager: <span className="font-bold">+966 53 565 6688</span></div>
                <div>Supervisor: <span className="font-bold">+966 11 165 6688</span></div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 border border-[#dde3ec] p-4 rounded bg-white">
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">Check-in Protocol (Report on milestones)</label>
                <textarea
                  name="checkInProtocol"
                  rows={2}
                  placeholder="e.g., every 2 hours or at waypoint"
                  className="border border-[#dde3ec] p-2 rounded text-sm"
                  value={formData.checkInProtocol}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <input type="checkbox" name="triggerErp" checked={formData.triggerErp} onChange={handleChange} />
                <label className="font-bold">If no check-in within 30 min, trigger Emergency Response Plan?</label>
              </div>
            </div>
          </section>

          {/* Approval Section */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 uppercase">
              Approval
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-[#dde3ec] p-4 rounded bg-white">
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">Supervisor / Journey Coordinator Approval</label>
                <select
                  name="supervisorApproval"
                  className="border border-[#dde3ec] p-2 rounded bg-white"
                  value={formData.supervisorApproval}
                  onChange={handleChange}
                >
                  <option value="">Select Status</option>
                  <option value="Yes">Approved (Yes)</option>
                  <option value="No">Rejected (No)</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">If No, reason:</label>
                <input type="text" name="supervisorReason" className="border border-[#dde3ec] p-2 rounded" value={formData.supervisorReason} onChange={handleChange} />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">Name</label>
                <input type="text" name="supervisorName" className="border border-[#dde3ec] p-2 rounded" value={formData.supervisorName} onChange={handleChange} />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">Position</label>
                <input type="text" name="supervisorPosition" className="border border-[#dde3ec] p-2 rounded" value={formData.supervisorPosition} onChange={handleChange} />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">Date</label>
                <input type="date" name="supervisorDate" className="border border-[#dde3ec] p-2 rounded" value={formData.supervisorDate} onChange={handleChange} />
              </div>
            </div>
          </section>

          {/* HSE Review Section */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 uppercase text-sm">
              HSE Review (for high-risk journeys)
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-[#dde3ec] p-4 rounded bg-white">
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">Reviewed By</label>
                <input type="text" name="hseReviewedBy" className="border border-[#dde3ec] p-2 rounded" value={formData.hseReviewedBy} onChange={handleChange} />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">Date</label>
                <input type="date" name="hseReviewDate" className="border border-[#dde3ec] p-2 rounded" value={formData.hseReviewDate} onChange={handleChange} />
              </div>
              <div className="md:col-span-2 flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">Comments</label>
                <textarea name="hseComments" rows={2} className="border border-[#dde3ec] p-2 rounded" value={formData.hseComments} onChange={handleChange} />
              </div>
            </div>
          </section>

          {/* Actual Completion Section */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 uppercase text-sm">
              Actual Completion (post-journey)
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-[#dde3ec] p-4 rounded bg-white">
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">Actual Arrival Time</label>
                <input type="time" name="actualArrivalTime" className="border border-[#dde3ec] p-2 rounded" value={formData.actualArrivalTime} onChange={handleChange} />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">Any deviations / incidents?</label>
                <select name="deviations" className="border border-[#dde3ec] p-2 rounded bg-white" value={formData.deviations} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">If Yes, Flash Notification Ref #</label>
                <input type="text" name="flashNotificationRef" className="border border-[#dde3ec] p-2 rounded" value={formData.flashNotificationRef} onChange={handleChange} />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase mb-1">Date of Completion</label>
                <input type="date" name="completionDate" className="border border-[#dde3ec] p-2 rounded" value={formData.completionDate} onChange={handleChange} />
              </div>
            </div>
          </section>

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded text-sm">
              {error}
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={mutation.isPending}
              className={`bg-[#081C2E] text-white px-8 py-3 rounded font-bold uppercase tracking-wider hover:bg-opacity-90 transition-all ${mutation.isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {mutation.isPending ? "Submitting..." : "Submit Journey Plan"}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
