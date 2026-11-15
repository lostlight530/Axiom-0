> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `METHOD`
> - **Role:** Current methodology: **Synthetic content provenance and claim-status method**
> - **Authority:** Repository-native method authority for the procedure, assumptions, thresholds, evidence treatment and limitations expressed by this file
> - **Current meaning:** The method owns the procedural semantics named above. Read steps and thresholds as a contract for how the repository should reason or check, not as evidence that the method executed at the current revision
> - **Evidence / implementation boundary:** Method definition != method execution. Conceptual procedures do not become runtime capability without an implementation anchor, and historical examples retain their own cutoff rather than defining present status
> - **Cross-document relation:** `SPECIFICATION.md` and current `CODE/**` bound implementation; ADRs explain durable design choices; dated evidence and periodic records provide observations without redefining the method
> - **Update trigger:** Update when the procedure, assumptions, thresholds, implementation mapping, evidence semantics or historical/current boundary materially changes
> - **Preservation rule:** Existing procedure, examples and rationale remain in the same file. Current clarification is additive and does not erase earlier method history

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

## Origin-versus-support test case

A generated description of "automatic semantic deduplication" is unsupported as local implementation: `stable_digest` hashes canonical JSON bytes but no deduplication store, collision-resolution workflow, merge policy or semantic matcher exists in the inspected core. The proper public representation separates (1) generated authoring origin when known, (2) claim `PROPOSED` or `HYPOTHESIS`, (3) absent local implementation, and (4) a reviewable future test plan.

Do not use a digested generated sentence as evidence that its proposition is true. Content identity and external/source support are independent axes even if the generated record is reproducible byte for byte.
