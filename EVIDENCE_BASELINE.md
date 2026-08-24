# 2026 Evidence Baseline

- Retrieval date: 2026-08-24
- Scope: external facts and evidence semantics that bound Axiom runtime, research, security, and evaluation claims
- Policy: an official or primary source informs a bounded local decision; it never certifies this repository by itself

## Repository implementation anchor

Current executable anchors:

- `CODE/contracts.py` — canonical JSON, stable SHA-256 digest, distribution normalization, KL divergence
- `CODE/liquid_morphing.py` — validated local metrics, heuristic state selection, serialized state-transition commit
- `CODE/nexus_core.py` — single-process ten-stage reference pipeline and structured run events
- `scan_kl_divergence.py` — named numerical KL cases
- `scan_consistency.py` — legacy structural scan with a current 16/15 architecture mismatch
- `code_compliance.py` — explicit source-pattern checks
- `scope_guard.py` — declared repository-path boundary checks
- `validate_research_record.py` — encoded Daily/Weekly research-record checks

No external paper, protocol, SDK, standard, or engineering article upgrades a reference idea into an implemented repository capability without a corresponding implementation surface.

## Local evidence-surface calibration

### KL scanner

`scan_kl_divergence.py` emits numeric evidence for the implemented `identity` and `renormalized_identity` cases plus support mismatch.

A successful result supports those cases only.

### Structural scanner

`scan_consistency.py` is currently stale relative to the architecture documented in this branch.

Its code expects:

- 15 ADRs
- 14 Methodologies
- the older bilingual heading contract

The current architecture contains 16 ADRs and 15 Methodologies.

Current state:

`LEGACY_STRUCTURAL_SCANNER / CURRENT_CONTRACT_MISMATCH`.

Do not treat the existence of that scanner as evidence that the current ADR/Methodology set has been structurally validated.

### Source-pattern scanner

`code_compliance.py` checks only its explicit regular-expression rules over the declared Python targets. It is not a general security or correctness proof.

### Path guard

`scope_guard.py` evaluates only its protected-file/prefix and allow-file rules. It does not determine whether an allowed documentation change is semantically correct.

### Research-record validator

`validate_research_record.py` checks the filename/section/date/window and bounded-result rules encoded in that script. It does not verify external source truth, theorem semantics, or every research inference.

## Runtime-version evidence

Python documentation can establish language/runtime facts, but repository compatibility is revision-specific.

A Python version may be described as a verified environment only when relevant executable behavior was actually observed in that environment for the reviewed revision and the result is retained.

A version appearing in a historical artifact is evidence about that artifact's recorded environment, not automatic compatibility evidence for every revision.

## Agent and AI claim boundaries

- NIST AI 600-1 is a voluntary generative-AI risk profile; it motivates lifecycle evidence, not a proof of Axiom safety or zero entropy
- OWASP Agentic Applications material defines external risk classes; the Axiom reference core does not implement a complete authorization or sandbox boundary
- OpenAI third-party evaluation guidance reinforces that harness, tools, retries, scoring, budgets and validity checks affect observed capability
- Anthropic agent-evaluation guidance separates task, trial, grader, trajectory/transcript, outcome and harness
- external constitutions or layered safeguards are engineering references, not executable Axiom guarantees
- AlphaEvolve is a reference example of evaluator-backed search, not evidence of deterministic cognition or universal convergence in Axiom

## Protocol/state references

The following remain `REFERENCE_ONLY`.

### MCP 2026-07-28

The named release defines a stateless protocol core and distinguishes that protocol fact from application state maintained above it.

Axiom use: vocabulary for keeping protocol/session mechanics separate from application/runtime state.

Axiom does not implement MCP.

### A2A v1.0

A2A distinguishes Agent Cards, Tasks, Messages, Artifacts, Context, streaming/push behavior, negotiation and extensions.

Axiom use: external lifecycle/state reference only.

Axiom does not implement an A2A endpoint.

### OpenAI Agents SDK tracing

Trace/span data is one execution-evidence surface. A trace does not independently prove outcome correctness or authoritative external effect.

### Anthropic evaluation decomposition

Trajectory, outcome, grader judgment and harness assumptions remain distinct evidence surfaces.

### Google ADK context

Session, session State and cross-session Memory are distinct external state scopes. This does not establish an ADK integration or durable-memory implementation in Axiom.

## Research source authority

Evidence authority and repository implementation are independent.

1. `PRIMARY_OFFICIAL` — original specification, official documentation, first-party release record or authoritative project record
2. `PRIMARY_RESEARCH` — original scholarly work, bounded to the studied system, assumptions, version and reported result
3. `SECONDARY_TECHNICAL` — survey, vendor explanation, encyclopedia, blog or commentary
4. `UNVERIFIED` — provenance, version or claim support incomplete

Source reachability does not prove a proposition. Source authority does not prove local implementation.

## Date and version semantics

- `Created`, `Published`, `Submitted`, `Released`, `Updated`, `Last-Modified`, and retrieval/check time are distinct
- a later-version citation must use the date belonging to that version, not automatically the v1 date
- unresolved exact version/date pairing remains `VERSION_DATE_NOT_VERIFIED`
- when persisted observation time precedes the same record's material source-event time, use `TEMPORAL_PROVENANCE_CONFLICT` until stronger history resolves the chronology

## Daily-to-Weekly inheritance

Weekly synthesis may aggregate or downgrade Daily evidence but cannot silently create missing Daily observations or stronger evidence.

- `MISSING_DAILY_FILES = NONE` does not imply `MISSING_EVIDENCE = NONE`
- `NOT_COMPUTED`, `MISSING_DATA`, rejected observations and unresolved hypotheses survive aggregation
- a later successful observation does not erase an earlier error/missing field
- a Weekly conclusion cannot be stronger than its traceable support without a new evidence record

## Temporal evidence availability

Keep separate when materially different:

- logical period
- original execution state
- execution/check timestamp
- source event/publication timestamp
- generation evidence
- delivery/commit state
- aggregation-snapshot visibility
- current repository presence
- substantive evidence completeness

Current path presence does not prove earlier snapshot availability or original execution success.

## Numerical boundaries

### KL divergence

`CODE/contracts.py` defines `D_KL(P||Q)` for validated probability vectors.

- `D_KL = 0.0` is scoped to the exact recorded input pair
- it does not mean repository-wide zero entropy or zero semantic drift
- positive P mass against zero Q mass returns positive infinity
- output range is not input provenance

The named KL cases are stronger input provenance than a generic historical `Actual Input Range: 0.0 to 0.0` field.

### Morphing metrics

`SystemMetrics.entropy_level` is an input scalar for a local heuristic policy; it is not automatically Shannon entropy or KL divergence.

CPU/memory/queue thresholds and morph state labels are implementation-specific heuristics.

### Ten-stage pipeline

A successful `AxiomOrchestrator` run establishes only the declared single-process event path for that execution. It does not establish distributed coordination, durable transactions, external idempotency or future correctness.

## Current local consequence

Axiom evidence claims name the exact input, implementation surface, revision/time boundary, result and limitation when those dimensions matter.

Canonical serialization, KL divergence, morph-transition history, narrow scanners and historical Daily/Weekly records establish only their declared contracts.

Security, semantic truth, agent alignment, production reliability, durable external effects and universal convergence require separate evidence.