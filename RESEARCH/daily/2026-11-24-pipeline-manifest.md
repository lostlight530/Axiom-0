# Plasma Daily Pipeline — 2026-11-24 / typed replay argument equivalence

## ZECP Metadata and accountable run identity
- Repository: lostlight530/Axiom-0; Daily, logical 2026-11-24 Asia/Shanghai; actual source observation on this day.
- Canonical chain: axiom/plasma/A1 → axiom/plasma/A2 → axiom/plasma/A3 → axiom/plasma/A4.
- Producer: GPT-6.2 / GPT_NATIVE / HUMAN_REQUESTED / NOT_JULES_REPLAY.
- Base main: c7ed80a8ef2ecd30c60c4e8acfffb5bc8043fd0d; Run identity: Axiom-0/plasma/A1-A4/2026-11-24/GPT_NATIVE/c7ed80a8ef2e/typed-replay-equivalence-01.
- Canonical output: RESEARCH/daily/2026-11-24-pipeline-manifest.md.
- Pipeline Status: **BLOCKED**.
- Stage states: A1 SOURCE_REVIEW_AND_STANDALONE_CONTROL_EXECUTED; A2 FORMAL_SCANNERS_NOT_EXECUTED; A3/A4 BLOCKED_DEPENDENCY.
- Owning RESEARCH/daily/README.md blob 28f56cf9e3a30dbc262a6c9e8a21f6985c562c13; AUTOMATION/CONTRACT.md blob 29bc748f310da25962138da0b91466ffecd3ec9d.
- Prior Nov23 manifest blob 3ca8f406851a8922e85d4c709705059ab61ca663 retains blocked formal pipeline and explicit forward digest correction; W47 A5 blob 3307413a9fff94a65125fb33eaf62aade62302e8 retains seven blocked daily manifests. No historical execution credit carried forward. W48 A5 and November A6 NOT_DUE.

## A1 — Source archaeology and typed protocol-state hypothesis
- Source: https://github.com/google/adk-python/pull/8323, opened 2026-11-24T09:08:01Z (17:08:01 Asia/Shanghai); OPEN / UNMERGED at head 42b1ef1028aa94494c8897af66a2566d3b2f4869, base 54fc37e5fab77f2cfc02fd02f8e6019d288d3920.
- Inspected src/google/adk/cli/plugins/replay_plugin.py and tests/unittests/cli/plugins/test_replay_plugin.py exact file patches. Direct inequality becomes `(recorded_call.args or {}) != (tool_args or {})`. Positive test accepts omitted args and empty runtime args; negative test rejects nonempty recorded map versus empty runtime map.
- Positive fixture still asserts the underlying tool's live call occurred. A substituted recorded response is not proof that the tool had no live effect.
- Author reports 20 tests passed; no independent SDK execution. Claim conditional on argument type and canonicalization domain.
- Hypothesis: over None or mapping, omission/empty map form one equivalence class without collapsing unequal nonempty maps. Falsey nonmapping values require ingress type validation.

## A1 diagnostic experiment — standalone stdlib, NOT formal Plasma A2/A3
- Identity: AXIOM-2026-11-24-STANDALONE-TYPED-REPLAY-01. Actual sandbox Python 3.13.5, standard library only; no repository checkout, no SDK, no scanner.
- Command: `python /tmp/fivecore_20261124_replay.py`; exit 0; stderr empty; script SHA256 f639cda7817d679c80fee848d230dcd4253e845ba04087db908004a90fd3f5f7.
- Exact script used (UTF-8, LF, final newline):
```python
import itertools, json
vals=[None,{}, {'sides':6},{'sides':7}]
for a,b in itertools.product(vals, repeat=2):
    old=a==b; new=(a or {})==(b or {})
    expected=(a==b or (a is None and b=={}) or (b is None and a=={}))
    assert new==expected,(a,b)
    if old!=new: print(json.dumps({'recorded':a,'runtime':b,'old':old,'normalized':new},sort_keys=True))
print('typed pairs=16; changed=2; nonempty mismatch preserved')
print('out-of-domain negative control:', (False or {})==({} or {}))
```
- Actual stdout:
```text
{"normalized": true, "old": false, "recorded": null, "runtime": {}}
{"normalized": true, "old": false, "recorded": {}, "runtime": null}
typed pairs=16; changed=2; nonempty mismatch preserved
out-of-domain negative control: True
```
- Sixteen finite typed pairs satisfy the expected predicate; two equivalence changes. False also normalizes to empty outside intended domain. Bounded model, not imported SDK behavior or KL metric.

## A2 — Formal KL and structural scanner ledger
Actual git ls-remote https://github.com/lostlight530/Axiom-0.git refs/heads/main exited 128, stdout empty, stderr fatal: unable to access ... Could not resolve host: github.com. GitHub API exact source reads available; complete checkout unavailable.

| Required scanner | Pinned source blob | Execution | Result |
| --- | --- | --- | --- |
| scan_kl_divergence.py | 4da500e9039f62ba1af5c149ebb8b17ea7d97ca1 | NOT_EXECUTED | KL NOT_COMPUTED; input and unit not established |
| scan_consistency.py | 357d2ea4fb02facfa1f568ad31c9536bd1fb4656 | NOT_EXECUTED | structural JSON axiom_document_topology NOT_OBSERVED |

- No scanner stdout/stderr/exit code exists for this attempt; exit 128 belongs to Git acquisition, not scanner.
- Exact authorized runner and scanner inputs must be recovered. No fabricated metric or PASS.

## A3 — Bounded execution
BLOCKED_DEPENDENCY / NOT_EXECUTED. No formal attempts, successes or failure counts inferred from the 16 standalone pairs.

## A4 — Topology / index alignment
BLOCKED_DEPENDENCY / NOT_EXECUTED. No INDEX/PATCH_INDEX/SPEC/ADR/code change; no formal topology receipt.

## EVIDENCE_DELTA and Counterevidence Gate
- NEW_EVIDENCE: independent finite control separates omitted/empty equivalence from nonempty mismatch.
- CORRECTED_INTERPRETATION: replay match and substituted response do not imply effect absence.
- UNCHANGED_BOUNDARY: standalone Python != formal A2/A3; KL != structural result != execution.
- NEW_COUNTEREVIDENCE: falsey nonmapping collapses under or-empty; typed ingress prerequisite. Live call in author fixture defeats effect-free replay inference.
- UNKNOWN_RETAINED: production SDK behavior, formal KL, topology, external effects and full verification.
- NEXT_RETEST_CONDITION: exact revision worktree, declared scanner inputs, both exit receipts and topology JSON; then A3/A4 only if dependency passes. Separate SDK typed and malformed controls.

## Delivery boundary
One canonical Daily manifest only; no historical rewrite, code, scanner, index, ADR, SPEC, schedule or maintenance change. Remote source review performed; full repo checker/tests NOT_EXECUTED. Draft awaits maintainer review.
