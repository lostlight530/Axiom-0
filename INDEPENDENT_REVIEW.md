# Independent Review Contract

Status: public post-hoc review contract

## Purpose

This document defines a reviewer-side state machine for independently auditing committed Axiom artifacts after they are produced.

It is deliberately separate from repository runtime behavior, Jules task execution, GPT/cloud maintenance, GitHub Actions, CI, deployment, scheduled automation, and other external maintenance sessions. It is not a task prompt, repository-memory entry, `AGENTS.md` instruction, executable policy, workflow, or CI gate.

The review layer may inspect committed research, specifications, ADRs, methodologies, tests, explicit run evidence, and public sources. It may correct the interpretation of an artifact, but it does not retroactively change what a historical run observed.

## Public review states

The states below describe review status only. They are not Axiom runtime states and they do not describe private reasoning.

1. `REVIEW_PENDING`
   - artifact has entered independent review
   - no evidence-strength conclusion has been accepted yet
2. `SOURCE_VERIFIED`
   - material source identity and authority have been checked at the level required for the claim
   - explicit source versions are paired with the correct version-specific date where applicable
3. `EVIDENCE_SCOPED`
   - numerical results, tests, observations, assumptions, and missing fields are bounded to the actual harness and evidence surface
4. `CONFLICT_OPEN`
   - credible evidence or repository records disagree and the conflict is not safely resolved
5. `INSUFFICIENT_EVIDENCE`
   - available material cannot support the requested claim strength
6. `CALIBRATION_REQUIRED`
   - the historical artifact remains useful, but at least one interpretation, source field, aggregation, or claim must be corrected
7. `CALIBRATED`
   - an explicit reconciliation or correction records the stronger evidence boundary without erasing historical execution evidence
8. `ACCEPTED_FOR_REPOSITORY_KNOWLEDGE`
   - the reviewed proposition is consistent with the current evidence contract and repository authority topology

`CONFLICT_OPEN` and `INSUFFICIENT_EVIDENCE` remain unresolved until new evidence changes the state. Reviewer confidence alone is not a transition condition.

## Transition discipline

A normal supported path is:

`REVIEW_PENDING → SOURCE_VERIFIED → EVIDENCE_SCOPED → ACCEPTED_FOR_REPOSITORY_KNOWLEDGE`

A correction path is:

`REVIEW_PENDING → SOURCE_VERIFIED → EVIDENCE_SCOPED → CALIBRATION_REQUIRED → CALIBRATED → ACCEPTED_FOR_REPOSITORY_KNOWLEDGE`

A contested path is:

`REVIEW_PENDING → SOURCE_VERIFIED → CONFLICT_OPEN`

An evidence-limited path is:

`REVIEW_PENDING → SOURCE_VERIFIED → INSUFFICIENT_EVIDENCE`

Every transition must be supported by a public, reviewable artifact such as a primary source, repository file, explicit command/result, or reconciliation record. A model response, confident summary, or agreement between reviewers is not sufficient by itself.

## Axiom-specific review checks

When applicable, the reviewer checks all of the following before accepting a claim:

- Daily evidence is not silently strengthened by Weekly or Monthly aggregation
- `MISSING_DATA`, `NOT_COMPUTED`, unresolved hypotheses, and earlier errors remain visible
- repeated sources are distinguished from genuinely new hard signals
- `D_KL = 0.0` is scoped to the exact recorded distributions or test contract
- `100 / 100 specified executions passed` is scoped to those specified executions and is not treated as exhaustive correctness
- page update timestamps are not substituted for source creation/publication dates
- explicit source versions are paired with the date belonging to that version
- research prose does not override `SPECIFICATION.md`, accepted ADRs, executable code, or repository tests
- project vocabulary such as entropy, phase, or cognition is not promoted into an engineering guarantee without a declared measurement contract and evidence

## Authority order

Independent review uses the repository's existing public authority topology:

- `SPECIFICATION.md` defines behavioral contracts
- `ADR/**` records durable decisions
- `METHODOLOGY/**` records procedures
- `CODE/**` and tests provide executable implementation and revision-specific evidence
- `EVIDENCE_BASELINE.md` bounds source and completion-claim semantics
- `RESEARCH/**` preserves research and historical execution artifacts
- automation and presentation layers do not silently override these authorities

