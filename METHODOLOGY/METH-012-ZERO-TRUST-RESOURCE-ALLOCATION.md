> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `METHOD`
> - **Role:** Current methodology: **Resource allocation and quota control are not implemented by the reference core**
> - **Authority:** Repository-native method authority for the procedure, assumptions, thresholds, evidence treatment and limitations expressed by this file
> - **Current meaning:** The method owns the procedural semantics named above. Read steps and thresholds as a contract for how the repository should reason or check, not as evidence that the method executed at the current revision
> - **Evidence / implementation boundary:** Method definition != method execution. Conceptual procedures do not become runtime capability without an implementation anchor, and historical examples retain their own cutoff rather than defining present status
> - **Cross-document relation:** `SPECIFICATION.md` and current `CODE/**` bound implementation; ADRs explain durable design choices; dated evidence and periodic records provide observations without redefining the method
> - **Update trigger:** Update when the procedure, assumptions, thresholds, implementation mapping, evidence semantics or historical/current boundary materially changes
> - **Preservation rule:** Existing procedure, examples and rationale remain in the same file. Current clarification is additive and does not erase earlier method history

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

## Inputs

- named resource metric and collection surface
- enforcement policy, quota, timeout, or cancellation rule, if implemented
- command/revision/result for any claimed enforcement test

## Procedure

1. separate observation from enforcement
2. resolve each limit to an executable mechanism and failure behavior
3. classify absent enforcement `NOT_IMPLEMENTED`
4. retain external resource-governance ideas as bounded references only

## Outputs

- exact local metric surface, if relevant
- explicit `NOT_IMPLEMENTED` status for enforcement
- bounded external-reference mapping

## Failure conditions

The method fails when documentation claims quota enforcement, cost control, concurrency management, or cancellation semantics without an executable implementation.

## Evidence boundary

A recorded CPU/memory scalar can describe one input value. It cannot prove that the repository constrained the underlying resource.
