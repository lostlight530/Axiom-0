# 行业调研：主流 Agent 框架演进与局限 / Survey: Evolution and Limitations of Mainstream Agent Frameworks

---

## 证据等级 / Evidence Status
**[SPECULATIVE]** (Industry-wide research consensus)

---

## 摘要 / Executive Summary
> **[CN]**: 本调研系统回顾了自 2023 年以来主流智能体（Agent）理论框架的演进路线，从 ReAct 到多 Agent 协同，并指出了这些通用框架在生产环境中的工程局限性。
>
> **[EN]**: This survey systematically reviews the evolutionary trajectory of mainstream Agent theoretical frameworks since 2023, spanning from ReAct to Multi-Agent architectures, and highlights their engineering limitations in production environments.

---

## 演进路线图 / Evolutionary Map

### 1. ReAct (Reason + Act) 范式
- **机制**: 将推理（Thought）和行动（Action）结合在同一个 Prompt 循环中。模型输出想法，调用工具，获取观察（Observation），再继续思考。
- **局限**: 过度依赖单一模型的上下文理解能力。容易陷入“调用失败 -> 错误重试 -> Token 耗尽”的死循环。缺乏底层的异常中断机制。

### 2. Plan-and-Solve (规划与执行)
- **机制**: 在行动前，先由 Planner 角色将大任务拆解为子任务图，然后交由 Executor 逐个执行。
- **局限**: 规划阶段如果是静态的，遇到执行期的动态异常（如网络波动、API 修改）时，系统缺乏弹性回退重构的能力。

### 3. 反思与进化代理 (Reflective Agents)
- **机制**: 引入 Self-Critique（自我批评）和 Process Reward Models（过程奖励模型），允许模型在输出最终答案前进行测试时计算（Test-Time Compute）。
- **局限**: 极大地增加了推理延迟和算力成本。如果评价模型（Evaluator）自身存在偏差，会导致系统向错误方向“过度拟合”。

### 4. 记忆增强范式 (Memory-Augmented Paradigms)
- **机制**: 采用 Vector DB 进行 RAG（检索增强生成），通过语义相似度召回历史片段。
- **局限**: 传统的线性向量检索容易造成“语义漂移”。缺乏拓扑图关联和事件的时间序列（Timeline）感知，导致长效记忆的提取常常答非所问。

---
*"To surpass the ecosystem, one must first dissect it."*
