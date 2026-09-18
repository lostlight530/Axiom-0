> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `METHOD`
> - **Role:** Current methodology: **Creative architecture material stays hypothesis-labelled**
> - **Authority:** Repository-native method authority for the procedure, assumptions, thresholds, evidence treatment and limitations expressed by this file
> - **Current meaning:** The method owns the procedural semantics named above. Read steps and thresholds as a contract for how the repository should reason or check, not as evidence that the method executed at the current revision
> - **Evidence / implementation boundary:** Method definition != method execution. Conceptual procedures do not become runtime capability without an implementation anchor, and historical examples retain their own cutoff rather than defining present status
> - **Cross-document relation:** `SPECIFICATION.md` and current `CODE/**` bound implementation; ADRs explain durable design choices; dated evidence and periodic records provide observations without redefining the method
> - **Update trigger:** Update when the procedure, assumptions, thresholds, implementation mapping, evidence semantics or historical/current boundary materially changes
> - **Preservation rule:** Existing procedure, examples and rationale remain in the same file. Current clarification is additive and does not erase earlier method history

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