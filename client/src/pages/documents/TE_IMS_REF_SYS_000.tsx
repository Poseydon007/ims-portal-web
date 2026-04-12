// TE-IMS-REF-SYS-000 Rev00 — Executive Overview of the Integrated Management System
// Design: Standardized POL layout — left sidebar (Doc Info + TOC) + main content area

import { Link } from "wouter";
import { TopNav, Footer, Breadcrumb } from "@/components/Layout";
import { LOGO_GRAY, LOGO_WHITE } from "@/lib/imsData";

const sections = [
  { id: "s1", label: "1. Executive Summary" },
  { id: "s2", label: "2. What is an IMS?" },
  { id: "s3", label: "3. What Does the True East IMS Integrate?" },
  { id: "s4", label: "4. Strategic Objectives" },
  { id: "s5", label: "5. Scope of Application" },
  { id: "s6", label: "6. Treatment of Finance Documents" },
  { id: "s7", label: "7. Our Commitment" },
  { id: "s8", label: "8. Revision History" },
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

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm font-bold mt-5 mb-2" style={{ color: "#081C2E" }}>
      {children}
    </h3>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 text-sm leading-relaxed" style={{ color: "#374151" }}>
      <span className="shrink-0 font-bold" style={{ color: "#C49A28" }}>•</span>
      <span>{children}</span>
    </li>
  );
}

