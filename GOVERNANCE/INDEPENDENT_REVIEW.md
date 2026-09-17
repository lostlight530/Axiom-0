# Independent Review Contract

Status: public post-hoc review contract  
Calibration: 2026-09-17

## Purpose

This document defines the reviewer-side state machine for independently evaluating committed Axiom artifacts and repository claims.

It is distinct from repository runtime, Jules Daily/Weekly/Monthly production, GitHub Actions, deployment, and repository-owned schedule execution. It is also distinct from the Independent GPT maintenance delivery kernel in `GOVERNANCE/independent-gpt/README.md`:

- this file defines **review interpretation states**;
- the Independent GPT kernel defines **maintenance recovery, repair, concurrency, and Draft-PR delivery discipline**;
- neither becomes runtime authority or proves what Jules privately consumed.

This document is not a Jules task prompt, repository-memory entry, public `AGENTS.md`, executable policy, workflow, scheduler, or CI gate.

The review layer may inspect committed research, specifications, ADRs, methodologies, tests, explicit run evidence, automation contracts/artifacts, Git/PR history, and public sources. It may calibrate current interpretation without retroactively changing what a historical run observed.

## Recovery prerequisite

Before assigning a current review state, recover repository truth from current merged `main` and identify the exact artifact/revision under review. When delivery or maintenance state matters, inspect relevant open pull requests, active maintenance branches, and revision-matched runner/automation evidence.

A stale clone, prior handoff SHA, later file presence, schedule declaration, or model recollection cannot establish current or historical execution state by itself.

## Public review states

The states below describe review status only. They are not Axiom runtime or maintenance-delivery states and they do not describe private reasoning.

1. `REVIEW_PENDING`
   - artifact or claim has entered independent review
2. `SOURCE_VERIFIED`
   - material source identity and authority are checked at the level required for the claim
3. `EVIDENCE_SCOPED`
   - numerical results, commands, tests, observations, assumptions, run identity, and missing fields are bounded to the actual harness/evidence surface
4. `CONFLICT_OPEN`
   - credible evidence or repository records disagree and the conflict is not safely resolved
5. `INSUFFICIENT_EVIDENCE`
   - available material cannot support the requested claim strength
6. `CALIBRATION_REQUIRED`
   - the historical artifact remains useful, but current interpretation, source field, aggregation, or claim must be narrowed/corrected
7. `CALIBRATED`
   - an explicit current correction records the supported interpretation without erasing historical execution evidence
8. `ACCEPTED_FOR_REPOSITORY_KNOWLEDGE`
   - the reviewed proposition is consistent with current evidence and repository authority boundaries

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

Every transition must be supported by public, reviewable material such as a primary source, repository file, explicit command/result, exact revision, retained artifact, Git/PR chronology, or reconciliation record. A model response, confident summary, or agreement between reviewers is not sufficient by itself.

## History and chronology discipline

Keep these statements separate:

```text
historical artifact != current state
current path presence != earlier execution
schedule declared != schedule executed
later success != earlier success
correction != history rewrite
unknown != inferred success
```

Historical research and archived audits remain point-in-time evidence. Review normally changes current interpretation or the owning current maintenance/control source; it does not silently rewrite historical execution.

When a historical artifact itself is the object under review, record the supported disposition/correction pointer rather than manufacturing missing commands, dates, environment, or runtime results.

## Axiom-specific review checks

When applicable, the reviewer checks that:

- Daily evidence is not silently strengthened by Weekly or Monthly aggregation;
- `MISSING_DATA`, `NOT_COMPUTED`, unresolved hypotheses, and earlier errors remain visible;
- repeated sources are distinguished from genuinely new independent evidence;
- `D_KL = 0.0` is scoped to the exact recorded distributions or test contract;
- `100 / 100 specified executions passed` is scoped to those specified executions and is not exhaustive correctness;
- page update timestamps are not substituted for source creation/publication dates;
- explicit source versions are paired with the date belonging to that version;
- `scan_consistency.py`, KL scans, bounded executions, index checks, schedule validation, and GitHub runner evidence remain separate;
- schedule/sample presence is not described as observed execution;
- research prose does not override current implementation, `SPECIFICATION.md`, accepted ADRs, or repository tests;
- project vocabulary such as entropy, phase, or cognition is not promoted into an engineering guarantee without a declared measurement contract and evidence.

