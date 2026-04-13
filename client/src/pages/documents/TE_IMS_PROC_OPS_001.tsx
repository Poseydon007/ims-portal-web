// TE-IMS-PROC-OPS-001 — Drilling Operations Control Procedure
// Design: Standardized policy layout — left sidebar (Doc Info + TOC) + main content area

import { Link } from "wouter";
import { TopNav, Footer, Breadcrumb } from "@/components/Layout";
import { LOGO_GRAY, LOGO_WHITE } from "@/lib/imsData";

const sections = [
  { id: "s1", label: "1. Purpose" },
  { id: "s2", label: "2. Scope" },
  { id: "s3", label: "3. Definitions and Acronyms" },
  { id: "s4", label: "4. References" },
  { id: "s5", label: "5. Responsibilities" },
  { id: "s6", label: "6. Pre-Drilling Planning" },
  { id: "s7", label: "7. Rig Mobilization and Setup" },
  { id: "s8", label: "8. Drilling Operations Control" },
  { id: "s9", label: "9. Post-Drilling and Rehabilitation" },
  { id: "s10", label: "10. Incident and Deviation Handling" },
  { id: "s11", label: "11. Training and Competence" },
  { id: "s12", label: "12. Monitoring, KPIs and Continual Improvement" },
  { id: "s13", label: "13. Records and Retention" },
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

export default function TE_IMS_PROC_OPS_001() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "PROC — Procedures", href: "/docs/proc" },
          { label: "Drilling Operations Control Procedure" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              Drilling Operations Control Procedure
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-PROC-OPS-001_Rev01</span>
              <span style={{ color: "#c0c8d4" }}>·</span>
              <span className="text-xs" style={{ color: "#6b7a8d" }}>10 Apr 2026</span>
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
                ["Document Code", "TE-IMS-PROC-OPS-001"],
                ["Revision", "Rev 01"],
                ["Date", "10 Apr 2026"],
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-PROC-OPS-001_Rev01</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Drilling Operations Control Procedure
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-6" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-PROC-OPS-001</td>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Revision</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>01</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Date</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>10 Apr 2026</td>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Status</td>
                    <td className="border px-3 py-2 font-bold" style={{ borderColor: "#dde3ec", color: "#155724" }}>Approved for Implementation</td>
                  </tr>
                </tbody>
              </table>

              {/* Document body content */}


            <SectionHeading id="s1">1. Purpose</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure establishes the high-level controls and requirements for safe, efficient, and environmentally compliant drilling operations (diamond core, percussion, exploration, and production) conducted by True East Mining Company at all operational sites within the Kingdom of Saudi Arabia.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>It serves as the umbrella procedure that governs all drilling-related activities. Specific task-level controls are detailed in supporting SOPs. The procedure ensures:</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>All drilling activities are planned, risk-assessed, and executed against approved standards.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Full integration with other IMS processes — including LOTO, confined space entry, hot work, fatigue management, and heat stress control.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Compliance with ISO 9001:2015 (clause 8.1), ISO 14001:2015 (clause 8.1), ISO 45001:2018 (clause 8.1.2), and Saudi Arabian regulatory requirements (MHRSD, NCEC, Saudi Civil Defense).</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Protection of personnel, environment, equipment, community, and the reputation of True East Mining.</span>
              </li>
            </ul>

            <SectionHeading id="s2">2. Scope</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure applies to all drilling operations executed by or on behalf of True East Mining at any company-operated or contractor-operated site. It covers:</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Rig mobilization, positioning, setup, and demobilization.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Drilling execution — diamond core, percussion, reverse circulation, exploration, and production.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Rod handling, bit changes, core recovery, sampling, and logging.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Day-shift and night-shift drilling operations, including shift handover.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Related high-risk activities at the drill site: LOTO, confined space, hot work, working at height, manual handling.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>All True East personnel, contractor personnel, subcontractors, visitors, and observers present at any active drilling site.</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Exclusions: Non-drilling operations (vehicle movement outside the rig envelope, workshop maintenance, office activities, and construction works) are governed by separate IMS procedures and are outside the scope of this document.</p>

            <SectionHeading id="s3">3. Definitions and Acronyms</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>The following terms and acronyms are used throughout this procedure:</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Term / Acronym</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Definition</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>JHA</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Job Hazard Analysis — documented assessment of hazards and controls for a specific task before execution.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>JSA</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Job Safety Analysis — interchangeable with JHA; the structured breakdown of a task into steps with associated hazards and controls.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>LOTO</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Lock-Out Tag-Out — the procedure used to isolate hazardous energy during maintenance and servicing.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>LTI</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Lost Time Injury — a work-related injury resulting in an employee being unable to return to work for the next scheduled shift.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>TRIR</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Total Recordable Incident Rate — standard industry KPI for recordable injuries per 200,000 hours worked.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>WBGT</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Wet Bulb Globe Temperature — the composite temperature index used to assess heat stress risk on personnel.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>H₂S</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Hydrogen Sulfide — a highly toxic gas that can be encountered during drilling operations.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>JMP</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Journey Management Plan — the documented plan controlling road travel to and from site.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>NCEC</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>National Center for Environmental Compliance (Saudi Arabia) — the authority responsible for environmental permits and enforcement.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MHRSD</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Ministry of Human Resources and Social Development (Saudi Arabia) — the authority responsible for labor law, working hours, and heat stress regulation.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>SCD</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Saudi Civil Defense — the authority responsible for fire and emergency response and reporting.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>SWA</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Stop Work Authority — the authority granted to any worker to halt work when a safety or environmental risk is identified.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Exclusion Zone</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>The barricaded area around an active drill rig within which only authorized, trained personnel may enter.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Contractor Rig Supervisor</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>The designated individual from a drilling contractor with operational accountability for the rig and crew on site.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <SectionHeading id="s4">4. References</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure is aligned with the following international standards, Saudi regulations, and True East IMS documents:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>International standards:</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>ISO 9001:2015 — Quality Management Systems, clause 8.1 (Operational planning and control).</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>ISO 14001:2015 — Environmental Management Systems, clause 8.1 (Operational planning and control).</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>ISO 45001:2018 — Occupational Health and Safety Management Systems, clause 8.1.2 (Eliminating hazards and reducing OH&amp;S risks).</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Saudi Arabian regulatory requirements:</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Saudi Labor Law — Article 98 (maximum working hours) and Article 101 (rest periods).</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>MHRSD Ministerial Decision on heat stress — midday outdoor work ban from 12:00 to 15:00 during June, July, and August.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>NCEC environmental permit conditions applicable to the specific site.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Saudi Civil Defense requirements for fire prevention, emergency response, and major incident reporting.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Mining Investment Law and its Implementing Regulations (Royal Decree No. M/140).</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>True East IMS reference documents:</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>TE-IMS-POL-HSE-001 — Stop Work Authority Policy.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>TE-IMS-PROC-HSE-006 — Incident and Accident Investigation Procedure.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>TE-IMS-PROC-HSE-013 — Spill Management Procedure.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>TE-IMS-PROC-HSE-014 — Site Rehabilitation Procedure.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>TE-IMS-PROC-HSE-015 — Risk and Opportunity Procedure.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>TE-IMS-PROC-LOG-002 — Journey Management Procedure.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>TE-IMS-SOP-OPS-001 — Diamond Drilling Operation SOP.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>TE-IMS-SOP-OPS-002 — Night Shift Drilling SOP.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>TE-IMS-SOP-GEO-001 — Core Cutting and Handling SOP.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>TE-IMS-SOP-HSE-002 — Confined Space Entry SOP.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>TE-IMS-SOP-HSE-003 — Lock-Out Tag-Out SOP.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>TE-IMS-SOP-HSE-004 — Hot Work SOP.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>TE-IMS-FRM-HSE-009 — Take 5 Hazard Assessment Form.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>TE-IMS-FRM-HSE-022 — Incident and Accident Investigation Report.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>TE-IMS-REG-HSE-001 — Risk Register.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>TE-IMS-REG-TRN-001 — Training and Competence Matrix.</span>
              </li>
            </ul>

            <SectionHeading id="s5">5. Responsibilities</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>The following roles have defined accountabilities for the execution of drilling operations under this procedure:</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Role</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Responsibility</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>CEO / Managing Director</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Ultimate accountability for drilling operations performance, safety, and regulatory compliance. Approves major drilling campaigns, significant deviations, and contractor selection.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Operations Director / Site Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Overall accountability for drilling safety and performance. Approves site-specific drilling plans. Ensures adequate resources (people, equipment, budget) for safe operations.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Drilling Superintendent</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Technical and operational supervision of all drilling campaigns. Reviews daily plans, monitors progress, enforces IMS compliance, manages interfaces with geology and HSE.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Reviews drilling risk assessments and JHAs. Ensures integration with the IMS. Audits compliance. Leads investigation of drilling incidents. Reviews contractor HSE performance.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Drilling Supervisor / Rig Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Plans daily rig operations. Conducts pre-shift risk assessments and toolbox talks. Enforces PPE, fatigue, and heat stress controls. Authorizes Stop Work when unsafe conditions exist.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Contractor Rig Supervisor</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Executes contracted drilling work in compliance with True East IMS requirements. Reports hazards, incidents, and deviations. Maintains rig and crew records.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Night Shift Supervisor</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Accountable for drilling operations, safety, and handover during night shift. Ensures lighting, communications, and fatigue controls are in place.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Drillers and Crew</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Execute operations safely in accordance with SOPs and checklists. Report hazards and near misses. Use PPE and follow permits and LOTO requirements.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>All Personnel</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Comply with this procedure. Exercise Stop Work Authority when any condition creates an unacceptable risk to people, environment, or equipment.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <SectionHeading id="s6">6. Pre-Drilling Planning</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Before any rig is mobilized to site, the following planning activities shall be completed and documented:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Step 1: Site Risk Assessment — Conduct a documented site risk assessment per TE-IMS-PROC-HSE-015 (Risk and Opportunity Procedure). Update the TE-IMS-REG-HSE-001 Risk Register with site-specific hazards and controls.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Step 2: Drilling Plan Development — Develop a site-specific Drilling Plan covering drill pattern, target depths, equipment list, crew roster, emergency response arrangements, environmental controls, and post-drilling rehabilitation commitments.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Step 3: Permits and Approvals — Confirm all required permits are in place: NCEC environmental permit, landowner or land-use approvals, government licenses, and internal management approvals. No mobilization shall occur before all permits are verified in writing.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Step 4: Job Hazard Analysis — Complete a JHA for each high-risk task category identified at the site. JHAs must be reviewed and signed by the Drilling Supervisor and the HSE representative.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Step 5: Contractor Pre-Qualification — Where drilling is executed by contractors, complete the contractor pre-qualification review covering HSE management system, training records, rig inspection certificates, insurance, and past performance. No unqualified contractor shall be mobilized.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Step 6: Emergency Preparedness — Confirm site emergency response arrangements, including muster points, communications, first aid, fire fighting, spill response, and medical evacuation routes (reference TE-IMS-PLN-HSE-001 Major Emergency Preparedness Plan).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Step 7: Pre-Mobilization Meeting — Hold a formal pre-mobilization meeting with the drilling team, HSE, and relevant support functions. Record the meeting and any outstanding actions.</p>

            <SectionHeading id="s7">7. Rig Mobilization and Setup</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Rig movement and setup are high-consequence activities that must be controlled as follows:</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Rig convoys shall travel on pre-approved routes in line with TE-IMS-PROC-LOG-002 Journey Management Procedure. Route hazards, speed limits, rest stops, and communications are pre-defined and communicated before departure.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>On arrival, conduct a pre-setup inspection covering rig stability, ground bearing capacity, proximity to overhead lines or underground services, wind conditions, exclusion of unauthorized personnel, and environmental sensitivities.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Establish an exclusion zone around the rig. Minimum radius is 5 metres or the mast height plus 2 metres, whichever is greater. The zone shall be barricaded with hard barriers and marked with visible signage in Arabic and English.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Verify that all required site equipment is present and functional before drilling commences: PPE, first aid kit, fire extinguishers (suited to the fuel loads present), spill response kit, two-way communications, and emergency contact list.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Position the rig level and stable. Jacks, outriggers, and wedges must be inspected before tensioning. Ground conditions must be re-assessed after any significant rainfall or disturbance.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Complete the site setup checklist and obtain Drilling Supervisor sign-off before the first rod is turned.</span>
              </li>
            </ul>

            <SectionHeading id="s8">8. Drilling Operations Control</SectionHeading>

            <SubHeading>8.1 Crew Readiness and Daily Controls</SubHeading>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Conduct a documented daily pre-start check on all rig systems, safety devices, fire suppression, and emergency stops before shift start.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Hold a daily toolbox talk covering the work planned, hazards, controls, and any changes since the previous shift.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Complete a Take 5 personal hazard assessment (TE-IMS-FRM-HSE-009) before each distinct task.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Enforce fatigue management: shift lengths within Saudi Labor Law limits, mandatory rest breaks, crew rotation, and monitoring for signs of impairment.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Enforce heat stress controls: WBGT monitoring, hydration stations, shaded rest areas, work–rest cycles, and compliance with MHRSD midday outdoor work ban during summer months.</span>
              </li>
            </ul>

            <SubHeading>8.2 Equipment and Energy Control</SubHeading>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Use Lock-Out Tag-Out (TE-IMS-SOP-HSE-003) for any intervention requiring isolation of hydraulic, electrical, pneumatic, or mechanical energy.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Use a permit-to-work system for hot work (TE-IMS-SOP-HSE-004) and confined space entry (TE-IMS-SOP-HSE-002).</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Monitor for early warning signs of failure: unusual noise, vibration, pressure loss, fluid leaks, stuck rods. Stop work and investigate before resuming.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Inspect rods, collars, bits, and casing before each use. Reject any component with visible cracks, bent thread, or wall loss beyond the acceptance criteria.</span>
              </li>
            </ul>

            <SubHeading>8.3 Environmental Control</SubHeading>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Suppress dust at the collar using water, foam, or an approved dust suppression additive. Do not operate in a dry state that generates visible airborne dust.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Contain drill fluids. Provide bunded sumps or closed-loop systems. Prevent any discharge to natural drainage.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Manage drill cuttings and muds per the Waste Handling and Disposal Schedule (TE-IMS-FRM-HSE-040). Do not mix hazardous and non-hazardous waste streams.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Minimize noise and vibration impact on nearby communities, wildlife, and sensitive receptors. Review controls if complaints are received.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Protect groundwater by grouting and casing holes in accordance with the Drilling Plan and NCEC permit conditions.</span>
              </li>
            </ul>

            <SubHeading>8.4 Shift Handover and Night Operations</SubHeading>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Conduct a face-to-face handover between outgoing and incoming shift supervisors. Review status of each hole, equipment condition, open hazards, outstanding maintenance, and any incidents.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Complete a written handover entry in the rig logbook signed by both supervisors.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>For night operations, verify lighting levels, communications, and emergency access arrangements per TE-IMS-SOP-OPS-002 Night Shift Drilling SOP.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Night shift supervisors shall have direct access to day shift supervision and HSE management by phone or radio at all times.</span>
              </li>
            </ul>

            <SectionHeading id="s9">9. Post-Drilling and Rehabilitation</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Upon completion of drilling at any hole or site, the following activities shall be executed:</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Abandon and plug holes in accordance with TE-IMS-PROC-HSE-014 Site Rehabilitation Procedure and NCEC permit conditions. Record the abandonment method, plug depth, and materials used.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Remove all waste, equipment, consumables, fuel containers, and foreign materials from site. Nothing is to be buried on site unless explicitly permitted.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Respread topsoil, rip compacted ground, restore contours, and reinstate drainage.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Document before, during, and after photographs in the Rehabilitation Photo Log maintained by the Site HSE function.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Conduct a formal site walk-down with Drilling Supervisor and HSE. Sign off the site clearance record.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Submit rehabilitation completion report to management and, where required, to the relevant regulatory authority.</span>
              </li>
            </ul>

            <SectionHeading id="s10">10. Incident and Deviation Handling</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Incidents, near misses, and deviations shall be handled as follows:</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Report all incidents and near misses immediately to the Drilling Supervisor and HSE Manager, and record them on TE-IMS-FRM-HSE-022 Incident and Accident Investigation Report.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Investigate incidents in accordance with TE-IMS-PROC-HSE-006 Incident and Accident Investigation Procedure, using the classification and timelines defined therein.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Apply the 5-Why analysis technique to establish immediate, underlying, and root causes.</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Systemic Check — The &quot;6th Why&quot; Rule:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>For any operational failure with major or catastrophic potential (for example rig collapse, uncontrolled release, loss of well control, or major spill), the investigation shall not stop at the operational root cause. The team must perform one additional step beyond the standard 5 Whys and ask whether a systemic management failure contributed — for example, an inadequate maintenance budget, a flawed rig selection policy, insufficient competency standards, unrealistic production targets, or a weak contractor management system. This systemic cause must be documented and addressed at the appropriate management level.</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Report major incidents to the CEO within 2 hours and to regulatory authorities (Saudi Civil Defense, NCEC, MHRSD) within the timelines set by Saudi law.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Lessons learned from incidents shall be communicated across all active drilling sites and incorporated into the next Management Review.</span>
              </li>
            </ul>

            <SectionHeading id="s11">11. Training and Competence</SectionHeading>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>All drilling personnel — company and contractor — shall receive initial training on this procedure and all supporting SOPs prior to first assignment to a drilling site.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Annual refresher training is mandatory. Training status is tracked in TE-IMS-REG-TRN-001 Training and Competence Matrix.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Specific competency requirements apply to high-risk roles: rig operators, LOTO isolators, confined space entrants, first aiders, and fire wardens.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>No person shall operate a rig or supervise drilling without documented competence and authorisation.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Contractor crews must present valid competency evidence before mobilization and shall not be accepted on the basis of verbal assurance alone.</span>
              </li>
            </ul>

            <SectionHeading id="s12">12. Monitoring, KPIs and Continual Improvement</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Drilling operations performance shall be monitored monthly by the Operations Director and reviewed quarterly at the Management Review. The following KPIs apply:</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>KPI</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Target (to be confirmed by CEO)</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>LTI-free drilling days</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≥ 99% of planned drilling days.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>JHA completion before high-risk tasks</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Rehabilitation completion on time</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100% of sites closed within planned schedule.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Rig pre-start check completion</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100% of shifts.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Incident investigation closure</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≥ 95% closed within the timeline set in TE-IMS-PROC-HSE-006.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Contractor HSE performance reviews</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100% of active contractors reviewed monthly.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>NCEC / MHRSD compliance findings</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Zero major findings per audit cycle.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Monthly review outputs shall include drilling incident trends, downtime causes, environmental compliance, and rehabilitation progress. Effectiveness of the procedure shall be formally reviewed and updated at least annually during the Management Review cycle.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>[NEEDS CEO REVIEW] Target values above are industry baselines. Final KPI targets shall be confirmed by the CEO and recorded in the TE-IMS-REG-GOV-001 IMS Objectives and Targets Register.</p>

            <SectionHeading id="s13">13. Records and Retention</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>The following records are generated by this procedure. Storage, retention, and disposal shall follow TE-IMS-PROC-SYS-001 Document Control Procedure.</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Record</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Retention</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Drilling Plan (site-specific)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Minimum 5 years after site closure.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site Risk Assessment and JHA</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Minimum 5 years after task completion.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Daily pre-start checks and toolbox talk records</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Minimum 3 years.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Permits (hot work, confined space, LOTO tags)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Minimum 3 years.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Contractor pre-qualification file</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Duration of contract plus 5 years.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Shift handover logbook entries</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Minimum 3 years.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Rehabilitation Photo Log and clearance records</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Minimum 7 years.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Incident and investigation reports</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Minimum 10 years.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Training and competence records</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Duration of employment plus 5 years.</td>
                </tr>
                </tbody>
              </table>
            </div>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Reviewed by (HSE Manager / Ops Director)</td>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>10 Apr 2026</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Reformatted to True East IMS design standard. Added Definitions, References, Records &amp; Retention sections. Corrected IMS cross-references. Added quantified KPI targets. Added contractor control, environmental control, and shift handover clauses. Preserved systemic &quot;6th Why&quot; rule.</td>
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
