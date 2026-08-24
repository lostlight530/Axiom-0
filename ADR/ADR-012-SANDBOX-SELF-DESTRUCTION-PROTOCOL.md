# Cleanup and sandbox behavior are not implemented by the reference core

- Decision date: 2026-08-05
- Review calibration: 2026-08-24
- Status: Accepted boundary decision
- Implementation status: `NOT_IMPLEMENTED_IN_REFERENCE_CORE`
- Historical filename retained for continuity

## Context

The historical ADR name refers to sandbox self-destruction, but the current Axiom executable core contains no sandbox manager, workspace lifecycle service, recursive cleanup engine, credential scrubber, or recoverable deletion subsystem.

The implemented executable center remains `CODE/contracts.py`, `CODE/liquid_morphing.py`, and `CODE/nexus_core.py`. None of those modules performs repository/workspace deletion.

## Decision

Do not describe cleanup or sandbox destruction as an implemented Axiom capability.

Where an embedding environment performs cleanup, the repository may document only the following bounded safety principle as external/reference guidance:

- resolve an exact target before mutation
- establish that the target belongs to the intended workspace or scope
- distinguish ephemeral artifacts from durable/user-owned data
- avoid deriving recursive deletion targets from unverified input
- retain enough result evidence to know what was actually removed

These principles are not executable policy in Axiom-0.

## Consequences

Research prose can discuss cleanup risk without implying that Axiom provides a sandbox runtime.

A file deletion performed by an external host, development environment, or automation is an external effect and must not be attributed to this reference core unless a concrete Axiom implementation is later added and reviewed.

## Evidence boundary

Current repository evidence can establish only that this ADR records a non-implementation boundary.

It cannot establish:

- sandbox containment
- deletion safety
- secure erasure
- rollback/recovery behavior
- credential cleanup
- lifecycle isolation

because those mechanisms are not present in the reference core.

## Promotion boundary

Any future claim that Axiom implements cleanup/sandbox lifecycle behavior requires a concrete executable module and evidence for the exact behavior claimed. Historical terminology alone is insufficient.