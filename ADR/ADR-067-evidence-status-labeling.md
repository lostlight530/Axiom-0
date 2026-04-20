# ADR-067 Evidence Status Labeling

- Status: Accepted
- Date: 2026-04-18
- Deciders: lostlight530 + AI copilot
- Scope: content classification

## Context

Axiom-0 明确允许神话生成
但如果所有内容都不分层标记 后处理成本会快速上升
需要一个最低限度的证据状态标签系统

## Decision

统一采用四类标签

- REAL
- NEXUS_ORIGINAL
- SPECULATIVE
- FICTIONAL_WRAPPER

## Definitions

### REAL
有公开论文 官方文档 官方仓库或已确认实现支撑

### NEXUS_ORIGINAL
属于项目原创命名 原创结构 原创组合方式

### SPECULATIVE
基于现实技术脉络作出的前推性判断 尚未确证

### FICTIONAL_WRAPPER
故意使用高压叙事包装或假想实体承载灵感 不能当事实引用

## Rationale

- 标签不会扼杀创造力
- 标签能显著降低后处理成本
- 标签能帮助外部化时做快速筛选

## Consequences

- 研究稿可保留神话张力
- 后处理可快速定位风险段
- 方法论与研究层接口更清晰

## Follow-up

- 在 `AUTOMATION/output-contracts.md` 中增加 `evidence_status`
- 在日白皮书模板中加入标签位
