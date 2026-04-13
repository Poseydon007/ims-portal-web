// TE-IMS-PROC-HSE-014 — Site Rehabilitation Procedure
// Design: Standardized policy layout — left sidebar (Doc Info + TOC) + main content area

import { Link } from "wouter";
import { TopNav, Footer, Breadcrumb } from "@/components/Layout";
import { LOGO_GRAY, LOGO_WHITE } from "@/lib/imsData";

const sections = [
  { id: "s1", label: "1. Purpose" },
  { id: "s2", label: "2. Scope" },
  { id: "s3", label: "3. Definitions" },
  { id: "s4", label: "4. Responsibilities" },
  { id: "s5", label: "5. Pre-Rehabilitation Planning" },
  { id: "s6", label: "6. Drill Hole Abandonment" },
  { id: "s7", label: "7. Site Rehabilitation Execution" },
  { id: "s8", label: "8. Success Criteria" },
  { id: "s9", label: "9. PPE Requirements" },
  { id: "s10", label: "10. Monitoring and Post-Rehabilitation Audit" },
  { id: "s11", label: "11. Performance Indicators" },
  { id: "s12", label: "12. References" },
  { id: "s13", label: "13. Related Documents and Records" },
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

export default function TE_IMS_PROC_HSE_014() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "PROC — Procedures", href: "/docs/proc" },
          { label: "Site Rehabilitation Procedure" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              Site Rehabilitation Procedure
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-PROC-HSE-014_Rev01</span>
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
                ["Document Code", "TE-IMS-PROC-HSE-014"],
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-PROC-HSE-014_Rev01</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Site Rehabilitation Procedure
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-6" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-PROC-HSE-014</td>
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

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure establishes the requirements for the safe, effective, and auditable rehabilitation of all True East Mining Company (TEMC) drilling and exploration sites on completion of activities. The objective is to return disturbed land as close as practicable to its pre-disturbance condition, prevent soil erosion, groundwater contamination, and habitat loss, and ensure full compliance with ISO 14001:2015, ISO 45001:2018, MEWA, NCEC, and the Saudi Mineral Investment Law and its Implementing Regulations.</p>

            <SectionHeading id="s2">2. Scope</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure applies to all TEMC exploration and drilling sites in the Kingdom of Saudi Arabia, including drill pads, sumps, sample storage areas, access tracks, gridlines, camps, and temporary yards. It covers employees, contractors, and subcontractors involved in planning, executing, and verifying rehabilitation. Site-specific rehabilitation plans may add further requirements where host-licence conditions demand them.</p>

            <SectionHeading id="s3">3. Definitions</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Rehabilitation — the process of restoring disturbed land to a stable, safe, and environmentally acceptable condition.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Pre-disturbance Baseline — the documented condition of the site before any disturbance, captured via photos, GPS coordinates, soil and vegetation notes.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Drill Hole Abandonment — the permanent sealing and identification of a drill hole in compliance with regulatory and environmental standards.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Sump — an excavated pit used during drilling to manage drilling fluids, cuttings, or water.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Topsoil — the upper 0.1–0.3 m of soil containing organic matter and seed bank; preserved separately during disturbance for re-spreading.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Contaminated Cuttings — drill cuttings that are acidic, saline, radioactive, or chemically altered such that they cannot be safely dispersed.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Completion Report — the formal record confirming rehabilitation is complete, signed by HSE Manager and accepted by Site Manager.</Bullet>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Ensures budget and resources are allocated for rehabilitation. Approves the Rehabilitation Plan for each licence area.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site Manager / Drilling Superintendent</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Oversees planning and physical execution on site. Enforces the Rehabilitation Plan and procedure. Signs off the Completion Report.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Develops and approves site-specific plans. Audits rehabilitation work. Maintains records and manages NCEC/MEWA interface. Reports KPIs to management review.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Environmental Officer</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monitors soil, vegetation, and water quality during and after rehabilitation. Coordinates with NCEC where statutory reporting applies.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Drilling Crew</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Completes drill hole abandonment, sump backfill, track ripping, waste removal, and topsoil respreading per the plan.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Contractors</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Execute rehabilitation within the area of responsibility under the Site Manager's direction. Submit records to HSE.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>All Personnel</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Report any observed environmental non-conformity. Ensure 100% waste removal from work areas.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <SectionHeading id="s5">5. Pre-Rehabilitation Planning</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Regulatory review — confirm obligations under the current exploration licence, NCEC guidelines, MEWA requirements, and Saudi Mineral Investment Law Implementing Regulations.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Stakeholder consultation — engage host licence area representatives, landowners, and local authorities where applicable.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Baseline documentation — photograph each disturbed location from fixed GPS points. Capture vegetation cover and soil profile notes. Records stored in the site rehabilitation file.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Rehabilitation plan — site-specific plan covering scope, sequence, resources, verification steps, responsible persons, and target completion date.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Risk assessment — identify immediate hazards — unstable ground, open holes, sharp objects, contaminated zones, residual chemicals — and define controls before entry.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Mobilisation — confirm equipment, fuel, PPE, and waste-handling capacity before work starts.</Bullet>
            </ul>

            <SectionHeading id="s6">6. Drill Hole Abandonment</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Remove all drill rods, liners, and temporary casing before sealing.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Classify drill cuttings — contaminated (acidic, saline, radioactive, discoloured) vs non-contaminated — before disposal decisions.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Return contaminated cuttings to the hole, sump, or an approved lined excavation. Do not disperse.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Non-contaminated cuttings may be raked over the area and used for contouring.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Prevent aquifer cross-contamination — seal hole at aquifer transitions where encountered.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Plug the hole with cement in sections per licence conditions. Insert a PVC plug 0.5–1.0 m below surface where plastic plugging is allowed.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Embed a permanent ID marker showing hole ID, total depth, and abandonment date.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Steel casing that cannot be removed shall be cut ≥0.5 m below surface and capped or welded shut — never left protruding.</Bullet>
            </ul>

            <SectionHeading id="s7">7. Site Rehabilitation Execution</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Sumps — backfill with stored excavated material, respread topsoil, and restore surface contour.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Access tracks and gridlines — rip compacted ground along natural contour lines (not downslope) to loosen soil, promote infiltration, and reduce erosion. Restore natural drainage.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Topsoil and overburden — respread evenly across the disturbed footprint to re-establish seed bank conditions.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Survey markers — minimise permanent markers. Use biodegradable wooden pegs instead of steel stakes wherever licence conditions allow.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Waste removal — 100% removal of sample bags, packaging, plastic, scrap metal, hydrocarbon-contaminated soil, and general waste. Dispose per TEMC Waste Management Procedure and NCEC requirements.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Hydrocarbon impact — excavate visibly contaminated soil, contain, and dispose through licensed contractor. Record quantity removed.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Revegetation — where the licence requires active revegetation, apply approved native seed mix; monitor germination at 3, 6, and 12 months.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Final inspection — HSE team walks the site, verifies compliance, re-photographs from baseline GPS points, and documents findings in the Rehabilitation Completion Report.</Bullet>
            </ul>

            <SectionHeading id="s8">8. Success Criteria</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Rehabilitation is considered successful when the following are met:</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Criterion</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Indicator</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Verification</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Drill holes sealed</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>No hole open or protruding</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Visual inspection + photograph</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Sumps backfilled and contoured</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Surface blends with surrounding topography</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Visual inspection + cross-section photo</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Tracks ripped on contour</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>No wheel ruts, natural drainage restored</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Visual inspection</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Topsoil respread</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>No bare exposed subsoil</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Visual inspection</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Waste removed</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Zero waste items observed on site</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Walk-through + waste manifest</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Erosion controls in place</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>No active gullying or sheet erosion</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Post-event inspection</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Revegetation (where required)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Native seedling emergence within 6 months</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Vegetation plot monitoring</td>
                </tr>
                </tbody>
              </table>
            </div>

            <SectionHeading id="s9">9. PPE Requirements</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Hard hat.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Steel-toe safety boots with aggressive tread for uneven ground.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Safety glasses (dark for day, clear for night).</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>High-visibility reflective coveralls.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Heavy-duty gloves — impact gloves for rod and casing handling, chemical-resistant for cement, waste, or hydrocarbon contact.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Respiratory protection (P2/P3) when handling dust or contaminated cuttings.</Bullet>
            </ul>

            <SectionHeading id="s10">10. Monitoring and Post-Rehabilitation Audit</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Initial audit on completion — HSE Manager verifies all success criteria.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Short-term audit at 3 months — check for erosion, subsidence, topsoil loss.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Long-term audit at 6–12 months — assess vegetation recovery and ground stability.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Post-event audit after major rainfall or sandstorm — check for damage or waste exposure.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Non-conformities raised on FRM-SYS-003 CAR and closed per PROC-SYS-005.</Bullet>
            </ul>

            <SectionHeading id="s11">11. Performance Indicators</SectionHeading>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Sites rehabilitated within planned timeframe</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≥ 95%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Quarterly</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Environmental non-conformities per site</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≤ 2</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Per rehabilitation</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Native vegetation regrowth rate (where applicable)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≥ 60%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>12 months post-rehab</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Waste removal completeness</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Per rehabilitation</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Post-rehabilitation audit closure</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100% within 30 days</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Quarterly</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Hole abandonment compliance rate</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Per site</td>
                </tr>
                </tbody>
              </table>
            </div>

            <SectionHeading id="s12">12. References</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>ISO 14001:2015 — Environmental Management — Clauses 6.1.2, 8.1, 8.2, 9.1.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>ISO 45001:2018 — Occupational Health and Safety — Clauses 6.1.2, 8.1.2.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Saudi Mineral Investment Law and its Implementing Regulations.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Ministry of Industry and Mineral Resources (MIM) — Exploration Licence Conditions.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>MEWA — Environmental Protection Standards.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>NCEC — Environmental Rehabilitation Guidelines.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Saudi Green Initiative — biodiversity and rehabilitation objectives.</Bullet>
            </ul>

            <SectionHeading id="s13">13. Related Documents and Records</SectionHeading>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site Rehabilitation Plan</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Life of licence + 5 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Baseline photographs and GPS log</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Officer</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Life of licence + 5 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Drill Hole Abandonment Records</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Drilling Supervisor</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Life of licence + 5 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Rehabilitation Completion Report</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Life of licence + 5 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Post-Rehabilitation Audit Reports</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Waste Disposal Manifests</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Officer</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Corrective Action Records (FRM-SYS-003)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>QA / MR</td>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Initial issue</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MR</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>01</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>10.04.2026</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Full rebuild — added definitions, responsibilities table, explicit drill hole abandonment steps, success criteria table, monitoring schedule, KPI table with CEO review flag, records retention table, Saudi Mineral Investment Law and MEWA references.</td>
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
