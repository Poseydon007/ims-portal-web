// TE-IMS-SOP-OPS-002 Rev01 — Night Shift Drilling SOP
// Content extracted verbatim from approved DOCX. Design and format only.
import { Link } from "wouter";
import { TopNav, Footer, Breadcrumb } from "@/components/Layout";
import { LOGO_WHITE } from "@/lib/imsData";

export default function SOP_OPS_002() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb items={[
        { label: "SOP — Standard Operating Procedures", href: "/docs/sop" },
        { label: "Night Shift Drilling SOP" },
      ]} />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>Night Shift Drilling SOP</h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-SOP-OPS-002_Rev01</span>
              <span style={{ color: "#c0c8d4" }}>·</span>
              <span className="text-xs" style={{ color: "#6b7a8d" }}>10 Apr 2026</span>
              <span style={{ color: "#c0c8d4" }}>·</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: "#d4edda", color: "#155724" }}>✓ Approved for Implementation</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/docs/sop" className="text-xs font-semibold px-3 py-1.5 rounded border hover:bg-gray-50 transition-colors" style={{ borderColor: "#dde3ec", color: "#081C2E" }}>← Back to SOPs</Link>
            <button onClick={() => window.print()} className="text-xs font-semibold px-3 py-1.5 rounded border hover:bg-gray-50 transition-colors" style={{ borderColor: "#dde3ec", color: "#081C2E" }}>⎙ Print</button>
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
                ["Code", "TE-IMS-SOP-OPS-002"],
                ["Revision", "Rev01"],
                ["Date", "10 Apr 2026"],
                ["Status", "✓ Approved"],
                ["Category", "SOP"],
                ["Scope", "All True East Mining night shift diamond drilling operations"],
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
              <a key="6" href="#s6" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>6. Lighting Requirements</a>
              <a key="7" href="#s7" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>7. Worker Visibility and Night-Specific PPE</a>
              <a key="8" href="#s8" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>8. Fatigue Management</a>
              <a key="9" href="#s9" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>9. Hazard Awareness and Controls</a>
              <a key="10" href="#s10" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>10. Pre-Shift Equipment and Lighting Checks</a>
              <a key="11" href="#s11" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>11. Shift Handover — Day to Night and Night to Day</a>
              <a key="12" href="#s12" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>12. Training and Competence</a>
              <a key="13" href="#s13" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>13. Monitoring, Audit and Continual Improvement</a>
              <a key="14" href="#s14" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>14. Records and Retention</a>
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
              <h1 className="text-white text-2xl font-extrabold leading-tight tracking-tight mb-2">Night Shift Drilling SOP</h1>
              <div className="flex flex-wrap gap-2 mt-3">
                {[["Doc No", "TE-IMS-SOP-OPS-002"], ["Rev", "Rev01"], ["Date", "10 Apr 2026"], ["Status", "Approved for Implementation"]].map(([label, val]) => (
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

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>To establish the minimum controls for managing additional risks associated with diamond drilling operations during hours of darkness or low natural light. This SOP addresses illumination, fatigue mitigation, worker visibility, and hazard awareness, ensuring that night-shift drilling can be executed safely and efficiently.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This SOP complies with ISO 45001:2018, Saudi Labor Law, and MHRSD occupational safety regulations. It sits beneath TE-IMS-PROC-OPS-001 Drilling Operations Control Procedure and complements TE-IMS-SOP-OPS-001 Diamond Drilling Operation SOP.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s2" className="text-lg font-bold" style={{ color: "#081C2E" }}>2. Scope</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This SOP applies to all True East Mining diamond drilling operations — exploration, production, and remote desert sites — conducted between official sunset and sunrise, or whenever natural light is insufficient to meet the defined minimum illumination levels.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>It covers drill crews, supervisors, support personnel, contractors, and visitors present on site during night operations.</p>

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
                <span>ISO 45001:2018 — clauses 6.1.2 (Hazard identification), 8.1.2 (Operational controls), 8.2 (Emergency preparedness).</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>ISO 20471 — High-visibility warning clothing.</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Saudi regulatory:</p>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Saudi Labor Law — Articles 98 and 101 on maximum working hours and rest periods.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>MHRSD Occupational Safety and Health Management Regulation.</span>
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
                <span>TE-IMS-SOP-OPS-001 — Diamond Drilling Operation SOP.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>TE-IMS-PROC-HSE-001 — Fatigue Management Procedure.</span>
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
              <h2 id="s6" className="text-lg font-bold" style={{ color: "#081C2E" }}>6. Lighting Requirements</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>All active work areas shall be sufficiently illuminated to ensure safe operations, hazard detection, and equipment control. Lighting shall be arranged to avoid glare, dangerous shadows on moving or rotating parts, and direct eye exposure.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Minimum illuminance levels (measured with a calibrated lux meter):</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Additional controls:</p>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Use IP-rated (dust and water resistant) and explosion-proof lighting near flammable materials, heavy dust, or fluids.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>LED floodlights and high-lumen lamps are preferred — energy efficient, low heat, and long service life.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Verify levels after initial setup and after any equipment repositioning. Re-measure whenever glare or shadow complaints are received.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Provide emergency backup: battery-powered or solar-powered lights for blackouts or generator failure. Test monthly.</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Illumination setup locations:</p>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Drill rig mast and operator cabin.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Rod handling and core logging areas.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Pump, fluid mixing, and water handling zones.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Access paths, fire extinguisher and first-aid kit locations, and emergency muster points.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Portable battery-operated lights and helmet-mounted headlamps shall be available for inspections, shadowed zones, and confined areas.</span>
              </li>
            </ul>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s7" className="text-lg font-bold" style={{ color: "#081C2E" }}>7. Worker Visibility and Night-Specific PPE</h2>
            </div>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>All personnel shall wear high-visibility reflective overalls (ISO 20471 Class 3 or equivalent) with reflective strips visible from all angles.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Clear safety glasses shall be worn to maintain night vision. Tinted glasses are not permitted at night.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Functional headlamps or helmet-mounted lights shall be issued to every crew member for personal use in low-light zones.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Vehicles and equipment shall be fitted with enhanced headlights, taillights, rotating beacons, and hazard lights. Reversing alarms shall be audible above the rig noise.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Spare batteries for headlamps and portable lights shall be stocked on site at all times.</span>
              </li>
            </ul>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s8" className="text-lg font-bold" style={{ color: "#081C2E" }}>8. Fatigue Management</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Night operations require active management of fatigue caused by circadian disruption, extended shifts, and the residual heat of Saudi nights during summer:</p>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Maximum shift duration: 12 hours, with scheduled rest breaks every 4 hours minimum. Shift length shall comply with Saudi Labor Law.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Provide cool, shaded rest areas — fans or air conditioning where required — with hydration stations stocked with cold potable water.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Alternate crew rotations to limit consecutive night shifts — maximum 4 to 5 consecutive nights before mandatory day recovery.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Pre-shift fatigue screening shall be conducted using a simple questionnaire (sleep quality, tiredness scale, alertness self-report).</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Encourage adequate pre-shift sleep, proper nutrition, and hydration. Accommodation arrangements shall support daytime sleep (dark, quiet, cool).</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Supervisors shall watch for signs of fatigue — slow reactions, errors, drowsiness, irritability — and remove affected personnel from safety-critical tasks.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Refer to TE-IMS-PROC-HSE-001 Fatigue Management Procedure. Report excessive fatigue to the Night Shift Supervisor and HSE immediately.</span>
              </li>
            </ul>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s9" className="text-lg font-bold" style={{ color: "#081C2E" }}>9. Hazard Awareness and Controls</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Conduct a pre-shift toolbox talk and Take 5 risk assessment focused on night-specific risks:</p>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Reduced visibility — glare, shadows, poorly defined equipment edges.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Increased wildlife movement — snakes, scorpions, and other nocturnal fauna active in the desert. Secure all food and waste away from work areas.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Trip hazards — hoses, cables, uneven terrain, temporary barricades.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Decreased human awareness — slower reactions, poorer depth perception, increased error rate.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Reconfirm line-of-fire zones. Maintain clear radio communication with the rig operator at all times.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>No lone working in high-risk areas. Buddy system mandatory for any task outside the rig lighting envelope.</span>
              </li>
            </ul>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s10" className="text-lg font-bold" style={{ color: "#081C2E" }}>10. Pre-Shift Equipment and Lighting Checks</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Before the shift starts, the Driller and Supervisor shall inspect:</p>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>All fixed and portable lights — coverage, brightness, and absence of failures.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Emergency stop switches — illuminated and accessible.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Rig and vehicle headlights, taillights, and hazard beacons.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Visibility and condition of fire extinguishers, first aid kits, and spill kits.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Generator status and fuel level for lighting load.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Emergency muster point lighting and signage.</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>All checks shall be documented on the pre-shift check log and signed. Any deficiency shall be corrected before operations begin.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s11" className="text-lg font-bold" style={{ color: "#081C2E" }}>11. Shift Handover — Day to Night and Night to Day</h2>
            </div>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Conduct a face-to-face handover between outgoing and incoming shift supervisors. The outgoing shift shall remain until the incoming shift is fully briefed.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Review the status of each hole, equipment condition, outstanding maintenance, open hazards, and any incidents from the preceding shift.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Complete a written handover entry in the rig logbook signed by both supervisors.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Any active permits (hot work, confined space, LOTO) shall be formally transferred and re-confirmed before work continues.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>The Night Shift Supervisor shall have direct radio or phone access to the Drilling Superintendent and HSE Manager at all times.</span>
              </li>
            </ul>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s12" className="text-lg font-bold" style={{ color: "#081C2E" }}>12. Training and Competence</h2>
            </div>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Initial training shall cover night operation risks, lighting setup, fatigue recognition, wildlife awareness, and visibility and PPE requirements.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Refresher training is mandatory annually and immediately after any significant incident.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>No person shall work night shift without documented training and the physical fitness to perform night work.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Records shall be retained in TE-IMS-REG-TRN-001 for a minimum of 5 years.</span>
              </li>
            </ul>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s13" className="text-lg font-bold" style={{ color: "#081C2E" }}>13. Monitoring, Audit and Continual Improvement</h2>
            </div>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>HSE shall conduct monthly audits of night shifts including lighting measurements, fatigue reports, compliance checks, and observation of toolbox talks.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>KPIs — percentage of shifts with full lighting compliance, number of fatigue-related near misses, training completion, and percentage of handover logbook entries completed.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>This SOP shall be reviewed annually, after any significant incident, or following any relevant regulatory change.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Findings shall feed into the Monthly HSE Report and the site Risk Register.</span>
              </li>
            </ul>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s14" className="text-lg font-bold" style={{ color: "#081C2E" }}>14. Records and Retention</h2>
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
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Night Shift</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Any work shift executed between official sunset and sunrise, or any period where natural light is below the minimum lux levels defined in Section 6.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Lux</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>The SI unit of illuminance — one lumen per square metre.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Lux Meter</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>A calibrated light meter used to verify illuminance levels at a work location.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Circadian Disruption</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Interference with the body's natural sleep/wake cycle caused by working during night hours.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>IP Rating</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Ingress Protection rating indicating resistance to dust and water (e.g., IP65, IP67).</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Hi-Vis</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>High-visibility reflective clothing compliant with ISO 20471 Class 3.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Take 5</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>A structured five-step pre-task personal hazard assessment.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>JHA</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Job Hazard Analysis — documented assessment of task hazards and controls.</td>
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
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Operations Director / Site Senior Executive</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Overall accountability for night operations. Ensures adequate resources — lighting, rest facilities, fatigue controls. Reviews fatigue-related incidents and trends.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Night Shift Supervisor</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Accountable for all night shift activities. Implements controls, conducts pre-shift checks, monitors crew fatigue, leads toolbox talks, and verifies lighting and visibility before work starts.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Drilling Supervisor / Rig Manager</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Plans night operations. Enforces fatigue and competency controls. Liaises with day shift for formal handover. Authorises any deviation or work stoppage.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Drillers and Crew</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Comply with PPE and visibility requirements. Report fatigue signs, lighting failures, and hazards immediately. Use provided lighting and emergency equipment correctly.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>HSE / Safety Officer</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Audits compliance. Provides training. Monitors illuminance measurements and fatigue indicators. Investigates night-shift incidents and near misses.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>All Personnel</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Report fatigue signs, hazards, or lighting issues immediately. Exercise Stop Work Authority if conditions are unsafe.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#081C2E" }}>
                <th key="0" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>Area</th>
                <th key="1" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>Minimum Illuminance</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Drill rig operating area — mast, operator cabin, rod handling zone</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>540 lux</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>General working area and walkways</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>215 lux</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Storage areas, safety signage zones, and access paths</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>110 lux</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Emergency muster point</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>110 lux</td>
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
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Pre-shift lighting and equipment check log</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Minimum 3 years.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Pre-shift fatigue screening records</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Minimum 3 years.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Night shift handover logbook</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Minimum 3 years.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Lux meter calibration and measurement records</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Minimum 3 years.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Night shift incident and near miss reports</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Minimum 10 years.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Training and competence records</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Duration of employment plus 5 years.</td>
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
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Reformatted to True East IMS design standard. Added Definitions, Records & Retention, and formal Shift Handover sections. Lux table converted to structured form. Cross-references aligned with current IMS coding. Preserved all original operational content.</td>
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
