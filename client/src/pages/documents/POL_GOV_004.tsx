// TE-IMS-POL-GOV-004 — Drug and Alcohol Free Workplace Policy
// Drafted to IMS standard. Content is original; aligned with Saudi Labour Law, MHRSD OHS Regulations,
// ISO 45001:2018, and Saudi Anti-Narcotics Law (Royal Decree M/39).
import { Link } from "wouter";
import Layout from "@/components/Layout";

export default function POL_GOV_004() {
  return (
    <Layout>
      {/* ── Document Header ── */}
      <div style={{ backgroundColor: "#081C2E" }} className="relative overflow-hidden">
        <div className="container pt-8 pb-6 relative z-10">
          <div className="flex flex-col gap-3">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: "rgba(196,154,40,0.15)", color: "#C49A28" }}>
                  Policy
                </span>
                <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>
                  TE-IMS-POL-GOV-004
                </span>
              </div>
              <h1 className="text-white text-2xl md:text-3xl font-extrabold leading-tight tracking-tight">
                Drug and Alcohol Free Workplace Policy
              </h1>
            </div>
            <div className="flex flex-wrap gap-4 mt-1">
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>Rev01</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>True East Mining Company</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>IMS — Policy</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Back Navigation ── */}
      <div className="container pt-4 pb-2">
        <Link href="/docs/pol" className="text-xs font-medium hover:underline flex items-center gap-1" style={{ color: "#6b7a8d" }}>
          ← Back to Policies
        </Link>
      </div>

      {/* ── Document Body ── */}
      <div className="container pb-16">
        <div className="max-w-4xl">

          {/* Document Control Table */}
          <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
            <table className="w-full text-sm border-collapse">
              <thead style={{ backgroundColor: "#081C2E" }}>
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>DRUG AND ALCOHOL FREE WORKPLACE POLICY</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>DRUG AND ALCOHOL FREE WORKPLACE POLICY</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Document</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>TE-IMS-POL-GOV-004</td>
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

          {/* Section 1 */}
          <div className="mb-6 pb-4" style={{ borderBottom: "2px solid #C49A28" }}>
            <h2 className="text-base font-bold mb-3" style={{ color: "#081C2E" }}>1. Purpose and Scope</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
              This Policy establishes the requirements for a drug and alcohol free workplace at True East Mining Company (TEMC). It applies to all employees, contractors, subcontractors, visitors, and any other person present at any TEMC workplace, site, vehicle, or facility in the Kingdom of Saudi Arabia.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
              Mining and drilling operations involve heavy machinery, explosives, elevated structures, confined spaces, and high-energy systems. The presence of any person under the influence of drugs or alcohol creates an unacceptable risk of serious injury or death to themselves and others. This Policy is non-negotiable and will be enforced without exception.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-6 pb-4" style={{ borderBottom: "2px solid #C49A28" }}>
            <h2 className="text-base font-bold mb-3" style={{ color: "#081C2E" }}>2. Policy Statement</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
              TEMC is committed to maintaining a workplace that is completely free from the use, possession, distribution, or influence of alcohol, illegal drugs, and any substance that impairs cognitive or physical function. This commitment is grounded in our duty of care to all personnel, our obligations under Saudi law, and our IMS standards.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
              TEMC fully supports the Kingdom of Saudi Arabia&apos;s position on alcohol and narcotics. Alcohol is prohibited in the Kingdom, and TEMC will not tolerate any attempt to introduce, possess, or consume alcohol on any TEMC site or in any TEMC vehicle or accommodation.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-6 pb-4" style={{ borderBottom: "2px solid #C49A28" }}>
            <h2 className="text-base font-bold mb-3" style={{ color: "#081C2E" }}>3. Prohibited Substances and Conduct</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
              The following are strictly prohibited at all TEMC workplaces, sites, vehicles, and accommodation facilities:
            </p>

            <div className="overflow-x-auto mb-4 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                    <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>Category</th>
                    <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>Prohibited Conduct</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                    <td className="px-3 py-2 text-xs font-semibold" style={{ color: "#081C2E" }}>Alcohol</td>
                    <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>Possession, consumption, distribution, or reporting to work under the influence of alcohol in any form.</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-xs font-semibold" style={{ color: "#081C2E" }}>Illegal Drugs</td>
                    <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>Possession, use, distribution, or being under the influence of any narcotic, controlled substance, or illegal drug as defined under Saudi law.</td>
                  </tr>
                  <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                    <td className="px-3 py-2 text-xs font-semibold" style={{ color: "#081C2E" }}>Prescription Medication</td>
                    <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>Operating machinery, driving, or performing safety-critical tasks while taking prescription medication that causes drowsiness, impaired judgement, or reduced reaction time, without prior disclosure to and clearance from the HSE Manager.</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-xs font-semibold" style={{ color: "#081C2E" }}>Other Impairing Substances</td>
                    <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>Use of any substance — including solvents, inhalants, or non-prescribed stimulants — that impairs cognitive or physical performance.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-6 pb-4" style={{ borderBottom: "2px solid #C49A28" }}>
            <h2 className="text-base font-bold mb-3" style={{ color: "#081C2E" }}>4. Testing</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
              TEMC reserves the right to conduct drug and alcohol testing in the following circumstances:
            </p>
            <ul className="text-sm leading-relaxed space-y-2 pl-4 mb-3" style={{ color: "#374151" }}>
              <li>• <strong>Pre-employment</strong> — as a condition of offer for all positions involving safety-critical tasks.</li>
              <li>• <strong>Post-incident</strong> — following any workplace accident, near miss, or dangerous occurrence where impairment may have been a contributing factor.</li>
              <li>• <strong>Reasonable cause</strong> — when a supervisor has objective grounds to believe a person is impaired (e.g., slurred speech, unsteady movement, odour, erratic behaviour).</li>
              <li>• <strong>Random</strong> — unannounced random testing may be conducted at any TEMC site at the discretion of the HSE Manager.</li>
            </ul>
            <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
              Refusal to submit to a lawfully requested test will be treated as a positive result and will result in immediate removal from site and disciplinary action.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-6 pb-4" style={{ borderBottom: "2px solid #C49A28" }}>
            <h2 className="text-base font-bold mb-3" style={{ color: "#081C2E" }}>5. Consequences of Violation</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
              Any person found to be in violation of this Policy will be removed from the TEMC site immediately. For employees, violations will result in disciplinary action up to and including summary dismissal, in accordance with the Saudi Labour Law and TEMC&apos;s disciplinary procedures. For contractors and subcontractors, violations will result in immediate removal from site and notification to the contracting company; repeat violations may result in contract termination.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
              Where a violation constitutes a criminal offence under Saudi law — including possession or distribution of narcotics — TEMC will report the matter to the competent Saudi authorities without exception.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-6 pb-4" style={{ borderBottom: "2px solid #C49A28" }}>
            <h2 className="text-base font-bold mb-3" style={{ color: "#081C2E" }}>6. Support and Rehabilitation</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
              TEMC recognises that substance dependency is a health condition. Any employee who voluntarily discloses a dependency issue before a violation occurs, and who actively participates in a recognised rehabilitation programme, will be treated with confidentiality and supported through an agreed return-to-work plan. Voluntary disclosure does not exempt an employee from fitness-for-duty requirements or from the prohibition on working under the influence.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-6 pb-4" style={{ borderBottom: "2px solid #C49A28" }}>
            <h2 className="text-base font-bold mb-3" style={{ color: "#081C2E" }}>7. Prescription Medication Disclosure</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
              Employees taking prescription medication that may affect their ability to safely perform their duties must disclose this to the HSE Manager before commencing work. The HSE Manager, in consultation with the employee and where necessary a medical professional, will determine appropriate work restrictions or temporary redeployment. Disclosures are treated in strict confidence.
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-6 pb-4" style={{ borderBottom: "2px solid #C49A28" }}>
            <h2 className="text-base font-bold mb-3" style={{ color: "#081C2E" }}>8. Training and Awareness</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
              All employees and relevant contractors receive drug and alcohol awareness training at induction. Supervisors receive additional training on recognising signs of impairment and on the correct procedure for requesting a test. Training completion is recorded in the Training and Competence Matrix (REG-TRN-001).
            </p>
          </div>

          {/* Section 9 */}
          <div className="mb-6 pb-4" style={{ borderBottom: "2px solid #C49A28" }}>
            <h2 className="text-base font-bold mb-3" style={{ color: "#081C2E" }}>9. Governance and Review</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
              This Policy is owned by the Managing Director. The HSE Manager is responsible for day-to-day implementation, testing coordination, and record maintenance. Policy effectiveness is reviewed at the annual Management Review (PROC-SYS-002) and updated whenever there is a material change in applicable law, site risk profile, or operational structure.
            </p>
          </div>

          {/* Section 10 */}
          <div className="mb-6 pb-4" style={{ borderBottom: "2px solid #C49A28" }}>
            <h2 className="text-base font-bold mb-3" style={{ color: "#081C2E" }}>10. Legal References</h2>
            <ul className="text-sm leading-relaxed space-y-1 pl-4" style={{ color: "#374151" }}>
              <li>• Saudi Arabia — Anti-Narcotics Law (Royal Decree M/39, 1428H)</li>
              <li>• Saudi Arabia — Labour Law (Royal Decree M/51) and MHRSD OHS Regulations</li>
              <li>• Saudi Arabia — General Commission for Narcotic Control (GCNC) framework</li>
              <li>• ISO 45001:2018 — Occupational Health and Safety Management Systems</li>
              <li>• TEMC Integrated HSE Policy (TE-IMS-POL-GOV-001)</li>
              <li>• TEMC Incident Reporting and Investigation Procedure (PROC-HSE-002)</li>
            </ul>
          </div>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Initial release — Drug and Alcohol Free Workplace Policy with full operational requirements, testing framework, Saudi legal alignment, and prescription medication disclosure process.</td>
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
