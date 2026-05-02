# Post Processing and Dehydration

## Purpose

> **[CN]**: 后处理不是削弱灵感
> **[EN]**: Post-processing does not diminish inspiration
> **[CN]**: 后处理是把灵感从高压气态压成可长期保存的结构
> **[EN]**: Post-processing is to compress inspiration from a high-pressure gas state into a structure that can be preserved for a long time.

## Processing Stages

### Stage 1  Segmentation
> **[CN]**: 把大段喷流内容切成最小语义块
> **[EN]**: Cut large chunks of streaming content into smallest semantic chunks

### Stage 2  Classification
> **[CN]**: 为每个块打标签
> **[EN]**: Label each block

- **[CN]**: 真实的
  - **[EN]**: REAL
- **[CN]**: NEXUS_ORIGINAL
  - **[EN]**: NEXUS_ORIGINAL
- **[CN]**: 投机性
  - **[EN]**: SPECULATIVE
- **[CN]**: 虚构_包装器
  - **[EN]**: FICTIONAL_WRAPPER

### Stage 3  Routing
> **[CN]**: 将块路由到正确层级
> **[EN]**: Route blocks to the correct level

- **[CN]**: 研究
  - **[EN]**: RESEARCH
- **[CN]**: 方法论
  - **[EN]**: METHODOLOGY
- **[CN]**: 美国存托凭证
  - **[EN]**: ADR
- **[CN]**: 代码
  - **[EN]**: CODE

### Stage 4  Dehydration
> **[CN]**: 删除夸张但无效的叙事层
> **[EN]**: Remove exaggerated but ineffective narrative layers
> **[CN]**: 保留能长期复用的骨架
> **[EN]**: Keep skeletons that can be reused over the long term

### Stage 5  Canonicalization
> **[CN]**: 改写成仓库正式语法
> **[EN]**: Rewritten into warehouse formal syntax

## Heuristics

- **[CN]**: 跨天稳定出现 才考虑 ADR
  - **[EN]**: ADR will only be considered if it appears stably across the day.
- **[CN]**: 仅当天高压有效 进入 RESEARCH
  - **[EN]**: High pressure is valid only on that day. Enter RESEARCH
- **[CN]**: 属于长期工作方式 进入 METHODOLOGY
  - **[EN]**: It is a long-term working method. Enter METHODOLOGY
- **[CN]**: 能最小运行 才进入 CODE
  - **[EN]**: Only enter CODE when it can run at minimum.

## Outcome

> **[CN]**: 后处理完成后
> **[EN]**: After post-processing is completed
> **[CN]**: 仓库获得的是稳定资产 而不是聊天沉淀物
> **[EN]**: The warehouse obtains stable assets rather than chat sediment.

## Infrastructure Mapping
> **[CN]**: 所有的脱水后产物必须通过无锁单写者队列写入 SQLite，并使用 Merkle Chain 签名以确保 0-Opacity。
> **[EN]**: All dehydrated artifacts must be written to SQLite via the lock-free single-writer queue and signed using a Merkle Chain to ensure 0-Opacity.
