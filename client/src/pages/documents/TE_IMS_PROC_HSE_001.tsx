// TE-IMS-PROC-HSE-001 Rev01 — Fatigue Management Procedure
// Design: Standardized policy layout — left sidebar (Doc Info + TOC) + main content area

import { Link } from "wouter";
import { TopNav, Footer, Breadcrumb } from "@/components/Layout";
import { LOGO_GRAY, LOGO_WHITE } from "@/lib/imsData";

const sections = [
  { id: "s1", label: "1. Purpose" },
  { id: "s2", label: "2. Scope" },
  { id: "s3", label: "3. Definitions" },
  { id: "s4", label: "4. Responsibilities" },
  { id: "s5", label: "5. Fatigue Risk Factors and Indicators" },
  { id: "s6", label: "6. Work Hours and Rostering Guidelines" },
  { id: "s7", label: "7. Heat and Fatigue Controls" },
  { id: "s8", label: "8. Operational Control Measures" },
  { id: "s9", label: "9. Training and Awareness" },
  { id: "s10", label: "10. Incident Reporting and Review" },
  { id: "s11", label: "11. Monitoring, Audit and Continuous Improvement" },
  { id: "s12", label: "12. References" },
  { id: "s13", label: "13. Related Documents" },
  { id: "s14", label: "14. Records and Retention" },
  { id: "s15", label: "15. Revision History" },
  { id: "s16", label: "16. Approval" },
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

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 mb-2 text-sm leading-relaxed" style={{ color: "#374151" }}>
      <span style={{ color: "#C49A28", marginTop: "2px" }}>•</span>
      <span>{children}</span>
    </li>
  );
}

