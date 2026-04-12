// TE-IMS-POL-GOV-003 Rev01 — Anti-Bribery and Ethics Policy
// Design: Standardized POL layout — left sidebar (Doc Info + TOC) + main content area
// Aligned with Saudi Anti-Bribery Law (Royal Decree M/43), ISO 9001/14001/45001

import { Link } from "wouter";
import { TopNav, Footer, Breadcrumb } from "@/components/Layout";
import { LOGO_GRAY, LOGO_WHITE } from "@/lib/imsData";

const sections = [
  { id: "s1", label: "1. Purpose and Scope" },
  { id: "s2", label: "2. Policy Statement" },
  { id: "s3", label: "3. Prohibited Conduct" },
  { id: "s4", label: "4. Third-Party Due Diligence" },
  { id: "s5", label: "5. Reporting and Non-Retaliation" },
  { id: "s6", label: "6. Training and Records" },
  { id: "s7", label: "7. Governance and Review" },
  { id: "s8", label: "8. Legal References" },
  { id: "s9", label: "9. Revision History" },
  { id: "s10", label: "10. Approval" },
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

export default function POL_GOV_003() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "POL — Policies", href: "/docs/pol" },
          { label: "Anti-Bribery and Ethics Policy" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              Anti-Bribery and Ethics Policy
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-POL-GOV-003_Rev01</span>
              <span style={{ color: "#c0c8d4" }}>·</span>
              <span className="text-xs" style={{ color: "#6b7a8d" }}>12 Apr 2026</span>
              <span style={{ color: "#c0c8d4" }}>·</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: "#d4edda", color: "#155724" }}>
                ✓ Approved for Implementation
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/docs/pol" className="text-xs font-semibold px-3 py-1.5 rounded border hover:bg-gray-50 transition-colors" style={{ borderColor: "#dde3ec", color: "#081C2E" }}>
              ← Back to Policies
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
                ["Document Code", "TE-IMS-POL-GOV-003"],
                ["Revision", "Rev 01"],
                ["Date", "12 April 2026"],
                ["Status", "✓ Approved"],
                ["Category", "Policy"],
                ["Scope", "All TEMC operations, personnel, contractors & visitors"],
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-POL-GOV-003_Rev01</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Anti-Bribery and Ethics Policy
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-2" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-POL-GOV-003</td>
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
              <SectionHeading id="s1">1. Purpose and Scope</SectionHeading>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
                This Policy establishes the principles and mandatory requirements governing anti-bribery, anti-corruption, and ethical business conduct for True East Mining Company (TEMC) and all persons acting on its behalf. It applies to all employees, contractors, subcontractors, agents, consultants, joint venture partners, and any third party representing TEMC in any capacity, in the Kingdom of Saudi Arabia and in any other jurisdiction where TEMC operates.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                This Policy is aligned with the Saudi Anti-Bribery Law (Royal Decree M/43), the Saudi Penal Code, the Combating Bribery Law, and international standards including the United Nations Convention Against Corruption (UNCAC), the US Foreign Corrupt Practices Act (FCPA), and the UK Bribery Act 2010 where applicable.
              </p>

              {/* Section 2 */}
              <SectionHeading id="s2">2. Policy Statement</SectionHeading>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
                TEMC has zero tolerance for bribery, corruption, fraud, and unethical conduct in any form. The Company's reputation, licence to operate, and eligibility for government and private sector contracts depend entirely on the integrity of its people and its business practices. No business objective, commercial pressure, or instruction from any person — regardless of seniority — justifies a violation of this Policy.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                TEMC is committed to acting professionally, fairly, and with integrity in all business dealings and relationships, and to implementing and enforcing effective systems to counter bribery and corruption.
              </p>

              {/* Section 3 */}
              <SectionHeading id="s3">3. Prohibited Conduct</SectionHeading>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
                The following acts are strictly prohibited for all persons covered by this Policy:
              </p>
              <table className="w-full text-xs border-collapse mb-4">
                <thead>
                  <tr style={{ backgroundColor: "#081C2E" }}>
                    {["Prohibited Act", "Description"].map((h) => (
                      <th key={h} className="text-left px-3 py-2 font-semibold tracking-wide" style={{ color: "#ffffff" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Bribery", "Offering, promising, giving, accepting, or soliciting any financial or non-financial advantage to influence a business or government decision."],
                    ["Facilitation Payments", "Unofficial payments to government officials or others to expedite routine actions. These are prohibited regardless of local practice or perceived necessity."],
                    ["Kickbacks", "Receiving or paying any commission, rebate, or benefit in exchange for directing business or awarding contracts."],
                    ["Fraud and Falsification", "Creating false records, falsifying invoices, misrepresenting costs, or concealing improper payments in any books or records."],
                    ["Improper Gifts and Hospitality", "Gifts, entertainment, or hospitality that could reasonably be perceived as influencing a business decision. Items above SAR 500 in value require prior written approval from the MD and must be logged on the Ethics Register."],
                    ["Undisclosed Conflicts of Interest", "Participating in decisions where a personal, financial, or family interest exists without prior disclosure to and clearance from the MD."],
                    ["Improper Political Contributions", "Donations to political parties, candidates, or causes made to secure business advantages or government favours."],
                  ].map(([act, desc], i) => (
                    <tr key={act} style={{ backgroundColor: i % 2 === 0 ? "rgba(8,28,46,0.03)" : "#fff", borderTop: "1px solid #edf0f5" }}>
                      <td className="px-3 py-2 font-semibold" style={{ color: "#081C2E" }}>{act}</td>
                      <td className="px-3 py-2" style={{ color: "#374151" }}>{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Section 4 */}
              <SectionHeading id="s4">4. Third-Party Due Diligence</SectionHeading>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
                TEMC recognises that bribery and corruption risk can arise through third parties acting on its behalf. All agents, consultants, intermediaries, and significant subcontractors must be subject to due diligence proportionate to the risk and nature of the engagement before appointment. Due diligence records are maintained by the Management Representative.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                Contracts with third parties must include anti-bribery and ethics clauses. Any third party found to be engaging in prohibited conduct on TEMC's behalf will have their engagement terminated immediately, and the matter will be reported to the appropriate authorities.
              </p>

              {/* Section 5 */}
              <SectionHeading id="s5">5. Reporting, Investigation, and Non-Retaliation</SectionHeading>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
                Any person who suspects a violation of this Policy — or who is asked to act in a manner inconsistent with it — must report the matter promptly to their direct supervisor, the HR Manager, the Management Representative, or directly to the Managing Director. Reports may also be made anonymously through the TEMC Speak Up channel.
              </p>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
                TEMC will investigate all reports promptly, confidentially, and fairly. No person who makes a good-faith report will suffer any form of retaliation, including adverse employment decisions, demotion, harassment, or dismissal. Retaliation against a reporter is itself a disciplinary offence.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                Confirmed violations will result in disciplinary action up to and including termination of employment or contract, and referral to the competent Saudi authorities where the conduct constitutes a criminal offence.
              </p>

              {/* Section 6 */}
              <SectionHeading id="s6">6. Training, Records, and Awareness</SectionHeading>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
                All TEMC employees and relevant contractors receive anti-bribery and ethics training at induction and at least annually thereafter. Training completion is recorded in the Training and Competence Matrix (REG-TRN-001).
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                The following records are maintained and available for audit: gifts and hospitality approvals above SAR 500; conflict of interest disclosures; third-party due diligence files; investigation reports; and training records. All records are retained for a minimum of five years.
              </p>

              {/* Section 7 */}
              <SectionHeading id="s7">7. Governance and Review</SectionHeading>
              <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                This Policy is owned by the Managing Director. The Management Representative is responsible for day-to-day implementation, training coordination, and record maintenance. Policy effectiveness is reviewed at the annual Management Review (PROC-SYS-002) and updated whenever there is a material change in applicable law, business structure, or risk profile.
              </p>

              {/* Section 8 */}
              <SectionHeading id="s8">8. Legal References</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                {[
                  "Saudi Arabia — Anti-Bribery Law (Royal Decree M/43, 1412H)",
                  "Saudi Arabia — Combating Bribery Law and Saudi Penal Code",
                  "Saudi Arabia — National Anti-Corruption Commission (Nazaha) framework",
                  "United Nations Convention Against Corruption (UNCAC)",
                  "US Foreign Corrupt Practices Act (FCPA) — where applicable",
                  "UK Bribery Act 2010 — where applicable",
                  "ISO 37001:2016 Anti-Bribery Management Systems — reference standard",
                ].map((ref) => (
                  <li key={ref} className="flex gap-2 text-sm" style={{ color: "#374151" }}>
                    <span style={{ color: "#C49A28" }}>•</span>
                    <span>{ref}</span>
                  </li>
                ))}
              </ul>

              {/* Section 9 — Revision History */}
              <SectionHeading id="s9">9. Revision History</SectionHeading>
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#081C2E" }}>
                    {["Rev", "Date", "Description of Changes", "Author"].map((h) => (
                      <th key={h} className="text-left px-3 py-2 font-semibold tracking-wide" style={{ color: "#ffffff" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["00", "12.04.2026", "Initial release — standalone Anti-Bribery and Ethics Policy with full operational detail, prohibited conduct table, third-party due diligence, and Saudi legal alignment.", "MR"],
                    ["01", "12.04.2026", "Approved for implementation.", "MD"],
                  ].map(([rev, date, desc, author], i) => (
                    <tr key={rev} style={{ borderTop: i > 0 ? "1px solid #edf0f5" : undefined }}>
                      <td className="border px-3 py-2 te-code" style={{ borderColor: "#edf0f5" }}>{rev}</td>
                      <td className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>{date}</td>
                      <td className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>{desc}</td>
                      <td className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>{author}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Section 10 — Approval */}
              <SectionHeading id="s10">10. Approval</SectionHeading>
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#081C2E" }}>
                    {["Role", "Name", "Signature", "Date"].map((h) => (
                      <th key={h} className="text-left px-3 py-2 font-semibold tracking-wide" style={{ color: "#ffffff" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Prepared by (Management Representative)",
                    "Reviewed by (HSE / QA)",
                    "Approved by (Managing Director / CEO)",
                  ].map((role, i) => (
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

      <style>{`
        @media print {
          header, nav, aside, .no-print { display: none !important; }
          body { background: white !important; }
          .container { max-width: 100% !important; padding: 0 !important; }
        }
      `}</style>
    </div>
  );
}
