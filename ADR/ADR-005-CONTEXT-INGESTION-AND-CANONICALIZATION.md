> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `DECISION`
> - **Role:** Architecture decision record for **Context Ingestion And Canonicalization**
> - **Authority:** Current repository-native design rationale and constraint for the decision surface explicitly owned by this ADR
> - **Current meaning:** Read this decision together with current `CODE/**` and `SPECIFICATION.md`. The ADR explains why a design is adopted or bounded; it does not override contradictory current implementation facts
> - **Evidence / implementation boundary:** Decision acceptance, terminology, or conceptual scope does not prove runtime execution, scientific validation, external-system behavior, or historical task completion
> - **Cross-document relation:** `SPECIFICATION.md` owns current implementation semantics; `METHODOLOGY/**` owns repeatable method; dated evidence owns point-in-time observations; navigation/index files do not add evidence
> - **Update trigger:** Update when the owned architecture decision changes, current implementation invalidates a stated constraint, or a confirmed authority conflict requires explicit reconciliation
> - **Preservation rule:** The subject body remains intact as the owning document. This pass organizes current interpretation and corrects only confirmed present-tense authority drift; dated evidence, historical examples, and original research language retain their own time boundary

# Canonical JSON preserves payload semantics

- Decision date: 2026-08-05
- Review calibration: 2026-08-24
- Status: Accepted
- Implementation anchor: `CODE/contracts.py`

## Context

Deterministic serialization is narrower than semantic normalization. Earlier transformations that changed case or punctuation could alter caller data.

## Decision

`canonical_json(value)` defines the repository byte-level canonicalization contract:

- JSON-compatible values only
- mapping keys sorted
- Unicode preserved
- compact separators
- non-finite numeric values rejected
- original scalar/string content preserved

`stable_digest(value)` is SHA-256 over those canonical UTF-8 bytes.

## Consequences

Equivalent mapping order produces stable serialized bytes while semantically different scalar content remains distinct.

## Evidence boundary

A stable digest establishes content identity under this exact canonicalization contract.

It does not establish:

- semantic equivalence
- source provenance
- authorship
- authorization
- truth
- integrity against a trusted external authority

Changing the canonicalization contract changes digest identity and must be treated as a versioned interpretation change.

## Scope boundary

This ADR does not describe general context ingestion, retrieval, memory, or document normalization. Axiom's executable implementation here is byte-level canonicalization and hashing only.
