> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `METHOD`
> - **Role:** Current methodology: **Time and version anchoring for repository evidence**
> - **Authority:** Repository-native method authority for the procedure, assumptions, thresholds, evidence treatment and limitations expressed by this file
> - **Current meaning:** The method owns the procedural semantics named above. Read steps and thresholds as a contract for how the repository should reason or check, not as evidence that the method executed at the current revision
> - **Evidence / implementation boundary:** Method definition != method execution. Conceptual procedures do not become runtime capability without an implementation anchor, and historical examples retain their own cutoff rather than defining present status
> - **Cross-document relation:** `SPECIFICATION.md` and current `CODE/**` bound implementation; ADRs explain durable design choices; dated evidence and periodic records provide observations without redefining the method
> - **Update trigger:** Update when the procedure, assumptions, thresholds, implementation mapping, evidence semantics or historical/current boundary materially changes
> - **Preservation rule:** Existing procedure, examples and rationale remain in the same file. Current clarification is additive and does not erase earlier method history

# Time and version anchoring for repository evidence

## 中文方法正文导读 / Chinese method counterpart

**准确研究对象 / Actual method:** 逻辑日期、来源时间、分支 SHA 和执行时刻是不同身份，后来主分支可见不能回填旧快照

**English procedure owner:** Time and version anchoring for repository evidence

**输入—方法—产出 / Input, procedure and output:** 本方法应以其原始 `Inputs`、`Procedure` 与 `Outputs` 逐项限定适用对象，失败条件必须保留原先的 `Failure conditions`，没有匹配版本的实测命令时不登记为 `EXECUTED` / Match actual inputs, procedure and outputs, retain failure cases, and never infer execution from the method's presence

| Source heading / 英文原章 | 中文对应 / Chinese section |
| --- | --- |
| Objective | 目标 |
| Inputs | 输入及前置条件 |
| Procedure | 方法步骤 |
| Outputs | 结果和适用范围 |
| Failure conditions | 失败条件 |
| Evidence boundary | 证据边界 |
| Clock evidence in the implementation | 相应方法的当前约束 |

**代码与证据 / Code and evidence:** 按 `SPECIFICATION.md`、相应 `CODE/**` 函数和运行收据确认功能范围；本补充不提高原有验证等级 / Use the exact implementation and receipts to verify actual capability, this reading layer does not raise evidence grade


- Method version: 2026-08-24
- Scope: research/evidence records and version-sensitive claims

## Objective

Keep event time, observation/check time, source publication/update time, artifact revision, and current repository presence distinct when those distinctions matter to the claim.

## Inputs

- logical date/period
- persisted observation/check timestamp when available
- source event/publication/update timestamp when material
- artifact/source version or revision
- current repository state

## Procedure

1. Preserve timestamps exactly as recorded; do not silently reinterpret a processing time as an event time.
2. Pair an explicit external version with the date belonging to that version.
3. Compare observation/check time with source event/publication time when chronology is material.
4. If the observation appears to predate the source event, record `TEMPORAL_PROVENANCE_CONFLICT` unless stronger history resolves the ordering.
5. Keep current path presence separate from historical snapshot visibility.
6. Do not backdate later corrections into an earlier observation period.

## Outputs

- logical period
- relevant timestamps and their meanings
- version/revision identity
- temporal-order state
- unresolved precision/history where applicable

## Failure conditions

Use an unresolved state when timestamp precision is insufficient, the version/date pair is not verified, or a later file is being used to manufacture an earlier observation.

## Evidence boundary

Correct chronology strengthens provenance. It does not establish semantic correctness by itself.

The August 19 record, where a persisted check time precedes the cited source release time, remains the canonical `TEMPORAL_PROVENANCE_CONFLICT` example for this repository.

## Clock evidence in the implementation

`utc_now()` returns a UTC ISO timestamp with microseconds. The T-01–T-10 events and morphing `history` use this wall-clock function; no monotonic clock, trusted timestamp authority or cross-host synchronization contract is present. A temporal ordering inferred from these strings therefore describes local event emission order, not distributed causality or cryptographically attested history.

The `run_id` digest includes emitted event timestamps, so it cannot replace a stable fixture/input identity. For a cross-run comparison retain both `input_digest` and trace/event identity plus execution environment and observation timing; identical input digests do not imply same recorded event trace. No new time-source experiment was executed for this clarification.
