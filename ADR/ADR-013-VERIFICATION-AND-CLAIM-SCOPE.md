# Verification and claim scope

- Decision date: 2026-08-05
- Review calibration: 2026-08-24
- Scope: Axiom-0 reference contracts, methods, code, and evidence claims

## Status

Accepted.

## Context

A single check, scan, metric, retained result, or point-in-time research artifact supports only the property it actually observes under the revision/configuration it actually addresses.

Repository evidence surfaces are heterogeneous. They must not be collapsed into one generic `verified` state.

## Decision

Every material verification/completion claim identifies:

- concrete artifact or revision
- exact evidence surface used
- property actually checked
- result actually retained/observed
- material unobserved boundary

File presence, configuration presence, historical prose, or a generated completion statement is not execution evidence by itself.

## Current evidence-surface map

### `scan_kl_divergence.py`

Supports only its implemented named KL cases and support-mismatch calculation.

It can provide numeric evidence for those cases; it does not establish repository-wide zero entropy or general correctness.

### `scan_consistency.py`

This is a **legacy structural scanner**.

Current code is hard-coded for:

- 15 ADR files
- 14 Methodology files
- the older bilingual heading set

The current architecture contains 16 ADRs and 15 Methodologies, several of which deliberately use the newer architecture-bound structure.

Therefore its current status relative to this branch is:

`LEGACY_STRUCTURAL_SCANNER / CURRENT_CONTRACT_MISMATCH`.

Its existence must not be cited as proof that the current 16/15 architecture is structurally validated.

### `code_compliance.py`

Supports only its explicit source-pattern rules over the declared Python target directories. Pattern absence is not a general security proof.

### `scope_guard.py`

Supports only its declared protected-path comparison and explicit allow-file semantics. It does not determine semantic correctness of an allowed change.

### `validate_research_record.py`

Validates the specific Daily/Weekly filename, section, date/window, bounded-result, hypothesis-state, and missing-KL semantics implemented in that script.

It does not verify source truth, theorem correctness, or every research claim.

### Historical research records

A Daily/Weekly record supports its point-in-time stored observation subject to source, field, and temporal-provenance reconciliation.

## Consequences

Reports become narrower but can answer exactly which surface established which property.

A stale/legacy checker is itself an evidence fact; it must be documented as a mismatch rather than silently treated as current validation.

## Evidence boundary

No evidence surface inherits capabilities from another. A numeric scan, structural scan, source-pattern scan, path guard, research validator, and research artifact remain distinct evidence classes.