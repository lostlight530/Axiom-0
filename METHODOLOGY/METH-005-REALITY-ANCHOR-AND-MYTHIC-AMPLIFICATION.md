> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `METHOD`
> - **Role:** Current methodology for **Reality Anchor And Mythic Amplification**
> - **Authority:** Repository-native method authority for the procedure, assumptions, thresholds, evidence treatment, and limitations this file explicitly defines
> - **Current meaning:** Read procedural language as a method contract, not as evidence that the method was executed on the current revision. Historical examples retain their own cutoff and must not become current status by proximity
> - **Evidence / implementation boundary:** A defined method, threshold, scanner, reconciliation procedure, or validation rule is not an executed result. Conceptual methods remain distinct from implemented runtime behavior
> - **Cross-document relation:** `SPECIFICATION.md` and `CODE/**` bound implementation; ADRs explain durable design decisions; evidence baselines and periodic records provide dated observations without redefining the method
> - **Update trigger:** Update when the method itself changes, its implemented mechanics diverge, evidence semantics change, or a historical example is incorrectly presented as current state
> - **Preservation rule:** The subject body remains intact as the owning document. This pass organizes current interpretation and corrects only confirmed present-tense authority drift; dated evidence, historical examples, and original research language retain their own time boundary

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