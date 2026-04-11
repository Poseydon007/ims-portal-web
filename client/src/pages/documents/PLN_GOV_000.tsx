// TE-IMS-PLN-GOV-000_Rev01 — IMS Playbook: Foundation Document
// Content: Exact approved text from Rev01 DOCX — no modifications to content
// Design: TE navy #081C2E, gold #C49A28, clean structured layout with sidebar TOC

import { useState } from "react";
import { Wrench, UserPlus, ClipboardCheck, BarChart3 } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { LOGO_WHITE } from "@/lib/imsData";

const NAVY = "#081C2E";
const GOLD = "#C49A28";
const LIGHT_BG = "#f4f6f9";
const BORDER = "#dde3ec";
const TEXT_BODY = "#2d3748";
const TEXT_MUTED = "#6b7a8d";
const TEXT_LABEL = "#8a9ab0";

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-start gap-3 mb-4">
      <div
        className="flex-shrink-0 w-8 h-8 rounded flex items-center justify-center text-xs font-extrabold"
        style={{ backgroundColor: NAVY, color: GOLD }}
      >
        {number}
      </div>
      <h2 className="text-base font-extrabold leading-tight pt-1" style={{ color: NAVY }}>
        {title}
      </h2>
    </div>
  );
}

const EXPERIENCE_ITEMS = [
  {
    icon: <Wrench className="w-5 h-5" style={{ color: GOLD }} />,
    label: "On the rig at 2 a.m.",
    text: "A driller identifies a high-risk task → opens the relevant Level 3 SOP → executes safely using the Level 4 checklist.",
  },
  {
    icon: <UserPlus className="w-5 h-5" style={{ color: GOLD }} />,
    label: "A new employee",
    text: "Reads this Foundation Playbook during their induction → understands the corporate culture → completes their mandatory Pillar 2 (People & Capability) training.",
  },
  {
    icon: <ClipboardCheck className="w-5 h-5" style={{ color: GOLD }} />,
    label: "An Auditor / Ma'aden Inspector",
    text: "Starts with this exact document → navigates the 8-pillar tree → experiences 100% full traceability and compliance.",
  },
  {
    icon: <BarChart3 className="w-5 h-5" style={{ color: GOLD }} />,
    label: "Executive Management",
    text: "Opens Pillar 8 (Performance & Learning) → reviews real-time KPIs → tracks audit findings → drives strategic, continual improvement actions.",
  },
];

const TOC_ITEMS = [
  { id: "confidentiality", label: "Confidentiality Note" },
  { id: "ceo-message", label: "Message from the COO" },
  { id: "purpose", label: "1. Purpose of the IMS" },
  { id: "scope", label: "2. Scope & Boundaries" },
  { id: "org-structure", label: "3. Organizational Structure" },
  { id: "objectives", label: "4. IMS Objectives & Targets" },
  { id: "pillars", label: "5. The 8 Core Pillars" },
  { id: "doc-hierarchy", label: "6. Document Hierarchy" },
  { id: "doc-register", label: "7. Complete IMS Register" },
  { id: "retired-slots", label: "8. Retired & Reserved Slots" },
  { id: "risk-classification", label: "9. Risk Classification" },
  { id: "cross-references", label: "10. Cross-References" },
  { id: "how-people-experience", label: "11. How People Experience the IMS" },
  { id: "final-commitment", label: "12. Final Commitment" },
  { id: "revision-history", label: "Revision History" },
];

