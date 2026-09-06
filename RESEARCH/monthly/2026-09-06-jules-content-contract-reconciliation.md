# Axiom-0 Jules content/provenance contract reconciliation — 2026-09-06

Status: `JULES_CONTENT_REVIEW / PRODUCER_IDENTITY_SEPARATED / ACTIVE_CONTRACT_DRIFT_RETAINED`

Review date: 2026-09-06
Evidence window for this addendum: active September records through 2026-09-06, with historical August/July corrections retained by existing governance records.
Target agent: `Jules` only.
Authority: current `GOVERNANCE/MAINTENANCE.md`, current Daily/Weekly records, merged PR provenance, and existing dated reconciliations.

This record corrects a material ambiguity in the cadence reconciliation: a current Daily path is not necessarily a Jules execution. `CURRENT_PATH_PRESENT`, `PRODUCER_IDENTITY`, `EXECUTION_RESULT`, `SOURCE_QUALITY` and `CONTRACT_COMPLETENESS` are separate states.

No external web/GPT recertification was performed.

## September producer ledger

| Date | Current Daily path | Producer / provenance | Current content-contract disposition |
| --- | --- | --- | --- |
| 2026-09-01 | PRESENT | `Jules` — automated PR #232 | `JULES_EXECUTION_IDENTIFIED / CONTRACT_PARTIAL`; source observations and A2/A3 outputs exist, but current maintenance-required revision/baseline, source-version discipline and explicit untested boundaries are incomplete or represented as `MISSING_DATA` |
| 2026-09-02 | PRESENT | `Codex local takeover` — PR #233 | `NON_JULES_TAKEOVER`; body explicitly says it is not a replay/certification of Jules's unretained execution; this date must not be counted as a Jules Daily success |
| 2026-09-03 | PRESENT | `Jules` — automated PR #236 | `JULES_EXECUTION_IDENTIFIED / CONTRACT_PARTIAL`; sources and commands are retained, but producer/revision/source-version fields are not fully encoded in the manifest itself |
| 2026-09-04 | PRESENT | `Jules` — automated PR #237 | `JULES_EXECUTION_IDENTIFIED / CONTRACT_PARTIAL`; command/exit/environment evidence is bounded, but revision/baseline and source-version fields remain incomplete; `MISSING_DATA` persists for failure/untested surfaces |
| 2026-09-05 | PRESENT | `Jules` — automated PR #238 | `JULES_EXECUTION_IDENTIFIED / CONTRACT_PARTIAL`; missing SHA256, timing and uncovered-condition evidence are explicit; revision/baseline and source-version fields remain absent from the Daily record |
| 2026-09-06 | PRESENT | `Jules` — automated PR #239 | `JULES_EXECUTION_IDENTIFIED / A1_METADATA_INCOMPLETE`; multiple A1 title/publisher/supported-fact fields are `MISSING_DATA` while the overall pipeline is still called SUCCESS; success is bounded to the actually executed A2/A3/A4 surfaces, not a complete A1 source record |

September through 09-06 therefore has:

- current Daily paths: `6/6`;
- Jules Daily executions identified: `5/6`;
- explicit non-Jules takeover: `1/6` on 09-02;
- no evidence in this record that the unretained Jules 09-02 attempt completed.

Use:

`CURRENT_PATH_PRESENT != JULES_EXECUTION_IDENTIFIED`

`CODEX_TAKEOVER != JULES_REPLAY`

## Active maintenance-contract gaps

Current `GOVERNANCE/MAINTENANCE.md` requires material records to retain source/version/check time, revision, command, exit code, environment and untested boundary. The September Jules manifests do not enforce that schema consistently.

### AXIOM-CONTENT-01 — revision/baseline provenance missing

09-01 and 09-03..09-06 Daily records do not consistently retain the inspected repository revision/baseline. PR metadata can identify a branch/base, but that is not equivalent to the Daily record satisfying the active content contract.

### AXIOM-CONTENT-02 — source version and supported-fact fields unstable

