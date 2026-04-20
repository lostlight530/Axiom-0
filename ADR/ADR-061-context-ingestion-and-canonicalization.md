# ADR-061 Context Ingestion and Canonicalization

- Status: Accepted
- Date: 2026-04-18
- Deciders: lostlight530 + AI copilot
- Scope: Axiom-0 repository governance

## Context

Axiom-0 已经具备 `ADR` `AUTOMATION` `METHODOLOGY` `RESEARCH` `CODE` 的分层骨架
当前新增的大量上下文主要来自长期对话 其中包含世界观 术语 规则 自动化节拍 架构判断与衍生实现设想
如果把原始聊天记录直接塞进仓库 会同时引入高噪声 弱索引与低可维护性

## Decision

Axiom-0 不直接吸收原始对话文本
所有上下文必须先做规范化转译 再进入仓库的正式层级

允许进入仓库的正式形态只有以下五种

1  Methodology document
2  Automation contract
3  Research artifact
4  ADR
5  Reference implementation note or code

## Rationale

- 原始聊天具有高密度启发 但不是长期资产格式
- 规范化转译可以把灵感变成稳定接口
- 该决策与 Axiom-0 的 `0-Opacity` 与 `0-Redundancy` 原则一致

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

正向结果

- 仓库避免被聊天文本污染
- 后续自动化与索引可对齐
- ADR 与方法论形成稳定吸收通道

代价

- 每次吸收前都需要额外做一次分类与转译
- 初期文档维护成本会略升高

## Follow-up

- 在 `CODE/` 中实现轻量上下文分发器
- 在 `INDEX.md` 中挂出新入口
