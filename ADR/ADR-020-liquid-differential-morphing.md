# ADR-020: 差分变形逻辑 / ADR-020: Differential Morphing Logic

---

## 状态 / Status
**已采纳 (Accepted)**

---

## 背景 / Context
> **[CN]**: 结构变形不能是粗糙的“全开或全关”。我们需要一种更精细的办法，根据各部分的实际压力，局部地调整形态。
> 
> **[EN]**: Global morphing is computationally expensive. Axiom-0 requires a differential approach, modulating the topology of individual sub-clusters based on localized entropy-deltas.

---

## 决策 / Decision
> **[CN]**: 实现“液态差分”算法。计算每个节点的“热度”，只让压力大的地方发生变形。
> 
> **[EN]**: Formal implementation of the Liquid Differential Morphing (LDM) algorithm. Transition logic is triggered by the local entropy gradient rather than global load scores.

---

## 逻辑细节 / Logic Detail

### 1. 差分触发 (Differential Trigger)
- **[CN]**: 指标从 0.85 突变到 0.95 时，自动裂变。
- **[EN]**: Sudden micro-spikes (10% delta) trigger sub-cluster fragmentation.

### 2. 状态保持 (State Persistence)
- **[CN]**: 变形时，核心记忆同步不能中断。
- **[EN]**: Atomic state synchronization across the transition boundary (Axiom-0 Persistence).

---

## 后果 / Consequences

### 正面影响 (Positive)
- **更高的能源效率**: 只变需要变的地方。 / Localized resource optimization.
- **平滑切换**: 减少全局锁竞争。 / Reduced lock-contention during topological shifts.

### 负面影响 (Negative)
- **算法复杂性**: 计算差分梯度需要额外的轻量级监控。 / Minor overhead for localized gradient monitoring.

---
*"Build it Brutally, Run it Deterministically"*
