> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `DECISION`
> - **Role:** Current architecture decision: **Fail-closed probability and KL input contracts**
> - **Authority:** Current repository-native design rationale and constraint for the architecture surface expressed by this decision
> - **Current meaning:** The owning proposition is the subject named above. Read its implementation anchors against current `CODE/**` and `SPECIFICATION.md`; the ADR preserves why the constraint exists and how it should bound present interpretation
> - **Evidence / implementation boundary:** An accepted ADR does not prove execution, scientific validation, external-system behavior, or historical task completion. Legacy terminology in the filename does not broaden the narrower current proposition stated by the document body
> - **Cross-document relation:** `SPECIFICATION.md` owns current implementation semantics; `METHODOLOGY/**` owns repeatable procedure; dated evidence owns point-in-time observation; index/navigation files do not add evidence
> - **Update trigger:** Update when this decision changes, its implementation anchor contradicts it, or a confirmed authority/evidence conflict requires explicit reconciliation
> - **Preservation rule:** Existing decision history, rationale and examples remain in the same file. This pass clarifies current architecture meaning without deleting the original record

# Fail-closed probability and KL input contracts

- Decision date: 2026-08-05
- Review calibration: 2026-08-24
- Status: Accepted
- Implementation anchor: `CODE/contracts.py`

## Context

KL divergence is defined over probability measures. Negative values, non-finite values, empty vectors, unequal lengths, and zero-total mass are invalid inputs for the repository's implementation.

## Decision

Centralize the implemented numeric contract in `CODE/contracts.py`.

`normalize_distribution(values, name=...)`:

- requires a non-empty numeric sequence
- rejects booleans
- rejects negative, NaN, and infinite values
- requires positive total mass
- normalizes with `math.fsum`

`kl_divergence(p, q)`:

- requires equal vector length
- computes `D_KL(P||Q)` after validation/normalization
- ignores P-zero terms as zero contribution
- returns positive infinity when P has positive mass where Q has zero mass

No silent smoothing is part of this contract.

## Consequences

Invalid numeric evidence fails explicitly instead of producing a finite score that could be misinterpreted as coherence.

## Evidence boundary

A successful calculation establishes only the numeric result for the supplied vectors under the current implementation.

It does not establish semantic truth, safety, or system-level convergence.

`scan_kl_divergence.py` is one measurement surface over named cases; it is not a general proof of repository correctness.
