/**
 * All Submissions — Admin view of all form submissions across all forms.
 * Section 1: Submissions table with approve/return/edit/delete/view controls.
 * Section 2: Near Miss Log — horizontal spreadsheet-style register with Excel download.
 */

import { useState } from "react";
import Layout from "@/components/Layout";
import { useImsAuth } from "@/hooks/useImsAuth";
import { trpc } from "@/lib/trpc";
import { Link } from "wouter";
import { can, type Role } from "@shared/permissions";

const NAVY = "#081C2E";
const GOLD = "#C49A28";

function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { label: string; bg: string; text: string }> = {
    pending_supervisor_review:  { label: "Pending Supervisor",       bg: "#fff3cd", text: "#856404" },
    pending_hse_manager_review: { label: "Pending HSE Manager",      bg: "#ffe0b2", text: "#7c4a00" },
    pending_hse_approval:       { label: "Pending Final Approval",   bg: "#cce5ff", text: "#004085" },
    returned:                   { label: "Returned",                 bg: "#f8d7da", text: "#721c24" },
    closed:                     { label: "Closed",                   bg: "#d4edda", text: "#155724" },
  };
  const c = config[status] ?? { label: status, bg: "#e9ecef", text: "#495057" };
  return (
    <span className="px-2 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap" style={{ backgroundColor: c.bg, color: c.text }}>
      {c.label}
    </span>
  );
}

