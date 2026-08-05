# Reference implementation boundary

- Decision date: 2026-08-05
- Scope: Axiom-0 reference contracts, methods, code, and verification

## 状态 / Status

[CN] 已接受；替代同名文件中的绝对化表述。

[EN] Accepted. This decision supersedes absolute or unverifiable language previously present in this file.

## 背景 / Context

[CN] The Python modules demonstrate contracts but do not provide identity, durable storage, distributed coordination, isolation, or production telemetry.

[EN] The Python modules demonstrate contracts but do not provide identity, durable storage, distributed coordination, isolation, or production telemetry.

## 决策 / Decision

[CN] Keep the library dependency-free and deterministic where inputs are controlled. Callers own authentication, authorization, persistence, idempotency, resource limits, sandboxing, monitoring, and incident response.

[EN] Keep the library dependency-free and deterministic where inputs are controlled. Callers own authentication, authorization, persistence, idempotency, resource limits, sandboxing, monitoring, and incident response.

## 后果 / Consequences

[CN] The sample is easier to audit but intentionally incomplete as a service.

[EN] The sample is easier to audit but intentionally incomplete as a service.

## 验证 / Verification

[CN] Tests establish library behavior; deployment reviews must separately verify every caller-owned control.

[EN] Tests establish library behavior; deployment reviews must separately verify every caller-owned control. A passing check is evidence for the stated configuration only; it is not a universal guarantee.

## 例外 / Exceptions

An exception requires a pull request naming its owner, expiry, affected threat or failure model, compensating control, verification, and rollback. Silent exceptions are invalid.