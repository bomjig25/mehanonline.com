import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Observatory homepage and Event Horizon doorway", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Mehan Observatory — Observe the Accelerating Future<\/title>/i);
  assert.match(html, /Observe the forces/);
  assert.match(html, /href="\/singularity\/"[^>]*>Event Horizon<\/a>/);
  assert.match(html, /Begin at Event Horizon/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("server-renders Event Horizon as a connected flagship field guide", async () => {
  const response = await render("/singularity/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Beyond the Event Horizon — Mehan Observatory<\/title>/i);
  assert.match(html, /Beyond the/);
  assert.match(html, /event horizon\./i);
  assert.match(html, /Progress is real/);
  assert.match(html, /What would make it/);
  assert.match(html, /The honest questions/);
  assert.match(html, /The Observatory measures/);
  assert.match(html, /href="\/#intelligence"/);
  assert.match(html, /href="\/models\/"/);
  assert.match(html, /href="\/#ledger"/);
  assert.match(html, /href="\/#laboratory"/);
});

test("keeps page destinations in the footer navigation across routes", async () => {
  for (const pathname of ["/", "/forecast-ledger/", "/work-horizon/", "/dossiers/", "/dossiers/economic-actor/", "/dossiers/week-of-work/", "/singularity/", "/models/", "/space/", "/about/", "/contact/"]) {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    const html = await response.text();

    assert.match(html, /aria-label="Footer navigation"/);
    assert.match(html, /href="\/forecast-ledger\/"[^>]*>Forecast ledger<\/a>/);
    assert.match(html, /href="\/work-horizon\/"[^>]*>Work Horizon<\/a>/);
    assert.match(html, /href="\/dossiers\/"[^>]*>Dossiers<\/a>/);
    assert.match(html, /href="\/singularity\/"[^>]*>Event Horizon<\/a>/);
    assert.match(html, /href="\/models\/"[^>]*>U\.S\. vs China<\/a>/);
    assert.match(html, /href="\/space\/"[^>]*>Space frontier<\/a>/);
    assert.match(html, /href="\/about\/"[^>]*>About<\/a>/);
    assert.match(html, /href="\/contact\/"[^>]*>Contact<\/a>/);
  }
});

test("uses a compact page-only menu with local section links on pertinent pages", async () => {
  const homeHtml = await (await render("/")).text();
  assert.match(homeHtml, /<summary><span>Explore<\/span>/);
  assert.match(homeHtml, /aria-label="On this page"/);
  assert.match(homeHtml, /href="#intelligence"[^>]*><span>01<\/span>China monitor<\/a>/);
  assert.match(homeHtml, /href="#laboratory"[^>]*><span>02<\/span>Laboratory<\/a>/);

  const forecastHtml = await (await render("/forecast-ledger/")).text();
  assert.match(forecastHtml, /href="#probability-field"/);
  assert.match(forecastHtml, /href="#disagreement-map"/);
  assert.doesNotMatch(forecastHtml, /href="\/#intelligence"/);
});

test("renders Ashok Mehan's live Gravatar profile card", async () => {
  const response = await render("/about/");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /<title>About Ashok Mehan — Mehan Observatory<\/title>/i);
  assert.match(html, /Behind the/);
  assert.match(html, /https:\/\/gravatar\.com\/bomjig25\.card/);
  assert.match(html, /width="520"/);
  assert.match(html, /height="320"/);
  assert.match(html, /scrolling="no"/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /Meet Ashok/);
});

test("renders the Observatory contact form and homepage field-note signup", async () => {
  const contactResponse = await render("/contact/");
  assert.equal(contactResponse.status, 200);
  const contactHtml = await contactResponse.text();
  assert.match(contactHtml, /<title>Contact — Mehan Observatory<\/title>/i);
  assert.match(contactHtml, /name="email"/);
  assert.match(contactHtml, /name="message"/);
  assert.match(contactHtml, /Send message/);

  const homeResponse = await render("/");
  const homeHtml = await homeResponse.text();
  assert.match(homeHtml, /Observatory field notes/);
  assert.match(homeHtml, /What we expect/);
  assert.match(homeHtml, /Read manuscript excerpts &amp; op-eds/);
  assert.doesNotMatch(homeHtml, />Essays<\/a>/);
});

test("renders the interactive forecast ledger with search metadata", async () => {
  const response = await render("/forecast-ledger/");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /<title>AI Forecast Ledger &amp; Disagreement Map — Mehan Observatory<\/title>/i);
  assert.match(html, /The probability field/);
  assert.match(html, /The disagreement map/);
  assert.match(html, /A week of useful work/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /DataFeed/);
  assert.match(html, /name="name"/);
  assert.match(html, /name="email"/);
});

