// TE-IMS-POL-GOV-002 Rev01 — Quality Policy Statement
// Design: Standardized POL layout — left sidebar (Doc Info + TOC) + main content area
// Aligned with Saudi Anti-Bribery Law (Royal Decree M/43), ISO 9001/14001/45001

import { Link } from "wouter";
import { TopNav, Footer, Breadcrumb } from "@/components/Layout";
import { LOGO_GRAY, LOGO_WHITE } from "@/lib/imsData";

const sections = [
  { id: "s1", label: "1. Policy Statement" },
  { id: "s2", label: "2. Our Commitment" },
  { id: "s3", label: "3. Key Prohibitions" },
  { id: "s4", label: "4. Reporting and Non-Retaliation" },
  { id: "s5", label: "5. Training and Records" },
  { id: "s6", label: "6. Governance and Review" },
  { id: "s7", label: "7. References" },
  { id: "s8", label: "8. Revision History" },
  { id: "s9", label: "9. Approval" },
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

function BulletItem({ bold, children }: { bold: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-2 mb-2 text-sm leading-relaxed" style={{ color: "#374151" }}>
      <span style={{ color: "#C49A28", marginTop: "2px" }}>•</span>
      <span><strong>{bold}</strong> — {children}</span>
    </li>
  );
}

export default function TE_IMS_POL_GOV_002() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "POL — Policies", href: "/docs/pol" },
          { label: "Ethics and Anti-Bribery Policy" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              Ethics and Anti-Bribery Policy
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-POL-GOV-002_Rev01</span>
              <span style={{ color: "#c0c8d4" }}>·</span>
              <span className="text-xs" style={{ color: "#6b7a8d" }}>10 Apr 2026</span>
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
                ["Document Code", "TE-IMS-POL-GOV-002"],
                ["Revision", "Rev 01"],
                ["Date", "10 April 2026"],
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-POL-GOV-002_Rev01</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Ethics and Anti-Bribery Policy
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-2" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-POL-GOV-002</td>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Revision</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>01</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Date</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>10.04.2026</td>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Status</td>
                    <td className="border px-3 py-2 font-bold" style={{ borderColor: "#dde3ec", color: "#155724" }}>Approved for Implementation</td>
                  </tr>
                </tbody>
              </table>

              {/* Section 1 */}
              <SectionHeading id="s1">1. Policy Statement</SectionHeading>
              <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                True East Mining Company (TEMC) conducts business with the highest standards of integrity, honesty, and ethical behaviour. TEMC's reputation, eligibility for tenders, and client relationships depend on lawful and ethical conduct at all times. TEMC has zero tolerance for bribery, corruption, fraud, or unethical behaviour.
              </p>

              {/* Section 2 */}
              <SectionHeading id="s2">2. Our Commitment</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                <BulletItem bold="Comply with Law">adhere to the Saudi Anti-Bribery Law (Royal Decree M/43), the Saudi Penal Code, the Combating Bribery Law, and international standards including the US FCPA and UK Bribery Act where applicable.</BulletItem>
                <BulletItem bold="Prohibit Bribery">forbid the offering, promising, giving, accepting, or soliciting of any bribe, kickback, or facilitation payment to influence a business decision.</BulletItem>
                <BulletItem bold="Transparency">maintain accurate and transparent books and records; no false entries to conceal improper payments.</BulletItem>
                <BulletItem bold="Integrity Culture">promote a "Speak Up" culture where concerns can be raised without fear of retaliation.</BulletItem>
              </ul>

              {/* Section 3 */}
              <SectionHeading id="s3">3. Key Prohibitions</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                <BulletItem bold="Gifts and Hospitality">no gifts or entertainment may be accepted if they influence business decisions. Items above SAR 500 require pre-approval in writing and documentation on the gift register.</BulletItem>
                <BulletItem bold="Political and Charitable Contributions">no political or charitable contributions may be made to secure business advantages; charitable donations require MD approval.</BulletItem>
                <BulletItem bold="Third Parties">prohibit engagement of agents, consultants, or intermediaries to make improper payments on TEMC's behalf. Third-party due diligence applies to all material relationships.</BulletItem>
                <BulletItem bold="Conflicts of Interest">all employees disclose actual or potential conflicts of interest to the MD; undisclosed conflicts are a disciplinary matter.</BulletItem>
              </ul>

              {/* Section 4 */}
              <SectionHeading id="s4">4. Reporting and Non-Retaliation</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                <li className="flex gap-2 mb-2 text-sm leading-relaxed" style={{ color: "#374151" }}>
                  <span style={{ color: "#C49A28", marginTop: "2px" }}>•</span>
                  <span>Suspected violations must be reported to a supervisor, the HR Manager, the Management Representative, or the confidential Speak Up hotline.</span>
                </li>
                <li className="flex gap-2 mb-2 text-sm leading-relaxed" style={{ color: "#374151" }}>
                  <span style={{ color: "#C49A28", marginTop: "2px" }}>•</span>
                  <span>Good-faith reporters are protected — no retaliation of any kind, including adverse performance decisions.</span>
                </li>
                <li className="flex gap-2 mb-2 text-sm leading-relaxed" style={{ color: "#374151" }}>
                  <span style={{ color: "#C49A28", marginTop: "2px" }}>•</span>
                  <span>Confirmed violations result in disciplinary action up to and including termination and, where warranted, referral to the competent authorities.</span>
                </li>
              </ul>

              {/* Section 5 */}
              <SectionHeading id="s5">5. Training and Records</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                <li className="flex gap-2 mb-2 text-sm leading-relaxed" style={{ color: "#374151" }}>
                  <span style={{ color: "#C49A28", marginTop: "2px" }}>•</span>
                  <span>All personnel receive ethics and anti-bribery training at induction and annually, tracked via the Training and Competence Matrix (REG-TRN-001).</span>
                </li>
                <li className="flex gap-2 mb-2 text-sm leading-relaxed" style={{ color: "#374151" }}>
                  <span style={{ color: "#C49A28", marginTop: "2px" }}>•</span>
                  <span>Gifts and hospitality above SAR 500, conflicts of interest, and approved charitable donations are logged on the Ethics Register.</span>
                </li>
              </ul>

              {/* Section 6 */}
              <SectionHeading id="s6">6. Governance and Review</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                <li className="flex gap-2 mb-2 text-sm leading-relaxed" style={{ color: "#374151" }}>
                  <span style={{ color: "#C49A28", marginTop: "2px" }}>•</span>
                  <span>This policy is owned by the Managing Director and reviewed annually or on any material regulatory or corporate change.</span>
                </li>
                <li className="flex gap-2 mb-2 text-sm leading-relaxed" style={{ color: "#374151" }}>
                  <span style={{ color: "#C49A28", marginTop: "2px" }}>•</span>
                  <span>Effectiveness is reported at the Management Review (PROC-SYS-002).</span>
                </li>
              </ul>

              {/* Section 7 */}
              <SectionHeading id="s7">7. References</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                {[
                  "Saudi Arabia — Anti-Bribery Law (Royal Decree M/43).",
                  "Saudi Arabia — Combating Bribery Law and Saudi Penal Code.",
                  "US Foreign Corrupt Practices Act (FCPA) and UK Bribery Act 2010 (where applicable).",
                  "TEMC Code of Conduct; REG-TRN-001 Training and Competence Matrix; PROC-SYS-002 Management Review.",
                ].map((ref) => (
                  <li key={ref} className="flex gap-2 text-sm" style={{ color: "#374151" }}>
                    <span style={{ color: "#C49A28" }}>•</span>
                    <span>{ref}</span>
                  </li>
                ))}
              </ul>

              {/* Section 8 — Revision History */}
              <SectionHeading id="s8">8. Revision History</SectionHeading>
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
                    ["00", "01.03.2026", "Initial release", "Joao Melo"],
                    ["01", "10.04.2026", "Rebuilt to TE design standard; preserved all content; added conflict-of-interest rule, non-retaliation protection, Ethics Register, governance and review cycle.", "MR"],
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

              {/* Section 9 — Approval */}
              <SectionHeading id="s9">9. Approval</SectionHeading>
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
                    "Reviewed by (HR / QA)",
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
