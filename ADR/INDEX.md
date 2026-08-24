# Axiom-0 Architecture Decision Index

Status: architecture-decision navigation and authority map

`ADR/**` records durable repository decisions. ADR numbering is an identifier/order convention; it is not a supersession chain unless an ADR explicitly says so.

## Repository authority map

Axiom has distinct public layers:

- `SPECIFICATION.md` — current behavioral interpretation of the implemented reference core
- `CODE/**` — executable reference implementation
- `ADR/**` — durable architectural decisions and capability boundaries
- `METHODOLOGY/**` — procedures for measuring/interpreting repository behavior and research evidence
- `EVIDENCE_BASELINE.md` — external-source and evidence-semantics boundary
- `RESEARCH/**` — historical Daily/Weekly/Monthly evidence and reconciliations
- `GOVERNANCE/**` — design/planning records
- `AUTOMATION/**` — operational metadata, not semantic authority
- presentation/navigation files — discovery surfaces, not runtime authority

A change in one layer does not silently change another.

This index documents public repository architecture only. It does not encode private prompts, hidden reasoning, future control strategy, or unpublished automation instructions.

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
| [ADR-016](./ADR-016-TEMPORAL-EVIDENCE-AVAILABILITY.md) | Logical date, execution, source time, generation/delivery, aggregation visibility, and current presence are distinct facts | `RESEARCH/**` historical evidence lifecycle |

## Cross-layer rules

1. `CODE/**` defines implemented behavior; filenames and research metaphors do not add capabilities.
2. `SPECIFICATION.md` describes that behavior and its limitations; it does not create missing runtime features.
3. ADRs explain durable decisions; a non-implemented boundary ADR must say that the capability is external/reference-only.
4. Methodology explains how to measure or interpret specific repository/evidence surfaces; it does not become runtime policy.
5. Historical research remains point-in-time evidence. Later reconciliation can change current interpretation without rewriting original execution state.
6. External protocols/papers/SDKs remain reference material unless a corresponding implementation surface exists in this repository.
7. Indexes are derived navigation and must not be treated as stronger authority than the addressed file.

## Related navigation

- [Engineering specification](../SPECIFICATION.md)
- [Methodology index](../METHODOLOGY/INDEX.md)
- [Evidence baseline](../EVIDENCE_BASELINE.md)
- [2026-08-01 through 2026-08-23 stage audit](../RESEARCH/monthly/2026-08-through-23-stage-audit.md)
- [AI use disclosure](../AI_USE_DISCLOSURE.md)
