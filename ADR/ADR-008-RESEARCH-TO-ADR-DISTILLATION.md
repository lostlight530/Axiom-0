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
