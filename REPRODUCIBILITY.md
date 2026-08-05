# Reproducibility

A result is reproducible only within its recorded input, revision, environment, configuration, and tolerance.

## Minimum record

Retain the Git commit SHA; Python major/minor/patch and operating system; command argument array; sanitized fixture or canonical SHA-256 digest; threshold/configuration version; UTC start/end time; exit code; artifact digest; and untested boundary. Never retain credentials or unnecessary private payloads.

## Verification matrix

CI compiles and runs the standard-library test suite on Python 3.12 and 3.14. Historical Jules entry paths are exercised separately because path compatibility is part of the repository contract. `test_100.sh` repeats a bounded fixture; it checks stable canonical state, not byte-identical wall-clock events or model determinism.

## Interpreting failure

First reproduce at the failing commit. Separate environment drift, invalid fixture, flaky external dependency, contract regression, and an outdated expectation. This reference code performs no network calls; a network-dependent extension must capture service/model version and retry/budget policy separately.

Passing evidence does not establish performance, security, or correctness outside the tested cases. Record all skipped or unavailable checks.