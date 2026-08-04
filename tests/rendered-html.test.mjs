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
