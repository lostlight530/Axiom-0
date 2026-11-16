> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `DECISION`
> - **Role:** Current architecture decision: **Synthetic architecture remains documentary**
> - **Authority:** Current repository-native design rationale and constraint for the architecture surface expressed by this decision
> - **Current meaning:** The owning proposition is the subject named above. Read its implementation anchors against current `CODE/**` and `SPECIFICATION.md`; the ADR preserves why the constraint exists and how it should bound present interpretation
> - **Evidence / implementation boundary:** An accepted ADR does not prove execution, scientific validation, external-system behavior, or historical task completion. Legacy terminology in the filename does not broaden the narrower current proposition stated by the document body
> - **Cross-document relation:** `SPECIFICATION.md` owns current implementation semantics; `METHODOLOGY/**` owns repeatable procedure; dated evidence owns point-in-time observation; index/navigation files do not add evidence
> - **Update trigger:** Update when this decision changes, its implementation anchor contradicts it, or a confirmed authority/evidence conflict requires explicit reconciliation
> - **Preservation rule:** Existing decision history, rationale and examples remain in the same file. This pass clarifies current architecture meaning without deleting the original record

# Synthetic architecture remains documentary

## 中文专业对照 / Chinese technical counterpart

**本 ADR 的可核对命题 / Auditable proposition:** Mythic 架构保持假设性研究文本，不能晋级实现

**English owner:** Synthetic architecture remains documentary

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
- Implementation anchor: research/presentation layers only

## Context

Axiom uses expressive vocabulary such as “zero entropy”, “liquid”, “mythic”, and phase/state metaphors. These can be useful research language but are unsafe when interpreted as implemented mechanisms or measured guarantees.

The executable core contains only the contracts and reference mechanisms documented in `SPECIFICATION.md` and `CODE/**`.

## Decision

Synthetic, metaphorical, speculative, or architecture-exploration content MUST remain explicitly non-executable.

Use statuses such as:

- `PROPOSED`
- `HYPOTHESIS`
- `REFERENCE_ONLY`
- `NOT_IMPLEMENTED`

when a concept has no corresponding code path.

A concept may be promoted to an implementation claim only when a concrete repository artifact implements the claimed behavior and the claim is narrowed to that artifact.

## Consequences

The repository can preserve creative research language without letting it silently redefine the runtime.

## Evidence boundary

A well-written architectural concept is not execution evidence. External papers or standards may support the concept, but they do not implement it locally.

## Public-boundary rule

Document only committed repository facts, public evidence states, and bounded research interpretation. Do not encode private prompts, hidden reasoning, unpublished future control strategy, or internal automation instructions in this ADR.
