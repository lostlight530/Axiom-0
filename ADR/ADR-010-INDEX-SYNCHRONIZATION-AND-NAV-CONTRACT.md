> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `DECISION`
> - **Role:** Current architecture decision: **Indexes are derived navigation**
> - **Authority:** Current repository-native design rationale and constraint for the architecture surface expressed by this decision
> - **Current meaning:** The owning proposition is the subject named above. Read its implementation anchors against current `CODE/**` and `SPECIFICATION.md`; the ADR preserves why the constraint exists and how it should bound present interpretation
> - **Evidence / implementation boundary:** An accepted ADR does not prove execution, scientific validation, external-system behavior, or historical task completion. Legacy terminology in the filename does not broaden the narrower current proposition stated by the document body
> - **Cross-document relation:** `SPECIFICATION.md` owns current implementation semantics; `METHODOLOGY/**` owns repeatable procedure; dated evidence owns point-in-time observation; index/navigation files do not add evidence
> - **Update trigger:** Update when this decision changes, its implementation anchor contradicts it, or a confirmed authority/evidence conflict requires explicit reconciliation
> - **Preservation rule:** Existing decision history, rationale and examples remain in the same file. This pass clarifies current architecture meaning without deleting the original record

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
