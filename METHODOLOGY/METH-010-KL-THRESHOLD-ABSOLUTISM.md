> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `METHOD`
> - **Role:** Current methodology: **Threshold interpretation is surface-specific**
> - **Authority:** Repository-native method authority for the procedure, assumptions, thresholds, evidence treatment and limitations expressed by this file
> - **Current meaning:** The method owns the procedural semantics named above. Read steps and thresholds as a contract for how the repository should reason or check, not as evidence that the method executed at the current revision
> - **Evidence / implementation boundary:** Method definition != method execution. Conceptual procedures do not become runtime capability without an implementation anchor, and historical examples retain their own cutoff rather than defining present status
> - **Cross-document relation:** `SPECIFICATION.md` and current `CODE/**` bound implementation; ADRs explain durable design choices; dated evidence and periodic records provide observations without redefining the method
> - **Update trigger:** Update when the procedure, assumptions, thresholds, implementation mapping, evidence semantics or historical/current boundary materially changes
> - **Preservation rule:** Existing procedure, examples and rationale remain in the same file. Current clarification is additive and does not erase earlier method history

# Threshold interpretation is surface-specific

- Method version: 2026-08-24
- Scope: numeric/research interpretation across `contracts.py` and `liquid_morphing.py`

## Objective

Prevent one threshold from being treated as a universal repository law when Axiom contains different measurement surfaces with different semantics.

## Repository surfaces

### KL divergence

`CODE/contracts.py` computes a scalar `D_KL(P || Q)` but does not define one universal pass/fail threshold for all claims.

### Morphing heuristics

`CODE/liquid_morphing.py` contains implementation-specific thresholds/weights used to select a local state label from `SystemMetrics`.

These thresholds are heuristic control parameters, not scientific proofs of entropy, safety, or optimality.

## Procedure

1. Identify the exact metric and code surface.
2. Record the threshold value only if it is actually part of that surface or the evidence artifact.
3. State whether the threshold is an implementation heuristic, a research decision rule, or an externally sourced criterion.
4. Keep the raw measurement separate from the threshold-crossing interpretation.
5. Do not transfer a threshold between KL evidence and morphing metrics merely because both use entropy-related vocabulary.
6. When no threshold is defined for the claim, report the scalar without inventing one.

## Inputs

- named metric, inputs, unit, and implementation revision
- threshold value and its policy/source identity
- retained result or explicit missing state

## Outputs

- metric identity
- raw value where available
- threshold and source, when applicable
- interpretation limited to that metric/surface

## Failure conditions

The method fails when a generic threshold is asserted without a source, when one metric's threshold is applied to another metric, or when a threshold crossing is promoted to safety/truth/convergence.

## Evidence boundary

Thresholds classify under their declared rule. They do not independently validate the world-state or the correctness of the underlying model.
