> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `METHOD`
> - **Role:** Current methodology: **Tool and content isolation are external to the Axiom reference core**
> - **Authority:** Repository-native method authority for the procedure, assumptions, thresholds, evidence treatment and limitations expressed by this file
> - **Current meaning:** The method owns the procedural semantics named above. Read steps and thresholds as a contract for how the repository should reason or check, not as evidence that the method executed at the current revision
> - **Evidence / implementation boundary:** Method definition != method execution. Conceptual procedures do not become runtime capability without an implementation anchor, and historical examples retain their own cutoff rather than defining present status
> - **Cross-document relation:** `SPECIFICATION.md` and current `CODE/**` bound implementation; ADRs explain durable design choices; dated evidence and periodic records provide observations without redefining the method
> - **Update trigger:** Update when the procedure, assumptions, thresholds, implementation mapping, evidence semantics or historical/current boundary materially changes
> - **Preservation rule:** Existing procedure, examples and rationale remain in the same file. Current clarification is additive and does not erase earlier method history

# Tool and content isolation are external to the Axiom reference core

## 中文方法正文导读 / Chinese method counterpart

**准确研究对象 / Actual method:** 认知防火墙与沙箱是调用方职责，本仓参考核心并没有通用工具权限代理

**English procedure owner:** Tool and content isolation are external to the Axiom reference core

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
| Concrete threat-model boundary | 相应方法的当前约束 |

**代码与证据 / Code and evidence:** 按 `SPECIFICATION.md`、相应 `CODE/**` 函数和运行收据确认功能范围；本补充不提高原有验证等级 / Use the exact implementation and receipts to verify actual capability, this reading layer does not raise evidence grade


- Method version: 2026-08-24
- Implementation status: `NOT_IMPLEMENTED_IN_REFERENCE_CORE`
- Historical filename retained for continuity

## Objective

Prevent documentation from implying that Axiom-0 implements a tool sandbox, capability allowlist, credential boundary, prompt firewall, or policy-enforcement runtime when those mechanisms are absent from the current executable core.

## Repository fact

`CODE/contracts.py`, `CODE/liquid_morphing.py`, and `CODE/nexus_core.py` do not implement general-purpose tool authorization or untrusted-content isolation.

## Interpretation method

When research discusses tool isolation or prompt/content trust boundaries:

1. label the mechanism as external guidance, reference architecture, or non-implemented requirement
2. identify the exact local surface, if any, that is actually relevant
3. do not infer authorization from input validation
4. do not infer sandboxing from a single-process reference pipeline
5. do not infer prompt-injection resistance from canonicalization or evidence labeling

## Inputs

- the external security/isolation claim and its source surface
- any named repository implementation path
- the exact threat, authority, or isolation boundary being asserted

## Procedure

1. separate metaphor from an executable security control
2. resolve every claimed control to code and a bounded validation record
3. otherwise classify it `REFERENCE_ONLY` or `NOT_IMPLEMENTED`
4. retain missing threat-model and operational evidence explicitly

## Outputs

- explicit `NOT_IMPLEMENTED` or `REFERENCE_ONLY` status
- bounded mapping from the external idea to any genuinely relevant local component
- unresolved implementation gap where applicable

## Failure conditions

The method fails when documentation claims local credential scoping, tool allowlisting, sandbox isolation, or policy enforcement without a concrete implementation artifact.

## Evidence boundary

This methodology is a claim-control boundary only. It does not provide the missing security mechanism.

## Concrete threat-model boundary

`CODE/nexus_core.py` accepts a JSON-serializable payload but performs no trust-origin classification or prompt-injection discrimination; `CODE/contracts.py` rejects certain numeric structures but does not inspect adversarial instructions. `AxiomMorphingEngine` optional hooks are caller-provided callables, not capability-restricted executors. They can perform side effects outside the local state, and `shift()` has no compensating rollback of those effects.

A genuine future security claim requires an explicit actor/credential/target model, a tool-execution enforcement point, untrusted-content propagation rules, denial receipts and negative tests. Documenting these as absent avoids the false inference that deterministic JSON or an `asyncio.Lock` is an isolation boundary.
