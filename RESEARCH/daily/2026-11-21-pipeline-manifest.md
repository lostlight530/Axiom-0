# Plasma Daily Pipeline — 2026-11-21 / MCP input_required is an intermediate state, not output-schema completion

## ZECP Metadata and accountable run identity
- Date (UTC): 2026-11-21 logical observation (Asia/Shanghai); observed local task start during 2026-11-20 UTC
- Repository: `lostlight530/Axiom-0`
- Canonical task chain: `axiom/plasma/A1 → A2 → A3 → A4` Daily
- Producer: GPT-6 / GPT_NATIVE / HUMAN_REQUESTED / NOT_JULES_REPLAY
- Base main: `30bc90f030c77b5356a9d85d982684146584057d`
- Run identity: `Axiom-0/plasma/A1-A4/2026-11-21/GPT_NATIVE/30bc90f/mcp-intermediate-validation-01`
- Pipeline Status: `BLOCKED`
- Stage states: `A1_BOUNDED_SOURCE_ARCHAEOLOGY / A2_FORMAL_SCANNERS_NOT_EXECUTED / A3_BLOCKED_DEPENDENCY / A4_BLOCKED_DEPENDENCY`
- Owning daily contract: `RESEARCH/daily/README.md` blob `28f56cf9e3a30dbc262a6c9e8a21f6985c562c13`
- Owning automation contract: `AUTOMATION/CONTRACT.md` blob `29bc748f310da25962138da0b91466ffecd3ec9d`
- Formal KL scanner source: `scan_kl_divergence.py` blob `4da500e9039f62ba1af5c149ebb8b17ea7d97ca1` (last pinned source identity, current main scan execution NOT_RECONFIRMED)
- Formal consistency source: `scan_consistency.py` blob `357d2ea4fb02facfa1f568ad31c9536bd1fb4656` (last pinned source identity, current main scan execution NOT_RECONFIRMED)
- Canonical output: `RESEARCH/daily/2026-11-21-pipeline-manifest.md`
- 2026-W46 A5 already retained; 2026-W47 A5: NOT_DUE (Nov 16–22 still OPEN); November A6: NOT_DUE
- Historical Jules artifacts, SPEC/ADR, implementation and index remain unchanged

