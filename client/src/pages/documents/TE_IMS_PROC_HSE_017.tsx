// TE-IMS-PROC-HSE-017 — Manual Handling Procedure
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

export default function TE_IMS_PROC_HSE_017() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "PROC — Procedures", href: "/docs/proc" },
          { label: "Manual Handling Procedure" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              Manual Handling Procedure
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-PROC-HSE-017_Rev01</span>
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
                ["Document Code", "TE-IMS-PROC-HSE-017"],
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-PROC-HSE-017_Rev01</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Manual Handling Procedure
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-6" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-PROC-HSE-017</td>
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


            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>1. Purpose</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>To minimise the risk of musculoskeletal injuries (MSIs) and incidents associated with manual handling tasks at True East Mining sites. This is achieved by establishing safe practices, targeted training, dynamic task-level risk assessments and mandating mechanical aids wherever practical, in compliance with ISO 45001:2018 and KSA MHRSD occupational safety regulations.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>2. Scope</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure applies to all employees, contractors, sub-contractors and visitors performing manual handling tasks (lifting, lowering, pushing, pulling, carrying, moving) at drilling sites, processing areas, workshops, laydown yards, camps and remote desert locations. It explicitly covers heavy or awkward items such as drill rods, wet core boxes, hand tools, cement and drilling-additive bags, water drums and operational equipment.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>3. Definitions</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Term</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Definition</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Manual Handling</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Any transporting, supporting or moving of a load by human effort — including lifting, carrying, pushing, pulling, lowering and holding.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Load</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Any object with weight, shape or size that requires physical handling — drill rods, core boxes, chemical drums, cement sacks, tools, PPE kits, equipment.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>MSI / MSD</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Musculoskeletal Injury or Musculoskeletal Disorder — damage to muscles, ligaments, tendons, joints, nerves or supporting structures, often caused by repetitive, forceful or awkward postures.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Team Lift</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>A coordinated manual handling task performed by two or more personnel under a nominated leader.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Mechanical Aid</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Any device that reduces manual effort — crane, forklift, hoist, trolley, dolly, rod handler, pallet truck, core box lifter.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Ergonomics</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>The science of designing tasks, equipment and workstations to fit the capabilities of the human body, reducing strain and injury risk.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>4. Responsibilities</p>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Site Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Ensures mechanical lifting aids are available, maintained and used; monitors overall compliance; reviews all manual handling incidents.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager / Safety Officer</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Develops and maintains this procedure; delivers formal training; audits field compliance; investigates MSI incidents; reports KPIs to Management Review.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Supervisors / Shift In-Charge</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Conduct task-specific risk assessments before heavy or awkward lifts; enforce safe lifting practices; provide localised toolbox talks; intervene immediately on unsafe handling; nominate team-lift leaders.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Drilling Superintendent</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Plans operations to reduce manual handling of rods, core boxes and additives; ensures mechanical aids are scheduled.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Maintenance Supervisor</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Ensures cranes, hoists, forklifts, trolleys and lifting accessories are inspected, tagged and maintained to the Machine Guarding and Portable Equipment Inspection registers.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>First Aider / Site Nurse</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Responds to muscular strains and MSIs; refers to medical evaluation; supports return-to-work planning.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>All Employees and Contractors</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Dynamically assess every load before lifting; use correct lifting technique; use mechanical aids whenever available; report hazards, strains or physical difficulties immediately under non-punitive framework.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>5. Risk Factors</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Personnel must remain highly vigilant of the following manual handling risk factors present on True East Mining sites:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Heavy, awkward or unstable loads — long drill rods, water-logged core boxes, cement sacks, coiled hoses.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Repetitive handling or tasks requiring awkward, twisting or bent-back postures.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Uneven, rocky or slippery ground — desert terrain, muddy rig mats, snow of drill cuttings.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Extreme high temperatures — rapid fatigue, sweaty palms, reduced grip strength (cross-refer PROC-HSE-002 Heat Stress).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Long carrying distances or areas with poor lighting (night shift operations).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Pre-existing musculoskeletal conditions or recent injuries.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Inadequate PPE — unsuitable gloves, missing metatarsal protection.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Time pressure, rushed work or understaffed crews.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>6. Procedure</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>6.1 Hierarchy of Controls (Avoid → Reduce → Assess → Train)</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Avoid — avoid manual handling entirely where possible by using mechanical aids — cranes, trolleys, forklifts, rod handlers, core box lifters.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Reduce Risk — if manual handling cannot be avoided, break loads into smaller units, redesign the task to eliminate bending, or mandate a team lift.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Assess — assess every task before handling by asking the questions in Section 6.2.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Train — train all personnel on safe handling — initial induction plus annual refresher.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>6.2 Pre-Lift Assessment Checklist (Dynamic)</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Before any significant lift, every person must ask themselves:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Can a mechanical aid be used instead?</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Can the load be reduced, dismantled or split?</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Does the job require a team lift?</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Is the pathway clear, well-lit and free of trip hazards?</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Is the final stacking area safe — stable ground, safe height, proper packing?</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Am I physically capable of this lift today — rested, hydrated, injury-free?</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Is my PPE appropriate for the load?</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>If the answer to any of these raises concern, the lift must not proceed without additional controls. Stop Work Authority applies.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>6.3 Safe Manual Handling Technique</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Always plan the lift before touching the object:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Step 1: Assess — know the load weight — read the label, ask a supervisor, or gently test it.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Step 2: Stance — stand close to the load with feet apart (shoulder-width, approx. 300 mm) for a stable base.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Step 3: Posture — bend at the knees and hips. Keep your back straight and chin tucked.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Step 4: Grip — get a firm full-palm grip. Use designed handles if available. Do not rely on fingertips alone.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Step 5: Brace — breathe in and tighten your core just before lifting — inflated lungs and tense core help support the spine.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Step 6: Lift — lift smoothly using your powerful leg muscles. Keep the load as close to your body as possible.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Step 7: Move — never twist your spine. If you need to turn, turn by moving your feet.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Step 8: Lower — lower the object slowly using your legs, not your back.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>Step 9: Visibility — if your view is obstructed by the load, get help or use a dedicated spotter.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>6.4 Indicative Weight Limits (Single Person, Healthy Adult)</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>These are guidance values only — actual limits must be adjusted for individual capability, posture, duration, frequency, grip quality, environmental conditions and heat stress. When in doubt, use a mechanical aid or team lift.</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Handling Situation</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Guideline Weight Limit</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Lift close to body, between knee and elbow height, occasional</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>25 kg (men) / 16 kg (women)</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Lift at arm's length, between knee and elbow height</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>10 kg (men) / 7 kg (women)</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Overhead lift (above shoulder)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 kg — avoid where possible</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Below knee or above head, awkward position</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≤5 kg — use mechanical aid or team lift</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Hot environment (WBGT &gt;30 °C)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Reduce above limits by 25%</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Any repetitive lift (&gt;once per minute sustained)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Use mechanical aid; ergonomic assessment required</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>[NEEDS CEO REVIEW] — confirm alignment with MHRSD-referenced limits and any project-specific contractor standards.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>6.5 Team Lifting</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>When a load is too heavy or awkward for one person:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Nominate a Leader — one person must be nominated to call the commands.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Coordinate — lift, move and lower exactly together.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Balance — ensure an equal share of the load based on height and strength.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Communicate — use clear, loud commands — 'Ready… Lift!', 'Lower… Now'.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Match Heights — team members should be of similar height where possible; if not, distribute load to compensate.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Stop and Reset — if any member loses grip, balance or control, the leader must call an immediate stop.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>6.6 PPE and Equipment</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Wear cut-resistant impact gloves appropriate to the load.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Steel-toe boots with metatarsal protection.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• High-visibility reflective overalls and hard hat.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Back support belts are NOT mandated by TE (evidence on effectiveness is limited); may be used where individually prescribed by occupational health.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Use mechanical aids — trolleys, dollies, hoists, rod handlers, forklifts — whenever available and you are authorised/trained to use them.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>6.7 Training and Awareness</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Mandatory manual handling training during initial induction plus annual refresher.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Task-specific training for rod handling, core box handling and cement/additive handling.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Supervisors include manual handling topics in Toolbox Talks at least monthly and before any campaign with heavy handling.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Training and attendance records documented in TE-IMS-REG-TRN-001 Training Matrix for a minimum of 5 years.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>6.8 Incident Reporting</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Report any muscular strain, near miss or difficulty performing a task immediately using the Incident Flash Notification Form (TE-IMS-FRM-HSE-002).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Follow up with full investigation using TE-IMS-FRM-HSE-022 Incident and Accident Investigation Report.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• HSE team conducts root-cause analysis per TE-IMS-PROC-SYS-005 CAPA.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>7. Monitoring, KPIs and Continuous Improvement</p>

            <div className="overflow-x-auto mb-6 rounded border" style={{ borderColor: "#dde3ec" }}>
              <table className="w-full text-sm border-collapse">
                <thead style={{ backgroundColor: "#081C2E" }}>
                  <tr>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>KPI</th>
                  <th className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#ffffff" }}>Target</th>
                  </tr>
                </thead>
                <tbody>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Workforce trained in manual handling (current)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100% [NEEDS CEO REVIEW]</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Manual handling injuries/strains (recordable)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Downward trend year-on-year; zero LTI</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Utilisation of mechanical aids on heavy lifts</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≥90% where available</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Field audit compliance (lifting technique)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≥90%</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Ergonomic assessments for repetitive tasks</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100% of identified tasks</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Field Audits — HSE Manager conducts quarterly field audits of physical handling practices and the condition of mechanical aids.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Review — procedure reviewed annually or immediately after any MSI/musculoskeletal incident.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>8. References</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 45001:2018 — OH&amp;S Management Systems (Clauses 6.1.2, 7.2, 8.1.2).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 9001:2015 — Clause 7.1.4 Environment for operation of processes.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• MHRSD — Occupational Safety and Health Management Regulation (KSA), ergonomic hazards and safe lifting.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 11228 series — Ergonomics — Manual handling (Parts 1–3).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• NIOSH Lifting Equation — best-practice benchmark for lifting capacity analysis.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>9. Related Documents</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-POL-HSE-001 — HSE Policy</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-PROC-HSE-001 — Fatigue Management Procedure</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-PROC-HSE-002 — Heat Stress Prevention Procedure</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-PROC-HSE-016 — PPE Procedure</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-PROC-SYS-005 — Continual Improvement and CAPA Procedure</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-FRM-HSE-001 — Job Hazard Analysis Form</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-FRM-HSE-002 — Incident Flash Notification</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-FRM-HSE-022 — Incident and Accident Investigation Report</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-FRM-MAINT-001 — Machine Guarding Inspection Register</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TE-IMS-REG-TRN-001 — Training and Competence Matrix</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>10. Records and Retention</p>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Manual handling training records</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Toolbox talk attendance (manual handling topics)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Mechanical aid inspection records</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Life of equipment + 3 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Manual handling incident reports and investigations</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>10 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Ergonomic task assessments</td>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Rebuilt to TE design standard. Expanded definitions, responsibilities and risk factors. Added indicative weight limit table with hot environment reduction, 9-step lifting technique as numbered steps, pre-lift dynamic checklist, team lifting protocol, KPI targets with CEO review flags, explicit stance on back-support belts, ergonomic references (ISO 11228, NIOSH), records retention.</td>
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
