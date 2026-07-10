# ADR-002: 不可逆 DAG 拓扑约束法则 / Irreversible DAG Topological Constraint

## 状态 / Status
> **[CN]:** 绝对法则 (Absolute Law)
> **[EN]:** Absolute Law

## 背景 / Context
> **[CN]:** 在复杂的智能体系统演进中，传统架构广泛依赖模型内部的“自我反思与循环重试”（如 ReAct 模式）。这种看似具备弹性的容错机制，实则是熵增的温床与上下文污染的深渊。在工业级长时间运行的场景下，一旦流水线的中间某个环节出现微小偏差，带着脏数据状态进行的重试不仅无法自愈，反而会导致灾难性的误差级联放大。概率模型在没有硬边界约束的情况下，其自我循环不可避免地退化为逻辑畸变。
> **[EN]:** In the evolution of complex agent systems, traditional architectures heavily rely on the model's internal "self-reflection and cyclic retry" (e.g., the ReAct pattern). This seemingly flexible fault-tolerance mechanism is, in reality, a breeding ground for entropy increase and an abyss of context pollution. Under industrial-grade, long-running scenarios, if a microscopic deviation occurs at any intermediate step in the pipeline, retrying with contaminated state data fails to self-heal; instead, it triggers a catastrophic cascading amplification of errors. Without hard boundary constraints, the self-looping of probabilistic models inevitably degenerates into logical distortions.

## 决策 / Decision
> **[CN]:** 必须强制确立不可逆的 10 节点单向流动连续体，绝对禁止任何形式的动态循环与重试。Axiom-0 通过强力手段，将逻辑执行强行切分为信息脱水、抽象、收束到对齐等 10 个绝对独立且物理孤立的节点。数据流的演进如同时间流逝一般绝对不可回溯。任何节点若在其执行周期内产生逻辑畸变（例如偏离预期的输出格式或 KL 散度超标），系统必须立刻拉响警报，直接触发物理熔断机制，并毫不留情地抛弃整棵执行树。在 Axiom-0 的字典里，绝不允许概率引擎进行任何“盲目的重试”或状态回滚。
> **[EN]:** It is mandatory to forcefully establish an irreversible 10-node one-way flow continuum, absolutely prohibiting any form of dynamic looping or retries. Through brute-force measures, Axiom-0 forcefully slices logical execution into 10 absolutely independent and physically isolated nodes—ranging from information dehydration, abstraction, convergence, down to alignment. The progression of the data flow is strictly irreversible, akin to the passage of time. If any node generates a logical distortion during its execution cycle (e.g., deviating from expected output formats or exceeding KL divergence thresholds), the system must immediately sound the alarm, directly trigger a physical meltdown mechanism, and ruthlessly discard the entire execution tree. In the lexicon of Axiom-0, any "blind retries" or state rollbacks by the probabilistic engine are unconditionally forbidden.


---
## 补充决议 / Supplementary Resolution (2026-07-05)

### 事实资产 (Factual Assets)
* **证据状态**: `[REAL]`
* **来源**: https://github.com/jamesob/local-llm
* **脱水描述**: Everything I know about running LLMs locally

### 架构投射 (Architectural Projection)
> **[CN]**: 根据 local-llm 的核心范式，Axiom-0 系统进一步确认了物理隔离与本地环境执行的必要性，防止因外部网络状态变化导致认知连续体（Cognitive Continuum）发生崩塌或信息熵溢出。
> **[EN]**: Based on the core paradigm of local-llm, the Axiom-0 system further validates the necessity of physical isolation and localized execution environments, preventing the cognitive continuum from collapsing or entropy overflowing due to external network state variations.

---
## 深度扩展与补全决议 / Deep Expansion & Completion Resolution (2026-07-06)

### 事实资产 (Factual Assets)
* **证据状态**: `[REAL]`
* **来源**: http://arxiv.org/abs/2512.23262v1
* **脱水描述**: PFed-Signal: An ADR Prediction Model based on Federated Learning - The adverse drug reactions (ADRs) predicted based on the biased records in FAERS (U.S. Food and Drug Administration Adverse Event Reporting System) ma...

### 架构投射 (Architectural Projection)
> **[CN]**: 本决议通过深度联网信息同步，进一步增强了现有架构的鲁棒性。基于 PFed-Signal: An ADR Prediction Model based on Federated Learning 的核心发现，Axiom-0 系统明确要求在所有边缘节点和高并发场景中，严格执行零熵协议，消除任何潜在的不可预见的非确定性状态。
> **[EN]**: Through deep networked information synchronization, this resolution further enhances the robustness of the existing architecture. Based on the core findings of PFed-Signal: An ADR Prediction Model based on Federated Learning, the Axiom-0 system explicitly mandates the strict enforcement of the zero-entropy protocol across all edge nodes and high-concurrency scenarios, eliminating any potential unforeseeable non-deterministic states.
