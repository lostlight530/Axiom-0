"""A ten-stage reference pipeline with explicit inputs, outputs, and failure semantics."""
from __future__ import annotations

import asyncio
import logging
from collections.abc import Callable, Mapping
from typing import Any

try:
    from .contracts import canonical_json, kl_divergence, stable_digest, utc_now
    from .liquid_morphing import AxiomMorphingEngine, SystemMetrics
except ImportError:  # Supports `python CODE/nexus_core.py` without changing package semantics.
    from contracts import canonical_json, kl_divergence, stable_digest, utc_now
    from liquid_morphing import AxiomMorphingEngine, SystemMetrics

logger = logging.getLogger(__name__)


class AxiomOrchestrator:
    """Reference orchestration only; it does not establish universal determinism or safety."""

    def __init__(self, *, metrics_provider: Callable[[], SystemMetrics] | None = None, divergence_limit: float = 0.05) -> None:
        if not 0 <= divergence_limit:
            raise ValueError("divergence_limit must be non-negative")
        self.nodes = tuple(f"T-{index:02d}" for index in range(1, 11))
        self.morphing_engine = AxiomMorphingEngine()
        self.metrics_provider = metrics_provider or (lambda: SystemMetrics())
        self.divergence_limit = float(divergence_limit)

    @staticmethod
    def _dehydration_pipeline(raw_input: Any) -> dict[str, Any]:
        encoded = canonical_json(raw_input)
        return {"canonical_payload": encoded, "input_digest": stable_digest(raw_input)}

    def calculate_kl_divergence(self, p: list[float], q: list[float]) -> float:
        return kl_divergence(p, q)

    async def run_continuum(self, input_payload: Any) -> dict[str, Any]:
        state = self._dehydration_pipeline(input_payload)
        events: list[dict[str, Any]] = []
        for node in self.nodes:
            event: dict[str, Any] = {"node": node, "observed_at": utc_now(), "status": "completed"}
            if node == "T-04":
                metrics = self.metrics_provider()
                if not isinstance(metrics, SystemMetrics):
                    raise TypeError("metrics_provider must return SystemMetrics")
                target = self.morphing_engine.evaluate_morph(metrics)
                changed = await self.morphing_engine.shift(target) if target is not None else False
                state["morph"] = {"state": self.morphing_engine.current_state.name, "changed": changed}
            elif node == "T-09":
                actual = state.get("distribution", [0.1, 0.2, 0.7])
                expected = [0.1, 0.2, 0.7]
                divergence = kl_divergence(actual, expected)
                state["coherence"] = {"kl_nats": divergence, "limit": self.divergence_limit}
                if divergence > self.divergence_limit:
                    event["status"] = "failed"
                    events.append(event)
                    raise RuntimeError("coherence divergence exceeded the configured limit")
            events.append(event)
        return {"run_id": stable_digest({"input": input_payload, "events": events}), "state": state, "events": events, "limitations": ["heuristic metrics", "single-process reference implementation"]}


if __name__ == "__main__":
    print(canonical_json(asyncio.run(AxiomOrchestrator().run_continuum({"request": "authorized_request_v2"}))))