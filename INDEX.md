# Axiom-0: 全局索引中心 / Axiom-0: Global IndexHub

---

## 项目概览 / Project Index
> **[CN]**: Axiom-0 是一个零熵认知引擎的参考实现。本索引提供对所有架构文档、方法论、决策记录及核心代码的快速访问。
> **[CN]**:
> **[EN]**:
> **[EN]**: The Axiom-0 Global IndexHub provides centralized access to all architectural blueprints, methodologies, decision records, and reference implementations for the zero-entropy continuum engine.

---

## 1. 核心协议 / Core Protocol
- **[CN]**: **[README.md](./README.md)**: 概览与启动指南。 / Overview & Bootstrapping.
  - **[EN]**: **[README.md](./README.md)**: Overview and start-up guide. / Overview & Bootstrapping.
- **[CN]**: **[SPECIFICATION.md](./SPECIFICATION.md)**: ZECP 技术细节与指标。 / ZECP Spec & Metrics.
  - **[EN]**: **[SPECIFICATION.md](./SPECIFICATION.md)**: ZECP technical details and indicators. / ZECP Spec & Metrics.

---

## 2. 方法论 / Methodology
- **[CN]**: **[LLM 与 Agent 的绝对物理剥离](./METHODOLOGY/llm-agent-decoupling-theory.md)**: 阐述模型作为“概率火花塞”与 Agent 作为“确定性操作系统”的底层分离理论。 / The decoupled theory of LLMs and Agents.
  - **[EN]**: **[Absolute physical separation of LLM and Agent](./METHODOLOGY/llm-agent-decoupling-theory.md)**: Explain the underlying separation theory of the model as a "probabilistic spark plug" and the Agent as a "deterministic operating system". / The decoupled theory of LLMs and Agents.
- **[CN]**: **[10节点认知流](./METHODOLOGY/10-node-cognitive-flow.md)**: 工业级 10-node 流程定义。 / 10-Node Continuum Cycle.
  - **[EN]**: **[10-node cognitive flow](./METHODOLOGY/10-node-cognitive-flow.md)**: Industrial-grade 10-node process definition. / 10-Node Continuum Cycle.
- **[CN]**: **[测试期验证的外循环](./METHODOLOGY/test-time-verification-loop.md)**: 将计算扩展物理化。 / Deterministic Outer Loop.
  - **[EN]**: **[Deterministic Outer Loop for Test-Time Verification](./METHODOLOGY/test-time-verification-loop.md)**: Physicalizing compute scaling. / Deterministic Outer Loop.
- **[CN]**: **[零熵原则](./METHODOLOGY/zero-entropy-principles.md)**: Axiom-0 的核心设计哲学。 / Zero-Entropy Axioms.
  - **[EN]**: **[Zero-Entropy Principles](./METHODOLOGY/zero-entropy-principles.md)**: The core design philosophy of Axiom-0. / Zero-Entropy Axioms.

---

## 3. 决策记录 / Decision Records (ADRs)
- **[CN]**: **[ADR-002: 10节点连续体](./ADR/ADR-002-10-node-continuum.md)**: 工业流水线架构决策。 / 10-Node pipeline decision.
  - **[EN]**: **[ADR-002: 10-node continuum](./ADR/ADR-002-10-node-continuum.md)**: Industrial pipeline architecture decisions. / 10-Node pipeline decision.
- **[CN]**: **[ADR-003: 零熵脱水](./ADR/ADR-003-zero-entropy-dehydration.md)**: 强制数据降噪与清洗。 / Dehydration pipeline.
  - **[EN]**: **[ADR-003: Zero-entropy dehydration](./ADR/ADR-003-zero-entropy-dehydration.md)**: Forced data noise reduction and cleaning. /Dehydration pipeline.
