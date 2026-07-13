# 2026-05-28-hypotheses.md

## 1. 核心假设 / Core Hypothesis
- **[CN]**: 系统的绝对确定性无法建立在任何单点概率判断（如大模型意图分类）之上,核心流转调度必须降维为硬编码状态机，否则在长期执行中必将发散,
- **[EN]**: The absolute determinism of a system cannot be founded on any single-point probabilistic judgment (such as LLM intent classification). Core transition scheduling must be down-dimensioned into a hardcoded state machine, or it will inevitably diverge during long-term execution.

## 2. 零熵实验推演 / Zero-Entropy Deduction
- **[CN]**: 用 LLM 充当路由节点意味着系统的拓扑结构不是静态的 DAG，而是动态的马尔可夫链,在 AOT 爆发测试中，即使只有 0.1% 的分类漂移，经过 10 节点连续体的放大，$D_{KL}$ 也会迅速超过 0.05,剥离动态路由并实施严格的数学条件判断是避免系统崩溃的唯一途径,
- **[EN]**: Using an LLM as a routing node implies the system's topology is not a static DAG, but a dynamic Markov chain. In AOT blast testing, even a mere 0.1% classification drift will rapidly amplify through the 10-node continuum, pushing $D_{KL}$ well past 0.05. Stripping dynamic routing and enforcing strict mathematical conditional logic is the only path to avert systemic collapse.

entropy=0
