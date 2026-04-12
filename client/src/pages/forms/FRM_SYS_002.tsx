import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_SYS_002() {
  const [submitted, setSubmitted] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  const [attendees, setAttendees] = useState([{ name: "", position: "" }]);
  const [apologies, setApologies] = useState([{ name: "", position: "" }]);
  const [actions, setActions] = useState([{ id: "MR-2026-001", description: "", responsible: "" }]);

  const mutation = trpc.formSubmissions.submit.useMutation({
    onSuccess: (data) => {
      setSubmitted(true);
      setSheetUrl(data.sheetUrl);
    },
    onError: (err) => {
      setError(err.message || "An error occurred during submission.");
    },
  });

  const addAttendee = () => setAttendees([...attendees, { name: "", position: "" }]);
  const addApology = () => setApologies([...apologies, { name: "", position: "" }]);
  const addAction = () => setActions([...actions, { id: `MR-2026-00${actions.length + 1}`, description: "", responsible: "" }]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);
    
    const headers = [
      "Meeting Reference No", "Meeting Date", "Meeting Time", "Location/Mode", "Chairperson", "Recorder",
      "Attendees", "Apologies",
      "4.1 Previous Actions Summary", "4.1 Previous Actions Decisions", "4.1 Previous Actions New Raised",
      "4.2 Changes Issues Summary", "4.2 Changes Issues Decisions",
      "4.3 IMS Performance Summary", "4.3 IMS Performance Decisions",
      "4.4 Objectives Status", "4.4 Objectives Summary", "4.4 Objectives Decisions",
      "4.5 Resources Suitability Summary", "4.5 Resources Suitability Decisions",
      "4.6 Risks/Ops Effectiveness Summary", "4.6 Risks/Ops Effectiveness Decisions",
      "4.7 Audit Internal NC/OFI", "4.7 Audit External", "4.7 Audit Decisions",
      "4.8 Feedback/Complaints", "4.8 Regulatory Interactions", "4.8 Interested Parties Decisions",
      "4.9 Improvement Summary", "4.9 Improvement Decisions",
      "4.10 AOB Summary", "4.10 AOB Decisions",
      "Action List",
      "Next Meeting Date", "Next Meeting Location", "Next Meeting Inputs",
      "Chairperson Signature", "Chairperson Date", "Recorder Signature", "Recorder Date",
      "Prepared By", "Reviewed By", "Approved By"
    ];

    const values = [
      formData.get("meetingRef"), formData.get("meetingDate"), formData.get("meetingTime"), formData.get("location"), formData.get("chairperson"), formData.get("recorder"),
      attendees.map(a => `${a.name} (${a.position})`).join("; "),
      apologies.map(a => `${a.name} (${a.position})`).join("; "),
      formData.get("prevActionsSummary"), formData.get("prevActionsDecisions"), formData.get("prevActionsNew"),
      formData.get("changesSummary"), formData.get("changesDecisions"),
      formData.get("imsPerfSummary"), formData.get("imsPerfDecisions"),
      formData.get("objStatus"), formData.get("objSummary"), formData.get("objDecisions"),
      formData.get("resSummary"), formData.get("resDecisions"),
      formData.get("risksSummary"), formData.get("risksDecisions"),
      formData.get("auditInternal"), formData.get("auditExternal"), formData.get("auditDecisions"),
      formData.get("feedback"), formData.get("regulatory"), formData.get("interestedDecisions"),
      formData.get("improvementSummary"), formData.get("improvementDecisions"),
      formData.get("aobSummary"), formData.get("aobDecisions"),
      actions.map(a => `${a.id}: ${a.description} (${a.responsible})`).join("; "),
      formData.get("nextDate"), formData.get("nextLocation"), formData.get("nextInputs"),
      formData.get("chairSign"), formData.get("chairSignDate"), formData.get("recorderSign"), formData.get("recorderSignDate"),
      formData.get("preparedBy"), formData.get("reviewedBy"), formData.get("approvedBy")
    ];

    mutation.mutate({
      formCode: "TE-IMS-FRM-SYS-002",
      headers,
      values: values.map(v => String(v || ""))
    });
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6">
          <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-2">Form submitted successfully.</h2>
            <p className="mb-4">The management review minutes have been recorded and synced to the Google Sheet register.</p>
            <a 
              href={sheetUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#081C2E] text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors"
            >
              View register
            </a>
            <div className="mt-6">
              <Link href="/" className="text-[#C49A28] hover:underline">← Return to Portal Home</Link>
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
        <nav className="mb-6">
          <Link href="/" className="text-[#081C2E] hover:text-[#C49A28] transition-colors">← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-500">FRM</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="font-semibold">Management Review Minutes</span>
        </nav>

        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg overflow-hidden border border-[#dde3ec]">
          {/* Header Section */}
          <div className="bg-[#081C2E] text-white p-6">
            <h1 className="text-2xl font-bold uppercase tracking-wider">Management Review Minutes Template</h1>
            <p className="text-sm opacity-80 mt-1">True East Mining Company IMS Portal</p>
          </div>

          {/* Document Control Table */}
          <div className="p-6 border-b border-[#dde3ec] bg-[#f4f6f9]">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-[#081C2E] text-white text-sm">
                  <th className="border border-[#dde3ec] p-2 text-left">Document Code</th>
                  <th className="border border-[#dde3ec] p-2 text-left">Revision</th>
                  <th className="border border-[#dde3ec] p-2 text-left">Date</th>
                  <th className="border border-[#dde3ec] p-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-sm">
                  <td className="border border-[#dde3ec] p-2 font-mono">TE-IMS-FRM-SYS-002</td>
                  <td className="border border-[#dde3ec] p-2">01</td>
                  <td className="border border-[#dde3ec] p-2">10.04.2026</td>
                  <td className="border border-[#dde3ec] p-2">Approved for Implementation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-6 space-y-8">
            {/* Section 1: Meeting Information */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">1. MEETING INFORMATION</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">Meeting Reference No. (MR-YYYY-NN)*</label>
                  <input name="meetingRef" type="text" required placeholder="MR-2026-01" className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Meeting Date*</label>
                  <input name="meetingDate" type="date" required className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Meeting Time*</label>
                  <input name="meetingTime" type="time" required className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Location / Mode*</label>
                  <input name="location" type="text" required placeholder="Office / Video Conference" className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Chairperson*</label>
                  <input name="chairperson" type="text" required className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Recorder (IMS Project Lead)*</label>
                  <input name="recorder" type="text" required className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
              </div>
            </section>

            {/* Section 2: Attendees */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 flex justify-between items-center">
                <span>2. ATTENDEES</span>
                <button type="button" onClick={addAttendee} className="bg-[#C49A28] text-white text-xs px-3 py-1 rounded hover:bg-opacity-90 transition-colors">+ Add Row</button>
              </div>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#081C2E] text-white text-sm">
                    <th className="border border-[#dde3ec] p-2 w-12">#</th>
                    <th className="border border-[#dde3ec] p-2 text-left">Name</th>
                    <th className="border border-[#dde3ec] p-2 text-left">Position / Department</th>
                  </tr>
                </thead>
                <tbody>
                  {attendees.map((attendee, idx) => (
                    <tr key={idx}>
                      <td className="border border-[#dde3ec] p-2 text-center text-sm">{idx + 1}</td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="text" 
                          value={attendee.name}
                          onChange={(e) => {
                            const newArr = [...attendees];
                            newArr[idx].name = e.target.value;
                            setAttendees(newArr);
                          }}
                          className="w-full p-1 outline-none focus:bg-yellow-50"
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="text" 
                          value={attendee.position}
                          onChange={(e) => {
                            const newArr = [...attendees];
                            newArr[idx].position = e.target.value;
                            setAttendees(newArr);
                          }}
                          className="w-full p-1 outline-none focus:bg-yellow-50"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            {/* Section 3: Apologies */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 flex justify-between items-center">
                <span>3. APOLOGIES / ABSENT</span>
                <button type="button" onClick={addApology} className="bg-[#C49A28] text-white text-xs px-3 py-1 rounded hover:bg-opacity-90 transition-colors">+ Add Row</button>
              </div>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#081C2E] text-white text-sm">
                    <th className="border border-[#dde3ec] p-2 w-12">#</th>
                    <th className="border border-[#dde3ec] p-2 text-left">Name</th>
                    <th className="border border-[#dde3ec] p-2 text-left">Position / Department</th>
                  </tr>
                </thead>
                <tbody>
                  {apologies.map((apology, idx) => (
                    <tr key={idx}>
                      <td className="border border-[#dde3ec] p-2 text-center text-sm">{idx + 1}</td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="text" 
                          value={apology.name}
                          onChange={(e) => {
                            const newArr = [...apologies];
                            newArr[idx].name = e.target.value;
                            setApologies(newArr);
                          }}
                          className="w-full p-1 outline-none focus:bg-yellow-50"
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="text" 
                          value={apology.position}
                          onChange={(e) => {
                            const newArr = [...apologies];
                            newArr[idx].position = e.target.value;
                            setApologies(newArr);
                          }}
                          className="w-full p-1 outline-none focus:bg-yellow-50"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            {/* Section 4: Agenda Items */}
            <section className="space-y-6">
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 uppercase">4. Agenda Items and Discussion</div>
              
              {/* 4.1 Previous Actions */}
              <div className="border border-[#dde3ec] rounded-lg overflow-hidden">
                <div className="bg-[#f4f6f9] px-4 py-2 font-semibold border-b border-[#dde3ec]">4.1 Status of Actions from Previous Management Review</div>
                <div className="p-4 space-y-4">
                  <textarea name="prevActionsSummary" placeholder="Discussion summary..." className="w-full p-2 border border-[#dde3ec] rounded h-24 focus:ring-1 focus:ring-[#C49A28] outline-none" />
                  <textarea name="prevActionsDecisions" placeholder="Decisions reached..." className="w-full p-2 border border-[#dde3ec] rounded h-20 focus:ring-1 focus:ring-[#C49A28] outline-none" />
                  <textarea name="prevActionsNew" placeholder="New actions raised..." className="w-full p-2 border border-[#dde3ec] rounded h-20 focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
              </div>

              {/* 4.2 Changes */}
              <div className="border border-[#dde3ec] rounded-lg overflow-hidden">
                <div className="bg-[#f4f6f9] px-4 py-2 font-semibold border-b border-[#dde3ec]">4.2 Changes in External and Internal Issues</div>
                <div className="p-4 space-y-4">
                  <p className="text-xs text-gray-500 italic">Legal/regulatory (MHRSD, NCEC, MEWA, MOI), client/market changes, updated risks, organisational context.</p>
                  <textarea name="changesSummary" placeholder="Discussion summary..." className="w-full p-2 border border-[#dde3ec] rounded h-24 focus:ring-1 focus:ring-[#C49A28] outline-none" />
                  <textarea name="changesDecisions" placeholder="Decisions..." className="w-full p-2 border border-[#dde3ec] rounded h-20 focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
              </div>

              {/* 4.3 IMS Performance */}
              <div className="border border-[#dde3ec] rounded-lg overflow-hidden">
                <div className="bg-[#f4f6f9] px-4 py-2 font-semibold border-b border-[#dde3ec]">4.3 IMS Performance Summary — KPIs and Trends</div>
                <div className="p-4 space-y-4">
                  <p className="text-xs text-gray-500 italic">HSE (LTI, LTIFR, spills), Quality (on-time, rework, feedback), Environment (waste, emissions, compliance).</p>
                  <textarea name="imsPerfSummary" placeholder="Discussion summary..." className="w-full p-2 border border-[#dde3ec] rounded h-24 focus:ring-1 focus:ring-[#C49A28] outline-none" />
                  <textarea name="imsPerfDecisions" placeholder="Decisions..." className="w-full p-2 border border-[#dde3ec] rounded h-20 focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
              </div>

              {/* 4.4 Objectives */}
              <div className="border border-[#dde3ec] rounded-lg overflow-hidden">
                <div className="bg-[#f4f6f9] px-4 py-2 font-semibold border-b border-[#dde3ec]">4.4 Objectives and Targets Achievement</div>
                <div className="p-4 space-y-4">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm font-semibold">Overall Status:</span>
                    <select name="objStatus" className="p-1 border border-[#dde3ec] rounded outline-none focus:ring-1 focus:ring-[#C49A28]">
                      <option value="on track">On Track</option>
                      <option value="at risk">At Risk</option>
                      <option value="missed">Missed</option>
                    </select>
                  </div>
                  <textarea name="objSummary" placeholder="Discussion summary..." className="w-full p-2 border border-[#dde3ec] rounded h-24 focus:ring-1 focus:ring-[#C49A28] outline-none" />
                  <textarea name="objDecisions" placeholder="Decisions..." className="w-full p-2 border border-[#dde3ec] rounded h-20 focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
              </div>

              {/* 4.5 Resources */}
              <div className="border border-[#dde3ec] rounded-lg overflow-hidden">
                <div className="bg-[#f4f6f9] px-4 py-2 font-semibold border-b border-[#dde3ec]">4.5 Suitability of Resources</div>
                <div className="p-4 space-y-4">
                  <p className="text-xs text-gray-500 italic">People, competence, equipment, infrastructure, financial, technology.</p>
                  <textarea name="resSummary" placeholder="Discussion summary..." className="w-full p-2 border border-[#dde3ec] rounded h-24 focus:ring-1 focus:ring-[#C49A28] outline-none" />
                  <textarea name="resDecisions" placeholder="Decisions..." className="w-full p-2 border border-[#dde3ec] rounded h-20 focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
              </div>

              {/* 4.6 Risks & Opportunities */}
              <div className="border border-[#dde3ec] rounded-lg overflow-hidden">
                <div className="bg-[#f4f6f9] px-4 py-2 font-semibold border-b border-[#dde3ec]">4.6 Effectiveness of Actions on Risks and Opportunities</div>
                <div className="p-4 space-y-4">
                  <textarea name="risksSummary" placeholder="Discussion summary..." className="w-full p-2 border border-[#dde3ec] rounded h-24 focus:ring-1 focus:ring-[#C49A28] outline-none" />
                  <textarea name="risksDecisions" placeholder="Decisions..." className="w-full p-2 border border-[#dde3ec] rounded h-20 focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
              </div>

              {/* 4.7 Audit Results */}
              <div className="border border-[#dde3ec] rounded-lg overflow-hidden">
                <div className="bg-[#f4f6f9] px-4 py-2 font-semibold border-b border-[#dde3ec]">4.7 Audit Results (Internal and External)</div>
                <div className="p-4 space-y-4">
                  <textarea name="auditInternal" placeholder="Internal audit findings — NC, OFI, closure status..." className="w-full p-2 border border-[#dde3ec] rounded h-24 focus:ring-1 focus:ring-[#C49A28] outline-none" />
                  <textarea name="auditExternal" placeholder="External / third-party audit findings..." className="w-full p-2 border border-[#dde3ec] rounded h-24 focus:ring-1 focus:ring-[#C49A28] outline-none" />
                  <textarea name="auditDecisions" placeholder="Decisions..." className="w-full p-2 border border-[#dde3ec] rounded h-20 focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
              </div>

              {/* 4.8 Interested Parties */}
              <div className="border border-[#dde3ec] rounded-lg overflow-hidden">
                <div className="bg-[#f4f6f9] px-4 py-2 font-semibold border-b border-[#dde3ec]">4.8 Interested Parties and Communication</div>
                <div className="p-4 space-y-4">
                  <textarea name="feedback" placeholder="Client feedback, complaints, stakeholder concerns..." className="w-full p-2 border border-[#dde3ec] rounded h-24 focus:ring-1 focus:ring-[#C49A28] outline-none" />
                  <textarea name="regulatory" placeholder="Regulatory and government interactions..." className="w-full p-2 border border-[#dde3ec] rounded h-24 focus:ring-1 focus:ring-[#C49A28] outline-none" />
                  <textarea name="interestedDecisions" placeholder="Decisions..." className="w-full p-2 border border-[#dde3ec] rounded h-20 focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
              </div>

              {/* 4.9 Continual Improvement */}
              <div className="border border-[#dde3ec] rounded-lg overflow-hidden">
                <div className="bg-[#f4f6f9] px-4 py-2 font-semibold border-b border-[#dde3ec]">4.9 Continual Improvement Opportunities</div>
                <div className="p-4 space-y-4">
                  <textarea name="improvementSummary" placeholder="Discussion summary..." className="w-full p-2 border border-[#dde3ec] rounded h-24 focus:ring-1 focus:ring-[#C49A28] outline-none" />
                  <textarea name="improvementDecisions" placeholder="Decisions..." className="w-full p-2 border border-[#dde3ec] rounded h-20 focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
              </div>

              {/* 4.10 AOB */}
              <div className="border border-[#dde3ec] rounded-lg overflow-hidden">
                <div className="bg-[#f4f6f9] px-4 py-2 font-semibold border-b border-[#dde3ec]">4.10 Any Other Business</div>
                <div className="p-4 space-y-4">
                  <textarea name="aobSummary" placeholder="Discussion summary..." className="w-full p-2 border border-[#dde3ec] rounded h-24 focus:ring-1 focus:ring-[#C49A28] outline-none" />
                  <textarea name="aobDecisions" placeholder="Decisions..." className="w-full p-2 border border-[#dde3ec] rounded h-20 focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
              </div>
            </section>

            {/* Section 5: Actions List */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4 flex justify-between items-center">
                <span>5. ACTIONS LIST FROM THIS MEETING</span>
                <button type="button" onClick={addAction} className="bg-[#C49A28] text-white text-xs px-3 py-1 rounded hover:bg-opacity-90 transition-colors">+ Add Action</button>
              </div>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#081C2E] text-white text-sm">
                    <th className="border border-[#dde3ec] p-2 w-32 text-left">Action No.</th>
                    <th className="border border-[#dde3ec] p-2 text-left">Description</th>
                    <th className="border border-[#dde3ec] p-2 text-left w-64">Responsible / Due Date / Status</th>
                  </tr>
                </thead>
                <tbody>
                  {actions.map((action, idx) => (
                    <tr key={idx}>
                      <td className="border border-[#dde3ec] p-2 text-sm font-mono">{action.id}</td>
                      <td className="border border-[#dde3ec] p-2">
                        <textarea 
                          value={action.description}
                          onChange={(e) => {
                            const newArr = [...actions];
                            newArr[idx].description = e.target.value;
                            setActions(newArr);
                          }}
                          className="w-full p-1 outline-none focus:bg-yellow-50 min-h-[40px]"
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="text" 
                          value={action.responsible}
                          onChange={(e) => {
                            const newArr = [...actions];
                            newArr[idx].responsible = e.target.value;
                            setActions(newArr);
                          }}
                          placeholder="Name / Date / Status"
                          className="w-full p-1 outline-none focus:bg-yellow-50"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            {/* Section 6: Next Meeting */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">6. NEXT MEETING</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">Next Meeting Date</label>
                  <input name="nextDate" type="date" className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Next Meeting Location / Mode</label>
                  <input name="nextLocation" type="text" className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-1">Key inputs required</label>
                  <textarea name="nextInputs" className="w-full p-2 border border-[#dde3ec] rounded h-20 focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
              </div>
            </section>

            {/* Section 7: Approval */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">7. APPROVAL</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-[#dde3ec] p-4 rounded bg-[#f4f6f9]">
                  <label className="block text-sm font-semibold mb-1">Chairperson Signature (CEO / MD)</label>
                  <input name="chairSign" type="text" placeholder="Full name (acts as signature)" className="w-full p-2 border border-[#dde3ec] rounded mb-3 bg-white" />
                  <label className="block text-sm font-semibold mb-1">Date</label>
                  <input name="chairSignDate" type="date" className="w-full p-2 border border-[#dde3ec] rounded bg-white" />
                </div>
                <div className="border border-[#dde3ec] p-4 rounded bg-[#f4f6f9]">
                  <label className="block text-sm font-semibold mb-1">Recorder Signature (IMS Lead / MR)</label>
                  <input name="recorderSign" type="text" placeholder="Full name (acts as signature)" className="w-full p-2 border border-[#dde3ec] rounded mb-3 bg-white" />
                  <label className="block text-sm font-semibold mb-1">Date</label>
                  <input name="recorderSignDate" type="date" className="w-full p-2 border border-[#dde3ec] rounded bg-white" />
                </div>
              </div>
            </section>

            {/* Workflow Approval */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">WORKFLOW APPROVAL</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">Prepared by (IMS Project Lead)</label>
                  <input name="preparedBy" type="text" className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Reviewed by (QA / MR)</label>
                  <input name="reviewedBy" type="text" className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Approved by (MD / CEO)</label>
                  <input name="approvedBy" type="text" className="w-full p-2 border border-[#dde3ec] rounded focus:ring-1 focus:ring-[#C49A28] outline-none" />
                </div>
              </div>
            </section>
          </div>

          {/* Error Message */}
          {error && (
            <div className="px-6 py-4 bg-red-50 border-t border-red-200 text-red-700 text-sm">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <div className="p-6 bg-[#f4f6f9] border-t border-[#dde3ec] flex justify-end">
            <button
              type="submit"
              disabled={mutation.isPending}
              className={`
                bg-[#081C2E] text-white px-10 py-3 rounded font-bold uppercase tracking-widest
                hover:bg-[#C49A28] transition-all duration-300 shadow-lg
                disabled:opacity-50 disabled:cursor-not-allowed
              `}
            >
              {mutation.isPending ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : "Submit Minutes"}
            </button>
          </div>
        </form>

        {/* Footer Info */}
        <div className="mt-8 text-xs text-gray-400 text-center uppercase tracking-widest">
          True East Mining Company — Integrated Management System
        </div>
      </div>
    </Layout>
  );
}
