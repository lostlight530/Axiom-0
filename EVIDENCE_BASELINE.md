# 2026 Evidence Baseline

- Retrieval date: 2026-08-17
- Scope: external facts and evidence semantics that bound Axiom runtime, research, security, and evaluation claims
- Policy: an official or primary source informs a bounded local decision; it never certifies this repository by itself

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