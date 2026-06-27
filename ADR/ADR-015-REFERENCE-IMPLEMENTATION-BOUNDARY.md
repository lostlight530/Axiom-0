# ADR-015: 参考实现边界法则 / Reference Implementation Boundary Law

## 状态 / Status
> **[CN]:** 绝对法则 (Absolute Law)
> **[EN]:** Absolute Law

## 背景 / Context
> **[CN]:** 代码库如果尝试承担所有方法论的论述和叙事世界观的构建，将变得臃肿且极难审计。代码必须保持纯粹性。
> **[EN]:** If the codebase attempts to shoulder the burden of all methodological discourse and narrative worldview construction, it will become bloated and extremely difficult to audit. Code must remain pure.

## 决策 / Decision
> **[CN]:** `CODE/` 目录严格维持“参考实现” (Reference Implementation) 的定位。它仅用于物理展示 DAG 拓扑、强制执行数学边界，绝不承担吞并理论和方法论叙事的任务。
> **[EN]:** The `CODE/` directory strictly maintains its position as a "Reference Implementation." It is solely used to physically demonstrate the DAG topology and enforce mathematical boundaries, never undertaking the task of annexing theoretical and methodological narratives.
