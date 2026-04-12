import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_020() {
  const [submitted, setSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState("");

  // Form Header State
  const [siteBuilding, setSiteBuilding] = useState("");
  const [monthYear, setMonthYear] = useState("");
  const [inspectorName, setInspectorName] = useState("");
  const [inspectionDate, setInspectionDate] = useState("");
  const [inspectionFrequency, setInspectionFrequency] = useState("Monthly");
  const [employeeId, setEmployeeId] = useState("");

  // Inspection Log Table State
  const [logRows, setLogRows] = useState(
    Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      tag: "",
      location: "",
      type: "",
      size: "",
      cylinderCond: "",
      pressureGauge: "",
      pinSeal: "",
      hoseNozzle: "",
      signage: "",
      accessClear: "",
      expiryDate: "",
      lastService: "",
      status: "",
    }))
  );

  // Deficiency Report Table State
  const [deficiencyRows, setDeficiencyRows] = useState(
    Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      tag: "",
      deficiency: "",
      action: "",
      responsible: "",
      dateResolved: "",
    }))
  );

  // Sign-Off State
  const [signOff, setSignOff] = useState({
    inspector: "",
    inspectorDate: "",
    hseOfficer: "",
    hseOfficerDate: "",
    siteManager: "",
    siteManagerDate: "",
  });

  const mutation = trpc.formSubmissions.submit.useMutation();

  const addLogRow = () => {
    setLogRows([
      ...logRows,
      {
        id: logRows.length + 1,
        tag: "",
        location: "",
        type: "",
        size: "",
        cylinderCond: "",
        pressureGauge: "",
        pinSeal: "",
        hoseNozzle: "",
        signage: "",
        accessClear: "",
        expiryDate: "",
        lastService: "",
        status: "",
      },
    ]);
  };

  const addDeficiencyRow = () => {
    setDeficiencyRows([
      ...deficiencyRows,
      {
        id: deficiencyRows.length + 1,
        tag: "",
        deficiency: "",
        action: "",
        responsible: "",
        dateResolved: "",
      },
    ]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const headers = [
      "Site / Building",
      "Month / Year",
      "Inspector Name",
      "Inspection Date",
      "Inspection Frequency",
      "Employee ID",
      ...logRows.flatMap((r, i) => [
        `Log_${i + 1}_Tag`,
        `Log_${i + 1}_Location`,
        `Log_${i + 1}_Type`,
        `Log_${i + 1}_Size`,
        `Log_${i + 1}_CylinderCond`,
        `Log_${i + 1}_PressureGauge`,
        `Log_${i + 1}_PinSeal`,
        `Log_${i + 1}_HoseNozzle`,
        `Log_${i + 1}_Signage`,
        `Log_${i + 1}_AccessClear`,
        `Log_${i + 1}_ExpiryDate`,
        `Log_${i + 1}_LastService`,
        `Log_${i + 1}_Status`,
      ]),
      ...deficiencyRows.flatMap((r, i) => [
        `Def_${i + 1}_Tag`,
        `Def_${i + 1}_Deficiency`,
        `Def_${i + 1}_Action`,
        `Def_${i + 1}_Responsible`,
        `Def_${i + 1}_DateResolved`,
      ]),
      "SignOff_Inspector",
      "SignOff_InspectorDate",
      "SignOff_HSE_Officer",
      "SignOff_HSE_OfficerDate",
      "SignOff_Site_Manager",
      "SignOff_Site_ManagerDate",
    ];

    const values = [
      siteBuilding,
      monthYear,
      inspectorName,
      inspectionDate,
      inspectionFrequency,
      employeeId,
      ...logRows.flatMap((r) => [
        r.tag,
        r.location,
        r.type,
        r.size,
        r.cylinderCond,
        r.pressureGauge,
        r.pinSeal,
        r.hoseNozzle,
        r.signage,
        r.accessClear,
        r.expiryDate,
        r.lastService,
        r.status,
      ]),
      ...deficiencyRows.flatMap((r) => [
        r.tag,
        r.deficiency,
        r.action,
        r.responsible,
        r.dateResolved,
      ]),
      signOff.inspector,
      signOff.inspectorDate,
      signOff.hseOfficer,
      signOff.hseOfficerDate,
      signOff.siteManager,
      signOff.siteManagerDate,
    ];

    try {
      const result = await mutation.mutateAsync({
        formCode: "TE-IMS-FRM-HSE-020",
        headers,
        values,
      });
      setSheetUrl(result.sheetUrl);
      setSubmitted(true);
    } catch (err) {
      setError("Failed to submit form. Please try again.");
    }
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto py-10 px-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Form submitted successfully</h2>
            <p className="text-green-700 mb-6">
              Your inspection log has been recorded in the central register.
            </p>
            <a
              href={sheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C49A28] text-white px-6 py-2 rounded-md hover:bg-[#A37F21] transition-colors"
            >
              View register
            </a>
            <div className="mt-8">
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
      <div className="max-w-[95%] mx-auto py-6 px-4 font-['Nunito_Sans']">
        <div className="mb-6">
          <Link href="/" className="text-[#081C2E] hover:underline mb-4 inline-block">
            ← Portal Home
          </Link>
          <nav className="text-sm text-gray-500 mb-2">
            <Link href="/" className="text-gray-500 hover:text-[#C49A28]">Portal Home</Link> <span className="text-gray-400 mx-1">/</span> <Link href="/docs/frm" className="text-gray-500 hover:text-[#C49A28]">FRM</Link> <span className="text-gray-400 mx-1">/</span> <span className="font-semibold text-[#081C2E]">Fire Extinguisher Inspection Log</span>
          </nav>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-sm border border-[#dde3ec] rounded-lg overflow-hidden">
          {/* Document Control Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-b border-[#dde3ec]">
              <thead>
                <tr className="bg-[#081C2E] text-white">
                  <th className="px-4 py-2 text-left border-r border-white/20">Document Code</th>
                  <th className="px-4 py-2 text-left border-r border-white/20">Revision</th>
                  <th className="px-4 py-2 text-left border-r border-white/20">Date</th>
                  <th className="px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 border-r border-[#dde3ec]">TE-IMS-FRM-HSE-020</td>
                  <td className="px-4 py-2 border-r border-[#dde3ec]">02</td>
                  <td className="px-4 py-2 border-r border-[#dde3ec]">April 2026</td>
                  <td className="px-4 py-2">Approved for Implementation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-6">
            <h1 className="text-2xl font-bold text-[#081C2E] mb-6 text-center underline decoration-[#C49A28] underline-offset-8">
              FIRE EXTINGUISHER INSPECTION LOG
            </h1>

            {/* Header Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 bg-[#f4f6f9] p-4 rounded-md border border-[#dde3ec]">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-[#081C2E] mb-1">Site / Building *</label>
                  <input
                    type="text"
                    required
                    value={siteBuilding}
                    onChange={(e) => setSiteBuilding(e.target.value)}
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#081C2E] mb-1">Inspector Name *</label>
                  <input
                    type="text"
                    required
                    value={inspectorName}
                    onChange={(e) => setInspectorName(e.target.value)}
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#081C2E] mb-1">Inspection Frequency</label>
                  <input
                    type="text"
                    value={inspectionFrequency}
                    onChange={(e) => setInspectionFrequency(e.target.value)}
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-[#081C2E] mb-1">Month / Year *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. April 2026"
                    value={monthYear}
                    onChange={(e) => setMonthYear(e.target.value)}
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#081C2E] mb-1">Inspection Date *</label>
                  <input
                    type="date"
                    required
                    value={inspectionDate}
                    onChange={(e) => setInspectionDate(e.target.value)}
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#081C2E] mb-1">Employee ID</label>
                  <input
                    type="text"
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                    className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Inspection Checklist Instructions */}
            <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-[#C49A28] text-sm">
              <p className="font-bold text-[#081C2E] mb-1 text-base">Inspection Checklist</p>
              <p className="mb-2">For each extinguisher, inspect all items and mark status. Record any deficiencies below.</p>
              <div className="flex flex-wrap gap-4 font-semibold text-[#081C2E]">
                <span>OK = Satisfactory</span>
                <span>R = Requires Replacement</span>
                <span>S = Requires Service</span>
                <span>D = Damaged / Corroded</span>
              </div>
            </div>

            {/* Main Inspection Table */}
            <div className="mb-8 overflow-x-auto">
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold text-sm">
                FIRE EXTINGUISHER INSPECTION LOG
              </div>
              <table className="w-full text-xs border-collapse border border-[#dde3ec]">
                <thead>
                  <tr className="bg-[#f4f6f9] text-[#081C2E]">
                    <th className="border border-[#dde3ec] p-1 w-8">#</th>
                    <th className="border border-[#dde3ec] p-1">ID / Tag</th>
                    <th className="border border-[#dde3ec] p-1">Location</th>
                    <th className="border border-[#dde3ec] p-1">Type</th>
                    <th className="border border-[#dde3ec] p-1">Size</th>
                    <th className="border border-[#dde3ec] p-1">Cylinder Cond.</th>
                    <th className="border border-[#dde3ec] p-1">Pressure Gauge</th>
                    <th className="border border-[#dde3ec] p-1">Pin / Seal</th>
                    <th className="border border-[#dde3ec] p-1">Hose / Nozzle</th>
                    <th className="border border-[#dde3ec] p-1">Signage</th>
                    <th className="border border-[#dde3ec] p-1">Access Clear</th>
                    <th className="border border-[#dde3ec] p-1">Expiry Date</th>
                    <th className="border border-[#dde3ec] p-1">Last Service</th>
                    <th className="border border-[#dde3ec] p-1">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {logRows.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-[#dde3ec] p-1 text-center font-bold">{row.id}</td>
                      <td className="border border-[#dde3ec] p-0">
                        <input
                          type="text"
                          className="w-full p-1 border-none focus:ring-0 outline-none bg-transparent"
                          value={row.tag}
                          onChange={(e) => {
                            const newRows = [...logRows];
                            newRows[index].tag = e.target.value;
                            setLogRows(newRows);
                          }}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-0">
                        <input
                          type="text"
                          className="w-full p-1 border-none focus:ring-0 outline-none bg-transparent"
                          value={row.location}
                          onChange={(e) => {
                            const newRows = [...logRows];
                            newRows[index].location = e.target.value;
                            setLogRows(newRows);
                          }}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-0">
                        <input
                          type="text"
                          className="w-full p-1 border-none focus:ring-0 outline-none bg-transparent"
                          value={row.type}
                          onChange={(e) => {
                            const newRows = [...logRows];
                            newRows[index].type = e.target.value;
                            setLogRows(newRows);
                          }}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-0">
                        <input
                          type="text"
                          className="w-full p-1 border-none focus:ring-0 outline-none bg-transparent"
                          value={row.size}
                          onChange={(e) => {
                            const newRows = [...logRows];
                            newRows[index].size = e.target.value;
                            setLogRows(newRows);
                          }}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-0">
                        <input
                          type="text"
                          className="w-full p-1 border-none focus:ring-0 outline-none bg-transparent"
                          value={row.cylinderCond}
                          onChange={(e) => {
                            const newRows = [...logRows];
                            newRows[index].cylinderCond = e.target.value;
                            setLogRows(newRows);
                          }}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-0">
                        <input
                          type="text"
                          className="w-full p-1 border-none focus:ring-0 outline-none bg-transparent"
                          value={row.pressureGauge}
                          onChange={(e) => {
                            const newRows = [...logRows];
                            newRows[index].pressureGauge = e.target.value;
                            setLogRows(newRows);
                          }}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-0 text-center">
                         <input
                          type="checkbox"
                          checked={row.pinSeal === "true"}
                          onChange={(e) => {
                            const newRows = [...logRows];
                            newRows[index].pinSeal = e.target.checked ? "true" : "false";
                            setLogRows(newRows);
                          }}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-0 text-center">
                         <input
                          type="checkbox"
                          checked={row.hoseNozzle === "true"}
                          onChange={(e) => {
                            const newRows = [...logRows];
                            newRows[index].hoseNozzle = e.target.checked ? "true" : "false";
                            setLogRows(newRows);
                          }}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-0 text-center">
                         <input
                          type="checkbox"
                          checked={row.signage === "true"}
                          onChange={(e) => {
                            const newRows = [...logRows];
                            newRows[index].signage = e.target.checked ? "true" : "false";
                            setLogRows(newRows);
                          }}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-0 text-center">
                         <input
                          type="checkbox"
                          checked={row.accessClear === "true"}
                          onChange={(e) => {
                            const newRows = [...logRows];
                            newRows[index].accessClear = e.target.checked ? "true" : "false";
                            setLogRows(newRows);
                          }}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-0">
                        <input
                          type="date"
                          className="w-full p-1 border-none focus:ring-0 outline-none bg-transparent"
                          value={row.expiryDate}
                          onChange={(e) => {
                            const newRows = [...logRows];
                            newRows[index].expiryDate = e.target.value;
                            setLogRows(newRows);
                          }}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-0">
                        <input
                          type="date"
                          className="w-full p-1 border-none focus:ring-0 outline-none bg-transparent"
                          value={row.lastService}
                          onChange={(e) => {
                            const newRows = [...logRows];
                            newRows[index].lastService = e.target.value;
                            setLogRows(newRows);
                          }}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-0">
                        <select
                          className="w-full p-1 border-none focus:ring-0 outline-none bg-transparent"
                          value={row.status}
                          onChange={(e) => {
                            const newRows = [...logRows];
                            newRows[index].status = e.target.value;
                            setLogRows(newRows);
                          }}
                        >
                          <option value="">Select</option>
                          <option value="OK">OK</option>
                          <option value="R">R</option>
                          <option value="S">S</option>
                          <option value="D">D</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                type="button"
                onClick={addLogRow}
                className="mt-2 text-sm text-[#C49A28] font-bold hover:underline"
              >
                + Add Another Row
              </button>
            </div>

            {/* Deficiency Report */}
            <div className="mb-8 overflow-x-auto">
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold text-sm">
                DEFICIENCY REPORT
              </div>
              <table className="w-full text-xs border-collapse border border-[#dde3ec]">
                <thead>
                  <tr className="bg-[#f4f6f9] text-[#081C2E]">
                    <th className="border border-[#dde3ec] p-2 w-8">#</th>
                    <th className="border border-[#dde3ec] p-2">Ext. ID / Tag</th>
                    <th className="border border-[#dde3ec] p-2">Deficiency Found</th>
                    <th className="border border-[#dde3ec] p-2">Corrective Action Taken</th>
                    <th className="border border-[#dde3ec] p-2">Responsible</th>
                    <th className="border border-[#dde3ec] p-2">Date Resolved</th>
                  </tr>
                </thead>
                <tbody>
                  {deficiencyRows.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-[#dde3ec] p-2 text-center font-bold">{row.id}</td>
                      <td className="border border-[#dde3ec] p-0">
                        <input
                          type="text"
                          className="w-full p-2 border-none focus:ring-0 outline-none bg-transparent"
                          value={row.tag}
                          onChange={(e) => {
                            const newRows = [...deficiencyRows];
                            newRows[index].tag = e.target.value;
                            setDeficiencyRows(newRows);
                          }}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-0">
                        <textarea
                          rows={1}
                          className="w-full p-2 border-none focus:ring-0 outline-none bg-transparent resize-none"
                          value={row.deficiency}
                          onChange={(e) => {
                            const newRows = [...deficiencyRows];
                            newRows[index].deficiency = e.target.value;
                            setDeficiencyRows(newRows);
                          }}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-0">
                        <textarea
                          rows={1}
                          className="w-full p-2 border-none focus:ring-0 outline-none bg-transparent resize-none"
                          value={row.action}
                          onChange={(e) => {
                            const newRows = [...deficiencyRows];
                            newRows[index].action = e.target.value;
                            setDeficiencyRows(newRows);
                          }}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-0">
                        <input
                          type="text"
                          className="w-full p-2 border-none focus:ring-0 outline-none bg-transparent"
                          value={row.responsible}
                          onChange={(e) => {
                            const newRows = [...deficiencyRows];
                            newRows[index].responsible = e.target.value;
                            setDeficiencyRows(newRows);
                          }}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-0">
                        <input
                          type="date"
                          className="w-full p-2 border-none focus:ring-0 outline-none bg-transparent"
                          value={row.dateResolved}
                          onChange={(e) => {
                            const newRows = [...deficiencyRows];
                            newRows[index].dateResolved = e.target.value;
                            setDeficiencyRows(newRows);
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                type="button"
                onClick={addDeficiencyRow}
                className="mt-2 text-sm text-[#C49A28] font-bold hover:underline"
              >
                + Add Another Row
              </button>
            </div>

            {/* Sign-Off Section */}
            <div className="mb-8">
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold text-sm mb-4">
                SIGN-OFF
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4 p-4 border border-[#dde3ec] rounded bg-[#f4f6f9]">
                  <p className="font-bold text-[#081C2E] border-b border-[#dde3ec] pb-2">Inspector</p>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Name (Signature) *</label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      className="w-full p-2 border border-[#dde3ec] rounded bg-white"
                      value={signOff.inspector}
                      onChange={(e) => setSignOff({ ...signOff, inspector: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Date *</label>
                    <input
                      type="date"
                      required
                      className="w-full p-2 border border-[#dde3ec] rounded bg-white"
                      value={signOff.inspectorDate}
                      onChange={(e) => setSignOff({ ...signOff, inspectorDate: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-4 p-4 border border-[#dde3ec] rounded bg-[#f4f6f9]">
                  <p className="font-bold text-[#081C2E] border-b border-[#dde3ec] pb-2">HSE Officer</p>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Name (Signature)</label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full p-2 border border-[#dde3ec] rounded bg-white"
                      value={signOff.hseOfficer}
                      onChange={(e) => setSignOff({ ...signOff, hseOfficer: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Date</label>
                    <input
                      type="date"
                      className="w-full p-2 border border-[#dde3ec] rounded bg-white"
                      value={signOff.hseOfficerDate}
                      onChange={(e) => setSignOff({ ...signOff, hseOfficerDate: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-4 p-4 border border-[#dde3ec] rounded bg-[#f4f6f9]">
                  <p className="font-bold text-[#081C2E] border-b border-[#dde3ec] pb-2">Site Manager</p>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Name (Signature)</label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full p-2 border border-[#dde3ec] rounded bg-white"
                      value={signOff.siteManager}
                      onChange={(e) => setSignOff({ ...signOff, siteManager: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Date</label>
                    <input
                      type="date"
                      className="w-full p-2 border border-[#dde3ec] rounded bg-white"
                      value={signOff.siteManagerDate}
                      onChange={(e) => setSignOff({ ...signOff, siteManagerDate: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded text-sm">
                {error}
              </div>
            )}

            <div className="flex justify-end pt-4 border-t border-[#dde3ec]">
              <button
                type="submit"
                disabled={mutation.isPending}
                className="bg-[#081C2E] text-white px-8 py-3 rounded-md font-bold hover:bg-[#122b42] transition-colors disabled:opacity-50 flex items-center gap-2"
              >
                {mutation.isPending ? (
                  <>
                    <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                    Submitting...
                  </>
                ) : (
                  "Submit Inspection Log"
                )}
              </button>
            </div>
          </div>
        </form>

        {/* Revision History */}
        <div className="mt-12 overflow-x-auto opacity-70">
          <h3 className="text-sm font-bold text-[#081C2E] mb-2">REVISION HISTORY</h3>
          <table className="w-full text-[10px] border-collapse border border-[#dde3ec]">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-[#dde3ec] p-1 text-left">Rev</th>
                <th className="border border-[#dde3ec] p-1 text-left">Date</th>
                <th className="border border-[#dde3ec] p-1 text-left">Description of Changes</th>
                <th className="border border-[#dde3ec] p-1 text-left">Author</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#dde3ec] p-1">00</td>
                <td className="border border-[#dde3ec] p-1">—</td>
                <td className="border border-[#dde3ec] p-1">Initial release — basic inspection log</td>
                <td className="border border-[#dde3ec] p-1">True East</td>
              </tr>
              <tr>
                <td className="border border-[#dde3ec] p-1">01</td>
                <td className="border border-[#dde3ec] p-1">March 2026</td>
                <td className="border border-[#dde3ec] p-1">Reformatted to TE-IMS design standard. Added deficiency report and sign-off.</td>
                <td className="border border-[#dde3ec] p-1">Joao Melo</td>
              </tr>
              <tr className="bg-yellow-50">
                <td className="border border-[#dde3ec] p-1 font-bold">02</td>
                <td className="border border-[#dde3ec] p-1 font-bold">April 2026</td>
                <td className="border border-[#dde3ec] p-1 font-bold">Switched to landscape. Added ID/Tag, Cylinder Condition, Last Service Date columns. Added Responsible to deficiency report. Expanded to 5 deficiency rows. Added inspection frequency.</td>
                <td className="border border-[#dde3ec] p-1 font-bold">True East</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
