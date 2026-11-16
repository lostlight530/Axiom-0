> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `DECISION`
> - **Role:** Current architecture decision: **Explicit claim and evidence states**
> - **Authority:** Current repository-native design rationale and constraint for the architecture surface expressed by this decision
> - **Current meaning:** The owning proposition is the subject named above. Read its implementation anchors against current `CODE/**` and `SPECIFICATION.md`; the ADR preserves why the constraint exists and how it should bound present interpretation
> - **Evidence / implementation boundary:** An accepted ADR does not prove execution, scientific validation, external-system behavior, or historical task completion. Legacy terminology in the filename does not broaden the narrower current proposition stated by the document body
> - **Cross-document relation:** `SPECIFICATION.md` owns current implementation semantics; `METHODOLOGY/**` owns repeatable procedure; dated evidence owns point-in-time observation; index/navigation files do not add evidence
> - **Update trigger:** Update when this decision changes, its implementation anchor contradicts it, or a confirmed authority/evidence conflict requires explicit reconciliation
> - **Preservation rule:** Existing decision history, rationale and examples remain in the same file. This pass clarifies current architecture meaning without deleting the original record

# Explicit claim and evidence states

## 中文专业对照 / Chinese technical counterpart

**本 ADR 的可核对命题 / Auditable proposition:** Evidence 与 Claim 的状态要分开，不推导自动验证

**English owner:** Explicit claim and evidence states

**具体判据 / Operational reading:** 判断本条记录时应同时定位当前 `SPECIFICATION.md`、适用源码、精确版本与该文件所列的证据边界，不能把历史设计决定当成已发生的运行结果 / The decision's implementation and validation must be established independently at the exact revision

| Original section / 英文原章节 | 中文阅读定位 / Chinese reading section |
| --- | --- |
| Context | 背景与触发条件 |
| Decision | 已接受的决策 |
| Consequences | 后果与代价 |
| Evidence boundary | 证据适用范围 |
| Current interpretation rule | 当前证据解释 |
| Claim classification worked example | 专业原文对应边界 |

**保留原则 / Preservation:** 原有决策正文、状态、历史解释与例外保持不变，本双语章节仅提供当前可检验的阅读路径 / Existing decision text and historic states remain the owner; this is a language and navigation addition


- Decision date: 2026-08-05
- Review calibration: 2026-08-24
- Status: Accepted
- Implementation anchor: ADR/Methodology/Evidence/Research records

## Context

A binary `true/false` or `pass/fail` label cannot express whether a proposition was observed locally, supported by an external source, proposed as design, contested, missing, or historically superseded.

Axiom contains executable code, numeric scans, structural scans, external-source research, and historical periodic artifacts. Those surfaces must not collapse into one generic “verified” state.

## Decision

Use explicit claim states when material to interpretation:

- `OBSERVED` — directly recorded from a local repository/evidence surface
- `SUPPORTED` — supported by external or analytical evidence within a declared scope
- `PROPOSED` — repository proposal, not current implementation
- `HYPOTHESIS` — testable interpretation without sufficient support yet
- `CONTESTED` — materially conflicting evidence remains
- `RETIRED` — no longer authoritative for current interpretation

Use separate availability/completeness states where needed, including `MISSING_DATA`, `NOT_COMPUTED`, `UNRESOLVED`, and temporal/delivery states defined by ADR-016.

## Consequences

Repository claims become more verbose but easier to falsify and reconcile.

## Evidence boundary

A structural scan may support `OBSERVED` structure without supporting semantic truth.

An external paper may support `SUPPORTED` research without implying local implementation.

A current successful result does not automatically retire a historical failure or unresolved field.

## Current interpretation rule

When a later erratum/reconciliation narrows a historical claim, the historical artifact remains evidence that the original statement existed, while the affected proposition may become `RETIRED`, `CONTESTED`, or replaced by a narrower current state.

## Claim classification worked example

- `OBSERVED` only with an actual retained run/fixture and its output, or a narrowly declared code-inspection observation when the claim is explicitly about source structure.
- `SUPPORTED` within a **source inspection** claim: T-09 takes its hard-coded fallback because no prior branch creates the requested `distribution` key in the state.
- `CONTESTED` / `SOURCE_CLAIM_MISMATCH`: a generic "input coherence gate" description contradicted by that path.
- `PROPOSED`: consuming caller distributions in a future T-09 design.
- `NOT_EXECUTED`: this documentation correction did not execute a new fixture.

Use the actual claim unit and evidence surface, not one blanket status for an entire module.
