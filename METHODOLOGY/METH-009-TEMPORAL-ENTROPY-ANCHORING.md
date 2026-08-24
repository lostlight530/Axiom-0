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