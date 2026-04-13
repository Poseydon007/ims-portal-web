// TE-IMS-PROC-SYS-006 — Checklist and Register Control Procedure
// Design: Standardized policy layout — left sidebar (Doc Info + TOC) + main content area

import { Link } from "wouter";
import { TopNav, Footer, Breadcrumb } from "@/components/Layout";
import { LOGO_GRAY, LOGO_WHITE } from "@/lib/imsData";

const sections = [
  { id: "s1", label: "1. Purpose" },
  { id: "s2", label: "2. Scope" },
  { id: "s3", label: "3. Definitions" },
  { id: "s4", label: "4. Responsibilities" },
  { id: "s5", label: "5. General Requirements" },
  { id: "s6", label: "6. Controlled Register Catalogue" },
  { id: "s7", label: "7. Creation and Approval" },
  { id: "s8", label: "8. Issue and Use" },
  { id: "s9", label: "9. Review and Audit" },
  { id: "s10", label: "10. Corrective Action" },
  { id: "s11", label: "11. Retention and Disposal" },
  { id: "s12", label: "12. Performance Indicators" },
  { id: "s13", label: "13. References" },
  { id: "s14", label: "14. Related Documents and Records" },
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

export default function TE_IMS_PROC_SYS_006() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "PROC — Procedures", href: "/docs/proc" },
          { label: "Checklist and Register Control Procedure" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              Checklist and Register Control Procedure
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-PROC-SYS-006_Rev01</span>
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
                ["Document Code", "TE-IMS-PROC-SYS-006"],
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-PROC-SYS-006_Rev01</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Checklist and Register Control Procedure
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-6" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-PROC-SYS-006</td>
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

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure establishes a standardised process for creating, issuing, completing, reviewing, retaining, and disposing of checklists and registers within the True East Mining Company (TEMC) Integrated Management System. Checklists and registers are the core records that prove day-to-day operational, safety, and environmental controls are actually in place. This procedure ensures they are consistent, auditable, and traceable, and supports ISO 9001:2015 (Clause 7.5 Documented Information), ISO 14001:2015, and ISO 45001:2018 (Clauses 7.5, 8.1, 9.1, 10.2).</p>

            <SectionHeading id="s2">2. Scope</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure applies to every controlled checklist and register used across TEMC operations in the Kingdom of Saudi Arabia — firefighting equipment, first aid, machine guarding, portable electrical equipment, PPE issue, safety harness, working at height, vehicle inspection, toolbox talk attendance, training attendance, visitor log, gate register, maintenance log, environmental inspection, waste manifest, and any similar record.</p>

            <SectionHeading id="s3">3. Definitions</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Checklist — a pre-printed or digital form used to verify that a set of defined items or conditions have been checked.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Register — a chronological record of events, inspections, issues, or actions — typically accumulating entries over time.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Controlled Document — an IMS document with a unique code, revision, owner, and formal approval.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Record Custodian — the person or role responsible for maintaining, storing, and archiving a specific register.</Bullet>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Management Representative (MR)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Owns this procedure. Maintains the master list of controlled checklists and registers. Ensures formats comply with IMS standards.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Implements HSE-related checklists and registers. Conducts audits. Drives corrective action.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Department Heads / Supervisors</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Ensure checklists and registers in their area are completed accurately and on time. Sign off entries. Escalate gaps.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Record Custodians</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Maintain, file, and archive registers per retention rules. Ensure access for authorised users.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Employees / Users</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Complete assigned checklists honestly, on time, and in full. Report defects and escalate issues.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <SectionHeading id="s5">5. General Requirements</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>All checklists and registers use a standardised TEMC format — document code, title, revision, date, owner, and clear headings.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Digital or physical medium — both acceptable if integrity and access are controlled.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Entries are real-time or as soon as practicable after the event; no retrospective entries without clear annotation.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>All entries are legible, dated, and signed (or digitally authenticated) by the responsible person.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Corrections are made with a single strikethrough, initialled, and dated; never erased or over-written.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Registers are stored securely — locked cabinet for physical, controlled access for digital — to prevent loss, tampering, or unauthorised access.</Bullet>
            </ul>

            <SectionHeading id="s6">6. Controlled Register Catalogue</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>The Management Representative maintains a master catalogue of all controlled checklists and registers, each with owner, frequency, retention, and ISO clause anchor. The minimum standard for the following core registers is:</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Register</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Frequency</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Retention</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Firefighting Equipment Register (FRM-HSE-xxx)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly + on event</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>First Aid Register</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Weekly + on event</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Machine Guarding Register (FRM-MAINT-001)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Portable Electrical Equipment Register (FRM-MAINT-003)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Quarterly</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>PPE Issue Register</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>On issue / return</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Employment + 2 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Safety Harness Register</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Pre-use + monthly</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Life of harness</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Toolbox Talk Attendance Register</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Daily / per shift</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>12 months</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Training Attendance Register (FRM-TRN-001)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Per session</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Vehicle Handover / Daily Checklist (FRM-LOG-001/002)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Per shift</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Incident / Flash Register (FRM-HSE-005)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>On event</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years</td>
                </tr>
                </tbody>
              </table>
            </div>

            <SectionHeading id="s7">7. Creation and Approval</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>New checklists or registers are proposed by the process owner to the Management Representative.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>The MR assigns a TE-IMS document code (FRM or REG), revision 00, and ensures format alignment with IMS standards.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Drafts are reviewed by QA / HSE and approved by the Managing Director before release.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Released checklists and registers are listed in the Master Document List (REG-SYS-001).</Bullet>
            </ul>

            <SectionHeading id="s8">8. Issue and Use</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Current approved revision is the only one in use; superseded revisions are withdrawn.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Field copies (paper) are clearly marked &quot;Current Revision&quot; or equivalent; printed copies without control marking are uncontrolled.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Digital checklists use the current template only; older templates are archived.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Users trained on how and when to complete each checklist before use.</Bullet>
            </ul>

            <SectionHeading id="s9">9. Review and Audit</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Department Heads review completed entries in their area at least monthly for completeness, accuracy, and timeliness.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>The HSE Manager audits HSE-related registers quarterly — verifies entries, cross-checks against incidents, maintenance logs, and training records.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Internal Audit (PROC-SYS-001) verifies this procedure as part of the IMS audit plan.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Findings are documented and corrective actions raised under PROC-SYS-008.</Bullet>
            </ul>

            <SectionHeading id="s10">10. Corrective Action</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Non-conformances — missing entries, overdue inspections, unsigned records — are raised via Corrective Action Request (FRM-SYS-001) under PROC-SYS-008.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Corrective actions closed within 7 days for minor gaps; target closure per PROC-SYS-008 for major findings.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Repeat non-conformance triggers root cause analysis and training refresher.</Bullet>
            </ul>

            <SectionHeading id="s11">11. Retention and Disposal</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Each register is retained for its specified minimum retention period, or longer if required by KSA regulation or client contract.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>At end-of-retention: physical records shredded under supervision; digital records securely deleted; disposal logged in the Records Disposal Register.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Sensitive employee, medical, or client-confidential records follow the stricter retention and disposal requirements applicable.</Bullet>
            </ul>

            <SectionHeading id="s12">12. Performance Indicators</SectionHeading>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Checklists completed on time (by sample)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≥ 98%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Registers audited against schedule</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Quarterly</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Non-conformance gaps closed ≤ 7 days</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≥ 95%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Controlled register master list up to date</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Quarterly</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Retention compliance (no premature disposal)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Annual</td>
                </tr>
                </tbody>
              </table>
            </div>

            <SectionHeading id="s13">13. References</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>ISO 9001:2015 — Clause 7.5 Documented Information.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>ISO 14001:2015 — Clause 7.5 Documented Information.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>ISO 45001:2018 — Clauses 7.2 Competence, 7.5 Documented Information, 8.1 Operational Control, 9.1 Monitoring, 10.2 Incident / Non-Conformity.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>TEMC PROC-SYS-001 Internal Audit; PROC-SYS-008 Corrective Action; IMS Master Document List (REG-SYS-001).</Bullet>
            </ul>

            <SectionHeading id="s14">14. Related Documents and Records</SectionHeading>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Master Checklist and Register Catalogue</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Management Representative</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Life of IMS</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Audit Findings on Registers</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE / QA</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Corrective Action Requests (FRM-SYS-001)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MR</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Records Disposal Register</td>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Full rebuild — added definitions, responsibilities table, master register catalogue with frequency and retention, creation/approval workflow, review/audit, retention and disposal rules including secure disposal, KPI table with CEO review flag, explicit ISO clause anchors.</td>
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
