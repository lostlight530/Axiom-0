# Plasma Daily Pipeline — 2026-11-23 / seeded evaluation faults and per-run evidence isolation

## ZECP Metadata and accountable run identity
- Logical date: 2026-11-23, `Asia/Shanghai`; source inspected during this logical day
- Repository: `lostlight530/Axiom-0`
- Canonical task chain: `axiom/plasma/A1 → A2 → A3 → A4`, Daily
- Producer: GPT-6 / GPT_NATIVE / HUMAN_REQUESTED / NOT_JULES_REPLAY
- Base main SHA: `0d039a248ab44590806eeaa8c5c8b2f13494a75d`
- Run identity: `Axiom-0/plasma/A1-A4/2026-11-23/GPT_NATIVE/0d039a248/per-eval-run-fault-seed-01`
- Pipeline Status: **BLOCKED**
- Stage states: `A1_SOURCE_ARCHAEOLOGY_AND_INDEPENDENT_STANDALONE_STD_LIB_CONTROL / A2_FORMAL_SCANNERS_NOT_EXECUTED / A3_BLOCKED_DEPENDENCY / A4_BLOCKED_DEPENDENCY`
- Owning contracts: `RESEARCH/daily/README.md` and `AUTOMATION/CONTRACT.md` on this main
- Canonical output: `RESEARCH/daily/2026-11-23-pipeline-manifest.md`
- Preflight: 2026-11-22 Daily and W46 Weekly retained on current main; a distinct original W47 A5 Draft PR #552 is open and owns `RESEARCH/weekly/2026-W47-weekly-manifest.md`, not the Nov23 Daily. W48 has just started, W48 A5 NOT_DUE; November A6 NOT_DUE
- Historical Jules artifacts, code, SPEC, ADR, methodology, indexes, reference implementation and schedules: **UNCHANGED**

