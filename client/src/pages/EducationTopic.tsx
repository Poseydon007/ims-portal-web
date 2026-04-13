// Education Topic Page — resource cards for a single topic
// Videos: thumbnail + play icon linking to URL (no inline embed)
// PDFs/Manuals: download/view button
// Training completions: tracked via DB, checkmark shown on completed resources

import { Link, useRoute } from "wouter";
import Layout from "@/components/Layout";
import {
  educationTopics,
  RESOURCE_TYPE_LABELS,
  RESOURCE_TYPE_COLORS,
  type EducationResource,
} from "@/lib/educationData";
import { useImsAuth } from "@/hooks/useImsAuth";
import { trpc } from "@/lib/trpc";
import { useEffect, useCallback } from "react";

// ── Resource type icons ──
const TYPE_ICONS: Record<string, string> = {
  video: "▶",
  pdf: "📄",
  manual: "📖",
  guide: "📌",
  checklist: "✅",
};

// ── Resource Card ──
function ResourceCard({
  resource,
  completed,
  completedAt,
  onOpen,
}: {
  resource: EducationResource;
  completed: boolean;
  completedAt?: Date;
  onOpen: (resource: EducationResource) => void;
}) {
  const typeColor = RESOURCE_TYPE_COLORS[resource.type];
  const typeLabel = RESOURCE_TYPE_LABELS[resource.type];
  const icon = TYPE_ICONS[resource.type] ?? "📎";

  return (
    <div
      className="rounded border bg-white transition-all duration-200 hover:shadow-md relative"
      style={{ borderColor: completed ? "#22c55e" : "#dde3ec" }}
    >
      {/* Completion badge — top right corner */}
      {completed && (
        <div
          className="absolute top-2 right-2 z-10 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold"
          style={{ backgroundColor: "#22c55e", color: "#fff" }}
          title={completedAt ? `Completed ${new Date(completedAt).toLocaleDateString()}` : "Completed"}
        >
          <span>✓</span>
          <span>Completed</span>
        </div>
      )}

      {/* Video thumbnail area */}
      {resource.type === "video" && (
        <div
          className="relative rounded-t overflow-hidden cursor-pointer group"
          style={{ backgroundColor: "#0d2235", height: "160px" }}
          onClick={resource.available && resource.url ? () => onOpen(resource) : undefined}
        >
          {resource.thumbnailUrl ? (
            <img
              src={resource.thumbnailUrl}
              alt={resource.title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-4xl opacity-30" style={{ color: "#C49A28" }}>▶</div>
            </div>
          )}

          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
              style={{
                backgroundColor: resource.available ? "#C49A28" : "rgba(255,255,255,0.15)",
                opacity: resource.available ? 1 : 0.5,
              }}
            >
              <span className="text-white text-lg ml-0.5">▶</span>
            </div>
          </div>

          {/* Duration badge */}
          {resource.duration && (
            <div
              className="absolute bottom-2 right-2 text-xs px-2 py-0.5 rounded font-medium"
              style={{ backgroundColor: "rgba(0,0,0,0.6)", color: "#fff" }}
            >
              {resource.duration}
            </div>
          )}

          {/* Coming soon overlay */}
          {!resource.available && (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ backgroundColor: "rgba(8,28,46,0.7)" }}
            >
              <span
                className="text-xs font-bold px-3 py-1 rounded"
                style={{ backgroundColor: "rgba(196,154,40,0.9)", color: "#081C2E" }}
              >
                COMING SOON
              </span>
            </div>
          )}
        </div>
      )}

      <div className="p-4">
        {/* Type badge + meta */}
        <div className="flex items-center justify-between mb-2">
          <span
            className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide"
            style={{ backgroundColor: typeColor.bg, color: typeColor.text }}
          >
            {icon} {typeLabel}
          </span>
          <div className="flex items-center gap-2 text-[10px]" style={{ color: "#8a9ab0" }}>
            {resource.pages && <span>{resource.pages} pages</span>}
            {resource.fileSize && <span>{resource.fileSize}</span>}
            {resource.duration && resource.type !== "video" && <span>{resource.duration}</span>}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-bold text-sm leading-snug mb-1.5" style={{ color: "#081C2E" }}>
          {resource.title}
        </h3>

        {/* Description */}
        <p className="text-xs leading-relaxed mb-3" style={{ color: "#6b7a8d" }}>
          {resource.description}
        </p>

        {/* Tags */}
        {resource.tags && resource.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {resource.tags.map(tag => (
              <span
                key={tag}
                className="text-[10px] px-1.5 py-0.5 rounded"
                style={{ backgroundColor: "#f0f4f8", color: "#4a5568" }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action button */}
        {resource.type !== "video" && (
          <button
            onClick={resource.available && resource.url ? () => onOpen(resource) : undefined}
            disabled={!resource.available}
            className="w-full py-2 rounded text-xs font-semibold transition-all"
            style={
              resource.available
                ? { backgroundColor: "#081C2E", color: "#fff", cursor: "pointer" }
                : { backgroundColor: "#f0f4f8", color: "#8a9ab0", cursor: "not-allowed" }
            }
          >
            {resource.available
              ? resource.type === "pdf" || resource.type === "checklist"
                ? "View / Download"
                : "Open Resource"
              : "Coming Soon"}
          </button>
        )}

        {resource.type === "video" && resource.available && resource.url && (
          <button
            onClick={() => onOpen(resource)}
            className="w-full py-2 rounded text-xs font-semibold transition-all"
            style={{ backgroundColor: "#C49A28", color: "#081C2E", cursor: "pointer" }}
          >
            Watch Video
          </button>
        )}
      </div>
    </div>
  );
}

// ── Main Page ──
export default function EducationTopic() {
  const [, params] = useRoute("/education/:slug");
  const { isAuthenticated, loading } = useImsAuth();

  const topic = educationTopics.find(t => t.slug === params?.slug);

  // Fetch completions for the current user
  const { data: completions, refetch: refetchCompletions } = trpc.education.getMyCompletions.useQuery(
    undefined,
    { enabled: isAuthenticated }
  );

  // Mutation to record a completion
  const recordCompletion = trpc.education.recordCompletion.useMutation({
    onSuccess: () => {
      refetchCompletions();
    },
  });

  // Listen for postMessage from opened training windows
  const handleMessage = useCallback(
    (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;
      const data = event.data;
      if (data?.type === "IMS_TRAINING_COMPLETE" && data.resourceId && data.passed) {
        recordCompletion.mutate({ resourceId: data.resourceId, score: data.score });
      }
    },
    [recordCompletion]
  );

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [handleMessage]);

  // Open resource in a new window (so postMessage back works via window.opener)
  const handleOpen = useCallback((resource: EducationResource) => {
    if (resource.url) {
      window.open(resource.url, "_blank");
    }
  }, []);

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
        <div className="container py-16 text-center">
          <p className="text-sm mb-4" style={{ color: "#6b7a8d" }}>Sign in to access training materials.</p>
          <Link href="/login">
            <button
              className="px-6 py-2.5 rounded font-semibold text-sm"
              style={{ backgroundColor: "#C49A28", color: "#081C2E" }}
            >
              Sign In
            </button>
          </Link>
        </div>
      </Layout>
    );
  }

  if (!topic) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <p className="text-sm mb-4" style={{ color: "#6b7a8d" }}>Topic not found.</p>
          <Link href="/education">
            <span className="text-sm font-semibold" style={{ color: "#C49A28" }}>← Back to Education</span>
          </Link>
        </div>
      </Layout>
    );
  }

  const availableCount = topic.resources.filter(r => r.available).length;
  const comingSoonCount = topic.resources.filter(r => !r.available).length;
  const completedCount = topic.resources.filter(r => completions?.[r.id]).length;

  return (
    <Layout>
      {/* ── Header ── */}
      <div style={{ backgroundColor: "#081C2E" }} className="relative overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663473952399/3YVZojsY2rei5QwThHiV6E/logo-trans_6f674faa.png"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none select-none"
          style={{ width: "280px", opacity: 0.07, right: "-10px", top: "50%", transform: "translateY(-50%)" }}
        />
        <div className="container pt-8 pb-6 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
            <Link href="/education">
              <span className="hover:text-white/70 cursor-pointer transition-colors">Education</span>
            </Link>
            <span>/</span>
            <span style={{ color: "#C49A28" }}>{topic.code}</span>
          </div>

          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{topic.icon}</span>
            <div>
              <div style={{ color: "#C49A28" }} className="text-xs font-bold tracking-[0.2em] uppercase mb-1">
                {topic.code} — Learning Materials
              </div>
              <h1 className="text-white text-2xl md:text-3xl font-extrabold leading-tight">
                {topic.name}
              </h1>
            </div>
          </div>
          <p className="text-white/55 text-sm max-w-xl leading-relaxed mt-2">
            {topic.description}
          </p>
        </div>

        {/* Stats bar */}
        <div style={{ borderTop: "1px solid rgba(196,154,40,0.2)" }}>
          <div className="container">
            <div className="flex flex-wrap gap-0 divide-x divide-white/10 py-1">
              <div className="text-center px-4 py-0.5">
                <div className="text-xl font-extrabold" style={{ color: "#C49A28" }}>{topic.resources.length}</div>
                <div className="text-[10px] mt-1 tracking-widest uppercase font-semibold" style={{ color: "rgba(255,255,255,0.45)" }}>Total</div>
              </div>
              <div className="text-center px-4 py-0.5">
                <div className="text-xl font-extrabold" style={{ color: "#C49A28" }}>{availableCount}</div>
                <div className="text-[10px] mt-1 tracking-widest uppercase font-semibold" style={{ color: "rgba(255,255,255,0.45)" }}>Available</div>
              </div>
              <div className="text-center px-4 py-0.5">
                <div className="text-xl font-extrabold" style={{ color: "#C49A28" }}>{comingSoonCount}</div>
                <div className="text-[10px] mt-1 tracking-widest uppercase font-semibold" style={{ color: "rgba(255,255,255,0.45)" }}>Coming Soon</div>
              </div>
              {completedCount > 0 && (
                <div className="text-center px-4 py-0.5">
                  <div className="text-xl font-extrabold" style={{ color: "#22c55e" }}>{completedCount}</div>
                  <div className="text-[10px] mt-1 tracking-widest uppercase font-semibold" style={{ color: "rgba(255,255,255,0.45)" }}>Completed</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Resource Grid ── */}
      <div className="container py-10">
        {topic.resources.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-4xl mb-3">📭</div>
            <p className="text-sm font-medium" style={{ color: "#081C2E" }}>No resources yet</p>
            <p className="text-xs mt-1" style={{ color: "#6b7a8d" }}>
              Materials for this topic are being prepared. Check back soon.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topic.resources.map(resource => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                completed={!!completions?.[resource.id]}
                completedAt={completions?.[resource.id]?.passedAt}
                onOpen={handleOpen}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── Back link ── */}
      <div className="container pb-10">
        <Link href="/education">
          <span
            className="text-xs font-semibold cursor-pointer hover:underline"
            style={{ color: "#C49A28" }}
          >
            ← Back to All Topics
          </span>
        </Link>
      </div>
    </Layout>
  );
}
