# Historical evidence reconciliation

- Method version: 2026-09-17
- Governing decision: ADR-016
- Scope: `RESEARCH/**`, periodic aggregation, source chronology, natural-period closure, and current interpretation

## Objective

Reconstruct the strongest supportable interpretation of repository research history without backdating a later file, hiding uncertainty, or rewriting a point-in-time execution state.

## Inputs

- expected logical date or ISO period
- natural period start and end
- current repository paths
- original artifact status/evidence fields
- commit/merge history when available and material
- later errata or reconciliation records
- aggregation snapshot/coverage statements
- external primary evidence needed to recheck disputed claims

## Procedure

1. Build the expected artifact matrix for the target window.
2. Record current path presence separately from execution and delivery history.
3. Read original status/evidence fields before interpreting later files.
4. Keep distinct:
   - logical date/period
   - natural-period lifecycle state
   - execution/check time
   - source event/publication time
   - generation evidence
   - delivery/commit state
   - aggregation-snapshot visibility
   - current repository presence
   - substantive evidence completeness
5. Preserve `MISSING_DATA`, `NOT_COMPUTED`, blocked states, rejected observations, and unresolved hypotheses.
6. Check temporal causality for material observations. If the recorded source event occurs after the persisted observation/check time, use `TEMPORAL_PROVENANCE_CONFLICT` until stronger history resolves it.
7. If later evidence resolves only one dimension, update only that dimension.
8. When a historical claim is materially over-strong, narrow current interpretation using stronger evidence rather than pretending the stronger evidence existed at the original run time.
9. Use reconciliation/errata when silent editing would erase meaningful provenance.
10. State what remains historical fact, what current interpretation supersedes, and what remains unresolved.
11. For an incomplete natural week or month, keep the stage provisional; never synthesize future dates to produce a final seal.
12. When a natural period later ends, do not rewrite an earlier `NOT_YET_DUE`, `PARTIAL`, or provisional artifact. Re-evaluate the current period state from the now-due artifact set and record whether a final period artifact actually exists.
13. Treat `NATURAL_PERIOD_ENDED`, `ARTIFACT_COVERAGE_COMPLETE`, and `FINAL_PERIOD_SEAL_ESTABLISHED` as separate facts. None implies either of the others.

## Delivery-state vocabulary

- `AVAILABLE_AT_SNAPSHOT`
- `LATE_AVAILABLE_AFTER_SNAPSHOT`
- `BLOCKED_AT_EXECUTION`
- `GENERATED_BUT_NOT_DELIVERED`
- `UNRESOLVED_DELIVERY_HISTORY`
- `CURRENTLY_PRESENT`
- `CURRENTLY_ABSENT`

These states describe artifact history, not scientific truth.

## Period-lifecycle vocabulary

- `PERIOD_IN_PROGRESS`
- `NATURAL_PERIOD_ENDED`
- `ARTIFACT_COVERAGE_PARTIAL`
- `ARTIFACT_COVERAGE_COMPLETE`
- `FINAL_PERIOD_SEAL_NOT_ESTABLISHED`
- `FINAL_PERIOD_SEAL_ESTABLISHED`

A period ending does not make an earlier provisional synthesis final. Current path completeness does not prove that the final aggregate was generated after all inputs became due.

## Evidence-completeness vocabulary

- `EVIDENCE_COMPLETE_WITHIN_DECLARED_SCOPE`
- `PARTIAL_EVIDENCE`
- `MISSING_DATA`
- `NOT_COMPUTED`
- `UNRESOLVED`
- `SECONDARY_SOURCE_ONLY`
- `PRIMARY_SOURCE_REVALIDATED`

Path completeness and evidence completeness are reported independently.

## Temporal-provenance vocabulary

- `TEMPORAL_ORDER_VALID`
- `TEMPORAL_PROVENANCE_CONFLICT`
- `TIMESTAMP_PRECISION_INSUFFICIENT`
- `SOURCE_EVENT_TIME_UNVERIFIED`

A temporal conflict does not by itself prove fabrication. It means the persisted chronology cannot support the observation as written.

## Failure conditions

Return an unresolved/insufficient-history conclusion rather than guessing when:

- non-generation cannot be distinguished from non-delivery
- execution/check time cannot be recovered and chronology is material
- a later artifact is being used to fabricate an earlier runtime result
- source version/date identity is unresolved for a material proposition
- Weekly/Monthly synthesis would strengthen unresolved Daily evidence without a new evidence record
- a natural period ended but the only aggregate artifact was generated before one or more required inputs became due

## Current calibration through 2026-09-17

### August

The retained `RESEARCH/monthly/2026-08-monthly-manifest.md` is explicitly a through-day-30 provisional record. August later ended naturally, but this does not retroactively convert that artifact into a final natural-month seal.

Current interpretation:

`NATURAL_PERIOD_ENDED / FINAL_PERIOD_SEAL_NOT_ESTABLISHED_BY_THE_THROUGH_DAY_30_ARTIFACT`.

The historical provisional record remains unchanged.

### September W37

`RESEARCH/weekly/2026-W37-weekly-manifest.md` was generated while 2026-09-13 was marked `Not Yet Due` and therefore recorded `PARTIAL`. The 2026-09-13 Daily manifest is now present on current main.

Current interpretation:

`NATURAL_PERIOD_ENDED / CURRENT_DAILY_PATH_FOR_2026-09-13_PRESENT / HISTORICAL_W37_PARTIAL_RECORD_PRESERVED / FINAL_W37_SEAL_NOT_ESTABLISHED_BY_THAT_RECORD`.

This is a current reconciliation of period state, not a rewrite of the W37 execution.

## Outputs

- preserved original record plus a dated current disposition
- explicit contradiction, missing-data, supersession, or period-lifecycle state
- canonical authority and evidence boundary
- statement of whether execution was replayed
- explicit separation of natural period end, artifact coverage, and final aggregate seal

## Evidence boundary

This method reconciles documentary history. It does not recreate missing execution, manufacture absent metrics, alter `CODE/**` behavior, or transform an early aggregate into a final period result merely because later inputs now exist.
