# ADR-003: 零熵数据脱水管线 / ADR-003: Zero-Entropy Dehydration Pipeline

---

## 状态 / Status
**已采纳 (Accepted)**

---

## 背景 / Context
> **[CN]**: 原始的自然语言对话中充斥着情绪化表达、废话前缀（如“请帮我”、“你可以...”）以及口语化的结构。如果让 AI 模型直接处理这些原始文本，会导致系统熵值飙升，引发不可预测的逻辑分支（幻觉）。
>
> **[EN]**: Raw natural language is inherently plagued with emotional expressions, conversational filler ("please help me with...", "could you..."), and unstructured phrasing. Allowing AI models to process this raw text directly guarantees a spike in systemic entropy, inevitably triggering unpredictable logic branches (hallucinations).

---

## 决策 / Decision
> **[CN]**: 在 ZECP 连续体的 T-01 和 T-02 节点间实现“双阶段后处理脱水管线”。强制禁止系统直接处理未经分类的 Prompt。所有文本必须经过分段、分类、停用词剔除（脱水），最终规范化为极简的大写哈希/指令载荷（Payload）。
>
> **[EN]**: Implement a "Dual-Phase Post-Processing Dehydration Pipeline" between nodes T-01 and T-02 of the ZECP continuum. The system is strictly forbidden from processing unclassified, raw prompts. All textual data must be aggressively segmented, classified, stripped of stop-words (dehydration), and finally canonicalized into minimalist, capitalized operational payloads.

---

## 架构层级 / Dehydration Protocol

### 1. 分段与分类 (Segmentation & Classification)
- **[CN]**: 按照标点或语义边界将原始长句切割。剔除无意义的短文本。
- **[EN]**: Fracture raw conversational streams based on punctuation or semantic boundaries. Eliminate statistically meaningless fragments.

### 2. 深度脱水 (Deep Dehydration)
- **[CN]**: 维护一个强大的高熵废话拦截字典（Stop-words），物理剔除诸如请求语、语气词等无关成分。
- **[EN]**: Maintain a robust dictionary of high-entropy "filler". Physically strip the text of request preambles and emotional noise to extract the bare-metal intent.

### 3. 规范化映射 (Canonicalization)
- **[CN]**: 将脱水后的词干重组，强制大写，打上脱水状态标签（`DEHYDRATED`），再传递给下游网络。
- **[EN]**: Reassemble the dehydrated stems, force capitalization for protocol consistency, append the `DEHYDRATED` status flag, and dispatch to downstream orchestrators.

---

## 后果 / Consequences

### 正面影响 (Positive)
- **系统降噪**: 彻底掐断了大语言模型基于“语气”产生不同输出的可能。 / Drastically reduces noise, eliminating the possibility of LLMs generating divergent outputs based purely on user "tone".
- **Token 利用率极限优化**: 传入 T-03 后续节点的 Token 密度接近 100%。 / Extreme optimization of Token density for downstream nodes.

### 负面影响 (Negative)
- **过度修剪风险**: 极端的脱水策略可能在遇到模糊指令时丢失用户的细微意图。 / Brutal dehydration heuristics risk pruning subtle user intent when encountering ambiguous commands.

---
*"Build it Brutally, Run it Deterministically"*
