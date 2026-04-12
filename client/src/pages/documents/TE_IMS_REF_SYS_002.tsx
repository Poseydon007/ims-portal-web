// TE-IMS-REF-SYS-002 — Treatment of Finance & Accounting Documents within the IMS
// Design: Standardized policy layout — left sidebar (Doc Info + TOC) + main content area

import { Link } from "wouter";
import { TopNav, Footer, Breadcrumb } from "@/components/Layout";
import { LOGO_GRAY } from "@/lib/imsData";

const sections = [
  { id: "s1", label: "1. Purpose" },
  { id: "s2", label: "2. Scope & Applicability" },
  { id: "s3", label: "3. Rationale" },
  { id: "s4", label: "4. Clear Boundary — IN and OUT" },
  { id: "s5", label: "5. Integration Points" },
  { id: "s6", label: "6. Access & Security Rules" },
  { id: "s7", label: "7. Responsibilities" },
  { id: "s8", label: "8. References" },
  { id: "s9", label: "9. Revision History" },
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

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 mb-2 text-sm leading-relaxed" style={{ color: "#374151" }}>
      <span style={{ color: "#C49A28", marginTop: "2px", flexShrink: 0 }}>•</span>
      <span>{children}</span>
    </li>
  );
}

export default function TE_IMS_REF_SYS_002() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "REF — References", href: "/docs/ref" },
          { label: "Treatment of Finance & Accounting Documents" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              Treatment of Finance &amp; Accounting Documents within the IMS
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-REF-SYS-002_Rev00</span>
              <span style={{ color: "#c0c8d4" }}>·</span>
              <span className="text-xs" style={{ color: "#6b7a8d" }}>24 Feb 2026</span>
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
                ["Document Code", "TE-IMS-REF-SYS-002"],
                ["Revision", "Rev 00"],
                ["Date", "24 February 2026"],
                ["Status", "✓ Approved"],
                ["Category", "Reference"],
                ["Scope", "All TEMC IMS-controlled documents and Finance function"],
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-REF-SYS-002_Rev00</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Treatment of Finance &amp; Accounting Documents within the IMS
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-6" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-REF-SYS-002</td>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Revision</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>00</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Date</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>24.02.2026</td>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Status</td>
                    <td className="border px-3 py-2 font-bold" style={{ borderColor: "#dde3ec", color: "#155724" }}>Approved for Implementation – Internal Use Only</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Prepared by</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>Joao Melo (IMS Project Lead)</td>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Next Review</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>Upon formal incorporation into TE-IMS-PROC-SYS-001_Rev00 or as a permanent reference</td>
                  </tr>
                </tbody>
              </table>

              {/* Section 1 */}
              <SectionHeading id="s1">1. Purpose</SectionHeading>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
                This document clearly defines how Finance &amp; Accounting documents and records are handled within True East Mining Company's Integrated Management System (IMS).
              </p>
              <p className="text-sm leading-relaxed mb-2" style={{ color: "#374151" }}>The objective is to:</p>
              <ul className="list-none pl-0 space-y-1 mb-3">
                <Bullet>Protect the confidentiality, integrity, and restricted access required for sensitive financial data.</Bullet>
                <Bullet>Avoid unnecessary duplication or double-handling of records that are already generated and controlled by specialized accounting/financial software (ERP).</Bullet>
                <Bullet>Maintain full IMS compliance and audit readiness while respecting the legal, regulatory, and operational realities of financial management.</Bullet>
                <Bullet>Provide transparent, unambiguous rules so that all employees, auditors, and external parties understand the boundaries of the IMS.</Bullet>
              </ul>
              <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                This clarification prevents confusion, ensures proper segregation of duties, and aligns with best practices observed in mining, oil &amp; gas, and other capital-intensive industries in the Kingdom of Saudi Arabia.
              </p>

              {/* Section 2 */}
              <SectionHeading id="s2">2. Scope &amp; Applicability</SectionHeading>
              <p className="text-sm leading-relaxed mb-2" style={{ color: "#374151" }}>
                This rule applies to all documents and records that fall under the Finance &amp; Accounting function.
              </p>
              <p className="text-sm font-semibold mb-1" style={{ color: "#081C2E" }}>Included in IMS (controlled under TE-IMS numbering):</p>
              <ul className="list-none pl-0 space-y-1 mb-3">
                <Bullet>High-level policies</Bullet>
                <Bullet>Strategic procedures and process flows</Bullet>
                <Bullet>Approval of workflows and limits of authority</Bullet>
                <Bullet>General (non-sensitive) blank forms and templates</Bullet>
                <Bullet>Summary-level registers or management dashboards</Bullet>
              </ul>
              <p className="text-sm font-semibold mb-1" style={{ color: "#081C2E" }}>Excluded from IMS (managed outside TE-IMS numbering):</p>
              <ul className="list-none pl-0 space-y-1">
                <Bullet>All transactional, detailed, or raw financial records (e.g., invoices, receipts).</Bullet>
                <Bullet>Any document containing personally identifiable financial information (PII), bank details, tax identifiers, payroll data, or client payment information.</Bullet>
              </ul>

              {/* Section 3 */}
              <SectionHeading id="s3">3. Rationale — Why Finance &amp; Accounting Requires Special Treatment</SectionHeading>
              <div className="overflow-x-auto rounded border" style={{ borderColor: "#dde3ec" }}>
                <table className="w-full text-xs border-collapse">
                  <thead style={{ backgroundColor: "#081C2E" }}>
                    <tr>
                      <th className="px-3 py-2 text-left font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Reason</th>
                      <th className="px-3 py-2 text-left font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Explanation</th>
                      <th className="px-3 py-2 text-left font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Consequence if not separated</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Data Sensitivity & Confidentiality", "Invoices, bank statements, payroll files, vendor payments, and tax returns contain highly confidential and personally identifiable information (PII) subject to strict data protection rules (e.g., Saudi Personal Data Protection Law – PDPL).", "Risk of unauthorized access, data breaches, or severe non-compliance if mixed with general IMS documents."],
                      ["Regulatory & Legal Obligations", "ZATCA (Zakat, Tax & Customs Authority), SOCPA, and anti-money laundering regulations require specific retention periods, formats, audit trails, and highly restricted access for financial records.", "Potential fines, negative audit findings, or legal exposure if detailed records are managed under generic IMS rules."],
                      ["Specialized Software Control", "Most transactional records are generated automatically by the company's accounting/ERP system, which already applies its own secure numbering, versioning, access logs, and immutable audit trails.", "Duplication of effort, version control conflicts, and loss of native software controls if forced into the IMS."],
                      ["Volume & Frequency", "Finance generates thousands of transactional documents monthly. Forcing all of these into the IMS would make the system unmanageable and dilute its effectiveness.", "IMS becomes bloated, slow, and unusable for its core operational and compliance purpose."],
                      ["Segregation of Duties", "Only a very limited number of authorized personnel should have access to detailed financial records. IMS documents are designed to be widely accessible to the workforce.", "Breach of segregation of duties and drastically increased insider risk."],
                    ].map(([reason, explanation, consequence], i) => (
                      <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "rgba(8,28,46,0.03)" : "transparent" }}>
                        <td className="px-3 py-2 text-xs font-semibold" style={{ color: "#081C2E" }}>{reason}</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>{explanation}</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>{consequence}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Section 4 */}
              <SectionHeading id="s4">4. Clear Boundary — What is IN and What is OUT</SectionHeading>
              <div className="overflow-x-auto rounded border" style={{ borderColor: "#dde3ec" }}>
                <table className="w-full text-xs border-collapse">
                  <thead style={{ backgroundColor: "#081C2E" }}>
                    <tr>
                      <th className="px-3 py-2 text-left font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Category</th>
                      <th className="px-3 py-2 text-left font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Examples</th>
                      <th className="px-3 py-2 text-left font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>In IMS?</th>
                      <th className="px-3 py-2 text-left font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Numbering / Format</th>
                      <th className="px-3 py-2 text-left font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Access Restriction</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Finance Policies", "Finance Policy, Anti-Fraud Policy, Investment Policy", "Yes", "TE-IMS-POL-FIN-001_Rev00", "Medium (Standard IMS users)"],
                      ["Procedures & Flows", "Invoice Approval Workflow, Expense Reimbursement Procedure", "Yes", "TE-IMS-PROC-FIN-001_Rev00", "Medium (Standard IMS users)"],
                      ["General Forms", "Travel Expense Claim, Purchase Requisition, Budget Request", "Yes", "TE-IMS-FRM-FIN-001_Expense_Claim_Rev00", "Medium (Standard IMS users)"],
                      ["Summary Registers", "Monthly Budget vs Actual Summary, Vendor Payment Aging", "Yes", "TE-IMS-REG-FIN-001_Budget_Summary_Rev00", "Medium (Standard IMS users)"],
                      ["Transactional Invoices", "Supplier Invoice #INV-2026-0456, Customer Receipt #REC-789", "No", "ERP / Accounting software native numbering", "High (Finance team only)"],
                      ["Bank & Cash Records", "Bank statements, Cash reconciliation files", "No", "ERP / Bank system native numbering", "High (Finance team only)"],
                      ["Payroll Data", "Salary slips, Payroll journals, End-of-service calculations", "No", "HR/Payroll system native numbering", "Very High (HR/Finance only)"],
                      ["Tax & Zakat Filings", "ZATCA VAT returns, Zakat declarations", "No", "ZATCA portal / ERP numbering", "Very High (Finance team only)"],
                      ["General Ledgers", "Full GL entries, Sub-ledger details", "No", "ERP native numbering", "High (Finance team only)"],
                    ].map(([cat, ex, inIms, num, access], i) => (
                      <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "rgba(8,28,46,0.03)" : "transparent" }}>
                        <td className="px-3 py-2 text-xs font-semibold" style={{ color: "#081C2E" }}>{cat}</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>{ex}</td>
                        <td className="px-3 py-2 text-xs font-bold" style={{ color: inIms === "Yes" ? "#155724" : "#721c24" }}>{inIms}</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>{num}</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>{access}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Section 5 */}
              <SectionHeading id="s5">5. Integration Points (How the Two Worlds Connect)</SectionHeading>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
                Even though detailed finance records are outside the IMS, the following controlled integration points ensure the IMS framework remains complete:
              </p>
              <ul className="list-none pl-0 space-y-1 mb-3">
                <Bullet><strong>Process Linkage:</strong> Finance-related IMS procedures describe the high-level workflow and approval authorities (e.g., "Invoices above SAR 50,000 require Finance Manager + CEO approval").</Bullet>
                <Bullet><strong>Data Summaries:</strong> Summary outputs from the finance system (monthly reports, dashboards, exception lists) may be attached or referenced in IMS registers (e.g., Budget Control Register).</Bullet>
                <Bullet><strong>Performance Metrics:</strong> Finance KPIs (e.g., Days Payable Outstanding, Budget Variance %) are included in the annual IMS Management Review.</Bullet>
                <Bullet><strong>Audit Evidence:</strong> Audit trails from the finance system are made available to internal/external auditors during IMS audits when required.</Bullet>
              </ul>
              <p className="text-sm leading-relaxed font-semibold" style={{ color: "#081C2E" }}>
                Crucial Rule: No detailed transactional data is ever copied, duplicated, or stored in the IMS repository.
              </p>

              {/* Section 6 */}
              <SectionHeading id="s6">6. Access &amp; Security Rules</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                <Bullet><strong>IMS Documents (Policies/Procedures/Blank Forms):</strong> Normal IMS access rights apply (role-based via SharePoint or equivalent document repository).</Bullet>
                <Bullet><strong>Detailed Finance Records:</strong> Strictly restricted to authorized Finance personnel only (separate network folder permissions, ERP user roles, no general IMS access).</Bullet>
                <Bullet><strong>Cross-Referencing:</strong> Any IMS document that references a finance system output must use a controlled hyperlink or reference number. Sensitive raw files must never be attached directly to an IMS document.</Bullet>
              </ul>

              {/* Section 7 */}
              <SectionHeading id="s7">7. Responsibilities</SectionHeading>
              <div className="overflow-x-auto rounded border" style={{ borderColor: "#dde3ec" }}>
                <table className="w-full text-xs border-collapse">
                  <thead style={{ backgroundColor: "#081C2E" }}>
                    <tr>
                      <th className="px-3 py-2 text-left font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Role</th>
                      <th className="px-3 py-2 text-left font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Responsibility</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Finance Manager", "Defines which specific finance documents are excluded; approves any finance-related IMS content."],
                      ["IMS Project Lead", "Ensures this boundary is clearly documented, maintained, and communicated across the organization."],
                      ["Document Controller", "Ensures excluded finance records are not registered in the Master Document Register."],
                      ["IT / System Admin", "Maintains strict access controls and permissions on finance folders and the ERP system."],
                      ["Internal/External Auditors", "Understand the boundary rule and request detailed finance records directly from the Finance team when needed during an audit."],
                    ].map(([role, resp], i) => (
                      <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "rgba(8,28,46,0.03)" : "transparent" }}>
                        <td className="px-3 py-2 text-xs font-semibold" style={{ color: "#081C2E" }}>{role}</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>{resp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Section 8 */}
              <SectionHeading id="s8">8. References &amp; Related Documents</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                <Bullet><span className="te-code">TE-IMS-PLN-GOV-000_Rev00</span> — IMS Foundation Playbook</Bullet>
                <Bullet><span className="te-code">TE-IMS-REF-SYS-001_Rev01</span> — Document Identification and Numbering Rules</Bullet>
                <Bullet><span className="te-code">TE-IMS-PROC-SYS-001_Rev00</span> — Document Control Procedure (Pending)</Bullet>
              </ul>

              {/* Section 9 */}
              <SectionHeading id="s9">9. Revision History</SectionHeading>
              <div className="overflow-x-auto rounded border" style={{ borderColor: "#dde3ec" }}>
                <table className="w-full text-xs border-collapse">
                  <thead style={{ backgroundColor: "#081C2E" }}>
                    <tr>
                      <th className="px-3 py-2 text-left font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Rev</th>
                      <th className="px-3 py-2 text-left font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Date</th>
                      <th className="px-3 py-2 text-left font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Description of Changes</th>
                      <th className="px-3 py-2 text-left font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Prepared By</th>
                      <th className="px-3 py-2 text-left font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Approved By</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                      <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>0.1</td>
                      <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>24 Feb 2026</td>
                      <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>Initial working draft – Finance boundary rules</td>
                      <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>Joao Melo</td>
                      <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>Pending</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>1.0</td>
                      <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>24 Feb 2026</td>
                      <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>Finalized syntax numbering and formatting</td>
                      <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>Joao Melo</td>
                      <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>Pending</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
