# METH-012: 零信任资源分配 / Zero Trust Resource Allocation

## 状态 / Status
> **[CN]:** 绝对法则 (Absolute Law)
> **[EN]:** Absolute Law

## 背景 / Context
> **[CN]:** 在传统的资源管理模型中，系统通常假设内部网络和组件是可信的，一旦完成初始认证，即可授予广泛的资源访问权限。然而，结合 NIST《Implementing a Zero Trust Architecture》等规范，这种“边界防御”在复杂的 Agentic 生态中极易失效。即使在完全隔离的沙箱中，由大模型驱动的逻辑流依然可能因为提示词注入或上下文污染而产生异常的资源消耗（如无限循环、内存泄漏或恶意网络探测）。
> **[EN]:** In traditional resource management models, systems often assume internal networks and components are trusted, granting broad resource access privileges once initial authentication is complete. However, aligning with specifications like NIST's "Implementing a Zero Trust Architecture," this "perimeter defense" is highly susceptible to failure in complex Agentic ecosystems. Even within fully isolated sandboxes, logic flows driven by LLMs may still exhibit anomalous resource consumption (e.g., infinite loops, memory leaks, or malicious network probing) due to prompt injection or context contamination.

## 决策 / Decision
> **[CN]:** Axiom-0 将零信任理念引入认知连续体，确立了“零信任资源分配”法则：任何认知节点、执行单元或子系统，在请求资源时，必须被默认视为“潜在污染源”。资源分配不基于认证，而是基于持续的密码学验证与极简权限原则。所有未在 DAG 拓扑中声明的请求必须被隐式拒绝。节点必须在微隔离空间中执行，系统仅在处理代数载荷时提供精确计算的瞬间资源配额。
> **[EN]:** Axiom-0 introduces the Zero Trust philosophy into the cognitive continuum, establishing the "Zero Trust Resource Allocation" law: any cognitive node, execution unit, or subsystem, when requesting resources, must default to being treated as a "potential source of contamination." Resource allocation relies on continuous cryptographic verification and the principle of least privilege, rather than authentication. All requests not declared in the DAG topology must be implicitly denied. Nodes must execute in micro-segmented spaces, with the system providing only momentary, precisely calculated resource quotas when processing algebraic payloads.
