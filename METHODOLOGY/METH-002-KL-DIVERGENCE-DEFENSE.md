# KL divergence evaluation

- Method version: 2026-08-05
- Normative terms: MUST is required; SHOULD needs a recorded reason when omitted.

## 目标 / Objective

[CN] 在声明范围内产生可复现、可审查、可撤销的工程证据。

[EN] Apply kl divergence evaluation without turning a bounded procedure into a universal guarantee.

## 输入 / Inputs

[CN] two finite non-negative vectors, sample provenance, unit, baseline, threshold。

[EN] two finite non-negative vectors, sample provenance, unit, baseline, threshold. Inputs remain untrusted until type, range, provenance, and authority checks pass.

## 步骤 / Procedure

[CN] reject invalid vectors; normalize; compute D_KL(P。

[EN] reject invalid vectors; normalize; compute D_KL(P. Record every material choice with owner and revision.

## 输出 / Outputs

[CN] 。

[EN] . Distinguish observed result, external support, proposal, and uncertainty.

## 失败条件 / Failure conditions

[CN] 出现以下情况必须失败关闭：Q) in nats; return infinity on support mismatch; compare only with a predeclared threshold。

[EN] Fail closed on Q) in nats; return infinity on support mismatch; compare only with a predeclared threshold. Partial output is incomplete and cannot trigger consequential automation.

## 度量 / Measures

[CN] result with direction, unit, threshold, sample scope, validity|zero mass, negative/NaN, unequal length, undeclared direction, post-hoc threshold|invalid-input rate, crossings, baseline drift。

[EN] Track result with direction, unit, threshold, sample scope, validity|zero mass, negative/NaN, unequal length, undeclared direction, post-hoc threshold|invalid-input rate, crossings, baseline drift. These diagnose the procedure; no metric alone proves safety, truth, or convergence.

## 复现与审查 / Reproduction and review

Record commit SHA, environment/tool versions, sanitized fixture or digest, command, exit code, artifact, and untested boundary. Review after contract change, material failure, or evidence expiry.
