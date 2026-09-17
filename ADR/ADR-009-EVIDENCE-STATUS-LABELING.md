> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `DECISION`
> - **Role:** Architecture decision record for **Evidence Status Labeling**
> - **Authority:** Current repository-native design rationale and constraint for the decision surface explicitly owned by this ADR
> - **Current meaning:** Read this decision together with current `CODE/**` and `SPECIFICATION.md`. The ADR explains why a design is adopted or bounded; it does not override contradictory current implementation facts
> - **Evidence / implementation boundary:** Decision acceptance, terminology, or conceptual scope does not prove runtime execution, scientific validation, external-system behavior, or historical task completion
> - **Cross-document relation:** `SPECIFICATION.md` owns current implementation semantics; `METHODOLOGY/**` owns repeatable method; dated evidence owns point-in-time observations; navigation/index files do not add evidence
> - **Update trigger:** Update when the owned architecture decision changes, current implementation invalidates a stated constraint, or a confirmed authority conflict requires explicit reconciliation
> - **Preservation rule:** The subject body remains intact as the owning document. This pass organizes current interpretation and corrects only confirmed present-tense authority drift; dated evidence, historical examples, and original research language retain their own time boundary

# Explicit claim and evidence states

- Decision date: 2026-08-05
- Review calibration: 2026-08-24
- Status: Accepted
- Implementation anchor: ADR/Methodology/Evidence/Research records

## Context

A binary `true/false` or `pass/fail` label cannot express whether a proposition was observed locally, supported by an external source, proposed as design, contested, missing, or historically superseded.

Axiom contains executable code, numeric scans, structural scans, external-source research, and historical periodic artifacts. Those surfaces must not collapse into one generic “verified” state.

## Decision

Use explicit claim states when material to interpretation:

- `OBSERVED` — directly recorded from a local repository/evidence surface
- `SUPPORTED` — supported by external or analytical evidence within a declared scope
- `PROPOSED` — repository proposal, not current implementation
- `HYPOTHESIS` — testable interpretation without sufficient support yet
- `CONTESTED` — materially conflicting evidence remains
- `RETIRED` — no longer authoritative for current interpretation

Use separate availability/completeness states where needed, including `MISSING_DATA`, `NOT_COMPUTED`, `UNRESOLVED`, and temporal/delivery states defined by ADR-016.

## Consequences

Repository claims become more verbose but easier to falsify and reconcile.

## Evidence boundary

A structural scan may support `OBSERVED` structure without supporting semantic truth.

An external paper may support `SUPPORTED` research without implying local implementation.

A current successful result does not automatically retire a historical failure or unresolved field.

## Current interpretation rule

When a later erratum/reconciliation narrows a historical claim, the historical artifact remains evidence that the original statement existed, while the affected proposition may become `RETIRED`, `CONTESTED`, or replaced by a narrower current state.
