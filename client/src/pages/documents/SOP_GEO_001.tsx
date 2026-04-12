// TE-IMS-SOP-GEO-001 Rev01 — Core Cutting and Handling SOP
// Content extracted verbatim from approved DOCX. Design and format only.
import { Link } from "wouter";
import { TopNav, Footer, Breadcrumb } from "@/components/Layout";
import { LOGO_WHITE } from "@/lib/imsData";

export default function SOP_GEO_001() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb items={[
        { label: "SOP — Standard Operating Procedures", href: "/docs/sop" },
        { label: "Core Cutting and Handling SOP" },
      ]} />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>Core Cutting and Handling SOP</h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-SOP-GEO-001_Rev01</span>
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
                ["Code", "TE-IMS-SOP-GEO-001"],
                ["Revision", "Rev01"],
                ["Date", "10 Apr 2026"],
                ["Status", "✓ Approved"],
                ["Category", "SOP"],
                ["Scope", "All True East Mining core handling, cutting, and storage operations"],
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
              <a key="6" href="#s6" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>6. Training and Authorisation</a>
              <a key="7" href="#s7" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>7. Personal Protective Equipment</a>
              <a key="8" href="#s8" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>8. Equipment and Materials</a>
              <a key="9" href="#s9" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>9. Core Retrieval, Handling and Transportation</a>
              <a key="10" href="#s10" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>10. Safe Core Cutting Operation</a>
              <a key="11" href="#s11" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>11. Quality Control, Verification and Chain of Custody</a>
              <a key="12" href="#s12" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>12. Safety and Environmental Considerations</a>
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
              <h1 className="text-white text-2xl font-extrabold leading-tight tracking-tight mb-2">Core Cutting and Handling SOP</h1>
              <div className="flex flex-wrap gap-2 mt-3">
                {[["Doc No", "TE-IMS-SOP-GEO-001"], ["Rev", "Rev01"], ["Date", "10 Apr 2026"], ["Status", "Approved for Implementation"]].map(([label, val]) => (
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

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>To outline a safe, efficient, and compliant procedure for the retrieval, transportation, handling, cutting, and initial sampling of diamond drill core. This SOP ensures core integrity, accurate geological data, a strict chain of custody, full traceability, and complete adherence to safety and environmental standards during exploration drilling operations.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This SOP sits beneath TE-IMS-PROC-OPS-001 Drilling Operations Control Procedure and complements TE-IMS-SOP-OPS-001 Diamond Drilling Operation SOP.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s2" className="text-lg font-bold" style={{ color: "#081C2E" }}>2. Scope</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This SOP applies to all True East Mining personnel and contractors involved in core extraction, handling, transport, cutting, and initial sampling during diamond drilling exploration activities in the Kingdom of Saudi Arabia. It covers:</p>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Drillers and drilling crew working on rigs.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Geologists and core technicians.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Logistics and transport personnel.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Site supervisors and HSE personnel.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Open-pit, remote, and desert operating environments.</span>
              </li>
            </ul>

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
                <span>ISO 45001:2018 — clauses 6.1.2 (Hazard identification) and 8.1.2 (Operational controls).</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>ISO 14001:2015 — clause 8.1 (Operational planning and control).</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>ISO 9001:2015 — clause 7.5 (Documented information, chain of custody).</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Saudi regulatory:</p>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>MHRSD Occupational Safety and Health Management Regulation.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>NCEC environmental guidelines for dust, waste, and water management.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Saudi Labor Law — rest periods and working hours.</span>
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
                <span>TE-IMS-SOP-HSE-003 — Lock-Out Tag-Out SOP.</span>
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
              <h2 id="s6" className="text-lg font-bold" style={{ color: "#081C2E" }}>6. Training and Authorisation</h2>
            </div>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Only trained and authorised personnel may operate core saws or handle critical sampling steps.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Training content shall include equipment operation, emergency procedures, safe manual handling, dust suppression, core orientation and logging, and ISO-aligned safe practices.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Signed attendance records and annual refresher certificates shall be retained in TE-IMS-REG-TRN-001 for a minimum of 5 years.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>A visible list of authorised core saw operators shall be posted in the core shed.</span>
              </li>
            </ul>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s7" className="text-lg font-bold" style={{ color: "#081C2E" }}>7. Personal Protective Equipment</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>All mandatory PPE shall be inspected prior to every use.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Standard minimum PPE:</p>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Safety glasses or full-face shield.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Cut-resistant, non-slip gloves.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Hearing protection — ear plugs or earmuffs.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Steel-toe safety boots.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Flame-resistant (FR) overalls or coveralls.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Hard hat and high-visibility vest for active site and transport operations.</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Task-specific PPE:</p>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Dust mask or respirator — minimum FFP2 is required for any dry cutting or operations in poorly ventilated areas. P3 is required if silica exposure is confirmed.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Fall protection — harness and lifeline required for any work at height during vehicle loading or stacking.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Chemical-resistant gloves for handling drilling fluids or marking solvents.</span>
              </li>
            </ul>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s8" className="text-lg font-bold" style={{ color: "#081C2E" }}>8. Equipment and Materials</h2>
            </div>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Core boxes — clearly labelled and sized correctly for the core diameter.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Core blocks and spacers for depth intervals.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Permanent markers, labels, and strapping tape.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Measuring tape and depth counter.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Cleaning tools — water sprayers and soft brushes.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Core saw — diamond blade with integrated wet-cutting system.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Transport vehicle — 4×4 or ATV equipped with secure racks and straps.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>GPS and digital logging devices or tablets.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Vice or core holder, sticky tape, and chisel or spatula for friable or broken core.</span>
              </li>
            </ul>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s9" className="text-lg font-bold" style={{ color: "#081C2E" }}>9. Core Retrieval, Handling and Transportation</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>9.1 Extraction and Initial Handling at the Drill Site</p>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Extract the core carefully from the inner tube using core lifters to avoid unnecessary breakage.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Handle fragile or unconsolidated core with padding or foam support.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Place the core sequentially into clean core boxes — top left to right, in rows. Orient the top of the hole to the left, or follow the site convention.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Insert labelled core blocks at the end of each run or interval. Each block shall record the Hole ID, depth from-to, run number, date, and shift.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Note any core loss explicitly using blank blocks or spacers.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Gently wash the core where necessary to reveal structure. Minimise washing for water-sensitive cores such as clays.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Record the Hole ID, depth interval, recovery percentage, box number, and observations (fractures, water loss, oxidation). Take high-quality photographs with depth markers clearly visible.</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>9.2 Core Box Closure and Preparation</p>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Secure the core inside the box using padding, foam, or internal straps to prevent shifting during transport.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Label the box exterior clearly — Hole ID, Box number (e.g., "Box 1 of 5"), depth range, project name, and date.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Stack boxes in strict sequence, shallow to deep. Limit stacking height to avoid crushing lower boxes or creating a toppling hazard.</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>9.3 Transport to Core Shed</p>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Use a suitable transport vehicle with a clean, flat cargo area.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Secure the boxes tightly with racks, straps, and tarps to protect the core from rain, dust, and extreme heat.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Drive safely according to road conditions. Avoid sudden stops or severe bumps. Follow all site speed limits.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Complete the Transport Log — box count, Hole ID and depth, destination, driver and vehicle details, and departure and arrival times.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Maintain strict security. Boxes shall not be left unattended. Use lockable transport for high-value intersections.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Unload carefully using proper lifting techniques. Verify the count and condition upon arrival. Report any damage immediately.</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>9.4 Storage at the Core Shed</p>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Organise boxes sequentially by Hole ID, Box number, and depth.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Store on dedicated racks or pallets — keep off the ground, in a dry and secure area.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Update the digital inventory log (receipt date, location, condition).</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Maintain the chain of custody using counter-signed physical logs or digital sign-off.</span>
              </li>
            </ul>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s10" className="text-lg font-bold" style={{ color: "#081C2E" }}>10. Safe Core Cutting Operation</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>10.1 Pre-Cutting Preparation</p>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Conduct a specific JSA / JHA for the cutting task (ISO 45001 clause 6.1.2).</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Inspect the saw — the diamond blade shall be sharp, guards shall be secure, water supply shall be functional, emergency stop shall be working, lighting shall be sufficient, and the floor shall be non-slip.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Marking — Geologists shall mark cut lines along the core, cutting through the low points of features or veins and prioritising mineralisation over joints and faults.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Mark sampling intervals clearly on both the core and the box to avoid orientation errors.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Bind broken or highly fractured core with tape for stability before cutting, especially rubble or clay zones.</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>10.2 Cutting Process</p>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Use a vice or core holder. Never cut core freehand.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Wet cutting is mandatory. Water cools the blade, suppresses hazardous silica dust, and reduces slip from slurry.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Feed the core into the blade slowly and steadily. Do not force or jam the rock.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Cut along the marked centre line into two equal halves. Change the blade regularly to maintain cutting accuracy.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>For friable or rubble core, use a chisel or spatula to manually halve the rubble. Only cut the competent pieces with the saw.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Cut the core transversely first at the perpendicular sample meter marks.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Place the cut halves carefully into the box. Ensure orientation ticks point toward the bottom of the hole.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>No lone working. Always communicate with a partner in the core shed.</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>10.3 Prohibited Actions</p>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Do not cut metal, plastic, or any other non-rock material with the core saw.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Do not adjust, clear jams, or clean the saw while the blade is rotating.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Do not operate the saw without full mandatory PPE or if any machine guard is missing.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Do not bypass the water supply or emergency stop under any circumstances.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Do not operate the saw while fatigued, under the influence of alcohol or drugs, or on any medication that impairs alertness.</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>10.4 Post-Operation</p>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Turn off the saw and wait for the blade to come to a complete stop before any intervention.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Clean — remove rock chips and slurry immediately to prevent slip hazards.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Inspect the blade and machine for any signs of damage or extreme wear.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Store all tools and PPE properly in their designated locations.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Isolate the saw using LOTO per TE-IMS-SOP-HSE-003 before any maintenance work.</span>
              </li>
            </ul>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s11" className="text-lg font-bold" style={{ color: "#081C2E" }}>11. Quality Control, Verification and Chain of Custody</h2>
            </div>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Geologist verification — the Geologist shall physically verify the labelling, sequence, and overall integrity of the core.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Any issues — mislabels, core loss, dropped boxes — shall be noted and reported to the Site Supervisor immediately.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Maintain a signed or digital chain of custody at every transition stage: Rig → Transport → Core Shed → Cutting → Laboratory.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Conduct periodic audits of logs, core photos, and physical storage.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Any break in the chain of custody shall trigger an investigation and shall be reported on TE-IMS-FRM-HSE-022 as an operational non-conformance.</span>
              </li>
            </ul>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s12" className="text-lg font-bold" style={{ color: "#081C2E" }}>12. Safety and Environmental Considerations</h2>
            </div>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Ergonomics — use proper lifting techniques. Wet core boxes are heavy. Utilise team lifting or mechanical assistance where possible.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Biological hazards — always check for scorpions, snakes, and other reptiles under pallets and core boxes in desert environments.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Environmental — minimise water usage during washing and cutting. Dispose of rock slurry strictly per NCEC environmental regulations and the site waste plan.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Silica exposure — silica from dry core cutting is a serious respiratory hazard. Wet cutting, local exhaust, and FFP2 or P3 respirators are mandatory.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Heat stress — maintain high awareness of heat stress in the KSA climate. Provide shaded cutting areas and ensure constant hydration.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>IMS integration — any core handling accident or near miss shall be reported via the IMS Incident Reporting system and included in the Monthly HSE Report.</span>
              </li>
            </ul>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s13" className="text-lg font-bold" style={{ color: "#081C2E" }}>13. Monitoring, Audit and Continual Improvement</h2>
            </div>

            <ul className="mb-4 space-y-1">
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Conduct monthly audits of transport logs, PPE compliance, saw equipment, and storage facilities.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>KPIs monitored — percentage core recovery accuracy, number of handling incidents and near misses, training completion rates, and chain-of-custody break events.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Review this SOP annually, or immediately following any significant incident or regulatory change.</span>
              </li>
              <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0, marginTop: "2px" }}>•</span>
                <span>Findings shall feed into the Monthly HSE Report and any relevant risk register updates.</span>
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
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Diamond Core</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>A cylindrical rock sample extracted via a diamond-impregnated drill bit.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Core Box</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>A standardised container (wood, plastic, or metal) used for sequential storage of core samples.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Chain of Custody</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>The documented tracking of core from extraction through storage, sampling, and transfer to the laboratory — to prevent tampering, contamination, or loss.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Core Lifter</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>A mechanical device used to retain and retrieve core from the inner tube of the core barrel.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Core Block</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>A labelled wooden or plastic insert placed in the core box to mark the end of a run or interval.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Recovery Percentage</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>The ratio of recovered core length to drilled interval length, expressed as a percentage.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>JSA / JHA</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Job Safety Analysis / Job Hazard Analysis — documented assessment of task hazards and controls.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Friable Core</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Core that is soft, broken, or easily crumbled and requires special handling.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>FFP2</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Filtering Face Piece Class 2 — the minimum respirator class for protection against fine dust and silica.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>NCEC</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>National Center for Environmental Compliance, Saudi Arabia.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>MHRSD</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Ministry of Human Resources and Social Development, Saudi Arabia.</td>
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
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Drillers</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Extract core safely, place it accurately in core boxes, and complete initial documentation and depth blocks.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Geologists / Core Technicians</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Verify core integrity, log geological details, mark cutting and sampling lines, and conduct quality checks.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Logistics / Transport Team</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Ensure secure transport, complete transport logs, and prevent physical damage during transit.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Site Supervisor</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Oversee overall compliance. Verify PPE and training. Approve transport of high-value core intersections.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>HSE / Safety Officer</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Audit the process. Monitor dust, noise, and ergonomic risks. Investigate and report safety or environmental deviations.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Core Shed Supervisor</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Operational accountability for the core cutting and storage facility. Enforces saw safety, housekeeping, and chain of custody.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>All Personnel</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Strictly follow PPE requirements, report hazards immediately, and maintain the chain of custody.</td>
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
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Core box labels and content records</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Duration of project plus 7 years.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Transport logs</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Minimum 5 years.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Chain of custody records</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Duration of project plus 10 years.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Core photographs</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Duration of project plus 10 years.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Pre-cutting JSA / JHA records</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Minimum 5 years.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Saw inspection and maintenance logs</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Minimum 5 years.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Training and competence records</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Duration of employment plus 5 years.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Monthly audit reports</td>
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
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Reformatted to True East IMS design standard. Added Definitions (expanded), References, Records & Retention sections. Added silica exposure, LOTO, and expanded prohibited actions. Cross-references aligned with current IMS coding. Preserved all original operational content.</td>
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
