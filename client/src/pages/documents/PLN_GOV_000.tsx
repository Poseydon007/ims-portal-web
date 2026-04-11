// TE-IMS-PLN-GOV-000 — IMS Playbook: Foundation Document
// Design: matches POL_GOV_001 — gray logo header, navy sections, sidebar TOC

import Layout from "@/components/Layout";
import { Link } from "wouter";
import { LOGO_GRAY } from "@/lib/imsData";

const NAVY = "#081C2E";
const GOLD = "#C49A28";

export default function PLN_GOV_000() {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div style={{ backgroundColor: "#f4f6f9", borderBottom: "1px solid #dde3ec" }} className="py-2">
        <div className="container flex items-center gap-2 text-xs" style={{ color: "#6b7a8d" }}>
          <Link href="/" style={{ color: GOLD }}>Portal Home</Link>
          <span>›</span>
          <Link href="/docs/pln" style={{ color: GOLD }}>Plans</Link>
          <span>›</span>
          <span style={{ color: NAVY }}>IMS Playbook — Foundation Document</span>
        </div>
      </div>

      <div className="container py-8">
        <div className="flex gap-8 items-start">

          {/* ── Main Document ── */}
          <div className="flex-1 min-w-0">
            <div className="bg-white rounded border" style={{ borderColor: "#dde3ec" }}>

              {/* Document Header */}
              <div className="px-8 pt-6 pb-4 flex items-start justify-between" style={{ borderBottom: "2px solid #dde3ec" }}>
                <img src={LOGO_GRAY} alt="True East" style={{ height: "80px", objectFit: "contain" }} />
                <div className="text-right">
                  <div className="font-mono text-xs font-bold" style={{ color: "#8a9ab0" }}>TE-IMS-PLN-GOV-000</div>
                  <div className="text-xs mt-0.5" style={{ color: "#8a9ab0" }}>Rev00 | 01 March 2026</div>
                </div>
              </div>

              {/* Document Title Block */}
              <div className="px-8 py-5 text-right" style={{ borderBottom: "1px solid #dde3ec" }}>
                <h1 className="text-xl font-extrabold tracking-tight uppercase" style={{ color: NAVY, fontFamily: "'Nunito Sans', sans-serif" }}>
                  IMS Playbook — Foundation Document
                </h1>
                <p className="text-xs mt-1" style={{ color: "#6b7a8d" }}>True East Mining Company — Integrated Management System</p>
              </div>

              {/* Document Info Table */}
              <div className="px-8 py-4" style={{ borderBottom: "2px solid #dde3ec" }}>
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ["Document", "TE-IMS-PLN-GOV-000"],
                      ["Revision", "00"],
                      ["Date", "01 March 2026"],
                      ["Status", "Approved for Implementation"],
                    ].map(([label, value]) => (
                      <tr key={label} style={{ borderBottom: "1px solid #f0f2f5" }}>
                        <td className="py-1.5 pr-4 font-semibold w-32" style={{ color: "#6b7a8d" }}>{label}</td>
                        <td className="py-1.5" style={{ color: label === "Status" ? "#16a34a" : NAVY, fontWeight: label === "Status" ? 600 : 400 }}>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ── SECTION 1 — Purpose ── */}
              <div className="px-8 pt-6">
                <div className="rounded px-4 py-2 mb-4" style={{ backgroundColor: NAVY }}>
                  <h2 className="text-xs font-bold tracking-widest uppercase text-white">1. Purpose of This Document</h2>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
                  This document is the master navigation guide for the True East Mining Company Integrated Management System (IMS). It explains what the IMS is, how it is structured, and how every document, procedure, and form connects to the company's operational and compliance objectives.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                  This Playbook is the starting point for all employees, new hires, auditors, and management. It is not a policy — it is the map of the entire system.
                </p>
              </div>

              {/* ── SECTION 2 — What Is the IMS ── */}
              <div className="px-8 pt-6">
                <div className="rounded px-4 py-2 mb-4" style={{ backgroundColor: NAVY }}>
                  <h2 className="text-xs font-bold tracking-widest uppercase text-white">2. What Is the IMS?</h2>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
                  The Integrated Management System is the unified operating framework that combines the requirements of <strong>ISO 9001:2015</strong> (Quality), <strong>ISO 14001:2015</strong> (Environment), and <strong>ISO 45001:2018</strong> (Occupational Health & Safety) into a single, coherent system.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                  This is not a compliance exercise. It is the daily operating system of True East Mining Company — alive, updated regularly, and actively used by every level of the organization.
                </p>
              </div>

              {/* ── SECTION 3 — The 8 Pillars ── */}
              <div className="px-8 pt-6">
                <div className="rounded px-4 py-2 mb-4" style={{ backgroundColor: NAVY }}>
                  <h2 className="text-xs font-bold tracking-widest uppercase text-white">3. The 8 Pillars of the True East IMS</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { num: "1", pillar: "Leadership & Governance", code: "GOV", desc: "Direction, accountability, and management commitment" },
                    { num: "2", pillar: "People & Capability", code: "TRN", desc: "Competence, training, and workforce development" },
                    { num: "3", pillar: "Health, Safety & Environment", code: "HSE", desc: "Risk control, incident prevention, and environmental protection" },
                    { num: "4", pillar: "Operations & Execution", code: "OPS", desc: "Drilling, site management, and operational controls" },
                    { num: "5", pillar: "Equipment & Maintenance", code: "MAINT", desc: "Asset integrity, preventive maintenance, and inspections" },
                    { num: "6", pillar: "Supply Chain & Logistics", code: "LOG", desc: "Procurement, transport, and contractor management" },
                    { num: "7", pillar: "Compliance & Legal", code: "SEC", desc: "Regulatory adherence, permits, and legal obligations" },
                    { num: "8", pillar: "Performance & Learning", code: "SYS", desc: "KPIs, audits, reviews, and continual improvement" },
                  ].map(({ num, pillar, code, desc }) => (
                    <div key={num} className="flex gap-3 p-3 rounded border" style={{ borderColor: "#e8edf4", backgroundColor: "#fafbfc" }}>
                      <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold text-white" style={{ backgroundColor: NAVY }}>
                        {num}
                      </div>
                      <div>
                        <div className="text-xs font-bold" style={{ color: NAVY }}>{pillar}</div>
                        <div className="text-xs mt-0.5" style={{ color: GOLD, fontWeight: 600 }}>{code}</div>
                        <div className="text-xs mt-0.5" style={{ color: "#6b7a8d" }}>{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── SECTION 4 — Document Hierarchy ── */}
              <div className="px-8 pt-6">
                <div className="rounded px-4 py-2 mb-4" style={{ backgroundColor: NAVY }}>
                  <h2 className="text-xs font-bold tracking-widest uppercase text-white">4. Document Hierarchy — 4 Levels</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr style={{ backgroundColor: "#f4f6f9" }}>
                        {["Level", "Type", "Code", "Purpose"].map(h => (
                          <th key={h} className="px-3 py-2 text-left text-xs font-bold tracking-wide" style={{ color: NAVY, borderBottom: `2px solid ${GOLD}` }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["1", "Policies", "POL", "What we stand for — commitments and principles"],
                        ["2", "Plans & Procedures", "PLN, PROC", "How we manage — strategic and operational controls"],
                        ["3", "Standard Operating Procedures", "SOP", "Step-by-step how to do it — task-level instructions"],
                        ["4", "Forms & Registers", "FRM, REG", "Evidence we did it — records and data capture"],
                      ].map(([level, type, code, purpose], i) => (
                        <tr key={level} style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#fafbfc", borderBottom: "1px solid #f0f2f5" }}>
                          <td className="px-3 py-2 font-bold text-center" style={{ color: GOLD }}>{level}</td>
                          <td className="px-3 py-2 font-semibold" style={{ color: NAVY }}>{type}</td>
                          <td className="px-3 py-2 font-mono text-xs" style={{ color: "#6b7a8d" }}>{code}</td>
                          <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>{purpose}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ── SECTION 5 — Document Identification ── */}
              <div className="px-8 pt-6">
                <div className="rounded px-4 py-2 mb-4" style={{ backgroundColor: NAVY }}>
                  <h2 className="text-xs font-bold tracking-widest uppercase text-white">5. Document Identification System</h2>
                </div>
                <div className="rounded border p-4 mb-4" style={{ backgroundColor: "#f4f6f9", borderColor: "#dde3ec" }}>
                  <div className="font-mono text-sm font-bold text-center mb-2" style={{ color: NAVY }}>
                    TE-IMS-[TYPE]-[PILLAR]-[NUMBER]_[REV]
                  </div>
                  <div className="text-xs text-center" style={{ color: "#6b7a8d" }}>
                    Example: <span className="font-mono font-bold" style={{ color: GOLD }}>TE-IMS-FRM-HSE-003_Rev01</span> — Near Miss Report Form, HSE Pillar, Document 003, Revision 01
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-xs font-bold mb-2" style={{ color: NAVY }}>Document Types</div>
                    {[["POL", "Policy"], ["PLN", "Plan"], ["PROC", "Procedure"], ["SOP", "Standard Operating Procedure"], ["FRM", "Form / Template"], ["REG", "Register / Log"], ["REF", "Reference"], ["DWG", "Drawing"]].map(([code, name]) => (
                      <div key={code} className="flex gap-2 text-xs py-0.5">
                        <span className="font-mono font-bold w-12" style={{ color: GOLD }}>{code}</span>
                        <span style={{ color: "#374151" }}>{name}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-xs font-bold mb-2" style={{ color: NAVY }}>Pillar Codes</div>
                    {[["GOV", "Governance"], ["HSE", "Health, Safety & Environment"], ["OPS", "Operations"], ["MAINT", "Maintenance"], ["LOG", "Logistics"], ["SYS", "System / Performance"], ["SEC", "Security / Compliance"], ["TRN", "Training"]].map(([code, name]) => (
                      <div key={code} className="flex gap-2 text-xs py-0.5">
                        <span className="font-mono font-bold w-12" style={{ color: GOLD }}>{code}</span>
                        <span style={{ color: "#374151" }}>{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── SECTION 6 — How to Navigate ── */}
              <div className="px-8 pt-6">
                <div className="rounded px-4 py-2 mb-4" style={{ backgroundColor: NAVY }}>
                  <h2 className="text-xs font-bold tracking-widest uppercase text-white">6. How to Navigate the IMS</h2>
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    { step: "1", text: "Start with this Playbook to understand the overall system structure." },
                    { step: "2", text: "Identify the relevant Pillar for your task or question (e.g., HSE for safety, OPS for drilling)." },
                    { step: "3", text: "Find the applicable Procedure (PROC) or Standard Operating Procedure (SOP) for your activity." },
                    { step: "4", text: "Use the Form (FRM) or Register (REG) to record evidence that the task was completed correctly." },
                  ].map(({ step, text }) => (
                    <div key={step} className="flex gap-3 items-start p-3 rounded" style={{ backgroundColor: "#f4f6f9" }}>
                      <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold text-white" style={{ backgroundColor: GOLD }}>
                        {step}
                      </div>
                      <p className="text-sm" style={{ color: "#374151" }}>{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── SECTION 7 — Document Master List Summary ── */}
              <div className="px-8 pt-6">
                <div className="rounded px-4 py-2 mb-4" style={{ backgroundColor: NAVY }}>
                  <h2 className="text-xs font-bold tracking-widest uppercase text-white">7. IMS Document Master List — Summary</h2>
                </div>
                <p className="text-sm mb-4" style={{ color: "#374151" }}>
                  The True East IMS comprises <strong>84 controlled documents</strong> across 8 document types and 8 pillars. The full list is maintained in the IMS Document Portal.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr style={{ backgroundColor: "#f4f6f9" }}>
                        {["Type", "Description", "Count"].map(h => (
                          <th key={h} className="px-3 py-2 text-left text-xs font-bold tracking-wide" style={{ color: NAVY, borderBottom: `2px solid ${GOLD}` }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["POL", "Policies", "4"],
                        ["PLN", "Plans", "3"],
                        ["PROC", "Procedures", "33"],
                        ["SOP", "Standard Operating Procedures", "10"],
                        ["FRM", "Forms & Templates", "53"],
                        ["REG", "Registers & Logs", "16"],
                        ["REF", "System References", "9"],
                        ["DWG", "Drawings", "3"],
                      ].map(([code, desc, count], i) => (
                        <tr key={code} style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#fafbfc", borderBottom: "1px solid #f0f2f5" }}>
                          <td className="px-3 py-2 font-mono font-bold text-xs" style={{ color: GOLD }}>{code}</td>
                          <td className="px-3 py-2" style={{ color: "#374151" }}>{desc}</td>
                          <td className="px-3 py-2 font-bold text-center" style={{ color: NAVY }}>{count}</td>
                        </tr>
                      ))}
                      <tr style={{ backgroundColor: "#f4f6f9", borderTop: `2px solid ${GOLD}` }}>
                        <td className="px-3 py-2 font-bold" style={{ color: NAVY }} colSpan={2}>Total</td>
                        <td className="px-3 py-2 font-extrabold text-center" style={{ color: GOLD }}>131</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ── SECTION 8 — Roles & Responsibilities ── */}
              <div className="px-8 pt-6">
                <div className="rounded px-4 py-2 mb-4" style={{ backgroundColor: NAVY }}>
                  <h2 className="text-xs font-bold tracking-widest uppercase text-white">8. Roles & Responsibilities</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr style={{ backgroundColor: "#f4f6f9" }}>
                        {["Role", "IMS Responsibility"].map(h => (
                          <th key={h} className="px-3 py-2 text-left text-xs font-bold tracking-wide" style={{ color: NAVY, borderBottom: `2px solid ${GOLD}` }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["CEO / Managing Director", "Overall IMS owner. Final approver for all Level 1 and Level 2 documents."],
                        ["IMS Project Lead", "Document controller and system custodian. Manages revisions, numbering, and master list."],
                        ["Department Heads / Pillar Owners", "Responsible for procedures and SOPs within their pillar. Approve Level 3 documents."],
                        ["Supervisors & Team Leaders", "Ensure forms are completed correctly. Report non-conformances and near misses."],
                        ["All Employees", "Comply with applicable procedures and SOPs. Exercise Stop Work Authority when required."],
                      ].map(([role, resp], i) => (
                        <tr key={role} style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#fafbfc", borderBottom: "1px solid #f0f2f5" }}>
                          <td className="px-3 py-2 font-semibold text-xs" style={{ color: NAVY }}>{role}</td>
                          <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>{resp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ── SECTION 9 — How People Experience the IMS ── */}
              <div className="px-8 pt-6">
                <div className="rounded px-4 py-2 mb-4" style={{ backgroundColor: NAVY }}>
                  <h2 className="text-xs font-bold tracking-widest uppercase text-white">9. How People Experience the IMS</h2>
                </div>
                <p className="text-sm mb-4" style={{ color: "#374151" }}>
                  This Integrated Management System is not a static binder sitting on an office shelf. It is our daily operating system — alive, updated regularly, and actively used by every level of the organization:
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    { role: "Driller on site at 2 a.m.", action: "Identifies a high-risk task → opens the relevant Level 3 SOP → executes safely using the Level 4 checklist." },
                    { role: "New employee", action: "Reads this Foundation Playbook during induction → understands the corporate culture → completes mandatory Pillar 2 (People & Capability) training." },
                    { role: "Auditor / Ma'aden Inspector", action: "Starts with this exact document → navigates the 8-pillar tree → experiences 100% full traceability and compliance." },
                    { role: "Executive Management", action: "Opens Pillar 8 (Performance & Learning) → reviews real-time KPIs → tracks audit findings → drives strategic, continual improvement actions." },
                  ].map(({ role, action }) => (
                    <div key={role} className="p-3 rounded border-l-4" style={{ borderLeftColor: GOLD, backgroundColor: "#fafbfc" }}>
                      <div className="text-xs font-bold mb-1" style={{ color: NAVY }}>{role}</div>
                      <div className="text-xs" style={{ color: "#374151" }}>{action}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── SECTION 10 — Final Commitment ── */}
              <div className="px-8 pt-6">
                <div className="rounded px-4 py-2 mb-4" style={{ backgroundColor: NAVY }}>
                  <h2 className="text-xs font-bold tracking-widest uppercase text-white">10. Our Final Commitment: Continual Improvement</h2>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
                  As True East Mining scales, takes on more complex drilling programs, and expands its footprint across the Kingdom of Saudi Arabia, this system will scale with us.
                </p>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
                  We recognize that safety and quality are never "finished." Every hazard identified by a worker, every near-miss reported on site, and every audit finding is fuel for our continual improvement cycle. The IMS empowers every employee — from the boardroom to the drill pad — to use their Stop Work Authority and contribute to safer, more efficient operation.
                </p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
                  We do not compromise on safety. We do not compromise on quality. We protect the environment.
                </p>
                <div className="text-center py-4 rounded" style={{ backgroundColor: NAVY }}>
                  <p className="text-sm font-bold tracking-widest uppercase text-white">TRUE EAST MINING COMPANY</p>
                  <p className="text-xs mt-1" style={{ color: GOLD }}>One Company. One System. Zero Harm.</p>
                </div>
              </div>

              {/* ── Revision History ── */}
              <div className="px-8 pt-6">
                <div className="rounded px-4 py-2 mb-4" style={{ backgroundColor: NAVY }}>
                  <h2 className="text-xs font-bold tracking-widest uppercase text-white">Revision History</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr style={{ backgroundColor: "#f4f6f9" }}>
                        {["Rev", "Date", "Description", "Author"].map(h => (
                          <th key={h} className="px-3 py-2 text-left text-xs font-bold tracking-wide" style={{ color: NAVY, borderBottom: `2px solid ${GOLD}` }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ backgroundColor: "#fff" }}>
                        <td className="px-3 py-2 font-mono font-bold" style={{ color: GOLD }}>00</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>01 Mar 2026</td>
                        <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>Initial approved release — True East IMS Foundation Playbook established.</td>
                        <td className="px-3 py-2 text-xs font-semibold" style={{ color: NAVY }}>Joao / Melo</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ── Approval ── */}
              <div className="px-8 pt-6 pb-8">
                <div className="rounded px-4 py-2 mb-4" style={{ backgroundColor: NAVY }}>
                  <h2 className="text-xs font-bold tracking-widest uppercase text-white">Approval</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr style={{ backgroundColor: "#f4f6f9" }}>
                        {["Role", "Name", "Date"].map(h => (
                          <th key={h} className="px-3 py-2 text-left text-xs font-bold tracking-wide" style={{ color: NAVY, borderBottom: `2px solid ${GOLD}` }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Prepared by", "Joao — IMS Project Lead", "01 Mar 2026"],
                        ["Approved by", "Melo — CEO / Managing Director", "01 Mar 2026"],
                      ].map(([role, name, date]) => (
                        <tr key={role} style={{ borderBottom: "1px solid #f0f2f5" }}>
                          <td className="px-3 py-2 font-semibold text-xs" style={{ color: "#6b7a8d" }}>{role}</td>
                          <td className="px-3 py-2 font-semibold text-xs" style={{ color: NAVY }}>{name}</td>
                          <td className="px-3 py-2 text-xs" style={{ color: "#374151" }}>{date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Document Footer */}
              <div className="px-8 py-3 flex items-center justify-between text-xs" style={{ backgroundColor: NAVY, borderRadius: "0 0 6px 6px" }}>
                <span className="text-white/60">True East Mining Company · Integrated Management System · Confidential</span>
                <span style={{ color: GOLD }}>TE-IMS-PLN-GOV-000 · Rev00</span>
              </div>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-6 rounded border bg-white p-4" style={{ borderColor: "#dde3ec" }}>
              <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: NAVY }}>Document Info</div>
              {[
                ["Code", "TE-IMS-PLN-GOV-000"],
                ["Type", "Plan (PLN)"],
                ["Pillar", "Governance (GOV)"],
                ["Revision", "Rev00"],
                ["Date", "01 Mar 2026"],
                ["Status", "Approved"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between text-xs py-1" style={{ borderBottom: "1px solid #f0f2f5" }}>
                  <span style={{ color: "#6b7a8d" }}>{label}</span>
                  <span className="font-semibold text-right" style={{ color: label === "Status" ? "#16a34a" : NAVY }}>{value}</span>
                </div>
              ))}

              <div className="mt-4 text-xs font-bold tracking-widest uppercase mb-2" style={{ color: NAVY }}>Contents</div>
              {[
                ["1", "Purpose"],
                ["2", "What Is the IMS?"],
                ["3", "The 8 Pillars"],
                ["4", "Document Hierarchy"],
                ["5", "Identification System"],
                ["6", "How to Navigate"],
                ["7", "Document Master List"],
                ["8", "Roles & Responsibilities"],
                ["9", "How People Use the IMS"],
                ["10", "Final Commitment"],
              ].map(([num, title]) => (
                <div key={num} className="text-xs py-0.5 flex gap-2">
                  <span style={{ color: GOLD, fontWeight: 700 }}>{num}.</span>
                  <span style={{ color: "#374151" }}>{title}</span>
                </div>
              ))}

              <button
                onClick={() => window.print()}
                className="mt-4 w-full text-xs font-semibold py-2 rounded text-white"
                style={{ backgroundColor: NAVY }}
              >
                Print Document
              </button>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
