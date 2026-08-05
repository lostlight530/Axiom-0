# Synthetic-content provenance boundary

- Method version: 2026-08-05
- Normative terms: MUST is required; SHOULD needs a recorded reason when omitted.

## 目标 / Objective

[CN] 在声明范围内产生可复现、可审查、可撤销的工程证据。

[EN] Apply synthetic-content provenance boundary without turning a bounded procedure into a universal guarantee.

## 输入 / Inputs

[CN] content, known producer, source links, intended use, risk tier。

[EN] content, known producer, source links, intended use, risk tier. Inputs remain untrusted until type, range, provenance, and authority checks pass.

## 步骤 / Procedure

[CN] record provenance without trusting origin detectors; verify consequential claims with primary sources; label generated material; require risk-based review。

[EN] record provenance without trusting origin detectors; verify consequential claims with primary sources; label generated material; require risk-based review. Record every material choice with owner and revision.

## 输出 / Outputs

[CN] content package with provenance, verification status, permitted use。

[EN] content package with provenance, verification status, permitted use. Distinguish observed result, external support, proposal, and uncertainty.

## 失败条件 / Failure conditions

[CN] 出现以下情况必须失败关闭：origin score treated as truth, unsupported content becomes normative, or source trace lost。

[EN] Fail closed on origin score treated as truth, unsupported content becomes normative, or source trace lost. Partial output is incomplete and cannot trigger consequential automation.

## 度量 / Measures

[CN] verified-claim ratio, provenance completeness, correction rate。

[EN] Track verified-claim ratio, provenance completeness, correction rate. These diagnose the procedure; no metric alone proves safety, truth, or convergence.

## 复现与审查 / Reproduction and review

Record commit SHA, environment/tool versions, sanitized fixture or digest, command, exit code, artifact, and untested boundary. Review after contract change, material failure, or evidence expiry.
