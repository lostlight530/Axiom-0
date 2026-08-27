# Axiom-0 Engineering Specification

- Version: 2026.08-r2
- Calibration: 2026-08-27
- Status: implemented reference contract
- Authority: this file describes current repository behavior; ADRs explain durable decisions; retained evidence supports revision-specific claims

## Purpose and boundary

Axiom-0 is a dependency-free Python reference for explicit transformation contracts, bounded state adaptation, numerical coherence checks, structured event output, and claim-scoped repository evidence.

The implemented repository demonstrates:

- canonical JSON serialization and stable SHA-256 digests
- validated probability-distribution normalization
- `D_KL(P||Q)` calculation with explicit support-mismatch behavior
- a ten-stage single-process reference pipeline
- heuristic state adaptation driven by explicit metrics and thresholds
- serialized state transitions with optional prepare/validate hooks
- structured event records and declared limitations
- narrow repository-side validation utilities

It is not a foundation model, autonomous safety system, authorization layer, sandbox, distributed scheduler, durable state service, database product, agent protocol runtime, or proof of deterministic cognition.

“Axiom”, “continuum”, “entropy”, “coherence”, and phase names are project vocabulary unless a concrete mathematical or measurement contract is stated.

## Repository realization map

### Executable reference core

`CODE/contracts.py` provides canonical JSON, SHA-256 content identity, probability normalization, and KL divergence.

`CODE/liquid_morphing.py` provides validated `SystemMetrics`, heuristic state selection, serialized transition commit, optional prepare/validate hooks, and transition history.

`CODE/nexus_core.py` provides `AxiomOrchestrator`, a single-process ordered T-01 through T-10 reference pipeline with run-local events.

These surfaces do not establish distributed correctness, durable workflow semantics, external authorization, or universal convergence.

## Repository validation surfaces

Every validator has a separate contract. A result from one utility proves only the property that utility actually checks.

### `scan_kl_divergence.py`

Evaluates the implemented named KL fixtures and support-mismatch behavior.

Supported claim:

`NAMED_KL_CASE_RESULT`.

Not supported:

`REPOSITORY_WIDE_ZERO_ENTROPY`.

### `scan_consistency.py`

The structural scanner was recalibrated on 2026-08-27 after historical Daily records exposed drift between its old hard-coded contract and the canonical documentation architecture.

Current behavior:

- reads ADR membership from `ADR/INDEX.md`
- reads Methodology membership from `METHODOLOGY/INDEX.md`
- requires index/document topology to agree
- checks minimum current ADR sections: context, decision, evidence/verification boundary
- checks minimum current Methodology sections: inputs, procedure, outputs, evidence/verification boundary

It no longer hard-codes a 15 ADR / 14 Methodology count.

Supported claim after a success:

`CURRENT_DOCUMENT_TOPOLOGY_AND_MINIMUM_SECTION_CONTRACT_SATISFIED`.

It does not establish architecture semantics, implementation correctness, scientific truth, safety, or convergence.

Historical failures from the pre-repair scanner remain historical evidence and are not retroactively changed.

### `code_compliance.py`

Scans declared Python targets for an explicit set of prohibited source patterns. Absence of those patterns is not a general security property.

### `scope_guard.py`

Checks declared protected repository paths and explicit allow-file rules. Passing a path rule does not establish semantic correctness of an allowed change.

### `validate_research_record.py`

Validates the Daily/Weekly filename, section, logical-date/window, bounded-result, hypothesis-state, and missing-KL rules encoded in that script.

It does not independently prove that a command ran, a source proposition is true, or a scientific inference is valid.

## Repository knowledge surfaces

- `ADR/**` — durable architectural decisions and capability boundaries
- `METHODOLOGY/**` — procedures for measuring/interpreting repository behavior and research evidence
- `EVIDENCE_BASELINE.md` — current source/evidence semantics
- `RESEARCH/**` — historical Daily/Weekly/Monthly evidence and reconciliations
- `GOVERNANCE/**` — repository design/planning records
- `AUTOMATION/**` — operational metadata, not semantic authority
- presentation/navigation files — discovery surfaces, not runtime authority

Research prose does not silently change executable behavior. Executable code does not automatically validate every research claim.

## Contract semantics

### Canonicalization

`canonical_json(value) -> str` sorts mapping keys, preserves Unicode and string case, removes insignificant JSON whitespace, and rejects non-finite values.

`stable_digest(value)` returns SHA-256 over canonical UTF-8 bytes.

