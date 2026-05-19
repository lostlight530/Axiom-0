# ADR-002: 不可逆 DAG 拓扑约束法则 / Irreversible DAG Topological Constraint

## 状态 / Status
> **[CN]:** 绝对法则 (Absolute Law)
> **[EN]:** Absolute Law

## 背景 / Context
> **[CN]:** 传统智能体架构通常允许模型在内部“反复思考纠错”(如 ReAct 循环)。这种看似智能的机制，实则是熵增与上下文污染的温床。一旦中间环节出错，带着被污染状态的重试只会导致灾难性的误差放大。
> **[EN]:** Traditional agent architectures often allow models to "re-think and correct" internally (e.g., ReAct loops). This seemingly intelligent mechanism is actually a breeding ground for entropy and context pollution. Once an intermediate step errors out, retrying with a contaminated state only leads to catastrophic error amplification.

## 决策 / Decision
> **[CN]:** 强制确立 10 节点单向流动连续体。Axiom-0 强行将逻辑切分为信息脱水、抽象、收束到对齐的 10 个独立且孤立的节点。数据流如同时间流逝一样不可回溯。任何节点若产生逻辑畸变，必须直接触发物理熔断并抛弃整个执行树，绝不允许概率模型进行“盲目的重试”。
> **[EN]:** Forcefully establish a 10-node one-way flow continuum. Axiom-0 forcefully slices logic into 10 independent and isolated nodes for information dehydration, abstraction, and alignment. Data flows irreversibly like time. If any node generates a logical distortion, it must immediately trigger a physical meltdown and discard the entire execution tree; "blind retries" by probabilistic models are absolutely forbidden.