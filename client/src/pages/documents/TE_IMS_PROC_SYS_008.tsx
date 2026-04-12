// TE-IMS-PROC-SYS-008 — Corrective Action Procedure
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

export default function TE_IMS_PROC_SYS_008() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "PROC — Procedures", href: "/docs/proc" },
          { label: "Corrective Action Procedure" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              Corrective Action Procedure
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-PROC-SYS-008_Rev01</span>
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
                ["Document Code", "TE-IMS-PROC-SYS-008"],
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-PROC-SYS-008_Rev01</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Corrective Action Procedure
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-6" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-PROC-SYS-008</td>
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

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure establishes the True East Mining Company (TEMC) system for identifying, recording, investigating, correcting, and preventing recurrence of non-conformities across the Integrated Management System. It covers customer complaints, supplier and vendor issues, internal process failures, audit findings, and safety / environmental incidents. It ensures compliance with ISO 9001:2015 (Clause 10.2), ISO 14001:2015 (Clause 10.2), and ISO 45001:2018 (Clause 10.2) and supports TEMC's continual improvement commitment.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>2. Scope</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure applies to the handling of non-conformities from any source within the TEMC IMS:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Customer / client complaints.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Non-conforming materials, products, or services from suppliers or sub-contractors.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Internal process failures, deviations, and missed KPIs.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Internal and external audit findings (ISO 9001 / 14001 / 45001).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Safety incidents, environmental events, and near-misses (interfacing with PROC-HSE-006 Incident Investigation).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Regulatory findings from MHRSD, MEWA, NCEC, or client authorities.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>3. Definitions</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Non-Conformity (NC) — non-fulfilment of a specified requirement.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Correction — immediate action to address a detected non-conformity.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Corrective Action (CA) — action taken to eliminate the cause of a non-conformity to prevent recurrence.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Preventive Action — action taken to eliminate the cause of a potential non-conformity.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Root Cause Analysis (RCA) — a structured investigation technique (5 Why, Fishbone, or equivalent) to identify the underlying cause of a non-conformity.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• NCR — Non-Conformance Report — the formal document raising, tracking, and closing a non-conformity.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• CAR — Corrective Action Request — the action plan arising from an NCR, assigned to an owner with a target date.</p>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Reviews major non-conformities and corrective action performance at management review.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Management Representative (MR)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Owns this procedure. Issues NCR numbers. Logs all NCRs and CARs. Verifies effectiveness. Reports trends and metrics.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Department Heads / Function Owners</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Investigate non-conformities in their area. Determine root cause. Propose and implement corrective action. Close NCRs on time.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Owns HSE and environmental non-conformities (interfaces with PROC-HSE-006 Incident Investigation). Coordinates with MR on IMS-wide issues.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Purchasing / Procurement</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Investigates and resolves supplier and vendor non-conformities; updates Approved Supplier List.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Any Employee</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>May raise a non-conformity via supervisor or directly to the MR.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>5. Process</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• 5.1 Identification — any employee who detects a non-conformity reports it through their supervisor, or directly to the Management Representative for serious or cross-functional issues.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• 5.2 Initiation — the MR or authorised employee initiates the NCR on form FRM-SYS-001 describing the problem, source, date, evidence, and immediate containment taken.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• 5.3 Logging — the MR assigns a unique NCR number (e.g. NCR-2026-001), records it in the NCR Log (REG-SYS-002), and classifies severity (Minor / Major / Critical).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• 5.4 Review and Root Cause Analysis — the MR and the function owner review the NCR. Root cause analysis is performed using 5 Why, Fishbone, or equivalent. External specialist support is used for complex issues.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• 5.5 Action Planning — suitable corrective action is defined with a responsible owner and target date. Preventive actions are identified where the same cause could drive other non-conformities.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• 5.6 Implementation — the assigned owner implements the agreed action within the target date. Progress is tracked in the NCR Log.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• 5.7 Verification of Effectiveness — the MR verifies the action was implemented and — critically — that the non-conformity has not recurred. Verification method and evidence are recorded.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• 5.8 Closure — once verified effective, the MR signs off and closes the NCR. Unresolved or ineffective actions are re-opened and escalated.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• 5.9 Escalation — overdue or ineffective corrective actions are escalated to the MD and reviewed at management review.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>6. Classification and Timeframes</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Severity</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Definition</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Target Closure</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Minor</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Isolated, low-impact, no safety/environmental/contractual risk.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≤ 30 days</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Major</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Repeat issue, customer impact, audit finding, or systemic gap.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≤ 60 days</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Critical</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Safety incident, environmental event, regulatory breach, or contract-threatening.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≤ 14 days (interim) + full closure per RCA</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>7. Interface with Other Procedures</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Safety and environmental incidents are investigated per PROC-HSE-006 Incident Investigation; an NCR is raised for each to close the loop in this procedure.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Audit findings (internal and external) are logged as NCRs and tracked to closure under this procedure.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Customer complaints are logged and escalated via the MR and the relevant Department Head.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Trends and recurring non-conformities are reported to the Management Review (per PROC-SYS-003).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>8. Records and Monitoring</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• All NCRs, CARs, and supporting evidence are retained by the MR for a minimum of three (3) years or longer if client / regulatory requirements apply.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Trend analysis by category, source, and department is prepared monthly and reviewed at management review.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Overdue NCRs are highlighted in the monthly QHSE report.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>9. Performance Indicators</p>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>NCRs closed within target date</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≥ 90%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Recurring NCRs (same root cause within 12 months)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>↓ trend</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Quarterly</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Root cause analysis completed on Major / Critical NCRs</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Per NCR</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Verification of effectiveness rate</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Per NCR</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Overdue NCRs</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>0</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Audit findings closed within agreed date</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≥ 95%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Quarterly</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>10. References</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 9001:2015 — Clause 10.2 Non-conformity and Corrective Action.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 14001:2015 — Clause 10.2 Non-conformity and Corrective Action.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 45001:2018 — Clause 10.2 Incident, Non-conformity and Corrective Action.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TEMC PROC-HSE-006 Incident Investigation; PROC-SYS-001 Internal Audit; PROC-SYS-003 Management Review; PROC-SCM-001 Site Supply.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>11. Related Documents and Records</p>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Corrective Action Request (FRM-SYS-001)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MR</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Non-Conformance Report Log (REG-SYS-002)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MR</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Root Cause Analysis records</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MR / Owner</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Audit Finding Register</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MR / Internal Audit</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Management Review Minutes</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MR</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Life of IMS</td>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Full rebuild — added scope bullets, formal definitions (NC, CA, PA, RCA, NCR, CAR), responsibilities table, 9-step process, severity/timeframe classification table, interface with PROC-HSE-006 and audit findings, KPI table with CEO review flag, records retention table, explicit ISO 10.2 anchors across all three standards.</td>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Prepared by (Management Representative)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Reviewed by (QA / HSE)</td>
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
