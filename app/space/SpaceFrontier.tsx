"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type MissionState = "Verified" | "Changed" | "Watch";

const yearCounts = [
  { year: "2025", count: 1 },
  { year: "2026", count: 37 },
  { year: "2027", count: 5 },
  { year: "2028", count: 12 },
  { year: "2029", count: 2 },
  { year: "2030", count: 7 },
  { year: "2031+", count: 8 },
];

const actors = [
  { name: "NASA", count: 14 },
  { name: "ESA / Europe", count: 14 },
  { name: "China", count: 9 },
  { name: "India", count: 9 },
  { name: "Japan", count: 5 },
  { name: "Other public + private", count: 21 },
];

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

export default function SpaceFrontier() {
  const [destination, setDestination] = useState("mars");
  const [status, setStatus] = useState<"All" | MissionState>("All");
  const [query, setQuery] = useState("");
  const selected = destinations.find((item) => item.id === destination) ?? destinations[2];
  const filteredUpdates = useMemo(() => updates.filter((item) => {
    const stateMatch = status === "All" || item.state === status;
    const needle = query.trim().toLowerCase();
    const textMatch = !needle || `${item.mission} ${item.actor} ${item.current}`.toLowerCase().includes(needle);
    return stateMatch && textMatch;
  }), [status, query]);
  const maxYear = Math.max(...yearCounts.map((item) => item.count));
  const maxActor = Math.max(...actors.map((item) => item.count));

  return (
    <main className="space-page">
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Mehan Observatory home"><span className="mark">MO</span><span>Mehan Observatory</span></Link>
        <nav aria-label="Primary navigation">
          <Link href="/singularity/">Event Horizon</Link><Link href="/models/">U.S. vs China</Link><Link className="active" href="/space/">Space frontier</Link><Link href="/#intelligence">Live terminal</Link><Link href="/#laboratory">Laboratory</Link>
        </nav>
        <a className="book-link" href="https://ashokmehan.com/">History&apos;s Future <span>↗</span></a>
      </header>

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
        <div className="dashboard-heading"><div><span>Planning wave</span><strong>2025–2035+</strong></div><p>The spreadsheet concentrates half its mission entries in 2026. These are schedule records, not a count of successful launches.</p></div>
        <div className="wave-chart">
          {yearCounts.map((item) => <div className="wave-column" key={item.year}><div><i style={{ height: `${Math.max(7, item.count / maxYear * 100)}%` }}><b>{item.count}</b></i></div><span>{item.year}</span></div>)}
        </div>
        <div className="actor-field">
          <div><p className="kicker">Entries by actor</p><h3>A distributed frontier.</h3><p>The workbook spans agencies, partnerships, and eighteen commercial companies. Collaboration is becoming as important as nationality.</p></div>
          <div className="actor-bars">{actors.map((actor) => <div key={actor.name}><span>{actor.name}</span><i><b style={{ width: `${actor.count / maxActor * 100}%` }} /></i><strong>{actor.count}</strong></div>)}</div>
        </div>
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
        <div><span className="section-number">03</span><p className="kicker">AI in space / 24 applications</p><h2>The machine is already<br /><em>leaving the loop.</em></h2><p>Navigation, scientific selection, anomaly detection, and robotics dominate the workbook’s AI catalog. In May 2026, NASA also reported the first geospatial foundation model deployed in orbit.</p><a href="https://science.nasa.gov/science-research/ai-foundation-model-in-orbit/">NASA / Prithvi in orbit ↗</a></div>
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
        <div className="update-list">{filteredUpdates.map((item) => <article key={item.mission}><div><span className={`record-state state-${item.state.toLowerCase()}`}>{item.state}</span><small>{item.actor}</small></div><h3>{item.mission}</h3><div className="record-change"><p><span>Workbook</span>{item.workbook}</p><b>→</b><p><span>Current field</span>{item.current}</p></div><p className="record-consequence">{item.consequence}</p><a href={item.source} aria-label={`Open official source for ${item.mission}`}>Official source ↗</a></article>)}</div>
        {!filteredUpdates.length && <p className="record-empty">No records match this view.</p>}
      </section>

      <section className="space-method"><span>Method</span><p>The original workbook remains the baseline. This page aggregates all six tabs, checks selected high-consequence claims against official agency or company sources, and marks schedules as targets when they remain uncertain. Technology readiness levels are directional and may vary by implementation.</p><a href="/singularity/">Return to Event Horizon →</a></section>

      <section className="book-bridge space-book-bridge"><p className="kicker">The conceptual doorway</p><h2>Distance does not end intelligence.<br />It changes who decides.</h2><p>Follow the autonomy problem back to the larger question of accelerating machine capability.</p><div><Link className="primary-action light" href="/singularity/">Enter Event Horizon →</Link><a className="text-action light-text" href="https://ashokmehan.com/">Explore the book ↗</a></div></section>

      <footer><div><span className="mark">MO</span><strong>Mehan Observatory</strong></div><p>An independent companion to <em>History&apos;s Future: The Singularity Is Here.</em></p><div className="footer-links"><Link href="/singularity/">Event Horizon</Link><Link href="/models/">U.S. vs China</Link><Link href="/space/">Space frontier</Link><a href="https://ashokmehan.com/essays/">Essays</a></div><small>© 2026 Ashok Mehan · Washington, D.C.</small></footer>
    </main>
  );
}
