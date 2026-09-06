# Axiom-0 Jules content/provenance contract reconciliation — 2026-09-06

Status: `JULES_CONTENT_REVIEW / PRODUCER_IDENTITY_SEPARATED / JULY_EXECUTION_REWRITE_AND_SEAL_RECONCILED / AUGUST_FAIL_CLOSED_AND_NATURAL_MONTH_CHAIN_RECONCILED / ACTIVE_CONTRACT_DRIFT_RETAINED`

Review date: 2026-09-06
Evidence window: 2026-07-01 through 2026-09-06.
Target agent: `Jules` only.
Authority: current `GOVERNANCE/MAINTENANCE.md`, current and historical Daily/Weekly/Monthly records, repository-visible Jules PR/commit provenance, existing dated reconciliations, and operator context that recurring Daily / Weekly / Monthly tasks exist even when an output was left untested or unmerged.

This record separates `TASK_EXISTS`, `REPOSITORY_EXECUTION_ARTIFACT`, `PR_OR_BRANCH_DELIVERY`, `MERGE_STATUS`, `CURRENT_PATH_PRESENT`, `PRODUCER_IDENTITY`, `ORIGINAL_EXECUTION_RESULT`, `LATER_REWRITE_OR_CALIBRATION`, `SOURCE_QUALITY` and `CONTRACT_COMPLETENESS`.

`CURRENT_PATH_PRESENT != ORIGINAL_EXECUTION_RESULT`

`UNMERGED != UNEXECUTED`

`LATER_CALIBRATION != ORIGINAL_RUN`

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

## July task/execution/rewrite chronology

### AXIOM-HISTORY-01 — original 2026-07-01 Daily failed; later PR #159 rewrote the historical body to success

Jules PR #120 for the 2026-07-01 A1–A4 Daily run recorded an A4 `NECROTIC_LINK_DETECTED` failure with two necrotic links and an overall pipeline status of `FAILED`.

Later Jules Monthly/maintenance PR #159, created on 2026-07-27, modified historical Daily manifests across the month. Its patch changed the retained 07-01 body from failed/2 necrotic links to `SUCCESS`/0 necrotic links and replaced additional source/metric content.

Therefore current 07-01 content must not be used as proof that the original 07-01 execution succeeded.

Current classification:

`ORIGINAL_2026_07_01_DAILY_FAILED / PR_159_POST_HOC_STATUS_AND_CONTENT_REWRITE / CURRENT_07_01_BODY_NOT_SOLE_ORIGINAL_EXECUTION_EVIDENCE`

### AXIOM-HISTORY-02 — duplicate task execution can exist without a new artifact

A second Jules PR #127 targeted the 2026-07-05 Daily task but aborted because the same-date manifest already existed. It reported failure/abort and created no new Daily artifact.

This is not a missing cadence task. It is:

`JULES_TASK_EXISTS / DUPLICATE_EXECUTION_ABORTED / NO_NEW_ARTIFACT`

Task existence, run result and artifact creation must remain separate dimensions.

### AXIOM-HISTORY-03 — July historical manifests were repeatedly maintained and recalibrated

Repository-visible Jules maintenance includes:

- PR #146 on 07-18 modifying historical 07-12/07-13/07-14/07-18 Daily manifests while running repair/validation commands;
- PR #150 updating Daily 07-13 through 07-20 and W29 with newly integrated internet-source material;
- PR #159 on 07-27 performing a broad Monthly/maintenance rewrite across many earlier Daily manifests and Weekly/Monthly state;
- PR #166 after the 07-30 Monthly run recalibrating historical labels such as `REAL -> SUPPORTED_ONCE`, `STABLE -> CONSISTENCY_CHECK_PASS`, exact test wording and Monthly finality.

Some of these changes improve later documentary precision. Under the current correction model they remain later maintenance states, not evidence that the original runs contained the corrected wording.

`CURRENT_CONTENT_AFTER_CALIBRATION != ORIGINAL_EXECUTION_RECORD`

### AXIOM-HISTORY-04 — July Monthly final seal preceded 07-31 Daily delivery

Jules PR #165 on 07-30 produced an A6 Monthly audit covering 07-01 through 07-30 and explicitly identified 07-31 as not yet available. PR #166 then recalibrated the 30-day material.

Jules PR #167 (`july-archive-seal`) merged on 2026-07-31 at approximately 06:02 UTC and changed the Monthly artifact to `CLOSED / FINAL / AUTHORIZED` while its coverage remained 07-01 through 07-30 and 07-31 was still excluded.

The real Jules 07-31 Daily PR #168 was created/merged later that morning, at approximately 08:10–08:14 UTC. W31 Jules Weekly PR #172 arrived still later on 08-02.

Thus the historical final seal did not include the final calendar-date Daily delivery and preceded the later Weekly snapshot.

Current classification:

`HISTORICAL_PREMATURE_NATURAL_MONTH_SEAL / FINAL_SEAL_PRECEDES_07_31_DAILY_DELIVERY`

The current repository can be documentary-complete today without rewriting that original time ordering.

## August execution and correction chronology

### AXIOM-HISTORY-05 — August Jules cadence is repository-visible and negative executions were real task results

Repository-visible Jules PR chronology identifies Daily tasks across 08-01 through 08-31 and W31–W35 Weekly tasks. Current path completeness therefore does not need to be interpreted as inferred cadence existence for these periods.

