# Axiom-0 Architecture Decision Index

Status: navigation and authority map

`ADR/**` records durable architectural decisions. ADR numbering is an identifier/order convention; it does not by itself establish a supersession chain.

`SPECIFICATION.md` remains the behavioral contract. ADRs explain why durable boundaries exist. `METHODOLOGY/**` describes procedures. `CODE/**` and tests provide executable implementation/evidence. `RESEARCH/**`, automation, and presentation are separately owned layers.

## Decisions

| ADR | Topic | Primary authority role |
|---|---|---|
| [ADR-001](./ADR-001-ZERO-ENTROPY-COGNITIVE-PROTOCOL.md) | Zero-entropy cognitive protocol | Historical protocol vocabulary and bounded interpretation |
| [ADR-002](./ADR-002-DAG-IRREVERSIBILITY-ENFORCEMENT.md) | DAG irreversibility enforcement | Transformation/topology decision |
| [ADR-003](./ADR-003-ALGEBRAIC-POLLUTION-REJECTION.md) | Algebraic pollution rejection | Numeric/evidence rejection decision |
| [ADR-004](./ADR-004-LIQUID-KNOWLEDGE-SOLIDIFICATION.md) | Liquid knowledge solidification | Knowledge-state lifecycle decision |
| [ADR-005](./ADR-005-CONTEXT-INGESTION-AND-CANONICALIZATION.md) | Context ingestion and canonicalization | Input/canonical representation decision |
| [ADR-006](./ADR-006-MYTHIC-GENERATION-LANE.md) | Mythic generation lane | Narrative/synthetic-content separation decision |
| [ADR-007](./ADR-007-HUMAN-AI-POSTPROCESSING-BOUNDARY.md) | Human/AI post-processing boundary | Accountability/post-processing decision |
| [ADR-008](./ADR-008-RESEARCH-TO-ADR-DISTILLATION.md) | Research-to-ADR distillation | Research promotion decision |
| [ADR-009](./ADR-009-EVIDENCE-STATUS-LABELING.md) | Evidence status labeling | Evidence-state decision |
| [ADR-010](./ADR-010-INDEX-SYNCHRONIZATION-AND-NAV-CONTRACT.md) | Index synchronization/navigation | Repository navigation decision |
| [ADR-011](./ADR-011-ZERO-TRUST-TOOL-EXECUTION.md) | Zero-trust tool execution | Tool authority/security boundary |
| [ADR-012](./ADR-012-SANDBOX-SELF-DESTRUCTION-PROTOCOL.md) | Sandbox self-destruction protocol | Ephemeral execution/cleanup boundary |
| [ADR-013](./ADR-013-VERIFICATION-AND-CLAIM-SCOPE.md) | Verification and claim scope | Completion/evidence boundary |
| [ADR-014](./ADR-014-REPO-KNOWLEDGE-STRATIFICATION.md) | Repository knowledge stratification | Cross-layer authority model |
| [ADR-015](./ADR-015-REFERENCE-IMPLEMENTATION-BOUNDARY.md) | Reference implementation boundary | Library vs production-control ownership |

## Cross-layer rules

ADR-014 defines the authority stratification used by this index:

- ADR: durable decisions
- METHODOLOGY: procedures
- SPECIFICATION: behavioral contracts
- CODE/tests: implementation and revision-specific executable evidence
- AUTOMATION: scheduling/check orchestration
- RESEARCH and presentation: separately owned material

A change in one layer does not silently rewrite the authority of another. Cross-layer changes should link the affected decision, procedure, contract, and executable evidence as applicable.

## Related navigation

- [Engineering specification](../SPECIFICATION.md)
- [Methodology index](../METHODOLOGY/INDEX.md)
- [Evidence baseline](../EVIDENCE_BASELINE.md)
- [AI use disclosure](../AI_USE_DISCLOSURE.md)

This index is navigation/documentation only. It does not alter executable behavior or create new ADR decisions.
