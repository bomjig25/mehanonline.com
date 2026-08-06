import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mehanonline.com";
  const pages = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/forecast-ledger/", priority: 0.95, changeFrequency: "monthly" as const },
    { path: "/dossiers/week-of-work/", priority: 0.95, changeFrequency: "monthly" as const },
    { path: "/singularity/", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/models/", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/space/", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/contact/", priority: 0.4, changeFrequency: "yearly" as const },
  ];

  return pages.map((page) => ({
    url: `${base}${page.path}`,
    lastModified: new Date("2026-08-06"),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
