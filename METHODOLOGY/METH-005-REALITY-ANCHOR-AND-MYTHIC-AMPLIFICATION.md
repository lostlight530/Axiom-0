> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `METHOD`
> - **Role:** Current methodology: **Repository fact and hypothesis separation**
> - **Authority:** Repository-native method authority for the procedure, assumptions, thresholds, evidence treatment and limitations expressed by this file
> - **Current meaning:** The method owns the procedural semantics named above. Read steps and thresholds as a contract for how the repository should reason or check, not as evidence that the method executed at the current revision
> - **Evidence / implementation boundary:** Method definition != method execution. Conceptual procedures do not become runtime capability without an implementation anchor, and historical examples retain their own cutoff rather than defining present status
> - **Cross-document relation:** `SPECIFICATION.md` and current `CODE/**` bound implementation; ADRs explain durable design choices; dated evidence and periodic records provide observations without redefining the method
> - **Update trigger:** Update when the procedure, assumptions, thresholds, implementation mapping, evidence semantics or historical/current boundary materially changes
> - **Preservation rule:** Existing procedure, examples and rationale remain in the same file. Current clarification is additive and does not erase earlier method history

# Repository fact and hypothesis separation

- Method version: 2026-08-24
- Scope: research and architecture interpretation

## Objective

Keep verified repository facts, external evidence, inference, and hypothesis in separate states so speculative material cannot overwrite what the repository actually implements or observed.

## Inputs

- concrete repository revision/files
- retained execution or research artifacts
- relevant external sources
- bounded question to be interpreted

## Procedure

1. Freeze the repository/evidence snapshot being discussed.
2. List directly observed repository facts.
3. List external evidence separately from local implementation.
4. Mark inference and hypothesis explicitly.
5. Record unknown or unresolved dimensions.
6. Change a hypothesis state only when new evidence actually bears on that hypothesis.
7. Use reconciliation rather than silently rewriting historical observations when later evidence changes interpretation.

## Outputs

A compact ledger or section that distinguishes:

- `LOCAL_REPOSITORY_FACT`
- `EXTERNAL_EVIDENCE`
- `INFERENCE`
- `HYPOTHESIS`
- `UNRESOLVED`

## Failure conditions

The method fails when a hypothesis overwrites retained evidence, when current files are backdated into earlier execution history, or when external evidence is promoted into local implementation without an implementation anchor.

## Evidence boundary

This is an interpretation method. It does not add runtime capability or prove a hypothesis merely by documenting it.