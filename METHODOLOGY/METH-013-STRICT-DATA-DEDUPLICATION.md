> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `METHOD`
> - **Role:** Current methodology: **Content-addressed identity without semantic auto-deduplication**
> - **Authority:** Repository-native method authority for the procedure, assumptions, thresholds, evidence treatment and limitations expressed by this file
> - **Current meaning:** The method owns the procedural semantics named above. Read steps and thresholds as a contract for how the repository should reason or check, not as evidence that the method executed at the current revision
> - **Evidence / implementation boundary:** Method definition != method execution. Conceptual procedures do not become runtime capability without an implementation anchor, and historical examples retain their own cutoff rather than defining present status
> - **Cross-document relation:** `SPECIFICATION.md` and current `CODE/**` bound implementation; ADRs explain durable design choices; dated evidence and periodic records provide observations without redefining the method
> - **Update trigger:** Update when the procedure, assumptions, thresholds, implementation mapping, evidence semantics or historical/current boundary materially changes
> - **Preservation rule:** Existing procedure, examples and rationale remain in the same file. Current clarification is additive and does not erase earlier method history

# Content-addressed identity without semantic auto-deduplication

## 中文方法正文导读 / Chinese method counterpart

**准确研究对象 / Actual method:** 精确内容摘要不实现语义级自动去重，也不能证明两个研究主张等价

**English procedure owner:** Content-addressed identity without semantic auto-deduplication

**输入—方法—产出 / Input, procedure and output:** 本方法应以其原始 `Inputs`、`Procedure` 与 `Outputs` 逐项限定适用对象，失败条件必须保留原先的 `Failure conditions`，没有匹配版本的实测命令时不登记为 `EXECUTED` / Match actual inputs, procedure and outputs, retain failure cases, and never infer execution from the method's presence

| Source heading / 英文原章 | 中文对应 / Chinese section |
| --- | --- |
| Objective | 目标 |
| Inputs | 输入及前置条件 |
| Procedure | 方法步骤 |
| Outputs | 结果和适用范围 |
| Failure conditions | 失败条件 |
| Evidence boundary | 证据边界 |
| Collision-domain and provenance distinction | 相应方法的当前约束 |

**代码与证据 / Code and evidence:** 按 `SPECIFICATION.md`、相应 `CODE/**` 函数和运行收据确认功能范围；本补充不提高原有验证等级 / Use the exact implementation and receipts to verify actual capability, this reading layer does not raise evidence grade


- Method version: 2026-08-24
- Implementation anchor: `CODE/contracts.py` for canonical serialization and SHA-256 digest
- Deduplication engine status: `NOT_IMPLEMENTED`

## Objective

Use deterministic canonical bytes/digests to identify exact content under the repository contract without claiming that Axiom implements semantic deduplication or safe automatic merging.

## Inputs

- JSON-compatible record/value
- implementation revision
- any separately maintained record identity/provenance

## Procedure

1. Canonicalize the value with `canonical_json()`.
2. Compute the repository digest when content-addressed identity is required.
3. Treat matching digests as exact canonical-content identity under the same serialization contract.
4. Preserve provenance/record identity separately when two distinct records happen to have identical content.
5. Do not auto-delete or merge records based on semantic similarity; no such semantic deduplication mechanism is implemented.

## Outputs

- canonical representation/digest
- exact-content match or mismatch where compared
- explicit unresolved semantic relationship if the question exceeds byte-level identity

## Failure conditions

Do not claim deduplication when the canonicalization version/implementation differs, the compared input identity is unknown, or only semantic similarity is asserted without a semantic comparison mechanism.

## Evidence boundary

A matching SHA-256 digest under the same canonicalization contract supports exact content identity, not factual equivalence, provenance equivalence, semantic redundancy, or authorization to delete either record.

## Collision-domain and provenance distinction

`stable_digest` is SHA-256 over `canonical_json` output, not a record-level primary key or a source-signature check. Two separately authored records with identical canonical JSON produce the same digest without proving common authorship or permission to consolidate them; a record's mutable metadata may also change its digest even when a reader considers the proposition unchanged.

The repository does not maintain a digest-to-record index or execute a deletion/merge policy. Any future deduplication claim needs an explicit identity tuple (record ID, content digest, serialization version, provenance), a collision-handling assumption and a retained before/after decision record. The current digest function supplies only one input to such a design, not the design itself.
