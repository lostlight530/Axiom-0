# Entropy and divergence are scoped measurements

- Decision date: 2026-08-05
- Review calibration: 2026-08-24
- Status: Accepted
- Implementation anchor: `CODE/contracts.py`, `scan_kl_divergence.py`; heuristic metric input in `CODE/liquid_morphing.py`

## Context

“Zero entropy” remains project vocabulary, not an implemented guarantee of deterministic cognition, zero semantic drift, safety, or universal convergence.

The repository currently contains two different uses of entropy-like language:

1. `kl_divergence(P, Q)` in `CODE/contracts.py`, which computes a precise probability-distribution divergence in nats
2. `SystemMetrics.entropy_level` in `CODE/liquid_morphing.py`, which is a caller-supplied scalar in `[0,1]` used by a heuristic morphing policy

These are not the same measurement.

## Decision

Axiom MUST name the exact measurement before interpreting an entropy/divergence result.

For KL evidence:

- state the direction `D_KL(P||Q)`
- preserve exact input identity or reproducible fixture identity
- state unit (`nats` for the implemented natural-log calculation)
- treat support mismatch as `+∞` under the implemented contract
- scope any threshold to the declared comparison

For `SystemMetrics.entropy_level`:

- treat it as an implementation-specific input variable
- do not call it Shannon entropy or KL divergence unless the caller explicitly computes and supplies such a quantity under a declared contract

A zero value from either surface never proves repository-wide truth, safety, determinism, or convergence.

## Consequences

The project keeps its conceptual vocabulary while research and engineering claims become falsifiable against concrete code paths.

## Evidence boundary

`scan_kl_divergence.py` can support the named cases it emits. A historical `D_KL = 0.0` supports only its recorded input pair/case.

`SystemMetrics.entropy_level` participates only in local heuristic state selection; it is not a scientific system-health metric by default.

## Non-implementation boundary

Axiom contains no global entropy monitor, no cognitive-state estimator, and no mechanism that proves “zero entropy” for the repository or an external agent system.
