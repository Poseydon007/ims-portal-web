/**
 * Approval Queue — shows pending form submissions for the logged-in user's role.
 *
 * - Supervisors see: pending_supervisor_review items
 * - Admins see: pending_supervisor_review + pending_hse_approval + returned items
 * - Each item can be approved (with optional comment) or returned (with required comment)
 * - Admins can also edit the report number or delete a submission
 */

import React, { useState } from "react";
import Layout from "@/components/Layout";
import { useImsAuth } from "@/hooks/useImsAuth";
import { trpc } from "@/lib/trpc";
import { Link } from "wouter";

// ── Smart field value renderer + Status badge ───────────────────────────────
function formatKey(key: string): string {
  return key.replace(/_/g, " ").replace(/([A-Z])/g, " $1").replace(/\b\w/g, c => c.toUpperCase()).trim();
}

function renderFieldValue(val: unknown): React.ReactNode {
  if (val === null || val === undefined || val === "") return <span className="text-gray-400">—</span>;
  if (typeof val === "boolean") return val ? "Yes" : "No";

  let parsed: unknown = val;
  if (typeof val === "string") {
    const trimmed = val.trim();
    if (trimmed.startsWith("[") || trimmed.startsWith("{")) {
      try { parsed = JSON.parse(trimmed); } catch { /* leave as string */ }
    }
  }

  if (Array.isArray(parsed)) {
    if (parsed.length === 0) return <span className="text-gray-400">—</span>;
    if (typeof parsed[0] === "object" && parsed[0] !== null) {
      const keys = Object.keys(parsed[0] as Record<string, unknown>);
      return (
        <table className="w-full border-collapse text-xs mt-0.5" style={{ borderRadius: 4 }}>
          <thead>
            <tr style={{ backgroundColor: "#081C2E" }}>
              {keys.map(k => <th key={k} className="text-left py-1 px-2 text-white font-semibold" style={{ fontSize: 10 }}>{formatKey(k)}</th>)}
            </tr>
          </thead>
          <tbody>
            {(parsed as Record<string, unknown>[]).map((row, i) => (
              <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#f8fafc" : "#fff", borderBottom: "1px solid #edf0f5" }}>
                {keys.map(k => <td key={k} className="py-1 px-2" style={{ fontSize: 11 }}>{row[k] == null || row[k] === "" ? "—" : String(row[k])}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
    return (
      <ul className="list-none pl-0 m-0 space-y-0.5">
        {(parsed as unknown[]).map((item, i) => <li key={i}>{String(item)}</li>)}
      </ul>
    );
  }

  if (typeof parsed === "object" && parsed !== null) {
    return (
      <div className="space-y-0.5">
        {Object.entries(parsed as Record<string, unknown>).map(([k, v]) => (
          <div key={k}><span className="font-semibold text-gray-500">{formatKey(k)}:</span> {v == null ? "—" : String(v)}</div>
        ))}
      </div>
    );
  }

  return <span>{String(parsed)}</span>;
}

function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { label: string; bg: string; text: string }> = {
    pending_supervisor_review:    { label: "Pending Supervisor",    bg: "#fff3cd", text: "#856404" },
    pending_hse_manager_review:   { label: "Pending HSE Manager",   bg: "#ffe0b2", text: "#e65100" },
    pending_hse_approval:         { label: "Pending Final Approval", bg: "#cce5ff", text: "#004085" },
    returned:                     { label: "Returned",              bg: "#f8d7da", text: "#721c24" },
    closed:                       { label: "Closed",                bg: "#d4edda", text: "#155724" },
  };
  const c = config[status] ?? { label: status, bg: "#e9ecef", text: "#495057" };
  return (
    <span
      className="px-2 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap"
      style={{ backgroundColor: c.bg, color: c.text }}
    >
      {c.label}
    </span>
  );
}

// ── Action modal (approve / return) ──────────────────────────────────────────
interface ActionModalProps {
  submissionId: string;
  formTitle: string | null;
  action: "approve" | "return";
  onClose: () => void;
  onDone: () => void;
}

function ActionModal({ submissionId, formTitle, action, onClose, onDone }: ActionModalProps) {
  const [comment, setComment] = useState("");
  const [error, setError] = useState<string | null>(null);
  const utils = trpc.useUtils();

  const approveMutation = trpc.formSubmissions.approve.useMutation({
    onSuccess: () => {
      utils.formSubmissions.listPendingApprovals.invalidate();
      onDone();
    },
    onError: (err) => setError(err.message),
  });

  const returnMutation = trpc.formSubmissions.returnForCorrection.useMutation({
    onSuccess: () => {
      utils.formSubmissions.listPendingApprovals.invalidate();
      onDone();
    },
    onError: (err) => setError(err.message),
  });

  const isPending = approveMutation.isPending || returnMutation.isPending;

  const handleSubmit = () => {
    setError(null);
    if (action === "approve") {
      approveMutation.mutate({ submissionId, comment: comment || undefined });
    } else {
      if (!comment.trim()) {
        setError("A comment is required when returning a form.");
        return;
      }
      returnMutation.mutate({ submissionId, comment });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 overflow-hidden">
        <div className="bg-[#081C2E] px-5 py-4">
          <h3 className="text-white font-bold text-sm">
            {action === "approve" ? "Approve Submission" : "Return for Correction"}
          </h3>
          <p className="text-white/60 text-xs mt-0.5">{formTitle}</p>
        </div>
        <div className="p-5">
          {action === "approve" ? (
            <p className="text-sm text-gray-600 mb-4">
              You are about to <strong>approve</strong> this submission and advance it to the next step.
              An optional comment can be added.
            </p>
          ) : (
            <p className="text-sm text-gray-600 mb-4">
              You are returning this submission to the submitter for correction.
              A comment explaining the reason is <strong>required</strong>.
            </p>
          )}
          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
              {action === "approve" ? "Comment (optional)" : "Reason for Return *"}
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={3}
              placeholder={
                action === "approve"
                  ? "Add any notes for the next reviewer..."
                  : "Explain what needs to be corrected..."
              }
              className="w-full border border-[#dde3ec] rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C49A28] resize-none"
            />
          </div>
          {error && (
            <div className="mb-4 px-3 py-2 bg-red-50 border border-red-200 rounded text-xs text-red-700">{error}</div>
          )}
          <div className="flex gap-3 justify-end">
            <button onClick={onClose} disabled={isPending} className="px-4 py-2 text-sm border border-[#dde3ec] rounded text-gray-600 hover:bg-gray-50 transition-colors">
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={isPending}
              className={`px-5 py-2 text-sm font-bold rounded text-white transition-opacity hover:opacity-90 disabled:opacity-60 ${action === "approve" ? "bg-[#C49A28]" : "bg-red-600"}`}
            >
              {isPending ? "Processing..." : action === "approve" ? "Confirm Approval" : "Return Form"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Admin: Edit Report Number Modal ──────────────────────────────────────────
function EditReportNumberModal({
  submissionId,
  currentReportNumber,
  onClose,
  onDone,
}: {
  submissionId: string;
  currentReportNumber: string | null;
  onClose: () => void;
  onDone: () => void;
}) {
  const [value, setValue] = useState(currentReportNumber ?? "");
  const [error, setError] = useState<string | null>(null);
  const utils = trpc.useUtils();

  const mutation = trpc.formSubmissions.updateReportNumber.useMutation({
    onSuccess: () => {
      utils.formSubmissions.listPendingApprovals.invalidate();
      onDone();
    },
    onError: (err) => setError(err.message),
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-sm mx-4 overflow-hidden">
        <div className="bg-[#081C2E] px-5 py-4">
          <h3 className="text-white font-bold text-sm">Edit Report Number</h3>
          <p className="text-white/60 text-xs mt-0.5 font-mono">{submissionId}</p>
        </div>
        <div className="p-5">
          <p className="text-xs text-gray-600 mb-4">
            Modify the auto-generated report number. This action is logged and only available to admins.
          </p>
          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
              Report Number *
            </label>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="e.g. NM-2026-001"
              className="w-full border border-[#dde3ec] rounded px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#C49A28]"
            />
          </div>
          {error && (
            <div className="mb-4 px-3 py-2 bg-red-50 border border-red-200 rounded text-xs text-red-700">{error}</div>
          )}
          <div className="flex gap-3 justify-end">
            <button onClick={onClose} className="px-4 py-2 text-sm border border-[#dde3ec] rounded text-gray-600 hover:bg-gray-50">
              Cancel
            </button>
            <button
              onClick={() => {
                setError(null);
                if (!value.trim()) { setError("Report number cannot be empty."); return; }
                mutation.mutate({ submissionId, reportNumber: value.trim() });
              }}
              disabled={mutation.isPending}
              className="px-5 py-2 text-sm font-bold rounded text-white disabled:opacity-60 hover:opacity-90"
              style={{ backgroundColor: "#C49A28" }}
            >
              {mutation.isPending ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Admin: Delete Confirmation Modal ─────────────────────────────────────────
function DeleteModal({
  submissionId,
  reportNumber,
  formTitle,
  onClose,
  onDone,
}: {
  submissionId: string;
  reportNumber: string | null;
  formTitle: string | null;
  onClose: () => void;
  onDone: () => void;
}) {
  const [error, setError] = useState<string | null>(null);
  const utils = trpc.useUtils();

  const mutation = trpc.formSubmissions.deleteSubmission.useMutation({
    onSuccess: () => {
      utils.formSubmissions.listPendingApprovals.invalidate();
      onDone();
    },
    onError: (err) => setError(err.message),
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-sm mx-4 overflow-hidden">
        <div className="bg-red-700 px-5 py-4">
          <h3 className="text-white font-bold text-sm">Delete Submission</h3>
          <p className="text-white/70 text-xs mt-0.5">{formTitle}</p>
        </div>
        <div className="p-5">
          <p className="text-sm text-gray-700 mb-2">
            You are about to <strong>permanently delete</strong> this submission. This action cannot be undone.
          </p>
          <div className="mb-4 p-2.5 bg-red-50 border border-red-200 rounded text-xs font-mono text-red-700">
            {reportNumber ?? submissionId}
          </div>
          {error && (
            <div className="mb-4 px-3 py-2 bg-red-50 border border-red-200 rounded text-xs text-red-700">{error}</div>
          )}
          <div className="flex gap-3 justify-end">
            <button onClick={onClose} className="px-4 py-2 text-sm border border-[#dde3ec] rounded text-gray-600 hover:bg-gray-50">
              Cancel
            </button>
            <button
              onClick={() => { setError(null); mutation.mutate({ submissionId }); }}
              disabled={mutation.isPending}
              className="px-5 py-2 text-sm font-bold rounded text-white bg-red-600 disabled:opacity-60 hover:opacity-90"
            >
              {mutation.isPending ? "Deleting..." : "Delete Permanently"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Detail Panel ─────────────────────────────────────────────────────────────
function SubmissionDetail({ submissionId, onClose }: { submissionId: string; onClose: () => void }) {
  const { data, isLoading, error } = trpc.formSubmissions.getSubmission.useQuery({ submissionId });

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50">
        <div className="bg-white rounded-lg p-8 text-sm text-gray-500">Loading submission...</div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50">
        <div className="bg-white rounded-lg p-8">
          <p className="text-sm text-red-600 mb-4">Failed to load submission.</p>
          <button onClick={onClose} className="text-sm text-[#C49A28] hover:underline">Close</button>
        </div>
      </div>
    );
  }

  const fields = typeof data.responseData === "object" ? data.responseData as Record<string, unknown> : {};

  return (
    <div className="fixed inset-0 z-40 flex items-end sm:items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden">
        <div className="bg-[#081C2E] px-5 py-4 flex items-start justify-between flex-shrink-0">
          <div>
            <h3 className="text-white font-bold text-sm">{data.formTitle}</h3>
            {data.reportNumber && (
              <div className="text-[#C49A28] text-sm font-bold font-mono mt-0.5">{data.reportNumber}</div>
            )}
            <p className="text-white/50 text-xs mt-0.5 font-mono">{data.submissionId}</p>
          </div>
          <button onClick={onClose} className="text-white/60 hover:text-white text-lg leading-none ml-4">×</button>
        </div>

        <div className="overflow-y-auto p-5 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <div className="flex flex-wrap gap-3 items-center">
              <StatusBadge status={data.status} />
              <span className="text-xs text-gray-500">
                Submitted by <strong>{data.submittedByName}</strong>
              </span>
              <span className="text-xs text-gray-500">
                {data.submittedAt ? new Date(data.submittedAt).toLocaleString() : ""}
              </span>
            </div>
            <a
              href={`/submissions/${data.submissionId}/print`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded border border-[#081C2E] text-[#081C2E] hover:bg-[#081C2E] hover:text-white transition-colors flex-shrink-0"
            >
              🖨 Print / PDF
            </a>
          </div>

          <div className="mb-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Form Data</div>
            <div className="border border-[#dde3ec] rounded overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {Object.entries(fields)
                    .filter(([k]) => !k.startsWith("_"))
                    .map(([key, val]) => (
                      <tr key={key} className="border-b border-[#dde3ec] last:border-0">
                        <td className="px-3 py-2 bg-gray-50 text-xs font-medium text-gray-600 w-2/5 align-top">
                          {key.replace(/([A-Z])/g, " $1").replace(/_/g, " ").trim()}
                        </td>
                        <td className="px-3 py-2 text-xs text-gray-800 align-top">
                          {renderFieldValue(val)}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          {data.approvalHistory && data.approvalHistory.length > 0 && (
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Approval History</div>
              <div className="space-y-2">
                {data.approvalHistory.map((step) => (
                  <div
                    key={step.id}
                    className={`p-3 rounded border text-xs ${step.action === "approved" ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold">
                        {step.action === "approved" ? "✓ Approved" : "↩ Returned"} — {step.stepLabel}
                      </span>
                      <span className="text-gray-500">
                        {step.actionAt ? new Date(step.actionAt).toLocaleString() : ""}
                      </span>
                    </div>
                    <div className="text-gray-600">By <strong>{step.actorName}</strong> ({step.actorRole})</div>
                    {step.comment && <div className="mt-1 text-gray-700 italic">"{step.comment}"</div>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Digital Signatures */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Digital Signatures</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Submitted By */}
              <div className="rounded border p-3" style={{ borderColor: "#dde3ec", backgroundColor: "#f9fafb" }}>
                <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#8a9ab0" }}>Submitted By</div>
                <div className="font-semibold text-sm" style={{ color: "#081C2E" }}>{data.submittedByName ?? "—"}</div>
                {data.submittedAt && (
                  <div className="text-xs mt-1" style={{ color: "#6b7a8d" }}>
                    {new Date(data.submittedAt).toLocaleString("en-SA", { timeZone: "Asia/Riyadh", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" })}
                  </div>
                )}
                <div className="mt-2 text-xs px-2 py-0.5 rounded inline-block" style={{ backgroundColor: "#dcfce7", color: "#16a34a" }}>✓ Digitally Signed</div>
              </div>
              {/* Supervisor — step 1 */}
              {(() => {
                const step = data.approvalHistory?.find(h => h.step === 1 && h.action === "approved");
                return (
                  <div className="rounded border p-3" style={{ borderColor: step ? "#dde3ec" : "#e5e7eb", backgroundColor: step ? "#f9fafb" : "#f3f4f6" }}>
                    <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#8a9ab0" }}>Supervisor</div>
                    {step ? (
                      <>
                        <div className="font-semibold text-sm" style={{ color: "#081C2E" }}>{step.actorName}</div>
                        <div className="text-xs mt-1" style={{ color: "#6b7a8d" }}>
                          {new Date(step.actionAt).toLocaleString("en-SA", { timeZone: "Asia/Riyadh", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" })}
                        </div>
                        <div className="mt-2 text-xs px-2 py-0.5 rounded inline-block" style={{ backgroundColor: "#dcfce7", color: "#16a34a" }}>✓ Digitally Signed</div>
                      </>
                    ) : (
                      <div className="text-xs italic" style={{ color: "#9ca3af" }}>Pending approval</div>
                    )}
                  </div>
                );
              })()}
              {/* HSE Manager — step 2 */}
              {(() => {
                const step = data.approvalHistory?.find(h => h.step === 2 && h.action === "approved");
                return (
                  <div className="rounded border p-3" style={{ borderColor: step ? "#dde3ec" : "#e5e7eb", backgroundColor: step ? "#f9fafb" : "#f3f4f6" }}>
                    <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#8a9ab0" }}>HSE Manager</div>
                    {step ? (
                      <>
                        <div className="font-semibold text-sm" style={{ color: "#081C2E" }}>{step.actorName}</div>
                        <div className="text-xs mt-1" style={{ color: "#6b7a8d" }}>
                          {new Date(step.actionAt).toLocaleString("en-SA", { timeZone: "Asia/Riyadh", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" })}
                        </div>
                        <div className="mt-2 text-xs px-2 py-0.5 rounded inline-block" style={{ backgroundColor: "#dcfce7", color: "#16a34a" }}>✓ Digitally Signed</div>
                      </>
                    ) : (
                      <div className="text-xs italic" style={{ color: "#9ca3af" }}>Pending approval</div>
                    )}
                  </div>
                );
              })()}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function ApprovalQueue() {
  const { user, loading: authLoading } = useImsAuth();

  const [actionModal, setActionModal] = useState<{
    submissionId: string;
    formTitle: string | null;
    action: "approve" | "return";
  } | null>(null);

  const [editModal, setEditModal] = useState<{
    submissionId: string;
    reportNumber: string | null;
  } | null>(null);

  const [deleteModal, setDeleteModal] = useState<{
    submissionId: string;
    reportNumber: string | null;
    formTitle: string | null;
  } | null>(null);

  const [detailId, setDetailId] = useState<string | null>(null);
  const [doneMessage, setDoneMessage] = useState<string | null>(null);

  const { data: pending, isLoading, refetch } = trpc.formSubmissions.listPendingApprovals.useQuery(undefined, {
    refetchOnWindowFocus: false,
  });

  const handleDone = (msg?: string) => {
    setActionModal(null);
    setEditModal(null);
    setDeleteModal(null);
    setDoneMessage(msg ?? "Action completed successfully.");
    refetch();
    setTimeout(() => setDoneMessage(null), 4000);
  };

  if (authLoading) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6 text-center text-sm text-gray-500 py-20">Loading...</div>
      </Layout>
    );
  }

  if (!user) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6 text-center py-20">
          <p className="text-sm text-gray-600 mb-4">Please log in to access the Approval Queue.</p>
          <Link href="/login" className="text-sm text-[#C49A28] hover:underline font-semibold">Sign In →</Link>
        </div>
      </Layout>
    );
  }

  if (user.role === "field_worker") {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6 text-center py-20">
          <p className="text-sm text-gray-600">The Approval Queue is only accessible to Supervisors and HSE Officers.</p>
        </div>
      </Layout>
    );
  }

  const isAdmin = user.role === "admin";
  const roleLabel = isAdmin ? "HSE Officer / Admin" : user.role === "hse_manager" ? "HSE Manager" : "Supervisor";

  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-6" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>

        <nav className="mb-6 text-sm">
          <Link href="/" className="text-[#C49A28] hover:underline">← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="font-semibold text-[#081C2E]">Approval Queue</span>
        </nav>

        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#081C2E] uppercase tracking-tight mb-1">Approval Queue</h1>
          <p className="text-xs text-gray-500">
            Logged in as <strong>{user.fullName}</strong> — {roleLabel}. Review and action pending submissions below.
            {isAdmin && <span className="ml-2 text-[#C49A28] font-semibold">Admin controls (edit/delete) are available.</span>}
          </p>
        </div>

        {doneMessage && (
          <div className="mb-4 px-4 py-3 bg-green-50 border border-green-200 rounded text-sm text-green-800 font-medium">
            ✓ {doneMessage}
          </div>
        )}

        {isLoading ? (
          <div className="text-center py-20 text-sm text-gray-500">Loading pending submissions...</div>
        ) : !pending || pending.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-4xl mb-4">✓</div>
            <p className="text-sm font-semibold text-gray-700 mb-1">No pending items</p>
            <p className="text-xs text-gray-500">All submissions in your queue have been actioned. Check back later.</p>
          </div>
        ) : (
          <div className="border border-[#dde3ec] rounded-lg shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#081C2E] text-white">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">Report No.</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">Form</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">Submitted By</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">Status</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pending.map((item, i) => (
                  <tr
                    key={item.submissionId}
                    className={`border-b border-[#dde3ec] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                  >
                    {/* Report Number */}
                    <td className="px-4 py-3">
                      <div className="font-bold font-mono text-xs" style={{ color: "#C49A28" }}>
                        {item.reportNumber ?? "—"}
                      </div>
                    </td>
                    {/* Form info */}
                    <td className="px-4 py-3">
                      <div className="font-semibold text-[#081C2E] text-xs">{item.formTitle}</div>
                      <div className="text-xs text-gray-400 font-mono mt-0.5 truncate max-w-[180px]">{item.submissionId}</div>
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-700">{item.submittedByName}</td>
                    <td className="px-4 py-3 text-xs text-gray-500">
                      {item.submittedAt ? new Date(item.submittedAt).toLocaleDateString() : "—"}
                    </td>
                    <td className="px-4 py-3">
                      <StatusBadge status={item.status} />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5 justify-end flex-wrap">
                        {/* View */}
                        <button
                          onClick={() => setDetailId(item.submissionId)}
                          className="text-xs px-2.5 py-1 border border-[#dde3ec] rounded text-gray-600 hover:bg-gray-100 transition-colors"
                        >
                          View
                        </button>
                        {/* Approve */}
                        <button
                          onClick={() => setActionModal({ submissionId: item.submissionId, formTitle: item.formTitle ?? null, action: "approve" })}
                          className="text-xs px-2.5 py-1 rounded text-white font-semibold transition-opacity hover:opacity-90"
                          style={{ backgroundColor: "#C49A28" }}
                        >
                          Approve
                        </button>
                        {/* Return */}
                        <button
                          onClick={() => setActionModal({ submissionId: item.submissionId, formTitle: item.formTitle ?? null, action: "return" })}
                          className="text-xs px-2.5 py-1 rounded text-white font-semibold bg-red-600 transition-opacity hover:opacity-90"
                        >
                          Return
                        </button>
                        {/* Admin-only: Edit report number */}
                        {isAdmin && (
                          <button
                            onClick={() => setEditModal({ submissionId: item.submissionId, reportNumber: item.reportNumber ?? null })}
                            className="text-xs px-2.5 py-1 border border-[#C49A28] rounded text-[#C49A28] font-semibold hover:bg-amber-50 transition-colors"
                            title="Edit Report Number (Admin only)"
                          >
                            Edit No.
                          </button>
                        )}
                        {/* Admin-only: Delete */}
                        {isAdmin && (
                          <button
                            onClick={() => setDeleteModal({ submissionId: item.submissionId, reportNumber: item.reportNumber ?? null, formTitle: item.formTitle ?? null })}
                            className="text-xs px-2.5 py-1 border border-red-300 rounded text-red-600 font-semibold hover:bg-red-50 transition-colors"
                            title="Delete Submission (Admin only)"
                          >
                            Delete
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modals */}
      {actionModal && (
        <ActionModal
          submissionId={actionModal.submissionId}
          formTitle={actionModal.formTitle}
          action={actionModal.action}
          onClose={() => setActionModal(null)}
          onDone={() => handleDone()}
        />
      )}

      {editModal && (
        <EditReportNumberModal
          submissionId={editModal.submissionId}
          currentReportNumber={editModal.reportNumber}
          onClose={() => setEditModal(null)}
          onDone={() => handleDone("Report number updated.")}
        />
      )}

      {deleteModal && (
        <DeleteModal
          submissionId={deleteModal.submissionId}
          reportNumber={deleteModal.reportNumber}
          formTitle={deleteModal.formTitle}
          onClose={() => setDeleteModal(null)}
          onDone={() => handleDone("Submission deleted.")}
        />
      )}

      {detailId && (
        <SubmissionDetail
          submissionId={detailId}
          onClose={() => setDetailId(null)}
        />
      )}
    </Layout>
  );
}
