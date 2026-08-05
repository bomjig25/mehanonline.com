import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "U.S. vs China Frontier AI Models — Mehan Observatory",
  description:
    "A source-backed comparison of the leading American and Chinese frontier AI models, viewed through capability, access, and strategic significance.",
  alternates: { canonical: "/models/" },
  openGraph: {
    title: "The Frontier Field: U.S. vs China",
    description: "Eight systems. Two ecosystems. One accelerating intelligence frontier.",
    url: "https://mehanonline.com/models/",
  },
};

type FrontierModel = {
  model: string;
  maker: string;
  status: string;
  role: string;
  strength: string;
  watch: string;
  source: string;
  sourceLabel: string;
};

const usModels: FrontierModel[] = [
  {
    model: "GPT-5.6 Sol",
    maker: "OpenAI",
    status: "Frontier API",
    role: "Complex professional work",
    strength: "Reasoning, coding, and tool-driven work across a 1.05M-token context window.",
    watch: "Whether a tiered Sol / Terra / Luna family becomes the standard way frontier intelligence is packaged.",
    source: "https://platform.openai.com/docs/models/gpt-5.6-sol",
    sourceLabel: "OpenAI model documentation",
  },
  {
    model: "Claude Opus 5",
    maker: "Anthropic",
    status: "Frontier API",
    role: "Agentic coding and enterprise work",
    strength: "Long-horizon execution, complex coding, and high-stakes knowledge workflows.",
    watch: "How quickly capable agents move from coding environments into general enterprise operations.",
    source: "https://docs.anthropic.com/en/docs/about-claude/models/overview",
    sourceLabel: "Anthropic model overview",
  },
  {
    model: "Gemini 3.1 Pro",
    maker: "Google DeepMind",
    status: "Preview",
    role: "Multimodal problem solving",
    strength: "Advanced intelligence, complex problem solving, agentic work, and multimodal reach.",
    watch: "The advantage created when a frontier model is distributed through search, cloud, devices, and productivity software.",
    source: "https://ai.google.dev/gemini-api/docs/models/gemini-3.1-pro-preview",
    sourceLabel: "Google Gemini model documentation",
  },
  {
    model: "Grok 4.5",
    maker: "xAI",
    status: "Frontier API",
    role: "Fast general intelligence",
    strength: "General reasoning and code with an emphasis on speed and current-world interaction.",
    watch: "Whether real-time distribution and a rapidly iterating model family create a distinct frontier advantage.",
    source: "https://docs.x.ai/developers/grok-4-5",
    sourceLabel: "xAI model documentation",
  },
];

const chinaModels: FrontierModel[] = [
  {
    model: "Kimi K3",
    maker: "Moonshot AI",
    status: "API · open weights announced",
    role: "Long-horizon multimodal agents",
    strength: "Million-token context, configurable reasoning, coding, tools, and native multimodality.",
    watch: "Whether an open-linked flagship can compress the gap between frontier access and frontier ownership.",
    source: "https://platform.moonshot.ai/docs/guide/kimi-k3-quickstart",
    sourceLabel: "Moonshot AI documentation",
  },
  {
    model: "GLM-5.2",
    maker: "Z.ai / Zhipu AI",
    status: "Hosted API",
    role: "Repository-scale agents",
    strength: "Long-horizon tasks, coding agents, tool use, and a million-token context window.",
    watch: "The pace at which Chinese coding systems become credible alternatives for global developer workflows.",
    source: "https://z.ai/blog/glm-5.2",
    sourceLabel: "Z.ai official announcement",
  },
  {
    model: "MiniMax M3",
    maker: "MiniMax",
    status: "Hosted API",
    role: "Native multimodal work",
    strength: "Text, image, video, computer use, long context, and agentic execution in one system.",
    watch: "Whether multimodal breadth becomes a stronger competitive lever than benchmark leadership alone.",
    source: "https://www.minimax.io/blog/minimax-m3",
    sourceLabel: "MiniMax official announcement",
  },
  {
    model: "DeepSeek V4 Pro",
    maker: "DeepSeek",
    status: "API · open weights preview",
    role: "Efficient reasoning and code",
    strength: "A mixture-of-experts architecture aimed at reasoning, coding, tools, and long context.",
    watch: "How open access and inference economics reshape the strategic meaning of a frontier release.",
    source: "https://api-docs.deepseek.com/news/news260424/",
    sourceLabel: "DeepSeek official release",
  },
];

const findings = [
  {
    number: "01",
    title: "Capability is converging.",
    text: "The frontier is no longer a single-country leaderboard. Reasoning, code, agents, and long context now appear across both ecosystems.",
  },
  {
    number: "02",
    title: "Distribution is diverging.",
    text: "American labs hold powerful cloud and consumer channels. Chinese labs are testing a wider mix of hosted access, open weights, and cost pressure.",
  },
  {
    number: "03",
    title: "The unit of competition is changing.",
    text: "A model matters less in isolation than the tools, compute, data, developers, and institutions that can turn it into deployed intelligence.",
  },
];

