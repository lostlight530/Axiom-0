# Untrusted-content isolation

- Method version: 2026-08-05
- Normative terms: MUST is required; SHOULD needs a recorded reason when omitted.

## 目标 / Objective

[CN] 在声明范围内产生可复现、可审查、可撤销的工程证据。

[EN] Apply untrusted-content isolation without turning a bounded procedure into a universal guarantee.

## 输入 / Inputs

[CN] typed tool request, allowlist, caller context, quotas, confirmation policy。

[EN] typed tool request, allowlist, caller context, quotas, confirmation policy. Inputs remain untrusted until type, range, provenance, and authority checks pass.

## 步骤 / Procedure

[CN] separate data from instructions; validate; deny undeclared capabilities; scope credentials; limit time/cost; sanitize output; confirm destructive effects。

[EN] separate data from instructions; validate; deny undeclared capabilities; scope credentials; limit time/cost; sanitize output; confirm destructive effects. Record every material choice with owner and revision.

## 输出 / Outputs

[CN] authorized result or structured denial with replay id。

[EN] authorized result or structured denial with replay id. Distinguish observed result, external support, proposal, and uncertainty.

## 失败条件 / Failure conditions

[CN] 出现以下情况必须失败关闭：prompt changes policy, credential scope expands, denial falls back, or secrets logged。

[EN] Fail closed on prompt changes policy, credential scope expands, denial falls back, or secrets logged. Partial output is incomplete and cannot trigger consequential automation.

## 度量 / Measures

[CN] denial rate, budget breaches, redaction failures。

[EN] Track denial rate, budget breaches, redaction failures. These diagnose the procedure; no metric alone proves safety, truth, or convergence.

## 复现与审查 / Reproduction and review

Record commit SHA, environment/tool versions, sanitized fixture or digest, command, exit code, artifact, and untested boundary. Review after contract change, material failure, or evidence expiry.
