// TE-IMS-PROC-MAINT-001 — Maintenance Management Procedure
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

export default function TE_IMS_PROC_MAINT_001() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "PROC — Procedures", href: "/docs/proc" },
          { label: "Maintenance Management Procedure" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              Maintenance Management Procedure
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-PROC-MAINT-001_Rev01</span>
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
                ["Document Code", "TE-IMS-PROC-MAINT-001"],
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-PROC-MAINT-001_Rev01</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Maintenance Management Procedure
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-6" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-PROC-MAINT-001</td>
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


            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>1. Purpose</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure establishes a systematic process for planning, scheduling, executing, recording, and continually improving maintenance activities on all True East Mining Company (TEMC) assets — drill rigs, generators, vehicles, pumps, compressors, workshop equipment, and camp facilities. The objective is to achieve safe working conditions during maintenance, high equipment availability and reliability, prevention of breakdowns and incidents, and compliance with ISO 9001:2015 (Clause 8.5), ISO 45001:2018 (Clause 8.1.2), ISO 14001:2015 (Clause 8.1), and KSA regulatory requirements (MHRSD, NCEC).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>2. Scope</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure applies to all maintenance activities — preventive, predictive, corrective, and emergency — on company-owned or rented assets used in drilling, exploration, transport, camp, and support operations in the Kingdom of Saudi Arabia. Major capital repairs and third-party specialised maintenance (e.g. rig engine rebuilds) are excluded from routine maintenance and managed under Procurement / Contractor Management.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>3. Definitions</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Preventive Maintenance (PM) — scheduled maintenance performed at fixed intervals (time, hours, km) to prevent failure.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Predictive Maintenance (PdM) — condition-based maintenance triggered by monitoring (vibration, oil analysis, thermography).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Corrective Maintenance (CM) — work performed to restore a failed item or correct a defect.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Emergency Maintenance (EM) — immediate action to restore safety or critical operations after an unplanned failure.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Critical Equipment — equipment whose failure would stop production, create a safety hazard, or cause environmental impact.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Work Order — the controlled document authorising and recording a maintenance task.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• LOTO — lockout / tagout — isolation of energy sources before work begins (per SOP-HSE-003).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• MTBF — Mean Time Between Failures — reliability KPI.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• OEE — Overall Equipment Effectiveness — availability × performance × quality.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>4. Responsibilities</p>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Approves the annual maintenance plan and budget. Reviews performance at management review.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Operations Director / Site Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Ensures resources and access. Coordinates with Maintenance for planned downtime.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Maintenance Manager / Supervisor</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Owns this procedure. Develops and maintains the maintenance schedule. Assigns work orders. Supervises execution. Maintains records. Reports KPIs.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Reviews high-risk maintenance tasks — hot work, LOTO, confined space. Audits safety compliance.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Technicians / Mechanics</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Perform maintenance safely. Follow work orders, JHA, and permits. Report defects. Complete logs.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Operators</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Perform daily checks. Report faults. Never bypass guards or safety controls. Hand over clean equipment.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Procurement</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Ensures spare parts and consumables are available to plan.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>5. Maintenance Types and Controls</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Type</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Trigger</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Key Controls</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Preventive (PM)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Scheduled per OEM hours / km / calendar</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Work Order, JHA, LOTO, PPE, parts kit</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Predictive (PdM)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Condition threshold — vibration, oil, thermography</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monitoring plan, trend analysis, alert thresholds</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Corrective (CM)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Operator defect report or inspection finding</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Work Order, LOTO, root cause, post-work test</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Emergency (EM)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Unplanned failure with safety or production impact</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Stop Work Authority, rapid response, post-event review</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>5.1 Mandatory Safety Controls</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• LOTO mandatory for all energy isolation — electrical, hydraulic, pneumatic, mechanical (SOP-HSE-003).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Machine guarding — all guards in place and functional before release to service (SOP-MAINT-001).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• PPE — hard hat, safety glasses, gloves, overalls, steel-toe boots; task-specific additions (face shield, hearing, respiratory).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Hot Work Permit required for welding, grinding, cutting (SOP-HSE-004).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Confined Space Permit required for tank / pump / pit entry (SOP-HSE-002).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Spill prevention — drip trays, spill kits, bunding during oil and fuel work (PROC-HSE-015).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Working at Height controls apply to elevated maintenance (PLN-HSE-003).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>6. Planning and Scheduling</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Annual maintenance plan prepared at year start using OEM manuals, historical data, operating hours, and risk.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Schedule updated monthly based on usage, defects, and seasonal factors (e.g. more cooling-system checks in summer).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Critical equipment scheduled during low-activity periods where possible (weekend shutdowns).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Spare parts and consumables pre-staged — Procurement lead time built into the schedule.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Planned downtime coordinated with Operations and communicated at daily and weekly meetings.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>7. Execution and Documentation</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Work Order — every task uses TE-IMS-FRM-MAINT-002 — describes task, parts, tools, JHA reference, safety controls.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Pre-job brief — toolbox talk at the start of each task covering hazards, isolation, permits, PPE, and emergency procedures.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Records — date, time, technician, work done, parts used, issues found, time taken — recorded on the Work Order and in the Maintenance Log (TE-IMS-REG-MAINT-001).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Post-work test — function test and re-commissioning before release to operations. Signed off by competent person.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Housekeeping — work area left clean; waste segregated; tools returned; guards reinstated.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>8. Breakdown and Emergency Response</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Operator reports defect via radio and defect card immediately.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Equipment isolated and tagged Out of Service if unsafe to continue.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Maintenance Supervisor classifies severity (Safety-Critical / Production-Critical / Non-Critical) and assigns response priority.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Stop Work Authority is exercised when safety controls are missing or defeated.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Post-event review for any breakdown affecting safety or critical production — root cause analysis per PROC-SYS-005.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>9. Verification and Effectiveness</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Monthly review of maintenance performance — downtime, breakdowns, compliance, spares consumption, cost.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Post-maintenance function test on critical equipment (rigs, generators, winches) before return to service.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Annual management review of the maintenance programme — budget, KPIs, changes.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Trend analysis identifies repeat failures and drives design, training, or procedure changes.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>10. Performance Indicators</p>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Preventive maintenance completed on time</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≥ 95%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Critical equipment availability (uptime)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≥ 95%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MTBF for drill rigs</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>[NEEDS CEO REVIEW]</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Unplanned breakdown events</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>↓ trend</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Work Orders closed within target</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≥ 90%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Safety incidents during maintenance</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>0</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Spare parts stockout events</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≤ 2</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>11. Training and Competence</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• All maintenance personnel trained in this procedure, LOTO, machine guarding, permit-to-work, first aid, and safe work practices (initial + annual refresher).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Competence recorded in the Training and Competence Matrix (TE-IMS-REG-TRN-001).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Specialist tasks (welding, hydraulics, HV electrical) require additional certification.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>12. References</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 9001:2015 — Clause 8.5 Production and Service Provision (Infrastructure 7.1.3).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 45001:2018 — Clause 8.1.2 Eliminating Hazards and Reducing OH&amp;S Risks.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 14001:2015 — Clause 8.1 Operational Planning and Control.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• MHRSD — Occupational Safety and Health Regulation (KSA).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• NCEC / MEWA — Environmental management requirements.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TEMC SOP-HSE-002 Confined Space; SOP-HSE-003 LOTO; SOP-HSE-004 Hot Work; SOP-MAINT-001 Machine Guarding; SOP-MAINT-002 Refueling; PROC-HSE-015 Waste and Spill; PROC-SYS-005 CAPA.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>13. Related Documents and Records</p>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Annual Maintenance Plan</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Maintenance Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Maintenance Work Order (FRM-MAINT-002)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Maintenance Supervisor</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Maintenance Log / Service Record (REG-MAINT-001)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Maintenance Supervisor</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Life of asset + 3 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Fuel / Refueling Log (REG-MAINT-002)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Maintenance Supervisor</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>LOTO Records</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE / Maintenance</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Hot Work Permits</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE / Maintenance</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Training and Competence Matrix (REG-TRN-001)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Training Coordinator</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Employment + 3 years</td>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Initial issue</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Joao Melo</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>01</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>10.04.2026</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Full rebuild — added definitions (MTBF, OEE, PM/PdM/CM/EM), responsibilities table, maintenance type/trigger/controls table, explicit mandatory safety controls (LOTO, guarding, hot work, confined space, spill, working at height), planning / execution / breakdown response / verification sections, KPI table with CEO review flag, records retention table, ISO clause anchors.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Maintenance Manager</td>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Prepared by (Maintenance Manager)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Reviewed by (HSE / QA / MR)</td>
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
