> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `METHOD`
> - **Role:** Current methodology for **Dag Topology Constraint**
> - **Authority:** Repository-native method authority for the procedure, assumptions, thresholds, evidence treatment, and limitations this file explicitly defines
> - **Current meaning:** Read procedural language as a method contract, not as evidence that the method was executed on the current revision. Historical examples retain their own cutoff and must not become current status by proximity
> - **Evidence / implementation boundary:** A defined method, threshold, scanner, reconciliation procedure, or validation rule is not an executed result. Conceptual methods remain distinct from implemented runtime behavior
> - **Cross-document relation:** `SPECIFICATION.md` and `CODE/**` bound implementation; ADRs explain durable design decisions; evidence baselines and periodic records provide dated observations without redefining the method
> - **Update trigger:** Update when the method itself changes, its implemented mechanics diverge, evidence semantics change, or a historical example is incorrectly presented as current state
> - **Preservation rule:** The subject body remains intact as the owning document. This pass organizes current interpretation and corrects only confirmed present-tense authority drift; dated evidence, historical examples, and original research language retain their own time boundary

# Ordered T-01 to T-10 reference-pipeline inspection

- Method version: 2026-08-24
- Implementation anchor: `CODE/nexus_core.py`
- Scope: one `AxiomOrchestrator.run_continuum()` execution

## Objective

Inspect and interpret the implemented stage sequence without calling it a distributed DAG, irreversible workflow, or exactly-once execution system.

## Inputs

- the concrete `AxiomOrchestrator` revision
- one run identifier
- canonicalizable input payload
- the metrics provider used by the run
- the two probability vectors used by the KL stage

## Procedure

1. Identify the exact code revision and run.
2. Treat `T-01` through `T-10` as the implemented ordered sequence.
3. Record each emitted event in order with its stage identity and status.
4. Record the local state before/after any morph request at `T-04` where observable.
5. Record the exact KL input identity and result used at `T-09`.
6. Preserve a failure as a failure of that run; do not infer later-stage success when execution stopped earlier.
7. Interpret a new call to `run_continuum()` as a new run, not as proof of retry/idempotency semantics for external effects.

## Outputs

- run identifier
- observed ordered stage/event sequence
- resulting local state label
- KL evidence attached to that run where emitted
- limitations and unobserved stages if execution did not complete

## Failure / unknown conditions

Use an incomplete/unknown state rather than filling gaps when:

- an expected stage event is absent
- the run/revision cannot be identified
- the KL vectors or result are not recoverable
- the metrics provider identity matters but is unknown

## Evidence boundary

This method can establish the event order and outputs observed for one reference-core run.

It does not establish durable workflow persistence, external-effect idempotency, compensation, distributed scheduling, global convergence, or future-run correctness.