// TE-IMS-PROC-HSE-012 — HSE Site Audit Procedure
// Design: Standardized policy layout — left sidebar (Doc Info + TOC) + main content area

import { Link } from "wouter";
import { TopNav, Footer, Breadcrumb } from "@/components/Layout";
import { LOGO_GRAY, LOGO_WHITE } from "@/lib/imsData";

const sections = [
  { id: "s1", label: "1. Purpose" },
  { id: "s2", label: "2. Scope" },
  { id: "s3", label: "3. Definitions" },
  { id: "s4", label: "4. Responsibilities" },
  { id: "s5", label: "5. Audit Programme and Frequency" },
  { id: "s6", label: "6. Auditor Competence" },
  { id: "s7", label: "7. Audit Preparation" },
  { id: "s8", label: "8. Conducting the Audit" },
  { id: "s9", label: "9. Finding Classification" },
  { id: "s10", label: "10. Reporting" },
  { id: "s11", label: "11. Corrective Action and Follow-Up" },
  { id: "s12", label: "12. Communication and Management Review" },
  { id: "s13", label: "13. Performance Indicators" },
  { id: "s14", label: "14. References" },
  { id: "s15", label: "15. Related Forms and Records" },
];

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-sm font-bold mt-8 mb-3 pb-2"
      style={{ color: "#081C2E", borderBottom: "2px solid #C49A28" }}
    >
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm font-bold mt-5 mb-2" style={{ color: "#081C2E" }}>
      {children}
    </h3>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 mb-2 text-sm leading-relaxed" style={{ color: "#374151" }}>
      <span style={{ color: "#C49A28", marginTop: "2px" }}>•</span>
      <span>{children}</span>
    </li>
  );
}

