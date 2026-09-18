> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `DECISION`
> - **Role:** Current architecture decision: **Verification and claim scope**
> - **Authority:** Current repository-native design rationale and constraint for the architecture surface expressed by this decision
> - **Current meaning:** The owning proposition is the subject named above. Read its implementation anchors against current `CODE/**` and `SPECIFICATION.md`; the ADR preserves why the constraint exists and how it should bound present interpretation
> - **Evidence / implementation boundary:** An accepted ADR does not prove execution, scientific validation, external-system behavior, or historical task completion. Legacy terminology in the filename does not broaden the narrower current proposition stated by the document body
> - **Cross-document relation:** `SPECIFICATION.md` owns current implementation semantics; `METHODOLOGY/**` owns repeatable procedure; dated evidence owns point-in-time observation; index/navigation files do not add evidence
> - **Update trigger:** Update when this decision changes, its implementation anchor contradicts it, or a confirmed authority/evidence conflict requires explicit reconciliation
> - **Preservation rule:** Existing decision history, rationale and examples remain in the same file. This pass clarifies current architecture meaning without deleting the original record

# Verification and claim scope

- Decision date: 2026-08-05
- Review calibration: 2026-09-18
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

The current scanner is an index-derived structural checker with contract version `2026-08-28`.

Current code:

- reads ADR membership from `ADR/INDEX.md`
- reads Methodology membership from `METHODOLOGY/INDEX.md`
- compares indexed members with the files actually present
- derives ADR and Methodology counts at execution time rather than retaining a fixed document-count contract
- checks minimum ADR section groups for context and decision plus an evidence/verification boundary
- checks minimum Methodology section groups for inputs, procedure, outputs plus an evidence/verification boundary
- emits `AXIOM_CONSISTENCY_EVIDENCE` with the observed counts, failures, contract identity, and pass/fail state

The pre-repair scanner historically used a 15 ADR / 14 Methodology contract and obsolete heading expectations. Those earlier failures remain point-in-time evidence, but that legacy contract is not the current scanner implementation.

A current successful execution can support only:

`CURRENT_DOCUMENT_TOPOLOGY_AND_MINIMUM_SECTION_CONTRACT_SATISFIED`.

Scanner source presence is not scanner execution, and a structural pass does not establish architecture semantics, implementation correctness, source truth, safety, or convergence.

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

Reports remain narrow enough to answer exactly which surface established which property.

Historical checker-contract drift remains preserved as historical evidence while current claims follow the repaired scanner actually present in current `main`.

## Evidence boundary

No evidence surface inherits capabilities from another. A numeric scan, structural scan, source-pattern scan, path guard, research validator, and research artifact remain distinct evidence classes.

A checker definition in the repository is not an executed checker result. When execution was not observed, use `NOT_EXECUTED` or `EXECUTION_NOT_OBSERVED` rather than inferring PASS from current source state.
