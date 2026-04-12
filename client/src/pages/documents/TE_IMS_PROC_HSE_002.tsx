// TE-IMS-PROC-HSE-002 — Heat Stress Prevention Procedure
// Design: Standardized policy layout — left sidebar (Doc Info + TOC) + main content area

import { Link } from "wouter";
import { TopNav, Footer, Breadcrumb } from "@/components/Layout";
import { LOGO_GRAY, LOGO_WHITE } from "@/lib/imsData";

const sections = [
  { id: "s1", label: "1. Purpose" },
  { id: "s2", label: "2. Scope" },
  { id: "s3", label: "3. Definitions" },
  { id: "s4", label: "4. Responsibilities" },
  { id: "s5", label: "5. Risk Factors" },
  { id: "s6", label: "6. Procedure" },
  { id: "s7", label: "7. Monitoring, Audit and Continuous Improvement" },
  { id: "s8", label: "8. References" },
  { id: "s9", label: "9. Related Documents" },
  { id: "s10", label: "10. Records and Retention" },
  { id: "s11", label: "11. Revision History" },
  { id: "s12", label: "12. Approval" },
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

export default function TE_IMS_PROC_HSE_002() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "PROC — Procedures", href: "/docs/proc" },
          { label: "Heat Stress Prevention Procedure" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              Heat Stress Prevention Procedure
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-PROC-HSE-002_Rev01</span>
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
                ["Document Code", "TE-IMS-PROC-HSE-002"],
                ["Revision", "Rev 01"],
                ["Date", "10 April 2026"],
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-PROC-HSE-002_Rev01</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Heat Stress Prevention Procedure
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-2" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-PROC-HSE-002</td>
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
                To minimise the risk of heat-related illnesses among personnel working in hot environments at True East Mining exploration drilling sites in Saudi Arabia. This procedure establishes targeted training, engineering and administrative controls, hydration and shade provisions, continuous WBGT monitoring and rapid emergency response — ensuring a safe and productive workplace during peak summer operations.
              </p>

              {/* Section 2 */}
              <SectionHeading id="s2">2. Scope</SectionHeading>
              <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                This procedure applies to all employees, contractors and visitors exposed to high ambient temperatures and/or heavy physical work at True East Mining sites. It is particularly critical during outdoor drilling, rig setup, rod handling, core retrieval and throughout the summer months (April–October) when the WBGT routinely exceeds 30 °C. It integrates with the Fatigue Management Procedure (TE-IMS-PROC-HSE-001) and the Site Emergency Preparedness Procedure (TE-IMS-PROC-HSE-004).
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
                      ["Heat Stress", "Physiological strain from hot environments, leading to heat-related illnesses when the body's cooling mechanisms are overwhelmed."],
                      ["WBGT", "Wet Bulb Globe Temperature — a combined measure of heat, humidity, wind and solar radiation, used to set safe work-rest limits."],
                      ["Heat-Related Illnesses", "A spectrum of medical conditions ranging from mild (prickly heat, cramps) to life-threatening medical emergencies (heat stroke)."],
                      ["Acclimatisation", "A gradual physiological adaptation to heat achieved over 5–14 days of progressive exposure; critical for new or returning workers."],
                      ["Potable Water", "Water safe for human consumption, meeting KSA drinking water standards."],
                      ["Cooling Station", "A dedicated, shaded and where possible air-conditioned rest area located near the active work zone."],
                      ["Acute Heat Wave", "A period when WBGT exceeds 32 °C or ambient temperature exceeds 45 °C — requiring activation of enhanced controls."],
                    ].map(([term, def], i) => (
                      <tr key={term} style={{ backgroundColor: i % 2 === 0 ? "rgba(8,28,46,0.03)" : "transparent" }}>
                        <td className="px-3 py-2 text-xs font-medium" style={{ color: "#081C2E", width: "25%" }}>{term}</td>
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
                      ["Managing Director", "Provides resources for heat stress controls; endorses annual summer-season readiness plan."],
                      ["Site Manager", "Ensures full implementation; provides resources (water, shade, cooling stations); monitors overall WBGT compliance; approves enhanced controls during heat waves."],
                      ["HSE Manager / Safety Officer", "Develops and maintains this procedure; delivers specialised training; monitors heat stress indicators and site medical logs; investigates heat-related incidents; reports KPIs to Management Review."],
                      ["Supervisors / Shift In-Charge", "Assess daily heat risk (WBGT); dynamically adjust work-rest cycles; enforce hydration and breaks; intervene immediately on symptoms; ensure rapid medical response; report all incidents."],
                      ["Drilling Superintendent", "Schedules heavy rigging, rod handling and physically demanding tasks outside peak midday heat."],
                      ["Site Nurse / First Aider", "Maintains cold-pack stock and heat-stroke response kit; performs rapid assessment and stabilisation; coordinates with external medical support."],
                      ["All Employees and Contractors", "Maintain continuous hydration; self-report symptoms immediately; follow all controls; use shade and rest areas; pair with buddy; refuse work if feeling unwell under non-punitive framework."],
                    ].map(([role, resp], i) => (
                      <tr key={role} style={{ backgroundColor: i % 2 === 0 ? "rgba(8,28,46,0.03)" : "transparent" }}>
                        <td className="px-3 py-2 text-xs font-medium" style={{ color: "#081C2E", width: "28%" }}>{role}</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>{resp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Section 5 */}
              <SectionHeading id="s5">5. Risk Factors</SectionHeading>
              <ul className="space-y-1 mb-4">
                <Bullet>High ambient temperatures and extreme humidity — Saudi desert summer conditions, WBGT routinely &gt;30 °C between May and September.</Bullet>
                <Bullet>Heavy physical work: rigging, manual rod handling, heavy lifting, core handling.</Bullet>
                <Bullet>Heavy, restrictive PPE: flame-resistant overalls, gloves, hard hats, eye protection.</Bullet>
                <Bullet>Long shifts and limited natural shade at exploration sites.</Bullet>
                <Bullet>Ramadan fasting — severely reduced daytime fluid and caloric intake.</Bullet>
                <Bullet>Remote drilling sites with delayed access to advanced medical facilities.</Bullet>
                <Bullet>Pre-existing medical conditions: hypertension, cardiovascular disease, diabetes, recent illness, certain medications.</Bullet>
                <Bullet>Inadequate sleep or prior-day dehydration carrying over to next shift.</Bullet>
                <Bullet>New, returning or non-acclimatised workers (first 7–14 days).</Bullet>
              </ul>

              {/* Section 6 */}
              <SectionHeading id="s6">6. Procedure</SectionHeading>

              <SubHeading>6.1 Training and Awareness</SubHeading>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
                All personnel must receive mandatory heat stress training: initial induction plus annual summer refresher. Topics cover:
              </p>
              <ul className="space-y-1 mb-4">
                <Bullet>Environmental and personal risk factors causing heat-related illnesses.</Bullet>
                <Bullet>Critical importance of drinking frequent, small quantities of water — minimum 4 litres per 10-hour shift, scaling up to 6–8 litres in extreme heat.</Bullet>
                <Bullet>Recognising signs and symptoms of heat disorders and the buddy-system of monitoring.</Bullet>
                <Bullet>Procedures for reporting symptoms and activating emergency services (999 / 997 in KSA).</Bullet>
                <Bullet>The physiological acclimatisation process and its timing.</Bullet>
                <Bullet>Ramadan-specific hydration strategies and Suhoor/Iftar planning.</Bullet>
              </ul>

              <SubHeading>6.2 Supervisor Responsibilities</SubHeading>
              <ul className="space-y-1 mb-4">
                <Bullet>Brief the crew on this procedure before assigning heavy work in extreme heat.</Bullet>
                <Bullet>Monitor the WBGT daily using a portable site meter or local weather service alerts — record in the Daily WBGT Log.</Bullet>
                <Bullet>Proactively adjust schedules and enforce strict work-rest controls when WBGT exceeds 28–30 °C.</Bullet>
                <Bullet>Intervene immediately if any symptoms appear and ensure prompt medical evaluation.</Bullet>
                <Bullet>Escalate to Site Manager if a heat wave is forecast or WBGT exceeds 32 °C.</Bullet>
              </ul>

              <SubHeading>6.3 Provision of Water</SubHeading>
              <ul className="space-y-1 mb-4">
                <Bullet>Potable, cool drinking water available at all times — minimum 3–5 litres per person per day, scaling to 1 litre/hour during peak heat.</Bullet>
                <Bullet>Hydration stations at the rig site, rest areas and inside all vehicles.</Bullet>
                <Bullet>Encourage small, frequent sips rather than infrequent heavy gulping.</Bullet>
                <Bullet>Electrolyte replacements (ORS sachets) available for heavy sweat loss and Ramadan fasting recovery.</Bullet>
                <Bullet>Water temperature: cool but not cold — 10–15 °C preferred.</Bullet>
              </ul>

              <SubHeading>6.4 Access to Shade and Rest Areas</SubHeading>
              <ul className="space-y-1 mb-4">
                <Bullet>Provide purpose-built shaded rest areas (gazebos, industrial tents or air-conditioned containers) with open air flow.</Bullet>
                <Bullet>Schedule mandatory breaks in shade — e.g., 10–15 minutes every hour when WBGT is high.</Bullet>
                <Bullet>Vehicles and trucks may be used as shade only if air-conditioned and not parked in direct, radiating sun.</Bullet>
                <Bullet>Rest areas equipped with cold water, electrolytes, first-aid supplies and ambient thermometer.</Bullet>
              </ul>

              <SubHeading>6.5 Work-Rest Cycles (WBGT-Based)</SubHeading>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
                Baseline guidelines — adjust dynamically per MHRSD/WBGT tables. Supervisors must further reduce continuous work time during Ramadan or peak summer heat waves.
              </p>
              <div className="overflow-x-auto mb-4 rounded border" style={{ borderColor: "#dde3ec" }}>
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ backgroundColor: "#081C2E" }}>
                      {["WBGT (°C)", "Work-Rest Cycle (per hour)", "Example Activity Level"].map((h) => (
                        <th key={h} className="text-left px-3 py-2 font-semibold tracking-wide text-xs" style={{ color: "#ffffff" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["<28 °C", "Continuous work", "Light to moderate tasks"],
                      ["28–30 °C", "50 min work / 10 min rest", "Moderate to heavy tasks"],
                      ["30–32 °C", "40 min work / 20 min rest", "Heavy manual tasks (e.g., rod handling)"],
                      ["32–35 °C", "30 min work / 30 min rest", "All tasks — monitor extremely closely"],
                      [">35 °C", "Suspend all non-essential heavy work", "Only essential critical-safety tasks with full controls"],
                    ].map(([wbgt, cycle, activity], i) => (
                      <tr key={wbgt} style={{ backgroundColor: i % 2 === 0 ? "rgba(8,28,46,0.03)" : "transparent" }}>
                        <td className="px-3 py-2 text-xs font-medium" style={{ color: "#081C2E" }}>{wbgt}</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>{cycle}</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>{activity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <SubHeading>6.6 Heat-Related Illnesses — Signs, Symptoms and Treatment</SubHeading>
              <div className="overflow-x-auto mb-4 rounded border" style={{ borderColor: "#dde3ec" }}>
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ backgroundColor: "#081C2E" }}>
                      {["Condition", "Signs and Symptoms", "Immediate Treatment"].map((h) => (
                        <th key={h} className="text-left px-3 py-2 font-semibold tracking-wide text-xs" style={{ color: "#ffffff" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Heat Rash (Prickly Heat)", "Red blotches, itchiness in damp/sweaty areas; prickling sensation.", "Move to cool environment; cool shower; dry skin thoroughly; wear loose clothing."],
                      ["Heat Cramps", "Painful involuntary muscle spasms, typically legs or abdomen.", "Rest in shade; hydrate with water and electrolytes; gentle stretching; return to work only after full recovery."],
                      ["Heat Exhaustion", "Heavy sweating, severe weakness, dizziness, nausea, headache, pale/clammy skin, rapid pulse.", "Move to shade; loosen heavy clothing; hydrate slowly; cool with wet cloths and fans; monitor for 30 minutes; seek medical help if no rapid improvement."],
                      ["Heat Syncope", "Brief fainting or dizziness on standing after sustained heat exposure.", "Lay flat in shade; elevate legs; cool body; hydrate; medical assessment required before return to work."],
                      ["Heat Stroke (EMERGENCY)", "Body temp >40 °C; confusion, disorientation, seizures; NO sweating (hot/dry skin); unconsciousness.", "Call 997 immediately. Move to shade; initiate rapid cooling (ice packs to neck/armpits/groin, wet sheets, fans); do NOT give fluids if unconscious; transport to hospital."],
                    ].map(([cond, signs, treatment], i) => (
                      <tr key={cond} style={{ backgroundColor: i % 2 === 0 ? "rgba(8,28,46,0.03)" : "transparent" }}>
                        <td className="px-3 py-2 text-xs font-medium" style={{ color: "#081C2E", width: "22%" }}>{cond}</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#374151", width: "39%" }}>{signs}</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>{treatment}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <SubHeading>6.7 Control Measures</SubHeading>
              <ul className="space-y-1 mb-4">
                <Bullet>Acclimatisation — gradual heat exposure over 5–14 days for new or returning workers — start at 20% workload and increase progressively.</Bullet>
                <Bullet>Buddy System — workers pair up to actively monitor each other for physical symptoms during all hot-weather work.</Bullet>
                <Bullet>Scheduling — schedule the heaviest manual work during cooler early morning (05:00–10:00) or late afternoon (16:00–19:00) hours.</Bullet>
                <Bullet>Cooling Gear — cooling vests, neck shades, industrial misting fans and ice-pack belts where practical.</Bullet>
                <Bullet>Pre-Shift Health Check — visual fitness check before assignment to heavy outdoor work; confirm hydration and rest.</Bullet>
                <Bullet>Culture — strict non-punitive reporting for any heat-related symptoms; Stop Work Authority applies.</Bullet>
              </ul>

              <SubHeading>6.8 Incident Reporting and Review</SubHeading>
              <ul className="space-y-1 mb-4">
                <Bullet>Report any heat-related illness (from severe cramps to heat stroke) immediately using the Incident Flash Notification Form (TE-IMS-FRM-HSE-002).</Bullet>
                <Bullet>Investigate root cause per the Continual Improvement and CAPA Procedure (TE-IMS-PROC-SYS-005).</Bullet>
                <Bullet>Review site controls and update work-rest cycles based on lessons learned.</Bullet>
                <Bullet>Notify MHRSD where reporting thresholds are met for occupational illness.</Bullet>
              </ul>

              {/* Section 7 */}
              <SectionHeading id="s7">7. Monitoring, Audit and Continuous Improvement</SectionHeading>
              <ul className="space-y-1 mb-4">
                <Bullet>Monthly Review — HSE Manager reviews heat incidents, training completion, WBGT logs and water-consumption records.</Bullet>
              </ul>
              <p className="text-sm font-semibold mb-2" style={{ color: "#081C2E" }}>Key Performance Indicators:</p>
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
                      ["Personnel trained in heat stress (annual refresher before summer)", "100% of active workforce"],
                      ["Heat-related illness cases (all severities)", "Downward trend year-on-year; zero heat strokes"],
                      ["Compliance with WBGT-based work-rest cycles", "100% when WBGT >30 °C"],
                      ["Daily WBGT log completion", "≥95% of summer operational days"],
                      ["Water supply per worker per day", "≥3 litres minimum, ≥5 litres when WBGT >30 °C"],
                    ].map(([kpi, target], i) => (
                      <tr key={kpi} style={{ backgroundColor: i % 2 === 0 ? "rgba(8,28,46,0.03)" : "transparent" }}>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E", width: "60%" }}>{kpi}</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>{target}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <ul className="space-y-1 mb-4">
                <Bullet>Annual Review — procedure reviewed annually prior to summer season, or after any serious incident or regulatory change.</Bullet>
                <Bullet>Management Review — KPIs and trend data reported to Management Review per TE-IMS-PROC-SYS-002.</Bullet>
              </ul>

              {/* Section 8 */}
              <SectionHeading id="s8">8. References</SectionHeading>
              <ul className="space-y-1 mb-4">
                <Bullet>ISO 45001:2018 — Occupational Health and Safety Management Systems (Clauses 6.1.2, 7.2, 8.1.2).</Bullet>
                <Bullet>ISO 14001:2015 — Environmental Management Systems.</Bullet>
                <Bullet>MHRSD — Occupational Safety and Health Management Regulation (KSA) covering heat stress prevention.</Bullet>
                <Bullet>NCEC — National Center for Environmental Compliance Guidelines.</Bullet>
                <Bullet>GCC Occupational Health and Safety Standard — Heat Stress Management.</Bullet>
                <Bullet>Saudi Aramco GI 150.003 — Working in Hot Environments (best-practice benchmark).</Bullet>
                <Bullet>NIOSH Criteria for a Recommended Standard — Occupational Exposure to Heat and Hot Environments.</Bullet>
              </ul>

              {/* Section 9 */}
              <SectionHeading id="s9">9. Related Documents</SectionHeading>
              <ul className="space-y-1 mb-4">
                <Bullet>TE-IMS-POL-HSE-001 — HSE Policy</Bullet>
                <Bullet>TE-IMS-PROC-HSE-001 — Fatigue Management Procedure</Bullet>
                <Bullet>TE-IMS-PROC-HSE-004 — Site Emergency Preparedness Procedure</Bullet>
                <Bullet>TE-IMS-PROC-HSE-016 — Personal Protective Equipment Procedure</Bullet>
                <Bullet>TE-IMS-FRM-HSE-002 — Incident Flash Notification</Bullet>
                <Bullet>TE-IMS-FRM-HSE-009 — Take 5 Hazard Assessment</Bullet>
                <Bullet>TE-IMS-FRM-HSE-022 — Incident and Accident Investigation Report</Bullet>
                <Bullet>TE-IMS-REG-TRN-001 — Training and Competence Matrix</Bullet>
              </ul>

              {/* Section 10 */}
              <SectionHeading id="s10">10. Records and Retention</SectionHeading>
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
                      ["Daily WBGT log", "3 years on site, then archive"],
                      ["Water/hydration supply records", "3 years"],
                      ["Heat stress training records", "5 years"],
                      ["Heat-related incident reports and investigations", "10 years"],
                      ["Acclimatisation records for new workers", "5 years"],
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

              {/* Section 11 */}
              <SectionHeading id="s11">11. Revision History</SectionHeading>
              <div className="overflow-x-auto mb-4 rounded border" style={{ borderColor: "#dde3ec" }}>
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ backgroundColor: "#081C2E" }}>
                      {["Rev", "Date", "Description of Changes", "Author"].map((h) => (
                        <th key={h} className="text-left px-3 py-2 font-semibold tracking-wide text-xs" style={{ color: "#ffffff" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["00", "14.04.2025", "Initial issue.", "MR"],
                      ["01", "10.04.2026", "Rebuilt to TE design standard. Expanded WBGT work-rest table (added >35 °C suspend rule), expanded illness signs/treatment table (added heat syncope and electrolyte guidance), added KPI targets, acclimatisation protocol, Saudi emergency numbers, records retention table, Ramadan-specific controls.", "MR"],
                    ].map(([rev, date, desc, author], i) => (
                      <tr key={rev} style={{ backgroundColor: i % 2 === 0 ? "rgba(8,28,46,0.03)" : "transparent" }}>
                        <td className="px-3 py-2 text-xs font-medium" style={{ color: "#081C2E" }}>{rev}</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>{date}</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>{desc}</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>{author}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Section 12 */}
              <SectionHeading id="s12">12. Approval</SectionHeading>
              <div className="overflow-x-auto mb-4 rounded border" style={{ borderColor: "#dde3ec" }}>
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
