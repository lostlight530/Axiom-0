# ADR-003: 代数级污染拒绝与 KL 散度硬防御 / Algebraic Pollution Rejection and KL Divergence Hard Defense

## 状态 / Status
> **[CN]:** 绝对法则 (Absolute Law)
> **[EN]:** Absolute Law

## 背景 / Context
> **[CN]:** 仅仅通过自然语言提示词去“命令”推理节点保持理智是无效的。缺乏信息论级别的数学度量，系统无法物理地隔绝概率空间带来的畸变，最终会导致整个知识拓扑被微小的幻觉彻底破坏。
> **[EN]:** "Commanding" reasoning nodes to stay sane merely through natural language prompts is futile. Lacking information-theory-level mathematical metrics, the system cannot physically isolate distortions from the probabilistic space, ultimately causing the entire knowledge topology to be devastated by microscopic hallucinations.

## 决策 / Decision
> **[CN]:** 引入动态相干性防御，作为系统最终融合前的加密级审计标准。在流转进入最终的封存状态前，必须测量输出特征分布与理想基线之间的 KL 散度。硬编码物理阈值为 0.05。一旦 $D_{KL} > 0.05$，系统在代数层面直接判定其为“逻辑污染”，并以暴力、绝对的方式拒绝合并。
> **[EN]:** Introduce dynamic coherence defense as the cryptographic-grade auditing standard before the system's final merge. Before finalizing the state, the KL divergence between the output feature distribution and the ideal baseline must be measured. Hardcode the physical threshold at 0.05. Once $D_{KL} > 0.05$, the system algebraically flags it as "logic pollution" and rejects the merge in a brutal, absolute manner.