# Contributing

Axiom accepts small, reviewable changes that make contracts, evidence, and execution behavior more precise.

## Before changing code

1. Identify the affected ADR or methodology and its explicit boundary.
2. Define inputs, outputs, error behavior, and compatibility.
3. Add or update a regression test before changing a critical path.
4. Keep README, `FRONTEND/**`, `docs/**`, `RESEARCH/**`, Jules indexes, and `LICENSE` outside the change unless separately approved.

## Local verification

Use Python 3.12 or 3.14 and run the checks relevant to the changed executable path:

```text
python -m unittest discover -s tests -v
python code_compliance.py
python scan_consistency.py
python scan_kl_divergence.py
```

If a documentation-only or evidence-only change intentionally does not execute runtime tests, say so explicitly. An unrun check must never be reported as passed.

The project intentionally has no runtime third-party Python dependency. Do not add a dependency without documenting ownership, threat surface, alternatives, and rollback.

## Claims and generated content

State whether material is observed, externally supported, proposed, hypothetical, contested, missing, or not computed. Cite primary sources with retrieval/check dates when a primary source exists. AI-assisted contributions must follow `AI_USE_DISCLOSURE.md`; the contributor remains responsible for every line and verification result.

Generated or retrieved material does not inherit authority from the tool that produced it. A successful fetch, parser, model response, or ingestion step is not semantic validation.

## Research evidence rules

For research and audit artifacts:

- distinguish source authority from claim status
- distinguish publication/creation dates from update or last-modified timestamps
- verify explicit source versions against version-specific dates
- record `MISSING_DATA`, `NOT_COMPUTED`, unresolved items, and rejected evidence rather than filling gaps
- preserve an earlier run's error even if a later run succeeds
- scope numeric and test results to the actual harness and input range
- mark repeated sources as revalidation, control signals, new claims, or duplicates instead of treating every recurrence as a novel hard signal

### Daily → Weekly inheritance

A Weekly artifact may aggregate or downgrade Daily evidence. It may not invent a Daily observation that is absent from the persisted Daily artifacts.

If the Weekly task obtains independent new external evidence, record it separately with source, check time, and status. Do not place it in the Daily-derived lifecycle table as though it had existed earlier.

`Missing Daily files: NONE` and `Missing evidence: NONE` are different statements.

### Correction policy

Do not silently rewrite historical execution records merely to make the archive appear consistent. When an earlier record is materially wrong but remains useful as execution history, add an explicit reconciliation/erratum that names the affected field, corrected evidence, scope, and precedence.

A silent rewrite is appropriate only when the artifact is not intended as historical evidence and the change does not falsify what was observed at the time.

## Pull requests

Use a feature branch and the template. Include exact commands and results when commands were run, security/privacy impact, unresolved uncertainty, and a reversible rollback where applicable. A failing or unrun required check prevents completion claims.

Research-only pull requests should additionally state:

- evidence window
- primary sources checked
- whether historical records were rewritten or preserved
- what claim strength changed
- what remains unresolved
