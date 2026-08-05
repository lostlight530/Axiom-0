# 2026 Evidence Baseline

- Retrieval date: 2026-08-05
- Scope: external facts that bound Axiom runtime, automation, security, and evaluation claims
- Policy: an official source informs a local decision; it does not certify this repository

## Runtime and automation

- [Python 3.14 documentation](https://docs.python.org/3.14/whatsnew/) is the current stable documentation line. CI also verifies 3.12 compatibility; recheck lifecycle status when changing the matrix.
- [GitHub secure use reference](https://docs.github.com/en/actions/reference/security/secure-use) identifies a full commit SHA as the immutable action reference and recommends minimum `GITHUB_TOKEN` permissions. Axiom pins official actions and isolates Pages write authority to deployment.
- [SLSA v1.2](https://slsa.dev/spec/v1.2/) informs provenance vocabulary. Axiom does not claim an SLSA level because it has not produced the required attestation chain.

## Agent and AI claim boundaries

- [NIST AI 600-1](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence), updated 2026-04-08, is a voluntary generative-AI risk profile. It motivates lifecycle evidence and risk ownership, not a proof of zero entropy or safety.
- [OWASP Top 10 for Agentic Applications 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/) covers goal hijacking, tool misuse, privilege abuse, supply chain, unexpected code execution, and memory/context poisoning. The reference library does not implement an agent authorization or sandbox boundary; callers own those controls.
- [OpenAI’s 2026 third-party evaluation playbook](https://openai.com/index/trustworthy-third-party-evaluations-foundations/) explains that harness, tool access, context handling, retries, scoring, budgets, and validity checks affect observed capability. A score belongs to its tested system and budget.
- [Anthropic, Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) describes evaluation challenges for multi-turn, tool-using, state-changing systems. [Trustworthy agents in practice](https://www.anthropic.com/research/trustworthy-agents) says layered safeguards are not guarantees and emphasizes tools, data, permissions, and environment choices.
- [Anthropic’s 2026 constitution announcement](https://www.anthropic.com/news/claude-new-constitution) notes that model outputs may not always adhere to intended ideals. Prose principles therefore cannot be executable guarantees.
- [Google DeepMind AlphaEvolve](https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/) combines language-model proposals with automated evaluators that run and score programs in executable domains. It supports evaluator-backed search as a design reference, not deterministic cognition or universal convergence.

## Local consequences

Axiom reports explicit inputs, thresholds, harness/entry path, revision, results, and limitations. Canonical serialization, KL divergence, repeatable fixtures, and passing tests establish only their declared contracts. Security, semantic truth, performance, agent alignment, and production reliability require separate evidence.

Review this baseline after a runtime/action major change, material external guidance update, new model/tool integration, or expansion of a repository claim. Source updates never silently change executable policy.