// Design: Clean Light Corporate — navy #081C2E, gold #C49A28
// Level 2: Document list table for a given category

import { Link, useParams } from "wouter";
import Layout from "@/components/Layout";
import { Breadcrumb } from "@/components/Layout";
import { categories, documentsByCategory, ImsDocument } from "@/lib/imsData";

const statusBadge = (status: ImsDocument["status"]) => {
  if (status === "approved") {
    return (
      <span
        className="text-xs font-bold px-2 py-0.5 rounded"
        style={{ backgroundColor: "#d4edda", color: "#155724" }}
      >
        Approved
      </span>
    );
  }
  if (status === "draft") {
    return (
      <span
        className="text-xs font-bold px-2 py-0.5 rounded"
        style={{ backgroundColor: "#fff3cd", color: "#856404" }}
      >
        Draft
      </span>
    );
  }
  return (
    <span
      className="text-xs font-medium px-2 py-0.5 rounded"
      style={{ backgroundColor: "#e8edf4", color: "#6b7a8d" }}
    >
      Pending
    </span>
  );
};

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const cat = categories.find((c) => c.slug === slug);
  const docs = documentsByCategory[slug ?? ""] ?? [];

  if (!cat) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <p className="text-lg font-semibold" style={{ color: "#081C2E" }}>
            Category not found.
          </p>
          <Link href="/" style={{ color: "#C49A28" }} className="text-sm mt-2 inline-block hover:underline">
            ← Back to portal home
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Breadcrumb items={[{ label: `${cat.code} — ${cat.name}` }]} />

      {/* Page header */}
      <div style={{ backgroundColor: "#081C2E" }} className="relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full flex items-center pr-8 pointer-events-none select-none" style={{ opacity: 0.06 }}>
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663473952399/3YVZojsY2rei5QwThHiV6E/trueeastlogoWHITE_79ded02e.png" alt="" className="h-32 w-auto" />
        </div>
        <div className="container py-8 relative z-10">
          <div className="flex items-start gap-4">
            <span
              className="te-code text-sm font-bold px-3 py-1.5 rounded shrink-0 mt-0.5"
              style={{ backgroundColor: "rgba(196,154,40,0.2)", color: "#C49A28" }}
            >
              {cat.code}
            </span>
            <div>
              <h1 className="text-white text-2xl font-bold tracking-tight">{cat.name}</h1>
              <p className="text-white/55 text-sm mt-1 max-w-2xl leading-relaxed">{cat.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Document table */}
      <div className="container py-8">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm" style={{ color: "#6b7a8d" }}>
            Showing <strong style={{ color: "#081C2E" }}>{docs.length}</strong> documents in this category
          </p>
          <Link href="/" className="text-xs font-semibold hover:underline" style={{ color: "#C49A28" }}>
            ← Portal Home
          </Link>
        </div>

        <div className="rounded border overflow-hidden" style={{ borderColor: "#dde3ec" }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ backgroundColor: "#081C2E" }}>
                <th className="text-left px-4 py-3 text-xs font-bold tracking-widest uppercase text-white/70 whitespace-nowrap">
                  Document Code
                </th>
                <th className="text-left px-4 py-3 text-xs font-bold tracking-widest uppercase text-white/70">
                  Title
                </th>
                <th className="text-left px-4 py-3 text-xs font-bold tracking-widest uppercase text-white/70 w-20">
                  Rev
                </th>
                <th className="text-left px-4 py-3 text-xs font-bold tracking-widest uppercase text-white/70 w-28">
                  Date
                </th>
                <th className="text-left px-4 py-3 text-xs font-bold tracking-widest uppercase text-white/70 w-28">
                  Status
                </th>
                <th className="text-center px-4 py-3 text-xs font-bold tracking-widest uppercase text-white/70 w-24">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {docs.map((doc, i) => (
                <tr
                  key={doc.code}
                  className="transition-colors hover:bg-blue-50/40"
                  style={{ borderTop: i > 0 ? "1px solid #edf0f5" : undefined }}
                >
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="te-code text-xs" style={{ color: "#081C2E" }}>
                      {doc.code}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {doc.available ? (
                      <Link
                        href={doc.formUrl ?? `/docs/${slug}/${doc.slug}`}
                        className="font-medium hover:underline"
                        style={{ color: "#081C2E" }}
                      >
                        {doc.title}
                      </Link>
                    ) : (
                      <span className="italic" style={{ color: "#8a9ab0" }}>
                        {doc.title}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <span className="te-code text-xs" style={{ color: "#6b7a8d" }}>
                      {doc.rev}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs" style={{ color: "#6b7a8d" }}>
                    {doc.date}
                  </td>
                  <td className="px-4 py-3">{statusBadge(doc.status)}</td>
                  <td className="px-4 py-3 text-center">
                    {doc.formUrl ? (
                      <Link
                        href={doc.formUrl}
                        className="inline-block text-xs font-bold px-3 py-1.5 rounded transition-colors whitespace-nowrap"
                        style={{ backgroundColor: "#C49A28", color: "#081C2E" }}
                      >
                        Fill Form ✎
                      </Link>
                    ) : doc.available ? (
                      <Link
                        href={`/docs/${slug}/${doc.slug}`}
                        className="inline-block text-xs font-bold px-3 py-1.5 rounded transition-colors whitespace-nowrap"
                        style={{ backgroundColor: "#081C2E", color: "#fff" }}
                      >
                        View →
                      </Link>
                    ) : (
                      <span className="text-xs" style={{ color: "#c0c8d4" }}>—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
