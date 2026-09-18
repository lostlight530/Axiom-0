> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `METHOD / PROVENANCE CONTRACT`
> - **Role:** Current reproducibility contract: **Reproducibility**
> - **Authority:** Repository-native authority for separating publication identity, Git revision, environment, input, execution and actual reproduction evidence
> - **Current meaning:** Reproducibility is revision- and execution-bound. Archive/DOI identity, code identity and a declared procedure are distinct from an observed rerun and comparison
> - **Evidence / implementation boundary:** DOI, archive presence, commit identity, configuration, checker definition or later success cannot self-award historical execution or independent reproduction
> - **Cross-document relation:** Specification owns behavior; Methodology owns procedures; dated evidence owns observed runs; release metadata owns publication identity without upgrading validation
> - **Update trigger:** Update when run identity, comparison criteria, environment requirements or archive/revision semantics materially change
> - **Preservation rule:** Historical execution states remain historical even when later revisions become more reproducible

# Reproducibility

A result is reproducible only within its recorded input, revision, environment, configuration, and tolerance.

## Minimum record

Retain the Git commit SHA; Python major/minor/patch and operating system; command argument array; sanitized fixture or canonical SHA-256 digest; threshold/configuration version; UTC start/end time; exit code; artifact digest; and untested boundary. Never retain credentials or unnecessary private payloads.

## Verification matrix

The repository currently has no GitHub Actions workflow that compiles or tests the Python implementation. Python 3.12 and 3.14 may be compatibility targets, but an environment is **verified** only when a retained run records its exact interpreter version, revision, command, and exit code. Local verification is not GitHub CI. The Pages workflow builds the presentation surface and is not evidence for Python/runtime, research, or document semantics.

Historical Jules entry paths remain compatibility surfaces, but a path being invoked does not establish that its contract is current. Retain the contract identity emitted by `scan_consistency.py` with each run. `test_100.sh` repeats a bounded fixture; it checks stable canonical state, not byte-identical wall-clock events or model determinism.

## Archived software publication and exact revision identity

The repository has a public Zenodo software publication identified by DOI `10.5281/zenodo.22791103` and publication date 2026-09-16.

That DOI is a stable identifier for the archived software publication. It is not, by itself, a substitute for the exact Git commit, interpreter, environment, fixture, command, and tolerance needed to reproduce a revision-specific result.

Keep these identities distinct:

```text
Zenodo publication identity != current main revision
Git commit identity != successful execution
successful execution != scientific validity
archive presence != reproduction
later main state != archived publication contents
```

When a result depends on exact implementation state, cite or record the Git revision in addition to the DOI. Do not infer an exact archive-to-commit mapping unless that mapping is explicitly retained and verified by the publication or repository metadata.

## Interpreting failure

First reproduce at the failing commit. Separate environment drift, invalid fixture, flaky external dependency, contract regression, and an outdated expectation. This reference code performs no network calls; a network-dependent extension must capture service/model version and retry/budget policy separately.

Passing evidence does not establish performance, security, or correctness outside the tested cases. Record all skipped or unavailable checks.
