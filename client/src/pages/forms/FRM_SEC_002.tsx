import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_SEC_002() {
  const [formData, setFormData] = useState({
    siteLocation: "",
    yearMonth: "",
    visitors: [
      {
        no: 1,
        visitorName: "",
        company: "",
        idIqama: "",
        mobile: "",
        vehicleReg: "",
        personVisited: "",
        purpose: "",
        timeIn: "",
        timeOut: "",
        inducted: false,
        badgeNo: "",
        signature: "",
      },
    ],
    securityOfficerName: "",
    securityOfficerSignature: "",
    securityOfficerDate: "",
    hseOfficerName: "",
    hseOfficerSignature: "",
    hseOfficerDate: "",
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
    },
  });

  const handleAddRow = () => {
    setFormData({
      ...formData,
      visitors: [
        ...formData.visitors,
        {
          no: formData.visitors.length + 1,
          visitorName: "",
          company: "",
          idIqama: "",
          mobile: "",
          vehicleReg: "",
          personVisited: "",
          purpose: "",
          timeIn: "",
          timeOut: "",
          inducted: false,
          badgeNo: "",
          signature: "",
        },
      ],
    });
  };

  const handleVisitorChange = (index: number, field: string, value: any) => {
    const newVisitors = [...formData.visitors];
    newVisitors[index] = { ...newVisitors[index], [field]: value };
    setFormData({ ...formData, visitors: newVisitors });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const headers = [
      "Site / Location",
      "Year / Month",
      "Visitor No",
      "Visitor Name",
      "Company",
      "ID / Iqama",
      "Mobile",
      "Vehicle Reg.",
      "Person Visited",
      "Purpose",
      "Time In",
      "Time Out",
      "Inducted?",
      "Badge No.",
      "Visitor Signature",
      "Security Officer Name",
      "Security Officer Signature",
      "Security Officer Date",
      "HSE Officer Name",
      "HSE Officer Signature",
      "HSE Officer Date",
    ];

    // Flattening the visitors into multiple rows for the submission if needed, 
    // but usually, these forms are submitted as a single entry with the table data stringified or handled per row.
    // Based on requirements, we'll submit the primary data. For multi-row, we often submit one row per visitor or a summary.
    // Given the "submit" mutation structure, we'll map the visitors.
    
    formData.visitors.forEach((visitor) => {
      const values = [
        formData.siteLocation,
        formData.yearMonth,
        visitor.no.toString(),
        visitor.visitorName,
        visitor.company,
        visitor.idIqama,
        visitor.mobile,
        visitor.vehicleReg,
        visitor.personVisited,
        visitor.purpose,
        visitor.timeIn,
        visitor.timeOut,
        visitor.inducted ? "Yes" : "No",
        visitor.badgeNo,
        visitor.signature,
        formData.securityOfficerName,
        formData.securityOfficerSignature,
        formData.securityOfficerDate,
        formData.hseOfficerName,
        formData.hseOfficerSignature,
        formData.hseOfficerDate,
      ];

      mutation.mutate({
        formCode: "TE-IMS-FRM-SEC-002",
        headers,
        values,
      });
    });
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto py-10 px-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Form submitted successfully.</h2>
            <p className="text-green-700 mb-6">
              View register:{" "}
              <a
                href={sheetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline font-medium"
              >
                Google Sheet
              </a>
            </p>
            <Link href="/">
              <a className="inline-block bg-[#081C2E] text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors">
                Return to Portal
              </a>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 font-['Nunito_Sans']">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <Link href="/">
            <a className="text-[#C49A28] hover:underline flex items-center">
              ← Portal Home
            </a>
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/docs/frm" className="text-gray-600 hover:text-[#C49A28] transition-colors cursor-pointer">FRM</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 font-semibold">Visitor Register</span>
        </nav>

        {/* Document Control Table */}
        <div className="overflow-x-auto mb-8 border border-[#dde3ec] rounded-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#081C2E] text-white">
                <th className="p-3 border-b border-[#dde3ec]">Document Code</th>
                <th className="p-3 border-b border-[#dde3ec]">Revision</th>
                <th className="p-3 border-b border-[#dde3ec]">Date</th>
                <th className="p-3 border-b border-[#dde3ec]">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 border-b border-[#dde3ec]">TE-IMS-FRM-SEC-002</td>
                <td className="p-3 border-b border-[#dde3ec]">Rev01</td>
                <td className="p-3 border-b border-[#dde3ec]">09 Apr 2026</td>
                <td className="p-3 border-b border-[#dde3ec]">Approved for Implementation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section 1: Site Details */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 rounded-t">
              VISITOR REGISTER DETAILS
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#f4f6f9] p-6 border border-[#dde3ec] rounded-b">
              <div>
                <label className="block text-sm font-semibold text-[#081C2E] mb-1">
                  Site / Location *
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                  value={formData.siteLocation}
                  onChange={(e) => setFormData({ ...formData, siteLocation: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#081C2E] mb-1">
                  Year / Month *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 2026 / April"
                  className="w-full p-2 border border-[#dde3ec] rounded focus:ring-2 focus:ring-[#C49A28] outline-none"
                  value={formData.yearMonth}
                  onChange={(e) => setFormData({ ...formData, yearMonth: e.target.value })}
                />
              </div>
            </div>
          </section>

          {/* Section 2: Visitor Log Table */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 rounded-t">
              VISITOR LOG
            </div>
            <div className="overflow-x-auto border border-[#dde3ec] rounded-b">
              <table className="w-full text-xs border-collapse min-w-[1200px]">
                <thead>
                  <tr className="bg-[#081C2E] text-white">
                    <th className="p-2 border border-[#dde3ec] w-10">No.</th>
                    <th className="p-2 border border-[#dde3ec]">Visitor Name *</th>
                    <th className="p-2 border border-[#dde3ec]">Company</th>
                    <th className="p-2 border border-[#dde3ec]">ID / Iqama</th>
                    <th className="p-2 border border-[#dde3ec]">Mobile</th>
                    <th className="p-2 border border-[#dde3ec]">Vehicle Reg.</th>
                    <th className="p-2 border border-[#dde3ec]">Person Visited</th>
                    <th className="p-2 border border-[#dde3ec]">Purpose</th>
                    <th className="p-2 border border-[#dde3ec] w-24">Time In</th>
                    <th className="p-2 border border-[#dde3ec] w-24">Time Out</th>
                    <th className="p-2 border border-[#dde3ec] w-16">Inducted?</th>
                    <th className="p-2 border border-[#dde3ec]">Badge No.</th>
                    <th className="p-2 border border-[#dde3ec]">Signature *</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.visitors.map((visitor, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-[#f4f6f9]"}>
                      <td className="p-2 border border-[#dde3ec] text-center">{visitor.no}</td>
                      <td className="p-2 border border-[#dde3ec]">
                        <input
                          type="text"
                          required
                          className="w-full p-1 border border-[#dde3ec] rounded"
                          value={visitor.visitorName}
                          onChange={(e) => handleVisitorChange(index, "visitorName", e.target.value)}
                        />
                      </td>
                      <td className="p-2 border border-[#dde3ec]">
                        <input
                          type="text"
                          className="w-full p-1 border border-[#dde3ec] rounded"
                          value={visitor.company}
                          onChange={(e) => handleVisitorChange(index, "company", e.target.value)}
                        />
                      </td>
                      <td className="p-2 border border-[#dde3ec]">
                        <input
                          type="text"
                          className="w-full p-1 border border-[#dde3ec] rounded"
                          value={visitor.idIqama}
                          onChange={(e) => handleVisitorChange(index, "idIqama", e.target.value)}
                        />
                      </td>
                      <td className="p-2 border border-[#dde3ec]">
                        <input
                          type="text"
                          className="w-full p-1 border border-[#dde3ec] rounded"
                          value={visitor.mobile}
                          onChange={(e) => handleVisitorChange(index, "mobile", e.target.value)}
                        />
                      </td>
                      <td className="p-2 border border-[#dde3ec]">
                        <input
                          type="text"
                          className="w-full p-1 border border-[#dde3ec] rounded"
                          value={visitor.vehicleReg}
                          onChange={(e) => handleVisitorChange(index, "vehicleReg", e.target.value)}
                        />
                      </td>
                      <td className="p-2 border border-[#dde3ec]">
                        <input
                          type="text"
                          className="w-full p-1 border border-[#dde3ec] rounded"
                          value={visitor.personVisited}
                          onChange={(e) => handleVisitorChange(index, "personVisited", e.target.value)}
                        />
                      </td>
                      <td className="p-2 border border-[#dde3ec]">
                        <input
                          type="text"
                          className="w-full p-1 border border-[#dde3ec] rounded"
                          value={visitor.purpose}
                          onChange={(e) => handleVisitorChange(index, "purpose", e.target.value)}
                        />
                      </td>
                      <td className="p-2 border border-[#dde3ec]">
                        <input
                          type="time"
                          className="w-full p-1 border border-[#dde3ec] rounded"
                          value={visitor.timeIn}
                          onChange={(e) => handleVisitorChange(index, "timeIn", e.target.value)}
                        />
                      </td>
                      <td className="p-2 border border-[#dde3ec]">
                        <input
                          type="time"
                          className="w-full p-1 border border-[#dde3ec] rounded"
                          value={visitor.timeOut}
                          onChange={(e) => handleVisitorChange(index, "timeOut", e.target.value)}
                        />
                      </td>
                      <td className="p-2 border border-[#dde3ec] text-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4"
                          checked={visitor.inducted}
                          onChange={(e) => handleVisitorChange(index, "inducted", e.target.checked)}
                        />
                      </td>
                      <td className="p-2 border border-[#dde3ec]">
                        <input
                          type="text"
                          className="w-full p-1 border border-[#dde3ec] rounded"
                          value={visitor.badgeNo}
                          onChange={(e) => handleVisitorChange(index, "badgeNo", e.target.value)}
                        />
                      </td>
                      <td className="p-2 border border-[#dde3ec]">
                        <input
                          type="text"
                          required
                          placeholder="Full Name"
                          className="w-full p-1 border border-[#dde3ec] rounded"
                          value={visitor.signature}
                          onChange={(e) => handleVisitorChange(index, "signature", e.target.value)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
              type="button"
              onClick={handleAddRow}
              className="mt-4 bg-[#C49A28] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors flex items-center"
            >
              <span className="mr-2">+</span> Add Visitor Row
            </button>
          </section>

          {/* Section 3: Sign-off */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 rounded-t">
              SIGN-OFF
            </div>
            <div className="overflow-x-auto border border-[#dde3ec] rounded-b">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#081C2E] text-white">
                    <th className="p-3 border border-[#dde3ec]">Role</th>
                    <th className="p-3 border border-[#dde3ec]">Name *</th>
                    <th className="p-3 border border-[#dde3ec]">Signature *</th>
                    <th className="p-3 border border-[#dde3ec]">Date *</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="p-3 border border-[#dde3ec] font-semibold">Security Officer / Guard</td>
                    <td className="p-3 border border-[#dde3ec]">
                      <input
                        type="text"
                        required
                        className="w-full p-2 border border-[#dde3ec] rounded"
                        value={formData.securityOfficerName}
                        onChange={(e) => setFormData({ ...formData, securityOfficerName: e.target.value })}
                      />
                    </td>
                    <td className="p-3 border border-[#dde3ec]">
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        className="w-full p-2 border border-[#dde3ec] rounded"
                        value={formData.securityOfficerSignature}
                        onChange={(e) => setFormData({ ...formData, securityOfficerSignature: e.target.value })}
                      />
                    </td>
                    <td className="p-3 border border-[#dde3ec]">
                      <input
                        type="date"
                        required
                        className="w-full p-2 border border-[#dde3ec] rounded"
                        value={formData.securityOfficerDate}
                        onChange={(e) => setFormData({ ...formData, securityOfficerDate: e.target.value })}
                      />
                    </td>
                  </tr>
                  <tr className="bg-[#f4f6f9]">
                    <td className="p-3 border border-[#dde3ec] font-semibold">HSE Officer</td>
                    <td className="p-3 border border-[#dde3ec]">
                      <input
                        type="text"
                        required
                        className="w-full p-2 border border-[#dde3ec] rounded"
                        value={formData.hseOfficerName}
                        onChange={(e) => setFormData({ ...formData, hseOfficerName: e.target.value })}
                      />
                    </td>
                    <td className="p-3 border border-[#dde3ec]">
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        className="w-full p-2 border border-[#dde3ec] rounded"
                        value={formData.hseOfficerSignature}
                        onChange={(e) => setFormData({ ...formData, hseOfficerSignature: e.target.value })}
                      />
                    </td>
                    <td className="p-3 border border-[#dde3ec]">
                      <input
                        type="date"
                        required
                        className="w-full p-2 border border-[#dde3ec] rounded"
                        value={formData.hseOfficerDate}
                        onChange={(e) => setFormData({ ...formData, hseOfficerDate: e.target.value })}
                      />
                    </td>
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
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={mutation.isPending}
              className={`bg-[#081C2E] text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all ${
                mutation.isPending ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {mutation.isPending ? "Submitting..." : "Submit Visitor Register"}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
