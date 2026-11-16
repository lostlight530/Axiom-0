> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `DECISION`
> - **Role:** Current architecture decision: **Tool execution is outside the Axiom reference core**
> - **Authority:** Current repository-native design rationale and constraint for the architecture surface expressed by this decision
> - **Current meaning:** The owning proposition is the subject named above. Read its implementation anchors against current `CODE/**` and `SPECIFICATION.md`; the ADR preserves why the constraint exists and how it should bound present interpretation
> - **Evidence / implementation boundary:** An accepted ADR does not prove execution, scientific validation, external-system behavior, or historical task completion. Legacy terminology in the filename does not broaden the narrower current proposition stated by the document body
> - **Cross-document relation:** `SPECIFICATION.md` owns current implementation semantics; `METHODOLOGY/**` owns repeatable procedure; dated evidence owns point-in-time observation; index/navigation files do not add evidence
> - **Update trigger:** Update when this decision changes, its implementation anchor contradicts it, or a confirmed authority/evidence conflict requires explicit reconciliation
> - **Preservation rule:** Existing decision history, rationale and examples remain in the same file. This pass clarifies current architecture meaning without deleting the original record

# Tool execution is outside the Axiom reference core

## 中文专业对照 / Chinese technical counterpart

**本 ADR 的可核对命题 / Auditable proposition:** 零信任工具执行是外部调用方责任，核心未实现

**English owner:** Tool execution is outside the Axiom reference core

**具体判据 / Operational reading:** 判断本条记录时应同时定位当前 `SPECIFICATION.md`、适用源码、精确版本与该文件所列的证据边界，不能把历史设计决定当成已发生的运行结果 / The decision's implementation and validation must be established independently at the exact revision

| Original section / 英文原章节 | 中文阅读定位 / Chinese reading section |
| --- | --- |
| Context | 背景与触发条件 |
| Decision | 已接受的决策 |
| Consequences | 后果与代价 |
| Evidence boundary | 证据适用范围 |
| Non-implementation rule | 专业原文对应边界 |

**保留原则 / Preservation:** 原有决策正文、状态、历史解释与例外保持不变，本双语章节仅提供当前可检验的阅读路径 / Existing decision text and historic states remain the owner; this is a language and navigation addition


- Decision date: 2026-08-05
- Review calibration: 2026-08-24
- Status: Accepted as a non-implementation boundary
- Implementation anchor: none; caller-owned concern

## Context

The Axiom executable core does not implement a general-purpose tool executor, permission broker, credential manager, shell runner, browser controller, or external-effect runtime.

Earlier “zero-trust tool execution” wording could be misread as a local capability.

## Decision

Treat tool authority and external-effect control as **embedding-system responsibilities**, not implemented Axiom features.

If an external system embeds Axiom alongside consequential tools, that external system should independently own concerns such as:

- authenticated actor identity
- allowed operation and target scope
- argument validation
- credential and filesystem/network scope
- time/cost/resource limits
- confirmation for destructive/external effects where appropriate
- result/side-effect verification
- secret-safe logging

These are architecture boundaries, not local runtime mechanisms.

## Consequences

Axiom can remain a small reference library without implying security controls it does not contain.

## Evidence boundary

The absence of arbitrary command/network execution in the current reference core is a local code property.

It does not prove that every embedding system is safe, least-privileged, or correctly authorized.

## Non-implementation rule

Do not cite this ADR as evidence that Axiom implements tool authorization, sandboxing, external-effect confirmation, or security enforcement.
