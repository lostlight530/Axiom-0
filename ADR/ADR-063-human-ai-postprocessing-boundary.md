# ADR-063 Human AI Postprocessing Boundary

- Status: Accepted
- Date: 2026-04-18
- Deciders: lostlight530 + AI copilot
- Scope: Axiom-0 workflow governance

## Context

当前工作流并不追求第一步就得到保守的可引用报告
而是追求灵感密度
这意味着生成层与定型层必须明确分开

## Decision

采用双相工作流

Phase A  Mythic Generation
Phase B  Postprocessing and Dehydration

职责划分如下

### Phase A
由自动化系统负责

- 搜索与混合拼装
- 命名与抽象
- 日度白皮书草拟
- 假说生成
- 工程映射喷流

### Phase B
由人类与 AI 协同负责

- 纠错
- 去冗余
- 可执行化
- 归档
- 编号化
- 索引化

## Rationale

- 灵感喷流与文档定稿是两种不同任务
- 强行合并只会同时损失速度和质量
- Axiom-0 需要让生成与收敛两条链同时存在

## Consequences

正向结果

- 人机分工清晰
- 能保留灵感爆发强度
- 能逐步形成稳定资产

代价

- 需要维护 Phase A 与 Phase B 的接口
- 某些内容会以中间态存在一段时间

## Follow-up

- 在 `AUTOMATION/output-contracts.md` 中写清中间态格式
- 在 `METHODOLOGY/post-processing-and-dehydration.md` 中写清后处理规则
