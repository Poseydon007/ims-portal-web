// Near Miss Report Form — TE-IMS-FRM-HSE-003 Rev01
// Digital version of the Word template, faithful to all 6 sections

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { trpc } from "@/lib/trpc";
import { Link } from "wouter";
import { toast } from "sonner";

const NAVY = "#081C2E";
const GOLD = "#C49A28";

const CLASSIFICATIONS = [
  "Unsafe Act",
  "Unsafe Condition",
  "Equipment Failure",
  "Environmental",
  "Procedural",
  "Other",
];

const CONTRIBUTING_FACTORS = [
  "Inadequate Training",
  "Lack of Procedure",
  "Poor Communication",
  "Fatigue / Stress",
  "Environmental Conditions",
  "Equipment Deficiency",
  "Inadequate Supervision",
  "Time Pressure",
  "Complacency",
  "Other",
];

type CorrectiveAction = {
  action: string;
  responsible: string;
  dueDate: string;
  status: string;
};

type FormData = {
  dateOfOccurrence: string;
  timeOfOccurrence: string;
  location: string;
  departmentSite: string;
  reportedBy: string;
  employeeId: string;
  classification: string[];
  classificationOther: string;
  description: string;
  contributingFactors: string[];
  contributingFactorsOther: string;
  potentialSeverity: string;
  potentialLikelihood: string;
  correctiveActions: CorrectiveAction[];
  supervisorName: string;
  supervisorDate: string;
  hseOfficerName: string;
  hseOfficerDate: string;
};