function ModelCard({ model, index, region }: { model: FrontierModel; index: number; region: "U.S." | "China" }) {
  return (
    <article className="frontier-card">
      <div className="frontier-card-top">
        <span>{region} / {(index + 1).toString().padStart(2, "0")}</span>
        <span>{model.status}</span>
      </div>
      <p className="frontier-maker">{model.maker}</p>
      <h3>{model.model}</h3>
      <dl>
        <div><dt>Primary role</dt><dd>{model.role}</dd></div>
        <div><dt>Frontier signal</dt><dd>{model.strength}</dd></div>
        <div><dt>Watch next</dt><dd>{model.watch}</dd></div>
      </dl>
      <a href={model.source} target="_blank" rel="noreferrer">{model.sourceLabel} <span>↗</span></a>
    </article>
  );
}

export default function ModelsPage() {
  return (
    <main className="frontier-page">
      <header className="site-header">
        <a className="wordmark" href="/" aria-label="Mehan Observatory home">
          <span className="mark">MO</span>
          <span>Mehan Observatory</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="/singularity/">Event Horizon</a>
          <a className="active" href="/models/">U.S. vs China</a>
          <a href="/#intelligence">China monitor</a>
          <a href="/#ledger">Ledger</a>
          <a href="/#laboratory">Laboratory</a>
        </nav>
        <a className="book-link" href="https://ashokmehan.com/">
          History&apos;s Future <span>↗</span>
        </a>
      </header>

      <section className="frontier-hero">
        <div className="frontier-grid" aria-hidden="true" />
        <div className="frontier-hero-copy">
          <p className="kicker">Frontier field / United States + China</p>
          <h1>The frontier has<br /><em>two horizons.</em></h1>
          <p>
            Eight systems. Two ecosystems. One accelerating contest over who can build,
            distribute, and govern the next layer of intelligence.
          </p>
        </div>
        <div className="frontier-stamp">
          <span>Field record</span>
          <strong>2026.08</strong>
          <small>Reviewed August 3, 2026</small>
        </div>
      </section>

      <section className="frontier-intro">
        <span className="section-number">01</span>
        <p className="kicker">Comparative scan</p>
        <h2>Not a horse race.<br />A map of <em>strategic difference.</em></h2>
        <p className="frontier-intro-note">
          This field record compares stated capabilities and ecosystem position. It does not turn
          incompatible benchmarks into a false universal ranking.
        </p>
      </section>

      <section className="frontier-columns" aria-label="U.S. and Chinese frontier models">
        <div className="frontier-column us-column">
          <div className="column-heading"><span>United States</span><strong>04 systems</strong></div>
          {usModels.map((model, index) => <ModelCard key={model.model} model={model} index={index} region="U.S." />)}
        </div>
        <div className="frontier-column china-column">
          <div className="column-heading"><span>China</span><strong>04 systems</strong></div>
          {chinaModels.map((model, index) => <ModelCard key={model.model} model={model} index={index} region="China" />)}
        </div>
      </section>

      <section className="field-findings">
        <div className="field-findings-heading">
          <span className="section-number">02</span>
          <p className="kicker">What the field says</p>
          <h2>Three signals<br /><em>behind the releases.</em></h2>
        </div>
        <div className="finding-list">
          {findings.map((finding) => (
            <article key={finding.number}>
              <span>{finding.number}</span>
              <h3>{finding.title}</h3>
              <p>{finding.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="observatory-watchlist" id="watchlist">
        <div>
          <span className="section-number">03</span>
          <p className="kicker">Observatory watchlist</p>
        </div>
        <div>
          <h2>What changes<br /><em>this map next?</em></h2>
          <ul>
            <li><span>01</span> Agents that reliably complete work measured in days, not minutes.</li>
            <li><span>02</span> Open models that approach the best closed systems at lower operating cost.</li>
            <li><span>03</span> Multimodal systems that act fluently across screens, devices, and physical environments.</li>
            <li><span>04</span> Export controls, energy constraints, and compute supply becoming visible in capability.</li>
          </ul>
        </div>
      </section>

      <section className="methodology-band">
        <div><span className="signal"><i /> Sources checked</span><strong>08</strong></div>
        <p>
          Model descriptions are drawn from official documentation and company announcements.
          Interpretation is editorial and will change as releases, access, and evidence change.
        </p>
        <a href="/#intelligence">Open the China model terminal <span>→</span></a>
      </section>

      <section className="book-bridge frontier-book-bridge">
        <p className="kicker">Follow the larger argument</p>
        <h2>The models are the instruments.<br />The future is the subject.</h2>
        <p><em>History&apos;s Future</em> places this technological race inside the longer human story.</p>
        <div>
          <a className="primary-action light" href="https://ashokmehan.com/">Explore the book ↗</a>
          <a className="text-action light-text" href="/">Return to the Observatory →</a>
        </div>
      </section>

      <footer>
        <div><span className="mark">MO</span><strong>Mehan Observatory</strong></div>
        <p>An independent companion to <em>History&apos;s Future: The Singularity Is Here.</em></p>
        <div className="footer-links"><a href="/">Observatory</a><a href="/singularity/">Event Horizon</a><a href="https://ashokmehan.com/essays/">Essays</a><a href="https://ashokmehan.com/contact.html">Contact</a></div>
        <small>© 2026 Ashok Mehan · Washington, D.C.</small>
      </footer>
    </main>
  );
}
