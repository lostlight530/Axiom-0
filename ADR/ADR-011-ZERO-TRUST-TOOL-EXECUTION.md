# Least-authority tool execution

- Decision date: 2026-08-05
- Scope: Axiom-0 reference contracts, methods, code, and verification

## 状态 / Status

[CN] 已接受；替代同名文件中的绝对化表述。

[EN] Accepted. This decision supersedes absolute or unverifiable language previously present in this file.

## 背景 / Context

[CN] Tool parameters and outputs cross trust boundaries. Prompt text, web content, and generated commands can contain hostile instructions.

[EN] Tool parameters and outputs cross trust boundaries. Prompt text, web content, and generated commands can contain hostile instructions.

## 决策 / Decision

[CN] Validate structured inputs; allowlist capabilities; scope credentials, filesystem, network, time, and cost; require confirmation for destructive or external effects; sanitize logs; retain replay identifiers without secrets.

[EN] Validate structured inputs; allowlist capabilities; scope credentials, filesystem, network, time, and cost; require confirmation for destructive or external effects; sanitize logs; retain replay identifiers without secrets.

## 后果 / Consequences

[CN] Some operations require extra approval and may fail closed.

[EN] Some operations require extra approval and may fail closed.

## 验证 / Verification

[CN] Security review exercises denied paths, quota/time limits, redacted logs, and deterministic error types.

[EN] Security review exercises denied paths, quota/time limits, redacted logs, and deterministic error types. A passing check is evidence for the stated configuration only; it is not a universal guarantee.

## 例外 / Exceptions

An exception requires a pull request naming its owner, expiry, affected threat or failure model, compensating control, verification, and rollback. Silent exceptions are invalid.