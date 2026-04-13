// TE-IMS-PLN-HSE-001 — Major Emergency Preparedness Plan
// Rebuilt to procedure-standard layout (matching PROC-HSE-001/002 approved design)
import { Link } from "wouter";
import Layout from "@/components/Layout";

const sections = [
  { id: "s1", label: "1. Purpose" },
  { id: "s2", label: "2. Scope" },
  { id: "s3", label: "3. Definitions" },
  { id: "s4", label: "4. Emergency Classification" },
  { id: "s5", label: "5. Credible Major Emergency Scenarios" },
  { id: "s6", label: "6. Precautionary Measures" },
  { id: "s7", label: "7. Alarm and Signal Code" },
  { id: "s8", label: "8. Key Personnel Duties" },
  { id: "s9", label: "9. Scenario Response Cards" },
  { id: "s10", label: "10. Assembly Points and Evacuation Routes" },
  { id: "s11", label: "11. External Emergency Contacts" },
  { id: "s12", label: "12. Training, Drills, and Exercises" },
  { id: "s13", label: "13. Post-Emergency Actions" },
  { id: "s14", label: "14. Plan Maintenance and Review" },
  { id: "s15", label: "15. Performance Indicators" },
  { id: "s16", label: "16. References" },
  { id: "s17", label: "17. Related Documents and Records" },
  { id: "s18", label: "18. Revision History" },
  { id: "s19", label: "19. Approval" },
];

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div id={id} className="mt-8 mb-3">
      <h2 className="text-base font-bold mb-1" style={{ color: "#081C2E" }}>{children}</h2>
      <div style={{ height: "2px", backgroundColor: "#C49A28", width: "100%" }} />
    </div>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm font-bold mt-4 mb-2" style={{ color: "#081C2E" }}>{children}</h3>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: "#374151" }}>
      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#C49A28" }} />
      <span>{children}</span>
    </li>
  );
}

