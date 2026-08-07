import type { Metadata } from "next";
import SignupForm from "../../SignupForm";
import { SiteFooter, SiteHeader } from "../../SiteChrome";
import DossierInteractive from "./DossierInteractive";

export const metadata: Metadata = {
  title: "Can AI Agents Complete a Week of Work? — Disagreement Dossier",
  description: "An interactive, source-backed investigation of whether AI agents can reliably complete a skilled human week of useful work by 2028.",
  keywords: ["AI agents", "AI autonomy", "task completion time horizon", "METR", "AI forecasts 2028", "technological singularity"],
  alternates: { canonical: "/dossiers/week-of-work/" },
  openGraph: {
    title: "Can an AI do a week of useful work?",
    description: "Disagreement Dossier 01: the benchmark trend, the real-world friction, and the evidence that could settle the question.",
    url: "https://mehanonline.com/dossiers/week-of-work/",
    siteName: "Mehan Observatory",
    type: "article",
    publishedTime: "2026-08-06T00:00:00-04:00",
    modifiedTime: "2026-08-06T00:00:00-04:00",
    images: [{ url: "https://mehanonline.com/dossier-week-of-work-og.png", width: 1774, height: 887, alt: "Can an AI do a week of useful work? — Mehan Observatory Disagreement Dossier 01" }],
  },
  twitter: { card: "summary_large_image", title: "Can an AI do a week of useful work?", description: "A source-backed disagreement dossier from Mehan Observatory.", images: ["https://mehanonline.com/dossier-week-of-work-og.png"] },
};

const citations = [
  { publisher: "METR", date: "May 2026", title: "Frontier Risk Report, February–March 2026", note: "Public frontier: about 12 hours at 50% reliability and 1.5 hours at 80%; longer-task estimates remain uncertain.", href: "https://metr.org/blog/2026-05-19-frontier-risk-report/?dot=INC-029" },
  { publisher: "METR", date: "January 2026", title: "Measuring AI Ability to Complete Long Tasks: Time Horizon 1.1", note: "The updated suite includes 228 tasks, but only five human-baselined tasks longer than eight hours.", href: "https://metr.org/blog/2026-1-29-time-horizon-1-1/" },
  { publisher: "METR", date: "March 2026", title: "The Impact of Modeling Assumptions on Time Horizon Results", note: "As a benchmark saturates, horizon estimates become more sensitive to statistical choices.", href: "https://metr.org/notes/2026-03-20-impact-of-modelling-assumptions-on-time-horizon-results/" },
  { publisher: "International AI Safety Report", date: "2026", title: "Extended Summary for Policymakers", note: "Capability is improving, but remains jagged: systems can succeed at difficult tasks and fail at apparently simple ones.", href: "https://internationalaisafetyreport.org/publication/2026-report-extended-summary-policymakers" },
  { publisher: "Stanford HAI", date: "2026", title: "AI Index Report 2026", note: "Coding performance rose sharply, while business deployment of agents remained in the single digits across nearly all functions.", href: "https://hai.stanford.edu/ai-index/2026-ai-index-report" },
  { publisher: "METR", date: "February 2026", title: "Update on Measuring AI Productivity", note: "Real-world developer productivity remains difficult to estimate because adoption and selection effects complicate the comparison.", href: "https://metr.org/blog/2026-02-24-uplift-update/" },
];

