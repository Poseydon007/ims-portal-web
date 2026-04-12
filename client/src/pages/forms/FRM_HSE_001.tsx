import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_001() {
  const [formData, setFormData] = useState({
    jobTask: "",
    date: "",
    departmentSite: "",
    jhaNumber: "",
    supervisor: "",
    reviewedBy: "",
    taskSteps: [
      { id: 1, step: "", hazards: "", initialRisk: "", controls: "", residualRisk: "", responsible: "" }
    ],
    signOff: [
      { role: "Completed By", name: "", signature: "", date: "" },
      { role: "Reviewed By", name: "", signature: "", date: "" },
      { role: "Site Manager", name: "", signature: "", date: "" }
    ]
  });

  const [submitted, setSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  const mutation = trpc.formSubmissions.submit.useMutation({
    onSuccess: (data) => {
      setSubmitted(true);
      setSheetUrl(data.sheetUrl);
      window.scrollTo(0, 0);
    },
    onError: (err) => {
      setError(err.message || "An error occurred during submission.");
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTaskStepChange = (index: number, field: string, value: string) => {
    const updatedSteps = [...formData.taskSteps];
    updatedSteps[index] = { ...updatedSteps[index], [field]: value };
    setFormData(prev => ({ ...prev, taskSteps: updatedSteps }));
  };

  const addTaskStep = () => {
    setFormData(prev => ({
      ...prev,
      taskSteps: [
        ...prev.taskSteps,
        { id: prev.taskSteps.length + 1, step: "", hazards: "", initialRisk: "", controls: "", residualRisk: "", responsible: "" }
      ]
    }));
  };

  const removeTaskStep = (index: number) => {
    if (formData.taskSteps.length > 1) {
      const updatedSteps = formData.taskSteps.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, taskSteps: updatedSteps }));
    }
  };

  const handleSignOffChange = (index: number, field: string, value: string) => {
    const updatedSignOff = [...formData.signOff];
    updatedSignOff[index] = { ...updatedSignOff[index], [field]: value };
    setFormData(prev => ({ ...prev, signOff: updatedSignOff }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const headers = [
      "Job/Task", "Date", "Department/Site", "JHA Number", "Supervisor", "Reviewed By",
      ...formData.taskSteps.flatMap((_, i) => [
        `Step ${i+1} Task`, `Step ${i+1} Hazards`, `Step ${i+1} Initial Risk`, 
        `Step ${i+1} Controls`, `Step ${i+1} Residual Risk`, `Step ${i+1} Responsible`
      ]),
      "Completed By Name", "Completed By Date",
      "Reviewed By Name", "Reviewed By Date",
      "Site Manager Name", "Site Manager Date"
    ];

    const values = [
      formData.jobTask, formData.date, formData.departmentSite, formData.jhaNumber, formData.supervisor, formData.reviewedBy,
      ...formData.taskSteps.flatMap(s => [s.step, s.hazards, s.initialRisk, s.controls, s.residualRisk, s.responsible]),
      formData.signOff[0].name, formData.signOff[0].date,
      formData.signOff[1].name, formData.signOff[1].date,
      formData.signOff[2].name, formData.signOff[2].date
    ];

    mutation.mutate({
      formCode: "TE-IMS-FRM-HSE-001",
      headers,
      values
    });
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 text-center">
          <h2 className="text-2xl font-bold text-[#081C2E] mb-4">Form Submitted Successfully</h2>
          <p className="mb-6">Your Job Hazard Analysis has been recorded.</p>
          <a 
            href={sheetUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#C49A28] text-white px-6 py-2 rounded hover:bg-[#a38021] transition-colors"
          >
            View register: Google Sheet
          </a>
          <div className="mt-8">
            <Link href="/" className="text-[#081C2E] underline">← Return to Portal Home</Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-4 md:p-8 font-['Nunito_Sans'] text-[#081C2E]">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-gray-500 hover:text-[#C49A28]">Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/docs/frm" className="text-gray-500 hover:text-[#C49A28] transition-colors cursor-pointer">FRM</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="font-semibold text-[#081C2E]">Job Hazard Analysis</span>
        </nav>

        <form onSubmit={handleSubmit} className="bg-white border border-[#dde3ec] shadow-sm rounded-lg overflow-hidden">
          {/* Document Control Header */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border-b border-[#dde3ec]">
              <thead>
                <tr className="bg-[#081C2E] text-white">
                  <th colSpan={4} className="p-4 text-left text-xl font-bold uppercase tracking-wider">
                    Job Hazard Analysis
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="p-2 border border-[#dde3ec] bg-gray-50 font-semibold w-1/4">Document Code</td>
                  <td className="p-2 border border-[#dde3ec] w-1/4 text-center">TE-IMS-FRM-HSE-001</td>
                  <td className="p-2 border border-[#dde3ec] bg-gray-50 font-semibold w-1/4">Revision</td>
                  <td className="p-2 border border-[#dde3ec] w-1/4 text-center">01</td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#dde3ec] bg-gray-50 font-semibold">Date</td>
                  <td className="p-2 border border-[#dde3ec] text-center">01 March 2026</td>
                  <td className="p-2 border border-[#dde3ec] bg-gray-50 font-semibold">Status</td>
                  <td className="p-2 border border-[#dde3ec] text-center">Approved</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-6 space-y-8">
            {/* Section 1: Job Information */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 mb-4 font-bold uppercase text-sm tracking-widest">
                1. Job Information
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">Job/Task *</label>
                  <input 
                    type="text" 
                    name="jobTask" 
                    required 
                    value={formData.jobTask}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-[#dde3ec] rounded focus:outline-none focus:border-[#C49A28]" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Date *</label>
                  <input 
                    type="date" 
                    name="date" 
                    required 
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-[#dde3ec] rounded focus:outline-none focus:border-[#C49A28]" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Department/Site *</label>
                  <input 
                    type="text" 
                    name="departmentSite" 
                    required 
                    value={formData.departmentSite}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-[#dde3ec] rounded focus:outline-none focus:border-[#C49A28]" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">JHA Number</label>
                  <input 
                    type="text" 
                    name="jhaNumber" 
                    value={formData.jhaNumber}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-[#dde3ec] rounded focus:outline-none focus:border-[#C49A28]" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Supervisor *</label>
                  <input 
                    type="text" 
                    name="supervisor" 
                    required 
                    value={formData.supervisor}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-[#dde3ec] rounded focus:outline-none focus:border-[#C49A28]" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Reviewed By</label>
                  <input 
                    type="text" 
                    name="reviewedBy" 
                    value={formData.reviewedBy}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-[#dde3ec] rounded focus:outline-none focus:border-[#C49A28]" 
                  />
                </div>
              </div>
            </section>

            {/* Section 2: Risk Matrix Reference */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 mb-4 font-bold uppercase text-sm tracking-widest">
                2. Risk Matrix Reference
              </div>
              <p className="text-xs mb-4 text-gray-600">Use this 5x5 matrix to assign Initial Risk and Residual Risk ratings below. Consequence: 1=Minor, 2=Moderate, 3=Major, 4=Catastrophic</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-xs">
                  <thead>
                    <tr className="bg-[#081C2E] text-white">
                      <th className="p-2 border border-[#dde3ec]">L \ C</th>
                      <th className="p-2 border border-[#dde3ec]">1</th>
                      <th className="p-2 border border-[#dde3ec]">2</th>
                      <th className="p-2 border border-[#dde3ec]">3</th>
                      <th className="p-2 border border-[#dde3ec]">4</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center">
                      <td className="p-2 border border-[#dde3ec] font-bold text-left bg-gray-50">A (Almost Certain)</td>
                      <td className="p-2 border border-[#dde3ec]"></td>
                      <td className="p-2 border border-[#dde3ec]"></td>
                      <td className="p-2 border border-[#dde3ec] bg-orange-100 font-bold">H</td>
                      <td className="p-2 border border-[#dde3ec] bg-red-100 font-bold">E</td>
                    </tr>
                    <tr className="text-center">
                      <td className="p-2 border border-[#dde3ec] font-bold text-left bg-gray-50">B (Likely)</td>
                      <td className="p-2 border border-[#dde3ec]"></td>
                      <td className="p-2 border border-[#dde3ec] bg-yellow-100 font-bold">M</td>
                      <td className="p-2 border border-[#dde3ec] bg-orange-100 font-bold">H</td>
                      <td className="p-2 border border-[#dde3ec] bg-red-100 font-bold">E</td>
                    </tr>
                    <tr className="text-center">
                      <td className="p-2 border border-[#dde3ec] font-bold text-left bg-gray-50">C (Possible)</td>
                      <td className="p-2 border border-[#dde3ec] bg-green-100 font-bold">L</td>
                      <td className="p-2 border border-[#dde3ec] bg-yellow-100 font-bold">M</td>
                      <td className="p-2 border border-[#dde3ec] bg-orange-100 font-bold">H</td>
                      <td className="p-2 border border-[#dde3ec]"></td>
                    </tr>
                    <tr className="text-center">
                      <td className="p-2 border border-[#dde3ec] font-bold text-left bg-gray-50">D (Unlikely)</td>
                      <td className="p-2 border border-[#dde3ec] bg-green-100 font-bold">L</td>
                      <td className="p-2 border border-[#dde3ec] bg-yellow-100 font-bold">M</td>
                      <td className="p-2 border border-[#dde3ec] bg-orange-100 font-bold">H</td>
                      <td className="p-2 border border-[#dde3ec]"></td>
                    </tr>
                    <tr className="text-center">
                      <td className="p-2 border border-[#dde3ec] font-bold text-left bg-gray-50">E (Rare)</td>
                      <td className="p-2 border border-[#dde3ec] bg-green-100 font-bold">L</td>
                      <td className="p-2 border border-[#dde3ec] bg-yellow-100 font-bold">M</td>
                      <td className="p-2 border border-[#dde3ec]"></td>
                      <td className="p-2 border border-[#dde3ec]"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Task Step Hazard Analysis */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 mb-4 font-bold uppercase text-sm tracking-widest flex justify-between items-center">
                <span>3. Task Step Hazard Analysis</span>
                <button 
                  type="button" 
                  onClick={addTaskStep}
                  className="bg-[#C49A28] text-white text-xs px-3 py-1 rounded hover:bg-[#a38021] transition-colors"
                >
                  + Add Step
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse min-w-[1000px]">
                  <thead>
                    <tr className="bg-[#081C2E] text-white text-xs">
                      <th className="p-2 border border-[#dde3ec] w-12">#</th>
                      <th className="p-2 border border-[#dde3ec]">Task Step</th>
                      <th className="p-2 border border-[#dde3ec]">Hazards Identified</th>
                      <th className="p-2 border border-[#dde3ec] w-24">Initial Risk</th>
                      <th className="p-2 border border-[#dde3ec]">Controls</th>
                      <th className="p-2 border border-[#dde3ec] w-24">Residual Risk</th>
                      <th className="p-2 border border-[#dde3ec] w-32">Responsible</th>
                      <th className="p-2 border border-[#dde3ec] w-12"></th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    {formData.taskSteps.map((step, index) => (
                      <tr key={index}>
                        <td className="p-2 border border-[#dde3ec] text-center font-semibold bg-gray-50">{index + 1}</td>
                        <td className="p-2 border border-[#dde3ec]">
                          <textarea 
                            value={step.step}
                            onChange={(e) => handleTaskStepChange(index, "step", e.target.value)}
                            className="w-full p-1 border border-transparent focus:border-[#C49A28] focus:outline-none min-h-[60px]"
                            placeholder="Describe step..."
                          />
                        </td>
                        <td className="p-2 border border-[#dde3ec]">
                          <textarea 
                            value={step.hazards}
                            onChange={(e) => handleTaskStepChange(index, "hazards", e.target.value)}
                            className="w-full p-1 border border-transparent focus:border-[#C49A28] focus:outline-none min-h-[60px]"
                            placeholder="What can go wrong?"
                          />
                        </td>
                        <td className="p-2 border border-[#dde3ec]">
                          <select 
                            value={step.initialRisk}
                            onChange={(e) => handleTaskStepChange(index, "initialRisk", e.target.value)}
                            className="w-full p-1 border border-transparent focus:border-[#C49A28] focus:outline-none"
                          >
                            <option value="">Rating</option>
                            <option value="L">L (Low)</option>
                            <option value="M">M (Med)</option>
                            <option value="H">H (High)</option>
                            <option value="E">E (Ext)</option>
                          </select>
                        </td>
                        <td className="p-2 border border-[#dde3ec]">
                          <textarea 
                            value={step.controls}
                            onChange={(e) => handleTaskStepChange(index, "controls", e.target.value)}
                            className="w-full p-1 border border-transparent focus:border-[#C49A28] focus:outline-none min-h-[60px]"
                            placeholder="Action to control hazard"
                          />
                        </td>
                        <td className="p-2 border border-[#dde3ec]">
                          <select 
                            value={step.residualRisk}
                            onChange={(e) => handleTaskStepChange(index, "residualRisk", e.target.value)}
                            className="w-full p-1 border border-transparent focus:border-[#C49A28] focus:outline-none"
                          >
                            <option value="">Rating</option>
                            <option value="L">L (Low)</option>
                            <option value="M">M (Med)</option>
                            <option value="H">H (High)</option>
                            <option value="E">E (Ext)</option>
                          </select>
                        </td>
                        <td className="p-2 border border-[#dde3ec]">
                          <input 
                            type="text"
                            value={step.responsible}
                            onChange={(e) => handleTaskStepChange(index, "responsible", e.target.value)}
                            className="w-full p-1 border border-transparent focus:border-[#C49A28] focus:outline-none"
                            placeholder="Name/Role"
                          />
                        </td>
                        <td className="p-2 border border-[#dde3ec] text-center">
                          <button 
                            type="button" 
                            onClick={() => removeTaskStep(index)}
                            disabled={formData.taskSteps.length === 1}
                            className="text-red-500 hover:text-red-700 disabled:opacity-30"
                          >
                            ✕
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Sign-Off */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 mb-4 font-bold uppercase text-sm tracking-widest">
                4. Sign-Off
              </div>
              <p className="text-sm italic mb-4">We believe that the controls listed will manage the hazards identified above.</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#081C2E] text-white text-xs">
                      <th className="p-2 border border-[#dde3ec] w-1/4">Role</th>
                      <th className="p-2 border border-[#dde3ec] w-1/4">Name</th>
                      <th className="p-2 border border-[#dde3ec] w-1/4">Signature (Full Name)</th>
                      <th className="p-2 border border-[#dde3ec] w-1/4">Date</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {formData.signOff.map((sign, index) => (
                      <tr key={index}>
                        <td className="p-2 border border-[#dde3ec] bg-gray-50 font-semibold">{sign.role}</td>
                        <td className="p-2 border border-[#dde3ec]">
                          <input 
                            type="text" 
                            value={sign.name}
                            onChange={(e) => handleSignOffChange(index, "name", e.target.value)}
                            className="w-full p-1 border-transparent focus:border-[#C49A28] focus:outline-none" 
                          />
                        </td>
                        <td className="p-2 border border-[#dde3ec]">
                          <input 
                            type="text" 
                            placeholder="Full name acts as signature"
                            value={sign.signature}
                            onChange={(e) => handleSignOffChange(index, "signature", e.target.value)}
                            className="w-full p-1 border-transparent focus:border-[#C49A28] focus:outline-none italic" 
                          />
                        </td>
                        <td className="p-2 border border-[#dde3ec]">
                          <input 
                            type="date" 
                            value={sign.date}
                            onChange={(e) => handleSignOffChange(index, "date", e.target.value)}
                            className="w-full p-1 border-transparent focus:border-[#C49A28] focus:outline-none" 
                          />
                        </td>
                      </tr>
                    ))}
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
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={mutation.isPending}
                className="bg-[#081C2E] text-white px-8 py-3 rounded font-bold hover:bg-[#122b42] transition-colors disabled:opacity-50 flex items-center"
              >
                {mutation.isPending ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : "Submit JHA Form"}
              </button>
            </div>
          </div>
        </form>

        {/* Footer Info */}
        <div className="mt-8 text-[10px] text-gray-400 flex justify-between items-center border-t border-[#dde3ec] pt-4">
          <div>True East Mining Company | IMS Portal</div>
          <div>TE-IMS-FRM-HSE-001 | Rev 01 | Approved</div>
        </div>
      </div>
    </Layout>
  );
}
