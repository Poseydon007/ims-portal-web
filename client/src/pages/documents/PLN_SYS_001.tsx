// TE-IMS-PLN-SYS-001 — IMS Implementation Plan
// Design: Policy-standard layout — navy #081C2E, gold #C49A28
import { Link } from "wouter";

const logoUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663473952399/3YVZojsY2rei5QwThHiV6E/logo-trans_6f674faa.png";

const sections = [
  { id: "s1", label: "1. Purpose" },
  { id: "s2", label: "2. Scope" },
  { id: "s3", label: "3. IMS Framework and Standards" },
  { id: "s4", label: "4. Implementation Phases" },
  { id: "s5", label: "5. Roles and Responsibilities" },
  { id: "s6", label: "6. Document Control" },
  { id: "s7", label: "7. Training and Competence" },
  { id: "s8", label: "8. Internal Audit Programme" },
  { id: "s9", label: "9. Management Review" },
  { id: "s10", label: "10. Continual Improvement" },
];

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div id={id} className="mb-4 mt-8 first:mt-0">
      <h2 className="text-base font-bold pb-2" style={{ color: "#081C2E", borderBottom: "2px solid #C49A28" }}>
        {children}
      </h2>
    </div>
  );
}

export default function PLN_SYS_001() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f4f6f9" }}>
      {/* Breadcrumb */}
      <div className="container pt-4 pb-2">
        <div className="flex items-center gap-1.5 text-xs" style={{ color: "#6b7a8d" }}>
          <Link href="/" className="hover:underline" style={{ color: "#C49A28" }}>Portal Home</Link>
          <span>/</span>
          <Link href="/docs/pln" className="hover:underline" style={{ color: "#C49A28" }}>PLN — Plans</Link>
          <span>/</span>
          <span style={{ color: "#374151" }}>IMS Implementation Plan</span>
        </div>
      </div>

      {/* Page Title Bar */}
      <div className="container pb-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-xl font-extrabold" style={{ color: "#081C2E" }}>IMS Implementation Plan</h1>
            <div className="flex flex-wrap items-center gap-2 mt-1 text-xs" style={{ color: "#6b7a8d" }}>
              <span className="font-mono">TE-IMS-PLN-SYS-001_Rev01</span>
              <span>·</span>
              <span>12 Apr 2026</span>
              <span>·</span>
              <span className="px-2 py-0.5 rounded text-xs font-semibold" style={{ backgroundColor: "#d1fae5", color: "#065f46" }}>
                ✓ Approved for Implementation
              </span>
            </div>
          </div>
          <Link
            href="/docs/pln"
            className="shrink-0 text-xs font-medium px-3 py-1.5 rounded border hover:bg-gray-50 transition-colors"
            style={{ borderColor: "#dde3ec", color: "#374151" }}
          >
            ← Back to Plans
          </Link>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="container pb-16">
        <div className="flex gap-6 items-start">

          {/* Sidebar */}
          <aside className="hidden lg:block w-56 shrink-0 sticky top-6">
            <div className="rounded border bg-white p-4" style={{ borderColor: "#dde3ec" }}>
              <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#8a9ab0" }}>
                Document Info
              </div>
              <div className="space-y-2 text-xs mb-5">
                <div>
                  <div className="font-semibold" style={{ color: "#6b7a8d" }}>Document Code</div>
                  <div className="font-mono font-bold" style={{ color: "#081C2E" }}>TE-IMS-PLN-SYS-001</div>
                </div>
                <div>
                  <div className="font-semibold" style={{ color: "#6b7a8d" }}>Revision</div>
                  <div style={{ color: "#081C2E" }}>Rev 01</div>
                </div>
                <div>
                  <div className="font-semibold" style={{ color: "#6b7a8d" }}>Date</div>
                  <div style={{ color: "#081C2E" }}>12 Apr 2026</div>
                </div>
                <div>
                  <div className="font-semibold" style={{ color: "#6b7a8d" }}>Status</div>
                  <div style={{ color: "#065f46" }}>✓ Approved</div>
                </div>
                <div>
                  <div className="font-semibold" style={{ color: "#6b7a8d" }}>Category</div>
                  <div style={{ color: "#081C2E" }}>Plan</div>
                </div>
                <div>
                  <div className="font-semibold" style={{ color: "#6b7a8d" }}>Scope</div>
                  <div style={{ color: "#081C2E" }}>All TEMC operations, employees, contractors &amp; visitors</div>
                </div>
              </div>
              <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#8a9ab0" }}>
                Contents
              </div>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="block text-xs hover:underline" style={{ color: "#374151" }}>
                    {s.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Document */}
          <main className="flex-1 min-w-0">
            <div className="rounded border bg-white overflow-hidden" style={{ borderColor: "#dde3ec" }}>

              {/* Logo row */}
              <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: "#dde3ec" }}>
                <img src={logoUrl} alt="True East Mining Company" className="h-12 w-12 object-contain opacity-80" />
                <span className="text-xs font-mono" style={{ color: "#8a9ab0" }}>TE-IMS-PLN-SYS-001_Rev01</span>
              </div>

              {/* Dark title block */}
              <div className="px-6 py-5" style={{ backgroundColor: "#081C2E" }}>
                <h2 className="text-center text-lg font-extrabold tracking-widest uppercase" style={{ color: "#ffffff" }}>
                  IMS Implementation Plan
                </h2>
              </div>

              {/* Metadata table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr style={{ borderBottom: "1px solid #dde3ec" }}>
                      <td className="px-4 py-2.5 text-xs font-medium w-1/4" style={{ color: "#6b7a8d", backgroundColor: "#f9fafb" }}>Document</td>
                      <td className="px-4 py-2.5 text-xs font-mono w-1/4" style={{ color: "#081C2E" }}>TE-IMS-PLN-SYS-001</td>
                      <td className="px-4 py-2.5 text-xs font-medium w-1/4" style={{ color: "#6b7a8d", backgroundColor: "#f9fafb" }}>Revision</td>
                      <td className="px-4 py-2.5 text-xs w-1/4" style={{ color: "#081C2E" }}>01</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 text-xs font-medium" style={{ color: "#6b7a8d", backgroundColor: "#f9fafb" }}>Date</td>
                      <td className="px-4 py-2.5 text-xs" style={{ color: "#081C2E" }}>12 Apr 2026</td>
                      <td className="px-4 py-2.5 text-xs font-medium" style={{ color: "#6b7a8d", backgroundColor: "#f9fafb" }}>Status</td>
                      <td className="px-4 py-2.5 text-xs font-semibold" style={{ color: "#065f46" }}>Approved for Implementation</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Body */}
              <div className="px-6 py-6">

                <SectionHeading id="s1">1. Purpose</SectionHeading>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#374151" }}>
                  This Plan defines the structured approach by which True East Mining Company (TEMC) will establish, document, implement, and maintain its Integrated Management System (IMS) in accordance with ISO 9001:2015 (Quality), ISO 14001:2015 (Environment), and ISO 45001:2018 (Occupational Health and Safety). It sets out the phased implementation programme, assigns ownership for each workstream, and establishes the milestones against which progress will be measured and reported to the Managing Director.
                </p>

                <SectionHeading id="s2">2. Scope</SectionHeading>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#374151" }}>
                  This Plan applies to all TEMC operations, including drilling, exploration support, logistics, maintenance, and administration, across all sites and offices in the Kingdom of Saudi Arabia. It covers all employees, contractors, and subcontractors working under TEMC direction. The IMS is designed to be scalable as TEMC's operational footprint grows.
                </p>

                <SectionHeading id="s3">3. IMS Framework and Standards</SectionHeading>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
                  The TEMC IMS integrates three internationally recognised management system standards into a single unified framework, avoiding duplication and ensuring that quality, environmental, and occupational health and safety requirements are addressed together. The IMS is also aligned with the KSA Mining Investment Law, MHRSD OHS Regulations, and applicable Saudi Aramco and MEWA requirements where relevant to TEMC operations.
                </p>
                <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
                  <table className="w-full text-sm border-collapse">
                    <thead style={{ backgroundColor: "#081C2E" }}>
                      <tr>
                        <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Standard</th>
                        <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Focus Area</th>
                        <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>IMS Owner</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>ISO 9001:2015</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Quality Management — customer focus, process control, continual improvement</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Management Representative (MR)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>ISO 14001:2015</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Environmental Management — aspects and impacts, legal compliance, environmental performance</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                      </tr>
                      <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>ISO 45001:2018</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Occupational Health and Safety — hazard identification, risk control, worker participation</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <SectionHeading id="s4">4. Implementation Phases</SectionHeading>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
                  IMS implementation is structured across four phases. Each phase has defined deliverables, responsible parties, and target completion dates. Progress is reviewed monthly by the Management Representative and reported quarterly to the Managing Director.
                </p>
                <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
                  <table className="w-full text-sm border-collapse">
                    <thead style={{ backgroundColor: "#081C2E" }}>
                      <tr>
                        <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Phase</th>
                        <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Description</th>
                        <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Key Deliverables</th>
                        <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Target</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                        <td className="px-3 py-2 text-xs font-semibold" style={{ color: "#081C2E" }}>Phase 1 — Foundation</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Establish IMS governance, document structure, and core policies</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>IMS Playbook, Policy suite (GOV-001 to GOV-004), document numbering system, IMS Portal</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Q1 2026</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 text-xs font-semibold" style={{ color: "#081C2E" }}>Phase 2 — Procedures and Controls</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Develop all operational procedures, forms, and registers</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Full PROC, SOP, FRM, and REG document sets; training matrix; risk register</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Q2 2026</td>
                      </tr>
                      <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                        <td className="px-3 py-2 text-xs font-semibold" style={{ color: "#081C2E" }}>Phase 3 — Implementation and Training</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Deploy IMS across all active sites; conduct induction and role-specific training</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Training completion records, site inspections, toolbox talks, emergency drills</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Q3 2026</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 text-xs font-semibold" style={{ color: "#081C2E" }}>Phase 4 — Internal Audit and Review</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Conduct internal audit cycle; Management Review; prepare for external certification</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Internal audit reports, non-conformance register, Management Review minutes, certification readiness assessment</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Q4 2026</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <SectionHeading id="s5">5. Roles and Responsibilities</SectionHeading>
                <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
                  <table className="w-full text-sm border-collapse">
                    <thead style={{ backgroundColor: "#081C2E" }}>
                      <tr>
                        <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Role</th>
                        <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>IMS Responsibility</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                        <td className="px-3 py-2 text-xs font-semibold" style={{ color: "#081C2E" }}>Managing Director (MD)</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Overall accountability for IMS. Approves all policies and this Plan. Chairs Management Review. Provides resources.</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 text-xs font-semibold" style={{ color: "#081C2E" }}>Management Representative (MR)</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Day-to-day IMS coordination. Maintains document control. Manages internal audit programme. Reports IMS performance to MD.</td>
                      </tr>
                      <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                        <td className="px-3 py-2 text-xs font-semibold" style={{ color: "#081C2E" }}>HSE Manager</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Leads ISO 14001 and ISO 45001 workstreams. Develops and maintains HSE procedures, risk registers, and training records.</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 text-xs font-semibold" style={{ color: "#081C2E" }}>Department Heads / Site Supervisors</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Implement IMS requirements within their areas. Ensure staff are trained and procedures are followed. Report non-conformances.</td>
                      </tr>
                      <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                        <td className="px-3 py-2 text-xs font-semibold" style={{ color: "#081C2E" }}>All Employees and Contractors</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Follow IMS procedures. Report hazards, incidents, and non-conformances. Participate in training and drills.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <SectionHeading id="s6">6. Document Control</SectionHeading>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#374151" }}>
                  All IMS documents are controlled in accordance with PROC-SYS-001 (Document and Records Control Procedure). The IMS Document Portal serves as the single source of controlled documents. Printed copies are uncontrolled. Documents are reviewed at minimum annually or when triggered by a significant change in operations, legislation, or risk profile. Document numbering follows the TEMC IMS coding system defined in the IMS Playbook (TE-IMS-PLN-GOV-000).
                </p>

                <SectionHeading id="s7">7. Training and Competence</SectionHeading>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#374151" }}>
                  IMS awareness training is mandatory for all employees and relevant contractors. Role-specific IMS training requirements are defined in the Training and Competence Matrix (REG-TRN-001). The HSE Manager is responsible for scheduling, delivering, and recording IMS training. Training effectiveness is assessed through observation, testing, and incident analysis. Training records are maintained in the IMS Portal.
                </p>

                <SectionHeading id="s8">8. Internal Audit Programme</SectionHeading>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#374151" }}>
                  TEMC conducts a minimum of one full IMS internal audit cycle per year, covering all three standards (ISO 9001, ISO 14001, ISO 45001) and all operational areas. The audit programme is developed by the Management Representative and approved by the Managing Director. Auditors are independent of the area being audited. Non-conformances are recorded, root-caused, and closed out within agreed timeframes. The internal audit programme is governed by PROC-SYS-003 (Internal Audit Procedure).
                </p>

                <SectionHeading id="s9">9. Management Review</SectionHeading>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#374151" }}>
                  The Managing Director chairs an annual Management Review of the IMS. The review evaluates IMS performance, audit results, non-conformance trends, customer feedback, regulatory changes, and the suitability of the IMS policy and objectives. Outputs include decisions on resources, system improvements, and updates to this Implementation Plan. The Management Review is governed by PROC-SYS-002 (Management Review Procedure).
                </p>

                <SectionHeading id="s10">10. Continual Improvement</SectionHeading>
                <p className="text-sm leading-relaxed mb-8" style={{ color: "#374151" }}>
                  TEMC is committed to the continual improvement of its IMS. Improvement opportunities are identified through internal audits, incident investigations, management reviews, employee suggestions, and customer feedback. Corrective and preventive actions are tracked in the Non-Conformance and Corrective Action Register (REG-SYS-001). The effectiveness of corrective actions is verified before closure. Improvement trends are reported at each Management Review.
                </p>

                {/* Revision History */}
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
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>12.04.2026</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Initial release — IMS Implementation Plan covering phased rollout, roles, document control, audit programme, and management review framework.</td>
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
                        <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Role</th>
                        <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Name</th>
                        <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Signature</th>
                        <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Date</th>
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

              {/* Document footer bar */}
              <div className="px-6 py-3 flex items-center justify-between" style={{ backgroundColor: "#081C2E" }}>
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
                  True East Mining Company · Integrated Management System · Confidential · Page 1
                </span>
                <img src={logoUrl} alt="" className="h-6 w-6 object-contain opacity-40" />
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Site footer */}
      <footer className="border-t py-6" style={{ backgroundColor: "#081C2E", borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-2 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
          <div className="font-semibold" style={{ color: "rgba(255,255,255,0.7)" }}>
            TRUE EAST MINING COMPANY<br />
            <span className="font-normal text-xs">Integrated Management System · Document Portal</span>
          </div>
          <div className="text-center sm:text-right">
            All documents are controlled. Printed copies are uncontrolled.<br />
            © 2026 True East Mining Company. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
