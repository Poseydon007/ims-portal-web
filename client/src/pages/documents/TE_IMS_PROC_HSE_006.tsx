// TE-IMS-PROC-HSE-006 — Incident and Accident Investigation Procedure
// Design: Standardized policy layout — left sidebar (Doc Info + TOC) + main content area

import { Link } from "wouter";
import { TopNav, Footer, Breadcrumb } from "@/components/Layout";
import { LOGO_GRAY, LOGO_WHITE } from "@/lib/imsData";

const sections = [
  { id: "s1", label: "1. Purpose" },
  { id: "s2", label: "2. Scope" },
  { id: "s3", label: "3. Definitions and Abbreviations" },
  { id: "s4", label: "4. Responsibilities" },
  { id: "s5", label: "5. Incident Reporting" },
  { id: "s6", label: "6. Incident / Accident Investigation" },
  { id: "s7", label: "7. Corrective and Preventive Actions (CAPA)" },
  { id: "s8", label: "8. Safety Culture Monitoring" },
  { id: "s9", label: "9. Training and Competency" },
  { id: "s10", label: "10. Monitoring, Audit, and Continual Improvement" },
  { id: "s11", label: "11. Performance Indicators" },
  { id: "s12", label: "12. References" },
  { id: "s13", label: "13. Records Retention" },
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

export default function TE_IMS_PROC_HSE_006() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "PROC — Procedures", href: "/docs/proc" },
          { label: "Incident and Accident Investigation Procedure" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              Incident and Accident Investigation Procedure
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-PROC-HSE-006_Rev01</span>
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
                ["Document Code", "TE-IMS-PROC-HSE-006"],
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-PROC-HSE-006_Rev01</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Incident and Accident Investigation Procedure
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-6" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-PROC-HSE-006</td>
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

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>To establish a systematic process for reporting, investigating, analysing root causes, and implementing corrective and preventive actions (CAPA) for all incidents, accidents, near misses, and non-conformities at True East Mining Company (TEMC) sites. This procedure ensures staff awareness of safety procedures, reduces the probability of recurrence, and promotes continual improvement in strict alignment with ISO 45001:2018 (Clauses 10.2 Incident, Nonconformity and Corrective Action, 9.3 Management Review, 10.3 Continual Improvement) and KSA MHRSD occupational safety regulations.</p>

            <SectionHeading id="s2">2. Scope</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure applies to all incidents and accidents — fatalities, lost time injuries (LTI), medical treatment cases, first aid cases, near misses, property damage, environmental releases, fires, explosions, gas leakages, and chemical spills. It covers all TEMC employees, contractors, visitors, subcontractors, and third parties working on behalf of the Company at drill rigs, exploration camps, workshops, core yards, offices, and client sites.</p>

            <SectionHeading id="s3">3. Definitions and Abbreviations</SectionHeading>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Term / Abbreviation</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Definition</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Incident / Accident</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Any unplanned event resulting in injury, illness, damage, or a near miss.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Near Miss</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>An event with the potential to cause harm, but where no actual injury or damage occurred.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Root Cause</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>The fundamental, underlying reason(s) for the incident, typically identified using tools such as 5 Whys, Fishbone, or Bow-Tie analysis.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Corrective Action</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Action taken to eliminate the root cause of a detected non-conformity or incident.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Preventive Action</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Action taken to eliminate the cause of a potential non-conformity before it occurs.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>LTI</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Lost Time Injury — injury resulting in at least one full shift away from work.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MD / MR / HOD</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Managing Director / Management Representative / Head of Department.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>CAPA</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Corrective and Preventive Action.</td>
                </tr>
                </tbody>
              </table>
            </div>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Managing Director</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Reviews serious incidents at management meetings, approves high-level corrective actions, dictates safety culture initiatives, notified immediately for any Fatality or LTI.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Management Representative</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Circulates finalised reports, discusses systemic trends at Management Review, tracks action closure, maintains the IMS Action Register.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Owns this procedure; leads formal investigations; ensures MHRSD / MOI notification within 24 hours for reportable incidents; monitors trend data.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Safety Officer / HSE Team</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Leads immediate reporting; conducts investigations and root cause analysis; prepares reports; communicates findings; tracks CAPA closure.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Operations Manager / Site Supervisor</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Ensures immediate notification; secures the incident scene; supports the investigation process.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Shift In-Charge / Supervisors</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Reports incidents immediately upon occurrence; assists in initial emergency response.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>All Personnel</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Report incidents and near misses promptly; cooperate fully and honestly during investigations; participate in learning sessions.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <SectionHeading id="s5">5. Incident Reporting</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>5.1 Immediate Notification — any incident or accident with the potential to escalate (fire, serious injury, gas leak, chemical release) is reported immediately via radio or phone to the Operations Manager, Site In-Charge, and Safety Officer.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>5.2 Flash Notification — for any deviation, non-conformity, or incident, the Safety Officer completes the Incident Flash Notification Form (FRM-HSE-002) immediately and distributes it to management.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>5.3 Executive Alert — the Safety Officer informs the Managing Director verbally / by telephone immediately for any Fatality, Lost Time Injury, or major environmental release.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>5.4 Regulatory Reporting — the HSE Manager notifies relevant KSA authorities (MHRSD and, where applicable, MOI / NCEC / Civil Defense) within 24 hours for all reportable incidents in accordance with Saudi Labor Law and environmental regulation. Client notification is made in parallel where contractually required.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>5.5 Dangerous Occurrence — events that could have caused serious harm but did not (e.g. rig collapse, uncontrolled release, crane load drop) are reported on the Dangerous Occurrence Report Form (FRM-HSE-024).</Bullet>
            </ul>

            <SectionHeading id="s6">6. Incident / Accident Investigation</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>6.1 Scene Preservation — the Operations Manager and Safety Officer secure and preserve the incident scene until initial evidence is gathered. Work is suspended in the affected area.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>6.2 Fact Gathering — the Safety Officer and Operations Manager interview involved workers, eyewitnesses, and supervisors as soon as possible while memories are fresh. Photographs, sketches, equipment logs, and permits are collected.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>6.3 Root Cause Analysis — the Safety Officer leads a formal investigation to determine the root cause using established methodologies — 5 Whys, Fishbone (Ishikawa) diagram, or Bow-Tie analysis, selected by the complexity of the event.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>6.4 Classification — the incident is classified by severity (Minor / Serious / Major / Catastrophic) and type (injury, environmental, property, process, security). Classification drives the investigation depth and reporting.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>6.5 Report Preparation — the Safety Officer prepares the formal Investigation Report (FRM-HSE-022) and submits it to the MD for discussion in the executive management meeting within 7 days (14 days for Major events requiring specialist input).</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>6.6 Communication — identified root causes and required corrective actions are communicated to all relevant departments through Toolbox Talks (PROC-HSE-007) and Safety Bulletins.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>6.7 Cross-Site Monitoring — the Safety Officer ensures similar risks are monitored across all Company sites to prevent recurrence elsewhere. Lessons-learned notes are circulated to all HSE Officers.</Bullet>
            </ul>

            <SectionHeading id="s7">7. Corrective and Preventive Actions (CAPA)</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>All corrective and preventive actions are assigned to a specific responsible person, given a hard deadline, and require a formal verification method.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>All actions are tracked continuously in the master IMS Action Register maintained by the MR.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>All incidents from the previous financial year are discussed in the annual Management Review Meeting (PROC-SYS-002).</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>The MD reviews the status of open investigations and the effectiveness of closed CAPAs.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>The MR circulates the finalised Management Review report to department heads to reduce systemic violations.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Repeat incidents of the same root cause are treated as Major non-conformances under PROC-SYS-008 Corrective Action.</Bullet>
            </ul>

            <SectionHeading id="s8">8. Safety Culture Monitoring</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Periodic Employee Safety Culture Surveys (FRM-HSE-023) are administered by the MR or Site Safety Supervisor to gather direct workforce feedback on current procedures and policies. The MD reviews staff awareness levels and authorises necessary safety campaigns based on the results.</p>

            <SectionHeading id="s9">9. Training and Competency</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>All personnel receive induction and annual refresher training on incident reporting and the critical importance of reporting near misses.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Safety Officers and Investigators hold advanced competency and training in Root Cause Analysis techniques (5 Whys, Fishbone, ICAM, Bow-Tie).</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>All training records and competency sign-offs are retained in the IMS for a minimum of 3 years (REG-TRN-001 Training and Competence Matrix).</Bullet>
            </ul>

            <SectionHeading id="s10">10. Monitoring, Audit, and Continual Improvement</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Monthly audits verify Flash Notification completion times, investigation turnaround timelines, and CAPA closure rates.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>This procedure is reviewed annually, immediately following any serious incident, or on changes to KSA regulatory standards.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>The procedure is directly linked to the Site Emergency Response Plan (PLN-HSE-001), the Monthly HSE Report, and the Management Review process (PROC-SYS-002).</Bullet>
            </ul>

            <SectionHeading id="s11">11. Performance Indicators</SectionHeading>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Incidents formally investigated within 7 days</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100% (Major); ≥ 90% (Minor)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Flash Notification completed within 24 hours</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MHRSD notification within 24 hours (reportable)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Per event</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>CAPA closure rate — on time</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≥ 90%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Incident recurrence (same root cause within 12 months)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>0</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Quarterly</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Near miss reports submitted per 100 employees</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>↑ trend (leading indicator)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                </tbody>
              </table>
            </div>

            <SectionHeading id="s12">12. References</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>ISO 45001:2018 — Clauses 5.1.5 / 5.4 Consultation and Participation of Workers, 9.3 Management Review, 10.2 Incident, Nonconformity and Corrective Action, 10.3 Continual Improvement.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>MHRSD — Occupational Safety and Health Management Regulation (KSA), mandatory reporting of fatality / LTI within 24 hours.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Saudi Labor Law — Occupational safety provisions.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>NCEC — Environmental incident reporting requirements.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>TEMC PLN-HSE-001 Site Emergency Response Plan; PROC-HSE-007 Toolbox Talks; PROC-SYS-002 Management Review; PROC-SYS-008 Corrective Action; FRM-HSE-002 Incident Flash Notification; FRM-HSE-022 Incident and Accident Investigation Report; FRM-HSE-023 Employee Safety Culture Survey; FRM-HSE-024 Dangerous Occurrence Report.</Bullet>
            </ul>

            <SectionHeading id="s13">13. Records Retention</SectionHeading>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Incident Flash Notifications (FRM-HSE-002)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Investigation Reports (FRM-HSE-022)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>10 years (lifetime for Fatal)</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Dangerous Occurrence Reports (FRM-HSE-024)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>10 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Safety Culture Surveys (FRM-HSE-023)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MR</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>CAPA records in IMS Action Register</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MR</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years after closure</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Regulatory notification records (MHRSD / NCEC)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>10 years</td>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>01.03.2026</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Initial release</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Abduljawad Bouguelta</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>01</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>10.04.2026</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Rebuilt to TE design standard; preserved all original content (reporting chain, scene preservation, RCA methodology, CAPA tracking, safety culture surveys); added responsibilities table, classification step, dangerous occurrence reporting, explicit linkage to PROC-SYS-002/008 and PROC-HSE-007, KPI table with CEO review flag, and records retention table.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Prepared by (HSE Manager)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Reviewed by (QA / MR)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Approved by (Managing Director / CEO)</td>
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