export default function NearMissForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState("");

  const { register, handleSubmit, control, watch, formState: { errors, isSubmitting } } = useForm<FormData>({
    defaultValues: {
      classification: [],
      contributingFactors: [],
      correctiveActions: [
        { action: "", responsible: "", dueDate: "", status: "Open" },
        { action: "", responsible: "", dueDate: "", status: "Open" },
        { action: "", responsible: "", dueDate: "", status: "Open" },
      ],
    },
  });

  const { fields } = useFieldArray({ control, name: "correctiveActions" });

  const submitMutation = trpc.nearMiss.submit.useMutation({
    onSuccess: (data) => {
      setSubmissionId(data.submissionId);
      setSubmitted(true);
    },
    onError: (err) => {
      toast.error(`Submission failed: ${err.message}`);
    },
  });

  const onSubmit = (data: FormData) => {
    submitMutation.mutate({
      dateOfOccurrence: data.dateOfOccurrence,
      timeOfOccurrence: data.timeOfOccurrence,
      location: data.location,
      departmentSite: data.departmentSite,
      reportedBy: data.reportedBy,
      employeeId: data.employeeId,
      classification: data.classification.join(", "),
      classificationOther: data.classificationOther,
      description: data.description,
      contributingFactors: data.contributingFactors.join(", "),
      contributingFactorsOther: data.contributingFactorsOther,
      potentialSeverity: data.potentialSeverity,
      potentialLikelihood: data.potentialLikelihood,
      correctiveActions: data.correctiveActions.filter(a => a.action.trim()),
      supervisorName: data.supervisorName,
      supervisorDate: data.supervisorDate,
      hseOfficerName: data.hseOfficerName,
      hseOfficerDate: data.hseOfficerDate,
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#f4f6f9" }}>
        <div className="bg-white rounded-lg shadow-lg p-10 max-w-md w-full text-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#e8f5e9" }}>
            <svg className="w-8 h-8" fill="none" stroke="#2e7d32" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-2" style={{ color: NAVY }}>Report Submitted</h2>
          <p className="text-sm mb-1" style={{ color: "#6b7a8d" }}>Your Near Miss Report has been recorded.</p>
          <div className="my-4 py-3 px-4 rounded" style={{ backgroundColor: "#f4f6f9" }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#8a9ab0" }}>Submission ID</p>
            <p className="text-lg font-bold" style={{ color: GOLD }}>{submissionId}</p>
          </div>
          <p className="text-xs mb-6" style={{ color: "#6b7a8d" }}>
            Please keep this reference number. Your HSE team has been notified and will follow up within 24 hours.
          </p>
          <Link href="/docs/frm" className="inline-block text-sm font-semibold px-5 py-2 rounded" style={{ backgroundColor: NAVY, color: "white" }}>
            Back to Forms
          </Link>
        </div>
      </div>
    );
  }

  const labelStyle = { color: NAVY, fontWeight: 600, fontSize: "0.78rem", textTransform: "uppercase" as const, letterSpacing: "0.05em" };
  const inputStyle = { borderColor: "#dde3ec", color: NAVY, fontSize: "0.875rem" };
  const sectionHeaderStyle = { backgroundColor: NAVY, color: "white", padding: "8px 16px", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase" as const };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f4f6f9" }}>
      {/* Top Nav */}
      <div style={{ backgroundColor: NAVY, borderBottom: `2px solid ${GOLD}` }} className="px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663473952399/3YVZojsY2rei5QwThHiV6E/trueeastlogoWHITE_79ded02e.png"
            alt="True East Mining"
            className="h-8"
          />
          <div>
            <p className="text-white font-bold text-sm leading-none">IMS Document Portal</p>
            <p className="text-white/50 text-xs">Internal Use Only</p>
          </div>
        </div>
        <Link href="/docs/frm" className="text-xs font-semibold" style={{ color: GOLD }}>
          ← Back to Forms
        </Link>
      </div>

      {/* Document Header */}
      <div className="max-w-4xl mx-auto mt-6 bg-white rounded-t shadow-sm">
        <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: `1px solid #dde3ec` }}>
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663473952399/3YVZojsY2rei5QwThHiV6E/trueeastlogovectorgray_20d7a465.png"
            alt="True East Mining"
            style={{ width: "90px", height: "90px", objectFit: "contain" }}
          />
          <div className="text-right">
            <p className="text-xs font-mono" style={{ color: "#8a9ab0" }}>TE-IMS-FRM-HSE-003</p>
            <p className="text-xs" style={{ color: "#8a9ab0" }}>Rev01 | Apr 2026</p>
          </div>
        </div>
        <div className="px-6 py-3" style={{ borderBottom: `1px solid #dde3ec`, backgroundColor: "#f9fafb" }}>
          <h1 className="text-lg font-bold text-center" style={{ color: NAVY }}>Near Miss Report Form</h1>
          <p className="text-xs text-center mt-0.5" style={{ color: "#8a9ab0" }}>True East Mining Company — Integrated Management System</p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto bg-white shadow-sm rounded-b mb-10">

        {/* Section 1: Report Details */}
        <div style={sectionHeaderStyle}>Section 1 — Report Details</div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label style={labelStyle} className="block mb-1">Date of Occurrence *</label>
            <input type="date" {...register("dateOfOccurrence", { required: true })}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2"
              style={inputStyle} />
            {errors.dateOfOccurrence && <p className="text-red-500 text-xs mt-1">Required</p>}
          </div>
          <div>
            <label style={labelStyle} className="block mb-1">Time of Occurrence</label>
            <input type="time" {...register("timeOfOccurrence")}
              className="w-full border rounded px-3 py-2 focus:outline-none"
              style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle} className="block mb-1">Location / Area</label>
            <input type="text" {...register("location")} placeholder="e.g. Drill Site 3 — Block A"
              className="w-full border rounded px-3 py-2 focus:outline-none"
              style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle} className="block mb-1">Department / Site</label>
            <input type="text" {...register("departmentSite")} placeholder="e.g. Drilling Operations"
              className="w-full border rounded px-3 py-2 focus:outline-none"
              style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle} className="block mb-1">Reported By *</label>
            <input type="text" {...register("reportedBy", { required: true })} placeholder="Full Name"
              className="w-full border rounded px-3 py-2 focus:outline-none"
              style={inputStyle} />
            {errors.reportedBy && <p className="text-red-500 text-xs mt-1">Required</p>}
          </div>
          <div>
            <label style={labelStyle} className="block mb-1">Employee ID</label>
            <input type="text" {...register("employeeId")} placeholder="e.g. TE-0042"
              className="w-full border rounded px-3 py-2 focus:outline-none"
              style={inputStyle} />
          </div>
        </div>

        {/* Section 2: Classification */}
        <div style={sectionHeaderStyle}>Section 2 — Classification of Near Miss</div>
        <div className="p-6">
          <p className="text-xs mb-3" style={{ color: "#6b7a8d" }}>Select all that apply:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {CLASSIFICATIONS.map((c) => (
              <label key={c} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" value={c} {...register("classification")}
                  className="rounded" style={{ accentColor: NAVY }} />
                <span className="text-sm" style={{ color: NAVY }}>{c}</span>
              </label>
            ))}
          </div>
          {(watch("classification") ?? []).includes("Other") && (
            <div className="mt-3">
              <label style={labelStyle} className="block mb-1">Specify Other</label>
              <input type="text" {...register("classificationOther")}
                className="w-full border rounded px-3 py-2 focus:outline-none"
                style={inputStyle} />
            </div>
          )}
        </div>

        {/* Section 3: Description */}
        <div style={sectionHeaderStyle}>Section 3 — Description of Near Miss</div>
        <div className="p-6">
          <label style={labelStyle} className="block mb-1">Describe what happened, what could have happened, and the sequence of events *</label>
          <textarea {...register("description", { required: true })} rows={5}
            placeholder="Provide a clear, factual account of the near miss event..."
            className="w-full border rounded px-3 py-2 focus:outline-none resize-none"
            style={inputStyle} />
          {errors.description && <p className="text-red-500 text-xs mt-1">Required</p>}
        </div>

        {/* Section 4: Contributing Factors */}
        <div style={sectionHeaderStyle}>Section 4 — Contributing Factors</div>
        <div className="p-6">
          <p className="text-xs mb-3" style={{ color: "#6b7a8d" }}>Select all that apply:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {CONTRIBUTING_FACTORS.map((f) => (
              <label key={f} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" value={f} {...register("contributingFactors")}
                  className="rounded" style={{ accentColor: NAVY }} />
                <span className="text-sm" style={{ color: NAVY }}>{f}</span>
              </label>
            ))}
          </div>
          {(watch("contributingFactors") ?? []).includes("Other") && (
            <div className="mt-3">
              <label style={labelStyle} className="block mb-1">Specify Other</label>
              <input type="text" {...register("contributingFactorsOther")}
                className="w-full border rounded px-3 py-2 focus:outline-none"
                style={inputStyle} />
            </div>
          )}
        </div>

        {/* Section 5: Risk Assessment */}
        <div style={sectionHeaderStyle}>Section 5 — Risk Assessment</div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label style={labelStyle} className="block mb-2">Potential Severity</label>
            <div className="space-y-2">
              {["Low — Minor injury / no lost time", "Medium — Moderate injury / medical treatment", "High — Serious injury / hospitalization", "Critical — Fatality / permanent disability"].map((s) => (
                <label key={s} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" value={s.split(" — ")[0]} {...register("potentialSeverity")}
                    style={{ accentColor: NAVY }} />
                  <span className="text-sm" style={{ color: NAVY }}>{s}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label style={labelStyle} className="block mb-2">Potential Likelihood</label>
            <div className="space-y-2">
              {["Rare — Unlikely to occur", "Unlikely — Could occur but infrequent", "Possible — May occur occasionally", "Likely — Will probably occur", "Almost Certain — Expected to occur"].map((l) => (
                <label key={l} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" value={l.split(" — ")[0]} {...register("potentialLikelihood")}
                    style={{ accentColor: NAVY }} />
                  <span className="text-sm" style={{ color: NAVY }}>{l}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Section 6: Corrective Actions */}
        <div style={sectionHeaderStyle}>Section 6 — Corrective Actions</div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#f4f6f9" }}>
                  <th className="text-left px-3 py-2 border" style={{ color: NAVY, borderColor: "#dde3ec", width: "40%" }}>Corrective Action</th>
                  <th className="text-left px-3 py-2 border" style={{ color: NAVY, borderColor: "#dde3ec", width: "25%" }}>Responsible Person</th>
                  <th className="text-left px-3 py-2 border" style={{ color: NAVY, borderColor: "#dde3ec", width: "20%" }}>Due Date</th>
                  <th className="text-left px-3 py-2 border" style={{ color: NAVY, borderColor: "#dde3ec", width: "15%" }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {fields.map((field, idx) => (
                  <tr key={field.id}>
                    <td className="border px-2 py-1" style={{ borderColor: "#dde3ec" }}>
                      <input {...register(`correctiveActions.${idx}.action`)}
                        className="w-full focus:outline-none text-sm" style={{ color: NAVY }} />
                    </td>
                    <td className="border px-2 py-1" style={{ borderColor: "#dde3ec" }}>
                      <input {...register(`correctiveActions.${idx}.responsible`)}
                        className="w-full focus:outline-none text-sm" style={{ color: NAVY }} />
                    </td>
                    <td className="border px-2 py-1" style={{ borderColor: "#dde3ec" }}>
                      <input type="date" {...register(`correctiveActions.${idx}.dueDate`)}
                        className="w-full focus:outline-none text-sm" style={{ color: NAVY }} />
                    </td>
                    <td className="border px-2 py-1" style={{ borderColor: "#dde3ec" }}>
                      <select {...register(`correctiveActions.${idx}.status`)}
                        className="w-full focus:outline-none text-sm bg-transparent" style={{ color: NAVY }}>
                        <option>Open</option>
                        <option>In Progress</option>
                        <option>Closed</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sign-off */}
        <div style={sectionHeaderStyle}>Sign-Off</div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label style={labelStyle} className="block mb-1">Reported By (Signature / Name)</label>
            <input type="text" {...register("reportedBy")} readOnly
              className="w-full border rounded px-3 py-2 bg-gray-50"
              style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle} className="block mb-1">Date Submitted</label>
            <input type="text" value={new Date().toLocaleDateString("en-GB")} readOnly
              className="w-full border rounded px-3 py-2 bg-gray-50"
              style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle} className="block mb-1">Supervisor Name</label>
            <input type="text" {...register("supervisorName")}
              className="w-full border rounded px-3 py-2 focus:outline-none"
              style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle} className="block mb-1">Supervisor Date</label>
            <input type="date" {...register("supervisorDate")}
              className="w-full border rounded px-3 py-2 focus:outline-none"
              style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle} className="block mb-1">HSE Officer Name</label>
            <input type="text" {...register("hseOfficerName")}
              className="w-full border rounded px-3 py-2 focus:outline-none"
              style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle} className="block mb-1">HSE Officer Date</label>
            <input type="date" {...register("hseOfficerDate")}
              className="w-full border rounded px-3 py-2 focus:outline-none"
              style={inputStyle} />
          </div>
        </div>

        {/* Footer notice + submit */}
        <div className="px-6 pb-6">
          <div className="rounded border p-3 text-xs mb-5" style={{ backgroundColor: "#fffbf0", borderColor: "#f0d98a", color: "#5a4a1a" }}>
            <strong>Document Control Notice:</strong> This form is a controlled document under TE-IMS-FRM-HSE-003 Rev01.
            Submission is time-stamped and logged in the IMS register. Contact the HSE Officer for corrections after submission.
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded font-bold text-sm tracking-wide transition-opacity disabled:opacity-60"
            style={{ backgroundColor: NAVY, color: "white" }}
          >
            {isSubmitting ? "Submitting..." : "Submit Near Miss Report"}
          </button>
        </div>

        {/* Document Footer */}
        <div className="px-6 py-3 text-center text-xs border-t" style={{ borderColor: "#dde3ec", color: "#8a9ab0" }}>
          True East Mining Company · Integrated Management System · Confidential · TE-IMS-FRM-HSE-003
        </div>
      </form>
    </div>
  );
}
