# Reproducible collaboration protocol

- Method version: 2026-08-05
- Normative terms: MUST is required; SHOULD needs a recorded reason when omitted.

## 目标 / Objective

[CN] 在声明范围内产生可复现、可审查、可撤销的工程证据。

[EN] Apply reproducible collaboration protocol without turning a bounded procedure into a universal guarantee.

## 输入 / Inputs

[CN] target commit, scoped task, environment, acceptance criteria, protected paths。

[EN] target commit, scoped task, environment, acceptance criteria, protected paths. Inputs remain untrusted until type, range, provenance, and authority checks pass.

## 步骤 / Procedure

[CN] record assumptions; branch; retain versions; run checks; compare exact diff; separate results from unrun items; hand off rollback。

[EN] record assumptions; branch; retain versions; run checks; compare exact diff; separate results from unrun items; hand off rollback. Record every material choice with owner and revision.

## 输出 / Outputs

[CN] reviewable commit and evidence bundle reproducible within tolerances。

[EN] reviewable commit and evidence bundle reproducible within tolerances. Distinguish observed result, external support, proposal, and uncertainty.

## 失败条件 / Failure conditions

[CN] 出现以下情况必须失败关闭：direct main write, protected drift, hidden state, or failed checks claimed complete。

[EN] Fail closed on direct main write, protected drift, hidden state, or failed checks claimed complete. Partial output is incomplete and cannot trigger consequential automation.

## 度量 / Measures

[CN] reproduction rate, scope violations, flaky checks。

[EN] Track reproduction rate, scope violations, flaky checks. These diagnose the procedure; no metric alone proves safety, truth, or convergence.

## 复现与审查 / Reproduction and review

Record commit SHA, environment/tool versions, sanitized fixture or digest, command, exit code, artifact, and untested boundary. Review after contract change, material failure, or evidence expiry.
