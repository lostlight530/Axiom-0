# Axiom-0 Engineering Specification

- Version: 2026.08
- Status: implemented reference contract
- Authority: this file describes repository behavior; ADRs explain durable decisions; retained execution evidence supports revision-specific claims

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
- repository-side structural, claim, and research-record validation utilities

It is not a foundation model, autonomous safety system, authorization layer, sandbox, distributed scheduler, durable state service, database product, agent protocol runtime, or proof of deterministic cognition.

“Axiom”, “continuum”, “entropy”, “coherence”, and phase names are project vocabulary unless a concrete mathematical or measurement contract is stated.

## Repository realization map

The repository separates executable contracts, research interpretation, durable decisions, procedures, and presentation.

### Executable reference core

`CODE/contracts.py` provides the deterministic low-level contracts:

- `canonical_json(value)` — sorted-key JSON encoding with Unicode preservation, compact separators, and rejection of non-finite values
- `stable_digest(value)` — SHA-256 over canonical UTF-8 bytes
- `normalize_distribution(values, name=...)` — validates and normalizes non-negative finite numeric mass
- `kl_divergence(p, q)` — computes `D_KL(P||Q)` in nats and returns positive infinity for P-positive/Q-zero support mismatch
- `utc_now()` — timestamp utility for event records

These functions define byte/numeric behavior only. A stable digest is content identity under the declared canonicalization contract, not semantic equivalence, provenance, authorization, or truth.

`CODE/liquid_morphing.py` provides the reference adaptation mechanism:

- `SystemMetrics` validates normalized CPU, memory, and entropy-level inputs plus non-negative task/queue counts
- `AxiomMorphingEngine.evaluate_morph()` applies explicit heuristic thresholds
- `shift()` serializes transitions through an `asyncio.Lock`
- optional `prepare` and `validate` hooks run before state commit
- transition history records start/end time, source/target state, success, and error type

`SOLID`, `LIQUID`, `GAS`, and `PLASMA` are operational labels. They are not physical-state claims.

`CODE/nexus_core.py` provides `AxiomOrchestrator`, a ten-stage reference pipeline:

- successful runs traverse `T-01` through `T-10` in order
- `T-04` evaluates the injected metrics provider and may request a morph transition
- `T-09` calculates KL divergence against the declared example baseline and fails if the configured limit is exceeded
- output contains a run ID, current state, event records, and explicit limitations

The orchestrator explicitly identifies itself as a reference implementation. It is single-process and does not establish universal determinism, distributed correctness, or safety.

### Repository validation surfaces

The repository also contains narrow validation tools with different responsibilities:

- `scan_kl_divergence.py` — evaluates named KL contract cases and emits machine-readable metric evidence
- `scan_consistency.py` — checks expected ADR/Methodology document structure and counts
- `code_compliance.py` — scans declared Python targets for a small set of prohibited source patterns
- `scope_guard.py` — checks declared repository-path boundaries
- `validate_research_record.py` — validates research-record structure against the repository's research contract

A successful result from one tool proves only the property that tool actually checks. These surfaces must not be collapsed into a universal “verified” state.

### Research and governance surfaces

- `ADR/**` — durable architectural decisions and claim boundaries
- `METHODOLOGY/**` — procedures and analytical disciplines
- `EVIDENCE_BASELINE.md` — external-source and evidence-semantics boundary
- `RESEARCH/**` — historical Daily/Weekly/Monthly research artifacts and reconciliations
- `GOVERNANCE/**` — design/specification planning records
- `AUTOMATION/**` — repository operational metadata kept separate from semantic authority
- `FRONTEND/**`, README, indexes, and other presentation/navigation files — presentation and discovery surfaces

Research prose does not silently change executable behavior. Executable code does not automatically validate every research claim.

This specification records public repository architecture only. It does not encode private prompts, hidden reasoning, unpublished maintenance strategy, or future automation instructions.

## Contract semantics

### Canonicalization

`canonical_json(value) -> str` sorts mapping keys, preserves Unicode and string case, removes insignificant JSON whitespace, and rejects NaN/Infinity.

It establishes deterministic serialization for JSON-compatible values under this implementation. It does **not** establish semantic equivalence between differently represented inputs.

