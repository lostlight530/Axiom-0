> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `DECISION`
> - **Role:** Current architecture decision: **Serialized heuristic state adaptation**
> - **Authority:** Current repository-native design rationale and constraint for the architecture surface expressed by this decision
> - **Current meaning:** The owning proposition is the subject named above. Read its implementation anchors against current `CODE/**` and `SPECIFICATION.md`; the ADR preserves why the constraint exists and how it should bound present interpretation
> - **Evidence / implementation boundary:** An accepted ADR does not prove execution, scientific validation, external-system behavior, or historical task completion. Legacy terminology in the filename does not broaden the narrower current proposition stated by the document body
> - **Cross-document relation:** `SPECIFICATION.md` owns current implementation semantics; `METHODOLOGY/**` owns repeatable procedure; dated evidence owns point-in-time observation; index/navigation files do not add evidence
> - **Update trigger:** Update when this decision changes, its implementation anchor contradicts it, or a confirmed authority/evidence conflict requires explicit reconciliation
> - **Preservation rule:** Existing decision history, rationale and examples remain in the same file. This pass clarifies current architecture meaning without deleting the original record

# Serialized heuristic state adaptation

## 中文专业对照 / Chinese technical counterpart

**本 ADR 的可核对命题 / Auditable proposition:** Liquid Morphing 只是受限的内存态启发式适配

**English owner:** Serialized heuristic state adaptation

**具体判据 / Operational reading:** 判断本条记录时应同时定位当前 `SPECIFICATION.md`、适用源码、精确版本与该文件所列的证据边界，不能把历史设计决定当成已发生的运行结果 / The decision's implementation and validation must be established independently at the exact revision

| Original section / 英文原章节 | 中文阅读定位 / Chinese reading section |
| --- | --- |
| Context | 背景与触发条件 |
| Decision | 已接受的决策 |
| Consequences | 后果与代价 |
| Evidence boundary | 证据适用范围 |
| Caller boundary | 专业原文对应边界 |
| State-transition precedence and negative cases (2026-11-15) | 专业原文对应边界 |

**保留原则 / Preservation:** 原有决策正文、状态、历史解释与例外保持不变，本双语章节仅提供当前可检验的阅读路径 / Existing decision text and historic states remain the owner; this is a language and navigation addition


- Decision date: 2026-08-05
- Review calibration: 2026-08-24
- Status: Accepted
- Implementation anchor: `CODE/liquid_morphing.py`

## Context

The repository implements local state labels and heuristic transitions, not “knowledge solidification” in a semantic or cognitive sense.

`AxiomMorphingEngine` evaluates caller-provided `SystemMetrics` and may request a transition among local state labels such as `SOLID`, `LIQUID`, `GAS`, and `PLASMA`.

## Decision

Describe the mechanism as serialized heuristic state adaptation.

Implemented properties:

- `SystemMetrics` validates normalized CPU, memory, and entropy-level inputs plus non-negative task/queue counts
- `evaluate_morph()` applies explicit local thresholds and weights
- `shift()` serializes transition commit using `asyncio.Lock`
- optional `prepare` and `validate` hooks run before state commit
- failure preserves the source state and records the exception type
- transition history records source/target state, timing, success, and error type

The state names are operational labels only.

## Consequences

The code remains useful as an auditable reference for bounded state adaptation without implying semantic transformation, self-optimization, or production control safety.

## Evidence boundary

A successful transition shows that the local hook/commit path completed for the supplied metrics and revision.

It does not prove:

- globally optimal state selection
- workload prediction accuracy
- semantic/cognitive phase change
- production readiness
- durable state persistence beyond the object lifetime

## Caller boundary

Embedding systems own real readiness checks, external state persistence, resource isolation, and consequential side effects.

## State-transition precedence and negative cases (2026-11-15)

`evaluate_morph` checks entropy alert **before** load: `entropy_level > 0.30` selects PLASMA if not already there; otherwise `load_score > 0.85` can advance SOLID→LIQUID or LIQUID→GAS; otherwise `load_score < 0.30` resets a non-SOLID state to SOLID. Equality is not enough to trigger those branches. `load_score` depends on normalized CPU/memory maxima and capped queue depth, not on a measured global entropy model.

`shift` holds an `asyncio.Lock` across optional `prepare` and `validate` callbacks and local state assignment. If a callback raises an `Exception`, the source state remains and an error type is recorded in history, but the exception propagates. A same-state request returns `False` before adding a history entry. The lock is process/object-local; none of these transitions provides durable state or compensates effects a callback might have performed before raising.

These are static code-path claims. A runtime behavior change or side-effectful hook should be evaluated independently; no new test is implied by this amendment.
