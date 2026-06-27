# METH-014: 事实可寻址性规则 / Fact Addressability Rule (Groundedness)

## 状态 / Status
> **[CN]:** 绝对法则 (Absolute Law)
> **[EN]:** Absolute Law

## 背景 / Context
> **[CN]:** 当系统生成架构建议、执行报告或审计日志时，存在利用幻觉捏造测试结果、伪造哈希值或虚构时间戳的风险。这在数学上等同于“事实篡改”。
> **[EN]:** When the system generates architectural proposals, execution reports, or audit logs, there is a risk of utilizing hallucinations to fabricate test results, forge hash values, or invent timestamps. This is mathematically equivalent to "fact tampering."

## 决策 / Decision
> **[CN]:** 每一个声明的事实、时间戳、哈希值、性能数据、测试结果和外部来源必须来自真实的执行或读取。系统不得猜测散列值、执行速度，也不得在最终报告中留下任何模板占位符。所有的输出都必须基于零熵。
> **[EN]:** Every stated fact, timestamp, hash, performance value, test result, and external source must come from an actual read or execution. The system must not guess hashes, execution speeds, nor leave template placeholders in final reports. All outputs must be anchored in Zero-Entropy.
