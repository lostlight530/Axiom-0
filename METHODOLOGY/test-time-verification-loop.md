# 方法论：测试期验证的确定性外循环 / Methodology: Deterministic Outer Loop for Test-Time Verification

---

## 核心定理 / Core Theorem
> **[CN]**: 我们不扩大模型的内部“思维时间”，我们扩大系统在外部的“验证次数”。Axiom-0 通过 ZECP 将 Test-Time Compute (TTC) 物理化。
>
> **[EN]**: We do not extend the model's internal "thinking time"; we extend the system's external "verification cycles." Axiom-0 physicalizes Test-Time Compute (TTC) via the ZECP continuum.

---

## 1. 概念物理化 / Physicalization of Concepts

### 1.1 从隐藏思维链到 Merkle 签名 (From Hidden CoT to Merkle Signatures)
- **[CN]**: 业界通过强化学习鼓励大模型生成大量的内部推演文字（Hidden CoT）。
  - **[EN]**: The industry encourages large models to generate massive internal deduction text (Hidden CoT) via reinforcement learning.
- **[CN]**: **Axiom-0 转换**: 所有的推演必须在 T-06 节点转化为可执行的探针（Probe）。成功执行的探针结果会被脱水（Dehydrated）并写入 SQLite，带有 Merkle 签名（0-Opacity 原则）。
  - **[EN]**: **Axiom-0 Transformation**: All deductions must be transformed into executable probes at the T-06 node. Successfully executed probe results will be dehydrated and written to SQLite with Merkle signatures (0-Opacity principle).

### 1.2 从单一树搜索到液态并发树 (From Single MCTS to Liquid Concurrent Trees)
- **[CN]**: 业界使用蒙特卡洛树搜索（MCTS）寻找最优解。
  - **[EN]**: The industry uses Monte Carlo Tree Search (MCTS) to find optimal solutions.
- **[CN]**: **Axiom-0 转换**: 当复杂任务进入时，系统通过 **液态结构变形 (Liquid Morphing)** 分裂出多个平行的验证工作流（Collective Search），在达到绝对共识后，通过 T-09 节点的 KL 散度验证合并结果。
  - **[EN]**: **Axiom-0 Transformation**: When complex tasks arrive, the system splits into multiple parallel verification workflows (Collective Search) via **Liquid Morphing**. After reaching absolute consensus, results are merged via T-09 KL divergence verification.

## 2. 零熵执行约束 / Zero-Entropy Execution Constraints

- **[CN]**: **拒绝算力通胀**: 外部验证循环的最大深度由确定性的配置常量控制，达到阈值未解出则判定为“物理拒绝”，绝不在无意义的幻觉中空转。
  - **[EN]**: **Reject Compute Inflation**: The maximum depth of the external verification loop is controlled by a deterministic configuration constant. If unsolved upon reaching the threshold, it is deemed a "physical rejection," never idling in meaningless hallucinations.
- **[CN]**: **环境隔离**: 验证节点（Verifiers）必须和生成节点（Generators）物理剥离，分别运行在不同的进程中。
  - **[EN]**: **Environmental Isolation**: Verification nodes (Verifiers) must be physically decoupled from generation nodes (Generators), running in separate processes.

---

## Axiom-0 ZECP Integration
> **[CN]**: 所有通过集体搜索生成的可能路径，必须在 T-10 节点被严格脱水，转化为单一的确定性决策。
> **[EN]**: All possible paths generated via collective search must be rigorously dehydrated at the T-10 node into a single deterministic decision.
