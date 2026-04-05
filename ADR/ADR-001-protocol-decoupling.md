# ADR-001: ZECP 协议解耦 / ADR-001: ZECP Protocol Decoupling

---

## 状态 / Status
**已采纳 (Accepted)**

---

## 背景 / Context
> **[CN]**: 以前的系统把逻辑、数据、界面全搅在一起，牵一发而动全身。Axiom-0 需要把这些东西拆开，让每个“零件”都能独立升级。
> 
> **[EN]**: Monolithic AI architectures suffer from extreme tight coupling, making modular evolution and verification impossible. Axiom-0 requires a layered interface-first design to enable the Zero-Entropy Cognitive Protocol (ZECP) to scale across heterogeneous substrates.

---

## 决策 / Decision
> **[CN]**: 将系统分为三层：记忆层、编排层、执行层。层与层之间只通过 ZECP 标准接口说话。
> 
> **[EN]**: Decouplication of the core engine into three distinct planes: Memory (Persistence), Orchestration (Logic Hierarchy), and Execution (Pluggable AI Models). Communication is restricted to ZECP-compliant RPC and events.

---

## 架构层级 / Architectural Planes

### 1. 记忆层 (Memory)
- **[CN]**: 负责数据的哈希校准与签名。
- **[EN]**: Deterministic persistence with HMAC-SHA256 integrity verification.

### 2. 编排层 (Orchestration)
- **[CN]**: Axiom-0 的核心，负责 10 节点周期运转。
- **[EN]**: The central control plane driving the 10-node recursive continuum.

### 3. 执行层 (Execution)
- **[CN]**: 真正的干活层，通过 MCP 协议挂载任何模型。
- **[EN]**: Pluggable node runtime utilizing the Model Context Protocol (MCP).

---

## 后果 / Consequences

### 正面影响 (Positive)
- **极高可观测性**: 每一层都在干什么一目了然。 / Maximum observability through layered telemetry.
- **零中断升级**: 升级一个 Agent 不会弄崩整个系统。 / Zero-downtime hot-swapping of cognitive nodes.

### 负面影响 (Negative)
- **初期复杂性**: 定义标准的接口需要更多时间。 / Increased initial overhead for protocol definition.

---
*"Build it Brutally, Run it Deterministically"*
