# Collaboration runtime is not implemented by Axiom-0

- Method version: 2026-08-24
- Implementation status: `NOT_IMPLEMENTED_IN_REFERENCE_CORE`
- Historical filename retained for continuity

## Objective

Prevent repository documentation from presenting Axiom-0 as a deterministic multi-agent collaboration runtime.

## Repository fact

The current executable core contains local contracts, heuristic state adaptation, and a single-process ordered reference pipeline. It does not contain agent identity, message transport, handoff protocol, distributed consensus, shared-task arbitration, or multi-agent execution state.

## Interpretation method

When research discusses collaboration architecture:

1. classify the external result as research/reference evidence
2. identify its original assumptions and system type
3. keep any mapping to Axiom conceptual unless a concrete local module exists
4. do not infer deterministic collaboration from deterministic serialization or ordered local stages
5. do not infer consensus from repeated agreement in research documents

## Outputs

- `REFERENCE_ONLY` / `NOT_IMPLEMENTED` status
- bounded conceptual mapping where useful
- explicit missing implementation surface

## Failure conditions

The method fails when documentation claims agent-to-agent messaging, consensus, distributed coordination, or collaboration guarantees without a concrete executable implementation.

## Evidence boundary

This methodology limits claims; it does not implement collaboration.