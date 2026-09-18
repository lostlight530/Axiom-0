> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `DECISION`
> - **Role:** Current architecture decision: **T-01 to T-10 is a single-run reference sequence**
> - **Authority:** Current repository-native design rationale and constraint for the architecture surface expressed by this decision
> - **Current meaning:** The owning proposition is the subject named above. Read its implementation anchors against current `CODE/**` and `SPECIFICATION.md`; the ADR preserves why the constraint exists and how it should bound present interpretation
> - **Evidence / implementation boundary:** An accepted ADR does not prove execution, scientific validation, external-system behavior, or historical task completion. Legacy terminology in the filename does not broaden the narrower current proposition stated by the document body
> - **Cross-document relation:** `SPECIFICATION.md` owns current implementation semantics; `METHODOLOGY/**` owns repeatable procedure; dated evidence owns point-in-time observation; index/navigation files do not add evidence
> - **Update trigger:** Update when this decision changes, its implementation anchor contradicts it, or a confirmed authority/evidence conflict requires explicit reconciliation
> - **Preservation rule:** Existing decision history, rationale and examples remain in the same file. This pass clarifies current architecture meaning without deleting the original record

# T-01 to T-10 is a single-run reference sequence

- Decision date: 2026-08-05
- Review calibration: 2026-08-24
- Status: Accepted
- Implementation anchor: `CODE/nexus_core.py`

## Context

`AxiomOrchestrator` implements a fixed successful-run sequence from `T-01` through `T-10`. Earlier “DAG irreversibility” language was stronger than the code.

The implementation is a single-process reference pipeline. It records ordered events for one run; it does not provide a distributed DAG scheduler, durable workflow engine, external transaction coordinator, or irreversible global state machine.

## Decision

Describe the implemented topology as:

`ORDERED_REFERENCE_PIPELINE(T-01 ... T-10)`.

For a successful `run_continuum()` execution:

- stage order is fixed by the implementation
- each event records stage identity and status
- `T-04` may request a state morph through the injected metrics provider
- `T-09` performs the configured KL comparison
- output includes the run identifier, resulting local state, event records, and limitations

A new execution is a new run. Historical run events are not an idempotency or retry protocol for external side effects.

## Consequences

Research can reason about ordered stage behavior without claiming irreversible state or a production workflow engine.

## Evidence boundary

A retained run/event sequence can establish the stages observed for that run and revision.

It cannot by itself establish:

- durable workflow persistence
- exactly-once external effects
- distributed scheduling
- compensation semantics
- global convergence
- future-run correctness

## External-effect boundary

The reference core does not implement external side-effect idempotency or compensation. An embedding system that adds consequential effects owns those semantics separately.
