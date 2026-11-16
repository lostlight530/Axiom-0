> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `METHOD`
> - **Role:** Current methodology: **Ordered T-01 to T-10 reference-pipeline inspection**
> - **Authority:** Repository-native method authority for the procedure, assumptions, thresholds, evidence treatment and limitations expressed by this file
> - **Current meaning:** The method owns the procedural semantics named above. Read steps and thresholds as a contract for how the repository should reason or check, not as evidence that the method executed at the current revision
> - **Evidence / implementation boundary:** Method definition != method execution. Conceptual procedures do not become runtime capability without an implementation anchor, and historical examples retain their own cutoff rather than defining present status
> - **Cross-document relation:** `SPECIFICATION.md` and current `CODE/**` bound implementation; ADRs explain durable design choices; dated evidence and periodic records provide observations without redefining the method
> - **Update trigger:** Update when the procedure, assumptions, thresholds, implementation mapping, evidence semantics or historical/current boundary materially changes
> - **Preservation rule:** Existing procedure, examples and rationale remain in the same file. Current clarification is additive and does not erase earlier method history

# Ordered T-01 to T-10 reference-pipeline inspection

## 中文方法正文导读 / Chinese method counterpart

**准确研究对象 / Actual method:** T-01 到 T-10 是参考流水线的有序记录与检查方法，不是全局任务图持久性证明

**English procedure owner:** Ordered T-01 to T-10 reference-pipeline inspection

**输入—方法—产出 / Input, procedure and output:** 本方法应以其原始 `Inputs`、`Procedure` 与 `Outputs` 逐项限定适用对象，失败条件必须保留原先的 `Failure conditions`，没有匹配版本的实测命令时不登记为 `EXECUTED` / Match actual inputs, procedure and outputs, retain failure cases, and never infer execution from the method's presence

| Source heading / 英文原章 | 中文对应 / Chinese section |
| --- | --- |
| Objective | 目标 |
| Inputs | 输入及前置条件 |
| Procedure | 方法步骤 |
| Outputs | 结果和适用范围 |
| Failure / unknown conditions | 失败与未知 |
| Evidence boundary | 证据边界 |
| Source-path counterexample: pipeline order does not imply input-sensitive validation | 相应方法的当前约束 |

**代码与证据 / Code and evidence:** 按 `SPECIFICATION.md`、相应 `CODE/**` 函数和运行收据确认功能范围；本补充不提高原有验证等级 / Use the exact implementation and receipts to verify actual capability, this reading layer does not raise evidence grade


- Method version: 2026-08-24
- Implementation anchor: `CODE/nexus_core.py`
- Scope: one `AxiomOrchestrator.run_continuum()` execution

## Objective

Inspect and interpret the implemented stage sequence without calling it a distributed DAG, irreversible workflow, or exactly-once execution system.

## Inputs

- the concrete `AxiomOrchestrator` revision
- one run identifier
- canonicalizable input payload
- the metrics provider used by the run
- the two probability vectors used by the KL stage

## Procedure

1. Identify the exact code revision and run.
2. Treat `T-01` through `T-10` as the implemented ordered sequence.
3. Record each emitted event in order with its stage identity and status.
4. Record the local state before/after any morph request at `T-04` where observable.
5. Record the exact KL input identity and result used at `T-09`.
6. Preserve a failure as a failure of that run; do not infer later-stage success when execution stopped earlier.
7. Interpret a new call to `run_continuum()` as a new run, not as proof of retry/idempotency semantics for external effects.

## Outputs

- run identifier
- observed ordered stage/event sequence
- resulting local state label
- KL evidence attached to that run where emitted
- limitations and unobserved stages if execution did not complete

## Failure / unknown conditions

Use an incomplete/unknown state rather than filling gaps when:

- an expected stage event is absent
- the run/revision cannot be identified
- the KL vectors or result are not recoverable
- the metrics provider identity matters but is unknown

## Evidence boundary

This method can establish the event order and outputs observed for one reference-core run.

It does not establish durable workflow persistence, external-effect idempotency, compensation, distributed scheduling, global convergence, or future-run correctness.

## Source-path counterexample: pipeline order does not imply input-sensitive validation

At source revision `555ed4ea5c2a7bec99e86e595147c1c53f1d9086`, `run_continuum` initializes state through `_dehydration_pipeline`, which contains only `canonical_payload` and `input_digest`. T-09 asks for `state.get("distribution", default)` although no earlier stage populates that key. **Stage execution order therefore cannot prove user-supplied distribution validation.** Inspect T-09's input data flow separately from the T-01–T-10 event sequence.

A useful negative fixture is an input mapping with a deliberately non-identity `distribution` alongside a control mapping without that field. The expected **source-derived hypothesis** is that both orchestration paths use the same default T-09 comparison; the independent `kl_divergence` function would differ for the explicitly supplied non-identity pair. Do not report this as an executed fixture unless a revision-matched run is retained.

`run_id` hashes emitted events containing UTC observation timestamps, so it is a trace identity and not evidence that two identical inputs will receive one fixed identifier. On exceptions the function raises without returning the accumulated `events` list; successful-run topology and failure-path evidence availability are different questions.
