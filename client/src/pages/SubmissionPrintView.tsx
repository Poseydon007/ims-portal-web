/**
 * SubmissionPrintView — Clean print/PDF-ready view of a form submission.
 * Accessible from the success screen, Approval Queue, and All Submissions page.
 * Renders all form fields, report number, status, and full approval history.
 * Uses browser print (window.print()) — no external dependency needed.
 */
import { useEffect } from "react";
import { useParams, useLocation } from "wouter";
import { trpc } from "@/lib/trpc";

// ── Status badge ─────────────────────────────────────────────────────────────
const STATUS_LABELS: Record<string, string> = {
  pending_supervisor_review: "Pending Supervisor Review",
  pending_hse_approval:      "Pending HSE Approval",
  closed:                    "Closed — Approved",
  returned:                  "Returned for Correction",
};

const STATUS_COLORS: Record<string, string> = {
  pending_supervisor_review: "#f59e0b",
  pending_hse_approval:      "#3b82f6",
  closed:                    "#16a34a",
  returned:                  "#ef4444",
};

// ── Format a camelCase/snake_case key into a readable label ──────────────────
function formatKey(key: string): string {
  return key
    .replace(/_/g, " ")
    .replace(/([A-Z])/g, " $1")
    .replace(/\b\w/g, c => c.toUpperCase())
    .trim();
}

// ── Render a single field value ───────────────────────────────────────────────
function renderValue(val: unknown): string {
  if (val === null || val === undefined || val === "") return "—";
  if (typeof val === "boolean") return val ? "Yes" : "No";
  if (typeof val === "object") return JSON.stringify(val);
  return String(val);
}

// ── Skip internal fields ──────────────────────────────────────────────────────
const SKIP_KEYS = new Set(["_formCode", "reportNo", "reportNumber"]);

