# Versioned stage topology

- Method version: 2026-08-05
- Normative terms: MUST is required; SHOULD needs a recorded reason when omitted.

## 目标 / Objective

[CN] 在声明范围内产生可复现、可审查、可撤销的工程证据。

[EN] Apply versioned stage topology without turning a bounded procedure into a universal guarantee.

## 输入 / Inputs

[CN] run id, input digest, ordered stage version, idempotency policy。

[EN] run id, input digest, ordered stage version, idempotency policy. Inputs remain untrusted until type, range, provenance, and authority checks pass.

## 步骤 / Procedure

[CN] validate schema; emit start/completion/failure events; retain digests; retry as a new attempt; compensate external effects。

[EN] validate schema; emit start/completion/failure events; retain digests; retry as a new attempt; compensate external effects. Record every material choice with owner and revision.

## 输出 / Outputs

[CN] ordered event record with stage status, timestamps, digests, and attempt。

[EN] ordered event record with stage status, timestamps, digests, and attempt. Distinguish observed result, external support, proposal, and uncertainty.

## 失败条件 / Failure conditions

[CN] 出现以下情况必须失败关闭：silent skip, unversioned reordering, or side effect without retry/compensation。

[EN] Fail closed on silent skip, unversioned reordering, or side effect without retry/compensation. Partial output is incomplete and cannot trigger consequential automation.

## 度量 / Measures

[CN] event completeness, duplicate effects, recovery time。

[EN] Track event completeness, duplicate effects, recovery time. These diagnose the procedure; no metric alone proves safety, truth, or convergence.

## 复现与审查 / Reproduction and review

Record commit SHA, environment/tool versions, sanitized fixture or digest, command, exit code, artifact, and untested boundary. Review after contract change, material failure, or evidence expiry.
