// IMS Master Document Register — searchable/filterable for all users, admin edit panel
import { useState, useMemo } from "react";
import { trpc } from "@/lib/trpc";
import Layout from "@/components/Layout";
import { useImsAuth } from "@/hooks/useImsAuth";
import {
  Search, Filter, Plus, Pencil, CheckCircle, Archive, RefreshCw,
  FileText, ChevronDown, ChevronUp, X, Loader2, AlertCircle, ExternalLink,
} from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────
type RegisterEntry = {
  id: number;
  code: string;
  type: string;
  typeLabel: string | null;
  department: string | null;
  departmentLabel: string | null;
  seq: string | null;
  rev: string | null;
  title: string;
  format: string | null;
  status: "ACTIVE" | "RETIRED" | "MERGED" | "LEGACY";
  filename: string | null;
  note: string | null;
  viewUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
};

// ── Constants ──────────────────────────────────────────────────────────────
const STATUS_COLORS: Record<string, string> = {
  ACTIVE:  "bg-emerald-100 text-emerald-800 border-emerald-200",
  RETIRED: "bg-red-100 text-red-700 border-red-200",
  MERGED:  "bg-blue-100 text-blue-700 border-blue-200",
  LEGACY:  "bg-amber-100 text-amber-700 border-amber-200",
};

const TYPE_COLORS: Record<string, string> = {
  FRM:  "bg-[#e8edf4] text-[#081C2E]",
  PROC: "bg-purple-100 text-purple-800",
  SOP:  "bg-indigo-100 text-indigo-800",
  PLN:  "bg-teal-100 text-teal-800",
  REG:  "bg-orange-100 text-orange-800",
  POL:  "bg-pink-100 text-pink-800",
  MAN:  "bg-cyan-100 text-cyan-800",
  WI:   "bg-lime-100 text-lime-800",
};

const DEPT_LABELS: Record<string, string> = {
  HSE: "HSE",
  OPS: "Operations",
  FIN: "Finance",
  HR:  "HR",
  ADM: "Admin",
  QMS: "Quality",
  SYS: "System",
  ENG: "Engineering",
  LOG: "Logistics",
};

// ── Status Badge ───────────────────────────────────────────────────────────
function StatusBadge({ status }: { status: string }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border tracking-wide ${STATUS_COLORS[status] ?? "bg-gray-100 text-gray-600 border-gray-200"}`}>
      {status}
    </span>
  );
}

// ── Type Badge ─────────────────────────────────────────────────────────────
function TypeBadge({ type }: { type: string }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold ${TYPE_COLORS[type] ?? "bg-gray-100 text-gray-700"}`}>
      {type}
    </span>
  );
}

