# 2026 Evidence Baseline

- Retrieval date: 2026-08-24
- Scope: external facts and evidence semantics that bound Axiom runtime, research, security, and evaluation claims
- Policy: an official or primary source informs a bounded local decision; it never certifies this repository by itself

This baseline describes public repository evidence semantics only. It does not encode private prompts, hidden reasoning, unpublished maintenance strategy, or future artifact-production instructions.

## Repository implementation anchor

External references are interpreted through the implementation that actually exists.

Current executable anchors:

- `CODE/contracts.py` — canonical JSON, stable SHA-256 digest, distribution normalization, KL divergence
- `CODE/liquid_morphing.py` — validated local metrics, heuristic thresholds, serialized state-transition commit
- `CODE/nexus_core.py` — single-process ten-stage reference pipeline and structured run events
- `scan_kl_divergence.py` — named numerical contract cases
- `scan_consistency.py` — ADR/Methodology structure checks
- `code_compliance.py` — declared source-pattern checks
- `scope_guard.py` — declared repository-path boundary checks
- `validate_research_record.py` — research-record structure validation

No external paper, protocol, SDK, standard, or engineering article upgrades a `REFERENCE_ONLY` idea into an implemented repository capability without a corresponding implementation surface.

## Runtime-version evidence

Python documentation can establish language/runtime facts, but repository compatibility is revision-specific.

A Python version may be described as a verified environment only when the relevant executable behavior was actually run under that version and the result was retained for the reviewed revision.

A version appearing in a historical artifact is evidence about that artifact's recorded environment, not automatic compatibility evidence for every repository revision.

## Agent and AI claim boundaries

