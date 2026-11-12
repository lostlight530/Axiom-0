import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';

// Render the real application module: no copied reducer or mocked metrics.
const server = await createServer({
  configFile: false,
  root: fileURLToPath(new URL('../', import.meta.url)),
  resolve: { alias: { '@': fileURLToPath(new URL('../src', import.meta.url)) } },
  optimizeDeps: { noDiscovery: true, include: [] },
  server: { middlewareMode: true },
  appType: 'custom',
});
after(async () => { await server.close(); });
const { default: Dashboard } = await server.ssrLoadModule('/src/pages/Dashboard.tsx');
const html = renderToStaticMarkup(React.createElement(Dashboard));

test('final snapshot navigation does not expose the older Operations dataset', () => {
  assert.doesNotMatch(html, />Operations<|>运行<|2026-08-07/);
});

test('the rounding example is introduced once', () => {
  assert.doesNotMatch(html, /Example: Example:/);
  assert.match(html, /Example: 13 → 10, 19 → 10, 27 → 20/);
});

test('final combined display retains 47,880 and adds only the non-overlapping 2,870', () => {
  assert.match(html, />50,750</);
  assert.match(html, />11,481</);
  assert.match(html, />4\.42 : 1</);
});

test('frozen observation window distinguishes elapsed days from inclusive dates', () => {
  assert.match(html, /2026-02-12/);
  assert.match(html, /2026-08-31/);
  assert.match(html, /200 elapsed days/);
  assert.match(html, /201 inclusive calendar days/);
  assert.match(html, /FROZEN/);
  assert.doesNotMatch(html, /SYSTEM_STATUS: ONLINE/);
});

test('metrics do not misrepresent repository views or unique sums as people', () => {
  assert.match(html, /Repository Views/);
  assert.match(html, /Recorded Unique Counts/);
  assert.match(html, /Historical counts \+ normalized interval sums/);
  assert.match(html, />13,810</);
  assert.doesNotMatch(html, /Frontend Views|Unique Actors|Entropy Divergence|Deterministic Bypass/);
});

test('reporting intervals up to two weeks are rounded only after per-repository accumulation', () => {
  assert.match(html, /08\/22–08\/31/);
  assert.match(html, /up to two weeks/);
  assert.match(html, /Sum each reporting interval \(up to two weeks\) per repository before rounding/);
  assert.match(html, /never round each day/);
  assert.doesNotMatch(html, /window uniques unavailable/);
});

test('observed daily uniques are counted once with their contribution disclosed', () => {
  assert.match(html, />970</);
  assert.match(html, /Normalized interval unique-count sum/);
  assert.match(html, /cross-day and cross-repository overlap retained/);
  assert.match(html, />13,810</);
  assert.doesNotMatch(html, />13,822<|>13,658<|>50,556</);
});
