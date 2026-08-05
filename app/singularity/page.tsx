import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beyond the Event Horizon — Mehan Observatory",
  description:
    "A field guide to the technological singularity: the observed trajectory, the threshold signals, the possible futures, and the questions that remain open.",
  alternates: { canonical: "/singularity/" },
  openGraph: {
    title: "Beyond the Event Horizon — Mehan Observatory",
    description: "Progress is real. The endpoint is not.",
    url: "https://mehanonline.com/singularity/",
    images: [
      {
        url: "https://mehanonline.com/event-horizon-og.png",
        width: 1792,
        height: 896,
        alt: "Beyond the Event Horizon — Mehan Observatory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond the Event Horizon — Mehan Observatory",
    description: "Progress is real. The endpoint is not.",
    images: ["https://mehanonline.com/event-horizon-og.png"],
  },
};

const milestones = [
  {
    year: "1956",
    title: "Artificial intelligence named",
    text: "The Dartmouth workshop gives a new field its enduring name.",
  },
  {
    year: "2012",
    title: "Deep learning breaks through",
    text: "Large neural networks transform computer vision and pattern recognition.",
  },
  {
    year: "2022",
    title: "General-purpose models arrive",
    text: "Language models become useful across writing, code, analysis, and research.",
  },
  {
    year: "?",
    title: "The recursive threshold",
    text: "Could AI materially accelerate the design of more capable AI? The date is unknown.",
  },
];

const thresholdSignals = [
  "Systems perform a broad range of cognitive work.",
  "AI materially improves AI research and development.",
  "Each generation helps produce a more capable successor.",
  "Economic and social change outpaces adaptation.",
];

const futures = [
  {
    number: "01",
    status: "Plausible now",
    title: "Acceleration",
    text: "AI systems amplify research and engineering, compressing years of progress into months.",
  },
  {
    number: "02",
    status: "Direction uncertain",
    title: "Transformation",
    text: "Automation reshapes work, institutions, abundance, and the distribution of power.",
  },
  {
    number: "03",
    status: "Highly speculative",
    title: "Discontinuity",
    text: "Recursive improvement produces change too fast for ordinary forecasting to track.",
  },
];

const questions = [
  {
    question: "Will scaling alone produce general intelligence?",
    answer:
      "No consensus exists. Current systems show surprising generality, but reliability, reasoning, data, energy, and architecture may impose limits.",
  },
  {
    question: "Can intelligence improve itself recursively?",
    answer:
      "AI already helps researchers write code, generate hypotheses, and evaluate designs. Whether that becomes a sustained, self-reinforcing cycle remains an open empirical question.",
  },
  {
    question: "Would greater intelligence guarantee better outcomes?",
    answer:
      "No. Capability and judgment are different things. Outcomes will depend on objectives, institutions, access, incentives, and the ability to govern systems under pressure.",
  },
];

const doorways = [
  {
    number: "01",
    label: "Live evidence",
    title: "Intelligence terminal",
    text: "Track frontier Chinese systems and compare the capability signals behind the claims.",
    href: "/#intelligence",
  },
  {
    number: "02",
    label: "Strategic map",
    title: "U.S. vs China",
    text: "Read the frontier as two ecosystems, not a single benchmark leaderboard.",
    href: "/models/",
  },
  {
    number: "03",
    label: "Moving record",
    title: "Acceleration Ledger",
    text: "Follow claims from the essays as the evidence changes after publication.",
    href: "/#ledger",
  },
  {
    number: "04",
    label: "Scale experiment",
    title: "Biological time. Silicon time.",
    text: "Feel the clock-speed gap between machine iteration and institutional response.",
    href: "/#laboratory",
  },
  {
    number: "05",
    label: "Physical frontier",
    title: "The Autonomous Frontier",
    text: "See why distance forces intelligence to move from Earth into the machine.",
    href: "/space/",
  },
];

export default function SingularityPage() {
  return (
    <main className="horizon-page">
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Mehan Observatory home">
          <span className="mark">MO</span>
          <span>Mehan Observatory</span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link className="active" href="/singularity/">Event Horizon</Link>
          <Link href="/models/">U.S. vs China</Link>
          <Link href="/space/">Space frontier</Link>
          <Link href="/#intelligence">Live terminal</Link>
          <Link href="/#laboratory">Laboratory</Link>
        </nav>
        <a className="book-link" href="https://ashokmehan.com/">
          History&apos;s Future <span>↗</span>
        </a>
      </header>

      <section className="horizon-hero" id="top">
        <div className="horizon-grid" aria-hidden="true" />
        <div className="horizon-orbit horizon-orbit-one" aria-hidden="true" />
        <div className="horizon-orbit horizon-orbit-two" aria-hidden="true" />
        <p className="kicker">Mehan Observatory / Field Guide 01</p>
        <div className="horizon-hero-copy">
          <h1>Beyond the<br /><em>event horizon.</em></h1>
          <p>
            Artificial intelligence is advancing quickly. A technological singularity—the point
            beyond which change becomes difficult to predict—remains a hypothesis, not a scheduled event.
          </p>
          <div className="horizon-actions">
            <a className="primary-action" href="#trajectory">Explore the trajectory →</a>
            <a className="text-action" href="#questions">What do experts disagree on?</a>
          </div>
        </div>
        <div className="horizon-observations">
          <article><span>01</span><p>Observed</p><strong>Compute, data, and model capability continue to compound.</strong></article>
          <article><span>02</span><p>At stake</p><strong>Who steers powerful systems, and toward whose values?</strong></article>
        </div>
      </section>

      <section className="horizon-section horizon-trajectory" id="trajectory">
        <div className="horizon-section-heading">
          <div><span className="section-number">01</span><p className="kicker">The trajectory</p></div>
          <div>
            <h2>Progress is real.<br /><em>The endpoint is not.</em></h2>
            <p>AI capability has advanced through a series of discontinuities, but extrapolation is not evidence. These milestones describe history; the final one is an open question.</p>
          </div>
        </div>
        <div className="horizon-timeline">
          {milestones.map((milestone) => (
            <article key={milestone.year + milestone.title}>
              <span>{milestone.year}</span>
              <h3>{milestone.title}</h3>
              <p>{milestone.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="horizon-section horizon-threshold">
        <div className="horizon-section-heading">
          <div><span className="section-number">02</span><p className="kicker">The threshold</p></div>
          <div>
            <h2>What would make it<br /><em>a singularity?</em></h2>
            <p>The idea is not merely that computers become very capable. It is that technological change becomes self-reinforcing and so rapid that predictions made from today&apos;s world stop being dependable.</p>
          </div>
        </div>
        <ol className="threshold-list">
          {thresholdSignals.map((signal, index) => <li key={signal}><span>{String(index + 1).padStart(2, "0")}</span>{signal}</li>)}
        </ol>
      </section>

      <section className="horizon-section horizon-futures">
        <div className="horizon-section-heading">
          <div><span className="section-number">03</span><p className="kicker">Three possible futures</p></div>
          <div><h2>One technology.<br /><em>Many trajectories.</em></h2></div>
        </div>
        <div className="future-grid">
          {futures.map((future) => (
            <article key={future.number}>
              <div><span>{future.number}</span><small>{future.status}</small></div>
              <h3>{future.title}</h3>
              <p>{future.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="horizon-section horizon-questions" id="questions">
        <div className="horizon-section-heading">
          <div><span className="section-number">04</span><p className="kicker">The honest questions</p></div>
          <div><h2>Certainty is<br /><em>the wrong standard.</em></h2></div>
        </div>
        <div className="question-list">
          {questions.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.question}<i>+</i></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="horizon-section horizon-doorways">
        <div className="horizon-section-heading">
          <div><span className="section-number">05</span><p className="kicker">From idea to evidence</p></div>
          <div>
            <h2>The question opens.<br /><em>The Observatory measures.</em></h2>
            <p>Event Horizon is the conceptual doorway. These live instruments show what is changing now.</p>
          </div>
        </div>
        <div className="doorway-grid">
          {doorways.map((doorway) => (
            <Link href={doorway.href} key={doorway.number}>
              <div><span>{doorway.number}</span><small>{doorway.label}</small></div>
              <h3>{doorway.title}</h3>
              <p>{doorway.text}</p>
              <b>Enter →</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="book-bridge horizon-book-bridge">
        <p className="kicker">The longer human story</p>
        <h2>The horizon is a question.<br />The future is a responsibility.</h2>
        <p><em>History&apos;s Future</em> places artificial intelligence inside the full arc of human development.</p>
        <div>
          <a className="primary-action light" href="https://ashokmehan.com/">Explore the book ↗</a>
          <Link className="text-action light-text" href="/">Return to the Observatory →</Link>
        </div>
      </section>

      <footer>
        <div><span className="mark">MO</span><strong>Mehan Observatory</strong></div>
        <p>An independent companion to <em>History&apos;s Future: The Singularity Is Here.</em></p>
        <div className="footer-links"><Link href="/">Observatory</Link><Link href="/models/">U.S. vs China</Link><a href="https://ashokmehan.com/essays/">Essays</a><a href="https://ashokmehan.com/contact.html">Contact</a></div>
        <small>© 2026 Ashok Mehan · Washington, D.C.</small>
      </footer>
    </main>
  );
}
