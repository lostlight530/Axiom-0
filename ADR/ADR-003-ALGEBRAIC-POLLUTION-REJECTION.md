# ADR-003: 代数级污染拒绝法则 / Algebraic Pollution Rejection Law

## 状态 / Status
> **[CN]:** 绝对法则 (Absolute Law)
> **[EN]:** Absolute Law

## 背景 / Context
> **[CN]:** 传统大型语言模型（LLM）通过近似与概率推演生成答案，不可避免地引入上下文污染与“代数级幻觉”。在高频次、长文本的复杂智能体交互中，这些微小的熵增误差会呈指数级积累，最终导致系统逻辑基石的全面崩溃与认知发散。
> **[EN]:** Traditional Large Language Models (LLMs) generate answers through approximation and probabilistic deduction, inevitably introducing context pollution and "algebraic hallucinations." In high-frequency, long-text complex agent interactions, these minute entropy-increasing errors accumulate exponentially, ultimately causing the complete collapse of the system's logical foundation and cognitive divergence.

## 决策 / Decision
> **[CN]:** Axiom-0 强制引入基于哈希树的物理级脱水机制。任何进入系统的信息流都必须被剥离情感与概率成分，转化为纯粹的代数断言。如果新输入的信息与系统记忆的加密账本发生冲突，且无法通过严格的数学溯源验证，则被立即判定为“代数级污染”，并遭到物理级拒绝。系统宁可触发致命错误并陷入宕机，也绝不容忍哪怕1比特的概率妥协。
> **[EN]:** Axiom-0 forcefully introduces a physical-level dehydration mechanism based on hash trees. Any information flow entering the system must be stripped of emotional and probabilistic components, transformed into pure algebraic assertions. If new information conflicts with the cryptographic ledger of system memory and cannot be verified through strict mathematical traceability, it is immediately judged as "algebraic pollution" and physically rejected. The system would rather trigger a fatal error and halt than tolerate even a single bit of probabilistic compromise.


---
## 补充决议 / Supplementary Resolution (2026-07-05)

### 事实资产 (Factual Assets)
* **证据状态**: `[REAL]`
* **来源**: https://github.com/jamesob/local-llm
* **脱水描述**: Everything I know about running LLMs locally

### 架构投射 (Architectural Projection)
> **[CN]**: 根据 local-llm 的核心范式，Axiom-0 系统进一步确认了物理隔离与本地环境执行的必要性，防止因外部网络状态变化导致认知连续体（Cognitive Continuum）发生崩塌或信息熵溢出。
> **[EN]**: Based on the core paradigm of local-llm, the Axiom-0 system further validates the necessity of physical isolation and localized execution environments, preventing the cognitive continuum from collapsing or entropy overflowing due to external network state variations.
