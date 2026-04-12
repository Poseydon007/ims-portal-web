// TE-IMS-PROC-MAINT-001 — TE-IMS-PROC-MAINT-001
// Auto-generated from source DOCX. Content is verbatim; only design/format changed.
import { Link } from "wouter";
import Layout from "@/components/Layout";

export default function TE_IMS_PROC_MAINT_001() {
  return (
    <Layout>
      {/* ── Document Header ── */}
      <div style={{ backgroundColor: "#081C2E" }} className="relative overflow-hidden">
        <div className="container pt-8 pb-6 relative z-10">
          <div className="flex flex-col gap-3">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: "rgba(196,154,40,0.15)", color: "#C49A28" }}>
                  Procedure
                </span>
                <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>
                  TE-IMS-PROC-MAINT-001
                </span>
              </div>
              <h1 className="text-white text-2xl md:text-3xl font-extrabold leading-tight tracking-tight">
                TE-IMS-PROC-MAINT-001
              </h1>
            </div>
            <div className="flex flex-wrap gap-4 mt-1">
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>Rev01</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>True East Mining Company</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>IMS — Procedure</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Back Navigation ── */}
      <div className="container pt-4 pb-2">
        <Link href="/docs/proc" className="text-xs font-medium hover:underline flex items-center gap-1" style={{ color: "#6b7a8d" }}>
          ← Back to Procedures
        </Link>
      </div>

      {/* ── Document Body ── */}
      <div className="container pb-16">
        <div className="max-w-4xl">


            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>MAINTENANCE MANAGEMENT PROCEDURE</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>MAINTENANCE MANAGEMENT PROCEDURE</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Document</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>TE-IMS-PROC-MAINT-001</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Revision</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>01</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Date</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>10.04.2026</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Status</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Approved for Implementation</td>
                </tr>
                </tbody>
              </table>
            </div>

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
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>Role</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>Responsibilities</th>
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
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>Type</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>Trigger</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>Key Controls</th>
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
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>KPI</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>Target</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>Frequency</th>
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
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>Record</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>Owner</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>Retention</th>
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
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>Rev</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>Date</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>Description of Changes</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>Author</th>
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
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>Role</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>Name</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>Signature</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>Date</th>
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
      </div>
    </Layout>
  );
}
