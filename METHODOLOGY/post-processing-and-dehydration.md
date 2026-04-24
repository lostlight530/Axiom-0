# Post Processing and Dehydration

## Purpose

后处理不是削弱灵感
后处理是把灵感从高压气态压成可长期保存的结构

## Processing Stages

### Stage 1  Segmentation
把大段喷流内容切成最小语义块

### Stage 2  Classification
为每个块打标签

- REAL
- NEXUS_ORIGINAL
- SPECULATIVE
- FICTIONAL_WRAPPER

### Stage 3  Routing
将块路由到正确层级

- RESEARCH
- METHODOLOGY
- ADR
- CODE

### Stage 4  Dehydration
删除夸张但无效的叙事层
保留能长期复用的骨架

### Stage 5  Canonicalization
改写成仓库正式语法

## Heuristics

- 跨天稳定出现 才考虑 ADR
- 仅当天高压有效 进入 RESEARCH
- 属于长期工作方式 进入 METHODOLOGY
- 能最小运行 才进入 CODE

## Outcome

后处理完成后
仓库获得的是稳定资产 而不是聊天沉淀物
