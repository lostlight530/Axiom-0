# ADR-069 Repo Knowledge Stratification

- **[CN]**: 状态：已接受
  - **[EN]**: Status: Accepted
- **[CN]**: 日期：2026-04-18
  - **[EN]**: Date: 2026-04-18
- **[CN]**: 决策者：lostlight530 + AI副驾驶
  - **[EN]**: Deciders: lostlight530 + AI copilot
- **[CN]**: 范围：存储库知识架构
  - **[EN]**: Scope: repository knowledge architecture

## Context

> **[CN]**: 当前仓库已经具备多层目录
> **[EN]**: The current warehouse already has multi-level directories
> **[CN]**: 但新增上下文如果没有清晰分层 容易在 `METHODOLOGY` `RESEARCH` `ADR` `CODE` 之间相互污染
> **[EN]**: However, if the new context is not clearly layered, it is easy to contaminate each other among `METHODOLOGY` `RESEARCH` `ADR` and `CODE`

## Decision

> **[CN]**: 强制采用五层知识分层
> **[EN]**: Mandatory adoption of five layers of knowledge stratification

> **[CN]**: 1 提示和自动化
> **[EN]**: 1  Prompt and Automation
> **[CN]**: 2 研究
> **[EN]**: 2  Research
> **[CN]**: 3 方法论
> **[EN]**: 3  Methodology
> **[CN]**: 4  ADR
> **[EN]**: 4  ADR
> **[CN]**: 5  Code
> **[EN]**: 5  Code

## Boundary Definitions

### Prompt and Automation
> **[CN]**: 任务调度 提示词 模板 输出契约
> **[EN]**: Task Scheduling Prompt Word Template Output Contract

### Research
> **[CN]**: 高频日度资产 论文映射 编程挑战 归档快照
> **[EN]**: High Frequency Daily Assets Paper Mapping Programming Challenges Archive Snapshots

### Methodology
> **[CN]**: 项目方法论 生成原则 收敛策略
> **[EN]**: Project Methodology Generating Principles Convergence Strategies

### ADR
> **[CN]**: 长期边界与决定
> **[EN]**: Long-term boundaries and decisions

### Code
> **[CN]**: 参考实现 最小执行原型 工具脚本
> **[EN]**: Reference implementation, minimal execution prototype, tool script

## Rationale

- **[CN]**: 五层足够覆盖当前项目状态
  - **[EN]**: Five layers are enough to cover the current project status
- **[CN]**: 层间边界清晰 有利于长期扩展
  - **[EN]**: Clear boundaries between layers facilitate long-term expansion
- **[CN]**: 与仓库现有目录天然对齐
  - **[EN]**: Naturally aligned with existing directories in the warehouse

## Consequences

- **[CN]**: 内容投放位置更明确
  - **[EN]**: Content placement is clearer
- **[CN]**: 文档与代码分离更健康
  - **[EN]**: Separating documentation and code is healthier
- **[CN]**: 未来自动化吸收更容易
  - **[EN]**: Automation will be easier to absorb in the future

## Follow-up

- **[CN]**: 在 `SPECIFICATION.md` 中正式写入分层定义
  - **[EN]**: Formally write the hierarchical definition in `SPECIFICATION.md`
- **[CN]**: 在 `INDEX.md` 中按层导航
  - **[EN]**: Navigate by layer in `INDEX.md`
