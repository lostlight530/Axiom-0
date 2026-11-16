> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `DECISION`
> - **Role:** Current architecture decision: **Entropy and divergence are scoped measurements**
> - **Authority:** Current repository-native design rationale and constraint for the architecture surface expressed by this decision
> - **Current meaning:** The owning proposition is the subject named above. Read its implementation anchors against current `CODE/**` and `SPECIFICATION.md`; the ADR preserves why the constraint exists and how it should bound present interpretation
> - **Evidence / implementation boundary:** An accepted ADR does not prove execution, scientific validation, external-system behavior, or historical task completion. Legacy terminology in the filename does not broaden the narrower current proposition stated by the document body
> - **Cross-document relation:** `SPECIFICATION.md` owns current implementation semantics; `METHODOLOGY/**` owns repeatable procedure; dated evidence owns point-in-time observation; index/navigation files do not add evidence
> - **Update trigger:** Update when this decision changes, its implementation anchor contradicts it, or a confirmed authority/evidence conflict requires explicit reconciliation
> - **Preservation rule:** Existing decision history, rationale and examples remain in the same file. This pass clarifies current architecture meaning without deleting the original record

# Entropy and divergence are scoped measurements

## 中文专业对照 / Chinese technical counterpart

**本 ADR 的可核对命题 / Auditable proposition:** 熵和 KL 必须按数值表面限定，零熵不是 Agent 系统保证

**English owner:** Entropy and divergence are scoped measurements

**具体判据 / Operational reading:** 判断本条记录时应同时定位当前 `SPECIFICATION.md`、适用源码、精确版本与该文件所列的证据边界，不能把历史设计决定当成已发生的运行结果 / The decision's implementation and validation must be established independently at the exact revision

| Original section / 英文原章节 | 中文阅读定位 / Chinese reading section |
| --- | --- |
| Context | 背景与触发条件 |
| Decision | 已接受的决策 |
| Consequences | 后果与代价 |
| Evidence boundary | 证据适用范围 |
| Non-implementation boundary | 未实现的能力 |
| Current data-flow implication (2026-11-15) | 专业原文对应边界 |

**保留原则 / Preservation:** 原有决策正文、状态、历史解释与例外保持不变，本双语章节仅提供当前可检验的阅读路径 / Existing decision text and historic states remain the owner; this is a language and navigation addition


- Decision date: 2026-08-05
- Review calibration: 2026-08-24
- Status: Accepted
- Implementation anchor: `CODE/contracts.py`, `scan_kl_divergence.py`; heuristic metric input in `CODE/liquid_morphing.py`

## Context

“Zero entropy” remains project vocabulary, not an implemented guarantee of deterministic cognition, zero semantic drift, safety, or universal convergence.

The repository currently contains two different uses of entropy-like language:

1. `kl_divergence(P, Q)` in `CODE/contracts.py`, which computes a precise probability-distribution divergence in nats
2. `SystemMetrics.entropy_level` in `CODE/liquid_morphing.py`, which is a caller-supplied scalar in `[0,1]` used by a heuristic morphing policy

These are not the same measurement.

## Decision

Axiom MUST name the exact measurement before interpreting an entropy/divergence result.

For KL evidence:

- state the direction `D_KL(P||Q)`
- preserve exact input identity or reproducible fixture identity
- state unit (`nats` for the implemented natural-log calculation)
- treat support mismatch as `+∞` under the implemented contract
- scope any threshold to the declared comparison

For `SystemMetrics.entropy_level`:

- treat it as an implementation-specific input variable
- do not call it Shannon entropy or KL divergence unless the caller explicitly computes and supplies such a quantity under a declared contract

A zero value from either surface never proves repository-wide truth, safety, determinism, or convergence.

## Consequences

The project keeps its conceptual vocabulary while research and engineering claims become falsifiable against concrete code paths.

## Evidence boundary

`scan_kl_divergence.py` can support the named cases it emits. A historical `D_KL = 0.0` supports only its recorded input pair/case.

`SystemMetrics.entropy_level` participates only in local heuristic state selection; it is not a scientific system-health metric by default.

## Non-implementation boundary

Axiom contains no global entropy monitor, no cognitive-state estimator, and no mechanism that proves “zero entropy” for the repository or an external agent system.

## Current data-flow implication (2026-11-15)

The independent `kl_divergence` function is a meaningful numeric measurement, but the current `run_continuum` T-09 path does not propagate `input_payload["distribution"]` to the state it checks. That branch reads a fixed fallback and evaluates an identity pair. A T-09 success cannot be used to claim measured entropy or coherence of an arbitrary supplied input. `SystemMetrics.entropy_level` remains a distinct caller-supplied heuristic scalar.

A future implementation that consumes supplied distributions must define how input is parsed and validated, the expected distribution's identity, and the evidence of false/invalid inputs. This decision record does not silently amend executable behavior. Source interpretation only; new execution `NOT_EXECUTED`.
