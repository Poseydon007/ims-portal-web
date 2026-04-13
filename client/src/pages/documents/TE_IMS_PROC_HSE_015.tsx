// TE-IMS-PROC-HSE-015 — Risk and Opportunity Procedure
// Design: Standardized policy layout — left sidebar (Doc Info + TOC) + main content area

import { Link } from "wouter";
import { TopNav, Footer, Breadcrumb } from "@/components/Layout";
import { LOGO_GRAY, LOGO_WHITE } from "@/lib/imsData";

const sections = [
  { id: "s1", label: "1. Purpose" },
  { id: "s2", label: "2. Scope" },
  { id: "s3", label: "3. Definitions" },
  { id: "s4", label: "4. Objectives" },
  { id: "s5", label: "5. Benefits of Risk Management" },
  { id: "s6", label: "6. Risk Management Process" },
  { id: "s7", label: "7. Responsibilities" },
  { id: "s8", label: "8. Monitoring, KPIs and Continuous Improvement" },
  { id: "s9", label: "9. References" },
  { id: "s10", label: "10. Related Documents" },
  { id: "s11", label: "11. Records and Retention" },
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

export default function TE_IMS_PROC_HSE_015() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "PROC — Procedures", href: "/docs/proc" },
          { label: "Risk and Opportunity Procedure" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              Risk and Opportunity Procedure
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-PROC-HSE-015_Rev01</span>
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
                ["Document Code", "TE-IMS-PROC-HSE-015"],
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-PROC-HSE-015_Rev01</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Risk and Opportunity Procedure
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-6" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-PROC-HSE-015</td>
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

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>To establish a consistent framework for identifying, analysing, evaluating, treating and monitoring risks and opportunities affecting True East Mining's operations, personnel, assets, environment and business objectives. This procedure operationalises ISO 9001:2015 Clause 6.1, ISO 14001:2015 Clause 6.1 and ISO 45001:2018 Clause 6.1 — risk-based thinking across the full IMS.</p>

            <SectionHeading id="s2">2. Scope</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure applies across all True East Mining activities, sites, projects, functions and processes, including strategic, operational, HSE, environmental, financial, compliance, contractor and reputational risks. It covers both hazardous risks (negative effects) and opportunities (positive effects) of uncertainty.</p>

            <SectionHeading id="s3">3. Definitions</SectionHeading>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Risk</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>The effect of uncertainty on objectives — a deviation from the expected, which can be positive or negative (ISO 31000).</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Hazard</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>A source, situation or act with the potential to cause harm in terms of injury, ill health, damage to property, or a combination of these.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Opportunity</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>A positive effect of uncertainty — circumstances that could enable improved outcomes, process enhancement or competitive advantage.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Risk Assessment</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>A systematic process of identifying, analysing and evaluating risks to determine their severity and required treatment.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Likelihood (L)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>The chance of a risk event occurring, rated 1 (Rare) to 5 (Almost Certain).</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Severity (S)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>The magnitude of consequences if a risk event occurs, rated 1 (Insignificant) to 5 (Catastrophic).</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Risk Score (R)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Calculated as R = L × S, used to rank risks into Low, Medium or High categories.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Residual Risk</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>The risk remaining after current controls and treatments are applied.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Risk Appetite</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>The level of risk the organisation is willing to accept in pursuit of its objectives, set by the Managing Director.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Risk Owner</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>The person with accountability and authority to manage a specific risk.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <SectionHeading id="s4">4. Objectives</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Provide a systematic approach to the early identification and management of risks and opportunities across the IMS.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Apply consistent risk assessment criteria organisation-wide.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Make accurate and concise risk information available to inform strategic and operational decisions.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Adopt cost-effective treatment strategies that reduce risks to an acceptable level.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Monitor and review risks continuously to ensure exposure remains within appetite.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Convert identified opportunities into improvement actions through the Continual Improvement Procedure.</Bullet>
            </ul>

            <SectionHeading id="s5">5. Benefits of Risk Management</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Increased likelihood of achieving strategic and business objectives.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Higher standard of accountability at all levels of the organisation.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>More effective decision-making through better understanding of risk exposure.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Timely delivery of services and performance objectives.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Safeguarding of assets — human, physical, environmental, financial and reputational.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Compliance with ISO 9001/14001/45001 clause 6.1 and KSA regulatory obligations.</Bullet>
            </ul>

            <SectionHeading id="s6">6. Risk Management Process</SectionHeading>

            <SubHeading>6.1 Establish the Context</SubHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Define internal and external factors influencing objectives — SWOT, PESTEL, interested parties (ISO 9001 Clauses 4.1 and 4.2), stakeholder requirements, KSA regulatory environment, contractual obligations, operational constraints and strategic direction.</p>

            <SubHeading>6.2 Identify Risks and Opportunities</SubHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Risks and opportunities must be identified systematically using a combination of techniques:</p>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Job Hazard Analysis (JHA) and Take 5 cards at task level.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Formal HIRA (Hazard Identification and Risk Assessment) workshops for drilling, core handling, driving, hot work and all high-risk tasks.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Management review inputs, audit findings and incident investigations.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Supplier, contractor and interested-party feedback.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Environmental aspects and impacts register (ISO 14001 Clause 6.1.2).</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Legal and regulatory horizon scanning (MHRSD, NCEC, Ministry of Energy, Ministry of Industry and Mineral Resources).</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Market, commercial, financial and reputational scanning by MD and Finance.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>&quot;Over the horizon&quot; scanning — emerging technologies, climate trends, political and regulatory change.</Bullet>
            </ul>

            <SubHeading>6.3 Analyse Risks</SubHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>For each risk, describe the Event, Cause and Impact. Assess existing controls, their effectiveness, then rate Likelihood and Severity.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Likelihood Scale:</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Rating</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Description</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 — Almost Certain</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Expected to occur in most circumstances; frequent recurrence.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>4 — Likely</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Will probably occur in most circumstances; high likelihood.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 — Possible</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Might occur at some time; moderate likelihood.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>2 — Unlikely</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Could occur but not expected; low likelihood.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>1 — Rare</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>May occur only in exceptional circumstances.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Severity Scale:</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Rating</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Description</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 — Catastrophic</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Fatality, permanent disability, major environmental damage, major legal action, &gt;USD 1M loss.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>4 — Major</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Serious injury or lost-time incident, significant environmental release, regulatory notice, USD 100K–1M loss.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 — Moderate</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Medical treatment injury, reportable environmental event, USD 10K–100K loss.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>2 — Minor</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>First-aid injury, minor spill contained, &lt;USD 10K loss.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>1 — Insignificant</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>No injury, negligible impact, routinely managed.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>5×5 Risk Matrix (R = L × S):</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Risk Score</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Category</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Required Action</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>1 – 5</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>LOW</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Acceptable; monitor through routine controls and annual review.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>6 – 11</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MEDIUM</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Contingency plan required; specific controls assigned; review quarterly.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>12 – 24</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HIGH</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Immediate action required; formal mitigation plan; Site Manager and HSE Manager approval; review monthly.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>25</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>EXTREME</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Cease activity until treated; MD approval required before any continued operation.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <SubHeading>6.4 Evaluate Risks</SubHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>The risk level determines whether further treatment is required. Outputs of this phase are: (a) a prioritised risk register, (b) identified treatment actions, and (c) residual risk assessment. Where an action differs from the standard requirement for the risk category, deviation must be authorised in writing by the Managing Director.</p>

            <SubHeading>6.5 Treat Risks</SubHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Treatment options (apply the hierarchy of controls for HSE risks):</p>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Avoid — change business process, scope or objective to eliminate the risk (highest priority for HIGH/EXTREME HSE risks).</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Reduce Likelihood — implement preventive controls that reduce the probability of the event.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Reduce Consequence — implement mitigative controls that reduce the impact if the event occurs.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Share / Transfer — transfer ownership and liability through insurance, contracts or partnerships where appropriate.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Retain — accept the risk when it is within appetite and cost of further treatment exceeds benefit.</Bullet>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Each treatment action requires: responsible person, realistic due date, cost allocation, and performance measure. Actions are tracked in the Risk and Opportunity Register (TE-IMS-REG-HSE-008).</p>

            <SubHeading>6.6 Monitor and Review</SubHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Risk Owners monitor their assigned risks continuously and report status monthly to the HSE Manager.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>HSE Manager reviews the full Risk and Opportunity Register quarterly and escalates HIGH/EXTREME risks to the Site Manager and Managing Director.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Management Review (TE-IMS-PROC-SYS-002) receives a summary of top risks, treatment progress and emerging risks.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Internal Audit (TE-IMS-PROC-SYS-004) tests the effectiveness of controls on HIGH risks.</Bullet>
            </ul>

            <SubHeading>6.7 Opportunities</SubHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>The same process applies to opportunities. Where an opportunity is identified (improved technology, new contract, process efficiency, commercial advantage), it is logged in the Risk and Opportunity Register, evaluated for feasibility and benefit, and converted to an improvement action via TE-IMS-PROC-SYS-005 Continual Improvement and CAPA.</p>

            <SectionHeading id="s7">7. Responsibilities</SectionHeading>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Role</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Responsibility</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Managing Director</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Sets risk appetite; reviews strategic risks; approves treatment of EXTREME risks and deviations; chairs Management Review.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Owns operational risks at the site level; approves HIGH-risk treatment plans; ensures controls are implemented and resourced.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Maintains the Risk and Opportunity Register; facilitates HIRA workshops; reports KPIs; ensures training on risk-based thinking; prepares quarterly reviews.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Finance Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Owns financial, commercial and contractual risks; ensures treatments are budgeted; monitors insurance coverage.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Department Heads</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Identify, analyse and manage risks within their functional area; assign and monitor risk owners; report to HSE Manager.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Risk Owners</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Implement treatment actions; monitor the risks they own; report changes in likelihood, severity or control effectiveness.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Internal Audit</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Independently tests the effectiveness of controls and reports findings to Management Review.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>All Employees and Contractors</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Identify risks and hazards in their work; use Take 5 and JHA; report new risks to supervisors; participate in HIRA workshops.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <SectionHeading id="s8">8. Monitoring, KPIs and Continuous Improvement</SectionHeading>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>KPI</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Target</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Risk and Opportunity Register updated</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Quarterly review 100%; all identified risks scored [NEEDS CEO REVIEW]</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HIGH/EXTREME risks with active treatment plan</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Risk-based-thinking training completion</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100% of managers and supervisors [NEEDS CEO REVIEW]</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Risks closed vs opened in the period</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Net reduction year-on-year</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Opportunities converted to improvement actions</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≥60% of identified opportunities [NEEDS CEO REVIEW]</td>
                </tr>
                </tbody>
              </table>
            </div>

            <SectionHeading id="s9">9. References</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>ISO 9001:2015 — Quality Management Systems, Clause 6.1 Actions to Address Risks and Opportunities.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>ISO 14001:2015 — Environmental Management Systems, Clause 6.1.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>ISO 45001:2018 — OH&amp;S Management Systems, Clause 6.1.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>ISO 31000:2018 — Risk Management Guidelines.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>IEC 31010:2019 — Risk Assessment Techniques.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>MHRSD — Occupational Safety and Health Management Regulation (KSA).</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Ministry of Industry and Mineral Resources — Mining Investment Law and executive regulations.</Bullet>
            </ul>

            <SectionHeading id="s10">10. Related Documents</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>TE-IMS-POL-HSE-001 — HSE Policy</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>TE-IMS-PROC-SYS-002 — Management Review Procedure</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>TE-IMS-PROC-SYS-004 — Internal Audit Procedure</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>TE-IMS-PROC-SYS-005 — Continual Improvement and CAPA Procedure</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>TE-IMS-PROC-HSE-018 — Environmental Aspects Identification Procedure</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>TE-IMS-FRM-HSE-001 — Job Hazard Analysis Form</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>TE-IMS-FRM-HSE-009 — Take 5 Hazard Assessment</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>TE-IMS-REG-HSE-008 — Risk and Opportunity Register</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>TE-IMS-REG-HSE-007 — HIRA Register</Bullet>
            </ul>

            <SectionHeading id="s11">11. Records and Retention</SectionHeading>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Record</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Retention</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Risk and Opportunity Register</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Life of IMS; versioned</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HIRA workshop records</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Life of IMS</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Risk treatment action records</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years after closure</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Management review risk summaries</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Training records (risk-based thinking)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years</td>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Initial issue (generic public-sector framework)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MR</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>01</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>10.04.2026</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Fully rebuilt for drilling-sector context and TE design standard. Cleaned duplicated responsibilities table (removed repeated MD entries). Added ISO 31000 references, formal 5-point Likelihood and Severity scales, risk category table with EXTREME tier, hierarchy of controls, KPI targets with CEO review flags, records retention table, and alignment with related IMS procedures.</td>
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
