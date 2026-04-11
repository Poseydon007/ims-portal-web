// Admin — Near Miss Submissions Register
// Accessible only to admin users

import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { Link } from "wouter";
import { useState } from "react";
import { toast } from "sonner";

const NAVY = "#081C2E";
const GOLD = "#C49A28";

const STATUS_COLORS: Record<string, { bg: string; text: string }> = {
  submitted: { bg: "#fff3e0", text: "#e65100" },
  under_review: { bg: "#e3f2fd", text: "#1565c0" },
  closed: { bg: "#e8f5e9", text: "#2e7d32" },
};

const STATUS_LABELS: Record<string, string> = {
  submitted: "Submitted",
  under_review: "Under Review",
  closed: "Closed",
};

export default function SubmissionsAdmin() {
  const { user, loading } = useAuth();
  const [selected, setSelected] = useState<number | null>(null);

  const { data: submissions, isLoading, refetch } = trpc.nearMiss.list.useQuery(undefined, {
    enabled: !!user && user.role === "admin",
  });

  const { data: detail } = trpc.nearMiss.getById.useQuery(
    { id: selected! },
    { enabled: selected !== null }
  );

  const updateStatus = trpc.nearMiss.updateStatus.useMutation({
    onSuccess: () => { toast.success("Status updated"); refetch(); },
    onError: (e) => toast.error(e.message),
  });

  if (loading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#f4f6f9" }}>
        <div className="text-sm" style={{ color: NAVY }}>Loading...</div>
      </div>
    );
  }

  if (!user || user.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#f4f6f9" }}>
        <div className="bg-white rounded-lg shadow p-8 text-center max-w-sm">
          <h2 className="font-bold text-lg mb-2" style={{ color: NAVY }}>Access Restricted</h2>
          <p className="text-sm mb-4" style={{ color: "#6b7a8d" }}>This page is for HSE administrators only.</p>
          <Link href="/" className="text-sm font-semibold" style={{ color: GOLD }}>← Return to Portal</Link>
        </div>
      </div>
    );
  }

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
            <p className="text-white/50 text-xs">Admin — Submissions Register</p>
          </div>
        </div>
        <Link href="/" className="text-xs font-semibold" style={{ color: GOLD }}>← Portal Home</Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-bold" style={{ color: NAVY }}>Near Miss Reports</h1>
            <p className="text-sm mt-0.5" style={{ color: "#6b7a8d" }}>
              {submissions?.length ?? 0} submission{submissions?.length !== 1 ? "s" : ""} total
            </p>
          </div>
          <a
            href="https://docs.google.com/spreadsheets/d/1yF54b5SGJcl7avg0rq6a-JzSR4NJ3gmZl7vTi28B9Dg/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-4 py-2 rounded border"
            style={{ borderColor: GOLD, color: GOLD }}
          >
            Open Google Sheet Register ↗
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded shadow-sm overflow-hidden">
              {!submissions || submissions.length === 0 ? (
                <div className="p-6 text-center text-sm" style={{ color: "#6b7a8d" }}>No submissions yet.</div>
              ) : (
                <div className="divide-y" style={{ borderColor: "#edf0f5" }}>
                  {submissions.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelected(s.id)}
                      className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors"
                      style={{ borderLeft: selected === s.id ? `3px solid ${GOLD}` : "3px solid transparent" }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold" style={{ color: GOLD }}>{s.submissionId}</span>
                        <span
                          className="text-xs px-2 py-0.5 rounded font-medium"
                          style={{ backgroundColor: (STATUS_COLORS[s.status] ?? { bg: "#f4f6f9", text: "#6b7a8d" }).bg, color: (STATUS_COLORS[s.status] ?? { bg: "#f4f6f9", text: "#6b7a8d" }).text }}
                        >
                          {STATUS_LABELS[s.status] ?? s.status}
                        </span>
                      </div>
                      <p className="text-sm font-medium truncate" style={{ color: NAVY }}>{s.reportedBy}</p>
                      <p className="text-xs" style={{ color: "#8a9ab0" }}>
                        {s.dateOfOccurrence} · {s.location ?? "—"}
                      </p>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Detail */}
          <div className="lg:col-span-2">
            {!selected || !detail ? (
              <div className="bg-white rounded shadow-sm p-8 text-center" style={{ color: "#8a9ab0" }}>
                <p className="text-sm">Select a submission to view details</p>
              </div>
            ) : (
              <div className="bg-white rounded shadow-sm">
                <div className="px-6 py-4 flex items-center justify-between" style={{ borderBottom: "1px solid #edf0f5" }}>
                  <div>
                    <span className="text-xs font-bold" style={{ color: GOLD }}>{detail.submissionId}</span>
                    <h2 className="text-base font-bold" style={{ color: NAVY }}>Near Miss Report</h2>
                  </div>
                  <div className="flex gap-2">
                    {(["submitted", "under_review", "closed"] as const).map((s) => (
                      <button
                        key={s}
                        onClick={() => updateStatus.mutate({ id: detail.id, status: s })}
                        className="text-xs px-3 py-1 rounded border font-medium transition-colors"
                        style={
                          detail.status === s
                            ? { backgroundColor: NAVY, color: "white", borderColor: NAVY }
                            : { backgroundColor: "white", color: NAVY, borderColor: "#dde3ec" }
                        }
                      >
                        {STATUS_LABELS[s]}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-6 space-y-4 text-sm">
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Date" value={detail.dateOfOccurrence} />
                    <Field label="Time" value={detail.timeOfOccurrence ?? "—"} />
                    <Field label="Location" value={detail.location ?? "—"} />
                    <Field label="Department / Site" value={detail.departmentSite ?? "—"} />
                    <Field label="Reported By" value={detail.reportedBy} />
                    <Field label="Employee ID" value={detail.employeeId ?? "—"} />
                    <Field label="Classification" value={detail.classification ?? "—"} />
                    <Field label="Severity" value={detail.potentialSeverity ?? "—"} />
                    <Field label="Likelihood" value={detail.potentialLikelihood ?? "—"} />
                    <Field label="Submitted" value={new Date(detail.submittedAt).toLocaleString()} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#8a9ab0" }}>Description</p>
                    <p className="text-sm leading-relaxed p-3 rounded" style={{ backgroundColor: "#f9fafb", color: NAVY }}>{detail.description}</p>
                  </div>

                  {detail.contributingFactors && (
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#8a9ab0" }}>Contributing Factors</p>
                      <p className="text-sm" style={{ color: NAVY }}>{detail.contributingFactors}</p>
                    </div>
                  )}

                  {detail.correctiveActions && (
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#8a9ab0" }}>Corrective Actions</p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs border-collapse">
                          <thead>
                            <tr style={{ backgroundColor: "#f4f6f9" }}>
                              <th className="text-left px-3 py-2 border" style={{ borderColor: "#dde3ec", color: NAVY }}>Action</th>
                              <th className="text-left px-3 py-2 border" style={{ borderColor: "#dde3ec", color: NAVY }}>Responsible</th>
                              <th className="text-left px-3 py-2 border" style={{ borderColor: "#dde3ec", color: NAVY }}>Due Date</th>
                              <th className="text-left px-3 py-2 border" style={{ borderColor: "#dde3ec", color: NAVY }}>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {JSON.parse(detail.correctiveActions).map((a: { action: string; responsible: string; dueDate: string; status: string }, i: number) => (
                              <tr key={i}>
                                <td className="border px-3 py-2" style={{ borderColor: "#dde3ec", color: NAVY }}>{a.action || "—"}</td>
                                <td className="border px-3 py-2" style={{ borderColor: "#dde3ec", color: NAVY }}>{a.responsible || "—"}</td>
                                <td className="border px-3 py-2" style={{ borderColor: "#dde3ec", color: NAVY }}>{a.dueDate || "—"}</td>
                                <td className="border px-3 py-2" style={{ borderColor: "#dde3ec", color: NAVY }}>{a.status}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-3 pt-2" style={{ borderTop: "1px solid #edf0f5" }}>
                    <Field label="Supervisor" value={detail.supervisorName ?? "Pending"} />
                    <Field label="HSE Officer" value={detail.hseOfficerName ?? "Pending"} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: "#8a9ab0" }}>{label}</p>
      <p className="text-sm" style={{ color: "#081C2E" }}>{value}</p>
    </div>
  );
}
