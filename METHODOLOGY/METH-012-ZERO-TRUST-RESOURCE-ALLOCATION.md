> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `METHOD`
> - **Role:** Current methodology: **Resource allocation and quota control are not implemented by the reference core**
> - **Authority:** Repository-native method authority for the procedure, assumptions, thresholds, evidence treatment and limitations expressed by this file
> - **Current meaning:** The method owns the procedural semantics named above. Read steps and thresholds as a contract for how the repository should reason or check, not as evidence that the method executed at the current revision
> - **Evidence / implementation boundary:** Method definition != method execution. Conceptual procedures do not become runtime capability without an implementation anchor, and historical examples retain their own cutoff rather than defining present status
> - **Cross-document relation:** `SPECIFICATION.md` and current `CODE/**` bound implementation; ADRs explain durable design choices; dated evidence and periodic records provide observations without redefining the method
> - **Update trigger:** Update when the procedure, assumptions, thresholds, implementation mapping, evidence semantics or historical/current boundary materially changes
> - **Preservation rule:** Existing procedure, examples and rationale remain in the same file. Current clarification is additive and does not erase earlier method history

# Resource allocation and quota control are not implemented by the reference core

## 中文方法正文导读 / Chinese method counterpart

**准确研究对象 / Actual method:** 资源使用的观察和强制配额执行属于不同机制，本仓没有生产级资源配额调度器

**English procedure owner:** Resource allocation and quota control are not implemented by the reference core

**输入—方法—产出 / Input, procedure and output:** 本方法应以其原始 `Inputs`、`Procedure` 与 `Outputs` 逐项限定适用对象，失败条件必须保留原先的 `Failure conditions`，没有匹配版本的实测命令时不登记为 `EXECUTED` / Match actual inputs, procedure and outputs, retain failure cases, and never infer execution from the method's presence

| Source heading / 英文原章 | 中文对应 / Chinese section |
| --- | --- |
| Objective | 目标 |
| Repository fact | 当前仓库事实 |
| Interpretation method | 解释方法 |
| Inputs | 输入及前置条件 |
| Procedure | 方法步骤 |
| Outputs | 结果和适用范围 |
| Failure conditions | 失败条件 |
| Evidence boundary | 证据边界 |
| Observable metrics are not allocated resources | 相应方法的当前约束 |

**代码与证据 / Code and evidence:** 按 `SPECIFICATION.md`、相应 `CODE/**` 函数和运行收据确认功能范围；本补充不提高原有验证等级 / Use the exact implementation and receipts to verify actual capability, this reading layer does not raise evidence grade


- Method version: 2026-08-24
- Implementation status: `NOT_IMPLEMENTED_IN_REFERENCE_CORE`
- Historical filename retained for continuity

## Objective

Prevent generic resource-governance guidance from being mistaken for an Axiom runtime capability.

## Repository fact

The current reference core does not provide:

- worker-pool management
- queue scheduling
- CPU/memory quota enforcement
- network policy
- cost metering
- deadline propagation
- cancellation trees
- external spend authorization

`SystemMetrics` contains resource-like scalar inputs for local heuristic state selection, but it does not enforce those resources.

## Interpretation method

When research discusses resource allocation:

1. distinguish **observed/caller-supplied metrics** from **enforced quotas**
2. treat Axiom's resource fields as heuristic inputs only
3. label external quota/scheduling patterns as `REFERENCE_ONLY`
4. do not infer resource governance from state-label changes

## Inputs

- named resource metric and collection surface
- enforcement policy, quota, timeout, or cancellation rule, if implemented
- command/revision/result for any claimed enforcement test

## Procedure

1. separate observation from enforcement
2. resolve each limit to an executable mechanism and failure behavior
3. classify absent enforcement `NOT_IMPLEMENTED`
4. retain external resource-governance ideas as bounded references only

## Outputs

- exact local metric surface, if relevant
- explicit `NOT_IMPLEMENTED` status for enforcement
- bounded external-reference mapping

## Failure conditions

The method fails when documentation claims quota enforcement, cost control, concurrency management, or cancellation semantics without an executable implementation.

## Evidence boundary

A recorded CPU/memory scalar can describe one input value. It cannot prove that the repository constrained the underlying resource.

## Observable metrics are not allocated resources

`SystemMetrics.load_score` is computed from caller-provided `cpu_percent`, `memory_percent` and `queue_depth`, with formula `0.7 * max(cpu,memory) + 0.3 * min(queue_depth/100, 1)`. `active_tasks` is validated but does not enter the `load_score` expression. Neither `evaluate_morph` nor `shift` allocates CPU or memory, polls an OS resource controller, cancels tasks or enforces a budget.

For a genuine quota-enforcement claim, identify the operating-system or scheduler enforcement API and report a resource-oversubscription failure case. The present implementation can at most make a local state-label selection from reported scalar inputs.
