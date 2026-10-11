import type { Metadata } from "next";
import Link from "next/link";
import SignupForm from "../../SignupForm";
import { SiteFooter, SiteHeader } from "../../SiteChrome";
import EconomicActorInstrument from "./EconomicActorInstrument";

export const metadata: Metadata = {
  title: "When Does an AI Agent Become an Economic Actor? — Mehan Observatory",
  description: "An interactive, source-backed investigation of when an AI agent moves from tool to proxy to consequential participant in an economy.",
  keywords: ["AI agents", "economic agents", "agentic AI", "AI delegation", "AI economics", "technological singularity"],
  alternates: { canonical: "/dossiers/economic-actor/" },
  openGraph: {
    title: "When does an AI agent become an economic actor?",
    description: "Disagreement Dossier 02: capability, authority, consequence, and the boundary between a tool and an actor.",
    url: "https://mehanonline.com/dossiers/economic-actor/", siteName: "Mehan Observatory", type: "article",
    publishedTime: "2026-10-11T00:00:00-04:00", modifiedTime: "2026-10-11T00:00:00-04:00",
    images: [{ url: "https://mehanonline.com/og.png", width: 1792, height: 896, alt: "Mehan Observatory" }],
  },
  twitter: { card: "summary_large_image", title: "When does an AI agent become an economic actor?", description: "An interactive disagreement dossier from Mehan Observatory.", images: ["https://mehanonline.com/og.png"] },
};

const citations = [
  { publisher: "Anthropic", date: "September 2026", title: "Project Swap: Can AI agents negotiate for people?", note: "In a controlled book-barter market with 201 participants, agents reproduced 61% of participants' pairwise preferences after a short interview; incomplete preference information was the largest source of failure.", href: "https://www.anthropic.com/research/project-swap" },
  { publisher: "Anthropic", date: "September 2026", title: "What work can robots do?", note: "Technical exposure and economic viability diverge sharply: the study estimates current robots are cost-competitive for only a small fraction of job tasks.", href: "https://www.anthropic.com/research/what-work-can-robots-do" },
  { publisher: "OpenAI", date: "June 2026", title: "How agents are transforming work", note: "OpenAI reports that more than 70% of May Codex users asked it to perform tasks estimated to take a human longer than one hour.", href: "https://openai.com/index/how-agents-are-transforming-work/" },
  { publisher: "OpenAI", date: "July 2026", title: "How AI is expanding what people do at work", note: "An analysis of 800,000 messages found AI use crossing traditional occupational boundaries and creating new combinations of tasks.", href: "https://openai.com/index/how-ai-is-expanding-what-people-do-at-work/" },
  { publisher: "Anthropic", date: "January 2026", title: "Economic Index: The economic primitives of AI use", note: "A task-level framework separates complexity, skill, purpose, autonomy, and success—useful evidence that economic effect cannot be reduced to raw capability.", href: "https://www.anthropic.com/research/economic-index-primitives" },
  { publisher: "Anthropic", date: "June 2026", title: "Economic Index: Cadences", note: "Anthropic's usage data tracks a growing share of longer-running, agentic tasks while emphasizing that observed use is not the same as economy-wide impact.", href: "https://www.anthropic.com/research/economic-index-june-2026-report" },
];

const thresholds = [
  { number: "01", title: "It can represent a principal", text: "The agent must infer and preserve someone else's goals well enough to act when preferences are incomplete or conflicting." },
  { number: "02", title: "It can cross a commitment boundary", text: "Advice becomes agency when the system can spend, exchange, promise, schedule, hire, or otherwise bind resources within delegated limits." },
  { number: "03", title: "Its actions survive the session", text: "Economic action unfolds through time: counterparties respond, prices change, obligations remain, and the agent must recover when its plan collides with reality." },
  { number: "04", title: "Responsibility remains legible", text: "An actor without an audit trail is not autonomous in a useful institutional sense; it is an unassignable risk." },
];

