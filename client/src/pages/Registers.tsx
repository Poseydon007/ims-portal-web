// Registers page — lists all IMS REG documents
// Click name → preview image modal
// "Open in Drive" button → admin and supervisor only
// Drive links confirmed from TE Google Drive folder (April 11, 2026)

import { useState } from "react";
import Layout from "@/components/Layout";
import { useImsAuth } from "@/hooks/useImsAuth";
import {
  FileSpreadsheet,
  ExternalLink,
  X,
  Search,
  Filter,
  Eye,
} from "lucide-react";
// Raw imports + JSON.parse to defeat Rollup field-level tree-shaking that
// otherwise drops manifest fields (registerCode, registerName, fieldKeys)
// when accessed via a type-cast iterator chain.
import formsManifestRaw from "@/data/forms-manifest.json?raw";
import formsRegistersRaw from "@/data/forms-registers.json?raw";
const formsManifest = JSON.parse(formsManifestRaw);
const formsRegisters = JSON.parse(formsRegistersRaw);

interface RegisterEntry {
  code: string;
  title: string;
  rev: string;
  format: "xlsx" | "docx" | "sheet";
  category: string;
  department: string;
  driveUrl: string;
  previewUrl?: string;
  owner?: string;
  standard?: string;
  purpose?: string;
  /**
   * Marks this entry as a per-form Submission Register (one Google Sheet
   * per form, auto-populated via the IMS portal). Distinguishes them from
   * the hand-curated aggregate registers above.
   */
  kind?: "aggregate" | "submission";
}

// ── Per-form Submission Registers ────────────────────────────────────────
// Built dynamically from the forms manifest + the provisioned-files mapping
// (forms-registers.json — populated by scripts/create-registers.mjs). Each
// IMS form has its own dedicated Google Sheet; submissions append a row to
// the matching file's "Submissions" tab.
const SUBMISSION_REGISTER_SKIP = new Set(["TE-IMS-FRM-HSE-016"]); // static reference, no submissions

// Map form category → register owner (single source of truth for both
// aggregate and per-form rows). Uncategorized → COO.
const CATEGORY_OWNER: Record<string, string> = {
  HSE:   "HSE Manager",
  LOG:   "Operations Manager",
  MAINT: "Maintenance Supervisor",
  OPS:   "Operations Manager",
  SEC:   "Security Manager",
  SYS:   "COO",
  TRN:   "HR Manager",
  REF:   "COO",
};

type ManifestForm = {
  formCode: string;
  title: string;
  revision: string;
  category: string;
  registerCode: string;
  registerName: string;
  fieldKeys: string[];
};

type RegisterMappingEntry = { fileId: string; fileUrl: string };

const REGISTER_MAPPING = formsRegisters as Record<string, RegisterMappingEntry>;

const SUBMISSION_REGISTERS: RegisterEntry[] = (formsManifest as ManifestForm[])
  .filter((f) => !SUBMISSION_REGISTER_SKIP.has(f.formCode))
  .map((f) => {
    const mapping = REGISTER_MAPPING[f.formCode];
    return {
      code: f.registerCode,
      title: `${f.title} — Submissions Register`,
      rev: `Rev${f.revision}`,
      format: "sheet" as const,
      category: f.category,
      department: f.category,
      driveUrl: mapping?.fileUrl ?? "",
      owner: CATEGORY_OWNER[f.category] ?? "COO",
      purpose: `Auto-populated submission log for ${f.formCode}. One row per submission via the IMS portal.`,
      kind: "submission" as const,
    };
  });

