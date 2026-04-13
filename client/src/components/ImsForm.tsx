/**
 * ImsForm — Shared SurveyJS wrapper for all IMS forms.
 *
 * Features:
 * - Auto-fills identity fields (Full Name, Employee ID, Department, Position)
 *   from the logged-in IMS user session.
 * - Enforces read-only mode when the user's role is below the form's minimum
 *   required role (field_worker < supervisor < admin).
 * - Applies True East IMS branding (navy #081C2E, gold #C49A28).
 * - Handles form submission via the tRPC formSubmissions.submit endpoint.
 * - Shows digital approval workflow status and auto-generated report number after submission.
 */

import { useEffect, useRef, useState } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/survey-core.min.css";
import { useImsAuth } from "@/hooks/useImsAuth";
import { trpc } from "@/lib/trpc";
import { Link } from "wouter";

// ── Role hierarchy ──────────────────────────────────────────────────────────
type ImsRole = "field_worker" | "supervisor" | "admin";
const ROLE_RANK: Record<ImsRole, number> = {
  field_worker: 0,
  supervisor: 1,
  admin: 2,
};

function canSubmit(userRole: string | undefined, minRole: ImsRole): boolean {
  if (!userRole) return false;
  const rank = ROLE_RANK[userRole as ImsRole] ?? -1;
  return rank >= ROLE_RANK[minRole];
}

// ── Props ───────────────────────────────────────────────────────────────────
interface ImsFormProps {
  /** IMS document code, e.g. "TE-IMS-FRM-HSE-003" */
  formCode: string;
  /** Human-readable form title */
  title: string;
  /** Revision string, e.g. "01" */
  revision?: string;
  /** Approval date string */
  approvalDate?: string;
  /** Minimum role required to submit this form */
  minRole?: ImsRole;
  /** SurveyJS JSON schema */
  schema: object;
  /**
   * Names of identity fields in the schema that should be auto-filled
   * and locked from the logged-in user.
   */
  identityFields?: {
    fullName?: string;
    employeeId?: string;
    department?: string;
    position?: string;
  };
}

// ── Apply True East theme to SurveyJS ───────────────────────────────────────
function applyImsTheme(survey: Model, readOnly: boolean) {
  survey.applyTheme({
    cssVariables: {
      "--sjs-primary-backcolor": "#C49A28",
      "--sjs-primary-backcolor-dark": "#a38122",
      "--sjs-primary-forecolor": "#ffffff",
      "--sjs-base-unit": "8px",
      "--sjs-corner-radius": "4px",
      "--sjs-shadow-small": "0 1px 3px rgba(0,0,0,0.08)",
      "--sjs-font-family": "'Nunito Sans', sans-serif",
      "--sjs-general-backcolor": "#ffffff",
      "--sjs-general-backcolor-dim": "#f8fafc",
      "--sjs-border-default": "#dde3ec",
      "--sjs-font-questiontitle-color": "#081C2E",
      "--sjs-font-questiontitle-weight": "600",
      "--sjs-font-questiontitle-size": "14px",
      "--sjs-font-size": "14px",
    },
  });

  // Panel title styling
  survey.onAfterRenderPanel.add((_sender, options) => {
    const header = options.htmlElement.querySelector(".sd-panel__header");
    if (header) {
      (header as HTMLElement).style.cssText =
        "background:#081C2E;color:#fff;padding:8px 16px;font-weight:700;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;border-radius:4px 4px 0 0;";
    }
  });

  if (readOnly) {
    survey.mode = "display";
  }
}

