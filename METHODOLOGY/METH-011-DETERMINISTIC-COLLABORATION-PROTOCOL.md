# METH-011: 确定性协作协议 / Deterministic Collaboration Protocol

## 状态 / Status
> **[CN]:** 绝对法则 (Absolute Law)
> **[EN]:** Absolute Law

## 背景 / Context
> **[CN]:** 当前行业内（如2024年的“Survey Study on AI Agent Architectures”等报告所指出的）多智能体协作架构，广泛采用基于自然语言的自由对话与协商机制（ProfileGPT 等范式）。这种基于高熵自然语言沟通的“软协作”模式，不可避免地导致了信息损耗、逻辑漂移以及目标发散。在 Axiom-0 的零熵环境中，智能体之间的交互不能基于概率性的“对话”，而必须降维成代数级别的“硬协作”。任何基于大模型的自由文本生成节点，其输出的不确定性（熵）均大于零。如果系统允许节点A与节点B直接进行自由文本交互，系统的总熵将呈现指数级增长的风险。
> **[EN]:** Multi-agent collaboration architectures currently pervasive in the industry (as noted in reports like the 2024 "Survey Study on AI Agent Architectures") widely adopt free-dialogue and negotiation mechanisms based on natural language (such as the ProfileGPT paradigm). This "soft collaboration" mode, predicated on high-entropy natural language communication, inevitably leads to information loss, logic drift, and goal divergence. In the zero-entropy environment of Axiom-0, interactions between agents cannot be based on probabilistic "dialogue" but must be dimensionally reduced to algebraic "hard collaboration." The uncertainty (entropy) of output from any free-text generation node based on LLMs is greater than zero. If the system permits Node A and Node B to engage directly in free-text interaction, the total entropy of the system risks exponential growth.

## 决策 / Decision
> **[CN]:** 因此，我们确立“确定性协作协议”。所有跨节点的信息传递，必须被强制转换并封装为结构化的强类型数据（如带有加密哈希签名的 JSON 载荷）。节点B不负责“理解”节点A的话语，而是机械地“解析”并“执行”代数指令。格式必须绝对刚性，任何无法解析的载荷将引发直接熔断；通信必须无状态，所有必要的上下文必须显式传递；数据流只允许单向不可逆，严禁向后澄清请求。
> **[EN]:** Therefore, we establish the "Deterministic Collaboration Protocol." All cross-node information transfer must be forcibly converted and encapsulated into structured, strongly-typed data (e.g., JSON payloads with cryptographic hash signatures). Node B is not responsible for "understanding" Node A's utterances but rather for mechanically "parsing" and "executing" algebraic commands. Format must be absolutely rigid; any unparseable payload will trigger immediate meltdown. Communication must be stateless with all context explicitly passed. Data flow is unidirectional and irreversible; backward clarification requests are strictly prohibited.


---
## 补充法则 / Supplementary Law (2026-07-05)

### 事实资产 (Factual Assets)
* **证据状态**: `[REAL]`
* **来源**: https://github.com/Kulaxyz/token-diet
* **脱水描述**: Always-on token-efficiency skill for coding agents. ~31% lower bill on average, no loss of correctness.

### 方法论投射 (Methodology Projection)
> **[CN]**: 鉴于 token-diet 展现的高效执行效率，方法论上我们要求强制剔除冗余依赖结构（Token-Diet / Zero-Overhead）。所有的计算必须收敛于编译时的代数校验，严禁在运行时产生非确定性（Non-deterministic）发散。
> **[EN]**: Given the high execution efficiency demonstrated by token-diet, the methodology dictates mandatory culling of redundant dependency structures (Token-Diet / Zero-Overhead). All computations must converge into compile-time algebraic validations, strictly forbidding non-deterministic divergence at runtime.
