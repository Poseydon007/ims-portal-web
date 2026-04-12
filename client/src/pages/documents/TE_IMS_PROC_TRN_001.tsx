// TE-IMS-PROC-TRN-001 — Staff Training and Competency Procedure
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

export default function TE_IMS_PROC_TRN_001() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "PROC — Procedures", href: "/docs/proc" },
          { label: "Staff Training and Competency Procedure" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              Staff Training and Competency Procedure
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-PROC-TRN-001_Rev01</span>
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
                ["Document Code", "TE-IMS-PROC-TRN-001"],
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-PROC-TRN-001_Rev01</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6" style={{ color: "#081C2E", fontFamily: "'Nunito Sans', sans-serif" }}>

              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  Staff Training and Competency Procedure
                </h1>
              </div>

              {/* Document info table */}
              <table className="w-full text-xs border-collapse mb-6" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Document</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>TE-IMS-PROC-TRN-001</td>
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

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure establishes a systematic process at True East Mining Company (TEMC) for defining job requirement profiles, setting competency levels, identifying training needs, delivering and verifying training, and providing the infrastructure and resources needed for operational excellence and safety. It supports ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 (Clauses 7.1 Resources, 7.2 Competence, 7.3 Awareness) and contributes to TEMC's Saudization objectives under MHRSD requirements.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>2. Scope</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>This procedure applies to all TEMC employees and long-term contractors across drilling, maintenance, HSE, logistics, procurement, HR, finance, and administration functions. It covers:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Job profiling and competency requirements.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Induction and onboarding.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Identification of training needs (TNA).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Planning, approval, and execution of training.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Trainee evaluation and certification.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Resource and infrastructure provision.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Review, monitoring, and continual improvement.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>3. Definitions</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Training Needs Analysis (TNA) — a systematic process to identify gaps between current and required competencies for each role.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Competence — the demonstrated ability to apply knowledge and skills to achieve intended results safely and effectively.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• OJT (On-the-Job Training) — practical hands-on training conducted in the actual work environment under a competent person.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Job Requirement Profile (JRP) — a controlled document defining job title, reporting line, responsibilities, minimum qualifications, experience, and required competencies.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Saudization — KSA Nitaqat / MHRSD programme requiring nationalisation of the workforce.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Certification — formal evidence that a trainee has completed training and been verified competent.</p>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Managing Director (MD)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Approves job requirement profiles, annual training plan, and budget. Reviews training KPIs at management review. Allocates resources.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HR Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Owns this procedure. Prepares induction, conducts TNA, develops the annual training plan, tracks delivery and effectiveness, maintains the Training and Competence Matrix, issues certificates, reports KPIs.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Department Heads / Process Owners</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Document and maintain Job Requirement Profiles. Identify training needs for their teams. Release staff for scheduled training. Evaluate post-training application on the job.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HSE Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Owns HSE competency requirements (PTO, LOTO, working at height, confined space, hazardous materials, emergency response). Verifies HSE certifications are current.</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Finance Manager</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Budgets for approved training. Processes invoices and training expenses.</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>All Employees</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Attend assigned training on time. Apply learning on the job. Report gaps in competency honestly.</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>5. Job Profiling and Competency Requirements</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Process Owners document a formal Job Requirement Profile (FRM-HR-001) for every position.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Each JRP includes: job title, reporting line, primary responsibilities, minimum qualifications, minimum experience, required certifications (technical and HSE), language requirements, and required competency levels.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• The HR Manager consolidates JRPs; the MD reviews and approves them annually.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• HR matches all new hires to the approved JRP for the position; CVs and certificates are retained in the employee file.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>6. Induction and Onboarding</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Every new employee attends the TEMC Induction and Orientation Programme on or before the first day of work.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• The induction covers: company overview, IMS policy and objectives, HSE rules, emergency procedures, site rules, code of conduct, HR policies, and role-specific orientation.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Site-based personnel additionally receive site induction (rig, camp, or yard specific) by the Site HSE Officer before starting work.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• On completion of induction, the Process Owner evaluates the new employee on the Trainee Evaluation Report (FRM-HR-003) and sends a copy to HR for the employee file.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>7. Training Needs Analysis (TNA)</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>The HR Manager, with Department Heads, conducts TNA annually and when triggered by new equipment, new methods, changed roles, incidents, or audit findings. Training is classified as:</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Strategic Training — leadership, project management, commercial, and ISO awareness — supports company-level capability.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Functional Training — role-specific technical training (drilling, geology, mud engineering, maintenance, HSE, logistics) — supports operational performance.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Vocational Training — skills training that supports technology change or career progression — supports Saudization objectives.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• On-the-Job Training (OJT) — supervised hands-on training on new machinery, methods, or procedures — supports safe execution.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Mandatory Compliance Training — HSE and regulatory: LOTO, working at height, confined space, first aid, fire warden, hazardous materials, emergency response, defensive driving — tracked with expiry dates.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>8. Approval and Execution of Training</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• 8.1 Request — HR or a Department Head raises a Training Request (FRM-HR-002) defining the training, target audience, objective, provider, cost, and date.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• 8.2 Planning — HR consolidates requests into the Annual Training Plan, balancing schedule, budget, operational release, and Saudization priorities.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• 8.3 Approval — the MD approves the Annual Training Plan. Unplanned training during the year requires MD approval on the Training Request.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• 8.4 Execution — HR books the provider, notifies the department, posts the schedule on the department noticeboard, provides training materials, tracks attendance in the Training Attendance Register (FRM-TRN-001), and files all records.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• 8.5 OJT — is executed by a nominated competent mentor, documented on the OJT record, and signed off when the trainee has demonstrated the required competency.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>9. Trainee Evaluation, Certification, and Competence Verification</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• At the end of each training event, the trainee is assessed by the trainer (written test, practical, or both).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Passing trainees receive a Training Certificate; failing trainees are re-trained and re-assessed.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• The Process Owner verifies on-the-job application of the new skills over a defined period and records the verification in the Training and Competence Matrix (REG-TRN-001).</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• HSE-critical certifications (first aid, LOTO, working at height, confined space, defensive driving) are tracked with expiry dates; refresher training is booked before expiry.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Training records are retained for the duration of employment plus five (5) years.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>10. Resources and Infrastructure (ISO 7.1)</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• At the start of each year, Process Owners identify and justify the resources needed to achieve quality, HSE, and operational objectives.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Requirements include: manpower, equipment and tools, IT infrastructure (computers, software, communications), workspace, PPE, training facilities, and welfare.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Process Owners submit a Resource Matrix (FRM-HR-004) to the MD; the MD allocates resources through the annual budget and CAPEX plan.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Mid-year requests are raised through the Procurement and CAPEX approval route under PROC-SCM-001.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>11. Monitoring and Continual Improvement</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• The HR Manager tracks KPIs (section 12) monthly and reports at the Management Review.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Post-training effectiveness is measured through: trainer evaluation, trainee feedback, Process Owner verification on the job, and incident/audit data.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• The annual training plan is reviewed and updated based on effectiveness data and any changes in strategy, risk, or regulation.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Ineffective training is flagged as a non-conformity and processed under PROC-SYS-008 Corrective Action.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• Saudization progress is reported quarterly to the MD and aligned to MHRSD Nitaqat requirements.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>12. Performance Indicators</p>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Annual Training Plan approved before year start</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Annual</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Planned training delivered on schedule</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≥ 90%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Mandatory HSE certifications current</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Induction completed before first day of work</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Per hire</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Training effectiveness score (post-training verification)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≥ 80%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Quarterly</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Saudization ratio vs MHRSD Nitaqat target</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>≥ target</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Quarterly</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Training records up to date in REG-TRN-001</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>100%</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Monthly</td>
                </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>13. References</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 9001:2015 — Clauses 7.1 Resources, 7.2 Competence, 7.3 Awareness.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 14001:2015 — Clauses 7.1, 7.2, 7.3.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• ISO 45001:2018 — Clauses 7.1, 7.2, 7.3.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• KSA MHRSD — Saudi Labour Law and Nitaqat Saudization Programme.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>• TEMC IMS Manual; PROC-SYS-003 Management Review; PROC-SYS-008 Corrective Action; PROC-SCM-001 Site Supply.</p>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "#081C2E" }}>14. Related Documents and Records</p>

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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Job Requirement Profile (FRM-HR-001)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HR / Process Owner</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Life of role</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Training Request (FRM-HR-002)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HR</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Trainee Evaluation Report (FRM-HR-003)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HR</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Employment + 5 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Annual Resource Matrix (FRM-HR-004)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HR / Finance</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>3 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Training Attendance Register (FRM-TRN-001)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HR</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>5 years</td>
                </tr>
                <tr >
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Training and Competence Matrix (REG-TRN-001)</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HR</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Employment + 5 years</td>
                </tr>
                <tr style={{ backgroundColor: "rgba(8,28,46,0.03)" }}>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Training Certificates</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HR / Employee File</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Employment + 5 years</td>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Full rebuild — added formal definitions including JRP and Saudization, responsibilities table, expanded TNA with mandatory compliance category, 5-step training approval workflow, certification and competence verification with expiry tracking, resources and infrastructure section per ISO 7.1, monitoring and continual improvement, KPI table with Saudization and CEO review flag, records retention with explicit durations.</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>HR Manager</td>
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
                  <td className="px-3 py-2 text-xs" style={{ color: "#081C2E" }}>Prepared by (HR Manager)</td>
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
