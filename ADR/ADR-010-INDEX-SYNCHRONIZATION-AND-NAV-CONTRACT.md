# ADR-010: 索引同步与导航契约法则 / Index Synchronization and Navigation Contract Law

## 状态 / Status
> **[CN]:** 绝对法则 (Absolute Law)
> **[EN]:** Absolute Law

## 背景 / Context
> **[CN]:** 在一个高度结构化的知识库中，孤立的 markdown 文件如果缺乏统一的中枢索引，将退化为散落的记忆碎片。无法被确切追踪和导航的信息等于不存在，这严重违反了系统的确定性原则。
> **[EN]:** In a highly structured knowledge repository, isolated markdown files lacking a unified central index will degenerate into scattered memory fragments. Information that cannot be accurately tracked and navigated equates to non-existence, severely violating the system's principle of determinism.

## 决策 / Decision
> **[CN]:** 任何知识节点的增删改必须伴随 INDEX.md 的同步重构。索引不仅是目录，它是 Axiom-0 连续体的“寻址寄存器”。我们确立导航契约：文档必须包含精确的锚点，索引必须实时映射拓扑结构。未被索引收录的节点被视为“无效孤儿进程”，将被后续的垃圾回收机制（Dead Code Elimination）无情抹杀。
> **[EN]:** Any addition, deletion, or modification of knowledge nodes must be accompanied by a synchronous reconstruction of `INDEX.md`. The index is not merely a directory; it is the "address register" of the Axiom-0 continuum. We establish a navigation contract: documents must contain precise anchors, and the index must map the topology in real-time. Nodes not included in the index are treated as "invalid orphan processes" and will be ruthlessly obliterated by subsequent garbage collection mechanisms (Dead Code Elimination).


---
## 补充决议 / Supplementary Resolution (2026-07-05)

### 事实资产 (Factual Assets)
* **证据状态**: `[REAL]`
* **来源**: https://github.com/jamesob/local-llm
* **脱水描述**: Everything I know about running LLMs locally

### 架构投射 (Architectural Projection)
> **[CN]**: 根据 local-llm 的核心范式，Axiom-0 系统进一步确认了物理隔离与本地环境执行的必要性，防止因外部网络状态变化导致认知连续体（Cognitive Continuum）发生崩塌或信息熵溢出。
> **[EN]**: Based on the core paradigm of local-llm, the Axiom-0 system further validates the necessity of physical isolation and localized execution environments, preventing the cognitive continuum from collapsing or entropy overflowing due to external network state variations.
