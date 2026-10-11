"use client";

import { useMemo, useRef, useState } from "react";
import { revealRangeResult, revealResult } from "../../interactionNavigation";

const dimensions = [
  { key: "preference", label: "Preference fidelity", low: "Guesses", high: "Represents intent" },
  { key: "authority", label: "Delegated authority", low: "Advises", high: "Can commit" },
  { key: "persistence", label: "Persistence", low: "One turn", high: "Across time" },
  { key: "consequence", label: "Market consequence", low: "Simulation", high: "Real stakes" },
  { key: "accountability", label: "Auditability", low: "Opaque", high: "Traceable" },
] as const;

type DimensionKey = (typeof dimensions)[number]["key"];
type Scores = Record<DimensionKey, number>;

function classify(score: number, authority: number, consequence: number) {
  if (score >= 76 && authority >= 65 && consequence >= 65) return { name: "Economic actor", note: "The system can represent intent, commit resources, persist, and create consequences. Governance can no longer treat it as a mere interface." };
  if (score >= 58 && authority >= 45) return { name: "Proxy", note: "The system can act for someone within a bounded envelope, but its authority or real-world consequence remains constrained." };
  if (score >= 36) return { name: "Operator", note: "The system completes multi-step work, yet a human still owns the consequential decision and market commitment." };
  return { name: "Assistant", note: "The system supplies analysis or options. It does not independently bind a principal or create durable economic consequences." };
}

export default function EconomicActorInstrument() {
  const [scores, setScores] = useState<Scores>({ preference: 55, authority: 25, persistence: 65, consequence: 20, accountability: 50 });
  const resultRef = useRef<HTMLDivElement>(null);
  const score = Math.round(Object.values(scores).reduce((sum, value) => sum + value, 0) / dimensions.length);
  const result = useMemo(() => classify(score, scores.authority, scores.consequence), [score, scores.authority, scores.consequence]);

  function update(key: DimensionKey, value: number) {
    setScores((current) => ({ ...current, [key]: value }));
  }

  return (
    <section className="actor-instrument" id="instrument" aria-labelledby="actor-instrument-title">
      <div className="dossier-section-heading"><span className="section-number">02</span><div><p className="kicker">The delegation threshold</p><h2 id="actor-instrument-title">Build an agent.<br /><em>Watch its status change.</em></h2><p>Move the five controls. The classification is an explanatory model—not a legal test or scientific scale. Its purpose is to expose which ingredients people quietly bundle into the phrase “economic actor.”</p></div></div>
      <div className="actor-console">
        <div className="actor-controls">
          {dimensions.map((dimension) => (
            <div className="actor-control" key={dimension.key}>
              <label htmlFor={`actor-${dimension.key}`}><span>{dimension.label}</span><strong>{scores[dimension.key]}</strong></label>
              <input id={`actor-${dimension.key}`} type="range" min="0" max="100" value={scores[dimension.key]} onChange={(event) => update(dimension.key, Number(event.target.value))} onPointerUp={() => revealResult(resultRef)} onKeyUp={(event) => revealRangeResult(event, resultRef)} />
              <div><span>{dimension.low}</span><span>{dimension.high}</span></div>
            </div>
          ))}
        </div>
        <div className="actor-readout" ref={resultRef} aria-live="polite">
          <span>Current classification</span><strong>{result.name}</strong><div className="actor-gauge" aria-hidden="true"><i style={{ width: `${score}%` }} /></div><b>{score} / 100</b><p>{result.note}</p>
          <small>Authority and consequence are gates: high general capability alone cannot produce the final classification.</small>
        </div>
      </div>
    </section>
  );
}
