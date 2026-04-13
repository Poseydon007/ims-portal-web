// TE-IMS-SOP-OPS-001 Rev01 — Diamond Drilling Operation SOP
// Content extracted verbatim from approved DOCX. Design and format only.
import { Link } from "wouter";
import { TopNav, Footer, Breadcrumb } from "@/components/Layout";
import { LOGO_WHITE } from "@/lib/imsData";

export default function SOP_OPS_001() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb items={[
        { label: "SOP — Standard Operating Procedures", href: "/docs/sop" },
        { label: "Diamond Drilling Operation SOP" },
      ]} />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>Diamond Drilling Operation SOP</h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-SOP-OPS-001_Rev01</span>
              <span style={{ color: "#c0c8d4" }}>·</span>
              <span className="text-xs" style={{ color: "#6b7a8d" }}>10 Apr 2026</span>
              <span style={{ color: "#c0c8d4" }}>·</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: "#d4edda", color: "#155724" }}>✓ Approved for Implementation</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/docs/sop" className="text-xs font-semibold px-3 py-1.5 rounded border hover:bg-gray-50 transition-colors" style={{ borderColor: "#dde3ec", color: "#081C2E" }}>← Back to SOPs</Link>
          </div>
        </div>
      </div>

      {/* Main layout */}
      <div className="container py-8 flex gap-8 items-start">
        {/* Sidebar */}
        <aside className="hidden lg:block w-52 shrink-0 sticky top-20 rounded border" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
          <div className="p-4 border-b" style={{ borderColor: "#dde3ec" }}>
            <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#8a9ab0" }}>Document Info</div>
            <dl className="space-y-2">
              {[
                ["Code", "TE-IMS-SOP-OPS-001"],
                ["Revision", "Rev01"],
                ["Date", "10 Apr 2026"],
                ["Status", "✓ Approved"],
                ["Category", "SOP"],
                ["Scope", "All True East Mining diamond drilling exploration and production sites"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs font-semibold" style={{ color: "#8a9ab0" }}>{k}</dt>
                  <dd className="text-xs mt-0.5" style={{ color: "#081C2E" }}>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="p-4">
            <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#8a9ab0" }}>Contents</div>
            <nav className="space-y-1">
              <a key="1" href="#s1" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>1. Purpose</a>
              <a key="2" href="#s2" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>2. Scope</a>
              <a key="3" href="#s3" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>3. Definitions and Acronyms</a>
              <a key="4" href="#s4" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>4. References</a>
              <a key="5" href="#s5" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>5. Responsibilities</a>
              <a key="6" href="#s6" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>6. Site Identification and Pre-Mobilization Risk Assessment</a>
              <a key="7" href="#s7" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>7. Take 5 Assessments</a>
              <a key="8" href="#s8" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>8. Setting Up and Positioning of Rig</a>
              <a key="9" href="#s9" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>9. Exclusion Zone and Barricades</a>
              <a key="10" href="#s10" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>10. Line of Fire and Hands-Off Controls</a>
              <a key="11" href="#s11" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>11. Steep Terrain Assessment and Controls</a>
              <a key="12" href="#s12" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>12. Stuck Rods Procedure</a>
              <a key="13" href="#s13" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>13. Splicing and Repairing Wireline</a>
              <a key="14" href="#s14" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>14. Pre-Start Checks</a>
              <a key="15" href="#s15" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>15. Required Personal Protective Equipment</a>
              <a key="16" href="#s16" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>16. Training and Competence</a>
              <a key="17" href="#s17" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>17. Monitoring, Audit and Continual Improvement</a>
              <a key="18" href="#s18" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>18. Records and Retention</a>
            </nav>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0">
          {/* Hero Banner */}
          <div style={{ backgroundColor: "#081C2E" }} className="relative overflow-hidden rounded-lg mb-6">
            <img src={LOGO_WHITE} aria-hidden="true" className="absolute pointer-events-none select-none"
              style={{ width: "280px", opacity: 0.07, right: "-10px", top: "50%", transform: "translateY(-50%)" }} />
            <div className="relative z-10 p-6">
              <div style={{ color: "#C49A28" }} className="text-xs font-bold tracking-[0.2em] uppercase mb-2">SOP · INTERNAL USE ONLY</div>
              <h1 className="text-white text-2xl font-extrabold leading-tight tracking-tight mb-2">Diamond Drilling Operation SOP</h1>
              <div className="flex flex-wrap gap-2 mt-3">
                {[["Doc No", "TE-IMS-SOP-OPS-001"], ["Rev", "Rev01"], ["Date", "10 Apr 2026"], ["Status", "Approved for Implementation"]].map(([label, val]) => (
                  <span key={label} className="text-xs px-2.5 py-1 rounded" style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.75)" }}>
                    <span style={{ color: "#C49A28" }}>{label}:</span> {val}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Document Content */}
          <div className="rounded border p-6" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s1" className="text-lg font-bold" style={{ color: "#081C2E" }}>1. Purpose</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>To standardize safe, efficient, and compliant diamond drilling operations across all True East Mining sites. This SOP ensures that all personnel follow consistent steps to identify hazards, implement controls, maintain equipment integrity, and prevent incidents — including falls, stuck rods, wireline failure, and line-of-fire injuries.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This SOP is strictly aligned with ISO 45001:2018 and the Kingdom of Saudi Arabia (KSA) occupational safety and environmental regulations. It sits beneath the umbrella procedure TE-IMS-PROC-OPS-001, Drilling Operations Control Procedure.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s2" className="text-lg font-bold" style={{ color: "#081C2E" }}>2. Scope</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This SOP applies to all True East Mining employees, contractors, and visitors involved in diamond drilling activities, including:</p>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Rig mobilization, set-up, and demobilization</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Rig positioning and alignment</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Rod handling and wireline management</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Core recovery and sampling at the rig</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Stuck rod recovery operations</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Drilling in remote desert terrain and on steep slopes</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>It applies to exploration and production drilling sites operated by True East or by contractors under True East supervision.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s3" className="text-lg font-bold" style={{ color: "#081C2E" }}>3. Definitions and Acronyms</h2>
            </div>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s4" className="text-lg font-bold" style={{ color: "#081C2E" }}>4. References</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>International standards:</p>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>ISO 45001:2018 — clauses 6.1.2 (Hazard identification), 8.1.2 (Eliminating hazards), 8.2 (Emergency preparedness and response).</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>ISO 14001:2015 — clause 8.1 (Operational planning and control).</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Saudi regulatory:</p>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>MHRSD Occupational Safety and Health Management Regulation, KSA.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>MHRSD Ministerial Decision on heat stress — midday outdoor work ban (June–August, 12:00 to 15:00).</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>NCEC guidelines on dust suppression and surface water runoff control.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Saudi Labor Law — Articles 98 and 101 (working hours and rest periods).</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>True East IMS documents:</p>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>TE-IMS-PROC-OPS-001 — Drilling Operations Control Procedure (parent procedure).</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>TE-IMS-SOP-OPS-002 — Night Shift Drilling SOP.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>TE-IMS-SOP-HSE-002 — Confined Space Entry SOP.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>TE-IMS-SOP-HSE-003 — Lock-Out Tag-Out SOP.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>TE-IMS-SOP-HSE-004 — Hot Work SOP.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>TE-IMS-PROC-HSE-006 — Incident and Accident Investigation Procedure.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>TE-IMS-PROC-HSE-015 — Risk and Opportunity Procedure.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>TE-IMS-FRM-HSE-009 — Take 5 Hazard Assessment Form.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>TE-IMS-FRM-HSE-022 — Incident and Accident Investigation Report.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>TE-IMS-REG-TRN-001 — Training and Competence Matrix.</span>
              </li>
            </ul>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s5" className="text-lg font-bold" style={{ color: "#081C2E" }}>5. Responsibilities</h2>
            </div>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s6" className="text-lg font-bold" style={{ color: "#081C2E" }}>6. Site Identification and Pre-Mobilization Risk Assessment</h2>
            </div>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Assessment — The Site Manager or Supervisor, Safety Officer, and key employees shall conduct a pre-mobilization risk assessment (JHA) before any equipment is moved to site.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Identify Hazards — Evaluate environmental and safety hazards, including terrain stability, weather patterns, wildlife, dust generation, and proximity to water sources.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Communication — Document all hazards and required controls in the JHA and discuss them thoroughly in a toolbox talk before site set-up begins.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Dynamic Review — Continuously reassess the site if environmental conditions change (heavy rain, high winds, extreme heat, dust storms).</span>
              </li>
            </ul>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s7" className="text-lg font-bold" style={{ color: "#081C2E" }}>7. Take 5 Assessments</h2>
            </div>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Requirement — All employees and the Safety Officer shall complete a formal Take 5 assessment (TE-IMS-FRM-HSE-009) before every shift and immediately after any significant change in operating conditions.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Scope — The Take 5 shall cover site set-up, rig positioning, exclusion zones, planned operations, line-of-fire risks, and weather and terrain factors.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Review — Document the “Take 5” and review key points during the pre-shift briefing.</span>
              </li>
            </ul>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s8" className="text-lg font-bold" style={{ color: "#081C2E" }}>8. Setting Up and Positioning of Rig</h2>
            </div>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Positioning — Move the rig to the allocated position. The Operator shall align the rig strictly to the geological and safety specifications in the Drilling Plan.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Rod Racks — Offsiders must position rod racks at a safe working distance (nominally 2 meters) from the mast for safe, ergonomic handling.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Platform Use — Use the designated platform next to the mast when reaching the water swivel or handling elevated rods.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Working at Height — For any work above 2 meters, a full-body harness and a certified lifeline are strictly required. Refer to the Working at Height controls in the IMS.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Horn Signals — 1 blast: alert personnel of impending start-up. 2 blasts: immediate warning followed by rig start-up. 3 blasts: emergency stop.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Vigilance — Mandatory PPE is required at all times. Personnel shall maintain constant hazard observation for weather, breakdowns, and crew fatigue.</span>
              </li>
            </ul>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s9" className="text-lg font-bold" style={{ color: "#081C2E" }}>9. Exclusion Zone and Barricades</h2>
            </div>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Perimeter — Barricade the active site leaving only one controlled entry point. Hard barriers are preferred; tape and cones are acceptable only where hard barriers are not feasible.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Signage — Post mandatory PPE signs and the Emergency Contact list at the entry point. Post clearly visible signage in Arabic and English stating: “DANGER — Drilling in Progress — NO ENTRY”.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Muster Point — Establish an Emergency Assembly Point a minimum of 50 meters from the rig, upwind where possible.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Exclusion Zone — Establish an exclusion zone around the rig with a minimum radius of 5 meters or the mast height plus 2 meters, whichever is greater. This is an absolute no-go area for visitors and unauthorized personnel.</span>
              </li>
            </ul>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s10" className="text-lg font-bold" style={{ color: "#081C2E" }}>10. Line of Fire and Hands-Off Controls</h2>
            </div>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Identification — Identify and physically mark line-of-fire zones: rotating rods, rod handler paths, winch cable and suspended load zones, and hydraulic pinch points.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Briefing — Review Line-of-Fire hazards during the toolbox talk. Assign a dedicated spotter for any high-risk lifting or maneuvering task.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Equipment State — All controls shall be in neutral or off before start-up. Test all emergency stops daily.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Hands-Off Protocol — Only authorized and trained personnel may touch operating controls. Use remote or mechanically assisted handling wherever possible to keep hands away from rotating or moving parts.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Safe Zones — Personnel must stay out of the machinery swing radius, never stand under suspended loads, and remain clear of tensioned cable paths.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Emergency Intervention — Only trained personnel may access controls for an emergency stop. Evacuation paths shall remain completely clear at all times.</span>
              </li>
            </ul>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s11" className="text-lg font-bold" style={{ color: "#081C2E" }}>11. Steep Terrain Assessment and Controls</h2>
            </div>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Pre-Inspection — Inspect slope angle and direction, ground conditions (loose or wet soils), access paths, and erosion risk. Engage a geotechnical engineer if the risk is deemed high.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Access and Egress — Minimize gradients. Use marked routes, switchbacks, and temporary stairs or ladders as required.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Equipment Stability — Use tracked rigs, 4WD units, and low center-of-gravity trailers. Position equipment perpendicular to the slope. Always deploy outriggers, jacks, wheel chocks, and ground anchors.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Ground Preparation — Level and compact the drill pad. Divert water runoff away from the pad. Use bog mats or retaining structures where needed.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Personnel Safety — Wear aggressive slip-resistant boots. Use fall protection near sheer edges. Maintain three-point contact. Use spotters for all vehicle moves.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Weather Triggers — Stop operations during heavy rain or high winds. Conduct a full re-assessment after any severe weather event before resuming work.</span>
              </li>
            </ul>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s12" className="text-lg font-bold" style={{ color: "#081C2E" }}>12. Stuck Rods Procedure</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Step 1: Immediate Stop — Stop rotation and feed immediately upon feeling unusual resistance or total loss of rotation.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Step 2: Confirm Status — Attempt gentle rotation and pullback. Record the torque gauge reading and the lack of movement.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Step 3: Notify — Notify the Driller-in-Charge and the Supervisor immediately. Log the exact depth, the last operational action taken, and any downhole anomalies observed.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Step 4: Safety Pause — Secure the rig (controls to neutral), evacuate non-essential personnel from the platform, and conduct a specific pre-task risk assessment and toolbox talk.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Step 5: Initial Recovery — Attempt gentle pullback and rotation while pumping or flushing high volumes of fluid or air. Inject approved drilling lubricants and soaps to soak the stuck zone.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Step 6: Advanced Recovery — Perform a back-off at the lowest free joint. Use the correct torquing wrenches. Run approved fishing tools (overshot, spear, or taper tap) as appropriate.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Step 7: Abandonment (Last Resort) — Cut or cement the hole per regulatory and client requirements. Record all details and officially inform the Client or Geologist.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Step 8: Post-Recovery — Thoroughly inspect the recovered rods and fishing tools. Document the root cause, the steps taken, and lessons learned. Update maintenance logs if equipment was stressed.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s13" className="text-lg font-bold" style={{ color: "#081C2E" }}>13. Splicing and Repairing Wireline</h2>
            </div>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Equipment Required — Approved splice connectors, swaging tools and grips, a secure vise, emery cloth, sharp cutters, wireline lubricant and corrosion inhibitor, and full PPE.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Isolation — Stop and isolate the rig (LOTO if required per TE-IMS-SOP-HSE-003). Clear the area and ensure all controls are in neutral.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Preparation — Inspect the wireline for damage (frays, kinks, corrosion). Cut the line back to a clean, undamaged section and clean the wire ends.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Splicing — Fit the approved connector. Swage or crimp evenly, using a multi-stage process where required by the manufacturer. Visually inspect the crimp, conduct a static pull test, and apply lubricant.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Resuming Operations — Spool the wireline slowly. Apply light initial loads and closely monitor the splice as it takes tension.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Documentation — Record the date, hole depth, reason for repair, and splice type. Tag the wireline near the winch if needed for future monitoring.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Preventive Maintenance — Conduct regular visual inspections, avoid over-tensioning or kinking the wireline during core retrieval, and re-lubricate frequently.</span>
              </li>
            </ul>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s14" className="text-lg font-bold" style={{ color: "#081C2E" }}>14. Pre-Start Checks</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>The Operator shall complete a documented pre-start checklist before the first start-up of each shift.</p>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Red-Item Hierarchy — Any deficiency marked as a "Red Item" (faulty emergency stops, heavy hydraulic leaks, missing machine guards, compromised fire extinguishers) constitutes a No-Go. The rig cannot be started until the issue is rectified and signed off.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Checks shall include — emergency stops; lighting (especially for night operations); hydraulic lines; wireline condition; winch condition; fuel and lubricants; fire extinguishers; first aid; communications; and PPE readiness.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>The completed pre-start check shall be signed by the Operator and counter-signed by the Drilling Supervisor before work commences.</span>
              </li>
            </ul>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s15" className="text-lg font-bold" style={{ color: "#081C2E" }}>15. Required Personal Protective Equipment</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>All PPE shall be inspected before use and worn at all times while on the active site.</p>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Hard hat compliant with ANSI Z89.1 or equivalent.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Hearing protection — ear plugs or earmuffs rated for the noise level at the rig.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Steel-toe safety boots with aggressive tread suited to the terrain.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Safety glasses — dark or tinted for day shift, clear for night shift.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Full-body safety harness plus lifeline — strictly enforced for any work at height ≥2 meters.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>High-visibility or reflective overalls.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Task-specific gloves — impact gloves for rod handling, nitrile for chemical or mud handling.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Respiratory protection where dust exposure or H₂S risk is identified.</span>
              </li>
            </ul>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s16" className="text-lg font-bold" style={{ color: "#081C2E" }}>16. Training and Competence</h2>
            </div>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Initial Training — Must cover drilling-specific hazards and controls, Take 5 protocols, LOTO integration, stuck rod recovery, wireline splicing, and steep-terrain safety.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Refresher Training — Conducted annually and immediately after any significant incident.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Records — All training records shall be signed and retained in the IMS for a minimum of 5 years (recorded in TE-IMS-REG-TRN-001).</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Competence Verification — No person shall operate a rig or perform stuck rod recovery or wireline splicing without documented competence.</span>
              </li>
            </ul>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s17" className="text-lg font-bold" style={{ color: "#081C2E" }}>17. Monitoring, Audit and Continual Improvement</h2>
            </div>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Audits — HSE shall conduct monthly audits covering pre-start checks, exclusion zone enforcement, PPE compliance, and incident logs.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>KPIs monitored — percentage of Take 5 completion before tasks, number of stuck rod events, percentage of pre-start checks completed, and training completion rates.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Review — This SOP shall be reviewed annually or immediately following any significant incident or regulatory change.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>IMS Integration — Data shall feed directly into the Monthly HSE Report and the site Risk Register.</span>
              </li>
            </ul>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s18" className="text-lg font-bold" style={{ color: "#081C2E" }}>18. Records and Retention</h2>
            </div>

            {/* Tables from document */}

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#081C2E" }}>
                <th key="0" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>Term</th>
                <th key="1" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>Definition</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>JHA</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Job Hazard Analysis — documented assessment of task hazards and controls.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>LOTO</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Lock-Out Tag-Out — isolation of hazardous energy during maintenance.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Line-of-Fire</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Any zone where a person could be struck, crushed, pinched, or ejected by moving parts, stored energy, or falling objects.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Take 5</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>A structured five-step pre-task personal hazard assessment.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Offsider</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>A drilling assistant working on the rig platform supporting the driller.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Stuck Rod</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>A drill string that can no longer be rotated or withdrawn due to formation, mud, or mechanical cause.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Wireline</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>The cable system used to retrieve the inner tube core barrel from the drill string.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Fishing Tool</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Specialist downhole tool used to recover a stuck or broken string (overshot, spear, tap).</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>WBGT</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Wet Bulb Globe Temperature — the index used to assess heat stress exposure.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>SWA</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Stop Work Authority — any person may halt work when a safety or environmental risk is identified.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#081C2E" }}>
                <th key="0" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>Role</th>
                <th key="1" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>Responsibilities</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Site Manager / Supervisor</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Leads site risk assessments and toolbox talks. Dictates rig positioning. Enforces exclusion zones and PPE rules. Oversees pre-start checks. Has authority to stop work for any unsafe condition.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Drilling Operator</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Conducts pre-start checks. Operates the rig safely. Sounds like mandatory horn signals. Actively monitors for stuck rods and changing hazards. Stops rotation and feed immediately upon any abnormal condition.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Offsiders / Crew</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Handle rods and use the work platform safely. Wear mandatory PPE and harnesses. Perform Take 5 assessments. Assist in rod recovery and wireline splicing.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>HSE / Safety Officer</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Facilitates risk assessments and Take 5s. Audits field compliance. Trains personnel. Investigates incidents and near misses.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Drilling Supervisor / Rig Manager</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Plans daily operations. Enforces fatigue, heat stress, and competency controls. Authorizes stuck rod recovery plans and wireline splicing tasks.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>All Personnel</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Report hazards or changing conditions immediately. Maintain constant vigilance. Never bypass safety controls. Exercise Stop Work Authority where required.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#081C2E" }}>
                <th key="0" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>Record</th>
                <th key="1" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>Retention</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Pre-mobilization JHA</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Minimum 5 years.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Daily pre-start checklists</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Minimum 3 years.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Take 5 records</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Minimum 3 years.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Toolbox talk records</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Minimum 3 years.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Stuck rod event reports</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Minimum 10 years.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Wireline splice log</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Minimum 5 years.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Training records</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Duration of employment plus 5 years.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Monthly HSE audit reports</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Minimum 5 years.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#081C2E" }}>
                <th key="0" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>Role</th>
                <th key="1" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>Name</th>
                <th key="2" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>Signature</th>
                <th key="3" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>Date</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Prepared by (IMS Lead)</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}></td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}></td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}></td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Reviewed by (HSE / Ops Manager)</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}></td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}></td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}></td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Approved by (CEO / MD)</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}></td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}></td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}></td>
                </tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#081C2E" }}>
                <th key="0" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>Rev</th>
                <th key="1" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>Date</th>
                <th key="2" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>Description of Changes</th>
                <th key="3" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>Author</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>00</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>01 Mar 2026</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Initial release — Approved for Implementation.</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Joao Melo</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>01</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>10 Apr 2026</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Reformatted to True East IMS design standard. Added Definitions, References, and Records & Retention sections. Expanded exclusion zone rule (5 m or mast height + 2 m). Added H₂S respiratory PPE. Cross-references updated to current IMS coding. Preserved all original operational content.</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>IMS Project Lead</td>
                </tr>
                </tbody>
              </table>
            </div>

            {/* Approval Block */}
            <div className="mt-8 pt-4" style={{ borderTop: "2px solid #C49A28" }}>
              <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#8a9ab0" }}>Approval</div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ backgroundColor: "#081C2E" }}>
                      {["Role", "Name", "Date"].map((h) => (
                        <th key={h} className="px-4 py-3 text-left text-xs font-bold" style={{ color: "#ffffff" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Prepared by (IMS Lead)", "IMS Project Lead", "10 Apr 2026"],
                      ["Reviewed by (HSE / Ops Manager)", "HSE / Operations Manager", "10 Apr 2026"],
                      ["Approved by (COO)", "Joao de Melo, Chief Operating Officer", "10 Apr 2026"],
                    ].map(([role, name, date], i) => (
                      <tr key={role} style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                        <td className="px-4 py-3 text-sm font-semibold" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec" }}>{role}</td>
                        <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec" }}>{name}</td>
                        <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec" }}>{date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
