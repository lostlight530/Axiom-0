# Entropy as a measured risk signal

- Decision date: 2026-08-05
- Scope: Axiom-0 reference contracts, methods, code, and verification

## 状态 / Status

[CN] 已接受；替代同名文件中的绝对化表述。

[EN] Accepted. This decision supersedes absolute or unverifiable language previously present in this file.

## 背景 / Context

[CN] “Zero entropy” is retained only as project vocabulary. Real agent runs contain model, tool, network, data, and scheduler variability; the repository has no evidence for universal deterministic cognition.

[EN] “Zero entropy” is retained only as project vocabulary. Real agent runs contain model, tool, network, data, and scheduler variability; the repository has no evidence for universal deterministic cognition.

## 决策 / Decision

[CN] Treat entropy and divergence as named, unit-bearing measurements with declared samples, baselines, thresholds, and error behavior. Never use a zero score as proof of truth, safety, or convergence.

[EN] Treat entropy and divergence as named, unit-bearing measurements with declared samples, baselines, thresholds, and error behavior. Never use a zero score as proof of truth, safety, or convergence.

## 后果 / Consequences

[CN] This removes a strong slogan as an engineering guarantee, but makes results falsifiable and comparable.

[EN] This removes a strong slogan as an engineering guarantee, but makes results falsifiable and comparable.

## 验证 / Verification

[CN] Unit tests cover normalization, support mismatch, and configured divergence limits; reviews reject absolute claims.

[EN] Unit tests cover normalization, support mismatch, and configured divergence limits; reviews reject absolute claims. A passing check is evidence for the stated configuration only; it is not a universal guarantee.

## 例外 / Exceptions

An exception requires a pull request naming its owner, expiry, affected threat or failure model, compensating control, verification, and rollback. Silent exceptions are invalid.