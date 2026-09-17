# 2026 Evidence Baseline

- Retrieval/calibration date: 2026-09-17
- Scope: external facts and evidence semantics that bound Axiom runtime, research, security, validation, and evaluation claims
- Policy: a source, command, file, digest, scanner, or historical artifact supports only the property actually evidenced by that surface

## Repository implementation anchor

Current executable anchors:

- `CODE/contracts.py` — canonical JSON, stable SHA-256 digest, distribution normalization, KL divergence
- `CODE/liquid_morphing.py` — validated local metrics, heuristic state selection, serialized state-transition commit
- `CODE/nexus_core.py` — single-process ten-stage reference pipeline and structured run events
- `scan_kl_divergence.py` — named numerical KL cases
- `scan_consistency.py` — current documentation-topology/minimum-section scanner
- `code_compliance.py` — explicit source-pattern checks
- `scope_guard.py` — declared repository-path boundary checks
- `validate_research_record.py` — encoded Daily/Weekly research-record checks

No paper, protocol, SDK, standard, scanner, or generated research artifact upgrades a reference idea into an implemented repository capability without a corresponding implementation surface.

## Local evidence-surface calibration

### KL scanner

`scan_kl_divergence.py` emits numeric evidence for its named `identity`, `renormalized_identity`, and support-mismatch cases.

A successful result is case-specific numerical evidence. `D_KL = 0.0` is not repository-wide zero entropy, zero semantic drift, safety, or convergence.

### Structural scanner

`scan_consistency.py` was repaired on 2026-08-27 after retained August Daily artifacts exposed contract drift.

The pre-repair scanner was hard-coded for 15 ADRs, 14 Methodologies, and an obsolete bilingual heading layout while the canonical indexes had evolved to 16 ADRs and 15 Methodologies.

Historical 2026-08-24/26/27 structural failures therefore remain valid execution-era records but are currently interpreted as:

`SCANNER_CONTRACT_DRIFT_AGAINST_CANONICAL_DOCUMENTATION`.

The repaired scanner now derives document membership from `ADR/INDEX.md` and `METHODOLOGY/INDEX.md` and checks minimum current structural sections.

A repaired-scanner success means only:

`CURRENT_DOCUMENT_TOPOLOGY_AND_MINIMUM_SECTION_CONTRACT_SATISFIED`.

It does not prove architecture semantics, implementation correctness, source truth, safety, or convergence.

Post-repair Daily records through 2026-09-17 continue to retain scanner results under this bounded contract. Those later successes do not alter the historical failures.

### 2026-08-25 scanner evidence conflict

The retained 2026-08-25 Daily artifact reports structural-scanner exit code 0 while also saying missing headers were listed. The surrounding retained scanner contract was obsolete relative to the 16/15 canonical document set.

Without stronger retained command output/revision evidence, current status is:

`HISTORICAL_COMMAND_RESULT_CONFLICT / CLEAN_SCANNER_PASS_NOT_ESTABLISHED`.

### Source-pattern scanner

`code_compliance.py` checks only its explicit regular-expression rules over declared Python targets. It is not a general security or correctness proof.

### Path guard

`scope_guard.py` evaluates only its protected-file/prefix and allow-file rules. It does not determine whether an allowed change is semantically correct.

### Research-record validator

`validate_research_record.py` checks the filename/section/date/window and bounded-result rules encoded in that script. It does not verify external source truth, theorem semantics, command execution, or every research inference.

## Historical Daily execution semantics

Historical Daily artifacts remain point-in-time evidence. Current interpretation may narrow a statement without rewriting the original file.

When fields conflict, prefer the strongest direct execution evidence retained in the same record:

- explicit `NOT_COMPUTED` / `MISSING_DATA` / `NOT_VERIFIED` is not upgraded by a copied success phrase
- an aborted stage is not treated as executed merely because a template mentions its normal success string
- a failed command remains failed even if a later date succeeds
- a current repaired validator does not retroactively change an old validator result

Reference examples:

- 2026-08-24: pipeline failed at A2; A3 actual fields are `NOT_COMPUTED`; template `100 / 100` wording is non-evidentiary
- 2026-08-26 and 2026-08-27: pipeline failed at A2; A3 was not established; copied `100 / 100 ... overridden by failure` wording is not an execution result
- 2026-08-25: A3 retained result can remain run-scoped while the structural-scanner line remains an unresolved command-result conflict
- 2026-09-17: A1 still contains explicit `MISSING_DATA` fields while A2/A3 retain successful bounded execution evidence; those states coexist rather than collapsing into one repository-wide success

## Daily → Weekly → Monthly inheritance

### Daily

A Daily record supports only its observed command/source/input/result surface.

### Weekly

Weekly synthesis may aggregate, preserve, or downgrade Daily evidence but cannot silently create missing evidence.

- `MISSING_DAILY_FILES = NONE` does not imply `MISSING_EVIDENCE = NONE`
- `NOT_COMPUTED`, `MISSING_DATA`, failed commands, rejected observations, and unresolved hypotheses survive aggregation
- a later successful observation does not erase an earlier error/missing field
- a Weekly conclusion cannot be stronger than its traceable support without new evidence
- `NOT_YET_DUE` is a point-in-time lifecycle state, not a permanent absence claim
- a Weekly created before a required date becomes due remains a historical partial/provisional artifact after that Daily later arrives

