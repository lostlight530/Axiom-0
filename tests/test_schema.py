import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class SchemaTests(unittest.TestCase):
    def test_schemas_are_closed_draft_2020_12(self):
        for path in sorted((ROOT / "schemas").glob("*.json")):
            data = json.loads(path.read_text(encoding="utf-8"))
            self.assertEqual(data["$schema"], "https://json-schema.org/draft/2020-12/schema", path)
            self.assertFalse(data["additionalProperties"], path)

    def test_schedule_is_disabled_and_bounded(self):
        text = (ROOT / "AUTOMATION" / "sample-schedule.yml").read_text(encoding="utf-8")
        self.assertIn("enabled: false", text)
        self.assertIn("timeout_seconds: 600", text)
        self.assertNotIn("curl ", text)