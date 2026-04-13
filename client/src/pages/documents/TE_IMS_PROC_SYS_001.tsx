// TE-IMS-PROC-SYS-001 — Document Control Procedure
// Design: Standardized policy layout — left sidebar (Doc Info + TOC) + main content area

import { Link } from "wouter";
import { TopNav, Footer, Breadcrumb } from "@/components/Layout";
import { LOGO_GRAY, LOGO_WHITE } from "@/lib/imsData";

const sections = [
  { id: "s1", label: "1. PURPOSE" },
  { id: "s2", label: "2. SCOPE" },
  { id: "s3", label: "3. DEFINITIONS" },
  { id: "s4", label: "4. RESPONSIBILITIES" },
  { id: "s5", label: "5. DOCUMENT IDENTIFICATION &amp; NUMBERING" },
  { id: "s6", label: "6. CREATION &amp; APPROVAL" },
  { id: "s7", label: "7. DISTRIBUTION &amp; ACCESS" },
  { id: "s8", label: "8. REVISION &amp; CHANGE CONTROL" },
  { id: "s9", label: "9. STORAGE &amp; RETRIEVAL" },
  { id: "s10", label: "10. MONITORING &amp; REVIEW" },
  { id: "s11", label: "11. RELATED DOCUMENTS" },
  { id: "s12", label: "12. APPROVAL &amp; SIGN-OFF" },
  { id: "s13", label: "13. REVISION HISTORY" },
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
    <li className="flex gap-2 mb-2 text-sm leading-relaxed" style={{ color: "#374151" }}>
      <span style={{ color: "#C49A28", marginTop: "2px" }}>•</span>
      <span>{children}</span>
    </li>
  );
}

