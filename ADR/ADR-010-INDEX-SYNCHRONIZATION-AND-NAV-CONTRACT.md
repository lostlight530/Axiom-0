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
