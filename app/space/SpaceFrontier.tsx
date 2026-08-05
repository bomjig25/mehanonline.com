"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { actorGroups, missionRecords, missionYears, monthOrder, type ActorGroup } from "./missionData";
import { SiteFooter, SiteHeader } from "../SiteChrome";

type MissionState = "Verified" | "Changed" | "Watch";

const destinations = [
  { id: "orbit", label: "Earth orbit", delay: "< 1 sec", seconds: 0.03, autonomy: 12, note: "Ground control can remain conversational." },
  { id: "moon", label: "Moon", delay: "1.3 sec", seconds: 1.3, autonomy: 28, note: "Human control works, but precision landing already rewards onboard judgment." },
  { id: "mars", label: "Mars", delay: "4–22 min", seconds: 780, autonomy: 72, note: "A rover cannot be joystick-driven. It must see hazards and act before Earth can reply." },
  { id: "asteroid", label: "Didymos", delay: "~8 min", seconds: 480, autonomy: 61, note: "Hera is operating with an eight-minute one-way delay during its 2026 approach." },
  { id: "jupiter", label: "Jupiter", delay: "35–52 min", seconds: 2610, autonomy: 91, note: "Science selection, navigation, and fault response increasingly move onboard." },
  { id: "titan", label: "Titan", delay: "70–90 min", seconds: 4800, autonomy: 98, note: "Dragonfly will explore a world where instructions arrive long after the moment has passed." },
];

const aiDomains = [
  ["Navigation", 4], ["Scientific discovery", 4], ["Spacecraft health", 4],
  ["Earth observation", 3], ["Robotics", 3], ["Planetary defense", 2],
  ["Comms", 1], ["Launch", 1], ["Astrobiology", 1], ["Mission design", 1],
] as const;

const technologies = [
  { name: "Reusable rockets", category: "Access", trl: 9, horizon: "Operational", impact: "Transformative" },
  { name: "Optical communications", category: "Networks", trl: 9, horizon: "Operational", impact: "High" },
  { name: "Autonomous spacecraft", category: "Intelligence", trl: 8, horizon: "Operational", impact: "High" },
  { name: "In-space manufacturing", category: "Industry", trl: 6, horizon: "Late 2020s", impact: "High" },
  { name: "Orbital refuelling", category: "Infrastructure", trl: 6, horizon: "Late 2020s", impact: "High" },
  { name: "In-situ resource use", category: "Industry", trl: 5, horizon: "2027–30 demos", impact: "Transformative" },
  { name: "Nuclear propulsion", category: "Mobility", trl: 5, horizon: "2030s", impact: "Transformative" },
  { name: "Regolith habitats", category: "Infrastructure", trl: 4, horizon: "2028+ demos", impact: "Transformative" },
];

