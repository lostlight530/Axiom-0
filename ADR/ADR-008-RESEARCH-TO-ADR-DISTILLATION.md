> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `DECISION`
> - **Role:** Architecture decision record for **Research To Adr Distillation**
> - **Authority:** Current repository-native design rationale and constraint for the decision surface explicitly owned by this ADR
> - **Current meaning:** Read this decision together with current `CODE/**` and `SPECIFICATION.md`. The ADR explains why a design is adopted or bounded; it does not override contradictory current implementation facts
> - **Evidence / implementation boundary:** Decision acceptance, terminology, or conceptual scope does not prove runtime execution, scientific validation, external-system behavior, or historical task completion
> - **Cross-document relation:** `SPECIFICATION.md` owns current implementation semantics; `METHODOLOGY/**` owns repeatable method; dated evidence owns point-in-time observations; navigation/index files do not add evidence
> - **Update trigger:** Update when the owned architecture decision changes, current implementation invalidates a stated constraint, or a confirmed authority conflict requires explicit reconciliation
> - **Preservation rule:** The subject body remains intact as the owning document. This pass organizes current interpretation and corrects only confirmed present-tense authority drift; dated evidence, historical examples, and original research language retain their own time boundary

# Research-to-decision distillation

- Decision date: 2026-08-05
- Review calibration: 2026-08-24
- Status: Accepted
- Implementation anchor: `RESEARCH/**` → `ADR/**` interpretation boundary

## Context

Historical research artifacts can mix local observations, external-source summaries, hypotheses, generated interpretation, and provisional proposals.

Copying research prose directly into an ADR would collapse those evidence classes into policy.

## Decision

An ADR is a repository-specific decision, not a research summary.

Before a research proposition becomes an ADR decision:

1. identify the concrete repository problem or capability boundary
2. identify whether the proposition is local observation, external support, or proposal
3. recheck material source identity/version when external evidence matters
4. map the decision to an existing implementation surface or explicitly state `NOT_IMPLEMENTED` / caller-owned scope
5. record alternatives and limitations that materially affect the decision
6. make one bounded repository decision

Historical research remains historical evidence and is not rewritten to make the ADR appear to have existed earlier.

## Consequences

ADRs become stable explanations of actual repository architecture rather than containers for transient research language.

## Evidence boundary

A source can justify an architectural rationale without proving that Axiom implements the sourced mechanism.

An ADR can document a non-implementation boundary, but it must not imply that a missing runtime feature exists.

## Temporal boundary

Later ADR distillation changes current architecture interpretation only. It does not backdate a decision into earlier Daily/Weekly evidence.
