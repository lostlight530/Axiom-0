> [!NOTE]
> **Current architecture interpretation — 2026-10-04**
> - **Subject class:** `DECISION`
> - **Role:** Current architecture decision: **Temporal evidence availability is multi-dimensional**
> - **Authority:** Current repository-native design rationale and constraint for the architecture surface expressed by this decision
> - **Current meaning:** The owning proposition is the subject named above. Read its implementation anchors against current `CODE/**` and `SPECIFICATION.md`; the ADR preserves why the constraint exists and how it should bound present interpretation
> - **Evidence / implementation boundary:** An accepted ADR does not prove execution, scientific validation, external-system behavior, or historical task completion. Legacy terminology in the filename does not broaden the narrower current proposition stated by the document body
> - **Cross-document relation:** `SPECIFICATION.md` owns current implementation semantics; `METHODOLOGY/**` owns repeatable procedure; dated evidence owns point-in-time observation; index/navigation files do not add evidence
> - **Update trigger:** Update when this decision changes, its implementation anchor contradicts it, or a confirmed authority/evidence conflict requires explicit reconciliation
> - **Preservation rule:** Existing decision history, rationale and examples remain in the same file. This pass clarifies current architecture meaning without deleting the original record

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
5. `BASE_REVISION`
6. `BRANCH_OR_REF_IDENTITY`
7. `AGGREGATION_SNAPSHOT_VISIBILITY`
8. `BRANCH_SNAPSHOT_VISIBILITY`
9. `EVENTUAL_MAIN_VISIBILITY`
10. `CURRENT_REPOSITORY_PRESENCE`
11. `SUBSTANTIVE_EVIDENCE_COMPLETENESS`

A later repository state does not retroactively rewrite an earlier execution-state fact.

Therefore:

- `CURRENT_REPOSITORY_PRESENCE = PRESENT` does not imply `AVAILABLE_AT_ORIGINAL_SNAPSHOT`
- visibility on a sibling branch does not imply visibility from the branch/ref actually used by an aggregation run
- `EVENTUAL_MAIN_VISIBILITY = PRESENT` does not retroactively change `BRANCH_SNAPSHOT_VISIBILITY` at the earlier cut
- two branches sharing the same base revision remain separate evidence snapshots after they diverge
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

## 2026-10-04 special calibration — branch-relative visibility

The 2026-10-04 W40 Plasma sequence supplied a concrete repository-native calibration for this decision.

- Weekly Draft PR `#335` and Daily PR `#336` were created from the same then-current base revision.
- The Weekly branch could not consume Daily content that existed only on the sibling Daily branch.
- The Weekly record therefore retained a schedule-order / availability boundary at its own snapshot.
- Daily PR `#336` later merged to `main`.
- Weekly PR `#335` remained closed-unmerged delivery history.
- Weekly PR `#337` was rebuilt from the post-Daily current `main` and then merged.
- The later successful current Weekly does not make the earlier Weekly branch snapshot retroactively complete.

The durable interpretation is:

```text
SAME_BASE_REVISION
!= SAME_BRANCH_SNAPSHOT

SIBLING_BRANCH_PATH_PRESENT
!= INPUT_VISIBLE_TO_THIS_RUN

LATER_MAIN_VISIBILITY
!= EARLIER_BRANCH_VISIBILITY

CURRENT_SUCCESSOR_SUCCESS
!= EARLIER_DRAFT_INPUT_AVAILABLE
```

This calibration strengthens the existing temporal-evidence decision; it does not create a new runtime capability or rewrite PR `#335`.