- **[CN]**: **[ADR-004: 动态相干性自愈](./ADR/ADR-004-dynamic-coherence-healing.md)**: 基于 KL 散度的幻觉拦截。 / KL-Divergence healing.
  - **[EN]**: **[ADR-004: Dynamic coherence self-healing](./ADR/ADR-004-dynamic-coherence-healing.md)**: Illusion interception based on KL divergence. / KL-Divergence healing.
- **[CN]**: **[ADR-005: 裸机检索](./ADR/ADR-005-bare-metal-retrieval.md)**: 零依赖 FTS5 原生检索引擎。 / Bare-Metal Retrieval.
  - **[EN]**: **[ADR-005: Bare metal retrieval](./ADR/ADR-005-bare-metal-retrieval.md)**: Zero dependency FTS5 native retrieval engine. /Bare-Metal Retrieval.
- **[CN]**: **[ADR-006: 零拷贝图推理](./ADR/ADR-006-zero-copy-shared-memory.md)**: 绕过 GIL 的多核共享内存。 / Zero-Copy Shared Memory.
  - **[EN]**: **[ADR-006: Zero-copy graph inference](./ADR/ADR-006-zero-copy-shared-memory.md)**: Multi-core shared memory bypassing the GIL. / Zero-Copy Shared Memory.
- **[ADR-007: 无锁原生网关](./ADR/ADR-007-lock-free-http-gateway.md)**: 环形队列解决并发写锁。 / Lock-Free Gateway.
- **[CN]**: **[ADR-008: 废除 ReAct 框架](./ADR/ADR-008-agent-framework-replacement.md)**: 用 ZECP 刚性外循环替代 LLM 内部循环思考。 / Abolition of ReAct Framework.
  - **[EN]**: **[ADR-008: Abolish ReAct Framework](./ADR/ADR-008-agent-framework-replacement.md)**: Replace LLM inner loop thinking with ZECP rigid outer loop. / Abolition of ReAct Framework.
- **[CN]**: **[ADR-001: 协议解耦](./ADR/ADR-001-protocol-decoupling.md)**: 层级分离与接口规范。 / Decoupling.
  - **[EN]**: **[ADR-001: Protocol Decoupling](./ADR/ADR-001-protocol-decoupling.md)**: Layer separation and interface specification. /Decoupling.
- **[CN]**: **[ADR-010: 结构变形](./ADR/ADR-010-structural-morphing.md)**: 动态拓扑适应模式。 / Morphing.
  - **[EN]**: **[ADR-010: Structural Morphing](./ADR/ADR-010-structural-morphing.md)**: Dynamic topology adaptation mode. / Morphing.
- **[CN]**: **[ADR-020: 液态差分变形](./ADR/ADR-020-liquid-differential-morphing.md)**: 形态切换逻辑。 / Liquid States.
  - **[EN]**: **[ADR-020: Liquid Differential Morphing](./ADR/ADR-020-liquid-differential-morphing.md)**: Form switching logic. / Liquid States.
- **[CN]**: **[ADR-031: MSPP 集成](./ADR/ADR-031-mspp-integration.md)**: 并行流处理集成。 / MSPP Sync.
  - **[EN]**: **[ADR-031: MSPP integration](./ADR/ADR-031-mspp-integration.md)**: Parallel stream processing integration. /MSPP Sync.
- **[CN]**: **[ADR-042: HASH 自愈](./ADR/ADR-042-hardware-aware-self-healing.md)**: 硬件感知冗余自愈。 / Self-Healing.
  - **[EN]**: **[ADR-042: HASH self-healing](./ADR/ADR-042-hardware-aware-self-healing.md)**: Hardware-aware redundancy self-healing. / Self-Healing.
- **[CN]**: **[ADR-055: 边缘部署](./ADR/ADR-055-edge-deployment.md)**: 异构终端部署模式。 / Edge Tiers.
  - **[EN]**: **[ADR-055: Edge Deployment](./ADR/ADR-055-edge-deployment.md)**: Heterogeneous terminal deployment mode. /Edge Tiers.
