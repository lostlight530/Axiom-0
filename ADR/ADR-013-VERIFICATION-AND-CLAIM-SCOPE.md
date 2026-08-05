# Verification and claim scope

- Decision date: 2026-08-05
- Scope: Axiom-0 reference contracts, methods, code, and verification

## 状态 / Status

[CN] 已接受；替代同名文件中的绝对化表述。

[EN] Accepted. This decision supersedes absolute or unverifiable language previously present in this file.

## 背景 / Context

[CN] A passing unit test proves only the tested configuration. Previous language generalized heuristic demos into universal safety, determinism, and convergence.

[EN] A passing unit test proves only the tested configuration. Previous language generalized heuristic demos into universal safety, determinism, and convergence.

## 决策 / Decision

[CN] Every completion claim names artifact revision, environment, command, result, and untested boundary. Separate behavior tests, security arguments, performance measurements, and scientific evidence. No single metric substitutes for them.

[EN] Every completion claim names artifact revision, environment, command, result, and untested boundary. Separate behavior tests, security arguments, performance measurements, and scientific evidence. No single metric substitutes for them.

## 后果 / Consequences

[CN] Reports become narrower but trustworthy.

[EN] Reports become narrower but trustworthy.

## 验证 / Verification

[CN] CI runs on Python 3.12 and 3.14; PRs list unrun tests and protected-path diff checks.

[EN] CI runs on Python 3.12 and 3.14; PRs list unrun tests and protected-path diff checks. A passing check is evidence for the stated configuration only; it is not a universal guarantee.

## 例外 / Exceptions

An exception requires a pull request naming its owner, expiry, affected threat or failure model, compensating control, verification, and rollback. Silent exceptions are invalid.