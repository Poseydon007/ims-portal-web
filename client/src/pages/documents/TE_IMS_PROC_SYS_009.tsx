// TE-IMS-PROC-SYS-009 — QHSE Objectives Procedure
// Design: Standardized policy layout — left sidebar (Doc Info + TOC) + main content area

import { Link } from "wouter";
import { TopNav, Footer, Breadcrumb } from "@/components/Layout";
import { LOGO_GRAY, LOGO_WHITE } from "@/lib/imsData";

const sections = [
  { id: "s1", label: "1. Purpose" },
  { id: "s2", label: "2. Scope" },
  { id: "s3", label: "3. Definitions and Abbreviations" },
  { id: "s4", label: "4. Responsibilities" },
  { id: "s5", label: "5. Objective Setting Process" },
  { id: "s6", label: "6. Monitoring and Measurement" },
  { id: "s7", label: "7. Review and Reporting" },
  { id: "s8", label: "8. Revision of Objectives" },
  { id: "s9", label: "9. Example Objective Categories" },
  { id: "s10", label: "10. Performance Indicators (for this procedure)" },
  { id: "s11", label: "11. References" },
  { id: "s12", label: "12. Related Documents and Records" },
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

export default function TE_IMS_PROC_SYS_009() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "PROC — Procedures", href: "/docs/proc" },
          { label: "QHSE Objectives Procedure" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              QHSE Objectives Procedure
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-PROC-SYS-009_Rev01</span>
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
                ["Document Code", "TE-IMS-PROC-SYS-009"],
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-PROC-SYS-009_Rev01</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  QHSE Objectives Procedure
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-6" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-PROC-SYS-009</td>
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

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure defines how True East Mining Company (TEMC) sets, communicates, monitors, reviews, and reports Quality, Health, Safety, and Environment (QHSE) objectives across the Integrated Management System. It ensures that objectives drive measurable continual improvement and are consistent with the TEMC QHSE Policy, ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 (all Clause 6.2).</p>

            <SectionHeading id="s2">2. Scope</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure applies to all TEMC processes, departments, and sites, including drilling operations, maintenance, HSE, logistics, procurement, HR, and administration. It covers corporate-level objectives set by the Managing Director and departmental objectives cascaded from them.</p>

            <SectionHeading id="s3">3. Definitions and Abbreviations</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>QHSE Objective — a specific, measurable target for quality, health, safety, or environmental performance.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>SMART — Specific, Measurable, Achievable, Realistic, Time-bound — the required quality of every objective.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>KPI — Key Performance Indicator — the metric used to track an objective.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>MR — Management Representative.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>MD — Managing Director.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>HOD — Head of Department.</Bullet>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Approves the annual TEMC QHSE Objectives. Reviews performance at the Management Review. Allocates resources to achieve targets.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Management Representative (MR)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Owns this procedure. Coordinates objective setting, cascading, monitoring, and reporting. Maintains the QHSE Objectives Register.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Department Heads (HOD)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Cascade corporate objectives to departmental objectives. Own and report on their objectives. Provide data to the MR.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Owns HSE and environmental objectives. Supports HODs with data and interpretation.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>All Employees</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Contribute to achievement of the objectives through their day-to-day work.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <SectionHeading id="s5">5. Objective Setting Process</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>5.1 Corporate Objectives — the Managing Director, supported by the MR and senior management, sets annual corporate QHSE Objectives aligned with the TEMC QHSE Policy, strategic plan, risks and opportunities (Clause 6.1), legal requirements, and customer commitments.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>5.2 SMART Quality — every objective is Specific, Measurable, Achievable, Realistic, and Time-bound, with a clearly identified KPI, baseline, target, and review frequency.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>5.3 Departmental Objectives — HODs cascade corporate objectives into departmental objectives relevant to their process. Each departmental objective has an owner, data source, baseline, target, and review frequency.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>5.4 Approval and Communication — the MD approves the consolidated QHSE Objectives Register. The MR communicates objectives to all departments and to the workforce through toolbox talks, notice boards, and induction.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>5.5 Action Plans — for each objective, the owner prepares a brief action plan — tasks, resources, responsibilities, timeline. Plans are reviewed and updated quarterly.</Bullet>
            </ul>

            <SectionHeading id="s6">6. Monitoring and Measurement</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Departments collect KPI data per the defined review frequency (monthly, quarterly, annually).</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Data is submitted to the MR on schedule; late or missing data is flagged and followed up.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>The MR maintains the QHSE Objectives Monitoring Record (REG-SYS-003) — current value, trend, status (on track / at risk / off track).</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Objectives trending off-target trigger a corrective action under PROC-SYS-008.</Bullet>
            </ul>

            <SectionHeading id="s7">7. Review and Reporting</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Quarterly: HODs review their objectives with the MR; corrective action raised for any off-track objective.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Annually: the MR consolidates a full QHSE Objectives Report for the Management Review (PROC-SYS-003).</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Management Review endorses performance, approves revised objectives for the next cycle, and commits resources.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>During internal audits, the MR verifies that objectives are understood, measured, and driving improvement.</Bullet>
            </ul>

            <SectionHeading id="s8">8. Revision of Objectives</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Objectives may be revised mid-cycle if: strategic direction changes, a significant incident occurs, regulatory requirements change, client expectations shift, or the objective is found unachievable.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Changes are approved by the MD, logged in the Objectives Register with a revision note, and communicated to affected departments.</Bullet>
            </ul>

            <SectionHeading id="s9">9. Example Objective Categories</SectionHeading>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Category</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Example Objective</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>KPI</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Safety</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Zero lost-time injuries</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>LTI count, LTIFR</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Environment</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Zero reportable spills</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Reportable spill events</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Quality</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Drilling programme compliance ≥98%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>% of programmes executed as specified</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Training</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100% mandatory training currency</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>% employees current on mandatory training</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Client</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>On-time delivery ≥95%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>% milestones delivered on time</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Continual improvement</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Close 90% of NCRs within target</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>% NCRs closed on time</td>
                </tr>
                </tbody>
              </table>
            </div>

            <SectionHeading id="s10">10. Performance Indicators (for this procedure)</SectionHeading>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Corporate QHSE Objectives approved before start of year</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Annual</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Departmental objectives cascaded on time</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Annual</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monitoring data submitted on schedule</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≥ 95%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Objectives on track at quarterly review</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≥ 80%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Quarterly</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Management Review attendance and objective sign-off</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Annual</td>
                </tr>
                </tbody>
              </table>
            </div>

            <SectionHeading id="s11">11. References</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>ISO 9001:2015 — Clause 6.2 Quality Objectives and Planning to Achieve Them.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>ISO 14001:2015 — Clause 6.2 Environmental Objectives and Planning to Achieve Them.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>ISO 45001:2018 — Clause 6.2 OH&amp;S Objectives and Planning to Achieve Them.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>TEMC QHSE Policy; PROC-SYS-001 Internal Audit; PROC-SYS-003 Management Review; PROC-SYS-008 Corrective Action; PROC-SYS-006 Checklist and Register Control.</Bullet>
            </ul>

            <SectionHeading id="s12">12. Related Documents and Records</SectionHeading>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>QHSE Objectives Register (annual)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Management Representative</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Life of IMS</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>QHSE Objectives Monitoring Record (REG-SYS-003)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MR</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Departmental Action Plans</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HODs</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 years</td>
                </tr>
                <tr >
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Full rebuild — added definitions including SMART and KPI, expanded responsibilities table, formal 5-step objective setting process, monitoring and review with REG-SYS-003, example objective categories table, revision-of-objectives rules, KPI table with CEO review flag, explicit Clause 6.2 anchors in all three ISO standards.</td>
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
