# Axiom-0 Research Surface

## 中文对应专业说明 / Chinese technical counterpart

**专业主题 / Subject:** 研究资料是分层导航，旧综述提供历史语境而非当前可执行权威

**Owning English title:** Axiom-0 Research Surface

**有效性 / Scope of authority:** 需要按具体章节识别其所引用的源码版本、历史观察截止点、原始证据与任何尚未解决的冲突，不能因为已有技术概念、文档或 DOI 就推断真实系统已经执行 / Retain exact revision, historical cutoff, actual evidence and unresolved conflicts rather than upgrading a documentary description into runtime completion

| Original section / 原章节 | 中文阅读定位 / Chinese section meaning |
| --- | --- |
| Current authority relationship | 当前权威关系 |
| Legacy survey set | 历史综述集 |
| Status vocabulary | 状态词汇 |
| Non-retroactivity | 历史不可追溯改写 |
| Public evidence boundary | 公开证据边界 |
| Current periodic-evidence pointer — 2026-09-23 | 与本文件主题相关的证据或方法部分 |
| Current periodic-evidence pointer — 2026-09-24 | 与本文件主题相关的证据或方法部分 |

**交叉复核 / Cross-check:** 对当前实现使用 `SPECIFICATION.md` 与 `CODE/**`，对可复现性使用 `REPRODUCIBILITY.md`，对现存判断保留该文的证据级别 / Verify implementation and reproducibility in their owning layers without rewriting historic research


Status: current research-navigation and interpretation boundary  
Calibration: 2026-09-18

`RESEARCH/**` preserves research, surveys, periodic evidence, and historical synthesis. It is not the executable authority for Axiom-0.

## Current authority relationship

Use the repository layers according to the claim being made:

- executable behavior → `CODE/**`
- current engineering boundary → `SPECIFICATION.md`
- accepted architecture/boundary decision → exact `ADR/**` document
- measurement/reconciliation procedure → exact `METHODOLOGY/**` document
- source/evidence semantics at its declared calibration → `EVIDENCE_BASELINE.md`
- point-in-time research observation or historical survey → exact `RESEARCH/**` artifact plus any later correction/reconciliation

Research prose does not silently promote an external idea, historical interpretation, metaphor, or proposed mechanism into implemented repository behavior.

## Legacy survey set

The following six undated/Q1 survey-style reports are retained as point-in-time research artifacts:

- `RPT-2026-Q1-AGENT-ARCHITECTURE.md`
- `agent-frameworks-evolution.md`
- `agent-orchestration.md`
- `compound-ai-systems.md`
- `llm-inherent-limitations-survey.md`
- `reflection-and-system2-survey.md`

Their original wording is preserved for research-history provenance. Some local Axiom mappings in those reports predate the current reference-implementation boundary and are stronger than current code supports. Their external industry claims also do not contain a complete proposition-level source/version ledger.

Read them together with:

- [`2026-09-18-current-research-reconciliation.md`](./2026-09-18-current-research-reconciliation.md) — current forward reconciliation of local implementation mappings and external-source status
- [`../ADR/INDEX.md`](../ADR/INDEX.md) — current architecture decisions
- [`../METHODOLOGY/INDEX.md`](../METHODOLOGY/INDEX.md) — current procedures
- [`../SPECIFICATION.md`](../SPECIFICATION.md) — current engineering contract

## Status vocabulary

For legacy survey material reviewed under the current repository:

- `HISTORICAL_RESEARCH_RETAINED` — original artifact remains useful as a point-in-time research record
- `LOCAL_MAPPING_SUPERSEDED` — a local Axiom implementation statement is contradicted or narrowed by current code/accepted repository contracts
- `EXTERNAL_CLAIMS_NOT_REVALIDATED` — the external proposition was not independently rechecked against a proposition-level primary source/version in the current reconciliation
- `CURRENTLY_SUPPORTED_WITHIN_SCOPE` — current repository evidence supports the statement at the stated bounded scope

These states are independent. A report can remain historically useful while its local implementation mapping is superseded and its external claims remain un-revalidated.

## Non-retroactivity

Do not silently rewrite an older report to make it look as if the current architecture boundary existed at its original writing time.

When current evidence changes interpretation:

1. preserve the original report;
2. add or update a dated forward reconciliation;
3. identify the exact proposition being narrowed or superseded;
4. point to current code/ADR/Methodology/evidence that supports the new interpretation;
5. leave unresolved external claims unresolved unless they are actually revalidated.

Current file presence, a later successful check, or a new publication does not prove what an earlier report observed or knew.

## Public evidence boundary

Repository publication metadata, DOI presence, model-generated summaries, and repeated citation are not independent scientific corroboration for a research proposition.

When a current factual claim matters, retain the exact source/revision/time/result/limitation required to support that claim rather than inheriting authority from a legacy survey label such as `[REAL]` or `[SPECULATIVE]`.


## Current periodic-evidence pointer — 2026-09-23

The September periodic research surface now retains Daily pipeline manifests through 2026-09-23. The canonical month-to-date owner is RESEARCH/monthly/2026-09-monthly-manifest.md.

This navigation update preserves the authority split:

```text
RESEARCH_DAILY_PRESENT
!= EXECUTABLE_AUTHORITY

MONTH_TO_DATE_SYNTHESIS
!= NATURAL_MONTH_FINAL

LATER_RESEARCH_INTERPRETATION
!= EARLIER_RUN_EVIDENCE
```

Current executable behavior remains owned by CODE/** plus the active specification / ADR / methodology contracts.
## Current periodic-evidence pointer — 2026-09-24

The September periodic research surface now retains Daily pipeline manifests through 2026-09-24 on current main, with the merged A1 full-history annotation through 2026-09-23 preserved.

The 2026-09-24 Daily remains bounded to its recorded source inspection, algebra/consistency scan, specified repeated execution, and index-alignment evidence.

```text
RESEARCH_DAILY_PRESENT
!= EXECUTABLE_AUTHORITY
BOUNDED_TEST_RESULT
!= ALL_CONDITIONS_COVERED
MONTH_TO_DATE_SYNTHESIS
!= NATURAL_MONTH_FINAL
```

No earlier command is replayed by this navigation update.