export default function TE_IMS_REF_SYS_000() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "REF — References", href: "/docs/ref" },
          { label: "Executive Overview of the IMS" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              Executive Overview of the Integrated Management System
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-REF-SYS-000_Rev00</span>
              <span style={{ color: "#c0c8d4" }}>·</span>
              <span className="text-xs" style={{ color: "#6b7a8d" }}>24 Feb 2026</span>
              <span style={{ color: "#c0c8d4" }}>·</span>
              <span className="text-xs font-medium px-2 py-0.5 rounded" style={{ backgroundColor: "#f0f4f8", color: "#6b7a8d" }}>
                Pending
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/docs/ref" className="text-xs font-semibold px-3 py-1.5 rounded border hover:bg-gray-50 transition-colors" style={{ borderColor: "#dde3ec", color: "#081C2E" }}>
              ← Back to References
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
                ["Document Code", "TE-IMS-REF-SYS-000"],
                ["Revision", "Rev 00"],
                ["Date", "24 Feb 2026"],
                ["Status", "Pending"],
                ["Category", "Reference"],
                ["Scope", "All TEMC operations, personnel, contractors & visitors"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs font-semibold" style={{ color: "#8a9ab0" }}>{k}</dt>
                  <dd className="text-xs mt-0.5 font-medium" style={{ color: "#081C2E" }}>
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-REF-SYS-000_Rev00</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Executive Overview of the Integrated Management System
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-6" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-REF-SYS-000</td>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Revision</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>00</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Date</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>24 February 2026</td>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Status</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec", color: "#6b7a8d" }}>Pending</td>
                  </tr>
                </tbody>
              </table>

              {/* Section 1 */}
              <SectionHeading id="s1">1. Executive Summary</SectionHeading>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
                True East Mining Company is establishing a single, unified Integrated Management System (IMS) that brings together all critical business management disciplines — Quality, Occupational Health &amp; Safety, Environment, and supporting processes — into one coherent, consistent, and highly effective framework.
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
                The IMS replaces the current fragmented, department-specific, and sometimes overlapping documents with a single source of truth. It enables True East to operate to the highest international standards (ISO 9001, ISO 14001, ISO 45001) while remaining practical, field-oriented, and tailored to our core business of mineral exploration, diamond and percussion drilling, and related services in the Kingdom of Saudi Arabia.
              </p>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>By implementing the IMS, True East will achieve:</p>
              <ul className="list-none pl-0 space-y-2 mb-4">
                {[
                  "One way of working across the entire company.",
                  "Significant reduction in duplication, confusion, and administrative burden.",
                  "Stronger compliance with Saudi regulations (Mining Investment Law, Saudi Labor Law, NCEC requirements).",
                  "Improved audit performance and easier ISO surveillance/maintenance.",
                  "Enhanced professional image in tenders, client evaluations, and regulatory interactions.",
                  "A genuine culture of excellence, accountability, and continual improvement.",
                ].map((item, i) => <Bullet key={i}>{item}</Bullet>)}
              </ul>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
                The IMS is not just a documentation exercise — it is the foundation of how True East leads, manages risk, delivers value to clients, protects people, and stewards the environment.
              </p>

              {/* Section 2 */}
              <SectionHeading id="s2">2. What is an Integrated Management System (IMS)?</SectionHeading>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
                An Integrated Management System (IMS) is a single, structured management framework that combines multiple discipline-specific systems into one harmonized structure. It eliminates operational silos by aligning policies, objectives, processes, resources, responsibilities, and performance monitoring across Quality, Health &amp; Safety, Environment, and other key areas.
              </p>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>The IMS follows the High-Level Structure (HLS) defined in modern ISO standards, which means all disciplines share the same:</p>
              <ul className="list-none pl-0 space-y-2 mb-4">
                {[
                  "Clause structure (Context, Leadership, Planning, Support, Operation, Performance Evaluation, Improvement).",
                  "Terminology and definitions.",
                  "Risk-based thinking approach.",
                  "PDCA (Plan-Do-Check-Act) continual improvement cycle.",
                ].map((item, i) => <Bullet key={i}>{item}</Bullet>)}
              </ul>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
                This structural alignment makes integration logical, efficient, and sustainable over the long term.
              </p>

              {/* Section 3 */}
              <SectionHeading id="s3">3. What Does the True East IMS Integrate?</SectionHeading>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
                The IMS consolidates the following core and supporting management systems:
              </p>
              <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr style={{ backgroundColor: "#081C2E" }}>
                      {["Area", "Corresponding ISO / Standard", "Primary Focus in True East Context"].map((h) => (
                        <th key={h} className="text-left px-3 py-2 font-semibold tracking-wide" style={{ color: "#ffffff" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Quality Management", "ISO 9001:2015", "Consistent service delivery, client satisfaction, process control"],
                      ["Occupational Health & Safety", "ISO 45001:2018", "Zero harm, hazard control, emergency preparedness"],
                      ["Environmental Management", "ISO 14001:2015", "Environmental protection, legal compliance, resource efficiency"],
                      ["Document & Record Control", "ISO 9001 / 14001 / 45001 Clause 7.5", "Single controlled document repository"],
                      ["Risk Management", "ISO 31000 (aligned)", "Integrated risk register across all disciplines"],
                      ["Legal & Regulatory Compliance", "Saudi Mining Investment Law, MHRSD, NCEC, ZATCA", "Full KSA regulatory alignment"],
                      ["Human Resources & Competence", "ISO Clause 7.1–7.3", "Training matrix, competency records, induction"],
                      ["Procurement & Contractor Management", "ISO Clause 8.4", "Supplier evaluation, contractor HSE requirements"],
                      ["Emergency Preparedness & Response", "ISO 45001 / 14001 Clause 8.2", "Site emergency plans, drills, communication"],
                      ["Performance Monitoring & KPIs", "ISO Clause 9.1", "Unified KPI dashboard, leading and lagging indicators"],
                      ["Internal Audit", "ISO Clause 9.2", "One integrated audit programme across all disciplines"],
                      ["Management Review", "ISO Clause 9.3", "Annual top management review of all IMS performance"],
                      ["Nonconformity & CAPA", "ISO Clause 10.2", "Single corrective action system for all disciplines"],
                    ].map(([area, iso, focus], i) => (
                      <tr key={area} style={{ backgroundColor: i % 2 === 0 ? "rgba(8,28,46,0.03)" : "transparent" }}>
                        <td className="border px-3 py-2 font-medium" style={{ borderColor: "#edf0f5" }}>{area}</td>
                        <td className="border px-3 py-2 te-code" style={{ borderColor: "#edf0f5" }}>{iso}</td>
                        <td className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>{focus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>All these functional areas now operate under:</p>
              <ul className="list-none pl-0 space-y-2 mb-4">
                {[
                  "One IMS Policy Statement",
                  "One set of IMS objectives and KPIs",
                  "One document control system",
                  "One incident & nonconformity process",
                  "One continual improvement mechanism",
                ].map((item, i) => <Bullet key={i}>{item}</Bullet>)}
              </ul>

              {/* Section 4 */}
              <SectionHeading id="s4">4. Strategic Objectives of the IMS</SectionHeading>

              <SubHeading>Compliance &amp; Regulatory Excellence</SubHeading>
              <ul className="list-none pl-0 space-y-2 mb-4">
                {[
                  "Full alignment with the Saudi Mining Investment Law, Saudi Labor Law, NCEC environmental regulations, and SASO standards.",
                  "Simplified preparation and execution for ISO surveillance audits.",
                  "Drastically reduced risk of regulatory penalties or stop-work orders.",
                ].map((item, i) => <Bullet key={i}>{item}</Bullet>)}
              </ul>

              <SubHeading>Operational Efficiency</SubHeading>
              <ul className="list-none pl-0 space-y-2 mb-4">
                {[
                  "Elimination of duplicate documents and conflicting field instructions.",
                  "Faster, more effective onboarding and training for new employees and contractors.",
                  "Easier access to procedures, SOPs, and forms in the field via a mobile-friendly repository.",
                  "Reduced administrative time spent searching for the 'right' document.",
                ].map((item, i) => <Bullet key={i}>{item}</Bullet>)}
              </ul>

              <SubHeading>Risk Reduction &amp; Zero Harm Culture</SubHeading>
              <ul className="list-none pl-0 space-y-2 mb-4">
                {[
                  "Proactive, risk-based thinking applied consistently across all disciplines.",
                  "One integrated risk register covering safety, quality, environmental, and commercial risks.",
                  "Stronger emphasis on leading indicators (hazard reports, near-misses) alongside lagging indicators (LTIFR, environmental incidents).",
                ].map((item, i) => <Bullet key={i}>{item}</Bullet>)}
              </ul>

              <SubHeading>Client &amp; Tender Competitiveness</SubHeading>
              <ul className="list-none pl-0 space-y-2 mb-4">
                {[
                  "Demonstrates maturity and elite professionalism to major clients (e.g., Ma'aden, Barrick, other operators).",
                  "Provides clear, instantly retrievable evidence of systematic management during pre-qualification and site audits.",
                  "Supports Saudi Vision 2030 objectives for sustainable mining and robust local content.",
                ].map((item, i) => <Bullet key={i}>{item}</Bullet>)}
              </ul>

              <SubHeading>Continual Improvement &amp; Innovation</SubHeading>
              <ul className="list-none pl-0 space-y-2 mb-4">
                {[
                  "Structured PDCA cycle applied company-wide.",
                  "Performance Monitoring: Unified KPIs, audits, and one annual Management Review.",
                  "Improvement: Nonconformities, incidents, audits, and field suggestions feed into automated corrective/preventive actions (CAPA).",
                ].map((item, i) => <Bullet key={i}>{item}</Bullet>)}
              </ul>

              {/* Section 5 */}
              <SectionHeading id="s5">5. Scope of Application</SectionHeading>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>The IMS applies to all activities, locations, and personnel of True East Mining Company, including:</p>
              <ul className="list-none pl-0 space-y-2 mb-4">
                {[
                  "Head office in Riyadh.",
                  "All drilling, exploration, and project sites across the Kingdom.",
                  "All employees, contractors, sub-contractors, and site visitors.",
                  "All phases of work: tendering, planning, execution, demobilization, and site rehabilitation.",
                ].map((item, i) => <Bullet key={i}>{item}</Bullet>)}
              </ul>

              {/* Section 6 */}
              <SectionHeading id="s6">6. Treatment of Finance &amp; Accounting Documents</SectionHeading>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
                High-level finance policies, procedures, process flows, approval workflows, and non-sensitive general forms/templates are fully included within the IMS and follow the standard TE-IMS- numbering and document control rules.
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
                Detailed transactional records, ledgers, invoices, receipts, payroll data, bank reconciliations, tax filings, and any other sensitive or software-generated financial documents are excluded from the main IMS document control. These are managed separately under the Finance Department's dedicated accounting/ERP system, with strict access restrictions, native software audit trails, and compliance with ZATCA, SOCPA, and Personal Data Protection Law requirements. Only summary-level or control-level finance outputs (e.g., budget vs actual summaries) are referenced or attached in the IMS where necessary for oversight and reporting.
              </p>
              <p className="text-sm leading-relaxed mb-4 italic" style={{ color: "#6b7a8d" }}>
                Note: Exclusions (if any) will be clearly documented and formally justified in the overarching IMS Manual.
              </p>

              {/* Section 7 */}
              <SectionHeading id="s7">7. Our Commitment</SectionHeading>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>True East Mining Company firmly commits to:</p>
              <ul className="list-none pl-0 space-y-2 mb-6">
                {[
                  "Fully implementing and maintaining this Integrated Management System.",
                  "Providing the necessary resources (people, time, tools, training).",
                  "Ensuring leadership visibility and active participation at the highest levels.",
                  "Reviewing performance regularly and driving continual improvement.",
                  "Communicating the IMS effectively to all personnel and interested parties.",
                ].map((item, i) => <Bullet key={i}>{item}</Bullet>)}
              </ul>
              <p className="text-sm leading-relaxed mb-2 font-semibold" style={{ color: "#081C2E" }}>
                The IMS is not a paperwork exercise — it is how we lead, how we operate, how we protect our people, how we serve our clients, and how we respect the environment.
              </p>
              <p className="text-sm leading-relaxed mb-1 font-bold" style={{ color: "#C49A28" }}>
                Zero Harm – Quality Excellence – Environmental Responsibility
              </p>
              <p className="text-sm leading-relaxed mb-6 font-bold" style={{ color: "#C49A28" }}>
                Every Day – Everywhere
              </p>

              {/* Section 8 */}
              <SectionHeading id="s8">8. Revision History</SectionHeading>
              <div className="overflow-x-auto rounded border" style={{ borderColor: "#dde3ec" }}>
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr style={{ backgroundColor: "#081C2E" }}>
                      {["Rev", "Date", "Description of Changes", "Prepared By", "Approved By"].map((h) => (
                        <th key={h} className="text-left px-3 py-2 font-semibold tracking-wide" style={{ color: "#ffffff" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                      <td className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>0.0</td>
                      <td className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>24 Feb 2026</td>
                      <td className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>Initial Working Draft for IMS Development</td>
                      <td className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>Joao Melo</td>
                      <td className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>Pending</td>
                    </tr>
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

      <Footer />
    </div>
  );
}
