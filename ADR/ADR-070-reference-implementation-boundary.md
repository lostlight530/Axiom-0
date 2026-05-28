# ADR-070: 参考实现边界剥离法则 / Reference Implementation Boundary Law

## 状态 / Status
> **[CN]:** 绝对法则 (Absolute Law)
> **[EN]:** Absolute Law

## 背景 / Context
> **[CN]:** 工程师常常产生一种错觉，将最终运行的代码视为系统的“唯一真理”。在零熵协议中，这是一种致命的本末倒置。代码只不过是架构在特定算力和语言环境下的物理妥协物，赋予代码最高解释权将导致系统被永恒锁死在低级语法树中。
> **[EN]:** Engineers often harbor an illusion, viewing the final running code as the "sole truth" of the system. In the zero-entropy protocol, this is a fatal inversion of priorities. Code is merely a physical compromise of the architecture under specific compute and language environments; granting code supreme interpretative authority will forever lock the system within low-level syntax trees.

## 决策 / Decision
> **[CN]:** 强行将 `CODE/` 目录永久降级定性为“参考实现边界 (Reference Implementation Boundary)”。它仅仅是 Axiom-0 哲学在当前算力媒介下产生的一个极简投影实例。系统的真正灵魂与绝对权力中枢存在于 ADR 与 Methodology 层。任何企图利用代码特性推翻架构定义的行为，都会遭遇协议的无情镇压，代码层只配作为法则的哑巴执行器。
> **[EN]:** Forcefully and permanently demote the `CODE/` directory to the qualitative status of a "Reference Implementation Boundary." It is merely a minimalist projected instance of the Axiom-0 philosophy generated under the current compute medium. The true soul and absolute power center of the system reside in the ADR and Methodology layers. Any attempt to use code features to overthrow architectural definitions will meet ruthless suppression by the protocol; the code layer is only fit to serve as the mute executor of the laws.
