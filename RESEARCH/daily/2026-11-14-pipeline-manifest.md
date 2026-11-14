# Plasma Daily Pipeline — 2026-11-14 / A1 remote A2A failure-output boundary; A2–A4 fail closed

## ZECP Metadata and accountable run identity
- Repository: lostlight530/Axiom-0
- Canonical chain: axiom/plasma/A1 → A2 → A3 → A4, Daily
- Logical date: 2026-11-14 Asia/Shanghai
- Producer: GPT-6 / GPT_NATIVE / HUMAN_REQUESTED / NOT_JULES_REPLAY
- Base merged main at cold start: 4efede9e96765c45f5b44866de4e5c81e273434d
- Run identity: Axiom-0/plasma/A1-A4/2026-11-14/GPT_NATIVE/4efede9e96765c45f5b44866de4e5c81e273434d/adk-a2a-failed-output-acquisition-01
- Pipeline result: A1_SOURCE_REVIEW_COMPLETED / A2_BLOCKED_BEFORE_SCANNERS / A3_NOT_EXECUTED / A4_NOT_EXECUTED
- Output: RESEARCH/daily/2026-11-14-pipeline-manifest.md
- W46 and November natural monthly remain OPEN / NOT_DUE
- Prior W45 Weekly and October A6 were read as historical/current evidence context; their success or failures are not this run's scanner evidence

## A1 — source archaeology and bounded protocol hypothesis
### SOURCE-20261114-P01 — failed A2A task must not become downstream workflow output
- Publisher: google/adk-python
- Exact source identity: google/adk-python@f67cc356cd31775a75f9a8e7aae30cc86b00bcf8
- Original source: https://github.com/google/adk-python/commit/f67cc356cd31775a75f9a8e7aae30cc86b00bcf8
- Committed: 2026-11-13T14:54:25Z (2026-11-13 Asia/Shanghai; inspected on November 14, not relabeled as today's publication)
- Checked 2026-11-14: exact first-party implementation and authored unit-test diff for RemoteA2aAgent
- Source patch: _promote_response_to_output prevents events with error_code from failed remote tasks being copied into workflow event.output, and extends non-final task state names to proto-enum spelling. A completed task with error_code (for example MAX_TOKENS finish reason) can still yield an answer.
- Tests authored upstream: parameterized failed and completed task cases plus streaming/unary workflow cases. Their source presence is NOT a test run by this producer.
- Claim boundary: patch intent and changed control branches are verified as source; actual installed version, runtime pass and Axiom protocol adoption remain UNKNOWN.
- Independence: one Google ADK first-party commit lineage. Its use by another research repository is not a new independent source or experiment.
- Counterexample: a failed remote task with explanatory failure text must leave successor output absent, whereas a completed task with answer text and finish-reason error code must not be discarded solely because error_code exists.
- No unsupported conclusion that every A2A task state or every network failure has safe output semantics.

### A1 candidate hypotheses
- H-20261114-P01 / SOURCE_SUPPORTED_PROTOCOL_CANDIDATE: task terminal failure and successor node result must be distinct result types, not text content selected by status-independent promotion.
- H-20261114-P02 / REQUIRES_FORMAL_EXECUTION: an A2A state serialization variation (legacy hyphenated vs proto enum) can change a gate's accepted states without changing logical task semantics.
- Neither hypothesis is an accepted Plasma protocol decision, executable proof or ADR.

## A2 — real KL and structural scan gate
### Actually executed source-acquisition diagnostic
- Command: git ls-remote https://github.com/lostlight530/Axiom-0.git HEAD
- UTC start: 2026-11-14T01:13:44.377106739Z
- UTC end: 2026-11-14T01:13:44.393922873Z
- Environment: Linux 6.18.57; Git 2.47.3; Python 3.13.5
- Exit code: 128
- stdout: EMPTY / 0 bytes
- stderr: fatal: unable to access 'https://github.com/lostlight530/Axiom-0.git/': Could not resolve host: github.com
- Category: LOCAL_GIT_REMOTE_DNS_SOURCE_ACQUISITION_FAILURE / NO_COMPLETE_PINNED_WORKTREE
- GitHub connector source/blob reads were available; those are not a complete executable checkout.
- This is a failed acquisition command, NOT a measured scanner failure or repository code defect.

### Formal A2 execution states
- python3 scan_kl_divergence.py: NOT_EXECUTED; input set, numerical KL, unit, stdout/stderr and exit: NOT_COMPUTED
- python3 scan_consistency.py: NOT_EXECUTED; structural/JSON output, stdout/stderr and exit: NOT_COMPUTED
- A2 formal gate: BLOCKED_BEFORE_FORMAL_SCAN
- Reusing an old PASS or separately synthesizing a KL number is prohibited.

## A3 — bounded reference execution
- Gate: formal A2 not satisfied
- Reference test command/execution: NOT_EXECUTED
- Revision, test denominator, pass/fail totals, stdout/stderr/exit: NOT_COMPUTED
- No completed attempt, effect identity or counterexample experiment claimed

## A4 — topology and index alignment
- Formal INDEX/PATCH_INDEX alignment: NOT_EXECUTED / NOT_ASSESSED
- No writes to current indices, SPECIFICATION, ADR, CODE, schemas, methodology, workflows or original manifests

## EVIDENCE_DELTA
- NEW_EVIDENCE: exact first-party A2A failed-task output promotion fix and authored regression controls; independently captured current pinned-checkout acquisition failure with start/end time and exit.
- CORRECTED_INTERPRETATION: remote A2A failure text is not a legitimate successor answer; an error_code attached to a completed task is not sufficient to classify task FAILED.
- UNCHANGED_BOUNDARY: A1_SOURCE != A2_FORMAL_SCANS != A3_BOUNDED_EXECUTION != A4_INDEX_ALIGNMENT.
- NEW_COUNTEREVIDENCE: legacy/proto enum task-state normalization differences and completed answer with MAX_TOKENS counteract over-broad error handling.
- UNKNOWN_RETAINED: exact Axiom KL and topology, formal pipeline behavior, runtime tests, local A2A usage and accepted protocol maturity.
- NEXT_RETEST_CONDITION: obtain exact 4efede9e96765c45f5b44866de4e5c81e273434d complete worktree or refreshed main, run both A2 scanners with input/units, stdout/stderr/exit and environment, then A3 tests and A4 mapping in documented order. Independently replay both failed/completed A2A output controls under pinned upstream dependency.

## Delivery and history boundary
- Only one canonical new Daily manifest, preserving previous Jules/GPT producer and failure histories.
- Source comparison and direct Git diagnostic executed; A2/A3/A4 and full repository test execution NOT_EXECUTED.
- Draft PR for Human Maintainer review only; this report is NOT a full-pipeline PASS.