const updates: Array<{
  mission: string; actor: string; workbook: string; current: string; state: MissionState;
  consequence: string; source: string;
}> = [
  { mission: "Artemis II", actor: "NASA", workbook: "Active · April 2026", current: "Completed · April 10, 2026", state: "Changed", consequence: "The first crewed Artemis flight is now evidence, not forecast.", source: "https://www.nasa.gov/news-release/nasa-welcomes-record-setting-artemis-ii-moonfarers-back-to-earth/" },
  { mission: "Roman Space Telescope", actor: "NASA", workbook: "Late 2026", current: "Targeting August 30, 2026", state: "Verified", consequence: "A precise launch target has replaced the broad planning window.", source: "https://science.nasa.gov/mission/roman-space-telescope/" },
  { mission: "BepiColombo", actor: "ESA / JAXA", workbook: "Late 2026 arrival", current: "Orbit insertion starts November 21", state: "Verified", consequence: "The eight-year cruise has entered its final arrival sequence.", source: "https://www.esa.int/Enabling_Support/Operations/End_of_the_blue_glow_BepiColombo_turns_off_solar_electric_propulsion_for_Mercury_arrival" },
  { mission: "Hera", actor: "ESA", workbook: "November 2026 arrival", current: "On course for autumn 2026", state: "Verified", consequence: "Its live software upgrade exposed the autonomy problem: eight minutes each way.", source: "https://www.esa.int/Space_Safety/Hera/Deep_space_software_upgrade_for_Hera_s_asteroid_visit" },
  { mission: "Tianwen-2", actor: "CNSA", workbook: "June 2026 · planned", current: "Launched May 29, 2025", state: "Changed", consequence: "The asteroid sample-return mission is already en route; Earth return is expected late 2027.", source: "https://www.cnsa.gov.cn/n6758823/n6758838/c10676920/content.html" },
  { mission: "RESILIENCE M2", actor: "ispace", workbook: "June 2026 landing attempt", current: "Hard landing · June 6, 2025", state: "Changed", consequence: "This is a failed 2025 attempt, not an upcoming 2026 landing.", source: "https://ispace-inc.com/wp-content/uploads/2026/03/20260327-ERTF-Press-Release-.pdf" },
  { mission: "Blue Ghost M1", actor: "Firefly", workbook: "2026 first commercial landing", current: "Landed March 2, 2025", state: "Changed", consequence: "The commercial milestone occurred one year earlier than the workbook states.", source: "https://investors.fireflyspace.com/node/6761/pdf" },
  { mission: "Haven-1", actor: "Vast", workbook: "Early 2027", current: "Launch readiness Q1 2027", state: "Verified", consequence: "Integration is under way; the company still describes the date as a target.", source: "https://www.vastspace.com/updates/vast-advances-haven-1-into-integration-phase" },
  { mission: "Mars Sample Return", actor: "NASA / ESA", workbook: "2033 return", current: "Architecture decision pending", state: "Watch", consequence: "The old return date should not be treated as settled while NASA evaluates competing designs.", source: "https://www.nasa.gov/news-release/nasa-to-explore-two-landing-options-for-returning-samples-from-mars/" },
  { mission: "Dragonfly", actor: "NASA", workbook: "July 2028", current: "NET July 2028", state: "Verified", consequence: "The Titan rotorcraft remains one of the clearest tests of distant machine autonomy.", source: "https://science.nasa.gov/mission/dragonfly/" },
  { mission: "Gaganyaan G1", actor: "ISRO", workbook: "H2 2026", current: "Qualification tests continue", state: "Watch", consequence: "A July parachute qualification test is progress, but not confirmation of a launch date.", source: "https://www.isro.gov.in/Integrated_Main_Parachute_Air_Drop_Test.html" },
  { mission: "Haven / CAPSTONE 02", actor: "NASA", workbook: "Not listed", current: "New 2027 autonomy demo", state: "Changed", consequence: "A newly announced pair of lunar spacecraft will test autonomous navigation and coordination.", source: "https://www.nasa.gov/directorates/armd/nasa-announces-new-spacecraft-technology-demonstration-mission-at-moon/" },
];

const companies = ["SpaceX", "Blue Origin", "Rocket Lab", "Virgin Galactic", "Axiom", "Vast", "Sierra Space", "Intuitive Machines", "Firefly", "ispace", "Relativity", "Stoke", "Planet", "Astroscale", "Starlab", "Space Forge", "Impulse", "Auriga"];

function formatDelay(seconds: number) {
  if (seconds < 1) return `${Math.round(seconds * 1000)} milliseconds`;
  if (seconds < 60) return `${seconds.toFixed(1)} seconds`;
  return `${Math.round(seconds / 60)} minutes`;
}

const updateByRecordId: Partial<Record<number, (typeof updates)[number]>> = {
  1: updates[0], 4: updates[1], 9: updates[9], 13: updates[8], 16: updates[2],
  17: updates[3], 30: updates[4], 38: updates[10], 50: updates[2], 51: updates[5], 61: updates[7],
};

function countBy<T extends string>(items: T[]) {
  return items.reduce<Record<string, number>>((counts, item) => {
    counts[item] = (counts[item] || 0) + 1;
    return counts;
  }, {});
}

