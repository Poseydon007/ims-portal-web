// Design: Clean Light Corporate — navy #081C2E, gold #C49A28
// Level 2: Document list table for a given category
// REG category gets a rich view with CAT badge, FORMAT, OWNER, Preview, Open buttons

import { Link, useLocation, useParams } from "wouter";
import Layout from "@/components/Layout";
import { Breadcrumb } from "@/components/Layout";
import { categories, documentsByCategory, ImsDocument } from "@/lib/imsData";
import { useImsAuth } from "@/hooks/useImsAuth";
import { ExternalLink, FileSpreadsheet, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { can, type Role } from "@shared/permissions";

const statusBadge = (status: ImsDocument["status"]) => {
  if (status === "approved") {
    return (
      <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: "#d4edda", color: "#155724" }}>
        Approved
      </span>
    );
  }
  if (status === "draft") {
    return (
      <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: "#fff3cd", color: "#856404" }}>
        Draft
      </span>
    );
  }
  return (
    <span className="text-xs font-medium px-2 py-0.5 rounded" style={{ backgroundColor: "#e8edf4", color: "#6b7a8d" }}>
      Pending
    </span>
  );
};

// Extract sub-category from code e.g. TE-IMS-REG-HSE-001 → HSE
function getCatBadge(code: string) {
  const parts = code.split("-");
  // TE-IMS-REG-HSE-001 → index 3 is HSE
  return parts.length >= 4 ? parts[3] : "";
}

const CAT_COLORS: Record<string, { bg: string; color: string }> = {
  HSE: { bg: "rgba(220,53,69,0.12)", color: "#c0392b" },
  SYS: { bg: "rgba(8,28,46,0.12)", color: "#081C2E" },
  LOG: { bg: "rgba(52,152,219,0.12)", color: "#1a6fa8" },
  MAINT: { bg: "rgba(155,89,182,0.12)", color: "#7d3c98" },
  TRN: { bg: "rgba(39,174,96,0.12)", color: "#1e8449" },
  GOV: { bg: "rgba(196,154,40,0.15)", color: "#9a7a10" },
  REF: { bg: "rgba(127,140,141,0.15)", color: "#566573" },
};

function FormatBadge({ format }: { format?: string }) {
  if (!format) return <span className="text-xs" style={{ color: "#c0c8d4" }}>—</span>;
  // SHEET (live Google Sheet) and XLSX both render as spreadsheet badges,
  // SHEET in a distinct teal so users can tell live registers apart from xlsx.
  const isXlsx  = format === "XLSX";
  const isSheet = format === "SHEET";
  const isSpreadsheet = isXlsx || isSheet;
  const bg    = isSheet ? "rgba(20,184,166,0.14)" : isXlsx ? "rgba(39,174,96,0.12)" : "rgba(52,152,219,0.12)";
  const color = isSheet ? "#0f766e"               : isXlsx ? "#1e8449"               : "#1a6fa8";
  return (
    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded"
      style={{ backgroundColor: bg, color }}>
      {isSpreadsheet ? <FileSpreadsheet size={11} /> : <FileText size={11} />}
      {format}
    </span>
  );
}

