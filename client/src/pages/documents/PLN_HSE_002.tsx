// TE-IMS-PLN-HSE-002 — Annual HSE Plan
// Drafted in accordance with ISO 14001:2015 and ISO 45001:2018 requirements.
import { Link } from "wouter";
import Layout from "@/components/Layout";

export default function PLN_002() {
  return (
    <Layout>
      {/* ── Document Header ── */}
      <div style={{ backgroundColor: "#081C2E" }} className="relative overflow-hidden">
        <div className="container pt-8 pb-6 relative z-10">
          <div className="flex flex-col gap-3">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: "rgba(196,154,40,0.15)", color: "#C49A28" }}>
                  Plan
                </span>
                <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>
                  TE-IMS-PLN-HSE-002
                </span>
              </div>
              <h1 className="text-white text-2xl md:text-3xl font-extrabold leading-tight tracking-tight">
                Annual HSE Plan
              </h1>
            </div>
            <div className="flex flex-wrap gap-4 mt-1">
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>Rev01</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>True East Mining Company</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>IMS — Plan</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Back Navigation ── */}
      <div className="container pt-4 pb-2">
        <Link href="/docs/pln" className="text-xs font-medium hover:underline flex items-center gap-1" style={{ color: "#6b7a8d" }}>
          ← Back to Plans
        </Link>
      </div>

      {/* ── Document Body ── */}
      <div className="container pb-16">
        <div className="max-w-4xl">

          {/* Document Control Table */}
          <div className="overflow-x-auto mb-8 rounded border" style={{ borderColor: "#dde3ec" }}>
            <table className="w-full text-sm border-collapse">
              <thead style={{ backgroundColor: "#081C2E" }}>
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>ANNUAL HSE PLAN</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>ANNUAL HSE PLAN</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Document</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>TE-IMS-PLN-HSE-002</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Revision</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>01</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Date</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>12.04.2026</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Status</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Approved for Implementation</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Plan Period</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>1 April 2026 — 31 March 2027</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mb-6" style={{ borderBottom: "1px solid #dde3ec" }} />

          {/* 1. Purpose */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>1. Purpose</h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#374151" }}>
            This Annual HSE Plan sets out the Health, Safety, and Environmental objectives, targets, and programmes for True East Mining Company (TEMC) for the plan period 1 April 2026 to 31 March 2027. It translates the commitments made in the Integrated HSE Policy (TE-IMS-POL-GOV-001) into specific, measurable actions with assigned owners and completion dates. Progress against this Plan is reviewed monthly by the HSE Manager and reported quarterly to the Managing Director at Management Review.
          </p>

          {/* 2. Scope */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>2. Scope</h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#374151" }}>
            This Plan applies to all TEMC operations, including drilling, exploration support, logistics, maintenance, and administration, across all sites and offices in the Kingdom of Saudi Arabia. It covers all employees, contractors, and subcontractors working under TEMC direction. Site-specific HSE plans may be developed for individual projects and must be consistent with this Plan.
          </p>

          {/* 3. HSE Objectives and Targets */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>3. HSE Objectives and Targets 2026/27</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
            The following objectives and targets are set for the plan period. All targets are measurable and will be tracked through the HSE Performance Dashboard (REG-HSE-001).
          </p>
          <div className="overflow-x-auto mb-8 rounded border" style={{ borderColor: "#dde3ec" }}>
            <table className="w-full text-sm border-collapse">
              <thead style={{ backgroundColor: "#081C2E" }}>
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>Objective</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>Target</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>KPI</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>Owner</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Zero fatalities</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>0 fatalities across all TEMC operations</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Fatality count</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Reduce Lost Time Injuries</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>LTIFR &lt; 1.0 per million man-hours worked</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>LTIFR (monthly)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Increase near miss reporting</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Minimum 2 near miss reports per site per month</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Near miss count (monthly)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site Supervisors</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE training completion</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100% of required training completed on schedule per Training Matrix</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Training completion rate (%)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Emergency drill programme</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Minimum 1 full emergency drill per active site per quarter</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Drill completion rate (%)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager / Site Supervisors</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Toolbox talk programme</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Minimum 1 toolbox talk per crew per week on all active sites</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Toolbox talk records (weekly)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site Supervisors</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Planned Task Observations (PTOs)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Minimum 4 PTOs per site per month by supervisors</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>PTO count (monthly)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site Supervisors</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Zero significant environmental incidents</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>0 Level 2 or Level 3 environmental incidents</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Environmental incident count</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Legal compliance</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Zero regulatory violations or enforcement actions</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Regulatory notices received</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager / MR</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 4. HSE Action Programme */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>4. HSE Action Programme 2026/27</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
            The following actions are required to achieve the objectives above. Each action has a defined owner and target completion date. Status is reviewed monthly by the HSE Manager.
          </p>
          <div className="overflow-x-auto mb-8 rounded border" style={{ borderColor: "#dde3ec" }}>
            <table className="w-full text-sm border-collapse">
              <thead style={{ backgroundColor: "#081C2E" }}>
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>Action</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>Owner</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>Target Date</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Complete IMS induction training for all current employees and contractors</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>June 2026</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Conduct site-specific hazard identification and risk assessment for all active sites</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager / Site Supervisors</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>May 2026</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Establish and activate the HSE Performance Dashboard (REG-HSE-001)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>April 2026</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Conduct Q1 emergency drill on all active sites and record outcomes</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site Supervisors</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>June 2026</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Complete first internal HSE audit across all active sites</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MR / HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>September 2026</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Review and update the Legal and Other Requirements Register (REG-SYS-002)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MR / HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>May 2026</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Develop and issue site-specific emergency response cards for all active sites</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>May 2026</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Conduct annual Management Review and update IMS objectives for next plan period</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MD / MR</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>March 2027</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 5. HSE Performance Monitoring */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>5. HSE Performance Monitoring</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
            HSE performance is monitored through both leading and lagging indicators. Leading indicators measure proactive HSE activity; lagging indicators measure outcomes. Both are tracked monthly in the HSE Performance Dashboard (REG-HSE-001) and reported to the Managing Director.
          </p>
          <div className="overflow-x-auto mb-8 rounded border" style={{ borderColor: "#dde3ec" }}>
            <table className="w-full text-sm border-collapse">
              <thead style={{ backgroundColor: "#081C2E" }}>
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>Indicator Type</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>Metric</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>Frequency</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs font-semibold" style={{ color: "#081C2E" }}>Leading</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Toolbox talks conducted, PTOs completed, near misses reported, training hours delivered, drills conducted, inspections completed</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs font-semibold" style={{ color: "#081C2E" }}>Lagging</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Fatalities, Lost Time Injuries (LTIs), Medical Treatment Cases (MTCs), Recordable Incidents, LTIFR, TRIFR, environmental incidents, regulatory notices</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 6. Incident Investigation */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>6. Incident Investigation and Corrective Action</h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#374151" }}>
            All incidents, near misses, and dangerous occurrences are investigated in accordance with PROC-HSE-002 (Incident Reporting and Investigation Procedure). The depth of investigation is proportional to the severity and potential severity of the event. Corrective and preventive actions arising from investigations are tracked in the Non-Conformance and Corrective Action Register (REG-SYS-001) and closed out within agreed timeframes. Lessons learned are communicated to all relevant sites.
          </p>

          {/* 7. Legal Compliance */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>7. Legal and Other Requirements</h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#374151" }}>
            TEMC maintains a Legal and Other Requirements Register (REG-SYS-002) that identifies all applicable HSE legislation, regulations, and other requirements. The register is reviewed at minimum annually and updated whenever a relevant change in law or regulation is identified. Compliance with all applicable requirements is verified through the internal audit programme and reported at Management Review. Key applicable frameworks include the Saudi Labour Law (Royal Decree M/51), MHRSD OHS Regulations, KSA Mining Investment Law, MEWA environmental regulations, and the requirements of ISO 14001:2015 and ISO 45001:2018.
          </p>

          {/* 8. Review and Update */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>8. Plan Review and Update</h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "#374151" }}>
            This Plan is reviewed quarterly by the HSE Manager and formally updated at the annual Management Review. The Plan may also be updated outside the normal cycle if there is a significant change in operations, risk profile, legislation, or following a serious incident. Updated versions are approved by the Managing Director and issued through the IMS Document Portal. All previous versions are archived in accordance with PROC-SYS-001.
          </p>

          {/* Revision History */}
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>12.04.2026</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Initial release — Annual HSE Plan for plan period April 2026 to March 2027. Includes HSE objectives, targets, action programme, performance monitoring framework, and legal compliance requirements.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MR</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>01</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>12.04.2026</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Approved for implementation.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MD</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Approval Table */}
          <div className="overflow-x-auto rounded border" style={{ borderColor: "#dde3ec" }}>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Prepared by (Management Representative)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Reviewed by (HSE Manager)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Approved by (Managing Director / CEO)</td>
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