// All 12 confirmed spreadsheet registers from Google Drive (April 11, 2026)
// Note: TE-IMS-REF-SYS-006 is a REF (Reference) file included as a key data register
const REGISTERS: RegisterEntry[] = [
  // SYS
  {
    code: "TE-IMS-REG-SYS-001",
    title: "IMS Master Register and Migration Log",
    rev: "Rev03",
    format: "xlsx",
    category: "SYS",
    department: "Management",
    driveUrl: "https://drive.google.com/open?id=1oQ4qMpcW2e9KbzhvpiGTCGfosghHsRG6",
    owner: "COO",
    standard: "ISO 9001:2015 Cl. 4.4; ISO 14001:2015 Cl. 4.4; ISO 45001:2018 Cl. 4.4",
    purpose: "Master index of all IMS documents. Tracks document codes, revisions, status, and migration history across the entire TEMC document hierarchy.",
  },
  {
    code: "TE-IMS-REG-SYS-004",
    title: "Corrective Action Request Log",
    rev: "Rev01",
    format: "xlsx",
    category: "SYS",
    department: "Management",
    driveUrl: "https://drive.google.com/open?id=1SoRd7yw17cTpXacyRM_n6RosKiB3C1bm",
    owner: "COO",
    standard: "ISO 9001:2015 Cl. 10.2; ISO 14001:2015 Cl. 10.2; ISO 45001:2018 Cl. 10.2",
    purpose: "Tracks all corrective actions raised across TEMC, including root cause, assigned owner, target date, and closure status.",
  },
  {
    code: "TE-IMS-REG-SYS-007",
    title: "Risk and Opportunity Register",
    rev: "Rev01",
    format: "xlsx",
    category: "SYS",
    department: "Management",
    driveUrl: "https://drive.google.com/open?id=1owwhYbOCK2rYo8fQHokgXjMHupbn8M3v",
    owner: "COO",
    standard: "ISO 9001:2015 Cl. 6.1; ISO 14001:2015 Cl. 6.1; ISO 45001:2018 Cl. 6.1",
    purpose: "Identifies and tracks strategic and operational risks and opportunities across the IMS, with likelihood, impact, and treatment actions.",
  },
  // HSE
  {
    code: "TE-IMS-REG-HSE-001",
    title: "Risk Register",
    rev: "Rev01",
    format: "xlsx",
    category: "HSE",
    department: "HSE",
    driveUrl: "https://drive.google.com/open?id=1y3obnGImfhOfhzlLd7lS4vnjuvsoAHT8",
    owner: "HSE Manager",
    standard: "ISO 45001:2018 Cl. 6.1.2",
    purpose: "Tracks all identified safety and health risks across TEMC operations, with risk ratings, controls, and residual risk levels.",
  },
  {
    code: "TE-IMS-REG-HSE-005",
    title: "Incident and Accident Index Register",
    rev: "Rev01",
    format: "xlsx",
    category: "HSE",
    department: "HSE",
    driveUrl: "https://drive.google.com/open?id=1wlpH5fvudTwcD5l8sbhkDM9eui_31NMA",
    previewUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663473952399/3YVZojsY2rei5QwThHiV6E/REG-HSE-005-preview_24aefd00.png",
    owner: "HSE Manager",
    standard: "ISO 45001:2018 Cl. 10.2; Saudi Labour Law Royal Decree M/51 Art. 142; MHRSD OSH",
    purpose: "Master index of all incidents, near-misses, environmental releases, and injuries at TEMC sites. Feeds corrective action, investigation, and monthly HSE reporting.",
  },
  {
    code: "TE-IMS-REG-HSE-007",
    title: "HIRA Register",
    rev: "Rev01",
    format: "xlsx",
    category: "HSE",
    department: "HSE",
    driveUrl: "https://drive.google.com/open?id=1iKTFANZoASvBbXvbHXkTEJxrqAdCKTEk",
    owner: "HSE Manager",
    standard: "ISO 45001:2018 Cl. 6.1.2",
    purpose: "Hazard Identification and Risk Assessment register for all TEMC activities, tasks, and workplaces.",
  },
  {
    code: "TE-IMS-REG-HSE-010",
    title: "Environmental Aspect and Impact Register",
    rev: "Rev02",
    format: "xlsx",
    category: "HSE",
    department: "HSE",
    driveUrl: "https://drive.google.com/open?id=13BAsrsfDWVla3YgFRw-M4BlS0gMTsYZM",
    owner: "HSE Manager",
    standard: "ISO 14001:2015 Cl. 6.1.2",
    purpose: "Identifies and evaluates environmental aspects and their impacts from TEMC operations, including significance ratings and control measures.",
  },
  // LOG
  {
    code: "TE-IMS-REG-LOG-001",
    title: "Vehicle Handover Register",
    rev: "Rev01",
    format: "xlsx",
    category: "LOG",
    department: "Logistics",
    driveUrl: "https://drive.google.com/open?id=1n5y9uMq7RzZzEkZf0Q_OxVKBwkQhV7Tv",
    owner: "Operations Manager",
    standard: "ISO 45001:2018 Cl. 8.1.3",
    purpose: "Records vehicle handover between drivers, including vehicle condition, fuel level, mileage, and driver sign-off.",
  },
  // MAINT
  {
    code: "TE-IMS-REG-MAINT-001",
    title: "Maintenance Log and Service Record",
    rev: "Rev01",
    format: "xlsx",
    category: "MAINT",
    department: "Maintenance",
    driveUrl: "https://drive.google.com/open?id=1b0yP_8JelkA5czQ4d5X9QQgxNHmJzGYA",
    owner: "Maintenance Supervisor",
    standard: "ISO 9001:2015 Cl. 7.1.3",
    purpose: "Tracks all maintenance activities, service intervals, work orders, and equipment status across TEMC assets.",
  },
  {
    code: "TE-IMS-REG-MAINT-002",
    title: "Fuel Refuelling Log",
    rev: "Rev01",
    format: "xlsx",
    category: "MAINT",
    department: "Maintenance",
    driveUrl: "https://drive.google.com/open?id=1mCoetiLjBFnwZg8CZWuMoOObc5aTKi2X",
    owner: "Maintenance Supervisor",
    standard: "ISO 14001:2015 Cl. 8.1",
    purpose: "Records all fuel refuelling events, quantities dispensed, vehicle/equipment IDs, and operator details.",
  },
  // TRN
  {
    code: "TE-IMS-REG-TRN-001",
    title: "Training and Competence Matrix",
    rev: "Rev01",
    format: "xlsx",
    category: "TRN",
    department: "HR",
    driveUrl: "https://drive.google.com/open?id=1YUu_54FE-EynpXvnJvBQSjZ9yxCuKelu",
    owner: "HR Manager",
    standard: "ISO 9001:2015 Cl. 7.2; ISO 45001:2018 Cl. 7.2",
    purpose: "Maps training requirements and competence levels for all roles at TEMC. Tracks training completion, certifications, and gaps.",
  },
  // REF (Reference Data — included as key data register)
  {
    code: "TE-IMS-REF-SYS-006",
    title: "KPI Tables and Reference Data",
    rev: "Rev01",
    format: "xlsx",
    category: "REF",
    department: "Management",
    driveUrl: "https://drive.google.com/open?id=1SiCZjJBBsCt2OXZXU7A_982azcn-pFEc",
    owner: "COO",
    standard: "ISO 9001:2015 Cl. 9.1; ISO 14001:2015 Cl. 9.1; ISO 45001:2018 Cl. 9.1",
    purpose: "Reference tables for KPI targets, performance benchmarks, and management review data used across the IMS.",
  },
];

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  HSE:   { bg: "#fff3cd", text: "#7a4f00", border: "#f0c040" },
  SYS:   { bg: "#e8f4f0", text: "#1a5c45", border: "#7ac4a8" },
  LOG:   { bg: "#f0e8f4", text: "#4a1a6b", border: "#c0a0d8" },
  MAINT: { bg: "#fde8e8", text: "#7a1a1a", border: "#f0a0a0" },
  TRN:   { bg: "#e8f0fd", text: "#1a3a7a", border: "#a0b8f0" },
  REF:   { bg: "#e8edf4", text: "#081C2E", border: "#b0bdd0" },
};

