# Threshold calibration and review

- Method version: 2026-08-05
- Normative terms: MUST is required; SHOULD needs a recorded reason when omitted.

## 目标 / Objective

[CN] 在声明范围内产生可复现、可审查、可撤销的工程证据。

[EN] Apply threshold calibration and review without turning a bounded procedure into a universal guarantee.

## 输入 / Inputs

[CN] labelled validation data, error costs, baseline, owner。

[EN] labelled validation data, error costs, baseline, owner. Inputs remain untrusted until type, range, provenance, and authority checks pass.

## 步骤 / Procedure

[CN] preselect candidates; report sensitivity; validate out of sample; scope and expire; monitor drift; suspend when assumptions fail。

[EN] preselect candidates; report sensitivity; validate out of sample; scope and expire; monitor drift; suspend when assumptions fail. Record every material choice with owner and revision.

## 输出 / Outputs

[CN] versioned threshold with tradeoffs and review date。

[EN] versioned threshold with tradeoffs and review date. Distinguish observed result, external support, proposal, and uncertainty.

## 失败条件 / Failure conditions

[CN] 出现以下情况必须失败关闭：universal 0.05 assumed, same data tunes and scores, or drift ignored。

[EN] Fail closed on universal 0.05 assumed, same data tunes and scores, or drift ignored. Partial output is incomplete and cannot trigger consequential automation.

## 度量 / Measures

[CN] precision/recall, calibration error, drift, overrides。

[EN] Track precision/recall, calibration error, drift, overrides. These diagnose the procedure; no metric alone proves safety, truth, or convergence.

## 复现与审查 / Reproduction and review

Record commit SHA, environment/tool versions, sanitized fixture or digest, command, exit code, artifact, and untested boundary. Review after contract change, material failure, or evidence expiry.
