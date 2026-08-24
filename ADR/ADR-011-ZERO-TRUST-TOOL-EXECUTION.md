# Tool execution is outside the Axiom reference core

- Decision date: 2026-08-05
- Review calibration: 2026-08-24
- Status: Accepted as a non-implementation boundary
- Implementation anchor: none; caller-owned concern

## Context

The Axiom executable core does not implement a general-purpose tool executor, permission broker, credential manager, shell runner, browser controller, or external-effect runtime.

Earlier “zero-trust tool execution” wording could be misread as a local capability.

## Decision

Treat tool authority and external-effect control as **embedding-system responsibilities**, not implemented Axiom features.

If an external system embeds Axiom alongside consequential tools, that external system should independently own concerns such as:

- authenticated actor identity
- allowed operation and target scope
- argument validation
- credential and filesystem/network scope
- time/cost/resource limits
- confirmation for destructive/external effects where appropriate
- result/side-effect verification
- secret-safe logging

These are architecture boundaries, not local runtime mechanisms.

## Consequences

Axiom can remain a small reference library without implying security controls it does not contain.

## Evidence boundary

The absence of arbitrary command/network execution in the current reference core is a local code property.

It does not prove that every embedding system is safe, least-privileged, or correctly authorized.

## Non-implementation rule

Do not cite this ADR as evidence that Axiom implements tool authorization, sandboxing, external-effect confirmation, or security enforcement.
