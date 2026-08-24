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
