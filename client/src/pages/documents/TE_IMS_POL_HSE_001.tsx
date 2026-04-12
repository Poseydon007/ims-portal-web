// TE-IMS-POL-HSE-001 Rev01 — Stop Work Authority Policy
// Design: Standardized POL layout — left sidebar (Doc Info + TOC) + main content area
// Aligned with ISO 45001:2018

import { Link } from "wouter";
import { TopNav, Footer, Breadcrumb } from "@/components/Layout";
import { LOGO_GRAY, LOGO_WHITE } from "@/lib/imsData";

const sections = [
  { id: "s1", label: "1. Policy Statement" },
  { id: "s2", label: "2. Key Principles" },
  { id: "s3", label: "3. Examples of When to Stop Work" },
  { id: "s4", label: "4. Process After a Stop Work Event" },
  { id: "s5", label: "5. Training and Awareness" },
  { id: "s6", label: "6. Monitoring" },
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

export default function TE_IMS_POL_HSE_001() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "POL — Policies", href: "/docs/pol" },
          { label: "Stop Work Authority Policy" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              Stop Work Authority Policy
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-POL-HSE-001_Rev01</span>
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
                ["Document Code", "TE-IMS-POL-HSE-001"],
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-POL-HSE-001_Rev01</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Stop Work Authority Policy
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-2" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-POL-HSE-001</td>
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
                At True East Mining Company (TEMC) no task is so important that it cannot be done safely. Every employee, contractor, and visitor has the absolute authority — and the duty — to stop work immediately whenever a condition, act, or situation presents an imminent risk of injury, environmental harm, or property damage. Stop Work Authority (SWA) is exercised without fear of reprisal.
              </p>

              {/* Section 2 */}
              <SectionHeading id="s2">2. Key Principles</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                <BulletItem bold="Right and Duty to Stop Work">any person who observes an unsafe condition or act must stop the work immediately. No prior permission from a supervisor is required.</BulletItem>
                <BulletItem bold="No Retaliation">TEMC guarantees zero retaliation against any individual exercising SWA in good faith. Intimidation of anyone stopping work is itself a disciplinary offence.</BulletItem>
                <BulletItem bold="Good Faith">SWA is a safety tool, not a productivity tool. It must be exercised honestly and in good faith.</BulletItem>
                <BulletItem bold="Safe Restart Protocol">work may only resume once the hazard is controlled, the Job Hazard Analysis is updated, and all parties agree it is safe. High-risk tasks (confined space, hot work, working at height, lifting) require HSE or Site Manager approval to restart.</BulletItem>
              </ul>

              {/* Section 3 */}
              <SectionHeading id="s3">3. Examples of When to Stop Work</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                {[
                  "Unsafe scaffolding or missing fall protection.",
                  "Equipment malfunction or missing machine guards.",
                  "Gas detector alarms or hazardous atmospheres.",
                  "Visible symptoms of fatigue or heat stress.",
                  "Uncontrolled spills or fire risks.",
                  "Missing or invalid permit to work.",
                  "LOTO or isolation not in place.",
                  "Unqualified personnel performing a high-risk task.",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm" style={{ color: "#374151" }}>
                    <span style={{ color: "#C49A28" }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm font-bold mt-3" style={{ color: "#081C2E" }}>If in doubt — STOP.</p>

              {/* Section 4 */}
              <SectionHeading id="s4">4. Process After a Stop Work Event</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                {[
                  "The person stopping work notifies the Supervisor and HSE immediately.",
                  "The area is secured and personnel moved to a safe position.",
                  "A Flash Notification (FRM-HSE-002) is raised to capture the event.",
                  "A Job Hazard Analysis (or Take-5) is completed or updated before restart.",
                  "HSE or the Site Manager verifies controls before approving restart (where high-risk).",
                  "The event is reviewed for learning and shared through toolbox talks.",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm" style={{ color: "#374151" }}>
                    <span style={{ color: "#C49A28" }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Section 5 */}
              <SectionHeading id="s5">5. Training and Awareness</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                {[
                  "Mandatory SWA training is delivered at induction and annually.",
                  "Training records are maintained in the Training and Competence Matrix (REG-TRN-001).",
                  "SWA principles are reinforced in toolbox talks and posted at every site.",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm" style={{ color: "#374151" }}>
                    <span style={{ color: "#C49A28" }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Section 6 */}
              <SectionHeading id="s6">6. Monitoring</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                {[
                  "All SWA events are logged and trended by the HSE Manager.",
                  "SWA performance is reported at the Management Review (PROC-SYS-002) as a leading indicator of safety culture.",
                  "Suppressed or ignored SWA events are treated as Major non-conformances under PROC-SYS-008.",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm" style={{ color: "#374151" }}>
                    <span style={{ color: "#C49A28" }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Section 7 */}
              <SectionHeading id="s7">7. References</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                {[
                  "ISO 45001:2018 — Clauses 5.4 Consultation and Participation of Workers, 8.1 Operational Planning and Control.",
                  "TEMC FRM-HSE-002 Incident Flash Notification; REG-TRN-001 Training and Competence Matrix; PROC-SYS-002 Management Review; PROC-SYS-008 Corrective Action.",
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
                    ["01", "10.04.2026", "Rebuilt to TE design standard; preserved all content; added process-after-event steps, expanded examples, monitoring with management review linkage, and treatment of suppressed SWA events as Major NCs.", "HSE Manager"],
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
                    "Prepared by (HSE Manager)",
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
