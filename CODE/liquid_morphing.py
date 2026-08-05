"""Observable state adaptation; phase names are operational labels, not physical claims."""
from __future__ import annotations

import asyncio
import inspect
from dataclasses import asdict, dataclass, field
from enum import Enum, auto
from typing import Any, Awaitable, Callable

try:
    from .contracts import utc_now
except ImportError:  # Direct script compatibility.
    from contracts import utc_now

Hook = Callable[["MorphState", "MorphState"], Any | Awaitable[Any]]


class MorphState(Enum):
    SOLID = auto()
    LIQUID = auto()
    GAS = auto()
    PLASMA = auto()


class MorphTrigger(Enum):
    LOAD_THRESHOLD = auto()
    COMPLEXITY_SPIKE = auto()
    ENTROPY_ALERT = auto()
    TEMPORAL_PATTERN = auto()
    MANUAL_OVERRIDE = auto()


@dataclass(frozen=True, slots=True)
class SystemMetrics:
    cpu_percent: float = 0.0
    memory_percent: float = 0.0
    active_tasks: int = 0
    queue_depth: int = 0
    entropy_level: float = 0.0
    timestamp: str = field(default_factory=utc_now)

    def __post_init__(self) -> None:
        for name in ("cpu_percent", "memory_percent", "entropy_level"):
            value = getattr(self, name)
            if isinstance(value, bool) or not isinstance(value, (int, float)) or not 0 <= float(value) <= 1:
                raise ValueError(f"{name} must be within [0, 1]")
        for name in ("active_tasks", "queue_depth"):
            value = getattr(self, name)
            if isinstance(value, bool) or not isinstance(value, int) or value < 0:
                raise ValueError(f"{name} must be a non-negative integer")
        if not isinstance(self.timestamp, str) or not self.timestamp:
            raise ValueError("timestamp must be a non-empty string")

    @property
    def load_score(self) -> float:
        return max(float(self.cpu_percent), float(self.memory_percent)) * 0.7 + min(self.queue_depth / 100, 1.0) * 0.3


class AxiomMorphingEngine:
    DEFAULT_THRESHOLDS = {MorphTrigger.LOAD_THRESHOLD: 0.85, MorphTrigger.ENTROPY_ALERT: 0.30}

    def __init__(self, thresholds: dict[MorphTrigger, float] | None = None, *, prepare: Hook | None = None, validate: Hook | None = None) -> None:
        self.thresholds = dict(self.DEFAULT_THRESHOLDS if thresholds is None else thresholds)
        for key in (MorphTrigger.LOAD_THRESHOLD, MorphTrigger.ENTROPY_ALERT):
            if key not in self.thresholds or not 0 <= float(self.thresholds[key]) <= 1:
                raise ValueError(f"invalid threshold: {key.name}")
        self.current_state = MorphState.SOLID
        self.history: list[dict[str, Any]] = []
        self._prepare = prepare
        self._validate = validate
        self._lock = asyncio.Lock()

    def evaluate_morph(self, metrics: SystemMetrics) -> MorphState | None:
        if metrics.entropy_level > self.thresholds[MorphTrigger.ENTROPY_ALERT]:
            return MorphState.PLASMA if self.current_state is not MorphState.PLASMA else None
        if metrics.load_score > self.thresholds[MorphTrigger.LOAD_THRESHOLD]:
            return {MorphState.SOLID: MorphState.LIQUID, MorphState.LIQUID: MorphState.GAS}.get(self.current_state)
        if metrics.load_score < 0.30 and self.current_state is not MorphState.SOLID:
            return MorphState.SOLID
        return None

    async def _call(self, hook: Hook | None, source: MorphState, target: MorphState) -> None:
        if hook is None:
            return
        result = hook(source, target)
        if inspect.isawaitable(result):
            await result

    async def shift(self, target: MorphState) -> bool:
        if not isinstance(target, MorphState):
            raise TypeError("target must be MorphState")
        async with self._lock:
            source = self.current_state
            if target is source:
                return False
            record: dict[str, Any] = {"from": source.name, "to": target.name, "started_at": utc_now(), "success": False}
            try:
                await self._call(self._prepare, source, target)
                await self._call(self._validate, source, target)
                self.current_state = target
                record["success"] = True
                return True
            except Exception as exc:
                record["error_type"] = type(exc).__name__
                raise
            finally:
                record["finished_at"] = utc_now()
                self.history.append(record)