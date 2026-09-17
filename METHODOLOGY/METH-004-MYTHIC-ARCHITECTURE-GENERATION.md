> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `METHOD`
> - **Role:** Current methodology for **Mythic Architecture Generation**
> - **Authority:** Repository-native method authority for the procedure, assumptions, thresholds, evidence treatment, and limitations this file explicitly defines
> - **Current meaning:** Read procedural language as a method contract, not as evidence that the method was executed on the current revision. Historical examples retain their own cutoff and must not become current status by proximity
> - **Evidence / implementation boundary:** A defined method, threshold, scanner, reconciliation procedure, or validation rule is not an executed result. Conceptual methods remain distinct from implemented runtime behavior
> - **Cross-document relation:** `SPECIFICATION.md` and `CODE/**` bound implementation; ADRs explain durable design decisions; evidence baselines and periodic records provide dated observations without redefining the method
> - **Update trigger:** Update when the method itself changes, its implemented mechanics diverge, evidence semantics change, or a historical example is incorrectly presented as current state
> - **Preservation rule:** The subject body remains intact as the owning document. This pass organizes current interpretation and corrects only confirmed present-tense authority drift; dated evidence, historical examples, and original research language retain their own time boundary

# Creative architecture material stays hypothesis-labelled

- Method version: 2026-08-24
- Implementation status: `DOCUMENTARY_ONLY`
- Historical filename retained for continuity

## Objective

Preserve expressive or exploratory architecture material without allowing metaphor, synthetic structure, or speculative design to masquerade as implemented Axiom behavior.

## Inputs

- a bounded architecture question
- known repository facts
- explicit constraints/non-goals
- current implementation inventory
- supporting evidence where available

## Procedure

1. Separate concrete repository facts from exploratory ideas.
2. Label non-implemented alternatives as `PROPOSED`, `HYPOTHESIS`, or equivalent bounded states.
3. Name the implementation gap explicitly.
4. Record assumptions and disconfirming evidence where relevant.
5. Do not edit `CODE/**` or claim runtime behavior merely because an exploratory document exists.
6. If an idea later becomes a durable repository decision, distill it separately through the ADR process.

## Outputs

- labelled exploratory alternatives
- assumptions and known conflicts
- explicit implementation status
- links to current repository facts when those facts actually support the proposal

## Failure conditions

The method fails when:

- metaphor is presented as measurement
- a proposal is presented as current architecture
- implementation status is omitted
- external architecture is described as an Axiom runtime feature

## Evidence boundary

Creative material can support ideation history only. It is not execution evidence, a safety guarantee, or proof of repository capability.