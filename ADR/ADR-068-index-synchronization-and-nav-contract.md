# ADR-068 Index Synchronization and Navigation Contract

- Status: Accepted
- Date: 2026-04-18
- Deciders: lostlight530 + AI copilot
- Scope: repository navigation

## Context

Axiom-0 已经把 `INDEX.md` 放在全局入口位置
如果新增文件而不同步索引 仓库很快会失去可导航性

## Decision

以下类型的新增内容必须同步更新 `INDEX.md`

- 新 ADR
- 新方法论文档
- 新自动化文档
- 新研究目录模板
- 新代码入口文件

## Navigation Rule

所有索引条目至少包含

- relative path
- short purpose
- layer label

## Rationale

- Axiom-0 是协议容器 不是文件堆
- 索引完整性直接决定可维护性
- 零熵原则要求高可见度与低迷失率

## Consequences

- 新增内容不会成为孤岛
- 仓库导航成本降低
- 文档吸收速度更快

## Follow-up

- 使用 `PATCH_INDEX.md`
- 未来可考虑生成式索引刷新脚本
