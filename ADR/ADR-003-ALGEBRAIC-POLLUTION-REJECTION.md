# Fail-closed numeric contracts

- Decision date: 2026-08-05
- Scope: Axiom-0 reference contracts, methods, code, and verification

## 状态 / Status

[CN] 已接受；替代同名文件中的绝对化表述。

[EN] Accepted. This decision supersedes absolute or unverifiable language previously present in this file.

## 背景 / Context

[CN] KL calculations previously accepted negative and non-finite values and treated zero-total inputs inconsistently. Those are invalid probability measures.

[EN] KL calculations previously accepted negative and non-finite values and treated zero-total inputs inconsistently. Those are invalid probability measures.

## 决策 / Decision

[CN] Centralize validation in `CODE/contracts.py`: equal non-empty length, finite non-negative values, positive mass, normalization with `math.fsum`, and infinity for P support absent from Q.

[EN] Centralize validation in `CODE/contracts.py`: equal non-empty length, finite non-negative values, positive mass, normalization with `math.fsum`, and infinity for P support absent from Q.

## 后果 / Consequences

[CN] Invalid telemetry stops evaluation instead of producing a comforting score.

[EN] Invalid telemetry stops evaluation instead of producing a comforting score.

## 验证 / Verification

[CN] `tests/test_contracts.py` covers identity, renormalization, invalid values, and support mismatch.

[EN] `tests/test_contracts.py` covers identity, renormalization, invalid values, and support mismatch. A passing check is evidence for the stated configuration only; it is not a universal guarantee.

## 例外 / Exceptions

An exception requires a pull request naming its owner, expiry, affected threat or failure model, compensating control, verification, and rollback. Silent exceptions are invalid.