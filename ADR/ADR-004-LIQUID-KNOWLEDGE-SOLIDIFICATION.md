# Serialized heuristic state adaptation

- Decision date: 2026-08-05
- Review calibration: 2026-08-24
- Status: Accepted
- Implementation anchor: `CODE/liquid_morphing.py`

## Context

The repository implements local state labels and heuristic transitions, not “knowledge solidification” in a semantic or cognitive sense.

`AxiomMorphingEngine` evaluates caller-provided `SystemMetrics` and may request a transition among local state labels such as `SOLID`, `LIQUID`, `GAS`, and `PLASMA`.

## Decision

Describe the mechanism as serialized heuristic state adaptation.

Implemented properties:

- `SystemMetrics` validates normalized CPU, memory, and entropy-level inputs plus non-negative task/queue counts
- `evaluate_morph()` applies explicit local thresholds and weights
- `shift()` serializes transition commit using `asyncio.Lock`
- optional `prepare` and `validate` hooks run before state commit
- failure preserves the source state and records the exception type
- transition history records source/target state, timing, success, and error type

The state names are operational labels only.

## Consequences

The code remains useful as an auditable reference for bounded state adaptation without implying semantic transformation, self-optimization, or production control safety.

## Evidence boundary

A successful transition shows that the local hook/commit path completed for the supplied metrics and revision.

It does not prove:

- globally optimal state selection
- workload prediction accuracy
- semantic/cognitive phase change
- production readiness
- durable state persistence beyond the object lifetime

## Caller boundary

Embedding systems own real readiness checks, external state persistence, resource isolation, and consequential side effects.
