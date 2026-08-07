"use client";

import { useMemo, useRef, useState } from "react";
import modelData from "../ai-intelligence-terminal-v2/data/models.json";
import SignupForm from "./SignupForm";
import { SiteFooter, SiteHeader } from "./SiteChrome";
import { revealRangeResult, revealResult } from "./interactionNavigation";

type ScoreKey = "reasoning" | "coding" | "agents" | "multimodal" | "efficiency";
type Model = (typeof modelData.models)[number];

const scoreLabels: Array<[string, ScoreKey]> = [
  ["Reason", "reasoning"],
  ["Code", "coding"],
  ["Agents", "agents"],
  ["Multi", "multimodal"],
  ["Efficiency", "efficiency"],
];

const essays = [
  {
    number: "001",
    date: "June 2026",
    title: "The Free Fall",
    finding: "AI inference costs fell 99.9% in under four years.",
    consequence: "Intelligence is moving from a scarce service toward ambient infrastructure.",
    href: "https://ashokmehan.com/essays/essay-001-the-free-fall.html",
    tag: "Economics",
  },
  {
    number: "004",
    date: "July 2026",
    title: "The Clock Speed Problem",
    finding: "Machines iterate at silicon speed; institutions respond at biological speed.",
    consequence: "The widening gap may matter more than any single model release.",
    href: "https://ashokmehan.com/essays/essay-004-the-clock-speed-problem.html",
    tag: "Institutions",
  },
  {
    number: "008",
    date: "July 2026",
    title: "The Refinery Problem",
    finding: "India generates one-fifth of training data but owns a fraction of the compute.",
    consequence: "The intelligence economy may repeat the resource asymmetries of the industrial age.",
    href: "https://ashokmehan.com/essays/essay-008-the-refinery-problem.html",
    tag: "Geopolitics",
  },
];

function formatContext(value?: number | null) {
  if (!value) return "—";
  if (value >= 1_000_000) return `${value / 1_000_000}M`;
  return `${Math.round(value / 1_000)}K`;
}