export default function SpaceFrontier() {
  const [destination, setDestination] = useState("mars");
  const [status, setStatus] = useState<"All" | MissionState>("All");
  const [query, setQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("2026");
  const [selectedActor, setSelectedActor] = useState<ActorGroup | "All actors">("All actors");
  const [selectedType, setSelectedType] = useState("All types");
  const [hoverYear, setHoverYear] = useState<string | null>(null);
  const [hoverActor, setHoverActor] = useState<ActorGroup | "All actors" | null>(null);
  const selected = destinations.find((item) => item.id === destination) ?? destinations[2];
  const filteredUpdates = useMemo(() => updates.filter((item) => {
    const stateMatch = status === "All" || item.state === status;
    const needle = query.trim().toLowerCase();
    const textMatch = !needle || `${item.mission} ${item.actor} ${item.current}`.toLowerCase().includes(needle);
    return stateMatch && textMatch;
  }), [status, query]);
  const effectiveYear = hoverYear ?? selectedYear;
  const effectiveActor = hoverActor ?? selectedActor;
  const yearBase = missionRecords.filter((mission) => effectiveActor === "All actors" || mission.actorGroup === effectiveActor);
  const yearCounts = countBy(yearBase.map((mission) => mission.year ?? "Unscheduled"));
  const maxYear = Math.max(1, ...Object.values(yearCounts));
  const actorBase = missionRecords.filter((mission) => (mission.year ?? "Unscheduled") === effectiveYear);
  const actorCounts = countBy(actorBase.map((mission) => mission.actorGroup));
  const maxActor = Math.max(1, ...Object.values(actorCounts));
  const selectionBase = missionRecords.filter((mission) =>
    (mission.year ?? "Unscheduled") === effectiveYear &&
    (effectiveActor === "All actors" || mission.actorGroup === effectiveActor),
  );
  const typeCounts = countBy(selectionBase.map((mission) => mission.type));
  const availableTypes = Object.entries(typeCounts).sort((a, b) => b[1] - a[1]);
  const selectedMissions = selectionBase.filter((mission) => selectedType === "All types" || mission.type === selectedType);
  const monthCounts = countBy(selectedMissions.map((mission) => mission.month ?? "Unspecified"));
  const maxMonth = Math.max(1, ...Object.values(monthCounts));

  function resetMissionView() {
    setSelectedYear("2026");
    setSelectedActor("All actors");
    setSelectedType("All types");
    setHoverYear(null);
    setHoverActor(null);
  }

  return (
    <main className="space-page">
      <SiteHeader active="space" />

      <section className="space-hero">
        <div className="space-stars" aria-hidden="true" />
        <div className="space-arc arc-a" aria-hidden="true" /><div className="space-arc arc-b" aria-hidden="true" />
        <div className="space-hero-copy">
          <p className="kicker">Frontier field 02 / Earth + beyond</p>
          <h1>The farther intelligence travels,<br /><em>the less it can wait for us.</em></h1>
          <p>Seventy-two mission records reveal more than a new space race. They show a transfer of judgment—from distant control rooms to machines that must perceive, decide, and recover on their own.</p>
          <div className="horizon-actions"><a className="primary-action" href="#autonomy">Test the distance →</a><a className="text-action" href="#field-record">Audit the record</a></div>
        </div>
        <div className="space-hero-index"><span>Workbook snapshot</span><strong>72</strong><small>mission entries · six source tabs</small></div>
      </section>

      <section className="space-thesis">
        <span className="section-number">01</span><p className="kicker">The singularity in physical space</p>
        <h2>On Earth, autonomy is an option.<br /><em>Beyond Earth, it becomes physics.</em></h2>
        <p>A singularity is usually imagined as software accelerating in a data center. Space makes the same transition tangible: once light itself is too slow for real-time control, intelligence has to move into the vehicle.</p>
      </section>

      <figure className="space-visual-threshold">
        <Image
          src="/space-frontier-og.png"
          alt="A signal traveling from Earth toward an autonomous spacecraft in deep space"
          width={1774}
          height={887}
          sizes="100vw"
        />
        <figcaption><span>Earth sends the instruction.</span><strong>Distance decides who must act.</strong></figcaption>
      </figure>

      <section className="space-dashboard" aria-label="Workbook mission dashboard">
        <div className="dashboard-heading"><div><span>Coordinated mission explorer</span><strong>72 records / 69 names</strong></div><p>Hover to preview; click to lock a year or actor. Both charts, the month profile, mission types, and detailed records update together. Counts are workbook rows—not completed launches—and partnership entries can repeat a named mission.</p></div>
        <div className="mission-selection-line" aria-live="polite">
          <div><span>Active field</span><strong>{effectiveYear} · {effectiveActor}</strong><small>{selectionBase.length} records before mission-type filtering</small></div>
          <button type="button" onClick={resetMissionView}>Reset view</button>
        </div>
        <div className="wave-chart" aria-label="Mission records by year">
          {missionYears.map((year) => {
            const count = yearCounts[year] || 0;
            const isSelected = selectedYear === year;
            return <button
              type="button"
              className={`wave-column ${isSelected ? "selected" : ""}`}
              key={year}
              aria-pressed={isSelected}
              aria-label={`${count} mission records in ${year}${effectiveActor === "All actors" ? "" : ` for ${effectiveActor}`}`}
              onMouseEnter={() => setHoverYear(year)}
              onMouseLeave={() => setHoverYear(null)}
              onFocus={() => setHoverYear(year)}
              onBlur={() => setHoverYear(null)}
              onClick={() => { setSelectedYear(year); setSelectedType("All types"); }}
            ><div><i style={{ height: `${count ? Math.max(7, count / maxYear * 100) : 2}%` }}><b>{count}</b></i></div><span>{year}</span></button>;
          })}
        </div>
        <div className="actor-field">
          <div><p className="kicker">Actor field for {effectiveYear}</p><h3>A distributed frontier.</h3><p>These bars are now linked to the planning wave. Select an actor to isolate its mission mix, then use the month and type controls below to interrogate the records.</p></div>
          <div className="actor-bars">{actorGroups.map((actor) => {
            const count = actor === "All actors" ? actorBase.length : actorCounts[actor] || 0;
            const isSelected = selectedActor === actor;
            return <button
              type="button"
              key={actor}
              className={isSelected ? "selected" : ""}
              aria-pressed={isSelected}
              onMouseEnter={() => setHoverActor(actor)}
              onMouseLeave={() => setHoverActor(null)}
              onFocus={() => setHoverActor(actor)}
              onBlur={() => setHoverActor(null)}
              onClick={() => { setSelectedActor(actor); setSelectedType("All types"); }}
            ><span>{actor}</span><i><b style={{ width: `${actor === "All actors" ? 100 : count / maxActor * 100}%` }} /></i><strong>{count}</strong></button>;
          })}</div>
        </div>

        <div className="mission-drilldown">
          <div className="month-profile">
            <div className="drilldown-heading"><div><p className="kicker">Month profile</p><h3>{effectiveYear} schedule resolution</h3></div><p>Only 15 of 72 workbook records specify an exact month. “Unspecified” preserves uncertainty rather than inventing precision from labels such as “late,” “Q1,” or “H2.”</p></div>
            <div className="month-bars">{monthOrder.map((month) => {
              const count = monthCounts[month] || 0;
              return <div key={month} className={count ? "has-data" : ""}><span>{month}</span><i><b style={{ height: `${count ? Math.max(8, count / maxMonth * 100) : 0}%` }} /></i><strong>{count || "·"}</strong></div>;
            })}</div>
          </div>

          <div className="type-profile">
            <div className="drilldown-heading"><div><p className="kicker">Mission types</p><h3>What is being attempted?</h3></div><p>Choose a type to narrow the detailed records without breaking the year and actor context.</p></div>
            <div className="type-chips"><button type="button" className={selectedType === "All types" ? "selected" : ""} onClick={() => setSelectedType("All types")}>All types <span>{selectionBase.length}</span></button>{availableTypes.map(([type, count]) => <button type="button" key={type} className={selectedType === type ? "selected" : ""} onClick={() => setSelectedType(type)}>{type} <span>{count}</span></button>)}</div>
          </div>
        </div>

        <div className="mission-record-panel">
          <div className="mission-record-title"><div><p className="kicker">Detailed mission records</p><h3>{selectedMissions.length} matching {selectedMissions.length === 1 ? "record" : "records"}</h3></div><p>Descriptions below reproduce the workbook’s “All Missions” field. Orange correction notes come from the separately verified August 2026 field review.</p></div>
          <div className="mission-record-grid">{selectedMissions.map((mission) => {
            const correction = updateByRecordId[mission.id];
            return <article key={mission.id}>
              <div className="mission-card-top"><span>Workbook row {mission.id}</span><small>{mission.status}</small></div>
              <p className="mission-actor">{mission.actor}</p><h4>{mission.mission}</h4>
              <dl><div><dt>Schedule</dt><dd>{mission.launch}</dd></div><div><dt>Type</dt><dd>{mission.type}</dd></div><div><dt>Destination</dt><dd>{mission.destination}</dd></div>{mission.partners && <div><dt>Partners</dt><dd>{mission.partners}</dd></div>}</dl>
              <p className="mission-description">{mission.description}</p>
              {correction && <div className={`mission-correction state-${correction.state.toLowerCase()}`}><span>{correction.state} field note</span><strong>{correction.current}</strong><p>{correction.consequence}</p><a href={correction.source} target="_blank" rel="noreferrer">Official source</a></div>}
            </article>;
          })}</div>
          {!selectedMissions.length && <p className="record-empty">No workbook records match this combined selection.</p>}
        </div>
      </section>

      <section className="research-protocol" aria-labelledby="protocol-title">
        <div><span className="section-number">Data note</span><p className="kicker">Research protocol</p></div>
        <div><h2 id="protocol-title">What this instrument<br /><em>counts—and does not.</em></h2><div className="protocol-grid"><article><span>Unit of observation</span><strong>One workbook row</strong><p>Rows represent agency or company program records. Joint missions may appear under more than one partner, so the 72 records contain 69 distinct mission names.</p></article><article><span>Temporal resolution</span><strong>Declared schedule text</strong><p>The explorer extracts a year and only assigns a month when the workbook explicitly names one. Approximate, quarterly, half-year, and “late” dates remain unspecified.</p></article><article><span>Verification layer</span><strong>Selective official review</strong><p>High-consequence or visibly changed records receive a dated field note linked to an agency or company source. Unreviewed rows remain workbook claims.</p></article><article><span>Interpretive limit</span><strong>Not a launch manifest</strong><p>Counts include launches, arrivals, flybys, ongoing operations, and proposed infrastructure. They measure the planning field, not launch cadence or mission success.</p></article></div></div>
      </section>

      <section className="autonomy-lab" id="autonomy">
        <div className="autonomy-heading"><div><span className="section-number">02</span><p className="kicker">Light-time laboratory</p></div><div><h2>Move intelligence<br /><em>away from Earth.</em></h2><p>Select a destination. The growing gap between action and reply is the simplest explanation for why autonomy becomes unavoidable.</p></div></div>
        <div className="destination-controls" role="group" aria-label="Choose a destination">{destinations.map((item) => <button type="button" key={item.id} className={destination === item.id ? "selected" : ""} onClick={() => setDestination(item.id)}><span>{item.label}</span><small>{item.delay}</small></button>)}</div>
        <div className="delay-instrument">
          <div className="delay-orbit"><div className="earth-node">EARTH</div><div className="signal-path"><i style={{ width: `${selected.autonomy}%` }} /></div><div className="target-node">{selected.label.toUpperCase()}</div></div>
          <div className="delay-readout"><p>One-way command delay</p><strong>{selected.delay}</strong><span>{selected.note}</span></div>
          <div className="autonomy-meter"><div><span>Ground-directed</span><span>Machine-delegated</span></div><i><b style={{ width: `${selected.autonomy}%` }} /></i><small>Illustrative autonomy pressure, derived from communication latency—not a mission performance score.</small></div>
          <div className="command-loop"><span>Command sent</span><b>→</b><span>{formatDelay(selected.seconds)} outward</span><b>→</b><span>Action</span><b>→</b><span>{formatDelay(selected.seconds)} home</span></div>
        </div>
      </section>

      <section className="space-intelligence">
        <div><span className="section-number">03</span><p className="kicker">AI in space / 24 applications</p><h2>The machine is already<br /><em>leaving the loop.</em></h2><p>Navigation, scientific selection, anomaly detection, and robotics dominate the workbook’s AI catalog. In May 2026, NASA also reported the first geospatial foundation model deployed in orbit.</p><a href="https://science.nasa.gov/science-research/ai-foundation-model-in-orbit/" target="_blank" rel="noreferrer">NASA / Prithvi in orbit</a></div>
        <div className="ai-domain-grid">{aiDomains.map(([domain, count], index) => <article key={domain}><span>{String(index + 1).padStart(2, "0")}</span><strong>{count}</strong><p>{domain}</p></article>)}</div>
      </section>

      <section className="technology-field">
        <div className="technology-intro"><span className="section-number">04</span><div><p className="kicker">Technology ladder</p><h2>Access. Endurance.<br /><em>Independence.</em></h2><p>Twenty breakthroughs appear in the workbook. This ladder surfaces the eight that most directly change how far, how long, or how independently a mission can operate.</p></div></div>
        <div className="tech-ladder">{technologies.map((tech, index) => <article key={tech.name}><span>{String(index + 1).padStart(2, "0")}</span><div><small>{tech.category}</small><h3>{tech.name}</h3></div><div className="trl"><i><b style={{ width: `${tech.trl * 10}%` }} /></i><strong>TRL {tech.trl}</strong></div><p>{tech.horizon}</p><em>{tech.impact}</em></article>)}</div>
      </section>

      <section className="commercial-belt"><p className="kicker">Commercial layer / 18 companies tracked</p><div>{companies.map((company) => <span key={company}>{company}</span>)}</div><p>Valuations and executive titles in the source sheet age quickly. This Observatory treats the company list as an ecosystem map, not an investment ledger.</p></section>

      <section className="field-record" id="field-record">
        <div className="field-record-heading"><div><span className="section-number">05</span><p className="kicker">Refreshed field record</p></div><div><h2>A forecast should show<br /><em>its revisions.</em></h2><p>Workbook snapshot: April 2026. Observatory review: August 4, 2026. Dates move; the change itself is evidence.</p></div></div>
        <div className="record-tools"><div className="record-filters">{(["All", "Verified", "Changed", "Watch"] as const).map((item) => <button type="button" key={item} className={status === item ? "selected" : ""} onClick={() => setStatus(item)}>{item}</button>)}</div><label><span className="sr-only">Search mission updates</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search mission or agency" /></label></div>
        <div className="update-list">{filteredUpdates.map((item) => <article key={item.mission}><div><span className={`record-state state-${item.state.toLowerCase()}`}>{item.state}</span><small>{item.actor}</small></div><h3>{item.mission}</h3><div className="record-change"><p><span>Workbook</span>{item.workbook}</p><b>→</b><p><span>Current field</span>{item.current}</p></div><p className="record-consequence">{item.consequence}</p><a href={item.source} target="_blank" rel="noreferrer" aria-label={`Open official source for ${item.mission}`}>Official source</a></article>)}</div>
        {!filteredUpdates.length && <p className="record-empty">No records match this view.</p>}
      </section>

      <section className="space-method"><span>Method</span><p>The original workbook remains the baseline. This page aggregates all six tabs, checks selected high-consequence claims against official agency or company sources, and marks schedules as targets when they remain uncertain. Technology readiness levels are directional and may vary by implementation.</p><a href="/singularity/">Return to Event Horizon →</a></section>

      <section className="book-bridge space-book-bridge"><p className="kicker">The conceptual doorway</p><h2>Distance does not end intelligence.<br />It changes who decides.</h2><p>Follow the autonomy problem back to the larger question of accelerating machine capability.</p><div><Link className="primary-action light" href="/singularity/">Enter Event Horizon →</Link><a className="text-action light-text" href="https://ashokmehan.com/" target="_blank" rel="noreferrer">Explore the book</a></div></section>

      <SiteFooter />
    </main>
  );
}
