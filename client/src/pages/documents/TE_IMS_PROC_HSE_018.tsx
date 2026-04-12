// TE-IMS-PROC-HSE-018 — Environmental Aspects Identification Procedure
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

export default function TE_IMS_PROC_HSE_018() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "PROC — Procedures", href: "/docs/proc" },
          { label: "Environmental Aspects Identification Procedure" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              Environmental Aspects Identification Procedure
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-PROC-HSE-018_Rev01</span>
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
                ["Document Code", "TE-IMS-PROC-HSE-018"],
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-PROC-HSE-018_Rev01</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Environmental Aspects Identification Procedure
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-6" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-PROC-HSE-018</td>
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

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>To establish a systematic methodology for identifying environmental aspects of True East Mining's activities, products and services, evaluating their impacts, determining significance and keeping the information current. This procedure implements ISO 14001:2015 Clause 6.1.2 (Environmental Aspects) and underpins the company's environmental objectives, operational controls and legal compliance in the Kingdom of Saudi Arabia.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>2. Scope</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure applies to all True East Mining activities, products and services across exploration drilling, core handling, camp operations, vehicle fleet, laydown yards, supply chain and decommissioning. It covers environmental aspects under normal, abnormal (start-up/shut-down) and emergency conditions, and both direct aspects under TE control and indirect aspects influenced through contractors, suppliers and interested parties.</p>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Environmental Aspect</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Element of an organisation's activities, products or services that interacts with the environment (ISO 14001:2015 3.2.2).</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Environmental Impact</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Change to the environment, whether adverse or beneficial, wholly or partially resulting from an environmental aspect (ISO 14001:2015 3.2.4).</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Significant Environmental Aspect</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>An environmental aspect that has or can have a significant environmental impact, determined by the criteria in Section 7.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>EMS</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Environmental Management System.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>EMR</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Environmental Management Representative — also referred to as HSE Manager with environmental remit at TE.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Normal Condition</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Routine operating conditions during planned activities.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Abnormal Condition</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Start-up, shut-down, maintenance or breakdown conditions.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Emergency Condition</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Foreseeable emergency events — spills, fires, floods, severe weather, uncontrolled release.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Aspect Register</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>The controlled record of all identified environmental aspects, impacts, significance rating and controls (TE-IMS-REG-HSE-010).</td>
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
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Responsibility</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Managing Director</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Approves significant environmental aspects and associated environmental objectives; endorses budgets for mitigation and monitoring.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager (EMR)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Owns this procedure; facilitates aspect identification workshops; maintains the Aspect Register (TE-IMS-REG-HSE-010); reports significant aspects to Management Review; ensures training on ISO 14001 awareness.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Department Heads</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Identify environmental aspects within their functional area in collaboration with the HSE Manager; implement operational controls; report new or changed aspects.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Ensures site-level aspects are identified, assessed and controlled; ensures emergency-condition aspects are integrated with the Emergency Preparedness Procedure.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Drilling Superintendent</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Identifies drilling-specific aspects: drill fluids, cuttings, noise, fuel handling, water use, land disturbance.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Maintenance Supervisor</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Identifies aspects from maintenance activities: used oil, lubricants, solvents, hydraulic fluids, metal scrap, batteries.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>SCM / Stores</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Identifies aspects from storage and handling of chemicals, fuels, packaging and waste.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>All Employees and Contractors</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Report new or potential environmental aspects and incidents to HSE.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>5. Aspect Identification Process</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>5.1 Approach</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>The HSE Manager (EMR), together with Department Heads, conducts a comprehensive review of all activities, products and services at least annually and whenever a trigger under Section 5.3 occurs. ISO 14001 awareness training is delivered before each review cycle.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>5.2 Identification Methods</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Interviews and walkthroughs with employees and supervisors.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Site inspections and environmental walk-downs.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Review of documents, procedures and operational records.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Monitoring and measurement data — emissions, waste, water, fuel use.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Review of legal register and regulatory notices.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Review of previous environmental incidents, complaints and corrective actions.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Interested-party feedback and community communications.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>5.3 Follow-up Reviews (Triggers)</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>The aspect register is re-evaluated whenever one or more of the following conditions occur:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Change in process, activity, product, service or methodology.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Significant change in the scope or mission of the organisation.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Expansion of existing activities — new rig, new site, new campaign.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• New or changed legal / regulatory requirements (MHRSD, NCEC, MEWA).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Occurrence of an environmental incident, near miss or complaint.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Management Review outcomes or Management decision.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• At minimum, annually.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>6. Categories of Aspects to Consider</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>During identification, the review team must consider all of the following (ISO 14001 Clause 6.1.2 guidance), under normal (N), abnormal (A) and emergency (E) conditions:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Emissions to air — dust, engine exhaust, VOCs, GHG.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Releases to water — sanitary effluent, drilling fluids, wash water.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Releases to land / soil contamination — spills, leaks, buried waste.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Waste generation and disposal — hazardous and non-hazardous, solid and liquid.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Use of raw materials and natural resources — water, fuel, chemicals, aggregates.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Use of energy — diesel, grid power, solar.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Noise, vibration, light and heat.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Physical land disturbance — access roads, pads, trenches, rehabilitation obligations.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Biodiversity and wildlife impacts.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Cultural and heritage site considerations.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Local environmental issues and community concerns.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Legal and regulatory requirements and compliance status.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Current environmental management practices and procedures.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Lessons learned from previous environmental incidents.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Other relevant issues — green belt, dust suppression, revegetation.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>7. Significance Evaluation</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>7.1 Default Significance Categories</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Any aspect that falls into one or more of the following categories is considered significant by default, regardless of numerical rating:</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Code</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Criterion</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>LC — Legal Concern</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>The impact is addressed by an applicable legal, regulatory or contractual requirement.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>IPC — Interested Party Concern</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>The impact is a concern raised by an interested party (employee, community, authority, client).</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>BC — Business Concern</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>The impact affects resource conservation, cost control, reputation or business continuity.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>EC — Emergency Condition</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>The impact arises under foreseeable emergency conditions (spill, fire, flood).</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>7.2 Quantitative SSPD Assessment</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Aspects that do not trigger the default categories are rated using the SSPD method: Scale, Severity, Probability and Duration — each scored 1 to 4. The Risk Priority Number (RPN) is the sum of the four scores. Aspects with RPN ≥10 are considered significant.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>SSPD Rating Scales:</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Rating</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Scale (S)</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Severity (Sv)</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>1</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Restricted within work station/area</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Negligible impact on environment</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>2</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Restricted within site premises</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Moderate impact on environment</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Restricted within the plant / concession</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>High impact on environment</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>4</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Spread outside the boundary of the company</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Very high impact on environment</td>
                </tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Rating</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Probability (P)</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Duration (D)</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>1</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Exceptional probability or once in a year</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Lasts less than 1 hour</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>2</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>2–3 times in a year but not monthly</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Lasts less than 24 hours</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Few times in a day but discontinuous</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>One day to one month</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>4</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Continuous</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>More than a month</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>RPN = S + Sv + P + D. Any RPN ≥10 is classified as SIGNIFICANT. Significant aspects must have an assigned operational control, objective or target under TE-IMS-PROC-SYS-005.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>8. Drilling-Sector Indicative Aspects</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>The following list is indicative (not exhaustive) and must be tailored to each site. Full detail is maintained in the Aspect Register (TE-IMS-REG-HSE-010).</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Activity / Area</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Typical Aspects</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Drilling operations</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Drill cuttings, drilling fluid additives, mud pit overflow, noise, dust, fuel spills</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Rig setup and demobilisation</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Land disturbance, vegetation clearance, vehicle emissions, waste packaging</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Core handling and sampling</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Water use, chemical reagents, core storage waste, cutting dust</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Maintenance workshop</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Used oil, solvents, hydraulic fluid, grease, scrap metal, batteries</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Fuel storage and refuelling</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Hydrocarbon spills, vapour emissions, contaminated absorbents</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Camp operations</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Sanitary wastewater, food waste, domestic waste, water consumption, energy use</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Vehicle fleet</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Exhaust emissions, tyre waste, lubricant disposal, accidental spills</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Chemical storage and handling</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Leaks, expired stock disposal, empty containers</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site rehabilitation</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Soil reinstatement, revegetation, residual land disturbance</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>9. Record of Significant Aspects</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>The HSE Manager maintains the Environmental Aspect and Impact Register (TE-IMS-REG-HSE-010) as the single source of truth. It includes: activity, aspect, impact, conditions (N/A/E), legal reference, significance category/score, existing controls, responsible person and review date. The register is updated as soon as new or changed aspects are identified and reviewed annually at minimum.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>10. Monitoring, KPIs and Continuous Improvement</p>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Aspect Register review completed</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Annually; 100% of departments [NEEDS CEO REVIEW]</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Significant aspects with active operational control</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Legal compliance against identified LC aspects</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>ISO 14001 awareness training completion</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100% of active workforce [NEEDS CEO REVIEW]</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Environmental incidents linked to an un-identified aspect</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Zero</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Annual Review — aspects reviewed annually or on trigger per Section 5.3.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Management Review — significant aspects and their status reported to Management Review per TE-IMS-PROC-SYS-002.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>11. References</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 14001:2015 — Environmental Management Systems, Clause 6.1.2 Environmental Aspects.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 14004:2016 — Environmental Management Systems — General guidelines.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 9001:2015 — Quality Management Systems, Clause 4.1/4.2.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 45001:2018 — OH&amp;S Management Systems.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• NCEC — National Center for Environmental Compliance (KSA) regulations and guidelines.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• MEWA — Ministry of Environment, Water and Agriculture, KSA.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• MHRSD — Occupational Safety and Health Management Regulation (KSA).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Saudi Green Initiative — environmental stewardship commitments.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>12. Related Documents</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-POL-HSE-001 — HSE and Environmental Policy</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-PROC-HSE-004 — Site Emergency Preparedness Procedure</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-PROC-HSE-013 — Spill Management Procedure</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-PROC-HSE-014 — Site Rehabilitation Procedure</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-PROC-HSE-015 — Risk and Opportunity Procedure</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-PROC-SYS-002 — Management Review Procedure</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-PROC-SYS-005 — Continual Improvement and CAPA Procedure</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-REG-HSE-010 — Environmental Aspect and Impact Register</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-FRM-HSE-040 — Waste Handling and Disposal Schedule</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-REG-SYS-003 — Legal and Regulatory Compliance Register</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>13. Records and Retention</p>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Environmental Aspect and Impact Register</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Life of IMS; versioned</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Annual aspect review meeting minutes</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>ISO 14001 awareness training records</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>SSPD assessment worksheets</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Legal compliance evaluation records</td>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Initial issue (generic EMS template)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MR</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>01</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>10.04.2026</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Rebuilt to TE design standard. Added drilling-sector indicative aspects table, clarified normal/abnormal/emergency conditions, added EC default category, cleaned and expanded SSPD scales, responsibilities aligned with TE roles, KPI targets with CEO review flags, records retention table, MEWA/NCEC/Saudi Green Initiative references.</td>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Prepared by (HSE Manager / EMR)</td>
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
