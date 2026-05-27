# ADR-061: Context Ingestion and Canonicalization

## 状态 / Status
Accepted

## 背景 / Context
> **[CN]**: 原始对话包含大量冗余熵。
> **[EN]**: Raw dialogue contains significant redundant entropy.

## 决策 / Decision
> **[CN]**: 所有输入必须经过 `nexus_core.py` 的脱水管线。
> **[EN]**: All input must pass through the dehydration pipeline of `nexus_core.py`.
