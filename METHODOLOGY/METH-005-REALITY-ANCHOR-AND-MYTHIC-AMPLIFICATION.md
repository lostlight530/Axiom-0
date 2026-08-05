# Reality anchor and hypothesis expansion

- Method version: 2026-08-05
- Normative terms: MUST is required; SHOULD needs a recorded reason when omitted.

## 目标 / Objective

[CN] 在声明范围内产生可复现、可审查、可撤销的工程证据。

[EN] Apply reality anchor and hypothesis expansion without turning a bounded procedure into a universal guarantee.

## 输入 / Inputs

[CN] verified repository facts, source revision, observed outputs, bounded question。

[EN] verified repository facts, source revision, observed outputs, bounded question. Inputs remain untrusted until type, range, provenance, and authority checks pass.

## 步骤 / Procedure

[CN] freeze evidence snapshot; mark unknowns; separate hypotheses; design cheap disconfirming checks; update status only from results。

[EN] freeze evidence snapshot; mark unknowns; separate hypotheses; design cheap disconfirming checks; update status only from results. Record every material choice with owner and revision.

## 输出 / Outputs

[CN] ledger linking observations, hypotheses, tests, and status。

[EN] ledger linking observations, hypotheses, tests, and status. Distinguish observed result, external support, proposal, and uncertainty.

## 失败条件 / Failure conditions

[CN] 出现以下情况必须失败关闭：hypothesis overwrites evidence, revision missing, or only confirmation tests used。

[EN] Fail closed on hypothesis overwrites evidence, revision missing, or only confirmation tests used. Partial output is incomplete and cannot trigger consequential automation.

## 度量 / Measures

[CN] rejection rate, evidence age, unresolved unknowns。

[EN] Track rejection rate, evidence age, unresolved unknowns. These diagnose the procedure; no metric alone proves safety, truth, or convergence.

## 复现与审查 / Reproduction and review

Record commit SHA, environment/tool versions, sanitized fixture or digest, command, exit code, artifact, and untested boundary. Review after contract change, material failure, or evidence expiry.
