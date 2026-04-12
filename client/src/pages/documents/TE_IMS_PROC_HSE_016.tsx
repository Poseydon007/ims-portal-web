// TE-IMS-PROC-HSE-016 — Personal Protective Equipment Procedure
// Design: Standardized policy layout — left sidebar (Doc Info + TOC) + main content area

import { Link } from "wouter";
import { TopNav, Footer, Breadcrumb } from "@/components/Layout";
import { LOGO_GRAY, LOGO_WHITE } from "@/lib/imsData";

const sections = [
  { id: "s1", label: "1. Purpose" },
  { id: "s2", label: "2. Scope" },
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

export default function TE_IMS_PROC_HSE_016() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "PROC — Procedures", href: "/docs/proc" },
          { label: "Personal Protective Equipment Procedure" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              Personal Protective Equipment Procedure
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-PROC-HSE-016_Rev01</span>
              <span style={{ color: "#c0c8d4" }}>·</span>
              <span className="text-xs" style={{ color: "#6b7a8d" }}>01 Mar 2026</span>
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
                ["Document Code", "TE-IMS-PROC-HSE-016"],
                ["Revision", "Rev 01"],
                ["Date", "01 Mar 2026"],
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-PROC-HSE-016_Rev01</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Personal Protective Equipment Procedure
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-6" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-PROC-HSE-016</td>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Revision</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>01</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Date</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>01 Mar 2026</td>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Status</td>
                    <td className="border px-3 py-2 font-bold" style={{ borderColor: "#dde3ec", color: "#155724" }}>Approved for Implementation</td>
                  </tr>
                </tbody>
              </table>

              {/* Document body content */}
<div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Document Code</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>TE-IMS-PROC-HSE-004_Rev01</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>TE-IMS-PROC-HSE-004_Rev01</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>TE-IMS-PROC-HSE-004_Rev01</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Title</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Personal Protective Equipment Procedure</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Personal Protective Equipment Procedure</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Personal Protective Equipment Procedure</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Version</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>1.0</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>1.0</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>1.0</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Date</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>01 March 2026</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>01 March 2026</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>01 March 2026</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Prepared by</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Abduljawad</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Signature:</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Approved by</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Mohammad Qenbazo]</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Signature:</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Status</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Approved for Implementation – Internal Use Only</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Approved for Implementation – Internal Use Only</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Approved for Implementation – Internal Use Only</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>PERSONAL PROTECTIVE EQUIPMENT PROCEDURE</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Purpose</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>To establish a standardized process for the selection, provision, use, maintenance, inspection, and training related to Personal Protective Equipment (PPE) at True East Mining sites. This ensures personnel are adequately protected from identified hazards in strict compliance with ISO 45001:2018 and MHRSD occupational safety regulations.</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Scope</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure applies to all employees, contractors, and visitors at True East Mining operations (including drilling sites, processing plants, workshops, and remote desert locations) where PPE is required to control residual risks after engineering and administrative controls have been applied.</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Responsibilities</span>
              </li>
            </ul>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Role</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Responsibilities</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site Senior Exec. (SSE)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Ensures adequate financial resources are available for high-quality PPE; approves the overarching PPE policy.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager / Safety Officer</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Conducts formal hazard assessments; selects appropriate PPE; provides training; maintains issuance records; audits field compliance.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Supervisors / Shift In-Charge</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Ensure PPE is worn correctly by their crew; conduct daily visual checks; enforce mandatory use; report any equipment deficiencies.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Procurement Department</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Sources only compliant PPE that meets recognized international and local standards (e.g., SASO, NFPA, CE, ANSI).</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>All Personnel</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Use PPE exactly as required; inspect equipment before every use; report damage/loss immediately; attend mandatory training.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>PPE Selection &amp; Hierarchy</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>The Last Line of Defense: PPE is strictly the last line of defense. It must only be used to control residual risks after higher-level controls (Elimination, Substitution, Engineering, Administrative) have been applied.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Selection Criteria: PPE selection is based on:</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Site/task-specific risk assessments (ISO 45001 Clause 6.1.2).</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Specific hazard types (falling objects, chemicals, excessive noise, respirable dust, extreme heat, UV radiation).</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Ergonomic comfort, fit, and compatibility with other worn PPE (e.g., ensuring safety glasses do not break the seal of earmuffs).</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Required PPE (Minimum Standards – Drilling/Mining Sites)</span>
              </li>
            </ul>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Hazard / Task</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Required PPE</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Minimum Standard / Notes</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Head Impact (falling objects)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Hard Hat</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>ANSI Z89.1 / EN 397</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Eye/Face Hazards</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Safety glasses (clear/dark), face shield</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>ANSI Z87.1 / EN 166</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Hearing (noise &gt;85 dB)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Ear plugs or earmuffs</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>NRR 25+ dB</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Hand Protection</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Cut-resistant impact gloves, chemical-resistant gloves</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>EN 388 / EN 374</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Foot Protection</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Steel-toe safety boots (aggressive tread)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>EN ISO 20345</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Body Protection</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Flame-resistant (FR) overalls, high-visibility vest</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>EN ISO 11612 / EN ISO 20471</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Respiratory (dust/fumes)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Dust mask (FFP2/FFP3), half-face respirator if required</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>EN 149 / NIOSH N95+</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Fall from Height (&gt;1.8m)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Full-body harness, double lanyard, certified anchor point</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>EN 361 / EN 355</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Heat / UV Exposure</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Wide-brim hat attachments, UV-protective clothing, sunscreen</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Per MHRSD heat stress guidelines</td>
                </tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>PPE Category</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Applications  &amp; Examples</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Relevant  Standards</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Image</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Eye Protection</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Safety glasses/goggles: For dust, flying particles, and splashes. Face shields: For high-impact or chemical splash risks. Filters: Welding/laser protectors if applicable.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>ANSI Z87.1 or equivalent. (Anti-fog and side shields recommended).</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Head Protection</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Hard hats: Protect against falling objects, impacts, and electrical hazards.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>ANSI Z89.1 or equivalent. (Class G/E for mining; chin straps required for work at height).</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Body Protection</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>High-visibility wear: Coveralls/vests for low-light/vehicle areas. FR Clothing: Flame-resistant wear for fire/heat risks. Chemical suits: Aprons/suits for drill fluids and additives.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>EN 11611 (welding) or equivalent.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Hand Protection</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Gloves: Cut-resistant for sharp tools/edges; chemical-resistant for fluids; vibration-dampening for drills.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>EN 388 (mechanical), EN 374 (chemicals).</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Foot Protection</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Safety Boots: Steel/composite-toed, puncture-resistant soles, metatarsal guards, and slip-resistant.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>EN ISO 20345 or equivalent. (Electrical hazard-rated if needed).</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Fall Protection</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Fall Arrest Systems: Full-body harnesses, lanyards, shock absorbers, and anchor points for work at height (&gt;2m, e.g., rig masts).</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>EN 361 / 354 / 355. (Must be inspected annually).</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Hearing Protection</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Ear plugs / Earmuffs: Required for noise &gt;85 dB. (Double protection required for percussion drilling).</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>EN 352. (Noise Reduction Rating [NRR] must be appropriate to exposure).</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Respiratory Protection</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Masks/Respirators: N95 or higher for dusty environments (percussion drilling, sampling).  PAPR: Powered air-purifying respirators for prolonged exposure.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>NIOSH-approved or equivalent. (Fit-tested annually).</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                </tbody>
              </table>
            </div>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Procedure</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Provision &amp; Issuance</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>The HSE Manager issues task-appropriate PPE free of charge based on the specific risk assessment.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>All issuance must be formally recorded and signed for in the PPE Register (TE-IMS-FRM-HSE-011_PPE_Register_Rev00).</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Use &amp; Maintenance</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Personnel must wear PPE correctly and at all times while inside designated operational areas.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Pre-Use Inspection: Personnel must inspect their PPE before each use (checking for damage, poor fit, or component expiry).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Clean and maintain PPE strictly according to the manufacturer's instructions.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Replacement: Report lost, excessively worn, or damaged PPE immediately to the supervisor. Replacement PPE is provided free of charge.</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Inspection &amp; Storage</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Supervisors must conduct a documented monthly inspection of all critical PPE (e.g., fall harnesses, respirators) and document the findings in the register.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Store PPE in clean, dry, dedicated areas away from direct sunlight, extreme heat, and harsh chemicals.</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Training &amp; Awareness</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Mandatory PPE training is required for all personnel (Initial induction + Annual refresher).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Topics: Correct donning/doffing, operational limitations, inspection techniques, maintenance, and reporting procedures.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Supervisors must regularly reinforce PPE requirements during Toolbox Talks (TE-IMS-PROC-HSE-012_Rev00).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Document all training records in the IMS.</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Non-Compliance</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Immediate Stop-Work: Work must be stopped immediately if a worker is observed without mandatory PPE or using it incorrectly.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Counseling: The offending worker will be retrained and counseled on the risks.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Disciplinary Action: Repeated or willful non-compliance will result in formal disciplinary action.</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Incident Reporting</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Report any PPE-related incidents (e.g., equipment failure leading to injury) immediately using the Flash Notification Form (TE-IMS-FRM-HSE-005_Flash_Report_Rev00).</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Monitoring &amp; Continuous Improvement</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Audits: The HSE team will conduct quarterly audits of PPE use, physical condition, and issuance records.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>KPIs Monitored: % of personnel fully trained, % of workforce observed compliant with PPE rules during audits, and the number of PPE-failure related incidents.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Review: Conduct an annual review of this procedure and the selected PPE brands/types to ensure they remain effective for the specific site hazards.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>References</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>ISO 45001:2018 – Occupational Health and Safety Management Systems (Clauses 6.1.2, 7.2, 8.1.2).</p>

            <ul className="list-none mb-3 space-y-1">
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>MHRSD – Occupational Safety and Health Management Regulation (KSA).</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>International Standards – SASO, NFPA, CE, ANSI standards for specific PPE categories.</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>Related Documents</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>TE-IMS-FRM-HSE-011_PPE_Register_Rev00 – PPE Issuance &amp; Inspection Register</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>TE-IMS-PROC-HSE-012_Rev00 – Toolbox Talks Procedure</span>
              </li>
              <li className="text-sm leading-relaxed flex gap-2" style={{ color: "#081C2E" }}>
                <span style={{ color: "#C49A28", flexShrink: 0 }}>▸</span>
                <span>TE-IMS-FRM-HSE-012_First_Aid_Checklist_Rev00 – First Aid Kit Checklist</span>
              </li>
            </ul>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Signed:</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Validation</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Prepared By</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Reviewed</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Approved By</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Name</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Abduljawad Bouguelta</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Reda El-Kazaz</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Mohammad Qenbazo</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Position</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MR</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>QA</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MD</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Signature</td>
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
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Description</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Author</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>01</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>01 Mar 2026</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Initial Release – Approved for Implementation</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>AB</td>
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
