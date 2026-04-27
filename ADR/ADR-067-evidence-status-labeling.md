# ADR-067 Evidence Status Labeling

- **[CN]**: 状态：已接受
  - **[EN]**: Status: Accepted
- **[CN]**: 日期：2026-04-18
  - **[EN]**: Date: 2026-04-18
- **[CN]**: 决策者：lostlight530 + AI副驾驶
  - **[EN]**: Deciders: lostlight530 + AI copilot
- **[CN]**: 范围：内容分类
  - **[EN]**: Scope: content classification

## Context

> **[CN]**: Axiom-0 明确允许神话生成
> **[EN]**: Axiom-0 explicitly allows myth generation
> **[CN]**: 但如果所有内容都不分层标记 后处理成本会快速上升
> **[EN]**: But if everything is not tagged in layers, post-processing costs will rise quickly.
> **[CN]**: 需要一个最低限度的证据状态标签系统
> **[EN]**: A minimal evidence status labeling system is needed

## Decision

> **[CN]**: 统一采用四类标签
> **[EN]**: Unified use of four types of labels

- **[CN]**: 真实的
  - **[EN]**: REAL
- **[CN]**: NEXUS_ORIGINAL
  - **[EN]**: NEXUS_ORIGINAL
- **[CN]**: 投机性
  - **[EN]**: SPECULATIVE
- **[CN]**: 虚构_包装器
  - **[EN]**: FICTIONAL_WRAPPER

## Definitions

### REAL
> **[CN]**: 有公开论文 官方文档 官方仓库或已确认实现支撑
> **[EN]**: There are public papers, official documents, official warehouses or confirmed implementation support.

### NEXUS_ORIGINAL
> **[CN]**: 属于项目原创命名 原创结构 原创组合方式
> **[EN]**: It belongs to the original naming, original structure and original combination method of the project.

### SPECULATIVE
> **[CN]**: 基于现实技术脉络作出的前推性判断 尚未确证
> **[EN]**: A forward-looking judgment based on actual technical context that has not yet been confirmed.

### FICTIONAL_WRAPPER
> **[CN]**: 故意使用高压叙事包装或假想实体承载灵感 不能当事实引用
> **[EN]**: Deliberately using high-pressure narrative packaging or imaginary entities to carry inspiration cannot be quoted as fact.

## Rationale

- **[CN]**: 标签不会扼杀创造力
  - **[EN]**: Labels don’t stifle creativity
- **[CN]**: 标签能显著降低后处理成本
  - **[EN]**: Labels can significantly reduce post-processing costs
- **[CN]**: 标签能帮助外部化时做快速筛选
  - **[EN]**: Tags help with quick filtering when externalizing

## Consequences

- **[CN]**: 研究稿可保留神话张力
  - **[EN]**: Research manuscripts can retain mythical tension
- **[CN]**: 后处理可快速定位风险段
  - **[EN]**: Post-processing can quickly locate risk segments
- **[CN]**: 方法论与研究层接口更清晰
  - **[EN]**: The interface between methodology and research layer is clearer

## Follow-up

- **[CN]**: 在 `AUTOMATION/output-contracts.md` 中增加 `evidence_status`
  - **[EN]**: Add `evidence_status` in `AUTOMATION/output-contracts.md`
- **[CN]**: 在日白皮书模板中加入标签位
  - **[EN]**: Add label space to Japanese white paper template
