> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `METHOD`
> - **Role:** Current methodology: **Threshold interpretation is surface-specific**
> - **Authority:** Repository-native method authority for the procedure, assumptions, thresholds, evidence treatment and limitations expressed by this file
> - **Current meaning:** The method owns the procedural semantics named above. Read steps and thresholds as a contract for how the repository should reason or check, not as evidence that the method executed at the current revision
> - **Evidence / implementation boundary:** Method definition != method execution. Conceptual procedures do not become runtime capability without an implementation anchor, and historical examples retain their own cutoff rather than defining present status
> - **Cross-document relation:** `SPECIFICATION.md` and current `CODE/**` bound implementation; ADRs explain durable design choices; dated evidence and periodic records provide observations without redefining the method
> - **Update trigger:** Update when the procedure, assumptions, thresholds, implementation mapping, evidence semantics or historical/current boundary materially changes
> - **Preservation rule:** Existing procedure, examples and rationale remain in the same file. Current clarification is additive and does not erase earlier method history

# Threshold interpretation is surface-specific

## 中文方法正文导读 / Chinese method counterpart

**准确研究对象 / Actual method:** KL 数值阈值和液态 morphing 的启发式判据不能共用同一个未经定义的指标

**English procedure owner:** Threshold interpretation is surface-specific

**输入—方法—产出 / Input, procedure and output:** 本方法应以其原始 `Inputs`、`Procedure` 与 `Outputs` 逐项限定适用对象，失败条件必须保留原先的 `Failure conditions`，没有匹配版本的实测命令时不登记为 `EXECUTED` / Match actual inputs, procedure and outputs, retain failure cases, and never infer execution from the method's presence

| Source heading / 英文原章 | 中文对应 / Chinese section |
| --- | --- |
| Objective | 目标 |
| Repository surfaces | 相应方法的当前约束 |
| Procedure | 方法步骤 |
| Inputs | 输入及前置条件 |
| Outputs | 结果和适用范围 |
| Failure conditions | 失败条件 |
| Evidence boundary | 证据边界 |
| Threshold precedence and unreachable caller-distribution gate | 相应方法的当前约束 |

**代码与证据 / Code and evidence:** 按 `SPECIFICATION.md`、相应 `CODE/**` 函数和运行收据确认功能范围；本补充不提高原有验证等级 / Use the exact implementation and receipts to verify actual capability, this reading layer does not raise evidence grade


- Method version: 2026-08-24
- Scope: numeric/research interpretation across `contracts.py` and `liquid_morphing.py`

## Objective

Prevent one threshold from being treated as a universal repository law when Axiom contains different measurement surfaces with different semantics.

## Repository surfaces

### KL divergence

`CODE/contracts.py` computes a scalar `D_KL(P || Q)` but does not define one universal pass/fail threshold for all claims.

### Morphing heuristics

`CODE/liquid_morphing.py` contains implementation-specific thresholds/weights used to select a local state label from `SystemMetrics`.

These thresholds are heuristic control parameters, not scientific proofs of entropy, safety, or optimality.

## Procedure

1. Identify the exact metric and code surface.
2. Record the threshold value only if it is actually part of that surface or the evidence artifact.
3. State whether the threshold is an implementation heuristic, a research decision rule, or an externally sourced criterion.
4. Keep the raw measurement separate from the threshold-crossing interpretation.
5. Do not transfer a threshold between KL evidence and morphing metrics merely because both use entropy-related vocabulary.
6. When no threshold is defined for the claim, report the scalar without inventing one.

## Inputs

- named metric, inputs, unit, and implementation revision
- threshold value and its policy/source identity
- retained result or explicit missing state

## Outputs

- metric identity
- raw value where available
- threshold and source, when applicable
- interpretation limited to that metric/surface

## Failure conditions

The method fails when a generic threshold is asserted without a source, when one metric's threshold is applied to another metric, or when a threshold crossing is promoted to safety/truth/convergence.

## Evidence boundary

Thresholds classify under their declared rule. They do not independently validate the world-state or the correctness of the underlying model.

## Threshold precedence and unreachable caller-distribution gate

Current source has three separate thresholds with different units and decision owners:

1. `AxiomOrchestrator.divergence_limit` defaults to `0.05` **nats** and is compared against T-09's scalar with `>`. In the current orchestration data path, T-09 compares the same default vector to itself because the state has no caller-populated `distribution` key. Consequently the threshold does not currently enforce a policy on the caller's probability data.
2. `AxiomMorphingEngine.DEFAULT_THRESHOLDS[LOAD_THRESHOLD]` is `0.85` for `load_score = 0.7 * max(cpu_percent,memory_percent) + 0.3 * min(queue_depth/100,1)`; it is a dimensionless **local selection heuristic**.
3. `DEFAULT_THRESHOLDS[ENTROPY_ALERT]` is `0.30` for caller-provided `SystemMetrics.entropy_level`; the code checks this before load, with a strict greater-than. The low-load return-to-SOLID branch uses a distinct fixed `0.30` comparison on `load_score`, not the entropy-alert measurement.

A proposal to treat these as one universal "coherence" threshold mixes two different input dimensions and a currently fixed-fixture KL integration. State the input field, source revision, comparator, boundary equality, and observed or unobserved result for any threshold claim. This section is source-path analysis, not a run receipt.
