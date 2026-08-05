from __future__ import annotations
import argparse
import asyncio
import json
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from pathlib import Path
from CODE.contracts import canonical_json, kl_divergence, stable_digest
from CODE.liquid_morphing import SystemMetrics
from CODE.nexus_core import AxiomOrchestrator


def _sample(index: int = 0) -> dict:
    return asyncio.run(AxiomOrchestrator().run_continuum({"index": index, "authorized": True}))


def run_case(name: str, count: int = 1) -> None:
    if name == "parallel":
        with ThreadPoolExecutor(max_workers=8) as pool:
            results = list(pool.map(_sample, range(32)))
        assert len({item["run_id"] for item in results}) == 32
    elif name == "complexity":
        assert len(AxiomOrchestrator().nodes) == 10
    elif name == "entropy":
        assert kl_divergence([0.9, 0.1], [0.1, 0.9]) > 0.05
    elif name == "json":
        assert canonical_json({"z": 1, "a": 2}) == '{"a":2,"z":1}'
    elif name == "metrics":
        payload = {"cpu_percent": 0.5, "memory_percent": 0.4, "queue_depth": 2}
        SystemMetrics(**payload)
        json.loads(canonical_json(payload))
    elif name == "datetime":
        value = datetime.now(timezone.utc).isoformat(timespec="microseconds")
        assert value.endswith("+00:00")
    elif name == "error":
        try:
            raise ValueError("private detail")
        except ValueError as exc:
            assert type(exc).__name__ == "ValueError"
    elif name == "repeat":
        digests = [stable_digest(_sample(0)["state"]["canonical_payload"]) for _ in range(count)]
        assert len(set(digests)) == 1
    else:
        raise ValueError(f"unknown case: {name}")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("case")
    parser.add_argument("--count", type=int, default=1)
    args = parser.parse_args()
    if not 1 <= args.count <= 1000:
        parser.error("count must be between 1 and 1000")
    run_case(args.case, args.count)
    print(canonical_json({"case": args.case, "status": "passed"}))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())