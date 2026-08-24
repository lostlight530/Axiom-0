# Verification and claim scope

- Decision date: 2026-08-05
- Review calibration: 2026-08-24
- Scope: Axiom-0 reference contracts, methods, code, and verification

## 状态 / Status

[CN] 已接受；替代同名文件中的绝对化表述。

[EN] Accepted. This decision supersedes absolute or unverifiable language previously present in this file.

## 背景 / Context

[CN] A passing unit test proves only the tested configuration. Previous language generalized heuristic demos into universal safety, determinism, and convergence.

[EN] A passing unit test proves only the tested configuration. Previous language generalized heuristic demos into universal safety, determinism, and convergence.

## 决策 / Decision

[CN] Every completion claim names artifact revision, environment, command or verification path, result, and untested boundary. Separate behavior tests, security arguments, performance measurements, and scientific evidence. No single metric substitutes for them.

[EN] Every completion claim names artifact revision, environment, command or verification path, result, and untested boundary. Separate behavior tests, security arguments, performance measurements, and scientific evidence. No single metric substitutes for them.

A verification surface is evidence only when it actually ran and its result is available. The repository MUST NOT infer test execution from file presence, workflow configuration, a historical statement, or a model-generated completion claim.

## 后果 / Consequences

[CN] Reports become narrower but trustworthy.

[EN] Reports become narrower but trustworthy.

## 验证 / Verification

[CN] 对可执行行为的变更，应记录实际运行的命令、环境/版本、结果与未运行项；纯文档/证据维护则明确写明未运行测试。不得把不存在或未核实的 CI、矩阵或检查写成已执行证据。

[EN] For executable-behavior changes, record the commands actually run, environment/version, results, and unrun items. Documentation/evidence-only maintenance states explicitly when no tests were run. Do not describe an absent or unverified CI pipeline, test matrix, or check as executed evidence.

A passing check is evidence for the stated configuration only; it is not a universal guarantee.

## 例外 / Exceptions

An exception requires a pull request naming its owner, expiry, affected threat or failure model, compensating control, verification, and rollback. Silent exceptions are invalid.
