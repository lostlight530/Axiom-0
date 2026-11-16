> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `DECISION`
> - **Role:** Current architecture decision: **Cleanup and sandbox behavior are not implemented by the reference core**
> - **Authority:** Current repository-native design rationale and constraint for the architecture surface expressed by this decision
> - **Current meaning:** The owning proposition is the subject named above. Read its implementation anchors against current `CODE/**` and `SPECIFICATION.md`; the ADR preserves why the constraint exists and how it should bound present interpretation
> - **Evidence / implementation boundary:** An accepted ADR does not prove execution, scientific validation, external-system behavior, or historical task completion. Legacy terminology in the filename does not broaden the narrower current proposition stated by the document body
> - **Cross-document relation:** `SPECIFICATION.md` owns current implementation semantics; `METHODOLOGY/**` owns repeatable procedure; dated evidence owns point-in-time observation; index/navigation files do not add evidence
> - **Update trigger:** Update when this decision changes, its implementation anchor contradicts it, or a confirmed authority/evidence conflict requires explicit reconciliation
> - **Preservation rule:** Existing decision history, rationale and examples remain in the same file. This pass clarifies current architecture meaning without deleting the original record

# Cleanup and sandbox behavior are not implemented by the reference core

## 中文专业对照 / Chinese technical counterpart

**本 ADR 的可核对命题 / Auditable proposition:** 沙箱销毁和资源清理没有本仓可执行实现

**English owner:** Cleanup and sandbox behavior are not implemented by the reference core

**具体判据 / Operational reading:** 判断本条记录时应同时定位当前 `SPECIFICATION.md`、适用源码、精确版本与该文件所列的证据边界，不能把历史设计决定当成已发生的运行结果 / The decision's implementation and validation must be established independently at the exact revision

| Original section / 英文原章节 | 中文阅读定位 / Chinese reading section |
| --- | --- |
| Context | 背景与触发条件 |
| Decision | 已接受的决策 |
| Consequences | 后果与代价 |
| Evidence boundary | 证据适用范围 |
| Promotion boundary | 专业原文对应边界 |

**保留原则 / Preservation:** 原有决策正文、状态、历史解释与例外保持不变，本双语章节仅提供当前可检验的阅读路径 / Existing decision text and historic states remain the owner; this is a language and navigation addition


- Decision date: 2026-08-05
- Review calibration: 2026-08-24
- Status: Accepted boundary decision
- Implementation status: `NOT_IMPLEMENTED_IN_REFERENCE_CORE`
- Historical filename retained for continuity

## Context

The historical ADR name refers to sandbox self-destruction, but the current Axiom executable core contains no sandbox manager, workspace lifecycle service, recursive cleanup engine, credential scrubber, or recoverable deletion subsystem.

The implemented executable center remains `CODE/contracts.py`, `CODE/liquid_morphing.py`, and `CODE/nexus_core.py`. None of those modules performs repository/workspace deletion.

## Decision

Do not describe cleanup or sandbox destruction as an implemented Axiom capability.

Where an embedding environment performs cleanup, the repository may document only the following bounded safety principle as external/reference guidance:

- resolve an exact target before mutation
- establish that the target belongs to the intended workspace or scope
- distinguish ephemeral artifacts from durable/user-owned data
- avoid deriving recursive deletion targets from unverified input
- retain enough result evidence to know what was actually removed

These principles are not executable policy in Axiom-0.

## Consequences

Research prose can discuss cleanup risk without implying that Axiom provides a sandbox runtime.

A file deletion performed by an external host, development environment, or automation is an external effect and must not be attributed to this reference core unless a concrete Axiom implementation is later added and reviewed.

## Evidence boundary

Current repository evidence can establish only that this ADR records a non-implementation boundary.

It cannot establish:

- sandbox containment
- deletion safety
- secure erasure
- rollback/recovery behavior
- credential cleanup
- lifecycle isolation

because those mechanisms are not present in the reference core.

## Promotion boundary

Any future claim that Axiom implements cleanup/sandbox lifecycle behavior requires a concrete executable module and evidence for the exact behavior claimed. Historical terminology alone is insufficient.