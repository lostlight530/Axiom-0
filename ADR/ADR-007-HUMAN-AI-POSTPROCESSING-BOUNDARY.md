> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `DECISION`
> - **Role:** Current architecture decision: **Generated content is evidence input, not repository authority**
> - **Authority:** Current repository-native design rationale and constraint for the architecture surface expressed by this decision
> - **Current meaning:** The owning proposition is the subject named above. Read its implementation anchors against current `CODE/**` and `SPECIFICATION.md`; the ADR preserves why the constraint exists and how it should bound present interpretation
> - **Evidence / implementation boundary:** An accepted ADR does not prove execution, scientific validation, external-system behavior, or historical task completion. Legacy terminology in the filename does not broaden the narrower current proposition stated by the document body
> - **Cross-document relation:** `SPECIFICATION.md` owns current implementation semantics; `METHODOLOGY/**` owns repeatable procedure; dated evidence owns point-in-time observation; index/navigation files do not add evidence
> - **Update trigger:** Update when this decision changes, its implementation anchor contradicts it, or a confirmed authority/evidence conflict requires explicit reconciliation
> - **Preservation rule:** Existing decision history, rationale and examples remain in the same file. This pass clarifies current architecture meaning without deleting the original record

# Generated content is evidence input, not repository authority

- Decision date: 2026-08-05
- Review calibration: 2026-08-24
- Status: Accepted
- Implementation anchor: `RESEARCH/**`, ADR/Methodology/Evidence interpretation layers

## Context

Generated text or code can be plausible while wrong. A generated completion statement is not itself proof of execution, correctness, source validity, safety, or implementation status.

Axiom stores historical research artifacts alongside a narrower executable reference core. Those surfaces must remain distinct.

## Decision

Treat generated material as an input to repository review and evidence interpretation.

For material claims:

- separate locally observed behavior from externally supported propositions
- preserve source identity/version where external evidence is used
- keep implementation status tied to concrete code paths
- preserve unresolved, contested, missing, or temporally conflicting evidence instead of normalizing it into success

A later correction may supersede the **current interpretation** of historical generated text without rewriting the fact that the earlier artifact existed.

## Consequences

Research history stays inspectable while executable and evidentiary authority remain explicit.

## Evidence boundary

AI-generated prose, summaries, code suggestions, or completion language are not evidence by themselves.

The relevant evidence surface is the actual repository artifact, emitted result, primary source, or historical record that supports the claim.

## Public-boundary rule

Repository documents may expose bounded evidence outcomes and current interpretation. They do not expose private prompts, hidden reasoning, confidential context, private memory, or unpublished automation strategy.
