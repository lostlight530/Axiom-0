# 方法论：10 节点认知连续体 (The 10-Node Cognitive Continuum)

---

## 概述 / Overview
> **[CN]**: 现代多智能体系统（MAS）的彻底崩塌，往往源于过度自由的路由和黑盒式的循环推理（如 ReAct）。Axiom-0 通过建立一条单向、不可逆的 10 节点工业级计算管线（10-Node Cognitive Continuum），强制终结了 AI 的“自由散漫”。
> 
> **[EN]**: The catastrophic collapse of modern Multi-Agent Systems (MAS) often stems from overly permissive routing and black-box cyclic reasoning (e.g., ReAct). Axiom-0 forcefully terminates AI "insubordination" by establishing a unidirectional, irreversible 10-Node industrial computing pipeline.

---

## 为什么是单向流？ / Why a Unidirectional Flow?
> **[CN]**: 在概率计算中，任何形式的“循环图（Cyclic Graph）”都会导致错误的指数级累加。Axiom-0 采用有向无环图（DAG）的物理法则。计算只能从 T-01 流向 T-10，如果中间失败，不允许大模型“重试并思考（Think and Retry）”，而是直接物理中断，抛出硬编码异常，退回到全局安全状态。
>
> **[EN]**: In probabilistic computation, any form of a "Cyclic Graph" leads to exponential error accumulation. Axiom-0 adopts the physical law of a Directed Acyclic Graph (DAG). Compute strictly flows from T-01 to T-10. If a node fails, the LLM is not allowed to "Think and Retry"; instead, a physical interrupt occurs, a hardcoded exception is thrown, and the system rolls back to a global safe state.

---

## 核心生产节点定义 / The 10 Industrial Nodes Definition

### 第一阶段：信息剥离 (Phase 1: Information Dehydration)
- **T-01: 数据摄取 (Ingestion)**
  > **[CN]**: 通过高并发管道接入世界级的数据流，摒弃网页爬虫，直接采用裸机协议获取原始二进制或结构化数据。
  > **[EN]**: Accessing world-class data streams via high-concurrency pipelines, discarding web scrapers in favor of bare-metal protocols to retrieve raw binary or structured data.
- **T-02: 资源供给 (Provisioning)**
  > **[CN]**: 将外部工具和 API 以严格定义的 Model Context Protocol (MCP) 挂载到无锁队列中，禁止非结构化的随意调用。
  > **[EN]**: Mounting external tools and APIs into lock-free queues via the strictly defined Model Context Protocol (MCP), forbidding unstructured ad-hoc invocations.

### 第二阶段：认知降维 (Phase 2: Cognitive Reduction)
- **T-03: 特征抽象 (Abstraction)**
  > **[CN]**: 使用非生成式的降维算法（如 TF-IDF, FTS5）将输入的高熵文本转化为数学向量或关键词图谱，彻底脱水。
  > **[EN]**: Using non-generative reduction algorithms (e.g., TF-IDF, FTS5) to transform high-entropy text into mathematical vectors or keyword graphs, achieving complete dehydration.
- **T-04: 结构变形 (Morphing)**
  > **[CN]**: 根据系统负载，由物理核心决定当前拓扑形态（固态、液态等），决定后续流转是串行单线程还是无锁并行多线程。
  > **[EN]**: Based on system load, the physical core dictates the current topology (Solid, Liquid, etc.), deciding whether subsequent routing is serial single-threaded or lock-free parallel multi-threaded.

### 第三阶段：确定性推演 (Phase 3: Deterministic Deduction)
- **T-05: 编排与同步 (Orchestration & Synchronization)**
  > **[CN]**: 使用硬编码的状态机将任务分发到特定的处理单元。同时，同步全局图谱状态（Global State），确保所有并行分支看到的世界线是一致的。
  > **[EN]**: Distributing tasks to specific processing units using a hardcoded state machine. Concurrently, synchronizing the Global State to ensure all parallel branches observe a consistent worldline.
- **T-06: 分析与测试期计算 (Analysis & Test-Time Compute)**
  > **[CN]**: 执行核心推理任务。允许在特定的隔离沙盒内进行算力消耗（Test-Time Compute），但其过程必须受到物理验证的严格约束。
  > **[EN]**: Executing core reasoning tasks. Test-Time Compute is permitted within isolated sandboxes, but the process must be strictly constrained by physical verification.

### 第四阶段：物理边界收束 (Phase 4: Physical Boundary Convergence)
- **T-07: 逻辑锚定 (Grounding)**
  > **[CN]**: 将抽象的推演结果强行转化为可执行的 Python 代码或 SQL 语句，并在隔离的容器（Sandbox）中进行沙盒爆破测试。
  > **[EN]**: Forcefully translating abstract deductions into executable Python code or SQL statements, and performing sandbox blast-testing within isolated containers.
- **T-08: 物理执行与剪枝 (Execution & Pruning)**
  > **[CN]**: 如果 T-07 执行失败，立即剪枝（Pruning）该分支，不给幻觉任何生存空间；如果成功，则物理提交该改变。
  > **[EN]**: If T-07 execution fails, the branch is immediately pruned, leaving no room for hallucinations; if successful, the change is physically committed.

### 第五阶段：零熵对齐 (Phase 5: Zero-Entropy Alignment)
- **T-09: 认知相干性 (Coherence)**
  > **[CN]**: 测量当前状态与系统基线间的 KL 散度。如果散度超过 0.05 阈值，触发 `Dynamic Coherence Healing`（ADR-004）协议，拒绝输出。
  > **[EN]**: Measuring the KL-Divergence between the current state and the system baseline. If the divergence exceeds the 0.05 threshold, the `Dynamic Coherence Healing` protocol (ADR-004) is triggered, rejecting the output.
- **T-10: 结果综合与封存 (Synthesis & Sealing)**
  > **[CN]**: 系统达到“零熵锁定状态 (Zero-Entropy Locked State)”。输出通过密码学签名，永久封存于不可篡改的账本中。
  > **[EN]**: The system reaches the "Zero-Entropy Locked State". The output is cryptographically signed and permanently sealed in an immutable ledger.

---
*"Architecture is Code, Protocol is Infrastructure"*