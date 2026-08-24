# Axiom-0 Engineering Specification

- Version: 2026.08
- Status: implemented reference contract
- Authority: this file describes repository behavior; ADRs explain durable decisions; retained evidence supports revision-specific claims

## Purpose and boundary

Axiom-0 is a dependency-free Python reference for explicit transformation contracts, bounded state adaptation, numerical coherence checks, and structured event output.

The implemented repository demonstrates:

- canonical JSON serialization and stable SHA-256 digests
- validated probability-distribution normalization
- `D_KL(P||Q)` calculation with explicit support-mismatch behavior
- a ten-stage single-process reference pipeline
- heuristic state adaptation driven by explicit metrics and thresholds
- serialized state transitions with optional prepare/validate hooks
- structured event records and declared limitations
- several narrow repository-side validation utilities

It is not a foundation model, autonomous safety system, authorization layer, sandbox, distributed scheduler, durable state service, database product, agent protocol runtime, or proof of deterministic cognition.

“Axiom”, “continuum”, “entropy”, “coherence”, and phase names are project vocabulary unless a concrete mathematical or measurement contract is stated.

## Repository realization map

### Executable reference core

`CODE/contracts.py` provides:

- `canonical_json(value)` — sorted-key JSON encoding with Unicode preservation, compact separators, and rejection of non-finite values
- `stable_digest(value)` — SHA-256 over canonical UTF-8 bytes
- `normalize_distribution(values, name=...)` — validates and normalizes non-negative finite numeric mass
- `kl_divergence(p, q)` — computes `D_KL(P||Q)` in nats and returns positive infinity for P-positive/Q-zero support mismatch
- `utc_now()` — timestamp utility for event records

These functions define byte/numeric behavior only. A stable digest is content identity under the declared canonicalization contract, not semantic equivalence, provenance, authorization, or truth.

`CODE/liquid_morphing.py` provides:

- `SystemMetrics` validation for normalized CPU, memory, entropy-level inputs and non-negative task/queue counts
- `AxiomMorphingEngine.evaluate_morph()` with explicit heuristic thresholds
- serialized transition commit through `asyncio.Lock`
- optional `prepare` and `validate` hooks before state commit
- transition history with source/target state, timing, success, and error type

`SOLID`, `LIQUID`, `GAS`, and `PLASMA` are operational labels, not physical or cognitive-state claims.

`CODE/nexus_core.py` provides `AxiomOrchestrator`, a single-process ten-stage reference pipeline:

- successful runs traverse `T-01` through `T-10` in order
- `T-04` evaluates the injected metrics provider and may request a local morph transition
- `T-09` calculates KL divergence against the declared baseline
- output contains a run ID, current state, event records, and explicit limitations

The orchestrator does not establish distributed correctness, durable workflow semantics, exactly-once external effects, or universal determinism.

## Repository validation surfaces

The repository contains several narrow utilities with different contracts.

### `scan_kl_divergence.py`

Evaluates the implemented named KL cases (`identity`, `renormalized_identity`) plus a support-mismatch case and emits machine-readable evidence.

Its result is case-specific numerical evidence only.

### `scan_consistency.py`

This is a legacy structural scanner, not a current validator for the complete architecture in this branch.

Its current code is hard-coded for:

- 15 ADR files
- 14 Methodology files
- the older bilingual heading layout

The current architecture contains 16 ADRs and 15 Methodologies and several documents now use the newer architecture-bound structure.

Current classification:

`LEGACY_STRUCTURAL_SCANNER / CURRENT_CONTRACT_MISMATCH`.

Do not interpret this script's presence as evidence that the current ADR/Methodology set has been validated by it.

### `code_compliance.py`

Scans declared Python targets for a small explicit set of prohibited source patterns. Absence of those patterns is not a general security property.

### `scope_guard.py`

Checks declared protected repository paths and explicit allow-file exceptions. Passing its path rule says nothing about semantic correctness of an allowed file.

### `validate_research_record.py`

Validates the specific Daily/Weekly filename, section, logical date/window, bounded-result, hypothesis-state, and missing-KL rules implemented by that script.

It does not establish source truth or scientific correctness.

