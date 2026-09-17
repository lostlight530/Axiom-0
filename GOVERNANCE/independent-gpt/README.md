# Independent GPT Governance — Plasma Beacon

Status: current public recovery kernel  
Calibration: 2026-09-17  
Scope: repository-local maintenance recovery, independent review handoff, reconciliation, and bounded repair

This directory is the public handoff point for a memoryless Independent GPT reviewer. It does not duplicate private task controls and does not outrank repository-native authority.

## Recovery order

Recover current state from current merged `main` first. For the maintenance subject under review, use the most specific current repository authority available. Dated maintenance records and historical audits remain point-in-time evidence, not automatic current authority.

At start record current date, default branch, exact `main` SHA, relevant open pull requests, active maintenance branches, recent merged changes, and checks actually executed. Do not treat a stale local clone, prior handoff SHA, or model recollection as current state.

## Repository map

1. Current implementation/tests only as needed to understand maintenance ownership.
2. `GOVERNANCE/MAINTENANCE.md` — canonical public maintenance contract.
3. `GOVERNANCE/README.md` — governance/control-plane router.
4. `GOVERNANCE/INDEPENDENT_REVIEW.md` — non-operative reviewer-side interpretation state machine.
5. `AUTOMATION/CONTRACT.md`, `schemas/schedule.schema.json`, and the sample schedule — repository automation-data contracts; not execution evidence by themselves.
6. Current repository-native maintenance/reviewer documents that directly own the subject.
7. Current `RESEARCH/` and historical records only as evidence inputs when needed to test a maintenance claim; they are not default edit targets for this maintenance task.
8. Git history, PR chronology, revision-matched tests, schedule artifacts, and GitHub Actions evidence when timing, ownership, producer identity, or delivery state is disputed.

## Task identity and idempotency

Treat a maintenance run as a tuple of repository, maintenance surface/task, logical period when applicable, producer, exact base revision, and run identifier when available.

Before writing:

- confirm fresh `main`;
- inspect overlapping open PRs and active maintenance branches;
- determine the owning maintenance/control file;
- check whether the same logical repair already exists or has merged;
- refresh assumptions if `main` advances materially.

If another live PR/branch owns the same maintenance defect/surface/period, use `COORDINATE` rather than creating a parallel repair. Never write merely to test whether writes are possible.

## Evidence boundaries

Keep repository fact, runner evidence, automation evidence, external evidence, historical evidence, review disposition, inference, and unknown state separate.

A current file's existence does not prove an earlier execution. Later success does not erase earlier failure. Schedule declaration does not prove schedule execution. A correction does not rewrite history. Unknown remains unknown.

Native Jules records remain native Jules records. Independent GPT may use them as repository-visible evidence but does not expose or reconstruct private Jules prompts, hidden memory, credentials, or unrelated operator context.

A passing test, checker, scheduler result, or workflow is evidence only for the exact revision/environment/input/surface actually checked. Contract review is not checker execution. Unrun validation is `NOT_EXECUTED`.

`GOVERNANCE/INDEPENDENT_REVIEW.md` and this recovery kernel have different jobs:

```text
review state != maintenance action
CALIBRATED != repair delivered
ACCEPTED_FOR_REPOSITORY_KNOWLEDGE != merged
```

## Maintenance decision

Use one of these states when useful:

- `HEALTHY` — reviewed maintenance surface has no confirmed defect;
- `REPAIR` — a confirmed maintenance defect has a safe owning-file repair;
- `COORDINATE` — another live change owns the same surface or period;
- `BLOCKED` — authority, current state, or safe delivery cannot be established.

When no confirmed maintenance defect or drift exists, the action is `NO_CHANGE_REQUIRED`: no activity-only edit, branch, or PR.

If repair is justified, change only the owning current maintenance/control file(s) and direct synchronized projections. Research content, historical research records, implementation, and unrelated governance remain outside this kernel unless a current repository-native contract or maintainer explicitly makes them part of the repair.

## Delivery discipline

For a justified repair:

1. branch from exact fresh `main`;
2. make the bounded maintenance/control-plane change;
3. run only available targeted validation and preserve the real result;
4. refresh `main` and overlap state before delivery;
5. inspect the aggregate `main...branch` diff;
6. open one Draft PR;
7. stop for maintainer review.

Do not push directly to `main`, force-push history, auto-merge, or claim a checker/CI PASS that was not actually observed.

## Handoff minimum

A durable handoff should make it possible to recover:

- base `main` SHA and current delivery head;
- maintenance scope and owning files;
- relevant logical period if any;
- overlapping PR/branch state;
- review disposition when one exists;
- automation/schedule execution evidence when claimed;
- checks actually run and checks not run;
- confirmed defect or `NO_CHANGE_REQUIRED` basis;
- unresolved items and negative evidence;
- whether the Draft PR is clean against current `main`.

No separate audit artifact is required merely to prove that review happened. Prefer correcting the owning maintenance source and using the Draft PR description as the delivery summary.

Final merge and doctrine authority remains with the maintainer.
