# Automation Contract

Automation schedules verification; it does not create evidence by merely running.

## Required fields

A schedule declares `schema_version`, unique `id`, enabled state, trigger, command argument array, timeout, concurrency policy, permissions, expected artifacts, owner, and failure handling. Times are UTC. Commands are fixed argument arrays: no interpolated shell, secret, or downloaded script.

## Execution rules

1. Resolve the target commit and schema before starting.
2. Acquire the named concurrency group; do not overlap unless explicitly safe.
3. Enforce timeout and cancellation on child work.
4. Use read-only repository permission unless an output requires a reviewed write path.
5. Emit start/end time, revision, exit code, artifact digests, and redacted diagnostics.
6. A timeout, invalid artifact, or partial result is failure; retries use bounded exponential delay and the same immutable input.

## Ownership boundary

This file and `sample-schedule.yml` specify self-owned automation data. They do not alter Jules configuration or GitHub Actions. Any scheduler consuming the sample must independently validate `schemas/schedule.schema.json` and implement credentials, isolation, notifications, and retention.