# Transactional state adaptation

- Decision date: 2026-08-05
- Scope: Axiom-0 reference contracts, methods, code, and verification

## 状态 / Status

[CN] 已接受；替代同名文件中的绝对化表述。

[EN] Accepted. This decision supersedes absolute or unverifiable language previously present in this file.

## 背景 / Context

[CN] Fixed sleeps simulated preparation and validation but proved nothing about readiness. State could be reported as secure without an external check.

[EN] Fixed sleeps simulated preparation and validation but proved nothing about readiness. State could be reported as secure without an external check.

## 决策 / Decision

[CN] A transition invokes injectable prepare and validate hooks under an async lock. State changes only after both succeed; failure preserves the source state and records the exception type without private details.

[EN] A transition invokes injectable prepare and validate hooks under an async lock. State changes only after both succeed; failure preserves the source state and records the exception type without private details.

## 后果 / Consequences

[CN] Callers must implement real readiness checks; the reference engine stays fast and testable.

[EN] Callers must implement real readiness checks; the reference engine stays fast and testable.

## 验证 / Verification

[CN] `tests/test_morphing.py` verifies success ordering, rollback-on-validation-failure, and history.

[EN] `tests/test_morphing.py` verifies success ordering, rollback-on-validation-failure, and history. A passing check is evidence for the stated configuration only; it is not a universal guarantee.

## 例外 / Exceptions

An exception requires a pull request naming its owner, expiry, affected threat or failure model, compensating control, verification, and rollback. Silent exceptions are invalid.