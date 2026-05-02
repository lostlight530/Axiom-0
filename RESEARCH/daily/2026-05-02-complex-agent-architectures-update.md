# 行业调研：复合 AI 系统的演进式编排与确定性协议 / Survey: Evolving Orchestration and Deterministic Protocols in Compound AI Systems

---

## 证据等级 / Evidence Status
**[REAL]** (Industry-wide research consensus & Zero-Entropy mapping)

---

## 摘要 / Executive Summary
> **[CN]**: 本调研剖析了 2025 年多智能体系统（MAS）架构的两大核心突破：**通信协议的标准化**（MCP 与 A2A）以及**演进式编排**（Evolving Orchestration，如“提线木偶 Puppeteer”范式）。我们将探讨为何传统的静态图与黑盒路由已被业界抛弃，并展示这些前沿理论如何完美映射到 Axiom-0 刚性的 10 节点连续体与液态变形（Liquid Morphing）机制中。
>
> **[EN]**: This survey dissects two core breakthroughs in 2025 Multi-Agent System (MAS) architectures: **Standardization of Communication Protocols** (MCP and A2A) and **Evolving Orchestration** (e.g., the "Puppeteer" paradigm). We explore why traditional static graphs and black-box routing have been abandoned by the industry, and demonstrate how these frontier theories map perfectly to Axiom-0's rigid 10-Node Continuum and Liquid Morphing mechanisms.

---

## 1. 痛点：多智能体的协同瘫痪 / The Pain Point: Collaboration Paralysis in MAS

> **[CN]**: 2024年的早期探索证明，随着智能体数量的增加，如果缺乏强制的中心化编排，系统会陷入无序的“通信风暴”。静态图拓扑（如早期的 ChatDev 瀑布流）在复杂任务面前过于僵化，而任由 LLM 自行决定路由则会导致算力通胀与严重的幻觉（高熵）。
>
> **[EN]**: Early 2024 explorations proved that as the number of agents increases, lacking forced centralized orchestration, the system descends into chaotic "communication storms." Static graph topologies (like early ChatDev waterfalls) are too rigid for complex tasks, while letting LLMs autonomously decide routing leads to compute inflation and severe hallucinations (high entropy).

---

## 2. 核心突破一：标准化通信协议 / Breakthrough 1: Standardized Communication Protocols

### 2.1 Model Context Protocol (MCP) 与 Agent-to-Agent (A2A)
- **业界现状**: 2025 年的学术研究（如《The Orchestration of Multi-Agent Systems》）确立了双重协议基础：**MCP** 用于规范智能体如何调用外部工具（确保 Schema 一致性和权限控制）；**A2A** 用于规范智能体之间的对等协作与任务委派。
- **Axiom-0 脱水映射**:
  - **[CN]**: 在 Axiom-0 中，我们早已拒绝了非结构化的 API 调用。MCP 协议完美映射至我们的 `T-02 (Provisioning)` 节点。所有的工具挂载必须通过强类型、无锁的队列进行，任何越权调用都会在物理层被切断。
  - **[EN]**: In Axiom-0, we have long rejected unstructured API calls. The MCP protocol maps perfectly to our `T-02 (Provisioning)` node. All tool mounts must occur via strongly-typed, lock-free queues, with any out-of-bounds invocations physically severed.

---

## 3. 核心突破二：演进式编排（提线木偶范式） / Breakthrough 2: Evolving Orchestration (The Puppeteer Paradigm)

### 3.1 动态拓扑与中心化决策 (Dynamic Topology and Centralized Decision)
- **业界现状**: 清华大学等机构在 2025 年提出的《Multi-Agent Collaboration via Evolving Orchestration》证明了“中心化提线木偶（Puppeteer）”的优越性。即由一个中心化的优化器，根据任务的动态状态（System State），实时决定下一步激活哪个智能体。通过强化学习（RL），系统会自发地向**高紧凑性（Compaction）**和**高循环性（Cyclicality）**演进，淘汰无用节点。
- **Axiom-0 脱水映射**:
  - **[CN]**: 业界的“Puppeteer”在 Axiom-0 中就是绝对的系统内核 `CODE/nexus_core.py`。我们不依赖 LLM 生成拓扑图，而是通过 `T-04 (Morphing)` 节点，实时计算系统负载（Load Score）和认知散度（KL-Divergence），强行“折叠”或“展开”计算流。
  - **[EN]**: The industry's "Puppeteer" is the absolute system kernel `CODE/nexus_core.py` in Axiom-0. We do not rely on LLMs to generate topology graphs; instead, via the `T-04 (Morphing)` node, we compute system load (Load Score) and cognitive divergence (KL-Divergence) in real-time, forcefully "folding" or "unfolding" the compute flow.

### 3.2 压实与循环：零熵的自然显现 (Compaction and Cyclicality: The Natural Emergence of Zero-Entropy)
- **[CN]**: 论文指出，经过训练的多智能体系统最终会减少冗余通信，收敛为少数核心智能体之间的高效循环。这在数学上证明了 Axiom-0 **“零熵原则 (0-Redundancy)”** 的必然性——去除非必要的环节，只保留有密码学签名的确定性工作流。
- **[EN]**: The paper notes that optimized MAS eventually reduces redundant communication, converging into highly efficient cycles among a few core agents. This mathematically proves the inevitability of Axiom-0's **"Zero-Entropy Principle (0-Redundancy)"**—eliminating unnecessary steps and preserving only cryptographically signed, deterministic workflows.

---
*"Architecture is Code, Protocol is Infrastructure"*
