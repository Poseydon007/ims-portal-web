// TE-IMS-PLN-HSE-002 — Annual HSE Plan
import { Link } from "wouter";


const LOGO_GRAY = "https://d2xsxph8kpxj0f.cloudfront.net/310519663473952399/3YVZojsY2rei5QwThHiV6E/logo-trans_6f674faa.png";
const LOGO_WHITE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663473952399/3YVZojsY2rei5QwThHiV6E/logo-trans_6f674faa.png";

const sections = [
  { id: "s1", label: "1. Purpose" },
  { id: "s2", label: "2. Scope" },
  { id: "s3", label: "3. HSE Objectives and Targets 2026/27" },
  { id: "s4", label: "4. HSE Action Programme 2026/27" },
  { id: "s5", label: "5. HSE Performance Monitoring" },
  { id: "s6", label: "6. Incident Investigation and Corrective Action" },
  { id: "s7", label: "7. Legal and Other Requirements" },
  { id: "s8", label: "8. Plan Review and Update" },
];

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div id={id} className="mt-8 mb-3">
      <h2 className="text-base font-bold" style={{ color: "#081C2E" }}>{children}</h2>
      <div style={{ height: "2px", backgroundColor: "#C49A28", marginTop: "4px", width: "100%" }} />
    </div>
  );
}

