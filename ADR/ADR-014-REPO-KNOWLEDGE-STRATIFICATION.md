# Repository knowledge stratification follows the actual repository surfaces

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