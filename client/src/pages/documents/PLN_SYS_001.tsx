// TE-IMS-PLN-SYS-001 — IMS Implementation Plan
// Drafted in accordance with ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 requirements.
import { Link } from "wouter";
import Layout from "@/components/Layout";

export default function PLN_001() {
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
                  TE-IMS-PLN-SYS-001
                </span>
              </div>
              <h1 className="text-white text-2xl md:text-3xl font-extrabold leading-tight tracking-tight">
                IMS Implementation Plan
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
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>IMS IMPLEMENTATION PLAN</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>IMS IMPLEMENTATION PLAN</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Document</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>TE-IMS-PLN-SYS-001</td>
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
              </tbody>
            </table>
          </div>

          {/* Section divider helper */}
          <div className="mb-6" style={{ borderBottom: "1px solid #dde3ec" }} />

          {/* 1. Purpose */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>1. Purpose</h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#374151" }}>
            This Plan defines the structured approach by which True East Mining Company (TEMC) will establish, document, implement, and maintain its Integrated Management System (IMS) in accordance with ISO 9001:2015 (Quality), ISO 14001:2015 (Environment), and ISO 45001:2018 (Occupational Health and Safety). It sets out the phased implementation programme, assigns ownership for each workstream, and establishes the milestones against which progress will be measured and reported to the Managing Director.
          </p>

          {/* 2. Scope */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>2. Scope</h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#374151" }}>
            This Plan applies to all TEMC operations, including drilling, exploration support, logistics, maintenance, and administration, across all sites and offices in the Kingdom of Saudi Arabia. It covers all employees, contractors, and subcontractors working under TEMC direction. The IMS is designed to be scalable as TEMC's operational footprint grows.
          </p>

          {/* 3. IMS Framework */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>3. IMS Framework and Standards</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
            The TEMC IMS integrates three internationally recognised management system standards into a single unified framework, avoiding duplication and ensuring that quality, environmental, and occupational health and safety requirements are addressed together. The IMS is also aligned with the KSA Mining Investment Law, MHRSD OHS Regulations, and applicable Saudi Aramco and MEWA requirements where relevant to TEMC operations.
          </p>
          <div className="overflow-x-auto mb-8 rounded border" style={{ borderColor: "#dde3ec" }}>
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

          {/* 4. Implementation Phases */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>4. Implementation Phases</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
            IMS implementation is structured across four phases. Each phase has defined deliverables, responsible parties, and target completion dates. Progress is reviewed monthly by the Management Representative and reported quarterly to the Managing Director.
          </p>
          <div className="overflow-x-auto mb-8 rounded border" style={{ borderColor: "#dde3ec" }}>
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

          {/* 5. Roles and Responsibilities */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>5. Roles and Responsibilities</h2>
          <div className="overflow-x-auto mb-8 rounded border" style={{ borderColor: "#dde3ec" }}>
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

          {/* 6. Document Control */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>6. Document Control</h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#374151" }}>
            All IMS documents are controlled in accordance with PROC-SYS-001 (Document and Records Control Procedure). The IMS Document Portal serves as the single source of controlled documents. Printed copies are uncontrolled. Documents are reviewed at minimum annually or when triggered by a significant change in operations, legislation, or risk profile. Document numbering follows the TEMC IMS coding system defined in the IMS Playbook (TE-IMS-PLN-GOV-000).
          </p>

          {/* 7. Training and Competence */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>7. Training and Competence</h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#374151" }}>
            IMS awareness training is mandatory for all employees and relevant contractors. Role-specific IMS training requirements are defined in the Training and Competence Matrix (REG-TRN-001). The HSE Manager is responsible for scheduling, delivering, and recording IMS training. Training effectiveness is assessed through observation, testing, and incident analysis. Training records are maintained in the IMS Portal.
          </p>

          {/* 8. Internal Audit Programme */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>8. Internal Audit Programme</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
            TEMC conducts a minimum of one full IMS internal audit cycle per year, covering all three standards (ISO 9001, ISO 14001, ISO 45001) and all operational areas. The audit programme is developed by the Management Representative and approved by the Managing Director. Auditors are independent of the area being audited. Non-conformances are recorded, root-caused, and closed out within agreed timeframes. The internal audit programme is governed by PROC-SYS-003 (Internal Audit Procedure).
          </p>

          {/* 9. Management Review */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>9. Management Review</h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#374151" }}>
            The Managing Director chairs an annual Management Review of the IMS. The review evaluates IMS performance, audit results, non-conformance trends, customer feedback, regulatory changes, and the suitability of the IMS policy and objectives. Outputs include decisions on resources, system improvements, and updates to this Implementation Plan. The Management Review is governed by PROC-SYS-002 (Management Review Procedure).
          </p>

          {/* 10. Continual Improvement */}
          <h2 className="text-base font-bold mb-2" style={{ color: "#081C2E" }}>10. Continual Improvement</h2>
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
      </div>
    </Layout>
  );
}
