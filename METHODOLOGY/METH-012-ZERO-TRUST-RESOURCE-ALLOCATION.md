# Resource allocation and quota control are not implemented by the reference core

- Method version: 2026-08-24
- Implementation status: `NOT_IMPLEMENTED_IN_REFERENCE_CORE`
- Historical filename retained for continuity

## Objective

Prevent generic resource-governance guidance from being mistaken for an Axiom runtime capability.

## Repository fact

The current reference core does not provide:

- worker-pool management
- queue scheduling
- CPU/memory quota enforcement
- network policy
- cost metering
- deadline propagation
- cancellation trees
- external spend authorization

`SystemMetrics` contains resource-like scalar inputs for local heuristic state selection, but it does not enforce those resources.

## Interpretation method

When research discusses resource allocation:

1. distinguish **observed/caller-supplied metrics** from **enforced quotas**
2. treat Axiom's resource fields as heuristic inputs only
3. label external quota/scheduling patterns as `REFERENCE_ONLY`
4. do not infer resource governance from state-label changes

## Outputs

- exact local metric surface, if relevant
- explicit `NOT_IMPLEMENTED` status for enforcement
- bounded external-reference mapping

## Failure conditions

The method fails when documentation claims quota enforcement, cost control, concurrency management, or cancellation semantics without an executable implementation.

## Evidence boundary

A recorded CPU/memory scalar can describe one input value. It cannot prove that the repository constrained the underlying resource.