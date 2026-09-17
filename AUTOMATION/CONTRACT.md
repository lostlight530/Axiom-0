# Automation Contract

Status: current repository-owned automation data contract  
Calibration: 2026-09-17

Automation schedules verification; it does not create evidence merely by existing, being enabled, or being invoked.

## Required fields

A schedule declares `schema_version`, unique `id`, enabled state, trigger, command argument array, timeout, concurrency policy, permissions, expected artifacts, owner, and failure handling. Times are UTC. Commands are fixed argument arrays: no interpolated shell, secret, or downloaded script.

The machine contract is `schemas/schedule.schema.json`. `AUTOMATION/sample-schedule.yml` is an example instance and is disabled by default.

## Execution rules

1. Resolve the exact target commit and schema before starting.
2. Acquire the named concurrency group; do not overlap unless explicitly safe.
3. Enforce timeout and cancellation on child work.
4. Use read-only repository permission unless an output requires a separately reviewed write path.
5. Emit start/end time, revision, exit code, artifact digests, and redacted diagnostics.
6. A timeout, invalid artifact, partial result, or missing required output is failure; retries use bounded delay and the same immutable input unless the contract explicitly changes.
7. Do not infer success from schedule presence, scheduler acknowledgement, or artifact-path existence.

## Evidence boundary

Keep these statements separate:

```text
schedule declared != schedule executed
schedule executed != command succeeded
command succeeded != artifact valid
artifact valid != scientific claim true
sample schedule valid != scheduler implemented
```

A schedule or automation result is evidence only for the exact revision, command, environment, inputs, and output artifacts actually observed. If execution evidence is unavailable, use `NOT_EXECUTED` or `EXECUTION_NOT_OBSERVED` rather than reconstructing success from later repository state.

## Ownership and concurrency

This file, `schemas/schedule.schema.json`, and `sample-schedule.yml` specify repository-owned automation data. They do not alter Jules configuration, private task prompts, repository memory, or GitHub Actions.

A scheduler consuming this contract must independently implement credentials, isolation, notifications, retention, concurrency, and failure handling. If another live maintenance PR/branch owns this automation surface, coordinate instead of creating a parallel contract repair.

## Maintenance integration

Maintenance review may inspect this contract, schema, sample, and retained execution evidence. It must distinguish contract inspection from checker/scheduler execution.

A justified contract repair follows `GOVERNANCE/MAINTENANCE.md`: fresh `main`, bounded owning-file change, actual validation where available, aggregate diff review, one Draft PR, then maintainer review.

Final doctrine and merge authority remains with the maintainer.
