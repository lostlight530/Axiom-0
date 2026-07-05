# ADR-014: 仓库知识分层法则 / Repository Knowledge Stratification Law

## 状态 / Status
> **[CN]:** 绝对法则 (Absolute Law)
> **[EN]:** Absolute Law

## 背景 / Context
> **[CN]:** 随着系统运行，聊天记录、原始任务日志和高熵文本不断输入。如果允许这些未经验证的原始文本直接沉淀为仓库资产，Axiom-0 的基石将被迅速污染。这破坏了“零熵”原则。
> **[EN]:** As the system operates, chat logs, raw task manifests, and high-entropy text are continuously ingested. If such unverified raw text is allowed to solidify directly into repository assets, Axiom-0's foundation will be rapidly contaminated. This violates the "Zero-Entropy" principle.

## 决策 / Decision
> **[CN]:** 实施严格的 5 层知识分层结构（0-提示, 1-研究, 2-方法论, 3-ADR, 4-代码）。原始聊天文本绝不允许直接作为仓库资产。所有外部输入必须经过分类、路由、脱水和规范化后，方可成为高阶知识资产。
> **[EN]:** Implement a strict 5-layer knowledge stratification structure (0-Prompt, 1-Research, 2-Methodology, 3-ADR, 4-Code). Raw chat text is absolutely forbidden from becoming a repository asset directly. All external inputs must pass through classification, routing, dehydration, and canonicalization before becoming higher-order knowledge assets.


---
## 补充决议 / Supplementary Resolution (2026-07-05)

### 事实资产 (Factual Assets)
* **证据状态**: `[REAL]`
* **来源**: https://github.com/jamesob/local-llm
* **脱水描述**: Everything I know about running LLMs locally

### 架构投射 (Architectural Projection)
> **[CN]**: 根据 local-llm 的核心范式，Axiom-0 系统进一步确认了物理隔离与本地环境执行的必要性，防止因外部网络状态变化导致认知连续体（Cognitive Continuum）发生崩塌或信息熵溢出。
> **[EN]**: Based on the core paradigm of local-llm, the Axiom-0 system further validates the necessity of physical isolation and localized execution environments, preventing the cognitive continuum from collapsing or entropy overflowing due to external network state variations.
