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
