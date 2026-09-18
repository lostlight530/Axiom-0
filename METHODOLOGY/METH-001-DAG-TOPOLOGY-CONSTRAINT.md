> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `METHOD`
> - **Role:** Current methodology: **Ordered T-01 to T-10 reference-pipeline inspection**
> - **Authority:** Repository-native method authority for the procedure, assumptions, thresholds, evidence treatment and limitations expressed by this file
> - **Current meaning:** The method owns the procedural semantics named above. Read steps and thresholds as a contract for how the repository should reason or check, not as evidence that the method executed at the current revision
> - **Evidence / implementation boundary:** Method definition != method execution. Conceptual procedures do not become runtime capability without an implementation anchor, and historical examples retain their own cutoff rather than defining present status
> - **Cross-document relation:** `SPECIFICATION.md` and current `CODE/**` bound implementation; ADRs explain durable design choices; dated evidence and periodic records provide observations without redefining the method
> - **Update trigger:** Update when the procedure, assumptions, thresholds, implementation mapping, evidence semantics or historical/current boundary materially changes
> - **Preservation rule:** Existing procedure, examples and rationale remain in the same file. Current clarification is additive and does not erase earlier method history

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