## A1 — Source archaeology and typed protocol-state hypothesis
- Primary upstream source: [modelcontextprotocol/typescript-sdk PR #3217](https://github.com/modelcontextprotocol/typescript-sdk/pull/3217), created `2026-11-20T12:56:55Z` (= 2026-11-20 20:56:55 Shanghai), OPEN/unmerged at inspection.
- Exact PR head: `cf2455bb582512366f8f446c6529f07f321c88ab`; upstream linked issue: https://github.com/modelcontextprotocol/typescript-sdk/issues/3216. The observed patch is a proposed implementation and test fixture, not a released SDK or Plasma mechanism.
- Pinned code: https://github.com/modelcontextprotocol/typescript-sdk/blob/cf2455bb582512366f8f446c6529f07f321c88ab/packages/client/src/client/client.ts
- Pinned test: https://github.com/modelcontextprotocol/typescript-sdk/blob/cf2455bb582512366f8f446c6529f07f321c88ab/packages/client/test/client/inputRequiredEngine.test.ts
- Source access: GitHub PR metadata, changed-file list and per-file implementation/test patches. The author reports `vitest run test/client/` passing except four tests requiring prebuilt dist/pnpm, and reports no full typecheck. These partial outcomes are UPSTREAM_AUTHOR_REPORTED and NOT_REPRODUCED.
- Mechanism: `Client.callTool()` in manual input-required mode can return a `resultType: input_required` intermediate result without `structuredContent`. A blanket `outputSchema` validation on that intermediate response would throw before the caller could supply further input.
- Proposed fix postpones final `outputSchema` checking for `input_required`, while retaining output validation on the subsequent `resultType: complete` response. This distinguishes *protocol progression state* from *completed typed output*.
- Author test fixture returns intermediate `input_required` with `inputRequests` and `requestState`, then a completed response with structured `{id: 7}`; code review establishes test intention only, not this task's execution.
- Evidence hypothesis `H-20261121-P01`: an executable validation pipeline should type-check result state before imposing terminal result invariants; an incomplete interaction must not be classified as completed success, malformed final output or a protocol-wide failure solely because terminal payload fields are not yet present.
- State model candidate: `REQUEST_SENT → INPUT_REQUIRED → INPUT_SUBMITTED → COMPLETE | ERROR | CANCELED | TIMEOUT`; only `COMPLETE` can satisfy the final output-schema contract. This is an analytical mapping, not an asserted formal MCP specification transcription.
- Counterexample A: early validator rejects valid intermediate `input_required` because `structuredContent` is absent (false failure); counterexample B: validator skips schema validation for both intermediate and terminal responses (false PASS); counterexample C: a pending request is treated as completed to advance a pipeline stage (false completion).
- Identifiers to retain if this mechanism is tested: SDK revision, tool definition schema digest, request ID, input-request state, user response, terminal result revision and validation mode. `tool_output_available` alone is not `tool_call_completed`.
- Axiom's formal P/Q KL input identity, distribution digests, numerical precision and units are `NOT_AVAILABLE`; actual KL: `NOT_COMPUTED`.
- Upstream patch does not authorize changes to Axiom's protocol SPEC, reference implementation, ADR or index, nor prove Axiom implements this MCP behavior.

## A2 — Formal KL and structural checker ledger
- Environment actually observed: isolated Linux container; `Python 3.13.5`; `Git 2.47.3`; current GitHub reads performed through connected repository API without obtaining a complete local worktree.
- Executed acquisition diagnostic: `git ls-remote https://github.com/lostlight530/Axiom-0.git refs/heads/main`
- Acquisition command exit code: `128`. Stdout: empty. Stderr: `fatal: unable to access 'https://github.com/lostlight530/Axiom-0.git/': Could not resolve host: github.com`.
- The network error is **not** a KL or structural scanner exit code and is not evidence that either scanner implementation fails.
- Formal KL intended command: `python3 scan_kl_divergence.py`; actual execution: `NOT_EXECUTED`; actual scanner stdout/stderr/exit: `NOT_AVAILABLE`; `KL_EVIDENCE = NOT_COMPUTED`, no scalar or P/Q digest.
- Formal structure intended command: `python3 scan_consistency.py`; actual execution: `NOT_EXECUTED`; actual scanner stdout/stderr/exit: `NOT_AVAILABLE`; `axiom_document_topology` JSON contract: `NOT_GENERATED`.
- The externally checked MCP change is not independent KL evidence, a formal structural scan, or sufficient to satisfy A2.

## A3 — Bounded formal execution
- A2 formal prerequisites do not pass; A3 is `BLOCKED_DEPENDENCY / NOT_EXECUTED`.
- Formal command, immutable fixture, execution counters, stdout/stderr/exit: `NOT_AVAILABLE`; success/failure counts: `NOT_COMPUTED`.
- No external manual fixture is executed as a stand-in for A3. The linked upstream regression test is not our bounded execution evidence.

## A4 — Topology and index alignment
- A3 dependency not met; A4 is `BLOCKED_DEPENDENCY / NOT_EXECUTED`.
- No current `axiom_document_topology` run, no proven index alignment, no SPEC/ADR/METHODOLOGY/reference implementation change and no fabricated topology PASS.

## EVIDENCE_DELTA and Counterevidence Gate
- NEW_EVIDENCE: pinned upstream MCP SDK diff distinguishes intermediate `input_required` from terminal output schema validation, with a targeted two-stage authored regression fixture.
- CORRECTED_INTERPRETATION: terminal shape validation applied to a legal intermediate protocol state can be a false failure; skipping all validation is not the correction.
- UNCHANGED_BOUNDARY: SOURCE_A1 != FORMAL_SCANNERS_A2 != BOUNDED_EXECUTION_A3 != INDEX_ALIGNMENT_A4; upstream PR != released package or local implementation.
- NEW_COUNTEREVIDENCE: absence of `structuredContent` in an intermediate response, absent validation in terminal response, and still-pending request treatment provide separate negative controls.
- UNKNOWN_RETAINED: final upstream PR result, independent SDK test, full typecheck, current Axiom scanner outcomes, KL input identity and actual topology.
- NEXT_RETEST_CONDITION: obtain immutable Axiom worktree; execute KL and structural commands with captured stdout/stderr/exit and `axiom_document_topology`; if formally allowed, execute gated A3/A4. Independently use pinned MCP SDK before/after clients to test input-required transition and malformed terminal payload.
- Counterevidence Gate: `PASS_FOR_BOUNDED_UPSTREAM_SOURCE_HYPOTHESIS / FAIL_FOR_FORMAL_PLASMA_PIPELINE_PROMOTION`.

## Delivery boundary
- One 2026-11-21 canonical Daily manifest, honest `BLOCKED` A2–A4. No duplicate weekly/monthly production, governance, independent maintenance, host-code mutation or Jules provenance rewrite.
- Source patch and authored regression INSPECTED, local formal scanners NOT_EXECUTED, no numerical KL value, no 100/100 claim and no Human Maintainer approval or merge asserted.