// Rich REG category view
function RegCategoryView({ docs, canOpenDrive, canViewRegister }: { docs: ImsDocument[]; canOpenDrive: boolean; canViewRegister: boolean }) {
  const [search, setSearch] = useState("");
  const [catFilter, setCatFilter] = useState("All");

  const catOptions = ["All", ...Array.from(new Set(docs.map(d => getCatBadge(d.code)))).sort()];

  const filtered = docs.filter(d => {
    const matchSearch = search === "" ||
      d.title.toLowerCase().includes(search.toLowerCase()) ||
      d.code.toLowerCase().includes(search.toLowerCase());
    const matchCat = catFilter === "All" || getCatBadge(d.code) === catFilter;
    return matchSearch && matchCat;
  });

  // Count spreadsheets = XLSX + SHEET (live Google Sheet registers).
  const spreadsheetCount = docs.filter(d => d.format === "XLSX" || d.format === "SHEET").length;
  const docxCount = docs.filter(d => d.format === "DOCX").length;

  return (
    <div className="container py-8">
      {/* Back nav */}
      <div className="mb-4">
        <Link href="/" className="text-xs font-semibold hover:underline flex items-center gap-1" style={{ color: "#C49A28" }}>
          ← Portal Home
        </Link>
      </div>

      {/* Stats bar */}
      <div className="flex flex-wrap gap-6 mb-6">
        <div className="text-center">
          <div className="text-2xl font-extrabold" style={{ color: "#C49A28" }}>{docs.length}</div>
          <div className="text-xs tracking-widest uppercase font-semibold mt-0.5" style={{ color: "#8a9ab0" }}>Total Registers</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-extrabold" style={{ color: "#1e8449" }}>{spreadsheetCount}</div>
          <div className="text-xs tracking-widest uppercase font-semibold mt-0.5" style={{ color: "#8a9ab0" }}>Spreadsheets</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-extrabold" style={{ color: "#1a6fa8" }}>{docxCount}</div>
          <div className="text-xs tracking-widest uppercase font-semibold mt-0.5" style={{ color: "#8a9ab0" }}>Word Docs</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-extrabold" style={{ color: "#081C2E" }}>{catOptions.length - 1}</div>
          <div className="text-xs tracking-widest uppercase font-semibold mt-0.5" style={{ color: "#8a9ab0" }}>Categories</div>
        </div>
      </div>

      {/* Search + filter */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <input
          type="text"
          placeholder="Search by code or title..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="text-sm px-3 py-2 rounded border outline-none focus:ring-2"
          style={{ borderColor: "#dde3ec", minWidth: 220, color: "#081C2E" }}
        />
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-semibold" style={{ color: "#8a9ab0" }}>Category:</span>
          {catOptions.map(opt => (
            <button
              key={opt}
              onClick={() => setCatFilter(opt)}
              className="text-xs font-bold px-3 py-1 rounded transition-all"
              style={{
                backgroundColor: catFilter === opt ? "#081C2E" : "#e8edf4",
                color: catFilter === opt ? "#fff" : "#081C2E",
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="rounded border overflow-hidden" style={{ borderColor: "#dde3ec" }}>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr style={{ backgroundColor: "#081C2E" }}>
              <th className="text-left px-4 py-3 text-xs font-bold tracking-widest uppercase text-white/70 whitespace-nowrap">Document Code</th>
              <th className="text-left px-4 py-3 text-xs font-bold tracking-widest uppercase text-white/70">Title</th>
              <th className="text-center px-3 py-3 text-xs font-bold tracking-widest uppercase text-white/70 w-16">Cat.</th>
              <th className="text-center px-3 py-3 text-xs font-bold tracking-widest uppercase text-white/70 w-16">Rev.</th>
              <th className="text-center px-3 py-3 text-xs font-bold tracking-widest uppercase text-white/70 w-24">Format</th>
              <th className="text-left px-3 py-3 text-xs font-bold tracking-widest uppercase text-white/70 w-36">Owner</th>
              <th className="text-center px-4 py-3 text-xs font-bold tracking-widest uppercase text-white/70 w-32">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((doc, i) => {
              const cat = getCatBadge(doc.code);
              const catStyle = CAT_COLORS[cat] ?? { bg: "rgba(8,28,46,0.08)", color: "#081C2E" };
              return (
                <tr
                  key={doc.code}
                  className="transition-colors hover:bg-blue-50/40"
                  style={{ borderTop: i > 0 ? "1px solid #edf0f5" : undefined }}
                >
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="te-code text-xs font-mono" style={{ color: "#081C2E" }}>{doc.code}</span>
                  </td>
                  <td className="px-4 py-3">
                    {(canOpenDrive || canViewRegister) && doc.driveUrl ? (
                      <a
                        href={doc.driveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium hover:underline flex items-center gap-1 group"
                        style={{ color: "#081C2E" }}
                      >
                        {doc.title}
                        <ExternalLink size={11} className="opacity-0 group-hover:opacity-60 flex-shrink-0" style={{ color: "#C49A28" }} />
                      </a>
                    ) : (
                      <span style={{ color: "#081C2E" }}>{doc.title}</span>
                    )}
                  </td>
                  <td className="px-3 py-3 text-center">
                    <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: catStyle.bg, color: catStyle.color }}>
                      {cat}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-center">
                    <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>{doc.rev}</span>
                  </td>
                  <td className="px-3 py-3 text-center">
                    <FormatBadge format={doc.format} />
                  </td>
                  <td className="px-3 py-3 text-xs" style={{ color: "#6b7a8d" }}>
                    {doc.owner ?? "—"}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {canOpenDrive && doc.driveUrl ? (
                      <a
                        href={doc.driveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded transition-colors whitespace-nowrap hover:opacity-80"
                        style={{ backgroundColor: "#C49A28", color: "white" }}
                      >
                        <ExternalLink size={11} />
                        Open
                      </a>
                    ) : canViewRegister && doc.driveUrl ? (
                      <a
                        href={doc.driveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded transition-colors whitespace-nowrap hover:opacity-80"
                        style={{ border: "1.5px solid #081C2E", color: "#081C2E", backgroundColor: "transparent" }}
                      >
                        <ExternalLink size={11} />
                        View
                      </a>
                    ) : (
                      <span className="text-xs" style={{ color: "#c0c8d4" }}>—</span>
                    )}
                  </td>
                </tr>
              );
            })}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-sm" style={{ color: "#8a9ab0" }}>
                  No registers match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <p className="text-xs mt-3" style={{ color: "#8a9ab0" }}>
        {canOpenDrive
          ? "Click any title or the Open button to access the live file in Google Drive (edit access)."
          : canViewRegister
          ? "Click any title or the View button to open the register in read-only mode."
          : "Contact your supervisor or administrator to access register files."}
      </p>
    </div>
  );
}

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const cat = categories.find((c) => c.slug === slug);
  const docs = documentsByCategory[slug ?? ""] ?? [];
  const { user, isAuthenticated } = useImsAuth();
  const role = (user?.role ?? "field_worker") as Role;
  const canOpenDrive = isAuthenticated && can.editRegister(role);
  // Auditors + internal staff can view registers read-only via the Drive link
  // (sheets are shared "anyone with link → reader").
  const canViewRegister = isAuthenticated && role !== "client";

  // Client redirect: FRM and REG are out of scope for clients. Bounce home with toast.
  const [, navigate] = useLocation();
  useEffect(() => {
    if (!isAuthenticated || !user) return;
    if (role !== "client") return;
    if (slug === "frm") {
      toast.error("Forms not available in your view");
      navigate("/", { replace: true });
    } else if (slug === "reg") {
      toast.error("Registers not available in your view");
      navigate("/", { replace: true });
    }
  }, [role, slug, isAuthenticated, user, navigate]);

  if (!cat) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <p className="text-lg font-semibold" style={{ color: "#081C2E" }}>
            Category not found.
          </p>
          <Link href="/" style={{ color: "#C49A28" }} className="text-sm mt-2 inline-block hover:underline">
            ← Back to portal home
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Breadcrumb items={[{ label: `${cat.code} — ${cat.name}` }]} />

      {/* Page header */}
      <div style={{ backgroundColor: "#081C2E" }} className="relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full flex items-center pr-8 pointer-events-none select-none" style={{ opacity: 0.06 }}>
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663473952399/3YVZojsY2rei5QwThHiV6E/trueeastlogoWHITE_79ded02e.png" alt="" className="h-32 w-auto" />
        </div>
        <div className="container py-8 relative z-10">
          <div className="flex items-start gap-4">
            <span
              className="te-code text-sm font-bold px-3 py-1.5 rounded shrink-0 mt-0.5"
              style={{ backgroundColor: "rgba(196,154,40,0.2)", color: "#C49A28" }}
            >
              {cat.code}
            </span>
            <div>
              <h1 className="text-white text-2xl font-bold tracking-tight">{cat.name}</h1>
              <p className="text-white/55 text-sm mt-1 max-w-2xl leading-relaxed">{cat.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* REG gets rich view; all other categories get standard table */}
      {slug === "reg" ? (
        <RegCategoryView docs={docs} canOpenDrive={canOpenDrive} canViewRegister={canViewRegister} />
      ) : (
        <div className="container py-8">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm" style={{ color: "#6b7a8d" }}>
              Showing <strong style={{ color: "#081C2E" }}>{docs.length}</strong> documents in this category
            </p>
            <Link href="/" className="text-xs font-semibold hover:underline" style={{ color: "#C49A28" }}>
              ← Portal Home
            </Link>
          </div>

          <div className="rounded border overflow-hidden" style={{ borderColor: "#dde3ec" }}>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#081C2E" }}>
                  <th className="text-left px-4 py-3 text-xs font-bold tracking-widest uppercase text-white/70 whitespace-nowrap">
                    Document Code
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-bold tracking-widest uppercase text-white/70">
                    Title
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-bold tracking-widest uppercase text-white/70 w-20">
                    Rev
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-bold tracking-widest uppercase text-white/70 w-28">
                    Date
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-bold tracking-widest uppercase text-white/70 w-28">
                    Status
                  </th>
                  <th className="text-center px-4 py-3 text-xs font-bold tracking-widest uppercase text-white/70 w-24">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {docs.map((doc, i) => (
                  <tr
                    key={doc.code}
                    className="transition-colors hover:bg-blue-50/40"
                    style={{ borderTop: i > 0 ? "1px solid #edf0f5" : undefined }}
                  >
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="te-code text-xs" style={{ color: "#081C2E" }}>
                        {doc.code}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      {doc.available ? (
                        <Link
                          href={doc.formUrl ?? doc.viewUrl ?? `/docs/${slug}/${doc.slug}`}
                          className="font-medium hover:underline"
                          style={{ color: "#081C2E" }}
                        >
                          {doc.title}
                        </Link>
                      ) : canOpenDrive && doc.driveUrl ? (
                        <a
                          href={doc.driveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium hover:underline flex items-center gap-1 group"
                          style={{ color: "#081C2E" }}
                        >
                          {doc.title}
                          <ExternalLink size={12} className="opacity-0 group-hover:opacity-60 flex-shrink-0" style={{ color: "#C49A28" }} />
                        </a>
                      ) : (
                        <span className={doc.driveUrl ? "" : "italic"} style={{ color: doc.driveUrl ? "#081C2E" : "#8a9ab0" }}>
                          {doc.title}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>
                        {doc.rev}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs" style={{ color: "#6b7a8d" }}>
                      {doc.date}
                    </td>
                    <td className="px-4 py-3">{statusBadge(doc.status)}</td>
                    <td className="px-4 py-3 text-center">
                      {doc.formUrl ? (
                        <Link
                          href={doc.formUrl}
                          className="inline-block text-xs font-bold px-3 py-1.5 rounded transition-colors whitespace-nowrap"
                          style={{ backgroundColor: "#C49A28", color: "#081C2E" }}
                        >
                          Fill Form ✎
                        </Link>
                      ) : doc.available ? (
                        <Link
                          href={doc.viewUrl ?? `/docs/${slug}/${doc.slug}`}
                          className="inline-block text-xs font-bold px-3 py-1.5 rounded transition-colors whitespace-nowrap"
                          style={{ backgroundColor: "#081C2E", color: "#fff" }}
                        >
                          View →
                        </Link>
                      ) : canOpenDrive && doc.driveUrl ? (
                        <a
                          href={doc.driveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded transition-colors whitespace-nowrap hover:opacity-80"
                          style={{ backgroundColor: "#C49A28", color: "white" }}
                        >
                          <ExternalLink size={11} />
                          Open
                        </a>
                      ) : (
                        <span className="text-xs" style={{ color: "#c0c8d4" }}>—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </Layout>
  );
}
