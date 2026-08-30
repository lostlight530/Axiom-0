# Axiom-0 Monthly Protocol Manifest — 2026-08 through day 30

> **Post-hoc calibration — 2026-08-31**
>
> - Original record: `PRESERVED_BY_GIT_HISTORY`
> - Original execution state: `OPEN / PROVISIONAL`
> - Current disposition: `PROVISIONAL_30_DAY_MONTHLY_AUDIT`
> - Reason: the original A6 correctly excluded 08-31 but used absolute topology language and did not inherit all Daily/Weekly failures and conflicts.
> - Evidence boundary: this is a through-day-30 synthesis, not a natural-month seal and not a replay.
> - Canonical authority: [`2026-08-through-30-stage-audit.md`](2026-08-through-30-stage-audit.md)
> - Execution replayed for this annotation: `NO`

## Control state

- Coverage window: 2026-08-01 through 2026-08-30
- Daily path coverage: `30/30`
- W31–W35 records: present; W35 closed on 08-30
- Excluded date: 2026-08-31
- Month closure status: `MONTH_OPEN`
- Report status: `PROVISIONAL`
- Final protocol verdict: `NOT_AUTHORIZED`
- System integrity seal: `UNSEALED`

## Preserved negative evidence

- 08-19: `TEMPORAL_PROVENANCE_CONFLICT`
- 08-20–08-21: `INPUT_PROVENANCE_NOT_VERIFIED`
- 08-24, 08-26, 08-27: structural scanner failure; A3/A4 stopped fail-closed
- 08-25: `HISTORICAL_COMMAND_RESULT_CONFLICT`
- W34 aggregate KL: `MISSING_DATA`
- Source repetition: not independent corroboration

No later pass rewrites these states.

## Current control-plane state

The repaired `axiom_document_topology` contract version `2026-08-28` was retained by real Jules Daily runs on 08-28, 08-29, and 08-30:

`HISTORICAL_CONTROL_PLANE_DRIFT_CONFIRMED / REMEDIATION_PRESENT_ON_CURRENT_MAIN / POST_REPAIR_JULES_EXECUTION_OBSERVED`

This closes the observation requirement for the public scanner repair. It does not turn prior failed days into passes.

## Bounded monthly metrics

- Named KL cases observed at `0.0` where retained; this is not repository-wide zero entropy.
- A3 100/100 results are counted only on days with retained execution evidence.
- Failed or unexecuted A3 days are not counted as successful blast runs.
- Current document-topology scan: 16 ADRs and 15 Methodologies, structure scoped.
- Missing timing and uncovered-condition metrics remain `NOT_COMPUTED` or `MISSING_DATA`.

## Architecture decision

- New ADR required by this 30-day synthesis: `NO`
- Existing ADR or Methodology semantic rewrite required: `NO_NEW_CHANGE_IDENTIFIED`
- Governance correction required: `YES` — retain failure inheritance and close the post-repair observation state.

## Provisional verdict

`30_DAY_PATH_COVERAGE_COMPLETE_WITH_HISTORICAL_FAILURES_PRESERVED_POST_REPAIR_JULES_EXECUTION_OBSERVED_AND_MONTH_OPEN`

The natural August lifecycle is not sealed until 08-31 evidence exists or the maintenance contract explicitly records that date as missing after it becomes due.
