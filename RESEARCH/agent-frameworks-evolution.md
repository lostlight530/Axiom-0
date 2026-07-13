# 行业调研：主流智能体框架演进与 Axiom-0 映射 / Survey: Mainstream Agent Frameworks Evolution and Axiom-0 Mapping

---

## 证据等级 / Evidence Status
**[REAL]** (Industry-wide research consensus & Zero-Entropy mapping)

---

## 摘要 / Executive Summary
> **[CN]**: 本数字考古报告系统回顾了自 2023 年至 2025 年间主流智能体（Agent）理论框架的演进路线,我们将深入探究业界如何从早期的单体框架（如 ReAct）艰难攀爬至多智能体协同，并展示 Axiom-0 如何将这些高熵的概率性框架进行脱水，重塑为零熵的底层协议,
>
> **[EN]**: This digital archaeology report systematically reviews the evolutionary trajectory of mainstream Agent theoretical frameworks from 2023 to 2025. We explore how the industry struggled from early monolithic frameworks (e.g., ReAct) to multi-agent synergy, and demonstrate how Axiom-0 dehydrates these high-entropy probabilistic frameworks into zero-entropy foundational protocols.

---

## 1. 做了什么：智能体框架的演进路线 / What Was Done: The Evolutionary Map of Agent Frameworks

> **[CN]**: 在追求自主通用人工智能的过程中，业界不断迭代智能体的内部循环机制,
>
> **[EN]**: In the pursuit of autonomous AGI, the industry continuously iterated the inner loop mechanisms of agents.

- **ReAct (Reason + Act) 范式**:
  > **[CN]**: 将推理（Thought）和行动（Action）结合在同一个 Prompt 循环中,模型输出想法，调用工具，获取观察（Observation），再继续思考,
  > **[EN]**: Combining reasoning (Thought) and action within the same Prompt loop. The model outputs a thought, calls a tool, gets an Observation, and continues thinking.
- **规划与执行 (Plan-and-Solve)**:
  > **[CN]**: 在行动前，先由 Planner 角色将复杂任务拆解为任务队列，然后交由 Executor 逐个执行,
  > **[EN]**: Before acting, a Planner role breaks down complex tasks into task queues, which are then sequentially executed by an Executor.
- **记忆增强与反思 (Memory-Augmented & Reflective)**:
  > **[CN]**: 引入 Vector DB 进行历史检索，并通过 Self-Critique（自我批评）允许模型进行内部纠错,
  > **[EN]**: Introducing Vector DBs for historical retrieval, and allowing the model to self-correct via Self-Critique.

---

## 2. 为什么做：掩盖 LLM 的内生缺陷 / Why It Was Done: Masking the Endogenous Flaws of LLMs

> **[CN]**: 框架演进的本质，是为了在应用层掩盖大模型底层的逻辑缺陷与记忆短板,
>
> **[EN]**: The essence of framework evolution is to mask the underlying logical flaws and memory shortcomings of LLMs at the application layer.

- **摆脱盲目执行 (Escaping Blind Execution)**:
  > **[CN]**: 早期的直接执行极易出错，ReAct 和 Plan-and-Solve 试图赋予模型“三思而后行”的能力，减少对不可逆环境（如数据库、API）的破坏,
  > **[EN]**: Early direct execution was highly error-prone; ReAct and Plan-and-Solve attempted to give models the ability to "look before they leap," reducing damage to irreversible environments (e.g., DBs, APIs).
- **缓解上下文遗忘 (Mitigating Context Forgetting)**:
  > **[CN]**: 通过外挂记忆体，试图突破 Transformer 架构固有的上下文窗口极限，以维持长周期的对话一致性,
  > **[EN]**: By attaching external memory, frameworks attempted to break the inherent context window limits of the Transformer architecture to maintain long-term conversational consistency.

---

## 3. Axiom-0 脱水与映射 / Zero-Entropy Dehydration and Axiom-0 Mapping

> **[CN]**: 尽管早期的框架尝试引入逻辑，但它们依然高度依赖模型自身的概率采样（如让 LLM 自己判断何时停止循环）,这在工业级高可用场景中是致命的,Axiom-0 将其视为过时的中间态，执行了绝对物理脱水,
>
> **[EN]**: Although early frameworks attempted to introduce logic, they still highly relied on the model's own probabilistic sampling (e.g., letting the LLM decide when to stop looping). This is fatal in industrial, high-availability scenarios. Axiom-0 views them as obsolete intermediate states and executed absolute physical dehydration.

- **彻底废除 ReAct 内部循环 (Abolition of the ReAct Inner Loop)**:
  > **[CN]**: 根据 `ADR-008`，Axiom-0 严禁将规划、执行和观察放在同一个 Prompt 中让模型自由发挥,我们将这个循环“切碎”，变成了物理上的节点传递：T-03（抽象）-> T-05（编排）-> T-07（接地执行）-> T-08（沙盒验证）,
  > **[EN]**: Per `ADR-008`, Axiom-0 strictly forbids putting planning, execution, and observation in the same Prompt for the model to free-wheel. We "shred" this loop into physical node transitions: T-03 (Abstraction) -> T-05 (Orchestration) -> T-07 (Grounding) -> T-08 (Execution).
- **从隐性反思到刚性验证 (From Implicit Reflection to Rigid Verification)**:
  > **[CN]**: Axiom-0 拒绝让模型自己说“我觉得我对了”,反思机制被脱水为 T-06（分析）和外循环测试期计算（Test-Time Compute）,验证不通过直接物理剪枝并退回，没有任何妥协和概率空间,
  > **[EN]**: Axiom-0 refuses to let the model self-proclaim "I think I am right." The reflection mechanism is dehydrated into T-06 (Analysis) and Outer Loop Test-Time Compute. Failed verification results in immediate physical pruning and rollback, leaving no room for compromise or probability.

---
*"To surpass the ecosystem, one must first dissect it."*

entropy=0
