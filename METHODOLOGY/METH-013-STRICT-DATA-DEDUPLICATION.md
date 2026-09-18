> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `METHOD`
> - **Role:** Current methodology: **Content-addressed identity without semantic auto-deduplication**
> - **Authority:** Repository-native method authority for the procedure, assumptions, thresholds, evidence treatment and limitations expressed by this file
> - **Current meaning:** The method owns the procedural semantics named above. Read steps and thresholds as a contract for how the repository should reason or check, not as evidence that the method executed at the current revision
> - **Evidence / implementation boundary:** Method definition != method execution. Conceptual procedures do not become runtime capability without an implementation anchor, and historical examples retain their own cutoff rather than defining present status
> - **Cross-document relation:** `SPECIFICATION.md` and current `CODE/**` bound implementation; ADRs explain durable design choices; dated evidence and periodic records provide observations without redefining the method
> - **Update trigger:** Update when the procedure, assumptions, thresholds, implementation mapping, evidence semantics or historical/current boundary materially changes
> - **Preservation rule:** Existing procedure, examples and rationale remain in the same file. Current clarification is additive and does not erase earlier method history

# Content-addressed identity without semantic auto-deduplication

- Method version: 2026-08-24
- Implementation anchor: `CODE/contracts.py` for canonical serialization and SHA-256 digest
- Deduplication engine status: `NOT_IMPLEMENTED`

## Objective

Use deterministic canonical bytes/digests to identify exact content under the repository contract without claiming that Axiom implements semantic deduplication or safe automatic merging.

## Inputs

- JSON-compatible record/value
- implementation revision
- any separately maintained record identity/provenance

## Procedure

1. Canonicalize the value with `canonical_json()`.
2. Compute the repository digest when content-addressed identity is required.
3. Treat matching digests as exact canonical-content identity under the same serialization contract.
4. Preserve provenance/record identity separately when two distinct records happen to have identical content.
5. Do not auto-delete or merge records based on semantic similarity; no such semantic deduplication mechanism is implemented.

## Outputs

- canonical representation/digest
- exact-content match or mismatch where compared
- explicit unresolved semantic relationship if the question exceeds byte-level identity

## Failure conditions

Do not claim deduplication when the canonicalization version/implementation differs, the compared input identity is unknown, or only semantic similarity is asserted without a semantic comparison mechanism.

## Evidence boundary

A matching SHA-256 digest under the same canonicalization contract supports exact content identity, not factual equivalence, provenance equivalence, semantic redundancy, or authorization to delete either record.