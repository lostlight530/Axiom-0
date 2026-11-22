# Plasma Daily Pipeline — 2026-11-22 / redirect URI nullability and registration acceptance boundary

## ZECP Metadata and accountable run identity
- Logical date: 2026-11-22, `Asia/Shanghai`; observation cutoff: source inspected during this logical day
- Repository: `lostlight530/Axiom-0`
- Canonical task chain: `axiom/plasma/A1 → A2 → A3 → A4`, Daily
- Producer: GPT-6 / GPT_NATIVE / HUMAN_REQUESTED / NOT_JULES_REPLAY
- Base main SHA: `78bd2e84ef67e03d56e472504d9af982e29f084b`
- Run identity: `Axiom-0/plasma/A1-A4/2026-11-22/GPT_NATIVE/78bd2e8/dcr-redirect-null-01`
- Pipeline Status: **BLOCKED**
- Stage states: `A1_BOUNDED_SOURCE_ARCHAEOLOGY / A2_FORMAL_SCANNERS_NOT_EXECUTED / A3_BLOCKED_DEPENDENCY / A4_BLOCKED_DEPENDENCY`
- Owning contracts: `RESEARCH/daily/README.md` blob `28f56cf9e3a30dbc262a6c9e8a21f6985c562c13`; `AUTOMATION/CONTRACT.md` blob `29bc748f310da25962138da0b91466ffecd3ec9d`
- Current structural scanner sources to run on a complete checkout: `scan_kl_divergence.py`; `scan_consistency.py`; no scanner PASS is asserted
- Canonical output: `RESEARCH/daily/2026-11-22-pipeline-manifest.md`
- Preflight: the 2026-11-21 Daily and closed `2026-W46` A5 were already present on main; no open repo PR or matching active 2026-11-22 branch was found; `2026-W47` A5 and November A6 are `NOT_DUE`
- Historical Jules artifacts, SPEC, ADR, Reference Implementation and index: **UNCHANGED**

