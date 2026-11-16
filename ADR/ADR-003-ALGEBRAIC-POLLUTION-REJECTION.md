> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `DECISION`
> - **Role:** Current architecture decision: **Fail-closed probability and KL input contracts**
> - **Authority:** Current repository-native design rationale and constraint for the architecture surface expressed by this decision
> - **Current meaning:** The owning proposition is the subject named above. Read its implementation anchors against current `CODE/**` and `SPECIFICATION.md`; the ADR preserves why the constraint exists and how it should bound present interpretation
> - **Evidence / implementation boundary:** An accepted ADR does not prove execution, scientific validation, external-system behavior, or historical task completion. Legacy terminology in the filename does not broaden the narrower current proposition stated by the document body
> - **Cross-document relation:** `SPECIFICATION.md` owns current implementation semantics; `METHODOLOGY/**` owns repeatable procedure; dated evidence owns point-in-time observation; index/navigation files do not add evidence
> - **Update trigger:** Update when this decision changes, its implementation anchor contradicts it, or a confirmed authority/evidence conflict requires explicit reconciliation
> - **Preservation rule:** Existing decision history, rationale and examples remain in the same file. This pass clarifies current architecture meaning without deleting the original record

# Fail-closed probability and KL input contracts

## 中文专业对照 / Chinese technical counterpart

**本 ADR 的可核对命题 / Auditable proposition:** 概率与 KL 输入的有限性、归一化和异常处理必须显式判别

**English owner:** Fail-closed probability and KL input contracts

**具体判据 / Operational reading:** 判断本条记录时应同时定位当前 `SPECIFICATION.md`、适用源码、精确版本与该文件所列的证据边界，不能把历史设计决定当成已发生的运行结果 / The decision's implementation and validation must be established independently at the exact revision

| Original section / 英文原章节 | 中文阅读定位 / Chinese reading section |
| --- | --- |
| Context | 背景与触发条件 |
| Decision | 已接受的决策 |
| Consequences | 后果与代价 |
| Evidence boundary | 证据适用范围 |
| Numeric conformance details from the current function | 专业原文对应边界 |

**保留原则 / Preservation:** 原有决策正文、状态、历史解释与例外保持不变，本双语章节仅提供当前可检验的阅读路径 / Existing decision text and historic states remain the owner; this is a language and navigation addition


- Decision date: 2026-08-05
- Review calibration: 2026-08-24
- Status: Accepted
- Implementation anchor: `CODE/contracts.py`

## Context

KL divergence is defined over probability measures. Negative values, non-finite values, empty vectors, unequal lengths, and zero-total mass are invalid inputs for the repository's implementation.

## Decision

Centralize the implemented numeric contract in `CODE/contracts.py`.

`normalize_distribution(values, name=...)`:

- requires a non-empty numeric sequence
- rejects booleans
- rejects negative, NaN, and infinite values
- requires positive total mass
- normalizes with `math.fsum`

`kl_divergence(p, q)`:

- requires equal vector length
- computes `D_KL(P||Q)` after validation/normalization
- ignores P-zero terms as zero contribution
- returns positive infinity when P has positive mass where Q has zero mass

No silent smoothing is part of this contract.

## Consequences

Invalid numeric evidence fails explicitly instead of producing a finite score that could be misinterpreted as coherence.

## Evidence boundary

A successful calculation establishes only the numeric result for the supplied vectors under the current implementation.

It does not establish semantic truth, safety, or system-level convergence.

`scan_kl_divergence.py` is one measurement surface over named cases; it is not a general proof of repository correctness.

## Numeric conformance details from the current function

`CODE/contracts.py` rejects bool values explicitly despite Python's `bool` subclassing `int`; rejects non-finite and negative values; and requires strictly positive total mass. After normalization, a P-positive/Q-zero support mismatch returns `+∞` without smoothing. The scalar result is clamped to `0.0` if its absolute magnitude is less than `1e-15`, a numerical output convention that must not be converted into exact symbolic equality of input measures.

There is no caller-payload distribution normalization at the T-09 integration point in `run_continuum`; correct validation inside `kl_divergence` does not show that the orchestration path passed the intended external vectors. Document the function and call site as different units of evidence.
