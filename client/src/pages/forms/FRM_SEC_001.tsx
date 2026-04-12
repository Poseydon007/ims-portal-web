import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_SEC_001() {
  const [formData, setFormData] = useState({
    visitorName: "",
    dateOfVisit: "",
    company: "",
    idIqamaNo: "",
    designation: "",
    mobileNo: "",
    personBeingVisited: "",
    purposeOfVisit: "",
    vehicleReg: "",
    expectedDuration: "",
    inductionTopic1: false,
    inductionTopic1Initials: "",
    inductionTopic2: false,
    inductionTopic2Initials: "",
    inductionTopic3: false,
    inductionTopic3Initials: "",
    inductionTopic4: false,
    inductionTopic4Initials: "",
    inductionTopic5: false,
    inductionTopic5Initials: "",
    inductionTopic6: false,
    inductionTopic6Initials: "",
    inductionTopic7: false,
    inductionTopic7Initials: "",
    inductionTopic8: false,
    inductionTopic8Initials: "",
    inductionTopic9: false,
    inductionTopic9Initials: "",
    inductionTopic10: false,
    inductionTopic10Initials: "",
    inductionTopic11: false,
    inductionTopic11Initials: "",
    inductionTopic12: false,
    inductionTopic12Initials: "",
    ppeHardHat: false,
    ppeSafetyGlasses: false,
    ppeHiVisVest: false,
    ppeSafetyBoots: false,
    ppeHearingProtection: false,
    ppeOther: "",
    visitorSignName: "",
    visitorSignDate: "",
    presenterSignName: "",
    presenterSignDate: "",
    securitySignName: "",
    securitySignDate: "",
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
      "Visitor Name", "Date of Visit", "Company", "ID / Iqama No.", "Designation", "Mobile No.",
      "Person Being Visited", "Purpose of Visit", "Vehicle Reg.", "Expected Duration",
      "Topic 1 (Fire/Emergency)", "Topic 1 Initials", "Topic 2 (Injury/Accident)", "Topic 2 Initials",
      "Topic 3 (Responsible Person)", "Topic 3 Initials", "Topic 4 (Assembly Points)", "Topic 4 Initials",
      "Topic 5 (Signs/Warnings)", "Topic 5 Initials", "Topic 6 (PPE Requirements)", "Topic 6 Initials",
      "Topic 7 (Exclusion Zones)", "Topic 7 Initials", "Topic 8 (Heat Stress)", "Topic 8 Initials",
      "Topic 9 (Environment)", "Topic 9 Initials", "Topic 10 (Speed Limits)", "Topic 10 Initials",
      "Topic 11 (Photography)", "Topic 11 Initials", "Topic 12 (Alcohol/Drugs)", "Topic 12 Initials",
      "PPE: Hard Hat", "PPE: Safety Glasses", "PPE: Hi-Vis Vest", "PPE: Safety Boots", "PPE: Hearing Protection", "PPE: Other",
      "Visitor Name (Sign-off)", "Visitor Date", "Presenter Name", "Presenter Date", "Security Name", "Security Date"
    ];

    const values = [
      formData.visitorName, formData.dateOfVisit, formData.company, formData.idIqamaNo, formData.designation, formData.mobileNo,
      formData.personBeingVisited, formData.purposeOfVisit, formData.vehicleReg, formData.expectedDuration,
      formData.inductionTopic1 ? "Yes" : "No", formData.inductionTopic1Initials,
      formData.inductionTopic2 ? "Yes" : "No", formData.inductionTopic2Initials,
      formData.inductionTopic3 ? "Yes" : "No", formData.inductionTopic3Initials,
      formData.inductionTopic4 ? "Yes" : "No", formData.inductionTopic4Initials,
      formData.inductionTopic5 ? "Yes" : "No", formData.inductionTopic5Initials,
      formData.inductionTopic6 ? "Yes" : "No", formData.inductionTopic6Initials,
      formData.inductionTopic7 ? "Yes" : "No", formData.inductionTopic7Initials,
      formData.inductionTopic8 ? "Yes" : "No", formData.inductionTopic8Initials,
      formData.inductionTopic9 ? "Yes" : "No", formData.inductionTopic9Initials,
      formData.inductionTopic10 ? "Yes" : "No", formData.inductionTopic10Initials,
      formData.inductionTopic11 ? "Yes" : "No", formData.inductionTopic11Initials,
      formData.inductionTopic12 ? "Yes" : "No", formData.inductionTopic12Initials,
      formData.ppeHardHat ? "Yes" : "No", formData.ppeSafetyGlasses ? "Yes" : "No",
      formData.ppeHiVisVest ? "Yes" : "No", formData.ppeSafetyBoots ? "Yes" : "No",
      formData.ppeHearingProtection ? "Yes" : "No", formData.ppeOther,
      formData.visitorSignName, formData.visitorSignDate,
      formData.presenterSignName, formData.presenterSignDate,
      formData.securitySignName, formData.securitySignDate
    ];

    mutation.mutate({
      formCode: "TE-IMS-FRM-SEC-001",
      headers,
      values,
    });
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
          <h1 className="text-2xl font-bold text-green-600 mb-4">Form submitted successfully.</h1>
          <p className="mb-4">
            View register:{" "}
            <a href={sheetUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Google Sheet
            </a>
          </p>
          <Link href="/" className="text-navy hover:underline">← Return to Portal</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-4 font-['Nunito_Sans'] text-[#081C2E]">
        {/* Breadcrumb */}
        <nav className="mb-4 text-sm">
          <Link href="/" className="text-navy hover:underline">← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">FRM</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 font-semibold">Visitor Access and Induction Form</span>
        </nav>

        {/* Document Control Table */}
        <div className="mb-8 overflow-x-auto">
          <table className="w-full border-collapse border border-[#dde3ec]">
            <thead>
              <tr className="bg-[#081C2E] text-white">
                <th className="border border-[#dde3ec] p-2 text-left">Document</th>
                <th className="border border-[#dde3ec] p-2 text-left">Revision</th>
                <th className="border border-[#dde3ec] p-2 text-left">Date</th>
                <th className="border border-[#dde3ec] p-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#dde3ec] p-2">TE-IMS-FRM-SEC-001</td>
                <td className="border border-[#dde3ec] p-2">Rev01</td>
                <td className="border border-[#dde3ec] p-2">09 Apr 2026</td>
                <td className="border border-[#dde3ec] p-2 text-green-700 font-semibold">Approved for Implementation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <h1 className="text-2xl font-bold text-center mb-6 uppercase tracking-wider">Visitor Access and Induction Form</h1>

          {/* 1. VISITOR DETAILS */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">1. VISITOR DETAILS</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Visitor Name *</label>
                <input type="text" name="visitorName" required value={formData.visitorName} onChange={handleChange} className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Date of Visit *</label>
                <input type="date" name="dateOfVisit" required value={formData.dateOfVisit} onChange={handleChange} className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Company *</label>
                <input type="text" name="company" required value={formData.company} onChange={handleChange} className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">ID / Iqama No. *</label>
                <input type="text" name="idIqamaNo" required value={formData.idIqamaNo} onChange={handleChange} className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Designation</label>
                <input type="text" name="designation" value={formData.designation} onChange={handleChange} className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Mobile No. *</label>
                <input type="text" name="mobileNo" required value={formData.mobileNo} onChange={handleChange} className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]" />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-semibold mb-1">Person Being Visited *</label>
                <input type="text" name="personBeingVisited" required value={formData.personBeingVisited} onChange={handleChange} className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]" />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-semibold mb-1">Purpose of Visit *</label>
                <textarea name="purposeOfVisit" required value={formData.purposeOfVisit} onChange={handleChange} className="border border-[#dde3ec] p-2 rounded h-20 focus:outline-none focus:border-[#C49A28]" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Vehicle Reg. (if any)</label>
                <input type="text" name="vehicleReg" value={formData.vehicleReg} onChange={handleChange} className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Expected Duration *</label>
                <input type="text" name="expectedDuration" required value={formData.expectedDuration} onChange={handleChange} className="border border-[#dde3ec] p-2 rounded focus:outline-none focus:border-[#C49A28]" />
              </div>
            </div>
          </section>

          {/* 2. INDUCTION TOPICS COVERED */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">2. INDUCTION TOPICS COVERED</div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-[#dde3ec]">
                <thead>
                  <tr className="bg-[#081C2E] text-white text-sm">
                    <th className="border border-[#dde3ec] p-2 w-12">No.</th>
                    <th className="border border-[#dde3ec] p-2 text-left">Topic</th>
                    <th className="border border-[#dde3ec] p-2 w-24 text-center">Covered</th>
                    <th className="border border-[#dde3ec] p-2 w-32">Initials</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { id: 1, topic: "Action in the event of fire / emergency" },
                    { id: 2, topic: "Action in the event of injury or accident" },
                    { id: 3, topic: "Responsible person & reporting structure" },
                    { id: 4, topic: "Emergency assembly points and evacuation routes" },
                    { id: 5, topic: "Signs, notices, and safety warnings" },
                    { id: 6, topic: "PPE requirements – responsibility and wearing" },
                    { id: 7, topic: "Exclusion zones and restricted areas" },
                    { id: 8, topic: "Heat stress awareness and hydration" },
                    { id: 9, topic: "Environmental responsibilities (waste, spills)" },
                    { id: 10, topic: "Speed limits and vehicle movement rules" },
                    { id: 11, topic: "Prohibition of photography without permission" },
                    { id: 12, topic: "Prohibition of alcohol, drugs, and weapons on site" },
                  ].map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="border border-[#dde3ec] p-2 text-center">{item.id}</td>
                      <td className="border border-[#dde3ec] p-2">{item.topic}</td>
                      <td className="border border-[#dde3ec] p-2 text-center">
                        <input
                          type="checkbox"
                          name={`inductionTopic${item.id}`}
                          checked={(formData as any)[`inductionTopic${item.id}`]}
                          onChange={handleChange}
                          className="w-5 h-5 accent-[#C49A28]"
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input
                          type="text"
                          name={`inductionTopic${item.id}Initials`}
                          value={(formData as any)[`inductionTopic${item.id}Initials`]}
                          onChange={handleChange}
                          className="w-full border-none focus:ring-0 text-center uppercase"
                          placeholder="Initials"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 3. VISITOR DECLARATION */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">3. VISITOR DECLARATION</div>
            <div className="p-4 bg-gray-50 border border-[#dde3ec] rounded italic text-sm leading-relaxed">
              The above subjects were individually discussed with me during my induction session. I hereby undertake to always conform to all safety regulations and site rules while on site. I understand that failure to comply may result in removal from the premises.
            </div>
          </section>

          {/* 5. PPE ISSUED TO VISITOR */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">5. PPE ISSUED TO VISITOR</div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 border border-[#dde3ec] rounded">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" name="ppeHardHat" checked={formData.ppeHardHat} onChange={handleChange} className="w-5 h-5 accent-[#C49A28]" />
                <span className="text-sm">Hard Hat</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" name="ppeSafetyGlasses" checked={formData.ppeSafetyGlasses} onChange={handleChange} className="w-5 h-5 accent-[#C49A28]" />
                <span className="text-sm">Safety Glasses</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" name="ppeHiVisVest" checked={formData.ppeHiVisVest} onChange={handleChange} className="w-5 h-5 accent-[#C49A28]" />
                <span className="text-sm">Hi-Vis Vest</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" name="ppeSafetyBoots" checked={formData.ppeSafetyBoots} onChange={handleChange} className="w-5 h-5 accent-[#C49A28]" />
                <span className="text-sm">Safety Boots</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" name="ppeHearingProtection" checked={formData.ppeHearingProtection} onChange={handleChange} className="w-5 h-5 accent-[#C49A28]" />
                <span className="text-sm">Hearing Protection</span>
              </label>
              <div className="flex flex-col">
                <input type="text" name="ppeOther" value={formData.ppeOther} onChange={handleChange} placeholder="Other PPE..." className="border-b border-[#dde3ec] text-sm focus:outline-none focus:border-[#C49A28]" />
              </div>
            </div>
          </section>

          {/* 4. SIGN-OFF */}
          <section>
            <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">4. SIGN-OFF</div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-[#dde3ec]">
                <thead>
                  <tr className="bg-[#081C2E] text-white text-sm">
                    <th className="border border-[#dde3ec] p-2 text-left">Role</th>
                    <th className="border border-[#dde3ec] p-2 text-left">Name *</th>
                    <th className="border border-[#dde3ec] p-2 text-left">Signature *</th>
                    <th className="border border-[#dde3ec] p-2 text-left">Date *</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[#dde3ec] p-2 font-semibold">Visitor</td>
                    <td className="border border-[#dde3ec] p-2">
                      <input type="text" name="visitorSignName" required value={formData.visitorSignName} onChange={handleChange} className="w-full p-1 focus:outline-none" />
                    </td>
                    <td className="border border-[#dde3ec] p-2">
                      <input type="text" placeholder="Full name acts as signature" required className="w-full p-1 italic focus:outline-none" />
                    </td>
                    <td className="border border-[#dde3ec] p-2">
                      <input type="date" name="visitorSignDate" required value={formData.visitorSignDate} onChange={handleChange} className="w-full p-1 focus:outline-none" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#dde3ec] p-2 font-semibold">Induction Presenter</td>
                    <td className="border border-[#dde3ec] p-2">
                      <input type="text" name="presenterSignName" required value={formData.presenterSignName} onChange={handleChange} className="w-full p-1 focus:outline-none" />
                    </td>
                    <td className="border border-[#dde3ec] p-2">
                      <input type="text" placeholder="Full name acts as signature" required className="w-full p-1 italic focus:outline-none" />
                    </td>
                    <td className="border border-[#dde3ec] p-2">
                      <input type="date" name="presenterSignDate" required value={formData.presenterSignDate} onChange={handleChange} className="w-full p-1 focus:outline-none" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#dde3ec] p-2 font-semibold">Security Officer</td>
                    <td className="border border-[#dde3ec] p-2">
                      <input type="text" name="securitySignName" required value={formData.securitySignName} onChange={handleChange} className="w-full p-1 focus:outline-none" />
                    </td>
                    <td className="border border-[#dde3ec] p-2">
                      <input type="text" placeholder="Full name acts as signature" required className="w-full p-1 italic focus:outline-none" />
                    </td>
                    <td className="border border-[#dde3ec] p-2">
                      <input type="date" name="securitySignDate" required value={formData.securitySignDate} onChange={handleChange} className="w-full p-1 focus:outline-none" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Error Message */}
          {error && (
            <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={mutation.isPending}
              className={`bg-[#081C2E] text-white px-8 py-3 rounded font-bold uppercase tracking-widest hover:bg-[#C49A28] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center`}
            >
              {mutation.isPending ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                "Submit Visitor Form"
              )}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
