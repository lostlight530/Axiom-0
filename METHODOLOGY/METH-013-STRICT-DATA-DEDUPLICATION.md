# Content-addressed deduplication

- Method version: 2026-08-05
- Normative terms: MUST is required; SHOULD needs a recorded reason when omitted.

## 目标 / Objective

[CN] 在声明范围内产生可复现、可审查、可撤销的工程证据。

[EN] Apply content-addressed deduplication without turning a bounded procedure into a universal guarantee.

## 输入 / Inputs

[CN] canonicalization version, scoped records, stable ids, merge policy。

[EN] canonicalization version, scoped records, stable ids, merge policy. Inputs remain untrusted until type, range, provenance, and authority checks pass.

## 步骤 / Procedure

[CN] validate/canonicalize; cryptographic digest; detect exact copies; retain provenance; review semantic similarity; make merges reversible。

[EN] validate/canonicalize; cryptographic digest; detect exact copies; retain provenance; review semantic similarity; make merges reversible. Record every material choice with owner and revision.

## 输出 / Outputs

[CN] decision with digest, retained record, provenance, rollback pointer。

[EN] decision with digest, retained record, provenance, rollback pointer. Distinguish observed result, external support, proposal, and uncertainty.

## 失败条件 / Failure conditions

[CN] 出现以下情况必须失败关闭：unstable hash, lossy canonicalization, semantic auto-delete, or provenance loss。

[EN] Fail closed on unstable hash, lossy canonicalization, semantic auto-delete, or provenance loss. Partial output is incomplete and cannot trigger consequential automation.

## 度量 / Measures

[CN] duplicate rate, false merges, rollback success。

[EN] Track duplicate rate, false merges, rollback success. These diagnose the procedure; no metric alone proves safety, truth, or convergence.

## 复现与审查 / Reproduction and review

Record commit SHA, environment/tool versions, sanitized fixture or digest, command, exit code, artifact, and untested boundary. Review after contract change, material failure, or evidence expiry.
