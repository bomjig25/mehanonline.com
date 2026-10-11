import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mehanonline.com";
  const pages = [
    { path: "", modified: "2026-10-11", priority: 1, changeFrequency: "weekly" as const },
    { path: "/forecast-ledger/", modified: "2026-08-06", priority: 0.95, changeFrequency: "monthly" as const },
    { path: "/work-horizon/", modified: "2026-08-09", priority: 0.95, changeFrequency: "monthly" as const },
    { path: "/dossiers/", modified: "2026-10-11", priority: 0.95, changeFrequency: "monthly" as const },
    { path: "/dossiers/economic-actor/", modified: "2026-10-11", priority: 0.95, changeFrequency: "monthly" as const },
    { path: "/dossiers/week-of-work/", modified: "2026-08-06", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/singularity/", modified: "2026-08-09", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/models/", modified: "2026-10-11", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/space/", modified: "2026-08-05", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/about/", modified: "2026-08-09", priority: 0.55, changeFrequency: "yearly" as const },
    { path: "/contact/", modified: "2026-08-09", priority: 0.4, changeFrequency: "yearly" as const },
  ];

  return pages.map((page) => ({
    url: `${base}${page.path}`,
    lastModified: new Date(page.modified),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
