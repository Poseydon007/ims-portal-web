// TE-IMS-POL-GOV-001 Rev01 — Integrated HSE Policy Statement
// Design: Document view — gray logo top-left, doc code top-right, navy/gold brand
// Font: Nunito Sans body, Courier New for codes

import { Link } from "wouter";
import { Breadcrumb } from "@/components/Layout";
import { TopNav, Footer } from "@/components/Layout";
import { LOGO_GRAY, LOGO_WHITE } from "@/lib/imsData";

const sections = [
  { id: "s1", label: "1. Policy Statement" },
  { id: "s2", label: "2. Our Core Beliefs" },
  { id: "s3", label: "3. Strategic Commitments" },
  { id: "s4", label: "4. Application" },
  { id: "s5", label: "5. References" },
  { id: "s6", label: "6. Revision History" },
  { id: "s7", label: "7. Approval" },
];

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-sm font-bold mt-8 mb-3 pb-2"
      style={{ color: "#0E2841", borderBottom: "2px solid #C49A28" }}
    >
      {children}
    </h2>
  );
}

function BulletItem({ bold, children }: { bold: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-2 mb-2 text-sm leading-relaxed" style={{ color: "#0E2841" }}>
      <span style={{ color: "#C49A28", marginTop: "2px" }}>•</span>
      <span>
        <strong>{bold}</strong> — {children}
      </span>
    </li>
  );
}