## Authority boundary

Independent review reads the existing public repository topology but does not become runtime authority.

- current implementation/tests provide revision-specific executable evidence;
- `SPECIFICATION.md`, `ADR/**`, and `METHODOLOGY/**` define subject-specific engineering/procedure boundaries;
- `EVIDENCE_BASELINE.md` bounds source and completion-claim semantics;
- `AUTOMATION/CONTRACT.md` and `schemas/schedule.schema.json` own repository automation-data semantics;
- `RESEARCH/**` preserves research and historical execution artifacts;
- `GOVERNANCE/MAINTENANCE.md` owns public maintenance policy;
- `GOVERNANCE/independent-gpt/README.md` owns memoryless maintenance recovery/delivery discipline.

An audit finding may identify a mismatch between layers. It must not fabricate a dependency, predecessor, implementation, test result, scheduler execution, workflow run, or producer intent to make the topology appear consistent.

## Relationship to maintenance repair

Independent review can establish that a maintenance/control-plane defect exists. Actual repair then follows `GOVERNANCE/MAINTENANCE.md` and the Independent GPT recovery kernel.

If no confirmed maintenance defect exists, use `NO_CHANGE_REQUIRED`; review completion alone is not a reason to create an edit or PR.

If repair is justified, change the owning current maintenance/control file(s) and direct synchronized projections. If another live PR/branch owns the same surface or logical period, use `COORDINATE`. If authority or safe delivery cannot be established, use `BLOCKED`.

Review state and maintenance action must not be collapsed into one label.

## Global-practice alignment

This reviewer contract borrows selected public principles from international and industry guidance. It does **not** claim certification, formal conformity, or a NIST/ISO/OECD/SLSA/OWASP level.

- NIST AI RMF: documentation, explicit scope, uncertainty, ongoing review, and independent review can strengthen testing while reducing internal bias.
- ISO/IEC 42001: traceability, transparency, accountability, risk management, and continual improvement are useful governance patterns; no certification/conformity is claimed.
- OECD AI Principles: accountability benefits from lifecycle traceability and records sufficient for inquiry while disclosure remains context-sensitive.
- SLSA: provenance is not assurance until verified against expectations; Axiom claims no SLSA level.
- Public evaluation guidance from major AI labs supports identifying the tested system, harness, environment, budget, and validity hazards rather than treating a result as context-free.
- OWASP agentic-risk guidance reinforces explicit state boundaries, least privilege, and reviewer/executor separation.

External frameworks calibrate vocabulary and review discipline only. They do not certify this repository or replace repository-native authority.

## Privacy and non-public reasoning boundary

The public repository stores review outcomes and evidence, not private cognition or private operating context.

Do not commit or reconstruct:

- private task prompts or full private conversation prompts;
- Jules repository-memory text or other private agent-memory content;
- hidden reasoning traces, chain-of-thought, scratchpads, or internal deliberation;
- personal context, private correspondence, private account metadata, or non-public relationship information;
- credentials, tokens, session secrets, private URLs, or confidential third-party material;
- internal strategy whose disclosure is unnecessary to reproduce the public evidence decision.

A public review record should contain only what is needed to audit the result: artifact identity, exact revision, evidence/source identity, review state, bounded claim, conflicts/missing evidence, correction pointer when needed, and safe commands/results when relevant.

## Minimal review record

A durable independent review may record:

- artifact or claim under review;
- exact repository revision;
- current review state;
- public sources or repository evidence used;
- supported proposition and scope;
- missing or conflicting evidence;
- correction/erratum pointer when required;
- validation actually executed and observed results;
- checks not executed;
- final public disposition.

No private prompt, private memory, hidden reasoning, scheduler, workflow, or repository-automation field is required in this public schema.

## Automation isolation

This review contract is non-operative. It does not trigger, modify, gate, or replace Jules automation, Independent GPT execution, repository-owned schedules, GitHub Actions, deployment, repository memory, or runtime behavior.

Artifacts produced by those systems may be reviewed here later. Review never becomes evidence that the producer consumed this contract.

Final doctrine and merge authority remains with the maintainer.
