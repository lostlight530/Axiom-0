# Axiom-0 Architecture Decision Index

Status: architecture-decision navigation and authority map  
Current calibration: 2026-10-04

`ADR/**` records durable repository decisions. ADR numbering is an identifier/order convention; it is not a supersession chain unless an ADR explicitly says so.

## Repository authority map

## 中英双语决策速览 / Bilingual decision reading key

- **执行事实 / Implemented behavior:** `CODE/**` 和精确版本的实际执行收据决定运行行为，ADR 记录设计理由，不能创造代码中不存在的能力 / Runtime behavior requires current code and revision-matched execution evidence, not ADR prose
- **数值与身份 / Numeric and identity scope:** `ADR-001`、`ADR-003`、`ADR-005` 分开处理 KL、数值输入、canonical bytes，`ADR-016` 分开处理时间、分支可见性与交付身份 / The corresponding decisions separate metrics, input validity, exact bytes, historical time and branch visibility
- **研究与引用 / Research and citation:** `ADR-007`、`ADR-008`、`ADR-013` 不把模型生成内容、研究文献、PR 合并或 DOI 自动晋升为科学正确或已执行验证 / Generated prose, references, merged PRs and DOIs cannot stand in for executed verification or scientific validity
- **缺失能力 / Non-implemented boundaries:** `ADR-011` 和 `ADR-012` 明确通用工具执行及沙箱生命周期不属于本仓参考核心 / Tool execution and sandbox lifecycle are outside this reference core

**变更性质 / Change class:** Documentary navigation and language accessibility only, with no ADR identifier changes, no historical-state rewrite and no new runtime-verification claim / 仅补充双语导航，不改 ADR 编号、历史状态或实现


Axiom has distinct public layers:

- `CODE/**` — executable reference implementation; implementation behavior is established here and by revision-matched execution evidence.
- `SPECIFICATION.md` — current engineering specification and public behavioral boundary for the reference implementation.
- `ADR/**` — durable architectural decisions and capability/non-capability boundaries.
- `METHODOLOGY/**` — procedures for measuring, interpreting, or reconciling repository and evidence surfaces.
- `EVIDENCE_BASELINE.md` — a dated external-source/evidence calibration; its 2026-08-27 state remains point-in-time evidence rather than a live status dashboard.
- `REPRODUCIBILITY.md` — current requirements for revision, environment, command, fixture, result, and untested-boundary provenance.
- `RESEARCH/**` and dated historical/audit material — point-in-time research and reconciliation evidence; later existence does not rewrite earlier execution state.
- `GOVERNANCE/**` — current public maintenance/review contracts and recovery boundaries; they govern maintenance work but do not create runtime capability.
- `AUTOMATION/**` and `schemas/**` — declared operational/schedule contracts and machine-readable structure; declaration or schema validity is not scheduler execution.
- `CITATION.cff`, `codemeta.json`, and `RELEASE_POLICY.md` — scholarly publication/release identity; DOI presence is not runtime or scientific validation.
- presentation/navigation files — discovery surfaces, not runtime authority.

A change in one layer does not silently change another.

## Decisions

