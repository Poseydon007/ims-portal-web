// TE-IMS-POL-LC-001 Rev01 — Local Content and Saudization Policy
// Design: Standardized POL layout — left sidebar (Doc Info + TOC) + main content area
// Aligned with KSA Vision 2030, MHRSD Nitaqat, LCGPA, MIM

import { Link } from "wouter";
import { TopNav, Footer, Breadcrumb } from "@/components/Layout";
import { LOGO_GRAY, LOGO_WHITE } from "@/lib/imsData";

const sections = [
  { id: "s1", label: "1. Policy Statement" },
  { id: "s2", label: "2. Objectives" },
  { id: "s3", label: "3. Key Principles and Commitments" },
  { id: "s4", label: "4. Monitoring and Reporting" },
  { id: "s5", label: "5. Training and Communication" },
  { id: "s6", label: "6. References" },
  { id: "s7", label: "7. Revision History" },
  { id: "s8", label: "8. Approval" },
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

export default function TE_IMS_POL_LC_001() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "POL — Policies", href: "/docs/pol" },
          { label: "Local Content and Saudization Policy" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              Local Content and Saudization Policy
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-POL-LC-001_Rev01</span>
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
                ["Document Code", "TE-IMS-POL-LC-001"],
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-POL-LC-001_Rev01</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Local Content and Saudization Policy
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-2" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-POL-LC-001</td>
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
                True East Mining Company (TEMC) is fully committed to supporting the Kingdom of Saudi Arabia's Vision 2030 and the National Transformation Program by maximising local content and prioritising Saudi nationals in employment, training, and business opportunities. TEMC views Saudization (Nitaqat) and local content development as a strategic priority that strengthens operations and competitiveness in the Saudi market.
              </p>

              {/* Section 2 */}
              <SectionHeading id="s2">2. Objectives</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                {[
                  "Achieve high Saudization levels across all job categories in compliance with MHRSD Nitaqat and client-specific targets (e.g. Ma'aden, the Saudi Mining Services Company).",
                  "Increase the participation of Saudi nationals in skilled, technical, and managerial roles — geology, drilling, HSE, maintenance, and management.",
                  "Develop Saudi talent through structured training, career progression, and mentorship.",
                  "Maximise local procurement of goods and services where quality, safety, and cost are competitive.",
                  "Contribute to the Ministry of Industry and Mineral Resources (MIM) local content reporting and the Local Content and Government Procurement Authority (LCGPA) framework.",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm" style={{ color: "#374151" }}>
                    <span style={{ color: "#C49A28" }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Section 3 */}
              <SectionHeading id="s3">3. Key Principles and Commitments</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                <BulletItem bold="Saudization Targets">prioritise Saudi nationals in recruitment and set annual percentage targets by job category. Progress is tracked monthly and reported at Management Review.</BulletItem>
                <BulletItem bold="Training and Development">provide mandatory programmes to build capabilities in drilling, maintenance, HSE, and management, including on-the-job training (OJT), cross-training, and structured succession planning.</BulletItem>
                <BulletItem bold="Local Procurement">give preference to Saudi-owned or Saudi-majority suppliers and contractors where quality, safety, delivery, and cost are competitive. Track and report local content percentages in all procurement activities.</BulletItem>
                <BulletItem bold="Non-Discrimination">all recruitment and promotion decisions are based on merit and competency. Discrimination on the basis of race, gender, nationality, religion, or any protected characteristic is strictly prohibited.</BulletItem>
                <BulletItem bold="Career Progression">Saudi nationals are given preference for internal promotion, sponsored certifications, and high-potential development schemes.</BulletItem>
              </ul>

              {/* Section 4 */}
              <SectionHeading id="s4">4. Monitoring and Reporting</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                {[
                  "Maintain a Saudization and Local Content Register.",
                  "Monthly reporting to senior management and quarterly Management Review against Nitaqat targets.",
                  "Timely submission of required reports to MHRSD, MIM, and clients.",
                  "Annual external audit of Saudization compliance status.",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm" style={{ color: "#374151" }}>
                    <span style={{ color: "#C49A28" }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Section 5 */}
              <SectionHeading id="s5">5. Training and Communication</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                {[
                  "All employees receive awareness training on this policy at induction.",
                  "The policy is displayed in Arabic and English at all TEMC sites and communicated through toolbox talks (PROC-HSE-007).",
                  "Progress is communicated openly with the workforce and celebrated publicly when targets are met.",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm" style={{ color: "#374151" }}>
                    <span style={{ color: "#C49A28" }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Section 6 */}
              <SectionHeading id="s6">6. References</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                {[
                  "KSA Vision 2030 and National Transformation Program.",
                  "MHRSD — Nitaqat Saudization Programme.",
                  "Local Content and Government Procurement Authority (LCGPA) regulations.",
                  "Ministry of Industry and Mineral Resources (MIM) — Local Content reporting requirements.",
                  "TEMC PROC-TRN-001 Staff Training and Competency Procedure; PROC-HSE-007 Toolbox Talks.",
                ].map((ref) => (
                  <li key={ref} className="flex gap-2 text-sm" style={{ color: "#374151" }}>
                    <span style={{ color: "#C49A28" }}>•</span>
                    <span>{ref}</span>
                  </li>
                ))}
              </ul>

              {/* Section 7 — Revision History */}
              <SectionHeading id="s7">7. Revision History</SectionHeading>
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
                    ["01", "10.04.2026", "Rebuilt to TE design standard; preserved all content; added MIM and LCGPA references, career progression commitment, annual external audit requirement, explicit link to PROC-TRN-001 and PROC-HSE-007.", "HR Manager"],
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

              {/* Section 8 — Approval */}
              <SectionHeading id="s8">8. Approval</SectionHeading>
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
                    "Prepared by (HR Manager)",
                    "Reviewed by (QA / MR)",
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
