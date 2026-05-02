# ADR-080: 测试期反射性结构变形 / ADR-080: Test-Time Reflective Morphing

---

## 状态 / Status
**已采纳 (Accepted)**

---

## 背景 / Context
> **[CN]**: 随着基于强化学习的深层推理（如 o1, DeepSeek-R1）证明了 Test-Time Compute (TTC) 的价值，Axiom-0 需要将这种“思考时间的拉长”转化为确定性的系统级机制，而不是依赖模型内部的黑盒概率输出。集体树搜索（CoMCTS）提供了极佳的理论支撑。
>
> **[EN]**: As RL-based deep reasoning (e.g., o1, DeepSeek-R1) proves the value of Test-Time Compute (TTC), Axiom-0 must translate this "elongated thinking time" into a deterministic, system-level mechanism rather than relying on internal black-box probabilistic outputs. Collective Tree Search (CoMCTS) provides an excellent theoretical foundation.

---

## 决策 / Decision
> **[CN]**: 在 ZECP 的 T-04 (Morphing) 和 T-06 (Verification) 节点之间，引入**反射性结构变形 (Reflective Morphing)** 机制。当检测到高难度计算任务时，调度层必须主动剥离出至少 3 个独立的 Validator 线程执行集体验证（类似于 CoMCTS 的并行展开），并在 SQLite 队列中合并达成零熵共识。
>
> **[EN]**: Introduce a **Reflective Morphing** mechanism between the T-04 and T-06 nodes of the ZECP. Upon detecting high-complexity computational tasks, the orchestration layer must actively spawn at least 3 isolated Validator threads for collective verification (paralleling CoMCTS expansion). Consensus must be achieved deterministically within the lock-free SQLite queue to maintain Zero-Entropy.

---

## 架构约束 / Architectural Constraints
- **[CN]**: **硬核分叉 (Hard Forking)**: 验证树的展开不得依靠提示词工程。系统必须直接在内存空间中通过 `multiprocessing` 派生（fork）独立的验证环境。
  - **[EN]**: **Hard Forking**: The expansion of the verification tree must not rely on prompt engineering. The system must directly fork independent verification environments in memory space via `multiprocessing`.
- **[CN]**: **状态记录 (State Auditing)**: 所有被验证推翻的“错误路径”不得直接丢弃，必须以 `[REJECTED]` 标签写入数据库，供下一次周期的 T-08 (Pruning) 分析。
  - **[EN]**: **State Auditing**: All "error paths" overturned by verification must not be discarded directly. They must be written to the database with a `[REJECTED]` tag for T-08 (Pruning) analysis in the next cycle.

---

## 后果 / Consequences

### 正面影响 (Positive)
- **[CN]**: 将黑盒中的“顿悟时刻（Aha Moment）”变成了具有密码学签名的确定性工作流。
  - **[EN]**: Transforms the black-box "Aha Moment" into a cryptographically signed, deterministic workflow.
- **[CN]**: 充分利用了 ADR-007 的无锁网关能力处理高并发验证。
  - **[EN]**: Fully leverages the ADR-007 lock-free gateway for high-concurrency validation.

### 负面影响 (Negative)
- **[CN]**: 显著增加了瞬时 CPU 和内存的突发占用（Burst Load）。
  - **[EN]**: Significantly increases transient burst load on CPU and memory.

---
*"Build it Brutally, Run it Deterministically"*
