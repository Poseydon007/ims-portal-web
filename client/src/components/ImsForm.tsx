/**
 * ImsForm — Shared SurveyJS wrapper for all IMS forms.
 *
 * Features:
 * - Auto-fills identity fields (Full Name, Employee ID, Department, Position)
 *   from the logged-in IMS user session.
 * - Enforces read-only mode when the user's role is below the form's minimum
 *   required role (field_worker < supervisor < admin).
 * - Applies True East IMS branding (navy #081C2E, gold #C49A28).
 * - Handles form submission via the existing tRPC formSubmissions.submit endpoint.
 */

import { useEffect, useRef } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/survey-core.min.css";
import { useImsAuth } from "@/hooks/useImsAuth";
import { trpc } from "@/lib/trpc";
import { Link } from "wouter";
import { useState } from "react";

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
   * Defaults: ["reportedBy", "employeeId", "department", "position"]
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
  // Override SurveyJS CSS variables via the theme
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

  const [submitError, setSubmitError] = useState<string | null>(null);
  const surveyRef = useRef<Model | null>(null);

  const readOnly = !canSubmit(user?.role, minRole);

  const mutation = trpc.formSubmissions.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
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

  // Auto-fill identity fields from logged-in user
  useEffect(() => {
    if (!user) return;
    const fieldMap: Record<string, string> = {
      [identityFields.fullName ?? "reportedBy"]: user.fullName ?? "",
      [identityFields.employeeId ?? "employeeId"]: user.employeeId ?? "",
      [identityFields.department ?? "department"]: user.department ?? "",
      [identityFields.position ?? "position"]: user.position ?? "",
      // Also fill sign-off reported-by name if it exists in the form
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
        <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-2">Form Submitted Successfully</h2>
          <p className="mb-4 text-sm">
            The {title} has been recorded and the register updated.
          </p>

          <Link href="/" className="text-sm text-[#081C2E] hover:underline">
            ← Back to Portal Home
          </Link>
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
