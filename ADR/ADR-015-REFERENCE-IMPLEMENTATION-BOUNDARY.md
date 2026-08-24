# Reference implementation boundary

- Decision date: 2026-08-05
- Review calibration: 2026-08-24
- Scope: Axiom-0 executable reference core and repository research interpretation

## 状态 / Status

[CN] 已接受；替代同名文件中的绝对化表述。

[EN] Accepted. This decision supersedes absolute or unverifiable language previously present in this file.

## 背景 / Context

[CN] Axiom 的 Python 模块实现了一组明确的参考合约，但并不提供完整智能体运行时、身份系统、持久化服务、分布式协调、隔离或生产遥测。

[EN] Axiom's Python modules implement explicit reference contracts but do not provide a complete agent runtime, identity system, durable state service, distributed coordination, isolation, or production telemetry.

The current executable center is concrete and small:

- `CODE/contracts.py` — canonical serialization, stable digest, distribution validation, KL divergence
- `CODE/liquid_morphing.py` — heuristic metric-to-state adaptation with serialized transition commit
- `CODE/nexus_core.py` — single-process ten-stage reference orchestration
- repository-side scanners/validators — narrow evidence surfaces for numerical, structural, source-pattern, path-scope, and research-record properties

## 决策 / Decision

[CN] 把仓库声明限制在这些真实实现边界内。受控输入上的确定性序列化或数值函数，不等同于“确定性认知”；状态标签和阈值是本地启发式；单进程事件流水线不等同于分布式运行时。

[EN] Keep repository claims inside those implemented boundaries. Deterministic serialization or numerical functions over controlled inputs are not deterministic cognition; state labels and thresholds are local heuristics; a single-process event pipeline is not a distributed runtime.

Caller-owned concerns remain outside the reference implementation, including authentication, authorization, durable persistence, idempotency across external effects, isolation, quotas, secret management, monitoring, and incident response.

## 后果 / Consequences

[CN] 参考实现更容易审计，也更明确地承认哪些能力不存在。

[EN] The reference implementation is easier to audit and more explicit about capabilities it does not provide.

Research documents may describe external protocols, agent architectures, evaluation methods, and state models as references. They must not silently upgrade those references into implemented repository features.

## 验证 / Verification

A verification statement must point to the exact implemented surface being examined.

Examples:

- canonicalization claims map to `CODE/contracts.py`
- morph-transition claims map to `CODE/liquid_morphing.py`
- ten-stage event-pipeline claims map to `CODE/nexus_core.py`
- KL numerical evidence maps to the exact vectors/function revision recorded by the relevant scan/artifact

If the implementation surface does not exist, use `REFERENCE_ONLY`, `DESIGN_CANDIDATE`, or another explicit non-implemented status rather than implementation language.

## 例外 / Exceptions

Any exception must name the exact capability being promoted beyond reference status and provide the concrete implementation/evidence that justifies that promotion. Silent capability promotion is invalid.
