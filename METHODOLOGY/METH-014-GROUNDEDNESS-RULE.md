# Claim groundedness review

- Method version: 2026-08-24
- Scope: repository research, ADR, specification, and evidence interpretation

## Objective

Determine whether a material claim is supported at the exact strength and scope in which it is written.

## Inputs

- claim text
- repository implementation status relevant to the claim
- cited source or local reproducer/evidence
- source/version identity where material
- historical/current interpretation context

## Procedure

1. Decompose compound claims into separately checkable propositions when needed.
2. Identify whether each proposition is about local implementation, local observation, external research, or inference.
3. For local implementation claims, require a concrete executable artifact.
4. For external claims, prefer the strongest appropriate source for the exact proposition and preserve the source's assumptions/domain.
5. Keep source identity verification separate from claim-support verification.
6. Narrow or relabel a claim when the source supports only a weaker proposition.
7. Record `SOURCE_CLAIM_MISMATCH`, `UNVERIFIED`, `HYPOTHESIS`, or other bounded states instead of forcing binary true/false.
8. Preserve historical wording through an erratum/reconciliation when silent rewriting would falsify chronology.

## Outputs

- bounded proposition
- evidence/source identity
- claim-support state
- implementation state
- limitations/unresolved dimensions

## Failure conditions

The review is incomplete when the citation does not support the proposition, an inference is presented as observation, a local implementation claim lacks an implementation anchor, or source/version identity is unresolved and material to the claim.

## Evidence boundary

Groundedness review can bound what the evidence supports. It does not make the cited source infallible or prove untested local behavior.