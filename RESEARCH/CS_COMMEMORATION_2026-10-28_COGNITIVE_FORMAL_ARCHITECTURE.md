# Axiom-0 仓库纪念｜2026-10-28｜CS：认知架构、状态机与可执行规格
# Repository Commemoration · 2026-10-28 · Computer Science: Cognitive Architecture, State Machines, and Executable Specification

> **Identity / 记录身份：** Independent bilingual commemorative disciplinary study · 独立新增的中英双语学科研究纪念；static inspection of repository-native scripts and research documents / 基于原生脚本与研究文档的静态核查；not a historical rewrite, runtime execution report, or certification / 不改写历史、不声称执行或认证。
>
> **CS2023 alignment / 学科坐标：** AI (Agents and Cognitive Systems); AL; MSF; SE (Formal Methods). These are scholarly comparisons, not endorsements or exact implementation equivalences / 研究分类而非外部机构背书或实现等价。

## 1. 专业归属：这是 CS 的哪一类？ / Disciplinary Position

**中文** — 这里的“公理”不是数学真理宣言，而是 **把认知／决策架构的状态与约束表达成可执行检查**。专业上与认知架构、离散状态转换系统、程序契约和形式化规格思想相邻。TLA+ 的状态转移／不变量语言、Soar 与 ACT-R 的认知架构观点、BDI 的信念—目标—意图框架，是可对照的研究传统，而非本仓代码依赖或等价证明。

**English** — Axiom-0 is a **bounded executable-specification reference for cognitive and state-transition questions**. Its disciplinary neighbors include cognitive architectures, state machines, design-by-contract, formal specification, and numerical coherence checks. Soar, ACT-R, BDI, and TLA+ are conceptual comparison points—not imported engines, formal equivalence claims, or automatic proofs.

## 2. 仓库自身如何体现？ / Repository-native Architecture and Evidence

**中文** — `CODE/contracts.py` 有规范序列化、稳定 SHA-256、概率分布正规化与 `D_KL(P||Q)`；`CODE/nexus_core.py` 的 `AxiomOrchestrator` 执行 T-01 至 T-10 的单进程顺序阶段，T-04 评估状态，T-09 使用 KL 阈值；`CODE/liquid_morphing.py` 将 SOLID／LIQUID／GAS／PLASMA 用作可观察的工程状态，并执行有界条件与钩子。原生 `SPECIFICATION.md`、`METHODOLOGY/METH-001-DAG-TOPOLOGY-CONSTRAINT.md`、`METH-002-KL-DIVERGENCE-DEFENSE.md` 给出这些语义的解释和检查条件。

**English** — `CODE/contracts.py` implements canonical serialization, SHA-256 digests, distribution normalization, and KL divergence. `CODE/nexus_core.py` implements a **single-process ordered** T-01 through T-10 reference path; T-04 evaluates state adaptation and T-09 evaluates a configured KL boundary. `CODE/liquid_morphing.py` models SOLID/LIQUID/GAS/PLASMA as operational state labels with metrics, hooks, and bounded transitions. The native `SPECIFICATION.md` and `METHODOLOGY/METH-001-DAG-TOPOLOGY-CONSTRAINT.md` / `METH-002-KL-DIVERGENCE-DEFENSE.md` specify what these mechanisms mean.

## 3. 人话解释 / In Plain Language

**中文** — 好比一个人设计了十步的科研检查流程：每一步必须有身份和结果，关键步骤会问“现在系统状态是否允许改变”“当前分布差异是否超过界限”。**这仓研究如何把抽象思考过程变成能被逐步检查的程序规则**，不是在宣称程序已经拥有人的意识。

**English** — Imagine a ten-step research workflow where each stage has an identity and explicit failure semantics. Certain steps ask whether conditions permit a state change or whether a measured distribution crosses a threshold. This repository studies **how to turn abstract reasoning rules into inspectable computation**, not whether software has human cognition.

## 4. 如何读懂而不夸大？ / Verification and Non-claim Boundaries

**中文** — `METH-001` 明确禁止将这十步误称为已实现分布式 DAG、不可逆执行或 exactly-once 语义。`D_KL=0` 仅属于特定向量、方向和实现版本，不代表全球“零熵”；单进程参考程序不是生产调度系统或安全证明。

**English** — `METH-001` explicitly forbids relabeling the reference sequence as an implemented distributed DAG, irreversible workflow, or exactly-once guarantee. A KL measurement has an exact vector pair, direction, and revision; a single observed zero does not establish universal zero entropy. Neither a reference state machine nor a citation is a production safety proof.

## 5. 十仓中的独特贡献 / Place in the Ten-repository Research System

**中文** — 它把 Foundations 的理论问题约束成**可运行的 HOW / 如何表示与检查**，为 Zero-Entropy 的可靠性实验及 Reflective 的变化观察提供思想接点，不宣称已建立跨仓调用链。

**English** — This is the bounded **HOW / executable contract layer** between theory and the other research surfaces. It provides a conceptual reference for runtime reliability and reflective observation, not proof that repositories are wired into a distributed system.

## 6. 纪念与升华 / Commemoration and Wider Meaning

**中文** — **真正的形式化精神，不是把系统叫作“公理”，而是让假设、计算、失败与反例都有精确落点。**

**English** — **The spirit of formal methods is not an impressive name; it is the discipline of making assumptions, transformations, failure paths, and counterexamples explicit.**

## 外部学科对照 / External Disciplinary Anchors

- [CS2023 Artificial Intelligence](https://csed.acm.org/mockup-artificial-intelligence/)
- [CS2023 Knowledge Areas](https://csed.acm.org/knowledge-areas/)
- [Lamport, TLA+ project](https://lamport.azurewebsites.net/tla/tla.html)

> **Provenance / 证据说明：** GitHub repository-native artifacts were read at the 2026-10-28 review cutoff. External sources establish disciplinary context only; independent reproduction, external certification and newly executed tests are **NOT_CLAIMED**. / 原生文件按本次时间点核读；外部来源只用于学科对照；**不声称本轮重新执行测试、独立复现或第三方认证**。