// ── Edit Report Number Modal ──────────────────────────────────────────────────
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
    onSuccess: () => { utils.formSubmissions.listAll.invalidate(); utils.formSubmissions.listAllWithData.invalidate(); onDone(); },
    onError: (err) => setError(err.message),
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-sm mx-4 overflow-hidden">
        <div className="px-5 py-4" style={{ backgroundColor: NAVY }}>
          <h3 className="text-white font-bold text-sm">Edit Report Number</h3>
          <p className="text-white/60 text-xs mt-0.5 font-mono">{submissionId}</p>
        </div>
        <div className="p-5">
          <p className="text-xs text-gray-600 mb-4">Modify the auto-generated report number. This action is admin-only and logged.</p>
          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">Report Number *</label>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="e.g. NM-2026-001"
              className="w-full border border-gray-200 rounded px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2"
            />
          </div>
          {error && <div className="mb-4 px-3 py-2 bg-red-50 border border-red-200 rounded text-xs text-red-700">{error}</div>}
          <div className="flex gap-3 justify-end">
            <button onClick={onClose} className="px-4 py-2 text-sm border border-gray-200 rounded text-gray-600 hover:bg-gray-50">Cancel</button>
            <button
              onClick={() => { setError(null); if (!value.trim()) { setError("Report number cannot be empty."); return; } mutation.mutate({ submissionId, reportNumber: value.trim() }); }}
              disabled={mutation.isPending}
              className="px-5 py-2 text-sm font-bold rounded text-white disabled:opacity-60 hover:opacity-90"
              style={{ backgroundColor: GOLD }}
            >
              {mutation.isPending ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Delete Confirmation Modal ─────────────────────────────────────────────────
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
    onSuccess: () => { utils.formSubmissions.listAll.invalidate(); utils.formSubmissions.listAllWithData.invalidate(); onDone(); },
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
          <p className="text-sm text-gray-700 mb-2">You are about to <strong>permanently delete</strong> this submission and all its approval history. This cannot be undone.</p>
          <div className="mb-4 p-2.5 bg-red-50 border border-red-200 rounded text-xs font-mono text-red-700">{reportNumber ?? submissionId}</div>
          {error && <div className="mb-4 px-3 py-2 bg-red-50 border border-red-200 rounded text-xs text-red-700">{error}</div>}
          <div className="flex gap-3 justify-end">
            <button onClick={onClose} className="px-4 py-2 text-sm border border-gray-200 rounded text-gray-600 hover:bg-gray-50">Cancel</button>
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

// ── Approve Modal ─────────────────────────────────────────────────────────────
function ApproveModal({
  submissionId,
  reportNumber,
  formTitle,
  status,
  onClose,
  onDone,
}: {
  submissionId: string;
  reportNumber: string | null;
  formTitle: string | null;
  status: string;
  onClose: () => void;
  onDone: () => void;
}) {
  const [comment, setComment] = useState("");
  const [error, setError] = useState<string | null>(null);
  const utils = trpc.useUtils();

  const mutation = trpc.formSubmissions.approve.useMutation({
    onSuccess: () => { utils.formSubmissions.listAll.invalidate(); utils.formSubmissions.listAllWithData.invalidate(); onDone(); },
    onError: (err) => setError(err.message),
  });

  const stepLabel = status === "pending_supervisor_review"
    ? "Supervisor Review"
    : status === "pending_hse_manager_review"
    ? "HSE Manager Review"
    : "HSE Approval";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-sm mx-4 overflow-hidden">
        <div className="px-5 py-4" style={{ backgroundColor: NAVY }}>
          <h3 className="text-white font-bold text-sm">Approve — {stepLabel}</h3>
          <p className="text-white/60 text-xs mt-0.5">{formTitle} · {reportNumber ?? submissionId}</p>
        </div>
        <div className="p-5">
          <p className="text-xs text-gray-600 mb-4">
            You are approving this submission as <strong>Admin (override)</strong>. This advances the workflow to the next step.
          </p>
          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">Comment (optional)</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
              rows={3}
              className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 resize-none"
            />
          </div>
          {error && <div className="mb-4 px-3 py-2 bg-red-50 border border-red-200 rounded text-xs text-red-700">{error}</div>}
          <div className="flex gap-3 justify-end">
            <button onClick={onClose} className="px-4 py-2 text-sm border border-gray-200 rounded text-gray-600 hover:bg-gray-50">Cancel</button>
            <button
              onClick={() => { setError(null); mutation.mutate({ submissionId, comment: comment.trim() || undefined }); }}
              disabled={mutation.isPending}
              className="px-5 py-2 text-sm font-bold rounded text-white disabled:opacity-60 hover:opacity-90"
              style={{ backgroundColor: "#16a34a" }}
            >
              {mutation.isPending ? "Approving..." : "Approve"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Return Modal ──────────────────────────────────────────────────────────────
function ReturnModal({
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
  const [comment, setComment] = useState("");
  const [error, setError] = useState<string | null>(null);
  const utils = trpc.useUtils();

  const mutation = trpc.formSubmissions.returnForCorrection.useMutation({
    onSuccess: () => { utils.formSubmissions.listAll.invalidate(); utils.formSubmissions.listAllWithData.invalidate(); onDone(); },
    onError: (err) => setError(err.message),
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-sm mx-4 overflow-hidden">
        <div className="bg-amber-700 px-5 py-4">
          <h3 className="text-white font-bold text-sm">Return for Correction</h3>
          <p className="text-white/70 text-xs mt-0.5">{formTitle} · {reportNumber ?? submissionId}</p>
        </div>
        <div className="p-5">
          <p className="text-xs text-gray-600 mb-4">The submission will be returned to the submitter with your comment. A comment is required.</p>
          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">Reason for Return *</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Explain what needs to be corrected..."
              rows={3}
              className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 resize-none"
            />
          </div>
          {error && <div className="mb-4 px-3 py-2 bg-red-50 border border-red-200 rounded text-xs text-red-700">{error}</div>}
          <div className="flex gap-3 justify-end">
            <button onClick={onClose} className="px-4 py-2 text-sm border border-gray-200 rounded text-gray-600 hover:bg-gray-50">Cancel</button>
            <button
              onClick={() => { setError(null); if (!comment.trim()) { setError("A reason is required."); return; } mutation.mutate({ submissionId, comment: comment.trim() }); }}
              disabled={mutation.isPending}
              className="px-5 py-2 text-sm font-bold rounded text-white bg-amber-600 disabled:opacity-60 hover:opacity-90"
            >
              {mutation.isPending ? "Returning..." : "Return"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function AllSubmissionsAdmin() {
  const { user, loading: authLoading } = useImsAuth();

  const [editModal, setEditModal]       = useState<{ submissionId: string; reportNumber: string | null } | null>(null);
  const [deleteModal, setDeleteModal]   = useState<{ submissionId: string; reportNumber: string | null; formTitle: string | null } | null>(null);
  const [approveModal, setApproveModal] = useState<{ submissionId: string; reportNumber: string | null; formTitle: string | null; status: string } | null>(null);
  const [returnModal, setReturnModal]   = useState<{ submissionId: string; reportNumber: string | null; formTitle: string | null } | null>(null);
  const [toast, setToast]               = useState<string | null>(null);
  const [filter, setFilter]             = useState<string>("all");

  const role = (user?.role ?? "field_worker") as Role;
  // Page is open to: admin (full), hse_manager (full), auditor (read-only),
  // supervisor (department-scoped). Everyone else gets the access-denied screen.
  const hasPageAccess = !!user && (
    can.viewAllSubmissions(role) || can.viewDeptSubmissions(role)
  );
  const isReadOnlyAuditView = role === "auditor";
  const canMutate           = can.exportAll(role); // admin + hse_manager: edit/delete/approve
  const canApproveAnyStep   = can.approveStep1(role) || can.approveStep2(role) || can.approveStep3(role);

  const { data: submissions, isLoading, refetch } = trpc.formSubmissions.listAll.useQuery(undefined, {
    refetchOnWindowFocus: false,
    enabled: hasPageAccess,
  });

  const handleDone = (msg: string) => {
    setEditModal(null);
    setDeleteModal(null);
    setApproveModal(null);
    setReturnModal(null);
    setToast(msg);
    refetch();
    setTimeout(() => setToast(null), 4000);
  };

  if (authLoading) {
    return <Layout><div className="max-w-5xl mx-auto p-6 py-20 text-center text-sm text-gray-500">Loading...</div></Layout>;
  }

  if (!hasPageAccess) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6 text-center py-20">
          <p className="text-sm text-gray-600 mb-4">You do not have access to the submissions table.</p>
          <Link href="/" className="text-sm font-semibold" style={{ color: GOLD }}>← Return to Portal</Link>
        </div>
      </Layout>
    );
  }

  const PENDING_STATUSES = ["pending_supervisor_review", "pending_hse_manager_review", "pending_hse_approval"];

  // Supervisor sees only their own department. Best-effort match against
  // submission.responseData.department (server-side scoping is the proper fix —
  // this is the UI-side filter pending the backend route update).
  const deptFiltered = (() => {
    if (!submissions) return [];
    if (role !== "supervisor") return submissions;
    const myDept = (user?.department ?? "").trim().toLowerCase();
    if (!myDept) return [];
    return submissions.filter((s: any) => {
      const rd = s.responseData;
      const subDept = typeof rd === "object" && rd != null ? String(rd.department ?? "").trim().toLowerCase() : "";
      return subDept === myDept;
    });
  })();

  const filtered = deptFiltered.filter(s => filter === "all" || s.status === filter);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto p-6" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>

        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/" className="hover:underline" style={{ color: GOLD }}>← Portal Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="font-semibold" style={{ color: NAVY }}>All Submissions</span>
        </nav>

        {/* ── SECTION 1: Submissions Table ─────────────────────────────────── */}
        <div className="mb-10">
          <div className="mb-5 flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-2xl font-bold uppercase tracking-tight mb-1" style={{ color: NAVY }}>All Submissions</h1>
              <p className="text-xs text-gray-500">
                Admin view — {filtered.length} submission{filtered.length !== 1 ? "s" : ""} shown.
                Report numbers are auto-generated. Only admins can edit, delete, approve, or return.
              </p>
            </div>
            {/* Status filter buttons */}
            <div className="flex gap-2 flex-wrap">
              {[
              { value: "all",                         label: "All" },
              { value: "pending_supervisor_review",   label: "Pending Supervisor" },
              { value: "pending_hse_manager_review",  label: "Pending HSE Manager" },
              { value: "pending_hse_approval",        label: "Pending Final Approval" },
              { value: "returned",                    label: "Returned" },
              { value: "closed",                      label: "Closed" },
              ].map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setFilter(opt.value)}
                  className="text-xs px-3 py-1.5 rounded border font-semibold transition-colors"
                  style={
                    filter === opt.value
                      ? { backgroundColor: NAVY, color: "white", borderColor: NAVY }
                      : { backgroundColor: "white", color: NAVY, borderColor: "#dde3ec" }
                  }
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Auditor read-only banner */}
          {isReadOnlyAuditView && (
            <div
              className="mb-4 px-4 py-3 rounded text-sm font-medium"
              style={{ backgroundColor: "#f3e8ff", border: "1px solid #c4b5fd", color: "#5b21b6" }}
            >
              <strong>Read-only audit view.</strong> You can view all submissions but cannot edit, delete, approve, or return them.
            </div>
          )}

          {/* Supervisor dept-scope banner */}
          {role === "supervisor" && (
            <div
              className="mb-4 px-4 py-3 rounded text-sm font-medium"
              style={{ backgroundColor: "#e3f2fd", border: "1px solid #90caf9", color: "#0d47a1" }}
            >
              Showing submissions for your department only ({user?.department ?? "—"}).
            </div>
          )}

          {toast && (
            <div className="mb-4 px-4 py-3 bg-green-50 border border-green-200 rounded text-sm text-green-800 font-medium">
              ✓ {toast}
            </div>
          )}

          {isLoading ? (
            <div className="text-center py-20 text-sm text-gray-500">Loading submissions...</div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-sm text-gray-500">No submissions found for the selected filter.</p>
            </div>
          ) : (
            <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden overflow-x-auto">
              <table className="w-full text-sm min-w-[800px]">
                <thead>
                  <tr className="text-white text-xs" style={{ backgroundColor: NAVY }}>
                    <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide">Report No.</th>
                    <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide">Form</th>
                    <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide">Submitted By</th>
                    <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide">Date</th>
                    <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide">Status</th>
                    <th className="px-4 py-3 text-right font-semibold uppercase tracking-wide">Admin Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((item, i) => {
                    const isPending = PENDING_STATUSES.includes(item.status);
                    return (
                      <tr
                        key={item.submissionId}
                        className={`border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}
                      >
                        <td className="px-4 py-3">
                          <span className="font-bold font-mono text-xs" style={{ color: GOLD }}>
                            {item.reportNumber ?? "—"}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="font-semibold text-xs text-gray-800">{item.formTitle ?? "—"}</div>
                          <div className="text-xs text-gray-400 font-mono mt-0.5 truncate max-w-[200px]">{item.submissionId}</div>
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
                            {isPending && canApproveAnyStep && (
                              <>
                                <button
                                  onClick={() => setApproveModal({ submissionId: item.submissionId, reportNumber: item.reportNumber ?? null, formTitle: item.formTitle ?? null, status: item.status })}
                                  className="text-xs px-2.5 py-1 rounded border font-semibold hover:bg-green-50 transition-colors"
                                  style={{ borderColor: "#16a34a", color: "#16a34a" }}
                                >
                                  Approve
                                </button>
                                <button
                                  onClick={() => setReturnModal({ submissionId: item.submissionId, reportNumber: item.reportNumber ?? null, formTitle: item.formTitle ?? null })}
                                  className="text-xs px-2.5 py-1 rounded border font-semibold hover:bg-amber-50 transition-colors"
                                  style={{ borderColor: "#d97706", color: "#d97706" }}
                                >
                                  Return
                                </button>
                              </>
                            )}
                            <Link
                              href={`/submissions/${item.submissionId}/print`}
                              className="text-xs px-2.5 py-1 rounded border font-semibold hover:bg-blue-50 transition-colors"
                              style={{ borderColor: "#1565c0", color: "#1565c0" }}
                            >
                              View
                            </Link>
                            {/* Edit No. — admin/hse_manager only; auditor + supervisor cannot edit */}
                            {canMutate && !isReadOnlyAuditView && (
                              <button
                                onClick={() => setEditModal({ submissionId: item.submissionId, reportNumber: item.reportNumber ?? null })}
                                className="text-xs px-2.5 py-1 rounded border font-semibold hover:bg-amber-50 transition-colors"
                                style={{ borderColor: GOLD, color: GOLD }}
                              >
                                Edit No.
                              </button>
                            )}
                            {/* Delete — admin/hse_manager only (gated via can.exportAll) */}
                            {canMutate && (
                              <button
                                onClick={() => setDeleteModal({ submissionId: item.submissionId, reportNumber: item.reportNumber ?? null, formTitle: item.formTitle ?? null })}
                                className="text-xs px-2.5 py-1 border border-red-300 rounded text-red-600 font-semibold hover:bg-red-50 transition-colors"
                              >
                                Delete
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>

      {/* ── Modals ─────────────────────────────────────────────────────────── */}
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

      {approveModal && (
        <ApproveModal
          submissionId={approveModal.submissionId}
          reportNumber={approveModal.reportNumber}
          formTitle={approveModal.formTitle}
          status={approveModal.status}
          onClose={() => setApproveModal(null)}
          onDone={() => handleDone("Submission approved and advanced to next step.")}
        />
      )}

      {returnModal && (
        <ReturnModal
          submissionId={returnModal.submissionId}
          reportNumber={returnModal.reportNumber}
          formTitle={returnModal.formTitle}
          onClose={() => setReturnModal(null)}
          onDone={() => handleDone("Submission returned for correction.")}
        />
      )}
    </Layout>
  );
}
