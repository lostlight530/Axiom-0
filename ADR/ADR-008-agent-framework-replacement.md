# ADR-008: 废除 ReAct 框架，确立 ZECP 管线 / ADR-008: Abolition of ReAct Framework in favor of ZECP Pipeline

---

## 状态 / Status
**已采纳 (Accepted)**

---

## 背景 / Context
> **[CN]**: 行业内普遍采用 ReAct (Reason + Act) 框架来构建 Agent。该框架依赖 LLM 在一个 prompt 循环中自主决定“思考（Thought）”、“行动（Action）”和“观察（Observation）”。然而，这种让 LLM 既当裁判又当运动员的做法，极易导致推理陷入死循环或产生幻觉。
>
> **[EN]**: The industry predominantly utilizes the ReAct (Reason + Act) framework to build Agents. This relies on the LLM autonomously deciding "Thought", "Action", and "Observation" within a single prompt loop. Allowing the LLM to act as both the executor and the adjudicator inevitably leads to infinite loops and massive hallucinations.

---

## 决策 / Decision
> **[CN]**: 在 Axiom-0 引擎中全面废除 ReAct 等基于 LLM 内部循环的 Agent 框架。确立 ZECP（Zero-Entropy Cognitive Protocol）10 节点连续体作为唯一合法的 Agent 执行框架。将“思考”与“行动”拆解并隔离在不同的物理原生节点中。
>
> **[EN]**: Abolish ReAct and all LLM-internal loop-based Agent frameworks within the Axiom-0 engine. Establish the ZECP 10-Node Continuum as the sole legitimate Agent execution framework. "Thought" and "Action" are decoupled and isolated into distinct, physically native nodes.

---

## 架构层级 / Framework Replacement

### 1. 从“内循环”到“外流水线” (From Inner Loop to Outer Pipeline)
- **[CN]**: ReAct 依赖 LLM 在一次长对话中完成逻辑闭环。ZECP 则用原生 Python 控制流（外循环）接管一切，LLM 只负责在特定的节点（如 T-03 特征抽象）提供单次、无状态的语义分析。
- **[EN]**: ReAct relies on the LLM completing a logical closed-loop within a long context. ZECP uses native Python control flow (outer loop) to orchestrate everything; the LLM provides singular, stateless semantic analysis only at specific nodes (e.g., T-03 Abstraction).

### 2. 剥离执行权 (Stripping Execution Authority)
- **[CN]**: 彻底收回大模型的工具调用权力。大模型只输出意图的概率分布，由 T-07 (逻辑锚定) 节点用刚性代码决定是否执行物理动作（T-08）。
- **[EN]**: Completely revoke tool-calling authority from the LLM. The LLM only outputs a probability distribution of intent; the T-07 Grounding node uses rigid code to determine if a physical action (T-08) should be executed.

---

## 后果 / Consequences

### 正面影响 (Positive)
- **破除死循环**: 用代码控制流替代大语言模型的自我纠缠，彻底杜绝 ReAct 常见的无意义重复。 / Breaks infinite loops. Replacing LLM self-entanglement with code control flow completely eliminates the meaningless repetitions common in ReAct.
- **极致的安全性**: 工具执行权完全掌握在底层代码手中，阻断了 Prompt 注入攻击引发的危险操作。 / Extreme security. Execution authority rests entirely with bare-metal code, blocking dangerous operations triggered by prompt injections.

### 负面影响 (Negative)
- **开发门槛高**: 无法使用 LangChain 等现成的黑盒库，必须手动编写底层流转逻辑。 / High development barrier. Cannot use off-the-shelf black-box libraries like LangChain; all low-level routing logic must be hand-rolled.

---
*"Build it Brutally, Run it Deterministically"*
