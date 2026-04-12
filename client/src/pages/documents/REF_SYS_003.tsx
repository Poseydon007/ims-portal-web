// TE-IMS-REF-SYS-003 — ISO 14001:2015 Certificate
import { Link } from "wouter";

const ISO_14001_CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663473952399/3YVZojsY2rei5QwThHiV6E/iso-14001-cert_3e9e53a5.jpg";

export default function REF_SYS_003() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f4f6f9" }}>
      {/* Header */}
      <div style={{ backgroundColor: "#081C2E" }} className="py-6">
        <div className="container">
          <div className="flex items-center gap-2 mb-3">
            <span
              className="text-xs font-bold px-2 py-0.5 rounded uppercase tracking-widest"
              style={{ backgroundColor: "#C49A28", color: "#081C2E" }}
            >
              REF
            </span>
            <span className="text-white/50 text-xs">TE-IMS-REF-SYS-003</span>
          </div>
          <h1 className="text-white text-2xl md:text-3xl font-extrabold tracking-tight">
            ISO 14001:2015 Certificate
          </h1>
          <div className="flex flex-wrap gap-4 mt-2 text-xs text-white/50">
            <span>Rev00</span>
            <span>True East Mining Company</span>
            <span>IMS — Reference</span>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="container py-3">
        <Link
          href="/docs/ref"
          className="text-xs font-medium"
          style={{ color: "#C49A28" }}
        >
          ← Back to References
        </Link>
      </div>

      {/* Certificate Display */}
      <div className="container pb-12">
        {/* Info bar */}
        <div
          className="rounded border p-4 mb-6 flex flex-wrap gap-6 text-sm"
          style={{ backgroundColor: "#fff", borderColor: "#dde3ec" }}
        >
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#8a9ab0" }}>Standard</div>
            <div className="font-bold" style={{ color: "#081C2E" }}>ISO 14001:2015</div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#8a9ab0" }}>System</div>
            <div className="font-bold" style={{ color: "#081C2E" }}>Environmental Management System</div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#8a9ab0" }}>Certificate No.</div>
            <div className="font-bold" style={{ color: "#081C2E" }}>CN-EMS-15251159</div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#8a9ab0" }}>Issue Date</div>
            <div className="font-bold" style={{ color: "#081C2E" }}>07-01-2025</div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#8a9ab0" }}>Re-Certification</div>
            <div className="font-bold" style={{ color: "#081C2E" }}>06-01-2028</div>
          </div>
        </div>

        {/* Certificate Image */}
        <div
          className="rounded border overflow-hidden shadow-lg mx-auto"
          style={{ borderColor: "#dde3ec", maxWidth: "700px" }}
        >
          <img
            src={ISO_14001_CDN}
            alt="ISO 14001:2015 Certificate of Registration — True East Mining Company"
            className="w-full h-auto block"
          />
        </div>

        {/* Verification note */}
        <div
          className="mt-6 rounded border p-4 text-xs leading-relaxed mx-auto"
          style={{ backgroundColor: "#fffbf0", borderColor: "#f0d98a", color: "#5a4a1a", maxWidth: "700px" }}
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
  );
}
