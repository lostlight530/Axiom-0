# ADR-031: MSPP 并行归纳 / ADR-031: MSPP Integration

---

## 状态 / Status
**已采纳 (Accepted)**

---

## 背景 / Context
> **[CN]**: 一个个干活太慢了。我们需要让几个 AI 小组同时干活，然后再把结果快速、准确地对在一起。
> 
> **[EN]**: Sequential node execution creates temporal bottlenecks. Axiom-0 requires Multi-Stream Parallel Processing (MSPP) to enable concurrent cognitive threads without causal drift.

---

## 决策 / Decision
> **[CN]**: 引入 MSPP 全速集成。核心任务被分发到多个并行的认知流，并使用全局时钟进行对齐。
> 
> **[EN]**: Implementation of the MSPP core for concurrent node-execution. Causal consistency is enforced via a vector-clock registry.

---

## 关键架构 / Architecture

### 1. 并行流 (Parallel Streams)
- **[CN]**: 默认 8 条并行线。
- **[EN]**: Default 8-way architectural concurrency.

### 2. 状态映射 (State Mapping)
- **[CN]**: 合并结果时，置信度低的分支会被直接修剪。
- **[EN]**: Result merging utilizing the Axiom-0 Grounding (T-07) protocols.

---

## 后果 / Consequences

### 正面影响 (Positive)
- **翻倍的吞吐量**: 同样的时间干更多的活。 / 8x increase in execution throughput.
- **任务隔离**: 一个流崩了不会波及其他。 / Fault isolation across concurrent streams.

### 负面影响 (Negative)
- **同步压力**: 合并结果时需要极高的内存带宽。 / Increased memory contention during merge phases.

---
*"Build it Brutally, Run it Deterministically"*
