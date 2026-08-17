# Axiom-0 Engineering Specification

- Version: 2026.08
- Status: implemented reference contract
- Authority: this file defines repository behavior; ADRs explain durable decisions; tests provide revision-specific evidence

## Purpose and boundary

Axiom is a dependency-free Python reference for a ten-stage, event-recorded transformation pipeline and observable state adaptation. It demonstrates canonical serialization, digests, distribution validation, KL divergence, explicit thresholds, transactional transitions, and structured run output.

It is not a foundation model, autonomous safety system, authorization layer, sandbox, distributed scheduler, database, or proof of deterministic cognition. “Axiom”, “continuum”, “entropy”, and phase names are project vocabulary unless a unit and measurement contract are stated.

## Knowledge-layer topology

Axiom separates durable decisions, procedures, contracts, implementation, evidence, research, automation, and presentation so generated or contextual material cannot silently govern runtime behavior.

- [`ADR/INDEX.md`](ADR/INDEX.md): durable architectural decisions and their authority role
- [`METHODOLOGY/INDEX.md`](METHODOLOGY/INDEX.md): procedures and analytical disciplines
- `SPECIFICATION.md`: behavioral contract and public boundary
- `CODE/**` and tests: executable implementation and revision-specific evidence
- [`EVIDENCE_BASELINE.md`](EVIDENCE_BASELINE.md): external-source and completion-claim boundaries
- `RESEARCH/**`: separately owned historical/research artifacts
- `AUTOMATION/**` and `.github/**`: scheduling/check orchestration, not semantic authority
- `FRONTEND/**`, README, and other presentation surfaces: presentation, not executable policy

ADR-014 defines this repository knowledge stratification. Cross-layer changes should link the relevant decision, methodology, specification surface, and executable evidence where applicable. Numerical ADR/METH identifiers do not by themselves create a supersession or dependency chain.

## Runtime support

Python 3.12 and 3.14 are verified in CI. Runtime code uses only the standard library. JSON inputs must contain only JSON-compatible values; non-finite numbers fail serialization.

## Public contracts

### Canonicalization

`canonical_json(value) -> str` sorts mapping keys, preserves Unicode and string case, removes insignificant JSON whitespace, and rejects NaN/Infinity. It does not claim semantic equivalence. `stable_digest` returns SHA-256 over those UTF-8 bytes; changing the canonicalization contract requires a versioned migration.

### Probability measures

`normalize_distribution(values, name=...)` requires a non-empty numeric sequence, rejects booleans, negative/non-finite values and zero total mass, and returns normalized floats. `kl_divergence(p, q)` computes D_KL(P||Q) in nats. Length mismatch fails. A P-positive/Q-zero event returns positive infinity. Threshold selection is caller policy, not a mathematical constant.

### Metrics and adaptation

`SystemMetrics` accepts normalized CPU, memory, and entropy values in `[0,1]`, non-negative integer task/queue counts, and a non-empty timestamp. `AxiomMorphingEngine.evaluate_morph` is a documented heuristic. `shift` serializes concurrent transitions with an async lock, calls optional preparation and validation hooks, commits state only on success, records event type and time, and re-raises failure.

### Continuum run

`AxiomOrchestrator.run_continuum(input) -> dict` emits exactly T-01 through T-10 in order for a successful reference run. T-04 evaluates injected metrics. T-09 calculates divergence against the declared example baseline and fails above the configured limit. Output includes a run ID, state, events, and limitations. Timestamps make full output non-byte-identical across runs; canonical input digests remain reproducible.

## Error and logging contract

Invalid caller data raises `TypeError` or `ValueError`; failed configured invariants raise `RuntimeError`. Libraries do not configure global logging. Error records expose exception class, never raw exception messages or input payloads by default. Callers own redaction and retention.

## Security ownership

The caller must provide authentication, authorization, isolation, egress policy, quotas, durable idempotency, secret management, and incident response. Tool/web/model output is untrusted data. No module executes arbitrary commands or network calls.

## Repository compatibility

Historical Jules entry paths remain executable and return nonzero on failure. README, `FRONTEND/**`, `docs/**`, `RESEARCH/**`, `INDEX.md`, `PATCH_INDEX.md`, and `LICENSE` are separately owned and protected from this maintenance stream.

## Acceptance

A revision is eligible for review when Python 3.12 and 3.14 compile the code, all `tests/` pass, historical entry checks pass, workflow actions are immutable SHA-pinned with least privilege, and a pull-request diff contains no protected path. Passing is evidence for that revision and environment only.