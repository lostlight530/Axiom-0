"""Numerical invariant scan kept for Jules compatibility."""
from __future__ import annotations
import math
from CODE.contracts import kl_divergence

CASES = [
    ("identity", [0.1, 0.2, 0.7], [0.1, 0.2, 0.7], 0.0),
    ("renormalized identity", [1, 2, 7], [0.1, 0.2, 0.7], 0.0),
]

if __name__ == "__main__":
    failures = []
    for name, p, q, expected in CASES:
        actual = kl_divergence(p, q)
        if not math.isclose(actual, expected, abs_tol=1e-12):
            failures.append(f"{name}: {actual} != {expected}")
    if not math.isinf(kl_divergence([1, 0], [0, 1])):
        failures.append("support mismatch must be infinity")
    if failures:
        print("\n".join(failures))
        raise SystemExit(1)
    print("KL contract: passed")