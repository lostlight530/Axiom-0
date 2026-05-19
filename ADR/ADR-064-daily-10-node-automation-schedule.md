# ADR-064: Daily 10-Node Automation Schedule

## 状态 / Status
**已采纳 (Accepted)**

- **[CN]**: 日期：2026-05-19
  - **[EN]**: Date: 2026-05-19
- **[CN]**: 决策者：lostlight530 + AI副驾驶
  - **[EN]**: Deciders: lostlight530 + AI copilot
- **[CN]**: 范围：Axiom-0 自动化节拍与执行约束
  - **[EN]**: Scope: Axiom-0 automation beats and execution constraints

## 背景 / Context

> **[CN]**: Axiom-0 作为一个零熵认知连续体，不能仅仅停留在理论白皮书层面，必须体现为一个 24 小时不间断运行的工业级实体。
> **[EN]**: Axiom-0, as a zero-entropy cognitive continuum, cannot remain merely at the level of theoretical whitepapers; it must be manifested as an industrial-grade entity operating 24/7.

> **[CN]**: 传统的大模型应用采用“按需调用（On-Demand）”模式，这种模式具有高熵和偶发性，违背了 Axiom-0 的物理隔离与确定性原则。因此，我们需要制定严格的每日 10 节点（ZECP）自动调度纪律。
> **[EN]**: Traditional LLM applications adopt an "On-Demand" invocation model. This model is high-entropy and sporadic, violating Axiom-0's principles of physical decoupling and determinism. Therefore, we must establish strict daily 10-node (ZECP) automatic scheduling disciplines.

## 决策 / Decision

> **[CN]**: 我们决定实施绝对隔离的“每日全新克隆（Fresh Clone）”调度机制，强制每天执行一次完整的 10 节点认知流，并将产出直接结构化入库。
> **[EN]**: We decided to implement an absolutely isolated "Fresh Clone" scheduling mechanism, forcing a complete 10-node cognitive flow every day, and structurally ingesting the outputs directly into the repository.

### 1. 触发与环境 (Trigger and Environment)
- **[CN]**: **物理隔离**：每天定时触发一个独立的云端沙盒环境。每次运行必须“全新克隆”主分支，绝对禁止跨周期的状态遗留。
- **[EN]**: **Physical Isolation**: An independent cloud sandbox environment is triggered at a scheduled time every day. Each run must "Fresh Clone" the main branch; inter-cycle state residue is absolutely forbidden.
- **[CN]**: **上下文继承**：系统仅能从当前的 `SPECIFICATION.md`、`ADR/` 和 `METHODOLOGY/` 读取结构化法则，作为当日执行的唯一上下文。
- **[EN]**: **Context Inheritance**: The system can only read structural rules from the current `SPECIFICATION.md`, `ADR/`, and `METHODOLOGY/` as the sole context for the day's execution.

### 2. 节点执行时序 (Node Execution Sequence)
> **[CN]**: 整个过程必须严格遵循单向图传递，不允许任何模型层面的重试循环。
> **[EN]**: The entire process must strictly follow the directed acyclic graph transmission; no retry loops at the model layer are allowed.
- **[CN]**: **T-01 到 T-03 (摄取与供给)**：从互联网事实源抓取前沿研究，执行强制脱水。
- **[EN]**: **T-01 to T-03 (Ingestion and Provisioning)**: Scrape frontier research from internet fact sources and execute forced dehydration.
- **[CN]**: **T-04 到 T-07 (推理与锚定)**：将摄取的事实与 Axiom-0 零熵架构进行对比，生成架构判断。
- **[EN]**: **T-04 to T-07 (Reasoning and Grounding)**: Compare ingested facts with the Axiom-0 zero-entropy architecture to generate architectural judgments.
- **[CN]**: **T-08 到 T-10 (验证与综合)**：强制验证 KL 散度（$\leq 0.05$），若违规立刻熔断系统。通过后，进入最后的综合输出阶段。
- **[EN]**: **T-08 to T-10 (Verification and Synthesis)**: Force verification of KL divergence ($\leq 0.05$); if violated, trip the system breaker immediately. After passing, enter the final synthesis output phase.

### 3. 自毁与提交 (Self-Destruct and Commit)
- **[CN]**: 每日产出生成后，沙盒在提交（Commit）更新至指定目录（如 `RESEARCH/daily/`）后，必须立即触发自我销毁指令，以保证执行环境的“零熵”纯洁度。
- **[EN]**: After daily outputs are generated, once the sandbox commits the updates to the designated directory (e.g., `RESEARCH/daily/`), it must immediately trigger a self-destruct command to ensure the "zero-entropy" purity of the execution environment.

## 后果 / Consequences

- **[CN]**: **积极**：确保了知识库以每天确定的节拍增长，完全消除了环境状态堆积导致的概率变异。
- **[EN]**: **Positive**: Ensures that the knowledge base grows at a deterministic daily beat, completely eliminating probability mutations caused by environmental state accumulation.
- **[CN]**: **消极**：调试成本极高，任何节点的微小失败都会导致当天的流程彻底报废，没有挽回余地。这属于“为了绝对秩序而支付的残暴代价”。
- **[EN]**: **Negative**: Extremely high debugging costs; a minor failure at any node will cause the entire day's flow to be completely scrapped with no room for recovery. This is the "brutal price paid for absolute order".
