import unittest
from CODE.liquid_morphing import SystemMetrics
from CODE.nexus_core import AxiomOrchestrator


class NexusTests(unittest.IsolatedAsyncioTestCase):
    async def test_run_has_ten_ordered_events(self):
        result = await AxiomOrchestrator(metrics_provider=lambda: SystemMetrics()).run_continuum({"b": 2, "a": 1})
        self.assertEqual([event["node"] for event in result["events"]], [f"T-{i:02d}" for i in range(1, 11)])
        self.assertEqual(result["state"]["morph"]["state"], "SOLID")
        self.assertIn("limitations", result)

    async def test_bad_metrics_provider_is_rejected(self):
        with self.assertRaises(TypeError):
            await AxiomOrchestrator(metrics_provider=lambda: {}).run_continuum("input")