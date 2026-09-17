# Axiom-0 Methodology Index

Status: procedure and implementation-boundary map  
Current calibration: 2026-09-17

`METHODOLOGY/**` describes how a concrete repository property is measured, interpreted, or reconciled. A method does not create a runtime capability merely by existing.

## Method map

| Method | Current meaning | Implementation relation |
|---|---|---|
| [METH-001](./METH-001-DAG-TOPOLOGY-CONSTRAINT.md) | Inspect ordered `T-01`…`T-10` run events | `CODE/nexus_core.py` |
| [METH-002](./METH-002-KL-DIVERGENCE-DEFENSE.md) | Compute/interpret `D_KL(P||Q)` | `CODE/contracts.py` |
| [METH-003](./METH-003-ADR-DISTILLATION-PROTOCOL.md) | Distill repository evidence into bounded ADR decisions | documentary |
| [METH-004](./METH-004-MYTHIC-ARCHITECTURE-GENERATION.md) | Keep creative architecture material hypothesis-labelled | documentary only |
| [METH-005](./METH-005-REALITY-ANCHOR-AND-MYTHIC-AMPLIFICATION.md) | Separate repository facts, external evidence, inference, hypothesis | documentary |
| [METH-006](./METH-006-POST-PROCESSING-AND-DEHYDRATION.md) | Canonical JSON + SHA-256 content identity | `CODE/contracts.py` |
| [METH-007](./METH-007-COGNITIVE-FIREWALL-AND-ORGANIC-ISOLATION.md) | Bound claims about tool/content isolation | `NOT_IMPLEMENTED` |
| [METH-008](./METH-008-SYNTHETIC-CONTENT-EXCLUSION-BOUNDARY.md) | Preserve synthetic-content provenance and claim status | documentary |
| [METH-009](./METH-009-TEMPORAL-ENTROPY-ANCHORING.md) | Anchor evidence to time/version semantics | research/evidence |
| [METH-010](./METH-010-KL-THRESHOLD-ABSOLUTISM.md) | Keep thresholds specific to KL vs morphing surfaces | `contracts.py` / `liquid_morphing.py` interpretation |
| [METH-011](./METH-011-DETERMINISTIC-COLLABORATION-PROTOCOL.md) | Bound multi-agent collaboration claims | `NOT_IMPLEMENTED` |
| [METH-012](./METH-012-ZERO-TRUST-RESOURCE-ALLOCATION.md) | Distinguish observed metrics from resource enforcement | enforcement `NOT_IMPLEMENTED` |
| [METH-013](./METH-013-STRICT-DATA-DEDUPLICATION.md) | Exact canonical-content identity; no semantic auto-dedup | digest implemented, dedup engine `NOT_IMPLEMENTED` |
| [METH-014](./METH-014-GROUNDEDNESS-RULE.md) | Claim/source/implementation groundedness review | documentary/evidence |
| [METH-015](./METH-015-HISTORICAL-EVIDENCE-RECONCILIATION.md) | Reconcile Daily/Weekly/Monthly history, natural-period closure, and current interpretation without retroactivity | `RESEARCH/**` evidence lifecycle |

## Method contract

Every methodology should answer five questions:

1. **What exact repository surface or evidence does it apply to?**
2. **What are the real inputs?**
3. **What procedure is actually performed?**
4. **What output can be supported?**
5. **What does the procedure explicitly not prove or implement?**

For current structural validation, `scan_consistency.py` derives membership from this index and checks minimum procedure/evidence sections. That scanner does not validate the semantic quality of a methodology.

If no executable surface exists, the method must say so rather than inventing an implementation.

## Daily / Weekly / Monthly relation

- Daily records preserve point-in-time source, numerical, structural, execution, and topology evidence.
- Weekly synthesis may aggregate or downgrade Daily evidence but cannot promote missing or failed evidence.
- Monthly/stage reconciliation records the strongest current interpretation to a declared cutoff without backdating later evidence.
- Natural-period end, input/path coverage, aggregate generation, and final period seal are separate states.
- An aggregate created while a required date is `NOT_YET_DUE` or otherwise unavailable remains a historical partial/provisional record after that input later appears.
- Later input arrival updates current interpretation; it does not rewrite the earlier aggregate into a final result.

Current examples:

- August's retained through-day-30 monthly artifact remains provisional even though the natural month has ended.
- W37's retained weekly artifact remains `PARTIAL` because it was generated before the 2026-09-13 Daily became part of its available input set; current main now contains that Daily, but the earlier Weekly is not silently promoted.

## Authority relationship

- ADR records accepted repository decisions/boundaries
- Methodology records procedures
- `SPECIFICATION.md` records the current engineering and evidence-SOP contract
- `CODE/**` records implementation
- scanners/retained run artifacts provide narrow evidence for their exact properties
- `RESEARCH/**` records point-in-time research/history

A methodology cannot silently change a runtime constant, promote research to implementation, strengthen an evidence state beyond its support, or backdate later evidence.

## Related navigation

- [ADR index](../ADR/INDEX.md)
- [Engineering specification](../SPECIFICATION.md)
- [Evidence baseline](../EVIDENCE_BASELINE.md)
- [Historical evidence reconciliation](./METH-015-HISTORICAL-EVIDENCE-RECONCILIATION.md)
- [August through-day-30 provisional monthly artifact](../RESEARCH/monthly/2026-08-monthly-manifest.md)
- [W37 partial weekly artifact](../RESEARCH/weekly/2026-W37-weekly-manifest.md)
- [2026-09-13 Daily artifact](../RESEARCH/daily/2026-09-13-pipeline-manifest.md)
