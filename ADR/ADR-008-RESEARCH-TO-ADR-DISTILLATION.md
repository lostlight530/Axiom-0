> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `DECISION`
> - **Role:** Current architecture decision: **Research-to-decision distillation**
> - **Authority:** Current repository-native design rationale and constraint for the architecture surface expressed by this decision
> - **Current meaning:** The owning proposition is the subject named above. Read its implementation anchors against current `CODE/**` and `SPECIFICATION.md`; the ADR preserves why the constraint exists and how it should bound present interpretation
> - **Evidence / implementation boundary:** An accepted ADR does not prove execution, scientific validation, external-system behavior, or historical task completion. Legacy terminology in the filename does not broaden the narrower current proposition stated by the document body
> - **Cross-document relation:** `SPECIFICATION.md` owns current implementation semantics; `METHODOLOGY/**` owns repeatable procedure; dated evidence owns point-in-time observation; index/navigation files do not add evidence
> - **Update trigger:** Update when this decision changes, its implementation anchor contradicts it, or a confirmed authority/evidence conflict requires explicit reconciliation
> - **Preservation rule:** Existing decision history, rationale and examples remain in the same file. This pass clarifies current architecture meaning without deleting the original record

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
