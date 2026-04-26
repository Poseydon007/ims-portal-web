// Design: Clean Light Corporate — navy #081C2E, gold #C49A28
// Landing page: hero + 4-stat animated banner + 7 category cards

import { Link, useLocation } from "wouter";
import { useEffect, useRef, useState } from "react";
import Layout from "@/components/Layout";
import { categories } from "@/lib/imsData";
import { useImsAuth } from "@/hooks/useImsAuth";
import { can, type Role } from "@shared/permissions";

const totalDocs = categories.reduce((sum, c) => sum + c.count, 0);

// ── Animated counter hook ──
function useCountUp(target: number | null, duration = 1200) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (target === null) return;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [target, duration]);

  return value;
}

// ── Single stat item ──
interface StatProps {
  value: string | number;
  label: string;
  animate?: boolean;
  delay?: number;
}

function StatItem({ value, label, animate = false, delay = 0 }: StatProps) {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTimeout(() => setTriggered(true), delay); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  const numericTarget = animate && typeof value === "number" ? (triggered ? value : null) : null;
  const counted = useCountUp(numericTarget);
  const display = animate && typeof value === "number" ? counted : value;

  return (
    <div ref={ref} className="text-center px-4 py-0.5">
      <div
        className="text-xl md:text-2xl font-extrabold tabular-nums transition-all"
        style={{ color: "#C49A28", fontFamily: "'Nunito Sans', sans-serif" }}
      >
        {display}
      </div>
      <div
        className="text-[10px] mt-1 tracking-widest uppercase font-semibold"
        style={{ color: "rgba(255,255,255,0.45)" }}
      >
        {label}
      </div>
    </div>
  );
}

export default function Home() {
  const { isAuthenticated, loading, user } = useImsAuth();
  const [, navigate] = useLocation();
  const role = (user?.role ?? "field_worker") as Role;
  // Client: hide FRM (no form catalog) and REG (no register access). Other roles
  // see every tile. Auditor sees everything normally (read-only enforced inside).
  const visibleCategories = categories.filter((c) => {
    if (role === "client") {
      if (c.slug === "frm") return false;            // FRM tile entirely hidden
      if (c.slug === "reg") return false;            // REG hidden
    }
    return true;
  });
  const isClient = role === "client";

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate("/login");
    }
  }, [loading, isAuthenticated, navigate]);

  if (loading || !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#081C2E" }}>
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-t-transparent rounded-full animate-spin" style={{ borderColor: "#C49A28", borderTopColor: "transparent" }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      {/* ── Hero Banner ── */}
      <div
        style={{ backgroundColor: "#081C2E" }}
        className="relative overflow-hidden"
      >
        {/* Watermark logo */}
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663473952399/3YVZojsY2rei5QwThHiV6E/trueeastlogotransback_aaedc603.png"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none select-none"
          style={{ width: "360px", opacity: 0.08, right: "-20px", top: "50%", transform: "translateY(-50%)" }}
        />
        <div className="container pt-10 pb-6 relative z-10">
          <div className="flex flex-col gap-4">
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
          </div>
        </div>

        {/* ── Stats Bar ── */}
        <div
          style={{ borderTop: "1px solid rgba(196,154,40,0.2)", borderBottom: "1px solid rgba(196,154,40,0.2)" }}
          className="mt-2"
        >
          <div className="container">
            <div className="flex flex-wrap justify-start md:justify-between divide-x divide-white/10 py-1">
              <StatItem value={totalDocs} label="Total Documents" animate delay={0} />
              <StatItem value={categories.length} label="Categories" animate delay={100} />
              <StatItem value="Rev01" label="Current Revision" />
              <StatItem value="Apr 2026" label="Last Updated" />
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
          {visibleCategories.map((cat) => (
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
                    <span className="flex items-center gap-1.5">
                      <span
                        className="te-code text-xs font-bold px-2 py-1 rounded"
                        style={{ backgroundColor: "#e8edf4", color: "#081C2E" }}
                      >
                        {cat.code}
                      </span>
                      {/* Client tour-mode marker on document categories */}
                      {isClient && (
                        <span
                          className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-[1px] rounded"
                          style={{ backgroundColor: "rgba(196,154,40,0.15)", color: "#9a7a10", border: "1px solid rgba(196,154,40,0.3)" }}
                          title="Preview only — full content available with internal access"
                        >
                          Preview
                        </span>
                      )}
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
