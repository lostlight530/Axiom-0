# Temporal evidence availability is multi-dimensional

- Decision date: 2026-08-24
- Status: Accepted
- Scope: `RESEARCH/**`, periodic aggregation, reconciliation, and current evidence interpretation

## Context

August 2026 demonstrated that one word such as `missing`, `present`, or `complete` can collapse several different facts:

- logical date or target period
- whether an original task/run executed
- whether an artifact was generated
- whether it was delivered or committed
- whether it was visible to the aggregation snapshot that actually ran
- whether it exists in the repository now
- whether its substantive evidence fields were complete

These dimensions must remain separable because a path can exist today while the historical execution was late, blocked, incomplete, or only later reconciled.

## Decision

When the dimensions materially differ, Axiom evidence records keep these states separate:

1. `LOGICAL_DATE_OR_PERIOD`
2. `EXECUTION_STATE`
3. `GENERATION_EVIDENCE`
4. `DELIVERY_OR_COMMIT_STATE`
5. `AGGREGATION_SNAPSHOT_VISIBILITY`
6. `CURRENT_REPOSITORY_PRESENCE`
7. `SUBSTANTIVE_EVIDENCE_COMPLETENESS`

A later repository state does not retroactively rewrite an earlier execution-state fact.

Therefore:

- `CURRENT_REPOSITORY_PRESENCE = PRESENT` does not imply `AVAILABLE_AT_ORIGINAL_SNAPSHOT`
- current path presence does not imply original execution success
- path completeness does not imply evidence completeness
- `MISSING_AT_SNAPSHOT` does not imply `NEVER_GENERATED` unless generation history independently supports that conclusion
- when non-generation and non-delivery cannot be distinguished, use `UNRESOLVED_DELIVERY_HISTORY`

## Reconciliation semantics

Historical Daily/Weekly/Monthly artifacts remain point-in-time records.

A later reconciliation may change the **current interpretation** of a historical artifact while preserving the original execution state.

A useful reconciliation identifies:

- original observation/run state
- later repository evidence
- corrected current interpretation
- unresolved dimensions
- precedence/scope
- explicit non-retroactivity

## Temporal causality

Availability history and source chronology are related but distinct.

If a persisted observation/check time precedes the material source event/publication time recorded for the same claim, classify the evidence as `TEMPORAL_PROVENANCE_CONFLICT` until independent history resolves the chronology.

A chronological conflict does not by itself prove fabrication; it means the stored chronology cannot support the observation as written.

## Monthly boundary

A partial-month stage audit is not a formal monthly closure.

Before the natural month ends, the current August synthesis remains provisional. A later final-month artifact must arise from actual later evidence rather than synthetic future dates.

## Relationship to repository layers

- ADR-013 limits verification/completion claims to the evidence surface actually used
- ADR-014 separates repository authority layers
- METH-015 defines the detailed historical reconciliation procedure

## Consequences

Repository history becomes more explicit, but delivery order, path presence, execution success, and evidence completeness can no longer be mistaken for one binary state.

## Evidence boundary

This ADR governs evidence interpretation only. It does not alter `CODE/**` behavior or create an implementation capability.