- [NIST AI 600-1](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence), updated 2026-04-08, is a voluntary generative-AI risk profile. It motivates lifecycle evidence and risk ownership, not a proof of zero entropy or safety.
- [OWASP Top 10 for Agentic Applications 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/) covers goal hijacking, tool misuse, privilege abuse, supply chain, unexpected code execution, and memory/context poisoning. The Axiom reference core does not implement a complete agent authorization or sandbox boundary.
- [OpenAI’s 2026 third-party evaluation playbook](https://openai.com/index/trustworthy-third-party-evaluations-foundations/) explains that harness, tool access, context handling, retries, scoring, budgets, and validity checks affect observed capability. A score belongs to its tested system and budget.
- [Anthropic, Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) separates task, trial, grader, transcript/trajectory, outcome, evaluation harness, and agent harness.
- [Anthropic, Trustworthy agents in practice](https://www.anthropic.com/research/trustworthy-agents) describes layered safeguards as engineering controls rather than guarantees.
- [Anthropic’s 2026 constitution announcement](https://www.anthropic.com/news/claude-new-constitution) notes that model outputs may not always adhere to intended ideals. Prose principles therefore cannot be executable guarantees.
- [Google DeepMind AlphaEvolve](https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/) combines language-model proposals with automated evaluators in executable domains. It is a design reference for evaluator-backed search, not evidence of deterministic cognition or universal convergence.

## 2026 protocol, state, and observability calibration

The following sources are `REFERENCE_ONLY`: none is an Axiom dependency, implementation claim, or production requirement.

### Model Context Protocol 2026-07-28

- Primary release: https://blog.modelcontextprotocol.io/posts/2026-07-28/
- The named protocol version adopts a stateless protocol core and removes the previous required protocol-level initialization/session mechanism.
- The release distinguishes protocol statelessness from application statelessness; an application may still maintain state above the protocol core.

Axiom use: keep protocol/session mechanics separate from application/runtime state and tie protocol claims to exact versions.

### A2A Protocol v1.0

- Specification: https://a2a-protocol.org/latest/specification/
- Stable release note: https://a2a-protocol.org/latest/announcing-1.0/
- A2A v1.0 distinguishes Agent Cards, Tasks, Messages, Artifacts, Context, streaming/push behavior, negotiation, and extensions.

Axiom use: external example of explicit lifecycle and identity boundaries. It does not imply an A2A endpoint or agent runtime exists here.

### OpenAI Agents SDK tracing

- Tracing guide: https://openai.github.io/openai-agents-python/tracing/
- Tracing API reference: https://openai.github.io/openai-agents-python/ref/tracing/
- A workflow trace contains related operation spans such as agent, generation, tool/function, handoff, guardrail, task/turn, and custom spans.

Axiom use: trace/span data is one execution-evidence surface. A trace does not independently prove outcome correctness, completeness, safety, or authoritative external effect.

### Anthropic agent-evaluation decomposition

- Primary guidance: https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents
- Task, trial, grader, trajectory/transcript, outcome, evaluation harness, and agent harness are distinct objects.

Axiom use: trajectory evidence, outcome evidence, grader judgments, and harness assumptions must remain distinguishable.

### Google ADK conversational context

- Primary documentation: https://adk.dev/sessions/
- ADK distinguishes current Session, session State, and searchable Memory that may span sessions.

Axiom use: external state-scope vocabulary only. It does not establish an ADK integration or durable-memory implementation in this repository.

Together these references reinforce a repository rule: protocol state, application state, task/context identity, session state, cross-session memory, trace/trajectory, final outcome, grader result, and repository artifact state are not interchangeable evidence surfaces.

## Research source authority

Evidence authority and ingestion status are independent.

1. `PRIMARY_OFFICIAL`: original specification, official documentation, first-party release record, original paper, or authoritative project record
2. `PRIMARY_RESEARCH`: original scholarly work, with claim scope limited to the studied system, assumptions, version, and reported results
3. `SECONDARY_TECHNICAL`: survey, encyclopedia, vendor explanation, technical blog, or commentary; useful for discovery/context but not evidence-equivalent to an available primary source
4. `UNVERIFIED`: provenance, version, or claim support is incomplete

A source being reachable does not establish that its proposition is true. A source being authoritative does not establish that Axiom implements the described mechanism.

## Date and version semantics

Bibliographic fields are not interchangeable.

- `Created`, `Published`, `Submitted`, `Released`, `Updated`, `Last-Modified`, and retrieval/check time are distinct fields
- a page modification timestamp must not be presented as the original publication or creation date
- if a source identifies an explicit version, the recorded date must belong to that version rather than being inherited from v1
- if exact version/date pairing cannot be verified, record `VERSION_DATE_NOT_VERIFIED`
- if a persisted observation time precedes the same record's material source-event/publication time, classify it as `TEMPORAL_PROVENANCE_CONFLICT` until stronger history resolves the timestamps

## Daily-to-Weekly evidence inheritance

A Weekly report may aggregate, compare, or downgrade Daily evidence. It must not silently create a Daily observation that was never persisted.

A Weekly-only external fact is allowed only when it is explicitly recorded as an independent Weekly observation with its own source, check time, and evidence state.

Required distinctions:

- `MISSING_DAILY_FILES = NONE` does not imply `MISSING_EVIDENCE = NONE`
- `NOT_COMPUTED`, `MISSING_DATA`, rejected observations, unresolved hypotheses, and unobserved conditions survive aggregation
- a later successful observation does not erase an earlier error or missing field in the same audit window
- a Weekly conclusion cannot be stronger than its strongest traceable supporting evidence without an explicit new evidence record

## Temporal evidence availability and reconciliation

When they materially differ, keep these facts separate:

- logical date or target period
- original execution state
- execution/check timestamp
- source event/publication timestamp
- evidence that an artifact was generated
- delivery / commit / merge state
- visibility to the aggregation snapshot that actually ran
- current repository presence
- substantive evidence completeness

`CURRENT_REPOSITORY_PRESENCE = PRESENT` does not prove that an artifact was available to an earlier aggregation snapshot or that its original task executed successfully.

`MISSING_AT_SNAPSHOT` does not prove `NEVER_GENERATED` unless generation history independently supports that conclusion.

A source event dated after the persisted observation time cannot be treated as temporally valid same-time evidence without stronger timestamp history.

Use [ADR-016](ADR/ADR-016-TEMPORAL-EVIDENCE-AVAILABILITY.md) for the decision boundary and [METH-015](METHODOLOGY/METH-015-HISTORICAL-EVIDENCE-RECONCILIATION.md) for the reconciliation procedure.

Formal August Monthly closure remains open until its natural lifecycle produces its own evidence.

## Repeated evidence and research novelty

Repeated authoritative anchors are valid, but they are not automatically new hard signals.

Use one of these interpretations when a source recurs:

- `REVALIDATED_ANCHOR`: the same proposition is deliberately rechecked
- `NEW_CLAIM_FROM_EXISTING_SOURCE`: a different proposition is extracted and supported
- `REPEATED_CONTROL_SIGNAL`: repetition is intentional for longitudinal comparison
- `DUPLICATE_NO_NEW_EVIDENCE`: no material new evidence was added

Top-signal summaries should prefer distinct propositions and disclose deliberate repetition rather than inflating novelty.

## Numerical and measurement boundaries

A numeric result belongs to the exact input and implementation/harness that produced it.

### KL divergence

`CODE/contracts.py` defines `D_KL(P||Q)` for normalized finite non-negative vectors.

- `D_KL = 0.0` means zero divergence for the explicitly recorded input pair under that function revision
- it does not mean repository-wide zero entropy, zero semantic drift, or universal convergence
- positive P mass against zero Q mass returns positive infinity
- an exit status alone does not justify a numeric KL value unless the numeric evidence is emitted or independently computed and retained
- output range is not input provenance

`scan_kl_divergence.py` currently names `identity` and `renormalized_identity` cases and separately checks support mismatch. Those case identities are stronger provenance than a generic `Actual Input Range: 0.0 to 0.0` field.

### Morphing metrics

`SystemMetrics.entropy_level` in `CODE/liquid_morphing.py` is an input scalar for a local heuristic policy. It is not automatically Shannon entropy or KL divergence.

CPU/memory/queue thresholds and morph states are implementation-specific control labels, not scientific constants.

### Ten-stage pipeline

A successful `AxiomOrchestrator` run demonstrates the declared single-process event path for that execution. It does not establish exhaustive state-space coverage, external idempotency, durable transaction semantics, distributed coordination, or future correctness.

## Local consequences

Axiom reports and research records should name explicit inputs, thresholds, implementation surface, revision/time boundary, result, and limitations when those dimensions matter to the claim.

Canonical serialization, KL divergence, state-transition history, structural scans, research validation, and historical Daily/Weekly evidence establish only their declared contracts.

Security, semantic truth, performance, agent alignment, production reliability, persistent external effects, and universal convergence require separate evidence.

Research corrections preserve original observations when useful as history. A later reconciliation or erratum supersedes only the current interpretation of the conflicting claim; it does not silently rewrite the earlier run.
