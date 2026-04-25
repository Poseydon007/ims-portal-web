import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const documents = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/documents" }),
  schema: z.object({
    code: z.string(),
    title: z.string(),
    rev: z.string(),
    issueDate: z.string(),
    expiryDate: z.string().optional(),
    status: z.enum(["Approved", "Draft", "Retired"]).default("Approved"),
    category: z.string(),
    breadcrumbs: z
      .array(z.object({ label: z.string(), href: z.string().optional() }))
      .default([]),
    sidebarExtra: z.array(z.tuple([z.string(), z.string()])).default([]),
    toc: z
      .array(z.object({ id: z.string(), label: z.string() }))
      .default([]),
  }),
});

export const collections = { documents };
