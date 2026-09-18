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