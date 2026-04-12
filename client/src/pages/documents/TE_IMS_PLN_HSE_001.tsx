// TE-IMS-PLN-HSE-001 — Major Emergency Preparedness Plan
// Content verbatim from source. Format updated to match PLN-HSE-002 / PLN-SYS-001 standard.
import { Link } from "wouter";
import Layout from "@/components/Layout";

export default function TE_IMS_PLN_HSE_001() {
  return (
    <Layout>
      {/* ── Document Header ── */}
      <div style={{ backgroundColor: "#081C2E" }} className="relative overflow-hidden">
        <div className="container pt-8 pb-6 relative z-10">
          <div className="flex flex-col gap-3">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: "rgba(196,154,40,0.15)", color: "#C49A28" }}>
                  Plan
                </span>
                <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>
                  TE-IMS-PLN-HSE-001
                </span>
              </div>
              <h1 className="text-white text-2xl md:text-3xl font-extrabold leading-tight tracking-tight">
                Major Emergency Preparedness Plan
              </h1>
            </div>
            <div className="flex flex-wrap gap-4 mt-1">
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>Rev01</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>True East Mining Company</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>IMS — Plan</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Back Navigation ── */}
      <div className="container pt-4 pb-2">
        <Link href="/docs/pln" className="text-xs font-medium hover:underline flex items-center gap-1" style={{ color: "#6b7a8d" }}>
          ← Back to Plans
        </Link>
      </div>

      {/* ── Document Body ── */}
      <div className="container pb-16">
        <div className="max-w-4xl">

          {/* Document Control Table */}
          <div className="overflow-x-auto mb-8 rounded border" style={{ borderColor: "#dde3ec" }}>
            <table className="w-full text-sm border-collapse">
              <thead style={{ backgroundColor: "#081C2E" }}>
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>MAJOR EMERGENCY PREPAREDNESS PLAN</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>MAJOR EMERGENCY PREPAREDNESS PLAN</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Document</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>TE-IMS-PLN-HSE-001</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Revision</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>01</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Date</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>10.04.2026</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Status</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Approved for Implementation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mb-6" style={{ borderBottom: "1px solid #dde3ec" }} />

          {/* 1. Purpose */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>1. Purpose</h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#374151" }}>
            This Plan establishes the arrangements by which True East Mining Company (TEMC) prepares for, responds to, and recovers from a Major Emergency at any drilling, exploration, or support site in the Kingdom of Saudi Arabia. The objective is to protect life first, then the environment, then assets and reputation, and to meet the requirements of ISO 45001:2018, ISO 14001:2015, MHRSD, Saudi Civil Defense, MEWA, NCEC, and TEMC internal standards.
          </p>

          {/* 2. Scope */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>2. Scope</h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#374151" }}>
            This Plan applies to all TEMC owned and contracted sites, including drilling rigs, core yards, workshops, fuel and chemical storage, camps, vehicles, and access routes. It covers employees, contractors, visitors, and any third parties present on site during an incident. It is read in conjunction with PROC-HSE-004 Site Emergency Preparedness Procedure and site-specific emergency response cards.
          </p>

          {/* 3. Definitions */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>3. Definitions</h2>
          <ul className="text-sm leading-relaxed mb-6 space-y-1.5" style={{ color: "#374151" }}>
            <li>• <strong>Emergency</strong> — an unplanned event that requires immediate response to protect life, environment, or assets.</li>
            <li>• <strong>Local Emergency</strong> — an incident that can be managed by the site team using on-site resources (e.g. small fire extinguished with portable extinguisher, first-aid case).</li>
            <li>• <strong>Major Emergency</strong> — an incident that exceeds on-site response capability or threatens life, environment, or assets on a significant scale — requires activation of external emergency services and corporate escalation.</li>
            <li>• <strong>On-Site Chief Emergency Controller (OSCEC)</strong> — senior TEMC person on site (SSE / Drilling Superintendent) who assumes overall command of response.</li>
            <li>• <strong>Emergency Response Team (ERT)</strong> — trained site personnel assigned to fire, first aid, rescue, spill, and evacuation duties.</li>
            <li>• <strong>Assembly Point</strong> — pre-designated safe location upwind of the hazard where personnel muster for headcount.</li>
            <li>• <strong>Evacuation</strong> — planned movement of personnel away from a hazard to an assembly point or beyond.</li>
            <li>• <strong>All Clear</strong> — the official signal that the emergency is controlled and normal operations may resume.</li>
          </ul>

          {/* 4. Emergency Classification */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>4. Emergency Classification</h2>
          <div className="overflow-x-auto mb-8 rounded border" style={{ borderColor: "#dde3ec" }}>
            <table className="w-full text-sm border-collapse">
              <thead style={{ backgroundColor: "#081C2E" }}>
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Level</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Description</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Response</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Level 1 — Local</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Minor incident, fully contained by site team (small fire, minor spill, single first-aid case).</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site ERT; logged in Flash Report.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Level 2 — Site Major</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Incident requires full site response, may require external emergency services, potential serious injury or environmental release.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Full ERT activation; Civil Defense notified; Corporate HSE notified.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Level 3 — Company Crisis</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Fatality, multiple casualties, major environmental event, loss of asset, regulatory investigation.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Crisis Management Team activated; MD leads; Civil Defense, MHRSD, NCEC notified.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 5. Credible Major Emergency Scenarios */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>5. Credible Major Emergency Scenarios</h2>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>The following credible scenarios drive the plan, equipment, training, and drills.</p>
          <ul className="text-sm leading-relaxed mb-6 space-y-1.5" style={{ color: "#374151" }}>
            <li>• Rig fire (diesel, hydraulics, electrical, wellhead).</li>
            <li>• Blowout or loss of well control.</li>
            <li>• Hydrogen sulphide (H₂S) release — where geology indicates risk.</li>
            <li>• Dropped load or stuck drill string causing injury or structural failure.</li>
            <li>• Fuel or chemical spill affecting soil or groundwater.</li>
            <li>• Medical emergency requiring MedEvac (cardiac, trauma, heat stress).</li>
            <li>• Sandstorm or severe dust storm (Shamal) impacting visibility and breathing.</li>
            <li>• Flash flood in wadi and remote site access routes.</li>
            <li>• Earthquake — where applicable to the region.</li>
            <li>• Vehicle rollover on desert or mountain track.</li>
            <li>• Camp fire, kitchen fire, or food-borne illness outbreak.</li>
          </ul>

          {/* 6. Precautionary Measures */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>6. Precautionary Measures</h2>
          <ul className="text-sm leading-relaxed mb-6 space-y-1.5" style={{ color: "#374151" }}>
            <li>• Rigs and workshops equipped with fire extinguishers, fire hose reels, sand buckets, and emergency shut-off stations per site fire plan.</li>
            <li>• Fuel and chemical storage bunded, segregated, ventilated, and fitted with spill kits and grounding per PROC-HSE-007.</li>
            <li>• H₂S monitors, SCBA, and escape sets available where formation risk is identified by geology.</li>
            <li>• First aid kits, AEDs, stretchers, burn kits, eye-wash stations, and trauma kits at rig floor, camp, and workshop.</li>
            <li>• Assembly points signed, lit at night, and accessible during sandstorm conditions — located upwind and at least 50 m from identified hazard.</li>
            <li>• Permit-to-work, JSA, and pre-start checks performed daily to prevent escalation.</li>
            <li>• Emergency communications — VHF/UHF radios, satellite phone where mobile coverage is absent, landline where available.</li>
            <li>• Vehicles carry fire extinguisher, first aid kit, water, and emergency contact list.</li>
          </ul>

          {/* 7. Alarm and Signal Code */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>7. Alarm and Signal Code</h2>
          <div className="overflow-x-auto mb-4 rounded border" style={{ borderColor: "#dde3ec" }}>
            <table className="w-full text-sm border-collapse">
              <thead style={{ backgroundColor: "#081C2E" }}>
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Signal</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Pattern</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Meaning and Action</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Local Emergency / Fire</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Continuous wailing siren ~30 seconds</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Fire or local incident — ERT respond to location; non-essential staff stand by for instruction.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Major Emergency</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>30 s wailing, 30 s silence, repeated 3 times</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Major emergency — ALL personnel evacuate to Assembly Point; ERT report to OSCEC.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Environmental Event</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Continuous wailing siren ~1 minute</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Sandstorm, H₂S release, chemical release, flash flood — shelter-in-place or evacuate per instruction.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>All Clear</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Continuous wailing siren ~2 minutes</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Emergency over — return to normal duties after headcount and briefing.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#374151" }}>
            Where siren is not available (small remote sites), radio call-out and air horn are used with the same meaning.
          </p>

          {/* 8. Key Personnel Duties */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>8. Key Personnel Duties</h2>
          <div className="overflow-x-auto mb-8 rounded border" style={{ borderColor: "#dde3ec" }}>
            <table className="w-full text-sm border-collapse">
              <thead style={{ backgroundColor: "#081C2E" }}>
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Role</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Emergency Duties</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Managing Director (MD)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Approves this Plan and resources. Leads Crisis Management Team for Level 3. Decides on media and regulator engagement.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site Senior Executive (SSE) / Drilling Superintendent — OSCEC</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Takes overall command at site. Orders evacuation, escalation, and resumption of operations. Interfaces with Civil Defense on arrival.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Technical advisor to OSCEC. Coordinates ERT. Manages investigation and reporting. Updates corporate.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>ERT Leader</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Directs physical response — firefighting, rescue, first aid, spill containment. Reports to OSCEC.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>ERT Members</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Deploy per role (fire, medical, spill, evacuation). Wear appropriate PPE and SCBA where applicable.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Security / Gate</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Controls site access. Meets and escorts external emergency services. Prevents unauthorised entry.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Radio Operator / Comms</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Maintains continuous contact with OSCEC, ERT, drivers, and external agencies. Logs all communications.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Shift Supervisor</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Accounts for workforce in their area. Reports headcount to Assembly Point Marshal.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Assembly Point Marshal</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Verifies headcount. Identifies missing persons. Reports status to OSCEC.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>First Aider</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Triages casualties, administers first aid, prepares for MedEvac.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>All Personnel</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Stop work safely, evacuate via nearest safe route, report to Assembly Point, obey ERT and OSCEC instructions.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 9. Scenario Response Cards */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>9. Scenario Response Cards</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>Each scenario is supported by a site response card. Summaries below; full cards are held at HSE office, radio room, and rig floor.</p>

          <h3 className="text-sm font-bold mb-1" style={{ color: "#081C2E" }}>9.1 Rig Fire</h3>
          <ul className="text-sm leading-relaxed mb-4 space-y-1" style={{ color: "#374151" }}>
            <li>• Witness: Raise alarm, shout FIRE FIRE FIRE, call radio.</li>
            <li>• Driller/Operator: Shut down rig, isolate fuel and power, evacuate crew from rig floor.</li>
            <li>• ERT: Attack small fire with extinguisher only if safe; otherwise withdraw and cool surroundings.</li>
            <li>• OSCEC: Declare level, call Civil Defense 998, account for personnel, order evacuation if escalating.</li>
            <li>• Do NOT re-enter until fire is out, area is cool, and OSCEC declares All Clear.</li>
          </ul>

          <h3 className="text-sm font-bold mb-1" style={{ color: "#081C2E" }}>9.2 Blowout / Loss of Well Control</h3>
          <ul className="text-sm leading-relaxed mb-4 space-y-1" style={{ color: "#374151" }}>
            <li>• Driller: Activate BOP/diverter per well control procedure.</li>
            <li>• OSCEC: Declare Level 2 or 3; call Civil Defense, client, well-control specialist contractor.</li>
            <li>• Isolate ignition sources — shut down diesel equipment, vehicles, and electrical within 100 m.</li>
            <li>• Establish exclusion zone upwind; deploy gas monitoring.</li>
          </ul>

          <h3 className="text-sm font-bold mb-1" style={{ color: "#081C2E" }}>9.3 H₂S Release</h3>
          <ul className="text-sm leading-relaxed mb-4 space-y-1" style={{ color: "#374151" }}>
            <li>• Any alarm at ≥10 ppm: put on escape set, evacuate crosswind and upwind to Assembly Point.</li>
            <li>• ERT with SCBA only may approach to isolate source or rescue casualties.</li>
            <li>• OSCEC notifies Civil Defense and client; monitors area until gas reading &lt; 5 ppm.</li>
          </ul>

          <h3 className="text-sm font-bold mb-1" style={{ color: "#081C2E" }}>9.4 Medical / MedEvac</h3>
          <ul className="text-sm leading-relaxed mb-4 space-y-1" style={{ color: "#374151" }}>
            <li>• First aider: Scene safe? Assess ABC. Call for help via radio.</li>
            <li>• OSCEC: Call Saudi Red Crescent Ambulance 997; prepare patient for MedEvac (ground or air).</li>
            <li>• Clear helicopter pad of loose items if air MedEvac; mark wind direction.</li>
            <li>• Accompany casualty with medical records and incident summary.</li>
          </ul>

          <h3 className="text-sm font-bold mb-1" style={{ color: "#081C2E" }}>9.5 Fuel / Chemical Spill</h3>
          <ul className="text-sm leading-relaxed mb-4 space-y-1" style={{ color: "#374151" }}>
            <li>• Stop the source if safe — close valve, right the drum, plug the leak.</li>
            <li>• Contain — deploy booms, absorbents, sand, or earth berm. Prevent spread to drains or wadi.</li>
            <li>• Report — OSCEC notifies HSE Manager; NCEC/MEWA notification for reportable events.</li>
            <li>• Clean up — place waste in labelled containers; dispose per PROC-HSE-015.</li>
          </ul>

          <h3 className="text-sm font-bold mb-1" style={{ color: "#081C2E" }}>9.6 Sandstorm / Shamal</h3>
          <ul className="text-sm leading-relaxed mb-4 space-y-1" style={{ color: "#374151" }}>
            <li>• On warning: secure tarps, loose items, open ends of pipe racks, ventilation inlets.</li>
            <li>• At onset: stop work, shelter in hard-walled buildings or vehicles, close doors and windows.</li>
            <li>• Wear dust masks (P2 minimum); avoid driving until visibility &gt; 100 m.</li>
          </ul>

          <h3 className="text-sm font-bold mb-1" style={{ color: "#081C2E" }}>9.7 Flash Flood</h3>
          <ul className="text-sm leading-relaxed mb-4 space-y-1" style={{ color: "#374151" }}>
            <li>• Evacuate low ground, wadis, and drainage paths immediately.</li>
            <li>• Move vehicles and equipment to higher ground.</li>
            <li>• Do NOT attempt to drive through flowing water — turn around, don't drown.</li>
            <li>• Account for personnel; notify OSCEC of any isolated team.</li>
          </ul>

          <h3 className="text-sm font-bold mb-1" style={{ color: "#081C2E" }}>9.8 Earthquake</h3>
          <ul className="text-sm leading-relaxed mb-4 space-y-1" style={{ color: "#374151" }}>
            <li>• Drop, cover, hold — away from glass, shelving, pipe racks.</li>
            <li>• After shaking stops: evacuate to Assembly Point via safe route; beware of aftershocks.</li>
            <li>• Do not re-enter damaged structures until inspected by competent person.</li>
          </ul>

          <h3 className="text-sm font-bold mb-1" style={{ color: "#081C2E" }}>9.9 Vehicle Rollover / Road Incident</h3>
          <ul className="text-sm leading-relaxed mb-4 space-y-1" style={{ color: "#374151" }}>
            <li>• Turn off ignition, apply handbrake, extract casualties only if vehicle is unstable or on fire.</li>
            <li>• Radio incident location, number of casualties, nature of injuries.</li>
            <li>• Deploy warning triangles; manage traffic if on public road.</li>
            <li>• First aid until ambulance arrives (997).</li>
          </ul>

          <h3 className="text-sm font-bold mb-1 mb-6" style={{ color: "#081C2E" }}>9.10 Security Incident</h3>
          <ul className="text-sm leading-relaxed mb-6 space-y-1" style={{ color: "#374151" }}>
            <li>• Intrusion or armed approach: do not confront; withdraw, lock down, notify radio operator.</li>
            <li>• OSCEC notifies Police 999 and client security.</li>
            <li>• Account for personnel; shelter in place if directed.</li>
          </ul>

          {/* 10. Assembly Points and Evacuation Routes */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>10. Assembly Points and Evacuation Routes</h2>
          <ul className="text-sm leading-relaxed mb-6 space-y-1.5" style={{ color: "#374151" }}>
            <li>• Each site has a Primary and Secondary Assembly Point, both upwind of the rig and at least 50 m from fuel, chemicals, and wellhead.</li>
            <li>• Assembly Points are signed, lit, and reachable by the entire workforce within 5 minutes in normal conditions.</li>
            <li>• Evacuation routes are displayed at camp, rig, and workshop notice boards and briefed at site induction.</li>
            <li>• Wind socks or flags installed to indicate current wind direction — always move crosswind or upwind in a gas/smoke event.</li>
          </ul>

          {/* 11. External Emergency Contacts */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>11. External Emergency Contacts</h2>
          <div className="overflow-x-auto mb-8 rounded border" style={{ borderColor: "#dde3ec" }}>
            <table className="w-full text-sm border-collapse">
              <thead style={{ backgroundColor: "#081C2E" }}>
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Service</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Number</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Saudi Civil Defense — Fire, Rescue</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>998</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Primary for fire, rescue, HAZMAT</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Saudi Red Crescent — Ambulance</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>997</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Medical emergency and MedEvac coordination</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Police</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>999</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Security incidents, road accidents, death</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Unified Emergency Number</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>911</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>All-service (where in use)</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MEWA / NCEC Environmental Hotline</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>[NEEDS CEO REVIEW]</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Reportable environmental release</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Nearest Hospital</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>[NEEDS CEO REVIEW — per site]</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Maintained in site emergency contact list</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Corporate HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>[NEEDS CEO REVIEW]</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Notification and escalation</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Managing Director</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>[NEEDS CEO REVIEW]</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Level 3 escalation</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Client Duty Officer</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>[NEEDS CEO REVIEW — per contract]</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Per contract notification clause</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Well-Control Specialist Contractor</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>[NEEDS CEO REVIEW]</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Blowout response</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 12. Training, Drills, and Exercises */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>12. Training, Drills, and Exercises</h2>
          <ul className="text-sm leading-relaxed mb-6 space-y-1.5" style={{ color: "#374151" }}>
            <li>• All personnel receive emergency induction on Day 1 — alarm signals, assembly points, evacuation routes.</li>
            <li>• Drills scheduled per PROC-HSE-004: tabletop quarterly, functional quarterly, full-scale annually, unannounced twice per year.</li>
            <li>• Every drill is debriefed and findings captured in CARs for continual improvement.</li>
          </ul>

          {/* 13. Post-Emergency Actions */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>13. Post-Emergency Actions</h2>
          <ul className="text-sm leading-relaxed mb-6 space-y-1.5" style={{ color: "#374151" }}>
            <li>• Account for all personnel; confirm headcount before stand-down.</li>
            <li>• Preserve scene for investigation — photographs, witness statements, physical evidence.</li>
            <li>• Notify regulators per legal timelines (Civil Defense, MHRSD, NCEC, MEWA as applicable).</li>
            <li>• Conduct incident investigation per PROC-HSE-006 and CAR per FRM-SYS-003.</li>
            <li>• Provide psychological first aid and employee assistance to affected personnel.</li>
            <li>• Restore emergency equipment — recharge extinguishers, replenish first aid, SCBA bottles, spill kits — before resumption.</li>
            <li>• Formal debrief and lessons learned; feed into management review.</li>
          </ul>

          {/* 14. Plan Maintenance and Review */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>14. Plan Maintenance and Review</h2>
          <ul className="text-sm leading-relaxed mb-6 space-y-1.5" style={{ color: "#374151" }}>
            <li>• This Plan is reviewed annually, after any major change to operations, after any Level 2 or 3 incident, and after any drill that reveals significant gaps.</li>
            <li>• Revisions are controlled through the IMS document control process (PROC-SYS-001).</li>
            <li>• All controlled copies are updated before the superseded version is withdrawn.</li>
          </ul>

          {/* 15. Performance Indicators */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>15. Performance Indicators</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>[NEEDS CEO REVIEW — targets indicative]</p>
          <div className="overflow-x-auto mb-8 rounded border" style={{ borderColor: "#dde3ec" }}>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Emergency drills completed per programme</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Annual</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>ERT members with current certification</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Quarterly</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Drill debrief actions closed on time</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≥ 95%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Per drill</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Assembly Point headcount ≤ 5 min</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Each drill</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Level 2/3 incidents with full investigation within 30 days</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Per incident</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Emergency equipment inspection compliance</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 16. References */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>16. References</h2>
          <ul className="text-sm leading-relaxed mb-6 space-y-1.5" style={{ color: "#374151" }}>
            <li>• ISO 45001:2018 — Occupational Health and Safety — Clause 8.2 Emergency Preparedness.</li>
            <li>• ISO 14001:2015 — Environmental Management — Clause 8.2 Emergency Preparedness.</li>
            <li>• MHRSD — Occupational Safety and Health Regulation (KSA).</li>
            <li>• Saudi Civil Defense — Fire and Rescue Code.</li>
            <li>• Saudi Red Crescent Authority — Emergency Medical Services.</li>
            <li>• MEWA / NCEC — Environmental Incident Reporting.</li>
            <li>• TEMC PROC-HSE-004 Site Emergency Preparedness; PROC-HSE-006 Incident Investigation; PROC-HSE-015 Waste and Spill Management; PROC-SYS-001 Document Control.</li>
          </ul>

          {/* 17. Related Documents and Records */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>17. Related Documents and Records</h2>
          <div className="overflow-x-auto mb-8 rounded border" style={{ borderColor: "#dde3ec" }}>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Major Emergency Preparedness Plan (this document)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Life of IMS + 5 years</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site Emergency Response Cards</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site HSE Officer</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Life of site</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Drill Records and Debrief Reports</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>ERT Training and Certification Register</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Training Coordinator</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Employment + 3 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Emergency Contact List (site-specific)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site HSE Officer</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Current</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Incident Investigation Reports</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Life of IMS + 5 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>CARs (FRM-SYS-003)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>QA / MR</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Revision History */}
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
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>01</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>10.04.2026</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Full rebuild — removed factory / effluent treatment / foreign legacy content. Localised to TEMC drilling operations in KSA. Corrected 'Red Moon' to 'Saudi Red Crescent'. Added three-level emergency classification, credible scenario list for drilling, siren/signal table, key personnel duties, 10 scenario response cards (rig fire, blowout, H2S, medical, spill, sandstorm, flash flood, earthquake, vehicle, security), external contacts with [NEEDS CEO REVIEW] flags, KPI table, records retention.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MR</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Approval Table */}
          <div className="overflow-x-auto rounded border" style={{ borderColor: "#dde3ec" }}>
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
                <tr>
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
      </div>
    </Layout>
  );
}
