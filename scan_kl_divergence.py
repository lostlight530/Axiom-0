"""Numerical invariant scan kept for Jules compatibility.

The script preserves the historical human-readable success line and additionally emits
stable, machine-readable metric evidence so a Daily Manifest does not have to infer a
numeric D_KL value from a zero exit code alone.
"""
from __future__ import annotations

import json
import math

from CODE.contracts import kl_divergence

CASES = [
    ("identity", [0.1, 0.2, 0.7], [0.1, 0.2, 0.7], 0.0),
    ("renormalized_identity", [1, 2, 7], [0.1, 0.2, 0.7], 0.0),
]


def run_scan() -> dict[str, object]:
    failures: list[str] = []
    observations: list[dict[str, object]] = []

    for name, p, q, expected in CASES:
        actual = kl_divergence(p, q)
        observations.append(
            {
                "case": name,
                "d_kl": actual,
                "expected": expected,
                "within_tolerance": math.isclose(actual, expected, abs_tol=1e-12),
            }
        )
        if not math.isclose(actual, expected, abs_tol=1e-12):
            failures.append(f"{name}: {actual} != {expected}")

    support_mismatch = kl_divergence([1, 0], [0, 1])
    support_mismatch_is_infinite = math.isinf(support_mismatch)
    if not support_mismatch_is_infinite:
        failures.append("support mismatch must be infinity")

    return {
        "contract": "kl_divergence",
        "status": "passed" if not failures else "failed",
        "observations": observations,
        "support_mismatch": "infinity" if support_mismatch_is_infinite else support_mismatch,
        "failures": failures,
    }


if __name__ == "__main__":
    result = run_scan()
    failures = result["failures"]
    if failures:
        print("\n".join(str(item) for item in failures))
        print("KL_EVIDENCE=" + json.dumps(result, ensure_ascii=True, sort_keys=True))
        raise SystemExit(1)

    # Keep the legacy line because current Jules prompts and historical manifests refer to it.
    print("KL contract: passed")
    print("KL_EVIDENCE=" + json.dumps(result, ensure_ascii=True, sort_keys=True))
