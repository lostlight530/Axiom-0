# KL divergence evaluation

- Method version: 2026-08-24
- Normative terms: MUST is required; SHOULD needs a recorded reason when omitted.

## 目标 / Objective

[CN] 在声明范围内计算、记录并解释 KL 散度，产生可复现、可审查的数值证据，不把有限输入上的结果扩张成仓库级“零熵”或通用正确性保证。

[EN] Compute, record, and interpret KL divergence within a declared scope. The method produces reproducible numeric evidence for specified inputs; it does not turn a bounded result into a repository-wide zero-entropy, safety, or correctness guarantee.

## 输入 / Inputs

[CN]

- 两个等长、非空、有限、非负向量 `P` 与 `Q`
- 各向量对应的样本来源、单位与语义
- 明确的方向 `D_KL(P || Q)`
- 如需判定阈值，必须提前声明阈值、适用范围和依据

[EN]

- equal-length, non-empty, finite, non-negative vectors `P` and `Q`
- sample provenance, units, and semantics for both vectors
- explicit direction `D_KL(P || Q)`
- when a decision threshold is used, a predeclared threshold, scope, and rationale

Inputs remain untrusted until type, range, provenance, and authority checks pass.

## 步骤 / Procedure

1. Validate equal non-zero length and reject negative, NaN, or infinite values.
2. Require strictly positive total mass for both vectors.
3. Normalize with a numerically stable summation method.
4. Compute

   `D_KL(P || Q) = Σ_i p_i * ln(p_i / q_i)`

   for terms where `p_i > 0`.
5. If `p_i > 0` while `q_i = 0`, report `+∞` as a support mismatch rather than smoothing it away silently.
6. Record the direction, normalized inputs or their reproducible fixture/digest, unit (`nats` when using the natural logarithm), result, implementation revision, and execution context.
7. Compare with a threshold only when that threshold was declared before observing the result and is valid for the same measurement definition.
8. Keep the observed scalar separate from any interpretation such as drift, anomaly, safety, correctness, or convergence.

## 输出 / Outputs

[CN] 输出必须包含：数值结果或 `+∞`、方向、单位、输入/样本范围、有效性状态、阈值（如使用）、执行或计算证据，以及未覆盖边界。

[EN] Output MUST include the numeric result or `+∞`, direction, unit, input/sample scope, validity state, threshold when used, execution/computation evidence, and untested boundary.

`D_KL = 0.0` means zero divergence only for the recorded `P` and `Q` after the declared normalization. It is not evidence of repository-wide mathematical zero entropy.

## 失败条件 / Failure conditions

Fail closed when any material condition applies:

- vectors are empty or have unequal length
- a value is negative, NaN, or infinite
- either vector has zero total mass
- direction is omitted or later reversed without a new calculation
- support mismatch is silently converted to a finite value
- a threshold is selected after seeing the result and then presented as predeclared
- the numeric value is claimed without emitted or independently reproducible numeric evidence
- a bounded result is promoted to an unrelated semantic, safety, or system-wide conclusion

## 度量 / Measures

Track separately:

- numeric `D_KL` observations
- invalid-input rate
- support-mismatch count
- threshold crossings when a valid threshold exists
- baseline/version drift
- missing or non-computable evidence fields

These diagnose the declared procedure; no metric alone proves safety, truth, determinism, or convergence.

## August 2026 calibration

Several August Daily manifests record `D_KL = 0.0` for hard-coded `identity` and `renormalized_identity` cases. Those observations support only those recorded cases. Fields such as `Actual Input Range: 0.0 to 0.0` are not a valid description of the input vectors and must not be reused as input provenance; the persisted `KL_EVIDENCE` case names are the stronger available evidence when present.

A weekly aggregate may summarize numeric Daily evidence only when the contributing numeric observations are actually persisted. An exit code or `KL contract: passed` message alone must not be converted into an unrecorded scalar.

## 复现与审查 / Reproduction and review

Record commit SHA, environment/tool versions, sanitized fixture or digest, command or calculation path, exit code when applicable, emitted numeric evidence, artifact, and untested boundary. Review after a contract change, measurement-definition change, material failure, or evidence expiry.
