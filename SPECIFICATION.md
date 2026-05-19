# Axiom-0: ZECP 技术规范 / Axiom-0: ZECP Specification

---

## 零熵认知协议技术规范 (ZECP)
### Zero-Entropy Cognitive Protocol Technical Specification

---

## 1. 协议定义 / Protocol Definition
> **[CN]**: ZECP（Zero-Entropy Cognitive Protocol）是 Axiom-0 引擎的绝对物理法则。它彻底废除了以大模型为核心的高熵自由路由，规定复合 AI 系统的每一步动作都必须在硬编码的管线中可预测、可审计、且 100% 确定。
> 
> **[EN]**: The Zero-Entropy Cognitive Protocol (ZECP) is the absolute physical law of the Axiom-0 engine. It thoroughly abolishes high-entropy free routing centered on LLMs, mandating that every action of the compound AI system must be predictable, auditable, and 100% deterministic within a hardcoded pipeline.

---

## 2. 核心架构约束 / Core Architectural Constraints

### 2.1 大模型与智能体的物理隔离 (Physical Decoupling of LLM and Agent)
> **[CN]**: 系统视大模型（LLM）为“高危的概率外包组件”。LLM 绝对禁止直接修改系统状态或控制执行流。所有的智能体（Agent）内核必须由原生 Python、SQLite 和无锁队列构建。
> **[EN]**: The system treats Large Language Models (LLMs) as "high-risk probabilistic outsourced components". LLMs are absolutely forbidden from directly modifying system state or controlling execution flow. All Agent kernels must be built with native Python, SQLite, and lock-free queues.

### 2.2 10节点有向无环图 (10-Node Directed Acyclic Graph)
> **[CN]**: 彻底抛弃 ReAct 等内循环。所有计算从数据摄取（T-01）到结果综合（T-10）呈现严格的单向传递。中间任何一步的验证失败都必须触发物理异常和强制截断，绝不允许概率模型的“盲目重试”。
> **[EN]**: Thoroughly abandon inner loops like ReAct. All compute exhibits strict unidirectional transmission from ingestion (T-01) to synthesis (T-10). Any verification failure at intermediate steps must trigger physical exceptions and forced truncation; "blind retries" by probabilistic models are never allowed.

---

## 3. 技术指标 / Engineering Metrics

### 3.1 性能与确定性指标 (Performance & Determinism)
| 指标 (Metric) | 目标 (Target) | 测量方法 (Method) |
| :--- | :--- | :--- |
| **液态变形延迟 (Liquid Morphing Latency)** | ≤ 15ms | Internal benchmark (ADR-010) |
| **工具调用脱水 (MCP Dehydration Rate)** | 100% | Regex/AST Validation |
| **测试期计算剪枝率 (Test-Time Prune Rate)** | > 85% | Sandbox Exception Logging |
| **零熵收敛效率 (Zero-Entropy Convergence)** | $< 0.05$ KL | Core Continuum Output |

### 3.2 审计与安全 (Auditability & Security)
- **[CN]**: 状态转移的哈希锁定。每一次 T 节点的数据变异，必须生成不可篡改的密码学哈希链。
- **[EN]**: Hash-locking of state transitions. Every data mutation across T-nodes must generate an immutable cryptographic hash chain.

---

## 4. 关键验证算法 / Key Verification Algorithms

### 4.1 动态 KL 散度相干性 (Dynamic KL-Divergence Coherence)
> **[CN]**: 在 T-09 节点，系统计算当前执行流状态 $P(i)$ 与 ZECP 理想基线 $Q(i)$ 之间的 Kullback-Leibler 散度。如果 $D_{KL}(P\|Q) > 0.05$，系统立刻判定为“产生幻觉或熵增”，强制熔断并抛弃整个执行树。
> **[EN]**: At node T-09, the system computes the Kullback-Leibler divergence between the current execution flow state $P(i)$ and the ZECP ideal baseline $Q(i)$. If $D_{KL}(P\|Q) > 0.05$, the system immediately determines a "hallucination or entropy spike", forcefully trips the breaker, and discards the entire execution tree.

### 4.2 强类型沙盒锚定 (Strong-Type Sandbox Grounding)
- **[CN]**: T-07 节点的输出必须被编译为 Python 原生逻辑或 SQL 语句，并在隔离容器中进行运行前（AOT）验证。
- **[EN]**: Outputs from node T-07 must be compiled into native Python logic or SQL statements and subjected to ahead-of-time (AOT) verification within isolated containers.

---

## 5. 执行约束法则 / Operational Constraints Laws
- **Zero Black-Box**: 禁止任何隐藏的内部思维链（Hidden CoT）逃避审计。 / No hidden CoT can evade auditing.
- **Zero Redundancy**: 删除所有封装 API。代码仅通过基础原生库运作。 / Delete all wrapper APIs. Code operates solely via foundational native libraries.

---
*"Build it Brutally, Run it Deterministically"*
---

## 6. 知识分层架构 (Knowledge Stratification)

> **[CN]**: Axiom-0 仓库至少采用以下四层知识分层
> **[EN]**: Axiom-0 repository adopts at least the following four layers of knowledge stratification

> **[CN]**: 1. 研究 (Research)
> **[EN]**: 1. Research
> **[CN]**: 2. 方法论 (Methodology)
> **[EN]**: 2. Methodology
> **[CN]**: 3. ADR (架构决策记录)
> **[EN]**: 3. ADR
> **[CN]**: 4. 代码 (Code)
> **[EN]**: 4. Code

> **[CN]**: 说明：若后续需要接回自动化链，可以在此四层之外追加 Prompt and Automation 层。但本次落库切片不包含该部分。
> **[EN]**: Illustration: If you need to connect the automation chain later, you can add Prompt and Automation layers in addition to these four layers. However, this part of the library slice does not include this part.

---

## 7. 证据状态约束 (Evidence Status)

> **[CN]**: 系统允许四类状态标签，用于强制进行物理防伪与幻觉隔离。
> **[EN]**: Four types of status labels are allowed, used to force physical anti-counterfeiting and hallucination isolation.

- **[CN]**: `[REAL]` (真实的)
  - **[EN]**: REAL
- **[CN]**: `[NEXUS_ORIGINAL]`
  - **[EN]**: NEXUS_ORIGINAL
- **[CN]**: `[SPECULATIVE]` (投机性)
  - **[EN]**: SPECULATIVE
- **[CN]**: `[FICTIONAL_WRAPPER]` (虚构_包装器)
  - **[EN]**: FICTIONAL_WRAPPER

---

## 8. 上下文摄取法则 (Context Ingestion Rule)

> **[CN]**: 原始聊天或自由文本不得直接作为长期仓库资产。必须经过分类、路由、脱水与规范化改写。
> **[EN]**: Raw chat or free text may not be used directly as long-term repository assets. Must be classified, routed, dehydrated and standardized rewritten.

---

## 9. 代码层边界 (Code Layer Boundary)

> **[CN]**: `CODE/` 维持 reference implementation 定位。不承担吞并全部方法论与叙事世界观的任务。
> **[EN]**: `CODE/` maintains reference implementation location. Does not undertake the task of annexing all methodologies and narrative worldviews.
