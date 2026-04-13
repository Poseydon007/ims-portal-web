// TE-IMS-PROC-HSE-009 — Fire Prevention, Control and Fire Fighting Procedure
// Design: Standardized policy layout — left sidebar (Doc Info + TOC) + main content area

import { Link } from "wouter";
import { TopNav, Footer, Breadcrumb } from "@/components/Layout";
import { LOGO_GRAY, LOGO_WHITE } from "@/lib/imsData";

const sections = [
  { id: "s1", label: "1. Purpose" },
  { id: "s2", label: "2. Scope" },
  { id: "s3", label: "3. Responsibilities" },
  { id: "s4", label: "4. Identification of Fire Hazards" },
  { id: "s5", label: "5. Control and Prevention" },
  { id: "s6", label: "6. Fire Extinguishers" },
  { id: "s7", label: "7. Fire Safety Inspections and Housekeeping" },
  { id: "s8", label: "8. Emergency Exits" },
  { id: "s9", label: "9. Emergencies Involving Fire" },
  { id: "s10", label: "10. Firefighting and Emergency Response" },
  { id: "s11", label: "11. Evacuation Routes" },
  { id: "s12", label: "12. Fire, Emergency and Safety Signs" },
  { id: "s13", label: "13. Fire Emergency Training" },
  { id: "s14", label: "14. Performance Indicators" },
  { id: "s15", label: "15. References" },
  { id: "s16", label: "16. Records Retention" },
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

export default function TE_IMS_PROC_HSE_009() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "PROC — Procedures", href: "/docs/proc" },
          { label: "Fire Prevention, Control and Fire Fighting Procedure" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              Fire Prevention, Control and Fire Fighting Procedure
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-PROC-HSE-009_Rev01</span>
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
                ["Document Code", "TE-IMS-PROC-HSE-009"],
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-PROC-HSE-009_Rev01</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Fire Prevention, Control and Fire Fighting Procedure
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-6" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-PROC-HSE-009</td>
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

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>The purpose of this procedure is to eliminate the causes of fire and prevent loss of life and property at all True East Mining Company (TEMC) facilities and worksites. It provides employees, contractors, and visitors with information and guidelines that will assist them in recognising, reporting, and controlling fire hazards, and responding effectively to fire emergencies. This procedure supports ISO 45001:2018 (Clauses 6.1.2, 8.1.2, 8.2 Emergency Preparedness) and aligns with Saudi Civil Defense and MHRSD requirements.</p>

            <SectionHeading id="s2">2. Scope</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure applies to all TEMC employees, contractors, visitors, facilities, and properties — including offices, camps, workshops, fuel storage areas, core yards, and drill sites.</p>

            <SectionHeading id="s3">3. Responsibilities</SectionHeading>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Managing Director</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Ensures provision of fire prevention resources; approves fire safety campaigns; reviews fire incidents at Management Review.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager / Safety Officer</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Establishes and enforces fire prevention methods; ensures sprinklers, extinguishers, and detection systems are periodically inspected and maintained; trains employees to use extinguishers on incipient fires; trains on evacuation routes and procedures; interfaces with Saudi Civil Defense.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Department Heads / Supervisors</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Closely monitor the use of flammable materials and liquids; train employees in safe storage, use, and handling; ensure flammable storage areas are properly maintained; enforce permit-to-work for hot work.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Employees and Contractors</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Use, store, and transfer flammable materials per training; do not mix flammable materials; immediately report violations of the Fire Safety Program; know evacuation routes.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <SectionHeading id="s4">4. Identification of Fire Hazards</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Fire and explosion hazards can exist in almost any work area. Potential hazards include:</p>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Improper operation or maintenance of gas-fired equipment.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Improper storage or use of flammable liquids (diesel, petrol, solvents, paints).</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Smoking in prohibited areas.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Accumulation of trash, oily rags, and combustible waste.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Unauthorised hot work operations (welding, grinding, cutting).</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Electrical faults, overloaded circuits, damaged cables.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Hot surfaces near flammable materials.</Bullet>
            </ul>

            <SectionHeading id="s5">5. Control and Prevention</SectionHeading>

            <SubHeading>5.1 Elimination of Ignition and Explosion Sources</SubHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>All non-essential ignition and explosion sources must be eliminated where flammable liquids are used or stored. Common potential sources include:</p>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Open flames — cutting and welding torches, furnaces, matches, and heaters kept away from flammable liquids. Cutting or welding on flammable liquid equipment is not performed unless the equipment has been properly emptied and purged with a neutral gas such as nitrogen, under permit.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Electrical sources — DC motors, switches, and circuit breakers are eliminated where flammable liquids are handled or stored. Only approved explosion-proof devices are used in these areas.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Static sparks — can generate from electron transfer between contacting surfaces. Proper bonding and grounding procedures are followed when flammable liquids are transferred or transported.</Bullet>
            </ul>

            <SubHeading>5.2 Removal of Incompatibles</SubHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Materials that can contribute to a flammable liquid fire (e.g. oxidisers and organic peroxides) are not stored with flammable liquids.</p>

            <SubHeading>5.3 Smoking</SubHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Smoking and other sources of ignition are prohibited near flammable or explosive materials or operations that constitute a fire hazard. &quot;NO SMOKING OR OPEN FLAMES&quot; signs are posted conspicuously in all such areas.</p>

            <SubHeading>5.4 Control of Flammable Gases</SubHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Flammable gases pose the same type of fire hazards as flammable liquids and their vapours. Safeguards for flammable liquids apply, but toxicity, reactivity, corrosiveness, and toxic combustion products are also taken into account.</p>

            <SectionHeading id="s6">6. Fire Extinguishers</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>A portable fire extinguisher is a &quot;first aid&quot; device highly effective when used while a fire is small. Using the correct class of extinguisher by a trained person can save lives and property. Extinguishers are installed regardless of other firefighting measures.</p>

            <SubHeading>6.1 Classification of Fires and Selection of Extinguishers</SubHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Class A — fires involving materials such as wood, paper, and cloth which produce glowing embers or char.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Class B — fires involving flammable gases, liquids, and greases, including gasoline and most hydrocarbon liquids.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Class C — fires involving live electrical equipment or materials near electrically powered equipment.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Class D — fires involving combustible metals, such as magnesium, zirconium, potassium, and sodium.</Bullet>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Extinguishers are selected according to the potential fire hazard, construction and occupancy of facilities, and the specific hazard to be protected.</p>

            <SubHeading>6.2 Location and Marking of Extinguishers</SubHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Conspicuously located and readily accessible along normal paths of travel and egress.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Wall recesses or flush-mounted cabinets used where possible.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Directional arrows marked with the extinguisher classification where visual obstruction cannot be avoided.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Grouped extinguishers of different classes marked conspicuously (legible from 3 feet) to ensure proper selection during a fire.</Bullet>
            </ul>

            <SubHeading>6.3 Condition and Maintenance</SubHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Portable extinguishers are maintained in a fully charged and operable condition, kept in designated locations when not in use, and replaced with a fully charged and operable unit whenever removed for maintenance. Monthly visual inspections and annual servicing are recorded on the Fire Extinguisher Inspection Log (FRM-HSE-020).</p>

            <SubHeading>6.4 Mounting and Distribution</SubHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Installed on hangers, brackets, shelves, or in cabinets.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Units weighing 40 lb (18 kg) or less are installed so the top is no more than 3.5 ft (1.07 m) above the floor.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Operating instructions face outward. Cabinets and recesses are marked in contrasting colours to the normal décor.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Travel distance limits: Class A and D — 75 ft (23 m) maximum; Class B — 50 ft (15 m) maximum. Class C distribution follows patterns appropriate for Class A and B hazards.</Bullet>
            </ul>

            <SubHeading>6.5 PASS Method of Use</SubHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Pull the pin to break the tamper seal.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Aim the nozzle at the base of the fire.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Squeeze the handle to release the extinguishing agent.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Sweep the nozzle from side to side until the fire is completely out.</Bullet>
            </ul>

            <SectionHeading id="s7">7. Fire Safety Inspections and Housekeeping</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>First-line supervisors and the Safety Inspector conduct worksite surveys to observe compliance, proper storage of chemicals and supplies, unobstructed extinguisher access, and clear emergency evacuation routes. Findings are recorded on the Fire Prevention Checklist (FRM-HSE-021).</p>

            <SectionHeading id="s8">8. Emergency Exits</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Every exit must be clearly visible or the route to it conspicuously identified. AT NO TIME SHALL EXITS BE BLOCKED. Exits are checked daily by site supervision.</p>

            <SectionHeading id="s9">9. Emergencies Involving Fire</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>9.1 Fire Alarms — a fire alarm sounds for the building or surroundings in an emergency.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>9.2 Evacuation Plan — each facility has an emergency evacuation plan developed by the Safety Officer leading to a designated Assembly Point. The colour-coded plan includes evacuation routes, emergency exits, fire extinguisher locations, heat and smoke detectors, fire alarm switches, fire protection equipment, and the Assembly Point.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>9.3 Elevators — the use of elevators during a fire is strictly prohibited due to the risk of power cuts and the shaft acting as a flue for hot gases and smoke.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>9.4 Accountability — Department Heads, the Safety Officer, and Supervisors are responsible for verifying personnel have evacuated assigned areas and for conducting a headcount at the Assembly Point.</Bullet>
            </ul>

            <SectionHeading id="s10">10. Firefighting and Emergency Response</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>If you discover a fire:</p>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Activate the nearest fire alarm.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Notify other occupants and the Department Head / Safety Inspector / Supervisor.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Call Saudi Civil Defense (998) for any fire beyond incipient stage.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Fight the fire ONLY if: you have a clear way out and can fight the fire with your back to the exit; the fire is small and limited to its area of origin; the fire department has been notified; you have the proper extinguisher in good working order and know how to use it.</Bullet>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>If you are not sure of your ability or the extinguisher's capacity, leave the area immediately.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>If you hear a fire alarm:</p>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Evacuate the area. Close windows, turn off gas jets, and close doors as you leave.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Leave the building and move out of the way of emergency operations.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Proceed to the designated Assembly Point.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Report to the Safety Inspector to confirm your evacuation.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Remain outside until a competent authority states it is safe to re-enter.</Bullet>
            </ul>

            <SectionHeading id="s11">11. Evacuation Routes</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Learn at least two escape routes and emergency exits from your area.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Never use an elevator as part of your escape route.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Learn to activate a fire alarm and recognise alarm sounds.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Take an active part in fire evacuation drills (recorded on FRM-HSE-018 Emergency Evacuation Drill Record and FRM-HSE-019 Fire Drill Report).</Bullet>
            </ul>

            <SectionHeading id="s12">12. Fire, Emergency and Safety Signs</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>The Safety Inspector installs safety signs and symbols to alert workers of hazards. Specific words &quot;danger&quot;, &quot;warning&quot;, &quot;caution&quot;, and &quot;notice&quot; are used along with the standard colour codes.</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Category</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Meaning</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Fire Equipment</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Location of firefighting equipment (red with white text/pictogram).</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Mandatory</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>A course of action which must be taken (blue with white pictogram).</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Prohibition</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Behaviours that are prohibited (red circle with diagonal slash).</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Hazard</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Danger, warning, and caution (yellow with black pictogram).</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Safe Condition</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Escape routes and safety equipment (green with white pictogram).</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Signs must be appropriately sized for the maximum viewing distance, use standard widely-recognised symbols, and include supplementary text in lower case to strengthen the meaning of the pictorial symbol.</p>

            <SectionHeading id="s13">13. Fire Emergency Training</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>The HSE Manager ensures all employees are trained in:</p>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Fire hazards in their work area.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Protection measures specific to them.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Fire Prevention Plan requirements.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Fire extinguisher use (PASS method) with annual hands-on practice.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Mock drills — at least one evacuation drill per site per quarter.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Saudi Civil Defense emergency number (998) and the escalation chain.</Bullet>
            </ul>

            <SectionHeading id="s14">14. Performance Indicators</SectionHeading>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly fire extinguisher visual inspections</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Annual fire extinguisher servicing</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Annual</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Fire drills conducted per site</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≥ 1 per quarter</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Quarterly</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Evacuation time to Assembly Point</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≤ 5 minutes</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Per drill</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Fire Prevention Checklist completion</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Hot work permits closed-out correctly</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Per event</td>
                </tr>
                </tbody>
              </table>
            </div>

            <SectionHeading id="s15">15. References</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>ISO 45001:2018 — Clauses 6.1.2 Hazard Identification, 8.1.2 Eliminating Hazards, 8.2 Emergency Preparedness and Response.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Saudi Civil Defense regulations and emergency number 998.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>MHRSD — Occupational Safety and Health Regulations.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>NFPA 10 — Portable Fire Extinguishers (reference standard).</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>TEMC PROC-SYS-006 Document and Data Control; PROC-SYS-002 Management Review; PLN-HSE-001 Site Emergency Response Plan; FRM-HSE-018 Emergency Evacuation Drill Record; FRM-HSE-019 Fire Drill Report; FRM-HSE-020 Fire Extinguisher Inspection Log; FRM-HSE-021 Fire Prevention Checklist.</Bullet>
            </ul>

            <SectionHeading id="s16">16. Records Retention</SectionHeading>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Fire Extinguisher Inspection Log (FRM-HSE-020)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Fire Prevention Checklist (FRM-HSE-021)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Emergency Evacuation Drill Records (FRM-HSE-018)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Fire Drill Reports (FRM-HSE-019)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Hot work permits</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Civil Defense correspondence</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>10 years</td>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Initial release</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Abduljawad Bouguelta</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>01</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>10.04.2026</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Rebuilt to TE design standard; preserved all original content (ignition elimination, fire classes A/B/C/D, extinguisher distribution rules, PASS method, evacuation procedures, safety signs); added responsibilities table, Saudi Civil Defense 998, KPI table with CEO review flag, records retention table, explicit linkage to PLN-HSE-001 and fire-related FRM records.</td>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Reviewed by (QA / MR)</td>
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
