import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_039() {
  const [formData, setFormData] = useState({
    lockoutOfficer: "",
    siteLocation: "",
    reportingPeriod: "",
    lotoEvents: [
      {
        no: 1,
        equipmentId: "",
        description: "",
        lockDate: "",
        lockTime: "",
        lockedOutBy: "",
        lockSignature: "",
        reason: "",
        energyType: "",
        testedDead: false,
        returnDate: "",
        returnTime: "",
        returnedBy: "",
        returnSignature: "",
      },
    ],
    signOff: {
      lotoOfficerName: "",
      lotoOfficerSig: "",
      lotoOfficerDate: "",
      hseManagerName: "",
      hseManagerSig: "",
      hseManagerDate: "",
      opsManagerName: "",
      opsManagerSig: "",
      opsManagerDate: "",
    },
  });

  const mutation = trpc.formSubmissions.submit.useMutation();
  const [submitted, setSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEventChange = (index: number, field: string, value: any) => {
    const newEvents = [...formData.lotoEvents];
    newEvents[index] = { ...newEvents[index], [field]: value };
    setFormData((prev) => ({ ...prev, lotoEvents: newEvents }));
  };

  const addEventRow = () => {
    setFormData((prev) => ({
      ...prev,
      lotoEvents: [
        ...prev.lotoEvents,
        {
          no: prev.lotoEvents.length + 1,
          equipmentId: "",
          description: "",
          lockDate: "",
          lockTime: "",
          lockedOutBy: "",
          lockSignature: "",
          reason: "",
          energyType: "",
          testedDead: false,
          returnDate: "",
          returnTime: "",
          returnedBy: "",
          returnSignature: "",
        },
      ],
    }));
  };

  const handleSignOffChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      signOff: { ...prev.signOff, [field]: value },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const headers = [
      "Lockout Officer",
      "Site / Location",
      "Reporting Period",
      ...formData.lotoEvents.flatMap((_, i) => [
        `Event ${i + 1} Equipment ID`,
        `Event ${i + 1} Description`,
        `Event ${i + 1} Lock Date`,
        `Event ${i + 1} Lock Time`,
        `Event ${i + 1} Locked Out By`,
        `Event ${i + 1} Lock Signature`,
        `Event ${i + 1} Reason`,
        `Event ${i + 1} Energy Type`,
        `Event ${i + 1} Tested Dead?`,
        `Event ${i + 1} Return Date`,
        `Event ${i + 1} Return Time`,
        `Event ${i + 1} Returned By`,
        `Event ${i + 1} Return Signature`,
      ]),
      "LOTO Officer Name",
      "LOTO Officer Signature",
      "LOTO Officer Date",
      "HSE Manager Name",
      "HSE Manager Signature",
      "HSE Manager Date",
      "Operations Manager Name",
      "Operations Manager Signature",
      "Operations Manager Date",
    ];

    const values = [
      formData.lockoutOfficer,
      formData.siteLocation,
      formData.reportingPeriod,
      ...formData.lotoEvents.flatMap((event) => [
        event.equipmentId,
        event.description,
        event.lockDate,
        event.lockTime,
        event.lockedOutBy,
        event.lockSignature,
        event.reason,
        event.energyType,
        event.testedDead ? "Yes" : "No",
        event.returnDate,
        event.returnTime,
        event.returnedBy,
        event.returnSignature,
      ]),
      formData.signOff.lotoOfficerName,
      formData.signOff.lotoOfficerSig,
      formData.signOff.lotoOfficerDate,
      formData.signOff.hseManagerName,
      formData.signOff.hseManagerSig,
      formData.signOff.hseManagerDate,
      formData.signOff.opsManagerName,
      formData.signOff.opsManagerSig,
      formData.signOff.opsManagerDate,
    ];

    try {
      const result = await mutation.mutateAsync({
        formCode: "TE-IMS-FRM-HSE-039",
        headers,
        values,
      });
      setSheetUrl(result.sheetUrl);
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "An error occurred during submission.");
    }
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-8 text-center">
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            Form submitted successfully. View register:{" "}
            <a href={sheetUrl} target="_blank" rel="noopener noreferrer" className="underline font-bold">
              Google Sheet
            </a>
          </div>
          <Link href="/">
            <button className="bg-[#081C2E] text-white px-6 py-2 rounded">Return to Portal</button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-[95%] mx-auto p-4 font-['Nunito_Sans'] text-[#081C2E]">
        {/* Breadcrumb */}
        <nav className="mb-4 text-sm">
          <Link href="/" className="text-[#C49A28] hover:underline">
            ← Portal Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-500">FRM</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="font-semibold text-[#081C2E]">LOTO Logout Logbook</span>
        </nav>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Document Control Table */}
          <div className="overflow-x-auto border border-[#dde3ec]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#081C2E] text-white uppercase text-xs">
                  <th className="p-2 border border-[#dde3ec]">Document Code</th>
                  <th className="p-2 border border-[#dde3ec]">Revision</th>
                  <th className="p-2 border border-[#dde3ec]">Date</th>
                  <th className="p-2 border border-[#dde3ec]">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-sm">
                  <td className="p-2 border border-[#dde3ec] font-bold">TE-IMS-FRM-HSE-039</td>
                  <td className="p-2 border border-[#dde3ec]">Rev01</td>
                  <td className="p-2 border border-[#dde3ec]">09 Apr 2026</td>
                  <td className="p-2 border border-[#dde3ec]">Approved for Implementation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h1 className="text-2xl font-bold text-center py-4 border-b-2 border-[#C49A28] uppercase">
            LOTO Logout Logbook
          </h1>

          {/* LOTO Logbook Details */}
          <div className="border border-[#dde3ec]">
            <div className="bg-[#081C2E] text-white p-2 font-bold uppercase text-sm">LOTO Logbook Details</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-[#f4f6f9]">
              <div>
                <label className="block text-xs font-bold mb-1 uppercase">Lockout Officer *</label>
                <input
                  type="text"
                  name="lockoutOfficer"
                  required
                  className="w-full p-2 border border-[#dde3ec] rounded"
                  value={formData.lockoutOfficer}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-xs font-bold mb-1 uppercase">Site / Location *</label>
                <input
                  type="text"
                  name="siteLocation"
                  required
                  className="w-full p-2 border border-[#dde3ec] rounded"
                  value={formData.siteLocation}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-xs font-bold mb-1 uppercase">Reporting Period *</label>
                <input
                  type="text"
                  name="reportingPeriod"
                  required
                  className="w-full p-2 border border-[#dde3ec] rounded"
                  value={formData.reportingPeriod}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          {/* LOTO Event Log */}
          <div className="border border-[#dde3ec]">
            <div className="bg-[#081C2E] text-white p-2 font-bold uppercase text-sm flex justify-between items-center">
              <span>LOTO Event Log</span>
              <button
                type="button"
                onClick={addEventRow}
                className="bg-[#C49A28] text-white px-3 py-1 rounded text-xs hover:bg-opacity-90"
              >
                + Add Row
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#081C2E] text-white uppercase">
                    <th className="p-2 border border-[#dde3ec] min-w-[30px]">No.</th>
                    <th className="p-2 border border-[#dde3ec] min-w-[120px]">Equipment / Plant ID *</th>
                    <th className="p-2 border border-[#dde3ec] min-w-[150px]">Description of Work</th>
                    <th className="p-2 border border-[#dde3ec] min-w-[100px]">Lock Date</th>
                    <th className="p-2 border border-[#dde3ec] min-w-[80px]">Lock Time</th>
                    <th className="p-2 border border-[#dde3ec] min-w-[120px]">Locked Out By</th>
                    <th className="p-2 border border-[#dde3ec] min-w-[120px]">Lock Signature</th>
                    <th className="p-2 border border-[#dde3ec] min-w-[120px]">Reason for Isolation</th>
                    <th className="p-2 border border-[#dde3ec] min-w-[100px]">Energy Type</th>
                    <th className="p-2 border border-[#dde3ec] min-w-[60px]">Tested Dead?</th>
                    <th className="p-2 border border-[#dde3ec] min-w-[100px]">Return Date</th>
                    <th className="p-2 border border-[#dde3ec] min-w-[80px]">Return Time</th>
                    <th className="p-2 border border-[#dde3ec] min-w-[120px]">Returned By</th>
                    <th className="p-2 border border-[#dde3ec] min-w-[120px]">Return Signature</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.lotoEvents.map((event, index) => (
                    <tr key={index} className="bg-white">
                      <td className="p-1 border border-[#dde3ec] text-center">{event.no}</td>
                      <td className="p-1 border border-[#dde3ec]">
                        <input
                          type="text"
                          required
                          className="w-full p-1 border border-[#dde3ec] rounded"
                          value={event.equipmentId}
                          onChange={(e) => handleEventChange(index, "equipmentId", e.target.value)}
                        />
                      </td>
                      <td className="p-1 border border-[#dde3ec]">
                        <textarea
                          rows={1}
                          className="w-full p-1 border border-[#dde3ec] rounded"
                          value={event.description}
                          onChange={(e) => handleEventChange(index, "description", e.target.value)}
                        />
                      </td>
                      <td className="p-1 border border-[#dde3ec]">
                        <input
                          type="date"
                          className="w-full p-1 border border-[#dde3ec] rounded text-[10px]"
                          value={event.lockDate}
                          onChange={(e) => handleEventChange(index, "lockDate", e.target.value)}
                        />
                      </td>
                      <td className="p-1 border border-[#dde3ec]">
                        <input
                          type="time"
                          className="w-full p-1 border border-[#dde3ec] rounded text-[10px]"
                          value={event.lockTime}
                          onChange={(e) => handleEventChange(index, "lockTime", e.target.value)}
                        />
                      </td>
                      <td className="p-1 border border-[#dde3ec]">
                        <input
                          type="text"
                          className="w-full p-1 border border-[#dde3ec] rounded"
                          value={event.lockedOutBy}
                          onChange={(e) => handleEventChange(index, "lockedOutBy", e.target.value)}
                        />
                      </td>
                      <td className="p-1 border border-[#dde3ec]">
                        <input
                          type="text"
                          placeholder="Full name"
                          className="w-full p-1 border border-[#dde3ec] rounded italic"
                          value={event.lockSignature}
                          onChange={(e) => handleEventChange(index, "lockSignature", e.target.value)}
                        />
                      </td>
                      <td className="p-1 border border-[#dde3ec]">
                        <input
                          type="text"
                          className="w-full p-1 border border-[#dde3ec] rounded"
                          value={event.reason}
                          onChange={(e) => handleEventChange(index, "reason", e.target.value)}
                        />
                      </td>
                      <td className="p-1 border border-[#dde3ec]">
                        <select
                          className="w-full p-1 border border-[#dde3ec] rounded"
                          value={event.energyType}
                          onChange={(e) => handleEventChange(index, "energyType", e.target.value)}
                        >
                          <option value="">Select...</option>
                          <option value="Electrical">Electrical</option>
                          <option value="Mechanical">Mechanical</option>
                          <option value="Hydraulic">Hydraulic</option>
                          <option value="Pneumatic">Pneumatic</option>
                          <option value="Thermal">Thermal</option>
                          <option value="Chemical">Chemical</option>
                          <option value="Other">Other</option>
                        </select>
                      </td>
                      <td className="p-1 border border-[#dde3ec] text-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4"
                          checked={event.testedDead}
                          onChange={(e) => handleEventChange(index, "testedDead", e.target.checked)}
                        />
                      </td>
                      <td className="p-1 border border-[#dde3ec]">
                        <input
                          type="date"
                          className="w-full p-1 border border-[#dde3ec] rounded text-[10px]"
                          value={event.returnDate}
                          onChange={(e) => handleEventChange(index, "returnDate", e.target.value)}
                        />
                      </td>
                      <td className="p-1 border border-[#dde3ec]">
                        <input
                          type="time"
                          className="w-full p-1 border border-[#dde3ec] rounded text-[10px]"
                          value={event.returnTime}
                          onChange={(e) => handleEventChange(index, "returnTime", e.target.value)}
                        />
                      </td>
                      <td className="p-1 border border-[#dde3ec]">
                        <input
                          type="text"
                          className="w-full p-1 border border-[#dde3ec] rounded"
                          value={event.returnedBy}
                          onChange={(e) => handleEventChange(index, "returnedBy", e.target.value)}
                        />
                      </td>
                      <td className="p-1 border border-[#dde3ec]">
                        <input
                          type="text"
                          placeholder="Full name"
                          className="w-full p-1 border border-[#dde3ec] rounded italic"
                          value={event.returnSignature}
                          onChange={(e) => handleEventChange(index, "returnSignature", e.target.value)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sign-off Section */}
          <div className="border border-[#dde3ec]">
            <div className="bg-[#081C2E] text-white p-2 font-bold uppercase text-sm">Sign-off</div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f4f6f9] text-[#081C2E] uppercase text-xs">
                    <th className="p-2 border border-[#dde3ec]">Role</th>
                    <th className="p-2 border border-[#dde3ec]">Name</th>
                    <th className="p-2 border border-[#dde3ec]">Signature (Full Name)</th>
                    <th className="p-2 border border-[#dde3ec]">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border border-[#dde3ec] font-bold text-xs">LOTO Officer</td>
                    <td className="p-2 border border-[#dde3ec]">
                      <input
                        type="text"
                        className="w-full p-1 border border-[#dde3ec] rounded"
                        value={formData.signOff.lotoOfficerName}
                        onChange={(e) => handleSignOffChange("lotoOfficerName", e.target.value)}
                      />
                    </td>
                    <td className="p-2 border border-[#dde3ec]">
                      <input
                        type="text"
                        placeholder="Digital Signature"
                        className="w-full p-1 border border-[#dde3ec] rounded italic"
                        value={formData.signOff.lotoOfficerSig}
                        onChange={(e) => handleSignOffChange("lotoOfficerSig", e.target.value)}
                      />
                    </td>
                    <td className="p-2 border border-[#dde3ec]">
                      <input
                        type="date"
                        className="w-full p-1 border border-[#dde3ec] rounded"
                        value={formData.signOff.lotoOfficerDate}
                        onChange={(e) => handleSignOffChange("lotoOfficerDate", e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-[#dde3ec] font-bold text-xs">HSE Manager</td>
                    <td className="p-2 border border-[#dde3ec]">
                      <input
                        type="text"
                        className="w-full p-1 border border-[#dde3ec] rounded"
                        value={formData.signOff.hseManagerName}
                        onChange={(e) => handleSignOffChange("hseManagerName", e.target.value)}
                      />
                    </td>
                    <td className="p-2 border border-[#dde3ec]">
                      <input
                        type="text"
                        placeholder="Digital Signature"
                        className="w-full p-1 border border-[#dde3ec] rounded italic"
                        value={formData.signOff.hseManagerSig}
                        onChange={(e) => handleSignOffChange("hseManagerSig", e.target.value)}
                      />
                    </td>
                    <td className="p-2 border border-[#dde3ec]">
                      <input
                        type="date"
                        className="w-full p-1 border border-[#dde3ec] rounded"
                        value={formData.signOff.hseManagerDate}
                        onChange={(e) => handleSignOffChange("hseManagerDate", e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-[#dde3ec] font-bold text-xs">Operations Manager</td>
                    <td className="p-2 border border-[#dde3ec]">
                      <input
                        type="text"
                        className="w-full p-1 border border-[#dde3ec] rounded"
                        value={formData.signOff.opsManagerName}
                        onChange={(e) => handleSignOffChange("opsManagerName", e.target.value)}
                      />
                    </td>
                    <td className="p-2 border border-[#dde3ec]">
                      <input
                        type="text"
                        placeholder="Digital Signature"
                        className="w-full p-1 border border-[#dde3ec] rounded italic"
                        value={formData.signOff.opsManagerSig}
                        onChange={(e) => handleSignOffChange("opsManagerSig", e.target.value)}
                      />
                    </td>
                    <td className="p-2 border border-[#dde3ec]">
                      <input
                        type="date"
                        className="w-full p-1 border border-[#dde3ec] rounded"
                        value={formData.signOff.opsManagerDate}
                        onChange={(e) => handleSignOffChange("opsManagerDate", e.target.value)}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Error Message */}
          {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">{error}</div>}

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={mutation.isPending}
              className={`bg-[#081C2E] text-white px-8 py-3 rounded font-bold uppercase hover:bg-opacity-90 transition-all ${
                mutation.isPending ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {mutation.isPending ? "Submitting..." : "Submit Logbook"}
            </button>
          </div>
        </form>

        {/* Revision History */}
        <div className="mt-12 overflow-x-auto border border-[#dde3ec]">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#081C2E] text-white uppercase">
                <th className="p-2 border border-[#dde3ec]">Rev</th>
                <th className="p-2 border border-[#dde3ec]">Date</th>
                <th className="p-2 border border-[#dde3ec]">Description of Changes</th>
                <th className="p-2 border border-[#dde3ec]">Author</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-[#dde3ec]">Rev00</td>
                <td className="p-2 border border-[#dde3ec]">—</td>
                <td className="p-2 border border-[#dde3ec]">Initial issue</td>
                <td className="p-2 border border-[#dde3ec]">—</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#dde3ec]">Rev01</td>
                <td className="p-2 border border-[#dde3ec]">09 Apr 2026</td>
                <td className="p-2 border border-[#dde3ec]">
                  Expanded to 14-column landscape format. Added Equipment ID, Description, Energy Type, Tested Dead
                  columns. Added officer details and sign-off. Reformatted to TE IMS standard.
                </td>
                <td className="p-2 border border-[#dde3ec]">IMS Team</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
