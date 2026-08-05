# Versioned DAG execution, not irreversible state

- Decision date: 2026-08-05
- Scope: Axiom-0 reference contracts, methods, code, and verification

## 状态 / Status

[CN] 已接受；替代同名文件中的绝对化表述。

[EN] Accepted. This decision supersedes absolute or unverifiable language previously present in this file.

## 背景 / Context

[CN] A fixed ten-stage order is useful for traceability, but production work needs retry, compensation, cancellation, and migration. “Irreversible” prevents safe recovery.

[EN] A fixed ten-stage order is useful for traceability, but production work needs retry, compensation, cancellation, and migration. “Irreversible” prevents safe recovery.

## 决策 / Decision

[CN] Represent the reference order as T-01 through T-10 events. Inputs and outputs are immutable records; execution state may be retried under a new run identifier. Side effects require idempotency keys or compensating actions outside this library.

[EN] Represent the reference order as T-01 through T-10 events. Inputs and outputs are immutable records; execution state may be retried under a new run identifier. Side effects require idempotency keys or compensating actions outside this library.

## 后果 / Consequences

[CN] More metadata is required; recovery becomes explicit and auditable.

[EN] More metadata is required; recovery becomes explicit and auditable.

## 验证 / Verification

[CN] `tests/test_nexus.py` checks ordered events. Integration owners must test idempotency and compensation for external effects.

[EN] `tests/test_nexus.py` checks ordered events. Integration owners must test idempotency and compensation for external effects. A passing check is evidence for the stated configuration only; it is not a universal guarantee.

## 例外 / Exceptions

An exception requires a pull request naming its owner, expiry, affected threat or failure model, compensating control, verification, and rollback. Silent exceptions are invalid.