// ── Workflow Step Indicator ──────────────────────────────────────────────────
function WorkflowSteps({ currentStatus }: { currentStatus: string }) {
  const steps = [
    { key: "submitted",                  label: "Submitted" },
    { key: "pending_supervisor_review",  label: "Supervisor Review" },
    { key: "pending_hse_approval",       label: "HSE Approval" },
    { key: "closed",                     label: "Closed" },
  ];

  const statusOrder = [
    "pending_supervisor_review",
    "pending_hse_approval",
    "closed",
  ];
  const currentIndex = statusOrder.indexOf(currentStatus);

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {steps.map((step, i) => {
        const isSubmitted = i === 0;
        const stepStatusIndex = i - 1;
        const isDone = isSubmitted || (currentIndex >= stepStatusIndex && currentIndex >= 0);
        const isActive = !isSubmitted && currentStatus === step.key;

        return (
          <div key={step.key} className="flex items-center gap-2">
            {i > 0 && <div className="h-px w-6 bg-gray-300" />}
            <div className="flex items-center gap-1.5">
              <div
                className={`w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold flex-shrink-0 ${
                  isDone
                    ? "bg-[#C49A28] text-white"
                    : isActive
                    ? "bg-blue-100 border-2 border-blue-400 text-blue-600"
                    : "bg-gray-100 border border-gray-300 text-gray-400"
                }`}
              >
                {isDone ? "✓" : i}
              </div>
              <span
                className={`text-xs ${
                  isDone
                    ? "text-gray-700 font-semibold"
                    : isActive
                    ? "text-blue-700 font-semibold"
                    : "text-gray-400"
                }`}
              >
                {step.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Component ────────────────────────────────────────────────────────────────
export default function ImsForm({
  formCode,
  title,
  revision = "01",
  approvalDate = "01 March 2026",
  minRole = "field_worker",
  schema,
  identityFields = {},
}: ImsFormProps) {
  const { user, loading } = useImsAuth();
  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  const [reportNumber, setReportNumber] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const surveyRef = useRef<Model | null>(null);

  // Pre-generate report number when form opens
  const { data: preGenData } = trpc.formSubmissions.preGenerateReportNumber.useQuery(
    { formCode },
    { enabled: !!user && !submitted }
  );

  const readOnly = !canSubmit(user?.role, minRole);

  const mutation = trpc.formSubmissions.submit.useMutation({
    onSuccess: (data) => {
      setSubmitted(true);
      setSubmissionId(data.submissionId);
      setReportNumber(data.reportNumber ?? null);
    },
    onError: (err) => {
      setSubmitError(err.message || "Submission failed. Please try again.");
    },
  });

  // Build the SurveyJS model once
  if (!surveyRef.current) {
    surveyRef.current = new Model(schema);
    surveyRef.current.showNavigationButtons = false;
    surveyRef.current.showProgressBar = "off";
    surveyRef.current.showQuestionNumbers = "off";
    surveyRef.current.showCompletedPage = false;
    surveyRef.current.questionsOnPageMode = "singlePage";
  }

  const survey = surveyRef.current;

  // Apply theme once
  useEffect(() => {
    applyImsTheme(survey, readOnly);
  }, [readOnly]);

  // Inject pre-generated report number into the reportNo field (read-only)
  useEffect(() => {
    if (!preGenData?.reportNumber) return;
    const q = survey.getQuestionByName("reportNo");
    if (q) {
      survey.setValue("reportNo", preGenData.reportNumber);
      q.readOnly = true;
    }
  }, [preGenData]);

  // Auto-fill identity fields from logged-in user
  useEffect(() => {
    if (!user) return;
    const fieldMap: Record<string, string> = {
      [identityFields.fullName ?? "reportedBy"]: user.fullName ?? "",
      [identityFields.employeeId ?? "employeeId"]: user.employeeId ?? "",
      [identityFields.department ?? "department"]: user.department ?? "",
      [identityFields.position ?? "position"]: user.position ?? "",
      signoffReportedByName: user.fullName ?? "",
    };
    Object.entries(fieldMap).forEach(([name, value]) => {
      if (survey.getQuestionByName(name)) {
        survey.setValue(name, value);
        const q = survey.getQuestionByName(name);
        if (q) q.readOnly = true;
      }
    });
  }, [user]);

  // Handle submission
  useEffect(() => {
    survey.onComplete.add((sender) => {
      const data = sender.data;
      mutation.mutate({
        formCode,
        formTitle: title,
        data: JSON.stringify({ ...data, _formCode: formCode }),
      });
    });
  }, []);

  // ── Success screen ──
  if (submitted) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="border border-[#dde3ec] rounded-lg shadow-sm overflow-hidden">
          {/* Header */}
          <div className="bg-[#081C2E] px-6 py-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#C49A28] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">✓</div>
            <h2 className="text-white text-lg font-bold">Form Submitted Successfully</h2>
          </div>

          <div className="bg-white p-6">
            <p className="text-sm text-gray-700 mb-5">
              Your <strong>{title}</strong> has been submitted and is now awaiting Supervisor Review.
            </p>

            {/* Report Number — primary reference */}
            {reportNumber && (
              <div
                className="mb-5 p-4 rounded-lg border-2 flex flex-col gap-1"
                style={{ borderColor: "#C49A28", backgroundColor: "#fffbf0" }}
              >
                <div className="text-xs font-bold uppercase tracking-widest" style={{ color: "#C49A28" }}>
                  Report Number
                </div>
                <div className="text-2xl font-extrabold font-mono" style={{ color: "#081C2E" }}>
                  {reportNumber}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">
                  Quote this number in all follow-up communications, emails, and investigations related to this report.
                </div>
              </div>
            )}

            {/* System ID — secondary, smaller */}
            {submissionId && (
              <div className="mb-5 p-2.5 bg-gray-50 border border-[#dde3ec] rounded text-xs font-mono text-gray-500">
                System ID: {submissionId}
              </div>
            )}

            {/* Workflow status */}
            <div className="mb-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                Approval Workflow Status
              </div>
              <WorkflowSteps currentStatus="pending_supervisor_review" />
            </div>

            <div className="text-xs text-gray-600 mb-6 p-3 bg-amber-50 border border-amber-200 rounded leading-relaxed">
              <strong>Next step:</strong> A Supervisor will review and approve this submission in the portal.
              The Supervisor and HSE Officer will be notified automatically. You will be notified when the status changes.
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Link href="/" className="text-sm text-[#C49A28] hover:underline font-semibold">
                ← Back to Portal Home
              </Link>
              {submissionId && (
                <a
                  href={`/submissions/${submissionId}/print`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded border border-[#081C2E] text-[#081C2E] hover:bg-[#081C2E] hover:text-white transition-colors"
                >
                  🖨 Print / Save as PDF
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Loading ──
  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center text-sm text-gray-500 py-20">
        Loading form...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6" style={{ fontFamily: "'Nunito Sans', sans-serif", color: "#081C2E" }}>
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm">
        <Link href="/" className="text-[#C49A28] hover:underline">← Portal Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link href="/docs/frm" className="text-gray-600 hover:text-[#C49A28] transition-colors">FRM</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="font-semibold text-[#081C2E]">{title}</span>
      </nav>

      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-[#081C2E] uppercase tracking-tight mb-1">{title}</h1>
        <p className="text-xs text-gray-500">
          Complete this form and submit. All fields marked * are required.
          A unique report number will be auto-generated upon submission.
        </p>
      </header>

      {/* Document control table */}
      <div className="overflow-x-auto mb-6 border border-[#dde3ec] rounded-lg shadow-sm">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-[#081C2E] text-white">
              <th className="p-3 border border-[#081C2E]">Document Code</th>
              <th className="p-3 border border-[#081C2E]">Revision</th>
              <th className="p-3 border border-[#081C2E]">Date</th>
              <th className="p-3 border border-[#081C2E]">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-[#dde3ec] font-mono">{formCode}</td>
              <td className="p-3 border border-[#dde3ec]">{revision}</td>
              <td className="p-3 border border-[#dde3ec]">{approvalDate}</td>
              <td className="p-3 border border-[#dde3ec]">
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                  Approved for Implementation
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Read-only banner */}
      {readOnly && (
        <div
          className="mb-6 px-4 py-3 rounded border text-sm font-medium"
          style={{ backgroundColor: "#fff8e1", borderColor: "#C49A28", color: "#5a4a1a" }}
        >
          <strong>Read-Only Mode:</strong> Your access level does not permit submission of this form.
          You may view all fields but cannot submit. Contact your supervisor if you need to submit.
        </div>
      )}

      {/* Error banner */}
      {submitError && (
        <div className="mb-6 px-4 py-3 rounded border text-sm" style={{ backgroundColor: "#fef2f2", borderColor: "#fca5a5", color: "#991b1b" }}>
          <strong>Submission Error:</strong> {submitError}
        </div>
      )}

      {/* SurveyJS form */}
      <div className="ims-survey-wrapper">
        <Survey model={survey} />
      </div>

      {/* Submit button — only shown when user has permission */}
      {!readOnly && (
        <div className="flex justify-end mt-6">
          <button
            type="button"
            disabled={mutation.isPending}
            onClick={() => {
              setSubmitError(null);
              survey.completeLastPage();
            }}
            className="px-8 py-2.5 text-sm font-bold rounded text-white transition-opacity hover:opacity-90 disabled:opacity-60"
            style={{ backgroundColor: "#C49A28" }}
          >
            {mutation.isPending ? "Submitting..." : "Submit Form"}
          </button>
        </div>
      )}
    </div>
  );
}
