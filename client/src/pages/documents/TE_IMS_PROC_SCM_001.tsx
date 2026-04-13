// TE-IMS-PROC-SCM-001 — Site Supply Procedure
// Design: Standardized policy layout — left sidebar (Doc Info + TOC) + main content area

import { Link } from "wouter";
import { TopNav, Footer, Breadcrumb } from "@/components/Layout";
import { LOGO_GRAY, LOGO_WHITE } from "@/lib/imsData";

const sections = [
  { id: "s1", label: "1. Purpose" },
  { id: "s2", label: "2. Scope" },
  { id: "s3", label: "3. Definitions" },
  { id: "s4", label: "4. Responsibilities" },
  { id: "s5", label: "5. Key Principles" },
  { id: "s6", label: "6. Supplier Qualification (ISO 9001 Clause 8.4)" },
  { id: "s7", label: "7. Diesel Refueling via Mobile Unit" },
  { id: "s8", label: "8. Oil Change and Fluid Maintenance" },
  { id: "s9", label: "9. Used Oil Disposal and Recycling" },
  { id: "s10", label: "10. Drilling Chemicals" },
  { id: "s11", label: "11. Spare Parts and Consumables" },
  { id: "s12", label: "12. HSE Controls (All Supply Activities)" },
  { id: "s13", label: "13. Emergency Response" },
  { id: "s14", label: "14. Training" },
  { id: "s15", label: "15. Performance Indicators" },
  { id: "s16", label: "16. References" },
  { id: "s17", label: "17. Related Documents and Records" },
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

export default function TE_IMS_PROC_SCM_001() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "PROC — Procedures", href: "/docs/proc" },
          { label: "Site Supply Procedure" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              Site Supply Procedure
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-PROC-SCM-001_Rev01</span>
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
                ["Document Code", "TE-IMS-PROC-SCM-001"],
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-PROC-SCM-001_Rev01</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Site Supply Procedure
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-6" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-PROC-SCM-001</td>
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

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure establishes standardised, safe, and environmentally responsible controls for delivery, handling, and supply of critical site consumables at True East Mining Company (TEMC) remote drilling and exploration operations — diesel fuel, lubricating oils, drilling fluid chemicals, spare parts, and general site consumables. It governs supplier qualification, mobile delivery, on-site transfer, waste return, and record-keeping. It is aligned with ISO 9001:2015 (Clause 8.4 Externally Provided Processes, Products and Services), ISO 14001:2015, ISO 45001:2018, and KSA regulations (NCEC, MEWA, MHRSD).</p>

            <SectionHeading id="s2">2. Scope</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure applies to all on-site supply operations at TEMC drilling sites — mobile diesel refueling, oil delivery and used-oil collection, drilling fluid chemical delivery, consumables and spare parts. All deliveries occur via approved mobile units; no on-site bulk storage unless specifically engineered, permitted, and bunded. It applies to rig crews, shift supervisors, logistics, maintenance, mud engineers, HSE, and all third-party suppliers operating on TEMC premises.</p>

            <SectionHeading id="s3">3. Definitions</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Mobile Delivery — fuel, oil, or chemical delivery by licensed road tanker or bowser directly to the point of use.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Approved Supplier — a supplier formally qualified and on the TEMC Approved Supplier List, with valid commercial registration, HSE records, and certifications.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Waste Manifest — the official NCEC / MEWA document tracking transfer of hazardous waste (used oil, chemicals) to a licensed contractor.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Handover Window — the shift changeover slot during which planned refueling, oil change, and major chemical additions occur with operations suspended.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>SDS — Safety Data Sheet — hazard, handling, and emergency information for every chemical on site.</Bullet>
            </ul>

            <SectionHeading id="s4">4. Responsibilities</SectionHeading>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Approves this procedure and the Approved Supplier List.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site Manager / HSE Officer</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Overall accountability for site supply safety. Approves vendors and chemicals. Audits compliance. Ensures regulatory reporting.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Logistics Team</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Operational responsibility for all mobile deliveries (diesel, oils, chemicals) and waste collection. Inspects delivery vehicles. Supervises transfers. Maintains records and manifests.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Shift Supervisors / Maintenance Lead</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Coordinate handovers and maintenance windows. Lead safety meetings. Verify shutdowns. Approve resumption of operations after supply events.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Drilling Fluid / Mud Engineer</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Selects and approves eco-friendly mud additives. Monitors mud properties. Oversees chemical addition.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Rig Crew / Maintenance</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Perform checks and changes under supervision. Wear required PPE. Report hazards immediately.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Approved Suppliers / Contractors</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Comply with this procedure and TEMC site rules. Provide certified drivers, vehicles, and documentation.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>All Personnel</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Follow procedures. Use PPE. Stop and report unsafe acts or conditions.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <SectionHeading id="s5">5. Key Principles</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Planned refueling, oil change, and major fluid / chemical transfers occur during the shift handover window.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>If fuel or fluid levels fall critically mid-shift, operations are fully suspended and the pre-refueling procedure (safety meeting, 10 m zone, grounding) is followed exactly as for a scheduled event.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>All operations with ignition or spill risk are stopped during transfers.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Only environmentally friendly, low-toxicity, biodegradable drilling chemicals are permitted.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Used oil is recycled exclusively via NCEC / MEWA licensed third-party contractors.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Full HSE controls apply: PPE, spill kits, grounding, bunded containment, emergency response.</Bullet>
            </ul>

            <SectionHeading id="s6">6. Supplier Qualification (ISO 9001 Clause 8.4)</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Suppliers must be formally approved before first delivery — commercial registration, KSA operating licence, insurance, HSE record, driver training, vehicle inspection.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Fuel and chemical suppliers additionally provide SDS (Arabic and English) and NCEC / MEWA licences where applicable.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Approved Supplier List reviewed annually or after any major non-conformance.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Non-conformances logged in the Supplier Performance Register and escalated under PROC-SYS-008 Corrective Action.</Bullet>
            </ul>

            <SectionHeading id="s7">7. Diesel Refueling via Mobile Unit</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Refueling is performed per SOP-MAINT-002 Refueling and Fuel Handling. Key controls:</p>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Outgoing supervisor notifies Logistics ≥1 hour ahead.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Rig operations stop 10 minutes prior.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Non-essential personnel cleared (10 m radius); signs and barriers posted.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Mandatory 5-minute safety meeting — hazards, procedure, emergency response.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Logistics inspects the mobile truck (leaks, fittings, spill kit, fire extinguishers, certification).</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Truck positioned ≥5 m from rig; wheel chocks applied; brake engaged.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Bonding and grounding applied between truck and rig / earth.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Drip trays, absorbent pads, and secondary containment placed under all connections.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Slow transfer using drip-free nozzles and overfill protection; continuous monitoring.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>No smoking, open flames, or mobile phones within 20 m.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Post-refueling inspection; Logistics records volume, time, personnel, issues.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Operations resume only after final clearance by incoming supervisor and Logistics.</Bullet>
            </ul>

            <SectionHeading id="s8">8. Oil Change and Fluid Maintenance</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Engine, water pump (crankcase / gearbox), and hydraulic oil changes follow OEM intervals, runtime hours, or condition-based triggers.</p>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Pre-change — schedule per hours meter / planned maintenance; notify Logistics for oil delivery or waste collection; LOTO the equipment ≥15–30 minutes prior (cooling); set up contained work area with impermeable mats, bunds, spill kits; toolbox talk.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Change — chemical-resistant PPE; collection containers under drain points; drain completely; replace filters; clean breathers, strainers, fill points; refill slowly with OEM-approved fluid; monitor for leaks.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Post-change — brief test run to circulate fluid and check for leaks; label and seal waste drums; record volumes, oil types, condition notes, runtime.</Bullet>
            </ul>

            <SectionHeading id="s9">9. Used Oil Disposal and Recycling</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>All used lubricating oils are classified as hazardous waste.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>On-site storage — transfer to labelled, closed drums immediately; store in a bunded area (110% capacity) away from drains and ignition sources; daily visual inspection; maximum 90 days storage.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Collection — Maintenance Lead notifies Logistics when drums reach ~80% or monthly. Logistics schedules an NCEC / MEWA licensed contractor. Supervised transfer using drip trays.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Manifest — both parties sign the official waste manifest — waste type, volume, date, signatures.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Recycling — contractor transports to a licensed facility for dewatering, filtering, and re-refining. Certificate of recycling provided.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Records — Logistics retains manifests and certificates for ≥5 years.</Bullet>
            </ul>

            <SectionHeading id="s10">10. Drilling Chemicals</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Selection — HSE-approved list only — xanthan gum, PAC/CMC, bentonite, barite (where allowed), vegetable-based lubricants, glycerin shale inhibitors, biopolymers.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Documentation — full SDS/MSDS (Arabic and English) on site for every chemical.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Delivery — same mobile delivery controls as diesel — inspection, ground/bond, drip trays, containment, slow supervised transfer, 20 m no-ignition zone.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>On-site handling — designated bunded mixing area with liner, eyewash, spill kits; PPE; gradual addition to mud pit / hopper; continuous mud property monitoring; toolbox talks before major additions.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Empty containers — sacks, totes, and IBCs returned to Logistics for proper disposal / recycling — no on-site burning or burial.</Bullet>
            </ul>

            <SectionHeading id="s11">11. Spare Parts and Consumables</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>All spare parts purchased through Approved Suppliers, with PO and material certificate where applicable.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Goods received checked for quantity, damage, and conformity against the PO and delivery note by Logistics.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Non-conforming goods rejected, tagged, and returned — logged under PROC-SYS-008 Corrective Action.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Critical spare parts (rig down items) held at agreed minimum stock level with Procurement.</Bullet>
            </ul>

            <SectionHeading id="s12">12. HSE Controls (All Supply Activities)</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Job Safety Analysis (JSA) before each critical task.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Mandatory PPE: flame-resistant clothing, nitrile gloves, safety goggles, steel-toe boots, respiratory protection when required.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Spill prevention: absorbent pads, drip trays, secondary containment, overfill protection.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Fire safety: ABC extinguishers available at every transfer point.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Emergency equipment: eyewash stations, spill kits on site.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Ignition source prohibition within 20 m during handling.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Environmental controls: prevent soil and groundwater contamination; track waste and usage.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Incident reporting: all spills (&gt;1 L chemicals / &gt;5 L diesel), leaks, or injuries reported within 1 hour via Flash Notification (FRM-HSE-005).</Bullet>
            </ul>

            <SectionHeading id="s13">13. Emergency Response</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Spill / leak: stop source, contain with absorbents and booms, notify HSE and Logistics immediately.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Fire: activate alarm, use extinguishers, evacuate, call Saudi Civil Defense 998.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Exposure / injury: decontaminate, first aid, transfer to medical facility; call Saudi Red Crescent 997 as required.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Major event: activate PLN-HSE-001 Major Emergency Preparedness Plan.</Bullet>
            </ul>

            <SectionHeading id="s14">14. Training</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Initial induction plus annual refresher for all relevant personnel covering: this procedure, hazard recognition, PPE, spill response, waste handling, SDS interpretation, regulatory compliance (manifests).</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Records held in the Training and Competence Matrix (REG-TRN-001).</Bullet>
            </ul>

            <SectionHeading id="s15">15. Performance Indicators</SectionHeading>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Planned refueling during handover window</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≥ 95%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Approved supplier compliance audits</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Quarterly</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Reportable spills</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>0</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Used oil drums within 90-day storage limit</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Waste manifests retained and traceable</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Supplier non-conformance closure</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≤ 30 days</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                </tbody>
              </table>
            </div>

            <SectionHeading id="s16">16. References</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>ISO 9001:2015 — Clause 8.4 Externally Provided Processes, Products and Services.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>ISO 14001:2015 — Clauses 6.1.2, 8.1, 8.2 Environmental Aspects and Operational Control.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>ISO 45001:2018 — Clause 8.1.2 Eliminating Hazards.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>NCEC — Hazardous Waste and Spill Management Regulations (KSA).</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>MEWA — Environmental Regulations (KSA).</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>MHRSD — Occupational Safety Requirements.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>TEMC SOP-MAINT-002 Refueling and Fuel Handling; PROC-ENV-001 Waste Management; PROC-MAINT-001 Maintenance Management; PROC-HSE-004 Site Emergency Preparedness; PROC-SYS-008 Corrective Action; PLN-HSE-001 Major Emergency Preparedness.</Bullet>
            </ul>

            <SectionHeading id="s17">17. Related Documents and Records</SectionHeading>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Approved Supplier List</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Procurement / HSE</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 years rolling</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Fuel Refueling Log (REG-MAINT-002)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Logistics</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Oil Change / Maintenance Log (REG-MAINT-001)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Maintenance</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Life of asset + 3 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Waste Manifests and Recycling Certificates</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE / Logistics</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Chemical SDS Library</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Life of chemical on site</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Spill Incident Reports</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Supplier Performance Records</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Procurement</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 years</td>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Initial issue — Site Supply Policy and Procedure</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MR</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>01</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>10.04.2026</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Full rebuild — reframed as ISO 9001 Clause 8.4 aligned SCM procedure. Added supplier qualification section, spare parts/consumables section, formal responsibilities table, definitions section, KPI table with CEO review flag, records retention table. Preserved all technical content on refueling, oil changes, used-oil recycling, and drilling chemicals. Linked to SOP-MAINT-002 for detailed refueling execution.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE / Procurement</td>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Prepared by (HSE / Procurement)</td>
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
