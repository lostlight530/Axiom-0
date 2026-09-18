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
