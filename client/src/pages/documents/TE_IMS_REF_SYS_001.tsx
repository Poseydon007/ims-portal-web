// TE-IMS-REF-SYS-001 Rev01 — Document Identification and Numbering Rules
// Design: Standardized policy layout — left sidebar (Doc Info + TOC) + main content area

import { Link } from "wouter";
import { TopNav, Footer, Breadcrumb } from "@/components/Layout";
import { LOGO_GRAY, LOGO_WHITE } from "@/lib/imsData";

const sections = [
  { id: "s1", label: "1. Purpose" },
  { id: "s2", label: "2. Scope" },
  { id: "s3", label: "3. Special Case: Finance Documents" },
  { id: "s4", label: "4. Document Type Codes" },
  { id: "s5", label: "5. Department / Function Codes" },
  { id: "s6", label: "6. Core Numbering Structure" },
  { id: "s7", label: "7. Full Syntax Examples" },
  { id: "s8", label: "8. Naming Conventions" },
  { id: "s9", label: "9. Revision Rules" },
  { id: "s10", label: "10. Responsibilities" },
  { id: "s11", label: "11. Revision History" },
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

export default function TE_IMS_REF_SYS_001() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "REF — References", href: "/docs/ref" },
          { label: "Document Identification and Numbering Rules" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              Document Identification and Numbering Rules
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-REF-SYS-001_Rev01</span>
              <span style={{ color: "#c0c8d4" }}>·</span>
              <span className="text-xs" style={{ color: "#6b7a8d" }}>01 Mar 2026</span>
              <span style={{ color: "#c0c8d4" }}>·</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: "#d4edda", color: "#155724" }}>
                ✓ Approved for Implementation
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
                ["Document Code", "TE-IMS-REF-SYS-001"],
                ["Revision", "Rev 01"],
                ["Date", "01 March 2026"],
                ["Status", "✓ Approved"],
                ["Category", "Reference"],
                ["Scope", "All IMS controlled documents across TEMC"],
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-REF-SYS-001_Rev01</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Document Identification and Numbering Rules
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-2" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-REF-SYS-001</td>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Revision</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>01</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Date</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>01.03.2026</td>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Status</td>
                    <td className="border px-3 py-2 font-bold" style={{ borderColor: "#dde3ec", color: "#155724" }}>Approved for Implementation</td>
                  </tr>
                </tbody>
              </table>

              {/* Section 1 */}
              <SectionHeading id="s1">1. Purpose</SectionHeading>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
                This document defines the mandatory and standardised rules for assigning unique identifiers to all controlled documents within True East Mining Company's Integrated Management System (IMS).
              </p>
              <p className="text-sm leading-relaxed mb-2" style={{ color: "#374151" }}>It ensures:</p>
              <ul className="list-none pl-0 space-y-1 mb-3">
                {[
                  "Every document has a clear, consistent, and instantly meaningful identity.",
                  "Full traceability from legacy/old documents to the new system.",
                  "Easy search, filtering, sorting, and retrieval by users in the field and office.",
                  "No ambiguity for project-specific versus company-wide documents.",
                  "Scalability for future growth (new projects, rigs, departments, document volumes).",
                  "Alignment with ISO 9001, 14001, and 45001 requirements for documented information control.",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm" style={{ color: "#374151" }}>
                    <span style={{ color: "#C49A28" }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                This establishes the baseline logic for the entire True East IMS document database.
              </p>

              {/* Section 2 */}
              <SectionHeading id="s2">2. Scope</SectionHeading>
              <p className="text-sm leading-relaxed mb-2" style={{ color: "#374151" }}>
                Applies to all controlled documents managed under the True East IMS, including but not limited to:
              </p>
              <ul className="list-none pl-0 space-y-1 mb-3">
                {[
                  "Policies, Manuals, Procedures, Plans",
                  "SOPs, Work Instructions",
                  "Forms, Checklists, Registers, Logs",
                  "Drawings",
                  "References, Appendices, External Standards",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm" style={{ color: "#374151" }}>
                    <span style={{ color: "#C49A28" }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                <strong>Excludes:</strong> Uncontrolled records (emails, informal notes, drafts not yet approved for release).
              </p>

              {/* Section 3 */}
              <SectionHeading id="s3">3. Special Case: Treatment of Finance &amp; Accounting Documents</SectionHeading>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
                High-level finance policies, procedures, process flows, approval workflows, and non-sensitive general forms/templates are fully included within the IMS and follow the standard TE-IMS numbering and control rules.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                Detailed transactional records, ledgers, invoices, receipts, payroll data, bank reconciliations, tax filings, and any other sensitive or software-generated financial documents are strictly excluded from the main IMS document control. These are managed separately under the Finance Department's dedicated accounting/ERP system. Only summary-level or control-level finance outputs are referenced or attached in the IMS where necessary for oversight.
              </p>

              {/* Section 4 */}
              <SectionHeading id="s4">4. Document Type Codes</SectionHeading>
              <div className="overflow-x-auto mb-4 rounded border" style={{ borderColor: "#dde3ec" }}>
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr style={{ backgroundColor: "#081C2E" }}>
                      {["Code", "Full Name", "Typical Documents / Examples"].map((h) => (
                        <th key={h} className="text-left px-3 py-2 font-semibold tracking-wide" style={{ color: "#ffffff" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["POL", "Policies", "HSE Policy, Quality Policy, HR Policy"],
                      ["MAN", "Manuals / Playbooks", "IMS Manual, Foundation Playbook"],
                      ["PROC", "Procedures", "Document Control, Incident Management, Risk Assessment"],
                      ["PLN", "Plans", "Emergency Response Plan, Training Plan, Mobilization Plan"],
                      ["SOP", "SOPs & Work Instructions", "Rigging Up SOP, Core Handling SOP"],
                      ["FRM", "Forms & Checklists", "Daily Drilling Report, PPE Issue Form, Incident Report"],
                      ["REG", "Registers & Logs", "Master Document Register, Risk Register, Training Matrix"],
                      ["DWG", "Drawings", "Pad Layout, Rig Configuration, Directional Plan"],
                      ["REF", "References & Appendices", "Ma'aden Standards, Equipment Manuals, External Regulations"],
                    ].map(([code, name, examples], i) => (
                      <tr key={code} style={{ backgroundColor: i % 2 === 0 ? "rgba(8,28,46,0.03)" : undefined }}>
                        <td className="border px-3 py-2 te-code font-semibold" style={{ borderColor: "#edf0f5" }}>{code}</td>
                        <td className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>{name}</td>
                        <td className="border px-3 py-2" style={{ borderColor: "#edf0f5", color: "#6b7a8d" }}>{examples}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Section 5 */}
              <SectionHeading id="s5">5. Department / Function Codes</SectionHeading>
              <div className="overflow-x-auto mb-4 rounded border" style={{ borderColor: "#dde3ec" }}>
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr style={{ backgroundColor: "#081C2E" }}>
                      {["Code", "Full Name / Function", "Typical Documents Owned"].map((h) => (
                        <th key={h} className="text-left px-3 py-2 font-semibold tracking-wide" style={{ color: "#ffffff" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["ADMIN", "Administration / General", "Office procedures, communications"],
                      ["COMM", "Commercial / Contracts", "Bidding, contracts, client agreements"],
                      ["ENG", "Engineering / Technical", "Designs, technical drawings, pad layouts"],
                      ["FIN", "Finance / Accounting", "IMS-level policies, expense workflows"],
                      ["GEO", "Geology / Core Management", "Core logs, sampling forms, orientation procedures"],
                      ["GOV", "Governance / Corporate", "Foundation Playbooks, Top Management Policies"],
                      ["HR", "Human Resources", "Hiring, leave, onboarding"],
                      ["HSE", "Health, Safety & Environment", "Risk assessments, environmental rehab, waste management, emergency plans"],
                      ["IT", "Information Technology / Cyber", "IT policies, cybersecurity standards"],
                      ["LC", "Local Content / ESG", "Saudization reports, community plans"],
                      ["LOG", "Logistics / Journey Mgt.", "Rig moves, JMPs, convoy plans, fleet management"],
                      ["MAINT", "Maintenance / Equipment", "Preventive maintenance logs (PMP), rig inspections"],
                      ["OPS", "Operations / Drilling / Field", "Drilling SOPs, shift handovers"],
                      ["PMO", "Project Management Office", "Project execution plans, client reporting"],
                      ["SCM", "Supply Chain / Procurement", "Vendor evaluation, warehouse management"],
                      ["SEC", "Security", "Site access control, restricted zone operations"],
                      ["SYS", "System / Document Control", "Master registers, internal audits, document rules"],
                      ["TRN", "Training & Competence", "Training matrices, certification logs"],
                    ].map(([code, name, docs], i) => (
                      <tr key={code} style={{ backgroundColor: i % 2 === 0 ? "rgba(8,28,46,0.03)" : undefined }}>
                        <td className="border px-3 py-2 te-code font-semibold" style={{ borderColor: "#edf0f5" }}>{code}</td>
                        <td className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>{name}</td>
                        <td className="border px-3 py-2" style={{ borderColor: "#edf0f5", color: "#6b7a8d" }}>{docs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Section 6 */}
              <SectionHeading id="s6">6. Core Numbering Structure</SectionHeading>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
                All documents follow this locked alphanumeric format. Hyphens (<code>-</code>) strictly separate structural groups, while underscores (<code>_</code>) strictly attach the Revision.
              </p>
              <div className="rounded p-4 mb-3 text-sm font-mono" style={{ backgroundColor: "#f4f6f9", color: "#081C2E", border: "1px solid #dde3ec" }}>
                <div className="mb-1"><strong>Standard Company-Wide:</strong></div>
                <div className="mb-3 text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-[Type]-[Dept]-[Sequential_3-digit]_[Revision]</div>
                <div className="mb-1"><strong>Project-Specific (Conditional):</strong></div>
                <div className="text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-[Type]-[Dept]-[Project_Identifier]-[Sequential_3-digit]_[Revision]</div>
              </div>
              <div className="overflow-x-auto mb-4 rounded border" style={{ borderColor: "#dde3ec" }}>
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr style={{ backgroundColor: "#081C2E" }}>
                      {["#", "Component", "Format / Rules", "Mandatory", "Example", "Rationale"].map((h) => (
                        <th key={h} className="text-left px-3 py-2 font-semibold tracking-wide" style={{ color: "#ffffff" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["1", "Company", "Always TE", "Yes", "TE", "Company branding & separation from subsidiaries."],
                      ["2", "System", "Always IMS", "Yes", "IMS", "Identifies as part of the Integrated Mgmt. System."],
                      ["3", "Type", "3–4 letter code (Section 4)", "Yes", "PROC", "Defines document level in the hierarchy."],
                      ["4", "Dept", "3–5 letter code (Section 5)", "Yes", "HSE", "Shows ownership & functional area."],
                      ["5", "Project ID", "Short alphanumeric (max 6)", "Conditional", "PR001", "Mandatory only for project/rig-specific documents."],
                      ["6", "Sequence", "001–999 (3 digits)", "Yes", "001", "Unique identifier mapped directly into that document."],
                      ["7", "Revision", "_Rev00 (initial), _Rev01...", "Yes", "_Rev00", "Clear version tracking attached via underscore."],
                    ].map(([num, comp, fmt, mand, ex, rat], i) => (
                      <tr key={num} style={{ backgroundColor: i % 2 === 0 ? "rgba(8,28,46,0.03)" : undefined }}>
                        <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#edf0f5" }}>{num}</td>
                        <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#edf0f5" }}>{comp}</td>
                        <td className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>{fmt}</td>
                        <td className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>{mand}</td>
                        <td className="border px-3 py-2 te-code" style={{ borderColor: "#edf0f5" }}>{ex}</td>
                        <td className="border px-3 py-2" style={{ borderColor: "#edf0f5", color: "#6b7a8d" }}>{rat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Section 7 */}
              <SectionHeading id="s7">7. Full Syntax Examples</SectionHeading>
              <p className="text-sm font-semibold mb-2" style={{ color: "#081C2E" }}>Standard Corporate Documents:</p>
              <ul className="list-none pl-0 space-y-1 mb-4">
                {[
                  "Company-wide Policy: TE-IMS-POL-HSE-001_Rev00",
                  "Generic Procedure: TE-IMS-PROC-OPS-005_Rev02",
                  "Standard Form: TE-IMS-FRM-LOG-001_Rev00",
                  "Master Risk Register: TE-IMS-REG-HSE-001_Rev00",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm" style={{ color: "#374151" }}>
                    <span style={{ color: "#C49A28" }}>•</span>
                    <span className="te-code">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm font-semibold mb-2" style={{ color: "#081C2E" }}>Project/Site-Specific Documents:</p>
              <ul className="list-none pl-0 space-y-1">
                {[
                  "Project Execution Plan: TE-IMS-PLN-PMO-PR001-001_Rev00",
                  "Rig Inspection Log (Specific Rig): TE-IMS-REG-MAINT-RIG05-001_Rev00",
                  "Pad Layout Drawing: TE-IMS-DWG-ENG-SAR03-001_Rev01",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm" style={{ color: "#374151" }}>
                    <span style={{ color: "#C49A28" }}>•</span>
                    <span className="te-code">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Section 8 */}
              <SectionHeading id="s8">8. Naming Conventions: Document Code vs. File Name</SectionHeading>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
                To keep the official Document Code short, mathematically pure, and easy to type in cross-references, the descriptive name of the document is removed from the official code but added to the computer file name.
              </p>
              <ul className="list-none pl-0 space-y-1 mb-3">
                <li className="flex gap-2 text-sm" style={{ color: "#374151" }}>
                  <span style={{ color: "#C49A28" }}>•</span>
                  <span><strong>Official Code (inside the document header):</strong> <span className="te-code">TE-IMS-FRM-OPS-001_Rev00</span></span>
                </li>
                <li className="flex gap-2 text-sm" style={{ color: "#374151" }}>
                  <span style={{ color: "#C49A28" }}>•</span>
                  <span><strong>File Name (when saving to SharePoint/Windows):</strong> <span className="te-code">TE-IMS-FRM-OPS-001_Rev00 - Daily Drilling Report.docx</span></span>
                </li>
              </ul>
              <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                This ensures that if the title of a document slightly changes in the future, the underlying alphanumeric control code remains intact.
              </p>

              {/* Section 9 */}
              <SectionHeading id="s9">9. Revision Rules</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                {[
                  "_Rev00 = Initial approved release.",
                  "_Rev01 to _Rev99 = Updates and changes.",
                  "Full revision history is kept in the document control footer of the actual document and tracked centrally in the Master Document Register (TE-IMS-REG-SYS-001_Rev00).",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm" style={{ color: "#374151" }}>
                    <span style={{ color: "#C49A28" }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Section 10 */}
              <SectionHeading id="s10">10. Responsibilities &amp; Implementation</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                {[
                  ["IMS Project Lead", "Maintains this reference document and dictates structural logic."],
                  ["Document Controller", "Enforces rules during document creation, migration, and filing."],
                  ["Department Heads", "Validate department codes and descriptors in their respective areas."],
                  ["All Users", "Follow rules when naming or searching for documents."],
                ].map(([role, duty]) => (
                  <li key={role} className="flex gap-2 text-sm" style={{ color: "#374151" }}>
                    <span style={{ color: "#C49A28" }}>•</span>
                    <span><strong>{role}</strong> — {duty}</span>
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
                    ["01", "01 Mar 2026", "Initial draft — Core logic upgraded to pure alphanumeric syntax. Departments updated (SCM, GOV, SYS).", "Joao Melo"],
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
