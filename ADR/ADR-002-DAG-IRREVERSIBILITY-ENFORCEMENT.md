> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `DECISION`
> - **Role:** Current architecture decision: **T-01 to T-10 is a single-run reference sequence**
> - **Authority:** Current repository-native design rationale and constraint for the architecture surface expressed by this decision
> - **Current meaning:** The owning proposition is the subject named above. Read its implementation anchors against current `CODE/**` and `SPECIFICATION.md`; the ADR preserves why the constraint exists and how it should bound present interpretation
> - **Evidence / implementation boundary:** An accepted ADR does not prove execution, scientific validation, external-system behavior, or historical task completion. Legacy terminology in the filename does not broaden the narrower current proposition stated by the document body
> - **Cross-document relation:** `SPECIFICATION.md` owns current implementation semantics; `METHODOLOGY/**` owns repeatable procedure; dated evidence owns point-in-time observation; index/navigation files do not add evidence
> - **Update trigger:** Update when this decision changes, its implementation anchor contradicts it, or a confirmed authority/evidence conflict requires explicit reconciliation
> - **Preservation rule:** Existing decision history, rationale and examples remain in the same file. This pass clarifies current architecture meaning without deleting the original record

# T-01 to T-10 is a single-run reference sequence

## 中文专业对照 / Chinese technical counterpart

**本 ADR 的可核对命题 / Auditable proposition:** T-01 至 T-10 是单轮序列，不等于跨运行不可逆 DAG

**English owner:** T-01 to T-10 is a single-run reference sequence

**具体判据 / Operational reading:** 判断本条记录时应同时定位当前 `SPECIFICATION.md`、适用源码、精确版本与该文件所列的证据边界，不能把历史设计决定当成已发生的运行结果 / The decision's implementation and validation must be established independently at the exact revision

| Original section / 英文原章节 | 中文阅读定位 / Chinese reading section |
| --- | --- |
| Context | 背景与触发条件 |
| Decision | 已接受的决策 |
| Consequences | 后果与代价 |
| Evidence boundary | 证据适用范围 |
| External-effect boundary | 外部副作用边界 |
| Current pipeline identity and failure surface (2026-11-15) | 专业原文对应边界 |

**保留原则 / Preservation:** 原有决策正文、状态、历史解释与例外保持不变，本双语章节仅提供当前可检验的阅读路径 / Existing decision text and historic states remain the owner; this is a language and navigation addition


- Decision date: 2026-08-05
- Review calibration: 2026-08-24
- Status: Accepted
- Implementation anchor: `CODE/nexus_core.py`

## Context

`AxiomOrchestrator` implements a fixed successful-run sequence from `T-01` through `T-10`. Earlier “DAG irreversibility” language was stronger than the code.

The implementation is a single-process reference pipeline. It records ordered events for one run; it does not provide a distributed DAG scheduler, durable workflow engine, external transaction coordinator, or irreversible global state machine.

## Decision

Describe the implemented topology as:

`ORDERED_REFERENCE_PIPELINE(T-01 ... T-10)`.

For a successful `run_continuum()` execution:

- stage order is fixed by the implementation
- each event records stage identity and status
- `T-04` may request a state morph through the injected metrics provider
- `T-09` performs the configured KL comparison
- output includes the run identifier, resulting local state, event records, and limitations

A new execution is a new run. Historical run events are not an idempotency or retry protocol for external side effects.

## Consequences

Research can reason about ordered stage behavior without claiming irreversible state or a production workflow engine.

## Evidence boundary

A retained run/event sequence can establish the stages observed for that run and revision.

It cannot by itself establish:

- durable workflow persistence
- exactly-once external effects
- distributed scheduling
- compensation semantics
- global convergence
- future-run correctness

## External-effect boundary

The reference core does not implement external side-effect idempotency or compensation. An embedding system that adds consequential effects owns those semantics separately.

## Current pipeline identity and failure surface (2026-11-15)

In `CODE/nexus_core.py` the next stage is reached by iterating over the fixed `self.nodes` tuple; this is **linear control flow**, not a graph scheduler with edges or durable checkpoints. At T-09 a configured KL limit may raise `RuntimeError`; the accumulated event list is then not returned by `run_continuum`. A caller needs separate exception/instrumentation evidence to reconstruct incomplete execution.

The returned `run_id` hashes the event records including `observed_at` timestamps. It identifies a serialized single-run trace rather than a stable idempotency key, and provides no exactly-once or compensation guarantee. T-09 also currently uses its fallback distribution, so stage completion is not evidence of testing arbitrary input distribution values.
