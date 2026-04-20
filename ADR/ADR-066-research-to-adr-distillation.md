# ADR-066 Research to ADR Distillation

- Status: Accepted
- Date: 2026-04-18
- Deciders: lostlight530 + AI copilot
- Scope: repository knowledge elevation

## Context

日度研究产物更新频率高
如果全部写入 ADR 会让 ADR 退化为灵感堆栈
需要明确哪些结论可以升级为架构决策

## Decision

只有满足以下条件的内容才可以进入 ADR

- 跨天重复出现
- 对仓库结构有持续影响
- 可定义为长期规则或边界
- 具有明确的替代方案排除逻辑

未满足条件的内容保留在 `RESEARCH` 或 `METHODOLOGY`

## Distillation Gate

```text
Research finding
  -> repeat across days
  -> affects structure or workflow
  -> decision has durable boundary
  -> eligible for ADR
```

## Rationale

- ADR 必须保持低频与高硬度
- 研究层允许高波动
- 方法论层允许高抽象
- ADR 负责最终边界冻结

## Consequences

- ADR 不会被高频灵感淹没
- 仓库知识层次更清晰
- 研究与决策间存在健康缓冲带

## Follow-up

- 在每日日白皮书末尾追加 `ADR Candidate` 段
- 每周执行一次 ADR 提升审查