Current W37 example:

- `RESEARCH/weekly/2026-W37-weekly-manifest.md` records 2026-09-13 as `Not Yet Due` and ends `PARTIAL`
- `RESEARCH/daily/2026-09-13-pipeline-manifest.md` is now present on current main
- therefore the natural week has ended and current Daily path coverage has advanced, but the earlier Weekly record is not silently upgraded into a final W37 result

### Monthly

A partial-month stage audit may reconcile evidence to a cutoff. It must not create future-day evidence or declare formal monthly closure before the natural monthly lifecycle has actual retained evidence.

The retained `RESEARCH/monthly/2026-08-monthly-manifest.md` is explicitly a through-day-30 provisional artifact. August later ended naturally, but that later fact does not transform the through-day-30 artifact into a final month seal.

Current August interpretation:

`NATURAL_PERIOD_ENDED / HISTORICAL_PROVISIONAL_ARTIFACT_PRESERVED / FINAL_PERIOD_SEAL_NOT_ESTABLISHED_BY_THE_THROUGH_DAY_30_ARTIFACT`.

## Period-lifecycle semantics

Keep these dimensions separate:

- `natural_period_state`
- `expected_input_set`
- `input_path_coverage`
- `aggregate_generation_time`
- `aggregate_evidence_status`
- `final_period_seal_state`

`NATURAL_PERIOD_ENDED` does not imply `ARTIFACT_COVERAGE_COMPLETE`.

`ARTIFACT_COVERAGE_COMPLETE` does not imply `FINAL_PERIOD_SEAL_ESTABLISHED`.

A final seal requires a repository-authorized aggregate whose own execution had the required due inputs available under the applicable contract.

## Temporal evidence availability

Keep separate when materially different:

- logical period
- natural-period lifecycle state
- original execution state
- execution/check timestamp
- source event/publication timestamp
- generation evidence
- delivery/commit state
- aggregation-snapshot visibility
- current repository presence
- substantive evidence completeness

Current path presence does not prove earlier snapshot availability or original execution success.

A later correction changes current interpretation, not historical chronology.

## Date and version semantics

- `Created`, `Published`, `Submitted`, `Released`, `Updated`, `Last-Modified`, and retrieval/check time are distinct
- a later-version citation must use the date belonging to that version, not automatically the v1 date
- unresolved exact version/date pairing remains `VERSION_DATE_NOT_VERIFIED`
- when persisted observation time precedes the same record's material source-event time, use `TEMPORAL_PROVENANCE_CONFLICT` until stronger history resolves it

The 2026-08-19 August chronology conflict remains unresolved unless independent history explicitly resolves the timestamps.

## Numerical boundaries

### KL divergence

`CODE/contracts.py` defines `D_KL(P||Q)` for validated probability vectors.

- `D_KL = 0.0` is scoped to the exact recorded input pair
- positive P mass against zero Q mass returns positive infinity
- output range is not input provenance
- named fixture/case identity is stronger input provenance than historical output-like text such as `Actual Input Range: 0.0 to 0.0`

### Morphing metrics

`SystemMetrics.entropy_level` is a caller-supplied normalized scalar for a local heuristic policy. It is not automatically Shannon entropy or KL divergence.

CPU/memory/queue thresholds and morph-state labels are implementation-specific heuristics.

### Ten-stage pipeline

A successful `AxiomOrchestrator` run establishes only the declared single-process event path for that execution. It does not establish distributed coordination, durable transactions, external idempotency, exactly-once effects, or future correctness.

## Source authority

Evidence authority and repository implementation are independent.

1. `PRIMARY_OFFICIAL` — original specification, official documentation, first-party release record or authoritative project record
2. `PRIMARY_RESEARCH` — original scholarly work, bounded to the studied system, assumptions, version and reported result
3. `SECONDARY_TECHNICAL` — survey, vendor explanation, encyclopedia, blog or commentary
4. `UNVERIFIED` — provenance, version, or claim support incomplete

Source reachability does not prove a proposition. Source authority does not prove local implementation. Repeating one source through Daily and Weekly records does not create independent corroboration.

## External protocol and evaluation references

These remain `REFERENCE_ONLY` unless a local implementation surface is added.

### MCP 2026-07-28

The official release defines a stateless protocol core for that revision while allowing application state above the protocol. Axiom does not implement MCP.

### A2A v1.0

A2A supplies external agent/task/message/artifact/context and transport concepts. Axiom does not implement an A2A endpoint.

### Evaluation/observability references

Trace, trajectory/transcript, outcome, grader decision, harness assumptions, and authoritative external effect remain separate evidence surfaces.

## Current local consequence

Axiom evidence claims should name, when material:

`SURFACE + INPUT/IDENTITY + REVISION/TIME + RESULT + LIMITATION`.

Periodic evidence claims should additionally keep separate:

`NATURAL_PERIOD_STATE + INPUT_COVERAGE + AGGREGATE_GENERATION_STATE + FINAL_SEAL_STATE`.

Current main contains Daily evidence through 2026-09-17. The W37 Weekly artifact is retained as its historical `PARTIAL` execution state even though the 2026-09-13 Daily is now present. The August through-day-30 Monthly artifact remains provisional rather than being retroactively promoted.

Security, semantic truth, agent alignment, production reliability, durable external effects, and universal convergence require separate evidence.
