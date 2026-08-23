# Monthly Research Records

This directory contains Axiom monthly research artifacts and explicitly labeled provisional stage audits.

Monthly files are evidence summaries. They do not retroactively rewrite Daily or Weekly execution history.

## Record classes

### Formal monthly lifecycle

A formal natural-month closure belongs to the repository's scheduled monthly lifecycle and its canonical monthly artifact naming.

A formal monthly record may summarize Daily/Weekly evidence only after the relevant natural-month evidence window is complete.

### Provisional stage audit

A file such as [`2026-08-through-23-stage-audit.md`](./2026-08-through-23-stage-audit.md) is a `PROVISIONAL_STAGE_AUDIT`.

It may:

- inventory current Daily/Weekly paths
- identify missing or late evidence
- reconcile current repository state with historical snapshots
- narrow over-strong claims
- extract reusable ADR/methodology rules
- record open month-end work

It must not:

- claim to be the formal A6 monthly closure
- convert current path presence into historical execution success
- erase `MISSING_DATA`, `NOT_COMPUTED`, blocked, rejected, or unresolved evidence
- fabricate evidence for dates that were not observed
- treat repeated citation as independent corroboration

## Temporal evidence rule

ADR-016 and METH-015 govern monthly interpretation.

When they differ, report separately:

1. logical date / period
2. execution state
3. generation evidence
4. delivery or merge state
5. aggregation-snapshot visibility
6. current repository presence
7. substantive evidence completeness

A later merge can improve current coverage without changing what an earlier Weekly/Monthly task actually saw.

## Closure rule

Before a natural month ends, the strongest allowed status is provisional unless a separately defined lifecycle explicitly says otherwise.

A formal monthly closure should state:

- exact coverage window
- Daily/Weekly inputs included
- missing/late/unresolved inputs
- evidence-quality limitations
- corrections or reconciliations applied
- claim scope and external-source versions where material
- carry-forward items

`100% path coverage` is never sufficient by itself to claim `100% evidence completeness`.

## Authority

Read evidence in this order when interpretation differs:

1. original Daily/Weekly artifact for point-in-time execution state
2. explicit erratum/reconciliation for later corrected interpretation
3. accepted ADR / methodology / specification for durable repository rules
4. monthly synthesis for bounded aggregation

This directory is documentation/evidence only. It does not modify Jules prompts, repository memory, scheduler, runtime code, frontend, `.github/**`, Actions, CI, deployment, or merge gates.