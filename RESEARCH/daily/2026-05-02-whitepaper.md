# 2026-05-02-whitepaper.md

## 1. 核心叙事 / Core Narrative
> **[CN]**: 2025年多智能体系统在缺乏强制性零熵编排时不可避免地陷入“协同瘫痪”与“算力风暴”，静态图拓扑与推理期计算（Test-Time Compute）证明了概率模型必须被绝对拘束于硬性验证机制之下,
> **[EN]**: In 2025, multi-agent systems inevitably fell into "collaboration paralysis" and "compute storms" when lacking mandatory zero-entropy orchestration; static graph topologies and test-time compute proved that probabilistic models must be absolutely shackled beneath hard verification mechanisms.

## 2. 证据清单 / Evidence Roster
### 事实资产 (Factual Assets)
- **[CN]**: **证据状态**: `[REAL]` - 业界抛弃静态图与黑盒路由，转向标准化的通信协议（MCP 与 A2A）及演进式编排（如“提线木偶”范式）以应对代理增加引发的通信风暴,同时，Test-Time Compute 在推理期引入了反思机制,
- **[EN]**: **Evidence Status**: `[REAL]` - The industry abandoned static graphs and black-box routing in favor of standardized communication protocols (MCP and A2A) and evolving orchestration (e.g., the "Puppeteer" paradigm) to combat communication storms caused by increasing agents. Simultaneously, Test-Time Compute introduced reflection mechanisms during inference.
- **[CN]**: **证据状态**: `[NEXUS_ORIGINAL]` - Axiom-0 系统拒绝由 LLM 决定路由，通过 10节点连续体（T-01 至 T-10）与绝对拘束的 Liquid Morphing 机制消除了所有的协同瘫痪风险,
- **[EN]**: **Evidence Status**: `[NEXUS_ORIGINAL]` - The Axiom-0 system refuses to let LLMs decide routing, eliminating all collaboration paralysis risks through its 10-node continuum (T-01 to T-10) and absolutely shackled Liquid Morphing mechanism.

## 3. 脱水分析 (What -> Why -> Axiom-0 Dehydration)
### 3.1 WHAT (现象界定 / Phenomenon Definition)
> **[CN]**: 业界提出了 MCP 和 Test-Time Compute 验证循环，试图在概率模型输出前加入复杂的交叉检查和动态编排,
> **[EN]**: The industry proposed MCP and Test-Time Compute verification loops, attempting to insert complex cross-checks and dynamic orchestration before the probabilistic model outputs.
### 3.2 WHY (原动力推演 / Prime Mover Deduction)
> **[CN]**: 随着单次提示的失败率达到物理瓶颈，单纯提升参数规模不再有效,系统被迫在推理阶段花费更多算力（Test-Time Compute）来弥补底层逻辑的非确定性,
> **[EN]**: As single-prompt failure rates reached physical bottlenecks, simply scaling parameters became ineffective. Systems were forced to expend more compute during inference (Test-Time Compute) to compensate for the underlying logic's non-determinism.
### 3.3 Axiom-0 投射 (Axiom-0 Projection)
> **[CN]**: 所谓的演进式编排和推理期计算是对高熵系统的续命,Axiom-0 将其降维至 T-06 分析节点的数学硬验证，使用暴力手段（AOT Blast）直接剔除任何偏离状态,
> **[EN]**: So-called evolving orchestration and test-time compute are life support for high-entropy systems. Axiom-0 reduces this to mathematical hard verification at the T-06 Analysis node, using violent means (AOT Blast) to outright prune any deviating states.

## 4. 架构突变决议 / Architectural Mutation Resolution
- **[CN]**: **决议草案**: 将动态路由与 Test-Time 验证固化为 T-04/T-06 节点中的不可逆代数约束，禁止 LLM 自行触发分支,
- **[EN]**: **Resolution Draft**: Solidify dynamic routing and Test-Time verification into irreversible algebraic constraints within the T-04/T-06 nodes, forbidding LLMs from triggering branches on their own.
- **[CN]**: **验证契约**: `CODE/nexus_core.py` 必须在验证循环中实现确定性的步骤检查，KL 散度超标必须立刻触发硬裁剪,
- **[EN]**: **Verification Contract**: `CODE/nexus_core.py` must implement deterministic step checking in the verification loop, and KL divergence breaches must immediately trigger hard pruning.

entropy=0
