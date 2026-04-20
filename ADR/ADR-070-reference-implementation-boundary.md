# ADR-070 Reference Implementation Boundary

- Status: Accepted
- Date: 2026-04-18
- Deciders: lostlight530 + AI copilot
- Scope: code layer positioning

## Context

Axiom-0 当前代码层已经被公开描述为 `Reference Implementation`
它的价值在于提供最小闭环和协议映射
而不是一次性吞下全部世界观

## Decision

保持 `CODE/` 目录的 reference implementation 定位
禁止把全部方法论和神话命名直接硬编码为庞大系统

代码层的优先事项为

- 最小可运行
- 接口清晰
- 可映射到文档
- 可独立测试
- 可逐步替换

## Rationale

- 过早产品化会拖垮文档层演化速度
- 当前阶段更需要协议固化与最小执行验证
- 参考实现更适合承接快速变化的方法论

## Consequences

- 代码层保持轻量
- 文档层可继续高速演进
- 仓库不会被过重实现绑死

## Follow-up

- 将上下文吸收器 日白皮书拼装器 ADR 注册表作为首批候选脚本
- 避免把所有叙事名词直接写进核心执行路径
