> [!NOTE]
> **Current architecture interpretation — 2026-10-04**
> - **Subject class:** `METHOD`
> - **Role:** Current methodology: **Historical evidence reconciliation**
> - **Authority:** Repository-native method authority for the procedure, assumptions, thresholds, evidence treatment and limitations expressed by this file
> - **Current meaning:** The method owns the procedural semantics named above. Read steps and thresholds as a contract for how the repository should reason or check, not as evidence that the method executed at the current revision
> - **Evidence / implementation boundary:** Method definition != method execution. Conceptual procedures do not become runtime capability without an implementation anchor, and historical examples retain their own cutoff rather than defining present status
> - **Cross-document relation:** `SPECIFICATION.md` and current `CODE/**` bound implementation; ADRs explain durable design choices; dated evidence and periodic records provide observations without redefining the method
> - **Update trigger:** Update when the procedure, assumptions, thresholds, implementation mapping, evidence semantics or historical/current boundary materially changes
> - **Preservation rule:** Existing procedure, examples and rationale remain in the same file. Current clarification is additive and does not erase earlier method history

# Historical evidence reconciliation

## 中文完整方法阅读定位 / Chinese method reading

**本方法的实质 / Concrete method:** `METH-014` 将声明、当前代码、版本化来源和可复核证据绑定，审查声称的能力是否有相应真实实现，不把引用数量、论文地位或文件存在晋升为可执行能力

**English owning title:** Historical evidence reconciliation

| English method section | 中文对应标题 |
| --- | --- |
| Objective | 目标 |
| Inputs | 输入 |
| Procedure | 步骤 |
| Delivery-state vocabulary | 具体证据与方法约束 |
| Evidence-completeness vocabulary | 具体证据与方法约束 |
| Temporal-provenance vocabulary | 具体证据与方法约束 |
| Failure conditions | 失败条件 |
| Historical August 2026 calibration example | 具体证据与方法约束 |
| Outputs | 结果 |
| Evidence boundary | 证据约束 |
| 2026-10-04 branch-snapshot reference case | 具体证据与方法约束 |
| Code-claim reconciliation example unrelated to cadence | 具体证据与方法约束 |

**审查边界 / Review boundary:** 文本定义 groundedness 的检查口径，而不是在没有独立执行收据时宣称已验证，原有反例和历史状态不被覆盖 / A documented groundedness procedure is not an executed source or runtime validation


- Method version: 2026-10-04
- Governing decision: ADR-016
- Scope: `RESEARCH/**`, periodic aggregation, source chronology, and current interpretation

## Objective

Reconstruct the strongest supportable interpretation of repository research history without backdating a later file, hiding uncertainty, or rewriting a point-in-time execution state.

## Inputs

- expected logical date or ISO period
- exact base revision used by the run
- exact branch/ref identity used by the run
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
   - exact base revision
   - branch/ref identity
   - sibling-branch visibility versus visibility from the observed branch/ref
   - execution/check time
   - source event/publication time
   - generation evidence
   - delivery/commit state
   - aggregation-snapshot visibility
   - current repository presence
   - substantive evidence completeness
5. Preserve `MISSING_DATA`, `NOT_COMPUTED`, blocked states, rejected observations, and unresolved hypotheses.
6. Check temporal causality for material observations. If the recorded source event occurs after the persisted observation/check time, use `TEMPORAL_PROVENANCE_CONFLICT` until stronger history resolves it.
7. If an input exists only on a sibling branch, record it as unavailable to the observed branch/ref unless the run explicitly fetched that sibling state.
8. If later evidence resolves only one dimension, update only that dimension.
9. When a historical claim is materially over-strong, narrow current interpretation using stronger evidence rather than pretending the stronger evidence existed at the original run time.
10. Use reconciliation/errata when silent editing would erase meaningful provenance.
11. State what remains historical fact, what current interpretation supersedes, and what remains unresolved.
12. For an incomplete natural month, keep the stage provisional; never synthesize future dates to produce a final seal.

## Delivery-state vocabulary

- `AVAILABLE_AT_SNAPSHOT`
- `BRANCH_VISIBLE_AT_SNAPSHOT`
- `SIBLING_BRANCH_PRESENT_BUT_NOT_VISIBLE`
- `EVENTUALLY_VISIBLE_ON_MAIN`
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


## 2026-10-04 branch-snapshot reference case

The W40 Daily/Weekly sequence is the current reference case for branch-relative evidence availability.

1. Record the Weekly run's base revision and branch/ref.
2. Record the Daily branch separately even when it shares the same base revision.
3. Do not treat sibling-branch content as Weekly input unless that content was actually visible from the Weekly run's observed state.
4. Preserve the early Weekly disposition as a point-in-time record.
5. After the Daily merges, rebuild or reconcile the Weekly from fresh current `main` when the contract requires the new input.
6. Preserve both states:

```text
EARLY_WEEKLY_SNAPSHOT = INPUT_NOT_VISIBLE_AT_THAT_CUT
LATER_WEEKLY_SUCCESSOR = INPUT_VISIBLE_ON_POST_DAILY_MAIN
```

Neither state erases the other. This procedure is documentary reconciliation; it does not replay the original task or manufacture missing execution.

## Code-claim reconciliation example unrelated to cadence

For any historical statement that T-09 validated arbitrary caller input, preserve the dated statement and inspect `CODE/nexus_core.py` at the revision actually observed then. The currently inspected revision `555ed4ea5c2a7bec99e86e595147c1c53f1d9086` routes T-09 through the fixed fallback because `state["distribution"]` is not assigned. This **current source fact** does not establish the same data flow for an uninspected earlier commit.

A legitimate current reconciliation should separately record the older source revision (if recoverable), the exact claim, the present source counterexample, and whether any historical execution trace exists. If the earlier revision is unavailable, mark past behavior `UNRESOLVED`; do not backfill a new test or assert the old claim was false at its original cutoff.