- several records retain URLs/titles/check times but omit a normalized source-version field;
- 09-06 explicitly leaves multiple titles, publishers and supported facts as `MISSING_DATA`.

A1 status for 09-06 is therefore:

`SOURCE_ACCESS_RECORDED / SOURCE_METADATA_PARTIAL / CLAIM_SUPPORT_PARTIAL`

It is not a complete source-archaeology record merely because later A2/A3 commands passed.

### AXIOM-CONTENT-03 — test success does not repair source metadata

A2 structural/KL checks and A3 100-repeat fixture results are separate evidence surfaces from A1 web/source archaeology.

Use:

`A2_A3_SUCCESS != A1_SOURCE_COMPLETENESS`

`FIXED_REPEAT_FIXTURE_SUCCESS != GLOBAL_CORRECTNESS`

### AXIOM-CONTENT-04 — MISSING_DATA must remain an unresolved field

`MISSING_DATA`, `NOT_COMPUTED` and omitted provenance are valid negative/unknown evidence and must not be normalized to a blanket Daily health state.

## W36 A5 provenance/content reconciliation

The Jules W36 A5 PR #240 is a real Jules Weekly execution and may retain its own `SUCCESS` within its declared Weekly audit scope.

However, its input matrix says all seven Daily manifests are Present and none Failed/Partial. That is only a **current-path inventory**. One Daily (09-02) is explicitly a Codex takeover and several Jules manifests have active-contract metadata gaps.

Current W36 interpretation:

- `DAILY_PATH_COVERAGE = 7/7`;
- `JULES_DAILY_PROVENANCE = 6 dates in the natural W36 window only if 08-31 plus 09-01 and 09-03..09-06 are counted; 09-02 is NON_JULES_TAKEOVER`;
- `PRODUCER_HETEROGENEITY = PRESENT`;
- `CONTENT_CONTRACT_PARTIAL_INPUTS = PRESENT`;
- Weekly hard-signal/hypothesis inheritance does not change the producer identity of 09-02.

The 09-02 fixed-fixture observation may be used as a retained repository observation if explicitly attributed to Codex takeover, but not as proof of uninterrupted Jules Daily execution.

## Monthly propagation

September is `MONTH_OPEN` on 2026-09-06. No A6 natural-month closure is due.

Any future September Monthly record must preserve:

- 09-02 producer identity as non-Jules takeover;
- source/provenance gaps in the Jules Daily records;
- path coverage separately from producer coverage;
- A2/A3 bounded tests separately from A1 source completeness.

## Historical July/August boundary

Existing repository reconciliation already retains historical scanner failures, provenance conflicts, command-result conflicts and the post-repair Jules observations. The cadence file's `68/68 PRESENT` statement remains valid only as current-path coverage, not as `68/68 Jules executions`.

This pass does not claim that every July/August path was independently re-proven to be Jules-generated. Historical producer identity remains governed by explicit PR/commit/reconciliation evidence, not filename inference.

## Validation performed

Performed:

- current `GOVERNANCE/MAINTENANCE.md` reviewed;
- 09-01 through 09-06 Daily manifests reviewed;
- merged PR provenance checked for 09-01 through 09-06;
- 09-02 Codex takeover boundary verified from the committed manifest and PR #233;
- W36 Jules Weekly manifest and PR #240 reviewed;
- source/provenance/test surfaces compared against active maintenance requirements.

Not performed:

- no independent external-source recertification;
- no historical command replay;
- no code/runtime/frontend/dependency/Actions/CI modification;
- no Jules prompt, memory, scheduler or task-definition change;
- no historical Daily/Weekly/Monthly rewrite.

## Current verdict

`CURRENT_PATHS_6_OF_6_IN_SEPTEMBER / JULES_DAILY_5_OF_6_WITH_09_02_CODEX_TAKEOVER / W36_WEEKLY_IS_JULES_BUT_INPUT_PROVENANCE_IS_HETEROGENEOUS / ACTIVE_SOURCE_AND_REVISION_SCHEMA_PARTIAL / SEPTEMBER_OPEN`
