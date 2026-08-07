"use client";

import { useMemo, useRef, useState } from "react";
import { revealRangeResult, revealResult } from "../../interactionNavigation";

const horizons = [
  { label: "GPT-4o", date: "May 2024", p50: 0.1, p80: 0.05, note: "6 min at 50%" },
  { label: "Claude Opus 4.5", date: "Nov 2025", p50: 5.3, p80: 1.1, note: "5.3 h at 50%" },
  { label: "Public frontier", date: "Feb–Mar 2026", p50: 12, p80: 1.5, note: "12 h at 50%" },
  { label: "F-01 threshold", date: "by Dec 2028", p50: 40, p80: 40, note: "40 h at 80%" },
];

const messinessStates = [
  { max: 20, hours: 12, title: "Bounded benchmark", text: "Clear goal, stable environment, automatic scoring, little coordination." },
  { max: 45, hours: 8, title: "Well-specified assignment", text: "A human writes the brief and success criteria; tools and files are available." },
  { max: 70, hours: 4, title: "Ordinary project", text: "Some ambiguity, dependencies, judgment calls, and incomplete context." },
  { max: 90, hours: 2, title: "Changing workplace", text: "Requirements move, people respond late, and success is partly qualitative." },
  { max: 100, hours: .75, title: "Consequential open world", text: "Unclear goals, high error cost, shifting conditions, and no clean score." },
];

export default function DossierInteractive() {
  const [reliability, setReliability] = useState<50 | 80>(80);
  const [messiness, setMessiness] = useState(35);
  const horizonChartRef = useRef<HTMLDivElement>(null);
  const messinessReadoutRef = useRef<HTMLDivElement>(null);
  const state = useMemo(() => messinessStates.find((item) => messiness <= item.max) || messinessStates.at(-1)!, [messiness]);

  return <>
    <section className="dossier-horizon" id="instrument" aria-labelledby="horizon-title">
      <div className="dossier-section-heading"><span className="section-number">02</span><div><p className="kicker">The measured horizon</p><h2 id="horizon-title">How long can<br /><em>an agent keep going?</em></h2><p>METR defines a task horizon by how long the task takes a human expert—not by how long the model runs. Change the reliability standard to see why one headline number is not enough.</p></div></div>
      <div className="reliability-control" role="group" aria-label="Choose reliability threshold"><span>Required success rate</span>{([50, 80] as const).map((value) => <button type="button" className={reliability === value ? "active" : ""} aria-pressed={reliability === value} onClick={() => { setReliability(value); revealResult(horizonChartRef, "start"); }} key={value}>{value}%</button>)}</div>
      <div className="horizon-chart" ref={horizonChartRef} aria-live="polite" aria-label={`Task completion horizons at ${reliability}% reliability`}>
        <div className="horizon-axis" aria-hidden="true"><span>6 min</span><span>1 h</span><span>4 h</span><span>12 h</span><span>40 h / week</span></div>
        {horizons.map((item) => {
          const hours = reliability === 50 ? item.p50 : item.p80;
          const width = Math.max(2.5, Math.log10(hours * 10 + 1) / Math.log10(401) * 100);
          return <div className={`horizon-row ${item.label === "F-01 threshold" ? "threshold" : ""}`} key={item.label}><div><strong>{item.label}</strong><span>{item.date}</span></div><div><i style={{ width: `${width}%` }} /><b>{hours < 1 ? `${Math.round(hours * 60)} min` : `${hours} h`}</b></div></div>;
        })}
      </div>
      <p className="method-note"><strong>Read carefully:</strong> the 2026 frontier values are approximate. Historical 80% figures are visual estimates from METR&apos;s published curves, included for context. F-01 is the Observatory&apos;s threshold, not a measured result. The horizontal scale is logarithmic.</p>
    </section>

    <section className="messiness-lab" aria-labelledby="messiness-title">
      <div><span className="section-number">03</span><p className="kicker">The messiness test</p><h2 id="messiness-title">Move from a test<br /><em>into the world.</em></h2><p>This explanatory model is not a reported benchmark. It reveals which assumptions disappear when “task completion” becomes “useful work.”</p></div>
      <div className="messiness-console">
        <label htmlFor="messiness"><span>Workplace messiness</span><strong>{messiness}<small>/100</small></strong></label>
        <input id="messiness" type="range" min="0" max="100" value={messiness} onChange={(event) => setMessiness(Number(event.target.value))} onPointerUp={() => revealResult(messinessReadoutRef)} onKeyUp={(event) => revealRangeResult(event, messinessReadoutRef)} />
        <div className="messiness-ticks" aria-hidden="true"><span>Specified</span><span>Ambiguous</span><span>Open world</span></div>
        <div className="messiness-readout" ref={messinessReadoutRef} aria-live="polite"><div><span>Illustrative dependable horizon</span><strong>{state.hours < 1 ? `${state.hours * 60} min` : `${state.hours} h`}</strong></div><div><h3>{state.title}</h3><p>{state.text}</p></div></div>
        <ul><li className={messiness > 20 ? "on" : ""}>Incomplete specification</li><li className={messiness > 40 ? "on" : ""}>Human dependencies</li><li className={messiness > 60 ? "on" : ""}>Changing requirements</li><li className={messiness > 80 ? "on" : ""}>Consequential errors</li></ul>
      </div>
    </section>
  </>;
}