A digest establishes content identity under this serialization contract, not semantic equivalence, source provenance, authorization, or truth.

### Probability measures

`normalize_distribution(values, name=...)` requires a non-empty numeric sequence and rejects booleans, negative/non-finite values, and zero total mass.

`kl_divergence(p, q)` computes `D_KL(P||Q)` in nats.

- length mismatch fails
- P-zero terms contribute zero
- P-positive/Q-zero support mismatch returns positive infinity
- threshold selection is caller/configuration policy, not a mathematical constant

A recorded `D_KL = 0.0` is evidence only for the exact recorded vectors/fixture and function revision.

### Metrics and adaptation

`SystemMetrics.entropy_level` is a validated scalar input in `[0,1]` used by the local heuristic morphing policy. Its name does not make it Shannon entropy, KL divergence, thermodynamic entropy, or a system-health theorem.

`SOLID`, `LIQUID`, `GAS`, and `PLASMA` are local operational labels.

Supported bounded claim:

`EXPLICIT_HEURISTIC_STATE_TRANSITION_WITH_SERIALIZED_COMMIT`.

Not supported:

`AUTONOMOUS_OPTIMAL_ADAPTATION` or `PROVEN_SAFE_CONTROL_POLICY`.

### Continuum run

`AxiomOrchestrator.run_continuum(input) -> dict` emits the reference T-01 through T-10 path for a successful run.

The returned run ID is a local identifier, not a distributed idempotency key or durable transaction identifier.

## Daily / Weekly / Monthly evidence SOP

This section defines current interpretation. It does not rewrite historical artifacts.

### Daily

A Daily manifest may assert only what direct retained evidence supports.

1. **A1 source observation**
   - distinguish check time, publication/version time, source authority, and exact supported proposition
   - reachability is not claim truth
2. **A2 numerical/structural audit**
   - retain each command result separately
   - KL success is fixture/input scoped
   - structural scanner success is document-structure scoped
   - one command success does not override another command failure
3. **A3 execution surface**
   - if execution did not occur, record `NOT_EXECUTED` or `NOT_COMPUTED`
   - a normal/template success phrase is non-evidentiary when actual execution fields say the stage was skipped, missing, or aborted
   - `100 / 100` supports only the specified executions actually evidenced
4. **A4 topology/index surface**
   - navigation/path correctness is not runtime or semantic correctness
   - if A4 is halted, do not infer index alignment from another date

### Weekly

Weekly synthesis may aggregate, preserve, or downgrade Daily evidence.

It must not:

- backfill an unexecuted Daily stage as success
- create a missing KL scalar
- erase Daily failure/error states
- upgrade repeated citations into independent corroboration
- treat current file coverage as historical execution coverage

A week that has not completed has no inferred final Weekly result.

### Monthly/A6

A partial-month stage audit may reconcile evidence to a cutoff. It must not create future-day evidence or declare formal monthly closure before the natural monthly lifecycle has actual retained evidence.

Formal August status at 2026-08-27: `OPEN`.

## Historical evidence and correction semantics

Historical Daily and Weekly records remain point-in-time evidence.

Later reconciliation may record:

- `TEMPORAL_PROVENANCE_CONFLICT`
- `HISTORICAL_COMMAND_RESULT_CONFLICT`
- `INVALID_INPUT_PROVENANCE_LABEL`
- `MISSING_DATA`
- `NOT_COMPUTED`
- a narrowed run-local interpretation

A repaired current validator does not turn a historical failed validator execution into a historical success.

The current August stage authority is `RESEARCH/monthly/2026-08-through-27-stage-audit.md`; the earlier through-23 stage audit remains the prior cutoff record.

## Error and ownership boundary

Invalid caller data raises `TypeError` or `ValueError` where explicit input validation applies. A configured KL coherence violation raises `RuntimeError` in the reference orchestrator.

The library does not establish authentication, authorization, isolation, secret management, network policy, quotas, durable retries, or incident handling.

## Evidence boundary

- KL scan → recorded KL fixtures only
- structural scan → current documentation topology/minimum sections only
- source-pattern scan → explicit patterns only
- scope guard → path rules only
- research-record validator → encoded record structure only
- Daily/Weekly artifacts → point-in-time retained evidence subject to provenance reconciliation

File presence alone is not execution evidence. Later success does not erase earlier failure, missing fields, blocked states, or chronology conflicts.

Python-version compatibility is revision/environment-specific and is asserted only when the relevant executable behavior was actually observed and retained.
