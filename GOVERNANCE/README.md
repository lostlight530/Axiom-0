# Axiom-0 Governance Map

Calibration: 2026-09-17

`GOVERNANCE/` is the repository-native maintenance/control-plane entry point. It routes public maintenance, Independent Review, retained governance design material, and memoryless Independent GPT recovery without replacing implementation, evidence contracts, automation-data contracts, research content, or private Jules task controls.

## Current control-plane surfaces

- `MAINTENANCE.md` — canonical public maintenance contract.
- `INDEPENDENT_REVIEW.md` — reviewer-side interpretation state machine; non-operative and distinct from maintenance delivery.
- `independent-gpt/README.md` — cold-start recovery and bounded-repair kernel for a memoryless Independent GPT reviewer.
- `../AUTOMATION/CONTRACT.md` — repository-owned automation-data and execution-evidence boundary.
- `plans/` and `specs/` — retained governance design/specification material in their declared status; not routine maintenance edit targets.

## Evidence inputs, not default maintenance edit targets

The following surfaces may be read when needed to verify a maintenance claim, but this governance router does not authorize changing them merely because a maintenance review is running:

- current implementation / tests;
- `../EVIDENCE_BASELINE.md`, `../ADR/`, `../METHODOLOGY/`;
- `../RESEARCH/` Daily / Weekly / Monthly research and execution records;
- `../historical-audits/INDEX.md` and retained point-in-time records;
- runner/workflow outputs and automation artifacts for exact revision-matched evidence.

A repository-native owning contract or maintainer may explicitly require synchronization with one of those surfaces. Otherwise keep maintenance repair inside the maintenance/control plane.

## Authority rule

For maintenance work, recover repository truth first and use the most specific current owner:

```text
current merged main / current implementation facts
> current subject-specific repository contract
> canonical repository maintenance contract
> verified revision-matched execution / runner evidence
> current governance interpretation
> historical point-in-time evidence / prior handoff / model recollection
```

`INDEPENDENT_REVIEW.md` can calibrate interpretation but does not outrank the current owning contract or become runtime authority.

A private Jules task definition may instruct a producer, but it is not automatically public repository authority and must not be copied into public files unless the maintainer explicitly publishes it.

## Runner and automation terminology

Keep these statements separate:

```text
schedule declared != schedule executed
workflow file exists != workflow ran
checker contract reviewed != checker executed
artifact path exists != artifact validated
```

GitHub Actions and repository automation are runner/lifecycle evidence only when execution is actually observed for the relevant revision. An unrun checker is `NOT_EXECUTED`; no workflow result is a universal correctness certificate.

## Separation

```text
native Jules production != Independent Review
Independent Review != Independent GPT maintenance
Independent GPT != GitHub Actions
repository schedule contract != scheduler execution
GitHub Actions != scientific or semantic truth
maintenance control plane != research content plane
historical record != current state
current path presence != earlier execution
correction != history rewrite
public governance != private task controls
```

## Delivery rule

No confirmed maintenance defect means `NO_CHANGE_REQUIRED` and no activity-only PR. A justified maintenance repair changes the owning control-plane file(s), verifies only what can actually be executed, refreshes current `main`/overlap state, opens one Draft PR, and stops for maintainer review.

Final doctrine and merge authority remains with the maintainer.
