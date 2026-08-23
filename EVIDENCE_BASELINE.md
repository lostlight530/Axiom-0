# 2026 Evidence Baseline

- Retrieval date: 2026-08-24
- Scope: external facts and evidence semantics that bound Axiom runtime, research, security, and evaluation claims
- Policy: an official or primary source informs a bounded local decision; it never certifies this repository by itself

## Jules automation boundary

This baseline belongs to the independent repository-governance and post-hoc review layer outside the Jules scheduled automation stream.

It is **not** a Jules task prompt, Jules memory entry, or repository-level Jules instruction file. It does not modify, override, or guarantee the behavior of existing Jules Daily/Weekly/Monthly tasks. Jules-generated artifacts may be audited against this baseline after generation by a human or independent maintainer, but compliance must not be assumed unless the relevant Jules instruction surface explicitly incorporates the same rule.

This maintenance intentionally does not create or modify `AGENTS.md`, Jules task prompts, or Jules repository memory. No claim is made that Jules reads this file as automation policy.

## Runtime and automation

- [Python 3.14 documentation](https://docs.python.org/3.14/whatsnew/) is the current stable documentation line used by this baseline. CI also verifies 3.12 compatibility; recheck lifecycle status when changing the matrix.
- [GitHub secure use reference](https://docs.github.com/en/actions/reference/security/secure-use) identifies a full commit SHA as the immutable action reference and recommends minimum `GITHUB_TOKEN` permissions. Axiom pins official actions and isolates Pages write authority to deployment.
- [SLSA v1.2](https://slsa.dev/spec/v1.2/) informs provenance vocabulary. Axiom does not claim an SLSA level because it has not produced the required attestation chain.

## Agent and AI claim boundaries

- [NIST AI 600-1](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence), updated 2026-04-08, is a voluntary generative-AI risk profile. It motivates lifecycle evidence and risk ownership, not a proof of zero entropy or safety.
- [OWASP Top 10 for Agentic Applications 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/) covers goal hijacking, tool misuse, privilege abuse, supply chain, unexpected code execution, and memory/context poisoning. The reference library does not implement an agent authorization or sandbox boundary; callers own those controls.
- [OpenAI’s 2026 third-party evaluation playbook](https://openai.com/index/trustworthy-third-party-evaluations-foundations/) explains that harness, tool access, context handling, retries, scoring, budgets, and validity checks affect observed capability. A score belongs to its tested system and budget.
- [Anthropic, Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) describes evaluation challenges for multi-turn, tool-using, state-changing systems. [Trustworthy agents in practice](https://www.anthropic.com/research/trustworthy-agents) says layered safeguards are not guarantees and emphasizes tools, data, permissions, and environment choices.
- [Anthropic’s 2026 constitution announcement](https://www.anthropic.com/news/claude-new-constitution) notes that model outputs may not always adhere to intended ideals. Prose principles therefore cannot be executable guarantees.
- [Google DeepMind AlphaEvolve](https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/) combines language-model proposals with automated evaluators that run and score programs in executable domains. It supports evaluator-backed search as a design reference, not deterministic cognition or universal convergence.

## 2026 protocol, state, and observability calibration

The following primary sources sharpen evidence vocabulary used by the August 1–23 review. They are `REFERENCE_ONLY`: none is an Axiom dependency, implementation claim, or production requirement.

### Model Context Protocol 2026-07-28

- Primary release: https://blog.modelcontextprotocol.io/posts/2026-07-28/
- The named protocol version adopts a stateless protocol core and removes the prior required `initialize` / `initialized` exchange and `Mcp-Session-Id` mechanism.
- The same release explicitly distinguishes protocol statelessness from application statelessness: an application may still maintain its own state above the protocol core.
- Optional discovery, MRTR, routable headers, cacheable list semantics, extensions, authorization hardening, and formal deprecation are version-specific protocol facts.

Axiom use: external reference for keeping protocol/session mechanics separate from application/runtime state and for tying claims to exact protocol versions.

### A2A Protocol v1.0

- Specification: https://a2a-protocol.org/latest/specification/
- Stable release note: https://a2a-protocol.org/latest/announcing-1.0/
- A2A v1.0 is the stable production-ready protocol line and distinguishes Agent Cards, stateful Tasks, Messages, Artifacts, Context, streaming, push updates, negotiation, and extensions.

Axiom use: external example of typed lifecycle and identity boundaries. It does not imply that Axiom implements an A2A endpoint or agent runtime.

### OpenAI Agents SDK tracing

- Tracing guide: https://openai.github.io/openai-agents-python/tracing/
- Tracing API reference: https://openai.github.io/openai-agents-python/ref/tracing/
- A workflow trace contains related operation spans such as agent, generation, tool/function, handoff, guardrail, task/turn, and custom spans.

Axiom use: trace/span data is one execution-evidence surface. A trace does not independently prove that the resulting outcome is correct, complete, safe, or externally committed.

### Anthropic agent-evaluation decomposition

- Primary guidance: https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents
- The guidance separates task, trial, grader, transcript/trajectory, outcome, evaluation harness, and agent harness.

Axiom use: trajectory evidence, outcome evidence, grader judgments, and harness assumptions must remain distinguishable when a claim depends on them.

### Google ADK conversational context

- Primary documentation: https://adk.dev/sessions/
- ADK distinguishes a current Session, session State, and searchable Memory that may span sessions, with separate lifecycle services.

Axiom use: external state-scope vocabulary only. It does not establish an ADK integration or durable-memory implementation in this repository.

Together these sources reinforce a general rule already present in the repository: protocol state, application state, task/context identity, session state, cross-session memory, trace/trajectory, final outcome, grader result, and repository artifact state are not interchangeable evidence surfaces.

## Research source authority

Evidence authority and ingestion status are independent.

1. `PRIMARY_OFFICIAL`: original specification, official documentation, first-party release record, original paper, or authoritative project record.
2. `PRIMARY_RESEARCH`: original scholarly work, including a preprint, with claim scope limited to the studied system, assumptions, version, and reported results.
3. `SECONDARY_TECHNICAL`: survey, encyclopedia, vendor explanation, technical blog, or commentary. Useful for discovery and context, but not evidence-equivalent to an available primary source.
4. `UNVERIFIED`: provenance, version, or claim support is incomplete.

A source being reachable does not establish that its proposition is true. A source being authoritative does not establish that Axiom implements the described mechanism.

## Date and version semantics

Bibliographic fields are not interchangeable.

- `Created`, `Published`, `Submitted`, `Released`, `Updated`, `Last-Modified`, and retrieval/check time are distinct fields.
- A page modification timestamp must not be presented as the original publication or creation date.
- If a source identifies an explicit version, the recorded date must belong to that version rather than being inherited from v1 or from the current page metadata.
- If exact version/date pairing cannot be verified, record `VERSION_DATE_NOT_VERIFIED` rather than guessing.

For Python PEPs, use the PEP metadata fields directly. For example, PEP 8 records `Created: 05-Jul-2001`; its line-length guidance also explicitly allows a team-agreed code limit up to 99 characters while the standard library remains at 79. See https://peps.python.org/pep-0008/.

## Daily-to-Weekly evidence inheritance

A weekly report may aggregate, compare, or downgrade Daily evidence. It must not silently create a Daily observation that was never persisted.

A weekly-only external fact is allowed only when it is explicitly recorded as an independent weekly observation with its own source, check time, and evidence status.

Required distinctions:

- `MISSING_DAILY_FILES = NONE` does not imply `MISSING_EVIDENCE = NONE`.
- `NOT_COMPUTED`, `MISSING_DATA`, rejected observations, unresolved hypotheses, and untested conditions survive aggregation.
- A later successful run does not erase an earlier error or missing field in the same audit window.
- A Weekly conclusion cannot be stronger than its strongest traceable supporting evidence without an explicit new evidence record.

## Temporal evidence availability and reconciliation

August 2026 also established a temporal distinction that is orthogonal to source quality and path coverage.

When they materially differ, keep these facts separate:

- logical date or target period
- original execution state
- evidence that an artifact was generated
- delivery / commit / merge state
- visibility to the aggregation snapshot that actually ran
- current repository presence
- substantive evidence completeness

`CURRENT_REPOSITORY_PRESENCE = PRESENT` does not prove that the artifact was available to an earlier Weekly/Monthly snapshot or that its original task executed successfully.

`MISSING_AT_SNAPSHOT` does not prove `NEVER_GENERATED` unless generation history independently supports that conclusion.

Use [ADR-016](ADR/ADR-016-TEMPORAL-EVIDENCE-AVAILABILITY.md) for the decision boundary and [METH-015](METHODOLOGY/METH-015-HISTORICAL-EVIDENCE-RECONCILIATION.md) for the reconciliation procedure. A partial August stage audit remains provisional until the natural-month A6 lifecycle closes.

## Repeated evidence and research novelty

Repeated authoritative anchors are valid, but they are not automatically new hard signals.

Use one of these interpretations when a source recurs:

- `REVALIDATED_ANCHOR`: the same proposition is deliberately rechecked.
- `NEW_CLAIM_FROM_EXISTING_SOURCE`: a different proposition is extracted and supported.
- `REPEATED_CONTROL_SIGNAL`: the repetition is intentional for longitudinal comparison.
- `DUPLICATE_NO_NEW_EVIDENCE`: no material new evidence was added.

Top-signal summaries should prefer distinct propositions and disclose deliberate repetition rather than inflating novelty.

## Numerical and test-result boundaries

A numeric result belongs to the executed input and harness.

- `D_KL = 0.0` means zero divergence for the explicitly recorded test case or input scope; it is not repository-wide mathematical zero entropy.
- `100 / 100 specified executions passed` means all specified executions in that run passed. It does not establish exhaustive state-space coverage, absence of uncovered conditions, universal determinism, or future correctness.
- An exit code alone does not justify a numeric result unless the numeric evidence is emitted or independently computed and recorded.
- Missing timing, coverage, exception, or environmental evidence stays missing; it is not reconstructed after the fact.

## Local consequences

Axiom reports explicit inputs, thresholds, harness/entry path, revision, results, and limitations. Canonical serialization, KL divergence, repeatable fixtures, and passing tests establish only their declared contracts. Security, semantic truth, performance, agent alignment, production reliability, and universal convergence require separate evidence.

Research corrections preserve the original observation when it is useful historical evidence. A later reconciliation or erratum explicitly supersedes the interpretation instead of silently rewriting what the earlier run recorded.

Review this baseline after a runtime/action major change, material external guidance update, new model/tool integration, expansion of a repository claim, or discovery of a recurring evidence-class failure. Source updates never silently change executable policy.