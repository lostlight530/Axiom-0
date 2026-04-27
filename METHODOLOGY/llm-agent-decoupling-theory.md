# 方法论：LLM 与 Agent 的绝对物理剥离 / Methodology: Absolute Decoupling of LLM and Agent

---

## 核心定理 / Core Theorem
> **[CN]**: 现代 AI 工程的最大谬误在于将大语言模型（LLM）等同于智能体（Agent）。在 Axiom-0 体系中，这两者必须在概念和物理层面彻底剥离。
>
> **[EN]**: The greatest fallacy in modern AI engineering is conflating Large Language Models (LLMs) with Agents. In the Axiom-0 continuum, these two entities must be absolutely decoupled both conceptually and physically.

---

## 1. LLM 的本质定位：概率火花塞 (The LLM: A Probabilistic Spark Plug)

### 痛点剖析 (Pain Point Analysis)
- **非确定性 (Non-determinism)**: LLM 本质是一个预测下一个词的概率引擎。相同的输入永远无法保证 100% 相同的输出。
- **无状态性 (Statelessness)**: LLM 没有真实的记忆连续性，所谓的“记忆”完全依赖于上下文窗口的文本堆砌。
- **高熵变异 (High-Entropy Mutation)**: 随着对话轮数的增加，LLM 极易产生逻辑偏移、格式损坏和严重幻觉。

### 在 Axiom-0 中的限制规则 (Operational Constraints)
- **禁止控制权 (Zero Authority)**: 绝对禁止将系统调度、工具调用或文件读写的决策权交给 LLM。
- **定位降级 (Downgrade to Translator)**: LLM 仅被视为一个“不可靠的语义翻译外包组件”。系统仅在需要处理模糊人类语言时调用它，并立即抛弃其附带的任何非必要文本。

---

## 2. Agent 的本质定位：确定性操作系统 (The Agent: A Deterministic OS)

### 概念重构 (Concept Reconstruction)
- **硬核基座 (Bare-Metal Chassis)**: Agent 是由原生 Python、SQLite、内存映射和零拷贝架构组成的刚性物理基座。
- **状态主权 (State Sovereignty)**: Agent 掌控绝对的数据状态和历史记忆（依靠 FTS5 和 Merkle Chain），它是长期稳定存在的“系统意识”。

### 协作范式 (Collaboration Paradigm)
- Agent 控制着一条拥有 10 个节点的流水线（ZECP）。
- 当流水线运行到需要提取语义的节点时，Agent 向 LLM 发送被严格格式化的请求。
- 拿到 LLM 返回的“概率结果”后，Agent 立即执行“数据脱水（Dehydration）”，将其洗净为标准的哈希或指令代码，继续在确定性的原生代码中向下流转。

---
*"The LLM provides the spark; the Agent builds the engine to contain the explosion."*
