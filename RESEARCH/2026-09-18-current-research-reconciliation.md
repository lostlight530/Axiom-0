# 2026-09-18 Current Research Reconciliation

Status: current forward reconciliation  
Scope: six legacy survey-style research reports in `RESEARCH/`  
Base repository revision reviewed: `a3dae87b64824bf0dc30d6b0ea1f91e5ae8fb93c`

## Purpose

This record narrows current interpretation of six legacy research reports without rewriting their original point-in-time prose.

The review distinguishes:

- external industry/research propositions;
- local Axiom implementation mappings;
- current accepted repository boundaries;
- claims not revalidated in this pass.

This reconciliation does not claim that the original authors/producers had access to later architecture decisions or later code.

## Current executable baseline

At the reviewed revision, the executable Axiom reference core is:

- `CODE/contracts.py` — canonical JSON, SHA-256 content identity, probability normalization, KL divergence
- `CODE/liquid_morphing.py` — validated local metrics, heuristic state selection, serialized in-process state transition, optional prepare/validate hooks, transition history
- `CODE/nexus_core.py` — one single-process ordered `T-01` through `T-10` reference run with concrete behavior at `T-04` and `T-09`

The current core does **not** implement:

- a general LLM runtime or prompt-loop controller;
- a multi-agent collaboration runtime;
- `delegate` / `gather` / `reduce` orchestration primitives;
- a `T-05` physical scheduler;
- lock-free worker queues or parallel execution threads;
- isolated sandboxes or sandbox lifecycle management;
- cryptographically signed stage handoffs;
- SQLite retrieval, graph memory, or durable memory persistence;
- a federated workflow runtime;
- formal theorem proving;
- a general external tool executor or authorization layer.

The ordered T-stage names are reference-pipeline identifiers. A stage label does not create the mechanism suggested by the label.

## External-source boundary

The six reviewed reports contain broad external industry/research propositions but do not provide a complete proposition-level primary-source/version ledger.

This repository-only reconciliation did **not** independently revalidate every external proposition, release date, benchmark claim, industry-consensus statement, or product description against current primary sources.

Therefore external propositions that are not independently supported elsewhere in current repository evidence remain:

`EXTERNAL_CLAIMS_NOT_REVALIDATED`.

This status is not a statement that every external proposition is false. It means the current reconciliation does not promote those propositions into current repository authority without new source work.

## Report dispositions

### `RPT-2026-Q1-AGENT-ARCHITECTURE.md`

Current disposition:

- historical report retained: `HISTORICAL_RESEARCH_RETAINED`
- local comparative superiority claims: `LOCAL_MAPPING_SUPERSEDED`
- uncited external industry/community claims: `EXTERNAL_CLAIMS_NOT_REVALIDATED`

The report's statements about deterministic/zero-dependency engineering, timing advantages, guaranteed context preparation, Merkle-backed memory implications, architectural superiority, and an “optimal” path to AGI exceed what current Axiom repository evidence can establish.

The report's `[SPECULATIVE]` label remains part of its original historical wording and should not be upgraded by current repository publication status.

### `agent-frameworks-evolution.md`

Current disposition:

- historical survey retained: `HISTORICAL_RESEARCH_RETAINED`
- local Axiom mapping: `LOCAL_MAPPING_SUPERSEDED`
- external framework claims: `EXTERNAL_CLAIMS_NOT_REVALIDATED`

The report states that ADR-008 forbids ReAct-style planning/execution/observation in one prompt. Current ADR-008 is instead the **research-to-ADR distillation** decision and does not establish that runtime prohibition.

The report also assigns operational semantics to `T-03`, `T-05`, `T-06`, `T-07`, and `T-08` that are not implemented by `CODE/nexus_core.py`. The current reference core does not implement a model-control loop, physical pruning system, sandbox rollback path, or deterministic external Test-Time Compute runtime.

The report's `[REAL]` label is not a substitute for proposition-level source and implementation evidence.

### `agent-orchestration.md`

Current disposition:

