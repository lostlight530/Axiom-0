# SPECIFICATION Patch Suggestion  Non Automation Slice

建议向 `SPECIFICATION.md` 补充以下内容

## Knowledge Stratification

Axiom-0 仓库至少采用以下四层知识分层

1  Research
2  Methodology
3  ADR
4  Code

说明
若后续需要接回自动化链 可以在此四层之外追加 Prompt and Automation 层
但本次落库切片不包含该部分

## Evidence Status

允许四类状态标签

- REAL
- NEXUS_ORIGINAL
- SPECULATIVE
- FICTIONAL_WRAPPER

## Context Ingestion Rule

原始聊天或自由文本不得直接作为长期仓库资产
必须经过分类 路由 脱水 与规范化改写

## Code Layer Boundary

`CODE/` 维持 reference implementation 定位
不承担吞并全部方法论与叙事世界观的任务
