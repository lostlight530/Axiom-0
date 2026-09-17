> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `METHOD`
> - **Role:** Current methodology for **Synthetic Content Exclusion Boundary**
> - **Authority:** Repository-native method authority for the procedure, assumptions, thresholds, evidence treatment, and limitations this file explicitly defines
> - **Current meaning:** Read procedural language as a method contract, not as evidence that the method was executed on the current revision. Historical examples retain their own cutoff and must not become current status by proximity
> - **Evidence / implementation boundary:** A defined method, threshold, scanner, reconciliation procedure, or validation rule is not an executed result. Conceptual methods remain distinct from implemented runtime behavior
> - **Cross-document relation:** `SPECIFICATION.md` and `CODE/**` bound implementation; ADRs explain durable design decisions; evidence baselines and periodic records provide dated observations without redefining the method
> - **Update trigger:** Update when the method itself changes, its implemented mechanics diverge, evidence semantics change, or a historical example is incorrectly presented as current state
> - **Preservation rule:** The subject body remains intact as the owning document. This pass organizes current interpretation and corrects only confirmed present-tense authority drift; dated evidence, historical examples, and original research language retain their own time boundary

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