- **[CN]**: **[ADR-080: 测试期反射变形](./ADR/ADR-080-test-time-reflective-morphing.md)**: 集体验证与变形机制。 / Reflective Morphing.
  - **[EN]**: **[ADR-080: Test-Time Reflective Morphing](./ADR/ADR-080-test-time-reflective-morphing.md)**: Collective verification and morphing mechanism. / Reflective Morphing.
- **[CN]**: **[ADR-060: DCA 对齐](./ADR/ADR-060-deep-cognitive-alignment.md)**: 深度认知对齐协议。 / Alignment.
  - **[EN]**: **[ADR-060: DCA Alignment](./ADR/ADR-060-deep-cognitive-alignment.md)**: Deep cognitive alignment protocol. /Alignment.

---

## 4. 设计逻辑与调查研究 / Design Logic & Investigations (Research)
> **[CN]**: 独立于核心标准的先导性研究、竞品调查与宏观架构思考。证明对通用 Agent 理论的深刻理解。 / Exploratory research, competitor investigations, and macro-architectural thinking, proving deep domain expertise.
- **[CN]**: **[LLM 固有痛点剖析](./RESEARCH/llm-inherent-limitations-survey.md)**: 概率坍塌、状态缺失与因果逻辑缺陷。 / Inherent limitations of LLMs.
  - **[EN]**: **[Analysis of LLM inherent pain points](./RESEARCH/llm-inherent-limitations-survey.md)**: Probability collapse, missing state and causal logic flaws. / Inherent limitations of LLMs.
- **[CN]**: **[主流 Agent 框架演进](./RESEARCH/agent-frameworks-evolution.md)**: 从 ReAct 到反思代理的理论演进与工程局限。 / Evolution and limitations of mainstream agent frameworks.
  - **[EN]**: **[Mainstream Agent Framework Evolution](./RESEARCH/agent-frameworks-evolution.md)**: From ReAct to reflection on the theoretical evolution and engineering limitations of agents. / Evolution and limitations of mainstream agent frameworks.
- **[CN]**: **[2026 Q1 架构分歧研报](./RESEARCH/RPT-2026-Q1-AGENT-ARCHITECTURE.md)**: Zero-Entropy 路线与 API 缝合路线的客观对比。 / External view on Zero-Entropy vs API Wrapper paths.
  - **[EN]**: **[2026 Q1 Architecture Divergence Research Report](./RESEARCH/RPT-2026-Q1-AGENT-ARCHITECTURE.md)**: An objective comparison of the Zero-Entropy route and the API stitching route. / External view on Zero-Entropy vs API Wrapper paths.
- **[CN]**: **[代理编排](./RESEARCH/agent-orchestration.md)**: 编排模型调研与 Nexus 回溯。 / Orchestration survey.
  - **[EN]**: **[Agent Orchestration](./RESEARCH/agent-orchestration.md)**: Orchestration model survey and Nexus backtracking. / Orchestration survey.
- **[CN]**: **[复合 AI 系统](./RESEARCH/compound-ai-systems.md)**: 架构理论与实证研究。 / Compound AI research.
  - **[EN]**: **[Compound AI Systems](./RESEARCH/compound-ai-systems.md)**: Architecture theory and empirical research. / Compound AI research.

---

## 5. 参考实现 / Code
- **[CN]**: **[Axiom-0 Core](./CODE/nexus_core.py)**: 10 节点离线仿真引擎。 / Core Continuum Orchestrator.
  - **[EN]**: **[Axiom-0 Core](./CODE/nexus_core.py)**: 10-node offline simulation engine. / Core Continuum Orchestrator.
- **[CN]**: **[Morphing Engine](./CODE/liquid_morphing.py)**: 液态变形协议实现。 / Liquid Morphing Lib.
  - **[EN]**: **[Morphing Engine](./CODE/liquid_morphing.py)**: Liquid morphing protocol implementation. / Liquid Morphing Lib.

---
> **[CN]**: *“残酷地构建它，确定性地运行它”*
> **[EN]**: *"Build it Brutally, Run it Deterministically"*
