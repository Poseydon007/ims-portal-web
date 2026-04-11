// JHA Form — TE-IMS-FRM-HSE-001 Rev01
// Job Hazard Analysis — digital form matching Word template design

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

const NAVY = "#081C2E";
const GOLD = "#C49A28";
const GRAY_LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663473952399/3YVZojsY2rei5QwThHiV6E/trueeastlogovectorgray_20d7a465.png";
const WHITE_LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663473952399/3YVZojsY2rei5QwThHiV6E/trueeastlogoWHITE_79ded02e.png";

// Risk colour mapping
const riskColor: Record<string, string> = {
  L: "#22c55e",
  M: "#eab308",
  H: "#f97316",
  E: "#ef4444",
};

const riskLabel: Record<string, string> = {
  L: "L — Low",
  M: "M — Medium",
  H: "H — High",
  E: "E — Extreme",
};

type TaskStep = {
  step: number;
  taskStep: string;
  hazards: string;
  initialRisk: string;
  controls: string;
  residualRisk: string;
  responsible: string;
};

type FormValues = {
  jobTask: string;
  date: string;
  departmentSite: string;
  supervisor: string;
  reviewedBy: string;
  taskSteps: TaskStep[];
  completedByName: string;
  completedByDate: string;
  reviewedByName: string;
  reviewedByDate: string;
  siteManagerName: string;
  siteManagerDate: string;
};

const defaultStep = (step: number): TaskStep => ({
  step,
  taskStep: "",
  hazards: "",
  initialRisk: "L",
  controls: "",
  residualRisk: "L",
  responsible: "",
});

