# Synthetic content provenance and claim-status method

- Method version: 2026-08-24
- Scope: research/documentary evidence

## Objective

Keep generated or synthetic content distinguishable from sourced evidence and from repository implementation.

## Inputs

- content under review
- known producer/origin when available
- cited source links or repository evidence
- intended use of the content
- current claim/evidence state

## Procedure

1. Record known provenance without treating origin-detection heuristics as truth.
2. Separate generated wording from the evidence it cites.
3. Verify consequential factual claims against the strongest available source appropriate to the claim.
4. Keep source identity, claim support, and repository implementation as separate fields/conclusions.
5. Label unsupported generated architecture as `PROPOSED`, `HYPOTHESIS`, or `UNVERIFIED` rather than silently accepting it.
6. Preserve correction history when later evidence changes a previously generated claim.

## Outputs

- provenance/origin statement where known
- source-support status
- claim state
- repository implementation status
- correction/erratum link when required

## Failure conditions

The method fails when a generated sentence is treated as evidence for itself, when a source trace is lost, or when synthetic content becomes a normative implementation claim without an implementation anchor.

## Evidence boundary

Provenance explains where content came from. It does not establish that the content is true, safe, or implemented.