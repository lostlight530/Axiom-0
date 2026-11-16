> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `METHOD`
> - **Role:** Current methodology: **Creative architecture material stays hypothesis-labelled**
> - **Authority:** Repository-native method authority for the procedure, assumptions, thresholds, evidence treatment and limitations expressed by this file
> - **Current meaning:** The method owns the procedural semantics named above. Read steps and thresholds as a contract for how the repository should reason or check, not as evidence that the method executed at the current revision
> - **Evidence / implementation boundary:** Method definition != method execution. Conceptual procedures do not become runtime capability without an implementation anchor, and historical examples retain their own cutoff rather than defining present status
> - **Cross-document relation:** `SPECIFICATION.md` and current `CODE/**` bound implementation; ADRs explain durable design choices; dated evidence and periodic records provide observations without redefining the method
> - **Update trigger:** Update when the procedure, assumptions, thresholds, implementation mapping, evidence semantics or historical/current boundary materially changes
> - **Preservation rule:** Existing procedure, examples and rationale remain in the same file. Current clarification is additive and does not erase earlier method history

# Creative architecture material stays hypothesis-labelled

## 中文方法正文导读 / Chinese method counterpart

**准确研究对象 / Actual method:** 生成的架构创意必须标注假设与可证伪条件，研究想象不等于已安装服务

**English procedure owner:** Creative architecture material stays hypothesis-labelled

**输入—方法—产出 / Input, procedure and output:** 本方法应以其原始 `Inputs`、`Procedure` 与 `Outputs` 逐项限定适用对象，失败条件必须保留原先的 `Failure conditions`，没有匹配版本的实测命令时不登记为 `EXECUTED` / Match actual inputs, procedure and outputs, retain failure cases, and never infer execution from the method's presence

| Source heading / 英文原章 | 中文对应 / Chinese section |
| --- | --- |
| Objective | 目标 |
| Inputs | 输入及前置条件 |
| Procedure | 方法步骤 |
| Outputs | 结果和适用范围 |
| Failure conditions | 失败条件 |
| Evidence boundary | 证据边界 |
| Bounded concept-to-mechanism comparison | 相应方法的当前约束 |

**代码与证据 / Code and evidence:** 按 `SPECIFICATION.md`、相应 `CODE/**` 函数和运行收据确认功能范围；本补充不提高原有验证等级 / Use the exact implementation and receipts to verify actual capability, this reading layer does not raise evidence grade


- Method version: 2026-08-24
- Implementation status: `DOCUMENTARY_ONLY`
- Historical filename retained for continuity

## Objective

Preserve expressive or exploratory architecture material without allowing metaphor, synthetic structure, or speculative design to masquerade as implemented Axiom behavior.

## Inputs

- a bounded architecture question
- known repository facts
- explicit constraints/non-goals
- current implementation inventory
- supporting evidence where available

## Procedure

1. Separate concrete repository facts from exploratory ideas.
2. Label non-implemented alternatives as `PROPOSED`, `HYPOTHESIS`, or equivalent bounded states.
3. Name the implementation gap explicitly.
4. Record assumptions and disconfirming evidence where relevant.
5. Do not edit `CODE/**` or claim runtime behavior merely because an exploratory document exists.
6. If an idea later becomes a durable repository decision, distill it separately through the ADR process.

## Outputs

- labelled exploratory alternatives
- assumptions and known conflicts
- explicit implementation status
- links to current repository facts when those facts actually support the proposal

## Failure conditions

The method fails when:

- metaphor is presented as measurement
- a proposal is presented as current architecture
- implementation status is omitted
- external architecture is described as an Axiom runtime feature

## Evidence boundary

Creative material can support ideation history only. It is not execution evidence, a safety guarantee, or proof of repository capability.

## Bounded concept-to-mechanism comparison

A proposed "irreversible cognitive DAG" cannot be matched to `AxiomOrchestrator.nodes`: the latter is a tuple traversed sequentially inside one coroutine with no persisted checkpoint/edge graph. Likewise, "knowledge phase transformation" maps at most to `MorphState` labels and threshold-driven local assignment in `liquid_morphing.py`.

For an exploratory alternative, document a separate **missing-mechanism list**: durable checkpoint identity, retry/effect ownership, graph edges, state transition invariants, semantic quality metric and falsifying input. Keep these as design questions; never substitute the names T-01–T-10 or PLASMA for evidence of the proposed system.
