# Axiom — final traffic snapshot

核心五仓流量展示封存于 **2026-08-31**，不再追加后续数据。项目窗口 **2026-02-12 → 2026-08-31**，经过 **200 天**，首尾均计 **201 个自然日**。保留现有页面布局；Daily SOP 不受流量封存影响。

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

Operations remains its independent **2026-08-07** snapshot: 10,915 minutes / 8,958 runs. Traffic totals do not extend that operational window. Pages deployment is not Python runtime validation.

## Implementation and verification

[Dashboard.tsx](src/pages/Dashboard.tsx) holds the static display values. Historical rows are inherited from main `fdc0f21f8cb3305e2f2322642fce357325b6d490`; final unique counts use the explicitly normalized interval sum. No polling or ingestion service runs in the page.

From `FRONTEND`, using existing locked dependencies:

```text
npm ci --ignore-scripts
node --test tests/final-snapshot.test.mjs
npm run build -- --outDir <dedicated-empty-preview-directory-outside-the-repository>
npm run preview -- --host 127.0.0.1 --outDir <same-preview-directory>
```

Regression tests render the real Dashboard and check totals, dates, the interval-total rounding order and unique-count labels. Browser review checks all five repository filters, language switching and Traffic/Operations/Method tabs. Default build output is `../docs`; override it during local review to avoid modifying tracked Pages artifacts.

No dependency, lockfile, runtime, workflow or private SOP changes are included. Dependency advisories are separate maintenance work. Do not claim deployment from a local build.

## Freeze and rollback

No later traffic rows or scheduled updater. Corrections to existing errors require review; they do not authorize extending the window. Revert this frontend commit to restore the previous page without affecting the separate Daily evidence PR.
