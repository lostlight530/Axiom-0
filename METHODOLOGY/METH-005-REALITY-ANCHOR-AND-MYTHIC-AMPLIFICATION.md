> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `METHOD`
> - **Role:** Current methodology: **Repository fact and hypothesis separation**
> - **Authority:** Repository-native method authority for the procedure, assumptions, thresholds, evidence treatment and limitations expressed by this file
> - **Current meaning:** The method owns the procedural semantics named above. Read steps and thresholds as a contract for how the repository should reason or check, not as evidence that the method executed at the current revision
> - **Evidence / implementation boundary:** Method definition != method execution. Conceptual procedures do not become runtime capability without an implementation anchor, and historical examples retain their own cutoff rather than defining present status
> - **Cross-document relation:** `SPECIFICATION.md` and current `CODE/**` bound implementation; ADRs explain durable design choices; dated evidence and periodic records provide observations without redefining the method
> - **Update trigger:** Update when the procedure, assumptions, thresholds, implementation mapping, evidence semantics or historical/current boundary materially changes
> - **Preservation rule:** Existing procedure, examples and rationale remain in the same file. Current clarification is additive and does not erase earlier method history

# Repository fact and hypothesis separation

## 中文方法正文导读 / Chinese method counterpart

**准确研究对象 / Actual method:** 当前仓库源码事实、外部一手证据、推断和虚构场景必须分层，不得凭类比提升执行状态

**English procedure owner:** Repository fact and hypothesis separation

**输入—方法—产出 / Input, procedure and output:** 本方法应以其原始 `Inputs`、`Procedure` 与 `Outputs` 逐项限定适用对象，失败条件必须保留原先的 `Failure conditions`，没有匹配版本的实测命令时不登记为 `EXECUTED` / Match actual inputs, procedure and outputs, retain failure cases, and never infer execution from the method's presence

| Source heading / 英文原章 | 中文对应 / Chinese section |
| --- | --- |
| Objective | 目标 |
| Inputs | 输入及前置条件 |
| Procedure | 方法步骤 |
| Outputs | 结果和适用范围 |
| Failure conditions | 失败条件 |
| Evidence boundary | 证据边界 |
| Four-way classification example from the current core | 相应方法的当前约束 |

**代码与证据 / Code and evidence:** 按 `SPECIFICATION.md`、相应 `CODE/**` 函数和运行收据确认功能范围；本补充不提高原有验证等级 / Use the exact implementation and receipts to verify actual capability, this reading layer does not raise evidence grade


- Method version: 2026-08-24
- Scope: research and architecture interpretation

## Objective

Keep verified repository facts, external evidence, inference, and hypothesis in separate states so speculative material cannot overwrite what the repository actually implements or observed.

## Inputs

- concrete repository revision/files
- retained execution or research artifacts
- relevant external sources
- bounded question to be interpreted

## Procedure

1. Freeze the repository/evidence snapshot being discussed.
2. List directly observed repository facts.
3. List external evidence separately from local implementation.
4. Mark inference and hypothesis explicitly.
5. Record unknown or unresolved dimensions.
6. Change a hypothesis state only when new evidence actually bears on that hypothesis.
7. Use reconciliation rather than silently rewriting historical observations when later evidence changes interpretation.

## Outputs

A compact ledger or section that distinguishes:

- `LOCAL_REPOSITORY_FACT`
- `EXTERNAL_EVIDENCE`
- `INFERENCE`
- `HYPOTHESIS`
- `UNRESOLVED`

## Failure conditions

The method fails when a hypothesis overwrites retained evidence, when current files are backdated into earlier execution history, or when external evidence is promoted into local implementation without an implementation anchor.

## Evidence boundary

This is an interpretation method. It does not add runtime capability or prove a hypothesis merely by documenting it.

## Four-way classification example from the current core

- `LOCAL_REPOSITORY_FACT`: `CODE/contracts.py` computes normalized KL for explicit vector pairs.
- `LOCAL_REPOSITORY_FACT`: `CODE/nexus_core.py` currently obtains T-09's vectors from its default because the newly constructed state has no distribution field.
- `INFERENCE` with a direct static data-flow argument: changing only a user payload's `distribution` does not affect T-09's selected vector pair on this path.
- `HYPOTHESIS`: a future redesigned T-09 could offer caller-sensitive coherence gating; implementing a parser, explicit expected vector and negative-case tests would be prerequisites.
- `UNRESOLVED`: any real-world cognitive validity of the chosen probability vectors.

This example is a reproducible reading path for a reviewer, not an assertion that a runtime experiment was performed. Record source commit and check time when promoting the inference to an observed fixture.
