> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `METHOD`
> - **Role:** Current methodology: **Collaboration runtime is not implemented by Axiom-0**
> - **Authority:** Repository-native method authority for the procedure, assumptions, thresholds, evidence treatment and limitations expressed by this file
> - **Current meaning:** The method owns the procedural semantics named above. Read steps and thresholds as a contract for how the repository should reason or check, not as evidence that the method executed at the current revision
> - **Evidence / implementation boundary:** Method definition != method execution. Conceptual procedures do not become runtime capability without an implementation anchor, and historical examples retain their own cutoff rather than defining present status
> - **Cross-document relation:** `SPECIFICATION.md` and current `CODE/**` bound implementation; ADRs explain durable design choices; dated evidence and periodic records provide observations without redefining the method
> - **Update trigger:** Update when the procedure, assumptions, thresholds, implementation mapping, evidence semantics or historical/current boundary materially changes
> - **Preservation rule:** Existing procedure, examples and rationale remain in the same file. Current clarification is additive and does not erase earlier method history

# Collaboration runtime is not implemented by Axiom-0

## 中文方法正文导读 / Chinese method counterpart

**准确研究对象 / Actual method:** Axiom 未实现持久多智能体协作运行时，提案级协议不得宣称已执行协调

**English procedure owner:** Collaboration runtime is not implemented by Axiom-0

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
| Minimal missing contracts for collaboration | 相应方法的当前约束 |

**代码与证据 / Code and evidence:** 按 `SPECIFICATION.md`、相应 `CODE/**` 函数和运行收据确认功能范围；本补充不提高原有验证等级 / Use the exact implementation and receipts to verify actual capability, this reading layer does not raise evidence grade


- Method version: 2026-08-24
- Implementation status: `NOT_IMPLEMENTED_IN_REFERENCE_CORE`
- Historical filename retained for continuity

## Objective

Prevent repository documentation from presenting Axiom-0 as a deterministic multi-agent collaboration runtime.

## Repository fact

The current executable core contains local contracts, heuristic state adaptation, and a single-process ordered reference pipeline. It does not contain agent identity, message transport, handoff protocol, distributed consensus, shared-task arbitration, or multi-agent execution state.

## Interpretation method

When research discusses collaboration architecture:

1. classify the external result as research/reference evidence
2. identify its original assumptions and system type
3. keep any mapping to Axiom conceptual unless a concrete local module exists
4. do not infer deterministic collaboration from deterministic serialization or ordered local stages
5. do not infer consensus from repeated agreement in research documents

## Inputs

- the collaboration/consensus claim and cited external mechanism
- named local message, coordination, or state-transition implementation, if any
- failure model and validation evidence, if retained

## Procedure

1. distinguish single-process serialized transitions from multi-agent coordination
2. resolve claimed messages, membership, consensus, and failure handling to executable paths
3. classify absent surfaces `NOT_IMPLEMENTED` and external mechanisms `REFERENCE_ONLY`
4. preserve assumptions and counterexamples

## Outputs

- `REFERENCE_ONLY` / `NOT_IMPLEMENTED` status
- bounded conceptual mapping where useful
- explicit missing implementation surface

## Failure conditions

The method fails when documentation claims agent-to-agent messaging, consensus, distributed coordination, or collaboration guarantees without a concrete executable implementation.

## Evidence boundary

This methodology limits claims; it does not implement collaboration.

## Minimal missing contracts for collaboration

The `AxiomOrchestrator` uses one local `self.nodes` tuple and an injected `metrics_provider` callback. Neither is an inter-agent protocol. There is no agent identifier, sender identity, message schema, permission grant, delegate task ID, message delivery receipt, ordering guarantee across participants, or distributed failure reconciliation in `CODE/**`.

A future collaboration experiment must distinguish deterministic serialization of a message payload from deterministic execution of multiple participants. A reproducible scenario would identify at least two independently executed actors and show identity-bound message ordering, loss/retry behavior and conflict disposition. These remain `NOT_IMPLEMENTED`, not untested built-in features.
