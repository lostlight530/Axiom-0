import re
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PROTECTED = ("README.md", "FRONTEND/", "docs/", "RESEARCH/", "INDEX.md", "PATCH_INDEX.md", "LICENSE")


class RepositoryContractTests(unittest.TestCase):
    def test_adrs_have_required_sections(self):
        for path in sorted((ROOT / "ADR").glob("*.md")):
            text = path.read_text(encoding="utf-8")
            for heading in ("## ?? / Status", "## ?? / Context", "## ?? / Decision", "## ?? / Consequences", "## ?? / Verification"):
                self.assertIn(heading, text, path)

    def test_methods_define_inputs_outputs_and_failure(self):
        for path in sorted((ROOT / "METHODOLOGY").glob("*.md")):
            text = path.read_text(encoding="utf-8")
            for heading in ("## ?? / Inputs", "## ?? / Procedure", "## ?? / Outputs", "## ???? / Failure conditions"):
                self.assertIn(heading, text, path)

    def test_actions_are_full_sha_pinned(self):
        for path in (ROOT / ".github" / "workflows").glob("*.yml"):
            for line in path.read_text(encoding="utf-8").splitlines():
                if "uses:" in line:
                    self.assertRegex(line, r"uses:\s+[\w.-]+/[\w.-]+@[0-9a-f]{40}(?:\s+#.*)?$")

    def test_workflows_use_verified_action_shas(self):
        expected = {
            "verify.yml": (
                "actions/checkout@3d3c42e5aac5ba805825da76410c181273ba90b1",
                "actions/setup-python@5fda3b95a4ea91299a34e894583c3862153e4b97",
                "actions/setup-node@820762786026740c76f36085b0efc47a31fe5020",
            ),
            "deploy.yml": (
                "actions/checkout@3d3c42e5aac5ba805825da76410c181273ba90b1",
                "actions/setup-node@820762786026740c76f36085b0efc47a31fe5020",
                "actions/configure-pages@45bfe0192ca1faeb007ade9deae92b16b8254a0d",
                "actions/upload-pages-artifact@fc324d3547104276b827a68afc52ff2a11cc49c9",
                "actions/deploy-pages@cd2ce8fcbc39b97be8ca5fce6e763baed58fa128",
            ),
        }

        for filename, actions in expected.items():
            path = ROOT / ".github" / "workflows" / filename
            text = path.read_text(encoding="utf-8")
            for action in actions:
                with self.subTest(workflow=filename, action=action):
                    self.assertIn(action, text)

    def test_pull_request_scope_gate_uses_exact_owned_files(self):
        path = ROOT / ".github" / "workflows" / "verify.yml"
        text = path.read_text(encoding="utf-8")
        scope_step = text.split("- name: Protected-path gate", 1)[1].split("- name: Contract tests", 1)[0]

        for value in (
            "scope:approved-readme",
            "scope:approved-dependencies",
            "dependabot[bot]",
            'args+=(--allow-file "README.md")',
            'args+=(--allow-file "FRONTEND/package.json")',
            'args+=(--allow-file "FRONTEND/package-lock.json")',
            'python scope_guard.py "${args[@]}"',
        ):
            with self.subTest(value=value):
                self.assertIn(value, scope_step)

    def test_pull_request_verification_builds_frontend(self):
        path = ROOT / ".github" / "workflows" / "verify.yml"
        text = path.read_text(encoding="utf-8")
        frontend_job = text.split("\n  frontend:\n", 1)[1]

        for value in (
            "node-version: 24",
            "working-directory: FRONTEND",
            "run: npm ci",
            "run: npm run lint",
            "run: npm run build",
        ):
            with self.subTest(value=value):
                self.assertIn(value, frontend_job)
