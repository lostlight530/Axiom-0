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