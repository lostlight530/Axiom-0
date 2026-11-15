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

## Exact serialization contract and adversarial examples

`canonical_json` calls `json.dumps(..., ensure_ascii=False, allow_nan=False, sort_keys=True, separators=(",", ":"))`. The resulting UTF-8 bytes, not a semantic representation of the world, are hashed by `stable_digest` with SHA-256. Permuting mapping key insertion order should preserve the canonical serialization under this implementation; changing a string's case or punctuation should not. Python JSON numeric representation is part of the chosen serialization contract; never silently equate distinct numeric/string types or use the digest as source authentication.

The digest is **not** a durable run identifier. In `CODE/nexus_core.py`, `run_id = stable_digest({"input": input_payload, "events": events})`; each event includes `utc_now()`. Two equivalent inputs can therefore have different run IDs while their separately computed `input_digest` matches. When a research claim is about input identity, cite `input_digest`; when about one emitted event trace, use `run_id` with the observed events.

An implementation change to serialization rules, float behavior, or trace fields changes identity meaning and requires explicit version comparison; matching hashes from different normalization contracts cannot be assumed comparable.
