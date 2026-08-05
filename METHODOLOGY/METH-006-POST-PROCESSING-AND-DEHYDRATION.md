# Semantic-preserving canonicalization

- Method version: 2026-08-05
- Normative terms: MUST is required; SHOULD needs a recorded reason when omitted.

## 目标 / Objective

[CN] 在声明范围内产生可复现、可审查、可撤销的工程证据。

[EN] Apply semantic-preserving canonicalization without turning a bounded procedure into a universal guarantee.

## 输入 / Inputs

[CN] JSON-compatible input, schema version, classification, retention rule。

[EN] JSON-compatible input, schema version, classification, retention rule. Inputs remain untrusted until type, range, provenance, and authority checks pass.

## 步骤 / Procedure

[CN] validate; reject non-finite values; sort keys without changing strings; digest; redact by field policy; retain raw data only when authorized。

[EN] validate; reject non-finite values; sort keys without changing strings; digest; redact by field policy; retain raw data only when authorized. Record every material choice with owner and revision.

## 输出 / Outputs

[CN] canonical bytes/digest, validation, schema, redaction record。

[EN] canonical bytes/digest, validation, schema, redaction record. Distinguish observed result, external support, proposal, and uncertainty.

## 失败条件 / Failure conditions

[CN] 出现以下情况必须失败关闭：case/punctuation mutation, NaN accepted, secrets logged, digest version absent。

[EN] Fail closed on case/punctuation mutation, NaN accepted, secrets logged, digest version absent. Partial output is incomplete and cannot trigger consequential automation.

## 度量 / Measures

[CN] rejection rate, digest stability, redaction coverage。

[EN] Track rejection rate, digest stability, redaction coverage. These diagnose the procedure; no metric alone proves safety, truth, or convergence.

## 复现与审查 / Reproduction and review

Record commit SHA, environment/tool versions, sanitized fixture or digest, command, exit code, artifact, and untested boundary. Review after contract change, material failure, or evidence expiry.
