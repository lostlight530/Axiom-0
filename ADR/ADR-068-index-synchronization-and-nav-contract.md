# ADR-068 Index Synchronization and Navigation Contract

- **[CN]**: 状态：已接受
  - **[EN]**: Status: Accepted
- **[CN]**: 日期：2026-04-18
  - **[EN]**: Date: 2026-04-18
- **[CN]**: 决策者：lostlight530 + AI副驾驶
  - **[EN]**: Deciders: lostlight530 + AI copilot
- **[CN]**: 范围：存储库导航
  - **[EN]**: Scope: repository navigation

## Context

> **[CN]**: Axiom-0 已经把 `INDEX.md` 放在全局入口位置
> **[EN]**: Axiom-0 has placed `INDEX.md` in the global entry location
> **[CN]**: 如果新增文件而不同步索引 仓库很快会失去可导航性
> **[EN]**: If you add files without synchronizing the index, the warehouse will quickly lose navigability.

## Decision

> **[CN]**: 以下类型的新增内容必须同步更新 `INDEX.md`
> **[EN]**: The following types of new content must be updated simultaneously in `INDEX.md`

- **[CN]**: 新 ADR
  - **[EN]**: New ADR
- **[CN]**: 新方法论文档
  - **[EN]**: New Methodology Document
- **[CN]**: 新自动化文档
  - **[EN]**: New automation documentation
- **[CN]**: 新研究目录模板
  - **[EN]**: New Research Catalog Template
- **[CN]**: 新代码入口文件
  - **[EN]**: New code entry file

## Navigation Rule

> **[CN]**: 所有索引条目至少包含
> **[EN]**: All index entries contain at least

- **[CN]**: 相对路径
  - **[EN]**: relative path
- **[CN]**: 短期目标
  - **[EN]**: short purpose
- **[CN]**: 图层标签
  - **[EN]**: layer label

## Rationale

- **[CN]**: Axiom-0 是协议容器 不是文件堆
  - **[EN]**: Axiom-0 is a protocol container, not a file heap
- **[CN]**: 索引完整性直接决定可维护性
  - **[EN]**: Index integrity directly determines maintainability
- **[CN]**: 零熵原则要求高可见度与低迷失率
  - **[EN]**: The zero entropy principle requires high visibility and low loss rate

## Consequences

- **[CN]**: 新增内容不会成为孤岛
  - **[EN]**: New content will not become an island
- **[CN]**: 仓库导航成本降低
  - **[EN]**: Warehouse navigation costs reduced
- **[CN]**: 文档吸收速度更快
  - **[EN]**: Documents are absorbed faster

## Follow-up

- **[CN]**: 使用 `PATCH_INDEX.md`
  - **[EN]**: Use `PATCH_INDEX.md`
- **[CN]**: 未来可考虑生成式索引刷新脚本
  - **[EN]**: Generative index refresh scripts may be considered in the future
