# 行业调研：测试期计算扩展与集体强化搜索 / Survey: Test-Time Compute Scaling and Collective Search

---

## 证据等级 / Evidence Status
**[REAL]** (Industry-wide research consensus & Zero-Entropy mapping)

---

## 摘要 / Executive Summary
> **[CN]**: 本调研探讨了 2025-2026 年间大模型推理能力提升的核心技术：**测试期计算（Test-Time Compute, TTC）扩展**，特别是以 DeepSeek-R1 为代表的纯强化学习（RL）以及集体蒙特卡洛树搜索（CoMCTS）。我们将分析如何将这些机制转化为 Axiom-0 的零熵确定性架构。
>
> **[EN]**: This survey explores the core technologies driving LLM reasoning enhancements in 2025-2026: **Test-Time Compute (TTC) scaling**, specifically reinforcement learning (RL) exemplified by DeepSeek-R1 and Collective Monte Carlo Tree Search (CoMCTS). We analyze how to adapt these mechanisms into the deterministic, Zero-Entropy architecture of Axiom-0.

---

## 1. 测试期计算的核心突破 / Core Breakthroughs in Test-Time Compute

### 1.1 纯强化学习引导的深层推理 (RL-driven Deep Reasoning)
- **[CN]**: **概念**: 不依赖人类标注数据，通过基于规则（如数学正确性、代码编译成功）的奖励模型，让 AI 自由地在推理阶段消耗更多时间进行自我验证、回溯和修改（即“顿悟时刻 Aha Moment”）。
  - **[EN]**: **Concept**: Without relying on human-labeled data, RL uses rule-based reward models (e.g., math correctness, code compilation success) to allow the AI to freely consume more time during the inference stage for self-verification, backtracking, and modification (the "Aha Moment").
- **[CN]**: **Axiom-0 视角**: 传统的内部 CoT 仍是概率黑盒。Axiom-0 必须将这种“顿悟”**外部化**，即通过 `ZECP` 的 T-06 (Verification) 节点，将代码编译结果或数据库一致性作为绝对的“Reward”，而非依靠内部概率生成。
  - **[EN]**: **Axiom-0 Perspective**: Traditional internal CoT is still a probabilistic black box. Axiom-0 must **externalize** this "Aha Moment" via the T-06 (Verification) node of `ZECP`, using code compilation results or database consistency as the absolute "Reward" instead of relying on internal probability generation.

### 1.2 集体蒙特卡洛树搜索 (Collective Monte Carlo Tree Search - CoMCTS)
- **[CN]**: **概念**: CoMCTS 通过聚合多个 Agent 或模型的推理树路径，在每一步进行集体扩展、仿真错误检查与反向传播。它能有效避免单模型在推理时陷入“低质量死循环”。
  - **[EN]**: **Concept**: CoMCTS aggregates reasoning tree paths from multiple Agents or models, performing collective expansion, simulation error checking, and backpropagation at each step. It effectively prevents single models from getting stuck in "low-quality loops" during inference.
- **[CN]**: **Axiom-0 视角**: 这完美契合了 Axiom-0 的 10 节点复合系统理论。Axiom-0 的 `Liquid Morphing Engine` 可以在高负载或复杂任务时，动态分裂出多个验证节点，利用无锁环形队列（ADR-007）汇总验证结果，实现确定性的最优路径选择。
  - **[EN]**: **Axiom-0 Perspective**: This perfectly aligns with Axiom-0's 10-node compound system theory. The `Liquid Morphing Engine` can dynamically split into multiple verification nodes during high load or complex tasks, using the lock-free ring queue (ADR-007) to aggregate verification results and achieve deterministic optimal path selection.

---

## 2. 从概率到确定性的“脱水” / Dehydrating from Probability to Determinism

> **[CN]**: 现代 AI 的 TTC 扩展存在致命弱点：它依然发生在概率引擎内部。在 Axiom-0 中，计算扩展必须转移到外部的硬核物理层。
>
> **[EN]**: The fatal flaw of modern TTC scaling is that it still occurs within a probabilistic engine. In Axiom-0, compute scaling must be offloaded to the external, hard-coded physical layer.

### 架构映射 (Architectural Mapping)
- **[CN]**: **概率流 (Probabilistic Flow)**: 模型在黑盒中自我生成 `Wait` 和 `Final Answer` 标签。
  - **[EN]**: **Probabilistic Flow**: The model self-generates `Wait` and `Final Answer` tags within a black box.
- **[CN]**: **确定性流 (Axiom-0 Deterministic Flow)**: T-07 节点调用 Python 沙盒执行代码 -> 执行失败 -> 返回明确错误日志（Reward = -1） -> T-08 节点剪枝 -> 重新进入 T-02 生成分支。完全零黑盒。
  - **[EN]**: **Axiom-0 Deterministic Flow**: T-07 node invokes Python sandbox execution -> Execution fails -> Returns explicit error log (Reward = -1) -> T-08 node prunes -> Re-enters T-02 generation branch. Absolute zero black box.

---
*"We study their probabilities, only to enforce our determinism."*
