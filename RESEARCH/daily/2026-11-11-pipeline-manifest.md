# Plasma Daily Pipeline — 2026-11-11 / bounded native recovery with actual GitHub-hosted receipts

## ZECP metadata and run identity
- Repository: `lostlight530/Axiom-0`.
- Canonical logical date: `2026-11-11` Asia/Shanghai.
- Task chain: native `axiom/plasma/A1 -> A2 -> A3 -> A4`; this is NOT independent GPT monthly maintenance A1/A2.
- Producer: `GPT-6 / GPT_NATIVE / HUMAN_AUTHORIZED_SUPPLEMENT / NOT_JULES_REPLAY`.
- Source baseline before this recovery: merged `main` `575f7bf4e4dfa66f44bb3c8723d9d933c6b58b7e`.
- Native execution carrier branch: `native/2026-11-11-plasma-recovery`; temporary workflow commit `1707026a51561b9d0830d8655c9e196958264dfd`.
- Actual run: [GitHub Actions 43021692273](https://github.com/lostlight530/Axiom-0/actions/runs/43021692273), job `plasma-native` `130526171064`, event `push`, `completed/success`.
- Runner execution window observed: 2026-11-11 UTC, run created 12:35:41Z; job step logs 12:35:46–12:35:56Z; workflow last updated 12:35:59Z.
- Source checkout inside runner: exact pinned `575f7bf4e4dfa66f44bb3c8723d9d933c6b58b7e`, intentionally not the workflow-carrier commit.
- Run identity: `Axiom-0/plasma/A1-A4/2026-11-11/GPT_NATIVE/575f7bf4e4dfa66f44bb3c8723d9d933c6b58b7e/actions-43021692273`.
- Original scheduled Jules/native task-time execution: `UNKNOWN`; this is a new explicit same-logical-day authorized recovery, not a reconstruction of a past scheduler attempt.
- Independent maintenance original A1 #495 and A2 #496 already existed before this run. Their previous source-cut statements are historical, not a runtime receipt.
- Write scope: this canonical `RESEARCH/daily/2026-11-11-pipeline-manifest.md` plus minimally synchronized existing `INDEX.md` and `PATCH_INDEX.md` links.
- Native pipeline conclusion: `A1_SOURCE_REVIEW_COMPLETED / A2_BOTH_FORMAL_GATES_PASS / A3_FIXED_REFERENCE_100_OF_100_PASS / UNIT_SUITE_34_PASS / A4_PINNED_INDEX_PREFLIGHT_PASS`.
- Overall evidence classification: `BOUNDED_PASS_ON_EXACT_GITHUB_RUN`, never general scientific/host conformance.

## A1 — first-party source archaeology and precise version boundary
- Original source: [google/adk-python@e5ffe9c9daed15b952e83d5d778fe89c251f1d48](https://github.com/google/adk-python/commit/e5ffe9c9daed15b952e83d5d778fe89c251f1d48).
- Primary commit authoring timestamp: `2026-11-11T08:18:48Z`; this is a Git commit time, NOT an SDK tagged-release or installation date.
- Primary patch title: `fix: preserve required flag in RestApiTool serialization`, associated PR `google/adk-python#8067`.
- Source checked from the exact first-party GitHub commit and three changed file patches; this is direct source inspection, not an upstream SDK test run.
- Implementation file: `src/google/adk/tools/openapi_tool/common/common.py`.
- Actual committed delta: add `'required': self.required` to custom `ApiParameter` model serialization, preserving the stored boolean across an intermediate representation.
- Authored test file `tests/unittests/tools/openapi_tool/common/test_common.py` adds coverage that the serialized stored field keys match model fields except derived `type_value` and `type_hint`.
- Authored test file `tests/unittests/tools/openapi_tool/openapi_spec_parser/test_rest_api_tool.py` adds a three-parameter round-trip example.
- That example expects `id` (path) and `tenant` (query) to remain mandatory and `limit` (query) optional after `RestApiTool.from_parsed_operation_str(...)`.
- Technical failure family: a required argument may be present in an original model and lost by a custom serializer, weakening or altering the reconstructed tool schema.
- Mechanism distinction: parameter-schema completeness does not establish tool authorization or effect-time permission; `required` is input shape, not `ALLOW/DENY`.
- Pre-patch counterexample: serialization omits a requiredness field despite the in-memory object retaining it; the round trip can fail to preserve the input contract.
- Positive-control requirement: compare the reconstructed `required` set against `id, tenant` and the optional `limit`, rather than checking only a nominal serializer success.
- Applicability to Axiom: `CANDIDATE_TOOL_SCHEMA_REPRESENTATION_IDENTITY`; Axiom reference scanner and NEXUS core are not proven to use this Google ADK code path.
- The same source commit appears in Welcome Horizon H1/H2 on November 11: ONE Google publisher lineage; cross-repository reuse creates no independent source.
- Google upstream tests: `NOT_EXECUTED` by this Plasma job; only their source code was inspected.
- Tagged ADK release, installed version, downstream real API calls, live tool invocation validation and provider adoption: `UNKNOWN / NOT_EXECUTED`.
- Research evidence is specific to the implementation diff and author's regression-test intention, NOT a locally replicated external SDK defect.

## A2 — independent algebraic KL and repository topology gates
- Both commands were actually executed on the same pinned checkout, sequentially, before A3; direct steps and output are in the immutable job log.
- Gate 1 command: `python3 scan_kl_divergence.py`; process step outcome `success`, exit zero.
- Gate 1 output: `KL contract: passed`; structured record `KL_EVIDENCE` with `contract=kl_divergence`, `status=passed`, `failures=[]`.
- The identity input `P=[0.1,0.2,0.7]`, `Q=[0.1,0.2,0.7]`: actual `D_KL=0.0` nats, expected 0.0, tolerance satisfied.
- The normalized identity input `P=[1,2,7]`, `Q=[0.1,0.2,0.7]`: actual `D_KL=0.0` nats, expected 0.0, tolerance satisfied.
- Support-mismatch fixture returns `infinity`; this was correctly distinguished from the two zero-divergence fixtures.
- Gate 1 conclusion: `PASS_FOR_PINNED_KL_FIXTURES`, NOT universal KL equality, model guarantee, independent external implementation proof or zero-entropy theorem.
- Gate 2 command: `python3 scan_consistency.py`; step `success`, exit zero.
- Gate 2 output `AXIOM_CONSISTENCY_EVIDENCE` with `contract=axiom_document_topology`, `contract_version=2026-08-28`, `status=passed`, `failures=[]`.
- The checked structural denominator: `adr_count=16`, `methodology_count=15`; checked index owners `ADR/INDEX.md` and `METHODOLOGY/INDEX.md`.
- This scanner checks document topology/required sections and index mapping, NOT external scientific truth or Axiom architecture deployment behavior.
- Gate separation: KL scan and structural consistency are two real executable checks on the same source checkout; they are NOT two independent external publishers.
- Previous days' local DNS checkout failures are not overwritten by this later separate GitHub-hosted runner.
- This run did NOT execute the Google ADK upstream tests or change Axiom's source/implementation.

## A3 — 100 actual fixed-reference subprocess executions
- A3 began only after both exact same-job A2 gates had green steps.
- Executed program: `CODE/nexus_core.py` via `subprocess.run([sys.executable, "CODE/nexus_core.py"], capture_output=True, text=True, timeout=25)` in a real 100-iteration loop.
- Exact executable source SHA-256: `54a405488319933a8293a93646bf967dde6942968204bfa8e611ba808b793457`.
- Job output `A3_EVIDENCE`: `executions=100`, `pass=100`, `fail=0`, `failed_cases=[]`, wall duration `7.335 seconds`.
- Every subprocess return code was evaluated; non-zero would have produced a named failed iteration and step failure.
- `unique_output_digests=100` is due to observed output differences including timestamps/run IDs, NOT evidence of 100 distinct input scenarios or independent behaviors.
- Fixed program input is the default `{"request":"authorized_request_v2"}`; other request identities or adversarial inputs were not tried.
- One representative stdout excerpt is present in job logs; full per-invocation stdout/stderr was not preserved as a durable 100-case dataset.
- Native source unit tests command: `python3 -m unittest discover -s tests -p 'test*.py' -v`.
- Observed result: `Ran 34 tests in 0.018s`, `OK`, step `success`.
- A3 scope: `BOUNDED_PASS_FOR_THIS_PINNED_IMPLEMENTATION_AND_REFERENCE_INPUT`; no production agent peer, network service side effect, formal A2A conformance or generalized deterministic claim.

## A4 — real read-only index and tree preflight
- A4 ran after A2, A3, and the 34-test native suite succeeded in that same job.
- Actual checked files and decoded character counts: `INDEX.md=21819`, `PATCH_INDEX.md=20498`, `ADR/INDEX.md=7334`, `METHODOLOGY/INDEX.md=5508`.
- All four required files were present; `git status --porcelain` was empty at the pinned checked-out baseline.
- Result: `A4_READ_ONLY_INDEX_PREFLIGHT_PASS` on `575f7bf4e4dfa66f44bb3c8723d9d933c6b58b7e`.
- This check predates the addition of the present November 11 report and the new index pointers, so it is NOT a test of final branch navigation integrity.
- Final report/path/index links must be inspected separately on the candidate branch and after merge; do not upgrade A4 source preflight to a full post-edit topology proof.
- The temporary workflow carrier is not permanent infrastructure and must be deleted from the delivered branch after the run logs are secured.

## Evidence delta, falsifiers and future retest
- `NEW_EVIDENCE`: November 11 first-party ADK required-flag implementation patch, actually executed fixed KL/topology scans, 100 subprocess processes, 34 unit tests and read-only index checks.
- `CORRECTED_INTERPRETATION`: the native November 11 Daily was absent from the earlier independent A2 source cut, but a separate authorized native run now provides new same-logical-date source and bounded execution receipts.
- `UNCHANGED_BOUNDARY`: prior A2 #496 was PARTIAL against its own older base; publishing this subsequent canonical Native artifact does not retroactively change its original diff or what it could have observed.
- `NEW_COUNTEREVIDENCE`: a serializer source fix and one fixture success do not show real deployed tool input validation; similarly 100 different timestamped process outputs do not create 100 independent workload cases.
- `UNKNOWN_RETAINED`: original scheduler attempts, cross-environment reproduction, arbitrary KL distributions, ADK test execution, exact downstream release, host applicability, long-running system correctness.
- `NEXT_RETEST_CONDITION`: first-party ADK parent/patched comparison with true executable roundtrip, varied KL inputs, alternate reference workloads, full A3 per-case digests and branch-head/final-merge document validator.
- Closed W45 and open W46 are period boundaries; November A6 natural-month final remains `NOT_DUE`.
- No NEXUS/Host, CODE, SPECIFICATION, ADR, METHODOLOGY, machine automation, external service or previous native historical output was changed.
- A separate dated forward A2 interpretation can reference this subsequently merged native record without overwriting its old as-of absence.