`stable_digest` returns SHA-256 over those canonical UTF-8 bytes. Changing the canonicalization contract changes digest identity and therefore requires explicit migration/interpretation.

### Probability measures

`normalize_distribution(values, name=...)` requires a non-empty numeric sequence, rejects booleans, negative/non-finite values and zero total mass, and returns normalized floats.

`kl_divergence(p, q)` computes `D_KL(P||Q)` in nats.

- length mismatch fails
- P-zero terms contribute zero
- P-positive/Q-zero support mismatch returns positive infinity
- threshold selection is caller/configuration policy, not a mathematical constant

A recorded `D_KL = 0.0` is evidence only for the exact input vectors and function revision associated with that observation. It is not evidence that the repository has “zero entropy”, zero semantic drift, or universal convergence.

### Metrics and adaptation

`SystemMetrics.entropy_level` is a validated scalar input in `[0,1]` used by the heuristic morphing policy. Its name does not by itself mean Shannon entropy, KL divergence, thermodynamic entropy, or another formally derived quantity.

The current `load_score` combines max CPU/memory utilization and normalized queue depth using fixed implementation weights. Those weights are local heuristics.

`AxiomMorphingEngine.evaluate_morph()` selects candidate state changes from those local thresholds. `shift()` commits the new state only after optional hooks complete successfully.

This supports the bounded claim:

`EXPLICIT_HEURISTIC_STATE_TRANSITION_WITH_SERIALIZED_COMMIT`.

It does not support:

`AUTONOMOUS_OPTIMAL_ADAPTATION` or `PROVEN_SAFE_CONTROL_POLICY`.

### Continuum run

`AxiomOrchestrator.run_continuum(input) -> dict` emits exactly `T-01` through `T-10` for a successful reference run.

The current implementation records timestamps in events, so complete output is not byte-identical across executions even when canonical input digests are stable.

The returned `run_id` identifies the canonicalized combination of input and recorded events for that run. It is not a distributed idempotency key or durable transaction identifier.

## Error and logging contract

Invalid caller data raises `TypeError` or `ValueError` where the contract explicitly validates inputs. A configured KL coherence violation raises `RuntimeError` in the reference orchestrator.

The library does not establish global authentication, authorization, isolation, secret management, network policy, quotas, durable retries, or incident handling.

Callers own those concerns when embedding the reference code elsewhere.

## Evidence and verification boundary

Repository evidence is claim-specific.

Examples:

- a KL scan can support the recorded numerical cases
- a structural consistency scan can support the declared document structure
- a source-pattern scan can support the specific prohibited-pattern set it searches
- a scope guard can support the paths it actually compares
- a historical Daily/Weekly artifact can support what that artifact observed at its recorded time, subject to source/provenance reconciliation

File presence alone is not execution evidence. A historical sentence that a check ran is not equivalent to a retained command/result. A current successful observation does not erase an earlier failure, missing field, blocked run, or temporal provenance conflict.

Compatibility with a Python version is asserted only when the relevant executable behavior was actually run in that environment and the result is retained for the reviewed revision. This specification itself does not certify a version matrix.

## Temporal and research interpretation

Historical research artifacts remain point-in-time records. Later reconciliation can narrow their **current interpretation** without pretending later evidence was available at the original execution time.

Logical date, execution state, source-event time, generation/delivery state, aggregation visibility, current path presence, and substantive evidence completeness are separate dimensions when they differ.

Formal August Monthly closure remains owned by the natural monthly research lifecycle; partial-month reconciliation does not manufacture future evidence.

## Security and deployment ownership

The reference modules perform no arbitrary command execution or external network calls as part of the core pipeline shown above.

Any embedding system must separately own authentication, authorization, isolation, egress policy, durable storage, resource limits, secret handling, monitoring, and incident response appropriate to that system.

External tool/web/model output is untrusted data until a caller-defined validation/provenance boundary establishes otherwise.

## Repository compatibility

Historical entry paths and research artifacts remain separate from this specification's semantic authority. This document does not change runtime code, artifact production, repository scheduling, presentation behavior, or external deployment state.
