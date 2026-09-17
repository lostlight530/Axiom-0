# Contributing

Axiom-0 welcomes bounded, reviewable contributions to its reference implementation, tests, specification, ADRs, methodology, evidence documentation, and repository infrastructure.

## Start from the owning contract

Before changing a surface, identify what currently owns its behavior:

- `CODE/` and `tests/` own executable reference behavior and regression evidence;
- `SPECIFICATION.md` owns implemented interface and compatibility description;
- `ADR/` records architectural decisions and their stated consequences;
- `METHODOLOGY/` records research/engineering methods and interpretation boundaries;
- `EVIDENCE_BASELINE.md` and `REPRODUCIBILITY.md` bound evidence and replay claims;
- `AUTOMATION/` and machine-readable schemas own repository-defined automation contracts;
- root metadata, `.github/`, security, citation, and release files are repository infrastructure.

Historical research and audit artifacts are point-in-time evidence. Do not rewrite them merely to make earlier records match later implementation or terminology.

## Implementation changes

For executable behavior:

1. reproduce the defect or define the new contract at a named revision;
2. specify inputs, outputs, failure behavior, and compatibility;
3. add or update proportionate regression tests;
4. update the owning specification, ADR, methodology, or machine contract when its semantics actually change;
5. keep reference-fixture behavior distinct from production, distributed, security, or authorization claims.

The Python reference implementation intentionally avoids runtime third-party dependencies. A new dependency requires an explicit technical reason, compatibility impact, threat surface, and rollback path.

## Evidence and research changes

Keep source authority, repository implementation, execution evidence, and inference distinct.

```text
source authority != local implementation
scanner pass != semantic correctness
D_KL result != repository-wide truth
schedule definition != scheduler execution
archived publication != later main revision
```

When changing a research or evidence statement, identify the exact source/version/date when material and preserve unresolved, failed, missing, or not-computed states.

## Local verification

Use checks relevant to the changed surface. Current repository entry points include:

```bash
python -m compileall -q CODE tests *.py
python -m unittest discover -s tests -v
python code_compliance.py
python scan_consistency.py
python scan_kl_divergence.py
```

Run only commands supported by the actual environment. In a pull request, record what was actually executed and the observed result. An unrun check is not a pass.

If an automation contract or sample changes, validate the relevant schema separately. A valid schedule instance is not evidence that a scheduler executed it.

## Documentation, ADRs, and methodology

Prefer updating the smallest owning document. New ADRs or methodology documents should be introduced only when they record a real architectural or methodological decision not already owned elsewhere.

Do not strengthen claims simply because a newer source or later successful run exists. Current interpretation can be corrected forward while historical evidence remains recoverable.

## Pull requests

Use the repository pull-request template and include:

- the problem and bounded change;
- affected implementation/contracts/docs;
- evidence or rationale;
- verification actually performed;
- checks or environments not exercised;
- compatibility and historical impact;
- security/privacy impact when relevant;
- a practical rollback.

## Security, privacy, and attribution

Follow `SECURITY.md` for sensitive reports. Do not publish credentials, private data, or exploit details requiring coordinated disclosure.

AI assistance may support drafting, review, or research organization, but generated text is not evidence by itself. Contributors remain responsible for claims, code, tests, and citations.

Contributions to repository-owned work are submitted under the current `LICENSE`. Third-party material retains its own attribution and licensing, and Git/PR history remains the source of contribution attribution.
