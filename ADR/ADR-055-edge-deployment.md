# ADR-055: Axiom-0 边缘部署 / ADR-055: Axiom-0 Edge Deployment

---

## 状态 / Status
**已采纳 (Accepted)**

---

## 背景 / Context
> **[CN]**: AI 系统不能只蹲在机房里。它需要跑在各种地方，比如手机、工厂里的微型电脑、甚至车载系统。我们需要让它在不同的硬件上都能表现一致。
> 
> **[EN]**: Production AI must transcend high-compute data centers. Axiom-0 requires tiered deployment patterns adapted for heterogeneous infrastructure, from elastic cloud clusters to resource-constrained IoT edge devices.

---

## 决策 / Decision
> **[CN]**: 采用分层部署架构。根据具体的硬件能力，自动调整 Axiom-0 的计算分流与存储模式。
> 
> **[EN]**: Implementation of a 3-tier deployment hierarchy with environment-aware ZECP profiles.

---

## 部署分层 / Deployment Tiers

### 1. T1: 中央云端 (Central)
- **[CN]**: 全量核心集、长效存储、全局协调点。
- **[EN]**: Global coordination center with persistent storage (Axiom-0 Global).

### 2. T2: 区域中心 (Regional)
- **[CN]**: 中转路由、本地化缓存、低延迟分流。
- **[EN]**: Domain-specific hubs for localized caching and synchronization.

### 3. T3: 终端边缘 (Edge)
- **[CN]**: 极简跑活流、仅内存持久化、秒级推理。
- **[EN]**: Lightweight agents with strictly ephemeral state and sub-ms latency.

---

## 后果 / Consequences

### 正面影响 (Positive)
- **卓越的地理适应性**: 无论离云端多远，都能保持稳健。 / Geographical and network resilience.
- **极佳的延时表现**: 任务在最靠近用户的地方处理。 / Latency-optimized local execution.

### 负面影响 (Negative)
- **同步复杂度提高**: 边缘节点间需要更强的版本向量校准。 / Increased sync complexity across distributed shards.

---
*"Build it Brutally, Run it Deterministically"*
