// TE-IMS-SOP-HSE-003 Rev01 — Lock-Out Tag-Out SOP
// Content extracted verbatim from approved DOCX. Design and format only.
import { Link } from "wouter";
import { TopNav, Footer, Breadcrumb } from "@/components/Layout";
import { LOGO_WHITE } from "@/lib/imsData";

export default function SOP_HSE_003() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb items={[
        { label: "SOP — Standard Operating Procedures", href: "/docs/sop" },
        { label: "Lock-Out Tag-Out SOP" },
      ]} />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>Lock-Out Tag-Out SOP</h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-SOP-HSE-003_Rev01</span>
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
                ["Code", "TE-IMS-SOP-HSE-003"],
                ["Revision", "Rev01"],
                ["Date", "10 Apr 2026"],
                ["Status", "✓ Approved"],
                ["Category", "SOP"],
                ["Scope", "All True East Mining maintenance and isolation operations"],
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
              <a key="5" href="#s5" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>5. Energy Sources to be Controlled</a>
              <a key="6" href="#s6" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>6. Central Lockout Station & Registration</a>
              <a key="7" href="#s7" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>7. The 10-Step LOTO Sequence</a>
              <a key="8" href="#s8" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>8. Group Lockout</a>
              <a key="9" href="#s9" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>9. Lock & Tag Removal Rules</a>
              <a key="10" href="#s10" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>10. Live Work Exception</a>
              <a key="11" href="#s11" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>11. Personal Protective Equipment (PPE)</a>
              <a key="12" href="#s12" className="block text-xs py-1 px-2 rounded hover:bg-gray-50 transition-colors" style={{ color: "#6b7a8d" }}>12. Training and Competency</a>
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
              <h1 className="text-white text-2xl font-extrabold leading-tight tracking-tight mb-2">Lock-Out Tag-Out SOP</h1>
              <div className="flex flex-wrap gap-2 mt-3">
                {[["Doc No", "TE-IMS-SOP-HSE-003"], ["Rev", "Rev01"], ["Date", "10 Apr 2026"], ["Status", "Approved for Implementation"]].map(([label, val]) => (
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

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>To protect all personnel from the unexpected energization, start-up or release of hazardous energy during maintenance, repair, cleaning or servicing of machinery and equipment (including diamond drill rigs). This SOP enforces a Zero Energy State before any such work, preventing injuries and damage to True East Mining and client property.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure establishes mandatory controls for all energy sources — electrical, hydraulic, pneumatic, mechanical, gravitational, stored, thermal and chemical — in strict compliance with ISO 45001:2018 and KSA occupational safety regulations.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s2" className="text-lg font-bold" style={{ color: "#081C2E" }}>2. Scope</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure applies to all True East Mining employees, contractors and third parties performing maintenance, repair, inspection or servicing on any equipment or machinery (drill rigs, generators, pumps, rod handlers, conveyors, crushers, compressors, etc.) where hazardous energy may be present. It covers all sites, including remote desert drilling operations, and it applies 24 hours a day, 7 days a week, regardless of shift.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s3" className="text-lg font-bold" style={{ color: "#081C2E" }}>3. Definitions</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Key terms used in this SOP are defined below for consistency with ISO 45001:2018 and KSA occupational safety regulations.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s4" className="text-lg font-bold" style={{ color: "#081C2E" }}>4. Responsibilities</h2>
            </div>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s5" className="text-lg font-bold" style={{ color: "#081C2E" }}>5. Energy Sources to be Controlled</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>All forms of hazardous energy at True East Mining sites must be identified and isolated before any servicing work begins. The table below summarizes common sources and the required isolation and verification method.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s6" className="text-lg font-bold" style={{ color: "#081C2E" }}>6. Central Lockout Station & Registration</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Central Lockout Station — located in a highly visible, easily accessible area; contains all personal locks, tags, multi-lock hasps, keys, registers and reference documentation.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Registration — every lockout must be formally registered with the Foreman/Supervisor and the Safety Officer BEFORE any lock is applied.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Control — the Foreman controls the station. Unauthorized lockouts are strictly prohibited.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Lockout Register — must be signed by the requester, Foreman and Safety Officer. It is updated continuously to capture date, equipment, reason, personnel involved, and the exact time the lock is applied and removed.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s7" className="text-lg font-bold" style={{ color: "#081C2E" }}>7. The 10-Step LOTO Sequence</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Every lockout at True East Mining follows the same 10-step sequence. Steps must be completed in order; none may be skipped. Any deviation triggers an immediate Stop Work and a formal non-conformance report.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s8" className="text-lg font-bold" style={{ color: "#081C2E" }}>8. Group Lockout</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Where more than one authorized person works on the same equipment:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• A multi-lock hasp is applied at the isolation point. Each worker attaches their own personal lock.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• The Isolation Officer maintains the group lockout log showing all lock owners.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Each worker removes their own lock when their portion of the work is complete.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• The equipment is not re-energized until the last personal lock has been removed.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s9" className="text-lg font-bold" style={{ color: "#081C2E" }}>9. Lock & Tag Removal Rules</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ONLY the specific person who applied the lock or tag may remove it — no exceptions under normal conditions.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• If the original person is unavailable (off-shift, emergency, etc.), removal requires: (a) written authorization from the SSE or designated deputy; (b) documented verification that the worker is not in the isolation zone; (c) a formal entry in the Lockout Register; (d) immediate notification to the worker on their return.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Before removing any lock, verify the work is complete, all tools and personnel are clear of the equipment, and guards have been replaced.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Notify all affected employees before re-energization.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s10" className="text-lg font-bold" style={{ color: "#081C2E" }}>10. Live Work Exception</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Live work on energized equipment is permitted ONLY where de-energization is physically impossible (for example, live diagnostics on a running generator) and the task is technically justified and pre-approved.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Strict controls for live work:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• A site-specific JSA/Risk Assessment must be completed and documented.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• A formal Live Work Permit must be signed by the Supervisor and Safety Officer before work begins.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• A strict exclusion zone is established with signage and radio communication.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Mandatory PPE: insulated gloves and tools, FR coveralls, face shield, hydraulic-resistant gloves where pressurized fluid is involved.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• A specific Toolbox Talk is delivered and first-aid readiness confirmed before starting.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Exposure time must be minimized — remote testing is used wherever possible.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Key live-work risks on diamond drill rigs:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Arc Flash — from generators, main control panels, high-current switchgear.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Hydraulic Injection — from high-pressure fluid lines; injection injuries are surgical emergencies.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Entanglement — from spindle, drill rods, rotating components and rod handler.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Stored Energy — hoisting and rotation systems dropping or releasing unexpectedly when power is restored.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s11" className="text-lg font-bold" style={{ color: "#081C2E" }}>11. Personal Protective Equipment (PPE)</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Hard hat, safety glasses or goggles and flame-resistant (FR) coveralls.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Insulated gloves and insulated tools (electrical diagnostics).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Hydraulic-resistant gloves and full face shield (pressurized lines).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Hearing protection and FFP2 respirators where dust is present in the maintenance area.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Fall protection where working at height above 1.8 m.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s12" className="text-lg font-bold" style={{ color: "#081C2E" }}>12. Training and Competency</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• All Isolation Officers, maintenance personnel, and authorized workers must complete initial LOTO training plus an annual refresher.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• The curriculum shall cover: energy identification, isolation techniques, proper lock application and verification, group lockout, Live Work rules and emergency response.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Competency shall be verified through practical assessment before first use of the LOTO system.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• All training records and competency sign-offs shall be retained in the IMS for a minimum of 3 years.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s13" className="text-lg font-bold" style={{ color: "#081C2E" }}>13. Records & Retention</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>All LOTO records shall be retained in the IMS archive and made available for ISO 45001 audits and regulatory inspection.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s14" className="text-lg font-bold" style={{ color: "#081C2E" }}>14. Monitoring, Audit and Continuous Improvement</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• HSE conducts monthly field audits of the Lockout Register, the physical condition of tags and locks, and field compliance.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• KPIs monitored: percentage of lockouts properly registered; number of LOTO non-conformances; training completion rates.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• This SOP is reviewed annually, immediately following any LOTO-related incident, and upon changes to regulatory standards.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• IMS integration: all LOTO data is linked directly to the Incident Reporting system and the Monthly HSE Report.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s15" className="text-lg font-bold" style={{ color: "#081C2E" }}>15. Non-Conformance</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Any deviation from this SOP — including unauthorized lock removal, incomplete isolation, or conducting Live Work without a permit — will trigger:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• An immediate Stop Work order.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• A formal Incident Report (TE-IMS-FRM-HSE-022).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Immediate notification to the Site Foreman and Safety Officer.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• A full investigation with formal Corrective Actions (CAPA) and potential disciplinary action per the True East Mining Disciplinary Policy.</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s16" className="text-lg font-bold" style={{ color: "#081C2E" }}>16. References</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 45001:2018 — Occupational Health and Safety Management Systems (Clauses 6.1.2, 8.1.2, 10.2).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• MHRSD — Occupational Safety and Health Management Regulation (KSA), covering energy control and live work authorization.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Saudi Labor Law — worker protection provisions.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Saudi Aramco GI 2.709 — Lockout / Tagout (industry benchmark).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• OSHA 1910.147 — Control of Hazardous Energy (international best practice, adapted for KSA).</p>

            <div className="mb-4 pb-3 mt-8" style={{ borderBottom: "2px solid #C49A28" }}>
              <h2 id="s17" className="text-lg font-bold" style={{ color: "#081C2E" }}>17. Related Documents</h2>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-SOP-HSE-002 — Confined Space Entry SOP.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-SOP-HSE-004 — Hot Work SOP.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-FRM-HSE-022 — Incident and Accident Investigation Report.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-FRM-HSE-037 — Lockout Officer Appointment Letter.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-FRM-HSE-039 — LOTO Logout Logbook.</p>

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
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Zero Energy State</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>A condition in which all potential, stored or residual energy (electrical, hydraulic, pneumatic, mechanical, gravitational, thermal, chemical) has been isolated, bled or blocked and verified.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Authorized Person</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>A trained and designated worker who performs lockout/tagout and has authority to isolate, verify and release energy sources.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Affected Person</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Any worker whose job requires them to operate or use equipment on which lockout/tagout is being performed.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Isolation Officer</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>The single competent person accountable for identifying, isolating and verifying zero energy on the subject equipment.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Personal Lock</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>A uniquely keyed padlock assigned to one person and removed only by that person.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Multi-Lock Hasp</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>A group-lockout device that allows several personal locks to be applied to one isolation point.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Lockout</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Physical application of a lock to an energy-isolating device to prevent re-energization.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Tagout</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>A prominent warning tag applied in addition to, or when lockout is not feasible (supplement only).</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Live Work</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Authorized work on energized equipment when de-energization is physically impossible; requires Live Work Permit.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Stop Work Authority (SWA)</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>The unconditional right and duty of any worker to immediately stop any task believed unsafe.</td>
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
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Overall accountability; ensures adequate resources and training; reviews all serious LOTO incidents or breaches; approves Live Work exceptions.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Supervisors / Foremen</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Authorize lockouts; control the Central Lockout Station and register; verify zero energy; oversee barricading and pre-task inductions; enforce compliance.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Isolation Officers / Maintenance Personnel</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Identify all energy sources; physically apply and remove locks and tags; verify zero energy; sign the LOTO register; coach affected workers.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>HSE / Safety Officer</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Conduct monthly field audits; provide LOTO training; approve Live Work permits; investigate non-conformances; update this SOP following incidents.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Authorized Persons</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Apply personal lock and tag; never remove another person's lock; follow the 10-step sequence; exercise Stop Work Authority.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>All Personnel</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Report hazards immediately; never bypass or tamper with locks/tags/barricades; strictly comply with signage and exclusion zones.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#081C2E" }}>
                <th key="0" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>Energy Source</th>
                <th key="1" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>Examples at Site</th>
                <th key="2" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>Isolation & Verification Method</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Electrical</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Live circuits, capacitors, batteries, UPS, variable-speed drives.</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Rack-out / isolate at MCC; lock breaker; discharge capacitors; verify with tester.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Hydraulic</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Drill-rig circuits, rod handlers, jacks, pumps.</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Close isolation valve; bleed lines to zero pressure; lock the valve; verify gauge.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Pneumatic</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Air lines to hammers, compressors, clamps.</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Close valve; bleed pressure; lock; verify gauge.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Mechanical / Gravitational</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Suspended loads, mast, drill head, counterweights, raised buckets.</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Mechanical blocks, pins, chocks; physically restrain before work.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Stored / Kinetic</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Rotating flywheels, drill string inertia, compressed springs.</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Allow to fully stop; physically lock or restrain before entry.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Thermal</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Hot engine blocks, exhaust, process water, diesel heaters.</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Isolate heat source; allow cool-down; warning signage until verified safe.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Chemical / Fuel</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Diesel, drilling fluids, greases, solvents.</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Close supply valves; drain or cap exposed lines; ventilate enclosed areas.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#081C2E" }}>
                <th key="0" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>#</th>
                <th key="1" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>Step</th>
                <th key="2" className="px-4 py-3 text-left text-xs font-bold tracking-wide" style={{ color: "#ffffff" }}>Action & Verification</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>1</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Prepare</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Identify all energy sources (use the Energy Sources table) and the required isolation points. Review manufacturer manuals and JSA.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>2</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Notify</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Notify all affected employees — operators, nearby workers, other trades — of the impending lockout, scope, duration and who is in charge.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>3</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Shut Down</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Shut down the equipment using normal operating controls. Do NOT isolate before normal shutdown unless the equipment is already stopped.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>4</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Isolate</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Physically isolate every energy source at the designated isolation point (breaker, valve, block, pin).</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>5</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Lock & Tag</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Apply your personal lock and fill out the warning tag: Name / Date / Reason. Use a multi-lock hasp for group work.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>6</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Release Stored Energy</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Bleed hydraulic/pneumatic pressure, discharge capacitors, lower/block suspended loads, allow thermal cool-down.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>7</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Verify Zero Energy</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Physically test the isolation: press start button, check pressure gauges, test voltage, attempt movement. No response = zero energy confirmed.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>8</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Barricade & Signage</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Barricade the maintenance area with cones, chains, tape. Post DANGER — DO NOT OPERATE — LOCKED OUT signage.</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>9</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Execute Work</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Only authorized and locked-on personnel may enter the barricade. Pre-task Toolbox Talk covering specific hazards.</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>10</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Release</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Verify work complete, tools removed, guards replaced, personnel clear. Each person removes their own lock, tag and hasp. Notify affected employees and re-energize.</td>
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
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>LOTO Register (logbook)</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Foreman / HSE</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Min. 3 years</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Central Lockout Station</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Live Work Permit</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>HSE / Supervisor</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Min. 5 years</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>IMS / HSE archive</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Pre-Task Toolbox Talk Record</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Supervisor</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Min. 3 years</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>IMS / HSE archive</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Training & Competency Records</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>HR / HSE / Training</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Min. 3 years</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>IMS / HR system</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Incident / Non-Conformance Reports</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>HSE</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Min. 5 years</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>IMS / HSE archive</td>
                </tr>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Audit Reports</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>HSE / QA</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Min. 3 years</td>
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>IMS / QA archive</td>
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
                  <td className="px-4 py-3 text-sm" style={{ color: "#081C2E", borderBottom: "1px solid #dde3ec", verticalAlign: "top" }}>Content-first rebuild. Expanded to 18 sections. Added Definitions table (10 terms), Energy Sources table (7 types), 10-step LOTO sequence as a numbered table, Group Lockout section, lock removal rules, Records & Retention table, cross-references to incident form and appointment letters. Stop Work Authority and Zero Energy verification reinforced.</td>
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
