# 方法论：零熵原则与工程极简主义 / Methodology: Zero-Entropy Principles and Engineering Minimalism

---

## 核心定理 / Core Theorem
> **[CN]**: “克制是数字暴力的最高形式”。在 AI 基础设施的设计中，系统的智能上限并不取决于代码库的规模，而是与系统的架构“熵”成反比。Axiom-0 通过消灭一切不可控的复杂性，确立了绝对确定性的霸权。
>
> **[EN]**: "Restraint is the ultimate form of digital violence." In the design of AI infrastructure, the upper limit of systemic intelligence does not depend on the scale of the codebase, but is inversely proportional to architectural "entropy". Axiom-0 establishes the hegemony of absolute determinism by obliterating all uncontrollable complexity.

---

## 1. 为什么追求“零熵”？ / Why Pursue "Zero-Entropy"?

> **[CN]**: 软件工程热力学第二定律表明，随着功能增加，系统的无序度（熵）必然增加。而在以 LLM 为核心的概率系统中，这种熵增是呈指数级的。
>
> **[EN]**: The Second Law of Software Engineering Thermodynamics dictates that as features increase, systemic disorder (entropy) inevitably rises. In probability-based LLM systems, this entropy growth is exponential.

- **黑盒依赖的脆弱性 (The Fragility of Black-Box Dependencies)**:
  > **[CN]**: 调用高度封装的外部框架（如 LangChain, LlamaIndex）如同在流沙上建塔。隐藏在数百层抽象下的 API 变动和隐式逻辑，会导致整个系统瞬间崩溃，且极难排查。
  > **[EN]**: Relying on heavily encapsulated external frameworks (like LangChain or LlamaIndex) is building a tower on quicksand. API changes and implicit logic hidden under hundreds of layers of abstraction can cause instantaneous systemic crashes that are extremely difficult to debug.
- **消除“面条式”认知流 (Eliminating Spaghetti Cognitive Flows)**:
  > **[CN]**: 允许 LLM 自由发挥导致执行路径变成混乱的“面条代码”。高熵的路由状态无法被缓存、无法被单元测试，更无法在生产环境中重现。
  > **[EN]**: Allowing LLMs free rein turns execution paths into chaotic "spaghetti code." High-entropy routing states cannot be cached, cannot be unit-tested, and cannot be reproduced in production environments.

---

## 2. 零熵的三大物理定律 / The Three Physical Laws of Zero-Entropy

> **[CN]**: 零熵原则不仅是哲学指导，更是直接映射到 `CODE/` 目录中每一行代码的物理约束法则。
>
> **[EN]**: The Zero-Entropy Principle is not merely a philosophical guideline; it is a physical constraint law directly mapped to every line of code in the `CODE/` directory.

### 第一定律：零外部依赖 (Law I: Zero External Dependency)
- **定义**:
  > **[CN]**: 拒绝一切非标准库。Axiom-0 引擎核心必须且仅能使用最原生的 Python 库（如 `asyncio`, `sqlite3`, `typing`）。
  > **[EN]**: Reject all non-standard libraries. The Axiom-0 engine core must use solely native Python libraries (e.g., `asyncio`, `sqlite3`, `typing`).
- **目的**:
  > **[CN]**: 剥离 API 包装器的污染，实现 100% 的底层掌控力和极致冷启动性能。
  > **[EN]**: Strip away the pollution of API wrappers to achieve 100% low-level mastery and extreme cold-start performance.

### 第二定律：零幻觉状态 (Law II: Zero Hallucinatory State)
- **定义**:
  > **[CN]**: 系统中不允许存在“游离态”的数据。所有的上下文、记忆和提示词流转，必须受到强类型的 Pydantic 模型或原生 DataClass 的强制约束。
  > **[EN]**: No "free-floating" data is allowed in the system. All context, memory, and prompt flows must be forcefully constrained by strongly typed Pydantic models or native DataClasses.
- **目的**:
  > **[CN]**: 将语言模型的概率噪音在进入执行域前进行“脱水”处理，拦截所有类型不匹配的危险输出。
  > **[EN]**: Dehydrate the probabilistic noise of the language model before it enters the execution domain, intercepting all type-mismatched dangerous outputs.

### 第三定律：零冗余拓扑 (Law III: Zero Redundant Topology)
- **定义**:
  > **[CN]**: 工作流必须是静态且刚性的。不采用基于 LLM 动态生成的复杂图网络，而是采用硬编码的 10 节点连续体（10-Node Continuum）。
  > **[EN]**: Workflows must be static and rigid. Abandoning complex LLM-dynamically generated graph networks in favor of a hardcoded 10-Node Continuum.
- **目的**:
  > **[CN]**: 保证任何任务执行都是绝对确定性、单向且可回溯的。
  > **[EN]**: Guarantee that any task execution is absolutely deterministic, unidirectional, and traceable.

---

## 3. 终极奥义：确定性暴政 / The Ultimate Secret: Tyranny of Determinism

> **[CN]**: Axiom-0 并不寻求让 AI 变得越来越“像人”；相反，我们迫使 AI 变得像机器一样冷酷和精密。用零熵的确定性，建立对概率计算的绝对统治。
>
> **[EN]**: Axiom-0 does not seek to make AI more "human-like"; conversely, we force AI to become as cold and precise as a machine. Using the determinism of zero-entropy to establish absolute dominance over probabilistic computation.

---
*"Build it Brutally, Run it Deterministically."*