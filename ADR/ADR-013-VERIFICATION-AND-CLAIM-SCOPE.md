# Verification and claim scope

- Decision date: 2026-08-05
- Review calibration: 2026-08-24
- Scope: Axiom-0 reference contracts, methods, code, and evidence claims

## 状态 / Status

[CN] 已接受；替代同名文件中的绝对化表述。

[EN] Accepted. This decision supersedes absolute or unverifiable language previously present in this file.

## 背景 / Context

[CN] 单个检查、测试、扫描或指标只能证明其实际覆盖的配置和属性。历史表述曾把启发式演示推广为通用安全、确定性或收敛结论。

[EN] A single check, test, scan, or metric supports only the configuration and property it actually covers. Historical wording generalized heuristic demonstrations into universal safety, determinism, or convergence claims.

## 决策 / Decision

[CN] 每个完成或验证声明应明确关联到具体产物/修订、实际证据面、结果与未覆盖边界。行为证据、结构扫描、数值测量、安全论证和科学证据不得互相替代。

[EN] Every completion or verification claim must identify the concrete artifact/revision, the evidence surface actually used, its result, and the unobserved boundary. Behavioral evidence, structural scans, numerical measurements, security arguments, and scientific evidence are not interchangeable.

File presence, configuration presence, historical prose, or a generated completion statement is not execution evidence by itself.

## 后果 / Consequences

[CN] 报告会更窄，但能明确回答“到底验证了什么”。

[EN] Reports become narrower but can state exactly what was established.

## 验证 / Verification

Use the evidence surface appropriate to the claim and retain the result when the result matters to a later claim.

Examples:

- `scan_kl_divergence.py` supports its recorded KL cases
- `scan_consistency.py` supports the document-structure properties it checks
- `code_compliance.py` supports only the declared source-pattern rules it scans
- `scope_guard.py` supports only the declared path boundary it evaluates
- a research record supports its own point-in-time observation subject to source/provenance reconciliation

A passing result is evidence for the stated property and revision only; it is not a universal guarantee.

## 例外 / Exceptions

An exception requires an explicit owner, affected claim/failure model, bounded compensating evidence, and rollback or correction path. Silent exceptions are invalid.
