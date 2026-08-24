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