> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `DECISION`
> - **Role:** Current architecture decision: **Canonical JSON preserves payload semantics**
> - **Authority:** Current repository-native design rationale and constraint for the architecture surface expressed by this decision
> - **Current meaning:** The owning proposition is the subject named above. Read its implementation anchors against current `CODE/**` and `SPECIFICATION.md`; the ADR preserves why the constraint exists and how it should bound present interpretation
> - **Evidence / implementation boundary:** An accepted ADR does not prove execution, scientific validation, external-system behavior, or historical task completion. Legacy terminology in the filename does not broaden the narrower current proposition stated by the document body
> - **Cross-document relation:** `SPECIFICATION.md` owns current implementation semantics; `METHODOLOGY/**` owns repeatable procedure; dated evidence owns point-in-time observation; index/navigation files do not add evidence
> - **Update trigger:** Update when this decision changes, its implementation anchor contradicts it, or a confirmed authority/evidence conflict requires explicit reconciliation
> - **Preservation rule:** Existing decision history, rationale and examples remain in the same file. This pass clarifies current architecture meaning without deleting the original record

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
