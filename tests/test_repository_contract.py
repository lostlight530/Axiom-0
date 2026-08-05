import re
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PROTECTED = ("README.md", "FRONTEND/", "docs/", "RESEARCH/", "INDEX.md", "PATCH_INDEX.md", "LICENSE")


class RepositoryContractTests(unittest.TestCase):
    def test_adrs_have_required_sections(self):
        for path in sorted((ROOT / "ADR").glob("*.md")):
            text = path.read_text(encoding="utf-8")
            for heading in ("## \u72b6\u6001 / Status", "## \u80cc\u666f / Context", "## \u51b3\u7b56 / Decision", "## \u540e\u679c / Consequences", "## \u9a8c\u8bc1 / Verification"):
                self.assertIn(heading, text, path)

    def test_methods_define_inputs_outputs_and_failure(self):
        for path in sorted((ROOT / "METHODOLOGY").glob("*.md")):
            text = path.read_text(encoding="utf-8")
            for heading in ("## \u8f93\u5165 / Inputs", "## \u6b65\u9aa4 / Procedure", "## \u8f93\u51fa / Outputs", "## \u5931\u8d25\u6761\u4ef6 / Failure conditions"):
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
    def test_dependabot_groups_compatible_updates(self):
        path = ROOT / ".github" / "dependabot.yml"
        text = path.read_text(encoding="utf-8")
        sections = {
            section.splitlines()[0]: section
            for section in text.split("  - package-ecosystem: ")[1:]
        }
        actions = sections["github-actions"]
        npm = sections["npm"]

        self.assertEqual(actions.count("\n    groups:\n"), 1)
        self.assertIn("\n      github-actions:\n", actions)
        self.assertIn('\n          - "*"\n', actions)
        self.assertEqual(npm.count("\n    groups:\n"), 1)
        self.assertIn("\n      npm-minor-patch:\n", npm)
        self.assertIn("\n        update-types:\n", npm)
        self.assertIn('\n          - "minor"\n', npm)
        self.assertIn('\n          - "patch"\n', npm)
        self.assertNotIn('\n          - "major"\n', npm)

    def test_readme_is_evidence_scoped(self):
        path = ROOT / "README.md"
        text = path.read_text(encoding="utf-8")
        superseded = (
            "physical shackles",
            "absolute convergent",
            "cryptographically signed ADRs",
            "\u7269\u7406\u67b7\u9501",
            "\u7edd\u5bf9\u6536\u655b",
            "\u5bc6\u7801\u5b66\u7b7e\u540d",
        )

        for phrase in superseded:
            with self.subTest(phrase=phrase):
                self.assertNotIn(phrase.casefold(), text.casefold())
        for target in (
            "SPECIFICATION.md",
            "EVIDENCE_BASELINE.md",
            "REPRODUCIBILITY.md",
            "SECURITY.md",
        ):
            with self.subTest(target=target):
                self.assertIn(f"]({target})", text)
        for section in range(1, 8):
            with self.subTest(section=section):
                self.assertRegex(text, rf"(?m)^## {section}\\.")