| ADR | Current architectural meaning | Implementation anchor |
|---|---|---|
| [ADR-001](./ADR-001-ZERO-ENTROPY-COGNITIVE-PROTOCOL.md) | Entropy/divergence names are measurement-scoped; “zero entropy” is project vocabulary, not a system guarantee | `CODE/contracts.py`, `scan_kl_divergence.py`; `SystemMetrics.entropy_level` is separately a heuristic scalar |
| [ADR-002](./ADR-002-DAG-IRREVERSIBILITY-ENFORCEMENT.md) | T-01→T-10 is a fixed single-run reference sequence, not irreversible global state | `CODE/nexus_core.py` |
| [ADR-003](./ADR-003-ALGEBRAIC-POLLUTION-REJECTION.md) | Probability/KL inputs fail closed on invalid numeric structure | `CODE/contracts.py` |
| [ADR-004](./ADR-004-LIQUID-KNOWLEDGE-SOLIDIFICATION.md) | Morphing is serialized heuristic state adaptation with optional prepare/validate hooks | `CODE/liquid_morphing.py` |
| [ADR-005](./ADR-005-CONTEXT-INGESTION-AND-CANONICALIZATION.md) | Canonical JSON stabilizes bytes/digests without rewriting semantic content | `CODE/contracts.py` |
| [ADR-006](./ADR-006-MYTHIC-GENERATION-LANE.md) | Metaphor/synthetic architecture remains documentary and non-executable | research/presentation layers only |
| [ADR-007](./ADR-007-HUMAN-AI-POSTPROCESSING-BOUNDARY.md) | Generated research/code is evidence input, not repository authority by itself | evidence/research layers; no runtime implementation implied |
| [ADR-008](./ADR-008-RESEARCH-TO-ADR-DISTILLATION.md) | Research observations become ADR decisions only through explicit repository-specific distillation | `RESEARCH/**` → `ADR/**` interpretation boundary |
| [ADR-009](./ADR-009-EVIDENCE-STATUS-LABELING.md) | Evidence states distinguish local observation, external support, proposal, contest, and retirement | ADR/Methodology/Evidence records |
| [ADR-010](./ADR-010-INDEX-SYNCHRONIZATION-AND-NAV-CONTRACT.md) | Indexes are navigation; addressed files remain semantic authority | index/navigation files |
| [ADR-011](./ADR-011-ZERO-TRUST-TOOL-EXECUTION.md) | Tool-authority language is an embedding/caller boundary; Axiom implements no general tool executor | no local tool-execution runtime |
| [ADR-012](./ADR-012-SANDBOX-SELF-DESTRUCTION-PROTOCOL.md) | Cleanup/sandbox language is an external embedding boundary; Axiom implements no sandbox lifecycle | no local sandbox manager |
| [ADR-013](./ADR-013-VERIFICATION-AND-CLAIM-SCOPE.md) | Every verification claim is limited to the exact evidence surface that produced it | scanners, reference code, retained research evidence |
| [ADR-014](./ADR-014-REPO-KNOWLEDGE-STRATIFICATION.md) | Code, contracts, methods, decisions, research, operational metadata, and presentation have different authority | repository layout |
| [ADR-015](./ADR-015-REFERENCE-IMPLEMENTATION-BOUNDARY.md) | Reference core is intentionally incomplete as a production service | `CODE/contracts.py`, `CODE/liquid_morphing.py`, `CODE/nexus_core.py` |
| [ADR-016](./ADR-016-TEMPORAL-EVIDENCE-AVAILABILITY.md) | Logical date, execution, source time, generation/delivery, aggregation visibility, and current presence are distinct facts | historical/periodic evidence lifecycle |

## Cross-layer rules

1. `CODE/**` defines implemented behavior; filenames and research metaphors do not add capabilities.
2. `SPECIFICATION.md` describes supported behavior and boundaries; it does not create missing runtime features.
3. ADRs explain durable decisions; a non-implemented boundary ADR must say that the capability is external/reference-only.
4. Methodology explains how to measure or interpret specific repository/evidence surfaces; it does not become runtime policy.
5. Historical research remains point-in-time evidence. Later reconciliation can change current interpretation without rewriting original execution state.
6. External protocols/papers/SDKs remain reference material unless a corresponding implementation surface exists in this repository.
7. Indexes are derived navigation and must not be treated as stronger authority than the addressed file.
8. `scan_consistency.py` validates current index/document structural agreement only; a pass is not semantic validation.
9. An archived software DOI identifies a publication object; it does not by itself identify every later `main` revision or prove execution/reproduction.

## Current navigation

- [Engineering specification](../SPECIFICATION.md)
- [Methodology index](../METHODOLOGY/INDEX.md)
- [Evidence baseline](../EVIDENCE_BASELINE.md)
- [Reproducibility](../REPRODUCIBILITY.md)
- [Release policy](../RELEASE_POLICY.md)
- [AI use disclosure](../AI_USE_DISCLOSURE.md)

## Historical calibration references

The dated audits below remain useful for their own cutoffs but are not current ADR status:

- [August stage audit through 2026-08-27](../historical-audits/03-stage-and-period-audits/2026-08-27--august-through-27--stage-audit.md)
- [Prior cutoff audit through 2026-08-23](../historical-audits/03-stage-and-period-audits/2026-08-23--august-through-23--stage-audit.md)


## 2026-10-04 special calibration

ADR-016 now explicitly includes base-revision, branch/ref, branch-snapshot visibility and eventual-main visibility as separate evidence dimensions. The change is a clarification of the accepted temporal-evidence decision, not a new architectural capability.

```text
same base != same branch snapshot
sibling branch presence != observed-input availability
later main presence != earlier branch visibility
```

## 2026-11-15 code-grounded decision cross-reference

The existing ADR membership and decision statuses are preserved. The current-source interpretation of **ADR-001, ADR-002, ADR-003, ADR-004, ADR-005, ADR-009, ADR-013 and ADR-015** is sharpened in place:

- The KL numeric function is real and input-sensitive, but T-09's current pipeline data path takes a fixed fallback because the freshly constructed state never receives caller distribution vectors.
- The ordered reference nodes do not constitute a durable DAG or generalized caller-input coherence check.
- Event timestamps participate in the returned run ID; `input_digest` and `run_id` express different identities.
- Morphing heuristics and `asyncio.Lock` provide in-memory behavior, not a durable transaction/effect boundary.

These points are based on inspected source at `555ed4ea5c2a7bec99e86e595147c1c53f1d9086`. No new runtime test was executed. The untouched ADRs' existing non-implementation and evidence boundaries remain in force.
