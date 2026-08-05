# Time and version anchoring

- Method version: 2026-08-05
- Normative terms: MUST is required; SHOULD needs a recorded reason when omitted.

## 目标 / Objective

[CN] 在声明范围内产生可复现、可审查、可撤销的工程证据。

[EN] Apply time and version anchoring without turning a bounded procedure into a universal guarantee.

## 输入 / Inputs

[CN] UTC clock, source revision, schema version, freshness policy。

[EN] UTC clock, source revision, schema version, freshness policy. Inputs remain untrusted until type, range, provenance, and authority checks pass.

## 步骤 / Procedure

[CN] emit RFC3339 UTC; retain object ids; separate event and processing time; apply predeclared freshness; never treat date as correctness。

[EN] emit RFC3339 UTC; retain object ids; separate event and processing time; apply predeclared freshness; never treat date as correctness. Record every material choice with owner and revision.

## 输出 / Outputs

[CN] trace with times, revision, clock source, freshness decision。

[EN] trace with times, revision, clock source, freshness decision. Distinguish observed result, external support, proposal, and uncertainty.

## 失败条件 / Failure conditions

[CN] 出现以下情况必须失败关闭：naive time, ambiguous precision, missing revision, or post-hoc freshness。

[EN] Fail closed on naive time, ambiguous precision, missing revision, or post-hoc freshness. Partial output is incomplete and cannot trigger consequential automation.

## 度量 / Measures

[CN] clock skew, stale input count, replay match rate。

[EN] Track clock skew, stale input count, replay match rate. These diagnose the procedure; no metric alone proves safety, truth, or convergence.

## 复现与审查 / Reproduction and review

Record commit SHA, environment/tool versions, sanitized fixture or digest, command, exit code, artifact, and untested boundary. Review after contract change, material failure, or evidence expiry.
