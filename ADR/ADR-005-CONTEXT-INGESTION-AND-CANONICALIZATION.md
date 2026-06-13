# ADR-005: 上下文摄入与规范化法则 / Context Ingestion and Canonicalization Law

## 状态 / Status
> **[CN]:** 绝对法则 (Absolute Law)
> **[EN]:** Absolute Law

## 背景 / Context
> **[CN]:** 在无边界的网络环境中，输入流充满了不可靠的噪音与格式变异。如果直接将原生文本暴露给认知引擎，犹如将未过滤的脏水注入精密液压系统，将直接瘫痪核心推理链路。
> **[EN]:** In the boundless network environment, input streams are riddled with unreliable noise and formatting mutations. Exposing native text directly to the cognitive engine is akin to injecting unfiltered dirty water into a precision hydraulic system, which will directly paralyze the core reasoning pipeline.

## 决策 / Decision
> **[CN]:** 实施极端的 T-01 摄入截断。所有外部数据流必须经过强制的规范化（Canonicalization）处理，转换为统一的 AST（抽象语法树）或严格限定的 JSON Schema。任何带有冗余修饰或格式歧义的载荷将被无情丢弃，确保摄入层的绝对零熵。
> **[EN]:** Implement extreme T-01 ingestion truncation. All external data streams must undergo mandatory canonicalization, converted into unified ASTs (Abstract Syntax Trees) or strictly constrained JSON Schemas. Any payload bearing redundant embellishments or formatting ambiguity will be ruthlessly discarded, ensuring absolute zero-entropy at the ingestion layer.
