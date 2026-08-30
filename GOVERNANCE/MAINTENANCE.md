# Axiom-0 maintenance contract

Status: `CANONICAL_PUBLIC_MAINTENANCE_CONTRACT`

Effective: 2026-08-28

## Cadence and evidence

- A1–A4 produce one Daily manifest: source/input identity, independent KL and structural scans, bounded executions, then index checks.
- A5 Weekly inherits Daily records without erasing failures or manufacturing missing values.
- A6 Monthly closes only after the natural month ends. Until then use `MONTH_OPEN`; an unfinished week uses `WEEK_IN_PROGRESS / NO_WEEKLY_CLOSURE`.
- Every material record retains source/version/check time, revision, command, exit code, environment, and untested boundary. Source repetition is not independent corroboration.

KL, structural, execution, and index evidence are separate and prove only their named surfaces. `scan_consistency.py` emits a versioned `axiom_document_topology` contract; retain its JSON line. A non-zero scan fails closed and stops later stages. No later success rewrites an earlier failure.

## Historical correction and document governance

Post-hoc calibration preserves original text and records current disposition, reason, evidence boundary, canonical authority, and whether execution was replayed. ADR and Methodology identifiers and paths remain stable. Update a document when implementation mapping, inputs, procedure, outputs, failure conditions, or verification boundary changes. Metaphorical names may remain, but cannot become runtime, security, convergence, or scientific claims.

Historical control-plane drift closes only after retaining a repaired public entry point, its contract identity, and a later real Jules execution using that revision. Real Jules Daily records on 2026-08-28 through 2026-08-30 retain contract version `2026-08-28`; current state: `HISTORICAL_CONTROL_PLANE_DRIFT_CONFIRMED / REMEDIATION_PRESENT_ON_CURRENT_MAIN / POST_REPAIR_JULES_EXECUTION_OBSERVED`. Historical failed runs remain failed.

A 30-day provisional audit may be published when 30 logical dates exist, but it is not a natural-month seal. The month remains `MONTH_OPEN` until the calendar month ends and the last date is retained or explicitly classified as missing after it becomes due.

## Responsibility boundary

Jules may generate historical records through its existing private task. Public checkers validate declared surfaces. Independent review calibrates claims; a human reviews and merges. This contract does not authorize changes to `CODE/**`, frontend, dependencies, `.github/**`, CI, or private agent controls.

## Definition of Done, rollback, and escalation

A unit is done only when affected indexes and links agree, failures remain visible, targeted local checks pass with retained commands, protected-path review is clean, and unrun checks are listed. Revert the maintenance commit if a public entry point changes shape unexpectedly or a canonical link breaks. Escalate contradictions, missing provenance, scanner drift, and evidence promotion to human review; never silently repair history.
