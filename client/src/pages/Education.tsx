// Education & Learning — Landing page
// Design: TE navy #081C2E, gold #C49A28, clean minimalist

import { Link } from "wouter";
import Layout from "@/components/Layout";
import { educationTopics } from "@/lib/educationData";
import { useImsAuth } from "@/hooks/useImsAuth";
import { getLoginUrl } from "@/const";

export default function Education() {
  const { isAuthenticated, loading } = useImsAuth();

  if (loading) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <div className="text-sm" style={{ color: "#6b7a8d" }}>Loading...</div>
        </div>
      </Layout>
    );
  }

  if (!isAuthenticated) {
    return (
      <Layout>
        <div style={{ backgroundColor: "#081C2E" }} className="py-16">
          <div className="container text-center">
            <div className="text-4xl mb-4">🎓</div>
            <h1 className="text-white text-2xl font-bold mb-3">Education & Learning</h1>
            <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
              Access training videos, manuals, guides, and learning materials. Sign in with your company account to continue.
            </p>
            <Link href="/login">
              <button
                className="px-6 py-2.5 rounded font-semibold text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: "#C49A28", color: "#081C2E" }}
              >
                Sign In to Access
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* ── Header ── */}
      <div style={{ backgroundColor: "#081C2E" }} className="relative overflow-hidden">
        {/* Watermark */}
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663473952399/3YVZojsY2rei5QwThHiV6E/logo-trans_6f674faa.png"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none select-none"
          style={{ width: "320px", opacity: 0.07, right: "-10px", top: "50%", transform: "translateY(-50%)" }}
        />
        <div className="container pt-10 pb-8 relative z-10">
          <div style={{ color: "#C49A28" }} className="text-xs font-bold tracking-[0.2em] uppercase mb-2">
            True East Mining Company
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-extrabold leading-tight tracking-tight mb-3">
            Education & Learning
          </h1>
          <p className="text-white/55 text-sm max-w-xl leading-relaxed">
            Training videos, procedure manuals, guides, and reference materials to help you understand your work,
            stay compliant, and operate safely on site.
          </p>
        </div>

        {/* Stats bar */}
        <div
          style={{ borderTop: "1px solid rgba(196,154,40,0.2)" }}
          className="mt-2"
        >
          <div className="container">
            <div className="flex flex-wrap gap-0 divide-x divide-white/10 py-1">
              <div className="text-center px-4 py-0.5">
                <div className="text-xl font-extrabold tabular-nums" style={{ color: "#C49A28" }}>
                  {educationTopics.length}
                </div>
                <div className="text-[10px] mt-1 tracking-widest uppercase font-semibold" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Topics
                </div>
              </div>
              <div className="text-center px-4 py-0.5">
                <div className="text-xl font-extrabold tabular-nums" style={{ color: "#C49A28" }}>
                  {educationTopics.reduce((sum, t) => sum + t.resources.length, 0)}
                </div>
                <div className="text-[10px] mt-1 tracking-widest uppercase font-semibold" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Resources
                </div>
              </div>
              <div className="text-center px-4 py-0.5">
                <div className="text-xl font-extrabold" style={{ color: "#C49A28" }}>
                  Video
                </div>
                <div className="text-[10px] mt-1 tracking-widest uppercase font-semibold" style={{ color: "rgba(255,255,255,0.45)" }}>
                  PDF · Manual · Guide
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Topic Grid ── */}
      <div className="container py-10">
        <div className="mb-6">
          <h2 className="text-lg font-bold" style={{ color: "#081C2E" }}>
            Learning Topics
          </h2>
          <p className="text-sm mt-1" style={{ color: "#6b7a8d" }}>
            Select a topic to browse all available training materials.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {educationTopics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/education/${topic.slug}`}
              className="group block no-underline"
            >
              <div
                className="h-full rounded border bg-white transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-lg"
                style={{ borderColor: "#dde3ec" }}
              >
                {/* Top accent bar */}
                <div
                  style={{ backgroundColor: topic.color, height: "3px", borderRadius: "4px 4px 0 0" }}
                />
                <div className="p-5">
                  {/* Icon + code badge */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{topic.icon}</span>
                      <span
                        className="text-xs font-bold px-2 py-1 rounded"
                        style={{ backgroundColor: "#e8edf4", color: "#081C2E" }}
                      >
                        {topic.code}
                      </span>
                    </div>
                    <span
                      className="text-2xl font-extrabold"
                      style={{ color: "#C49A28" }}
                    >
                      {topic.resources.length}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-bold text-sm leading-snug mb-1.5 group-hover:underline"
                    style={{ color: "#081C2E" }}
                  >
                    {topic.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7a8d" }}>
                    {topic.description}
                  </p>

                  {/* Resource type pills */}
                  <div className="mt-3 flex flex-wrap gap-1">
                    {Array.from(new Set(topic.resources.map(r => r.type))).map(type => (
                      <span
                        key={type}
                        className="text-[10px] px-1.5 py-0.5 rounded font-medium"
                        style={{ backgroundColor: "#f0f4f8", color: "#4a5568" }}
                      >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div
                    className="mt-4 pt-3 flex items-center justify-between text-xs font-semibold"
                    style={{ borderTop: "1px solid #edf0f5", color: "#C49A28" }}
                  >
                    <span>Browse materials</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Coming Soon Notice ── */}
      <div className="container pb-10">
        <div
          className="rounded border p-4 text-xs leading-relaxed"
          style={{ backgroundColor: "#f0f7ff", borderColor: "#bfdbfe", color: "#1e3a5f" }}
        >
          <span className="font-bold">Content in Progress:</span> Training materials are being prepared and will be
          uploaded progressively. Resources marked "Coming Soon" will be available once reviewed and approved by
          the Management Representative. Contact your supervisor for urgent training needs.
        </div>
      </div>
    </Layout>
  );
}
