// TE-IMS-PROC-HSE-015 — Risk and Opportunity Procedure
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


            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>1. Purpose</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>To establish a consistent framework for identifying, analysing, evaluating, treating and monitoring risks and opportunities affecting True East Mining's operations, personnel, assets, environment and business objectives. This procedure operationalises ISO 9001:2015 Clause 6.1, ISO 14001:2015 Clause 6.1 and ISO 45001:2018 Clause 6.1 — risk-based thinking across the full IMS.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>2. Scope</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure applies across all True East Mining activities, sites, projects, functions and processes, including strategic, operational, HSE, environmental, financial, compliance, contractor and reputational risks. It covers both hazardous risks (negative effects) and opportunities (positive effects) of uncertainty.</p>

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

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>4. Objectives</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Provide a systematic approach to the early identification and management of risks and opportunities across the IMS.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Apply consistent risk assessment criteria organisation-wide.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Make accurate and concise risk information available to inform strategic and operational decisions.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Adopt cost-effective treatment strategies that reduce risks to an acceptable level.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Monitor and review risks continuously to ensure exposure remains within appetite.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Convert identified opportunities into improvement actions through the Continual Improvement Procedure.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>5. Benefits of Risk Management</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Increased likelihood of achieving strategic and business objectives.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Higher standard of accountability at all levels of the organisation.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• More effective decision-making through better understanding of risk exposure.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Timely delivery of services and performance objectives.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Safeguarding of assets — human, physical, environmental, financial and reputational.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Compliance with ISO 9001/14001/45001 clause 6.1 and KSA regulatory obligations.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>6. Risk Management Process</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>6.1 Establish the Context</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Define internal and external factors influencing objectives — SWOT, PESTEL, interested parties (ISO 9001 Clauses 4.1 and 4.2), stakeholder requirements, KSA regulatory environment, contractual obligations, operational constraints and strategic direction.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>6.2 Identify Risks and Opportunities</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Risks and opportunities must be identified systematically using a combination of techniques:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Job Hazard Analysis (JHA) and Take 5 cards at task level.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Formal HIRA (Hazard Identification and Risk Assessment) workshops for drilling, core handling, driving, hot work and all high-risk tasks.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Management review inputs, audit findings and incident investigations.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Supplier, contractor and interested-party feedback.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Environmental aspects and impacts register (ISO 14001 Clause 6.1.2).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Legal and regulatory horizon scanning (MHRSD, NCEC, Ministry of Energy, Ministry of Industry and Mineral Resources).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Market, commercial, financial and reputational scanning by MD and Finance.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• &quot;Over the horizon&quot; scanning — emerging technologies, climate trends, political and regulatory change.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>6.3 Analyse Risks</p>

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

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>6.4 Evaluate Risks</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>The risk level determines whether further treatment is required. Outputs of this phase are: (a) a prioritised risk register, (b) identified treatment actions, and (c) residual risk assessment. Where an action differs from the standard requirement for the risk category, deviation must be authorised in writing by the Managing Director.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>6.5 Treat Risks</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Treatment options (apply the hierarchy of controls for HSE risks):</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Avoid — change business process, scope or objective to eliminate the risk (highest priority for HIGH/EXTREME HSE risks).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Reduce Likelihood — implement preventive controls that reduce the probability of the event.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Reduce Consequence — implement mitigative controls that reduce the impact if the event occurs.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Share / Transfer — transfer ownership and liability through insurance, contracts or partnerships where appropriate.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Retain — accept the risk when it is within appetite and cost of further treatment exceeds benefit.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Each treatment action requires: responsible person, realistic due date, cost allocation, and performance measure. Actions are tracked in the Risk and Opportunity Register (TE-IMS-REG-HSE-008).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>6.6 Monitor and Review</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Risk Owners monitor their assigned risks continuously and report status monthly to the HSE Manager.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• HSE Manager reviews the full Risk and Opportunity Register quarterly and escalates HIGH/EXTREME risks to the Site Manager and Managing Director.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Management Review (TE-IMS-PROC-SYS-002) receives a summary of top risks, treatment progress and emerging risks.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Internal Audit (TE-IMS-PROC-SYS-004) tests the effectiveness of controls on HIGH risks.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>6.7 Opportunities</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>The same process applies to opportunities. Where an opportunity is identified (improved technology, new contract, process efficiency, commercial advantage), it is logged in the Risk and Opportunity Register, evaluated for feasibility and benefit, and converted to an improvement action via TE-IMS-PROC-SYS-005 Continual Improvement and CAPA.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>7. Responsibilities</p>

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

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>8. Monitoring, KPIs and Continuous Improvement</p>

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

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>9. References</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 9001:2015 — Quality Management Systems, Clause 6.1 Actions to Address Risks and Opportunities.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 14001:2015 — Environmental Management Systems, Clause 6.1.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 45001:2018 — OH&amp;S Management Systems, Clause 6.1.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 31000:2018 — Risk Management Guidelines.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• IEC 31010:2019 — Risk Assessment Techniques.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• MHRSD — Occupational Safety and Health Management Regulation (KSA).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Ministry of Industry and Mineral Resources — Mining Investment Law and executive regulations.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>10. Related Documents</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-POL-HSE-001 — HSE Policy</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-PROC-SYS-002 — Management Review Procedure</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-PROC-SYS-004 — Internal Audit Procedure</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-PROC-SYS-005 — Continual Improvement and CAPA Procedure</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-PROC-HSE-018 — Environmental Aspects Identification Procedure</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-FRM-HSE-001 — Job Hazard Analysis Form</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-FRM-HSE-009 — Take 5 Hazard Assessment</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-REG-HSE-008 — Risk and Opportunity Register</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-REG-HSE-007 — HIRA Register</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>11. Records and Retention</p>

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
