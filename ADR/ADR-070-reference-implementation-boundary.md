# ADR-070 Reference Implementation Boundary

- **[CN]**: 状态：已接受
  - **[EN]**: Status: Accepted
- **[CN]**: 日期：2026-04-18
  - **[EN]**: Date: 2026-04-18
- **[CN]**: 决策者：lostlight530 + AI副驾驶
  - **[EN]**: Deciders: lostlight530 + AI copilot
- **[CN]**: 适用范围：代码层定位
  - **[EN]**: Scope: code layer positioning

## Context

> **[CN]**: Axiom-0 当前代码层已经被公开描述为 `Reference Implementation`
> **[EN]**: The current code layer of Axiom-0 has been publicly described as `Reference Implementation`
> **[CN]**: 它的价值在于提供最小闭环和协议映射
> **[EN]**: Its value lies in providing minimal closed loop and protocol mapping
> **[CN]**: 而不是一次性吞下全部世界观
> **[EN]**: Instead of swallowing the entire world view at once

## Decision

> **[CN]**: 保持 `CODE/` 目录的 reference implementation 定位
> **[EN]**: Keep the reference implementation located in the `CODE/` directory
> **[CN]**: 禁止把全部方法论和神话命名直接硬编码为庞大系统
> **[EN]**: It is forbidden to directly hardcode all methodologies and mythological names into huge systems

> **[CN]**: 代码层的优先事项为
> **[EN]**: The priorities for the code layer are

- **[CN]**: 最小可运行
  - **[EN]**: minimum runnable
- **[CN]**: 接口清晰
  - **[EN]**: Clear interface
- **[CN]**: 可映射到文档
  - **[EN]**: Can be mapped to documents
- **[CN]**: 可独立测试
  - **[EN]**: Can be independently tested
- **[CN]**: 可逐步替换
  - **[EN]**: Can be replaced gradually

## Rationale

- **[CN]**: 过早产品化会拖垮文档层演化速度
  - **[EN]**: Premature productization will slow down the evolution of the document layer
- **[CN]**: 当前阶段更需要协议固化与最小执行验证
  - **[EN]**: The current stage requires protocol solidification and minimum execution verification.
- **[CN]**: 参考实现更适合承接快速变化的方法论
  - **[EN]**: Reference implementation methodologies more suitable for undertaking rapid changes

## Consequences

- **[CN]**: 代码层保持轻量
  - **[EN]**: Keep the code layer lightweight
- **[CN]**: 文档层可继续高速演进
  - **[EN]**: The document layer can continue to evolve at a high speed
- **[CN]**: 仓库不会被过重实现绑死
  - **[EN]**: The warehouse will not be tied up by excessive implementation

## Follow-up

- **[CN]**: 将上下文吸收器 日白皮书拼装器 ADR 注册表作为首批候选脚本
  - **[EN]**: Contextual Absorber Day White Paper Assembler ADR Registry as first candidate script
- **[CN]**: 避免把所有叙事名词直接写进核心执行路径
  - **[EN]**: Avoid writing all narrative terms directly into the core execution path
