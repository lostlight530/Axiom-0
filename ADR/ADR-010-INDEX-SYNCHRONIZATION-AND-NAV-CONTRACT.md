# Indexes are derived navigation

- Decision date: 2026-08-05
- Scope: Axiom-0 reference contracts, methods, code, and verification

## 状态 / Status

[CN] 已接受；替代同名文件中的绝对化表述。

[EN] Accepted. This decision supersedes absolute or unverifiable language previously present in this file.

## 背景 / Context

[CN] Navigation files can lag canonical artifacts and are also maintained by separate automation. Treating an index as authority creates conflicts.

[EN] Navigation files can lag canonical artifacts and are also maintained by separate automation. Treating an index as authority creates conflicts.

## 决策 / Decision

[CN] Canonical authority stays in the addressed file and tests. Indexes are derived, non-normative views updated only by their owning workflow. This change deliberately does not edit Jules-maintained indexes.

[EN] Canonical authority stays in the addressed file and tests. Indexes are derived, non-normative views updated only by their owning workflow. This change deliberately does not edit Jules-maintained indexes.

## 后果 / Consequences

[CN] Readers must follow links to authoritative content; automation ownership remains separated.

[EN] Readers must follow links to authoritative content; automation ownership remains separated.

## 验证 / Verification

[CN] Diff review confirms protected indexes are untouched and no validator derives policy from them.

[EN] Diff review confirms protected indexes are untouched and no validator derives policy from them. A passing check is evidence for the stated configuration only; it is not a universal guarantee.

## 例外 / Exceptions

An exception requires a pull request naming its owner, expiry, affected threat or failure model, compensating control, verification, and rollback. Silent exceptions are invalid.