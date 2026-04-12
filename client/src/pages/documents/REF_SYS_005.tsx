// TE-IMS-REF-SYS-005 Rev00 — ISO 9001:2015 Certificate
// Design: Standardized policy layout — left sidebar (Doc Info + TOC) + certificate image in main area

import { Link } from "wouter";
import { TopNav, Footer, Breadcrumb } from "@/components/Layout";
import { LOGO_GRAY, LOGO_WHITE } from "@/lib/imsData";

const ISO_9001_CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663473952399/3YVZojsY2rei5QwThHiV6E/iso-9001-cert_6fdd436c.jpg";

export default function REF_SYS_005() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f4f6f9" }}>
      <TopNav />
      <Breadcrumb
        items={[
          { label: "REF — References", href: "/docs/ref" },
          { label: "ISO 9001:2015 Certificate" },
        ]}
      />

      {/* Sub-header */}
      <div className="border-b" style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}>
        <div className="container flex items-center justify-between py-3 gap-4 flex-wrap">
          <div>
            <h1 className="font-bold text-base" style={{ color: "#081C2E" }}>
              ISO 9001:2015 Certificate
            </h1>
            <div className="flex items-center gap-3 mt-0.5 flex-wrap">
              <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>TE-IMS-REF-SYS-005_Rev00</span>
              <span style={{ color: "#c0c8d4" }}>·</span>
              <span className="text-xs" style={{ color: "#6b7a8d" }}>07 Jan 2025</span>
              <span style={{ color: "#c0c8d4" }}>·</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: "#d4edda", color: "#155724" }}>
                ✓ Approved
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
                ["Document Code", "TE-IMS-REF-SYS-005"],
                ["Revision", "Rev 00"],
                ["Issue Date", "07 January 2025"],
                ["Expiry Date", "06 January 2028"],
                ["Status", "✓ Approved"],
                ["Category", "Reference / Certificate"],
                ["Standard", "ISO 9001:2015"],
                ["Cert No.", "CN-QMS-15251158"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs font-semibold" style={{ color: "#8a9ab0" }}>{k}</dt>
                  <dd className="text-xs mt-0.5 font-medium" style={{ color: k === "Status" ? "#155724" : "#081C2E" }}>
                    {k === "Document Code" || k === "Cert No." ? <span className="te-code">{v}</span> : v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="p-4">
            <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#8a9ab0" }}>Contents</div>
            <nav className="space-y-1">
              <a href="#certificate" className="block text-xs py-1 px-2 rounded hover:bg-blue-50 transition-colors" style={{ color: "#081C2E" }}>
                Certificate Image
              </a>
              <a href="#details" className="block text-xs py-1 px-2 rounded hover:bg-blue-50 transition-colors" style={{ color: "#081C2E" }}>
                Certificate Details
              </a>
              <a href="#verification" className="block text-xs py-1 px-2 rounded hover:bg-blue-50 transition-colors" style={{ color: "#081C2E" }}>
                Verification
              </a>
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
                <div className="te-code text-xs" style={{ color: "#8a9ab0" }}>TE-IMS-REF-SYS-005_Rev00</div>
              </div>
            </div>

            {/* Document content */}
            <div className="px-8 py-6">
              {/* Title block */}
              <div className="rounded px-5 py-4 mb-6" style={{ backgroundColor: "#081C2E" }}>
                <h1 className="text-white text-xl font-extrabold tracking-wide text-center uppercase">
                  ISO 9001:2015 — Quality Management System Certificate
                </h1>
              </div>

              {/* Certificate details table */}
              <table id="details" className="w-full text-xs border-collapse mb-6" style={{ borderColor: "#dde3ec" }}>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Standard</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>ISO 9001:2015</td>
                    <td className="border px-3 py-2 font-semibold w-1/4" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>System</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>Quality Management System</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Certificate No.</td>
                    <td className="border px-3 py-2 te-code" style={{ borderColor: "#dde3ec" }}>CN-QMS-15251158</td>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Issue Date</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>07-01-2025</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Re-Certification</td>
                    <td className="border px-3 py-2" style={{ borderColor: "#dde3ec" }}>06-01-2028</td>
                    <td className="border px-3 py-2 font-semibold" style={{ borderColor: "#dde3ec", backgroundColor: "#f4f6f9" }}>Status</td>
                    <td className="border px-3 py-2 font-bold" style={{ borderColor: "#dde3ec", color: "#155724" }}>Approved / Active</td>
                  </tr>
                </tbody>
              </table>

              {/* Certificate Image */}
              <div id="certificate" className="mb-6">
                <h2
                  className="text-sm font-bold mb-3 pb-2"
                  style={{ color: "#081C2E", borderBottom: "2px solid #C49A28" }}
                >
                  Certificate of Registration
                </h2>
                <div
                  className="rounded border overflow-hidden shadow-sm mx-auto"
                  style={{ borderColor: "#dde3ec", maxWidth: "680px" }}
                >
                  <img
                    src={ISO_9001_CDN}
                    alt="ISO 9001:2015 Certificate of Registration — True East Mining Company"
                    className="w-full h-auto block"
                  />
                </div>
              </div>

              {/* Verification note */}
              <div id="verification">
                <h2
                  className="text-sm font-bold mb-3 pb-2"
                  style={{ color: "#081C2E", borderBottom: "2px solid #C49A28" }}
                >
                  Certificate Verification
                </h2>
                <div
                  className="rounded border p-4 text-xs leading-relaxed"
                  style={{ backgroundColor: "#fffbf0", borderColor: "#f0d98a", color: "#5a4a1a" }}
                >
                  <span className="font-bold">Certificate Verification:</span> This certificate was issued by ANS System Certification Private Limited.
                  To verify authenticity, visit{" "}
                  <a href="https://anssystemcertification.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#C49A28" }}>
                    anssystemcertification.com
                  </a>{" "}
                  or scan the QR code on the certificate.
                </div>
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
