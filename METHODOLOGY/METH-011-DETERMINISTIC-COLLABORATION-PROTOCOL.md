# METH-011: 确定性协作协议 (Deterministic Collaboration Protocol)

## 背景与定义 / Context and Definition
> **[CN]:** 当前行业内（如2024年的“Survey Study on AI Agent Architectures”等报告所指出的）多智能体协作架构，广泛采用基于自然语言的自由对话与协商机制（ProfileGPT 等范式）。这种基于高熵自然语言沟通的“软协作”模式，不可避免地导致了信息损耗、逻辑漂移以及目标发散。在 Axiom-0 的零熵环境中，智能体之间的交互不能基于概率性的“对话”，而必须降维成代数级别的“硬协作”。
> **[EN]:** Multi-agent collaboration architectures currently pervasive in the industry (as noted in reports like the 2024 "Survey Study on AI Agent Architectures") widely adopt free-dialogue and negotiation mechanisms based on natural language (such as the ProfileGPT paradigm). This "soft collaboration" mode, predicated on high-entropy natural language communication, inevitably leads to information loss, logic drift, and goal divergence. In the zero-entropy environment of Axiom-0, interactions between agents cannot be based on probabilistic "dialogue" but must be dimensionally reduced to algebraic "hard collaboration."

## 理论推导 / Theoretical Derivation
> **[CN]:** 任何基于大模型的自由文本生成节点，其输出的不确定性（熵）均大于零。如果系统允许节点A与节点B直接进行自由文本交互，系统的总熵将呈现指数级增长的风险。因此，我们确立“确定性协作协议”。所有跨节点的信息传递，必须被强制转换并封装为结构化的强类型数据（如带有加密哈希签名的 JSON 载荷）。节点B不负责“理解”节点A的话语，而是机械地“解析”并“执行”代数指令。
> **[EN]:** The uncertainty (entropy) of output from any free-text generation node based on LLMs is greater than zero. If the system permits Node A and Node B to engage directly in free-text interaction, the total entropy of the system risks exponential growth. Therefore, we establish the "Deterministic Collaboration Protocol." All cross-node information transfer must be forcibly converted and encapsulated into structured, strongly-typed data (e.g., JSON payloads with cryptographic hash signatures). Node B is not responsible for "understanding" Node A's utterances but rather for mechanically "parsing" and "executing" algebraic commands.

## 实施原则 / Implementation Principles
> **[CN]:**
> 1. **格式刚性 (Format Rigidity):** 协作载荷必须 100% 匹配预定义的 JSON Schema，任何无法解析的载荷将引发直接熔断。
> 2. **无状态交互 (Stateless Interaction):** 节点之间的通信是无状态的，所有必要的上下文必须随载荷一次性显式传递，禁止维持长连接的“对话上下文”。
> 3. **单向不可逆 (Unidirectional Irreversibility):** 数据流只允许顺着 DAG 拓扑单向传递，节点不能向其上游发起“澄清请求”。
> **[EN]:**
> 1. **Format Rigidity:** Collaborative payloads must match predefined JSON Schemas with 100% accuracy. Any unparseable payload will trigger an immediate meltdown.
> 2. **Stateless Interaction:** Communication between nodes is stateless. All necessary context must be explicitly passed along with the payload at once; maintaining long-connection "dialogue context" is prohibited.
> 3. **Unidirectional Irreversibility:** Data flow is only permitted unidirectionally along the DAG topology. A node cannot initiate "clarification requests" to its upstream.

---
*"Collaboration is an equation, not a conversation."*