A result from one utility proves only the exact property that utility actually checks.

## Repository knowledge surfaces

- `ADR/**` — durable architectural decisions and capability boundaries
- `METHODOLOGY/**` — procedures for measuring/interpreting repository behavior and research evidence
- `EVIDENCE_BASELINE.md` — source/evidence semantics
- `RESEARCH/**` — historical Daily/Weekly/Monthly research artifacts and reconciliations
- `GOVERNANCE/**` — repository design/planning records
- `AUTOMATION/**` — operational metadata, not semantic authority
- `FRONTEND/**`, README, indexes, and related files — presentation/discovery surfaces

Research prose does not silently change executable behavior. Executable code does not automatically validate every research claim.

## Contract semantics

### Canonicalization

`canonical_json(value) -> str` sorts mapping keys, preserves Unicode and string case, removes insignificant JSON whitespace, and rejects NaN/Infinity.

It establishes deterministic serialization for JSON-compatible values under this implementation. It does not establish semantic equivalence between differently represented inputs.

`stable_digest` returns SHA-256 over canonical UTF-8 bytes.

### Probability measures

`normalize_distribution(values, name=...)` requires a non-empty numeric sequence, rejects booleans, negative/non-finite values and zero total mass, and returns normalized floats.

`kl_divergence(p, q)` computes `D_KL(P||Q)` in nats.

- length mismatch fails
- P-zero terms contribute zero
- P-positive/Q-zero support mismatch returns positive infinity
- threshold selection is caller/configuration policy, not a mathematical constant

A recorded `D_KL = 0.0` is evidence only for the exact input vectors/function revision associated with that observation.

### Metrics and adaptation

`SystemMetrics.entropy_level` is a validated scalar input in `[0,1]` used by the local heuristic morphing policy. Its name does not by itself mean Shannon entropy, KL divergence, thermodynamic entropy, or another formally derived quantity.

CPU/memory/queue weights and morph thresholds are implementation-specific heuristics.

`AxiomMorphingEngine.evaluate_morph()` selects candidate local state changes. `shift()` commits the state only after optional hooks complete successfully.

Supported bounded claim:

`EXPLICIT_HEURISTIC_STATE_TRANSITION_WITH_SERIALIZED_COMMIT`.

Not supported:

`AUTONOMOUS_OPTIMAL_ADAPTATION` or `PROVEN_SAFE_CONTROL_POLICY`.

### Continuum run

`AxiomOrchestrator.run_continuum(input) -> dict` emits `T-01` through `T-10` for a successful reference run.

Timestamps make complete run output non-byte-identical across executions even when canonical input digests are stable.

The returned `run_id` identifies the local reference run; it is not a distributed idempotency key or durable transaction identifier.

## Error and ownership boundary

Invalid caller data raises `TypeError` or `ValueError` where explicit input validation applies. A configured KL coherence violation raises `RuntimeError` in the reference orchestrator.

The library does not establish authentication, authorization, isolation, secret management, network policy, quotas, durable retries, or incident handling.

Those remain outside the reference implementation.

## Evidence boundary

Repository evidence is claim-specific.

- a KL scan supports its recorded cases
- the legacy structural scanner supports only its historical hard-coded structure and is currently mismatched to the 16/15 architecture
- a source-pattern scan supports only its explicit patterns
- a scope guard supports only its path rules
- a research-record validator supports only its encoded structural/field rules
- a Daily/Weekly artifact supports its point-in-time stored observation subject to source/provenance reconciliation

File presence alone is not execution evidence. A current successful observation does not erase an earlier failure, missing field, blocked state, or temporal provenance conflict.

Python-version compatibility is asserted only when relevant executable behavior was actually observed in that environment for the revision under discussion.

## Temporal and research interpretation

Historical research artifacts remain point-in-time records. Later reconciliation can narrow their current interpretation without pretending later evidence was available at the original time.

Logical date, execution state, source-event time, generation/delivery state, aggregation visibility, current path presence, and substantive evidence completeness are separate dimensions when they differ.

Formal August Monthly closure remains open before the natural month ends; partial-stage reconciliation does not manufacture future evidence.