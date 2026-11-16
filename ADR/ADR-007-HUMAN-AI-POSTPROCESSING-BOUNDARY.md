> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `DECISION`
> - **Role:** Current architecture decision: **Generated content is evidence input, not repository authority**
> - **Authority:** Current repository-native design rationale and constraint for the architecture surface expressed by this decision
> - **Current meaning:** The owning proposition is the subject named above. Read its implementation anchors against current `CODE/**` and `SPECIFICATION.md`; the ADR preserves why the constraint exists and how it should bound present interpretation
> - **Evidence / implementation boundary:** An accepted ADR does not prove execution, scientific validation, external-system behavior, or historical task completion. Legacy terminology in the filename does not broaden the narrower current proposition stated by the document body
> - **Cross-document relation:** `SPECIFICATION.md` owns current implementation semantics; `METHODOLOGY/**` owns repeatable procedure; dated evidence owns point-in-time observation; index/navigation files do not add evidence
> - **Update trigger:** Update when this decision changes, its implementation anchor contradicts it, or a confirmed authority/evidence conflict requires explicit reconciliation
> - **Preservation rule:** Existing decision history, rationale and examples remain in the same file. This pass clarifies current architecture meaning without deleting the original record

# Generated content is evidence input, not repository authority

## 中文专业对照 / Chinese technical counterpart

**本 ADR 的可核对命题 / Auditable proposition:** AI 生成与人类后处理须接受独立证据审查

**English owner:** Generated content is evidence input, not repository authority

**具体判据 / Operational reading:** 判断本条记录时应同时定位当前 `SPECIFICATION.md`、适用源码、精确版本与该文件所列的证据边界，不能把历史设计决定当成已发生的运行结果 / The decision's implementation and validation must be established independently at the exact revision

| Original section / 英文原章节 | 中文阅读定位 / Chinese reading section |
| --- | --- |
| Context | 背景与触发条件 |
| Decision | 已接受的决策 |
| Consequences | 后果与代价 |
| Evidence boundary | 证据适用范围 |
| Public-boundary rule | 公开声明边界 |

**保留原则 / Preservation:** 原有决策正文、状态、历史解释与例外保持不变，本双语章节仅提供当前可检验的阅读路径 / Existing decision text and historic states remain the owner; this is a language and navigation addition


- Decision date: 2026-08-05
- Review calibration: 2026-08-24
- Status: Accepted
- Implementation anchor: `RESEARCH/**`, ADR/Methodology/Evidence interpretation layers

## Context

Generated text or code can be plausible while wrong. A generated completion statement is not itself proof of execution, correctness, source validity, safety, or implementation status.

Axiom stores historical research artifacts alongside a narrower executable reference core. Those surfaces must remain distinct.

## Decision

Treat generated material as an input to repository review and evidence interpretation.

For material claims:

- separate locally observed behavior from externally supported propositions
- preserve source identity/version where external evidence is used
- keep implementation status tied to concrete code paths
- preserve unresolved, contested, missing, or temporally conflicting evidence instead of normalizing it into success

A later correction may supersede the **current interpretation** of historical generated text without rewriting the fact that the earlier artifact existed.

## Consequences

Research history stays inspectable while executable and evidentiary authority remain explicit.

## Evidence boundary

AI-generated prose, summaries, code suggestions, or completion language are not evidence by themselves.

The relevant evidence surface is the actual repository artifact, emitted result, primary source, or historical record that supports the claim.

## Public-boundary rule

Repository documents may expose bounded evidence outcomes and current interpretation. They do not expose private prompts, hidden reasoning, confidential context, private memory, or unpublished automation strategy.
