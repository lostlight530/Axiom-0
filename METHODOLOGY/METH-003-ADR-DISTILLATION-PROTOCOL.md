# Evidence-to-ADR distillation

- Method version: 2026-08-05
- Normative terms: MUST is required; SHOULD needs a recorded reason when omitted.

## 目标 / Objective

[CN] 在声明范围内产生可复现、可审查、可撤销的工程证据。

[EN] Apply evidence-to-adr distillation without turning a bounded procedure into a universal guarantee.

## 输入 / Inputs

[CN] repository problem, observed behavior, dated primary sources, counterevidence, owners。

[EN] repository problem, observed behavior, dated primary sources, counterevidence, owners. Inputs remain untrusted until type, range, provenance, and authority checks pass.

## 步骤 / Procedure

[CN] separate observations and interpretations; bound applicability; compare alternatives; make one decision; state consequences and exceptions。

[EN] separate observations and interpretations; bound applicability; compare alternatives; make one decision; state consequences and exceptions. Record every material choice with owner and revision.

## 输出 / Outputs

[CN] reviewable ADR with traceable evidence and rollback。

[EN] reviewable ADR with traceable evidence and rollback. Distinguish observed result, external support, proposal, and uncertainty.

## 失败条件 / Failure conditions

[CN] 出现以下情况必须失败关闭：normative claim lacks source/reproducer, counterevidence omitted, or decision exceeds evidence。

[EN] Fail closed on normative claim lacks source/reproducer, counterevidence omitted, or decision exceeds evidence. Partial output is incomplete and cannot trigger consequential automation.

## 度量 / Measures

[CN] source freshness, objections, verification coverage。

[EN] Track source freshness, objections, verification coverage. These diagnose the procedure; no metric alone proves safety, truth, or convergence.

## 复现与审查 / Reproduction and review

Record commit SHA, environment/tool versions, sanitized fixture or digest, command, exit code, artifact, and untested boundary. Review after contract change, material failure, or evidence expiry.
