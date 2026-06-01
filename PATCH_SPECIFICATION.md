# SPECIFICATION Patch Suggestion  Non Automation Slice

> **[CN]**: 建议向 `SPECIFICATION.md` 补充以下内容
> **[EN]**: It is recommended to add the following content to `SPECIFICATION.md`

## Knowledge Stratification

> **[CN]**: Axiom-0 仓库至少采用以下四层知识分层
> **[EN]**: Axiom-0 warehouse adopts at least the following four layers of knowledge layering

> **[CN]**: 1 研究
> **[EN]**: 1  Research
> **[CN]**: 2 方法论
> **[EN]**: 2  Methodology
> **[CN]**: 3 架构决策记录
> **[EN]**: 3  ADR
> **[CN]**: 4 代码
> **[EN]**: 4  Code

> **[CN]**: 说明
> **[EN]**: illustrate
> **[CN]**: 若后续需要接回自动化链 可以在此四层之外追加 Prompt and Automation 层
> **[EN]**: If you need to connect the automation chain later, you can add Prompt and Automation layers in addition to these four layers.
> **[CN]**: 但本次落库切片不包含该部分
> **[EN]**: However, this part of the library slice does not include this part.

## Evidence Status

> **[CN]**: 允许四类状态标签
> **[EN]**: Four types of status labels are allowed

- **[CN]**: 真实的
  - **[EN]**: REAL
- **[CN]**: NEXUS_ORIGINAL
  - **[EN]**: NEXUS_ORIGINAL
- **[CN]**: 投机性
  - **[EN]**: SPECULATIVE
- **[CN]**: 虚构_包装器
  - **[EN]**: FICTIONAL_WRAPPER

## Context Ingestion Rule

> **[CN]**: 原始聊天或自由文本不得直接作为长期仓库资产
> **[EN]**: Raw chat or free text may not be used directly as long-term warehouse assets
> **[CN]**: 必须经过分类 路由 脱水 与规范化改写
> **[EN]**: Must be classified, routed, dehydrated and standardized rewritten

## Code Layer Boundary

> **[CN]**: `CODE/` 维持 reference implementation 定位
> **[EN]**: `CODE/` maintains reference implementation location
> **[CN]**: 不承担吞并全部方法论与叙事世界观的任务
> **[EN]**: Does not undertake the task of annexing all methodologies and narrative worldviews
Daily, Weekly, and Monthly protocol verifications added to tracking.