export default function PLN_GOV_000() {
  const [tocOpen, setTocOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTocOpen(false);
  };

  return (
    <Layout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Plans", href: "/docs/pln" },
        { label: "TE-IMS-PLN-GOV-000" },
      ]}
    >
      {/* ── Document Header Banner ── */}
      <div style={{ backgroundColor: NAVY }} className="relative overflow-hidden">
        <img
          src={LOGO_WHITE}
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none select-none"
          style={{ width: "340px", opacity: 0.07, right: "-20px", top: "50%", transform: "translateY(-50%)" }}
        />
        <div className="container pt-8 pb-6 relative z-10">
          <div style={{ color: GOLD }} className="text-xs font-bold tracking-[0.2em] uppercase mb-2">
            Level 0 — Foundation Document · Pillar 0
          </div>
          <h1 className="text-white text-2xl md:text-3xl font-extrabold leading-tight mb-1">
            IMS Playbook — Foundation Document
          </h1>
          <p className="text-white/50 text-sm mb-4">True East Mining Company · Integrated Management System</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Document Code", value: "TE-IMS-PLN-GOV-000" },
              { label: "Revision", value: "Rev01" },
              { label: "Date", value: "11 April 2026" },
              { label: "Status", value: "Approved for Implementation" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="px-3 py-1.5 rounded text-xs"
                style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <span style={{ color: "rgba(255,255,255,0.4)" }}>{label}: </span>
                <span className="text-white font-semibold">{value}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ height: "3px", backgroundColor: GOLD }} />
      </div>

      {/* ── Mobile TOC ── */}
      <div className="lg:hidden sticky top-14 z-40 px-4 py-2" style={{ backgroundColor: LIGHT_BG, borderBottom: `1px solid ${BORDER}` }}>
        <button
          onClick={() => setTocOpen(!tocOpen)}
          className="text-xs font-semibold px-3 py-1.5 rounded"
          style={{ backgroundColor: NAVY, color: GOLD }}
        >
          {tocOpen ? "Close Contents" : "Contents ▾"}
        </button>
        {tocOpen && (
          <div
            className="absolute left-4 right-4 mt-1 rounded border shadow-lg z-50 p-3"
            style={{ backgroundColor: "#fff", borderColor: BORDER }}
          >
            {TOC_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left text-xs py-1.5 px-2 rounded hover:bg-gray-50"
                style={{ color: NAVY }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Body ── */}
      <div className="container py-8">
        <div className="flex gap-8">

          {/* Desktop TOC sidebar */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div className="sticky top-20">
              <div className="rounded border p-3" style={{ borderColor: BORDER, backgroundColor: "#fff" }}>
                <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: TEXT_LABEL }}>
                  Contents
                </div>
                {TOC_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="block w-full text-left text-xs py-1.5 px-2 rounded transition-colors hover:bg-gray-50"
                    style={{ color: TEXT_MUTED }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Document content */}
          <div className="flex-1 min-w-0 space-y-10">

            {/* ── Confidentiality ── */}
            <section id="confidentiality">
              <div
                className="rounded border p-4 text-xs leading-relaxed"
                style={{ backgroundColor: "#fff8e1", borderColor: "#f0d98a", color: "#5a4a1a" }}
              >
                <span className="font-bold">CONFIDENTIALITY NOTE:</span> This document is confidential and is the strict property of True East Mining Company. Unauthorized distribution to external parties is strictly prohibited.
              </div>
            </section>

            {/* ── CEO Message ── */}
            <section id="ceo-message">
              <SectionHeading number="§" title="Message from the COO" />
              <div
                className="rounded border p-6"
                style={{ backgroundColor: "#fff", borderColor: BORDER, borderLeft: `4px solid ${GOLD}` }}
              >
                <p className="text-sm leading-relaxed mb-3" style={{ color: TEXT_BODY }}>
                  At True East Mining, we drill in one of the harshest environments on Earth—remote Saudi deserts, 24/7 operations, extreme heat, heavy machinery, and a zero-tolerance margin for error.
                </p>
                <p className="text-sm leading-relaxed mb-3" style={{ color: TEXT_BODY }}>
                  Our people are our most valuable asset. Our clients demand zero harm and zero environmental incidents. Our regulators (MHRSD, NCEC) require absolute, uncompromising compliance. This Integrated Management System (IMS) exists for one single reason:
                </p>
                <p className="text-sm leading-relaxed font-semibold mb-3" style={{ color: NAVY }}>
                  To keep every person safe, protect the environment, deliver quality work on time, and build a company that lasts.
                </p>
                <p className="text-sm leading-relaxed mb-3" style={{ color: TEXT_BODY }}>
                  This Playbook is not a mere compliance exercise to sit on a shelf. It is our core operating system—simple, clear, and designed to be used every single day, on every rig, by every employee.
                </p>
                <p className="text-sm font-bold mb-4" style={{ color: NAVY }}>
                  One Company. One System. Zero Harm.
                </p>
                <div className="pt-3" style={{ borderTop: `1px solid ${BORDER}` }}>
                  <p className="text-sm font-bold" style={{ color: NAVY }}>Joao de Melo, COO</p>
                  <p className="text-xs" style={{ color: TEXT_MUTED }}>Chief Operating Officer · True East Mining Company · April 2026</p>
                </div>
              </div>
            </section>

            {/* ── 1. Purpose ── */}
            <section id="purpose">
              <SectionHeading number="1" title="Purpose of the IMS" />
              <div className="rounded border p-5" style={{ backgroundColor: "#fff", borderColor: BORDER }}>
                <p className="text-sm leading-relaxed mb-4" style={{ color: TEXT_BODY }}>
                  The True East Mining IMS seamlessly integrates Quality (ISO 9001:2015), Health &amp; Safety (ISO 45001:2018), and Environment (ISO 14001:2015) into one unified, powerful system that:
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    "Prevents harm to our people and the surrounding environment.",
                    "Ensures consistent operational quality and on-time project delivery.",
                    "Meets every legal, client, and international regulatory requirement.",
                    "Enables the fast, safe, and sustainable scaling of our operations.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: TEXT_BODY }}>
                      <span style={{ color: GOLD }} className="mt-0.5 flex-shrink-0">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-semibold" style={{ color: NAVY }}>
                  We do not run three separate systems — we run one.
                </p>
              </div>
            </section>

            {/* ── 2. Scope ── */}
            <section id="scope">
              <SectionHeading number="2" title="Scope & Boundaries" />
              <div className="rounded border p-5" style={{ backgroundColor: "#fff", borderColor: BORDER }}>
                <p className="text-sm leading-relaxed mb-3" style={{ color: TEXT_BODY }}>
                  <span className="font-semibold" style={{ color: NAVY }}>Applies to:</span> All True East Mining personnel, contractors, visitors, and third parties working on behalf of the company across:
                </p>
                <ul className="space-y-1.5 mb-4">
                  {[
                    "Exploration & drilling sites (remote desert)",
                    "Processing plants & workshops",
                    "Offices (Riyadh and other administrative centers)",
                    "All transport & logistics activities",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: TEXT_BODY }}>
                      <span style={{ color: GOLD }} className="mt-0.5 flex-shrink-0">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm mb-4" style={{ color: TEXT_BODY }}>
                  <span className="font-semibold" style={{ color: NAVY }}>Exclusions:</span> None at this time. All activities that impact quality, safety, or the environment are included.
                </p>
                <p className="text-sm font-semibold mb-2" style={{ color: NAVY }}>Standards Integrated:</p>
                <ul className="space-y-1.5">
                  {[
                    "ISO 9001:2015 – Quality Management",
                    "ISO 45001:2018 – Occupational Health & Safety",
                    "ISO 14001:2015 – Environmental Management",
                    "MHRSD – Occupational Safety Regulations (KSA)",
                    "NCEC – Environmental Compliance Requirements (KSA)",
                    "Saudi Mining Investment Law & associated reclamation obligations",
                    "Client-specific requirements (e.g., Ma'aden Contractor HSE Standards)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: TEXT_BODY }}>
                      <span style={{ color: GOLD }} className="mt-0.5 flex-shrink-0">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* ── 3. Organizational Structure ── */}
            <section id="org-structure">
              <SectionHeading number="3" title="Our Organizational Structure" />
              <div className="rounded border overflow-hidden" style={{ borderColor: BORDER }}>
                <div className="px-4 py-2 text-xs font-semibold" style={{ backgroundColor: NAVY, color: "#ffffff" }}>
                  Key Leadership Roles &amp; IMS Accountability
                </div>
                <table className="w-full text-xs">
                  <thead>
                    <tr style={{ backgroundColor: LIGHT_BG, borderBottom: `1px solid ${BORDER}` }}>
                      <th className="text-left px-4 py-2.5 font-bold" style={{ color: NAVY, width: "40%" }}>Role</th>
                      <th className="text-left px-4 py-2.5 font-bold" style={{ color: NAVY }}>IMS Accountability</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["CEO / Managing Director", "Overall IMS ownership, strategic direction, & performance."],
                      ["Operations Director", "Safe drilling execution & project delivery."],
                      ["HSE Manager", "Safety, environment, risk mitigation, & emergency readiness."],
                      ["HR & Training Manager", "People, competence, & Saudization targets."],
                      ["IMS / Quality Manager", "System integrity, audits, & continual improvement."],
                      ["Finance & Commercial", "Resource allocation & client contracts compliance."],
                    ].map(([role, accountability], i) => (
                      <tr
                        key={role}
                        style={{
                          backgroundColor: i % 2 === 0 ? "#fff" : "#fafbfc",
                          borderBottom: `1px solid ${BORDER}`,
                        }}
                      >
                        <td className="px-4 py-2.5 font-semibold" style={{ color: NAVY }}>{role}</td>
                        <td className="px-4 py-2.5" style={{ color: TEXT_BODY }}>{accountability}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── 4. IMS Objectives & Targets ── */}
            <section id="objectives">
              <SectionHeading number="4" title="IMS Objectives & Targets (2026)" />
              <p className="text-sm leading-relaxed mb-4" style={{ color: TEXT_MUTED }}>
                These overarching objectives form the baseline of our operational excellence and are reviewed quarterly in Management Review Meetings (MRM).
              </p>
              <div className="rounded border overflow-x-auto" style={{ borderColor: BORDER }}>
                <table className="w-full text-xs min-w-[600px]">
                  <thead>
                    <tr style={{ backgroundColor: NAVY }}>
                      {["Objective", "Target (2026)", "KPI / Measure", "Responsible", "Frequency"].map((h) => (
                        <th key={h} className="text-left px-3 py-2.5 font-bold" style={{ color: GOLD }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Zero fatalities & serious injuries", "0 LTI / Fatality", "Lost Time Injury Frequency Rate", "HSE Manager", "Monthly"],
                      ["100% site rehabilitation compliance", "100% sites rehabilitated on time", "% sites with completion report", "Site Mgr", "Per project"],
                      ["Saudization target", "≥70% Saudi nationals in workforce", "Saudization percentage", "HR Manager", "Quarterly"],
                      ["Training completion", "100% mandatory training", "% employees trained on schedule", "HR Manager", "Monthly"],
                      ["Incident reporting & investigation", "100% of incidents investigated <7 days", "% investigations closed on time", "HSE Manager", "Monthly"],
                      ["Environmental incidents", "Zero reportable spills", "Number of NCEC-reportable incidents", "HSE Manager", "Monthly"],
                    ].map(([obj, target, kpi, resp, freq], i) => (
                      <tr
                        key={obj}
                        style={{
                          backgroundColor: i % 2 === 0 ? "#fff" : "#fafbfc",
                          borderBottom: `1px solid ${BORDER}`,
                        }}
                      >
                        <td className="px-3 py-2.5 font-semibold" style={{ color: NAVY }}>{obj}</td>
                        <td className="px-3 py-2.5" style={{ color: TEXT_BODY }}>{target}</td>
                        <td className="px-3 py-2.5" style={{ color: TEXT_BODY }}>{kpi}</td>
                        <td className="px-3 py-2.5" style={{ color: TEXT_BODY }}>{resp}</td>
                        <td className="px-3 py-2.5" style={{ color: TEXT_BODY }}>{freq}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── 5. The 8 Core Pillars ── */}
            <section id="pillars">
              <SectionHeading number="5" title="How the IMS is Organized – 8 Core Pillars" />
              <p className="text-sm leading-relaxed mb-4" style={{ color: TEXT_MUTED }}>
                We do not organize by ISO clause or department. We organize by how real work happens on a rig.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { num: "1", name: "Leadership & Direction" },
                  { num: "2", name: "People & Capability" },
                  { num: "3", name: "Risk & Planning" },
                  { num: "4", name: "Drilling Execution" },
                  { num: "5", name: "Asset & Maintenance" },
                  { num: "6", name: "Mobility & Transport" },
                  { num: "7", name: "Emergency & Resilience" },
                  { num: "8", name: "Performance & Learning" },
                ].map(({ num, name }) => (
                  <div
                    key={num}
                    className="rounded border p-3 text-center"
                    style={{ backgroundColor: "#fff", borderColor: BORDER }}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-extrabold mx-auto mb-2"
                      style={{ backgroundColor: NAVY, color: GOLD }}
                    >
                      {num}
                    </div>
                    <p className="text-xs font-semibold leading-tight" style={{ color: NAVY }}>{name}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 6. Document Hierarchy ── */}
            <section id="doc-hierarchy">
              <SectionHeading number="6" title="Document Hierarchy – Strict Rule" />
              <div
                className="rounded border px-4 py-3 mb-4 text-sm font-semibold"
                style={{ backgroundColor: "#fffbf0", borderColor: "#f0d98a", color: "#5a4a1a" }}
              >
                Golden Rule: A document exists on one level only. No duplication. No overlap.
              </div>
              <div className="rounded border overflow-x-auto" style={{ borderColor: BORDER }}>
                <table className="w-full text-xs min-w-[500px]">
                  <thead>
                    <tr style={{ backgroundColor: NAVY }}>
                      {["Level", "Name", "Purpose", "Ownership", "Example Documents"].map((h) => (
                        <th key={h} className="text-left px-3 py-2.5 font-bold" style={{ color: GOLD }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["0", "Foundation", "The \"why\" and \"big picture\"", "CEO / IMS Lead", "This Playbook + IMS Policy"],
                      ["1", "Policies", "What we stand for", "Senior Mgmt.", "HSE Policy, Stop Work Authority"],
                      ["2", "Procedures", "Company-wide process controls", "Dept Heads", "Training, Incident Investigation"],
                      ["3", "SOPs", "Task-level execution instructions", "Supervisors / Crew", "LOTO, Confined Space, Hot Work"],
                      ["4", "Forms & Records", "Proof we did it", "Everyone", "Checklists, Registers, Reports"],
                    ].map(([level, name, purpose, ownership, examples], i) => (
                      <tr
                        key={level}
                        style={{
                          backgroundColor: i % 2 === 0 ? "#fff" : "#fafbfc",
                          borderBottom: `1px solid ${BORDER}`,
                        }}
                      >
                        <td className="px-3 py-2.5 font-extrabold text-center" style={{ color: GOLD }}>{level}</td>
                        <td className="px-3 py-2.5 font-semibold" style={{ color: NAVY }}>{name}</td>
                        <td className="px-3 py-2.5" style={{ color: TEXT_BODY }}>{purpose}</td>
                        <td className="px-3 py-2.5" style={{ color: TEXT_BODY }}>{ownership}</td>
                        <td className="px-3 py-2.5" style={{ color: TEXT_BODY }}>{examples}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── 7. Complete IMS Document Register ── */}
            <section id="doc-register">
              <SectionHeading number="7" title="Complete IMS Document Register" />

              {/* Level 0 & 1 */}
              <div className="mb-5">
                <div className="text-xs font-bold px-3 py-2 rounded-t" style={{ backgroundColor: NAVY, color: "#ffffff" }}>
                  Level 0 &amp; 1: Foundation, Policies &amp; Plans (GOV / POL / PLN) — 7 Documents
                </div>
                <div className="rounded-b border border-t-0 p-4" style={{ borderColor: BORDER, backgroundColor: "#fff" }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
                    {[
                      "TE-IMS-PLN-GOV-000_Rev01 – IMS Playbook - Foundation Document",
                      "TE-IMS-POL-GOV-001_Rev01 – Integrated HSE Policy Statement",
                      "TE-IMS-POL-GOV-002_Rev01 – Ethics and Anti-Bribery Policy",
                      "TE-IMS-POL-HSE-001_Rev01 – Stop Work Authority Policy",
                      "TE-IMS-POL-LC-001_Rev01 – Local Content and Saudization Policy",
                      "TE-IMS-PLN-HSE-001_Rev01 – Major Emergency Preparedness Plan",
                      "TE-IMS-PLN-HSE-003_Rev01 – Working at Height Rescue Plan",
                    ].map((doc) => (
                      <div key={doc} className="flex items-start gap-1.5 text-xs" style={{ color: TEXT_BODY }}>
                        <span style={{ color: GOLD }} className="flex-shrink-0 mt-0.5">▸</span>
                        {doc}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Level 2 Procedures */}
              <div className="mb-5">
                <div className="text-xs font-bold px-3 py-2 rounded-t" style={{ backgroundColor: "#1a3a5c", color: "#ffffff" }}>
                  Level 2: Core Procedures (PROC) — 33 Documents
                </div>
                <div className="rounded-b border border-t-0 p-4" style={{ borderColor: BORDER, backgroundColor: "#fff" }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
                    {[
                      "TE-IMS-PROC-HSE-001_Rev01 – Fatigue Management Procedure",
                      "TE-IMS-PROC-HSE-002_Rev01 – Heat Stress Prevention Procedure",
                      "TE-IMS-PROC-HSE-003_Rev01 – Hazard Identification and Risk Assessment Procedure",
                      "TE-IMS-PROC-HSE-004_Rev01 – Site Emergency Preparedness Procedure",
                      "TE-IMS-PROC-HSE-006_Rev01 – Incident and Accident Investigation Procedure",
                      "TE-IMS-PROC-HSE-007_Rev01 – Toolbox Talks Procedure",
                      "TE-IMS-PROC-HSE-008_Rev01 – Waste Management Procedure",
                      "TE-IMS-PROC-HSE-009_Rev01 – Fire Prevention, Control and Fire Fighting Procedure",
                      "TE-IMS-PROC-HSE-010_Rev01 – HSE Site Monthly Reporting Procedure",
                      "TE-IMS-PROC-HSE-011_Rev01 – Periodic Inspection Procedure",
                      "TE-IMS-PROC-HSE-012_Rev01 – HSE Site Audit Procedure",
                      "TE-IMS-PROC-HSE-013_Rev01 – Spill Management Procedure",
                      "TE-IMS-PROC-HSE-014_Rev01 – Site Rehabilitation Procedure",
                      "TE-IMS-PROC-HSE-015_Rev01 – Risk and Opportunity Procedure",
                      "TE-IMS-PROC-HSE-016_Rev01 – Personal Protective Equipment Procedure",
                      "TE-IMS-PROC-HSE-017_Rev01 – Manual Handling Procedure",
                      "TE-IMS-PROC-HSE-018_Rev01 – Environmental Aspects Identification Procedure",
                      "TE-IMS-PROC-HSE-019_Rev01 – Site Safety Appointments Procedure",
                      "TE-IMS-PROC-LOG-001_Rev01 – Company Vehicle Usage Procedure",
                      "TE-IMS-PROC-LOG-002_Rev01 – Journey Management Procedure",
                      "TE-IMS-PROC-MAINT-001_Rev01 – Maintenance Management Procedure",
                      "TE-IMS-PROC-OPS-001_Rev01 – Drilling Operations Control Procedure",
                      "TE-IMS-PROC-SCM-001_Rev01 – Site Supply Procedure",
                      "TE-IMS-PROC-SEC-001_Rev01 – Security Procedure",
                      "TE-IMS-PROC-SYS-001_Rev01 – Document Control Procedure",
                      "TE-IMS-PROC-SYS-002_Rev01 – Management Review Procedure",
                      "TE-IMS-PROC-SYS-003_Rev01 – Change Management Procedure",
                      "TE-IMS-PROC-SYS-004_Rev01 – Internal Audit Procedure",
                      "TE-IMS-PROC-SYS-005_Rev01 – Continual Improvement and CAPA Procedure",
                      "TE-IMS-PROC-SYS-006_Rev01 – Checklist and Register Control Procedure",
                      "TE-IMS-PROC-SYS-008_Rev01 – Corrective Action Procedure",
                      "TE-IMS-PROC-SYS-009_Rev01 – QHSE Objectives Procedure",
                      "TE-IMS-PROC-TRN-001_Rev01 – Staff Training and Competency Procedure",
                    ].map((doc) => (
                      <div key={doc} className="flex items-start gap-1.5 text-xs" style={{ color: TEXT_BODY }}>
                        <span style={{ color: GOLD }} className="flex-shrink-0 mt-0.5">▸</span>
                        {doc}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Level 3 SOPs */}
              <div className="mb-5">
                <div className="text-xs font-bold px-3 py-2 rounded-t" style={{ backgroundColor: "#1a3a5c", color: "#ffffff" }}>
                  Level 3: Standard Operating Procedures (SOP) — 10 Documents
                </div>
                <div className="rounded-b border border-t-0 p-4" style={{ borderColor: BORDER, backgroundColor: "#fff" }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
                    {[
                      "TE-IMS-SOP-GEO-001_Rev01 – Core Cutting and Handling SOP",
                      "TE-IMS-SOP-HSE-001_Rev01 – Planned Task Observation SOP",
                      "TE-IMS-SOP-HSE-002_Rev01 – Confined Space Entry SOP",
                      "TE-IMS-SOP-HSE-003_Rev01 – Lock-Out Tag-Out SOP",
                      "TE-IMS-SOP-HSE-004_Rev01 – Hot Work SOP",
                      "TE-IMS-SOP-LOG-001_Rev01 – Driving Safety SOP",
                      "TE-IMS-SOP-MAINT-001_Rev01 – Machine Guarding Inspection SOP",
                      "TE-IMS-SOP-MAINT-002_Rev01 – Refueling and Fuel Handling SOP",
                      "TE-IMS-SOP-OPS-001_Rev01 – Diamond Drilling Operation SOP",
                      "TE-IMS-SOP-OPS-002_Rev01 – Night Shift Drilling SOP",
                    ].map((doc) => (
                      <div key={doc} className="flex items-start gap-1.5 text-xs" style={{ color: TEXT_BODY }}>
                        <span style={{ color: GOLD }} className="flex-shrink-0 mt-0.5">▸</span>
                        {doc}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Level 4 Forms & Registers */}
              <div className="mb-5">
                <div className="text-xs font-bold px-3 py-2 rounded-t" style={{ backgroundColor: "#1a3a5c", color: "#ffffff" }}>
                  Level 4: Forms, Registers &amp; Checklists (FRM / REG) — 69 Documents
                </div>
                <div className="rounded-b border border-t-0 p-4" style={{ borderColor: BORDER, backgroundColor: "#fff" }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
                    {[
                      "TE-IMS-FRM-HSE-001_Rev01 – Job Hazard Analysis",
                      "TE-IMS-FRM-HSE-002_Rev01 – Incident Flash Notification",
                      "TE-IMS-FRM-HSE-003_Rev01 – Near Miss Report Form",
                      "TE-IMS-FRM-HSE-004_Rev01 – First Aid Kit Register and Checklist",
                      "TE-IMS-FRM-HSE-006_Rev01 – HSE Committee Meeting Minutes",
                      "TE-IMS-FRM-HSE-007_Rev01 – Planned Task Observation (PTO) Form",
                      "TE-IMS-FRM-HSE-009_Rev01 – Take 5 Hazard Assessment Form",
                      "TE-IMS-FRM-HSE-010_Rev01 – Hazard Identification Prompt Checklist",
                      "TE-IMS-FRM-HSE-011_Rev01 – Permit to Work (PTW)",
                      "TE-IMS-FRM-HSE-012_Rev01 – PPE Issue and Inspection Checklist",
                      "TE-IMS-FRM-HSE-013_Rev01 – PPE Kit Issuance and Acceptance Form",
                      "TE-IMS-FRM-HSE-014_Rev01 – PPE Kit Spot-Check Verification Form",
                      "TE-IMS-FRM-HSE-015_Rev01 – PPE Replacement Request Form",
                      "TE-IMS-FRM-HSE-016_Rev00 – PPE Kit Contents Matrix",
                      "TE-IMS-FRM-HSE-017_Rev01 – Emergency Drill Planning and Record",
                      "TE-IMS-FRM-HSE-018_Rev01 – Emergency Evacuation Drill Record",
                      "TE-IMS-FRM-HSE-019_Rev01 – Fire Drill Report",
                      "TE-IMS-FRM-HSE-020_Rev02 – Fire Extinguisher Inspection Log",
                      "TE-IMS-FRM-HSE-021_Rev01 – Fire Prevention Checklist",
                      "TE-IMS-FRM-HSE-022_Rev01 – Incident and Accident Investigation Report",
                      "TE-IMS-FRM-HSE-023_Rev01 – Employee Safety Culture Survey",
                      "TE-IMS-FRM-HSE-024_Rev02 – Dangerous Occurrence Report Form",
                      "TE-IMS-FRM-HSE-025_Rev02 – Dangerous Occurrence Investigation Report",
                      "TE-IMS-FRM-HSE-026_Rev02 – Incident Witness Statement Form",
                      "TE-IMS-FRM-HSE-027_Rev02 – Monthly Injury Summary",
                      "TE-IMS-FRM-HSE-028_Rev02 – Monthly HSE Violation Report",
                      "TE-IMS-FRM-HSE-029_Rev01 – PPE Weekly Inspection Checklist",
                      "TE-IMS-FRM-HSE-030_Rev01 – Fire Fighting Equipment Register Checklist",
                      "TE-IMS-FRM-HSE-031_Rev02 – Equipment Inspection and Deviation Register",
                      "TE-IMS-FRM-HSE-032_Rev01 – Toolbox Talk Daily Attendance Register",
                      "TE-IMS-FRM-HSE-033_Rev01 – Site HSE Monthly Report Template",
                      "TE-IMS-FRM-HSE-034_Rev01 – Planned Task Observation Form",
                      "TE-IMS-FRM-HSE-035_Rev01 – First Aider Appointment Letter",
                      "TE-IMS-FRM-HSE-036_Rev01 – Fire Fighter Appointment Letter",
                      "TE-IMS-FRM-HSE-037_Rev01 – Lockout Officer Appointment Letter",
                      "TE-IMS-FRM-HSE-039_Rev01 – LOTO Logout Logbook",
                      "TE-IMS-FRM-HSE-040_Rev01 – Waste Handling and Disposal Schedule",
                      "TE-IMS-FRM-LOG-001_Rev01 – Journey Management Plan Form",
                      "TE-IMS-FRM-LOG-002_Rev01 – Daily Vehicle Checklist",
                      "TE-IMS-FRM-MAINT-001_Rev01 – Machine Guarding Inspection Register",
                      "TE-IMS-FRM-MAINT-002_Rev01 – Fuel Refueling Log - Single Event",
                      "TE-IMS-FRM-MAINT-003_Rev01 – Portable Electrical Equipment Register",
                      "TE-IMS-FRM-OPS-001_Rev01 – Daily Drilling Report",
                      "TE-IMS-FRM-OPS-002_Rev01 – Stuck Rod Recovery Report",
                      "TE-IMS-FRM-SEC-001_Rev01 – Visitor Access and Induction Form",
                      "TE-IMS-FRM-SEC-002_Rev01 – Visitor Register",
                      "TE-IMS-FRM-SYS-001_Rev01 – Audit Checklist Template",
                      "TE-IMS-FRM-SYS-002_Rev01 – Management Review Minutes Template",
                      "TE-IMS-FRM-SYS-003_Rev01 – Corrective Action Request Form",
                      "TE-IMS-FRM-SYS-005_Rev01 – Site Quarterly Audit Form",
                      "TE-IMS-FRM-SYS-006_Rev01 – QA Task Follow-Up Checklist",
                      "TE-IMS-FRM-TRN-002_Rev01 – Critical Training Adherence Form",
                      "TE-IMS-FRM-TRN-003_Rev01 – Training Attendance Register",
                      "TE-IMS-REG-GOV-001_Rev00 – IMS Objectives & Targets Register",
                      "TE-IMS-REG-HSE-001_Rev01 – Risk Register",
                      "TE-IMS-REG-HSE-002_Rev00 – PPE Issue & Inspection Register",
                      "TE-IMS-REG-HSE-003_Rev01 – Emergency Contacts Directory",
                      "TE-IMS-REG-HSE-005_Rev01 – Incident and Accident Index Register",
                      "TE-IMS-REG-HSE-007_Rev01 – HIRA Register",
                      "TE-IMS-REG-HSE-010_Rev02 – Environmental Aspect and Impact Register",
                      "TE-IMS-REG-LOG-001_Rev01 – Vehicle Handover Register",
                      "TE-IMS-REG-MAINT-001_Rev01 – Maintenance Log and Service Record",
                      "TE-IMS-REG-MAINT-002_Rev01 – Fuel Refuelling Log",
                      "TE-IMS-REG-SYS-001_Rev04 – IMS Master Register and Migration Log",
                      "TE-IMS-REG-SYS-002_Rev00 – KPI Dashboard & Performance Log",
                      "TE-IMS-REG-SYS-003_Rev00 – Legal & Regulatory Compliance Register",
                      "TE-IMS-REG-SYS-004_Rev01 – Corrective Action Request Log",
                      "TE-IMS-REG-SYS-007_Rev01 – Risk and Opportunity Register",
                      "TE-IMS-REG-TRN-001_Rev01 – Training and Competence Matrix",
                    ].map((doc) => (
                      <div key={doc} className="flex items-start gap-1.5 text-xs" style={{ color: TEXT_BODY }}>
                        <span style={{ color: GOLD }} className="flex-shrink-0 mt-0.5">▸</span>
                        {doc}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Level 5 References */}
              <div className="mb-5">
                <div className="text-xs font-bold px-3 py-2 rounded-t" style={{ backgroundColor: "#1a3a5c", color: "#ffffff" }}>
                  Level 5: System References (REF) — 9 Documents
                </div>
                <div className="rounded-b border border-t-0 p-4" style={{ borderColor: BORDER, backgroundColor: "#fff" }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
                    {[
                      "TE-IMS-REF-HSE-001_Rev00 – Emergency Preparedness Reference",
                      "TE-IMS-REF-HSE-002_Rev00 – Fire Fighting Procedure Reference",
                      "TE-IMS-REF-SYS-000_Rev00 – Executive Overview of the Integrated Management System",
                      "TE-IMS-REF-SYS-001_Rev01 – Document Identification and Numbering Rules",
                      "TE-IMS-REF-SYS-002_Rev00 – Treatment of Finance and Accounting Documents",
                      "TE-IMS-REF-SYS-003_Rev00 – ISO-14001_Certificate",
                      "TE-IMS-REF-SYS-004_Rev00 – ISO-45001_Certificate",
                      "TE-IMS-REF-SYS-005_Rev00 – ISO-9001_Certificate",
                      "TE-IMS-REF-SYS-006_Rev01 – KPI Tables and Reference Data",
                    ].map((doc) => (
                      <div key={doc} className="flex items-start gap-1.5 text-xs" style={{ color: TEXT_BODY }}>
                        <span style={{ color: GOLD }} className="flex-shrink-0 mt-0.5">▸</span>
                        {doc}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Drawings */}
              <div className="mb-5">
                <div className="text-xs font-bold px-3 py-2 rounded-t" style={{ backgroundColor: "#1a3a5c", color: "#ffffff" }}>
                  Drawings (DWG) — 0 Released
                </div>
                <div className="rounded-b border border-t-0 p-4" style={{ borderColor: BORDER, backgroundColor: "#fff" }}>
                  <p className="text-xs" style={{ color: TEXT_MUTED }}>Slot reserved. No drawings released in Rev01.</p>
                </div>
              </div>

              {/* Part B note */}
              <div
                className="rounded border px-4 py-3 text-xs"
                style={{ backgroundColor: "#f0f7ff", borderColor: "#bfdbfe", color: "#1e3a5f" }}
              >
                <span className="font-bold">Part B – Complete Sequential List (Audit &amp; Submission View):</span> The complete sequential list covering all 128 active controlled documents is maintained in the IMS Master Register (TE-IMS-REG-SYS-001_Rev04). The register above reflects the current active library as of Rev01.
              </div>
            </section>

            {/* ── 8. Retired & Reserved Slots ── */}
            <section id="retired-slots">
              <SectionHeading number="8" title="Retired & Reserved Sequence Slots" />
              <div className="rounded border p-5" style={{ backgroundColor: "#fff", borderColor: BORDER }}>
                <p className="text-sm leading-relaxed mb-3" style={{ color: TEXT_BODY }}>
                  The IMS uses stable document numbers. When a procedure, form, or register is retired, its sequence number is not reissued. The slot is held open so that all legacy references remain traceable and audit trails stay intact.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: TEXT_BODY }}>
                  The current register reflects 128 active controlled documents. Sequence slots across PROC, SOP, FRM, REG, and DWG families are held reserved against prior drafts that were consolidated, moved, or deferred. The authoritative list of retired and reserved slots is maintained in the Master Register (currently Rev04) alongside this Playbook.
                </p>
              </div>
            </section>

            {/* ── 9. Risk Classification Standard ── */}
            <section id="risk-classification">
              <SectionHeading number="9" title="Risk Classification Standard" />
              <div className="rounded border p-5" style={{ backgroundColor: "#fff", borderColor: BORDER }}>
                <p className="text-sm leading-relaxed mb-3" style={{ color: TEXT_BODY }}>
                  True East applies a single 5×5 likelihood-by-severity risk matrix across all IMS registers. Scores are banded into four tiers:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                  {[
                    { tier: "Low", range: "1–4", bg: "#d1fae5", text: "#065f46" },
                    { tier: "Medium", range: "5–9", bg: "#fef3c7", text: "#92400e" },
                    { tier: "High", range: "10–16", bg: "#fee2e2", text: "#991b1b" },
                    { tier: "Critical", range: "17–25", bg: "#fce7f3", text: "#9d174d" },
                  ].map(({ tier, range, bg, text }) => (
                    <div
                      key={tier}
                      className="rounded px-3 py-2 text-center text-xs font-bold"
                      style={{ backgroundColor: bg, color: text }}
                    >
                      {tier}<br /><span className="font-normal">{range}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: TEXT_BODY }}>
                  The same classification is used by the Risk Register (REG-HSE-001), the HSE Hazard and Aspects Register, the Risk and Opportunity Procedure (PROC-HSE-015), and the Hazard Identification and Risk Assessment Procedure (PROC-HSE-003). Controls, review frequency, and escalation authority are mapped to the four tiers so that scoring drives action, not just paperwork.
                </p>
              </div>
            </section>

            {/* ── 10. Cross-References ── */}
            <section id="cross-references">
              <SectionHeading number="10" title="Cross-References" />
              <div className="rounded border p-5" style={{ backgroundColor: "#fff", borderColor: BORDER }}>
                <p className="text-sm leading-relaxed" style={{ color: TEXT_BODY }}>
                  This Playbook is the foundation document for the IMS. It should be read alongside:{" "}
                  <span className="font-semibold" style={{ color: NAVY }}>TE-IMS-REF-SYS-000</span> (IMS Executive Overview) for the narrative summary;{" "}
                  <span className="font-semibold" style={{ color: NAVY }}>TE-IMS-REF-SYS-001</span> (IMS Numbering and Coding Rules) for the naming and classification logic; and{" "}
                  <span className="font-semibold" style={{ color: NAVY }}>TE-IMS-PROC-SYS-001</span> (Document Control Procedure) for how documents are created, reviewed, approved, issued, revised, and retired.
                </p>
              </div>
            </section>

            {/* ── 11. How People Experience the IMS ── */}
            <section id="how-people-experience">
              <SectionHeading number="11" title="How People Experience the IMS" />
              <div className="rounded border p-5" style={{ backgroundColor: "#fff", borderColor: BORDER }}>
                <p className="text-sm leading-relaxed mb-4" style={{ color: TEXT_BODY }}>
                  This Integrated Management System is not a static binder sitting on an office shelf. It is our daily operating system—alive, updated regularly, and actively used by every level of the organization:
                </p>
                <div className="space-y-3">
                  {EXPERIENCE_ITEMS.map(({ icon, label, text }) => (
                    <div
                      key={label}
                      className="flex items-start gap-3 p-3 rounded"
                      style={{ backgroundColor: LIGHT_BG, border: `1px solid ${BORDER}` }}
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded flex items-center justify-center" style={{ backgroundColor: "#fff", border: `1px solid ${BORDER}` }}>
                        {icon}
                      </div>
                      <div>
                        <p className="text-xs font-bold mb-0.5" style={{ color: NAVY }}>{label}</p>
                        <p className="text-xs leading-relaxed" style={{ color: TEXT_BODY }}>{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── 12. Final Commitment ── */}
            <section id="final-commitment">
              <SectionHeading number="12" title="Our Final Commitment: Continual Improvement" />
              <div
                className="rounded border p-6"
                style={{ backgroundColor: NAVY, borderColor: NAVY }}
              >
                <p className="text-sm leading-relaxed mb-3 text-white/80">
                  As True East Mining scales, takes on more complex drilling programs, and expands its footprint across the Kingdom of Saudi Arabia, this system will scale with us.
                </p>
                <p className="text-sm leading-relaxed mb-3 text-white/80">
                  We recognize that safety and quality are never "finished." Every hazard identified by a worker, every near-miss reported on site, and every audit finding is fuel for our continual improvement cycle. The IMS empowers every employee, from the boardroom to the drill pad, to use their Stop Work Authority and contribute to safer, more efficient operation.
                </p>
                <p className="text-sm font-bold mb-4" style={{ color: GOLD }}>
                  We do not compromise on safety. We do not compromise on quality. We protect the environment.
                </p>
                <div
                  className="pt-4 text-center"
                  style={{ borderTop: "1px solid rgba(196,154,40,0.3)" }}
                >
                  <p className="text-white font-extrabold text-base tracking-wide">TRUE EAST MINING COMPANY</p>
                  <p style={{ color: GOLD }} className="text-sm font-semibold mt-1">One Company. One System. Zero Harm.</p>
                </div>
              </div>
            </section>

            {/* ── Revision History ── */}
            <section id="revision-history">
              <SectionHeading number="§" title="Revision History" />
              <div className="rounded border overflow-x-auto mb-6" style={{ borderColor: BORDER }}>
                <table className="w-full text-xs min-w-[500px]">
                  <thead>
                    <tr style={{ backgroundColor: NAVY }}>
                      {["Rev", "Date", "Description", "Author"].map((h) => (
                        <th key={h} className="text-left px-3 py-2.5 font-bold" style={{ color: GOLD }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ backgroundColor: "#fff", borderBottom: `1px solid ${BORDER}` }}>
                      <td className="px-3 py-2.5 font-semibold" style={{ color: NAVY }}>00</td>
                      <td className="px-3 py-2.5" style={{ color: TEXT_BODY }}>11 Apr 2026</td>
                      <td className="px-3 py-2.5" style={{ color: TEXT_BODY }}>Initial approved release – True East IMS Foundation Playbook established.</td>
                      <td className="px-3 py-2.5" style={{ color: TEXT_BODY }}>Joao Melo</td>
                    </tr>
                    <tr style={{ backgroundColor: "#fafbfc" }}>
                      <td className="px-3 py-2.5 font-semibold" style={{ color: NAVY }}>01</td>
                      <td className="px-3 py-2.5" style={{ color: TEXT_BODY }}>11 Apr 2026</td>
                      <td className="px-3 py-2.5" style={{ color: TEXT_BODY }}>Register rebuilt against the current active library (128 controlled documents). Metadata corrected, approval block updated (IMS Project Team / Joao de Melo, COO), retired slots policy, risk classification standard, and cross-references added. Drawings slot reserved (0 released).</td>
                      <td className="px-3 py-2.5" style={{ color: TEXT_BODY }}>IMS Project Team</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Approval Block */}
              <div className="rounded border overflow-hidden" style={{ borderColor: BORDER }}>
                  <div className="px-4 py-2 text-xs font-bold" style={{ backgroundColor: NAVY, color: "#ffffff" }}>
                  Document Approval Block
                </div>
                <table className="w-full text-xs">
                  <tbody>
                    {[
                      ["Document Code", "TE-IMS-PLN-GOV-000_Rev01"],
                      ["Title", "Integrated Management System (IMS) Playbook – Foundation Document (Pillar 0)"],
                      ["Revision", "Rev01"],
                      ["Date", "11 April 2026"],
                      ["Prepared by", "IMS Project Team"],
                      ["Approved by", "Joao de Melo, COO"],
                      ["Status", "Approved for Implementation – Internal Use Only"],
                    ].map(([label, value], i) => (
                      <tr
                        key={label}
                        style={{
                          backgroundColor: i % 2 === 0 ? "#fff" : "#fafbfc",
                          borderBottom: `1px solid ${BORDER}`,
                        }}
                      >
                        <td className="px-4 py-2.5 font-semibold w-40" style={{ color: NAVY }}>{label}</td>
                        <td className="px-4 py-2.5" style={{ color: TEXT_BODY }}>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── Document Control Notice ── */}
            <div
              className="rounded border p-4 text-xs leading-relaxed"
              style={{ backgroundColor: "#fffbf0", borderColor: "#f0d98a", color: "#5a4a1a" }}
            >
              <span className="font-bold">Document Control Notice:</span> All documents in this portal are controlled under the True East Mining Company Integrated Management System. Printed copies are uncontrolled. Always refer to this portal for the current approved version. For document requests or submissions, contact the Management Representative.
            </div>

            {/* Back link */}
            <div className="pt-2">
              <Link href="/docs/pln">
                <span className="text-xs font-semibold cursor-pointer hover:underline" style={{ color: GOLD }}>
                  ← Back to Plans
                </span>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="text-center py-3 text-xs"
        style={{ backgroundColor: NAVY, color: "rgba(255,255,255,0.25)" }}
      >
        <a href="https://tru-east.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">
          tru-east.com
        </a>
        {" · "}Internal Use Only · True East Mining Company
      </div>
    </Layout>
  );
}
