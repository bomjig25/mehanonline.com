"use client";

import { useMemo, useRef, useState } from "react";
import SignupForm from "../SignupForm";
import { revealRangeResult, revealResult } from "../interactionNavigation";
import { forecasts, sources, type ForecastDomain } from "./forecastData";

const domains: Array<"All" | ForecastDomain> = ["All", "Capability", "Science", "Economics", "Geopolitics", "Institutions", "Autonomy"];
const minYear = 2027;
const maxYear = 2030;

export default function ForecastLedger() {
  const [domain, setDomain] = useState<(typeof domains)[number]>("All");
  const [selectedId, setSelectedId] = useState(forecasts[0].id);
  const [readerEstimate, setReaderEstimate] = useState(forecasts[0].probability);
  const forecastReadoutRef = useRef<HTMLDivElement>(null);
  const readerDifferenceRef = useRef<HTMLDivElement>(null);

  const visible = useMemo(
    () => domain === "All" ? forecasts : forecasts.filter((forecast) => forecast.domain === domain),
    [domain],
  );
  const selected = forecasts.find((forecast) => forecast.id === selectedId) || visible[0] || forecasts[0];
  const selectedSources = sources.filter((source) => selected.sources.includes(source.id));

  function selectForecast(id: string) {
    const forecast = forecasts.find((item) => item.id === id);
    if (!forecast) return;
    setSelectedId(id);
    setReaderEstimate(forecast.probability);
    revealResult(forecastReadoutRef, "start");
  }

  function filterDomain(nextDomain: (typeof domains)[number]) {
    setDomain(nextDomain);
    const first = nextDomain === "All" ? forecasts[0] : forecasts.find((forecast) => forecast.domain === nextDomain);
    if (first) selectForecast(first.id);
  }

  const delta = readerEstimate - selected.probability;

  return (
    <>
      <section className="forecast-instrument" aria-labelledby="forecast-instrument-title">
        <div className="forecast-heading">
          <div><span className="section-number">01</span><p className="kicker">The probability field</p></div>
          <div>
            <h2 id="forecast-instrument-title">What we expect.<br /><em>When we expect it.</em></h2>
            <p>Select a point to open its evidence and disagreement record. Probabilities are Mehan Observatory editorial judgments—not scientific consensus.</p>
          </div>
        </div>

        <div className="forecast-filters" role="group" aria-label="Filter forecasts by domain">
          {domains.map((item) => <button type="button" className={domain === item ? "active" : ""} aria-pressed={domain === item} onClick={() => filterDomain(item)} key={item}>{item}</button>)}
        </div>

        <div className="probability-chart" aria-label="Forecast probability by target year">
          <div className="probability-y-axis" aria-hidden="true"><span>100%</span><span>75</span><span>50</span><span>25</span><span>0</span></div>
          <div className="probability-field">
            {[25, 50, 75].map((value) => <i className="probability-gridline" style={{ bottom: `${value}%` }} key={value} />)}
            {visible.map((forecast) => {
              const left = ((forecast.horizon - minYear) / (maxYear - minYear)) * 100;
              return <button
                type="button"
                className={`forecast-point ${selected.id === forecast.id ? "selected" : ""}`}
                style={{ left: `clamp(2%, ${left}%, 98%)`, bottom: `${forecast.probability}%` }}
                onClick={() => selectForecast(forecast.id)}
                aria-label={`${forecast.title}: ${forecast.probability}% probability by ${forecast.horizon}`}
                aria-pressed={selected.id === forecast.id}
                key={forecast.id}
              ><b>{forecast.probability}</b><span>{forecast.number}</span></button>;
            })}
            <div className="probability-x-axis" aria-hidden="true">{[2027, 2028, 2029, 2030].map((year) => <span key={year}>{year}</span>)}</div>
          </div>
        </div>

        <div className="forecast-readout" ref={forecastReadoutRef} aria-live="polite">
          <div className="readout-summary">
            <div><span>{selected.number} / {selected.domain}</span><small>{selected.status} · review {selected.review}</small></div>
            <strong>{selected.probability}<sup>%</sup></strong>
            <h3>{selected.title}</h3>
            <p>{selected.proposition}</p>
            <div className="forecast-change"><span>Prior assessment</span><b>{selected.previousProbability}%</b><i>→</i><span>Current</span><b>{selected.probability}%</b></div>
            {selected.id === "week-of-work" && <a className="forecast-dossier-link" href="/dossiers/week-of-work/">Read Disagreement Dossier 01 →</a>}
          </div>
          <div className="readout-explainer">
            <span>In plain language</span>
            <p>{selected.plainLanguage}</p>
          </div>
        </div>
      </section>

      <section className="disagreement-map" aria-labelledby="disagreement-title">
        <div className="disagreement-heading">
          <div><span className="section-number">02</span><p className="kicker">The disagreement map</p></div>
          <div><h2 id="disagreement-title">The same evidence.<br /><em>Two different futures.</em></h2><p>A forecast becomes useful when it shows the strongest argument against itself.</p></div>
        </div>
        <div className="argument-scale" aria-label={`Arguments affecting ${selected.title}`}>
          <article className="argument acceleration-argument">
            <div><span>Acceleration case</span><strong>Why sooner</strong></div>
            <ol>{selected.accelerationCase.map((item, index) => <li key={item}><span>+{index + 1}</span>{item}</li>)}</ol>
          </article>
          <div className="argument-pivot"><span>Forecast</span><strong>{selected.probability}%</strong><i /></div>
          <article className="argument friction-argument">
            <div><span>Friction case</span><strong>Why later—or never</strong></div>
            <ol>{selected.frictionCase.map((item, index) => <li key={item}><span>−{index + 1}</span>{item}</li>)}</ol>
          </article>
        </div>
        <div className="forecast-hinge"><span>What would change the assessment?</span><p>{selected.hinge}</p></div>
      </section>

      <section className="reader-calibration" aria-labelledby="reader-estimate-title">
        <div><span className="section-number">03</span><p className="kicker">Calibrate your judgment</p><h2 id="reader-estimate-title">Where do<br /><em>you stand?</em></h2></div>
        <div className="reader-control">
          <label htmlFor="reader-estimate"><span>Your probability for {selected.number}</span><strong>{readerEstimate}%</strong></label>
          <input id="reader-estimate" type="range" min="0" max="100" step="1" value={readerEstimate} onChange={(event) => setReaderEstimate(Number(event.target.value))} onPointerUp={() => revealResult(readerDifferenceRef)} onKeyUp={(event) => revealRangeResult(event, readerDifferenceRef)} />
          <div className="reader-difference" ref={readerDifferenceRef} aria-live="polite">
            <span>Observatory</span><b>{selected.probability}%</b><i>vs.</i><span>Your estimate</span><b>{readerEstimate}%</b>
          </div>
          <p>{delta === 0 ? "You are exactly aligned with the current Observatory assessment." : `You are ${Math.abs(delta)} points ${delta > 0 ? "more confident" : "more skeptical"} than the Observatory.`}</p>
          <small>This comparison stays on your device and is not collected.</small>
        </div>
      </section>

      <section className="ledger-records" aria-labelledby="ledger-records-title">
        <div className="ledger-records-heading"><span className="section-number">04</span><p className="kicker">Open forecast record</p><h2 id="ledger-records-title">Every claim keeps<br /><em>its revision history.</em></h2></div>
        <div className="forecast-card-grid">
          {forecasts.map((forecast) => <button type="button" onClick={() => selectForecast(forecast.id)} className={selected.id === forecast.id ? "active" : ""} key={forecast.id}>
            <div><span>{forecast.number}</span><small>{forecast.domain}</small></div>
            <strong>{forecast.probability}<sup>%</sup></strong>
            <h3>{forecast.title}</h3>
            <p>Target: {forecast.horizon} · prior: {forecast.previousProbability}%</p>
            <b>Open evidence →</b>
          </button>)}
        </div>
      </section>

      <section className="forecast-sources" aria-labelledby="forecast-sources-title">
        <div><span className="section-number">05</span><p className="kicker">Evidence desk</p><h2 id="forecast-sources-title">Read the record<br /><em>beneath the judgment.</em></h2></div>
        <div>
          <p>The selected forecast draws on these primary or independent scientific sources. Links open the underlying evidence; probabilities and interpretations remain the Observatory&apos;s own.</p>
          {selectedSources.map((source) => <a href={source.href} key={source.id}><span>{source.publisher}</span><strong>{source.label}</strong></a>)}
        </div>
      </section>

      <section className="signup-band forecast-signup" aria-labelledby="forecast-signup-title">
        <div><p className="kicker">The forecast changes when the evidence does</p><h2 id="forecast-signup-title">Follow every<br /><em>revision.</em></h2><p>Receive new forecasts, disagreement dossiers, and the evidence that moved our assessment.</p></div>
        <SignupForm idPrefix="forecast-signup" />
      </section>
    </>
  );
}
