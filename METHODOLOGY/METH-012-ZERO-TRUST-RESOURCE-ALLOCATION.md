# Budgeted resource allocation

- Method version: 2026-08-05
- Normative terms: MUST is required; SHOULD needs a recorded reason when omitted.

## 目标 / Objective

[CN] 在声明范围内产生可复现、可审查、可撤销的工程证据。

[EN] Apply budgeted resource allocation without turning a bounded procedure into a universal guarantee.

## 输入 / Inputs

[CN] task risk, CPU/memory/time/network/cost budgets, concurrency, cancellation。

[EN] task risk, CPU/memory/time/network/cost budgets, concurrency, cancellation. Inputs remain untrusted until type, range, provenance, and authority checks pass.

## 步骤 / Procedure

[CN] choose minimum capability; bound workers and queues; propagate deadlines; cancel children; meter calls; degrade explicitly; emit safe events。

[EN] choose minimum capability; bound workers and queues; propagate deadlines; cancel children; meter calls; degrade explicitly; emit safe events. Record every material choice with owner and revision.

## 输出 / Outputs

[CN] result or typed exhaustion with consumption and retry guidance。

[EN] result or typed exhaustion with consumption and retry guidance. Distinguish observed result, external support, proposal, and uncertainty.

## 失败条件 / Failure conditions

[CN] 出现以下情况必须失败关闭：unbounded workers, ignored cancellation, silent partial result, or unauthorized spend。

[EN] Fail closed on unbounded workers, ignored cancellation, silent partial result, or unauthorized spend. Partial output is incomplete and cannot trigger consequential automation.

## 度量 / Measures

[CN] peak workers, timeouts, queue depth, external cost。

[EN] Track peak workers, timeouts, queue depth, external cost. These diagnose the procedure; no metric alone proves safety, truth, or convergence.

## 复现与审查 / Reproduction and review

Record commit SHA, environment/tool versions, sanitized fixture or digest, command, exit code, artifact, and untested boundary. Review after contract change, material failure, or evidence expiry.
