# Canonical JSON without semantic mutation

- Decision date: 2026-08-05
- Scope: Axiom-0 reference contracts, methods, code, and verification

## 状态 / Status

[CN] 已接受；替代同名文件中的绝对化表述。

[EN] Accepted. This decision supersedes absolute or unverifiable language previously present in this file.

## 背景 / Context

[CN] Uppercasing and punctuation splitting changed payload meaning. Deterministic serialization is narrower than canonical meaning.

[EN] Uppercasing and punctuation splitting changed payload meaning. Deterministic serialization is narrower than canonical meaning.

## 决策 / Decision

[CN] Canonicalize JSON-compatible values with sorted keys, UTF-8, compact separators, and rejection of NaN/Infinity. Preserve original scalar content and attach a SHA-256 digest. Schema validation belongs at each public boundary.

[EN] Canonicalize JSON-compatible values with sorted keys, UTF-8, compact separators, and rejection of NaN/Infinity. Preserve original scalar content and attach a SHA-256 digest. Schema validation belongs at each public boundary.

## 后果 / Consequences

[CN] Equivalent mappings serialize consistently; semantically different strings remain different.

[EN] Equivalent mappings serialize consistently; semantically different strings remain different.

## 验证 / Verification

[CN] Contract tests assert stable Unicode serialization and digest behavior.

[EN] Contract tests assert stable Unicode serialization and digest behavior. A passing check is evidence for the stated configuration only; it is not a universal guarantee.

## 例外 / Exceptions

An exception requires a pull request naming its owner, expiry, affected threat or failure model, compensating control, verification, and rollback. Silent exceptions are invalid.