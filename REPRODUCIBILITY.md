# Reproducibility

A result is reproducible only within its recorded input, revision, environment, configuration, and tolerance.

## Minimum record

Retain the Git commit SHA; Python major/minor/patch and operating system; command argument array; sanitized fixture or canonical SHA-256 digest; threshold/configuration version; UTC start/end time; exit code; artifact digest; and untested boundary. Never retain credentials or unnecessary private payloads.

## Verification matrix

The repository currently has no GitHub Actions workflow that compiles or tests the Python implementation. Python 3.12 and 3.14 may be compatibility targets, but an environment is **verified** only when a retained run records its exact interpreter version, revision, command, and exit code. Local verification is not GitHub CI. The Pages workflow builds the presentation surface and is not evidence for Python/runtime, research, or document semantics.

Historical Jules entry paths remain compatibility surfaces, but a path being invoked does not establish that its contract is current. Retain the contract identity emitted by `scan_consistency.py` with each run. `test_100.sh` repeats a bounded fixture; it checks stable canonical state, not byte-identical wall-clock events or model determinism.

## Interpreting failure

First reproduce at the failing commit. Separate environment drift, invalid fixture, flaky external dependency, contract regression, and an outdated expectation. This reference code performs no network calls; a network-dependent extension must capture service/model version and retry/budget policy separately.

Passing evidence does not establish performance, security, or correctness outside the tested cases. Record all skipped or unavailable checks.
