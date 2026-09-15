# Independent GPT Governance — Plasma Beacon

Status: current public recovery kernel
Scope: repository-local recovery, independent audit, reconciliation, and bounded repair

This directory is the public handoff point for a memoryless independent reviewer. It does not duplicate private task controls and does not outrank repository-native authority.

## Recovery order

Recover current state from current merged `main` first. For the subject under review, use the most specific current repository authority available. Dated maintenance records and historical audits remain point-in-time evidence, not automatic current authority.

At audit start record the current date, default branch, `main` SHA, relevant open pull requests, recent merged changes, and checks actually executed.

## Repository map

1. Current implementation and tests under `CODE/`, `AUTOMATION/`, and other active implementation surfaces.
2. `GOVERNANCE/MAINTENANCE.md` for the canonical public maintenance contract.
3. `INDEPENDENT_REVIEW.md` for the repository-native reviewer state machine.
4. `EVIDENCE_BASELINE.md`, current ADRs / Methodologies, and explicit machine-readable contracts for claim and implementation boundaries.
5. Current `RESEARCH/` Daily / Weekly / Monthly artifacts for repository-visible research execution evidence.
6. `historical-audits/INDEX.md` and its records for corrections, period audits, evidence accounting, and reconciliation history.
7. Git history, PR chronology, and revision-matched test / GitHub Actions evidence when historical execution or current validity is disputed.

## Evidence boundaries

Keep command, revision, environment, exit code, and untested boundary attached to execution claims. KL evidence, structural scans, bounded executions, index checks, document checks, GitHub Actions runs, and frontend state are separate evidence surfaces.

Native Jules records remain native Jules records. Independent review may calibrate their interpretation but does not retroactively change historical execution. A later successful run does not erase an earlier failed run. File presence or a status field is not execution evidence by itself.

## History discipline

Historical artifacts are immutable point-in-time evidence. Use dated corrections or reconciliations when later evidence changes the current interpretation. Preserve failed, missing, provisional, blocked, insufficient-evidence, and unknown states. A moved or archived file retains its historical meaning unless an explicit correction says otherwise.

Do not manufacture missing dates, missing commands, missing environments, or missing runtime evidence from later repository state.

## Independent audit outcome

Separate current facts, historical facts, corrections, external claims, execution evidence, inference, and unknown state. When a concise governance status is useful, use:

- `HEALTHY`
- `REPAIR`
- `COORDINATE`
- `BLOCKED`

`HEALTHY` means no repair is required for the audited surface; it is not a universal correctness certificate.

If repair is justified, change only the owning current file(s) and the contracts, indexes, or projections that must remain synchronized. Respect protected implementation and control-plane boundaries declared by current repository contracts. Do not create activity-only edits or fabricated backfill.

## Public boundary

This recovery kernel is intentionally repository-bounded. It relies on repository-visible evidence and public sources where needed. It does not require reconstruction of unavailable operator context, credentials, hidden memory, or unrelated orchestration.

## Handoff minimum

A durable independent audit should leave the next reviewer able to identify the base `main` SHA, scope and evidence window, authority used, checks run, checks not run, current findings, historical findings, corrections, unresolved items, and whether history and negative evidence were preserved.

Independent governance may recommend or prepare bounded changes. Final merge and doctrine authority remains with the maintainer.
