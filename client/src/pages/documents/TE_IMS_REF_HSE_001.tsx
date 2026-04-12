// TE-IMS-REF-HSE-001 Rev01 — Emergency Preparedness Reference
// Design: Standardized POL layout — left sidebar (Doc Info + TOC) + main content area

import { Link } from "wouter";
import { TopNav, Footer, Breadcrumb } from "@/components/Layout";
import { LOGO_GRAY, LOGO_WHITE } from "@/lib/imsData";

const sections = [
  { id: "s1", label: "1. Purpose" },
  { id: "s2", label: "2. Scope" },
  { id: "s3", label: "3. Responsibility" },
  { id: "s4", label: "4. Definitions" },
  { id: "s5", label: "5. References" },
  { id: "s6", label: "6. Procedure" },
  { id: "s7", label: "7. Enclosure" },
  { id: "s8", label: "8. Forms" },
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

export default function TE_IMS_REF_HSE_001() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "REF — References", href: "/docs/ref" },
          { label: "Emergency Preparedness Reference" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              Emergency Preparedness Reference
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-REF-HSE-001_Rev01</span>
              <span style={{ color: "#c0c8d4" }}>·</span>
              <span className="text-xs" style={{ color: "#6b7a8d" }}>14 Apr 2025</span>
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
                ["Document Code", "TE-IMS-REF-HSE-001"],
                ["Revision", "Rev 01"],
                ["Date", "14 April 2025"],
                ["Status", "✓ Approved"],
                ["Category", "Reference"],
                ["Scope", "All TEMC operations and emergency response personnel"],
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-REF-HSE-001_Rev01</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Emergency Preparedness Response Procedure
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-6" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-REF-HSE-001</td>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Revision</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>01</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Date</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>14.04.2025</td>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Status</td>
                    <td className="border px-3 py-2 font-bold" style={{ borderColor: "#dde3ec", color: "#155724" }}>Approved for Implementation</td>
                  </tr>
                </tbody>
              </table>

              {/* Validation table */}
              <table className="w-full text-xs border-collapse mb-6" style={{ borderColor: "#dde3ec" }}>
                <thead>
                  <tr style={{ backgroundColor: "#081C2E" }}>
                    {["Validation", "Prepared By", "Reviewed By", "Approved By"].map((h) => (
                      <th key={h} className="text-left px-3 py-2 font-semibold tracking-wide" style={{ color: "#ffffff" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Name", "Abduljawad Bouguelta", "Reda El-Kazaz", "Mohammad Qenbazo"],
                    ["Position", "MR", "QA", "MD"],
                    ["Signature", "", "", ""],
                  ].map(([label, ...vals], i) => (
                    <tr key={label} style={{ backgroundColor: i % 2 === 0 ? "rgba(8,28,46,0.03)" : "transparent" }}>
                      <td className="border px-3 py-2 font-medium" style={{ borderColor: "#edf0f5" }}>{label}</td>
                      {vals.map((v, j) => (
                        <td key={j} className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Section 1 */}
              <SectionHeading id="s1">1. Purpose</SectionHeading>
              <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                To establish and maintain procedures to identify potential foreseeable accidents and emergency situations, to prevent and control Environment and Safety associated impacts, and to test effectiveness, review, and revise such procedures periodically.
              </p>

              {/* Section 2 */}
              <SectionHeading id="s2">2. Scope</SectionHeading>
              <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                This procedure is applicable to any fire, explosion, or other disaster leading to an emergency situation — meaning any significant, non-routine situation which endangers personnel, property, other interested parties, or surrounding environments.
              </p>

              {/* Section 3 */}
              <SectionHeading id="s3">3. Responsibility</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                {[
                  "Management Representative is responsible for effective implementation of the disaster management plan.",
                  "Functional Heads are responsible for implementation of this procedure in emergency situations.",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm" style={{ color: "#374151" }}>
                    <span style={{ color: "#C49A28" }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Section 4 */}
              <SectionHeading id="s4">4. Definitions</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                {[
                  "EMS — Environment Management System",
                  "H&SM — Occupational Health & Safety Management System",
                  "MR — Management Representative",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm" style={{ color: "#374151" }}>
                    <span style={{ color: "#C49A28" }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Section 5 */}
              <SectionHeading id="s5">5. References</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                {[
                  "Environmental and Safety Policy",
                  "Register of Environmental and Safety Aspects and their Impacts",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm" style={{ color: "#374151" }}>
                    <span style={{ color: "#C49A28" }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Section 6 */}
              <SectionHeading id="s6">6. Procedure</SectionHeading>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
                Management Representative shall prepare a disaster management plan (emergency preparedness) for on-site emergencies, clearly detailing responsibilities for each identified potential emergency situation. While preparing the plan, consider environmental and safety impacts associated with the activity.
              </p>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
                Identification of potential accident and emergency situations is carried out during the initial EMS and H&SM review. The potential emergencies and areas identified are as follows:
              </p>

              <table className="w-full text-xs border-collapse mb-6" style={{ borderColor: "#dde3ec" }}>
                <thead>
                  <tr style={{ backgroundColor: "#081C2E" }}>
                    {["Potential Emergency", "Area"].map((h) => (
                      <th key={h} className="text-left px-3 py-2 font-semibold tracking-wide" style={{ color: "#ffffff" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                    <td className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>Fire</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>Production area, Utilities area, Maintenance area, Generator and dispatch warehouse and storage area</td>
                  </tr>
                </tbody>
              </table>

              <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
                The prevention, mitigation, and corrective and preventive actions are detailed below for each type of foreseeable potential emergency.
              </p>

              <h3 className="text-sm font-bold mt-4 mb-2" style={{ color: "#081C2E" }}>Fire — Prevention</h3>
              <ul className="list-none pl-0 space-y-1 mb-4">
                {[
                  "Keep fire extinguishers well maintained.",
                  "Ensure that training regarding use of firefighting equipment is provided to concerned employees and security guards.",
                  "Maintain and follow Material Safety Data Sheets (MSDS) for all chemicals used in the company including finished products.",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm" style={{ color: "#374151" }}>
                    <span style={{ color: "#C49A28" }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-sm font-bold mt-4 mb-2" style={{ color: "#081C2E" }}>Fire — Mitigation</h3>
              <ul className="list-none pl-0 space-y-1 mb-4">
                {[
                  "Any person noticing fire shall pass on the information through phone or messenger to Security personnel at the main gate and the concerned employee.",
                  "Use suitable firefighting equipment (fire extinguishers).",
                  "If fire cannot be extinguished or has erupted in a large way, take help from nearby industries and the local firefighting team.",
                  "Cordon off the area and do not allow people to come near the fire.",
                  "Switch off electricity near the place of fire.",
                  "Take appropriate action for mitigation of environmental impact due to fire.",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm" style={{ color: "#374151" }}>
                    <span style={{ color: "#C49A28" }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-sm font-bold mt-4 mb-2" style={{ color: "#081C2E" }}>Corrective and Preventive Action</h3>
              <ul className="list-none pl-0 space-y-1 mb-4">
                {[
                  "Analyze the causes of the fire and prepare a report specifying measures to prevent recurrence.",
                  "Document corrective and preventive actions in the corresponding applicable procedures.",
                  "Communicate about the incident to the regulatory authorities in the prescribed form.",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm" style={{ color: "#374151" }}>
                    <span style={{ color: "#C49A28" }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-sm font-bold mt-4 mb-2" style={{ color: "#081C2E" }}>Occupational Accidents</h3>
              <ul className="list-none pl-0 space-y-1 mb-4">
                {[
                  "Electrical shocks",
                  "Slips, Trips, Falls, and Accidents (STFA)",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm" style={{ color: "#374151" }}>
                    <span style={{ color: "#C49A28" }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
                Management Representative shall carry out yearly mock drills of accident or emergency situations where practicable, and keep records.
              </p>

              <h3 className="text-sm font-bold mt-4 mb-2" style={{ color: "#081C2E" }}>Review and Disposition</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                The on-site emergency plan shall be reviewed and revised once a year and also in light of any findings. Changes shall be maintained. Investigation and maintenance of accident records shall be conducted as per procedure.
              </p>

              {/* Section 7 */}
              <SectionHeading id="s7">7. Enclosure</SectionHeading>
              <ul className="list-none pl-0 space-y-1">
                {[
                  "Mock Drill Instructions",
                  "Emergency Preparedness Plan",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm" style={{ color: "#374151" }}>
                    <span style={{ color: "#C49A28" }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Section 8 */}
              <SectionHeading id="s8">8. Forms</SectionHeading>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
                The following forms will be used in this procedure:
              </p>
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#081C2E" }}>
                    {["#", "Form", "Reference No."].map((h) => (
                      <th key={h} className="text-left px-3 py-2 font-semibold tracking-wide" style={{ color: "#ffffff" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1", "Major Emergency Preparedness Plan", "IMP/FRM/21/001"],
                    ["2", "Mock Drill Instructions", "IMP/FRM/21/002"],
                  ].map(([num, form, ref], i) => (
                    <tr key={num} style={{ backgroundColor: i % 2 === 0 ? "rgba(8,28,46,0.03)" : "transparent" }}>
                      <td className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>{num}</td>
                      <td className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>{form}</td>
                      <td className="border px-3 py-2 te-code" style={{ borderColor: "#edf0f5" }}>{ref}</td>
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
