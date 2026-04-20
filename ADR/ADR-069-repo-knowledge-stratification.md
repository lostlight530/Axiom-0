# ADR-069 Repo Knowledge Stratification

- Status: Accepted
- Date: 2026-04-18
- Deciders: lostlight530 + AI copilot
- Scope: repository knowledge architecture

## Context

当前仓库已经具备多层目录
但新增上下文如果没有清晰分层 容易在 `METHODOLOGY` `RESEARCH` `ADR` `CODE` 之间相互污染

## Decision

强制采用五层知识分层

1  Prompt and Automation
2  Research
3  Methodology
4  ADR
5  Code

## Boundary Definitions

### Prompt and Automation
任务调度 提示词 模板 输出契约

### Research
高频日度资产 论文映射 编程挑战 归档快照

### Methodology
项目方法论 生成原则 收敛策略

### ADR
长期边界与决定

### Code
参考实现 最小执行原型 工具脚本

## Rationale

- 五层足够覆盖当前项目状态
- 层间边界清晰 有利于长期扩展
- 与仓库现有目录天然对齐

## Consequences

- 内容投放位置更明确
- 文档与代码分离更健康
- 未来自动化吸收更容易

## Follow-up

- 在 `SPECIFICATION.md` 中正式写入分层定义
- 在 `INDEX.md` 中按层导航
