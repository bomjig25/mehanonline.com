"use client";

import { useMemo, useRef, useState } from "react";
import { revealRangeResult, revealResult } from "../interactionNavigation";
import { occupations } from "./workHorizonData";

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const count = new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 });

function scenarioScore(proximity: number, taskFriction: number, reliability: number, workplaceFriction: number) {
  const reliabilityPenalty = (reliability - 50) * 0.62;
  const frictionPenalty = (workplaceFriction / 100) * taskFriction * 7;
  return Math.max(3, Math.min(97, Math.round(proximity - reliabilityPenalty - frictionPenalty)));
}

function signalLabel(score: number) {
  if (score >= 68) return "Near horizon";
  if (score >= 36) return "Tool-assisted";
  return "Human-bound";
}

export default function WorkHorizonLab() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All fields");
  const [selectedSlug, setSelectedSlug] = useState(occupations[0].slug);
  const [reliability, setReliability] = useState(65);
  const [friction, setFriction] = useState(40);
  const readoutRef = useRef<HTMLElement>(null);

  const groups = ["All fields", ...Array.from(new Set(occupations.map((occupation) => occupation.group)))];
  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return occupations.filter((occupation) => {
      const matchesGroup = group === "All fields" || occupation.group === group;
      return matchesGroup && (!needle || `${occupation.title} ${occupation.group}`.toLowerCase().includes(needle));
    });
  }, [group, query]);
  const occupation = occupations.find((item) => item.slug === selectedSlug) ?? occupations[0];
  const scoredTasks = occupation.tasks.map((task) => ({ ...task, score: scenarioScore(task.proximity, task.friction, reliability, friction) }));
  const occupationScore = Math.round(scoredTasks.reduce((sum, task) => sum + task.score, 0) / scoredTasks.length);
  const nearCount = scoredTasks.filter((task) => task.score >= 68).length;

  function chooseOccupation(slug: string) {
    setSelectedSlug(slug);
    revealResult(readoutRef, "start");
  }

  return (
    <>
      <section className="work-explorer" id="work-explorer" aria-labelledby="work-explorer-title">
        <div className="work-heading">
          <div><span className="section-number">01</span><p className="kicker">Task-level explorer</p></div>
          <div>
            <h2 id="work-explorer-title">A job is not<br /><em>one task.</em></h2>
            <p>Choose an occupation, then tighten the conditions. The instrument separates work already close to the AI frontier from work still anchored in trust, context, and the physical world.</p>
          </div>
        </div>

        <div className="work-instrument">
          <aside className="occupation-browser" aria-label="Occupation browser">
            <div className="occupation-search">
              <label htmlFor="occupation-search">Find an occupation</label>
              <input id="occupation-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search 12 fields" />
              <label htmlFor="occupation-group">Field</label>
              <select id="occupation-group" value={group} onChange={(event) => setGroup(event.target.value)}>
                {groups.map((item) => <option key={item}>{item}</option>)}
              </select>
            </div>
            <div className="occupation-list">
              {filtered.map((item, index) => (
                <button type="button" key={item.slug} className={item.slug === occupation.slug ? "active" : undefined} onClick={() => chooseOccupation(item.slug)}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item.title}</strong>
                  <small>{item.group}</small>
                </button>
              ))}
              {!filtered.length && <p>No occupation matches that search.</p>}
            </div>
          </aside>

          <section className="task-readout" ref={readoutRef} aria-live="polite">
            <header className="task-readout-head">
              <div><span>{occupation.onetCode}</span><h3>{occupation.title}</h3></div>
              <dl>
                <div><dt>U.S. employment</dt><dd>{count.format(occupation.employment)}</dd></div>
                <div><dt>Mean wage</dt><dd>{money.format(occupation.annualMeanWage)}</dd></div>
              </dl>
            </header>

            <div className="scenario-console">
              <div className="scenario-controls">
                <label htmlFor="reliability">Required reliability <strong>{reliability}%</strong></label>
                <input id="reliability" type="range" min="50" max="80" value={reliability} onChange={(event) => setReliability(Number(event.target.value))} onPointerUp={() => revealResult(readoutRef, "start")} onKeyUp={(event) => revealRangeResult(event, readoutRef, "start")} />
                <div><span>50% experimental</span><span>80% dependable</span></div>
                <label htmlFor="workplace-friction">Workplace friction <strong>{friction}%</strong></label>
                <input id="workplace-friction" type="range" min="0" max="100" value={friction} onChange={(event) => setFriction(Number(event.target.value))} onPointerUp={() => revealResult(readoutRef, "start")} onKeyUp={(event) => revealRangeResult(event, readoutRef, "start")} />
                <div><span>Clean inputs</span><span>Messy reality</span></div>
              </div>
              <div className="occupation-signal">
                <span>Scenario signal</span><strong>{occupationScore}</strong><small>{nearCount} of 5 sampled tasks near the horizon</small>
              </div>
            </div>

            <div className="task-list" aria-label={`${occupation.title} task signals`}>
              {scoredTasks.map((task) => (
                <article key={task.id}>
                  <div className="task-meta"><span>O*NET task {task.id}</span><em>{task.mode}</em></div>
                  <p>{task.task}</p>
                  <div className="task-signal"><i><b style={{ width: `${task.score}%` }} /></i><strong>{task.score}</strong><span className={`signal-${signalLabel(task.score).toLowerCase().replace("-", "-")}`}>{signalLabel(task.score)}</span></div>
                </article>
              ))}
            </div>
            <p className="scenario-caveat">This is an editorial scenario signal—not an automation probability, job-loss forecast, or claim that every workplace uses the same tools.</p>
          </section>
        </div>
      </section>

      <section className="work-method" id="work-method">
        <div><span className="section-number">02</span><p className="kicker">How to read the instrument</p></div>
        <div className="work-method-grid">
          <article><span>01</span><h3>Start with tasks.</h3><p>O*NET supplies the official task statements. Five representative tasks reveal why exposure inside one occupation can vary sharply.</p></article>
          <article><span>02</span><h3>Stress the setting.</h3><p>Reliability raises the bar for repeatable success. Workplace friction represents missing context, coordination, approvals, and imperfect inputs.</p></article>
          <article><span>03</span><h3>Keep humans in view.</h3><p>Physical action, legal responsibility, care, trust, and organizational judgment remain different constraints from producing a correct digital output.</p></article>
        </div>
      </section>
    </>
  );
}
