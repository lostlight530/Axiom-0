# ADR-002: 10 节点认知连续体架构 / ADR-002: 10-Node Cognitive Continuum Architecture

---

## 状态 / Status
**已采纳 (Accepted)**

---

## 背景 / Context
> **[CN]**: 传统 AI Agent 的执行流程通常依赖于一个巨大的黑盒 Prompt 配合不可控的模型输出，导致在处理复杂工程任务时极易迷失或产生幻觉。Axiom-0 需要将 AI 的思考过程“白盒化”，将其转化为工业级、流水线式的标准处理节点。
>
> **[EN]**: Traditional AI Agent execution workflows heavily rely on a monolithic black-box prompt coupled with non-deterministic model outputs, inevitably leading to catastrophic hallucinations during complex engineering tasks. Axiom-0 demands the "white-boxing" of the AI cognitive process, transforming it into an industrial-grade, pipelined sequence of standardized nodes.

---

## 决策 / Decision
> **[CN]**: 确立并强制执行 ZECP（Zero-Entropy Cognitive Protocol）的核心：10 节点连续体流转机制。任何输入数据都必须严格按照 T-01 到 T-10 的单向流水线进行处理。每个节点负责极其单一且明确的认知降维或转换任务，杜绝跨节点污染。
>
> **[EN]**: Establish and strictly enforce the core of ZECP: the 10-Node Continuum workflow. All input payloads must be processed sequentially through a unidirectional pipeline from T-01 to T-10. Each node handles a highly singular, mathematically definable cognitive reduction or transformation, absolutely forbidding cross-node contamination.

---

## 架构层级 / 10-Node Definitions

### 早期过滤 (Early Reduction)
- **T-01 Ingestion (摄取)**: 全局情报扫描与接口挂载。 / Universal intel ingestion.
- **T-02 Decomposition (分解)**: 将复杂意图拆解为原子化意图。 / Atomic intent fragmentation.
- **T-03 Abstraction (抽象)**: 剔除具象业务数据，提取逻辑骨架。 / Structural logic extraction.

### 动态路由与执行 (Dynamic Routing & Execution)
- **T-04 Morphing (形态变换)**: 评估系统熵值，在固/液/气/等离子间变换结构。 / Structural adaptation via environmental metrics.
- **T-05 Orchestration (编排)**: 资源与工具链的分发。 / MCP and toolchain distribution.
- **T-06 Analysis (分析)**: 视形态决定是否进行测试时计算（Test-Time Compute）深度反思。 / Hypothesis testing and test-time reflection.
- **T-07 Grounding (锚定)**: 将推演结果映射至确定的底层代码/数学函数。 / Deterministic mapping to bare-metal logic.
- **T-08 Execution (执行)**: 真实物理环境或沙盒的执行动作。 / Physical or sandboxed substrate execution.

### 零熵收敛 (Zero-Entropy Convergence)
- **T-09 Coherence (相干性验证)**: 动态 KL 散度验证，发现熵增即回滚。 / Dynamic KL-Divergence tracking and self-healing.
- **T-10 Synthesis (综合)**: 最终资产生成，状态哈希锁定。 / Final artifact generation and state hash locking.

---

## 后果 / Consequences

### 正面影响 (Positive)
- **绝对的确定性**: 每一个思考步骤的中间状态皆可被监控、打断或回滚。 / Absolute determinism and debuggability at every cognitive step.
- **极简责任边界**: 代码层面的极简耦合，任何节点的修改不会引发蝴蝶效应。 / Singular responsibility boundaries prevent butterfly-effect logic corruption.

### 负面影响 (Negative)
- **强制延迟**: 严格的 10 步流转在处理极简单问题时显得过于繁重。 / Processing simple queries suffers from forced pipeline latency.

---
*"Build it Brutally, Run it Deterministically"*
