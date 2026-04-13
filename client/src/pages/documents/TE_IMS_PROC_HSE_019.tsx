// TE-IMS-PROC-HSE-019 — Site Safety Appointments Procedure
// Design: Standardized policy layout — left sidebar (Doc Info + TOC) + main content area

import { Link } from "wouter";
import { TopNav, Footer, Breadcrumb } from "@/components/Layout";
import { LOGO_GRAY, LOGO_WHITE } from "@/lib/imsData";

const sections = [
  { id: "s1", label: "1. Purpose" },
  { id: "s2", label: "2. Scope" },
  { id: "s3", label: "3. Definitions" },
  { id: "s4", label: "4. Responsibilities" },
  { id: "s5", label: "5. Critical HSE Appointments Covered" },
  { id: "s6", label: "6. Planning and Coverage Requirements" },
  { id: "s7", label: "7. Appointment Process" },
  { id: "s8", label: "8. Equipment and Authority" },
  { id: "s9", label: "9. Training, Refresher, and Expiry Management" },
  { id: "s10", label: "10. Record Keeping" },
  { id: "s11", label: "11. Termination or Withdrawal of Appointment" },
  { id: "s12", label: "12. Performance Indicators" },
  { id: "s13", label: "13. References" },
  { id: "s14", label: "14. Related Documents and Records" },
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

export default function TE_IMS_PROC_HSE_019() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "PROC — Procedures", href: "/docs/proc" },
          { label: "Site Safety Appointments Procedure" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              Site Safety Appointments Procedure
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-PROC-HSE-019_Rev01</span>
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
                ["Document Code", "TE-IMS-PROC-HSE-019"],
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-PROC-HSE-019_Rev01</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Site Safety Appointments Procedure
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-6" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-PROC-HSE-019</td>
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

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure defines how True East Mining Company (TEMC) selects, trains, appoints, records, and maintains competent personnel in critical Health, Safety, and Environment (HSE) roles across all sites. The objective is to ensure every site has documented, competent, and legally defensible appointments to manage high-risk activities — firefighting, first aid, lockout/tagout, confined space, hot work, and incident command — in compliance with ISO 45001:2018, MHRSD requirements, Saudi Civil Defense code, and internal TEMC standards.</p>

            <SectionHeading id="s2">2. Scope</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure applies to all TEMC owned and contracted sites in the Kingdom of Saudi Arabia. It covers employees, supervisors, and contractors nominated for any critical HSE role. It does not cover routine job appointments unrelated to HSE duties (those are managed by HR through the Job Description process).</p>

            <SectionHeading id="s3">3. Definitions</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Safety Appointment — a formal, written assignment of a specific HSE responsibility to a named, competent person.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Appointment Letter — the signed document (FRM-HSE-035/036/037 or equivalent) that creates the legal record of the appointment.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Competent Person — an individual who has the required training, experience, medical fitness, and authorisation to perform a defined HSE task safely.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Critical HSE Role — a role where failure to act correctly can result in serious harm, environmental damage, or legal non-compliance.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Certification Authority — a recognised training provider or competent body authorised to issue the certification (Saudi Civil Defense, Saudi Red Crescent, internationally accredited training providers).</Bullet>
            </ul>

            <SectionHeading id="s4">4. Responsibilities</SectionHeading>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Managing Director (MD)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Final approval authority for all site HSE appointments. Ensures resources and legal cover for appointed personnel.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site Senior Executive (SSE) / Drilling Superintendent</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Reviews nominations. Confirms site needs and workforce coverage. Countersigns appointments.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Owns this procedure. Maintains the Site Appointments Register. Verifies certification validity. Schedules refresher training. Reports expiry and coverage gaps to management review.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HR Department</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Verifies employment status, medical fitness records, and training compliance. Files appointment letters in personnel records.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site Supervisors</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Identify and nominate candidates. Support assessment. Manage day-to-day coverage on site.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Appointed Personnel</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Perform duties as defined in their appointment letter. Keep certifications current. Report defects or readiness issues immediately.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Training Coordinator</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Delivers or arranges role-specific training. Maintains training records and expiry dates.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <SectionHeading id="s5">5. Critical HSE Appointments Covered</SectionHeading>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Role</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Minimum Certification / Training</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Form Reference</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>First Aider</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>First Aid + CPR + AED from Saudi Red Crescent or internationally recognised provider (valid certificate).</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>TE-IMS-FRM-HSE-035</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Fire Fighter / Fire Warden</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Saudi Civil Defense-approved firefighting course covering portable extinguishers, fire hose, evacuation.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>TE-IMS-FRM-HSE-036</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Lockout / Tagout (LOTO) Officer</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Energy isolation and LOTO course plus practical assessment; authorised to apply and remove locks.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>TE-IMS-FRM-HSE-037</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Confined Space Attendant / Entrant / Supervisor</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Confined space entry training, gas testing competence, rescue awareness. Refer to SOP-HSE-002.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site appointment letter</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Hot Work Permit Issuer</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Permit-to-work training, hot work hazard awareness, fire watch procedures. Refer to SOP-HSE-004.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site appointment letter</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Authorised Gas Tester</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Formal gas detection training plus instrument familiarisation, bump-test discipline.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site appointment letter</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Incident Commander</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Senior site role, trained in site emergency plan and coordination with Civil Defense.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site appointment letter</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Environmental Officer (where assigned)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Environmental management qualification or equivalent experience, waste, spill, NCEC awareness.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site appointment letter</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager / Officer</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>NEBOSH IGC or equivalent + TEMC internal induction and audit competence.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Corporate appointment</td>
                </tr>
                </tbody>
              </table>
            </div>

            <SectionHeading id="s6">6. Planning and Coverage Requirements</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Coverage shall be sized to site risk and workforce. As a minimum, every active TEMC site must have: 1 Incident Commander, 2 First Aiders, 2 Fire Wardens, and 1 LOTO Officer per shift.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>For sites with confined space entries: at least 1 competent Confined Space Supervisor and 1 Authorised Gas Tester per shift.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>For sites with hot work: at least 1 Permit Issuer per shift and fire watch coverage during and after hot work.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Redundancy: at least 20% spare capacity for leave, sickness, and rotation, rounded up.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Site-specific appointment matrix is prepared at mobilisation and updated whenever personnel change.</Bullet>
            </ul>

            <SectionHeading id="s7">7. Appointment Process</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Step 1 — Nomination — site supervisor nominates candidate to HSE Manager with justification and training background.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Step 2 — Pre-qualification check — HSE Manager verifies age, experience, medical fitness, and relevant certification.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Step 3 — Training — if training is required, it is delivered and passed before appointment.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Step 4 — Practical assessment — role-specific practical test where applicable (LOTO application, fire extinguisher use, first aid scenario).</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Step 5 — Appointment letter — drafted using the correct form (FRM-HSE-035/036/037 or site letter). Signed by HSE Manager, countersigned by SSE, approved by MD.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Step 6 — Acknowledgement — appointed person signs acceptance, confirming understanding of duties, authority, and accountability.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Step 7 — Publication — appointment announced on site, ID badge or armband issued where applicable, appointment posted on HSE board and muster station display.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Step 8 — Register update — Site Appointments Register updated by HSE Manager.</Bullet>
            </ul>

            <SectionHeading id="s8">8. Equipment and Authority</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Appointed persons must have access to the correct equipment — PPE, fire extinguishers, first aid kits and AED, LOTO locks and tags, gas detectors, permit books, radios.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>They have Stop Work Authority within the scope of their role — written in the appointment letter — and shall never be disciplined for exercising it in good faith.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>They are protected from reprisal for reporting hazards or stopping unsafe work (ISO 45001 Clause 5.4).</Bullet>
            </ul>

            <SectionHeading id="s9">9. Training, Refresher, and Expiry Management</SectionHeading>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Role</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Refresher Interval</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Expiry Trigger</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>First Aider</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>12 months (per certificate)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Certificate expiry date</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Fire Fighter / Warden</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>12 months</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Civil Defense cert expiry</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>LOTO Officer</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>24 months</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Internal re-assessment</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Confined Space Competence</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>12 months</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Training certificate</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Hot Work Permit Issuer</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>24 months</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Internal re-assessment</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Authorised Gas Tester</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>12 months</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Instrument and method refresher</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Incident Commander</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>12 months</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Drill participation and review</td>
                </tr>
                </tbody>
              </table>
            </div>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>HSE Manager runs an expiry report every month and issues refresher training before the certificate expires.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Appointment is suspended automatically on the day of expiry if not renewed. The person may not perform the role until re-certified.</Bullet>
            </ul>

            <SectionHeading id="s10">10. Record Keeping</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Original signed appointment letters filed with HR and copy in the HSE Manager's file.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Site Appointments Register kept live on site and in the IMS master.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Training certificates scanned and saved against the person's personnel record.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Retention: life of employment + 3 years (minimum).</Bullet>
            </ul>

            <SectionHeading id="s11">11. Termination or Withdrawal of Appointment</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>The MD or HSE Manager may withdraw an appointment at any time for cause — loss of competence, medical change, misconduct, unsafe behaviour.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Withdrawal is documented with reason and date. Replacement appointment is initiated immediately if role is critical.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Appointment automatically lapses on change of role or site transfer unless re-issued.</Bullet>
            </ul>

            <SectionHeading id="s12">12. Performance Indicators</SectionHeading>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>[NEEDS CEO REVIEW — targets indicative]</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>KPI</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Target</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Frequency</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Appointment coverage per site</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100% against minimum roles</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Certifications current (no expired)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Refresher training completed on time</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≥ 95%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Quarterly</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Expired appointments operating</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>0</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Appointments register accuracy</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100% correct on audit</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Quarterly</td>
                </tr>
                </tbody>
              </table>
            </div>

            <SectionHeading id="s13">13. References</SectionHeading>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>ISO 45001:2018 — Occupational Health and Safety Management — Clauses 5.4, 7.2, 7.3, 8.2.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>MHRSD — Occupational Safety and Health Regulation (Kingdom of Saudi Arabia).</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Saudi Civil Defense — Fire Safety and Rescue Training Requirements.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>Saudi Red Crescent Authority — First Aid Certification Standards.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>TEMC PROC-HSE-004 Site Emergency Preparedness Procedure.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>TEMC PROC-TRN-001 Staff Training Procedure.</Bullet>
            </ul>

            <ul className="space-y-1 mb-4 list-none pl-0">
              <Bullet>TEMC SOP-HSE-002 Confined Space Entry; SOP-HSE-003 LOTO; SOP-HSE-004 Hot Work.</Bullet>
            </ul>

            <SectionHeading id="s14">14. Related Documents and Records</SectionHeading>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Record</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Owner</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Retention</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Appointment Letter — First Aider (FRM-HSE-035)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HR / HSE</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Employment + 3 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Appointment Letter — Fire Fighter (FRM-HSE-036)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HR / HSE</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Employment + 3 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Appointment Letter — LOTO Officer (FRM-HSE-037)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HR / HSE</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Employment + 3 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site Appointments Register</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Life of site + 3 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Training records and certificates</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Training Coordinator</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Withdrawal of appointment records</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years</td>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>14.04.2025</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Initial issue</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MR</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>01</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>10.04.2026</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Full rebuild — removed foreign (WA/QLD) regulatory references, localised to MHRSD / Saudi Civil Defense / Saudi Red Crescent. Expanded critical role list (added Confined Space, Hot Work Permit Issuer, Gas Tester, Incident Commander, Environmental Officer). Added coverage and redundancy rules, appointment process steps, refresher interval table, expiry management, withdrawal rules, KPI table with CEO review flag, records retention.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MR</td>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Prepared by (HSE Manager)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Reviewed by (QA / MR)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Approved by (Managing Director)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}></td>
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
