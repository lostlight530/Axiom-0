> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `METHOD`
> - **Role:** Current methodology for **Deterministic Collaboration Protocol**
> - **Authority:** Repository-native method authority for the procedure, assumptions, thresholds, evidence treatment, and limitations this file explicitly defines
> - **Current meaning:** Read procedural language as a method contract, not as evidence that the method was executed on the current revision. Historical examples retain their own cutoff and must not become current status by proximity
> - **Evidence / implementation boundary:** A defined method, threshold, scanner, reconciliation procedure, or validation rule is not an executed result. Conceptual methods remain distinct from implemented runtime behavior
> - **Cross-document relation:** `SPECIFICATION.md` and `CODE/**` bound implementation; ADRs explain durable design decisions; evidence baselines and periodic records provide dated observations without redefining the method
> - **Update trigger:** Update when the method itself changes, its implemented mechanics diverge, evidence semantics change, or a historical example is incorrectly presented as current state
> - **Preservation rule:** The subject body remains intact as the owning document. This pass organizes current interpretation and corrects only confirmed present-tense authority drift; dated evidence, historical examples, and original research language retain their own time boundary

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

## Inputs

- the collaboration/consensus claim and cited external mechanism
- named local message, coordination, or state-transition implementation, if any
- failure model and validation evidence, if retained

## Procedure

1. distinguish single-process serialized transitions from multi-agent coordination
2. resolve claimed messages, membership, consensus, and failure handling to executable paths
3. classify absent surfaces `NOT_IMPLEMENTED` and external mechanisms `REFERENCE_ONLY`
4. preserve assumptions and counterexamples

## Outputs

- `REFERENCE_ONLY` / `NOT_IMPLEMENTED` status
- bounded conceptual mapping where useful
- explicit missing implementation surface

## Failure conditions

The method fails when documentation claims agent-to-agent messaging, consensus, distributed coordination, or collaboration guarantees without a concrete executable implementation.

## Evidence boundary

This methodology limits claims; it does not implement collaboration.
