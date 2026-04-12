// TE-IMS-SOP-MAINT-002 Rev01 — Refueling and Fuel Handling SOP
// Content extracted verbatim from approved DOCX. Design and format only.
import { Link } from "wouter";
import { TopNav, Footer, Breadcrumb } from "@/components/Layout";
import { LOGO_WHITE } from "@/lib/imsData";

export default function SOP_MAINT_002() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb items={[
        { label: "SOP — Standard Operating Procedures", href: "/docs/sop" },
        { label: "Refueling and Fuel Handling SOP" },
      ]} />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>Refueling and Fuel Handling SOP</h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-SOP-MAINT-002_Rev01</span>
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
                ["Code", "TE-IMS-SOP-MAINT-002"],
                ["Revision", "Rev01"],
                ["Date", "10 Apr 2026"],
                ["Status", "✓ Approved"],
                ["Category", "SOP"],
                ["Scope", "All True East Mining fuel handling and refueling operations"],
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
              <a key="3" href="#s3" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>3. Definitions</a>
              <a key="4" href="#s4" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>4. Responsibilities</a>
              <a key="5" href="#s5" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>5. Pre-Refueling Preparation</a>
              <a key="6" href="#s6" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>6. Safe Refueling Steps</a>
              <a key="7" href="#s7" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>7. Spill Response</a>
              <a key="8" href="#s8" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>8. Post-Refueling</a>
              <a key="9" href="#s9" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>9. Personal Protective Equipment</a>
              <a key="10" href="#s10" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>10. Training and Awareness</a>
              <a key="11" href="#s11" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>11. Monitoring and Continual Improvement</a>
              <a key="12" href="#s12" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>12. Performance Indicators</a>
              <a key="13" href="#s13" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>13. References</a>
              <a key="14" href="#s14" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>14. Related Documents and Records</a>
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
              <h1 className="text-white text-2xl font-extrabold leading-tight tracking-tight mb-2">Refueling and Fuel Handling SOP</h1>
              <div className="flex flex-wrap gap-2 mt-3">
                {[["Doc No", "TE-IMS-SOP-MAINT-002"], ["Rev", "Rev01"], ["Date", "10 Apr 2026"], ["Status", "Approved for Implementation"]].map(([label, val]) => (
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

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This SOP establishes safe, standardised procedures for refueling equipment and refilling bulk fuel storage at True East Mining Company (TEMC) sites. It prevents fires, explosions, static discharge, spills, environmental contamination, and injuries, and ensures compliance with ISO 45001:2018, ISO 14001:2015, MHRSD, NCEC, and Saudi environmental and safety regulations.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s2" className="text-lg font-bold" style={{ color: "#081C2E" }}>2. Scope</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This SOP applies to all refueling and refilling activities involving diesel, gasoline, and other fuels at TEMC operational sites — drilling rigs, generators, light vehicles, heavy equipment, and bulk fuel storage. It binds all employees, contractors, and third-party fuel suppliers operating on company premises.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s3" className="text-lg font-bold" style={{ color: "#081C2E" }}>3. Definitions</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Refueling — transferring fuel directly from a source into the active tank of equipment or a vehicle.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Refilling — transferring fuel from a delivery bowser into bulk storage drums or static tanks on site.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Minor Spill — unintended release of ≤ 20 litres of fuel — contained and cleaned on site.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Major Spill — unintended release of {">"} 20 litres — reportable to NCEC, requires formal incident investigation.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Bunded Containment — secondary spill-containment structure around fuel handling or storage.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Grounding / Bonding — electrical connection between bowser and receiving tank to prevent static discharge.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Hot Work — any activity generating ignition sources — welding, grinding, cutting, flame.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s4" className="text-lg font-bold" style={{ color: "#081C2E" }}>4. Responsibilities</h2>
            </div>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s5" className="text-lg font-bold" style={{ color: "#081C2E" }}>5. Pre-Refueling Preparation</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Risk assessment — dynamic risk assessment before starting — ignition sources, spill potential, weather, environmental proximity, ventilation.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Equipment shutdown — switch off engines completely before opening any fuel cap. No refueling with engine running.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Fire safety — fully charged fire extinguisher (minimum 9 kg dry chemical ABC) within 5 m of the refueling point, accessible.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Volume limits — maximum 4 × 201 litre drums on the active site at any one time to limit spill exposure.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Position — level, firm ground; away from surface drains, wadis, and camp living areas; upwind of ignition sources.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s6" className="text-lg font-bold" style={{ color: "#081C2E" }}>6. Safe Refueling Steps</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Containment setup — drip trays directly under hose connections and transfer points.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Bunding — sand wall or portable PVC bund around drip trays; heavy-duty plastic liner below for secondary containment.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Bowser delivery — a designated spotter guides the bowser to a safe, level position. Bowser engine OFF (unless running PTO pump). Wheel chocks applied.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Grounding and bonding — bonding cable connected between bowser and receiving tank before flow begins, to eliminate static discharge.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Ignition control — no smoking, no mobile phone use, no hot work within 10 m. No electrical switching of non-intrinsically-safe equipment in the zone.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Slow fill — begin flow slowly to avoid splash charging. Do not top off past the fill mark.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Weather protection — drums sealed immediately after filling to prevent rain or dust ingress.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Completion — replace and firmly secure all caps and lids. Disconnect grounding last.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s7" className="text-lg font-bold" style={{ color: "#081C2E" }}>7. Spill Response</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Immediate action: stop flow, isolate source, deploy spill kit and absorbents.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Minor spills ({"<"} 20 L): contain with absorbent, remove contaminated soil/absorbents with a spark-proof spade, place in the designated hazardous waste drum (black carbon).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Major spills ({">"} 20 L): stop the operation entirely. Notify Supervisor and HSE immediately. Contain the spill. Report per NCEC requirements and PROC-HSE-006 Incident Investigation.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Personnel evacuate upwind. No hot work, switching, or ignition activity until the area is confirmed safe and vapours have cleared.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Waste is transferred to an approved hazardous waste contractor with manifest.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s8" className="text-lg font-bold" style={{ color: "#081C2E" }}>8. Post-Refueling</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Inspection: check the entire area and beneath the equipment for residual drips or spills.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Housekeeping: return extinguishers, drip trays, bunds, and grounding cables to designated storage.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Documentation: record volume, equipment, operator, and any issues in the Fuel Refueling Log (TE-IMS-FRM-MAINT-003 or REG-MAINT-002).</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s9" className="text-lg font-bold" style={{ color: "#081C2E" }}>9. Personal Protective Equipment</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Personnel actively transferring fuel wear the following minimum PPE:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Safety glasses or chemical splash goggles.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Chemical-resistant gloves (heavy-duty nitrile).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Hard hat.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Flame-resistant (FR) overalls.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Steel-toe safety boots.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• High-visibility vest.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s10" className="text-lg font-bold" style={{ color: "#081C2E" }}>10. Training and Awareness</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Mandatory formal training at induction + annual refresher for all personnel involved in refueling.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Curriculum covers: hazards of fuel, static and ignition control, bonding and grounding, spill response, PPE, fire safety, and environmental reporting.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Competency verified by the HSE Manager or delegate before first use.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Records retained in the IMS Training Register (REG-TRN-001).</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s11" className="text-lg font-bold" style={{ color: "#081C2E" }}>11. Monitoring and Continual Improvement</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Monthly HSE audits of active refueling areas, bulk storage setups, and the Fuel Refueling Log.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Monthly review of spill events, volumes, and compliance rate.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Annual review of this SOP or immediately after any significant spill or fire incident.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s12" className="text-lg font-bold" style={{ color: "#081C2E" }}>12. Performance Indicators</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>[NEEDS CEO REVIEW — targets indicative]</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s13" className="text-lg font-bold" style={{ color: "#081C2E" }}>13. References</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 45001:2018 — Clause 8.1.2 Operational Controls.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 14001:2015 — Clauses 6.1.2, 8.1 Operational Planning and Control.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• NCEC — Hazardous Waste and Spill Management Regulations (KSA).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• MHRSD — Occupational Safety Requirements.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TEMC PROC-ENV-001 Waste Management; PROC-HSE-004 Site Emergency Preparedness; PROC-HSE-006 Incident Investigation; PROC-MAINT-001 Maintenance Management; SOP-HSE-004 Hot Work.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s14" className="text-lg font-bold" style={{ color: "#081C2E" }}>14. Related Documents and Records</h2>
            </div>

            {/* Tables from document */}

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
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Oversees overall compliance. Ensures fire extinguishers, spill kits, bunds, and PPE are physically available. Formally approves refueling operations.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>HSE Manager / Safety Officer</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Owns this SOP. Trains personnel. Investigates fuel spills and incidents. Maintains environmental records. Reports to NCEC where required.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Maintenance Supervisor</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Maintains fuel storage assets, bowser connections, hoses, valves, grounding cables, and fuel filters.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Drivers / Operators</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Perform refueling safely. Follow the refueling checklist and PPE requirements. Immediately report any spills or leaks.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>All Personnel</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Maintain the 10 m no-smoking zone. Report any fire or spill hazard immediately. Stop work if conditions are unsafe.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#081C2E" }}>
                <th key="0" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>KPI</th>
                <th key="1" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>Target</th>
                <th key="2" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>Frequency</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Fuel spills (number)</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>0 major; minor ↓ trend</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Monthly</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Total volume spilled</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>{"<"} 5 L cumulative</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Monthly</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Refueling audit compliance</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>≥ 95%</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Monthly</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Fire extinguishers at refueling points serviced</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>100%</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Quarterly</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Refueling personnel training current</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>100%</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Quarterly</td>
                </tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#081C2E" }}>
                <th key="0" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>Record</th>
                <th key="1" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>Owner</th>
                <th key="2" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>Retention</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Fuel Refueling Log (FRM-MAINT-003 / REG-MAINT-002)</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Maintenance Supervisor</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>3 years</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Spill Incident Reports</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>HSE Manager</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>5 years</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Hazardous Waste Manifests</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>HSE / Env Officer</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>5 years</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Refueling Training Records</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Training Coordinator</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Employment + 3 years</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Fire Extinguisher Service Records</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>HSE / Maintenance</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>3 years</td>
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
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>01.03.2026</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Initial issue</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Abduljawad Bouguelta (MR)</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>01</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>10.04.2026</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Full rebuild — added definitions, responsibilities table, bonding/grounding step for static control, explicit major/minor spill thresholds tied to NCEC reporting, PPE list including hi-vis vest, KPI table with CEO review flag, records retention table, cross-refs to PROC-ENV-001, PROC-HSE-004, SOP-HSE-004.</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>HSE</td>
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
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Prepared by (HSE Manager)</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}></td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}></td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}></td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Reviewed by (QA / MR)</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}></td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}></td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}></td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Approved by (Managing Director)</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}></td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}></td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}></td>
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
