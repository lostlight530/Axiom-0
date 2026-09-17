# Historical evidence reconciliation

- Method version: 2026-09-18
- Governing decision: ADR-016
- Scope: `RESEARCH/**`, periodic aggregation, source chronology, and current interpretation

## Objective

Reconstruct the strongest supportable interpretation of repository research history without backdating a later file, hiding uncertainty, or rewriting a point-in-time execution state.

## Inputs

- expected logical date or ISO period
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
11. For an incomplete natural month, keep the stage provisional; never synthesize future dates to produce a final seal.

## Delivery-state vocabulary

- `AVAILABLE_AT_SNAPSHOT`
- `LATE_AVAILABLE_AFTER_SNAPSHOT`
- `BLOCKED_AT_EXECUTION`
- `GENERATED_BUT_NOT_DELIVERED`
- `UNRESOLVED_DELIVERY_HISTORY`
- `CURRENTLY_PRESENT`
- `CURRENTLY_ABSENT`

These states describe artifact history, not scientific truth.

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

## Historical August 2026 calibration example

The statements below are retained as an example of how this method was applied to an August 2026 cutoff. They are **not current week/month status** and must not be read as the repository's present monthly state.

At the historical calibration cutoff used by the August reconciliation:

- Daily artifact paths for the reviewed August window were currently present at that cutoff
- W31–W34 Weekly artifacts were present at that cutoff
- current path coverage did not erase missing/not-computed evidence inside those records
- the 2026-08-19 record contained a stored chronology conflict between check time and cited source release time
- the 2026-08-20/21 `Actual Input Range: 0.0 to 0.0` wording did not substitute for named KL input cases
- formal August Monthly/A6 closure was still open at the recorded pre-month-end cutoff

The corresponding historical stage interpretation was:

`PATH_COVERAGE_COMPLETE_WITH_BOUNDED_EVIDENCE_AND_MONTH_OPEN`

That label belongs to its recorded cutoff only. Current August closure, current weekly state, or later September interpretation must be recovered from the most recent retained current/historical record with its own date and evidence; this methodology does not infer those later states.

## Outputs

- preserved original record plus a dated current disposition
- explicit contradiction, missing-data, or supersession state
- canonical authority and evidence boundary
- statement of whether execution was replayed

## Evidence boundary

This method reconciles documentary history. It does not recreate missing execution, manufacture absent metrics, or alter `CODE/**` behavior.

A historical example inside this methodology is not a live status dashboard. Later current state must be established from later evidence rather than from the example's cutoff label.
