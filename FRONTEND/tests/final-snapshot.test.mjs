import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';

const dashboardPath = fileURLToPath(new URL('../src/pages/Dashboard.tsx', import.meta.url));
const dashboardSource = await readFile(dashboardPath, 'utf8');

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

test('the homepage exposes only the two requested primary sections', () => {
  assert.match(html, /Five-repository historical traffic/);
  assert.match(html, /Historical traffic/);
  assert.match(html, /Method &amp; evidence/);
  assert.doesNotMatch(html, /Analytics Dashboard|Evidence and Telemetry Surface|FROZEN INSTRUMENT|Current Repository|BUILD 3/);
  assert.equal((dashboardSource.match(/mainTab === "(?:traffic|method)"/g) || []).length, 2);
});

test('the language switch remains available across both primary sections', () => {
  const languageSwitch = dashboardSource.indexOf('onClick={() => setLang');
  const trafficSection = dashboardSource.indexOf('{mainTab === "traffic"');
  assert.ok(languageSwitch >= 0 && languageSwitch < trafficSection);
});

test('the original 54 retained interval records remain present', () => {
  const rawData = dashboardSource.match(/const rawData: TrafficData\[\] = \[([\s\S]*?)\n\];/);
  assert.ok(rawData, 'rawData block exists');
  assert.equal((rawData[1].match(/\{ repo:/g) || []).length, 54);
  assert.match(rawData[1], /period: "08\/31", clones: 730, uniqueCloners: null, views: 3/);
  assert.match(rawData[1], /period: "08\/31", clones: 610, uniqueCloners: null, views: 0/);
  assert.match(rawData[1], /period: "08\/31", clones: 620, uniqueCloners: null, views: 5/);
});

test('the rounding example is introduced once', () => {
  assert.doesNotMatch(html, /Rounding example: Rounding example:/);
  assert.match(html, /Rounding example: 13 → 10 · 19 → 10 · 27 → 20/);
});

test('the frozen cumulative display preserves all four historical totals', () => {
  assert.match(html, />50,750</);
  assert.match(html, />13,810</);
  assert.match(html, />11,481</);
  assert.match(html, />4\.42 : 1</);
  assert.match(html, />970</);
});

test('the observation window distinguishes elapsed days from inclusive dates', () => {
  assert.match(html, /2026-02-12/);
  assert.match(html, /2026-08-31/);
  assert.match(html, /200 elapsed days/);
  assert.match(html, /201 inclusive calendar days/);
  assert.match(html, /FROZEN THROUGH 31 AUG 2026/);
  assert.doesNotMatch(html, /SYSTEM_STATUS: ONLINE/);
});

test('traffic labels do not present interval sums as globally distinct people', () => {
  assert.match(html, /Repository views, not Pages visits/);
  assert.match(html, /Accumulated unique-count sum/);
  assert.match(html, /Interval-level counts summed; not globally distinct people/);
  assert.match(html, /Final interval unique-count sum/);
  assert.match(html, /cross-day and cross-repository overlap is retained/);
  assert.doesNotMatch(html, /Unique Visitors|Unique Cloners|Frontend Views|Unique Actors|Entropy Divergence|Deterministic Bypass/);
});

test('interval normalization remains per-repository and occurs before rounding', () => {
  assert.match(html, /08\/22–08\/31/);
  assert.match(html, /up to two weeks/);
  assert.match(html, /Sum each reporting interval \(up to two weeks\) per repository before rounding/);
  assert.match(html, /Do not round daily values or the five-repository aggregate/);
  assert.doesNotMatch(html, /window uniques unavailable/);
});

test('the method section states the time, aggregation and evidence boundaries', () => {
  assert.match(dashboardSource, /Dates are UTC/);
  assert.match(dashboardSource, /interval end dates, not single-day totals/);
  assert.match(dashboardSource, /not a globally deduplicated count of distinct people/);
  assert.match(dashboardSource, /C\/V is combined clones divided by combined repository views, not an average/);
  assert.match(dashboardSource, /Repository views are not GitHub Pages visits/);
  assert.match(dashboardSource, /identifies humans, bots, downstream use, intent, adoption or the cause of traffic changes/);
});
