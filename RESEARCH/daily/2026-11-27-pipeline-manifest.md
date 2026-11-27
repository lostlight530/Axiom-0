# Plasma Daily Pipeline — 2026-11-27 / typed correlation identity

## ZECP Metadata and accountable run identity
- Repository: lostlight530/Axiom-0; Daily, logical 2026-11-27 Asia/Shanghai.
- Canonical chain: axiom/plasma/A1 → A2 → A3 → A4.
- Producer: GPT-6.2 / GPT_NATIVE / HUMAN_REQUESTED / NOT_JULES_REPLAY.
- Base main: ec6cc7a9fabb0e67fd9acb03a7d6b44265b8d1df; run identity Axiom-0/plasma/A1-A4/2026-11-27/GPT_NATIVE/ec6cc7a9fabb/typed-correlation-01.
- Canonical output: RESEARCH/daily/2026-11-27-pipeline-manifest.md.
- Pipeline Status: **BLOCKED**. A1 SOURCE_REVIEW_AND_STANDALONE_CONTROL_EXECUTED; A2 FORMAL_SCANNERS_NOT_EXECUTED; A3/A4 BLOCKED_DEPENDENCY.
- Daily contract blob 28f56cf9e3a30dbc262a6c9e8a21f6985c562c13; AUTOMATION/CONTRACT.md blob 29bc748f310da25962138da0b91466ffecd3ec9d; prior manifest 4c2f526aa5fa299a46cb64ce1e906e62e2b16469. W47 A5 retained; W48 A5 and November A6 NOT_DUE. No same-day manifest/open PR at preflight.

## A1 — source archaeology
- https://github.com/modelcontextprotocol/python-sdk/pull/3924; created 2026-11-25T18:57:21Z (Nov26 Shanghai); CLOSED / UNMERGED; head 3f5ac4fcd34f6309fd7db3cea182d97f3f0f6d5c, base 77001c96f9507be0f4d009b83210a384a5e08bda. Observed Nov27 Shanghai.
- Exact patches inspected: src/mcp/server/mcpserver/context.py and tests/interaction/mcpserver/test_context.py. Proposal returns typed request ID or None instead of string conversion; author fixture covers integer 42, string req-1, notification None and absent context.
- No SDK test execution, accepted implementation or release claim. Null is tested as an internal context state, not asserted to be a valid JSON-RPC request ID. Prior finite-JSON diagnostic is separate.
- Hypothesis: dropping type tags in an evidence join can collapse distinct correlation values. This is a candidate evidence-index invariant, not proof of a Plasma defect.

## A1 diagnostic — standalone stdlib, NOT formal A2/A3
- Identity AXIOM-2026-11-27-STANDALONE-TYPED-KEY-01; Python 3.13.5, Linux; actual UTC 2026-11-27T05:07:37Z; command python axiom.py from isolated scratch directory; exit 0; stderr empty; script SHA256 bd4e630f81f09fcc1a619830cd3945d3cd6d1805e94f1ec1f573c31ec35a825c.
- Exact script (UTF-8 LF):
```python
import json
ids=[42,'42',None,'None']
wire=[json.dumps(x) for x in ids]
print('wire:',wire)
print('string_keys:',len(set(map(str,ids))))
print('typed_keys:',len({(type(x).__name__,x) for x in ids}))
assert len(set(wire))==4 and len(set(map(str,ids)))==2
assert [type(json.loads(w)) for w in wire]==[int,str,type(None),str]
```
- Actual stdout:
```text
wire: ['42', '"42"', 'null', '"None"']
string_keys: 2
typed_keys: 4
```
- Four fixture values; stringification produces two collisions across typed identities. Wire strings and typed keys discriminate these four values. This is a bounded Python JSON fixture; it does not establish globally canonical JSON, request uniqueness, protocol compliance or formal KL.

## A2 — formal scanner ledger
- Actual command git clone --depth 1 https://github.com/lostlight530/Axiom-0.git; exit 128; stdout empty; stderr: Cloning into 'Axiom-0'... / fatal: unable to access 'https://github.com/lostlight530/Axiom-0.git/': Could not resolve host: github.com.
- Exact GitHub API main/contract reads succeeded. Full worktree unavailable. scan_kl_divergence.py NOT_EXECUTED; KL NOT_COMPUTED; input/unit result NOT_OBSERVED. scan_consistency.py NOT_EXECUTED; axiom_document_topology NOT_OBSERVED. No scanner exit or stdout fabricated.
- Standalone typed-key fixture does not satisfy either formal scan.

## A3 — bounded execution
BLOCKED_DEPENDENCY / NOT_EXECUTED. No formal execution count.

## A4 — topology/index alignment
BLOCKED_DEPENDENCY / NOT_EXECUTED. No index, SPEC, ADR or code mutation.

## EVIDENCE_DELTA and Counterevidence Gate
- NEW_EVIDENCE: pinned proposed typed-ID patch and actual four-value correlation fixture.
- CORRECTED_INTERPRETATION: display string equality does not establish identity equality; missing internal context differs from a string sentinel.
- UNCHANGED_BOUNDARY: standalone Python != formal KL/structure validation != pipeline PASS.
- NEW_COUNTEREVIDENCE: 42 and "42", None and "None" collide under naive stringification; explicit typed values discriminate this fixture.
- UNKNOWN_RETAINED: actual repository correlation schema, SDK acceptance, scanner outputs, protocol-wide identity policy.
- NEXT_RETEST_CONDITION: pinned worktree and exact scanners; test valid typed request IDs, absent context, duplicates and provenance joins separately; proceed only after gate.

## Delivery boundary
One manifest only. Full checker/tests NOT_EXECUTED. Draft awaits Human Maintainer. Historical records unchanged.
