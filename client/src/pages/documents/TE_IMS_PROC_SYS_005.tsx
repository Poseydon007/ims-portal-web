// TE-IMS-PROC-SYS-005 — Continual Improvement and CAPA Procedure
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

export default function TE_IMS_PROC_SYS_005() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "PROC — Procedures", href: "/docs/proc" },
          { label: "Continual Improvement and CAPA Procedure" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              Continual Improvement and CAPA Procedure
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-PROC-SYS-005_Rev01</span>
              <span style={{ color: "#c0c8d4" }}>·</span>
              <span className="text-xs" style={{ color: "#6b7a8d" }}>09 Apr 2026</span>
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
                ["Document Code", "TE-IMS-PROC-SYS-005"],
                ["Revision", "Rev 01"],
                ["Date", "09 Apr 2026"],
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-PROC-SYS-005_Rev01</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Continual Improvement and CAPA Procedure
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-6" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-PROC-SYS-005</td>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Revision</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>01</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Date</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>09 Apr 2026</td>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Status</td>
                    <td className="border px-3 py-2 font-bold" style={{ borderColor: "#dde3ec", color: "#155724" }}>Approved for Implementation</td>
                  </tr>
                </tbody>
              </table>

              {/* Document body content */}


            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>1. PURPOSE</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure establishes a systematic process for:</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Identifying opportunities for continual improvement of the Integrated Management System (IMS).</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Addressing non-conformities, incidents, near misses, and other undesirable situations.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Implementing corrective actions to eliminate root causes.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Preventing recurrence through preventive actions and systemic improvements.</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>It ensures compliance with:</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>ISO 9001:2015 (clause 10.3) — Continual improvement.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>ISO 14001:2015 (clause 10.3) — Continual improvement.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>ISO 45001:2018 (clause 10.2) — Incident, non-conformity and corrective action.</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>2. SCOPE</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure applies to:</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>All non-conformities (major and minor), incidents, accidents, and near misses.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Opportunities for improvement identified from audits, management reviews, employee suggestions, incident investigations, performance data, or external feedback.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Corrective and preventive actions arising from any source (internal audits, client complaints, regulatory findings, inspections).</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>3. DEFINITIONS</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Non-conformity — Non-fulfilment of a requirement (e.g., missing PPE, expired training, procedural deviation).</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Corrective Action — Action taken to eliminate the cause of a detected non-conformity and prevent recurrence.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Preventive Action — Proactive action taken to eliminate the cause of a potential non-conformity before it occurs.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>CAPA — Corrective Action / Preventive Action.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Root Cause — The underlying reason for a non-conformity, identified using structured techniques (5 Whys, fishbone, fault tree).</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>4. RESPONSIBILITIES</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>IMS Project Lead / Management Representative — Coordinate the CAPA process, maintain the CAPA Register, and verify effectiveness of closed actions.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>HSE Manager — Lead investigation of safety and environmental non-conformities; assign and track corrective actions.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Department Heads / Process Owners — Identify root causes, implement corrective actions in their area, and verify effectiveness.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>All Personnel — Report non-conformities, incidents, near misses, and improvement opportunities immediately.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>CEO / Managing Director — Review high-risk CAPAs in Management Review Meetings and allocate necessary resources.</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>5. PROCEDURE STEPS</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>1. Identify &amp; Report — Any employee or contractor identifies a non-conformity, incident, near miss, or improvement opportunity. Reports are submitted immediately using:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>› TE-IMS-FRM-HSE-002 — Incident / Accident Flash Notification (for incidents).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>› TE-IMS-FRM-HSE-003 — Near Miss Report Form (for near misses).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>› Verbal or email notice to supervisor / HSE for minor non-conformities and improvement ideas.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>2. Evaluate &amp; Classify — IMS Project Lead / HSE Manager evaluates within 24 hours:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>› Immediate containment actions (stop work, secure area, first aid).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>› Severity classification — Major (risk of fatality, major spill, regulatory violation) or Minor (low risk).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>› Assigns CAPA number in the CAPA Register (TE-IMS-REG-SYS-002).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>3. Investigate Root Cause — Use a structured method (5 Whys, fishbone diagram, fault tree analysis). Involve relevant personnel (witnesses, operators, supervisors).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Risk-based investigation teams:</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Minor Non-conformities: Investigation managed by the relevant Department Head.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Major Non-conformities: Require a formal multi-disciplinary team (HSE, Operations, Maintenance) for comprehensive failure analysis.</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>The Systemic Root Cause / “6th Why” rule:</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Investigations must push beyond “human error” as a final cause.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Auditors and investigators must identify systemic failures (e.g., inadequate budget, poor policy, cultural gaps, missing training).</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Root cause(s) are documented in the CAPA Report (TE-IMS-FRM-SYS-003).</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>4. Develop &amp; Approve Actions — Determine corrective actions (eliminate root cause) and preventive actions (avoid similar issues). Assign owner, deadline, and verification method. Approve actions: HSE Manager for minor; CEO for major.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>5. Implement Actions — Owner executes actions within the agreed deadline. Update affected documents (procedures, SOPs, forms) if required.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>6. Verify Effectiveness — IMS Project Lead verifies actions are implemented and effective (e.g., no recurrence within 3 months). Document verification in the CAPA Report and close the CAPA in the Register.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>7. Communicate &amp; Share Lessons — Communicate lessons learned via Toolbox Talks (TE-IMS-PROC-HSE-007). Include major findings in the Management Review (TE-IMS-PROC-SYS-002).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>6. RECORDS &amp; RETENTION</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>CAPA Register, reports, and verification evidence are retained for a minimum of 5 years.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Stored in a secure, controlled location within the IMS repository.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Tracked in the Master Document Register (TE-IMS-REG-SYS-001).</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>7. MONITORING &amp; CONTINUAL IMPROVEMENT</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Track KPIs: percentage of CAPAs closed on time, recurrence rate, number of improvement opportunities implemented.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Review effectiveness of this procedure annually during the Management Review Meeting.</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>8. RELATED DOCUMENTS</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>TE-IMS-FRM-SYS-003 — Corrective Action Request Form</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>TE-IMS-FRM-HSE-002 — Incident / Accident Flash Notification</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>TE-IMS-FRM-HSE-003 — Near Miss Report Form</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>TE-IMS-REG-SYS-002 — CAPA Register</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>TE-IMS-PROC-SYS-002 — Management Review Procedure</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>TE-IMS-PROC-SYS-004 — Internal Audit Procedure</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>TE-IMS-PROC-HSE-007 — Toolbox Talks Procedure</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>9. APPROVAL &amp; SIGN-OFF</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure is approved for implementation across True East Mining Company's Integrated Management System.</p>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Prepared by (IMS Lead)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Reviewed by (HSE Manager)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Approved by (CEO / MD)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>10. REVISION HISTORY</p>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>01 Mar 2026</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Initial release — Approved for Implementation.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Joao Melo</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>01</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>09 Apr 2026</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Reformatted to True East IMS design standard. Content preserved including systemic root cause (&quot;6th Why&quot;) rule and multi-disciplinary team requirement; added Related Documents and structured Sign-Off block. No change in intent or scope.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>IMS Project Lead</td>
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
