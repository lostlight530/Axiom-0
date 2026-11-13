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
  assert.match(html, /Rounding example: 13 → 10 · 19 → 10 · 27 → 20/);
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
  assert.match(html, /Repository views/);
  assert.match(html, /Accumulated unique-count sum/);
  assert.match(html, /Summed interval-level unique counts are not globally distinct visitors/);
  assert.match(html, />13,810</);
  assert.doesNotMatch(html, /Frontend Views|Unique Actors|Entropy Divergence|Deterministic Bypass/);
});

test('reporting intervals up to two weeks are rounded only after per-repository accumulation', () => {
  assert.match(html, /08\/22–08\/31/);
  assert.match(html, /up to two weeks/);
  assert.match(html, /Sum each reporting interval \(up to two weeks\) per repository before rounding/);
  assert.match(html, /Do not round daily values/);
  assert.doesNotMatch(html, /window uniques unavailable/);
});

test('observed daily uniques are counted once with their contribution disclosed', () => {
  assert.match(html, />970</);
  assert.match(html, /Final interval unique-count sum/);
  assert.match(html, /cross-day and cross-repository overlap is retained/);
  assert.match(html, />13,810</);
  assert.doesNotMatch(html, />13,822<|>13,658<|>50,556</);
});

test('five-repository comparison has separate panels and an explicit non-live scope', () => {
  assert.match(html, /Repository clones/);
  assert.match(html, /Repository views \(not Pages\)/);
  assert.match(html, /Clones and views have separate quantitative axes/);
  assert.match(html, /FIXED HISTORICAL OBSERVATION · NOT LIVE/);
});

test('five-repository totals produce browser-size-independent visible bars', () => {
  assert.match(html, /role="meter"/);
  assert.equal((html.match(/role="meter"/g) ?? []).length, 10);
  assert.doesNotMatch(html, /recharts-responsive-container/);
});

test('per-repository interval and ratio charts emit explicit SVG dimensions with null gaps', async () => {
  const { IntervalLines, RatioLines } = await server.ssrLoadModule('/src/components/TrafficCharts.tsx');
  const points = [
    { period: 'A', clones: 10, views: 5, cloneViewRatio: 2 },
    { period: 'B', clones: 7, views: 0, cloneViewRatio: null },
    { period: 'C', clones: 12, views: 6, cloneViewRatio: 2 },
  ];
  const intervalHtml = renderToStaticMarkup(React.createElement(IntervalLines, {
    data: points, cloneLabel: 'Clones', viewLabel: 'Views',
  }));
  const ratioHtml = renderToStaticMarkup(React.createElement(RatioLines, {
    data: points, ariaLabel: 'C/V',
  }));
  assert.match(intervalHtml, /<svg[^>]*width="920"[^>]*height="290"/);
  assert.match(intervalHtml, /Clones 10/);
  assert.match(ratioHtml, /zero views produce a gap/);
  assert.equal((ratioHtml.match(/<polyline/g) ?? []).length, 0, 'null must not bridge unrelated points');
  assert.equal((ratioHtml.match(/<circle/g) ?? []).length, 4, 'two points and two isolated segment markers');
});
