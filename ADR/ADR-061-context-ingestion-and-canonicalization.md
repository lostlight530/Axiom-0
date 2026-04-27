# ADR-061 Context Ingestion and Canonicalization

- **[CN]**: 状态：已接受
  - **[EN]**: Status: Accepted
- **[CN]**: 日期：2026-04-18
  - **[EN]**: Date: 2026-04-18
- **[CN]**: 决策者：lostlight530 + AI副驾驶
  - **[EN]**: Deciders: lostlight530 + AI copilot
- **[CN]**: 范围：Axiom-0 存储库治理
  - **[EN]**: Scope: Axiom-0 repository governance

## Context

> **[CN]**: Axiom-0 已经具备 `ADR` `AUTOMATION` `METHODOLOGY` `RESEARCH` `CODE` 的分层骨架
> **[EN]**: Axiom-0 already has the layered skeleton of `ADR` `AUTOMATION` `METHODOLOGY` `RESEARCH` `CODE`
> **[CN]**: 当前新增的大量上下文主要来自长期对话 其中包含世界观 术语 规则 自动化节拍 架构判断与衍生实现设想
> **[EN]**: The large amount of context currently being added mainly comes from long-term conversations, which include worldviews, terminology, rules, automation beats, architectural judgments and derived implementation assumptions.
> **[CN]**: 如果把原始聊天记录直接塞进仓库 会同时引入高噪声 弱索引与低可维护性
> **[EN]**: If you put the original chat records directly into the warehouse, it will introduce high noise, weak indexing and low maintainability at the same time.

## Decision

> **[CN]**: Axiom-0 不直接吸收原始对话文本
> **[EN]**: Axiom-0 does not directly absorb the original dialogue text
> **[CN]**: 所有上下文必须先做规范化转译 再进入仓库的正式层级
> **[EN]**: All contexts must be standardized and translated before entering the formal level of the warehouse.

> **[CN]**: 允许进入仓库的正式形态只有以下五种
> **[EN]**: There are only five official forms that allow entry into the warehouse:

> **[CN]**: 1 份方法论文件
> **[EN]**: 1  Methodology document
> **[CN]**: 2 自动化合同
> **[EN]**: 2  Automation contract
> **[CN]**: 3 研究工件
> **[EN]**: 3  Research artifact
> **[CN]**: 4 美国存托凭证
> **[EN]**: 4  ADR
> **[CN]**: 5 参考实现说明或代码
> **[EN]**: 5  Reference implementation note or code

## Rationale

- **[CN]**: 原始聊天具有高密度启发 但不是长期资产格式
  - **[EN]**: Raw chat has high-density heuristics but is not a long-term asset format
- **[CN]**: 规范化转译可以把灵感变成稳定接口
  - **[EN]**: Standardized translation can turn inspiration into stable interfaces
- **[CN]**: 该决策与 Axiom-0 的 `0-Opacity` 与 `0-Redundancy` 原则一致
  - **[EN]**: This decision is consistent with Axiom-0’s `0-Opacity` and `0-Redundancy` principles

## Canonicalization Path

```text
Raw Context
  -> Context Slice
  -> Classification
      -> Methodology
      -> Automation
      -> Research
      -> ADR
      -> Code Candidate
  -> Index Registration
  -> Repository Commit
```

## Consequences

> **[CN]**: 正向结果
> **[EN]**: positive result

- **[CN]**: 仓库避免被聊天文本污染
  - **[EN]**: Warehouse avoids being polluted by chat text
- **[CN]**: 后续自动化与索引可对齐
  - **[EN]**: Subsequent automation and indexing can be aligned
- **[CN]**: ADR 与方法论形成稳定吸收通道
  - **[EN]**: ADR and methodology form a stable absorption channel

> **[CN]**: 代价
> **[EN]**: cost

- **[CN]**: 每次吸收前都需要额外做一次分类与转译
  - **[EN]**: An additional classification and translation is required before each absorption.
- **[CN]**: 初期文档维护成本会略升高
  - **[EN]**: Initial document maintenance costs will be slightly higher

## Follow-up

- **[CN]**: 在 `CODE/` 中实现轻量上下文分发器
  - **[EN]**: Implementing a lightweight context dispatcher in `CODE/`
- **[CN]**: 在 `INDEX.md` 中挂出新入口
  - **[EN]**: Make a new entry in `INDEX.md`