export default function POL_GOV_001() {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "POL — Policies", href: "/docs/pol" },
          { label: "Integrated HSE Policy Statement" },
        ]}
      />

      {/* Sub-header: doc title + actions */}
      <div
        className="border-b"
        style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}
      >
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#0E2841" }}>
              Integrated HSE Policy Statement
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>
                TE-IMS-POL-GOV-001_Rev01
              </span>
              <span style={{ color: "#c0c8d4" }}>·</span>
              <span className="text-xs" style={{ color: "#6b7a8d" }}>10 Apr 2026</span>
              <span style={{ color: "#c0c8d4" }}>·</span>
              <span
                className="text-xs font-bold px-2 py-0.5 rounded"
                style={{ backgroundColor: "#d4edda", color: "#155724" }}
              >
                ✓ Approved for Implementation
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/docs/pol"
              className="text-xs font-semibold px-3 py-1.5 rounded border hover:bg-gray-50 transition-colors"
              style={{ borderColor: "#dde3ec", color: "#0E2841" }}
            >
              ← Back to Policies
            </Link>
            <button
              onClick={handlePrint}
              className="text-xs font-semibold px-3 py-1.5 rounded border hover:bg-gray-50 transition-colors"
              style={{ borderColor: "#dde3ec", color: "#0E2841" }}
            >
              ⎙ Print
            </button>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="container py-8 flex gap-8 items-start">
        {/* Sidebar */}
        <aside
          className="hidden lg:block w-52 shrink-0 sticky top-20 rounded border"
          style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}
        >
          {/* Doc info */}
          <div className="p-4 border-b" style={{ borderColor: "#dde3ec" }}>
            <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#8a9ab0" }}>
              Document Info
            </div>
            <dl className="space-y-2">
              {[
                ["Document Code", "TE-IMS-POL-GOV-001"],
                ["Revision", "Rev 01"],
                ["Date", "10 April 2026"],
                ["Status", "✓ Approved"],
                ["Category", "Policy"],
                ["Scope", "All TEMC operations, personnel, contractors & visitors"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs font-semibold" style={{ color: "#8a9ab0" }}>{k}</dt>
                  <dd
                    className="text-xs mt-0.5 font-medium"
                    style={{ color: k === "Status" ? "#155724" : "#0E2841" }}
                  >
                    {k === "Document Code" ? (
                      <span className="te-code">{v}</span>
                    ) : v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Table of Contents */}
          <div className="p-4">
            <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#8a9ab0" }}>
              Contents
            </div>
            <nav className="space-y-1">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block text-xs py-1 px-2 rounded hover:bg-blue-50 transition-colors"
                  style={{ color: "#0E2841" }}
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Document body */}
        <div className="flex-1 min-w-0">
          <div
            className="rounded border bg-white overflow-hidden"
            style={{ borderColor: "#dde3ec" }}
          >
            {/* Document header (mimics Word header) */}
            <div
              className="flex items-center justify-between px-6 py-4 border-b"
              style={{ borderColor: "#dde3ec", backgroundColor: "#fafbfc" }}
            >
              <img src={LOGO_GRAY} alt="True East Mining Company" className="h-12 w-auto" />
              <div className="text-right">
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>
                  TE-IMS-POL-GOV-001_Rev01
                </div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#0E2841", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div
                className="rounded px-5 py-4 mb-6"
                style={{ backgroundColor: "#0E2841" }}
              >
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Integrated HSE Policy Statement
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-2" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-POL-GOV-001</td>
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
              <p className="text-sm leading-relaxed" style={{ color: "#0E2841" }}>
                True East Mining Company (TEMC) is committed to the highest standards of Health,
                Safety, and Environmental performance in every aspect of its mineral exploration,
                drilling, and related operations in the Kingdom of Saudi Arabia.
              </p>

              {/* Section 2 */}
              <SectionHeading id="s2">2. Our Core Beliefs</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                <BulletItem bold="Incident Prevention">all incidents are preventable.</BulletItem>
                <BulletItem bold="Zero Harm">zero harm to people is achievable.</BulletItem>
                <BulletItem bold="Environmental Protection">environmental protection is non-negotiable.</BulletItem>
                <BulletItem bold="Quality Excellence">quality excellence is essential for long-term success.</BulletItem>
              </ul>

              {/* Section 3 */}
              <SectionHeading id="s3">3. Our Strategic Commitments</SectionHeading>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#0E2841" }}>
                To deliver these beliefs TEMC will:
              </p>
              <ul className="list-none pl-0 space-y-1">
                <BulletItem bold="Safe Working Conditions">
                  provide safe and healthy working conditions to prevent work-related injury and ill health — including fatigue, heat stress, and musculoskeletal disorders — appropriate to the organisation's size and context.
                </BulletItem>
                <BulletItem bold="Hazard Elimination">
                  eliminate hazards and reduce HSE risks using the Hierarchy of Controls: Elimination, Substitution, Engineering, Administrative, and PPE as a last resort.
                </BulletItem>
                <BulletItem bold="Legal Compliance">
                  comply with all applicable legal requirements, including MHRSD regulations, NCEC / MEWA environmental standards, Saudi Mining Investment Law, and client-specific obligations such as Ma'aden Contractor HSE Standards.
                </BulletItem>
                <BulletItem bold="Sustainability">
                  prevent pollution, minimise waste, and promote sustainable resource use across all drilling, exploration, maintenance, and transport activities.
                </BulletItem>
                <BulletItem bold="Worker Consultation">
                  involve workers and representatives in the development, planning, and continual improvement of the IMS.
                </BulletItem>
                <BulletItem bold="Objectives and Targets">
                  establish and regularly review measurable HSE objectives and targets across all relevant functions.
                </BulletItem>
                <BulletItem bold="Resource Provision">
                  provide necessary training, equipment, competent personnel, and infrastructure to achieve our goals.
                </BulletItem>
                <BulletItem bold="Safety Culture">
                  empower all personnel and contractors with Stop Work Authority, allowing them to halt unsafe work without fear of reprisal.
                </BulletItem>
                <BulletItem bold="Open Communication">
                  communicate performance and policy openly with employees, contractors, clients, and regulators.
                </BulletItem>
                <BulletItem bold="Continual Improvement">
                  enhance the IMS through regular audits, management reviews, and incident investigations.
                </BulletItem>
              </ul>

              {/* Section 4 */}
              <SectionHeading id="s4">4. Application</SectionHeading>
              <p className="text-sm leading-relaxed" style={{ color: "#0E2841" }}>
                This policy applies to all True East Mining operations, personnel, contractors, and
                visitors. It is reviewed annually or following significant operational, regulatory,
                or strategic changes.
              </p>

              {/* Section 5 */}
              <SectionHeading id="s5">5. References</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                {[
                  "ISO 9001:2015, ISO 14001:2015, ISO 45001:2018.",
                  "KSA Mining Investment Law.",
                  "MHRSD — Occupational Safety and Health Regulations.",
                  "NCEC / MEWA — Environmental Regulations.",
                  "Ma'aden Contractor HSE Standards (where applicable).",
                ].map((ref) => (
                  <li key={ref} className="flex gap-2 text-sm" style={{ color: "#0E2841" }}>
                    <span style={{ color: "#C49A28" }}>•</span>
                    <span>{ref}</span>
                  </li>
                ))}
              </ul>

              {/* Section 6 — Revision History */}
              <SectionHeading id="s6">6. Revision History</SectionHeading>
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#0E2841" }}>
                    {["Rev", "Date", "Description of Changes", "Author"].map((h) => (
                      <th key={h} className="text-left px-3 py-2 text-white/80 font-semibold tracking-wide">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["00", "01.03.2026", "Initial release", "Joao Melo"],
                    ["01", "10.04.2026", "Rebuilt to TE design standard; preserved all content; added explicit KSA regulator references (MHRSD, NCEC/MEWA) and ISO anchors.", "MR"],
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

              {/* Section 7 — Approval */}
              <SectionHeading id="s7">7. Approval</SectionHeading>
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#0E2841" }}>
                    {["Role", "Name", "Signature", "Date"].map((h) => (
                      <th key={h} className="text-left px-3 py-2 text-white/80 font-semibold tracking-wide">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Prepared by (Management Representative)",
                    "Reviewed by (HSE / QA)",
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

            {/* Document footer (mimics Word footer) */}
            <div
              className="flex items-center justify-between px-6 py-3 border-t"
              style={{ borderColor: "#dde3ec", backgroundColor: "#0E2841" }}
            >
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                True East Mining Company &nbsp;·&nbsp; Integrated Management System &nbsp;·&nbsp; Confidential &nbsp;·&nbsp; Page 1
              </span>
              <img src={LOGO_WHITE} alt="" className="h-5 w-auto opacity-30" />
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Print styles */}
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