export default function JHAForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState("");

  const { register, handleSubmit, control, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      jobTask: "",
      date: new Date().toISOString().split("T")[0],
      departmentSite: "",
      supervisor: "",
      reviewedBy: "",
      taskSteps: [defaultStep(1), defaultStep(2), defaultStep(3)],
      completedByName: "",
      completedByDate: new Date().toISOString().split("T")[0],
      reviewedByName: "",
      reviewedByDate: "",
      siteManagerName: "",
      siteManagerDate: "",
    },
  });

  const { fields, append, remove } = useFieldArray({ control, name: "taskSteps" });

  const submitMutation = trpc.jha.submit.useMutation({
    onSuccess: (data) => {
      setSubmissionId(data.submissionId);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    onError: (err) => {
      toast.error(`Submission failed: ${err.message}`);
    },
  });

  const onSubmit = (data: FormValues) => {
    const steps = data.taskSteps.map((s, i) => ({ ...s, step: i + 1 }));
    submitMutation.mutate({ ...data, taskSteps: steps });
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
        {/* Top Nav */}
        <nav className="flex items-center justify-between px-6 py-3 shadow-sm" style={{ backgroundColor: NAVY, borderBottom: `2px solid ${GOLD}` }}>
          <div className="flex items-center gap-3">
            <img src={WHITE_LOGO} alt="True East" style={{ height: "40px", objectFit: "contain" }} />
            <div>
              <div className="text-white font-bold text-sm tracking-wide">TRUE EAST MINING COMPANY</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>الشرق الحقيقي</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-white font-semibold text-sm tracking-widest uppercase">IMS DOCUMENT PORTAL</div>
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>Internal Use Only</div>
          </div>
        </nav>
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="bg-white rounded-lg shadow-md p-10 max-w-lg w-full text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#dcfce7" }}>
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2" style={{ color: NAVY }}>JHA Submitted Successfully</h2>
            <p className="text-sm mb-1" style={{ color: "#6b7a8d" }}>Your Job Hazard Analysis has been recorded.</p>
            <div className="mt-4 mb-6 px-4 py-3 rounded text-sm font-mono font-bold" style={{ backgroundColor: "#f0f4f8", color: NAVY }}>
              Reference: {submissionId}
            </div>
            <p className="text-xs mb-6" style={{ color: "#8a9ab0" }}>
              This submission has been logged in the IMS register and synced to the HSE team. Keep your reference number for follow-up.
            </p>
            <div className="flex gap-3 justify-center">
              <Link href="/docs/frm">
                <button className="px-4 py-2 rounded text-sm font-semibold border" style={{ borderColor: NAVY, color: NAVY }}>
                  Back to Forms
                </button>
              </Link>
              <button
                onClick={() => { setSubmitted(false); setSubmissionId(""); }}
                className="px-4 py-2 rounded text-sm font-semibold text-white"
                style={{ backgroundColor: GOLD }}
              >
                Submit Another JHA
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      {/* Top Nav */}
      <nav className="flex items-center justify-between px-6 py-3 shadow-sm" style={{ backgroundColor: NAVY, borderBottom: `2px solid ${GOLD}` }}>
        <div className="flex items-center gap-3">
          <img src={WHITE_LOGO} alt="True East" style={{ height: "40px", objectFit: "contain" }} />
          <div>
            <div className="text-white font-bold text-sm tracking-wide">TRUE EAST MINING COMPANY</div>
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>الشرق الحقيقي</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-white font-semibold text-sm tracking-widest uppercase">IMS DOCUMENT PORTAL</div>
          <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>Internal Use Only</div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="px-6 py-2 text-xs" style={{ backgroundColor: "#e8edf4", borderBottom: "1px solid #dde3ec", color: "#6b7a8d" }}>
        <Link href="/" className="hover:underline" style={{ color: GOLD }}>Portal Home</Link>
        <span className="mx-1">›</span>
        <Link href="/docs/frm" className="hover:underline" style={{ color: GOLD }}>Forms &amp; Templates</Link>
        <span className="mx-1">›</span>
        <span style={{ color: NAVY }}>Job Hazard Analysis</span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex-1 pb-12">
        {/* Document Header */}
        <div className="max-w-4xl mx-auto mt-6 bg-white rounded-t shadow-sm">
          <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: `1px solid #dde3ec` }}>
            <img
              src={GRAY_LOGO}
              alt="True East Mining"
              style={{ width: "90px", height: "90px", objectFit: "contain" }}
            />
            <div className="text-right">
              <p className="text-xs font-mono" style={{ color: "#8a9ab0" }}>TE-IMS-FRM-HSE-001</p>
              <p className="text-xs" style={{ color: "#8a9ab0" }}>Rev01 | Mar 2026</p>
            </div>
          </div>
          <div className="px-6 py-4 text-right" style={{ borderBottom: `1px solid #dde3ec` }}>
            <h1 className="text-xl font-bold tracking-wide" style={{ color: NAVY }}>JOB HAZARD ANALYSIS</h1>
            <p className="text-xs mt-1" style={{ color: "#8a9ab0" }}>True East Mining Company — Integrated Management System</p>
          </div>
          {/* Doc info table */}
          <div className="px-6 py-3" style={{ borderBottom: `2px solid ${GOLD}` }}>
            <table className="w-full text-xs" style={{ color: NAVY }}>
              <tbody>
                {[["Document", "TE-IMS-FRM-HSE-001"], ["Revision", "01"], ["Date", "01 March 2026"], ["Status", "Approved for Implementation"]].map(([k, v]) => (
                  <tr key={k} style={{ borderBottom: "1px solid #edf0f5" }}>
                    <td className="py-1 font-bold w-32">{k}</td>
                    <td className="py-1">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 1 — Job Information */}
        <div className="max-w-4xl mx-auto bg-white shadow-sm mt-0">
          <div className="px-6 py-3 font-bold text-sm tracking-widest uppercase text-white" style={{ backgroundColor: NAVY }}>
            Section 1 — Job Information
          </div>
          <div className="px-6 py-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold mb-1 uppercase tracking-wide" style={{ color: NAVY }}>Job / Task *</label>
              <input
                {...register("jobTask", { required: true })}
                placeholder="e.g. Drill Rod Change — Rig 3"
                className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2"
                style={{ borderColor: errors.jobTask ? "#ef4444" : "#dde3ec", color: NAVY }}
              />
              {errors.jobTask && <p className="text-xs text-red-500 mt-1">Required</p>}
            </div>
            <div>
              <label className="block text-xs font-bold mb-1 uppercase tracking-wide" style={{ color: NAVY }}>Date *</label>
              <input
                type="date"
                {...register("date", { required: true })}
                className="w-full border rounded px-3 py-2 text-sm focus:outline-none"
                style={{ borderColor: errors.date ? "#ef4444" : "#dde3ec", color: NAVY }}
              />
            </div>
            <div>
              <label className="block text-xs font-bold mb-1 uppercase tracking-wide" style={{ color: NAVY }}>Department / Site</label>
              <input
                {...register("departmentSite")}
                placeholder="e.g. Drilling Operations — Block A"
                className="w-full border rounded px-3 py-2 text-sm focus:outline-none"
                style={{ borderColor: "#dde3ec", color: NAVY }}
              />
            </div>
            <div>
              <label className="block text-xs font-bold mb-1 uppercase tracking-wide" style={{ color: NAVY }}>JHA Number</label>
              <input
                disabled
                placeholder="Auto-generated on submission"
                className="w-full border rounded px-3 py-2 text-sm bg-gray-50"
                style={{ borderColor: "#dde3ec", color: "#8a9ab0" }}
              />
            </div>
            <div>
              <label className="block text-xs font-bold mb-1 uppercase tracking-wide" style={{ color: NAVY }}>Supervisor</label>
              <input
                {...register("supervisor")}
                placeholder="Supervisor Name"
                className="w-full border rounded px-3 py-2 text-sm focus:outline-none"
                style={{ borderColor: "#dde3ec", color: NAVY }}
              />
            </div>
            <div>
              <label className="block text-xs font-bold mb-1 uppercase tracking-wide" style={{ color: NAVY }}>Reviewed By</label>
              <input
                {...register("reviewedBy")}
                placeholder="HSE Officer / Reviewer Name"
                className="w-full border rounded px-3 py-2 text-sm focus:outline-none"
                style={{ borderColor: "#dde3ec", color: NAVY }}
              />
            </div>
          </div>
        </div>

        {/* Section 2 — Risk Matrix Reference */}
        <div className="max-w-4xl mx-auto bg-white shadow-sm mt-0">
          <div className="px-6 py-3 font-bold text-sm tracking-widest uppercase text-white" style={{ backgroundColor: NAVY }}>
            Section 2 — Risk Matrix Reference
          </div>
          <div className="px-6 py-4">
            <p className="text-xs italic mb-3" style={{ color: "#6b7a8d" }}>
              Use this 5×5 matrix to assign Initial Risk and Residual Risk ratings in Section 3 below.
            </p>
            <div className="overflow-x-auto">
              <table className="text-xs border-collapse w-full max-w-lg">
                <thead>
                  <tr>
                    <th className="border px-2 py-1 text-left" style={{ backgroundColor: "#f4f6f9", color: NAVY, borderColor: "#dde3ec" }}>L \ C</th>
                    {["1", "2", "3", "4"].map(c => (
                      <th key={c} className="border px-3 py-1 text-center" style={{ backgroundColor: "#f4f6f9", color: NAVY, borderColor: "#dde3ec" }}>{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { row: "A (Almost Certain)", vals: ["H","H","E","E"] },
                    { row: "B (Likely)",         vals: ["M","H","H","E"] },
                    { row: "C (Possible)",       vals: ["L","M","H","H"] },
                    { row: "D (Unlikely)",       vals: ["L","L","M","H"] },
                    { row: "E (Rare)",           vals: ["L","L","L","M"] },
                  ].map(({ row, vals }) => (
                    <tr key={row}>
                      <td className="border px-2 py-1 font-semibold" style={{ borderColor: "#dde3ec", color: NAVY }}>{row}</td>
                      {vals.map((v, i) => (
                        <td key={i} className="border px-3 py-1 text-center font-bold text-white text-xs" style={{ backgroundColor: riskColor[v], borderColor: "#dde3ec" }}>{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs mt-2 italic" style={{ color: "#8a9ab0" }}>Consequence: 1=Minor, 2=Moderate, 3=Major, 4=Catastrophic</p>
          </div>
        </div>

        {/* Section 3 — Task Step Hazard Analysis */}
        <div className="max-w-4xl mx-auto bg-white shadow-sm mt-0">
          <div className="px-6 py-3 flex items-center justify-between font-bold text-sm tracking-widest uppercase text-white" style={{ backgroundColor: NAVY }}>
            <span>Section 3 — Task Step Hazard Analysis</span>
            {fields.length < 10 && (
              <button
                type="button"
                onClick={() => append(defaultStep(fields.length + 1))}
                className="text-xs px-3 py-1 rounded font-semibold"
                style={{ backgroundColor: GOLD, color: NAVY }}
              >
                + Add Step
              </button>
            )}
          </div>
          <div className="px-6 py-4 overflow-x-auto">
            <table className="w-full text-xs border-collapse min-w-[700px]">
              <thead>
                <tr style={{ backgroundColor: "#f4f6f9" }}>
                  {["#", "Task Step", "Hazards Identified", "Initial Risk", "Controls", "Residual Risk", "Responsible", ""].map((h) => (
                    <th key={h} className="border px-2 py-2 text-left font-bold" style={{ borderColor: "#dde3ec", color: NAVY }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {fields.map((field, index) => (
                  <tr key={field.id} style={{ borderBottom: "1px solid #edf0f5" }}>
                    <td className="border px-2 py-2 text-center font-bold" style={{ borderColor: "#dde3ec", color: GOLD, width: "32px" }}>{index + 1}</td>
                    <td className="border px-1 py-1" style={{ borderColor: "#dde3ec", minWidth: "140px" }}>
                      <input
                        {...register(`taskSteps.${index}.taskStep`)}
                        placeholder="Describe the task step"
                        className="w-full px-2 py-1 text-xs border rounded focus:outline-none"
                        style={{ borderColor: "#dde3ec", color: NAVY }}
                      />
                    </td>
                    <td className="border px-1 py-1" style={{ borderColor: "#dde3ec", minWidth: "140px" }}>
                      <input
                        {...register(`taskSteps.${index}.hazards`)}
                        placeholder="Hazards / risks"
                        className="w-full px-2 py-1 text-xs border rounded focus:outline-none"
                        style={{ borderColor: "#dde3ec", color: NAVY }}
                      />
                    </td>
                    <td className="border px-1 py-1 text-center" style={{ borderColor: "#dde3ec", width: "90px" }}>
                      <select
                        {...register(`taskSteps.${index}.initialRisk`)}
                        className="w-full px-1 py-1 text-xs border rounded focus:outline-none font-bold"
                        style={{ borderColor: "#dde3ec", color: NAVY }}
                      >
                        {Object.entries(riskLabel).map(([k, v]) => (
                          <option key={k} value={k}>{v}</option>
                        ))}
                      </select>
                    </td>
                    <td className="border px-1 py-1" style={{ borderColor: "#dde3ec", minWidth: "160px" }}>
                      <input
                        {...register(`taskSteps.${index}.controls`)}
                        placeholder="Control measures"
                        className="w-full px-2 py-1 text-xs border rounded focus:outline-none"
                        style={{ borderColor: "#dde3ec", color: NAVY }}
                      />
                    </td>
                    <td className="border px-1 py-1 text-center" style={{ borderColor: "#dde3ec", width: "90px" }}>
                      <select
                        {...register(`taskSteps.${index}.residualRisk`)}
                        className="w-full px-1 py-1 text-xs border rounded focus:outline-none font-bold"
                        style={{ borderColor: "#dde3ec", color: NAVY }}
                      >
                        {Object.entries(riskLabel).map(([k, v]) => (
                          <option key={k} value={k}>{v}</option>
                        ))}
                      </select>
                    </td>
                    <td className="border px-1 py-1" style={{ borderColor: "#dde3ec", minWidth: "100px" }}>
                      <input
                        {...register(`taskSteps.${index}.responsible`)}
                        placeholder="Name / Role"
                        className="w-full px-2 py-1 text-xs border rounded focus:outline-none"
                        style={{ borderColor: "#dde3ec", color: NAVY }}
                      />
                    </td>
                    <td className="border px-1 py-1 text-center" style={{ borderColor: "#dde3ec", width: "32px" }}>
                      {fields.length > 1 && (
                        <button type="button" onClick={() => remove(index)} className="text-red-400 hover:text-red-600 text-xs font-bold">✕</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {fields.length < 10 && (
              <button
                type="button"
                onClick={() => append(defaultStep(fields.length + 1))}
                className="mt-3 text-xs px-3 py-1.5 rounded border font-semibold"
                style={{ borderColor: GOLD, color: GOLD }}
              >
                + Add Another Step
              </button>
            )}
          </div>
        </div>

        {/* Section 4 — Sign-Off */}
        <div className="max-w-4xl mx-auto bg-white shadow-sm mt-0">
          <div className="px-6 py-3 font-bold text-sm tracking-widest uppercase text-white" style={{ backgroundColor: NAVY }}>
            Section 4 — Sign-Off
          </div>
          <div className="px-6 py-4">
            <p className="text-xs italic mb-4" style={{ color: "#6b7a8d" }}>
              We believe that the controls listed will manage the hazards identified above.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#f4f6f9" }}>
                    {["Role", "Name", "Date"].map(h => (
                      <th key={h} className="border px-3 py-2 text-left font-bold" style={{ borderColor: "#dde3ec", color: NAVY }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { role: "Completed By", nameField: "completedByName" as const, dateField: "completedByDate" as const },
                    { role: "Reviewed By", nameField: "reviewedByName" as const, dateField: "reviewedByDate" as const },
                    { role: "Site Manager", nameField: "siteManagerName" as const, dateField: "siteManagerDate" as const },
                  ].map(({ role, nameField, dateField }) => (
                    <tr key={role} style={{ borderBottom: "1px solid #edf0f5" }}>
                      <td className="border px-3 py-2 font-bold" style={{ borderColor: "#dde3ec", color: NAVY, width: "160px" }}>{role}</td>
                      <td className="border px-2 py-1" style={{ borderColor: "#dde3ec" }}>
                        <input
                          {...register(nameField)}
                          placeholder="Full Name"
                          className="w-full px-2 py-1 text-xs border rounded focus:outline-none"
                          style={{ borderColor: "#dde3ec", color: NAVY }}
                        />
                      </td>
                      <td className="border px-2 py-1" style={{ borderColor: "#dde3ec", width: "160px" }}>
                        <input
                          type="date"
                          {...register(dateField)}
                          className="w-full px-2 py-1 text-xs border rounded focus:outline-none"
                          style={{ borderColor: "#dde3ec", color: NAVY }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-b mt-0 px-6 py-5" style={{ borderTop: `1px solid #dde3ec` }}>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="text-xs" style={{ color: "#8a9ab0", maxWidth: "480px" }}>
              <span className="font-bold" style={{ color: NAVY }}>Document Control Notice:</span> This form is a controlled document under TE-IMS-FRM-HSE-001 Rev01. Submission is time-stamped and logged in the IMS register.
            </p>
            <button
              type="submit"
              disabled={submitMutation.isPending}
              className="px-6 py-2.5 rounded font-bold text-sm text-white flex items-center gap-2 transition-opacity"
              style={{ backgroundColor: NAVY, opacity: submitMutation.isPending ? 0.7 : 1 }}
            >
              {submitMutation.isPending ? (
                <>
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Submitting...
                </>
              ) : "Submit JHA"}
            </button>
          </div>
        </div>

        {/* Document Footer */}
        <div className="max-w-4xl mx-auto mt-0 px-6 py-3 text-xs text-center" style={{ backgroundColor: NAVY, color: "rgba(255,255,255,0.5)", borderRadius: "0 0 6px 6px" }}>
          True East Mining Company · Integrated Management System · Confidential · TE-IMS-FRM-HSE-001
        </div>
      </form>
    </div>
  );
}
