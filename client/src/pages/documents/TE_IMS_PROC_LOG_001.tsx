// TE-IMS-PROC-LOG-001 — Company Vehicle Usage Procedure
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

export default function TE_IMS_PROC_LOG_001() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "PROC — Procedures", href: "/docs/proc" },
          { label: "Company Vehicle Usage Procedure" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              Company Vehicle Usage Procedure
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-PROC-LOG-001_Rev01</span>
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
                ["Document Code", "TE-IMS-PROC-LOG-001"],
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-PROC-LOG-001_Rev01</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Company Vehicle Usage Procedure
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-6" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-PROC-LOG-001</td>
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

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure establishes safe, efficient, and compliant guidelines for the use, handover, tracking, maintenance, and operation of all company vehicles at True East Mining Company (TEMC) sites. It protects personnel, assets, and the environment, and aligns with ISO 45001:2018, MHRSD traffic and occupational safety regulations in the Kingdom of Saudi Arabia, and client fleet safety standards (including Ma'aden and other operators).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>2. Scope</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure applies to all company-owned, leased, or rented vehicles — light vehicles, 4x4s, heavy trucks, buses, and utility buggies — and to all drivers, passengers, and transportation activities within TEMC operations. It covers site access roads, camp operations, client site driving, and on-highway journeys between company sites and offices.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>3. Definitions</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Authorized Driver — a TEMC employee or contractor who holds a valid KSA licence for the vehicle class, has completed TEMC defensive driving training, and is formally approved by the Transportation Manager.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Site Vehicle — a vehicle used inside a TEMC or client operating area — subject to additional rules (GPS, buggy whip, speed limits).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Handover — the formal transfer of a vehicle between drivers or shifts, recorded on the Vehicle Handover Register.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Daily Vehicle Checklist — the pre-start inspection completed at the beginning of every shift before the vehicle is moved.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Out of Service — vehicle tagged and removed from operation pending repair or investigation.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• IVMS / GPS Telematics — in-vehicle monitoring system — records location, speed, harsh events, and driver behaviour.</p>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Managing Director (MD)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Approves this procedure. Allocates resources for training, maintenance, and vehicle standards.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site Manager / Transportation Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Oversees overall fleet compliance. Formally approves drivers. Monitors IVMS reports and takes action on exceptions.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Develops and maintains this procedure. Delivers or arranges defensive driving training. Investigates incidents. Reports KPIs.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Line Managers / Supervisors</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Verify driver competency before assigning tasks. Enforce site road rules. Ensure crews use the correct vehicles for the task.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Maintenance Supervisor</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Maintains the fleet per manufacturer schedule. Clears vehicles for service after repair. Maintains the service record.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Authorised Drivers</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Inspect the vehicle daily. Strictly follow traffic rules. Report incidents and defects. Maintain licence and training validity.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>All Personnel (Passengers)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Wear seatbelts. Do not distract the driver. Report unsafe driving.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>5. Driver Authorisation and Training</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Licensing — only drivers holding a valid KSA licence of the correct class may operate a company vehicle. A photocopy is held in the driver file.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Medical fitness — drivers must be medically fit — vision, cardiac, diabetes, and fatigue-affecting conditions assessed per TEMC health screening.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Mandatory training — Defensive Driving, Desert / Off-Road Driving, Daily Vehicle Inspection, Emergency Breakdown Response, Journey Management familiarisation.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Assessment — a practical road check by the Transportation Manager or delegate before formal authorisation.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Records — driver authorisation letter, training certificates, and licence copies retained in the IMS personnel file.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Refresher — defensive driving refresher every 2 years or immediately after any incident.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>6. Vehicle Handover and Key Control</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Handover between drivers or shifts requires a joint visual check of tyres, lights, fluid leaks, brakes, wipers, horn, seatbelts, and interior cleanliness.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Both issuing and receiving drivers sign the Vehicle Handover Register (TE-IMS-FRM-LOG-001).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Keys are handed directly to the authorised driver. Do not leave keys in the ignition of an unoccupied vehicle.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Any defect identified at handover is recorded and the vehicle not accepted until repaired or tagged Out of Service.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>7. Tracking and Monitoring</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• All site vehicles are fitted with IVMS / GPS telematics to monitor real-time location, speed, route, and harsh driving events.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• A functional reverse hooter or alarm is mandatory on all site vehicles.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Where required by client, a high-visibility buggy whip or safety flag is fitted and used in active mining areas (e.g. Ma'aden standard).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• IVMS exception reports reviewed weekly by the Transportation Manager; repeat exceptions trigger counselling or suspension of driving privileges.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>8. General Rules of Operation</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Pre-start inspection — every shift, using the Daily Vehicle Checklist (TE-IMS-FRM-LOG-002). Vehicle must not move until the checklist is complete.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Seatbelts — mandatory for driver and every passenger, every journey.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Reverse parking — mandatory — nose out — for safe forward-facing emergency exit.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Uphill parking — turn wheels toward the curb, engage handbrake, engage Reverse (manual) or Park (automatic).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Downhill parking — turn wheels away from the curb, engage handbrake, engage 1st gear (manual) or Park (automatic).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Idling — never leave air-conditioning running with occupants inside an unattended vehicle. Never leave keys in the ignition.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Speed limits — obey all KSA and client mandated limits. Reduce speed for poor road, traffic, weather, or night conditions.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Distractions — zero tolerance for mobile phone use while driving. Drivers must pull over safely to use a phone. No horseplay in the cabin.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Fatigue — maximum continuous driving 2 hours, then rest break. Maximum 10 hours driving per 24-hour period.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>9. Heat and Flammable Items Control</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>KSA desert temperatures can exceed 70°C inside a closed vehicle. The following items must be removed from the cabin before parking in sun, or stored in a shaded, ventilated area:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Lighters and matches.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Body sprays, aerosols, and pressurised containers.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Pressurised or frozen water bottles.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Battery chargers, power banks, and lithium batteries.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Mobile phones and sunglasses left on the dash.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Loose paperwork or flammable upholstery covers.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>10. Driving in Adverse Conditions</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Heavy rain / flash flood — reduce speed, increase following distance, headlights ON, wipers functioning. NEVER drive through a flowing wadi — turn around.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Strong wind / dust storm — reduce speed, headlights and hazards ON, pull over safely if visibility drops below 100 m.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Night driving — reduce speed, use high beam where safe, watch for camels and livestock on KSA roads — a major hazard.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Off-road / desert — tyre pressure adjusted, 4x4 engaged, travel in convoy where practical, journey management plan activated (PROC-LOG-002).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Fog or low visibility — reduce speed, fog lights ON, stop and wait if unsafe.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>11. Maintenance and On-Board Safety Equipment</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Servicing per manufacturer schedule — recorded in TE-IMS-REG-MAINT-001.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Every vehicle carries: fully stocked First Aid kit, serviceable fire extinguisher (≥2 kg ABC), reflective warning triangles, spare tyre with jack and wheel brace, high-visibility vests for all occupants, tow rope, water, and torch.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Tyres inspected for wear, cuts, and pressure daily; replace at ≤ 2 mm tread.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Critical defects (brakes, steering, lights, tyres) are reported immediately; vehicle tagged Out of Service until repaired.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Maintenance history retained per PROC-MAINT-001.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>12. Incident Reporting</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• All collisions, rollovers, near-misses, and property damage events are reported immediately to Supervisor and HSE Manager via Flash Notification (TE-IMS-FRM-HSE-005).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Formal investigation follows PROC-HSE-006 Incident Investigation.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Vehicle involved is secured, photographed, and kept Out of Service until cleared.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Driver is stood down pending investigation where injury or significant damage occurred.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>13. Compliance and Enforcement</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Drivers must comply with all KSA MHRSD traffic regulations, Saudi Traffic Department rules, and client road safety standards.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Non-compliance — speeding, no seatbelt, mobile phone, alcohol/drug — triggers progressive action: counselling → suspension of driving privileges → termination and report to authorities.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• HSE conducts unannounced vehicle and driver spot audits.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Zero tolerance for driving under the influence of alcohol, illicit drugs, or impairing medication.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>14. Performance Indicators</p>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Daily vehicle checklists completed</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Daily</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Driver training and authorisation current</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>IVMS speeding exceptions per 1000 km</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≤ 2</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Vehicle incident rate per million km</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≤ 0.5</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Quarterly</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Out-of-service repair turnaround</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≤ 7 days</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Per event</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Seatbelt compliance spot-check</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>15. Review and Continual Improvement</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Annual review, or following any significant incident or regulatory change.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Incident and IVMS trends reviewed monthly and fed into the HSE management review.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Lessons learned shared via toolbox talks and driver bulletins.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>16. References</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 45001:2018 — Clause 8.1.2 Operational Controls.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 14001:2015 — Clause 8.1 Operational Controls (fuel and environment).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• MHRSD — Occupational Safety and Traffic Regulations (KSA).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Saudi Traffic Department — General Traffic Regulations.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Client fleet and road safety standards (e.g. Ma'aden).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TEMC PROC-LOG-002 Journey Management Procedure; PROC-MAINT-001 Maintenance Management; SOP-LOG-001 Driving Safety SOP; PROC-HSE-006 Incident Investigation.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>17. Related Documents and Records</p>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Vehicle Handover Register (FRM-LOG-001)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Transportation Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Daily Vehicle Checklist (FRM-LOG-002)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site Supervisor</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>12 months</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Driver Authorisation and Training File</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HR / HSE</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Employment + 3 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>IVMS Exception Reports</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Transportation Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Vehicle Maintenance Log (REG-MAINT-001)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Maintenance Supervisor</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Life of vehicle + 3 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Incident / Flash Reports (FRM-HSE-005)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Initial issue</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>01</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>10.04.2026</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Full rebuild — added definitions, formal responsibilities table, expanded training (fatigue, medical fitness), heat and flammable items control, adverse conditions table (night driving, convoy, camels), KPI table with CEO review flag, records retention table. Linked to PROC-LOG-002 Journey Management and REG-MAINT-001.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE</td>
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
