// TE-IMS-PROC-HSE-013 — Chemical and Spill Management Procedure
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

export default function TE_IMS_PROC_HSE_013() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "PROC — Procedures", href: "/docs/proc" },
          { label: "Chemical and Spill Management Procedure" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              Chemical and Spill Management Procedure
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-PROC-HSE-013_Rev01</span>
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
                ["Document Code", "TE-IMS-PROC-HSE-013"],
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-PROC-HSE-013_Rev01</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Chemical and Spill Management Procedure
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-6" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-PROC-HSE-013</td>
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
<p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Spill Management</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>SPILL MANAGEMENT</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Validation</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Prepared By</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Reviewed</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Approved By</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Name</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Abduljawad Bouguelta</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Reda El-Kazaz</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Mohammad Qenbazo</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Position</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MR</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>QA</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MD</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Signature</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                </tbody>
              </table>
            </div>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Purpose</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>The purpose of this procedure is to establish safe work practices for the handling, storage, and emergency response to chemical and liquid spills (including diesel, hydraulic oils, and drilling fluids). This ensures maximum protection for personnel, prevents environmental soil/water contamination, and ensures strict compliance with ISO 14001:2015 and KSA National Center for Environmental Compliance (NCEC) regulations.</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Scope</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure applies to all True East Mining Company operations, including drill rigs, workshops, fuel storage areas, and remote desert sites. It covers all employees, contractors, and visitors involved in handling hazardous liquids or responding to spills.</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Definitions</span>
              </li>
            </ul>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Term</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Definition</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Spill</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Any accidental, uncontrolled release of a hazardous liquid or chemical into the workspace or the natural environment.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Minor Spill (Non-Emergency)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>A spill of less than 20 Liters that does not present an immediate fire, safety, or environmental hazard, and can be easily contained and cleaned by local trained personnel.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Major Spill (Emergency)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>A spill of greater than 20 Liters, OR any quantity of highly toxic/flammable material, OR any spill that escapes secondary containment and impacts unlined soil or waterways.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Secondary Containment</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>A bund or tray designed to catch leaks from primary storage containers, legally required to hold at least 110% of the largest container's volume.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Responsibilities</span>
              </li>
            </ul>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager / Safety Officer</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Administers the Spill Management program; ensures spill kits are stocked; leads Major Spill responses; reports severe environmental impacts to NCEC.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site Supervisors</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Ensure secondary containment is used; train crew on local spill response; lead Minor Spill cleanups; report all spills to HSE.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>All Personnel</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Strictly follow safe handling rules; utilize drip trays; report all leaks and spills immediately; participate in initial containment if safe to do so.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Procedure</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>General Prevention &amp; Handling Guidelines</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>To ensure environmental and personnel safety, all workers must observe the following preventive rules:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Always verify the Safety Data Sheet (SDS) before handling any new chemical or fuel.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Keep workspaces and rig floors clean. Clean up small drips of liquid, oil, or grease immediately to prevent slip hazards.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Secondary Containment: All fuel drums, chemical totes, and generators must be placed inside appropriate secondary containment bunds or drip trays.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Never take hazardous shortcuts when transferring fluids. Use proper funnels, pumps, and grounded hoses.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Running and horseplay around chemical/fuel storage areas are strictly forbidden.</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Spill Kits and Equipment</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Chemical and Oil Spill Kits must be available at all active drilling locations, workshops, and near bulk fuel storage. Kits must include:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Absorbent materials (e.g., oil-only booms, absorbent pads, vermiculite, or granular absorbents).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Neutralizing agents (if specific acids/bases are stored on-site).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Heavy-duty hazardous waste disposal bags and zip ties.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Spark-proof shovels and brooms.</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Minor Spill Response (Non-Emergency)</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Applies to small spills (&lt; 20 Liters) with no immediate fire or severe health hazard.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Alert: Alert people in the immediate area of the spill.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>PPE: Don appropriate protective equipment (safety goggles, nitrile gloves, coveralls).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Stop the Source: Upright the fallen drum, close the leaking valve, or plug the punctured hose.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Contain: Confine the spill to a small area using absorbent booms or dry sand. Prevent it from reaching drains or trenches.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Clean: Use the appropriate absorbent pads to soak up the liquid.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Dispose: Collect all contaminated residue, sand, and used absorbent pads, place them in a heavy-duty bag, tag it as Hazardous Waste, and dispose of it strictly per the Waste Management Procedure (TE-IMS-PROC-ENV-001_Rev00).</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Major Spill Response (Emergency)</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Applies to large spills (&gt; 20 Liters), or any spill presenting an immediate fire, safety, or environmental hazard.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Stop Work: Cease all surrounding operations immediately.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Eliminate Ignition: Turn off all engines, generators, and ignition sources (No smoking, no hot work).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Evacuate &amp; Secure: Evacuate non-essential personnel from the area to an upwind muster point. Secure the perimeter to keep unauthorized people out.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Aid the Injured: Attend to any injured persons only if you can do so without personal risk. Call the Emergency Warden.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Notify: Call the Site Supervisor and the HSE Manager immediately.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Contain (If Safe): Only if properly trained and equipped, attempt to block drains or build a dirt berm to prevent the spill from spreading into the desert soil or wadis.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Professional Cleanup: Remain safely near the perimeter until the specialized Emergency Response Team arrives to take over remediation.</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Inspection and Verification</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Weekly Checks: Supervisors or Safety Representatives must conduct weekly inspections of all bulk fluid storage areas and verify that Spill Kits are fully stocked and accessible.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Incident Reporting: ALL spills, regardless of size, must be reported using the Flash Notification Form (TE-IMS-FRM-HSE-005_Flash_Report_Rev00).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>6. Required Personal Protective Equipment (PPE)</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>When responding to a spill, personnel must wear:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Chemical-resistant gloves (e.g., heavy-duty Nitrile).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Safety goggles or a full-face shield (to prevent chemical splashing).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Steel-toe safety boots (chemical-resistant rubber boots preferred for major cleanups).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Appropriate respiratory protection (if dealing with volatile fumes or enclosed spaces).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>7. References</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>ISO 14001:2015 – Environmental Management Systems (Clauses 6.1.2, 8.1, 8.2 Emergency Preparedness and Response).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>ISO 45001:2018 – Occupational Health and Safety.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>NCEC – National Center for Environmental Compliance (KSA regulations for spill management and soil remediation).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>8. Related Documents</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>TE-IMS-PROC-ENV-001_Rev00 – Waste Management Procedure</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>TE-IMS-PROC-HSE-010_Rev00 – Incident/Accident Investigation Procedure</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>TE-IMS-FRM-HSE-005_Flash_Report_Rev00 – Incident/Accident Flash Notification Form</p>

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
