# Axiom-0 Governance Map

`GOVERNANCE/` is the repository-native governance entry point. It routes maintenance, plans/specs, independent review, and memoryless external recovery without replacing implementation, evidence contracts, or historical research.

## Current surfaces

- `MAINTENANCE.md` — canonical public maintenance contract.
- `plans/` and `specs/` — retained governance design/specification material in their declared status.
- `../INDEPENDENT_REVIEW.md` — repository-native post-hoc reviewer state machine.
- `independent-gpt/README.md` — cold-start recovery kernel for a memoryless Independent GPT reviewer.
- `../EVIDENCE_BASELINE.md`, `../ADR/`, `../METHODOLOGY/` — subject-specific evidence and decision/procedure boundaries.
- `../RESEARCH/` — Daily/Weekly/Monthly research and execution records.
- `../historical-audits/INDEX.md` — retained corrections, audits, maintenance, and reconciliation history.

## Authority rule

This directory is a router and maintenance/governance surface. It does not outrank current implementation or a more specific current subject contract.

```text
current implementation / tests
> current subject-specific contract / ADR / Methodology
> current evidence baseline and explicit review contract
> current research / execution evidence for the exact revision and environment
> current maintenance / governance interpretation
> historical point-in-time evidence
```

## Runner terminology

GitHub Actions and other repository automation are runner/deployment/lifecycle evidence only when their execution is actually observed for the relevant revision. This repository does not treat that layer as a general CI system, and no workflow result is a universal correctness certificate.

## Separation

```text
native Jules production != Independent Review
Independent Review != Independent GPT
Independent GPT != GitHub Actions
GitHub Actions != scientific or semantic truth
historical audit != current state
public governance != private task controls
```

Historical files are corrected forward through explicit reconciliation or successor records; they are not silently rewritten.

Final doctrine and merge authority remains with the maintainer.