export default function SubmissionPrintView() {
  const { submissionId } = useParams<{ submissionId: string }>();
  const [, navigate] = useLocation();

  const { data, isLoading, error } = trpc.formSubmissions.getSubmission.useQuery(
    { submissionId: submissionId ?? "" },
    { enabled: !!submissionId }
  );

  // Auto-trigger print dialog when data is ready (if ?print=1 in URL)
  useEffect(() => {
    if (!data) return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("print") === "1") {
      setTimeout(() => window.print(), 400);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500 text-sm">Loading submission...</div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-sm">Submission not found or access denied.</div>
      </div>
    );
  }

  const fields = data.responseData as Record<string, unknown>;
  const status = data.status ?? "pending_supervisor_review";
  const statusLabel = STATUS_LABELS[status] ?? status;
  const statusColor = STATUS_COLORS[status] ?? "#6b7280";

  return (
    <>
      {/* ── Print styles ── */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
          .print-page { box-shadow: none !important; border: none !important; margin: 0 !important; padding: 0 !important; }
        }
        @page { margin: 18mm 14mm; }
      `}</style>

      {/* ── Screen toolbar ── */}
      <div className="no-print bg-[#081C2E] text-white px-6 py-3 flex items-center justify-between gap-4 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1 as never)}
            className="text-white/70 hover:text-white text-sm flex items-center gap-1"
          >
            ← Back
          </button>
          <span className="text-white/30">|</span>
          <span className="text-sm font-semibold">{data.formTitle}</span>
          <span
            className="text-xs font-bold px-2 py-0.5 rounded"
            style={{ backgroundColor: "#C49A28", color: "#fff" }}
          >
            {data.reportNumber ?? data.submissionId}
          </span>
        </div>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-[#C49A28] hover:bg-[#a38122] text-white text-sm font-bold px-4 py-2 rounded transition-colors"
        >
          🖨 Print / Save as PDF
        </button>
      </div>

      {/* ── Print document ── */}
      <div className="print-page max-w-3xl mx-auto my-8 bg-white shadow-md rounded-lg overflow-hidden border border-[#dde3ec] px-0 no-print:px-0">

        {/* Document header */}
        <div style={{ backgroundColor: "#081C2E" }} className="px-8 py-5">
          <div className="flex items-start justify-between">
            <div>
              <div style={{ color: "#C49A28" }} className="text-xs font-bold tracking-[0.2em] uppercase mb-1">
                Integrated Management System
              </div>
              <h1 className="text-white text-xl font-extrabold leading-tight">
                {data.formTitle}
              </h1>
              <div className="text-white/50 text-xs mt-1">
                True East Mining Company — Controlled Document
              </div>
            </div>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663473952399/3YVZojsY2rei5QwThHiV6E/logo-trans_6f674faa.png"
              alt="True East"
              className="h-12 opacity-90"
            />
          </div>
        </div>

        {/* Meta bar */}
        <div style={{ backgroundColor: "#f4f6f9", borderBottom: "1px solid #dde3ec" }} className="px-8 py-3">
          <div className="flex flex-wrap gap-x-8 gap-y-1 text-xs">
            <div>
              <span className="font-semibold text-gray-500 uppercase tracking-wider">Report No.</span>
              <span className="ml-2 font-bold text-[#081C2E]">{data.reportNumber ?? "—"}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-500 uppercase tracking-wider">Submission ID</span>
              <span className="ml-2 font-mono text-gray-700">{data.submissionId}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-500 uppercase tracking-wider">Submitted By</span>
              <span className="ml-2 text-gray-700">{data.submittedByName ?? "—"}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-500 uppercase tracking-wider">Date</span>
              <span className="ml-2 text-gray-700">
                {data.submittedAt ? new Date(data.submittedAt).toLocaleDateString("en-SA") : "—"}
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-500 uppercase tracking-wider">Status</span>
              <span
                className="ml-2 font-bold text-xs px-2 py-0.5 rounded"
                style={{ backgroundColor: statusColor + "22", color: statusColor }}
              >
                {statusLabel}
              </span>
            </div>
          </div>
        </div>

        {/* Form fields */}
        <div className="px-8 py-6">
          <h2
            className="text-xs font-bold tracking-[0.15em] uppercase mb-4"
            style={{ color: "#081C2E" }}
          >
            Form Data
          </h2>
          <table className="w-full border-collapse text-sm">
            <tbody>
              {Object.entries(fields)
                .filter(([key]) => !SKIP_KEYS.has(key))
                .map(([key, val]) => (
                  <tr key={key} style={{ borderBottom: "1px solid #edf0f5" }}>
                    <td
                      className="py-2 pr-4 font-semibold align-top w-2/5"
                      style={{ color: "#4a5568", fontSize: "12px" }}
                    >
                      {formatKey(key)}
                    </td>
                    <td className="py-2 align-top" style={{ color: "#1a202c", fontSize: "13px" }}>
                      {renderValue(val)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* Approval history */}
        {data.approvalHistory && data.approvalHistory.length > 0 && (
          <div className="px-8 pb-6">
            <div style={{ borderTop: "2px solid #081C2E" }} className="pt-5">
              <h2
                className="text-xs font-bold tracking-[0.15em] uppercase mb-4"
                style={{ color: "#081C2E" }}
              >
                Approval History
              </h2>
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr style={{ backgroundColor: "#081C2E" }}>
                    <th className="text-left py-2 px-3 text-white text-xs font-bold">Step</th>
                    <th className="text-left py-2 px-3 text-white text-xs font-bold">Action</th>
                    <th className="text-left py-2 px-3 text-white text-xs font-bold">By</th>
                    <th className="text-left py-2 px-3 text-white text-xs font-bold">Role</th>
                    <th className="text-left py-2 px-3 text-white text-xs font-bold">Date</th>
                    <th className="text-left py-2 px-3 text-white text-xs font-bold">Comment</th>
                  </tr>
                </thead>
                <tbody>
                  {data.approvalHistory.map((step, i) => (
                    <tr
                      key={i}
                      style={{ borderBottom: "1px solid #edf0f5", backgroundColor: i % 2 === 0 ? "#fff" : "#f8fafc" }}
                    >
                      <td className="py-2 px-3 text-xs font-semibold" style={{ color: "#081C2E" }}>
                        {step.stepLabel}
                      </td>
                      <td className="py-2 px-3">
                        <span
                          className="text-xs font-bold px-2 py-0.5 rounded"
                          style={{
                            backgroundColor: step.action === "approved" ? "#dcfce7" : "#fee2e2",
                            color: step.action === "approved" ? "#16a34a" : "#dc2626",
                          }}
                        >
                          {step.action === "approved" ? "✓ Approved" : "↩ Returned"}
                        </span>
                      </td>
                      <td className="py-2 px-3 text-xs text-gray-700">{step.actorName}</td>
                      <td className="py-2 px-3 text-xs text-gray-500 capitalize">{step.actorRole}</td>
                      <td className="py-2 px-3 text-xs text-gray-500">
                        {step.actionAt ? new Date(step.actionAt).toLocaleDateString("en-SA") : "—"}
                      </td>
                      <td className="py-2 px-3 text-xs text-gray-600 italic">{step.comment ?? "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Signature block */}
        <div className="px-8 pb-8">
          <div style={{ borderTop: "1px solid #dde3ec" }} className="pt-5">
            <h2
              className="text-xs font-bold tracking-[0.15em] uppercase mb-4"
              style={{ color: "#081C2E" }}
            >
              Signatures
            </h2>
            <div className="grid grid-cols-3 gap-6">
              {["Submitted By", "Supervisor", "HSE Officer"].map((role) => (
                <div key={role} className="text-center">
                  <div style={{ borderBottom: "1px solid #081C2E", height: "40px", marginBottom: "6px" }} />
                  <div className="text-xs font-semibold" style={{ color: "#4a5568" }}>{role}</div>
                  <div className="text-xs text-gray-400 mt-0.5">Name / Date</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{ backgroundColor: "#f4f6f9", borderTop: "1px solid #dde3ec" }}
          className="px-8 py-3 text-xs text-gray-400 flex justify-between"
        >
          <span>True East Mining Company — IMS Document Portal</span>
          <span>Printed: {new Date().toLocaleDateString("en-SA")} — Uncontrolled if printed</span>
        </div>
      </div>
    </>
  );
}