- historical survey retained: `HISTORICAL_RESEARCH_RETAINED`
- local orchestration mapping: `LOCAL_MAPPING_SUPERSEDED`
- external orchestration taxonomy claims: `EXTERNAL_CLAIMS_NOT_REVALIDATED`

Current Axiom does not implement:

- `T-05` as a physical scheduler;
- `delegate`, `gather`, or `reduce` primitives;
- lock-free concurrent writes as an orchestration protocol;
- a federated multi-agent continuum;
- parallel sandbox workflows produced by Liquid Morphing;
- branch merge conditioned on a “zero entropy” verification gate.

`AxiomMorphingEngine` performs local in-process state-label transitions under an `asyncio.Lock`; it is not a federated workflow scheduler.

### `compound-ai-systems.md`

Current disposition:

- historical survey retained: `HISTORICAL_RESEARCH_RETAINED`
- local compound-system mapping: `LOCAL_MAPPING_SUPERSEDED`
- external compound-system claims: `EXTERNAL_CLAIMS_NOT_REVALIDATED`

The current ten-stage reference run does not require cryptographically signed state verification between stages, does not drive multiple execution threads through lock-free queues, and does not implement autonomous routing branches.

At `T-04`, current code evaluates caller-provided `SystemMetrics` with explicit local heuristics. It does not derive morphing from KL divergence; the KL comparison occurs separately at `T-09`.

### `llm-inherent-limitations-survey.md`

Current disposition:

- historical survey retained: `HISTORICAL_RESEARCH_RETAINED`
- local Axiom memory/runtime mapping: `LOCAL_MAPPING_SUPERSEDED`
- broad LLM/industry claims: `EXTERNAL_CLAIMS_NOT_REVALIDATED`

Current Axiom does not implement bare-metal retrieval, SQLite-backed graph inference, persistent memory, or a mechanism that guarantees memory accuracy.

ADR-005 currently defines canonical JSON/content identity boundaries. ADR-006 currently keeps synthetic/mythic architecture documentary. Neither ADR establishes the retrieval/SQLite-memory mechanisms attributed to them in the legacy report.

Claims such as universal exponential recall decay, “fatal physical laws,” deterministic industrial requirements, or a final engineering answer require independent evidence and cannot be inherited from the report's `[REAL]` label.

### `reflection-and-system2-survey.md`

Current disposition:

- historical survey retained: `HISTORICAL_RESEARCH_RETAINED`
- forward-looking Axiom reflection proposal: `NOT_IMPLEMENTED_IN_REFERENCE_CORE`
- external reflection/System-2 claims: `EXTERNAL_CLAIMS_NOT_REVALIDATED`

The current reference core does not implement a sandbox code executor, formal theorem prover, deterministic reflection subsystem, multi-agent evaluator runtime, or a “System 2” mechanism in the T-stage pipeline.

Any proposal that a future reflection layer should use executable verification may remain a research/design proposition, but it must not be described as current Axiom behavior without a concrete implementation and revision-matched evidence.

## Current authority after reconciliation

For current Axiom claims, use this order according to claim type:

```text
current CODE/** implementation
    ↓
SPECIFICATION.md
    ↓
exact accepted ADR / Methodology
    ↓
current bounded evidence / revision-matched execution
    ↓
legacy research only as point-in-time research history
```

A legacy report does not outrank the current executable core merely because it uses architectural language or carries `[REAL]` / `[SPECULATIVE]` labels.

## Non-retroactivity

No original report is rewritten by this reconciliation.

The reports remain evidence of what was written at their point in repository history. This dated record changes **current interpretation**, not the historical existence of the original prose.

If later source research revalidates a specific external proposition, add a new dated evidence record with the exact source/version/proposition. Do not silently replace this unresolved state.

## Verification boundary

This reconciliation is based on current repository documents and source inspection. It did not execute runtime tests, replay historical research runs, or independently verify every external industry claim.

- current code/document comparison: performed
- historical runtime replay: `NOT_EXECUTED`
- external proposition-level revalidation: `NOT_EXECUTED`
- workflow/CI execution for this reconciliation: not established by this record

Unknown external claims remain unknown rather than being converted into false certainty.