## A1 — Source archaeology and typed protocol-state hypothesis
- External report: [modelcontextprotocol/python-sdk issue #3885](https://github.com/modelcontextprotocol/python-sdk/issues/3885), created 2026-11-21T05:35:30Z, OPEN at inspection; updated 2026-11-22T06:33:16Z. The report is a user-submitted, AI-assisted issue, not a maintainer-confirmed exploit, merged patch, or release.
- Reporter's pinned tested SDK revision: `77001c96`, advertised as `2.3.1.dev20+77001c96` on Python 3.14.8/macOS; this environment did **not** execute that SDK.
- Independently inspected source at reported revision: `src/mcp/shared/auth.py` blob `881379d381e30d834a66355f634fb0e5bbda4b4b`; `src/mcp/server/auth/handlers/register.py` blob `621a0f37d69b651dced676c7d15dd22a9acb13c5`.
- The typed model declares `redirect_uris: list[AnyUrl] | None = Field(..., min_length=1)`. The handler validates the request with `OAuthClientMetadata.model_validate_json(body)`, checks that `authorization_code` is in grant types and `code` is in response types, and (in the inspected excerpt) lacks a conditional requiring nonempty `redirect_uris` for that flow before constructing the registration response.
- Reporter claims the ASGI /register test returned `400` for absent and empty URIs but `201 Created` plus persisted client for JSON `null`. This exact HTTP outcome is **UPSTREAM_REPORTER_REPORTED / NOT_INDEPENDENTLY_REPRODUCED**. The code inspection supports a *candidate* server-side cross-field validation gap.
- Reporter references RFC 7591 §2, whose redirection-flow URI registration requirement is normative for the relevant OAuth registration claim; this run did not perform a complete standards conformance suite.
- Distinguish schema-level permissiveness (possibly useful for non-redirect client metadata) from endpoint-level invariants (`authorization_code` requires an actionable redirect URI). Do not prescribe globally disallowing `None` for every client flow.
- Hypothesis `H-20261122-P01`: for DCR, an input schema that independently permits `None` must not override a cross-field invariant of the selected authorization flow; an accepted registration that cannot subsequently authorize is a *false acceptance*, not successful end-to-end protocol execution.
- Candidate state refinement: `DCR_REQUEST_PARSED → FLOW_INVARIANTS_VALIDATED → CLIENT_REGISTERED → AUTHORIZE_REDIRECT_VALIDATED → AUTH_COMPLETE | REJECTED`. JSON schema validation of individual fields does not prove the later transitions.
- Controls: absent/empty/null/nonempty redirect URIs across `authorization_code` and legitimate non-redirect model contexts, verifying actual persisted registration and subsequent /authorize behavior. The source report alone does not establish an exploit, credential disclosure, or local Axiom adoption.
- Source provenance and full numeric KL input identity (P/Q distributions, digests, precision, units): **NOT_AVAILABLE**; scientific KL `NOT_COMPUTED`.

## A2 — Formal KL and structural scanner ledger
- Execution environment available: isolated Linux container, Python 3.13.5; source review via connected GitHub API.
- Actual attempted acquisition command: `git ls-remote https://github.com/lostlight530/Axiom-0.git refs/heads/main`
- Acquisition exit code: `128`; stdout: empty; stderr: `fatal: unable to access 'https://github.com/lostlight530/Axiom-0.git/': Could not resolve host: github.com`.
- This is **repository worktree acquisition failure**, not a failed formal KL test, failed document consistency scanner, or SDK reproduction.
- Intended KL scanner command: `python3 scan_kl_divergence.py`; actual execution `NOT_EXECUTED`; scanner stdout/stderr/exit: `NOT_AVAILABLE`; P/Q identity and KL value `NOT_COMPUTED` (no invented scalar or units).
- Intended consistency scanner command: `python3 scan_consistency.py`; actual execution `NOT_EXECUTED`; scanner stdout/stderr/exit: `NOT_AVAILABLE`; `axiom_document_topology` JSON contract `NOT_GENERATED`.
- Inspected GitHub contents are **source archaeology**, not replacement execution receipts for the formal scanner contract.

## A3 — Bounded execution
- A2 prerequisites are not satisfied: **BLOCKED_DEPENDENCY / NOT_EXECUTED**.
- No formal bounded experiment, valid success/failure counters, immutable fixture, runtime environment or scientific execution receipts for A3.
- The external user's proposed ASGI script and reported HTTP statuses are not Axiom A3 runs; do not transform them into local PASS counters.

## A4 — Topology / index alignment
- A3 did not complete: **BLOCKED_DEPENDENCY / NOT_EXECUTED**.
- No `axiom_document_topology` output, alignment run, or SPEC/ADR/index revision is claimed.
- A4 must remain blocked until actual A2 checks and the owning formal dependencies permit continuation.

## EVIDENCE_DELTA and Counterevidence Gate
- **NEW_EVIDENCE:** exact pinned SDK field declaration plus handler validation order, paired with a dated upstream bug report and explicit reported 400/201 cases.
- **CORRECTED_INTERPRETATION:** field-level nullable parsing does not imply flow-level acceptance; a minted client ID is not proof of usable authorization, much less a valid durable effect.
- **UNCHANGED_BOUNDARY:** `SOURCE_INSPECTED != ISSUE_REPRODUCED != PLASMA_SCANNED != A3_EXECUTED != PROTOCOL_VERIFIED`; source issue is one reporter lineage.
- **NEW_COUNTEREVIDENCE:** a legitimate non-redirect metadata use may require `None` at model level; rejecting all nulls globally can break an otherwise valid separate use. Also, a registration success may still fail at /authorize; test both state transitions.
- **UNKNOWN_RETAINED:** upstream resolution and release version; independent reproduction of 201; exact RFC conformance across flows; Axiom scanner outputs; KL value, topology, or host runtime applicability.
- **NEXT_RETEST_CONDITION:** obtain complete revision-identified Axiom worktree, execute both formal scanners and retain their raw outputs, proceed A3/A4 only on allowed dependencies. Separately pin SDK `77001c96` and run omitted/empty/null/nonempty `redirect_uris` against an in-memory ASGI authorization server with actual response and storage receipts.
- **Counterevidence Gate:** `BOUNDED_SOURCE_HYPOTHESIS_ONLY / FORMAL_PIPELINE_PROMOTION_DENIED`.

## Delivery boundary
- One prospective 2026-11-22 Daily manifest, no new Weekly/Monthly credit and no Jules history edits.
- GitHub Draft PR is only a proposal; approval, merge, CI and authoritative main retention are not asserted by this document.
