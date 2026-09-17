> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `DECISION`
> - **Role:** Architecture decision record for **Index Synchronization And Nav Contract**
> - **Authority:** Current repository-native design rationale and constraint for the decision surface explicitly owned by this ADR
> - **Current meaning:** Read this decision together with current `CODE/**` and `SPECIFICATION.md`. The ADR explains why a design is adopted or bounded; it does not override contradictory current implementation facts
> - **Evidence / implementation boundary:** Decision acceptance, terminology, or conceptual scope does not prove runtime execution, scientific validation, external-system behavior, or historical task completion
> - **Cross-document relation:** `SPECIFICATION.md` owns current implementation semantics; `METHODOLOGY/**` owns repeatable method; dated evidence owns point-in-time observations; navigation/index files do not add evidence
> - **Update trigger:** Update when the owned architecture decision changes, current implementation invalidates a stated constraint, or a confirmed authority conflict requires explicit reconciliation
> - **Preservation rule:** The subject body remains intact as the owning document. This pass organizes current interpretation and corrects only confirmed present-tense authority drift; dated evidence, historical examples, and original research language retain their own time boundary

# Indexes are derived navigation

- Decision date: 2026-08-05
- Review calibration: 2026-08-24
- Status: Accepted
- Implementation anchor: repository index/navigation files

## Context

Indexes and navigation pages can lag the files they point to. Treating an index as stronger authority than the addressed artifact creates conflicts between navigation and content.

## Decision

Indexes are derived, non-normative views.

Current semantic authority remains in the addressed artifact:

- implementation behavior → `CODE/**`
- behavioral interpretation → `SPECIFICATION.md`
- architectural decision → exact ADR file
- procedure → exact Methodology file
- external-source/evidence semantics → `EVIDENCE_BASELINE.md`
- historical observation → exact `RESEARCH/**` artifact or explicit reconciliation

An index may summarize those surfaces but must not silently create, strengthen, or retire a claim.

## Consequences

Readers follow the addressed file when an index and artifact disagree.

Navigation can be refreshed independently without changing runtime or evidence semantics.

## Evidence boundary

Index completeness proves navigation coverage only. It does not prove:

- implementation completeness
- research completeness
- source correctness
- successful execution
- semantic consistency of every linked file

## Public-boundary rule

Navigation documents describe repository structure only. They do not carry private prompts, hidden reasoning, future control strategy, or unpublished automation instructions.
