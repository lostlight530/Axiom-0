# Axiom-0: 零熵接入协议 / Zero-Entropy Contribution Protocol

> **[CN]**: 我们不欢迎灵感，我们只接收定理。
> **[EN]**: We do not welcome inspiration; we only accept theorems.

---

## 1. 认知基线审查 / Cognitive Baseline Audit

> **[CN]**: 在你准备 Fork 本仓库之前，请确保你已经完整阅读并理解了 `ADR/` 目录下的所有架构决策。Axiom-0 不是一个可以通过堆砌 if-else 或包装几个大模型 API 就能参与的游乐场。
> **[EN]**: Before you fork this repository, ensure you have fully read and comprehended all architectural decisions in the `ADR/` directory. Axiom-0 is not a playground where you can contribute by stacking if-else statements or wrapping a few LLM APIs.

- **[CN]**: **禁止“大模型思维”**：如果你认为 AI Agent 就是“把 Prompt 传给模型然后解析 JSON”，你的 PR 将被机器自动拒绝。
  - **[EN]**: **No "LLM Mentality"**: If you believe an AI Agent is simply "passing a prompt to a model and parsing JSON", your PR will be automatically rejected by the machine.
- **[CN]**: **概率隔离原则**：模型只允许作为极小作用域内的“概率火花塞”。核心流转、状态变异、路由控制必须是 100% 确定性的。
  - **[EN]**: **Probability Isolation**: Models are only permitted as "probabilistic spark plugs" within microscopic scopes. Core routing, state mutation, and control flow must be 100% deterministic.

## 2. 贡献规范：零熵法则 / Contribution Spec: Zero-Entropy Axioms

> **[CN]**: 所有的代码贡献必须服从绝对的物理剥离。任何试图在执行流中引入随机性的行为，都将被视为对系统的污染。
> **[EN]**: All code contributions must obey absolute physical decoupling. Any attempt to introduce randomness into the execution flow will be treated as systemic contamination.

1. **[CN]**: **零依赖 (0-Dependency)**：如果你引入了一个新的第三方 npm 包或 Python 库，你必须在 PR 中附带一篇超过 2000 字的论文，论证为什么 Axiom-0 原生的计算基元无法实现该功能。
   - **[EN]**: **0-Dependency**: If you introduce a new third-party npm or Python package, your PR must include a 2000+ word paper justifying why Axiom-0's native computational primitives cannot achieve the same functionality.
2. **[CN]**: **全域双语对仗 (Bilingual Symmetry)**：所有的文档修改（包括注释），必须严格遵循 `[CN]` 与 `[EN]` 的单行或块级镜像对称。格式不对称的 PR 会被直接销毁。
   - **[EN]**: **Bilingual Symmetry**: All documentation modifications (including comments) must strictly follow single-line or block-level mirror symmetry of `[CN]` and `[EN]`. Asymmetrical pull requests will be destroyed instantly.
3. **[CN]**: **无废话注释 (Zero-Noise Comments)**：代码注释只能描述“为什么（Why）”和“边界条件（Boundaries）”。如果你的代码需要注释来解释“是什么（What）”，说明你的抽象能力不及格。
   - **[EN]**: **Zero-Noise Comments**: Code comments may only describe the "Why" and "Boundaries". If your code requires comments to explain "What" it does, your abstraction skills have failed.

## 3. PR 审查漏斗 / The PR Funnel

> **[CN]**: 你的代码不会由人类首审。它将首先经过 Axiom-0 的 T-06 Analysis 节点进行形态反射验证。
> **[EN]**: Your code will not be initially reviewed by a human. It will first pass through Axiom-0's T-06 Analysis node for morphological reflection validation.

- **[CN]**: 只有通过了静态拓扑分析、KL散度幻觉拦截（ADR-004）以及全量离线仿真，才会被标记为 `[ZECP_VERIFIED]`。
  - **[EN]**: Only after passing static topological analysis, KL-Divergence hallucination interception (ADR-004), and full offline emulation will it be marked as `[ZECP_VERIFIED]`.
- **[CN]**: 如果你的 PR 存活到了人类审查阶段，请在描述中附带你的遥测图表截图。用数据说话，或者保持沉默。
  - **[EN]**: If your PR survives to the human review phase, attach a screenshot of your telemetry dashboard in the description. Speak with data, or remain silent.
