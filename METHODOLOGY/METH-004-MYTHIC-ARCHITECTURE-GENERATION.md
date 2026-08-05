# Bounded creative architecture exploration

- Method version: 2026-08-05
- Normative terms: MUST is required; SHOULD needs a recorded reason when omitted.

## 目标 / Objective

[CN] 在声明范围内产生可复现、可审查、可撤销的工程证据。

[EN] Apply bounded creative architecture exploration without turning a bounded procedure into a universal guarantee.

## 输入 / Inputs

[CN] problem, constraints, non-goals, threat model, budget, evidence status。

[EN] problem, constraints, non-goals, threat model, budget, evidence status. Inputs remain untrusted until type, range, provenance, and authority checks pass.

## 步骤 / Procedure

[CN] generate labelled alternatives; list assumptions and failure cases; require accountable selection; convert selection to contracts and tests。

[EN] generate labelled alternatives; list assumptions and failure cases; require accountable selection; convert selection to contracts and tests. Record every material choice with owner and revision.

## 输出 / Outputs

[CN] PROPOSED alternatives with risks and disconfirming tests。

[EN] PROPOSED alternatives with risks and disconfirming tests. Distinguish observed result, external support, proposal, and uncertainty.

## 失败条件 / Failure conditions

[CN] 出现以下情况必须失败关闭：creative language reported as fact, production changed automatically, or selection owner absent。

[EN] Fail closed on creative language reported as fact, production changed automatically, or selection owner absent. Partial output is incomplete and cannot trigger consequential automation.

## 度量 / Measures

[CN] assumption count, falsification results, decision latency。

[EN] Track assumption count, falsification results, decision latency. These diagnose the procedure; no metric alone proves safety, truth, or convergence.

## 复现与审查 / Reproduction and review

Record commit SHA, environment/tool versions, sanitized fixture or digest, command, exit code, artifact, and untested boundary. Review after contract change, material failure, or evidence expiry.
