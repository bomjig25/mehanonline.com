import type { Metadata } from "next";
import Link from "next/link";
import SignupForm from "../SignupForm";
import { SiteFooter, SiteHeader } from "../SiteChrome";

export const metadata: Metadata = {
  title: "AI Disagreement Dossiers — Mehan Observatory",
  description: "Interactive, source-backed investigations of the questions experts disagree about at the frontier of AI and autonomy.",
  keywords: ["AI research", "AI disagreement", "AI agents", "AI economics", "technological singularity"],
  alternates: { canonical: "/dossiers/" },
  openGraph: {
    title: "Disagreement Dossiers — Mehan Observatory",
    description: "The important questions do not have settled answers. Examine the evidence on both sides.",
    url: "https://mehanonline.com/dossiers/", type: "website",
    images: [{ url: "https://mehanonline.com/og.png", width: 1792, height: 896, alt: "Mehan Observatory" }],
  },
  twitter: { card: "summary_large_image", images: ["https://mehanonline.com/og.png"] },
};

const dossiers = [
  {
    number: "02", status: "New · October 2026",
    title: "When does an AI agent become an economic actor?",
    question: "Is task completion enough—or does economic agency begin only when delegated authority creates consequences in a market?",
    instruments: "Delegation threshold · market stress test · disagreement map",
    href: "/dossiers/economic-actor/",
  },
  {
    number: "01", status: "August 2026",
    title: "Can an AI do a week of useful work?",
    question: "Long-task benchmarks are rising quickly. Real workplaces introduce ambiguity, coordination, and costly mistakes.",
    instruments: "Reliability horizon · workplace messiness test",
    href: "/dossiers/week-of-work/",
  },
];

export default function DossiersPage() {
  const collectionSchema = {
    "@context": "https://schema.org", "@type": "CollectionPage",
    name: "Mehan Observatory Disagreement Dossiers", url: "https://mehanonline.com/dossiers/",
    description: metadata.description, dateModified: "2026-10-11",
    hasPart: dossiers.map((dossier) => ({ "@type": "Article", name: dossier.title, url: `https://mehanonline.com${dossier.href}` })),
  };

  return (
    <main className="dossier-index-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <SiteHeader active="dossier" />
      <header className="dossier-index-hero observatory-page-hero">
        <div className="observatory-hero-copy">
          <p className="kicker">The argument desk / evidence before certainty</p>
          <h1>Where the frontier<br /><em>disagrees with itself.</em></h1>
          <p>Each dossier takes one consequential question, shows the strongest case on both sides, and gives you an instrument for testing the assumptions.</p>
        </div>
        <aside><span>Open records</span><strong>02</strong><small>Revised when the evidence moves</small></aside>
      </header>

      <section className="dossier-index-list" aria-labelledby="dossier-index-title">
        <div className="dossier-index-heading"><span className="section-number">01</span><div><p className="kicker">Current investigations</p><h2 id="dossier-index-title">Questions worth<br /><em>getting wrong in public.</em></h2></div></div>
        <div className="dossier-index-grid">
          {dossiers.map((dossier) => (
            <Link href={dossier.href} key={dossier.number}>
              <div><span>Dossier {dossier.number}</span><small>{dossier.status}</small></div>
              <h3>{dossier.title}</h3>
              <p>{dossier.question}</p>
              <b>{dossier.instruments}</b>
              <i aria-hidden="true">→</i>
            </Link>
          ))}
        </div>
      </section>

      <section className="signup-band" aria-labelledby="dossiers-signup-title"><div><p className="kicker">Follow the argument</p><h2 id="dossiers-signup-title">Return when the<br /><em>evidence changes.</em></h2><p>Receive new dossiers, forecast revisions, and the evidence that changed our mind.</p></div><SignupForm idPrefix="dossiers-signup" /></section>
      <SiteFooter />
    </main>
  );
}
