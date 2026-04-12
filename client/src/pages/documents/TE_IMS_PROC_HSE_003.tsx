// TE-IMS-PROC-HSE-003 — Hazard Identification and Risk Assessment Procedure
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

export default function TE_IMS_PROC_HSE_003() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "PROC — Procedures", href: "/docs/proc" },
          { label: "Hazard Identification and Risk Assessment Procedure" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              Hazard Identification and Risk Assessment Procedure
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-PROC-HSE-003_Rev01</span>
              <span style={{ color: "#c0c8d4" }}>·</span>
              <span className="text-xs" style={{ color: "#6b7a8d" }}>11 Apr 2026</span>
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
                ["Document Code", "TE-IMS-PROC-HSE-003"],
                ["Revision", "Rev 01"],
                ["Date", "11 Apr 2026"],
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-PROC-HSE-003_Rev01</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Hazard Identification and Risk Assessment Procedure
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-6" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-PROC-HSE-003</td>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Revision</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>01</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Date</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>11 Apr 2026</td>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Status</td>
                    <td className="border px-3 py-2 font-bold" style={{ borderColor: "#dde3ec", color: "#155724" }}>Approved for Implementation</td>
                  </tr>
                </tbody>
              </table>

              {/* Document body content */}


            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>1. Purpose</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure establishes and maintains a systematic process to proactively identify hazards across all True East Mining Company (TEMC) activities, assess the associated occupational health, safety, and environmental risks, and implement controls to reduce those risks to a tolerable or acceptable level.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>It satisfies the requirements of ISO 45001:2018 Clauses 6.1.2 (Hazard Identification and Assessment of OH&amp;S Risks) and 8.1.2 (Eliminating Hazards and Reducing OH&amp;S Risks), ISO 14001:2015 Clause 6.1.2 (Environmental Aspects), and ISO 9001:2015 Clause 6.1 (Actions to Address Risks and Opportunities). It also supports TEMC's compliance with the KSA Ministry of Human Resources and Social Development (MHRSD) occupational safety regulations, the Saudi Labour Law (Royal Decree M/51), Ma'aden contractor HSE standards, and applicable National Center for Environmental Compliance (NCEC) requirements.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>2. Scope</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure applies to all TEMC activities, personnel, contractors, visitors, and third parties working on TEMC-controlled sites or on TEMC's behalf at client-controlled sites. It covers:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Drilling operations — RC, DTH, diamond core, and water well drilling.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Exploration camps, core yards, workshops, logistics yards, fuel storage, and offices.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Mobilisation and demobilisation activities, site preparation, and road works.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Routine and non-routine maintenance, including hot work and confined space.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Client-controlled areas where TEMC personnel are deployed (e.g. Ma'aden sites).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Risk assessments are carried out:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• At the planning stage of any new project, programme, campaign, or mobilisation.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Before commencement of any non-routine activity.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Whenever there is a significant change in scope, equipment, material, method, site, personnel, or regulation.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Following any incident, near miss, or significant finding from an inspection or audit.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• At planned review intervals (minimum annually for active risk assessments).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>3. Definitions</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Term</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Definition</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Hazard</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Source, situation, or act with the potential to cause harm to people, assets, the environment, or the business.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Hazard Identification</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>The process of recognising that a hazard exists and defining its characteristics.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Risk</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Combination of the likelihood of an event occurring and the severity of its consequences.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Risk Assessment</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>The overall process of hazard identification, risk analysis, and risk evaluation — deciding whether the risk is tolerable and what controls are required.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Likelihood</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>The probability or frequency that a hazardous event will occur, scored from 1 (Not Likely) to 5 (Frequent).</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Severity (Consequence)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>The magnitude of harm to people, property, environment, or reputation if the hazardous event occurs, scored from 1 (Insignificant) to 5 (Severe).</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Inherent Risk</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>The risk present before any control measures are applied.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Residual Risk</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>The risk remaining after all control measures have been applied.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Risk Appetite</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>The level of risk TEMC is willing to accept in pursuit of its objectives. For TEMC, no activity with a residual risk in the CRITICAL band is acceptable without Managing Director authorisation.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Tolerable Risk</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Risk reduced to a level the organisation can endure, having regard to legal obligations and its HSE Policy.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>ALARP (As Low As Reasonably Practicable)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>The level to which risks must be reduced, balancing further risk reduction against the time, cost, and effort required.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Control Measure</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Any action, engineering feature, procedure, or equipment used to eliminate or reduce a hazard or its consequences.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Control Effectiveness</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>An assessment of whether existing controls are adequate, implemented, and functioning as intended.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Hierarchy of Controls</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>A prioritised sequence for selecting control measures: Elimination, Substitution, Engineering, Administrative, PPE.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Routine Activity</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>An activity that is part of planned, repetitive work conducted under established procedures.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Non-Routine Activity</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>An activity that is not part of normal operations, including one-off tasks, emergency response, abnormal operating modes, maintenance interventions, and start-up/shut-down.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Near-Miss</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>An unplanned event that did not result in injury, illness, damage, or environmental release — but had the potential to do so.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Stop Work Authority (SWA)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>The right and obligation of any TEMC worker to stop a task when they identify an uncontrolled hazard or unsafe condition, without fear of reprisal.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Hazard Register</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>The controlled document in which all identified hazards, their assessments, controls, and status are recorded (REG-HSE-007 HIRA Register).</td>
                </tr>
                </tbody>
              </table>
            </div>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Managing Director / CEO</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Provides resources for hazard identification, risk assessment, and control. Reviews HIGH and CRITICAL rated residual risks at Management Review. Authorises any activity with a residual CRITICAL rating. Approves additional controls that carry material cost or operational impact. Owns the organisation's risk appetite.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Operations Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Accountable for ensuring risk assessments are carried out for all new projects, programmes, equipment, and sites under their control. Proposes the RA Team composition and RA Leader. Reviews and approves RA results before work proceeds. Ensures action plans arising from risk assessments are closed within target dates.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Owns this procedure. Ensures risk assessments are conducted to the required standard for new projects, non-routine activities, and change events. Approves RA Team composition and results. Maintains REG-HSE-007 HIRA Register. Tracks closure of all Medium / High / Critical action items. Reports open high-risk items monthly to the Managing Director.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Officer / Advisor</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Facilitates risk assessment workshops. Coaches line personnel on using the matrix, hierarchy of controls, and form FRM-HSE-001. Maintains records of all RAs and tracks closure of action plans. Supports site inspections and hazard walks.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Line Supervisors (Drill Supervisors, Workshop Foremen, Camp Boss)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Identify new and changed hazards at their workplace daily. Ensure Take-5 (FRM-HSE-009) or JSA is completed before non-routine work. Implement controls on the ground. Stop work if conditions exceed the authorised risk band. Escalate Medium and above residual risks to HSE Manager and Operations Manager.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Drillers, Mechanics, Operators, and All Employees</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Report hazards and near-misses via FRM-HSE-026 Witness Statement or verbally to their supervisor. Participate in risk assessment workshops when nominated. Follow agreed controls. Exercise Stop Work Authority when faced with an uncontrolled hazard.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Contractors and Visitors</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Comply with TEMC risk assessments and controls applicable to their scope. Provide their own risk assessments when carrying out specialist or subcontracted activities, for review by the HSE Manager before mobilisation.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Management Representative / QA</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Verifies that risk assessments are conducted, documented, and reviewed in accordance with this procedure during internal audits.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>5. Risk Assessment Procedure</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>A workplace risk assessment is conducted whenever there is a significant change in the work programme, an obvious work hazard that needs to be managed, a new activity being planned, or a trigger as defined in Section 2. The assessment is conducted by a multi-disciplinary RA Team and recorded on FRM-HSE-001 Risk Assessment Form. The results are approved by the Operations Manager and HSE Manager before the activity proceeds. High and Critical rated residual risks require additional approvals as set out in Section 5.4.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>5.1  Step 1 — Identify the Hazards and Existing Controls</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Hazards are identified through a systematic approach combining the following sources:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Workplace inspections (&quot;Walk the Job&quot;) covering every step of the activity from start to finish.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Review of the task schedule, method statement, equipment list, and material safety data sheets.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Review of incident reports, near-miss logs, audit findings, and previous risk assessments for similar activities.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Review of applicable KSA regulations, ISO standards, and client HSE requirements (e.g. Ma'aden Code of Practice).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Consultation with the workers who perform the task — they know where it actually goes wrong.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• The Hazard Identification Prompt Checklist (Appendix B, issued separately as FRM-HSE-010).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Consideration is given to reasonably foreseeable changes in circumstances, abnormal conditions, emergencies, and degraded modes of operation. Both routine and non-routine activities are assessed.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>5.2  Step 2 — Assess the Severity of Consequences</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Severity is the worst credible outcome of the hazardous event, considering harm to personnel (employee, contractor, public), damage to property and assets, damage to the environment, and business impact. Severity is scored from 1 to 5 using the following scale:</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Level</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Severity Description</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>1 — Insignificant</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>No injury; negligible damage; no environmental effect; no business impact. First-aid not required.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>2 — Minor</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>First-aid injury; minor property damage; easily cleaned spill contained on site; minor schedule delay.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 — Moderate</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Medical treatment case; moderate asset damage; reportable environmental release; localised operational impact.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>4 — Major</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Lost-time injury or serious injury; significant asset damage; major environmental release requiring NCEC notification; reportable to MHRSD under Saudi Labour Law Art. 142 and Royal Decree M/51.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 — Severe</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Single or multiple fatality, or permanent disability; catastrophic asset loss; long-term or irreversible environmental damage; loss of licence to operate; national-level media and regulatory impact.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>5.3  Step 3 — Assess the Likelihood of Occurrence</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Likelihood is the probability that the hazardous event will occur and cause harm, taking into account frequency of exposure, effectiveness of existing controls, number of people exposed, and environmental conditions. Likelihood is scored from 1 to 5 using the following scale:</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Level</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Likelihood Description</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>1 — Not Likely</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Postulated event. May be theoretically possible but has never occurred at TEMC or within the wider industry.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>2 — Low</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Has occurred rarely. Known to have happened within the industry but not at TEMC. Statistically infrequent.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 — Likely</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Has occurred infrequently — less than once per year. Credible that it may recur within three years.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>4 — Highly Likely</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Has occurred frequently — once or more per year. Likely to recur within a year if controls are not strengthened.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 — Frequent</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Very frequent exposure. Event has occurred multiple times or is expected during normal operations.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Note: Assessors must not rely on &quot;common sense&quot; alone — if a task can be done unsafely, sooner or later it will be. Likelihood is assessed with honest regard to actual field conditions, not idealised ones.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>5.4  Step 4 — Calculate the Risk Rating</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>The risk rating is the product of severity and likelihood:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Risk Rating  =  Severity  ×  Likelihood</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>The calculated score is mapped against the 5×5 Risk Matrix below:</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Severity ↓  /  Likelihood →</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>1 Not Likely</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>2 Low</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>3 Likely</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>4 Highly Likely</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>5 Frequent</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>1 Insignificant</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>1</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>2</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>4</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>2 Minor</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>2</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>4</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>6</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>8</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>10</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 Moderate</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>6</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>9</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>12</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>15</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>4 Major</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>4</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>8</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>12</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>16</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>20</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 Severe</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>10</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>15</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>20</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>25</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Risk Band Legend and Required Action:</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Band</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Score</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Action Required</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>LOW</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>1 – 4</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Tolerable. Manage by routine procedures and existing controls. Monitor to ensure controls remain effective.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MEDIUM</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 – 9</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Additional controls considered where reasonably practicable (ALARP). Contingency plan required. Line Supervisor approval before work proceeds.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HIGH</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>10 – 16</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Unacceptable without additional controls. HSE Manager and Operations Manager approval required. Work may not start until residual risk is reduced to Medium or Low.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>CRITICAL</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>17 – 25</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Intolerable. Work must STOP or not commence. Managing Director authorisation mandatory. Elimination or substitution controls required before any re-start.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Approval thresholds:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• LOW (1–4): approved by the Line Supervisor.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• MEDIUM (5–9): approved by the HSE Officer and Operations Supervisor.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• HIGH (10–16): approved by the HSE Manager and Operations Manager. Work does not start until the residual risk is reduced to Medium or Low.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• CRITICAL (17–25): requires written authorisation of the Managing Director. Activity must not proceed until the residual risk is reduced out of the Critical band.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>5.5  Step 5 — Select Additional Controls Using the Hierarchy of Controls</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>If the inherent risk rating requires additional controls, they are selected using the Hierarchy of Controls. The most effective methods must be considered first. Lower-level controls (Administrative, PPE) are only relied on when higher-level controls are not reasonably practicable, and should be combined wherever possible.</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Rank</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Control Level</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Description</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Effectiveness</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>1</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Elimination</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Physically remove the hazard. Examples: cancel the task, redesign the process, conduct work at ground level instead of at height, end the use of a hazardous material.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Most Effective</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>2</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Substitution</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Replace the hazard with a less hazardous alternative. Examples: substitute a less toxic chemical, use a lower voltage, reduce clamping force, substitute diesel rig with electric drive where practical.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>High</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Engineering Controls</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Isolate people from the hazard. Examples: machine guarding, interlocks, enclosures, local exhaust ventilation, drill rig cabin pressurisation, segregation of pedestrians and vehicles.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Medium</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>4</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Administrative Controls</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Change the way people work. Examples: written procedures, SWMS/JSA, Take-5, LOTO, permits to work, signs, training, rotation to limit exposure, supervision, toolbox talks.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Lower</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>PPE</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Protect the worker with Personal Protective Equipment. Examples: hard hats, safety glasses, gloves, hearing protection, respirators, fall arrest harness. PPE is the last line of defence and never used on its own.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Least Effective</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Important: Ensure that any new control measure does not introduce another hazard. Controls must be verifiable, implementable, and clearly assigned to an owner with a target date.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>5.6  Step 6 — Determine Residual Risk and Action Plan</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>The selected additional controls are recorded on FRM-HSE-001 and the residual risk rating is calculated using the same matrix as Step 4. The residual risk must be reduced to LOW or, at worst, MEDIUM with contingency in place before the activity proceeds. Each additional control measure is assigned an owner, target closure date, and verification method.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>The principle of ALARP applies: risks must be reduced as low as reasonably practicable. Further reduction is pursued unless the cost, time, and effort required are grossly disproportionate to the benefit gained.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>5.7  Step 7 — Implementation, Monitoring, and Review</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Controls are implemented through one or more of the following mechanisms, as appropriate:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• New or revised procedures, codes of practice, or safe systems of work.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Changes to the workplace layout, equipment, or guarding.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• New equipment selection or modification.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Targeted training, toolbox talks, or competency assessment.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Increased supervision, permits, or monitoring.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Every risk assessment is reviewed:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• At least annually for all active risk assessments.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• After any incident or near-miss related to the activity.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• After a significant process, equipment, personnel, site, or regulatory change.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• When the closure date of a control measure is reached, to verify effectiveness.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>The outcome of each review is recorded on FRM-HSE-001 and reflected in the HIRA Register (REG-HSE-007). Closed items are retained in the register as the historical record.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>6. Hazard Register and Reporting</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• All identified hazards, their assessments, controls, and status are captured in REG-HSE-007 HIRA Register, maintained by the HSE Manager.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Management-system level risks and opportunities (quality, commercial, HR, IT, procurement, etc.) are captured in REG-SYS-007 Risk and Opportunity Register — this procedure covers only occupational and environmental hazards.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• HIGH and CRITICAL residual risks are reported monthly to the Managing Director and at Management Review (PROC-SYS-002).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Medium / High / Critical controls not closed within their target date are treated as non-conformances under PROC-SYS-008 Corrective Action, logged in REG-SYS-004 CAR Log.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• All near-misses are reviewed against the relevant risk assessment to confirm whether existing controls remain adequate.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>7. Performance Indicators</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>[NEEDS MELO REVIEW — targets indicative, to be confirmed by CEO]</p>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Risk assessments completed before new activity or mobilisation starts</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Per activity</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Annual review of all active risk assessments completed on time</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Annual</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HIGH or CRITICAL residual risks with an approved action plan in place</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Medium / High / Critical action items closed within target date</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≥ 90%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Near-misses logged and reviewed against the relevant RA</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Take-5 / JSA completed for every non-routine task</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Daily / per task</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Stop Work Authority used and recorded without reprisal</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Tracked</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>8. References</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>External standards and regulations:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 45001:2018 — Clause 6.1.2 Hazard Identification and Assessment of OH&amp;S Risks, Clause 8.1.2 Eliminating Hazards and Reducing OH&amp;S Risks.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 14001:2015 — Clause 6.1.2 Environmental Aspects.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 9001:2015 — Clause 6.1 Actions to Address Risks and Opportunities.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 31000:2018 — Risk Management Guidelines.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• KSA MHRSD — Occupational Safety and Health Regulations.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Saudi Labour Law — Royal Decree M/51, in particular Article 142 on occupational injuries and reporting.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Ma'aden Contractor HSE Code of Practice and site-specific HSE requirements.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• NCEC — National Center for Environmental Compliance reporting requirements.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Internal IMS document linkages:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-POL-HSE-001 HSE Policy.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-PROC-SYS-002 Management Review.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-PROC-SYS-008 Corrective Action.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-REG-HSE-001 HSE Risk Register.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-REG-HSE-007 HIRA Register.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-REG-HSE-010 Environmental Aspect and Impact Register.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-REG-SYS-007 Risk and Opportunity Register.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-FRM-HSE-001 Risk Assessment Form.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-FRM-HSE-009 Take-5 / JSA.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-FRM-HSE-010 Hazard Identification Prompt Checklist.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-FRM-HSE-026 Incident Witness Statement Form.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>9. Records Retention</p>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Risk Assessment Forms (FRM-HSE-001)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years after superseded</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HIRA Register (REG-HSE-007)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Live + 5 years archive</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Take-5 / JSA records (FRM-HSE-009)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site Supervisor / HSE</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HIGH / CRITICAL risk action closure records</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>RA review meeting minutes</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Stop Work Authority records</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>10. Appendix A — Activities Requiring a Risk Assessment</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>The following activities must always be covered by a documented risk assessment (FRM-HSE-001). This list is non-exhaustive — any activity with credible potential for harm shall be assessed.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Drilling and core operations:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• RC, DTH, diamond core, and water well drilling — rig-up, drilling, tripping, rig-down.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Rod handling, core tray handling, sample bagging and transport.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Drill pad preparation, track building, and site restoration.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Mud mixing, sump construction, and handling of drilling additives.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Wireline operations and downhole tool handling.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Maintenance and workshop:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Planned and breakdown maintenance on rigs, support vehicles, compressors, and generators.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Welding, grinding, cutting, and other hot work.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• LOTO, isolation of energy sources, and working on pressurised systems.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Tyre handling, jacking, and heavy lifting.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Logistics and camp:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Fuel storage, fuel transfer, and refuelling operations.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Loading and unloading of transport; long-haul movements; desert driving.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Camp set-up, kitchen operations, water storage, and waste management.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Remote desert work and lone working.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Night shift and fatigue-sensitive operations.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Cross-cutting activities:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Working at height and confined space entry.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Handling hazardous substances, chemicals, and compressed gases.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Mobilisation and demobilisation — equipment movement, permits, interfaces.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Change of scope, new equipment, new site, or new client standards.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Emergency response drills and actual emergencies.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>11. Appendix B — Hazard Identification Prompt Checklist</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This checklist supports the &quot;Walk the Job&quot; inspection during Step 1 of the risk assessment. The objective is to identify everything which can cause harm to people, property, or the environment. Issued separately as FRM-HSE-010.</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Hazard Category</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Specific Hazard Prompts to Check</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Present? (Y/N/NA)</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Gravity / Falls</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Fall from height, unfenced edges, open pits and sumps, falling objects during lifting, shafts and stairwells, fall into tanks.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Manual Handling</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Heavy lifting / pushing, repetitive handling, poor stacking, loading vehicles, awkward postures, chemical contact during handling.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Hand and Power Tools</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Unsuitable or poorly maintained tools, sharp edges, powered tools, oily rags, improvised tooling.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Mechanical Handling</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Cranes, forklifts (toppling, gradients), loads falling, slippery or uneven floors, inadequate slinging, unqualified operators.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Drilling Operations</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Rod handling, tripping operations, high-pressure mud or air lines, rotating parts, mast raising/lowering, wireline operations, stuck tools.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Machinery &amp; Plant</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Unguarded machinery, entanglement, crushing, abrasion, hot surfaces, pressurised lines bursting, bypassed interlocks, stored energy.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Vehicles &amp; Mobile Equipment</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Moving vehicles, blind spots, pedestrian interface, drill rig movements, reversing, roll-over on gradients, desert driving.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Fire &amp; Explosion</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Ignition of flammable liquids, diesel storage, welding, electrical faults, blocked exits, accumulated waste, gas cylinders, air receivers, bulk tanks.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Electrical</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Shock, burn, or arc flash from supply, plant, or portable equipment; inadequate earthing; damaged leads; water ingress.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Pressure Systems</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Rupture of airlines, hydraulic lines, high-pressure mud lines, uncontrolled release of stored energy.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Natural Phenomena</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>High wind affecting mast work, sandstorms, lightning, flash floods in wadis, fog, extreme heat or cold.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Heat Stress (KSA-specific)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>High ambient temperature, direct sun exposure, inadequate hydration, inadequate rest cycles, PPE heat load, especially May–September.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Noise &amp; Vibration</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Rig, compressor, generator noise; hand-arm vibration from tools; whole-body vibration from heavy equipment.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Chemicals &amp; Hazardous Substances</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Drilling additives, diesel, lubricants, solvents, acids; MSDS reviewed; storage and spill containment adequate.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Environmental</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Poor housekeeping, hazardous liquids, overfilling tanks, soil and groundwater contamination, chemical spills, tanker loading / unloading, protected areas nearby.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Working Environment</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Inadequate ventilation, lighting, access, housekeeping, welfare facilities.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Biological</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Snakes, scorpions, insects, contaminated water, waste, food hygiene in camp.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Human Factors</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Fatigue, night shift, lone working, language barriers, competency gaps, unfamiliarity with site, task saturation.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Security</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Unauthorised site access, theft, remote-site security, civil unrest or regional risk.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Emergency Response</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Muster points, firefighting equipment, first aid, medevac arrangements, communication coverage (VHF / satellite).</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Initial release.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Abduljawad Bouguelta</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>01</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>11.04.2026</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Full rebuild to TE design standard. Dropped all 10 legacy embedded images (cover page, signatures, responsibilities image, risk matrix image, hierarchy image, integration infographic, walk-the-job wheel, letterhead) and replaced with native Word tables. Updated risk rating bands to Low 1-4 / Medium 5-9 / High 10-16 / Critical 17-25 to close the gaps in the original 3-tier scheme. Added native 5x5 risk matrix with colour coding and approval thresholds. Added native Hierarchy of Controls table. Expanded Definitions from 7 to 19 terms. Expanded Responsibilities to 8 roles. Added ISO 9001:2015 Cl. 6.1 and ISO 31000 references. Added KSA regulatory context (MHRSD, Royal Decree M/51 Art. 142, Ma'aden Code of Practice, NCEC). Linked to REG-HSE-007, REG-SYS-007, REG-HSE-010, FRM-HSE-026. Added drilling-specific hazards and KSA heat stress category to Appendix B. Added Stop Work Authority KPI.</td>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Reviewed by (QA / Management Representative)</td>
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
