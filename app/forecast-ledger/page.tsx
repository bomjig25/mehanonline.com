import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../SiteChrome";
import ForecastLedger from "./ForecastLedger";
import { forecasts, sources } from "./forecastData";

export const metadata: Metadata = {
  title: "AI Forecast Ledger & Disagreement Map — Mehan Observatory",
  description: "Explore six falsifiable forecasts about AI capability, scientific discovery, cost, geopolitics, institutions, and autonomy—alongside the strongest evidence for and against each one.",
  keywords: ["AI predictions", "AI forecasts 2026", "technological singularity predictions", "AI expert disagreement", "future of artificial intelligence", "AI capability timeline"],
  alternates: { canonical: "/forecast-ledger/" },
  openGraph: {
    title: "The Forecast Ledger — Mehan Observatory",
    description: "What we expect. Where experts disagree. What would change our minds.",
    url: "https://mehanonline.com/forecast-ledger/",
    type: "article",
    images: [{
      url: "https://mehanonline.com/forecast-ledger-og.png",
      width: 1774,
      height: 887,
      alt: "The Forecast Ledger — What we expect. Where experts disagree.",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Forecast Ledger — Mehan Observatory",
    description: "Six falsifiable forecasts at the frontier of AI and the singularity.",
    images: ["https://mehanonline.com/forecast-ledger-og.png"],
  },
};

export default function ForecastLedgerPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "DataFeed",
    name: "Mehan Observatory AI Forecast Ledger",
    description: "A dated, revision-aware collection of falsifiable editorial forecasts about artificial intelligence and the technological singularity.",
    url: "https://mehanonline.com/forecast-ledger/",
    dateModified: "2026-08-06",
    creator: { "@type": "Person", name: "Ashok Mehan" },
    publisher: { "@type": "Organization", name: "Mehan Observatory", url: "https://mehanonline.com/" },
    isBasedOn: sources.map((source) => source.href),
    dataFeedElement: forecasts.map((forecast) => ({
      "@type": "DataFeedItem",
      dateModified: "2026-08-06",
      item: {
        "@type": "Claim",
        name: forecast.title,
        appearance: { "@type": "CreativeWork", text: forecast.proposition },
      },
    })),
  };

  return (
    <main className="forecast-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <SiteHeader active="forecast" />
      <section className="forecast-hero">
        <div className="forecast-grid" aria-hidden="true" />
        <p className="kicker">Mehan Observatory / Living record 01</p>
        <div>
          <h1>The forecast<br /><em>must survive the evidence.</em></h1>
          <p>Six claims about the approaching AI frontier. Each has a probability, a deadline, a disagreement record, and a condition that would prove us wrong.</p>
          <a className="primary-action" href="#forecast-instrument-title">Enter the probability field →</a>
        </div>
        <aside><span>Current record</span><strong>{forecasts.length.toString().padStart(2, "0")}</strong><small>open forecasts · reviewed August 6, 2026</small></aside>
      </section>
      <ForecastLedger />
      <SiteFooter />
    </main>
  );
}
