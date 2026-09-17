# Contributing

Axiom accepts bounded, reviewable changes that make contracts, evidence, automation, and execution behavior more precise without silently expanding claim strength.

## Authority and maintenance boundary

Before changing anything, recover current repository truth from latest merged `main`. Identify the owning implementation or contract, relevant open pull requests, active maintenance branches, and the exact base revision used for the work.

Repository maintenance is governed by `GOVERNANCE/MAINTENANCE.md`. Independent review semantics live in `GOVERNANCE/INDEPENDENT_REVIEW.md`. Memoryless Independent GPT recovery/delivery is governed by `GOVERNANCE/independent-gpt/README.md`. Repository-owned schedule semantics live in `AUTOMATION/CONTRACT.md` and `schemas/schedule.schema.json`.

Private Jules task prompts and repository memory remain producer-side controls and are not reconstructed or copied into public files unless the maintainer explicitly publishes them. This repository currently has no public `AGENTS.md`; do not infer one from private automation, prior chats, or model memory.

A maintenance/review task may read research, implementation, evidence, ADR, methodology, automation artifacts, and historical records when needed to establish repository truth. Those surfaces are not automatically edit targets.

## Change ownership

For any proposed change:

1. identify the owning file or implementation surface;
2. distinguish current state from historical point-in-time evidence;
3. preserve failure, unknown, missing, rejected, provisional, and blocked states;
4. avoid parallel fixes when another live PR/branch owns the same surface or logical period;
5. keep the aggregate diff bounded to the justified repair.

Do not create activity-only commits. When no confirmed maintenance defect exists, the correct maintenance outcome is `NO_CHANGE_REQUIRED`.

## Jules, Independent Review, and Independent GPT

Jules-produced artifacts are repository inputs, not self-authenticating conclusions. Independent Review may calibrate interpretation. Independent GPT may recover state and prepare bounded maintenance repairs. Neither proves what Jules privately consumed or intended.

Keep these planes distinct:

```text
Jules producer execution != Independent Review
Independent Review != Independent GPT maintenance
Independent GPT != GitHub Actions
repository schedule contract != scheduler execution
workflow file exists != workflow ran
current path presence != earlier execution
later success != earlier success
correction != history rewrite
```

No public contribution should disclose private prompts, credentials, hidden memory, or unrelated operator context.

## Before changing executable behavior

1. Identify the affected ADR or methodology and its explicit boundary.
2. Define inputs, outputs, error behavior, and compatibility.
3. Add or update a regression test before changing a critical path.
4. Preserve separately owned paths unless the change explicitly owns them.

The project intentionally has no runtime third-party Python dependency. Do not add one without documenting ownership, threat surface, alternatives, and rollback.

## Local verification

Use the repository-supported Python environment and run checks relevant to the changed surface. Current executable checks include:

```text
python -m unittest discover -s tests -v
python code_compliance.py
python scan_consistency.py
python scan_kl_divergence.py
```

Run only checks supported by the actual environment. Record exact commands and outcomes. An unrun check is `NOT_EXECUTED`; documentation inspection is not a substitute for checker execution.

If an automation contract/sample changes, separately validate the relevant machine-readable schema when the environment supports it. A valid schedule instance is not evidence that a scheduler executed it.

## Claims and generated content

State whether material is observed, externally supported, proposed, hypothetical, contested, missing, or not computed. Cite primary sources with retrieval/check dates when a primary source exists. AI-assisted contributions follow `AI_USE_DISCLOSURE.md`; the contributor remains responsible for every line and verification result.

Generated or retrieved material does not inherit authority from the tool that produced it. A successful fetch, parser, model response, scheduler acknowledgement, or ingestion step is not semantic validation.

## Research evidence boundaries

When research or audit artifacts are read as evidence:

- distinguish source authority from claim status;
- distinguish publication/creation dates from update/last-modified timestamps;
- verify explicit source versions against version-specific dates;
- retain `MISSING_DATA`, `NOT_COMPUTED`, unresolved items, and rejected evidence;
- preserve an earlier run's failure even if a later run succeeds;
- scope numeric/test results to the actual harness and inputs;
- mark repeated sources as revalidation, control signals, new claims, or duplicates rather than treating recurrence as novel independent evidence.

A Weekly artifact may aggregate or downgrade Daily evidence but must not invent a Daily observation absent from persisted Daily artifacts. `Missing Daily files: NONE` and `Missing evidence: NONE` are different statements.

## Historical correction

Historical research and archived audits are point-in-time evidence. Do not silently rewrite them merely to make the archive appear consistent.

A maintenance correction normally changes the current owning maintenance/control source or an explicit successor. If a historical artifact is itself being corrected under a separate authorized task, preserve the original meaning/recoverability and state the correction boundary explicitly.

## Pull requests

A repair PR must state:

- exact base `main` revision and current head;
- owning maintenance/implementation scope;
- overlapping PR/branch check;
- changed files and deliberately unchanged boundaries;
- commands/checkers/schedulers/workflows actually executed and outcomes;
- checks not executed;
- security/privacy/retention impact when applicable;
- rollback boundary;
- unresolved evidence or coordination state.

Before delivery, refresh current `main`, recheck overlap, inspect the aggregate `main...branch` diff, open one Draft PR, and stop for maintainer review unless a different repository-native workflow explicitly applies.

Do not push directly to `main`, force-push history, auto-merge, or claim universal health from a local check.
