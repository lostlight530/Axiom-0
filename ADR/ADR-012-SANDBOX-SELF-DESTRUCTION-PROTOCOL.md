# Verified and recoverable cleanup

- Decision date: 2026-08-05
- Scope: Axiom-0 reference contracts, methods, code, and verification

## 状态 / Status

[CN] 已接受；替代同名文件中的绝对化表述。

[EN] Accepted. This decision supersedes absolute or unverifiable language previously present in this file.

## 背景 / Context

[CN] Self-destruction language encourages broad deletion and hides recovery requirements. Sandboxes may contain user data, credentials, or shared runtime state.

[EN] Self-destruction language encourages broad deletion and hides recovery requirements. Sandboxes may contain user data, credentials, or shared runtime state.

## 决策 / Decision

[CN] Resolve exact targets, prove containment within the owned workspace, delete only declared ephemeral artifacts, prefer recoverable removal, and record what was removed. Never compute a recursive target from an unverified variable.

[EN] Resolve exact targets, prove containment within the owned workspace, delete only declared ephemeral artifacts, prefer recoverable removal, and record what was removed. Never compute a recursive target from an unverified variable.

## 后果 / Consequences

[CN] Cleanup is more deliberate and may leave artifacts pending review.

[EN] Cleanup is more deliberate and may leave artifacts pending review.

## 验证 / Verification

[CN] Tests or dry runs enumerate targets; review checks absolute containment and rollback/backup strategy.

[EN] Tests or dry runs enumerate targets; review checks absolute containment and rollback/backup strategy. A passing check is evidence for the stated configuration only; it is not a universal guarantee.

## 例外 / Exceptions

An exception requires a pull request naming its owner, expiry, affected threat or failure model, compensating control, verification, and rollback. Silent exceptions are invalid.