test("renders the week-of-work disagreement dossier with evidence and signup", async () => {
  const response = await render("/dossiers/week-of-work/");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /<title>Can AI Agents Complete a Week of Work\? — Disagreement Dossier<\/title>/i);
  assert.match(html, /Disagreement dossier 01/i);
  assert.match(html, /Required success rate/);
  assert.match(html, /Workplace messiness/);
  assert.match(html, /Observatory assessment/);
  assert.match(html, /62/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /Article/);
  assert.match(html, /name="name"/);
  assert.match(html, /name="email"/);
});

test("renders the dossier archive and economic-actor threshold instrument", async () => {
  const indexResponse = await render("/dossiers/");
  assert.equal(indexResponse.status, 200);
  const indexHtml = await indexResponse.text();
  assert.match(indexHtml, /<title>AI Disagreement Dossiers — Mehan Observatory<\/title>/i);
  assert.match(indexHtml, /When does an AI agent become an economic actor/i);
  assert.match(indexHtml, /Can an AI do a week of useful work/i);
  assert.match(indexHtml, /CollectionPage/);

  const dossierResponse = await render("/dossiers/economic-actor/");
  assert.equal(dossierResponse.status, 200);
  const dossierHtml = await dossierResponse.text();
  assert.match(dossierHtml, /Disagreement dossier 02/i);
  assert.match(dossierHtml, /Preference fidelity/);
  assert.match(dossierHtml, /Delegated authority/);
  assert.match(dossierHtml, /Current classification/);
  assert.match(dossierHtml, /Project Swap/);
  assert.match(dossierHtml, /application\/ld\+json/);
  assert.match(dossierHtml, /Article/);
});

test("renders the Work Horizon Lab as a connected task-level instrument", async () => {
  const response = await render("/work-horizon/");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /<title>Work Horizon Lab — Mehan Observatory<\/title>/i);
  assert.match(html, /How much of a job/);
  assert.match(html, /Required reliability/);
  assert.match(html, /Workplace friction/);
  assert.match(html, /Software Developers/);
  assert.match(html, /Analyze user needs and software requirements/);
  assert.match(html, /not an automation probability/i);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /Dataset/);
});

test("keeps outbound links in browser history instead of opening stranded tabs", async () => {
  for (const pathname of ["/", "/forecast-ledger/", "/work-horizon/", "/dossiers/economic-actor/", "/dossiers/week-of-work/", "/singularity/", "/models/", "/space/"]) {
    const response = await render(pathname);
    const html = await response.text();
    const outboundLinks = html.match(/<a\b[^>]*href="https?:\/\/[^\"]+"[^>]*>/g) ?? [];
    assert.ok(outboundLinks.length > 0, `${pathname} should contain at least one outbound source link`);
    for (const link of outboundLinks) assert.doesNotMatch(link, /target="_blank"/);
  }
});

test("wires interactive controls to reveal their updated result", async () => {
  const helper = await readFile(new URL("../app/interactionNavigation.ts", import.meta.url), "utf8");
  assert.match(helper, /scrollIntoView/);
  assert.match(helper, /prefers-reduced-motion/);

  for (const sourcePath of [
    "../app/page.tsx",
    "../app/forecast-ledger/ForecastLedger.tsx",
    "../app/dossiers/week-of-work/DossierInteractive.tsx",
    "../app/dossiers/economic-actor/EconomicActorInstrument.tsx",
    "../app/space/SpaceFrontier.tsx",
    "../app/work-horizon/WorkHorizonLab.tsx",
  ]) {
    const source = await readFile(new URL(sourcePath, import.meta.url), "utf8");
    assert.match(source, /revealResult/);
    assert.match(source, /aria-live="polite"/);
  }
});
