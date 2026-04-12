// TE-IMS-PROC-HSE-012 — HSE Site Audit Procedure
// Design: Standardized policy layout — left sidebar (Doc Info + TOC) + main content area

import { Link } from "wouter";
import { TopNav, Footer, Breadcrumb } from "@/components/Layout";
import { LOGO_GRAY, LOGO_WHITE } from "@/lib/imsData";

const sections = [
  { id: "s1", label: "1. Purpose" },
  { id: "s2", label: "2. Scope" },
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


            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>1. Purpose</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure defines how True East Mining Company (TEMC) plans, conducts, reports, and follows up HSE site audits. The objective is to independently verify conformity with ISO 45001:2018, ISO 14001:2015, Saudi regulatory requirements (MHRSD, MEWA, NCEC, Saudi Civil Defense), and internal IMS documentation — and to drive continual improvement. Site audits complement the periodic inspections (PROC-HSE-011) and internal system audits (PROC-SYS-004).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>2. Scope</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure applies to all TEMC drilling, exploration, and support sites in the Kingdom of Saudi Arabia. It covers employees, contractors, processes, equipment, and documentation present at the audited site. Audits may be internal (TEMC HSE team or corporate) or external (client / regulator / certification body).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>3. Definitions</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Audit — a systematic, independent, and documented process to obtain objective evidence and evaluate it against audit criteria (ISO 19011).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Audit Criteria — the set of policies, procedures, standards, and regulations used as a reference for comparison.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Audit Evidence — records, statements of fact, or other information relevant to the audit criteria that is verifiable.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Audit Finding — result of the evaluation of audit evidence against audit criteria. May be a Non-Conformity, Observation, or Opportunity for Improvement.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Major Non-Conformity — absence or total breakdown of a system to meet a requirement, or a situation that would, on the basis of objective evidence, raise doubts about conformity — serious effect on safety, environment, or the IMS.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Minor Non-Conformity — isolated, non-systemic lapse in conformity.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Observation / OFI — improvement opportunity; not a non-conformity.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Lead Auditor — competent person leading the audit team, responsible for planning, conduct, and report.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>4. Responsibilities</p>

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

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>5. Audit Programme and Frequency</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Annual HSE Audit Programme approved by MD, covering all active sites and key contractors.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Minimum frequency: each active TEMC site audited at least once per year; high-risk sites or sites with repeat findings audited more often.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Client-driven or regulator-driven audits are scheduled as required and added to the programme.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Risk-based selection — prior incidents, findings, contractor changes, or new scope trigger additional audits.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Auditor independence — auditors must not audit their own area of responsibility (ISO 45001 Clause 9.2.2 and ISO 14001 Clause 9.2).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>6. Auditor Competence</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Lead Auditor requirements: ISO 45001 / 14001 internal auditor qualification (or equivalent), minimum 2 prior audits, site HSE experience.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Team members: ISO awareness training or subject matter expertise in the audited discipline.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Auditor competence is recorded in the auditor register and refreshed every 3 years.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>7. Audit Preparation</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Audit plan — scope, criteria, objectives, team, schedule, area coverage. Issued to auditee at least 7 days in advance (except for unannounced audits).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Checklist — developed from IMS documents and ISO clauses. Covers policies, procedures, risk registers, CARs, training, inspections, permits, equipment, environmental controls, emergency preparedness.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Document review — prior to site visit — IMS documents, previous audit reports, inspection records, incident log, training register.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Opening meeting — introduce team, confirm scope, agree logistics, confirm confidentiality, agree reporting channels.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>8. Conducting the Audit</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Site walk-through, observation of work in progress, equipment condition, PPE compliance, housekeeping.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Document sampling — permits, inspections, training records, toolbox talks, first aid log, waste manifests.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Interviews — workers, supervisors, HSE, contractors — to verify awareness of procedures, hazards, emergency response.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Cross-check evidence — claims must be corroborated with documents and observation.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Each potential finding is discussed with the auditee for clarification before it is finalised.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Stop-work action — if the audit reveals an imminent danger, the Lead Auditor notifies the SSE immediately for Stop Work.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>9. Finding Classification</p>

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

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>10. Reporting</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Audit Report issued within 5 working days of the closing meeting.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Report content: scope, criteria, team, dates, areas audited, findings with evidence, classification, positive practices, conclusions.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Distribution: SSE, HSE Manager, MR, MD, and auditee management. Filed in IMS.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Findings raised as CARs per FRM-SYS-003 with owners and due dates.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>11. Corrective Action and Follow-Up</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Auditee develops the corrective action plan within 10 working days of receiving the report.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Root cause analysis applied per PROC-SYS-005 for each non-conformity.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Actions implemented and evidence uploaded to the CAR register.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Lead Auditor (or MR) verifies closure and effectiveness — desktop review for minor, physical re-verification for major.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Closed finding is signed off in the CAR register and audit report annex.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>12. Communication and Management Review</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Sanitised audit findings shared with workforce via toolbox talks and HSE noticeboards.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Audit trend analysis is a standing item at the monthly management review (PROC-SYS-002).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Systemic issues — patterns across sites — are escalated to MD for strategic decision.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>13. Performance Indicators</p>

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

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>14. References</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 19011:2018 — Guidelines for Auditing Management Systems.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 45001:2018 — Clauses 9.2 (Internal Audit), 9.3 (Management Review), 10.2 (Non-conformity and Corrective Action).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 14001:2015 — Clauses 9.2, 9.3, 10.2.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• MHRSD, MEWA, NCEC, Saudi Civil Defense — applicable KSA regulations.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TEMC PROC-SYS-004 Internal Audit; PROC-SYS-005 CAPA; PROC-HSE-011 Periodic Inspection.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>15. Related Forms and Records</p>

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
