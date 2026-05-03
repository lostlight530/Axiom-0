# 方法论：LLM 与 Agent 的绝对物理剥离 / Methodology: Absolute Decoupling of LLM and Agent

---

## 核心定理 / Core Theorem
> **[CN]**: 现代 AI 工程发展的最大谬误，在于将大语言模型（LLM）等同于智能体（Agent）。在 Axiom-0 体系中，这两者必须在概念和物理层面彻底剥离：LLM 只是提供概率的“火花塞”，而 Agent 是容纳这些爆炸的“确定性发动机”。
>
> **[EN]**: The greatest fallacy in modern AI engineering is conflating Large Language Models (LLMs) with Agents. In the Axiom-0 continuum, these two entities must be absolutely decoupled both conceptually and physically: the LLM is merely the "probabilistic spark plug," while the Agent is the "deterministic engine" that contains the explosion.

---

## 1. 概念重组：什么是大模型？ / Conceptual Restructuring: What is an LLM?

> **[CN]**: LLM 是一个高熵的概率流形。它没有逻辑，没有记忆，没有真正的自我。它只是在拟合人类语言的统计学分布。
>
> **[EN]**: An LLM is a high-entropy probabilistic manifold. It has no logic, no memory, and no true self. It merely fits the statistical distribution of human language.

- **非确定性诅咒 (The Curse of Non-determinism)**:
  > **[CN]**: 同样的 Prompt，在不同温度或时间点，可能产生完全不同的输出。这种不可重现性在工业级自动化中是致命的。
  > **[EN]**: The same prompt can yield entirely different outputs across temperatures or times. This irreproducibility is fatal in industrial-grade automation.
- **上下文衰减 (Context Decay)**:
  > **[CN]**: LLM 的“记忆”是一种幻觉，完全依赖于滑动窗口内的 Attention 计算。当文本超过阈值，LLM 的精确寻址能力会呈指数级崩溃。
  > **[EN]**: LLM "memory" is a hallucination, relying entirely on Attention computation within a sliding window. Once text exceeds a threshold, the LLM's precise addressing capability collapses exponentially.
- **在 Axiom-0 中的定位 (Position in Axiom-0)**:
  > **[CN]**: LLM 的权限被剥夺至最低限度。它仅被视作一个“不稳定的语义编译器”，只在需要将人类语言翻译为结构化数据时被短暂调用。
  > **[EN]**: The LLM's authority is stripped to the bare minimum. It is treated merely as an "unstable semantic compiler," invoked briefly only when translating human language into structured data.

---

## 2. 概念重组：什么是智能体？ / Conceptual Restructuring: What is an Agent?

> **[CN]**: Agent 不是一段 Prompt，也不是一个 API 的包装层。Agent 是一个用原生代码构建的确定性操作系统（Deterministic OS）。
>
> **[EN]**: An Agent is not a prompt, nor an API wrapper. An Agent is a Deterministic Operating System built with native code.

- **硬核物理层 (The Hardcore Physical Layer)**:
  > **[CN]**: 在 Axiom-0 中，Agent 是纯 Python、SQLite 数据库、无锁环形队列和密码学哈希链的集合体。它负责维持绝对的执行顺序。
  > **[EN]**: In Axiom-0, the Agent is an amalgamation of pure Python, SQLite DBs, lock-free ring queues, and cryptographic hash chains. It maintains absolute execution order.
- **状态的绝对主权 (Absolute Sovereignty of State)**:
  > **[CN]**: 记忆不存储在 LLM 的上下文中，而是存储在 Agent 的 FTS5 关系型数据库中。Agent 决定给 LLM 看什么，而不是 LLM 决定自己记住什么。
  > **[EN]**: Memory is not stored in the LLM's context, but in the Agent's FTS5 relational database. The Agent decides what to show the LLM, not the LLM deciding what to remember.

---

## 3. 物理剥离法则 / The Laws of Physical Decoupling

> **[CN]**: 为了实现 100% 的可控性，Axiom-0 制定了不可逾越的隔离边界协议。
>
> **[EN]**: To achieve 100% controllability, Axiom-0 enforces insurmountable boundary isolation protocols.

- **法则一：禁止反向控制 (Law I: Forbid Reverse Control)**:
  > **[CN]**: LLM 永远不具有对宿主系统（文件系统、网络、进程调度）的直接控制权。所有工具调用（MCP）必须由 Agent 作为硬编码网关进行拦截、解析和验证。
  > **[EN]**: LLMs never possess direct control over the host system (file system, network, process scheduling). All tool calls (MCP) must be intercepted, parsed, and verified by the Agent acting as a hardcoded gateway.
- **法则二：强制零熵脱水 (Law II: Mandatory Zero-Entropy Dehydration)**:
  > **[CN]**: LLM 返回的任何字符串文本，在进入 Agent 的核心总线前，必须经过正则表达式、AST（抽象语法树）或 JSON Schema 的强解析。无法通过校验的文本将被物理丢弃。
  > **[EN]**: Any string text returned by the LLM must undergo strong parsing via Regex, AST, or JSON Schema before entering the Agent's core bus. Text failing validation is physically discarded.
- **法则三：状态机的单向性 (Law III: Unidirectionality of the State Machine)**:
  > **[CN]**: 系统流转由预定义的状态机（如 10 节点连续体）主导。LLM 的输出只是触发状态跃迁的条件参数，而不是创造新状态的发生器。
  > **[EN]**: System flow is dominated by predefined state machines (like the 10-Node Continuum). LLM outputs are merely conditional parameters triggering state transitions, not generators of new states.

---
*"We do not ask the model what to do; we command it to compute what is required."*