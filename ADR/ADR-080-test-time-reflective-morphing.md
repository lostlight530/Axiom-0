# ADR-080: 测试时计算与反思代理的结合 / ADR-080: Test-Time Compute and Reflective Agent Integration

---

## 状态 / Status
**已采纳 (Accepted)**

---

## 背景 / Context
> **[CN]**: 随着 2026 年测试时计算（Test-Time Compute）和反思代理架构的兴起，单次前向传递已无法满足复杂的认知需求。Axiom-0 需要在不破坏零熵原则的前提下，动态调整模型的推理深度，允许其在执行复杂任务时投入额外的计算资源进行自我反思、纠错和工具调用规划。
>
> **[EN]**: With the rise of test-time compute scaling and reflective agent architectures in 2026, single-pass forward propagation is insufficient for complex cognitive tasks. Axiom-0 must dynamically scale its inference depth without violating the zero-entropy principles, allowing the allocation of additional compute for self-reflection, error-correction, and strategic tool-use planning during complex tasks.

---

## 决策 / Decision
> **[CN]**: 在 Axiom-0 的编排层中引入“动态反思深度（Dynamic Reflection Depth）”机制，并与系统现有的结构变形（Structural Morphing）引擎解耦与联动。当系统处于较高负载或复杂状态（如液态或气态）时，不仅扩展节点，同时在节点内部延长推理循环，利用自我批评（Self-Critique）和过程奖励模型（Process Reward Models）保证输出的绝对正确性。
>
> **[EN]**: Introduce a "Dynamic Reflection Depth" mechanism within Axiom-0's orchestration plane, tightly coupled with the existing Structural Morphing engine. When the system operates under high cognitive load or complexity (e.g., LIQUID or GAS states), it scales not only structurally but also extends the internal inference loops. This enables iterative self-critique and leverages process reward models to guarantee deterministic output accuracy.

---

## 架构层级 / Architectural Enhancements

### 1. 测试时推演 (Test-Time Deliberation)
- **[CN]**: 在 T-06 分析与 T-07 锚定阶段之间，加入基于反思的动态循环。允许 AI 进行多步假设验证，而非一次生成。
- **[EN]**: Insert a dynamic reflection loop between T-06 Analysis and T-07 Grounding. Allows the AI to perform multi-step hypothesis verification instead of single-pass generation.

### 2. 反思内存与过程监控 (Reflective Memory & Process Monitoring)
- **[CN]**: 利用上下文工程与外部向量/文件缓存（如专用的反思内存分片），持续追踪系统的内部状态，避免在延长推理中产生熵增（幻觉）。
- **[EN]**: Utilize context engineering and external vector/file caches (e.g., dedicated reflection memory shards) to persistently track the system's internal state, preventing entropy inflation (hallucinations) during extended reasoning.

---

## 后果 / Consequences

### 正面影响 (Positive)
- **显著提升认知能力**: 赋予模型在关键任务上“深思熟虑”的能力，达到接近人类专家的纠错水平。 / Significantly boosts cognitive capabilities, granting models the ability to "think deeper" and achieve expert-level self-correction.
- **与形态变化的完美协同**: 充分利用了气态和液态下的计算资源突发，使资源利用率最大化。 / Perfect synergy with morphing states, maximizing resource utilization during compute bursts in GAS and LIQUID modes.

### 负面影响 (Negative)
- **延迟增加**: 测试时计算直接导致推理延迟显著增加。 / Test-time compute directly leads to a significant increase in inference latency.
- **计算成本飙升**: 多步反思和过程奖励评估会大幅推高 API 或硬件的消耗。 / Multi-step reflection and process reward evaluation drastically drive up API or hardware consumption.

---
*"Build it Brutally, Run it Deterministically"*
