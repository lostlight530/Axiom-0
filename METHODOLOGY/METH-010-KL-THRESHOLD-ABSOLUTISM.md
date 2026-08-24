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

## Outputs

- metric identity
- raw value where available
- threshold and source, when applicable
- interpretation limited to that metric/surface

## Failure conditions

The method fails when a generic threshold is asserted without a source, when one metric's threshold is applied to another metric, or when a threshold crossing is promoted to safety/truth/convergence.

## Evidence boundary

Thresholds classify under their declared rule. They do not independently validate the world-state or the correctness of the underlying model.