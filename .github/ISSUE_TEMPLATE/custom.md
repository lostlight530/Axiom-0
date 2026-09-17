---
name: Maintenance or governance correction
about: Report a bounded maintenance/control-plane defect, authority drift, automation-contract inconsistency, or recovery problem
title: "[Governance] "
labels: documentation
assignees: ""
---

## Owning maintenance/control surface

## Current repository fact

Include the current `main` revision and the exact file/rule that is inconsistent, stale, ambiguous, or missing.

## Historical / prior interpretation

State the prior value only when it matters. Do not rewrite point-in-time history to make current state look cleaner.

## Evidence and authority

Separate repository fact, revision-matched execution/runner evidence, automation/scheduler evidence, primary external evidence, inference, and unknown state.

## Concurrency

List overlapping open PRs / active maintenance branches for the same surface or logical period. Use `COORDINATE` when another live change owns the repair.

## Proposed bounded correction

Identify the owning file(s), machine-readable contracts, and direct synchronized projections. Do not manufacture unrelated cleanup.

## Verification

List scanners, schema checks, commands, schedulers, or workflows actually executed and their outcomes. Mark unrun checks `NOT_EXECUTED`; use `EXECUTION_NOT_OBSERVED` when an external/scheduled execution cannot be recovered.

## Privacy / Jules boundary

Do not paste private Jules prompts, repository memory, hidden reasoning, credentials, or unrelated operator context into this issue.

## Rollback and maintainer decision

Final doctrine and merge authority remains with the maintainer.