export default function TE_IMS_PROC_SYS_001() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "PROC — Procedures", href: "/docs/proc" },
          { label: "Document Control Procedure" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              Document Control Procedure
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-PROC-SYS-001_Rev01</span>
              <span style={{ color: "#c0c8d4" }}>·</span>
              <span className="text-xs" style={{ color: "#6b7a8d" }}>09 Apr 2026</span>
              <span style={{ color: "#c0c8d4" }}>·</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: "#d4edda", color: "#155724" }}>
                ✓ Approved for Implementation
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/docs/proc" className="text-xs font-semibold px-3 py-1.5 rounded border hover:bg-gray-50 transition-colors" style={{ borderColor: "#dde3ec", color: "#081C2E" }}>
              ← Back to Procedures
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
                ["Document Code", "TE-IMS-PROC-SYS-001"],
                ["Revision", "Rev 01"],
                ["Date", "09 Apr 2026"],
                ["Status", "✓ Approved"],
                ["Category", "Procedure"],
                ["Scope", "All TEMC operations, employees, contractors & visitors"],
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-PROC-SYS-001_Rev01</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Document Control Procedure
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-6" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-PROC-SYS-001</td>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Revision</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>01</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Date</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>09 Apr 2026</td>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Status</td>
                    <td className="border px-3 py-2 font-bold" style={{ borderColor: "#dde3ec", color: "#155724" }}>Approved for Implementation</td>
                  </tr>
                </tbody>
              </table>

              {/* Document body content */}


            <SectionHeading id="s1">1. PURPOSE</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure establishes the mandatory, standardized process for the creation, review, approval, distribution, revision, storage, retrieval, and disposal of all controlled documents and records within True East Mining Company's Integrated Management System (IMS). It ensures:</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>All documents are unique, current, legible, readily identifiable, and available at points of use.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Only current versions are used across the organisation.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Obsolete documents are removed from use or clearly identified as obsolete.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Document changes are controlled and traceable through revision history.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Records are protected, retained, and disposed of appropriately.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Full compliance with ISO 9001:2015 (clause 7.5), ISO 14001:2015 (clause 7.5), and ISO 45001:2018 (clause 7.5).</span>
              </li>
            </ul>

            <SectionHeading id="s2">2. SCOPE</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure applies to all controlled documents and records within the True East Mining IMS, including:</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Policies, procedures, SOPs and work instructions.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Forms, registers, checklists and templates.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Records (completed forms, reports, minutes, logs).</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Drawings, certificates and legal registers.</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Exclusions:</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Finance &amp; accounting documents — handled separately per TE-IMS-REF-SYS-002 (Treatment of Finance &amp; Accounting Documents).</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Personal employee files (HR confidential records) — managed under the HR confidentiality policy.</span>
              </li>
            </ul>

            <SectionHeading id="s3">3. DEFINITIONS</SectionHeading>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Controlled Document — Any document that requires formal approval, unique identification, and version control (e.g., procedures, SOPs, forms).</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Record — Evidence of completed activities (e.g., signed checklists, reports, minutes, training registers).</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Master Document Register — The central list of all controlled documents with codes, revisions, status and locations, maintained under TE-IMS-REG-SYS-001.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Obsolete Document — Any document superseded by a newer revision or formally withdrawn from use.</span>
              </li>
            </ul>

            <SectionHeading id="s4">4. RESPONSIBILITIES</SectionHeading>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>IMS Project Lead / Document Controller — Maintain the Master Document Register, enforce numbering rules, issue new codes, track revisions, and distribute updates.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Department Heads / Process Owners — Author, review and approve documents in their area; ensure current versions are used; remove obsolete copies from circulation.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>All Users — Use only current, approved documents; report obsolete or missing documents; never alter controlled documents without approval.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>CEO / Managing Director — Approve top-level policies and major changes to the IMS framework.</span>
              </li>
            </ul>

            <SectionHeading id="s5">5. DOCUMENT IDENTIFICATION &amp; NUMBERING</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>All controlled documents follow this standard format:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>TE-IMS-[Type]-[Department/Function]-[Sequential Number]_RevXX</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Type Codes:</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Code</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Description</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>POL</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Policy</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>PROC</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Core Procedure</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>SOP</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Standard Operating Procedure</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>FRM</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Form</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>REG</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Register</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>DWG</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Drawing</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>REF</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Reference document</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Department / Function Codes:</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Code</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Function</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>GOV</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Governance</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>SYS</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>System-wide</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Health, Safety &amp; Environment</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HR</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Human Resources</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>TRN</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Training</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>OPS</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Operations</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MAINT</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Maintenance</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>LOG</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Logistics</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>SCM</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Supply Chain Management</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>LC</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Local Content</td>
                </tr>
                </tbody>
              </table>
            </div>

            <SectionHeading id="s6">6. CREATION &amp; APPROVAL</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>All new controlled documents shall follow the four-step creation and approval workflow:</p>

            <SectionHeading id="s1">1. Draft — Author creates the document using the approved template (TE-IMS-FRM-SYS-001).</SectionHeading>

            <SectionHeading id="s2">2. Review — Draft is sent to the relevant Department Head / Process Owner for technical and operational review.</SectionHeading>

            <SectionHeading id="s3">3. Approval — Document is sent to the IMS Project Lead for code assignment, then final approval by the authorised manager (e.g., HSE Manager for HSE documents, CEO for Policies).</SectionHeading>

            <SectionHeading id="s4">4. Issuance — Document Controller adds the document to the Master Register and distributes it via email, shared drive, and printed copies where required.</SectionHeading>

            <SectionHeading id="s7">7. DISTRIBUTION &amp; ACCESS</SectionHeading>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>All controlled documents are stored in the central IMS repository (shared drive or cloud folder).</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Only current revisions are accessible to users.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Printed copies must be clearly marked “Controlled Copy” and carry the revision date.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Obsolete printed copies must be destroyed or clearly marked “OBSOLETE – Do Not Use”.</span>
              </li>
            </ul>

            <SectionHeading id="s8">8. REVISION &amp; CHANGE CONTROL</SectionHeading>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Any change requires a new revision number (Rev01, Rev02, etc.).</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Changes are tracked in the Revision History section of each document.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Affected users are notified of revisions via email or Toolbox Talk.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Old revisions are archived electronically — never deleted.</span>
              </li>
            </ul>

            <SectionHeading id="s9">9. STORAGE &amp; RETRIEVAL</SectionHeading>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Electronic master copies are stored in a secure, backed-up location.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Records are retained for minimum periods (e.g., 5 years for training records, 3 years for incident reports).</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Disposal of records follows NCEC / MHRSD retention rules and applicable Saudi regulations.</span>
              </li>
            </ul>

            <SectionHeading id="s10">10. MONITORING &amp; REVIEW</SectionHeading>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Monthly check: percentage of documents current, percentage of overdue reviews.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Annual audit of document control effectiveness by the IMS Project Lead.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Results reported and discussed in Management Review Meetings.</span>
              </li>
            </ul>

            <SectionHeading id="s11">11. RELATED DOCUMENTS</SectionHeading>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>TE-IMS-REG-SYS-001 — Master Document Register</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>TE-IMS-FRM-SYS-001 — Document Template</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>TE-IMS-REF-SYS-002 — Treatment of Finance &amp; Accounting Documents</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>TE-IMS-MAN-SYS-001 — IMS Manual</span>
              </li>
            </ul>

            <SectionHeading id="s12">12. APPROVAL &amp; SIGN-OFF</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure is approved for implementation across True East Mining Company's Integrated Management System.</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Role</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Name</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Signature</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Date</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Prepared by (IMS Lead)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Reviewed by (HSE Manager)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Approved by (CEO / MD)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                </tbody>
              </table>
            </div>

            <SectionHeading id="s13">13. REVISION HISTORY</SectionHeading>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Rev</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Date</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Description of Changes</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Author</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>00</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>01 Mar 2026</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Initial release — Approved for Implementation.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Joao Melo</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>01</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>09 Apr 2026</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Reformatted to True East IMS design standard. Content preserved and reorganised; added Related Documents and structured Sign-Off block. No change in intent or scope.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>IMS Project Lead</td>
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
