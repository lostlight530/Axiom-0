# Plasma Daily Pipeline — 2026-11-28 / termination projection

## ZECP Metadata and accountable run identity
- Repository: lostlight530/Axiom-0; Daily, logical 2026-11-28 Asia/Shanghai.
- Canonical chain: axiom/plasma/A1 → A2 → A3 → A4.
- Producer: GPT-6.2 / GPT_NATIVE / HUMAN_REQUESTED / NOT_JULES_REPLAY.
- Base main: d0a7e4deaf1b7b1576047413d4a3f45e34d1d739; run identity Axiom-0/plasma/A1-A4/2026-11-28/GPT_NATIVE/d0a7e4deaf1b/termination-projection-01.
- Canonical output: RESEARCH/daily/2026-11-28-pipeline-manifest.md.
- Pipeline Status: **BLOCKED**. A1 SOURCE_REVIEW_AND_STANDALONE_CONTROL_EXECUTED; A2 FORMAL_SCANNERS_NOT_EXECUTED; A3/A4 BLOCKED_DEPENDENCY.
- Daily contract blob 28f56cf9e3a30dbc262a6c9e8a21f6985c562c13; AUTOMATION/CONTRACT.md blob 29bc748f310da25962138da0b91466ffecd3ec9d; prior manifest 10e3fb9b4b06ad4b2d4dcec831beb36fdbf64d6a. W47 retained; W48 and November NOT_DUE; no same-day manifest/open PR at initial preflight.

## A1 — source archaeology
- https://github.com/google/adk-python/pull/8416, created 2026-11-27T19:09:47Z (Nov28 Shanghai); OPEN / UNMERGED; head ab8a94dcdff7eb316c34d8042aff2f51528fbe85, base 03725e8c67ca27b2c07569797a0c18e867e0b217. Observed Nov28 Shanghai via GitHub API. Selected generator, enum, inference/eval result and test hunks inspected.
- Proposed termination reason distinguishes stop_signal, turn_limit, no_message and absent reason. A visible test fixture pairs InferenceStatus.SUCCESS and TURN_LIMIT; therefore coarse status is not a complete provenance coordinate. Same source lineage as Horizon lead, not another independent external source.
- Hypothesis: a projection onto a coarse success label can erase distinctions needed for evidence aggregation. This is an input-schema hypothesis, not an observed Plasma scanner defect. Prior Nov27 typed-correlation control concerns type erasure, not termination cause.

## A1 standalone diagnostic — not formal A2/A3
- Identity AXIOM-2026-11-28-STANDALONE-TERMINATION-PROJECTION-01; Python 3.13.5, Linux; UTC 2026-11-28T00:45:59Z environment receipt preceding command; command python axiom.py in isolated scratch directory; exit 0; stderr empty; script SHA256 5f593d18b545f5f0646e9a3cc3777142482f7078c2b07e6b37f592b2af927324.
- Exact UTF-8 LF script:
```python
from collections import Counter
runs=[('success','stop_signal'),('success','turn_limit'),('success',None)]
coarse=Counter(status for status,reason in runs)
typed=Counter((status,reason) for status,reason in runs)
print('coarse bins:',len(coarse),'typed bins:',len(typed),'runs:',len(runs))
print('typed:',list(typed.items()))
assert len(coarse)==1 and len(typed)==3
```
- Actual stdout:
```text
coarse bins: 1 typed bins: 3 runs: 3
typed: [(('success', 'stop_signal'), 1), (('success', 'turn_limit'), 1), (('success', None), 1)]
```
- Three synthetic runs, not actual ADK runs. Distinct reason categories collapse to one coarse bin. No distribution estimate, formal KL value or unit inferred. Null may represent several unobserved causes; merely retaining it does not recover them.

## A2 — formal scanner ledger
- Actual command: git clone --depth 1 https://github.com/lostlight530/Axiom-0.git; exit 128; stdout empty; stderr:
```text
Cloning into 'Axiom-0'...
fatal: unable to access 'https://github.com/lostlight530/Axiom-0.git/': Could not resolve host: github.com
```
- Pinned API tree and contract reads succeeded. Full worktree not acquired. scan_kl_divergence.py NOT_EXECUTED; KL NOT_COMPUTED; input/unit NOT_OBSERVED. scan_consistency.py NOT_EXECUTED; axiom_document_topology NOT_OBSERVED. No fabricated scanner exit or output. The standalone control does not satisfy either scan.

## A3 — bounded execution
BLOCKED_DEPENDENCY / NOT_EXECUTED. No formal execution count.

## A4 — topology/index alignment
BLOCKED_DEPENDENCY / NOT_EXECUTED. No index, SPEC, ADR or code mutation.

## EVIDENCE_DELTA and Counterevidence Gate
- NEW_EVIDENCE: pinned proposed source and actual three-run synthetic projection control.
- CORRECTED_INTERPRETATION: coarse success-bin equality cannot establish termination-reason equality or completion.
- UNCHANGED_BOUNDARY: standalone counterexample != formal KL/structure validation != pipeline PASS.
- NEW_COUNTEREVIDENCE: one coarse bin versus three reason-tagged bins; absent reason still ambiguous.
- UNKNOWN_RETAINED: actual scanner input schema, source acceptance, population distribution, formal scan and topology outcomes.
- NEXT_RETEST_CONDITION: acquire pinned complete worktree; run both formal scans with exact inputs and units; preserve termination attribution where relevant without inventing causes; gate A3/A4.

## Delivery boundary
One manifest only. Full checker/tests NOT_EXECUTED. Draft awaits Human Maintainer. Historical records unchanged.
