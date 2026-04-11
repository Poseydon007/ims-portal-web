// Design: Clean Light Corporate — navy #081C2E, gold #C49A28
// Landing page: stats banner + 7 category cards in responsive grid

import { Link } from "wouter";
import Layout from "@/components/Layout";
import { categories } from "@/lib/imsData";

const categoryIcons: Record<string, string> = {
  FRM: "📋",
  PROC: "⚙️",
  REG: "📊",
  SOP: "📌",
  REF: "📎",
  POL: "🏛️",
  PLN: "🗺️",
};

const totalDocs = categories.reduce((sum, c) => sum + c.count, 0);

export default function Home() {
  return (
    <Layout>
      {/* ── Hero Banner ── */}
      <div
        style={{ backgroundColor: "#081C2E" }}
        className="relative overflow-hidden"
      >
        {/* Decorative gold line */}
        <div
          style={{ backgroundColor: "#C49A28", height: "1px", opacity: 0.3 }}
          className="absolute bottom-0 left-0 right-0"
        />
        <div className="container py-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div
                style={{ color: "#C49A28" }}
                className="text-xs font-bold tracking-[0.2em] uppercase mb-2"
              >
                Integrated Management System
              </div>
              <h1 className="text-white text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
                IMS Document Portal
              </h1>
              <p className="text-white/55 text-sm mt-3 max-w-xl leading-relaxed">
                The central repository for all controlled documents of True East Mining Company.
                All documents are version-controlled, approved, and maintained in accordance with
                ISO 9001, ISO 14001, and ISO 45001 standards.
              </p>
            </div>
            {/* Stats */}
            <div className="flex gap-6 shrink-0">
              <div className="text-center">
                <div className="text-white text-3xl font-extrabold" style={{ color: "#C49A28" }}>
                  {totalDocs}
                </div>
                <div className="text-white/50 text-xs mt-1 tracking-wide uppercase">Total Docs</div>
              </div>
              <div className="text-center">
                <div className="text-white text-3xl font-extrabold" style={{ color: "#C49A28" }}>
                  {categories.length}
                </div>
                <div className="text-white/50 text-xs mt-1 tracking-wide uppercase">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-white text-3xl font-extrabold" style={{ color: "#C49A28" }}>
                  3
                </div>
                <div className="text-white/50 text-xs mt-1 tracking-wide uppercase">ISO Standards</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── ISO Standards Strip ── */}
      <div
        style={{ backgroundColor: "#f4f6f9", borderBottom: "1px solid #dde3ec" }}
        className="py-3"
      >
        <div className="container flex flex-wrap items-center gap-4">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#8a9ab0" }}>
            Aligned Standards:
          </span>
          {["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "KSA Mining Investment Law", "MHRSD OHS Regulations"].map((s) => (
            <span
              key={s}
              className="text-xs font-medium px-2.5 py-1 rounded"
              style={{ backgroundColor: "#e8edf4", color: "#081C2E" }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* ── Category Cards ── */}
      <div className="container py-10">
        <div className="mb-6">
          <h2 className="text-lg font-bold" style={{ color: "#081C2E" }}>
            Document Categories
          </h2>
          <p className="text-sm mt-1" style={{ color: "#6b7a8d" }}>
            Select a category to browse all documents in that group.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.code}
              href={`/docs/${cat.slug}`}
              className="group block no-underline"
            >
              <div
                className="h-full rounded border bg-white transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-lg"
                style={{ borderColor: "#dde3ec" }}
              >
                {/* Card top accent */}
                <div
                  style={{ backgroundColor: "#081C2E", height: "3px", borderRadius: "4px 4px 0 0" }}
                />
                <div className="p-5">
                  {/* Code badge */}
                  <div className="flex items-start justify-between mb-3">
                    <span
                      className="te-code text-xs font-bold px-2 py-1 rounded"
                      style={{ backgroundColor: "#e8edf4", color: "#081C2E" }}
                    >
                      {cat.code}
                    </span>
                    <span
                      className="text-2xl font-extrabold"
                      style={{ color: "#C49A28" }}
                    >
                      {cat.count}
                    </span>
                  </div>
                  {/* Title */}
                  <h3
                    className="font-bold text-sm leading-snug mb-1.5 group-hover:underline"
                    style={{ color: "#081C2E" }}
                  >
                    {cat.name}
                  </h3>
                  {/* Description */}
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7a8d" }}>
                    {cat.description}
                  </p>
                  {/* Footer link */}
                  <div
                    className="mt-4 pt-3 flex items-center justify-between text-xs font-semibold"
                    style={{ borderTop: "1px solid #edf0f5", color: "#C49A28" }}
                  >
                    <span>Browse documents</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Document Control Notice ── */}
      <div className="container pb-10">
        <div
          className="rounded border p-4 text-xs leading-relaxed"
          style={{ backgroundColor: "#fffbf0", borderColor: "#f0d98a", color: "#5a4a1a" }}
        >
          <span className="font-bold">Document Control Notice:</span> All documents in this portal
          are controlled under the True East Mining Company Integrated Management System. Printed
          copies are uncontrolled. Always refer to this portal for the current approved version.
          For document requests or submissions, contact the Management Representative.
        </div>
      </div>
    </Layout>
  );
}