export default function EconomicActorDossierPage() {
  const articleSchema = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "When does an AI agent become an economic actor?", description: metadata.description,
    datePublished: "2026-10-11", dateModified: "2026-10-11",
    author: { "@type": "Person", name: "Ashok Mehan", url: "https://mehanonline.com/about/" },
    publisher: { "@type": "Organization", name: "Mehan Observatory", url: "https://mehanonline.com/" },
    mainEntityOfPage: "https://mehanonline.com/dossiers/economic-actor/", image: "https://mehanonline.com/og.png",
    citation: citations.map((source) => source.href),
    isPartOf: { "@type": "CreativeWorkSeries", name: "Mehan Observatory Disagreement Dossiers", url: "https://mehanonline.com/dossiers/" },
  };

  return (
    <main className="dossier-page economic-actor-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <SiteHeader active="dossier" sections={[{ label: "Threshold instrument", href: "#instrument" }, { label: "The disagreement", href: "#disagreement" }, { label: "Evidence record", href: "#sources" }]} />
      <article>
        <header className="dossier-hero economic-actor-hero">
          <div className="dossier-hero-meta"><span>Disagreement dossier 02</span><span>Economic agency</span><span>October 11, 2026</span></div>
          <div className="dossier-hero-copy"><p className="kicker">Capability / delegation / consequence</p><h1>When does an AI agent<br />become an <em>economic actor?</em></h1><p>Not when it answers. Not necessarily when it completes a task. The threshold appears when delegated intelligence can represent intent, commit resources, and leave consequences behind.</p><a className="primary-action" href="#instrument">Test the threshold →</a></div>
          <aside><span>Observatory proposition</span><strong>5</strong><p>conditions for consequential agency</p><Link href="/dossiers/">View all dossiers →</Link></aside>
        </header>

        <section className="dossier-thesis" aria-labelledby="actor-thesis-title">
          <div><span className="section-number">01</span><p className="kicker">The question beneath the label</p></div>
          <div><h2 id="actor-thesis-title">Intelligence can advise.<br /><em>Authority can alter the world.</em></h2><p className="dossier-lede">A system that finds a cheaper flight is a tool. A system authorized to buy it, negotiate a refund, rearrange the trip, and accept a penalty has crossed into a different category.</p><p>The singularity may first appear not as a single superintelligence, but as millions of narrow delegations: software that can transact, negotiate, hire, allocate, and coordinate at machine speed. The decisive variable is not IQ alone. It is the combination of capability and permission.</p></div>
        </section>

        <EconomicActorInstrument />

        <section className="actor-thresholds" aria-labelledby="actor-thresholds-title">
          <div className="dossier-section-heading"><span className="section-number">03</span><div><p className="kicker">Four commitment tests</p><h2 id="actor-thresholds-title">A transaction is more<br />than a <em>tool call.</em></h2></div></div>
          <div className="actor-threshold-grid">{thresholds.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        </section>

        <section className="dossier-cases" id="disagreement" aria-labelledby="actor-disagreement-title">
          <div className="dossier-section-heading"><span className="section-number">04</span><div><p className="kicker">The disagreement</p><h2 id="actor-disagreement-title">One transition.<br /><em>Two starting points.</em></h2></div></div>
          <div className="dossier-case-grid">
            <article className="case-sooner"><span>The capability case</span><h3>“Economic agency begins when useful work can be completed.”</h3><ul><li>Agents already sustain longer workflows, use tools, and cross occupational task boundaries.</li><li>A principal can set a budget and rules, then let the system search and execute inside them.</li><li>Markets have always accommodated agents—employees, brokers, and software—without requiring perfect autonomy.</li></ul></article>
            <article className="case-later"><span>The institutional case</span><h3>“No authority, accountability, or standing—no actor.”</h3><ul><li>Fluent negotiation can conceal a poor model of what the human actually wants.</li><li>Legal responsibility still lands on the person or institution that deploys the system.</li><li>Real markets contain fraud, recourse, identity, taxes, and obligations that benchmark tasks omit.</li></ul></article>
          </div>
        </section>

        <section className="dossier-verdict" aria-labelledby="actor-verdict-title">
          <div><span className="section-number">05</span><p className="kicker">Observatory assessment</p></div>
          <div><h2 id="actor-verdict-title">Agency is an envelope,<br /><em>not an on-off switch.</em></h2><p>Today&apos;s strongest systems can act as operators and bounded proxies. They become economic actors only inside a specific delegation envelope: who they represent, what they may commit, how long they may act, what can be reversed, and who answers when the outcome is wrong.</p><p>The practical threshold will arrive unevenly—first in digital markets with machine-readable rules, low reversibility costs, and strong audit trails; later where preferences are tacit and errors cannot be undone.</p></div>
          <div className="verdict-probability actor-verdict-mark"><strong>→</strong><span>tool · operator · proxy · actor</span><small>A continuum governed by authority and consequence</small></div>
        </section>

        <section className="dossier-sources" id="sources" aria-labelledby="actor-sources-title">
          <div><span className="section-number">06</span><p className="kicker">Evidence record</p><h2 id="actor-sources-title">Read the claims<br /><em>at their source.</em></h2></div>
          <div><p>Company research is useful evidence about observed systems, not a neutral verdict on economy-wide impact. The Observatory distinguishes reported findings from its own synthesis.</p>{citations.map((source) => <a href={source.href} key={source.href}><span>{source.publisher} · {source.date}</span><strong>{source.title}</strong><p>{source.note}</p></a>)}</div>
        </section>

        <section className="signup-band dossier-signup" aria-labelledby="actor-signup-title"><div><p className="kicker">The dossier changes when the evidence does</p><h2 id="actor-signup-title">Follow the<br /><em>delegation frontier.</em></h2><p>Receive new dossiers, forecast revisions, and the evidence that changed our mind.</p></div><SignupForm idPrefix="actor-signup" /></section>
      </article>
      <SiteFooter />
    </main>
  );
}
