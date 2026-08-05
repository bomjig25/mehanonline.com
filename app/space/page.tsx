import type { Metadata } from "next";
import SpaceFrontier from "./SpaceFrontier";

export const metadata: Metadata = {
  title: "The Autonomous Frontier — Mehan Observatory",
  description:
    "Explore 72 global space-mission records by year, country, month, mission type, destination, status, and partners—plus verified schedule corrections and an autonomy laboratory.",
  keywords: [
    "global space missions", "NASA missions 2026", "space mission database", "spacecraft autonomy",
    "AI in space", "lunar missions", "Mars missions", "space technology readiness levels",
  ],
  alternates: { canonical: "/space/" },
  openGraph: {
    title: "The Autonomous Frontier — Mehan Observatory",
    description: "The farther intelligence travels, the less it can wait for us.",
    url: "https://mehanonline.com/space/",
    images: [{
      url: "https://mehanonline.com/space-frontier-og.png",
      width: 1774,
      height: 887,
      alt: "A signal traveling from Earth toward an autonomous spacecraft in deep space",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Autonomous Frontier — Mehan Observatory",
    description: "The farther intelligence travels, the less it can wait for us.",
    images: ["https://mehanonline.com/space-frontier-og.png"],
  },
};

export default function SpacePage() {
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Mehan Observatory Global Space Missions Field Record",
    description: "A normalized interactive field record of 72 public and commercial space-program entries, with year, available month, actor, mission type, destination, status, description, partners, and selected official-source corrections.",
    url: "https://mehanonline.com/space/",
    temporalCoverage: "2025/2035",
    spatialCoverage: "Earth orbit, Moon, Mars, Venus, Mercury, asteroids, Jupiter system, and Titan",
    dateModified: "2026-08-05",
    creator: { "@type": "Person", name: "Ashok Mehan" },
    publisher: { "@type": "Organization", name: "Mehan Observatory" },
    variableMeasured: ["Mission name", "Country or agency", "Schedule year", "Schedule month when explicit", "Mission type", "Destination", "Status", "Partners", "Source description", "Verification state"],
    isAccessibleForFree: true,
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
    <SpaceFrontier />
  </>;
}
