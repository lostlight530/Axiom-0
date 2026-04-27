# ADR-006: 零拷贝多核图推理引擎 / ADR-006: Zero-Copy Multi-Core Graph Inference Engine

---

## 状态 / Status
**已采纳 (Accepted)**

---

## 背景 / Context
> **[CN]**: 随着认知图谱中实体和突触（Synapses）数量的指数级增长，运行 PageRank 或深层图遍历（Deep Synapse Scan）时，Python 的全局解释器锁（GIL）成为严重瓶颈。传统的进程间通信（IPC）序列化开销极大，违背了系统对“毫秒级响应”的零熵要求。
>
> **[EN]**: As the number of entities and synapses in the cognitive graph grows exponentially, executing PageRank or Deep Synapse Scans hits a severe bottleneck due to Python's Global Interpreter Lock (GIL). Traditional Inter-Process Communication (IPC) introduces unacceptable serialization overhead, violating the zero-entropy requirement for millisecond-level response times.

---

## 决策 / Decision
> **[CN]**: 彻底抛弃传统的 IPC 和多线程。在 `src/kernel/reason.py` 中引入基于 `multiprocessing.shared_memory` 的零拷贝架构。将图结构（矩阵）平铺（Flat-pack）直接写入共享内存块，允许多个独立的工作进程（Worker Processes）无锁读取并执行张量计算。
>
> **[EN]**: Completely abandon traditional IPC and multithreading. Implement a zero-copy architecture based on `multiprocessing.shared_memory` in `src/kernel/reason.py`. The graph structure (matrix) is flat-packed directly into a shared memory block, allowing multiple independent worker processes to perform lock-free tensor computations simultaneously.

---

## 架构层级 / Architectural Details

### 1. 内存平铺 (Flat-Packing)
- **[CN]**: 关系型数据被转换为连续的 1D 内存数组（如 CSR 稀疏矩阵格式），绕过 Python 对象的内存开销。
- **[EN]**: Relational data is transformed into contiguous 1D memory arrays (e.g., CSR sparse matrix format), bypassing Python object memory overhead.

### 2. GIL 规避 (GIL Bypassing)
- **[CN]**: 工作进程通过 C 级别的内存视图直接访问数据，完全独立于主进程的 GIL 进行纯数学运算。
- **[EN]**: Worker processes access data directly via C-level memory views, performing pure mathematical operations entirely independent of the main process's GIL.

---

## 后果 / Consequences

### 正面影响 (Positive)
- **性能飙升**: 彻底解放多核算力，复杂图推理速度提升数个数量级。 / Fully unleashes multi-core compute power; complex graph inference speed increases by orders of magnitude.
- **极低内存占用**: 无需在多个进程中复制图数据。 / Extremely low memory footprint due to the elimination of data duplication across processes.

### 负面影响 (Negative)
- **工程复杂度极高**: 需要手动管理内存生命周期（分配、附加、释放），一旦发生段错误（Segfault）极难调试。 / Extremely high engineering complexity. Requires manual memory lifecycle management (allocation, attachment, unlinking); segmentation faults are exceptionally difficult to debug.

---
*"Build it Brutally, Run it Deterministically"*
