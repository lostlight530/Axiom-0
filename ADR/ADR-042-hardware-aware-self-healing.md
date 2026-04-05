# ADR-042: HASH 硬件感知自愈 / ADR-042: HASH Protocol

---

## 状态 / Status
**已采纳 (Accepted)**

---

## 背景 / Context
> **[CN]**: 软件总会崩，硬件也会出问题。AI 系统需要能感觉到自己所在的机器是不是快冒烟了，然后在彻底崩掉之前，把自己挪到安全的地方。
> 
> **[EN]**: Legacy fault-tolerance ignores physical volatility. Axiom-0 requires the Hardware-Aware Self-Healing (HASH) protocol to detect environmental stressors (thermal, memory pressure) and trigger preemptive structural adaptation.

---

## 决策 / Decision
> **[CN]**: 实现 HASH 四层自愈机制。从硬件报错到应用层重启，全量自动化覆盖。
> 
> **[EN]**: Formal implementation of the 4-tier HASH schema across Hardware, OS, Runtime, and Application layers.

---

## 自愈层级 / Healing Tiers

### 1. L1-L2: 硬件与内核 (Hardware/Kernel)
- **[CN]**: 降频、降温、服务重置。
- **[EN]**: Thermal throttling and service restoration.

### 2. L3-L4: 运行时与应用 (Runtime/App)
- **[CN]**: 进程隔离、状态迁移。
- **[EN]**: Process isolation and state migration (Axiom-0 Grounding).

---

## 后果 / Consequences

### 正面影响 (Positive)
- **工业级稳定性**: 99.99% 的运行可用性。 / Industrial-grade uptime (99.99%).
- **极短恢复时间**: 故障恢复时间 (MTTR) < 30s。 / MTTR < 30s for complex failures.

### 负面影响 (Negative)
- **轻微监控负载**: 盯着硬件会多站 2-5% 的 CPU。 / 2-5% CPU monitoring overhead.

---
*"Build it Brutally, Run it Deterministically"*
