import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";

export default function FRM_HSE_034() {
  const [formData, setFormData] = useState({
    // 1. Observation Details
    date: "",
    time: "",
    jobTaskObserved: "",
    department: "",
    locationArea: "",
    crew: "",
    observerName: "",
    position: "",
    personObserved: "",
    employeeId: "",
    periodInJob: "",
    sopSwpHiraRef: "",
    notificationInAdvance: "",

    // 2. Reason for Observation
    reasonForObservation: [] as string[],

    // 3. Task Evaluation
    evaluation: {
      safeSteps: { status: "", comments: "" },
      correctTools: { status: "", comments: "" },
      correctPpe: { status: "", comments: "" },
      workplaceSafe: { status: "", comments: "" },
      healthSafetyOthers: { status: "", comments: "" },
      workOrderly: { status: "", comments: "" },
      hazardsRecognised: { status: "", comments: "" },
      bodyPositioning: { status: "", comments: "" },
      communicationSignalling: { status: "", comments: "" },
      permitsAuthorisations: { status: "", comments: "" },
    },

    // 4. Recommendations
    recommendations: {
      writeNewSwp: { status: false, responsible: "", signature: "", date: "" },
      modifySwp: { status: false, responsible: "", signature: "", date: "" },
      repairEquipment: { status: false, responsible: "", signature: "", date: "" },
      rearrangeEquipment: { status: false, responsible: "", signature: "", date: "" },
      introduceNewHseRule: { status: false, responsible: "", signature: "", date: "" },
      retrainWorker: { status: false, responsible: "", signature: "", date: "" },
      other: { status: false, detail: "", responsible: "", signature: "", date: "" },
    },

    // 5. Competency Outcome
    competencyOutcome: "",

    // 6. General Comments
    generalComments: "",

    // 7. Immediate Corrective Actions
    correctiveActions: [{ action: "", responsible: "", targetDate: "" }],

    // 8. Personal Commitment
    personalCommitment: "",

    // 9. Crew Attendance
    crewAttendance: [{ name: "", position: "", employeeId: "", signature: "", date: "" }],

    // 10. Review Sign-off
    observerSign: { name: "", signature: "", date: "" },
    personObservedSign: { name: "", signature: "", date: "" },
    supervisorHseSign: { name: "", signature: "", date: "" },
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, value: string) => {
    setFormData((prev) => {
      const current = prev.reasonForObservation as string[];
      if (current.includes(value)) {
        return { ...prev, reasonForObservation: current.filter((i) => i !== value) };
      } else {
        return { ...prev, reasonForObservation: [...current, value] };
      }
    });
  };

  const handleEvaluationChange = (field: string, type: "status" | "comments", value: string) => {
    setFormData((prev) => ({
      ...prev,
      evaluation: {
        ...prev.evaluation,
        [field]: { ...prev.evaluation[field as keyof typeof prev.evaluation], [type]: value },
      },
    }));
  };

  const handleRecommendationChange = (field: string, type: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      recommendations: {
        ...prev.recommendations,
        [field]: { ...prev.recommendations[field as keyof typeof prev.recommendations], [type]: value },
      },
    }));
  };

  const addCorrectiveAction = () => {
    setFormData((prev) => ({
      ...prev,
      correctiveActions: [...prev.correctiveActions, { action: "", responsible: "", targetDate: "" }],
    }));
  };

  const handleCorrectiveActionChange = (index: number, field: string, value: string) => {
    const newActions = [...formData.correctiveActions];
    newActions[index] = { ...newActions[index], [field]: value };
    setFormData((prev) => ({ ...prev, correctiveActions: newActions }));
  };

  const addCrewMember = () => {
    setFormData((prev) => ({
      ...prev,
      crewAttendance: [...prev.crewAttendance, { name: "", position: "", employeeId: "", signature: "", date: "" }],
    }));
  };

  const handleCrewChange = (index: number, field: string, value: string) => {
    const newCrew = [...formData.crewAttendance];
    newCrew[index] = { ...newCrew[index], [field]: value };
    setFormData((prev) => ({ ...prev, crewAttendance: newCrew }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const headers = [
      "Date", "Time", "Job Task Observed", "Department", "Location Area", "Crew", "Observer Name", "Position", 
      "Person Observed", "Employee ID", "Period In Job", "SOP/SWP/HIRA Ref", "Notification in Advance",
      "Reason for Observation",
      "Eval: Safe Steps Status", "Eval: Safe Steps Comments",
      "Eval: Correct Tools Status", "Eval: Correct Tools Comments",
      "Eval: Correct PPE Status", "Eval: Correct PPE Comments",
      "Eval: Workplace Safe Status", "Eval: Workplace Safe Comments",
      "Eval: Health Safety Others Status", "Eval: Health Safety Others Comments",
      "Eval: Work Orderly Status", "Eval: Work Orderly Comments",
      "Eval: Hazards Recognised Status", "Eval: Hazards Recognised Comments",
      "Eval: Body Positioning Status", "Eval: Body Positioning Comments",
      "Eval: Communication Status", "Eval: Communication Comments",
      "Eval: Permits Status", "Eval: Permits Comments",
      "Rec: Write New SWP", "Rec: Modify SWP", "Rec: Repair Equipment", "Rec: Rearrange Equipment", "Rec: New HSE Rule", "Rec: Retrain Worker", "Rec: Other",
      "Competency Outcome", "General Comments", "Corrective Actions", "Personal Commitment", "Crew Attendance",
      "Observer Sign Name", "Observer Sign Date",
      "Person Observed Sign Name", "Person Observed Sign Date",
      "Supervisor Sign Name", "Supervisor Sign Date"
    ];

    const values = [
      formData.date, formData.time, formData.jobTaskObserved, formData.department, formData.locationArea, formData.crew, formData.observerName, formData.position,
      formData.personObserved, formData.employeeId, formData.periodInJob, formData.sopSwpHiraRef, formData.notificationInAdvance,
      formData.reasonForObservation.join(", "),
      formData.evaluation.safeSteps.status, formData.evaluation.safeSteps.comments,
      formData.evaluation.correctTools.status, formData.evaluation.correctTools.comments,
      formData.evaluation.correctPpe.status, formData.evaluation.correctPpe.comments,
      formData.evaluation.workplaceSafe.status, formData.evaluation.workplaceSafe.comments,
      formData.evaluation.healthSafetyOthers.status, formData.evaluation.healthSafetyOthers.comments,
      formData.evaluation.workOrderly.status, formData.evaluation.workOrderly.comments,
      formData.evaluation.hazardsRecognised.status, formData.evaluation.hazardsRecognised.comments,
      formData.evaluation.bodyPositioning.status, formData.evaluation.bodyPositioning.comments,
      formData.evaluation.communicationSignalling.status, formData.evaluation.communicationSignalling.comments,
      formData.evaluation.permitsAuthorisations.status, formData.evaluation.permitsAuthorisations.comments,
      formData.recommendations.writeNewSwp.status ? "Yes" : "No",
      formData.recommendations.modifySwp.status ? "Yes" : "No",
      formData.recommendations.repairEquipment.status ? "Yes" : "No",
      formData.recommendations.rearrangeEquipment.status ? "Yes" : "No",
      formData.recommendations.introduceNewHseRule.status ? "Yes" : "No",
      formData.recommendations.retrainWorker.status ? "Yes" : "No",
      formData.recommendations.other.status ? `Yes (${formData.recommendations.other.detail})` : "No",
      formData.competencyOutcome,
      formData.generalComments,
      JSON.stringify(formData.correctiveActions),
      formData.personalCommitment,
      JSON.stringify(formData.crewAttendance),
      formData.observerSign.name, formData.observerSign.date,
      formData.personObservedSign.name, formData.personObservedSign.date,
      formData.supervisorHseSign.name, formData.supervisorHseSign.date
    ];

    mutation.mutate({
      formCode: "TE-IMS-FRM-HSE-034",
      headers,
      values,
    });
  };

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Form submitted successfully.</h2>
          <p className="mb-6">Your Planned Task Observation (PTO) Form has been recorded.</p>
          <a 
            href={sheetUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#C49A28] text-white px-6 py-2 rounded hover:bg-[#a38021] transition-colors"
          >
            View register
          </a>
          <div className="mt-8">
            <Link href="/" className="text-[#081C2E] hover:underline">← Return to Portal Home</Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-[#f4f6f9]">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <Link href="/" className="text-[#081C2E] hover:underline flex items-center gap-2">
            ← Portal Home
          </Link>
          <span className="text-gray-500 text-sm ml-6">Portal Home &gt; FRM &gt; Planned Task Observation Form</span>
        </nav>

        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg overflow-hidden border border-[#dde3ec]">
          {/* Header Section */}
          <div className="bg-[#081C2E] text-white p-6">
            <h1 className="text-2xl font-bold">PLANNED TASK OBSERVATION (PTO) FORM</h1>
          </div>

          {/* Document Control Table */}
          <div className="p-6 border-b border-[#dde3ec] bg-gray-50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div><span className="font-bold">Document:</span> TE-IMS-FRM-HSE-034</div>
              <div><span className="font-bold">Revision:</span> Rev01</div>
              <div><span className="font-bold">Date:</span> 09 Apr 2026</div>
              <div><span className="font-bold">Status:</span> Approved</div>
            </div>
          </div>

          <div className="p-6 space-y-8">
            {/* Purpose & Note */}
            <div className="text-sm text-gray-700 bg-blue-50 p-4 rounded border-l-4 border-[#081C2E]">
              <p className="font-bold mb-1">Purpose:</p>
              <p className="mb-2">To observe all steps of a task as it is being carried out, to identify deviations from the safe work procedure, and to implement corrective actions. PTOs verify worker competence and reinforce safe behaviours.</p>
              <p><span className="font-bold">Note:</span> Use the written Safe Work Procedure / HIRA to guide you during the observation. This form must be filed and retained for audit purposes.</p>
            </div>

            {/* 1. Observation Details */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">1. OBSERVATION DETAILS</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold">Date*</label>
                  <input type="date" name="date" required value={formData.date} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold">Time*</label>
                  <input type="time" name="time" required value={formData.time} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold">Job / Task Observed*</label>
                  <input type="text" name="jobTaskObserved" required value={formData.jobTaskObserved} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold">Department*</label>
                  <input type="text" name="department" required value={formData.department} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold">Location / Area*</label>
                  <input type="text" name="locationArea" required value={formData.locationArea} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold">Crew</label>
                  <input type="text" name="crew" value={formData.crew} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold">Observer Name*</label>
                  <input type="text" name="observerName" required value={formData.observerName} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold">Position</label>
                  <input type="text" name="position" value={formData.position} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold">Person Observed*</label>
                  <input type="text" name="personObserved" required value={formData.personObserved} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold">Employee ID</label>
                  <input type="text" name="employeeId" value={formData.employeeId} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold">Period in Job</label>
                  <input type="text" name="periodInJob" value={formData.periodInJob} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold">Relevant SOP/SWP/HIRA Ref</label>
                  <input type="text" name="sopSwpHiraRef" value={formData.sopSwpHiraRef} onChange={handleInputChange} className="w-full border border-[#dde3ec] p-2 rounded" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="block text-sm font-semibold">Notification in Advance</label>
                  <div className="flex gap-4 mt-1">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="notificationInAdvance" value="Yes" checked={formData.notificationInAdvance === "Yes"} onChange={handleInputChange} /> Yes
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="notificationInAdvance" value="No" checked={formData.notificationInAdvance === "No"} onChange={handleInputChange} /> No
                    </label>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Reason for Observation */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">2. REASON FOR OBSERVATION</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "New Worker", "Worker with Known Ability Problem", "Good Performer / Experienced Employee", "Routine Observation",
                  "Poor Performer", "Risk Taker", "Injury / Damage", "Tool / Equipment / Process / System Change", "Efficiency"
                ].map((reason) => (
                  <label key={reason} className="flex items-center gap-2 text-sm">
                    <input 
                      type="checkbox" 
                      checked={formData.reasonForObservation.includes(reason)} 
                      onChange={() => handleCheckboxChange("reasonForObservation", reason)} 
                    /> {reason}
                  </label>
                ))}
              </div>
            </section>

            {/* 3. Task Evaluation */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">3. TASK EVALUATION</div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[#dde3ec]">
                  <thead>
                    <tr className="bg-[#081C2E] text-white">
                      <th className="border border-[#dde3ec] p-2 text-left">Evaluation Criteria</th>
                      <th className="border border-[#dde3ec] p-2 text-center w-20">Yes</th>
                      <th className="border border-[#dde3ec] p-2 text-center w-20">No</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Comments</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { key: "safeSteps", label: "Safe and logical steps followed" },
                      { key: "correctTools", label: "Used correct tools for the task" },
                      { key: "correctPpe", label: "Used correct PPE as required" },
                      { key: "workplaceSafe", label: "Workplace safe and organised" },
                      { key: "healthSafetyOthers", label: "Health and safety of other workers considered" },
                      { key: "workOrderly", label: "Work orderly and clean up performed" },
                      { key: "hazardsRecognised", label: "Dangers / hazards recognised and controlled" },
                      { key: "bodyPositioning", label: "Body positioning and ergonomics appropriate" },
                      { key: "communicationSignalling", label: "Communication and signalling adequate" },
                      { key: "permitsAuthorisations", label: "Permits and authorisations in place (if required)" },
                    ].map((item) => (
                      <tr key={item.key}>
                        <td className="border border-[#dde3ec] p-2 text-sm">{item.label}</td>
                        <td className="border border-[#dde3ec] p-2 text-center">
                          <input 
                            type="radio" 
                            name={`${item.key}_status`} 
                            checked={formData.evaluation[item.key as keyof typeof formData.evaluation].status === "Yes"} 
                            onChange={() => handleEvaluationChange(item.key, "status", "Yes")} 
                          />
                        </td>
                        <td className="border border-[#dde3ec] p-2 text-center">
                          <input 
                            type="radio" 
                            name={`${item.key}_status`} 
                            checked={formData.evaluation[item.key as keyof typeof formData.evaluation].status === "No"} 
                            onChange={() => handleEvaluationChange(item.key, "status", "No")} 
                          />
                        </td>
                        <td className="border border-[#dde3ec] p-2">
                          <input 
                            type="text" 
                            className="w-full p-1 text-sm border border-transparent focus:border-gray-300 rounded"
                            value={formData.evaluation[item.key as keyof typeof formData.evaluation].comments}
                            onChange={(e) => handleEvaluationChange(item.key, "comments", e.target.value)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 4. Recommendations */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">4. RECOMMENDATIONS</div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[#dde3ec]">
                  <thead>
                    <tr className="bg-[#081C2E] text-white">
                      <th className="border border-[#dde3ec] p-2 text-left">Recommendation</th>
                      <th className="border border-[#dde3ec] p-2 text-center w-20">Yes</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Responsible Person</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Signature</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { key: "writeNewSwp", label: "Write New SWP" },
                      { key: "modifySwp", label: "Modify SWP" },
                      { key: "repairEquipment", label: "Repair Equipment" },
                      { key: "rearrangeEquipment", label: "Re-arrange Equipment" },
                      { key: "introduceNewHseRule", label: "Introduce New HSE Rule" },
                      { key: "retrainWorker", label: "Retrain Worker" },
                    ].map((item) => (
                      <tr key={item.key}>
                        <td className="border border-[#dde3ec] p-2 text-sm">{item.label}</td>
                        <td className="border border-[#dde3ec] p-2 text-center">
                          <input 
                            type="checkbox" 
                            checked={formData.recommendations[item.key as keyof typeof formData.recommendations].status} 
                            onChange={(e) => handleRecommendationChange(item.key, "status", e.target.checked)} 
                          />
                        </td>
                        <td className="border border-[#dde3ec] p-2">
                          <input 
                            type="text" 
                            className="w-full p-1 text-sm"
                            value={formData.recommendations[item.key as keyof typeof formData.recommendations].responsible}
                            onChange={(e) => handleRecommendationChange(item.key, "responsible", e.target.value)}
                          />
                        </td>
                        <td className="border border-[#dde3ec] p-2">
                          <input 
                            type="text" 
                            placeholder="Full name"
                            className="w-full p-1 text-sm"
                            value={formData.recommendations[item.key as keyof typeof formData.recommendations].signature}
                            onChange={(e) => handleRecommendationChange(item.key, "signature", e.target.value)}
                          />
                        </td>
                        <td className="border border-[#dde3ec] p-2">
                          <input 
                            type="date" 
                            className="w-full p-1 text-sm"
                            value={formData.recommendations[item.key as keyof typeof formData.recommendations].date}
                            onChange={(e) => handleRecommendationChange(item.key, "date", e.target.value)}
                          />
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td className="border border-[#dde3ec] p-2 text-sm">
                        Other: <input 
                          type="text" 
                          placeholder="Specify" 
                          className="border-b border-gray-300 ml-2 text-sm"
                          value={formData.recommendations.other.detail}
                          onChange={(e) => handleRecommendationChange("other", "detail", e.target.value)}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2 text-center">
                        <input 
                          type="checkbox" 
                          checked={formData.recommendations.other.status} 
                          onChange={(e) => handleRecommendationChange("other", "status", e.target.checked)} 
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="text" 
                          className="w-full p-1 text-sm"
                          value={formData.recommendations.other.responsible}
                          onChange={(e) => handleRecommendationChange("other", "responsible", e.target.value)}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="text" 
                          placeholder="Full name"
                          className="w-full p-1 text-sm"
                          value={formData.recommendations.other.signature}
                          onChange={(e) => handleRecommendationChange("other", "signature", e.target.value)}
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="date" 
                          className="w-full p-1 text-sm"
                          value={formData.recommendations.other.date}
                          onChange={(e) => handleRecommendationChange("other", "date", e.target.value)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 5. Competency Outcome */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">5. COMPETENCY OUTCOME</div>
              <div className="flex flex-wrap gap-6 p-4 border border-[#dde3ec] rounded bg-white">
                <span className="font-semibold text-sm">Overall Assessment:</span>
                {["Competent", "Not Yet Competent", "Re-observation Required"].map((outcome) => (
                  <label key={outcome} className="flex items-center gap-2 text-sm">
                    <input 
                      type="radio" 
                      name="competencyOutcome" 
                      value={outcome} 
                      checked={formData.competencyOutcome === outcome} 
                      onChange={handleInputChange} 
                    /> {outcome}
                  </label>
                ))}
              </div>
            </section>

            {/* 6. General Comments */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">6. GENERAL COMMENTS / OBSERVATIONS</div>
              <textarea 
                name="generalComments" 
                rows={4} 
                value={formData.generalComments} 
                onChange={handleInputChange} 
                className="w-full border border-[#dde3ec] p-2 rounded"
                placeholder="Enter any additional observations or notes here..."
              ></textarea>
            </section>

            {/* 7. Immediate Corrective Actions */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">7. IMMEDIATE CORRECTIVE ACTIONS</div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[#dde3ec]">
                  <thead>
                    <tr className="bg-[#081C2E] text-white text-sm">
                      <th className="border border-[#dde3ec] p-2 text-left">Action Required</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Responsible Person</th>
                      <th className="border border-[#dde3ec] p-2 text-left w-40">Target Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.correctiveActions.map((action, index) => (
                      <tr key={index}>
                        <td className="border border-[#dde3ec] p-2">
                          <input 
                            type="text" 
                            className="w-full p-1 text-sm" 
                            value={action.action} 
                            onChange={(e) => handleCorrectiveActionChange(index, "action", e.target.value)} 
                          />
                        </td>
                        <td className="border border-[#dde3ec] p-2">
                          <input 
                            type="text" 
                            className="w-full p-1 text-sm" 
                            value={action.responsible} 
                            onChange={(e) => handleCorrectiveActionChange(index, "responsible", e.target.value)} 
                          />
                        </td>
                        <td className="border border-[#dde3ec] p-2">
                          <input 
                            type="date" 
                            className="w-full p-1 text-sm" 
                            value={action.targetDate} 
                            onChange={(e) => handleCorrectiveActionChange(index, "targetDate", e.target.value)} 
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button 
                type="button" 
                onClick={addCorrectiveAction}
                className="mt-2 text-sm text-[#C49A28] font-bold hover:underline"
              >
                + Add Corrective Action
              </button>
            </section>

            {/* 8. Personal Commitment */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">8. PERSONAL COMMITMENT BY WORKER</div>
              <textarea 
                name="personalCommitment" 
                rows={3} 
                value={formData.personalCommitment} 
                onChange={handleInputChange} 
                className="w-full border border-[#dde3ec] p-2 rounded"
                placeholder="Worker to state commitment to safe work practices..."
              ></textarea>
            </section>

            {/* 9. Crew Attendance */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">9. CREW OBSERVATION ATTENDANCE (IF APPLICABLE)</div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[#dde3ec]">
                  <thead>
                    <tr className="bg-[#081C2E] text-white text-sm">
                      <th className="border border-[#dde3ec] p-2 text-center w-12">No.</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Name</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Position</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Employee ID</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Signature</th>
                      <th className="border border-[#dde3ec] p-2 text-left w-36">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.crewAttendance.map((member, index) => (
                      <tr key={index}>
                        <td className="border border-[#dde3ec] p-2 text-center text-sm">{index + 1}</td>
                        <td className="border border-[#dde3ec] p-2">
                          <input type="text" className="w-full p-1 text-sm" value={member.name} onChange={(e) => handleCrewChange(index, "name", e.target.value)} />
                        </td>
                        <td className="border border-[#dde3ec] p-2">
                          <input type="text" className="w-full p-1 text-sm" value={member.position} onChange={(e) => handleCrewChange(index, "position", e.target.value)} />
                        </td>
                        <td className="border border-[#dde3ec] p-2">
                          <input type="text" className="w-full p-1 text-sm" value={member.employeeId} onChange={(e) => handleCrewChange(index, "employeeId", e.target.value)} />
                        </td>
                        <td className="border border-[#dde3ec] p-2">
                          <input type="text" placeholder="Full name" className="w-full p-1 text-sm" value={member.signature} onChange={(e) => handleCrewChange(index, "signature", e.target.value)} />
                        </td>
                        <td className="border border-[#dde3ec] p-2">
                          <input type="date" className="w-full p-1 text-sm" value={member.date} onChange={(e) => handleCrewChange(index, "date", e.target.value)} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button 
                type="button" 
                onClick={addCrewMember}
                className="mt-2 text-sm text-[#C49A28] font-bold hover:underline"
              >
                + Add Crew Member
              </button>
            </section>

            {/* 10. Review Sign-off */}
            <section>
              <div className="bg-[#081C2E] text-white px-4 py-2 font-bold mb-4">10. REVIEWED WITH EMPLOYEE – SIGN-OFF</div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[#dde3ec]">
                  <thead>
                    <tr className="bg-[#081C2E] text-white text-sm">
                      <th className="border border-[#dde3ec] p-2 text-left">Role</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Name</th>
                      <th className="border border-[#dde3ec] p-2 text-left">Signature (Full Name)</th>
                      <th className="border border-[#dde3ec] p-2 text-left w-40">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-[#dde3ec] p-2 font-semibold text-sm">Observer</td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="text" 
                          className="w-full p-1 text-sm" 
                          value={formData.observerSign.name} 
                          onChange={(e) => setFormData(prev => ({ ...prev, observerSign: { ...prev.observerSign, name: e.target.value } }))} 
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="text" 
                          placeholder="Signature"
                          className="w-full p-1 text-sm" 
                          value={formData.observerSign.signature} 
                          onChange={(e) => setFormData(prev => ({ ...prev, observerSign: { ...prev.observerSign, signature: e.target.value } }))} 
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="date" 
                          className="w-full p-1 text-sm" 
                          value={formData.observerSign.date} 
                          onChange={(e) => setFormData(prev => ({ ...prev, observerSign: { ...prev.observerSign, date: e.target.value } }))} 
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#dde3ec] p-2 font-semibold text-sm">Person Observed</td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="text" 
                          className="w-full p-1 text-sm" 
                          value={formData.personObservedSign.name} 
                          onChange={(e) => setFormData(prev => ({ ...prev, personObservedSign: { ...prev.personObservedSign, name: e.target.value } }))} 
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="text" 
                          placeholder="Signature"
                          className="w-full p-1 text-sm" 
                          value={formData.personObservedSign.signature} 
                          onChange={(e) => setFormData(prev => ({ ...prev, personObservedSign: { ...prev.personObservedSign, signature: e.target.value } }))} 
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="date" 
                          className="w-full p-1 text-sm" 
                          value={formData.personObservedSign.date} 
                          onChange={(e) => setFormData(prev => ({ ...prev, personObservedSign: { ...prev.personObservedSign, date: e.target.value } }))} 
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-[#dde3ec] p-2 font-semibold text-sm">Supervisor / HSE Officer</td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="text" 
                          className="w-full p-1 text-sm" 
                          value={formData.supervisorHseSign.name} 
                          onChange={(e) => setFormData(prev => ({ ...prev, supervisorHseSign: { ...prev.supervisorHseSign, name: e.target.value } }))} 
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="text" 
                          placeholder="Signature"
                          className="w-full p-1 text-sm" 
                          value={formData.supervisorHseSign.signature} 
                          onChange={(e) => setFormData(prev => ({ ...prev, supervisorHseSign: { ...prev.supervisorHseSign, signature: e.target.value } }))} 
                        />
                      </td>
                      <td className="border border-[#dde3ec] p-2">
                        <input 
                          type="date" 
                          className="w-full p-1 text-sm" 
                          value={formData.supervisorHseSign.date} 
                          onChange={(e) => setFormData(prev => ({ ...prev, supervisorHseSign: { ...prev.supervisorHseSign, date: e.target.value } }))} 
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Submit Button */}
            <div className="flex flex-col items-center gap-4 pt-6 border-t border-[#dde3ec]">
              {error && <div className="text-red-600 font-semibold">{error}</div>}
              <button 
                type="submit" 
                disabled={mutation.isPending}
                className="bg-[#081C2E] text-white px-12 py-3 rounded-lg font-bold text-lg hover:bg-[#112d47] transition-colors disabled:opacity-50"
              >
                {mutation.isPending ? "Submitting..." : "Submit PTO Form"}
              </button>
            </div>
          </div>
        </form>

        {/* Revision History */}
        <div className="mt-8 overflow-x-auto">
          <table className="w-full border-collapse border border-[#dde3ec] text-xs">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-[#dde3ec] p-2 text-left">Rev</th>
                <th className="border border-[#dde3ec] p-2 text-left">Date</th>
                <th className="border border-[#dde3ec] p-2 text-left">Description of Changes</th>
                <th className="border border-[#dde3ec] p-2 text-left">Author</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#dde3ec] p-2">Rev00</td>
                <td className="border border-[#dde3ec] p-2">—</td>
                <td className="border border-[#dde3ec] p-2">Initial issue</td>
                <td className="border border-[#dde3ec] p-2">—</td>
              </tr>
              <tr>
                <td className="border border-[#dde3ec] p-2">Rev01</td>
                <td className="border border-[#dde3ec] p-2">09 Apr 2026</td>
                <td className="border border-[#dde3ec] p-2">Restructured from 19-column layout to clean sectional format. Added body positioning, communication, and permits evaluation criteria. Added competency outcome, personal commitment, corrective actions table. Reformatted to TE IMS standard.</td>
                <td className="border border-[#dde3ec] p-2">IMS Team</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