export default function PLN_HSE_002() {
  return (
    <div style={{ backgroundColor: "#f4f6f9", minHeight: "100vh", fontFamily: "'Nunito Sans', sans-serif" }}>
      {/* Page header bar */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container py-3">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-xs" style={{ color: "#C49A28" }}>
                <Link href="/docs/pln" className="hover:underline font-semibold">PLN — Plans</Link>
                <span style={{ color: "#8a9ab0" }}>/</span>
                <span style={{ color: "#374151" }}>Annual HSE Plan</span>
              </div>
              <h1 className="text-lg font-bold" style={{ color: "#081C2E" }}>Annual HSE Plan</h1>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-PLN-HSE-002_Rev01</span>
                <span className="text-xs" style={{ color: "#8a9ab0" }}>·</span>
                <span className="text-xs" style={{ color: "#6b7a8d" }}>12 Apr 2026</span>
                <span className="text-xs" style={{ color: "#8a9ab0" }}>·</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ backgroundColor: "#d4edda", color: "#155724" }}>
                  ✓ Approved for Implementation
                </span>
              </div>
            </div>
            <Link href="/docs/pln" className="text-xs font-semibold px-3 py-1.5 rounded border hover:bg-gray-50 transition-colors" style={{ borderColor: "#dde3ec", color: "#081C2E" }}>
              ← Back to Plans
            </Link>
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
              {([
                ["Document Code", "TE-IMS-PLN-HSE-002"],
                ["Revision", "Rev 01"],
                ["Date", "12 April 2026"],
                ["Status", "✓ Approved"],
                ["Category", "Plan"],
                ["Scope", "All TEMC operations, employees, contractors & subcontractors"],
              ] as [string, string][]).map(([k, v]) => (
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
            {/* Doc header with logo */}
            <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: "#dde3ec", backgroundColor: "#fafbfc" }}>
              <img src={LOGO_GRAY} alt="True East Mining Company" style={{ width: "80px", height: "80px", objectFit: "contain" }} />
              <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-PLN-HSE-002_Rev01</div>
            </div>

            <div className="px-8 py-6">
              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Annual HSE Plan
                </h1>
              </div>

              {/* Metadata table */}
              <table className="w-full text-xs border-collapse mb-2" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-PLN-HSE-002</td>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Revision</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>01</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Date</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>12.04.2026</td>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Status</td>
                    <td className="border px-3 py-2 font-bold" style={{ borderColor: "#dde3ec", color: "#155724" }}>Approved for Implementation</td>
                  </tr>
                </tbody>
              </table>

              {/* Section 1 */}
              <SectionHeading id="s1">1. Purpose</SectionHeading>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#374151" }}>
                This Annual HSE Plan sets out the Health, Safety, and Environmental objectives, targets, and programmes for True East Mining Company (TEMC) for the plan period 1 April 2026 to 31 March 2027. It translates the commitments made in the Integrated HSE Policy (TE-IMS-POL-GOV-001) into specific, measurable actions with assigned owners and completion dates. Progress against this Plan is reviewed monthly by the HSE Manager and reported quarterly to the Managing Director at Management Review.
              </p>

              {/* Section 2 */}
              <SectionHeading id="s2">2. Scope</SectionHeading>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#374151" }}>
                This Plan applies to all TEMC operations, including drilling, exploration support, logistics, maintenance, and administration, across all sites and offices in the Kingdom of Saudi Arabia. It covers all employees, contractors, and subcontractors working under TEMC direction. Site-specific HSE plans may be developed for individual projects and must be consistent with this Plan.
              </p>

              {/* Section 3 */}
              <SectionHeading id="s3">3. HSE Objectives and Targets 2026/27</SectionHeading>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
                The following objectives and targets are set for the plan period. All targets are measurable and will be tracked through the HSE Performance Dashboard (REG-HSE-001).
              </p>
              <div className="overflow-x-auto mb-8 rounded border" style={{ borderColor: "#dde3ec" }}>
                <table className="w-full text-sm border-collapse">
                  <thead style={{ backgroundColor: "#081C2E" }}>
                    <tr>
                      <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Objective</th>
                      <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Target</th>
                      <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>KPI</th>
                      <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Owner</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Zero fatalities", "0 fatalities across all TEMC operations", "Fatality count", "HSE Manager"],
                      ["Reduce Lost Time Injuries", "LTIFR < 1.0 per million man-hours worked", "LTIFR (monthly)", "HSE Manager"],
                      ["Increase near miss reporting", "Minimum 2 near miss reports per site per month", "Near miss count (monthly)", "Site Supervisors"],
                      ["HSE training completion", "100% of required training completed on schedule per Training Matrix", "Training completion rate (%)", "HSE Manager"],
                      ["Emergency drill programme", "Minimum 1 full emergency drill per active site per quarter", "Drill completion rate (%)", "HSE Manager / Site Supervisors"],
                      ["Toolbox talk programme", "Minimum 1 toolbox talk per crew per week on all active sites", "Toolbox talk records (weekly)", "Site Supervisors"],
                      ["Planned Task Observations (PTOs)", "Minimum 4 PTOs per site per month by supervisors", "PTO count (monthly)", "Site Supervisors"],
                      ["Zero significant environmental incidents", "0 Level 2 or Level 3 environmental incidents", "Environmental incident count", "HSE Manager"],
                      ["Legal compliance", "Zero regulatory violations or enforcement actions", "Regulatory notices received", "HSE Manager / MR"],
                    ].map(([obj, tgt, kpi, owner], i) => (
                      <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "rgba(8,28,46,0.03)" : undefined }}>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>{obj}</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>{tgt}</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>{kpi}</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>{owner}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Section 4 */}
              <SectionHeading id="s4">4. HSE Action Programme 2026/27</SectionHeading>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
                The following actions are required to achieve the objectives above. Each action has a defined owner and target completion date. Status is reviewed monthly by the HSE Manager.
              </p>
              <div className="overflow-x-auto mb-8 rounded border" style={{ borderColor: "#dde3ec" }}>
                <table className="w-full text-sm border-collapse">
                  <thead style={{ backgroundColor: "#081C2E" }}>
                    <tr>
                      <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Action</th>
                      <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Owner</th>
                      <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Target Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Complete IMS induction training for all current employees and contractors", "HSE Manager", "June 2026"],
                      ["Conduct site-specific hazard identification and risk assessment for all active sites", "HSE Manager / Site Supervisors", "May 2026"],
                      ["Establish and activate the HSE Performance Dashboard (REG-HSE-001)", "HSE Manager", "April 2026"],
                      ["Conduct Q1 emergency drill on all active sites and record outcomes", "Site Supervisors", "June 2026"],
                      ["Complete first internal HSE audit across all active sites", "MR / HSE Manager", "September 2026"],
                      ["Review and update the Legal and Other Requirements Register (REG-SYS-002)", "MR / HSE Manager", "May 2026"],
                      ["Develop and issue site-specific emergency response cards for all active sites", "HSE Manager", "May 2026"],
                      ["Conduct annual Management Review and update IMS objectives for next plan period", "MD / MR", "March 2027"],
                    ].map(([action, owner, date], i) => (
                      <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "rgba(8,28,46,0.03)" : undefined }}>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>{action}</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>{owner}</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>{date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Section 5 */}
              <SectionHeading id="s5">5. HSE Performance Monitoring</SectionHeading>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
                HSE performance is monitored through both leading and lagging indicators. Leading indicators measure proactive HSE activity; lagging indicators measure outcomes. Both are tracked monthly in the HSE Performance Dashboard (REG-HSE-001) and reported to the Managing Director.
              </p>
              <div className="overflow-x-auto mb-8 rounded border" style={{ borderColor: "#dde3ec" }}>
                <table className="w-full text-sm border-collapse">
                  <thead style={{ backgroundColor: "#081C2E" }}>
                    <tr>
                      <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Indicator Type</th>
                      <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Metric</th>
                      <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Frequency</th>
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

              {/* Section 6 */}
              <SectionHeading id="s6">6. Incident Investigation and Corrective Action</SectionHeading>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#374151" }}>
                All incidents, near misses, and dangerous occurrences are investigated in accordance with PROC-HSE-002 (Incident Reporting and Investigation Procedure). The depth of investigation is proportional to the severity and potential severity of the event. Corrective and preventive actions arising from investigations are tracked in the Non-Conformance and Corrective Action Register (REG-SYS-001) and closed out within agreed timeframes. Lessons learned are communicated to all relevant sites.
              </p>

              {/* Section 7 */}
              <SectionHeading id="s7">7. Legal and Other Requirements</SectionHeading>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#374151" }}>
                TEMC maintains a Legal and Other Requirements Register (REG-SYS-002) that identifies all applicable HSE legislation, regulations, and other requirements. The register is reviewed at minimum annually and updated whenever a relevant change in law or regulation is identified. Compliance with all applicable requirements is verified through the internal audit programme and reported at Management Review. Key applicable frameworks include the Saudi Labour Law (Royal Decree M/51), MHRSD OHS Regulations, KSA Mining Investment Law, MEWA environmental regulations, and the requirements of ISO 14001:2015 and ISO 45001:2018.
              </p>

              {/* Section 8 */}
              <SectionHeading id="s8">8. Plan Review and Update</SectionHeading>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "#374151" }}>
                This Plan is reviewed quarterly by the HSE Manager and formally updated at the annual Management Review. The Plan may also be updated outside the normal cycle if there is a significant change in operations, risk profile, legislation, or following a serious incident. Updated versions are approved by the Managing Director and issued through the IMS Document Portal. All previous versions are archived in accordance with PROC-SYS-001.
              </p>

              {/* Revision History */}
              <SectionHeading id="s-rev">Revision History</SectionHeading>
              <div className="overflow-x-auto mb-8 rounded border" style={{ borderColor: "#dde3ec" }}>
                <table className="w-full text-xs border-collapse">
                  <thead style={{ backgroundColor: "#081C2E" }}>
                    <tr>
                      {["Rev", "Date", "Description of Changes", "Author"].map((h) => (
                        <th key={h} className="px-3 py-2 text-left font-semibold tracking-wide" style={{ color: "#ffffff" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-3 py-2 te-code" style={{ borderColor: "#edf0f5" }}>00</td>
                      <td className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>12.04.2026</td>
                      <td className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>Initial release — Annual HSE Plan for plan period April 2026 to March 2027.</td>
                      <td className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>MR</td>
                    </tr>
                    <tr style={{ borderTop: "1px solid #edf0f5" }}>
                      <td className="border px-3 py-2 te-code" style={{ borderColor: "#edf0f5" }}>01</td>
                      <td className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>12.04.2026</td>
                      <td className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>Approved for implementation.</td>
                      <td className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>MD</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Approval */}
              <SectionHeading id="s-approval">Approval</SectionHeading>
              <div className="overflow-x-auto rounded border" style={{ borderColor: "#dde3ec" }}>
                <table className="w-full text-xs border-collapse">
                  <thead style={{ backgroundColor: "#081C2E" }}>
                    <tr>
                      {["Role", "Name", "Signature", "Date"].map((h) => (
                        <th key={h} className="px-3 py-2 text-left font-semibold tracking-wide" style={{ color: "#ffffff" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {["Prepared by (Management Representative)", "Reviewed by (HSE Manager)", "Approved by (Managing Director / CEO)"].map((role) => (
                      <tr key={role} style={{ borderTop: "1px solid #edf0f5" }}>
                        <td className="border px-3 py-3 font-medium" style={{ borderColor: "#edf0f5" }}>{role}</td>
                        <td className="border px-3 py-3" style={{ borderColor: "#edf0f5" }}></td>
                        <td className="border px-3 py-3" style={{ borderColor: "#edf0f5" }}></td>
                        <td className="border px-3 py-3" style={{ borderColor: "#edf0f5" }}></td>
                      </tr>
                    ))}
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
      <footer className="border-t py-6" style={{ backgroundColor: "#081C2E", borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-2 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
          <div className="font-semibold" style={{ color: "rgba(255,255,255,0.7)" }}>TRUE EAST MINING COMPANY<br /><span className="font-normal text-xs">Integrated Management System · Document Portal</span></div>
          <div className="text-center sm:text-right">All documents are controlled. Printed copies are uncontrolled.<br />© 2026 True East Mining Company. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
