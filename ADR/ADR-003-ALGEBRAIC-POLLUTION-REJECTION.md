> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `DECISION`
> - **Role:** Architecture decision record for **Algebraic Pollution Rejection**
> - **Authority:** Current repository-native design rationale and constraint for the decision surface explicitly owned by this ADR
> - **Current meaning:** Read this decision together with current `CODE/**` and `SPECIFICATION.md`. The ADR explains why a design is adopted or bounded; it does not override contradictory current implementation facts
> - **Evidence / implementation boundary:** Decision acceptance, terminology, or conceptual scope does not prove runtime execution, scientific validation, external-system behavior, or historical task completion
> - **Cross-document relation:** `SPECIFICATION.md` owns current implementation semantics; `METHODOLOGY/**` owns repeatable method; dated evidence owns point-in-time observations; navigation/index files do not add evidence
> - **Update trigger:** Update when the owned architecture decision changes, current implementation invalidates a stated constraint, or a confirmed authority conflict requires explicit reconciliation
> - **Preservation rule:** The subject body remains intact as the owning document. This pass organizes current interpretation and corrects only confirmed present-tense authority drift; dated evidence, historical examples, and original research language retain their own time boundary

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
