# ADR-005: 裸机协议检索管线 / ADR-005: Bare-Metal Retrieval Pipeline

---

## 状态 / Status
**已采纳 (Accepted)**

---

## 背景 / Context
> **[CN]**: 现代 AI 架构往往极度依赖昂贵的闭源模型 API 或沉重的第三方向量数据库来实现“记忆”和“上下文召回”。这种妥协违背了 Axiom-0 对抗高熵的底层原则。我们需要在离线、无外部依赖的单进程环境中，实现媲美甚至超越商业 RAG 方案的精准检索。
>
> **[EN]**: Contemporary AI architectures overwhelmingly rely on expensive proprietary APIs or bloated third-party vector databases for "memory" and "context recall". This compromise violates Axiom-0's core directive against high entropy. We require precision retrieval—rivaling or exceeding commercial RAG solutions—entirely within an offline, single-process, zero-dependency environment.

---

## 决策 / Decision
> **[CN]**: 抛弃外部大模型调用和第三方庞大依赖库。将 SQLite 和 FTS5 作为一等公民。通过纯 Python 标准库构建涵盖 FTS5 BM25、图网络关联扩散以及 Cosine 相似度的多级融合重排器（CognitiveReranker）。
>
> **[EN]**: Abandon external LLM calls and massive third-party dependencies. Elevate SQLite and FTS5 to first-class citizens. Construct a multi-stage fusion CognitiveReranker using pure Python standard libraries, encompassing FTS5 BM25, graph-based associative diffusion, and Cosine similarity.

---

## 架构层级 / The Zero-Dependency Pipeline

### 1. SQLite FTS5 原生检索引擎 (Native FTS5 BM25 Engine)
- **[CN]**: 利用 C 语言级别极速的 FTS5 虚拟表，配合原生 BM25 算法进行第一梯队的海量数据粗筛。
- **[EN]**: Leverage C-level hyper-fast FTS5 virtual tables coupled with native BM25 scoring for initial coarse-grained mass data filtering.

### 2. 拓扑 1-Hop 扩散 (Topological 1-Hop Diffusion)
- **[CN]**: 并非止步于文本匹配。基于匹配到的实体，立即在数据库中执行基于生物学权重（Biological Weight）的 1-Hop 图关联扩展，捞出“逻辑上相关但在文本上未命中”的潜在神经元。
- **[EN]**: Do not stop at lexical matching. Based on matched entities, execute immediate 1-hop graph associative diffusion using internal biological weights, retrieving latent neurons that are "logically related but lexically invisible".

### 3. 纯 Python 认知重排 (Pure Python Cognitive Reranking)
- **[CN]**: 在内存中，用 Python 内置的 `collections.Counter` 和 `math` 库手搓 TF-IDF 与余弦相似度算法。将 FTS 基础分、节点权重和语义共鸣分进行融合排序。全程禁止调用外部 Embedding API。
- **[EN]**: In-memory, hand-roll TF-IDF and Cosine similarity algorithms using Python's built-in `collections.Counter` and `math` libraries. Fuse the base FTS score, node weights, and semantic resonance. Calling external Embedding APIs is strictly forbidden.

---

## 后果 / Consequences

### 正面影响 (Positive)
- **真正的数字主权**: 系统能在彻底断网、没有 `pip install` 任何重型库的情况下稳定提供搜索级别的精准记忆提取。 / True digital sovereignty. The system provides search-engine-grade memory recall completely offline, without `pip install`ing any heavy dependencies.
- **毫秒级极速响应**: 避开了 HTTP 请求的网络波动和反序列化开销。 / Millisecond-level hyper-fast response, bypassing HTTP latency and deserialization overhead.

### 负面影响 (Negative)
- **无法捕获模糊语义**: 因为没有使用千亿参数的连续向量，单纯靠原生 Python 对近义词或隐喻的模糊匹配能力较弱。 / Cannot capture deep metaphorical semantics, as the lack of billion-parameter continuous embeddings weakens fuzzy synonym matching.

---
*"Build it Brutally, Run it Deterministically"*
