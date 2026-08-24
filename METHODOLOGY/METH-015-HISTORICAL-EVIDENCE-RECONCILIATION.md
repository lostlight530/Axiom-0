# Historical evidence reconciliation

- Method version: 2026-08-24
- Authority: independent maintenance procedure under ADR-016
- Normative terms: MUST is required; SHOULD requires a recorded reason when omitted

## Objective

Reconstruct the strongest supportable interpretation of periodic research history without backdating a new run, hiding uncertainty, or rewriting a point-in-time execution state.

## Inputs

- expected logical date or ISO period
- current repository paths
- original artifact headers and evidence fields
- commit / PR / merge history when available
- later errata or reconciliation records
- aggregation snapshot and coverage statements
- external primary sources needed to recheck disputed claims

## Procedure

1. Build the expected artifact matrix for the target window.
2. Record current path presence separately from execution and delivery history.
3. Read original status fields before interpreting later commits.
4. Separate `logical date`, `execution/check time`, `source event/publication time`, `generation evidence`, `delivery/merge time`, and `aggregation visibility`.
5. Preserve `MISSING_DATA`, `NOT_COMPUTED`, blocked states, unresolved hypotheses, rejected observations, and untested boundaries.
6. Validate temporal causality for material observations. A source event recorded as occurring after the persisted check time cannot be treated as observed by that check without independent evidence resolving the timestamps.
7. If later evidence resolves only one dimension, update only that dimension.
8. If a claim is materially over-strong, verify the strongest available primary source and narrow the claim rather than deleting useful history.
9. Create a reconciliation or erratum when rewriting the historical artifact would falsely imply that the corrected knowledge existed at execution time.
10. State precedence: what historical text remains factual, what interpretation is superseded, and what is still unresolved.
11. For an incomplete natural month, publish only a provisional stage audit; do not emit a formal monthly-final success state.

## Delivery-state vocabulary

Recommended states:

- `AVAILABLE_AT_SNAPSHOT`
- `LATE_AVAILABLE_AFTER_SNAPSHOT`
- `BLOCKED_AT_EXECUTION`
- `GENERATED_BUT_NOT_MERGED`
- `UNRESOLVED_DELIVERY_HISTORY`
- `CURRENTLY_PRESENT`
- `CURRENTLY_ABSENT`

These states describe availability and history, not scientific truth.

## Evidence-completeness vocabulary

Recommended independent states:

- `EVIDENCE_COMPLETE_WITHIN_DECLARED_SCOPE`
- `PARTIAL_EVIDENCE`
- `MISSING_DATA`
- `NOT_COMPUTED`
- `UNRESOLVED`
- `SECONDARY_SOURCE_ONLY`
- `PRIMARY_SOURCE_REVALIDATED`

Path completeness and evidence completeness MUST be reported independently.

## Temporal provenance vocabulary

Use these states when source/event timing and persisted observation timing matter:

- `TEMPORAL_ORDER_VALID`: the recorded source event/publication time is not later than the recorded observation/check time, within the precision available
- `TEMPORAL_PROVENANCE_CONFLICT`: persisted timestamps imply that the observation occurred before the recorded source event/publication
- `TIMESTAMP_PRECISION_INSUFFICIENT`: available timestamp precision is too coarse to establish ordering
- `SOURCE_EVENT_TIME_UNVERIFIED`: a material event/publication timestamp has not been independently verified

A `TEMPORAL_PROVENANCE_CONFLICT` does not by itself prove fabrication. It means the persisted chronology cannot support the claimed observation as written and must not be silently normalized into `OBSERVED`.

## Failure conditions

Fail the reconciliation as `INSUFFICIENT_HISTORY` rather than guessing when:

- no evidence distinguishes never-generated from never-delivered
- execution/check time cannot be recovered and timing matters to the conclusion
- a later artifact is being used to fabricate an earlier runtime result
- source version/date identity is unresolved for a material claim
- persisted chronology places the source event after the claimed observation and no independent evidence resolves the conflict
- a weekly/monthly aggregate would strengthen an unresolved Daily claim without new evidence

## Output

A useful reconciliation includes a coverage matrix, current-vs-historical state, corrected interpretation, source revalidation where needed, temporal-provenance conflicts, unresolved items, and an explicit statement that no runtime or automation behavior was changed.

## August 2026 calibration

The 2026-08-01 through 2026-08-23 Axiom audit is the reference case for this method:

- all 23 Daily artifact paths are currently present
- W31 through W34 Weekly artifacts are currently present
- W33 still contains evidence fields that were missing or not computed even though Daily path coverage is complete
- 2026-08-19 records a VS Code release time of `2026-08-19T09:08:11Z` while persisting its own check time as `2026-08-19T00:00:00Z`; that observation is therefore a `TEMPORAL_PROVENANCE_CONFLICT` until independent history resolves the timestamps
- 2026-08-20 and 2026-08-21 persist `Actual Input Range: 0.0 to 0.0` even though the emitted KL evidence identifies named `identity` and `renormalized_identity` cases; the scalar phrase is not reusable as input provenance
- a formal August A6 monthly closure does not yet exist as of the 2026-08-23 evidence boundary

The correct conclusion is therefore not simply `100% complete`; it is `PATH_COVERAGE_COMPLETE_WITH_BOUNDED_EVIDENCE_AND_MONTH_OPEN`.