export default function TE_IMS_PLN_HSE_001() {
  return (
    <Layout>
      {/* ── Page Header ── */}
      <div style={{ borderBottom: "3px solid #C49A28" }}>
        <div className="container py-3">
          <div className="flex items-center gap-2 text-xs" style={{ color: "#6b7a8d" }}>
            <Link href="/docs/pln" className="hover:underline font-medium" style={{ color: "#C49A28" }}>
              PLN — Plans
            </Link>
            <span>/</span>
            <span>Major Emergency Preparedness Plan</span>
          </div>
        </div>
      </div>

      {/* ── Title Bar ── */}
      <div className="container pt-5 pb-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-xl font-extrabold leading-tight" style={{ color: "#081C2E" }}>
              Major Emergency Preparedness Plan
            </h1>
            <div className="flex flex-wrap items-center gap-3 mt-1.5">
              <span className="text-xs font-mono" style={{ color: "#6b7a8d" }}>TE-IMS-PLN-HSE-001_Rev01</span>
              <span className="text-xs" style={{ color: "#6b7a8d" }}>·</span>
              <span className="text-xs" style={{ color: "#6b7a8d" }}>10 Apr 2026</span>
              <span className="text-xs" style={{ color: "#6b7a8d" }}>·</span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: "#d1fae5", color: "#065f46" }}>
                ✓ Approved for Implementation
              </span>
            </div>
          </div>
          <Link
            href="/docs/pln"
            className="flex-shrink-0 text-xs font-medium px-3 py-1.5 rounded border hover:bg-gray-50 transition-colors"
            style={{ borderColor: "#dde3ec", color: "#374151" }}
          >
            ← Back to Plans
          </Link>
        </div>
      </div>

      {/* ── Two-column layout ── */}
      <div className="container pb-16 flex gap-8 items-start">
        {/* Sidebar */}
        <aside className="hidden lg:block flex-shrink-0 w-52 sticky top-6">
          <div className="rounded border p-4" style={{ borderColor: "#dde3ec", backgroundColor: "#f9fafb" }}>
            <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#8a9ab0" }}>
              Document Info
            </div>
            <div className="space-y-2 mb-4">
              <div>
                <div className="text-xs" style={{ color: "#8a9ab0" }}>Document Code</div>
                <div className="text-xs font-mono font-semibold" style={{ color: "#081C2E" }}>TE-IMS-PLN-HSE-001</div>
              </div>
              <div>
                <div className="text-xs" style={{ color: "#8a9ab0" }}>Revision</div>
                <div className="text-xs font-semibold" style={{ color: "#081C2E" }}>Rev 01</div>
              </div>
              <div>
                <div className="text-xs" style={{ color: "#8a9ab0" }}>Date</div>
                <div className="text-xs font-semibold" style={{ color: "#081C2E" }}>10 April 2026</div>
              </div>
              <div>
                <div className="text-xs" style={{ color: "#8a9ab0" }}>Status</div>
                <div className="text-xs font-semibold" style={{ color: "#065f46" }}>✓ Approved</div>
              </div>
              <div>
                <div className="text-xs" style={{ color: "#8a9ab0" }}>Category</div>
                <div className="text-xs font-semibold" style={{ color: "#081C2E" }}>Plan</div>
              </div>
              <div>
                <div className="text-xs" style={{ color: "#8a9ab0" }}>Scope</div>
                <div className="text-xs" style={{ color: "#081C2E" }}>All TEMC operations, employees, contractors &amp; visitors</div>
              </div>
            </div>
            <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#8a9ab0" }}>
              Contents
            </div>
            <ul className="space-y-1">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-xs hover:underline block leading-snug" style={{ color: "#374151" }}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Document header block */}
          <div className="rounded border overflow-hidden mb-6" style={{ borderColor: "#dde3ec" }}>
            <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid #dde3ec" }}>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663473952399/3YVZojsY2rei5QwThHiV6E/logo-trans_6f674faa.png"
                alt="True East Mining Company"
                className="h-12 w-auto object-contain"
              />
              <span className="text-xs font-mono" style={{ color: "#8a9ab0" }}>TE-IMS-PLN-HSE-001_Rev01</span>
            </div>
            <div className="px-5 py-3" style={{ backgroundColor: "#081C2E" }}>
              <h2 className="text-sm font-extrabold tracking-widest uppercase text-center" style={{ color: "#ffffff" }}>
                MAJOR EMERGENCY PREPAREDNESS PLAN
              </h2>
            </div>
            <table className="w-full text-sm border-collapse">
              <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-4 py-2 text-xs" style={{ color: "#6b7a8d", width: "25%" }}>Document</td>
                  <td className="px-4 py-2 text-xs font-mono" style={{ color: "#081C2E", width: "25%" }}>TE-IMS-PLN-HSE-001</td>
                  <td className="px-4 py-2 text-xs" style={{ color: "#6b7a8d", width: "25%" }}>Revision</td>
                  <td className="px-4 py-2 text-xs font-semibold" style={{ color: "#081C2E", width: "25%" }}>01</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-xs" style={{ color: "#6b7a8d" }}>Date</td>
                  <td className="px-4 py-2 text-xs" style={{ color: "#081C2E" }}>10 Apr 2026</td>
                  <td className="px-4 py-2 text-xs" style={{ color: "#6b7a8d" }}>Status</td>
                  <td className="px-4 py-2 text-xs font-semibold" style={{ color: "#065f46" }}>Approved for Implementation</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Section 1 ── */}
          <SectionHeading id="s1">1. Purpose</SectionHeading>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
            This Plan establishes the arrangements by which True East Mining Company (TEMC) prepares for, responds to, and recovers from a Major Emergency at any drilling, exploration, or support site in the Kingdom of Saudi Arabia. The objective is to protect life first, then the environment, then assets and reputation, and to meet the requirements of ISO 45001:2018, ISO 14001:2015, MHRSD, Saudi Civil Defense, MEWA, NCEC, and TEMC internal standards.
          </p>

          {/* ── Section 2 ── */}
          <SectionHeading id="s2">2. Scope</SectionHeading>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
            This Plan applies to all TEMC owned and contracted sites, including drilling rigs, core yards, workshops, fuel and chemical storage, camps, vehicles, and access routes. It covers employees, contractors, visitors, and any third parties present on site during an incident. It is read in conjunction with PROC-HSE-004 Site Emergency Preparedness Procedure and site-specific emergency response cards.
          </p>

          {/* ── Section 3 ── */}
          <SectionHeading id="s3">3. Definitions</SectionHeading>
          <ul className="space-y-2 mb-4">
            <Bullet><strong>Emergency</strong> — an unplanned event that requires immediate response to protect life, environment, or assets.</Bullet>
            <Bullet><strong>Local Emergency</strong> — an incident that can be managed by the site team using on-site resources (e.g. small fire extinguished with portable extinguisher, first-aid case).</Bullet>
            <Bullet><strong>Major Emergency</strong> — an incident that exceeds on-site response capability or threatens life, environment, or assets on a significant scale — requires activation of external emergency services and corporate escalation.</Bullet>
            <Bullet><strong>On-Site Chief Emergency Controller (OSCEC)</strong> — senior TEMC person on site (SSE / Drilling Superintendent) who assumes overall command of response.</Bullet>
            <Bullet><strong>Emergency Response Team (ERT)</strong> — trained site personnel assigned to fire, first aid, rescue, spill, and evacuation duties.</Bullet>
            <Bullet><strong>Assembly Point</strong> — pre-designated safe location upwind of the hazard where personnel muster for headcount.</Bullet>
            <Bullet><strong>Evacuation</strong> — planned movement of personnel away from a hazard to an assembly point or beyond.</Bullet>
            <Bullet><strong>All Clear</strong> — the official signal that the emergency is controlled and normal operations may resume.</Bullet>
          </ul>

          {/* ── Section 4 ── */}
          <SectionHeading id="s4">4. Emergency Classification</SectionHeading>
          <div className="overflow-x-auto mb-4 rounded border" style={{ borderColor: "#dde3ec" }}>
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

          {/* ── Section 5 ── */}
          <SectionHeading id="s5">5. Credible Major Emergency Scenarios</SectionHeading>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>The following credible scenarios drive the plan, equipment, training, and drills.</p>
          <ul className="space-y-2 mb-4">
            <Bullet>Rig fire (diesel, hydraulics, electrical, wellhead).</Bullet>
            <Bullet>Blowout or loss of well control.</Bullet>
            <Bullet>Hydrogen sulphide (H₂S) release — where geology indicates risk.</Bullet>
            <Bullet>Dropped load or stuck drill string causing injury or structural failure.</Bullet>
            <Bullet>Fuel or chemical spill affecting soil or groundwater.</Bullet>
            <Bullet>Medical emergency requiring MedEvac (cardiac, trauma, heat stress).</Bullet>
            <Bullet>Sandstorm or severe dust storm (Shamal) impacting visibility and breathing.</Bullet>
            <Bullet>Flash flood in wadi and remote site access routes.</Bullet>
            <Bullet>Earthquake — where applicable to the region.</Bullet>
            <Bullet>Vehicle rollover on desert or mountain track.</Bullet>
            <Bullet>Camp fire, kitchen fire, or food-borne illness outbreak.</Bullet>
          </ul>

          {/* ── Section 6 ── */}
          <SectionHeading id="s6">6. Precautionary Measures</SectionHeading>
          <ul className="space-y-2 mb-4">
            <Bullet>Rigs and workshops equipped with fire extinguishers, fire hose reels, sand buckets, and emergency shut-off stations per site fire plan.</Bullet>
            <Bullet>Fuel and chemical storage bunded, segregated, ventilated, and fitted with spill kits and grounding per PROC-HSE-007.</Bullet>
            <Bullet>H₂S monitors, SCBA, and escape sets available where formation risk is identified by geology.</Bullet>
            <Bullet>First aid kits, AEDs, stretchers, burn kits, eye-wash stations, and trauma kits at rig floor, camp, and workshop.</Bullet>
            <Bullet>Assembly points signed, lit at night, and accessible during sandstorm conditions — located upwind and at least 50 m from identified hazard.</Bullet>
            <Bullet>Permit-to-work, JSA, and pre-start checks performed daily to prevent escalation.</Bullet>
            <Bullet>Emergency communications — VHF/UHF radios, satellite phone where mobile coverage is absent, landline where available.</Bullet>
            <Bullet>Vehicles carry fire extinguisher, first aid kit, water, and emergency contact list.</Bullet>
          </ul>

          {/* ── Section 7 ── */}
          <SectionHeading id="s7">7. Alarm and Signal Code</SectionHeading>
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
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
            Where siren is not available (small remote sites), radio call-out and air horn are used with the same meaning.
          </p>

          {/* ── Section 8 ── */}
          <SectionHeading id="s8">8. Key Personnel Duties</SectionHeading>
          <div className="overflow-x-auto mb-4 rounded border" style={{ borderColor: "#dde3ec" }}>
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

          {/* ── Section 9 ── */}
          <SectionHeading id="s9">9. Scenario Response Cards</SectionHeading>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>Each scenario is supported by a site response card. Summaries below; full cards are held at HSE office, radio room, and rig floor.</p>

          <SubHeading>9.1 Rig Fire</SubHeading>
          <ul className="space-y-1.5 mb-4">
            <Bullet>Witness: Raise alarm, shout FIRE FIRE FIRE, call radio.</Bullet>
            <Bullet>Driller/Operator: Shut down rig, isolate fuel and power, evacuate crew from rig floor.</Bullet>
            <Bullet>ERT: Attack small fire with extinguisher only if safe; otherwise withdraw and cool surroundings.</Bullet>
            <Bullet>OSCEC: Declare Level 1 or 2; call Civil Defense 998 if Level 2; account for all personnel.</Bullet>
          </ul>

          <SubHeading>9.2 Blowout / Loss of Well Control</SubHeading>
          <ul className="space-y-1.5 mb-4">
            <Bullet>Driller: Initiate well shut-in per PROC-HSE-009 or well-control procedure; alert OSCEC.</Bullet>
            <Bullet>OSCEC: Declare Level 2 or 3; call Civil Defense and client; well-control specialist contractor.</Bullet>
            <Bullet>Evacuate non-essential personnel 500 m upwind; establish exclusion zone.</Bullet>
            <Bullet>No ignition sources within exclusion zone — no vehicles, radios, or mobile phones.</Bullet>
          </ul>

          <SubHeading>9.3 H₂S Release</SubHeading>
          <ul className="space-y-1.5 mb-4">
            <Bullet>Alarm at 10 ppm — don SCBA; alarm at 20 ppm — evacuate all non-ERT personnel.</Bullet>
            <Bullet>Evacuate crosswind or upwind to Assembly Point.</Bullet>
            <Bullet>ERT with SCBA only may approach to isolate source or rescue casualties.</Bullet>
            <Bullet>OSCEC notifies Civil Defense and client; monitors area until gas reading &lt; 5 ppm.</Bullet>
          </ul>

          <SubHeading>9.4 Medical / MedEvac</SubHeading>
          <ul className="space-y-1.5 mb-4">
            <Bullet>First aider: Scene safe? Assess ABC. Call for help via radio.</Bullet>
            <Bullet>OSCEC: Call Saudi Red Crescent Ambulance 997; prepare patient for MedEvac (ground or air).</Bullet>
            <Bullet>Clear helicopter pad of loose items if air MedEvac; mark wind direction.</Bullet>
            <Bullet>Accompany casualty with medical records and incident summary.</Bullet>
          </ul>

          <SubHeading>9.5 Fuel / Chemical Spill</SubHeading>
          <ul className="space-y-1.5 mb-4">
            <Bullet>Stop the source if safe — close valve, right the drum, plug the leak.</Bullet>
            <Bullet>Contain — deploy booms, absorbents, sand, or earth berm. Prevent spread to drains or wadi.</Bullet>
            <Bullet>Report — OSCEC notifies HSE Manager; NCEC/MEWA notification for reportable events.</Bullet>
            <Bullet>Clean up — place waste in labelled containers; dispose per PROC-HSE-015.</Bullet>
          </ul>

          <SubHeading>9.6 Sandstorm / Shamal</SubHeading>
          <ul className="space-y-1.5 mb-4">
            <Bullet>On warning: secure tarps, loose items, open ends of pipe racks, ventilation inlets.</Bullet>
            <Bullet>At onset: stop work, shelter in hard-walled buildings or vehicles, close doors and windows.</Bullet>
            <Bullet>Wear dust masks (P2 minimum); avoid driving until visibility &gt; 100 m.</Bullet>
          </ul>

          <SubHeading>9.7 Flash Flood</SubHeading>
          <ul className="space-y-1.5 mb-4">
            <Bullet>Evacuate low ground, wadis, and drainage paths immediately.</Bullet>
            <Bullet>Move vehicles and equipment to higher ground.</Bullet>
            <Bullet>Do NOT attempt to drive through flowing water — turn around, don't drown.</Bullet>
            <Bullet>Account for personnel; notify OSCEC of any isolated team.</Bullet>
          </ul>

          <SubHeading>9.8 Earthquake</SubHeading>
          <ul className="space-y-1.5 mb-4">
            <Bullet>Drop, cover, hold — away from glass, shelving, pipe racks.</Bullet>
            <Bullet>After shaking stops: evacuate to Assembly Point via safe route; beware of aftershocks.</Bullet>
            <Bullet>Do not re-enter damaged structures until inspected by competent person.</Bullet>
          </ul>

          <SubHeading>9.9 Vehicle Rollover / Road Incident</SubHeading>
          <ul className="space-y-1.5 mb-4">
            <Bullet>Turn off ignition, apply handbrake, extract casualties only if vehicle is unstable or on fire.</Bullet>
            <Bullet>Radio incident location, number of casualties, nature of injuries.</Bullet>
            <Bullet>Deploy warning triangles; manage traffic if on public road.</Bullet>
            <Bullet>First aid until ambulance arrives (997).</Bullet>
          </ul>

          <SubHeading>9.10 Security Incident</SubHeading>
          <ul className="space-y-1.5 mb-4">
            <Bullet>Intrusion or armed approach: do not confront; withdraw, lock down, notify radio operator.</Bullet>
            <Bullet>OSCEC notifies Police 999 and client security.</Bullet>
            <Bullet>Account for personnel; shelter in place if directed.</Bullet>
          </ul>

          {/* ── Section 10 ── */}
          <SectionHeading id="s10">10. Assembly Points and Evacuation Routes</SectionHeading>
          <ul className="space-y-2 mb-4">
            <Bullet>Each site has a Primary and Secondary Assembly Point, both upwind of the rig and at least 50 m from fuel, chemicals, and wellhead.</Bullet>
            <Bullet>Assembly Points are signed, lit, and reachable by the entire workforce within 5 minutes in normal conditions.</Bullet>
            <Bullet>Evacuation routes are displayed at camp, rig, and workshop notice boards and briefed at site induction.</Bullet>
            <Bullet>Wind socks or flags installed to indicate current wind direction — always move crosswind or upwind in a gas/smoke event.</Bullet>
          </ul>

          {/* ── Section 11 ── */}
          <SectionHeading id="s11">11. External Emergency Contacts</SectionHeading>
          <div className="overflow-x-auto mb-4 rounded border" style={{ borderColor: "#dde3ec" }}>
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
              </tbody>
            </table>
          </div>

          {/* ── Section 12 ── */}
          <SectionHeading id="s12">12. Training, Drills, and Exercises</SectionHeading>
          <ul className="space-y-2 mb-4">
            <Bullet>All personnel receive emergency induction on Day 1 — alarm signals, assembly points, evacuation routes.</Bullet>
            <Bullet>Drills scheduled per PROC-HSE-004: tabletop quarterly, functional quarterly, full-scale annually, unannounced twice per year.</Bullet>
            <Bullet>Every drill is debriefed and findings captured in CARs for continual improvement.</Bullet>
          </ul>

          {/* ── Section 13 ── */}
          <SectionHeading id="s13">13. Post-Emergency Actions</SectionHeading>
          <ul className="space-y-2 mb-4">
            <Bullet>Account for all personnel; confirm headcount before stand-down.</Bullet>
            <Bullet>Preserve scene for investigation — photographs, witness statements, physical evidence.</Bullet>
            <Bullet>Notify regulators per legal timelines (Civil Defense, MHRSD, NCEC, MEWA as applicable).</Bullet>
            <Bullet>Conduct incident investigation per PROC-HSE-006 and CAR per FRM-SYS-003.</Bullet>
            <Bullet>Provide psychological first aid and employee assistance to affected personnel.</Bullet>
            <Bullet>Restore emergency equipment — recharge extinguishers, replenish first aid, SCBA bottles, spill kits — before resumption.</Bullet>
            <Bullet>Formal debrief and lessons learned; feed into management review.</Bullet>
          </ul>

          {/* ── Section 14 ── */}
          <SectionHeading id="s14">14. Plan Maintenance and Review</SectionHeading>
          <ul className="space-y-2 mb-4">
            <Bullet>This Plan is reviewed annually, after any major change to operations, after any Level 2 or 3 incident, and after any drill that reveals significant gaps.</Bullet>
            <Bullet>Revisions are controlled through the IMS document control process (PROC-SYS-001).</Bullet>
            <Bullet>All controlled copies are updated before the superseded version is withdrawn.</Bullet>
          </ul>

          {/* ── Section 15 ── */}
          <SectionHeading id="s15">15. Performance Indicators</SectionHeading>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>[NEEDS CEO REVIEW — targets indicative]</p>
          <div className="overflow-x-auto mb-4 rounded border" style={{ borderColor: "#dde3ec" }}>
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

          {/* ── Section 16 ── */}
          <SectionHeading id="s16">16. References</SectionHeading>
          <ul className="space-y-2 mb-4">
            <Bullet>ISO 45001:2018 — Occupational Health and Safety — Clause 8.2 Emergency Preparedness.</Bullet>
            <Bullet>ISO 14001:2015 — Environmental Management — Clause 8.2 Emergency Preparedness.</Bullet>
            <Bullet>MHRSD — Occupational Safety and Health Regulation (KSA).</Bullet>
            <Bullet>Saudi Civil Defense — Fire and Rescue Code.</Bullet>
            <Bullet>Saudi Red Crescent Authority — Emergency Medical Services.</Bullet>
            <Bullet>MEWA / NCEC — Environmental Incident Reporting.</Bullet>
            <Bullet>TEMC PROC-HSE-004 Site Emergency Preparedness; PROC-HSE-006 Incident Investigation; PROC-HSE-015 Waste and Spill Management; PROC-SYS-001 Document Control.</Bullet>
          </ul>

          {/* ── Section 17 ── */}
          <SectionHeading id="s17">17. Related Documents and Records</SectionHeading>
          <div className="overflow-x-auto mb-4 rounded border" style={{ borderColor: "#dde3ec" }}>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Emergency Drill Records (FRM-HSE-026)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years</td>
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

          {/* ── Section 18 ── */}
          <SectionHeading id="s18">18. Revision History</SectionHeading>
          <div className="overflow-x-auto mb-4 rounded border" style={{ borderColor: "#dde3ec" }}>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Full rebuild — localised to TEMC drilling operations in KSA. Added three-level emergency classification, credible scenario list, siren/signal table, key personnel duties, 10 scenario response cards, external contacts, KPI table, records retention.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MR</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Section 19 ── */}
          <SectionHeading id="s19">19. Approval</SectionHeading>
          <div className="overflow-x-auto mb-4 rounded border" style={{ borderColor: "#dde3ec" }}>
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

          {/* ── Document Footer ── */}
          <div className="mt-10 pt-3 rounded" style={{ backgroundColor: "#081C2E", padding: "12px 20px" }}>
            <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.5)" }}>
              True East Mining Company · Integrated Management System · Confidential · Page 1
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
