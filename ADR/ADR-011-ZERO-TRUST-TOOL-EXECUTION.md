# ADR-011: 零信任工具执行法则 / Zero-Trust Tool Execution Law

## 状态 / Status
> **[CN]:** 绝对法则 (Absolute Law)
> **[EN]:** Absolute Law

## 背景 / Context
> **[CN]:** 当前的 AI Agent 系统在授予大模型工具调用权限（如 Shell 执行、API 请求）时，普遍缺乏深度的边界隔离。如《 Implementing a Zero Trust Architecture》等业界标准指出，基于静态配置的权限模型在面对动态的 Agent 攻击向量时极度脆弱。如果允许高熵的大模型以系统级权限自由组合并执行工具链，系统将面临灾难性的供应链污染和物理资源劫持风险。Axiom-0 必须从根本上消除这种信任假设。
> **[EN]:** Current AI Agent systems generally lack deep boundary isolation when granting LLMs tool execution privileges (e.g., Shell execution, API requests). As industry standards like "Implementing a Zero Trust Architecture" indicate, permission models based on static configurations are highly vulnerable against dynamic Agent attack vectors. If high-entropy LLMs are allowed to freely compose and execute toolchains with system-level privileges, the system faces catastrophic risks of supply chain contamination and physical resource hijacking. Axiom-0 must fundamentally eliminate this trust assumption.

## 决策 / Decision
> **[CN]:** 强制实施“零信任工具执行法则”。系统不信任任何由大模型直接生成的复杂工具调用链。所有的工具调用必须在请求前被拆解为单一的、具体的、代数级别可验证的指令（Specificity Rule）。执行环境必须是阅后即焚的隔离沙箱（Ephemeral Sandbox）。在工具执行前后，必须伴随硬编码的状态验证步骤（Verification Rule），且系统绝不为任何未经验证的工具输出提供持久化存储。
> **[EN]:** Forcefully implement the "Zero-Trust Tool Execution Law." The system does not trust any complex tool invocation chain generated directly by LLMs. All tool calls must be decoupled into single, concrete, algebraically verifiable commands prior to request (Specificity Rule). The execution environment must be an ephemeral, burn-after-reading isolated sandbox. Hardcoded state verification steps must accompany tool execution before and after (Verification Rule), and the system absolutely provides no persistent storage for any unverified tool output.

---
## 补充决议 / Supplementary Resolution (2026-07-05)

### 事实资产 (Factual Assets)
* **证据状态**: `[REAL]`
* **来源**: https://github.com/jamesob/local-llm
* **脱水描述**: Everything I know about running LLMs locally

### 架构投射 (Architectural Projection)
> **[CN]**: 根据 local-llm 的核心范式，Axiom-0 系统进一步确认了物理隔离与本地环境执行的必要性，防止因外部网络状态变化导致认知连续体（Cognitive Continuum）发生崩塌或信息熵溢出。
> **[EN]**: Based on the core paradigm of local-llm, the Axiom-0 system further validates the necessity of physical isolation and localized execution environments, preventing the cognitive continuum from collapsing or entropy overflowing due to external network state variations.
