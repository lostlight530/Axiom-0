> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `DECISION`
> - **Role:** Current architecture decision: **Canonical JSON preserves payload semantics**
> - **Authority:** Current repository-native design rationale and constraint for the architecture surface expressed by this decision
> - **Current meaning:** The owning proposition is the subject named above. Read its implementation anchors against current `CODE/**` and `SPECIFICATION.md`; the ADR preserves why the constraint exists and how it should bound present interpretation
> - **Evidence / implementation boundary:** An accepted ADR does not prove execution, scientific validation, external-system behavior, or historical task completion. Legacy terminology in the filename does not broaden the narrower current proposition stated by the document body
> - **Cross-document relation:** `SPECIFICATION.md` owns current implementation semantics; `METHODOLOGY/**` owns repeatable procedure; dated evidence owns point-in-time observation; index/navigation files do not add evidence
> - **Update trigger:** Update when this decision changes, its implementation anchor contradicts it, or a confirmed authority/evidence conflict requires explicit reconciliation
> - **Preservation rule:** Existing decision history, rationale and examples remain in the same file. This pass clarifies current architecture meaning without deleting the original record

# Canonical JSON preserves payload semantics

## 中文专业对照 / Chinese technical counterpart

**本 ADR 的可核对命题 / Auditable proposition:** Canonical JSON 与摘要描述精确字节身份而非语义真理

**English owner:** Canonical JSON preserves payload semantics

**具体判据 / Operational reading:** 判断本条记录时应同时定位当前 `SPECIFICATION.md`、适用源码、精确版本与该文件所列的证据边界，不能把历史设计决定当成已发生的运行结果 / The decision's implementation and validation must be established independently at the exact revision

| Original section / 英文原章节 | 中文阅读定位 / Chinese reading section |
| --- | --- |
| Context | 背景与触发条件 |
| Decision | 已接受的决策 |
| Consequences | 后果与代价 |
| Evidence boundary | 证据适用范围 |
| Scope boundary | 专业原文对应边界 |
| Input identity is not trace identity | 专业原文对应边界 |

**保留原则 / Preservation:** 原有决策正文、状态、历史解释与例外保持不变，本双语章节仅提供当前可检验的阅读路径 / Existing decision text and historic states remain the owner; this is a language and navigation addition


- Decision date: 2026-08-05
- Review calibration: 2026-08-24
- Status: Accepted
- Implementation anchor: `CODE/contracts.py`

## Context

Deterministic serialization is narrower than semantic normalization. Earlier transformations that changed case or punctuation could alter caller data.

## Decision

`canonical_json(value)` defines the repository byte-level canonicalization contract:

- JSON-compatible values only
- mapping keys sorted
- Unicode preserved
- compact separators
- non-finite numeric values rejected
- original scalar/string content preserved

`stable_digest(value)` is SHA-256 over those canonical UTF-8 bytes.

## Consequences

Equivalent mapping order produces stable serialized bytes while semantically different scalar content remains distinct.

## Evidence boundary

A stable digest establishes content identity under this exact canonicalization contract.

It does not establish:

- semantic equivalence
- source provenance
- authorship
- authorization
- truth
- integrity against a trusted external authority

Changing the canonicalization contract changes digest identity and must be treated as a versioned interpretation change.

## Scope boundary

This ADR does not describe general context ingestion, retrieval, memory, or document normalization. Axiom's executable implementation here is byte-level canonicalization and hashing only.

## Input identity is not trace identity

The repository has two distinct hashes with different objects: `input_digest = stable_digest(raw_input)` and orchestration `run_id = stable_digest({"input": input_payload, "events": events})`. The latter includes wall-clock `observed_at` fields in event records, so repeating the same raw input can preserve `input_digest` while changing `run_id`. Neither digest authenticates the producer or validates the truth of an input.

This distinction matters when comparing duplicate payloads, traces and claimed deterministic behavior. Equal canonical input identity is not equal execution history, and matching serialized content does not license record deletion or evidence promotion.