function formatDate(value: string) {
  return new Date(`${value}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function Home() {
  const models = modelData.models as Model[];
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string[]>([models[0].id, models[4].id]);
  const [machineSpeed, setMachineSpeed] = useState(1000);
  const modelTableRef = useRef<HTMLDivElement>(null);
  const comparisonRef = useRef<HTMLElement>(null);
  const machineResultRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return models;
    return models.filter((model) => JSON.stringify(model).toLowerCase().includes(needle));
  }, [models, query]);

  const compared = models.filter((model) => selected.includes(model.id));
  const latest = [...models].sort((a, b) => b.released.localeCompare(a.released))[0];
  const openModels = models.filter((model) => /open/i.test(model.access)).length;
  const millionModels = models.filter(
    (model) => (model.context || 0) >= 1_000_000 || (model.extended_context || 0) >= 1_000_000,
  ).length;
  const machineYears = Math.round((machineSpeed * 1) / 8.76) / 100;

  function toggleModel(id: string, reveal = false) {
    setSelected((current) => {
      if (current.includes(id)) return current.filter((item) => item !== id);
      if (current.length >= 3) return [...current.slice(1), id];
      return [...current, id];
    });
    if (reveal) revealResult(comparisonRef);
  }

  return (
    <main>
      <SiteHeader active="home" />

      <section className="hero" id="top">
        <div className="orbit orbit-one" aria-hidden="true" />
        <div className="orbit orbit-two" aria-hidden="true" />
        <div className="star-field" aria-hidden="true" />
        <p className="kicker">An instrument panel for the accelerating future</p>
        <h1>
          Observe the forces
          <span>reshaping intelligence.</span>
        </h1>
        <div className="hero-lower">
          <p className="hero-dek">
            The evidence behind <em>History&apos;s Future</em>—made visible, comparable, and alive.
            Track the systems, test the scales, then follow the argument back to the book.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#intelligence">Enter the Observatory</a>
            <a className="text-action" href="/singularity/">
              Begin at Event Horizon <span>→</span>
            </a>
          </div>
        </div>
        <div className="coordinate-line">
          <span>38.9072° N / 77.0369° W</span>
          <span>Field record 2026.07</span>
          <span className="signal"><i /> Observatory online</span>
        </div>
      </section>

      <section className="brief-band" aria-label="Current field briefing">
        <div className="section-number">01</div>
        <div className="brief-label"><span>Field briefing</span><time>Reviewed July 26, 2026</time></div>
        <h2>{latest.model} is the newest tracked frontier release.</h2>
        <p>
          {latest.company} leads the release tape as million-token context and long-horizon agents
          move from exceptional claims toward the expected frontier.
        </p>
        <a href="#intelligence" aria-label="Go to intelligence terminal">↓</a>
      </section>

      <section className="metrics" aria-label="Observatory indicators">
        <div><span>Models tracked</span><strong>{models.length.toString().padStart(2, "0")}</strong><small>Frontier systems</small></div>
        <div><span>Million-token models</span><strong>{millionModels.toString().padStart(2, "0")}</strong><small>Native or extended</small></div>
        <div><span>Open-linked</span><strong>{openModels.toString().padStart(2, "0")}</strong><small>Weights or repository</small></div>
        <div><span>Primary sources</span><strong>{modelData.meta.sources_checked.toString().padStart(2, "0")}</strong><small>Source-backed records</small></div>
      </section>

      <section className="forecast-home-band" aria-labelledby="forecast-home-title">
        <div><span className="section-number">New</span><p className="kicker">Forecast ledger / living record</p></div>
        <div><h2 id="forecast-home-title">What we expect.<br /><em>Where experts disagree.</em></h2><p>Six falsifiable forecasts place probability, deadlines, contrary evidence, and revision history on the same page.</p></div>
        <div className="forecast-home-links"><a href="/forecast-ledger/">Open the ledger <span>→</span></a><a href="/dossiers/week-of-work/">Read Dossier 01 <span>→</span></a></div>
      </section>

      <section className="section terminal-section" id="intelligence">
        <div className="section-heading">
          <div><span className="section-number">02</span><p className="kicker">Intelligence terminal</p></div>
          <div>
            <h2>Read the field,<br /><em>not the hype.</em></h2>
            <p>A source-backed monitor of frontier Chinese models and the capabilities that matter.</p>
            <a className="inline-route-link" href="/models/">Compare with the U.S. frontier <span>→</span></a>
            <a className="inline-route-link secondary-route-link" href="/space/">Enter the autonomous frontier <span>→</span></a>
          </div>
        </div>

        <div className="terminal-shell">
          <div className="terminal-topline">
            <span><i /> Live dataset</span>
            <span>{models.length} records / {modelData.meta.sources_checked} sources</span>
            <label>
              <span className="sr-only">Search models</span>
              <input value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") revealResult(modelTableRef, "start"); }} placeholder="Search models or strengths" />
            </label>
          </div>

          <div className="terminal-layout">
            <div className="model-table-wrap" ref={modelTableRef}>
              <div className="model-table-head">
                <span>Compare</span><span>Model / release</span><span>Context</span><span>Signal profile</span><span>Source</span>
              </div>
              <div className="model-table">
                {filtered.map((model) => {
                  const isSelected = selected.includes(model.id);
                  return (
                    <article className={isSelected ? "model-row selected" : "model-row"} key={model.id}>
                      <button
                        className="compare-toggle"
                        type="button"
                        aria-pressed={isSelected}
                        aria-label={`${isSelected ? "Remove" : "Add"} ${model.model} ${isSelected ? "from" : "to"} comparison`}
                        onClick={() => toggleModel(model.id, true)}
                      >
                        {isSelected ? "×" : "+"}
                      </button>
                      <div className="model-name"><strong>{model.model}</strong><small>{model.company} · {formatDate(model.released)}</small></div>
                      <div className="context-value"><strong>{formatContext(model.context || model.extended_context)}</strong><small>tokens</small></div>
                      <div className="signal-bars" aria-label={`${model.model} capability signals`}>
                        {scoreLabels.map(([label, key]) => (
                          <div key={key}><span>{label}</span><i><b style={{ width: `${model.scores[key]}%` }} /></i><em>{model.scores[key]}</em></div>
                        ))}
                      </div>
                      <a href={model.source} aria-label={`Open primary source for ${model.model}; use Back to return to Mehan Observatory`} />
                    </article>
                  );
                })}
              </div>
            </div>

            <aside className="comparison-panel" ref={comparisonRef} aria-live="polite">
              <div className="comparison-head"><span>Comparison tray</span><strong>{compared.length} / 3</strong></div>
              {compared.map((model) => (
                <article className="compare-card" key={model.id}>
                  <button type="button" onClick={() => toggleModel(model.id)} aria-label={`Remove ${model.model}`}>×</button>
                  <p>{model.company}</p>
                  <h3>{model.model}</h3>
                  <div className="score-grid">
                    {scoreLabels.map(([label, key]) => <div key={key}><strong>{model.scores[key]}</strong><span>{label}</span></div>)}
                  </div>
                </article>
              ))}
              {!compared.length && <p className="empty-state">Select up to three models to compare their editorial capability signals.</p>}
              <p className="method-note">Scores are directional editorial signals, not a standardized benchmark composite.</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section ledger-section" id="ledger">
        <div className="section-heading ledger-heading">
          <div><span className="section-number">03</span><p className="kicker">Acceleration ledger</p></div>
          <div><h2>Claims that keep<br /><em>moving after publication.</em></h2></div>
        </div>
        <div className="ledger-list">
          {essays.map((essay) => (
            <a className="ledger-entry has-external-icon" key={essay.number} href={essay.href}>
              <span className="entry-number">{essay.number}</span>
              <div className="entry-meta"><span>{essay.tag}</span><time>{essay.date}</time></div>
              <div><h3>{essay.title}</h3><p>{essay.finding}</p></div>
              <p className="consequence">{essay.consequence}</p>
              <span className="entry-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section lab-section" id="laboratory">
        <div className="section-heading lab-heading">
          <div><span className="section-number">04</span><p className="kicker">Scale laboratory</p></div>
          <div><h2>Biological time.<br /><em>Silicon time.</em></h2><p>Move the control to feel the clock-speed gap described in the book.</p></div>
        </div>
        <div className="lab-card">
          <div className="lab-control">
            <label htmlFor="speed">Machine work rate <strong>{machineSpeed.toLocaleString()}× human speed</strong></label>
            <input
              id="speed"
              type="range"
              min="10"
              max="100000"
              step="10"
              value={machineSpeed}
              onChange={(event) => setMachineSpeed(Number(event.target.value))}
              onPointerUp={() => revealResult(machineResultRef)}
              onKeyUp={(event) => revealRangeResult(event, machineResultRef)}
            />
            <div className="range-labels"><span>10×</span><span>100,000×</span></div>
          </div>
          <div className="time-comparison">
            <div><span>One human workday</span><strong>8</strong><small>hours</small></div>
            <div className="equals">becomes</div>
            <div className="machine-result" ref={machineResultRef} aria-live="polite"><span>Equivalent machine work</span><strong>{machineYears.toLocaleString()}</strong><small>human-years</small></div>
          </div>
          <p className="lab-caption">
            A scale model, not a forecast. It reveals why institutions built around meetings, terms, and annual budgets struggle to govern systems that can iterate thousands of times faster.
          </p>
          <a href="https://ashokmehan.com/essays/essay-004-the-clock-speed-problem.html">
            Read “The Clock Speed Problem”
          </a>
        </div>
      </section>

      <section className="book-bridge history-future-section">
        <p className="kicker">From the manuscript / History&apos;s Future</p>
        <h2>From the birth of the universe<br />to the birth of artificial intelligence.</h2>
        <p>The Observatory measures the change. <em>History&apos;s Future</em> tells the larger story—and these manuscript op-eds test its most provocative ideas in public.</p>
        <div className="history-future-links">
          <a className="primary-action light" href="https://ashokmehan.com/">Explore the book</a>
          <a className="text-action light-text" href="https://ashokmehan.com/essays/">Read manuscript excerpts &amp; op-eds</a>
          <a className="text-action light-text" href="https://ashokmehan.com/mehan-dispatch/dispatch-index.html">Read the Mehan Dispatch</a>
        </div>
      </section>

      <section className="signup-band" aria-labelledby="signup-title">
        <div>
          <p className="kicker">Observatory field notes</p>
          <h2 id="signup-title">Follow what changes<br /><em>between editions.</em></h2>
          <p>Occasional updates on frontier models, autonomous systems, manuscript arguments, and new evidence added to the Observatory.</p>
        </div>
        <SignupForm />
      </section>

      <SiteFooter />
    </main>
  );
}