// ── Edit / Add Modal ───────────────────────────────────────────────────────
function EntryModal({
  entry,
  onClose,
  onSaved,
}: {
  entry: RegisterEntry | null; // null = new entry
  onClose: () => void;
  onSaved: () => void;
}) {
  const isNew = entry === null;
  const [form, setForm] = useState({
    code: entry?.code ?? "",
    type: entry?.type ?? "FRM",
    department: entry?.department ?? "",
    seq: entry?.seq ?? "",
    rev: entry?.rev ?? "Rev01",
    title: entry?.title ?? "",
    format: entry?.format ?? "",
    status: entry?.status ?? "ACTIVE",
    filename: entry?.filename ?? "",
    note: entry?.note ?? "",
    viewUrl: entry?.viewUrl ?? "",
  });
  const [error, setError] = useState("");

  const createMut = trpc.register.create.useMutation();
  const updateMut = trpc.register.update.useMutation();

  const saving = createMut.isPending || updateMut.isPending;

  const handleSave = async () => {
    setError("");
    if (!form.code.trim() || !form.title.trim()) {
      setError("Code and Title are required.");
      return;
    }
    try {
      if (isNew) {
        await createMut.mutateAsync({
          code: form.code.trim(),
          type: form.type,
          department: form.department || undefined,
          seq: form.seq || undefined,
          rev: form.rev || undefined,
          title: form.title.trim(),
          format: form.format || undefined,
          status: form.status as RegisterEntry["status"],
          filename: form.filename || undefined,
          note: form.note || undefined,
          viewUrl: form.viewUrl || undefined,
        });
      } else {
        await updateMut.mutateAsync({
          id: entry!.id,
          code: form.code.trim(),
          type: form.type,
          department: form.department || undefined,
          seq: form.seq || undefined,
          rev: form.rev || undefined,
          title: form.title.trim(),
          format: form.format || undefined,
          status: form.status as RegisterEntry["status"],
          filename: form.filename || undefined,
          note: form.note || undefined,
          viewUrl: form.viewUrl || undefined,
        });
      }
      onSaved();
      onClose();
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Failed to save entry.");
    }
  };

  const field = (label: string, key: keyof typeof form, opts?: { type?: string; placeholder?: string }) => (
    <div>
      <label className="block text-xs font-semibold mb-1" style={{ color: "#4b5563" }}>{label}</label>
      <input
        type={opts?.type ?? "text"}
        value={form[key]}
        onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
        placeholder={opts?.placeholder}
        className="w-full border rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-1"
        style={{ borderColor: "#dde3ec", color: "#081C2E" }}
      />
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: "#dde3ec" }}>
          <div>
            <h2 className="font-bold text-sm" style={{ color: "#081C2E" }}>
              {isNew ? "Add New Document" : "Edit Document Entry"}
            </h2>
            {!isNew && <p className="text-xs mt-0.5" style={{ color: "#6b7a8d" }}>{entry!.code}</p>}
          </div>
          <button onClick={onClose} className="p-1 rounded hover:bg-gray-100">
            <X size={16} style={{ color: "#6b7a8d" }} />
          </button>
        </div>

        {/* Body */}
        <div className="px-5 py-4 space-y-3">
          {error && (
            <div className="flex items-center gap-2 text-sm text-red-700 bg-red-50 border border-red-200 rounded px-3 py-2">
              <AlertCircle size={14} /> {error}
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            {field("Document Code *", "code", { placeholder: "TE-IMS-FRM-HSE-001" })}
            <div>
              <label className="block text-xs font-semibold mb-1" style={{ color: "#4b5563" }}>Type</label>
              <select
                value={form.type}
                onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
                className="w-full border rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-1"
                style={{ borderColor: "#dde3ec", color: "#081C2E" }}
              >
                {["FRM","PROC","SOP","PLN","REG","POL","MAN","WI"].map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          {field("Title *", "title", { placeholder: "Document title" })}

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold mb-1" style={{ color: "#4b5563" }}>Department</label>
              <select
                value={form.department}
                onChange={e => setForm(f => ({ ...f, department: e.target.value }))}
                className="w-full border rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-1"
                style={{ borderColor: "#dde3ec", color: "#081C2E" }}
              >
                <option value="">—</option>
                {Object.entries(DEPT_LABELS).map(([k, v]) => (
                  <option key={k} value={k}>{k} — {v}</option>
                ))}
              </select>
            </div>
            {field("Seq", "seq", { placeholder: "001" })}
            {field("Rev", "rev", { placeholder: "Rev01" })}
          </div>

          <div className="grid grid-cols-2 gap-3">
            {field("Format", "format", { placeholder: "PDF / XLSX / DOCX" })}
            <div>
              <label className="block text-xs font-semibold mb-1" style={{ color: "#4b5563" }}>Status</label>
              <select
                value={form.status}
                  onChange={e => setForm(f => ({ ...f, status: e.target.value as "ACTIVE" | "RETIRED" | "MERGED" | "LEGACY" }))}
                className="w-full border rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-1"
                style={{ borderColor: "#dde3ec", color: "#081C2E" }}
              >
                  {(["ACTIVE","RETIRED","MERGED","LEGACY"] as const).map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
              </select>
            </div>
          </div>

          {field("Filename", "filename", { placeholder: "TE-IMS-FRM-HSE-001_Rev01.pdf" })}
          {field("View URL", "viewUrl", { placeholder: "/docs/frm/TE-IMS-FRM-HSE-001" })}
          {field("Notes", "note", { placeholder: "Optional notes or migration log entry" })}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-5 py-4 border-t" style={{ borderColor: "#dde3ec" }}>
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm rounded border font-medium"
            style={{ borderColor: "#dde3ec", color: "#6b7a8d" }}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-4 py-2 text-sm rounded font-semibold flex items-center gap-2 text-white"
            style={{ backgroundColor: "#C49A28" }}
          >
            {saving ? <Loader2 size={14} className="animate-spin" /> : null}
            {isNew ? "Add Document" : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────
export default function Register() {
  const { user } = useImsAuth();
  const isAdmin = user?.role === "admin";

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [deptFilter, setDeptFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("ACTIVE");
  const [showFilters, setShowFilters] = useState(false);
  const [editEntry, setEditEntry] = useState<RegisterEntry | null | "new">(undefined as unknown as RegisterEntry | null | "new");
  const [showModal, setShowModal] = useState(false);

  const { data: entries, isLoading, refetch } = trpc.register.list.useQuery({
    search: search || undefined,
    type: typeFilter || undefined,
    department: deptFilter || undefined,
    status: statusFilter || undefined,
  }, { refetchOnWindowFocus: false });

  const changeStatusMut = trpc.register.changeStatus.useMutation({
    onSuccess: () => refetch(),
  });

  // Unique types and departments from loaded data for filter dropdowns
  const { types, departments } = useMemo(() => {
    if (!entries) return { types: [], departments: [] };
    const t = Array.from(new Set(entries.map(e => e.type))).sort();
    const d = Array.from(new Set(entries.map(e => e.department).filter((x): x is string => x !== null))).sort();
    return { types: t, departments: d };
  }, [entries]);

  const openAdd = () => { setEditEntry(null); setShowModal(true); };
  const openEdit = (e: RegisterEntry) => { setEditEntry(e); setShowModal(true); };
  const closeModal = () => { setShowModal(false); };
  const handleSaved = () => refetch();

  return (
    <Layout>
      {/* ── Hero Banner ── */}
      <div style={{ backgroundColor: "#081C2E" }} className="relative overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663473952399/3YVZojsY2rei5QwThHiV6E/trueeastlogotransback_aaedc603.png"
          alt="" aria-hidden="true"
          className="absolute pointer-events-none select-none"
          style={{ width: "320px", opacity: 0.07, right: "-10px", top: "50%", transform: "translateY(-50%)" }}
        />
        <div className="container py-8 relative z-10">
          <div style={{ color: "#C49A28" }} className="text-xs font-bold tracking-[0.2em] uppercase mb-2">
            IMS Master Register
          </div>
          <h1 className="text-white text-3xl font-extrabold leading-tight">
            Document Register
          </h1>
          <p className="text-white/55 text-sm mt-2 max-w-xl">
            TE-IMS-REG-SYS-001 · Rev03 · The controlled index of all IMS documents.
            Only admins may add or edit entries. All changes are timestamped and attributed.
          </p>
          <div className="flex items-center gap-6 mt-4">
            <div className="text-center">
              <div className="text-xl font-extrabold tabular-nums" style={{ color: "#C49A28" }}>
                {entries?.filter(e => e.status === "ACTIVE").length ?? "—"}
              </div>
              <div className="text-[10px] tracking-widest uppercase font-semibold text-white/40 mt-0.5">Active</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-extrabold tabular-nums" style={{ color: "#C49A28" }}>
                {entries?.length ?? "—"}
              </div>
              <div className="text-[10px] tracking-widest uppercase font-semibold text-white/40 mt-0.5">Total</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-extrabold tabular-nums" style={{ color: "#C49A28" }}>
                {Array.from(new Set(entries?.map(e => e.type) ?? [])).length}
              </div>
              <div className="text-[10px] tracking-widest uppercase font-semibold text-white/40 mt-0.5">Types</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Toolbar ── */}
      <div style={{ backgroundColor: "#f4f6f9", borderBottom: "1px solid #dde3ec" }} className="sticky top-0 z-10">
        <div className="container py-3">
          <div className="flex flex-wrap items-center gap-3">
            {/* Search */}
            <div className="relative flex-1 min-w-[200px]">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#8a9ab0" }} />
              <input
                type="text"
                placeholder="Search by code or title…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-2 text-sm border rounded focus:outline-none focus:ring-1"
                style={{ borderColor: "#dde3ec", color: "#081C2E" }}
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2">
                  <X size={12} style={{ color: "#8a9ab0" }} />
                </button>
              )}
            </div>

            {/* Status quick-filter */}
            <div className="flex items-center gap-1">
              {["", "ACTIVE", "RETIRED", "MERGED", "LEGACY"].map(s => (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded transition-all ${statusFilter === s ? "text-white" : "text-gray-500 hover:bg-gray-200"}`}
                  style={statusFilter === s ? { backgroundColor: "#081C2E" } : {}}
                >
                  {s || "All"}
                </button>
              ))}
            </div>

            {/* Filters toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border rounded"
              style={{ borderColor: "#dde3ec", color: "#081C2E" }}
            >
              <Filter size={12} />
              Filters
              {showFilters ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
            </button>

            {/* Admin: Add button */}
            {isAdmin && (
              <button
                onClick={openAdd}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded text-white"
                style={{ backgroundColor: "#C49A28" }}
              >
                <Plus size={12} />
                Add Document
              </button>
            )}
          </div>

          {/* Expanded filters */}
          {showFilters && (
            <div className="flex flex-wrap gap-3 mt-3 pt-3 border-t" style={{ borderColor: "#dde3ec" }}>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "#8a9ab0" }}>Type</label>
                <select
                  value={typeFilter}
                  onChange={e => setTypeFilter(e.target.value)}
                  className="border rounded px-2 py-1 text-sm"
                  style={{ borderColor: "#dde3ec", color: "#081C2E" }}
                >
                  <option value="">All Types</option>
                  {types.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "#8a9ab0" }}>Department</label>
                <select
                  value={deptFilter}
                  onChange={e => setDeptFilter(e.target.value)}
                  className="border rounded px-2 py-1 text-sm"
                  style={{ borderColor: "#dde3ec", color: "#081C2E" }}
                >
                  <option value="">All Departments</option>
                  {departments.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              {(typeFilter || deptFilter) && (
                <button
                  onClick={() => { setTypeFilter(""); setDeptFilter(""); }}
                  className="self-end text-xs text-red-600 underline"
                >
                  Clear filters
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── Table ── */}
      <div className="container py-6">
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 size={24} className="animate-spin" style={{ color: "#C49A28" }} />
            <span className="ml-3 text-sm" style={{ color: "#6b7a8d" }}>Loading register…</span>
          </div>
        ) : !entries?.length ? (
          <div className="text-center py-20">
            <FileText size={40} className="mx-auto mb-3" style={{ color: "#dde3ec" }} />
            <p className="text-sm font-semibold" style={{ color: "#6b7a8d" }}>No documents found</p>
            <p className="text-xs mt-1" style={{ color: "#8a9ab0" }}>Try adjusting your search or filters.</p>
          </div>
        ) : (
          <>
            <p className="text-xs mb-3" style={{ color: "#8a9ab0" }}>
              Showing <strong style={{ color: "#081C2E" }}>{entries.length}</strong> document{entries.length !== 1 ? "s" : ""}
              {statusFilter ? ` · ${statusFilter}` : ""}
              {typeFilter ? ` · ${typeFilter}` : ""}
              {deptFilter ? ` · ${deptFilter}` : ""}
            </p>

            <div className="overflow-x-auto rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#081C2E" }}>
                    <th className="text-left px-4 py-3 text-white text-xs font-bold tracking-wider">Code</th>
                    <th className="text-left px-4 py-3 text-white text-xs font-bold tracking-wider">Type</th>
                    <th className="text-left px-4 py-3 text-white text-xs font-bold tracking-wider">Title</th>
                    <th className="text-left px-4 py-3 text-white text-xs font-bold tracking-wider">Dept</th>
                    <th className="text-left px-4 py-3 text-white text-xs font-bold tracking-wider">Rev</th>
                    <th className="text-left px-4 py-3 text-white text-xs font-bold tracking-wider">Status</th>
                    {isAdmin && <th className="text-right px-4 py-3 text-white text-xs font-bold tracking-wider">Actions</th>}
                  </tr>
                </thead>
                <tbody>
                  {entries.map((entry, idx) => (
                    <tr
                      key={entry.id}
                      className="border-t transition-colors hover:bg-blue-50/30"
                      style={{ borderColor: "#edf0f5", backgroundColor: idx % 2 === 0 ? "#fff" : "#fafbfc" }}
                    >
                      {/* Code */}
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          {entry.viewUrl ? (
                            <a
                              href={entry.viewUrl}
                              className="font-mono text-xs font-bold hover:underline flex items-center gap-1"
                              style={{ color: "#C49A28" }}
                            >
                              {entry.code}
                              <ExternalLink size={10} />
                            </a>
                          ) : (
                            <span className="font-mono text-xs font-bold" style={{ color: "#081C2E" }}>
                              {entry.code}
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Type */}
                      <td className="px-4 py-3">
                        <TypeBadge type={entry.type} />
                      </td>

                      {/* Title */}
                      <td className="px-4 py-3 max-w-[300px]">
                        <span className="text-sm font-medium" style={{ color: "#081C2E" }}>
                          {entry.title}
                        </span>
                        {entry.note && (
                          <p className="text-[11px] mt-0.5 truncate" style={{ color: "#8a9ab0" }}>{entry.note}</p>
                        )}
                      </td>

                      {/* Dept */}
                      <td className="px-4 py-3">
                        <span className="text-xs font-semibold" style={{ color: "#6b7a8d" }}>
                          {entry.department ?? "—"}
                        </span>
                      </td>

                      {/* Rev */}
                      <td className="px-4 py-3">
                        <span className="text-xs" style={{ color: "#6b7a8d" }}>
                          {entry.rev ?? "—"}
                        </span>
                      </td>

                      {/* Status */}
                      <td className="px-4 py-3">
                        <StatusBadge status={entry.status} />
                      </td>

                      {/* Admin actions */}
                      {isAdmin && (
                        <td className="px-4 py-3">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => openEdit(entry as RegisterEntry)}
                              title="Edit"
                              className="p-1.5 rounded hover:bg-gray-100 transition-colors"
                            >
                              <Pencil size={13} style={{ color: "#6b7a8d" }} />
                            </button>
                            {entry.status === "ACTIVE" && (
                              <button
                                onClick={() => changeStatusMut.mutate({ id: entry.id, status: "RETIRED" })}
                                title="Retire"
                                className="p-1.5 rounded hover:bg-red-50 transition-colors"
                              >
                                <Archive size={13} style={{ color: "#dc2626" }} />
                              </button>
                            )}
                            {entry.status !== "ACTIVE" && (
                              <button
                                onClick={() => changeStatusMut.mutate({ id: entry.id, status: "ACTIVE" })}
                                title="Restore to Active"
                                className="p-1.5 rounded hover:bg-emerald-50 transition-colors"
                              >
                                <RefreshCw size={13} style={{ color: "#059669" }} />
                              </button>
                            )}
                          </div>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>

      {/* ── Footer notice ── */}
      <div className="container pb-10">
        <div
          className="rounded border p-4 text-xs leading-relaxed"
          style={{ backgroundColor: "#fffbf0", borderColor: "#f0d98a", color: "#5a4a1a" }}
        >
          <span className="font-bold">Document Control Notice:</span> This register is the master index for all IMS-controlled documents.
          Only administrators may add, edit, or change the status of entries. All changes are recorded with timestamp and user identity.
          Printed copies are uncontrolled — always refer to this portal for the current approved register.
        </div>
      </div>

      {/* ── Modal ── */}
      {showModal && (
        <EntryModal
          entry={editEntry === "new" ? null : editEntry}
          onClose={closeModal}
          onSaved={handleSaved}
        />
      )}
    </Layout>
  );
}