A review finding may identify a mismatch between layers. It must not fabricate a dependency, predecessor, implementation, or test result to make the topology appear consistent.

## Global-practice alignment

This reviewer contract borrows selected public principles from international and industry guidance. It does **not** claim certification, formal conformity, or a NIST/ISO/OECD/SLSA security level.

- NIST AI RMF: documentation, explicit scope, uncertainty, ongoing review, and independent review can strengthen testing while reducing internal bias or conflicts of interest. Unmeasured risks and limits on generalization should remain documented. Reference: https://airc.nist.gov/airmf-resources/airmf/5-sec-core/
- ISO/IEC 42001: AI governance benefits from traceability, transparency, accountability, risk management, and continual improvement. This repository adopts those ideas as documentation discipline only; it does not claim ISO/IEC 42001 certification or conformity. Reference: https://www.iso.org/standard/42001
- OECD AI Principles: accountability should be supported by lifecycle traceability and records sufficient for analysis and inquiry, while transparency is contextual rather than a requirement to expose confidential internal material. References: https://oecd.ai/en/dashboards/ai-principles/P9 and https://oecd.ai/en/dashboards/ai-principles/P7
- SLSA v1.2: provenance is useful only when somebody verifies it against expectations. Axiom reuses this separation between provenance and verification as a review concept; it does not claim a SLSA level or attestation. References: https://slsa.dev/spec/v1.2/provenance and https://slsa.dev/spec/v1.2/verifying-artifacts
- OpenAI third-party evaluation guidance: an evaluation result should identify the claim being tested, the tested system/harness/budget, and validity hazards before a broader conclusion is accepted. This principle is applied only when reviewing evaluation claims; it creates no automatic evaluation harness. Reference: https://openai.com/index/trustworthy-third-party-evaluations-foundations/
- Anthropic agent-evaluation guidance: results depend on task specification, trial isolation, graders, environment, and repeated trials; multiple evidence layers and periodic human calibration are stronger than a single evaluator. This is a review principle, not a CI requirement. Reference: https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents
- OWASP Agentic Top 10: tool misuse, privilege abuse, memory/context poisoning, cascading failures, and human-agent trust exploitation reinforce the decision to keep this reviewer non-operative and isolated from execution authority. The repository does not claim OWASP certification. Reference: https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/

The common pattern is deliberately narrow: **separate producer from reviewer, preserve provenance, verify against explicit expectations, retain uncertainty and conflicts, minimize disclosed sensitive context, and keep the reviewer from acquiring unintended execution authority.**

## Privacy and non-public reasoning boundary

The public repository stores review outcomes and evidence, not private cognition or private operating context.

Do not commit or reconstruct:

- private task prompts or full private conversation prompts
- Jules repository-memory text or other private agent-memory content
- hidden reasoning traces, chain-of-thought, scratchpads, or internal deliberation
- personal context, private correspondence, private account metadata, or non-public relationship information
- credentials, tokens, session secrets, private URLs, or confidential third-party material
- internal strategy whose disclosure is unnecessary to reproduce the public evidence decision

A public review record should contain only what is needed to audit the result: artifact identity, evidence/source identity, review state, bounded claim, conflicts or missing evidence, correction pointer when needed, and commands/results that are safe to disclose.

Reasoning may be summarized as a concise evidence rationale. The rationale must describe the evidence boundary, not expose private reasoning traces.

## Minimal review record

A durable independent review may record:

- artifact or claim under review
- current review state
- public sources or repository evidence used
- supported proposition and scope
- missing or conflicting evidence
- whether a reconciliation/erratum is required
- safe validation commands and observed results when relevant
- final public disposition

No timestamp is required by this contract. No private prompt, private memory, hidden reasoning, workflow, or CI field exists in this public schema.

## Automation isolation

This review contract is intentionally non-operative.

It does not trigger, modify, gate, or replace Jules automation, GPT/cloud maintenance, GitHub Actions, CI, deployment, schedules, repository memory, or runtime behavior. No new CI or workflow is implied by this document.

Artifacts produced by those systems may be reviewed here later. That post-hoc review must never be represented as proof that the producing system consumed or enforced this contract.