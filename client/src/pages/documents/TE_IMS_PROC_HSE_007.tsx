// TE-IMS-PROC-HSE-007 — Toolbox Talks Procedure
// Design: Standardized policy layout — left sidebar (Doc Info + TOC) + main content area

import { Link } from "wouter";
import { TopNav, Footer, Breadcrumb } from "@/components/Layout";
import { LOGO_GRAY, LOGO_WHITE } from "@/lib/imsData";

const sections = [
  { id: "s1", label: "1. Purpose" },
  { id: "s2", label: "2. Scope" },
  { id: "s3", label: "3. Responsibilities" },
  { id: "s4", label: "4. Frequency and Duration" },
  { id: "s5", label: "5. How to Conduct a Toolbox Talk" },
  { id: "s6", label: "6. Record Keeping" },
  { id: "s7", label: "7. Effectiveness and Continual Improvement" },
  { id: "s8", label: "8. Approved Toolbox Talk Topics — Quick Reference Library" },
  { id: "s9", label: "9. Performance Indicators" },
  { id: "s10", label: "10. References" },
  { id: "s11", label: "11. Records Retention" },
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

export default function TE_IMS_PROC_HSE_007() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "PROC — Procedures", href: "/docs/proc" },
          { label: "Toolbox Talks Procedure" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              Toolbox Talks Procedure
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-PROC-HSE-007_Rev01</span>
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
                ["Document Code", "TE-IMS-PROC-HSE-007"],
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-PROC-HSE-007_Rev01</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Toolbox Talks Procedure
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-6" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-PROC-HSE-007</td>
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

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>To establish a standardised, effective process for conducting daily and task-specific Toolbox Talks (TBTs) that reinforce safe behaviours, raise hazard awareness, and promote a strong safety culture across all True East Mining Company (TEMC) operations. Toolbox Talks are short, interactive discussions that help prevent incidents by addressing real site risks in a practical and engaging way. This procedure supports ISO 45001:2018 (Clauses 5.4 Consultation, 7.2 Competence, 7.3 Awareness, 8.1.2 Eliminating Hazards).</p>

            <SectionHeading id="s2">2. Scope</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure applies to all TEMC sites — drilling rigs, exploration camps, processing areas, workshops, core yards, and remote desert locations — and covers all employees, contractors, and visitors. Toolbox Talks are mandatory before every shift and before every high-risk task.</p>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Develops and maintains the Toolbox Talk library; monitors site attendance and effectiveness; reports KPIs in the Monthly HSE Report; rotates topics after incidents or audit findings.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site Supervisors / Shift In-Charge</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Lead Toolbox Talks daily; ensure 100% crew attendance; document topics covered and gather worker feedback; escalate repeat concerns.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Safety Officers</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Support selection of relevant topics; conduct random field observations to verify worker understanding; coach supervisors on delivery.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>All Employees &amp; Contractors</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Actively participate, share field experiences, ask questions, and apply the learned safety principles on the job.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <SectionHeading id="s4">4. Frequency and Duration</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Daily — conducted immediately before shift start. Strictly limited to 10–15 minutes maximum to maintain engagement.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Task-Specific — additional talks held immediately before high-risk tasks — hot work, working at heights, confined space entry, complex lifts, night shift operations, chemical handling.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Incident-Driven — an emergency toolbox talk is held after any significant incident, near miss, or regulatory change relevant to site activities.</Bullet>
            </ul>

            <SectionHeading id="s5">5. How to Conduct a Toolbox Talk</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Choose a highly relevant topic from the approved library or base it on a current, real-time site risk.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Gather the team in a safe, quiet area away from heavy machinery noise.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Use visual aids, physical tools, photos, or short videos where available.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Explain the specific hazard and why it matters, using real examples from the site or the broader mining industry.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Discuss required controls and safe practices, actively encouraging questions and worker input.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Demonstrate the safe practice physically where practical (manual handling posture, PASS method for fire extinguishers, 3 points of contact on a ladder).</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Summarise the key points and ask the crew for a verbal commitment to safety.</Bullet>
            </ul>

            <SectionHeading id="s6">6. Record Keeping</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Use the official Toolbox Talk Register (FRM-HSE-008).</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Record the topic, date, site, all attendees with signatures, feedback received, and any corrective actions arising from the discussion.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Retain records in the site IMS file for a minimum of 3 years.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Corrective actions arising from a toolbox talk feed the IMS Action Register and are tracked to closure.</Bullet>
            </ul>

            <SectionHeading id="s7">7. Effectiveness and Continual Improvement</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Supervisors assess worker understanding through direct observation during the shift following the talk.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>The HSE Manager conducts a monthly review of attendance logs and recurring topics.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Topics are updated and rotated based on recent incidents, near misses, audit findings, or seasonal risks (extreme heat stress in the KSA summer, sandstorms, Ramadan fatigue).</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>TBT effectiveness is reviewed as an input to the Management Review (PROC-SYS-002).</Bullet>
            </ul>

            <SectionHeading id="s8">8. Approved Toolbox Talk Topics — Quick Reference Library</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>The following standardised topics are tailored specifically to TEMC and KSA drilling operations. Supervisors rotate these regularly and supplement with incident- or site-specific topics.</p>

            <SubHeading>8.1 Topic 1 — Manual Handling</SubHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>More than 25% of mining injuries involve manual handling. Always assess the load first.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Ask: Can I use a mechanical aid? Can the load be reduced? Is the walking route clear?</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Safe lifting rules: feet apart, bend at the knees, back straight, firm grip, lift smoothly using leg muscles, keep the load close to the body, avoid twisting.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Never carry loads that block your vision.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>For awkward loads or items &gt;20 kg, use a team lift or mechanical aid. Wear cut-resistant gloves and steel-toe boots.</Bullet>
            </ul>

            <SubHeading>8.2 Topic 2 — Hazardous Substances (Drilling Fluids and Chemicals)</SubHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Drilling additives, diesel, and cleaning chemicals can severely harm skin, eyes, or lungs.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Always consult the Safety Data Sheet (SDS) before using a new substance.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Hierarchy of Controls: substitute with a safer product where possible, use engineering controls (ventilation, enclosed mixing), follow procedures, use PPE as the last line of defence (chemical-resistant gloves, goggles, respirators).</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Never eat, drink, or smoke while handling chemicals. Wash hands immediately after use and report spills.</Bullet>
            </ul>

            <SubHeading>8.3 Topic 3 — Safe Use of Diesel</SubHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Diesel is flammable and prolonged contact causes skin and lung damage.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Wear nitrile gloves, safety goggles, and FR overalls during handling.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Refuel outdoors only with the engine completely off and cooled.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Use drip trays and keep spill kits nearby.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>No smoking, mobile phones, or ignition sources within 20 metres.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Wash hands and change contaminated clothing immediately if splashed.</Bullet>
            </ul>

            <SubHeading>8.4 Topic 4 — Hand Tools</SubHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Use the exact right tool for the job. Never improvise.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Pre-use inspection: check for mushroomed chisel heads, loose or splintered handles, dull cutting edges.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Never use files as punches or chisels with damaged strike faces.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Keep hands and body parts behind the cutting edge. Report and tag out damaged tools immediately.</Bullet>
            </ul>

            <SubHeading>8.5 Topic 5 — Teamwork and Safety Culture</SubHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Safety is everyone's shared responsibility. Look out for your crewmates.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Report hazards and near misses immediately. TEMC operates a strict &quot;No Blame&quot; culture for proactive reporting.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Actively discourage horseplay. Communicate clearly and concisely.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>A strong team talks openly about safety concerns and celebrates safe behaviours.</Bullet>
            </ul>

            <SubHeading>8.6 Topic 6 — Housekeeping</SubHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>A tidy site is a safe site.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Clear waste, rubble, and tripping hazards immediately. Return tools to designated storage.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Keep all access routes, walkways, and emergency exits 100% clear.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Report slippery floors, protruding nails, and unsecured materials. Good housekeeping prevents trips, fires, and operational delays.</Bullet>
            </ul>

            <SubHeading>8.7 Topic 7 — Skin Care and Dermatitis Prevention</SubHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Drilling mud, diesel, and harsh chemicals strip skin oils and cause severe dermatitis.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Avoid direct skin contact wherever physically possible.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Apply industrial barrier cream before the shift and conditioning cream after washing.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Wear appropriate gloves and change soaked or contaminated clothing immediately. Report rashes without delay.</Bullet>
            </ul>

            <SubHeading>8.8 Topic 8 — Noise at Work</SubHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Prolonged exposure to rig, compressor, and generator noise causes permanent, irreversible hearing loss.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Rule of thumb: if you must raise your voice to be heard by someone 1 metre away, you must wear hearing protection.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Use ear plugs or earmuffs correctly. Never remove them while inside designated noisy zones.</Bullet>
            </ul>

            <SubHeading>8.9 Topic 9 — Use of Fire Extinguishers (PASS Method)</SubHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Pull the pin to break the tamper seal.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Aim the nozzle strictly at the base of the fire.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Squeeze the handle to release the extinguishing agent.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Sweep the nozzle from side to side until the fire is completely out.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Ensure you are using the correct extinguisher type (Water, Foam, Dry Powder, CO₂) for the specific fire class.</Bullet>
            </ul>

            <SubHeading>8.10 Topic 10 — Working at Height</SubHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Any work above 1.8 metres strictly requires formal fall protection.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Inspect harness, lanyard, trauma straps, and anchor points before every single use.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Never work alone at height.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Use a full-body harness with a double lanyard when moving to maintain 100% tie-off. Always maintain 3 points of contact on ladders.</Bullet>
            </ul>

            <SubHeading>8.11 Topic 11 — Daily Drilling Pre-Start Checklist</SubHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>The pre-start checklist must be completed in full before starting the rig engine.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Red items = immediate stop. Do not operate the rig if a red item fails.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Critical checks include emergency stops, high-pressure hydraulic leaks, wireline condition, fire extinguisher presence, first aid kit stock, and PPE readiness.</Bullet>
            </ul>

            <SubHeading>8.12 Topic 12 — Site Rehabilitation</SubHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>After drilling operations conclude, the site must be restored as close as possible to its original environmental condition.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Rip compacted soil along natural contours, respread topsoil and vegetation, backfill sumps and boreholes securely, remove 100% of generated waste, and install permanent survey markers only where required by the client.</Bullet>
            </ul>

            <SectionHeading id="s9">9. Performance Indicators</SectionHeading>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Daily TBT completion per active crew</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Daily</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>TBT attendance rate</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≥ 95%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>TBT topics rotated through library</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100% within 12 months</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Annual</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>TBT records submitted within 24 hours</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≥ 95%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Corrective actions arising from TBT closed on time</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≥ 90%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                </tbody>
              </table>
            </div>

            <SectionHeading id="s10">10. References</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>ISO 45001:2018 — Clauses 5.4 Consultation and Participation of Workers, 7.2 Competence, 7.3 Awareness, 8.1.2 Eliminating Hazards and Reducing OH&amp;S Risks.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>MHRSD — Occupational Safety and Health Management Regulation (KSA).</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>NCEC — National Center for Environmental Compliance guidelines on chemical handling and spill prevention.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>TEMC FRM-HSE-008 Toolbox Talk Attendance Register; PROC-HSE-003 Hazard Identification and Risk Assessment; PROC-HSE-006 Incident and Accident Investigation; PROC-SYS-002 Management Review.</Bullet>
            </ul>

            <SectionHeading id="s11">11. Records Retention</SectionHeading>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Toolbox Talk Register (FRM-HSE-008)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site Supervisor / HSE</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly TBT summary reports</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Corrective actions arising from TBT</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MR</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 years after closure</td>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Rebuilt to TE design standard; preserved all 12 approved toolbox talk topics and delivery method; added responsibilities table, incident-driven frequency, explicit linkage to PROC-HSE-003/006 and PROC-SYS-002, KPI table with CEO review flag, and records retention table.</td>
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
