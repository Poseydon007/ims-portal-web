// Public demo / tour mode — no login required.
// Showcases the IMS portal to prospective clients and visitors:
//   - Branded landing
//   - High-level pillars (Documents, Forms, Education, Registers)
//   - Sample doc previews (POL/PLN tiles open the existing public-safe docs
//     using the same in-app routes — visitors land on real content)
//   - "Sign in" CTA in every section
//
// No portal data is exposed: no submissions, no users, no live registers.
// Forms tile is a screenshot/illustration only — clicking it nudges to login.
import { Link } from "wouter";
import { LOGO_WHITE } from "@/lib/imsData";

const NAVY = "#081C2E";
const GOLD = "#C49A28";

function Pillar({
  icon, title, blurb, href, ctaLabel,
}: {
  icon: string; title: string; blurb: string; href?: string; ctaLabel: string;
}) {
  const Card = (
    <div
      className="rounded-lg p-6 h-full flex flex-col gap-3 transition-all hover:scale-[1.02]"
      style={{
        backgroundColor: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="text-3xl">{icon}</div>
      <h3 className="text-white font-bold text-base">{title}</h3>
      <p className="text-white/60 text-sm leading-relaxed flex-1">{blurb}</p>
      <div
        className="text-xs font-bold uppercase tracking-wider mt-auto"
        style={{ color: GOLD }}
      >
        {ctaLabel} →
      </div>
    </div>
  );
  return href ? <Link href={href}>{Card}</Link> : Card;
}

export default function Demo() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: NAVY }}>
      {/* Navbar */}
      <div
        className="border-b"
        style={{
          backgroundColor: "rgba(0,0,0,0.2)",
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        <div className="container py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={LOGO_WHITE} alt="True East" style={{ height: 32 }} />
            <div>
              <div className="text-white font-bold text-sm leading-none">
                True East Mining Company
              </div>
              <div className="text-white/40 text-[10px] tracking-widest uppercase mt-0.5">
                IMS Portal · Public Tour
              </div>
            </div>
          </div>
          <Link href="/login">
            <span
              className="inline-block px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider cursor-pointer"
              style={{ backgroundColor: GOLD, color: NAVY }}
            >
              Sign In
            </span>
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="container py-16 text-center">
        <div
          className="text-xs font-bold tracking-[0.3em] uppercase mb-3"
          style={{ color: GOLD }}
        >
          Integrated Management System
        </div>
        <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
          Audit-grade safety, ops & compliance —
          <br />
          built into one portal.
        </h1>
        <p className="text-white/60 text-base max-w-2xl mx-auto leading-relaxed">
          53 controlled forms, 63 governance documents, 16 live registers,
          structured training — all version-controlled, role-gated, and
          aligned to ISO 9001 / 14001 / 45001.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/login">
            <span
              className="inline-block px-6 py-3 rounded text-sm font-bold uppercase tracking-wider cursor-pointer"
              style={{ backgroundColor: GOLD, color: NAVY }}
            >
              Sign In to the Portal
            </span>
          </Link>
          <a
            href="#tour"
            className="inline-block px-6 py-3 rounded text-sm font-bold uppercase tracking-wider"
            style={{
              border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.8)",
            }}
          >
            Take the tour
          </a>
        </div>
      </div>

      {/* Stats strip */}
      <div
        className="border-y"
        style={{
          backgroundColor: "rgba(255,255,255,0.03)",
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        <div className="container py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: "53", label: "Fillable Forms" },
            { n: "63", label: "Governance Docs" },
            { n: "68", label: "Registers & Logs" },
            { n: "3", label: "ISO Standards Aligned" },
          ].map((s) => (
            <div key={s.label}>
              <div
                className="text-3xl font-extrabold"
                style={{ color: GOLD }}
              >
                {s.n}
              </div>
              <div className="text-xs uppercase tracking-widest text-white/50 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pillars */}
      <div id="tour" className="container py-16">
        <div className="text-center mb-10">
          <div
            className="text-xs font-bold tracking-[0.2em] uppercase mb-2"
            style={{ color: GOLD }}
          >
            What's inside
          </div>
          <h2 className="text-white text-2xl md:text-3xl font-extrabold">
            Four pillars, one source of truth
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Pillar
            icon="📜"
            title="Documents"
            blurb="Policies, procedures, plans, SOPs, and reference material — all live, all version-controlled, all browsable."
            href="/docs/pol"
            ctaLabel="Browse a sample"
          />
          <Pillar
            icon="📝"
            title="Forms"
            blurb="53 fillable forms covering HSE, ops, maintenance, and admin — every submission is auto-numbered and routed for approval."
            href="/login"
            ctaLabel="Sign in to access"
          />
          <Pillar
            icon="🎓"
            title="Education"
            blurb="Structured training across HSE, IMS, ops, equipment, and regulatory topics — videos, manuals, and competency tracking."
            href="/education"
            ctaLabel="Preview topics"
          />
          <Pillar
            icon="📊"
            title="Registers"
            blurb="Live Google-Sheet-backed registers — every form submission appends a row in real time. Audit-ready by default."
            href="/login"
            ctaLabel="Sign in to view"
          />
        </div>
      </div>

      {/* Why */}
      <div
        className="border-t"
        style={{
          backgroundColor: "rgba(255,255,255,0.03)",
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                t: "Audit-ready",
                b: "Every action — submission, approval, edit — is logged with timestamp + actor + role. ISO auditors can verify the audit trail without leaving the portal.",
              },
              {
                t: "Role-aware",
                b: "Six roles (admin, HSE manager, supervisor, user, auditor, client) each see exactly what they should — no more, no less. External auditors get read-only sign-in via magic links.",
              },
              {
                t: "Live data",
                b: "Submissions auto-write to per-form Google Sheets. Approvals update status in real time. Email notifications fire to the right people automatically.",
              },
            ].map((item) => (
              <div key={item.t}>
                <div
                  className="text-xs font-bold tracking-widest uppercase mb-2"
                  style={{ color: GOLD }}
                >
                  {item.t}
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="container py-16 text-center">
        <h3 className="text-white text-xl font-bold mb-3">
          Ready to see the live portal?
        </h3>
        <p className="text-white/55 text-sm mb-6 max-w-md mx-auto">
          Sign in with your company credentials, or contact True East to
          arrange auditor / client access via secure magic-link.
        </p>
        <Link href="/login">
          <span
            className="inline-block px-8 py-3 rounded text-sm font-bold uppercase tracking-wider cursor-pointer"
            style={{ backgroundColor: GOLD, color: NAVY }}
          >
            Sign In
          </span>
        </Link>
      </div>

      {/* Footer */}
      <div
        className="border-t py-6"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="container text-center text-xs text-white/30">
          True East Mining Company · Integrated Management System ·
          Tour Mode (no login required) · Submissions, registers, and
          training data require authenticated access.
        </div>
      </div>
    </div>
  );
}
