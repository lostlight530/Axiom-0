# ADR-068: Index Synchronization and Nav Contract

## 状态 / Status
Accepted

## 背景 / Context
> **[CN]**: 仓库文件增多导致索引失效。
> **[EN]**: Increasing repository files lead to index invalidation.

## 决策 / Decision
> **[CN]**: 强制执行 `INDEX.md` 与实际文件系统的同步校验，任何断链将触发系统熔断。
> **[EN]**: Enforce synchronization checks between `INDEX.md` and the actual file system; any broken link will trigger a system meltdown.
