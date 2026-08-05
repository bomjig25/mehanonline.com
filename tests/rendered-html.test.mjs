import assert from "node:assert/strict";
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

test("keeps the full Observatory footer navigation consistent across routes", async () => {
  for (const pathname of ["/", "/singularity/", "/models/", "/space/", "/contact/"]) {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    const html = await response.text();

    assert.match(html, /aria-label="Footer navigation"/);
    assert.match(html, /href="\/singularity\/"[^>]*>Event Horizon<\/a>/);
    assert.match(html, /href="\/models\/"[^>]*>U\.S\. vs China<\/a>/);
    assert.match(html, /href="\/space\/"[^>]*>Space frontier<\/a>/);
    assert.match(html, /href="\/#intelligence"[^>]*>China monitor<\/a>/);
    assert.match(html, /href="\/#laboratory"[^>]*>Laboratory<\/a>/);
    assert.match(html, /href="\/contact\/"[^>]*>Contact<\/a>/);
  }
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
  assert.match(homeHtml, /Read manuscript excerpts &amp; op-eds/);
  assert.doesNotMatch(homeHtml, />Essays<\/a>/);
});