// Category colour fallback for form categories not in the original aggregate
// palette (OPS, SEC). Reuses existing tones for visual consistency.
CATEGORY_COLORS.OPS = CATEGORY_COLORS.OPS ?? { bg: "#e8f4f0", text: "#1a5c45", border: "#7ac4a8" };
CATEGORY_COLORS.SEC = CATEGORY_COLORS.SEC ?? { bg: "#fde8e8", text: "#7a1a1a", border: "#f0a0a0" };

const CATEGORIES = ["All", "HSE", "SYS", "LOG", "MAINT", "OPS", "SEC", "TRN", "REF"];
const KINDS = ["All", "Aggregate", "Submission"] as const;
type KindFilter = typeof KINDS[number];

// Combined catalogue: hand-curated aggregate registers + per-form submission
// registers from the manifest. Aggregates first so they keep their existing
// position at the top of the table.
const ALL_REGISTERS: RegisterEntry[] = [
  ...REGISTERS.map((r) => ({ ...r, kind: "aggregate" as const })),
  ...SUBMISSION_REGISTERS,
];

export default function Registers() {
  const { user, isAuthenticated } = useImsAuth();
  const [search, setSearch] = useState("");
  const [filterCat, setFilterCat] = useState("All");
  const [filterKind, setFilterKind] = useState<KindFilter>("All");
  const [preview, setPreview] = useState<RegisterEntry | null>(null);

  const canOpenDrive = isAuthenticated && (user?.role === "admin" || user?.role === "supervisor");

  const filtered = ALL_REGISTERS.filter((r) => {
    const matchSearch =
      r.code.toLowerCase().includes(search.toLowerCase()) ||
      r.title.toLowerCase().includes(search.toLowerCase());
    const matchCat = filterCat === "All" || r.category === filterCat;
    const matchKind =
      filterKind === "All" ||
      (filterKind === "Aggregate" && r.kind !== "submission") ||
      (filterKind === "Submission" && r.kind === "submission");
    return matchSearch && matchCat && matchKind;
  });

  const xlsxCount = ALL_REGISTERS.filter(r => r.format === "xlsx" || r.format === "sheet").length;
  const catCount = new Set(ALL_REGISTERS.map(r => r.category)).size;

  return (
    <Layout>
      {/* ── Hero Banner ── */}
      <div style={{ backgroundColor: "#081C2E" }} className="relative overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663473952399/3YVZojsY2rei5QwThHiV6E/logo-trans_6f674faa.png"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none select-none"
          style={{ width: "320px", opacity: 0.07, right: "-10px", top: "50%", transform: "translateY(-50%)" }}
        />
        <div className="container pt-8 pb-6 relative z-10">
          <div style={{ color: "#C49A28" }} className="text-xs font-bold tracking-[0.2em] uppercase mb-2">
            Integrated Management System
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
            IMS Registers
          </h1>
          <p className="text-white/55 text-sm mt-2 max-w-xl leading-relaxed">
            All controlled register documents. Click a register name to view a preview.
            {canOpenDrive
              ? " Use the Open button to access the live file in Google Drive."
              : " Contact your supervisor or admin to access the live files."}
          </p>
        </div>

        {/* Stats bar */}
        <div style={{ borderTop: "1px solid rgba(196,154,40,0.2)" }}>
          <div className="container py-2 flex flex-wrap gap-6">
            {[
              { value: ALL_REGISTERS.length, label: "Total Registers" },
              { value: xlsxCount, label: "Spreadsheets" },
              { value: catCount, label: "Categories" },
              { value: "Rev01–03", label: "Revision Range" },
            ].map(s => (
              <div key={s.label} className="text-center px-3">
                <div className="text-xl font-extrabold tabular-nums" style={{ color: "#C49A28" }}>{s.value}</div>
                <div className="text-[10px] tracking-widest uppercase font-semibold" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Filters ── */}
      <div style={{ backgroundColor: "#f4f6f9", borderBottom: "1px solid #dde3ec" }} className="py-3">
        <div className="container flex flex-wrap items-center gap-3">
          {/* Search */}
          <div className="relative flex-1 min-w-[200px] max-w-xs">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            <input
              type="text"
              placeholder="Search by code or title…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs border rounded focus:outline-none focus:ring-1"
              style={{ borderColor: "#dde3ec", fontSize: "12px" }}
            />
          </div>

          {/* Category filter */}
          <div className="flex items-center gap-1.5">
            <Filter size={13} className="text-gray-400" />
            <span className="text-xs text-gray-500 font-medium">Category:</span>
            <div className="flex gap-1 flex-wrap">
              {CATEGORIES.map(c => (
                <button
                  key={c}
                  onClick={() => setFilterCat(c)}
                  className="text-xs px-2 py-0.5 rounded font-medium transition-all"
                  style={{
                    backgroundColor: filterCat === c ? "#081C2E" : "#e8edf4",
                    color: filterCat === c ? "white" : "#4a5568",
                    border: filterCat === c ? "1px solid #081C2E" : "1px solid #dde3ec",
                  }}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Kind filter (Aggregate vs per-form Submission registers) */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-gray-500 font-medium">Kind:</span>
            <div className="flex gap-1 flex-wrap">
              {KINDS.map(k => (
                <button
                  key={k}
                  onClick={() => setFilterKind(k)}
                  className="text-xs px-2 py-0.5 rounded font-medium transition-all"
                  style={{
                    backgroundColor: filterKind === k ? "#C49A28" : "#e8edf4",
                    color: filterKind === k ? "white" : "#4a5568",
                    border: filterKind === k ? "1px solid #C49A28" : "1px solid #dde3ec",
                  }}
                >
                  {k}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Register Table ── */}
      <div className="container py-8">
        <div className="overflow-x-auto rounded border" style={{ borderColor: "#dde3ec" }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ backgroundColor: "#081C2E" }}>
                <th className="text-left px-4 py-3 text-white text-xs font-semibold tracking-wider uppercase">Document Code</th>
                <th className="text-left px-4 py-3 text-white text-xs font-semibold tracking-wider uppercase">Title</th>
                <th className="text-center px-3 py-3 text-white text-xs font-semibold tracking-wider uppercase">Cat.</th>
                <th className="text-center px-3 py-3 text-white text-xs font-semibold tracking-wider uppercase">Rev.</th>
                <th className="text-center px-3 py-3 text-white text-xs font-semibold tracking-wider uppercase">Format</th>
                <th className="text-center px-3 py-3 text-white text-xs font-semibold tracking-wider uppercase">Owner</th>
                <th className="text-center px-3 py-3 text-white text-xs font-semibold tracking-wider uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-12 text-gray-400 text-sm">
                    No registers match your search or filters.
                  </td>
                </tr>
              ) : (
                filtered.map((reg, idx) => {
                  const catStyle = CATEGORY_COLORS[reg.category] ?? CATEGORY_COLORS.GOV;
                  return (
                    <tr
                      key={reg.code}
                      style={{ backgroundColor: idx % 2 === 0 ? "#ffffff" : "#f8fafc" }}
                      className="border-b hover:bg-blue-50/30 transition-colors"
                    >
                      {/* Code */}
                      <td className="px-4 py-3">
                        <span className="font-mono text-xs font-bold" style={{ color: "#081C2E" }}>
                          {reg.code}
                        </span>
                      </td>

                      {/* Title — clickable for preview */}
                      <td className="px-4 py-3">
                        <button
                          onClick={() => setPreview(reg)}
                          className="text-left text-sm font-medium hover:underline flex items-center gap-1.5 group"
                          style={{ color: "#081C2E" }}
                        >
                          {reg.title}
                          <Eye
                            size={13}
                            className="opacity-0 group-hover:opacity-60 transition-opacity flex-shrink-0"
                            style={{ color: "#C49A28" }}
                          />
                        </button>
                      </td>

                      {/* Category badge */}
                      <td className="px-3 py-3 text-center">
                        <span
                          className="text-xs font-bold px-2 py-0.5 rounded"
                          style={{ backgroundColor: catStyle.bg, color: catStyle.text, border: `1px solid ${catStyle.border}` }}
                        >
                          {reg.category}
                        </span>
                      </td>

                      {/* Revision */}
                      <td className="px-3 py-3 text-center">
                        <span className="text-xs text-gray-500">{reg.rev}</span>
                      </td>

                      {/* Format icon */}
                      <td className="px-3 py-3 text-center">
                        {reg.format === "xlsx" ? (
                          <div className="flex items-center justify-center gap-1">
                            <FileSpreadsheet size={14} className="text-green-600" />
                            <span className="text-xs text-green-700 font-medium">XLSX</span>
                          </div>
                        ) : reg.format === "sheet" ? (
                          <div className="flex items-center justify-center gap-1">
                            <FileSpreadsheet size={14} className="text-emerald-600" />
                            <span className="text-xs text-emerald-700 font-medium">SHEET</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-1">
                            <FileSpreadsheet size={14} className="text-blue-600" />
                            <span className="text-xs text-blue-700 font-medium">DOCX</span>
                          </div>
                        )}
                      </td>

                      {/* Owner */}
                      <td className="px-3 py-3 text-center">
                        <span className="text-xs text-gray-500">{reg.owner ?? "—"}</span>
                      </td>

                      {/* Actions */}
                      <td className="px-3 py-3 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {/* Preview — all logged-in users */}
                          <button
                            onClick={() => setPreview(reg)}
                            className="text-xs px-2.5 py-1 rounded font-medium transition-all hover:opacity-80"
                            style={{ backgroundColor: "#e8edf4", color: "#081C2E", border: "1px solid #dde3ec" }}
                            title="Preview"
                          >
                            Preview
                          </button>

                          {/* Open in Drive — admin and supervisor only.
                              Per-form submission registers without a
                              provisioned fileId render as disabled. */}
                          {canOpenDrive && (reg.driveUrl ? (
                            <a
                              href={reg.driveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs px-2.5 py-1 rounded font-medium flex items-center gap-1 transition-all hover:opacity-80"
                              style={{ backgroundColor: "#C49A28", color: "white" }}
                              title="Open in Google Drive"
                            >
                              <ExternalLink size={11} />
                              Open
                            </a>
                          ) : (
                            <span
                              className="text-xs px-2.5 py-1 rounded font-medium flex items-center gap-1"
                              style={{ backgroundColor: "#e8edf4", color: "#9ca3af", border: "1px solid #dde3ec" }}
                              title="Not yet provisioned — run scripts/create-registers.mjs"
                            >
                              Pending
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Access notice for field workers */}
        {isAuthenticated && !canOpenDrive && (
          <div
            className="mt-4 rounded border p-3 text-xs"
            style={{ backgroundColor: "#fffbf0", borderColor: "#f0d98a", color: "#5a4a1a" }}
          >
            <span className="font-bold">Access Notice:</span> Live register files are available to supervisors and administrators only.
            Contact your supervisor or the HSE Manager to access or update any register.
          </div>
        )}
      </div>

      {/* ── Preview Modal ── */}
      {preview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
          onClick={() => setPreview(null)}
        >
          <div
            className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal header */}
            <div
              className="flex items-start justify-between p-4 sticky top-0 z-10"
              style={{ backgroundColor: "#081C2E", borderRadius: "8px 8px 0 0" }}
            >
              <div>
                <div className="text-xs font-mono font-bold" style={{ color: "#C49A28" }}>{preview.code}</div>
                <div className="text-white font-bold text-base mt-0.5">{preview.title}</div>
                <div className="text-white/50 text-xs mt-0.5">{preview.rev} · {preview.format.toUpperCase()} · {preview.department}</div>
              </div>
              <button
                onClick={() => setPreview(null)}
                className="text-white/60 hover:text-white transition-colors ml-4 flex-shrink-0"
              >
                <X size={20} />
              </button>
            </div>

            {/* Metadata strip */}
            {(preview.standard || preview.purpose || preview.owner) && (
              <div className="px-5 py-3 border-b text-xs" style={{ backgroundColor: "#f8fafc", borderColor: "#edf0f5" }}>
                {preview.owner && (
                  <div className="mb-1"><span className="font-semibold text-gray-600">Owner:</span> <span className="text-gray-700">{preview.owner}</span></div>
                )}
                {preview.standard && (
                  <div className="mb-1"><span className="font-semibold text-gray-600">Standard:</span> <span className="text-gray-700">{preview.standard}</span></div>
                )}
                {preview.purpose && (
                  <div><span className="font-semibold text-gray-600">Purpose:</span> <span className="text-gray-700">{preview.purpose}</span></div>
                )}
              </div>
            )}

            {/* Preview image */}
            <div className="p-5">
              {preview.previewUrl ? (
                <img
                  src={preview.previewUrl}
                  alt={`Preview of ${preview.title}`}
                  className="w-full rounded border"
                  style={{ borderColor: "#dde3ec" }}
                />
              ) : (
                <div
                  className="flex flex-col items-center justify-center py-16 rounded border"
                  style={{ backgroundColor: "#f4f6f9", borderColor: "#dde3ec" }}
                >
                  {preview.format === "xlsx" ? (
                    <FileSpreadsheet size={48} className="text-green-400 mb-3" />
                  ) : (
                    <FileSpreadsheet size={48} className="text-green-400 mb-3" />
                  )}
                  <div className="text-sm font-medium text-gray-500">Preview not yet available</div>
                  <div className="text-xs text-gray-400 mt-1">Open the file in Google Drive to view its contents</div>
                </div>
              )}
            </div>

            {/* Modal footer */}
            <div className="px-5 pb-5 flex items-center justify-between">
              <span className="text-xs text-gray-400">
                {preview.previewUrl ? "Screenshot preview — open in Drive for live data" : "No preview available"}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setPreview(null)}
                  className="text-xs px-3 py-1.5 rounded font-medium"
                  style={{ backgroundColor: "#e8edf4", color: "#081C2E", border: "1px solid #dde3ec" }}
                >
                  Close
                </button>
                {canOpenDrive && (
                  <a
                    href={preview.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded font-medium flex items-center gap-1.5"
                    style={{ backgroundColor: "#C49A28", color: "white" }}
                  >
                    <ExternalLink size={12} />
                    Open in Google Drive
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
