"""Behavioral tests for protected-path allowance decisions."""
from __future__ import annotations

import contextlib
import io
import sys
import unittest
from unittest.mock import patch

import scope_guard


class BlockedPathsTests(unittest.TestCase):
    def test_default_denies_readme_and_package_files(self):
        paths = ["README.md", "FRONTEND/package.json", "FRONTEND/package-lock.json"]

        self.assertEqual(scope_guard.blocked_paths(paths), paths)

    def test_allows_each_requested_protected_file_exactly(self):
        paths = ["README.md", "FRONTEND/package.json", "FRONTEND/package-lock.json"]
        cases = (
            ("README.md", ["FRONTEND/package.json", "FRONTEND/package-lock.json"]),
            ("FRONTEND/package.json", ["README.md", "FRONTEND/package-lock.json"]),
            ("FRONTEND/package-lock.json", ["README.md", "FRONTEND/package.json"]),
        )

        for allowed_file, expected in cases:
            with self.subTest(allowed_file=allowed_file):
                self.assertEqual(scope_guard.blocked_paths(paths, {allowed_file}), expected)

    def test_continues_to_deny_frontend_source(self):
        self.assertEqual(
            scope_guard.blocked_paths(["FRONTEND/src/App.tsx"], {"FRONTEND/package.json"}),
            ["FRONTEND/src/App.tsx"],
        )

    def test_normalizes_slashes_for_paths_and_allowances(self):
        self.assertEqual(
            scope_guard.blocked_paths(
                [r"FRONTEND\package.json", r"FRONTEND\src\App.tsx"],
                {r"FRONTEND\package.json"},
            ),
            ["FRONTEND/src/App.tsx"],
        )

    @patch("scope_guard.changed_paths", return_value=["README.md", "FRONTEND/package.json"])
    def test_cli_accepts_repeatable_exact_allow_file(self, _changed_paths):
        arguments = [
            "scope_guard.py",
            "--base-ref",
            "base",
            "--allow-file",
            "README.md",
            "--allow-file",
            "FRONTEND/package.json",
        ]

        with patch.object(sys, "argv", arguments), contextlib.redirect_stdout(io.StringIO()):
            self.assertEqual(scope_guard.main(), 0)


if __name__ == "__main__":
    unittest.main()