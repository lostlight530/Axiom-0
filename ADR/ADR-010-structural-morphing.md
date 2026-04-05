# ADR-010: Axiom-0 结构变形 / ADR-010: Axiom-0 Structural Morphing

---

## 状态 / Status
**已采纳 (Accepted)**

---

## 背景 / Context
> **[CN]**: AI 系统不应该是一成不变的死代码。当任务变难时，系统应该能像变身一样，增加更多的计算节点来应对。
> 
> **[EN]**: Static architectures fail under architectural volatility. Axiom-0 requires dynamic topological plasticity to adapt its structural configuration (number of nodes, connection density) to real-time cognitive stressors.

---

## 决策 / Decision
> **[CN]**: 实现基于“液态逻辑”的结构变形。通过监控系统熵值与负载，在固态、液态、气态三种模式间自动切换。
> 
> **[EN]**: Implementation of structural morphing heuristics. The system autonomously modulates its internal graph topology based on load-score and entropy-delta triggers.

---

## 变形模式 / Morphing Modes

### 1. 固化模式 (SOLID)
- **[CN]**: 默认状态，最节省资源，结构最稳。
- **[EN]**: Maximum stability, minimal compute footprint. Fixed N-node topology.

### 2. 液态模式 (LIQUID)
- **[CN]**: 动态扩展，节点间连接更紧密，处理突发任务。
- **[EN]**: Dynamic scaling with high-density synaptic connectivity for burst-load mitigation.

### 3. 气态模式 (GAS)
- **[CN]**: 完全爆发，所有节点全力运转。
- **[EN]**: Maximum fragmentation and parallel compute distribution for extreme complexity.

---

## 后果 / Consequences

### 正面影响 (Positive)
- **极致伸缩性**: 动态适应极高或极低的计算需求。 / Elastic structural adaptation.
- **抗压性能强**: 自动扩展节点，防止单一节点瓶颈。 / Bottleneck elimination via runtime topology shifts.

### 负面影响 (Negative)
- **切换开销**: 变形过程大约需要 15-50ms 的延迟。 / 15-50ms morphing latency overhead.

---
*"Build it Brutally, Run it Deterministically"*
