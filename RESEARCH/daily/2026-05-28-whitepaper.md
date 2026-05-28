# 2026-05-28-whitepaper.md

## 1. 核心叙事 / Core Narrative

> **[CN]**: 随着多智能体研究系统的发展，基于大语言模型单次调用进行意图分类和概率路由的高熵妥协架构正在成为前沿系统的典型特征。
> **[EN]**: As multi-agent research systems evolve, high-entropy compromise architectures based on single LLM calls for intent classification and probabilistic routing are becoming typical features of frontier systems.

---

## 2. 证据清单 / Evidence Roster

### 事实资产 (Factual Assets)
- **[CN]**: **证据状态**: `[REAL]` - NVIDIA AI-Q Blueprint 建立在 NVIDIA NeMo Agent Toolkit 之上，采用两层研究架构，每一个查询都通过 Intent Classifier（意图分类器）进入。
- **[EN]**: **Evidence Status**: `[REAL]` - Built on the NVIDIA NeMo Agent Toolkit, the NVIDIA AI-Q Blueprint uses a two-tier research architecture where every query enters through an Intent Classifier.

- **[CN]**: **证据状态**: `[NEXUS_ORIGINAL]` - Axiom-0 拒绝概率路由，强制执行绝对确定的架构零熵标准，不依赖单次大语言模型调用进行核心调度。
- **[EN]**: **Evidence Status**: `[NEXUS_ORIGINAL]` - Axiom-0 rejects probabilistic routing, enforcing absolute deterministic architectural zero-entropy standards without relying on single LLM calls for core scheduling.

---

## 3. 脱水分析 (What -> Why -> Axiom-0 Dehydration)

### 3.1 WHAT (现象界定 / Phenomenon Definition)
> **[CN]**: NVIDIA AI-Q Blueprint 通过单次 LLM 调用来分类意图并决定是直接响应、进行浅层查找还是启动深度多智能体研究。
> **[EN]**: The NVIDIA AI-Q Blueprint classifies intent and decides whether to respond directly, perform a shallow lookup, or initiate a deep multi-agent investigation through a single LLM call.

### 3.2 WHY (原动力推演 / Prime Mover Deduction)
> **[CN]**: 该设计旨在保持简单查询的速度，同时为复杂主题保留多阶段深度研究，依赖 Intent Classifier 作为动态分配算力的路由中心。
> **[EN]**: This design aims to keep simple queries fast while reserving multi-phase deep research for complex topics, relying on the Intent Classifier as a routing center to dynamically allocate compute.

### 3.3 Axiom-0 投射 (Axiom-0 Projection)
> **[CN]**: 这种完全依赖语言模型作为 Intent Classifier 的状态机路由属于高熵妥协，缺乏确定的控制流，违背了 Axiom-0 的零熵原则。
> **[EN]**: This state machine routing, completely reliant on a language model as an Intent Classifier, is a high-entropy compromise lacking deterministic control flow, violating Axiom-0's zero-entropy principles.

---

## 4. 架构突变决议 / Architectural Mutation Resolution

- **[CN]**: **决议草案**: 彻底剥离任何依赖单次 LLM 调用（如 Intent Classifier）的动态路由逻辑，强制在零熵边界内采用纯数学控制流。
- **[EN]**: **Resolution Draft**: Completely strip away any dynamic routing logic dependent on single LLM calls (such as an Intent Classifier), enforcing pure mathematical control flows within the zero-entropy boundary.
- **[CN]**: **验证契约**: 所有的节点流转必须进行严格的测试，AOT 爆发测试中的 KL 散度必须保持 <= 0.05，确保控制流的零熵一致性。
- **[EN]**: **Verification Contract**: All node transitions must undergo rigorous testing, with KL divergence in AOT blast tests maintained at <= 0.05 to ensure zero-entropy consistency in control flows.