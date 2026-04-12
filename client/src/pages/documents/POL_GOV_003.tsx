// TE-IMS-POL-GOV-003 — Anti-Bribery and Ethics Policy
// Drafted to IMS standard. Content is original; aligned with Saudi Anti-Bribery Law (Royal Decree M/43),
// MHRSD regulations, ISO 9001:2015, ISO 14001:2015, ISO 45001:2018.
import { Link } from "wouter";
import Layout from "@/components/Layout";

export default function POL_GOV_003() {
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
                  TE-IMS-POL-GOV-003
                </span>
              </div>
              <h1 className="text-white text-2xl md:text-3xl font-extrabold leading-tight tracking-tight">
                Anti-Bribery and Ethics Policy
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
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>ANTI-BRIBERY AND ETHICS POLICY</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>ANTI-BRIBERY AND ETHICS POLICY</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Document</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>TE-IMS-POL-GOV-003</td>
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
              This Policy establishes the principles and mandatory requirements governing anti-bribery, anti-corruption, and ethical business conduct for True East Mining Company (TEMC) and all persons acting on its behalf. It applies to all employees, contractors, subcontractors, agents, consultants, joint venture partners, and any third party representing TEMC in any capacity, in the Kingdom of Saudi Arabia and in any other jurisdiction where TEMC operates.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
              This Policy is aligned with the Saudi Anti-Bribery Law (Royal Decree M/43), the Saudi Penal Code, the Combating Bribery Law, and international standards including the United Nations Convention Against Corruption (UNCAC), the US Foreign Corrupt Practices Act (FCPA), and the UK Bribery Act 2010 where applicable.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-6 pb-4" style={{ borderBottom: "2px solid #C49A28" }}>
            <h2 className="text-base font-bold mb-3" style={{ color: "#081C2E" }}>2. Policy Statement</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
              TEMC has zero tolerance for bribery, corruption, fraud, and unethical conduct in any form. The Company's reputation, licence to operate, and eligibility for government and private sector contracts depend entirely on the integrity of its people and its business practices. No business objective, commercial pressure, or instruction from any person — regardless of seniority — justifies a violation of this Policy.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
              TEMC is committed to acting professionally, fairly, and with integrity in all business dealings and relationships, and to implementing and enforcing effective systems to counter bribery and corruption.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-6 pb-4" style={{ borderBottom: "2px solid #C49A28" }}>
            <h2 className="text-base font-bold mb-3" style={{ color: "#081C2E" }}>3. Prohibited Conduct</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
              The following acts are strictly prohibited for all persons covered by this Policy:
            </p>

            <div className="overflow-x-auto mb-4 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                    <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>Prohibited Act</th>
                    <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C49A28" }}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                    <td className="px-3 py-2 text-xs font-semibold" style={{ color: "#081C2E" }}>Bribery</td>
                    <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>Offering, promising, giving, accepting, or soliciting any financial or non-financial advantage to influence a business or government decision.</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-xs font-semibold" style={{ color: "#081C2E" }}>Facilitation Payments</td>
                    <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>Unofficial payments to government officials or others to expedite routine actions. These are prohibited regardless of local practice or perceived necessity.</td>
                  </tr>
                  <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                    <td className="px-3 py-2 text-xs font-semibold" style={{ color: "#081C2E" }}>Kickbacks</td>
                    <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>Receiving or paying any commission, rebate, or benefit in exchange for directing business or awarding contracts.</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-xs font-semibold" style={{ color: "#081C2E" }}>Fraud and Falsification</td>
                    <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>Creating false records, falsifying invoices, misrepresenting costs, or concealing improper payments in any books or records.</td>
                  </tr>
                  <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                    <td className="px-3 py-2 text-xs font-semibold" style={{ color: "#081C2E" }}>Improper Gifts and Hospitality</td>
                    <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>Gifts, entertainment, or hospitality that could reasonably be perceived as influencing a business decision. Items above SAR 500 in value require prior written approval from the MD and must be logged on the Ethics Register.</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-xs font-semibold" style={{ color: "#081C2E" }}>Undisclosed Conflicts of Interest</td>
                    <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>Participating in decisions where a personal, financial, or family interest exists without prior disclosure to and clearance from the MD.</td>
                  </tr>
                  <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                    <td className="px-3 py-2 text-xs font-semibold" style={{ color: "#081C2E" }}>Improper Political Contributions</td>
                    <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>Donations to political parties, candidates, or causes made to secure business advantages or government favours.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-6 pb-4" style={{ borderBottom: "2px solid #C49A28" }}>
            <h2 className="text-base font-bold mb-3" style={{ color: "#081C2E" }}>4. Third-Party Due Diligence</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
              TEMC recognises that bribery and corruption risk can arise through third parties acting on its behalf. All agents, consultants, intermediaries, and significant subcontractors must be subject to due diligence proportionate to the risk and nature of the engagement before appointment. Due diligence records are maintained by the Management Representative.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
              Contracts with third parties must include anti-bribery and ethics clauses. Any third party found to be engaging in prohibited conduct on TEMC's behalf will have their engagement terminated immediately, and the matter will be reported to the appropriate authorities.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-6 pb-4" style={{ borderBottom: "2px solid #C49A28" }}>
            <h2 className="text-base font-bold mb-3" style={{ color: "#081C2E" }}>5. Reporting, Investigation, and Non-Retaliation</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
              Any person who suspects a violation of this Policy — or who is asked to act in a manner inconsistent with it — must report the matter promptly to their direct supervisor, the HR Manager, the Management Representative, or directly to the Managing Director. Reports may also be made anonymously through the TEMC Speak Up channel.
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
              TEMC will investigate all reports promptly, confidentially, and fairly. No person who makes a good-faith report will suffer any form of retaliation, including adverse employment decisions, demotion, harassment, or dismissal. Retaliation against a reporter is itself a disciplinary offence.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
              Confirmed violations will result in disciplinary action up to and including termination of employment or contract, and referral to the competent Saudi authorities where the conduct constitutes a criminal offence.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-6 pb-4" style={{ borderBottom: "2px solid #C49A28" }}>
            <h2 className="text-base font-bold mb-3" style={{ color: "#081C2E" }}>6. Training, Records, and Awareness</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
              All TEMC employees and relevant contractors receive anti-bribery and ethics training at induction and at least annually thereafter. Training completion is recorded in the Training and Competence Matrix (REG-TRN-001).
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
              The following records are maintained and available for audit: gifts and hospitality approvals above SAR 500; conflict of interest disclosures; third-party due diligence files; investigation reports; and training records. All records are retained for a minimum of five years.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-6 pb-4" style={{ borderBottom: "2px solid #C49A28" }}>
            <h2 className="text-base font-bold mb-3" style={{ color: "#081C2E" }}>7. Governance and Review</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
              This Policy is owned by the Managing Director. The Management Representative is responsible for day-to-day implementation, training coordination, and record maintenance. Policy effectiveness is reviewed at the annual Management Review (PROC-SYS-002) and updated whenever there is a material change in applicable law, business structure, or risk profile.
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-6 pb-4" style={{ borderBottom: "2px solid #C49A28" }}>
            <h2 className="text-base font-bold mb-3" style={{ color: "#081C2E" }}>8. Legal References</h2>
            <p className="text-sm leading-relaxed mb-2" style={{ color: "#374151" }}>This Policy is aligned with the following legal and regulatory instruments:</p>
            <ul className="text-sm leading-relaxed space-y-1 pl-4" style={{ color: "#374151" }}>
              <li>• Saudi Arabia — Anti-Bribery Law (Royal Decree M/43, 1412H)</li>
              <li>• Saudi Arabia — Combating Bribery Law and Saudi Penal Code</li>
              <li>• Saudi Arabia — National Anti-Corruption Commission (Nazaha) framework</li>
              <li>• United Nations Convention Against Corruption (UNCAC)</li>
              <li>• US Foreign Corrupt Practices Act (FCPA) — where applicable</li>
              <li>• UK Bribery Act 2010 — where applicable</li>
              <li>• ISO 37001:2016 Anti-Bribery Management Systems — reference standard</li>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Initial release — standalone Anti-Bribery and Ethics Policy with full operational detail, prohibited conduct table, third-party due diligence, and Saudi legal alignment.</td>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Reviewed by (HR / Legal)</td>
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
