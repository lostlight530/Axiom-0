> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `METHOD`
> - **Role:** Current methodology: **Repository evidence to ADR distillation**
> - **Authority:** Repository-native method authority for the procedure, assumptions, thresholds, evidence treatment and limitations expressed by this file
> - **Current meaning:** The method owns the procedural semantics named above. Read steps and thresholds as a contract for how the repository should reason or check, not as evidence that the method executed at the current revision
> - **Evidence / implementation boundary:** Method definition != method execution. Conceptual procedures do not become runtime capability without an implementation anchor, and historical examples retain their own cutoff rather than defining present status
> - **Cross-document relation:** `SPECIFICATION.md` and current `CODE/**` bound implementation; ADRs explain durable design choices; dated evidence and periodic records provide observations without redefining the method
> - **Update trigger:** Update when the procedure, assumptions, thresholds, implementation mapping, evidence semantics or historical/current boundary materially changes
> - **Preservation rule:** Existing procedure, examples and rationale remain in the same file. Current clarification is additive and does not erase earlier method history

# Repository evidence to ADR distillation

- Method version: 2026-08-24
- Scope: documentary architecture decisions in `ADR/**`

## Objective

Turn a repository problem or durable boundary into an ADR without importing speculative research, historical wording, or external architecture as if it were implemented Axiom behavior.

## Inputs

- concrete repository problem or ambiguity
- current implementation surface, if one exists
- current `SPECIFICATION.md`
- relevant research/evidence records
- external primary evidence only when the decision depends on an external fact
- counterevidence or known non-implementation boundaries

## Procedure

1. State the exact repository question being decided.
2. Identify the concrete implementation anchor, or explicitly mark `NOT_IMPLEMENTED` when none exists.
3. Separate local observation from external evidence and interpretation.
4. Preserve conflicting or missing evidence instead of normalizing it away.
5. Choose one bounded repository decision.
6. State consequences and what the decision does **not** establish.
7. Link any corresponding methodology/specification surface when the relationship is real.
8. Do not convert a historical file name or conceptual label into implementation evidence.

## Outputs

A reviewable ADR containing:

- status/date
- context
- decision
- implementation anchor or non-implementation status
- evidence boundary
- consequences
- promotion/exception boundary where necessary
- a stable ADR identifier and path
- explicit context, decision, consequences, implementation mapping, and verification boundary
- unresolved evidence gaps and superseded historical interpretation where applicable

## Failure conditions

The distillation is incomplete when:

- a claimed implementation has no executable anchor
- an external source is treated as repository implementation
- counterevidence materially changes the decision but is omitted
- research wording is copied into normative text without scope reduction
- the ADR claims a stronger capability than `CODE/**` or retained evidence supports

## Evidence boundary

This methodology produces a documentary decision record. It does not execute or enforce that decision by itself.
