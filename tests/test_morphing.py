import asyncio
import unittest
from CODE.liquid_morphing import AxiomMorphingEngine, MorphState, SystemMetrics


class MorphingTests(unittest.IsolatedAsyncioTestCase):
    async def test_transition_commits_after_validation(self):
        engine = AxiomMorphingEngine(validate=lambda source, target: None)
        target = engine.evaluate_morph(SystemMetrics(cpu_percent=1.0, queue_depth=100))
        self.assertEqual(target, MorphState.LIQUID)
        self.assertTrue(await engine.shift(target))
        self.assertEqual(engine.current_state, MorphState.LIQUID)
        self.assertTrue(engine.history[-1]["success"])

    async def test_failed_validation_preserves_state(self):
        def fail(source, target):
            raise RuntimeError("rejected")
        engine = AxiomMorphingEngine(validate=fail)
        with self.assertRaises(RuntimeError):
            await engine.shift(MorphState.LIQUID)
        self.assertEqual(engine.current_state, MorphState.SOLID)
        self.assertFalse(engine.history[-1]["success"])

    def test_metrics_reject_invalid_ranges(self):
        with self.assertRaises(ValueError):
            SystemMetrics(cpu_percent=88)