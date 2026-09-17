> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `DECISION`
> - **Role:** Architecture decision record for **Mythic Generation Lane**
> - **Authority:** Current repository-native design rationale and constraint for the decision surface explicitly owned by this ADR
> - **Current meaning:** Read this decision together with current `CODE/**` and `SPECIFICATION.md`. The ADR explains why a design is adopted or bounded; it does not override contradictory current implementation facts
> - **Evidence / implementation boundary:** Decision acceptance, terminology, or conceptual scope does not prove runtime execution, scientific validation, external-system behavior, or historical task completion
> - **Cross-document relation:** `SPECIFICATION.md` owns current implementation semantics; `METHODOLOGY/**` owns repeatable method; dated evidence owns point-in-time observations; navigation/index files do not add evidence
> - **Update trigger:** Update when the owned architecture decision changes, current implementation invalidates a stated constraint, or a confirmed authority conflict requires explicit reconciliation
> - **Preservation rule:** The subject body remains intact as the owning document. This pass organizes current interpretation and corrects only confirmed present-tense authority drift; dated evidence, historical examples, and original research language retain their own time boundary

# Synthetic architecture remains documentary

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
