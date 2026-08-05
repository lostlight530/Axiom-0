"""Pure contract functions used by Axiom validation and orchestration."""
from __future__ import annotations

import hashlib
import json
import math
from collections.abc import Mapping, Sequence
from datetime import datetime, timezone
from typing import Any


def canonical_json(value: Any) -> str:
    """Serialize JSON-compatible data deterministically; reject non-finite numbers."""
    return json.dumps(value, ensure_ascii=False, allow_nan=False, sort_keys=True, separators=(",", ":"))


def stable_digest(value: Any) -> str:
    return hashlib.sha256(canonical_json(value).encode("utf-8")).hexdigest()


def utc_now() -> str:
    return datetime.now(timezone.utc).isoformat(timespec="microseconds").replace("+00:00", "Z")


def normalize_distribution(values: Sequence[float], *, name: str) -> tuple[float, ...]:
    if isinstance(values, (str, bytes)) or not values:
        raise ValueError(f"{name} must be a non-empty numeric sequence")
    parsed: list[float] = []
    for value in values:
        if isinstance(value, bool) or not isinstance(value, (int, float)):
            raise TypeError(f"{name} contains a non-numeric value")
        item = float(value)
        if not math.isfinite(item) or item < 0:
            raise ValueError(f"{name} values must be finite and non-negative")
        parsed.append(item)
    total = math.fsum(parsed)
    if total <= 0:
        raise ValueError(f"{name} must have positive mass")
    return tuple(item / total for item in parsed)


def kl_divergence(p: Sequence[float], q: Sequence[float]) -> float:
    """Return D_KL(P||Q) in nats. A positive P event with zero Q mass yields infinity."""
    if len(p) != len(q):
        raise ValueError("p and q must have equal length")
    pn = normalize_distribution(p, name="p")
    qn = normalize_distribution(q, name="q")
    terms: list[float] = []
    for left, right in zip(pn, qn, strict=True):
        if left == 0:
            continue
        if right == 0:
            return math.inf
        terms.append(left * math.log(left / right))
    result = math.fsum(terms)
    return 0.0 if abs(result) < 1e-15 else result


def require_mapping(value: Any, *, name: str = "value") -> Mapping[str, Any]:
    if not isinstance(value, Mapping):
        raise TypeError(f"{name} must be a mapping")
    return value