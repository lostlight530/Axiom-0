# Axiom-0 ZECP Technical Specification

---

## 零熵认知协议技术规范 (ZECP) / Zero-Entropy Cognitive Protocol Technical Specification

---

## 1. 协议定义：绝对物理法则 / Protocol Definition: Absolute Physical Law
> **[CN]**: ZECP 是 Axiom-0 引擎的纯粹数学边界。它彻底废除了大模型的高熵自由路由，规定系统每一步动作必须在硬编码的管线中可审计且 100% 确定。
> **[EN]**: ZECP is the pure mathematical boundary of the Axiom-0 engine. It thoroughly abolishes high-entropy free routing of LLMs, mandating that every action must be auditable and 100% deterministic within a hardcoded pipeline.

## 2. 核心架构约束 / Core Architectural Constraints

### 2.1 不可逆 10 节点拓扑 (Irreversible 10-Node Topology)
> **[CN]**: 彻底抛弃内循环反馈机制。从摄取到最终呈现严格的单向传递。没有任何回退路径。
> **[EN]**: Thoroughly abandon inner loop feedback mechanisms. Strict unidirectional transmission from ingestion to finality. There are no fallback paths.

### 2.2 KL 散度硬审计 (KL Divergence Hard Auditing)
> **[CN]**: 系统测量流转状态与基线的 Kullback-Leibler 散度。$D_{KL} > 0.05$ 必须触发强行截断。
> **[EN]**: The system measures Kullback-Leibler divergence between state and baseline. $D_{KL} > 0.05$ must trigger forced truncation.

### 2.3 液态知识固化 (Liquid Knowledge Solidification)
> **[CN]**: 通过多层蒸馏，外部高熵信息强行凝固为 ADR，作为约束系统的物理法则沉淀。
> **[EN]**: Through multi-layer distillation, external high-entropy information forcefully solidifies into ADRs, precipitating as physical laws constraining the system.

## 3. 知识分层 / Knowledge Stratification
> **[CN]**: Axiom-0 仓库采用以下五层知识分层：
> **[EN]**: Axiom-0 repository adopts the following five layers of knowledge stratification:
1. **[CN]**: 提示与自动化 / **[EN]**: Prompt and Automation
2. **[CN]**: 研究 / **[EN]**: Research
3. **[CN]**: 方法论 / **[EN]**: Methodology
4. **[CN]**: ADR (架构决策记录) / **[EN]**: ADR (Architectural Decision Records)
5. **[CN]**: 代码 / **[EN]**: Code

## 4. 证据状态 / Evidence Status
> **[CN]**: 允许四类状态标签：
> **[EN]**: Four types of status labels are allowed:
- `REAL`: 真实的事实。
- `NEXUS_ORIGINAL`: Axiom-0 原创内容。
- `SPECULATIVE`: 投机性/推测性内容。
- `FICTIONAL_WRAPPER`: 虚构包装器。

## 5. 上下文摄取规则 / Context Ingestion Rule
> **[CN]**: 原始聊天或自由文本不得直接作为长期仓库资产。必须经过分类、路由、脱水与规范化改写。
> **[EN]**: Raw chat or free text may not be used directly as long-term repository assets. It must be classified, routed, dehydrated, and standardized through rewriting.

## 6. 代码层边界 / Code Layer Boundary
> **[CN]**: `CODE/` 维持参考实现（Reference Implementation）定位，不承担吞并全部方法论与叙事世界观的任务。
> **[EN]**: `CODE/` maintains its position as a Reference Implementation and does not undertake the task of annexing all methodologies and narrative worldviews.

---
*"Restraint is the ultimate form of digital violence."*
