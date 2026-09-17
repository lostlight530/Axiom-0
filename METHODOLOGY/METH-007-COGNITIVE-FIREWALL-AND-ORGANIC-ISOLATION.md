> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `METHOD`
> - **Role:** Current methodology for **Cognitive Firewall And Organic Isolation**
> - **Authority:** Repository-native method authority for the procedure, assumptions, thresholds, evidence treatment, and limitations this file explicitly defines
> - **Current meaning:** Read procedural language as a method contract, not as evidence that the method was executed on the current revision. Historical examples retain their own cutoff and must not become current status by proximity
> - **Evidence / implementation boundary:** A defined method, threshold, scanner, reconciliation procedure, or validation rule is not an executed result. Conceptual methods remain distinct from implemented runtime behavior
> - **Cross-document relation:** `SPECIFICATION.md` and `CODE/**` bound implementation; ADRs explain durable design decisions; evidence baselines and periodic records provide dated observations without redefining the method
> - **Update trigger:** Update when the method itself changes, its implemented mechanics diverge, evidence semantics change, or a historical example is incorrectly presented as current state
> - **Preservation rule:** The subject body remains intact as the owning document. This pass organizes current interpretation and corrects only confirmed present-tense authority drift; dated evidence, historical examples, and original research language retain their own time boundary

# Tool and content isolation are external to the Axiom reference core

- Method version: 2026-08-24
- Implementation status: `NOT_IMPLEMENTED_IN_REFERENCE_CORE`
- Historical filename retained for continuity

## Objective

Prevent documentation from implying that Axiom-0 implements a tool sandbox, capability allowlist, credential boundary, prompt firewall, or policy-enforcement runtime when those mechanisms are absent from the current executable core.

## Repository fact

`CODE/contracts.py`, `CODE/liquid_morphing.py`, and `CODE/nexus_core.py` do not implement general-purpose tool authorization or untrusted-content isolation.

## Interpretation method

When research discusses tool isolation or prompt/content trust boundaries:

1. label the mechanism as external guidance, reference architecture, or non-implemented requirement
2. identify the exact local surface, if any, that is actually relevant
3. do not infer authorization from input validation
4. do not infer sandboxing from a single-process reference pipeline
5. do not infer prompt-injection resistance from canonicalization or evidence labeling

## Inputs

- the external security/isolation claim and its source surface
- any named repository implementation path
- the exact threat, authority, or isolation boundary being asserted

## Procedure

1. separate metaphor from an executable security control
2. resolve every claimed control to code and a bounded validation record
3. otherwise classify it `REFERENCE_ONLY` or `NOT_IMPLEMENTED`
4. retain missing threat-model and operational evidence explicitly

## Outputs

- explicit `NOT_IMPLEMENTED` or `REFERENCE_ONLY` status
- bounded mapping from the external idea to any genuinely relevant local component
- unresolved implementation gap where applicable

## Failure conditions

The method fails when documentation claims local credential scoping, tool allowlisting, sandbox isolation, or policy enforcement without a concrete implementation artifact.

## Evidence boundary

This methodology is a claim-control boundary only. It does not provide the missing security mechanism.
