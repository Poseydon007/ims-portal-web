// TE-IMS-POL-GOV-004 Rev01 — Drug and Alcohol Free Workplace Policy
// Design: Standardized POL layout — left sidebar (Doc Info + TOC) + main content area
// Aligned with Saudi Labour Law M/51, MHRSD OHS Regulations, ISO 45001:2018, Royal Decree M/39

import { Link } from "wouter";
import { TopNav, Footer, Breadcrumb } from "@/components/Layout";
import { LOGO_GRAY, LOGO_WHITE } from "@/lib/imsData";

const sections = [
  { id: "s1", label: "1. Purpose and Scope" },
  { id: "s2", label: "2. Policy Statement" },
  { id: "s3", label: "3. Prohibited Substances and Conduct" },
  { id: "s4", label: "4. Testing" },
  { id: "s5", label: "5. Consequences of Violation" },
  { id: "s6", label: "6. Support and Rehabilitation" },
  { id: "s7", label: "7. Prescription Medication Disclosure" },
  { id: "s8", label: "8. Training and Awareness" },
  { id: "s9", label: "9. Governance and Review" },
  { id: "s10", label: "10. Legal References" },
  { id: "s11", label: "11. Revision History" },
  { id: "s12", label: "12. Approval" },
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

export default function POL_GOV_004() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "POL — Policies", href: "/docs/pol" },
          { label: "Drug and Alcohol Free Workplace Policy" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              Drug and Alcohol Free Workplace Policy
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-POL-GOV-004_Rev01</span>
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
                ["Document Code", "TE-IMS-POL-GOV-004"],
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-POL-GOV-004_Rev01</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Drug and Alcohol Free Workplace Policy
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-2" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-POL-GOV-004</td>
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
                This Policy establishes the requirements for a drug and alcohol free workplace at True East Mining Company (TEMC). It applies to all employees, contractors, subcontractors, visitors, and any other person present at any TEMC workplace, site, vehicle, or facility in the Kingdom of Saudi Arabia.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                Mining and drilling operations involve heavy machinery, explosives, elevated structures, confined spaces, and high-energy systems. The presence of any person under the influence of drugs or alcohol creates an unacceptable risk of serious injury or death to themselves and others. This Policy is non-negotiable and will be enforced without exception.
              </p>

              {/* Section 2 */}
              <SectionHeading id="s2">2. Policy Statement</SectionHeading>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
                TEMC is committed to maintaining a workplace that is completely free from the use, possession, distribution, or influence of alcohol, illegal drugs, and any substance that impairs cognitive or physical function. This commitment is grounded in our duty of care to all personnel, our obligations under Saudi law, and our IMS standards.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                TEMC fully supports the Kingdom of Saudi Arabia's position on alcohol and narcotics. Alcohol is prohibited in the Kingdom, and TEMC will not tolerate any attempt to introduce, possess, or consume alcohol on any TEMC site or in any TEMC vehicle or accommodation.
              </p>

              {/* Section 3 */}
              <SectionHeading id="s3">3. Prohibited Substances and Conduct</SectionHeading>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
                The following are strictly prohibited at all TEMC workplaces, sites, vehicles, and accommodation facilities:
              </p>
              <table className="w-full text-xs border-collapse mb-4">
                <thead>
                  <tr style={{ backgroundColor: "#081C2E" }}>
                    {["Category", "Prohibited Conduct"].map((h) => (
                      <th key={h} className="text-left px-3 py-2 font-semibold tracking-wide" style={{ color: "#ffffff" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Alcohol", "Possession, consumption, distribution, or reporting to work under the influence of alcohol in any form."],
                    ["Illegal Drugs", "Possession, use, distribution, or being under the influence of any narcotic, controlled substance, or illegal drug as defined under Saudi law."],
                    ["Prescription Medication", "Operating machinery, driving, or performing safety-critical tasks while taking prescription medication that causes drowsiness, impaired judgement, or reduced reaction time, without prior disclosure to and clearance from the HSE Manager."],
                    ["Other Impairing Substances", "Use of any substance — including solvents, inhalants, or non-prescribed stimulants — that impairs cognitive or physical performance."],
                  ].map(([cat, desc], i) => (
                    <tr key={cat} style={{ backgroundColor: i % 2 === 0 ? "rgba(8,28,46,0.03)" : "#fff", borderTop: "1px solid #edf0f5" }}>
                      <td className="px-3 py-2 font-semibold" style={{ color: "#081C2E" }}>{cat}</td>
                      <td className="px-3 py-2" style={{ color: "#374151" }}>{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Section 4 */}
              <SectionHeading id="s4">4. Testing</SectionHeading>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
                TEMC reserves the right to conduct drug and alcohol testing in the following circumstances:
              </p>
              <ul className="list-none pl-0 space-y-2 mb-3">
                {[
                  ["Pre-employment", "as a condition of offer for all positions involving safety-critical tasks."],
                  ["Post-incident", "following any workplace accident, near miss, or dangerous occurrence where impairment may have been a contributing factor."],
                  ["Reasonable cause", "when a supervisor has objective grounds to believe a person is impaired (e.g., slurred speech, unsteady movement, odour, erratic behaviour)."],
                  ["Random", "unannounced random testing may be conducted at any TEMC site at the discretion of the HSE Manager."],
                ].map(([bold, text]) => (
                  <li key={bold} className="flex gap-2 text-sm" style={{ color: "#374151" }}>
                    <span style={{ color: "#C49A28" }}>•</span>
                    <span><strong>{bold}</strong> — {text}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                Refusal to submit to a lawfully requested test will be treated as a positive result and will result in immediate removal from site and disciplinary action.
              </p>

              {/* Section 5 */}
              <SectionHeading id="s5">5. Consequences of Violation</SectionHeading>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
                Any person found to be in violation of this Policy will be removed from the TEMC site immediately. For employees, violations will result in disciplinary action up to and including summary dismissal, in accordance with the Saudi Labour Law and TEMC's disciplinary procedures. For contractors and subcontractors, violations will result in immediate removal from site and notification to the contracting company; repeat violations may result in contract termination.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                Where a violation constitutes a criminal offence under Saudi law — including possession or distribution of narcotics — TEMC will report the matter to the competent Saudi authorities without exception.
              </p>

              {/* Section 6 */}
              <SectionHeading id="s6">6. Support and Rehabilitation</SectionHeading>
              <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                TEMC recognises that substance dependency is a health condition. Any employee who voluntarily discloses a dependency issue before a violation occurs, and who actively participates in a recognised rehabilitation programme, will be treated with confidentiality and supported through an agreed return-to-work plan. Voluntary disclosure does not exempt an employee from fitness-for-duty requirements or from the prohibition on working under the influence.
              </p>

              {/* Section 7 */}
              <SectionHeading id="s7">7. Prescription Medication Disclosure</SectionHeading>
              <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                Employees taking prescription medication that may affect their ability to safely perform their duties must disclose this to the HSE Manager before commencing work. The HSE Manager, in consultation with the employee and where necessary a medical professional, will determine appropriate work restrictions or temporary redeployment. Disclosures are treated in strict confidence.
              </p>

              {/* Section 8 */}
              <SectionHeading id="s8">8. Training and Awareness</SectionHeading>
              <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                All employees and relevant contractors receive drug and alcohol awareness training at induction. Supervisors receive additional training on recognising signs of impairment and on the correct procedure for requesting a test. Training completion is recorded in the Training and Competence Matrix (REG-TRN-001).
              </p>

              {/* Section 9 */}
              <SectionHeading id="s9">9. Governance and Review</SectionHeading>
              <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                This Policy is owned by the Managing Director. The HSE Manager is responsible for day-to-day implementation, testing coordination, and record maintenance. Policy effectiveness is reviewed at the annual Management Review (PROC-SYS-002) and updated whenever there is a material change in applicable law, site risk profile, or operational structure.
              </p>

              {/* Section 10 */}
              <SectionHeading id="s10">10. Legal References</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                {[
                  "Saudi Arabia — Anti-Narcotics Law (Royal Decree M/39, 1428H)",
                  "Saudi Arabia — Labour Law (Royal Decree M/51) and MHRSD OHS Regulations",
                  "Saudi Arabia — General Commission for Narcotic Control (GCNC) framework",
                  "ISO 45001:2018 — Occupational Health and Safety Management Systems",
                  "TEMC Integrated HSE Policy (TE-IMS-POL-GOV-001)",
                  "TEMC Incident Reporting and Investigation Procedure (PROC-HSE-002)",
                ].map((ref) => (
                  <li key={ref} className="flex gap-2 text-sm" style={{ color: "#374151" }}>
                    <span style={{ color: "#C49A28" }}>•</span>
                    <span>{ref}</span>
                  </li>
                ))}
              </ul>

              {/* Section 11 — Revision History */}
              <SectionHeading id="s11">11. Revision History</SectionHeading>
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
                    ["00", "12.04.2026", "Initial release — Drug and Alcohol Free Workplace Policy with full operational requirements, testing framework, Saudi legal alignment, and prescription medication disclosure process.", "MR"],
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

              {/* Section 12 — Approval */}
              <SectionHeading id="s12">12. Approval</SectionHeading>
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
                    "Reviewed by (HSE Manager)",
                    "Approved by (Managing Director / CEO)",
                  ].map((role) => (
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
    </div>
  );
}
