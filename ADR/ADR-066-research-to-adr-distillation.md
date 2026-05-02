# ADR-066 Research to ADR Distillation

## 状态 / Status
**已采纳 (Accepted)**

- **[CN]**: 日期：2026-04-18
  - **[EN]**: Date: 2026-04-18
- **[CN]**: 决策者：lostlight530 + AI副驾驶
  - **[EN]**: Deciders: lostlight530 + AI copilot
- **[CN]**: 范围：知识库知识提升
  - **[EN]**: Scope: repository knowledge elevation

## 背景 / Context

> **[CN]**: 日度研究产物更新频率高
> **[EN]**: Daily research products are updated frequently
> **[CN]**: 如果全部写入 ADR 会让 ADR 退化为灵感堆栈
> **[EN]**: If all are written to ADR, ADR will degenerate into an inspiration stack.
> **[CN]**: 需要明确哪些结论可以升级为架构决策
> **[EN]**: It is necessary to clarify which conclusions can be upgraded to architectural decisions

## 决策 / Decision

> **[CN]**: 只有满足以下条件的内容才可以进入 ADR
> **[EN]**: Only content that meets the following conditions can enter ADR

- **[CN]**: 跨天重复出现
  - **[EN]**: Repeatedly across days
- **[CN]**: 对仓库结构有持续影响
  - **[EN]**: Have a lasting impact on the warehouse structure
- **[CN]**: 可定义为长期规则或边界
  - **[EN]**: Can be defined as long-term rules or boundaries
- **[CN]**: 具有明确的替代方案排除逻辑
  - **[EN]**: Have clear alternative elimination logic

> **[CN]**: 未满足条件的内容保留在 `RESEARCH` 或 `METHODOLOGY`
> **[EN]**: Content that does not meet the conditions remains in `RESEARCH` or `METHODOLOGY`

## Distillation Gate

```text
Research finding
  -> repeat across days
  -> affects structure or workflow
  -> decision has durable boundary
  -> eligible for ADR
```

## Rationale

- **[CN]**: ADR 必须保持低频与高硬度
  - **[EN]**: ADR must maintain low frequency and high hardness
- **[CN]**: 研究层允许高波动
  - **[EN]**: Research layer allows for high volatility
- **[CN]**: 方法论层允许高抽象
  - **[EN]**: The methodological layer allows for high abstraction
- **[CN]**: ADR 负责最终边界冻结
  - **[EN]**: ADR responsible for final border freeze

## Consequences

- **[CN]**: ADR 不会被高频灵感淹没
  - **[EN]**: ADR will not be overwhelmed by high frequency inspiration
- **[CN]**: 仓库知识层次更清晰
  - **[EN]**: Warehouse knowledge level is clearer
- **[CN]**: 研究与决策间存在健康缓冲带
  - **[EN]**: A healthy buffer zone exists between research and decision-making

## Follow-up

- **[CN]**: 在每日日白皮书末尾追加 `ADR Candidate` 段
  - **[EN]**: Add an `ADR Candidate` section at the end of the daily white paper
- **[CN]**: 每周执行一次 ADR 提升审查
  - **[EN]**: Conduct weekly ADR enhancement reviews
