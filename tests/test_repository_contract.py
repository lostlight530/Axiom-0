import re
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PROTECTED = ("README.md", "FRONTEND/", "docs/", "RESEARCH/", "INDEX.md", "PATCH_INDEX.md", "LICENSE")


class RepositoryContractTests(unittest.TestCase):
    def test_adrs_have_required_sections(self):
        for path in sorted((ROOT / "ADR").glob("*.md")):
            text = path.read_text(encoding="utf-8")
            for heading in ("## 状态 / Status", "## 背景 / Context", "## 决策 / Decision", "## 后果 / Consequences", "## 验证 / Verification"):
                self.assertIn(heading, text, path)

    def test_methods_define_inputs_outputs_and_failure(self):
        for path in sorted((ROOT / "METHODOLOGY").glob("*.md")):
            text = path.read_text(encoding="utf-8")
            for heading in ("## 输入 / Inputs", "## 步骤 / Procedure", "## 输出 / Outputs", "## 失败条件 / Failure conditions"):
                self.assertIn(heading, text, path)

    def test_actions_are_full_sha_pinned(self):
        for path in (ROOT / ".github" / "workflows").glob("*.yml"):
            for line in path.read_text(encoding="utf-8").splitlines():
                if "uses:" in line:
                    self.assertRegex(line, r"uses:\s+[\w.-]+/[\w.-]+@[0-9a-f]{40}(?:\s+#.*)?$")