export default function TE_IMS_PROC_HSE_012() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "PROC — Procedures", href: "/docs/proc" },
          { label: "HSE Site Audit Procedure" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              HSE Site Audit Procedure
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-PROC-HSE-012_Rev01</span>
              <span style={{ color: "#c0c8d4" }}>·</span>
              <span className="text-xs" style={{ color: "#6b7a8d" }}>10 Apr 2026</span>
              <span style={{ color: "#c0c8d4" }}>·</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: "#d4edda", color: "#155724" }}>
                ✓ Approved for Implementation
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/docs/proc" className="text-xs font-semibold px-3 py-1.5 rounded border hover:bg-gray-50 transition-colors" style={{ borderColor: "#dde3ec", color: "#081C2E" }}>
              ← Back to Procedures
            </Link>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="container py-8 flex gap-8 items-start">
        {/* Sidebar */}
        <aside className="hidden lg:block w-52 shrink-0 sticky top-20 rounded border" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
          <div className="p-4 border-b" style={{ borderColor: "#dde3ec" }}>
            <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#8a9ab0" }}>Document Info</div>
            <dl className="space-y-2">
              {[
                ["Document Code", "TE-IMS-PROC-HSE-012"],
                ["Revision", "Rev 01"],
                ["Date", "10 Apr 2026"],
                ["Status", "✓ Approved"],
                ["Category", "Procedure"],
                ["Scope", "All TEMC operations, employees, contractors & visitors"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs font-semibold" style={{ color: "#8a9ab0" }}>{k}</dt>
                  <dd className="text-xs mt-0.5 font-medium" style={{ color: k === "Status" ? "#155724" : "#081C2E" }}>
                    {k === "Document Code" ? <span className="te-code">{v}</span> : v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="p-4">
            <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#8a9ab0" }}>Contents</div>
            <nav className="space-y-1">
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="block text-xs py-1 px-2 rounded hover:bg-blue-50 transition-colors" style={{ color: "#081C2E" }}>
                  {s.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Document body */}
        <div className="flex-1 min-w-0">
          <div className="rounded border bg-white overflow-hidden" style={{ borderColor: "#dde3ec" }}>
            {/* Document header */}
            <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: "#dde3ec", backgroundColor: "#fafbfc" }}>
              <img src={LOGO_GRAY} alt="True East Mining Company" style={{ width: "80px", height: "80px", objectFit: "contain" }} />
              <div className="text-right">
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-PROC-HSE-012_Rev01</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  HSE Site Audit Procedure
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-6" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-PROC-HSE-012</td>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Revision</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>01</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Date</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>10 Apr 2026</td>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Status</td>
                    <td className="border px-3 py-2 font-bold" style={{ borderColor: "#dde3ec", color: "#155724" }}>Approved for Implementation</td>
                  </tr>
                </tbody>
              </table>

              {/* Document body content */}


            <SectionHeading id="s1">1. Purpose</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure defines how True East Mining Company (TEMC) plans, conducts, reports, and follows up HSE site audits. The objective is to independently verify conformity with ISO 45001:2018, ISO 14001:2015, Saudi regulatory requirements (MHRSD, MEWA, NCEC, Saudi Civil Defense), and internal IMS documentation — and to drive continual improvement. Site audits complement the periodic inspections (PROC-HSE-011) and internal system audits (PROC-SYS-004).</p>

            <SectionHeading id="s2">2. Scope</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure applies to all TEMC drilling, exploration, and support sites in the Kingdom of Saudi Arabia. It covers employees, contractors, processes, equipment, and documentation present at the audited site. Audits may be internal (TEMC HSE team or corporate) or external (client / regulator / certification body).</p>

            <SectionHeading id="s3">3. Definitions</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Audit — a systematic, independent, and documented process to obtain objective evidence and evaluate it against audit criteria (ISO 19011).</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Audit Criteria — the set of policies, procedures, standards, and regulations used as a reference for comparison.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Audit Evidence — records, statements of fact, or other information relevant to the audit criteria that is verifiable.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Audit Finding — result of the evaluation of audit evidence against audit criteria. May be a Non-Conformity, Observation, or Opportunity for Improvement.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Major Non-Conformity — absence or total breakdown of a system to meet a requirement, or a situation that would, on the basis of objective evidence, raise doubts about conformity — serious effect on safety, environment, or the IMS.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Minor Non-Conformity — isolated, non-systemic lapse in conformity.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Observation / OFI — improvement opportunity; not a non-conformity.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Lead Auditor — competent person leading the audit team, responsible for planning, conduct, and report.</Bullet>
            </ul>

            <SectionHeading id="s4">4. Responsibilities</SectionHeading>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Role</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Responsibilities</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Managing Director (MD)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Approves annual audit programme. Reviews audit outcomes at management review. Ensures resources for corrective actions.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager / Management Representative (MR)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Owns this procedure. Establishes the annual audit programme. Appoints Lead Auditors and teams. Ensures auditor independence and competence.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Lead Auditor</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Plans the audit, briefs the team, conducts opening / closing meetings, issues the report, classifies findings.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Audit Team Members</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Collect evidence, interview personnel, document findings, support the Lead Auditor.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site Senior Executive (SSE) / Drilling Superintendent</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Provides access to site, personnel, and records. Receives audit report. Approves and owns the corrective action plan.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Auditee (Site HSE Officer / Supervisors)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Provide evidence and explanations. Do not obstruct or mislead. Agree corrective actions at closing meeting.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Auditee Management</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Implements corrective actions to close findings within agreed timelines.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <SectionHeading id="s5">5. Audit Programme and Frequency</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Annual HSE Audit Programme approved by MD, covering all active sites and key contractors.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Minimum frequency: each active TEMC site audited at least once per year; high-risk sites or sites with repeat findings audited more often.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Client-driven or regulator-driven audits are scheduled as required and added to the programme.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Risk-based selection — prior incidents, findings, contractor changes, or new scope trigger additional audits.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Auditor independence — auditors must not audit their own area of responsibility (ISO 45001 Clause 9.2.2 and ISO 14001 Clause 9.2).</Bullet>
            </ul>

            <SectionHeading id="s6">6. Auditor Competence</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Lead Auditor requirements: ISO 45001 / 14001 internal auditor qualification (or equivalent), minimum 2 prior audits, site HSE experience.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Team members: ISO awareness training or subject matter expertise in the audited discipline.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Auditor competence is recorded in the auditor register and refreshed every 3 years.</Bullet>
            </ul>

            <SectionHeading id="s7">7. Audit Preparation</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Audit plan — scope, criteria, objectives, team, schedule, area coverage. Issued to auditee at least 7 days in advance (except for unannounced audits).</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Checklist — developed from IMS documents and ISO clauses. Covers policies, procedures, risk registers, CARs, training, inspections, permits, equipment, environmental controls, emergency preparedness.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Document review — prior to site visit — IMS documents, previous audit reports, inspection records, incident log, training register.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Opening meeting — introduce team, confirm scope, agree logistics, confirm confidentiality, agree reporting channels.</Bullet>
            </ul>

            <SectionHeading id="s8">8. Conducting the Audit</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Site walk-through, observation of work in progress, equipment condition, PPE compliance, housekeeping.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Document sampling — permits, inspections, training records, toolbox talks, first aid log, waste manifests.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Interviews — workers, supervisors, HSE, contractors — to verify awareness of procedures, hazards, emergency response.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Cross-check evidence — claims must be corroborated with documents and observation.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Each potential finding is discussed with the auditee for clarification before it is finalised.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Stop-work action — if the audit reveals an imminent danger, the Lead Auditor notifies the SSE immediately for Stop Work.</Bullet>
            </ul>

            <SectionHeading id="s9">9. Finding Classification</SectionHeading>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Classification</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Definition</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Closure Target</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Major Non-Conformity</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Systemic breakdown, serious risk to life, environment, or compliance. IMS element absent or failing.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≤ 30 days</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Minor Non-Conformity</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Isolated lapse in conformity, limited risk.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≤ 60 days</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Observation / OFI</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Improvement opportunity — not a non-conformity.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>As agreed / best endeavours</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Positive Practice</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Good practice to recognise and share.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Share via toolbox / MR</td>
                </tr>
                </tbody>
              </table>
            </div>

            <SectionHeading id="s10">10. Reporting</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Audit Report issued within 5 working days of the closing meeting.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Report content: scope, criteria, team, dates, areas audited, findings with evidence, classification, positive practices, conclusions.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Distribution: SSE, HSE Manager, MR, MD, and auditee management. Filed in IMS.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Findings raised as CARs per FRM-SYS-003 with owners and due dates.</Bullet>
            </ul>

            <SectionHeading id="s11">11. Corrective Action and Follow-Up</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Auditee develops the corrective action plan within 10 working days of receiving the report.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Root cause analysis applied per PROC-SYS-005 for each non-conformity.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Actions implemented and evidence uploaded to the CAR register.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Lead Auditor (or MR) verifies closure and effectiveness — desktop review for minor, physical re-verification for major.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Closed finding is signed off in the CAR register and audit report annex.</Bullet>
            </ul>

            <SectionHeading id="s12">12. Communication and Management Review</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Sanitised audit findings shared with workforce via toolbox talks and HSE noticeboards.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Audit trend analysis is a standing item at the monthly management review (PROC-SYS-002).</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Systemic issues — patterns across sites — are escalated to MD for strategic decision.</Bullet>
            </ul>

            <SectionHeading id="s13">13. Performance Indicators</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>[NEEDS CEO REVIEW — targets indicative]</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>KPI</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Target</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Frequency</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Annual audit programme completed</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Annual</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Major non-conformities closed within 30 days</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≥ 90%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Per audit cycle</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Minor non-conformities closed within 60 days</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≥ 85%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Per audit cycle</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Repeat findings (same issue audit-to-audit)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≤ 10%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Annual</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Auditor competence currency</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Annual</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Audit reports issued within 5 days of closing</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Per audit</td>
                </tr>
                </tbody>
              </table>
            </div>

            <SectionHeading id="s14">14. References</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>ISO 19011:2018 — Guidelines for Auditing Management Systems.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>ISO 45001:2018 — Clauses 9.2 (Internal Audit), 9.3 (Management Review), 10.2 (Non-conformity and Corrective Action).</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>ISO 14001:2015 — Clauses 9.2, 9.3, 10.2.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>MHRSD, MEWA, NCEC, Saudi Civil Defense — applicable KSA regulations.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>TEMC PROC-SYS-004 Internal Audit; PROC-SYS-005 CAPA; PROC-HSE-011 Periodic Inspection.</Bullet>
            </ul>

            <SectionHeading id="s15">15. Related Forms and Records</SectionHeading>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Record</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Owner</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Retention</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Annual Audit Programme</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager / MR</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Audit Plans and Checklists</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Lead Auditor</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Audit Reports</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager / MR</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Corrective Action Records (FRM-SYS-003)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>QA / MR</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Auditor Competence Register</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Life of IMS</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Management Review Minutes</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>QA / MR</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Life of IMS + 5 years</td>
                </tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Rev</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Date</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Description of Changes</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Author</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>00</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>14.04.2025</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Initial issue</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MR</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>01</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>10.04.2026</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Full rebuild — aligned with ISO 19011, added explicit auditor competence and independence requirements, finding classification and closure target matrix, 5-day reporting rule, management review integration, KPI table with CEO review flag, records retention.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MR</td>
                </tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Role</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Name</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Signature</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Date</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Prepared by (HSE Manager / MR)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Reviewed by (QA)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Approved by (Managing Director)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                </tbody>
              </table>
            </div>

            </div>

            {/* Document footer */}
            <div className="flex items-center justify-between px-6 py-3 border-t" style={{ borderColor: "#dde3ec", backgroundColor: "#081C2E" }}>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                True East Mining Company &nbsp;·&nbsp; Integrated Management System &nbsp;·&nbsp; Confidential &nbsp;·&nbsp; Page 1
              </span>
              <img src={LOGO_WHITE} alt="" className="h-5 w-auto opacity-30" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
