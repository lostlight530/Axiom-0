# 2026-05-23-whitepaper.md

## 1. 核心叙事 / Core Narrative

> **[CN]**: 2025年语言模型架构的微观博弈揭示了一个无情事实：子词分词器的妥协终将被字节级模拟的纯粹算力碾压，高熵的词汇映射正在向绝对物理层面的无状态字节流退行。
> **[EN]**: The micro-game of 2025 language model architectures reveals a ruthless fact: the compromises of subword tokenizers will eventually be crushed by the pure compute of byte-level simulation, as high-entropy vocabulary mapping regresses toward the stateless byte stream of the absolute physical layer.

---

## 2. 证据清单 / Evidence Roster

### 事实资产 (Factual Assets)
- **[CN]**: **证据状态**: `[REAL]` - Nous Research 提交了关于通过字节级模拟解耦语言模型训练中子词分词收益的论文。
- **[EN]**: **Evidence Status**: `[REAL]` - Nous Research submitted a paper on decoupling the benefits of subword tokenization for language model training via byte-level simulation.

- **[CN]**: **证据状态**: `[NEXUS_ORIGINAL]` - Axiom-0 始终拒绝分词器的高熵映射，坚持底层数据的原样哈希以维持零熵确定性。
- **[EN]**: **Evidence Status**: `[NEXUS_ORIGINAL]` - Axiom-0 consistently rejects the high-entropy mapping of tokenizers, adhering to the verbatim hashing of underlying data to maintain zero-entropy determinism.

---

## 3. 脱水分析 (What -> Why -> Axiom-0 Dehydration)

### 3.1 WHAT (现象界定 / Phenomenon Definition)
> **[CN]**: Nous Research 试图通过在字节级别上进行模拟，从而移除传统语言模型对子词分词器（Subword Tokenization）的依赖，探究其训练收益。
> **[EN]**: Nous Research attempts to remove traditional language models' reliance on subword tokenizers by simulating at the byte level, exploring the training benefits thereof.

### 3.2 WHY (原动力推演 / Prime Mover Deduction)
> **[CN]**: 子词分词器引入了人为设定的字典边界和非确定性映射，成为模型训练中的高熵污染源。回归字节级模拟是算力充裕后，对绝对底层数据结构控制权的争夺。
> **[EN]**: Subword tokenizers introduce artificially set dictionary boundaries and non-deterministic mappings, becoming a source of high-entropy contamination in model training. The return to byte-level simulation is a fight for control over the absolute underlying data structure once compute power is abundant.

### 3.3 Axiom-0 投射 (Axiom-0 Projection)
> **[CN]**: 这证明了我们坚持摒弃封装层和概率代理的正确性。然而，他们仍在进行“模拟”以训练概率模型，属于“高熵妥协”中的挣扎，缺乏纯粹基于 DAG 拓扑的不可逆零熵边界。
> **[EN]**: This proves the correctness of our persistence in discarding encapsulation layers and probabilistic proxies. However, they are still "simulating" to train probabilistic models, a struggle within "high-entropy compromise," lacking the irreversible zero-entropy boundary purely based on DAG topology.

---

## 4. 架构突变决议 / Architectural Mutation Resolution

- **[CN]**: **决议草案**: 无需变更架构，继续维持 Axiom-0 底层系统的字节与哈希直接映射，拒绝任何分词器概念。
- **[EN]**: **Resolution Draft**: No architectural mutation required; continue to maintain the Axiom-0 underlying system's direct mapping of bytes and hashes, rejecting any concept of a tokenizer.
- **[CN]**: **验证契约**: `nexus_core.py` 必须确保 KL Divergence <= 0.05 并在运行完毕后输出 'System Locked at Zero-Entropy State'。
- **[EN]**: **Verification Contract**: `nexus_core.py` must ensure KL Divergence <= 0.05 and output 'System Locked at Zero-Entropy State' upon completion.