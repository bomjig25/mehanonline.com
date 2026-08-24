import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../SiteChrome";
import WorkHorizonLab from "./WorkHorizonLab";
import { occupations } from "./workHorizonData";

export const metadata: Metadata = {
  title: "Work Horizon Lab — Mehan Observatory",
  description: "Explore how today's AI task horizon changes across occupations, reliability demands, workplace friction, and physical-world constraints.",
  keywords: ["AI and jobs", "AI task automation", "future of work", "O*NET tasks", "AI reliability"],
  alternates: { canonical: "/work-horizon/" },
  openGraph: {
    title: "Work Horizon Lab — Mehan Observatory",
    description: "A task-level instrument for seeing where today's AI frontier meets real work.",
    url: "https://mehanonline.com/work-horizon/",
  },
};

export default function WorkHorizonPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Mehan Observatory Work Horizon Lab",
    description: "A task-level editorial scenario model built from O*NET occupation tasks and BLS employment and wage context.",
    url: "https://mehanonline.com/work-horizon/",
    dateModified: "2026-08-09",
    creator: { "@type": "Person", name: "Ashok Mehan" },
    variableMeasured: ["task proximity signal", "required reliability", "workplace friction", "employment", "annual mean wage"],
    spatialCoverage: "United States",
    isBasedOn: ["https://www.onetcenter.org/database.html", "https://www.bls.gov/oes/tables.htm", "https://metr.org/time-horizons/"],
    includedInDataCatalog: { "@type": "DataCatalog", name: "Mehan Observatory" },
    distribution: occupations.map((occupation) => ({ "@type": "DataDownload", name: occupation.title, contentUrl: `https://www.onetonline.org/link/summary/${occupation.onetCode}` })),
  };

  return (
    <main className="work-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <SiteHeader active="work" sections={[
        { label: "Occupation explorer", href: "#work-explorer" },
        { label: "Method", href: "#work-method" },
        { label: "Sources", href: "#work-sources" },
      ]} />

      <section className="work-hero observatory-page-hero">
        <div className="work-grid" aria-hidden="true" />
        <div className="observatory-hero-copy">
          <p className="kicker">Mehan Observatory / Applied frontier 01</p>
          <h1>How much of a job<br />fits inside today&apos;s <em>AI horizon?</em></h1>
          <p>Not a headline about jobs disappearing. A task-level map of what machines can plausibly assist, what real workplaces make harder, and what remains stubbornly human.</p>
          <a className="primary-action" href="#work-explorer">Open the instrument →</a>
        </div>
        <aside><span>Field sample</span><strong>{occupations.length.toString().padStart(2, "0")}</strong><small>occupations · 60 O*NET tasks · May 2025 labor context</small></aside>
      </section>

      <WorkHorizonLab />

      <section className="work-sources" id="work-sources">
        <div><span className="section-number">03</span><p className="kicker">Evidence desk</p><h2>Sources before<br /><em>certainty.</em></h2></div>
        <div>
          <a href="https://www.onetcenter.org/database.html"><span>Task architecture</span><strong>O*NET Database 30.3</strong><small>Official occupation task statements; task wording lightly shortened for display.</small></a>
          <a href="https://www.bls.gov/oes/tables.htm"><span>Labor context</span><strong>BLS Occupational Employment and Wage Statistics</strong><small>May 2025 national employment and annual mean wages.</small></a>
          <a href="https://metr.org/time-horizons/"><span>Capability frame</span><strong>METR Task-Completion Time Horizons</strong><small>The distinction between 50% and 80% task success inspired the reliability control.</small></a>
        </div>
      </section>

      <section className="work-bridge">
        <p className="kicker">Continue the inquiry</p>
        <h2>Capability moves first.<br /><em>Institutions absorb it later.</em></h2>
        <div><a className="primary-action light" href="/forecast-ledger/">Open the forecast ledger</a><a className="text-action light-text" href="/dossiers/week-of-work/">Read the week-of-work dossier <span>→</span></a></div>
      </section>
      <SiteFooter />
    </main>
  );
}
