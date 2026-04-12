// TE-IMS-SOP-HSE-004 Rev01 — Hot Work SOP
// Content extracted verbatim from approved DOCX. Design and format only.
import { Link } from "wouter";
import { TopNav, Footer, Breadcrumb } from "@/components/Layout";
import { LOGO_WHITE } from "@/lib/imsData";

export default function SOP_HSE_004() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb items={[
        { label: "SOP — Standard Operating Procedures", href: "/docs/sop" },
        { label: "Hot Work SOP" },
      ]} />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>Hot Work SOP</h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-SOP-HSE-004_Rev01</span>
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
                ["Code", "TE-IMS-SOP-HSE-004"],
                ["Revision", "Rev01"],
                ["Date", "10 Apr 2026"],
                ["Status", "✓ Approved"],
                ["Category", "SOP"],
                ["Scope", "All True East Mining hot work and generator operations"],
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
              <a key="5" href="#s5" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>5. Pre-Work Preparation & Permit Requirements</a>
              <a key="6" href="#s6" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>6. Operational Safety</a>
              <a key="7" href="#s7" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>7. Shutdown & Post-Work Procedure</a>
              <a key="8" href="#s8" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>8. Generator Safe Use (Integrated Operations)</a>
              <a key="9" href="#s9" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>9. Personal Protective Equipment (PPE)</a>
              <a key="10" href="#s10" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>10. Associated Hazards</a>
              <a key="11" href="#s11" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>11. Emergency Procedures</a>
              <a key="12" href="#s12" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>12. Training and Authorization</a>
              <a key="13" href="#s13" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>13. Records & Retention</a>
              <a key="14" href="#s14" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>14. Monitoring, Audit and Continuous Improvement</a>
              <a key="15" href="#s15" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>15. Non-Conformance</a>
              <a key="16" href="#s16" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>16. References</a>
              <a key="17" href="#s17" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>17. Related Documents</a>
              <a key="18" href="#s18" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>18. Revision History</a>
              <a key="19" href="#s19" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>19. Approval</a>
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
              <h1 className="text-white text-2xl font-extrabold leading-tight tracking-tight mb-2">Hot Work SOP</h1>
              <div className="flex flex-wrap gap-2 mt-3">
                {[["Doc No", "TE-IMS-SOP-HSE-004"], ["Rev", "Rev01"], ["Date", "10 Apr 2026"], ["Status", "Approved for Implementation"]].map(([label, val]) => (
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

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>To prevent fires, explosions, burns and other incidents by rigorously controlling ignition sources, managing flammable and combustible materials, ensuring safe equipment operation (including portable generators), and establishing strict controls for hot work activities at True East Mining operations. This SOP enforces strict compliance with ISO 45001:2018, Saudi Civil Defense requirements and applicable KSA occupational safety regulations.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s2" className="text-lg font-bold" style={{ color: "#081C2E" }}>2. Scope</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure applies to all employees, contractors and visitors performing or affected by hot work — including welding, cutting, grinding, soldering, torch use, brazing, and abrasive blasting — and generator operation on all True East Mining sites. This includes drill rigs, processing plants, workshops, fuel storage areas and remote desert locations. Hot work is strictly prohibited in any non-designated area without a valid permit.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s3" className="text-lg font-bold" style={{ color: "#081C2E" }}>3. Definitions</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Key terms used in this SOP are defined below for consistency with ISO 45001:2018 and KSA occupational safety regulations.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s4" className="text-lg font-bold" style={{ color: "#081C2E" }}>4. Responsibilities</h2>
            </div>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s5" className="text-lg font-bold" style={{ color: "#081C2E" }}>5. Pre-Work Preparation & Permit Requirements</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>A formal Hot Work Permit is mandatory for ALL hot work conducted outside of a Designated Hot Work Area. The permit must be integrated with the master Permit to Work (PTW) system. The Permit Issuer must physically inspect the site and confirm all controls below are in place before any hot work starts.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s6" className="text-lg font-bold" style={{ color: "#081C2E" }}>6. Operational Safety</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Continuous monitoring — never leave hot work unattended. Regularly inspect for rogue sparks or smoldering during the work.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Housekeeping — keep hoses and cables organized to avoid tripping hazards and physical damage.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Ignition protocol — use approved strikers to light torches and electrodes; never use lighters or matches.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Atmospheric safety — no hot work is permitted in potentially explosive atmospheres without continuous gas testing and clearance.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Respiratory protection — use appropriate respiratory protection whenever fumes or hazardous dust are present.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Hot tapping, working over voids and elevated hot work require additional risk assessment and a specific written procedure.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s7" className="text-lg font-bold" style={{ color: "#081C2E" }}>7. Shutdown & Post-Work Procedure</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Extinguish all flames; shut off equipment, gas valves and power supplies at the source.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Allow all hot surfaces and workpieces sufficient time to cool.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Inspect the immediate and surrounding area — including BELOW the work site — for smoldering, embers or residual heat.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Maintain the Fire Watch for a minimum of 30 to 60 minutes after the work concludes. Longer in high-risk or highly combustible areas.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Close and physically lock gas valves and power supplies. Remove tools and return extinguishers and PPE for post-use inspection.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• The Supervisor and the Fire Watch must conduct a final inspection and formally sign off the closed permit.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s8" className="text-lg font-bold" style={{ color: "#081C2E" }}>8. Generator Safe Use (Integrated Operations)</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Portable generators are a frequent hot-work adjacent hazard on remote drilling sites. The following rules apply to all generator operation.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>8.1 Pre-Operational Checks</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Place the generator on a level, stable surface in a well-ventilated OUTDOOR area. Exhaust must point away from people, air intakes and buildings.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Inspect for physical damage, fluid leaks and worn parts.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Check oil, fuel and coolant levels.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Verify that all power cords and connections are intact — no frays, cracks or exposed wires.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Ensure proper electrical grounding is established for stationary or large portable units.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>8.2 Startup Sequence</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Disconnect all electrical loads before starting.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Turn the fuel valve to the ON position.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Set the choke (for cold start).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Turn the ignition ON and start the engine.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Allow the generator to run unloaded for 1 to 2 minutes to stabilize before connecting loads. Connect from lowest draw to highest draw.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>8.3 Operational Safety</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Never operate a generator indoors or in any enclosed space — severe carbon monoxide poisoning risk.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Never refuel the generator while it is running. Shut it down and allow it to cool first.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Avoid overloading the generator — always verify the total wattage of connected tools.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Protect the unit from rain, moisture and dust build-up. Keep unauthorized personnel away.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>8.4 Shutdown, Refueling & Maintenance</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Shutdown — unplug and turn off all connected loads; run unloaded for 1 to 2 minutes to cool the alternator; turn the ignition OFF, then the fuel valve OFF.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Refueling — cool the engine for at least 10 minutes before refueling; use only approved containers; wipe up any spills immediately.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Maintenance — conduct regular oil changes and air-filter cleaning per the manufacturer's specifications; store dry and covered.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s9" className="text-lg font-bold" style={{ color: "#081C2E" }}>9. Personal Protective Equipment (PPE)</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Fire-retardant (FR) clothing or coveralls.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Welding helmet or appropriate face shield — correct shade for the task.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Welding and heat-resistant leather gloves.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Hearing protection — mandatory for grinding and cutting.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Safety glasses worn UNDERNEATH the welding shield.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Respiratory protection rated for the specific fumes and dusts encountered.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Safety boots — metatarsal protection recommended for heavy fabrication.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s10" className="text-lg font-bold" style={{ color: "#081C2E" }}>10. Associated Hazards</h2>
            </div>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s11" className="text-lg font-bold" style={{ color: "#081C2E" }}>11. Emergency Procedures</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Fire — raise the alarm immediately; evacuate if necessary; use the fire extinguisher with the P.A.S.S. technique (Pull, Aim, Squeeze, Sweep) only if safe to do so.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Burns — cool the affected area with clean water for at least 10 minutes; apply sterile dressing; seek immediate medical help.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Fume Inhalation — move the victim to fresh air immediately; seek medical attention.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Notification — notify the Supervisor and Safety Officer; activate the site emergency plan for any major incident; report to Saudi Civil Defense where required.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s12" className="text-lg font-bold" style={{ color: "#081C2E" }}>12. Training and Authorization</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Only trained and authorized personnel may perform hot work or operate heavy generators.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Training must cover fire safety, extinguisher use, the permit system, hazard recognition and PPE.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• The Permit Issuer must physically inspect the site and sign off the permit before work begins.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• All training records must be retained in the IMS for a minimum of 3 years.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Competency shall be verified through practical assessment before first independent hot-work task.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s13" className="text-lg font-bold" style={{ color: "#081C2E" }}>13. Records & Retention</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>All hot work records shall be retained in the IMS archive and made available for ISO 45001 audits, Saudi Civil Defense inspections and regulatory review.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s14" className="text-lg font-bold" style={{ color: "#081C2E" }}>14. Monitoring, Audit and Continuous Improvement</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• HSE conducts monthly audits of permit compliance, equipment condition and Fire Watch logs.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• KPIs monitored: percentage of permits issued correctly, hot-work incidents and near-misses, training completion rates.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• This SOP is reviewed annually or immediately following any fire-related incident or regulatory change.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• IMS integration: all data is linked to the Incident Reporting system and the Monthly HSE Report.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s15" className="text-lg font-bold" style={{ color: "#081C2E" }}>15. Non-Conformance</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Any deviation from this SOP — including hot work without a valid permit, missing Fire Watch, failure to clear combustibles, or unauthorized refueling of a running generator — will trigger:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• An immediate Stop Work order.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• A formal Incident Report (TE-IMS-FRM-HSE-022).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Immediate notification to the Site Foreman and Safety Officer.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• A full investigation with Corrective Actions (CAPA) and potential disciplinary action.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s16" className="text-lg font-bold" style={{ color: "#081C2E" }}>16. References</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 45001:2018 — Clauses 6.1.2 (Hazard ID), 8.1.2 (Operational Controls), 8.2 (Emergency Preparedness).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• MHRSD — Occupational Safety and Health Management Regulation (KSA), covering hot work and fire prevention.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Saudi Civil Defense — fire safety and permit requirements for industrial sites.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• NCEC — National Center for Environmental Compliance guidelines on fume control and spill management.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Saudi Aramco GI 2.100 — Work Permit System and GI 2.709 — Hot Work (industry benchmark).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• NFPA 51B — Standard for Fire Prevention during Welding, Cutting and Other Hot Work (international best practice).</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s17" className="text-lg font-bold" style={{ color: "#081C2E" }}>17. Related Documents</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-SOP-HSE-002 — Confined Space Entry SOP.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-SOP-HSE-003 — Lockout / Tagout SOP.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-FRM-HSE-020 — Fire Extinguisher Inspection Log.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-FRM-HSE-022 — Incident and Accident Investigation Report.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-FRM-HSE-030 — Fire Fighting Equipment Register Checklist.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-FRM-HSE-036 — Fire Fighter Appointment Letter.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-FRM-HSE-009 — Take 5 Hazard Assessment Form.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s18" className="text-lg font-bold" style={{ color: "#081C2E" }}>18. Revision History</h2>
            </div>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s19" className="text-lg font-bold" style={{ color: "#081C2E" }}>19. Approval</h2>
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
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Hot Work</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Any task that produces sparks, flames, heat or an open ignition source — including welding, cutting, brazing, soldering, grinding, torch cutting, abrasive blasting, and the use of open-flame heaters.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Designated Hot Work Area</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>A pre-approved, permanent zone (e.g., a workshop) equipped with fixed fire controls, ventilation and suppression — the only location where hot work may proceed without a permit.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Hot Work Permit</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>A written authorization covering a specific task, time window, location and controls. Mandatory for any hot work outside a Designated Hot Work Area.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Permit Issuer</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>The competent person (typically Supervisor or HSE Officer) authorized to inspect the worksite, verify controls and sign the permit.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Fire Watch</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>A dedicated and trained person assigned to monitor the area for fire or smoldering during and for at least 30 minutes after hot work is completed.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Hot Work Operator</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>A trained and authorized worker performing the hot work task — e.g., welder, grinder operator, cutter.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Combustibles / Flammables</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Any material or substance capable of being ignited by spark, heat or flame — including fuels, oils, solvents, oily rags, drilling fluids, vegetation, paper, wood.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Stop Work Authority (SWA)</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>The unconditional right and duty of any worker to immediately stop any task believed to present an unsafe condition.</td>
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
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Site Senior Exec. (SSE) / Operations Manager</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Overall accountability; ensures adequate resources, training and fire-fighting equipment are provided; approves high-risk hot work permits.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Supervisors / Permit Issuers</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Issue and inspect permits; verify field controls before work starts; assign the Fire Watch; oversee shutdown and post-work monitoring; enforce compliance.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Hot Work Operators</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Strictly follow permit conditions; inspect equipment before use; maintain good housekeeping; never leave active hot work unattended; exercise Stop Work Authority.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Fire Watch</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Remain in position throughout the job and for a minimum 30 minutes after completion; monitor for sparks, smoldering and re-ignition; have extinguisher immediately on hand; raise the alarm at first sign of fire.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>HSE / Safety Officer</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Audit field compliance; train personnel; investigate related incidents; approve temporary generator setups; verify fire-fighting equipment is ready and tagged.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>All Personnel</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Report hazards immediately; comply with all barricades, PPE and permit requirements; refuse unsafe work under Stop Work Authority.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#081C2E" }}>
                <th key="0" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>#</th>
                <th key="1" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>Control</th>
                <th key="2" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>Requirement</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>1</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Combustibles cleared or shielded</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>All flammable and combustible materials within a 10 m radius have been removed or completely protected by fire blankets/welding screens.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>2</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Fire extinguisher on hand</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Minimum 9 kg dry chemical or CO2 extinguisher — inspected, tagged, pressurized — immediately accessible to the operator and the Fire Watch.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>3</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Ventilation adequate</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Natural or forced ventilation able to remove welding fumes and toxic gases. Confined spaces require continuous mechanical ventilation.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>4</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Shielding in place</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Fire blankets and welding screens protect surrounding equipment, structures and nearby personnel from sparks, slag and UV radiation.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>5</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Fire Watch assigned</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Mandatory for confined spaces, overhead work and all high-risk areas. Fire Watch briefed and equipped with radio and extinguisher.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>6</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Equipment inspected</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Torches, regulators, hoses, grinders, welding leads — all inspected for damage, leaks and frayed cables before use.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>7</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Drains and openings sealed</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>All nearby drains, vents, trenches or openings have been sealed to prevent sparks, fumes or burning material from spreading.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>8</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Gas cylinders secured</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Cylinders stored strictly upright, secured with chains, and at least 3 m from any ignition source unless protected by a firewall.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>9</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Atmosphere tested</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Where explosive or toxic atmospheres are possible, a calibrated multi-gas detector has been used to confirm a safe atmosphere before work begins.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>10</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Permit displayed</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>The signed Hot Work Permit is physically displayed at the worksite for the duration of the work.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#081C2E" }}>
                <th key="0" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>Hazard</th>
                <th key="1" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>Description</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Fire / Explosion</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Sparks and slag igniting flammables, fuel vapours, oily rags, dust layers or explosive atmospheres.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Burns</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Contact with hot surfaces, slag, molten metal, or heated workpieces.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Electric Shock</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Faulty welding equipment, damaged leads, improperly grounded generators or wet conditions.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Toxic Fumes & Gases</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Inhalation of welding fumes, metal oxides, ozone, shielding gases and generator exhaust (CO).</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Radiation</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>UV/IR radiation from the arc causing arc eye, flash burns and skin damage.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Noise</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Noise-induced hearing loss from grinding, cutting and generator operation.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Drill Rig Specifics</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Igniting high-pressure hydraulic leaks or residual drilling fluids on the rig.</td>
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
                <th key="3" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>Location</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Hot Work Permit (signed & closed)</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Permit Issuer / HSE</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Min. 3 years</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>IMS / HSE archive</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>JSA / Risk Assessment</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Supervisor + HSE</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Min. 5 years</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>IMS / HSE archive</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Fire Watch Log</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Fire Watch / Supervisor</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Min. 3 years</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Attached to permit</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Equipment Inspection Records</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Operator / HSE</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Min. 3 years</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>IMS / Maintenance log</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Atmospheric Test Results</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Gas Tester / HSE</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Min. 3 years</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Attached to permit</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Training & Competency Records</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>HR / HSE / Training</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Min. 3 years</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>IMS / HR system</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Incident / Near-Miss Reports</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>HSE</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Min. 5 years</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>IMS / HSE archive</td>
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
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>14.04.2025</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Initial issue</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>MR</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>01</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>10.04.2026</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Content-first rebuild. Expanded to 18 sections. Added Definitions table (8 terms), Responsibilities expanded to 6 roles including Fire Watch. Pre-Work Preparation rebuilt as a 10-item native checklist table. Hazards table added. Records & Retention table added. Saudi Civil Defense reference added. Cross-references to LOTO, Confined Space, fire-equipment and incident forms added.</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>QA / HSE</td>
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
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Prepared by</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}></td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}></td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}></td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Reviewed by</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}></td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}></td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}></td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Approved by</td>
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
