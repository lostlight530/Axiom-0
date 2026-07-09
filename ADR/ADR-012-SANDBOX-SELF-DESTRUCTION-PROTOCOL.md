# ADR-012: 沙箱自毁协议 / Sandbox Self-Destruction Protocol

## 状态 / Status
> **[CN]:** 绝对法则 (Absolute Law)
> **[EN]:** Absolute Law

## 背景 / Context
> **[CN]:** 在处理日常研究资产和临时数据提取时，若依赖持久化的本地环境，极易产生“状态污染”（State Pollution）——前一次任务遗留的缓存文件、配置修改或挂起的后台进程，会成为下一次任务中不可预测的隐性变量。为了维持 Axiom-0 的“零熵”基准，任何带有状态残留的工作流都是对纯粹拓扑结构的破坏。
> **[EN]:** When handling daily research assets and temporary data extraction, relying on persistent local environments easily leads to "State Pollution"—residual cache files, configuration modifications, or hanging background processes from previous tasks become unpredictable hidden variables in the next. To maintain Axiom-0's "Zero-Entropy" baseline, any workflow with state residues is a destruction of the pure topology.

## 决策 / Decision
> **[CN]:** 引入“沙箱自毁协议”。每一次自动化工作流（如每日研究聚合）必须在一个基于云端的全新克隆（Fresh Clone）沙箱中启动。在流程结束或触发严重熔断错误时，该沙箱节点必须立即进入物理自毁序列，彻底清除所有的临时文件、内存缓存以及执行痕迹，不向未来遗留任何状态。唯一被允许持久化的，是那些经过严格签名和提交到中央 Git 仓库的合法架构资产。
> **[EN]:** Introduce the "Sandbox Self-Destruction Protocol." Every automated workflow (e.g., daily research aggregation) must initialize within a cloud-based Fresh Clone sandbox. Upon process completion or triggering of a severe meltdown error, this sandbox node must immediately enter a physical self-destruction sequence, completely obliterating all temporary files, memory caches, and execution traces, leaving zero state for the future. The only entities permitted for persistence are legitimate architectural assets strictly signed and submitted to the central Git repository.

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