export default function TE_IMS_PROC_HSE_001() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "PROC — Procedures", href: "/docs/proc" },
          { label: "Fatigue Management Procedure" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              Fatigue Management Procedure
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-PROC-HSE-001_Rev01</span>
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
                ["Document Code", "TE-IMS-PROC-HSE-001"],
                ["Revision", "Rev 01"],
                ["Date", "10 April 2026"],
                ["Status", "✓ Approved"],
                ["Category", "Procedure"],
                ["Scope", "All TEMC operations, employees, contractors, sub-contractors & visitors"],
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-PROC-HSE-001_Rev01</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Fatigue Management Procedure
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-2" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-PROC-HSE-001</td>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Revision</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>01</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Date</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>10.04.2026</td>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Status</td>
                    <td className="border px-3 py-2 font-bold" style={{ borderColor: "#dde3ec", color: "#155724" }}>Approved for Implementation</td>
                  </tr>
                </tbody>
              </table>

              {/* Section 1 */}
              <SectionHeading id="s1">1. Purpose</SectionHeading>
              <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                To minimize risks associated with fatigue among personnel working on True East Mining exploration drilling sites in Saudi Arabia. This procedure ensures a safe, healthy, and productive work environment by proactively identifying fatigue hazards, implementing robust controls, and promoting a strong culture of awareness and non-punitive reporting. It aligns with ISO 45001:2018 and the KSA occupational health and safety framework.
              </p>

              {/* Section 2 */}
              <SectionHeading id="s2">2. Scope</SectionHeading>
              <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                This procedure applies to all True East Mining employees, contractors, sub-contractors and visitors working at or visiting company drilling sites, camps and project locations. It is particularly critical for personnel involved in shift work, night operations, long travel, operation of heavy or rotating equipment, and work in high-heat desert conditions.
              </p>

              {/* Section 3 */}
              <SectionHeading id="s3">3. Definitions</SectionHeading>
              <div className="overflow-x-auto mb-4 rounded border" style={{ borderColor: "#dde3ec" }}>
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ backgroundColor: "#081C2E" }}>
                      {["Term", "Definition"].map((h) => (
                        <th key={h} className="text-left px-3 py-2 font-semibold tracking-wide text-xs" style={{ color: "#ffffff" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Fatigue", "A condition of mental and/or physical exhaustion that severely impairs a person's ability to work safely, make sound decisions and react to hazards."],
                      ["High-Risk Task", "Any operation that requires sustained focus, coordination and quick decision-making — e.g., rig console operation, rod handling, crane or forklift operation, driving heavy vehicles, hot work or energised isolation."],
                      ["WBGT", "Wet Bulb Globe Temperature — an index measuring heat stress in hot environments, considering temperature, humidity, wind speed and solar radiation. Used to adjust work-rest cycles."],
                      ["Circadian Rhythm", "The body's natural 24-hour sleep-wake cycle. Night shifts disrupt this cycle and increase fatigue risk, especially between 02:00–05:00."],
                      ["Micro-sleep", "Brief involuntary episode of loss of attention (3–30 seconds) typically associated with extreme fatigue and a common cause of driving and operational incidents."],
                      ["Non-Punitive Reporting", "A formal commitment that no employee will be disciplined for honestly self-declaring unfit-for-duty status due to fatigue."],
                      ["Fit For Duty (FFD)", "The state of being physically and mentally able to safely perform assigned work for the full duration of the shift."],
                    ].map(([term, def], i) => (
                      <tr key={term} style={{ backgroundColor: i % 2 === 0 ? "rgba(8,28,46,0.03)" : "transparent" }}>
                        <td className="px-3 py-2 text-xs font-medium" style={{ color: "#081C2E", width: "30%" }}>{term}</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>{def}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Section 4 */}
              <SectionHeading id="s4">4. Responsibilities</SectionHeading>
              <div className="overflow-x-auto mb-4 rounded border" style={{ borderColor: "#dde3ec" }}>
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ backgroundColor: "#081C2E" }}>
                      {["Role", "Responsibilities"].map((h) => (
                        <th key={h} className="text-left px-3 py-2 font-semibold tracking-wide text-xs" style={{ color: "#ffffff" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Managing Director", "Provides resources, endorses this procedure and reinforces the non-punitive reporting culture at all levels of the organisation."],
                      ["Site Manager", "Ensures full site implementation; monitors compliance with rostering limits; conducts periodic audits; reviews all fatigue-related incidents and authorises corrective action."],
                      ["HSE Manager / Safety Officer", "Develops and maintains this procedure; provides specialised fatigue-management training; monitors WBGT and fatigue indicators; investigates fatigue-related incidents; reports KPIs to Management Review."],
                      ["Supervisors / Shift In-Charge", "Identify daily fatigue risks; dynamically manage rosters and rest breaks; intervene immediately upon observing signs of fatigue; authorise removal from task and replacement where needed."],
                      ["Drilling Superintendent", "Oversees drilling-specific fatigue risks; ensures rig console operators and rod handlers comply with shift limits; integrates fatigue controls into daily rig planning."],
                      ["All Employees & Contractors", "Maintain adequate off-shift rest; strictly follow work-rest guidelines; arrive at work Fit For Duty; self-report fatigue symptoms promptly under the non-punitive framework; use the buddy system; refuse high-risk tasks if not fit."],
                      ["HR Department", "Supports roster planning, leave management and medical screening; manages fatigue-related grievances and confidential reporting pathways."],
                    ].map(([role, resp], i) => (
                      <tr key={role} style={{ backgroundColor: i % 2 === 0 ? "rgba(8,28,46,0.03)" : "transparent" }}>
                        <td className="px-3 py-2 text-xs font-medium" style={{ color: "#081C2E", width: "30%" }}>{role}</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>{resp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Section 5 */}
              <SectionHeading id="s5">5. Fatigue Risk Factors and Indicators</SectionHeading>
              <h3 className="text-xs font-bold mb-2 mt-4" style={{ color: "#081C2E" }}>5.1 Primary Risk Factors</h3>
              <ul className="list-none pl-0 space-y-1 mb-4">
                {[
                  "High ambient temperatures and severe heat exposure (KSA desert climate, summer WBGT frequently >30 °C).",
                  "Long travel durations to and from remote exploration sites.",
                  "Extended working hours and continuous shift patterns during drilling campaigns.",
                  "Night shifts and the resulting circadian rhythm disruption.",
                  "Cultural and religious practices — e.g., fasting and altered sleep schedules during Ramadan.",
                  "Poor sleep quality, dehydration, high physical workload or compounding personal and medical factors.",
                  "Camp conditions: noise, light, temperature control and sleeping arrangements.",
                ].map((item) => (
                  <Bullet key={item}>{item}</Bullet>
                ))}
              </ul>
              <h3 className="text-xs font-bold mb-2 mt-4" style={{ color: "#081C2E" }}>5.2 Physical and Behavioural Risk Indicators</h3>
              <p className="text-sm leading-relaxed mb-2" style={{ color: "#374151" }}>
                Supervisors, the buddy system and peers must actively monitor for the following signs:
              </p>
              <ul className="list-none pl-0 space-y-1">
                {[
                  "Reduced alertness, sluggish reaction times or lack of concentration.",
                  "Uncharacteristic irritability, mood changes or social withdrawal.",
                  "Increased frequency of operational mistakes, near misses or dropped tools.",
                  "Physical signs: constant yawning, micro-sleeps, heavy eyelids, poor coordination, frequent stumbling.",
                  "Slurred or slow speech, memory lapses, forgetting recent instructions.",
                  "Self-reported symptoms: headache, blurred vision, nausea, muscle weakness.",
                ].map((item) => (
                  <Bullet key={item}>{item}</Bullet>
                ))}
              </ul>

              {/* Section 6 */}
              <SectionHeading id="s6">6. Work Hours and Rostering Guidelines</SectionHeading>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
                To prevent chronic fatigue, True East Mining enforces the following rostering baselines. Any deviation must be risk-assessed and authorised in writing by the Site Manager with HSE Manager endorsement.
              </p>
              <div className="overflow-x-auto mb-4 rounded border" style={{ borderColor: "#dde3ec" }}>
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ backgroundColor: "#081C2E" }}>
                      {["Control", "Baseline Rule"].map((h) => (
                        <th key={h} className="text-left px-3 py-2 font-semibold tracking-wide text-xs" style={{ color: "#ffffff" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Maximum Shift Duration", "12 hours including all operational breaks. Any extension beyond 12 hours requires a written fatigue risk assessment."],
                      ["Maximum Continuous Work Period", "14 consecutive days, followed by a minimum 7-day rest/rotation off-site."],
                      ["Minimum Rest Between Shifts", "10 hours — designed to provide a minimum 6-hour continuous sleep opportunity after transit and meals."],
                      ["Night Shift Rotation", "Night work limited to 3–5 consecutive nights before rotation back to day shifts to allow circadian recovery."],
                      ["Travel Buffer", "Travel time to/from site is not counted as rest time. A minimum 1-hour buffer is required after arrival before starting work."],
                      ["Ramadan / Peak Heat Provisions", "During Ramadan or summer heat waves (WBGT >32 °C), rosters must include additional mandatory breaks and shorter overall shifts where operationally feasible. Iftar and Suhoor breaks are protected."],
                      ["Emergency Call-Out", "Any call-out during a rest period must be logged; the rest period must be re-started and the individual released from the next scheduled shift if the call-out exceeds 2 hours."],
                    ].map(([ctrl, rule], i) => (
                      <tr key={ctrl} style={{ backgroundColor: i % 2 === 0 ? "rgba(8,28,46,0.03)" : "transparent" }}>
                        <td className="px-3 py-2 text-xs font-medium" style={{ color: "#081C2E", width: "35%" }}>{ctrl}</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>{rule}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Section 7 */}
              <SectionHeading id="s7">7. Heat and Fatigue Controls</SectionHeading>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
                Heat stress directly accelerates physical fatigue in the KSA operating environment. The following controls are mandatory and integrated with the Heat Stress Prevention Procedure (TE-IMS-PROC-HSE-002).
              </p>
              <ul className="list-none pl-0 space-y-1">
                {[
                  "WBGT Monitoring — adjust work-rest cycles dynamically based on the WBGT index — e.g., mandate 15 minutes of rest per hour when WBGT >30 °C and 30 minutes per hour when WBGT >32 °C.",
                  "Hydration — provide a minimum of 3–5 litres of cool drinking water per person per day, plus electrolyte replacements during heat events.",
                  "Cooling Stations — establish shaded rest areas and cooling stations equipped with fans or AC units (where available) near the active rig.",
                  "Scheduling — schedule the most physically demanding tasks (tripping rods, core handling, manual drilling tasks) outside of peak midday heat whenever possible.",
                  "Clothing — provide and enforce lightweight flame-resistant (FR) clothing, wide-brim or neck-flap hard hats, and sun protection.",
                  "Medical Surveillance — workers with known medical conditions that increase heat/fatigue risk are identified by pre-employment medical screening and managed by HR/HSE.",
                ].map((item) => (
                  <Bullet key={item}>{item}</Bullet>
                ))}
              </ul>

              {/* Section 8 */}
              <SectionHeading id="s8">8. Operational Control Measures</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                {[
                  "Buddy System — strict buddy system during critical or night operations — buddies actively watch for fatigue signs in partners and intervene without hesitation.",
                  "Pre-Shift Assessment — use fatigue assessment checklists or digital wellness tools (e.g., pre-shift wellness questionnaire) prior to clocking in. Outcomes recorded on the Fatigue Checklist Form.",
                  "Non-Punitive Reporting — actively encourage self-declaration of fatigue. There is zero penalty for a worker safely removing themselves from a high-risk task due to exhaustion. Stop Work Authority applies.",
                  "Targeted Monitoring — monitor high-risk tasks (rig console, driving, rod handling) with increased supervisory frequency during the fatigue window — typically 02:00–05:00 on night shifts.",
                  "Task Rotation — rotate repetitive or monotonous tasks between team members where feasible to reduce monotony-induced fatigue.",
                  "Driving Controls — no driving of light or heavy vehicles after more than 12 consecutive hours on shift. Refer to TE-IMS-SOP-LOG-001 Driving Safety SOP.",
                  "Alcohol, Drugs and Medications — zero-alcohol policy; employees must disclose use of prescription or over-the-counter medications that may cause drowsiness.",
                ].map((item) => (
                  <Bullet key={item}>{item}</Bullet>
                ))}
              </ul>

              {/* Section 9 */}
              <SectionHeading id="s9">9. Training and Awareness</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                {[
                  "Mandatory Training — all personnel complete fatigue management training during initial induction, followed by annual refresher. Drivers and equipment operators receive enhanced training.",
                  "Curriculum — recognising fatigue signs, personal risk factors, site controls, heat stress management, sleep hygiene, and the non-punitive reporting culture.",
                  "Seasonal Campaigns — targeted awareness campaigns immediately prior to Ramadan and the summer peak heat season (May–September).",
                  "Toolbox Talks — fatigue is a standing topic in the Toolbox Talk cycle during night shift rotations and during Ramadan.",
                  "Records — document all training and attendance records in the Training and Competence Matrix (TE-IMS-REG-TRN-001).",
                ].map((item) => (
                  <Bullet key={item}>{item}</Bullet>
                ))}
              </ul>

              {/* Section 10 */}
              <SectionHeading id="s10">10. Incident Reporting and Review</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                {[
                  "Reporting — all fatigue-related incidents — including near misses caused by micro-sleep, heat exhaustion or loss of concentration — must be reported immediately using the Flash Notification Form (TE-IMS-FRM-HSE-002) and the Incident Investigation Form (TE-IMS-FRM-HSE-022).",
                  "Investigation — conduct root-cause investigation per the Continual Improvement and CAPA Procedure (TE-IMS-PROC-SYS-005).",
                  "Action — lessons learned must be used to adjust site rosters, shift lengths, cooling provisions or training content. Actions tracked in the CAR Log (TE-IMS-REG-SYS-004).",
                  "Trend Analysis — HSE Manager performs quarterly trend analysis on fatigue incidents and reports to Management Review.",
                ].map((item) => (
                  <Bullet key={item}>{item}</Bullet>
                ))}
              </ul>

              {/* Section 11 */}
              <SectionHeading id="s11">11. Monitoring, Audit and Continuous Improvement</SectionHeading>
              <ul className="list-none pl-0 space-y-1 mb-4">
                {[
                  "Monthly Review — HSE Manager conducts a monthly review of fatigue reports, roster compliance (checking 14-day limit violations) and training completion.",
                ].map((item) => (
                  <Bullet key={item}>{item}</Bullet>
                ))}
              </ul>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>Key Performance Indicators monitored under this procedure:</p>
              <div className="overflow-x-auto mb-4 rounded border" style={{ borderColor: "#dde3ec" }}>
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ backgroundColor: "#081C2E" }}>
                      {["KPI", "Target"].map((h) => (
                        <th key={h} className="text-left px-3 py-2 font-semibold tracking-wide text-xs" style={{ color: "#ffffff" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Personnel trained in fatigue management", "100% of active workforce"],
                      ["Fatigue-related near misses", "Zero tolerance; downward trend year-on-year"],
                      ["Roster violation rate (14-day limit)", "≤2% of total shifts"],
                      ["Pre-shift wellness checks completed", "≥95% of shifts"],
                      ["WBGT reading compliance", "100% of days with reading ≥30 °C logged"],
                    ].map(([kpi, target], i) => (
                      <tr key={kpi} style={{ backgroundColor: i % 2 === 0 ? "rgba(8,28,46,0.03)" : "transparent" }}>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E", width: "55%" }}>{kpi}</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>{target}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <ul className="list-none pl-0 space-y-1">
                {[
                  "Internal Audit — included in the Internal Audit Programme under TE-IMS-PROC-SYS-004. Frequency: at least annually.",
                  "Management Review — KPIs and trend data reported to Management Review per TE-IMS-PROC-SYS-002.",
                  "Annual Review — this procedure is reviewed annually, or immediately after a serious fatigue-related incident or regulatory change.",
                ].map((item) => (
                  <Bullet key={item}>{item}</Bullet>
                ))}
              </ul>

              {/* Section 12 */}
              <SectionHeading id="s12">12. References</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                {[
                  "ISO 45001:2018 — Occupational Health and Safety Management Systems (Clauses 6.1.2 Hazard identification, 7.2 Competence, 8.1.2 Eliminating hazards).",
                  "ISO 9001:2015 — Quality Management Systems (Clause 7.1.4 Environment for the operation of processes).",
                  "ISO 14001:2015 — Environmental Management Systems.",
                  "MHRSD — Ministry of Human Resources and Social Development, KSA Labour Law and Occupational Safety and Health Regulation.",
                  "NCEC — National Center for Environmental Compliance guidelines (environmental considerations for extreme heat).",
                  "GCC Occupational Health and Safety Standard — Heat Stress Management.",
                  "Saudi Aramco GI 150.003 — Working in Hot Environments (best-practice benchmark).",
                ].map((item) => (
                  <Bullet key={item}>{item}</Bullet>
                ))}
              </ul>

              {/* Section 13 */}
              <SectionHeading id="s13">13. Related Documents</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                {[
                  "TE-IMS-POL-HSE-001 — HSE Policy",
                  "TE-IMS-PROC-HSE-002 — Heat Stress Prevention Procedure",
                  "TE-IMS-PROC-HSE-004 — Site Emergency Preparedness and Response Procedure",
                  "TE-IMS-PROC-HSE-015 — Risk and Opportunity Procedure",
                  "TE-IMS-PROC-SYS-004 — Internal Audit Procedure",
                  "TE-IMS-PROC-SYS-005 — Continual Improvement and CAPA Procedure",
                  "TE-IMS-SOP-OPS-002 — Night Shift Drilling SOP",
                  "TE-IMS-SOP-LOG-001 — Driving Safety SOP",
                  "TE-IMS-FRM-HSE-002 — Incident Flash Notification",
                  "TE-IMS-FRM-HSE-022 — Incident and Accident Investigation Report",
                  "TE-IMS-REG-TRN-001 — Training and Competence Matrix",
                ].map((item) => (
                  <Bullet key={item}>{item}</Bullet>
                ))}
              </ul>

              {/* Section 14 */}
              <SectionHeading id="s14">14. Records and Retention</SectionHeading>
              <div className="overflow-x-auto mb-4 rounded border" style={{ borderColor: "#dde3ec" }}>
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ backgroundColor: "#081C2E" }}>
                      {["Record", "Retention"].map((h) => (
                        <th key={h} className="text-left px-3 py-2 font-semibold tracking-wide text-xs" style={{ color: "#ffffff" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Fatigue pre-shift wellness checklists", "3 years on site, then archive"],
                      ["Roster and work-hour records", "5 years"],
                      ["Training records and attendance", "5 years"],
                      ["Fatigue-related incident reports and investigations", "10 years"],
                      ["WBGT monitoring logs", "3 years"],
                      ["Annual procedure review records", "Life of IMS"],
                    ].map(([record, retention], i) => (
                      <tr key={record} style={{ backgroundColor: i % 2 === 0 ? "rgba(8,28,46,0.03)" : "transparent" }}>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E", width: "65%" }}>{record}</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>{retention}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Section 15 — Revision History */}
              <SectionHeading id="s15">15. Revision History</SectionHeading>
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#081C2E" }}>
                    {["Rev", "Date", "Description of Changes", "Author"].map((h) => (
                      <th key={h} className="text-left px-3 py-2 font-semibold tracking-wide" style={{ color: "#ffffff" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["00", "14.04.2025", "Initial issue", "MR"],
                    ["01", "10.04.2026", "Rebuilt to TE design standard. Expanded definitions, responsibilities, rostering baseline table, KPI table, Ramadan/heat provisions, Stop Work Authority clause, records retention table, and full references/related docs.", "MR"],
                  ].map(([rev, date, desc, author], i) => (
                    <tr key={rev} style={{ borderTop: i > 0 ? "1px solid #edf0f5" : undefined }}>
                      <td className="border px-3 py-2 te-code" style={{ borderColor: "#edf0f5" }}>{rev}</td>
                      <td className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>{date}</td>
                      <td className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>{desc}</td>
                      <td className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>{author}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Section 16 — Approval */}
              <SectionHeading id="s16">16. Approval</SectionHeading>
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#081C2E" }}>
                    {["Role", "Name", "Signature", "Date"].map((h) => (
                      <th key={h} className="text-left px-3 py-2 font-semibold tracking-wide" style={{ color: "#ffffff" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Prepared by (HSE Manager)",
                    "Reviewed by (QA / MR)",
                    "Approved by (Managing Director / CEO)",
                  ].map((role) => (
                    <tr key={role} style={{ borderTop: "1px solid #edf0f5" }}>
                      <td className="border px-3 py-3 font-medium" style={{ borderColor: "#edf0f5" }}>{role}</td>
                      <td className="border px-3 py-3" style={{ borderColor: "#edf0f5" }}></td>
                      <td className="border px-3 py-3" style={{ borderColor: "#edf0f5" }}></td>
                      <td className="border px-3 py-3" style={{ borderColor: "#edf0f5" }}></td>
                    </tr>
                  ))}
                </tbody>
              </table>

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
