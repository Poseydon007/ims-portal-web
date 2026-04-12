// TE-IMS-PROC-HSE-004 — Site Emergency Preparedness Procedure
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

export default function TE_IMS_PROC_HSE_004() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "PROC — Procedures", href: "/docs/proc" },
          { label: "Site Emergency Preparedness Procedure" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              Site Emergency Preparedness Procedure
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-PROC-HSE-004_Rev01</span>
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
                ["Document Code", "TE-IMS-PROC-HSE-004"],
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-PROC-HSE-004_Rev01</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Site Emergency Preparedness Procedure
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-6" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-PROC-HSE-004</td>
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

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure establishes the framework for developing, implementing, maintaining, testing, and continually improving a Site Emergency Preparedness and Response Plan (SEPRP) for all True East Mining Company (TEMC) drilling, exploration, and associated activities in the Kingdom of Saudi Arabia. The objective is to protect life, safeguard the environment, preserve critical assets, and ensure compliance with ISO 45001:2018, ISO 14001:2015, MHRSD Occupational Safety and Health Regulations, Saudi Civil Defense requirements, and NCEC environmental incident-response guidelines.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>2. Scope</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure applies to all TEMC owned and contracted sites, including drilling rigs, camps, core yards, fuel and chemical storage areas, workshops, and remote exploration locations. It covers fires, explosions, chemical and fuel spills, medical emergencies (including heat stress and trauma), vehicle incidents, loss of well control, stuck rod / drill string incidents, natural events (dust storms, flash floods, sandstorms, lightning), and security-related incidents. All personnel — employees, contractors, visitors — are covered and must comply with the SEPRP activated for the site they are working on.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>3. Definitions</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Emergency — any unplanned event that threatens life, health, environment, or property and requires immediate action beyond normal operating response.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Site Emergency Preparedness and Response Plan (SEPRP) — the site-specific plan documenting scenarios, response steps, ERT roles, communication, and resources.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Emergency Response Team (ERT) — trained personnel assigned specific roles to respond to emergencies — Incident Commander, Fire Wardens, First Aiders, Spill Responders, Evacuation Wardens.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Incident Commander (IC) — the senior site person in charge of the response; by default, the Site HSE Manager or Drilling Superintendent.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Muster Point — pre-designated safe assembly location at least 50 meters from the nearest identified hazard and upwind where practicable.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Evacuation — the orderly movement of all personnel from an area of risk to a muster point.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Drill — planned simulation of an emergency to test the SEPRP — tabletop, functional, or full-scale.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Flash Report — immediate written notification issued within 2 hours of a serious incident to MD, HSE Manager, and QA.</span>
              </li>
            </ul>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Approves the SEPRP and resources. Ensures compliance with KSA regulations. Receives all Flash Reports for serious incidents. Chairs management review on emergency performance.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site Senior Executive (SSE) / Drilling Superintendent</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Overall site accountability for emergency preparedness. Approves site-specific SEPRP. Acts as Incident Commander until relieved. Ensures ERT is trained and equipped.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Develops, maintains, and reviews the procedure and SEPRPs. Plans and evaluates drills. Leads investigations and corrective actions. Reports KPIs to management review.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Emergency Response Team (ERT)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Executes response actions. Maintains own readiness through drills and training. Reports equipment defects immediately.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site Supervisors / Shift In-Charge</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Enforce plan during emergencies. Conduct head counts at muster points. Report to IC. Stop work authority in life-threatening situations.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>All Employees and Contractors</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Follow plan and instructions. Know their muster point and nearest emergency equipment. Participate in drills. Raise alarm on any detected emergency without delay.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Training Coordinator</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Ensures all emergency-related training is delivered, recorded, and kept current.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>5. Credible Emergency Scenarios</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>The following scenarios shall be addressed in every site SEPRP. Additional site-specific scenarios should be added following the site risk assessment.</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>#</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Scenario</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Key Response Priorities</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>1</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Rig fire / diesel or hydraulic oil fire</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Sound alarm, isolate fuel and power, evacuate to upwind muster point, attack only if trained and safe.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>2</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Fuel or chemical spill (diesel, drilling fluid, cement additives)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Contain at source using spill kit, prevent soil and groundwater impact, notify HSE and NCEC if reportable.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Medical emergency (trauma, heat stress, cardiac, snake / insect bite)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Activate first aider, stabilize, evacuate by ambulance or MedEvac, notify next of kin via HR.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>4</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Stuck drill string / dropped load / mast failure</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Establish exclusion zone (mast height + 2 m or 5 m minimum), follow SOP-OPS-001 recovery steps, evacuate non-essential personnel.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Dust storm / sandstorm / lightning</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Cease outdoor work, secure loose items, shelter in place, suspend drilling if lightning within 10 km.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>6</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Flash flood in wadi / remote camp</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Evacuate low-ground areas immediately, account for personnel, wait for all-clear before return.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>7</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Vehicle rollover / loss of control</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Secure scene, first aid, recover casualties, notify IC and IMS Journey Management.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>8</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Security incident / intrusion / civil unrest</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Shelter in place, notify SSE and local Police (999), await instructions from security coordinator.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>9</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Environmental release — drilling fluid to surface water</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Stop source, contain, notify HSE Manager within 1 hour, report to MEWA / NCEC if threshold exceeded.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>10</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Loss of communications</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Fall back to satellite phone / HF radio, dispatch runner to nearest populated location if required.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>6. Planning and Development</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Every TEMC site shall have a SEPRP completed before mobilization and before any drilling activity commences.</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Step 1 — Risk Assessment — identify credible emergencies per ISO 45001 Clause 6.1.2 and ISO 14001 Clause 6.1.2. Use the TEMC HSE Risk Register.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Step 2 — Site Mapping — map evacuation routes, primary and secondary muster points (minimum 50 m from hazard and upwind where possible), ERT positions, fire points, first aid stations, spill kit locations, isolation valves and breakers.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Step 3 — ERT Appointment — nominate ERT members in writing using TE-IMS-FRM-HSE-035/036/037 appointment letters. Confirm medical fitness and competency.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Step 4 — Resource Inventory — fire extinguishers and hose reels, first aid kits and AEDs, spill kits, breathing apparatus, stretchers, emergency vehicles, and reserve fuel / water. Quantities shall match site size and personnel count.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Step 5 — Communication Plan — primary and backup channels (two-way radio, satellite phone, HF radio, siren, flash beacons). Emergency Contacts Directory shall be posted at every mess, office, and rig.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Step 6 — Approval — SEPRP signed by SSE, HSE Manager, and approved by MD.</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>7. Emergency Response Team Structure</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>ERT Position</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Function</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Incident Commander (IC)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Declares emergency, coordinates response, liaises with external agencies, authorizes stand-down.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Deputy IC</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Backs up IC, runs the muster and head-count, maintains incident log.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Fire Wardens (minimum 2)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Fight small incipient fires, isolate fuel / power, guide evacuation away from fire.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>First Aiders (minimum 2)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Deliver first aid / CPR / AED, triage, accompany casualties to medical facility.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Spill Responders</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Deploy spill kit, contain, clean up, segregate contaminated waste for disposal per PROC-HSE-020.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Evacuation Wardens</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Sweep assigned areas, guide personnel to muster, confirm clear to IC.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Radio Operator</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Maintains contact with external services, logs all transmissions.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>8. Training and Competence</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• All personnel receive emergency awareness during site induction — evacuation routes, muster points, alarm recognition, reporting.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ERT members receive role-specific training before appointment — firefighting (Civil Defense approved), first aid and CPR / AED (internationally recognised provider), spill response, rescue.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Refresher training annually for ERT and every 2 years for all personnel.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Records kept per ISO 45001 Clause 7.2 using TE-IMS-FRM-TRN-003 Training Attendance Register.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>9. Drills and Exercises</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Drills test the SEPRP and build muscle memory. TEMC shall conduct at a minimum:</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Drill Type</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Frequency</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Scenarios</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Tabletop exercise</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Quarterly</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Paper walk-through — fire, spill, medical, rig emergency.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Functional drill</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Semi-annual</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Single-scenario live drill — evacuation, spill containment, first aid.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Full-scale exercise</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Annual</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Multi-scenario with external agencies (Civil Defense where practical).</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Unannounced evacuation</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Annual</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Test response to unexpected alarm — target full muster in under 10 minutes.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Each drill is evaluated against defined objectives. A drill report is completed and kept on file. Findings are converted into corrective actions per PROC-SYS-005.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>10. Emergency Response Execution</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Activation — any worker detecting an emergency raises the alarm immediately by radio, siren, or voice. IC is notified without delay.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Immediate actions — stop work in the affected area, isolate energy sources where safe, apply first response resources, evacuate personnel.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Response priorities (in order) — 1) Life and health; 2) Environment; 3) Property and equipment; 4) Production.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• External services — contacted via Radio Operator — Civil Defense 998, Ambulance 997, Police 999, Unified Emergency 911.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Head count — every site personnel file shall be checked against muster sheet. Missing persons reported to IC for search-and-rescue decision.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Stand-down — only the IC can declare the emergency over. All personnel re-briefed before returning to work.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>11. Post-Incident Actions</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Flash Report issued within 2 hours of any serious incident using TE-IMS-FRM-HSE-022.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Incident scene secured for investigation — photos, witness statements, equipment preserved.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Formal investigation initiated per PROC-HSE-010 Incident Investigation (within 24 hours).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Debrief with ERT within 48 hours to capture lessons learned.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Corrective and preventive actions raised per PROC-SYS-005 CAPA.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• External reporting to MHRSD, MEWA, or NCEC where thresholds met — see PROC-HSE-010 reporting matrix.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>12. Performance Indicators</p>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Drills completed vs plan</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≥ 95%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Quarterly</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Full-site muster time</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≤ 10 minutes</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Per drill</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Drill corrective actions closed on time</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≥ 90%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Quarterly</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>ERT competency currency</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Flash Report issued within 2 hours</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Per incident</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Emergency equipment inspections completed</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>13. References</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 45001:2018 — Occupational Health and Safety Management — Clauses 6.1.2, 7.2, 8.2, 10.2.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 14001:2015 — Environmental Management — Clauses 6.1.2, 8.2.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• MHRSD — Occupational Safety and Health Regulation (Kingdom of Saudi Arabia).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Saudi Civil Defense — Fire Safety and Emergency Response Code.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• NCEC — Environmental Incident Response Guidelines.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TEMC PROC-HSE-010 Incident Investigation Procedure.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TEMC PROC-SYS-005 Continual Improvement and CAPA Procedure.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>14. Related Documents and Records</p>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site Emergency Preparedness and Response Plan</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Life of site + 3 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>ERT Appointment Letters (FRM-HSE-035/036/037)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Duration of appointment + 3 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Drill Reports and Evaluations</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Training Attendance Records (FRM-TRN-003)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Training Coordinator</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Flash Reports and Investigation Reports (FRM-HSE-022)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Emergency Equipment Inspection Registers</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Officer</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>2 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Emergency Contacts Directory</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Until superseded</td>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Full rebuild — added definitions, ERT structure, drill matrix, scenario table, KPI table with CEO review flag, records retention table, KSA regulatory anchors (Civil Defense, MHRSD, NCEC, MEWA).</td>
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
