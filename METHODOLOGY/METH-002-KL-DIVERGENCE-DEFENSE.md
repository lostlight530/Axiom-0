> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `METHOD`
> - **Role:** Current methodology: **KL divergence evaluation**
> - **Authority:** Repository-native method authority for the procedure, assumptions, thresholds, evidence treatment and limitations expressed by this file
> - **Current meaning:** The method owns the procedural semantics named above. Read steps and thresholds as a contract for how the repository should reason or check, not as evidence that the method executed at the current revision
> - **Evidence / implementation boundary:** Method definition != method execution. Conceptual procedures do not become runtime capability without an implementation anchor, and historical examples retain their own cutoff rather than defining present status
> - **Cross-document relation:** `SPECIFICATION.md` and current `CODE/**` bound implementation; ADRs explain durable design choices; dated evidence and periodic records provide observations without redefining the method
> - **Update trigger:** Update when the procedure, assumptions, thresholds, implementation mapping, evidence semantics or historical/current boundary materially changes
> - **Preservation rule:** Existing procedure, examples and rationale remain in the same file. Current clarification is additive and does not erase earlier method history

# KL divergence evaluation

- Method version: 2026-08-24
- Implementation anchor: `CODE/contracts.py`
- Evidence surface: exact vectors/cases emitted by the relevant calculation or research record

## Objective

Compute and interpret `D_KL(P || Q)` only for explicitly identified probability vectors under the repository's implemented numeric contract.

The method produces a bounded numeric observation. It does not establish repository-wide zero entropy, semantic truth, safety, or convergence.

## Inputs

- equal-length, non-empty numeric vectors `P` and `Q`
- provenance/meaning of both vectors
- explicit direction `D_KL(P || Q)`
- the implementation revision
- any comparison threshold, if a threshold is actually part of the claim being evaluated

## Implemented validation

`normalize_distribution()` requires:

- non-empty numeric input
- no booleans
- finite, non-negative values
- positive total mass

`kl_divergence()` additionally requires equal vector length.

Normalization uses `math.fsum` and the implemented logarithm is natural log, so finite results are in nats.

## Procedure

1. Validate both vectors under `normalize_distribution()`.
2. Normalize both vectors.
3. Compute `D_KL(P || Q)` in the implemented direction.
4. Terms with `p_i = 0` contribute zero.
5. If `p_i > 0` while `q_i = 0`, report `+∞`; do not silently smooth the support mismatch.
6. Record exact vector/case identity, direction, unit, result, and implementation revision.
7. If a threshold is used, keep the threshold interpretation separate from the raw scalar.

## Outputs

- finite KL value in nats or `+∞`
- direction `P || Q`
- exact input/case identity or reproducible fixture identity
- validation state
- threshold interpretation only when applicable
- unresolved or missing evidence fields

## Failure conditions

Do not report a valid scalar when:

- input is empty
- lengths differ
- values are negative, NaN, infinite, or boolean
- either vector has zero total mass
- direction is unknown
- support mismatch is silently converted to a finite result
- a historical artifact contains only a success label but no recoverable numeric result

## Interpretation boundary

## Verification boundary

Verification is limited to the retained vectors or named fixture, normalization rule, direction, unit, implementation revision, and numeric result. It does not establish semantic truth, safety, or repository-wide entropy.

`D_KL = 0.0` means zero divergence only for the recorded normalized `P` and `Q`.

Historical `identity` and `renormalized_identity` cases therefore remain case-specific evidence. A field such as `Actual Input Range: 0.0 to 0.0` is output/result-like wording and must not substitute for the actual input vectors or named case identity.

A weekly summary may preserve a Daily scalar only when the scalar is actually present in the contributing evidence. Missing numerical evidence remains `MISSING_DATA` or `NOT_COMPUTED` rather than being reconstructed from a pass/fail label.

## Numerical edge cases and integration boundary

The implemented `normalize_distribution` accepts a non-empty sequence of finite non-negative integer/float values, excludes Boolean scalars and zero total mass, then divides by a `math.fsum` total. `kl_divergence` compares **the normalized distributions** and uses the natural logarithm. A strictly positive P coordinate with zero Q support returns `math.inf`; a zero P coordinate contributes no term. The implementation also maps a computed result whose absolute magnitude is below `1e-15` to exactly zero; a reported `0.0` is therefore subject to that numerical rounding rule rather than a theorem of symbolic distribution identity.

For a future revision-matched fixture, distinguish: (a) proportional vectors with equal normalized distributions, (b) unequal finite distributions, (c) one-sided support mismatch, and (d) rejected NaN, negative, Boolean, empty or zero-mass inputs. Retain the actual vector pair, order, unit, tolerance policy and exception type.

**Integration limitation:** `AxiomOrchestrator.run_continuum` does not currently thread a caller-supplied probability vector into T-09; `state.get("distribution", ...)` falls back to its hard-coded identity fixture. Thus even a correct `kl_divergence` calculation inside the core is not evidence that the pipeline checked the caller's intended distribution. This conclusion is from static source inspection, not a claimed new execution.