## A1 — Source archaeology and typed protocol-state hypothesis
- Original source identity: [google/adk-python PR #8307](https://github.com/google/adk-python/pull/8307), `fix(tools): derive seeded fault injection per eval case run`, created `2026-11-23T02:05:32Z` (Shanghai 10:05:32) and inspected as **OPEN DRAFT / UNMERGED** at pinned head `e07629e869ae0bbf3891982ff2e92b97070a3bed`, against source base `2b90353cd2f1ee0a8a52262a7843333b6f7d2c8d`.
- Patch author links [issue #8288](https://github.com/google/adk-python/issues/8288), and specifically states the branch **depends on PR #8041**, with a combined head diff that includes an upstream prior commit on per-session simulated state. This dependence is crucial: do not count the entire PR changed-files result as solely today's fault-seeding feature, and do not claim an isolated source patch merged.
- First-party code surfaces inspected via exact PR file patches: `src/google/adk/evaluation/local_eval_service.py`, `src/google/adk/tools/environment_simulation/environment_simulation_config.py`, `src/google/adk/tools/environment_simulation/environment_simulation_engine.py`, `src/google/adk/utils/_eval_run_context.py` and authored regression tests.
- Reported baseline failure mechanism: `InjectionConfig.random_seed` originally seeds a generator once when plugin/callback is instantiated; many cases and `num_runs` repetitions share the same stream. Per-case failure probability can therefore shift with other cases' draw count, case order and parallelism. `SAME_SEED != SAME_CASE_SEQUENCE` without run identity.
- Proposed patch: `LocalEvalService._perform_inference_single_eval_item` wraps each inference with `eval_run_context(app_name, eval_set_id, eval_case_id, repetition_index)`. Seed derivation hashes a JSON-encoded tuple of source seed, run identity, tool name and injection index using SHA-256, avoiding Python's randomized object-hash. An isolated run receives its own RNG state; the same ordered tool calls in the same case can receive the same injection sequence even when other cases are reordered.
- The authored `EvalRunContext` uses instance identity and an in-process `ContextVar`, while its fields create deterministic seed material; the context is not a durable cross-service execution receipt. Outside eval mode the original shared generator behavior is explicitly preserved. If an agent's tool trajectory changes within a case, it may still consume a different number of draws.
- Hypothesis `H-20261123-P01`: a fault-injection evaluation's reproducibility claim must be scoped to an immutable `(app, eval_set, case, repetition, tool, injection_index, ordered_matching_calls, source_revision)` identity, not only a top-level random seed or aggregate PASS rate.
- Candidate state distinction: `SOURCE_SEED_SET → RUN_CONTEXT_IDENTIFIED → TOOL_MATCH_SEQUENCE_FIXED → INJECTION_DRAW_RECEIPT → EVAL_RESULT_ATTRIBUTED`. No Plasma KL parameter or protocol graph state is populated by an upstream SDK source change.
- Upstream author tests, issue reproduction, PR merged status, runner integration and effect measurements are **NOT_INDEPENDENTLY_VERIFIED** in this worktree.

## A1 diagnostic experiment — standalone stdlib, NOT formal Plasma A2/A3
- Separate identity: `Axiom-0/diagnostic/2026-11-23/standalone-stdlib-prng-order-01`. The following is an **executed minimal model**, not Google ADK, the Plasma reference implementation, a KL scanner, a production fault or a vendor test.
- Environment: isolated Linux, Python `3.13.5`, standard-library `random, hashlib, json, platform`; deterministic base seed `17`. Exact corrected script SHA-256: `d0225a62c13fef0ee91a842ef53af8b0364d9b604c8b49ed80b826975404651f`. Local command: `python3 /tmp/fivecore_w48_seed_probe.py` (path local to producer; script reproduced below).
- Correction trail: first scratch diagnostic script SHA-256 `9d21f93ce4e9259d340de9b830601fa2325eca6831bb8a6b4a6f05f6d6d10a78` mistakenly compared two freshly initialized PRNG **first** draws and printed `same_case_changed_draw_position=false`. This was a **bad negative control**, not a measured lack of within-run sensitivity. The same session corrected it to compare consecutive draws of **one** generator and reran; only the corrected run is used for this diagnostic conclusion.
- Minimal experiment source (stdlib only, no repo runtime):
```python
import hashlib, json, platform, random
BASE=17
CASES=('case-alpha','case-beta')
def shared(order):
    r=random.Random(BASE)
    return {name:r.random() for name in order}
def per_run(order):
    out={}
    for name in order:
        key=json.dumps([BASE,'app','evalset',name,0,'mock_tool',0],separators=(',',':'))
        seed=int.from_bytes(hashlib.sha256(key.encode('utf-8')).digest(), 'big')
        out[name]=random.Random(seed).random()
    return out
ab=shared(CASES)
ba=shared(tuple(reversed(CASES)))
fb=per_run(CASES)
rb=per_run(tuple(reversed(CASES)))
print(json.dumps({'experiment':'W48-axiom-standalone-stdlib-prng-order-01',
 'python':platform.python_version(),'seed':BASE,
 'shared_AB':ab,'shared_BA':ba,
 'shared_order_changes_case':ab['case-alpha']!=ba['case-alpha'],
 'case_scoped_AB':fb,'case_scoped_BA':rb,
 'case_scoped_order_invariant':fb==rb,
 'same_case_changed_draw_position':(lambda r: r.random()!=r.random())(random.Random(BASE))},
 sort_keys=True))
```
- Corrected run `exit code=0`; stdout captured in full, stderr empty:
```json
{"case_scoped_AB": {"case-alpha": 0.061247643334189084, "case-beta": 0.8933720096806157}, "case_scoped_BA": {"case-alpha": 0.061247643334189084, "case-beta": 0.8933720096806157}, "case_scoped_order_invariant": true, "experiment": "W48-axiom-standalone-stdlib-prng-order-01", "python": "3.13.5", "same_case_changed_draw_position": true, "seed": 17, "shared_AB": {"case-alpha": 0.5219839097124932, "case-beta": 0.8066907771186791}, "shared_BA": {"case-alpha": 0.8066907771186791, "case-beta": 0.5219839097124932}, "shared_order_changes_case": true}
```
- Observation: for the **toy generator**, case-alpha changes from `0.5219839097124932` to `0.8066907771186791` when shared-generator draw order is reversed. Per-case-derived seed yields alpha `0.061247643334189084` in both orders. A second draw in the same case differs from its first draw, demonstrating that per-case seeding alone does not freeze internal call trajectory.
- Claim boundary: this is an independent mechanism-shaped *counterexample* to treating shared-seed run order as irrelevant. It is **not** a reproduction of ADK's plugin, its ContextVar propagation, its exact probability calibration, parallel task scheduling or its correction in all environments.
- Reproduction validation: script source and exact stdout/exit listed above, SHA recorded; however this code was not checked in as a reusable test and is not a retained formal Plasma executable receipt. Future reproduction must record a new execution environment and script digest.

## A2 — Formal KL and structural scanner ledger
- Environment available: Python `3.13.5`; remote GitHub source metadata through connected GitHub integration; no complete Axiom checkout.
- Actually attempted command: `git ls-remote https://github.com/lostlight530/Axiom-0.git refs/heads/main`.
- Acquisition exit: `128`, stdout empty; stderr `fatal: unable to access 'https://github.com/lostlight530/Axiom-0.git/': Could not resolve host: github.com`.
- **Worktree acquisition failed, not the formal KL or structure scanner**. No native `scan_kl_divergence.py` nor `scan_consistency.py` command ran on this revision. Intended command identities: `python3 scan_kl_divergence.py`; `python3 scan_consistency.py`.
- Scanner revision/fixture P/Q distributions/digests: `NOT_AVAILABLE`. Formal KL value and units: `NOT_COMPUTED`. Formal structure JSON, exit code, stdout/stderr: `NOT_EXECUTED / NOT_EMITTED`, not a fabricated success or negative scientific result.
- The stdlib PRNG experiment has its own execution identity; **its exit 0 is not an A2 KL or topology PASS** and has no authority to unblock downstream stages.

## A3 — Bounded execution
- Formal A2 dependency is unmet. `A3=BLOCKED_DEPENDENCY / NOT_EXECUTED`.
- No pinned reference-runner revision, actual 100-run distribution, execution log, reference output/effect identity, retry/termination coverage, confidence intervals or completed-attempt count exists for this date.
- The minimal stdlib seed probe does not have the A3 harness/fixture identity and must not be counted as a formal A3 sample.

## A4 — Topology / index alignment
- `A4=BLOCKED_DEPENDENCY / NOT_EXECUTED` due A2/A3. No topology scanner executed, no index alignment performed, no emitted graph revision or computed drift.
- An upstream SDK evaluation patch is not an Axiom SPEC amendment or accepted architecture decision. W47 A5 Draft and November A6 remain distinct tasks.

## EVIDENCE_DELTA and Counterevidence Gate
- **NEW_EVIDENCE:** exact unmerged PR #8307 source code and dependency ancestry plus a separately reproducible, executed Python stdlib counterexample of shared-seed draw-order dependence.
- **CORRECTED_INTERPRETATION:** same global seed does not imply per-eval-case deterministic outcomes under a shared RNG; case-scoped seed does not guarantee trajectory invariance; original scratch diagnostic's bad negative control was corrected before scientific interpretation.
- **UNCHANGED_BOUNDARY:** `UPSTREAM_PATCH != A1_VERSUS_A2_FORMAL_SCANNER`; `STANDALONE_STD_LIB_TEST != PLASMA_REFERENCE_IMPLEMENTATION`; `A2_BLOCKED => A3/A4_BLOCKED`.
- **NEW_COUNTEREVIDENCE:** reversing order of two shared-generator draws changes the result attached to each case; changing number of within-case draws may still change outputs even after case-scoped seeding. Dependent PR #8041 source ancestry blocks treating the aggregate diff as one independent fix.
- **UNKNOWN_RETAINED:** actual ADK case-level distribution under parallelism and replay, release/merge status, native KL/structure outputs, A3 execution, A4 topology, and Axiom host implementation applicability.
- **NEXT_RETEST_CONDITION:** complete main-pinned Axiom checkout; run both formal A2 scanners with immutable numerical/structural fixtures and stdout/stderr/exit, then proceed A3/A4 only if allowed. Separately, pin ADK before/after dependency commits, execute case permutations and parallelism controls, capture per-case injection draws rather than aggregate PASS.
- **Counterevidence Gate:** `BOUNDED_SOURCE_HYPOTHESIS_AND_STANDALONE_MECHANISM_CONFIRMED / FORMAL_PIPELINE_PROMOTION_DENIED`.

## Delivery boundary
- One original dated Plasma Daily manifest only, on a separate Draft PR. Historical Jules, prior Daily/Weekly, code, SPEC/ADR and governance untouched.
- Documented standalone experiment exit 0 is real; formal pipeline status remains `BLOCKED` and checker/host tests `NOT_EXECUTED`. GitHub PR merge, CI and Human Maintainer approval pending.