export default function WeekOfWorkDossierPage() {
  const articleJsonLd = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Can an AI do a week of useful work?",
    description: metadata.description,
    datePublished: "2026-08-06", dateModified: "2026-08-06",
    author: { "@type": "Person", name: "Ashok Mehan" },
    publisher: { "@type": "Organization", name: "Mehan Observatory", url: "https://mehanonline.com/" },
    mainEntityOfPage: "https://mehanonline.com/dossiers/week-of-work/",
    image: "https://mehanonline.com/dossier-week-of-work-og.png",
    citation: citations.map((source) => source.href),
    isPartOf: { "@type": "CreativeWorkSeries", name: "Mehan Observatory Disagreement Dossiers" },
  };

  return (
    <main className="dossier-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <SiteHeader active="dossier" />

      <article>
        <header className="dossier-hero">
          <div className="dossier-hero-meta"><span>Disagreement dossier 01</span><span>Forecast F-01</span><span>August 6, 2026</span></div>
          <div className="dossier-hero-copy">
            <p className="kicker">Capability / autonomy / the evidence gap</p>
            <h1>Can an AI do<br />a week of <em>useful work?</em></h1>
            <p>The graph says: soon. The workplace asks a harder question—what counts as useful, reliable, and finished?</p>
            <a className="primary-action" href="#instrument">Test the claim →</a>
          </div>
          <aside><span>Current forecast</span><strong>62<sup>%</sup></strong><p>by the end of 2028</p><a href="/forecast-ledger/">Open F-01 in the Ledger →</a></aside>
        </header>

        <section className="dossier-thesis" aria-labelledby="dossier-thesis-title">
          <div><span className="section-number">01</span><p className="kicker">The question beneath the question</p></div>
          <div><h2 id="dossier-thesis-title">Duration is not<br /><em>the same as delegation.</em></h2><p className="dossier-lede">An agent may persist for hours on a clean software task and still be unready for a week of work involving ambiguity, other people, changing goals, and costly mistakes.</p><p>That distinction matters to the singularity. The transition is not merely from answers to longer answers. It is from tools that respond to systems that carry consequential intent across time.</p></div>
        </section>

        <DossierInteractive />

        <section className="dossier-cases" aria-labelledby="dossier-cases-title">
          <div className="dossier-section-heading"><span className="section-number">04</span><div><p className="kicker">The disagreement</p><h2 id="dossier-cases-title">One trend.<br /><em>Two readings.</em></h2></div></div>
          <div className="dossier-case-grid">
            <article className="case-sooner"><span>The acceleration case</span><h3>“Week-scale autonomy is the next visible step.”</h3><ul><li>Measured task horizons have lengthened rapidly across successive frontier models.</li><li>Tool use, coding, memory, and planning are being integrated into persistent agent workflows.</li><li>A specialized reimplementation benchmark has already produced estimates beyond 100 hours—evidence that long duration is technically reachable in bounded settings.</li></ul></article>
            <article className="case-later"><span>The friction case</span><h3>“The benchmark is clean; work is not.”</h3><ul><li>At 80% reliability, the public frontier estimate is roughly 1.5 hours—not 12.</li><li>The main suite contains too few long, human-baselined tasks for confident extrapolation at week scale.</li><li>Changing requirements, coordination, judgment, and error recovery are the substance of many jobs, not incidental noise.</li></ul></article>
          </div>
        </section>

        <section className="dossier-verdict" aria-labelledby="dossier-verdict-title">
          <div><span className="section-number">05</span><p className="kicker">Observatory assessment</p></div>
          <div><h2 id="dossier-verdict-title">Likely in a bounded task.<br /><em>Unproven in a living workplace.</em></h2><p>The Observatory assigns a <strong>62% probability</strong> that a frontier agent will reliably complete a bounded software or research task requiring a skilled human working week by the end of 2028.</p><p>This is not a forecast of one-week job replacement. It is a narrower, falsifiable threshold: an unfamiliar task, a declared success criterion, at least 80% reliability, and no human rescue.</p></div>
          <div className="verdict-probability"><strong>62</strong><span>%</span><small>Current · +8 points<br />from prior assessment</small></div>
        </section>

        <section className="dossier-evidence" aria-labelledby="evidence-title">
          <div className="dossier-section-heading"><span className="section-number">06</span><div><p className="kicker">What would settle it</p><h2 id="evidence-title">Evidence that<br /><em>moves the number.</em></h2></div></div>
          <div className="evidence-movers">
            <article><span>↑ Raise</span><h3>Independent week-scale replication</h3><p>At least 80% success on unfamiliar tasks across several domains, audited for hidden human help and benchmark leakage.</p></article>
            <article><span>↓ Lower</span><h3>A persistent reliability ceiling</h3><p>Long-horizon gains that disappear when specifications are incomplete, requirements change, or recovery from an early error is required.</p></article>
            <article><span>↺ Reframe</span><h3>A new definition of work</h3><p>If useful output becomes a human–agent relay rather than autonomous completion, we will track that separately instead of moving the goalposts.</p></article>
          </div>
        </section>

        <section className="dossier-sources" aria-labelledby="dossier-sources-title">
          <div><span className="section-number">07</span><p className="kicker">Evidence record</p><h2 id="dossier-sources-title">Read past<br /><em>the headline.</em></h2></div>
          <div><p>These are the primary and independent reports used in this assessment. Measurements belong to their publishers; the synthesis and forecast belong to Mehan Observatory.</p>{citations.map((source) => <a href={source.href} key={source.href}><span>{source.publisher} · {source.date}</span><strong>{source.title}</strong><p>{source.note}</p></a>)}</div>
        </section>

        <section className="signup-band dossier-signup" aria-labelledby="dossier-signup-title"><div><p className="kicker">The dossier changes when the evidence does</p><h2 id="dossier-signup-title">Follow the<br /><em>disagreement.</em></h2><p>Receive new dossiers, forecast revisions, and the evidence that changed our mind.</p></div><SignupForm idPrefix="dossier-signup" /></section>
      </article>
      <SiteFooter />
    </main>
  );
}
