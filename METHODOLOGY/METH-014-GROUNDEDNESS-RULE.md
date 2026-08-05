# Claim groundedness review

- Method version: 2026-08-05
- Normative terms: MUST is required; SHOULD needs a recorded reason when omitted.

## 目标 / Objective

[CN] 在声明范围内产生可复现、可审查、可撤销的工程证据。

[EN] Apply claim groundedness review without turning a bounded procedure into a universal guarantee.

## 输入 / Inputs

[CN] claim, scope, evidence state, source/reproducer, owner, review date, disconfirming condition。

[EN] claim, scope, evidence state, source/reproducer, owner, review date, disconfirming condition. Inputs remain untrusted until type, range, provenance, and authority checks pass.

## 步骤 / Procedure

[CN] decompose; find primary evidence; record applicability/counterevidence; narrow wording; label proposals; retire stale claims。

[EN] decompose; find primary evidence; record applicability/counterevidence; narrow wording; label proposals; retire stale claims. Record every material choice with owner and revision.

## 输出 / Outputs

[CN] observable, sourced, falsifiable, time-bounded claim record。

[EN] observable, sourced, falsifiable, time-bounded claim record. Distinguish observed result, external support, proposal, and uncertainty.

## 失败条件 / Failure conditions

[CN] 出现以下情况必须失败关闭：citation mismatch, inference presented as observation, no disconfirmation, or expired review。

[EN] Fail closed on citation mismatch, inference presented as observation, no disconfirmation, or expired review. Partial output is incomplete and cannot trigger consequential automation.

## 度量 / Measures

[CN] unsupported claims, citation validity, review age。

[EN] Track unsupported claims, citation validity, review age. These diagnose the procedure; no metric alone proves safety, truth, or convergence.

## 复现与审查 / Reproduction and review

Record commit SHA, environment/tool versions, sanitized fixture or digest, command, exit code, artifact, and untested boundary. Review after contract change, material failure, or evidence expiry.
