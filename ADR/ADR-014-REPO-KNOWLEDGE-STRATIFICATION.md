> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `DECISION`
> - **Role:** Current architecture decision: **Repository knowledge stratification follows the actual repository surfaces**
> - **Authority:** Current repository-native design rationale and constraint for the architecture surface expressed by this decision
> - **Current meaning:** The owning proposition is the subject named above. Read its implementation anchors against current `CODE/**` and `SPECIFICATION.md`; the ADR preserves why the constraint exists and how it should bound present interpretation
> - **Evidence / implementation boundary:** An accepted ADR does not prove execution, scientific validation, external-system behavior, or historical task completion. Legacy terminology in the filename does not broaden the narrower current proposition stated by the document body
> - **Cross-document relation:** `SPECIFICATION.md` owns current implementation semantics; `METHODOLOGY/**` owns repeatable procedure; dated evidence owns point-in-time observation; index/navigation files do not add evidence
> - **Update trigger:** Update when this decision changes, its implementation anchor contradicts it, or a confirmed authority/evidence conflict requires explicit reconciliation
> - **Preservation rule:** Existing decision history, rationale and examples remain in the same file. This pass clarifies current architecture meaning without deleting the original record

# Repository knowledge stratification follows the actual repository surfaces

## 中文对应专业说明 / Chinese technical counterpart

**专业主题 / Subject:** undefined

**Owning English title:** Repository knowledge stratification follows the actual repository surfaces

**有效性 / Scope of authority:** 需要按具体章节识别其所引用的源码版本、历史观察截止点、原始证据与任何尚未解决的冲突，不能因为已有技术概念、文档或 DOI 就推断真实系统已经执行 / Retain exact revision, historical cutoff, actual evidence and unresolved conflicts rather than upgrading a documentary description into runtime completion

| Original section / 原章节 | 中文阅读定位 / Chinese section meaning |
| --- | --- |
| Context | 背景 |
| Decision | 决策 |
| Cross-layer rule | 与本文件主题相关的证据或方法部分 |
| Consequences | 后果 |
| Evidence boundary | 证据边界 |

**交叉复核 / Cross-check:** 对当前实现使用 `SPECIFICATION.md` 与 `CODE/**`，对可复现性使用 `REPRODUCIBILITY.md`，对现存判断保留该文的证据级别 / Verify implementation and reproducibility in their owning layers without rewriting historic research


- Decision date: 2026-08-05
- Review calibration: 2026-08-24
- Status: Accepted

## Context

Axiom-0 contains several kinds of artifacts with different authority. Treating them as interchangeable causes research prose, methodology, implementation, or point-in-time evidence to silently govern another layer.

The current repository exposes these distinct surfaces:

- `ADR/**` — durable repository decisions and bounded non-implementation decisions
- `METHODOLOGY/**` — procedures for measuring, interpreting, reconciling, or reviewing repository evidence
- `SPECIFICATION.md` — current engineering contract for the reference implementation and evidence semantics
- `CODE/**` — executable reference implementation
- repository scanners/validators — narrow executable evidence surfaces for the properties they actually inspect
- `RESEARCH/**` — periodic research/history artifacts and stage synthesis
- supporting evidence/provenance documents — source and claim interpretation
- presentation/documentation surfaces — explanatory views, not runtime authority

## Decision

Keep authority local to the surface that owns the claim.

### ADR

An ADR answers: **what repository decision or boundary is accepted, and why?**

It must not invent an implementation. If the corresponding mechanism does not exist in `CODE/**` or another explicit executable artifact, the ADR records a non-implementation/reference boundary.

### Methodology

A methodology answers: **how is a concrete property measured, interpreted, or reconciled?**

It must identify its actual inputs, process, outputs, evidence boundary, and failure/unknown conditions. It does not change runtime behavior merely by existing.

### Specification

`SPECIFICATION.md` describes the current engineering contract and maps concepts to concrete implementation surfaces.

### Code and scanners

Executable files establish only their implemented behavior. A scanner result is evidence only for the rule set that scanner actually checks.

### Research

`RESEARCH/**` preserves point-in-time observations, synthesis, uncertainty, and historical execution state. Research wording does not automatically override the current engineering contract or turn an external idea into a local capability.

## Cross-layer rule

A stronger claim requires a valid bridge between layers.

Examples:

- research idea -> ADR: requires a repository-specific accepted decision
- ADR -> implementation: requires an executable artifact, not prose alone
- implementation -> evidence claim: requires evidence for the exact revision/property being asserted
- historical research -> current interpretation: may require explicit reconciliation rather than silent rewriting

No layer inherits authority merely because another layer links to it.

## Consequences

The repository can preserve conceptual depth and research history while keeping current implementation claims small, explicit, and falsifiable.

## Evidence boundary

This ADR defines document/authority semantics. It does not prove any runtime capability beyond the concrete implementation named elsewhere.