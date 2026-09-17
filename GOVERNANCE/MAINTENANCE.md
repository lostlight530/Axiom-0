# Axiom-0 maintenance contract

Status: `CANONICAL_PUBLIC_MAINTENANCE_CONTRACT`

Effective: 2026-09-17

## Scope

This contract governs repository maintenance, Jules-produced maintenance inputs, Independent Review, Independent GPT recovery/repair, automation-contract interpretation, checker ownership, cadence, concurrency, and delivery discipline.

It does not by itself authorize changes to `CODE/**`, `FRONTEND/**`, dependencies, research content, historical audits, private Jules task controls, or GitHub Actions runtime behavior. Those surfaces may be read as evidence and may be changed only when the current owning repository authority or maintainer explicitly makes them part of the repair.

## Cadence and evidence

- A1–A4 produce one Daily manifest: source/input identity, independent KL and structural scans, bounded executions, then index checks.
- A5 Weekly inherits Daily records without erasing failures or manufacturing missing values.
- A6 Monthly closes only after the natural month ends. Until then use `MONTH_OPEN`; an unfinished week uses `WEEK_IN_PROGRESS / NO_WEEKLY_CLOSURE`.
- Every material execution claim retains source/version/check time, revision, command, exit code, environment, and untested boundary.
- Source repetition is not independent corroboration.

KL, structural, execution, index, document, automation, and runner evidence are separate surfaces and prove only their named contracts. `scan_consistency.py` emits a versioned `axiom_document_topology` contract; retain its JSON line when the scanner is actually executed. A non-zero scan fails closed and stops later stages. No later success rewrites an earlier failure.

## Task identity and concurrency

A maintenance run is identified by repository, task/surface, logical period when applicable, producer, exact base `main` revision, and run identifier when one exists.

Before any write:

1. recover the default branch and fresh merged `main` SHA;
2. inspect relevant open pull requests and active maintenance branches;
3. identify the owning maintenance/control file and synchronized projections;
4. check whether the same logical repair already exists or has merged;
5. refresh assumptions if `main` advances materially.

If another live PR/branch owns the same maintenance surface or period, use `COORDINATE` instead of manufacturing a parallel repair. Never create or mutate a branch merely to test write permission.

## Automation boundary

`AUTOMATION/CONTRACT.md`, its schema, and sample schedule describe repository-owned automation data contracts. Their presence does not prove a scheduler consumed them or that a scheduled command ran.

Keep distinct:

```text
schedule declared != schedule executed
automation artifact valid != scientific claim true
workflow file exists != workflow ran
checker contract reviewed != checker executed
```

A scheduled or runner result is evidence only for the exact revision, command, environment, inputs, and artifact set actually observed.

## Historical correction and document governance

Historical research and archived audits are point-in-time evidence, not routine maintenance edit targets. Post-hoc calibration preserves original execution meaning and records current disposition, reason, evidence boundary, authority, and replay status.

ADR and Methodology identifiers and paths remain stable. A current maintenance/control file may be corrected when internally contradictory, provided the prior value remains recoverable in Git history and the correction boundary is explicit.

Historical control-plane drift closes only after a repaired public entry point exists and later real producer evidence demonstrates use of the repaired revision when that execution proof is required. Existing August control-plane reconciliation remains historical evidence and is not rewritten by this contract.

A 30-day provisional audit may summarize 30 logical dates, but it is not a natural-month seal. The month remains `MONTH_OPEN` until the calendar month ends and the final date is retained or explicitly classified as missing after it becomes due.

## Jules, Independent Review, and Independent GPT

Private Jules task prompts and repository memory remain producer-side controls and are not reconstructed into public files by default. Jules-generated records are repository inputs, not self-authenticating conclusions.

`GOVERNANCE/INDEPENDENT_REVIEW.md` defines reviewer-side interpretation states. `GOVERNANCE/independent-gpt/README.md` defines memoryless maintenance recovery and bounded Draft-PR delivery. Review state and maintenance action are separate.

A human maintainer remains final doctrine and merge authority.

## Maintenance decision

Use repository truth first:

- no confirmed maintenance defect or drift → `NO_CHANGE_REQUIRED`, no activity-only commit/PR;
- confirmed maintenance defect with safe ownership → `REPAIR`;
- overlapping live ownership → `COORDINATE`;
- missing authority, unrecoverable state, or unsafe delivery → `BLOCKED`.

`HEALTHY` or `NO_CHANGE_REQUIRED` applies only to the reviewed maintenance surface and is not a universal correctness certificate.

## Verification and delivery

Verification claims are limited to checks actually executed. Contract review is not checker execution. An unrun test, scanner, schedule, workflow, or local command is `NOT_EXECUTED`.

For a justified repair:

1. branch from exact fresh `main`;
2. change only owning maintenance/control files and direct synchronized projections;
3. preserve failed, missing, rejected, provisional, blocked, and unknown states;
4. run available targeted checks supported by the actual environment;
5. refresh current `main` and overlap state before delivery;
6. inspect the aggregate `main...branch` diff;
7. open one Draft PR and stop for maintainer review.

Do not push directly to `main`, rewrite history, force-push, auto-merge, or claim PASS for an unexecuted check.

Done requires aligned maintenance links/indexes, preserved negative evidence, a clean aggregate diff against current `main`, explicit executed/unexecuted validation, and no hidden scope expansion.
