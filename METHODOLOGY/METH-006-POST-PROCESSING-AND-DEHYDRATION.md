> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `METHOD`
> - **Role:** Current methodology: **Canonical JSON serialization and digest method**
> - **Authority:** Repository-native method authority for the procedure, assumptions, thresholds, evidence treatment and limitations expressed by this file
> - **Current meaning:** The method owns the procedural semantics named above. Read steps and thresholds as a contract for how the repository should reason or check, not as evidence that the method executed at the current revision
> - **Evidence / implementation boundary:** Method definition != method execution. Conceptual procedures do not become runtime capability without an implementation anchor, and historical examples retain their own cutoff rather than defining present status
> - **Cross-document relation:** `SPECIFICATION.md` and current `CODE/**` bound implementation; ADRs explain durable design choices; dated evidence and periodic records provide observations without redefining the method
> - **Update trigger:** Update when the procedure, assumptions, thresholds, implementation mapping, evidence semantics or historical/current boundary materially changes
> - **Preservation rule:** Existing procedure, examples and rationale remain in the same file. Current clarification is additive and does not erase earlier method history

# Canonical JSON serialization and digest method

- Method version: 2026-08-24
- Implementation anchor: `CODE/contracts.py`

## Objective

Produce deterministic JSON serialization/digest evidence without changing payload semantics or treating byte identity as semantic truth.

## Inputs

- JSON-compatible value
- implementation revision
- any external schema/classification information, when relevant to the surrounding claim

## Procedure

1. Pass the value through the repository canonical JSON function.
2. Preserve string/scalar content; do not uppercase, tokenize, or normalize meaning.
3. Sort mapping keys and use the implementation's compact JSON representation.
4. Reject non-finite numeric values.
5. Encode the canonical text as UTF-8 when byte identity is required.
6. When a digest is needed, compute the repository's SHA-256 digest over the canonical representation.
7. Record the value/fixture identity and code revision for any reproducibility claim.

## Outputs

- canonical JSON representation
- SHA-256 digest when requested
- validation failure when the value is outside the implemented JSON contract

## Failure conditions

Do not claim successful canonicalization when serialization failed, non-finite values were accepted outside the contract, payload strings were semantically mutated, or the digest input cannot be identified.

## Evidence boundary

Matching canonical bytes or digest establishes byte-level identity under the same serialization contract. It does not establish semantic equivalence, factual truth, authorization, freshness, or provenance.