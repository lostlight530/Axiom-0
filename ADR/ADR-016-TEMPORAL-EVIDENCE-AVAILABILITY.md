# Temporal evidence availability lifecycle

- Decision date: 2026-08-24
- Status: Accepted for independent repository maintenance
- Scope: research artifacts, periodic aggregation, reconciliation, and evidence interpretation

## Jules automation boundary

This decision belongs to the repository governance and post-hoc review layer. It is not a Jules prompt, Jules memory entry, scheduler rule, CI gate, workflow, or runtime instruction.

## Context

August 2026 showed that one word such as `missing` can collapse several different facts:

- the logical date assigned to an artifact
- whether a task actually executed
- whether an artifact was generated
- whether the generated artifact was delivered or merged
- whether it was visible to a Weekly/Monthly aggregation snapshot
- whether it exists in the repository now
- whether its substantive evidence fields are complete

A path can exist today while the original run was blocked, late, incomplete, or reconstructed only as a reconciliation record. Conversely, an artifact absent from an aggregation snapshot may later become available without proving that it existed at the earlier snapshot.

## Decision

Axiom evidence interpretation MUST keep the following dimensions separate when they materially differ:

1. `LOGICAL_DATE_OR_PERIOD`
2. `EXECUTION_STATE`
3. `GENERATION_EVIDENCE`
4. `DELIVERY_OR_MERGE_STATE`
5. `AGGREGATION_SNAPSHOT_VISIBILITY`
6. `CURRENT_REPOSITORY_PRESENCE`
7. `SUBSTANTIVE_EVIDENCE_COMPLETENESS`

A later repository state MUST NOT retroactively rewrite an earlier execution-state fact.

`CURRENT_REPOSITORY_PRESENCE = PRESENT` does not imply `AVAILABLE_AT_ORIGINAL_SNAPSHOT`, `EXECUTION_SUCCESS`, or `EVIDENCE_COMPLETE`.

`MISSING_AT_SNAPSHOT` does not imply `NEVER_GENERATED` unless generation history is independently established.

When history cannot distinguish non-generation from non-delivery, use `UNRESOLVED_DELIVERY_HISTORY` or an equally explicit uncertainty state.

## Reconciliation precedence

Historical Daily/Weekly/Monthly artifacts remain point-in-time execution records. A post-hoc reconciliation may supersede their **current interpretation**, but it does not erase their original run state.

A reconciliation record SHOULD state:

- original observation or run state
- later repository evidence
- corrected current interpretation
- unresolved dimensions
- precedence and scope
- explicit non-retroactivity statement

## Monthly closure

A partial-month stage report is not a formal monthly closure. Before the natural month ends, use `PROVISIONAL_STAGE_AUDIT` or equivalent wording. Formal A6/Monthly status remains open until its own scheduled evidence exists.

## Relationship to existing decisions

- ADR-013 limits verification and completion claims to their tested scope
- ADR-014 separates repository knowledge layers
- ADR-016 adds the temporal availability dimension across those layers
- METH-015 defines the corresponding reconciliation procedure

## Consequences

Repository history becomes more verbose but materially harder to misread. Aggregation can remain deterministic without pretending that delivery order, path existence, execution success, and evidence completeness are the same state.

No runtime behavior, host code, automation cadence, CI, frontend, or production policy changes are authorized by this ADR.
