# Axiom — final traffic snapshot

首页仅保留两个一级区域：**五仓历史流量展示**，以及**统计方法、时间窗口与证据限制**。五仓流量展示封存于 **2026-08-31**，不再追加后续数据。项目窗口 **2026-02-12 → 2026-08-31**，经过 **200 天**，首尾均计 **201 个自然日**。页面排版与术语围绕这两类内容组织；Daily SOP 不受流量封存影响。

## Calculation contract

**按不超过两周的统计区间汇总，各仓汇总后，再将 ≥10 的计数向下取整到十位，个位数保留。** clones、uniques、views 使用同一规则；不逐日取整，也不对五仓合计再取整。

Sum each reporting interval (up to two weeks) per repository before rounding; floor counts ≥10 to tens and preserve single digits. Never round each day. Existing historical rows through 08/21 remain unchanged. Unique-count accumulation is not a count of globally distinct people.

## Final appended interval

| Repository | Clones | Uniques | Views |
| --- | ---: | ---: | ---: |
| welcome-to-github | 730 | 170 | 3 |
| zero-entropy-lab | 610 | 160 | 0 |
| Axiom-0 | 620 | 210 | 5 |
| reflective-continuum | 590 | 240 | 2 |
| agent-foundations | 320 | 190 | 10 |
| Total | **2,870** | **970** | **20** |

The `08/31` chart point covers 08/22–08/31, not a single day. Intervals have varying lengths; charted totals are not daily rates.

## Frozen cumulative display

- **50,750 clones**
- **13,810 accumulated unique counts**
- **11,481 repository views**
- **C/V 4.42 : 1**, calculated from combined clones / combined views, not an average of ratios.

Repository views are not GitHub Pages visits. C/V does not identify bots, humans, intent or adoption. Zero views yield an undefined C/V (`null`, a chart gap), never a fabricated finite ratio.

The public frontend shows only the final **2026-08-31** traffic snapshot and its methodology. The older Operations tab has been removed from this display, not relabelled as 200-day activity. Its original evidence remains in Git history; the 54 traffic interval records are unchanged. Pages deployment is not Python runtime validation.

## Implementation and verification

[Dashboard.tsx](src/pages/Dashboard.tsx) holds the static display values, and [TrafficCharts.tsx](src/components/TrafficCharts.tsx) draws explicit SVG interval charts and accessible five-repository bars. These charts rely on intrinsic SVG dimensions and rendered count labels, not Recharts `ResponsiveContainer` measurement or `ResizeObserver`. No additional reporting rows or changed calculations are introduced. Historical rows are inherited from main `fdc0f21f8cb3305e2f2322642fce357325b6d490`; final unique counts use the explicitly normalized interval sum. No polling or ingestion service runs in the page.

From `FRONTEND`, using existing locked dependencies:

```text
npm ci --ignore-scripts
npm run build -- --outDir <dedicated-empty-preview-directory-outside-the-repository>
npm run preview -- --host 127.0.0.1 --outDir <same-preview-directory>
```

Pages workflow validation runs the existing production build (`npm ci` followed by `npm run build`, which executes `tsc -b && vite build`). The existing locked-dependency CI additionally executes `node --test tests/final-snapshot.test.mjs`; it now checks the rendered bar representation, explicit SVG geometry and zero-view ratio gaps, in addition to all frozen count assertions. Chinese frontend display text omits the ideographic full stop (`U+3002`); decimal points, URLs and file paths remain unchanged. Default build output is `../docs`; override it during local review to avoid modifying tracked Pages artifacts.

No dependency, lockfile, runtime, workflow or private SOP changes are included. Dependency advisories are separate maintenance work. Do not claim deployment from a local build.

## Freeze and rollback

No later traffic rows or scheduled updater. Corrections to existing errors require review; they do not authorize extending the window. Revert this frontend commit to restore the previous page without affecting the separate Daily evidence PR.

## Old/new frontend maintenance and cleanup

- **Current source of truth:** `FRONTEND/src/pages/Dashboard.tsx` for the immutable 54 retained rows, the normalization formula and filter/aggregate behavior; `FRONTEND/src/components/TrafficCharts.tsx` for rendering; `FRONTEND/src/index.css` for presentation; `FRONTEND/tests/final-snapshot.test.mjs` for regression checks
- **Current deployment artifact:** the Vite build writes `docs/` as part of Pages deployment, which is generated output and not an authority for data editing; do not delete it during cleanup
- **Historical version:** retain the prior frontend in Git history, including the initial fixed snapshot (`fdc0f21f8cb3305e2f2322642fce357325b6d490`) and the pre-repair main commit (`083c99d7a12221596c2d61a537de7d1c2d71c813`). Recovery uses a reviewed revert or comparison, not a second competing live `index.html`
- **Removed only confirmed unused starter files:** `FRONTEND/src/App.css`, `FRONTEND/src/assets/hero.png`, `FRONTEND/src/assets/react.svg`, `FRONTEND/src/assets/vite.svg` (none were imported by the active source)
- **Forbidden cleanup:** frozen observations, original methodology, README, published `docs/` build target, repository history and unrelated daily evidence
- **Release gate:** lint, Vite production build, frozen SSR regression, visually readable five-repo bars and single-repo SVG/ratio gap, Chinese visible-text punctuation audit, and actual Pages deployment success

This maintenance note records source/artifact and current/historical boundaries. It does not alter the frozen 2026-08-31 reporting window.
