# Repository knowledge stratification

- Decision date: 2026-08-05
- Scope: Axiom-0 reference contracts, methods, code, and verification

## 状态 / Status

[CN] 已接受；替代同名文件中的绝对化表述。

[EN] Accepted. This decision supersedes absolute or unverifiable language previously present in this file.

## 背景 / Context

[CN] Decisions, methods, code, research, automation, and presentation have different authority and lifecycle. Mixing them causes generated material to govern runtime accidentally.

[EN] Decisions, methods, code, research, automation, and presentation have different authority and lifecycle. Mixing them causes generated material to govern runtime accidentally.

## 决策 / Decision

[CN] ADR defines durable decisions; METHODOLOGY defines procedures; SPECIFICATION defines contracts; CODE and tests implement them; AUTOMATION schedules checks; RESEARCH and frontend remain separately owned.

[EN] ADR defines durable decisions; METHODOLOGY defines procedures; SPECIFICATION defines contracts; CODE and tests implement them; AUTOMATION schedules checks; RESEARCH and frontend remain separately owned.

## 后果 / Consequences

[CN] Cross-layer changes require explicit links, but ownership conflicts decrease.

[EN] Cross-layer changes require explicit links, but ownership conflicts decrease.

## 验证 / Verification

[CN] Review checks that a change lands in the correct layer and updates dependent tests without rewriting separately owned material.

[EN] Review checks that a change lands in the correct layer and updates dependent tests without rewriting separately owned material. A passing check is evidence for the stated configuration only; it is not a universal guarantee.

## 例外 / Exceptions

An exception requires a pull request naming its owner, expiry, affected threat or failure model, compensating control, verification, and rollback. Silent exceptions are invalid.