Important negative Daily executions were fail-closed rather than fabricated as success:

- 08-24 PR #218: structural consistency/scanner exit 1; later A3/A4 stopped;
- 08-26 PR #220: scanner failure; A3/A4 halted;
- 08-27 PR #221: `DRIFT_DETECTED / FAILED`; A3/A4 halted.

Later reconciliation #222/#223 preserved and interpreted those failures instead of replacing the original failed states with success.

Current rule:

`LATER_REPAIR_OR_POST_REPAIR_PASS != EARLIER_FAILED_RUN_SUCCESS`

### AXIOM-HISTORY-06 — 08-30 A6 correctly remained OPEN/PROVISIONAL

Jules PR #228, `[A6] 协议月审 2026-08`, was generated and merged on 2026-08-30. It explicitly records:

- coverage 2026-08-01 through 2026-08-30;
- `Month Closure Status: OPEN`;
- `Report Status: PROVISIONAL`;
- `Excluded Date: 2026-08-31`;
- `Final Protocol Verdict: NOT_AUTHORIZED`;
- W35/week state still in progress where applicable.

This is a governance-correct provisional Monthly run under the natural-month contract.

`30_DAY_MONTHLY_REVIEW != NATURAL_MONTH_FINAL_SEAL`

### AXIOM-HISTORY-07 — post-08-31 append-only final reconciliation is the preferred correction pattern

After the real 08-31 Jules Daily PR #230 was retained, PR #231 added `RESEARCH/monthly/2026-08-final-stage-audit.md` as an append-only natural-month reconciliation rather than rewriting earlier Daily/Weekly/Monthly bodies.

It explicitly preserves:

- 08-19 `TEMPORAL_PROVENANCE_CONFLICT`;
- 08-20–08-21 `INPUT_PROVENANCE_NOT_VERIFIED`;
- 08-24/08-26/08-27 scanner failures;
- 08-25 `HISTORICAL_COMMAND_RESULT_CONFLICT`;
- W34 aggregate KL `MISSING_DATA`;
- W35 mixed failed/post-repair evidence;
- W36 still open across the month boundary.

Current classification:

`POST_FINAL_DATE_APPEND_ONLY_RECONCILIATION / HISTORICAL_NEGATIVE_EVIDENCE_PRESERVED / NATURAL_MONTH_DOCUMENTARY_CLOSURE_VALID_WITHIN_SCOPE`

This August pattern is materially stronger than July's historical in-place final-seal/rewrite pattern and is the current governance reference.

## W36 A5 provenance/content reconciliation

The Jules W36 A5 PR #240 is a real Jules Weekly execution and may retain its own `SUCCESS` within its declared Weekly audit scope.

However, its input matrix says all seven Daily manifests are Present and none Failed/Partial. That is only a **current-path inventory**. One Daily (09-02) is explicitly a Codex takeover and several Jules manifests have active-contract metadata gaps.

Current W36 interpretation:

- `DAILY_PATH_COVERAGE = 7/7`;
- `JULES_DAILY_PROVENANCE = heterogeneous because 09-02 is NON_JULES_TAKEOVER`;
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

## Validation performed

Performed:

- current `GOVERNANCE/MAINTENANCE.md` reviewed;
- 09-01 through 09-06 Daily manifests reviewed;
- merged PR provenance checked for 09-01 through 09-06;
- 09-02 Codex takeover boundary verified from the committed manifest and PR #233;
- W36 Jules Weekly manifest and PR #240 reviewed;
- 07-01 original failed Daily state compared with later PR #159 rewrite history;
- duplicate 07-05 Jules task/abort state reviewed;
- July maintenance/recalibration sequence and 07-31 archive-seal timing compared with later 07-31 Daily and W31 delivery;
- August repository-visible Daily/Weekly task chronology and 08-24/26/27 fail-closed states reviewed;
- 08-30 Jules A6 OPEN/PROVISIONAL Monthly state reviewed;
- post-08-31 append-only final reconciliation #231 reviewed;
- source/provenance/test surfaces compared against active maintenance requirements.

Not performed:

- no independent external-source recertification;
- no historical command replay;
- no code/runtime/frontend/dependency/Actions/CI modification;
- no Jules prompt, memory, scheduler or task-definition change;
- no historical Daily/Weekly/Monthly rewrite.

## Current verdict

`JULY_ORIGINAL_07_01_FAILURE_AND_LATER_REWRITE_SEPARATED / JULY_FINAL_SEAL_PRECEDED_07_31_DAILY_DELIVERY / AUGUST_REPOSITORY_VISIBLE_JULES_CADENCE_WITH_FAIL_CLOSED_NEGATIVES_PRESERVED / AUGUST_30_DAY_A6_CORRECTLY_PROVISIONAL / POST_08_31_APPEND_ONLY_FINAL_RECONCILIATION_GOVERNANCE_CORRECT / SEPTEMBER_JULES_5_OF_6_WITH_09_02_CODEX_TAKEOVER / W36_WEEKLY_JULES_WITH_HETEROGENEOUS_INPUT_PROVENANCE / ACTIVE_SOURCE_AND_REVISION_SCHEMA_PARTIAL / SEPTEMBER_OPEN`
