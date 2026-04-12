// TE-IMS-REF-HSE-002 Rev01 — Fire Fighting Procedure Reference
// Design: Standardized POL layout — left sidebar (Doc Info + TOC) + main content area

import { Link } from "wouter";
import { TopNav, Footer, Breadcrumb } from "@/components/Layout";
import { LOGO_GRAY, LOGO_WHITE } from "@/lib/imsData";

const sections = [
  { id: "s1", label: "1. Fire Extinguisher Types" },
  { id: "s2", label: "2. Operating Procedure" },
  { id: "s3", label: "3. Emergency Contacts" },
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

export default function TE_IMS_REF_HSE_002() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "REF — References", href: "/docs/ref" },
          { label: "Fire Fighting Procedure Reference" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              Fire Fighting Procedure Reference
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-REF-HSE-002_Rev01</span>
              <span style={{ color: "#c0c8d4" }}>·</span>
              <span className="text-xs" style={{ color: "#6b7a8d" }}>Rev 01</span>
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
                ["Document Code", "TE-IMS-REF-HSE-002"],
                ["Revision", "Rev 01"],
                ["Date", "—"],
                ["Status", "Pending"],
                ["Category", "Reference"],
                ["Scope", "All TEMC operations and fire safety personnel"],
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-REF-HSE-002_Rev01</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Fire Fighting Procedure Reference
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-6" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-REF-HSE-002</td>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Revision</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>01</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Date</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>—</td>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Status</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec", color: "#6b7a8d" }}>Pending</td>
                  </tr>
                </tbody>
              </table>

              {/* Section 1 */}
              <SectionHeading id="s1">1. Fire Extinguisher Types and Their Use</SectionHeading>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
                The following table details the types of fire extinguishers, their colour coding, applicable fire classes, and usage guidance:
              </p>

              <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr style={{ backgroundColor: "#081C2E" }}>
                      {["#", "Type", "Colour", "Class", "Class Description / Use", "Remarks"].map((h) => (
                        <th key={h} className="text-left px-3 py-2 font-semibold tracking-wide" style={{ color: "#ffffff" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["1", "Water Type", "Red", "A", "Wood, Paper, Textile, Plastic Packing Material", "Not to be used in fires involving flammable liquid or electricity"],
                      ["2", "Carbon Dioxide", "Red", "B C", "Flammable Liquid, Fire involving electricity", "Not to be used in Class A (Paper, wood, rubber etc)"],
                      ["3", "Dry Chemical Powder (DCP)", "Red", "A B C", "Paper, Wood, Rubber etc. Flammable Liquid, fire involving electricity.", "Applicable for all types of fire"],
                      ["4", "BFC (HALON)", "Green", "B C", "Flammable Liquid, fire involving electricity", "Not to be used in Class A (Paper, Wood, Rubber etc)"],
                    ].map(([num, type, colour, cls, desc, remarks], i) => (
                      <tr key={num} style={{ backgroundColor: i % 2 === 0 ? "rgba(8,28,46,0.03)" : "transparent" }}>
                        <td className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>{num}</td>
                        <td className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>{type}</td>
                        <td className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>{colour}</td>
                        <td className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>{cls}</td>
                        <td className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>{desc}</td>
                        <td className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>{remarks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Section 2 */}
              <SectionHeading id="s2">2. Operating Procedure</SectionHeading>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#374151" }}>
                Follow these steps when operating a fire extinguisher:
              </p>
              <ul className="list-none pl-0 space-y-2 mb-4">
                {[
                  "Carry or drag the extinguisher to the scene of the fire.",
                  "Stand approximately 4 to 5 metres away from the fire.",
                  "Remove the safety pin from the operating handle and take hold of the applicator.",
                  "Hold the handle and use a sweeping rotary action to completely envelope the fire with the extinguishing agent.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm" style={{ color: "#374151" }}>
                    <span className="font-bold shrink-0" style={{ color: "#C49A28" }}>{i + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Section 3 */}
              <SectionHeading id="s3">3. Emergency Contacts</SectionHeading>
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#081C2E" }}>
                    {["Emergency Service", "Telephone No."].map((h) => (
                      <th key={h} className="text-left px-3 py-2 font-semibold tracking-wide" style={{ color: "#ffffff" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Central Fire Station", "998"],
                    ["Movable Security", "996"],
                    ["Emergency", "997"],
                    ["Police", "999"],
                    ["Insurance Hospital", "4933000"],
                  ].map(([service, tel], i) => (
                    <tr key={service} style={{ backgroundColor: i % 2 === 0 ? "rgba(8,28,46,0.03)" : "transparent" }}>
                      <td className="border px-3 py-2" style={{ borderColor: "#edf0f5" }}>{service}</td>
                      <td className="border px-3 py-2 font-mono" style={{ borderColor: "#edf0f5" }}>{tel}</td>
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
