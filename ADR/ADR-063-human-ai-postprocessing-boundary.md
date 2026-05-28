# ADR-063: 人机后处理边界法则 / Human-AI Post-Processing Boundary Law

## 状态 / Status
> **[CN]:** 绝对法则 (Absolute Law)
> **[EN]:** Absolute Law

## 背景 / Context
> **[CN]:** 原始的对话提示和交互文本充满了模糊性、冗余与不可预测的情感波动。将这些未经提炼的聊天记录直接纳入系统认知库，等同于在纯净的超导电路中引入高阻抗杂质，严重破坏零熵协议。
> **[EN]:** Raw dialogue prompts and interaction texts are full of ambiguity, redundancy, and unpredictable emotional fluctuations. Incorporating these unrefined chat logs directly into the system's cognitive repository is equivalent to introducing high-impedance impurities into a pure superconducting circuit, severely damaging the zero-entropy protocol.

## 决策 / Decision
> **[CN]:** 强制确立双阶段后处理工作流。所有未经分类的交互对话不得直接提交（Commit）至核心知识库，必须经过分割、分类、路由、脱水以及规范化五个硬性步骤的清洗。只有被彻底剥离了上下文噪音、提纯为物理事实与架构决议的文本，才被允许跨越人机边界。
> **[EN]:** Forcefully establish a dual-phase post-processing workflow. All unclassified interactive dialogues must not be directly committed to the core knowledge repository; they must undergo cleansing through five rigid steps: segmentation, classification, routing, dehydration, and canonicalization. Only text thoroughly stripped of context noise and purified into physical facts and architectural resolutions is permitted to cross the Human-AI boundary.
