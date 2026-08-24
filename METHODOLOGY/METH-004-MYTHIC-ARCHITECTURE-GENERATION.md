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