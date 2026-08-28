from __future__ import annotations

import unittest
from unittest.mock import patch

import scan_consistency as scanner


ADR_TEXT = """# ADR
## Context
x
## Decision
x
## Verification
x
"""

METH_TEXT = """# Method
## Inputs
x
## Procedure
x
## Outputs
x
## Verification
x
"""


def indexed_members(directory: str, prefix: str) -> set[str]:
    return {
        "ADR": {"ADR-001-test.md"},
        "METHODOLOGY": {"METH-001-test.md"},
    }[directory]


def actual_members(directory: str, prefix: str) -> set[str]:
    return {
        "ADR": {"ADR-001-test.md"},
        "METHODOLOGY": {"METH-001-test.md"},
    }[directory]


class ScannerContractEvidenceTests(unittest.TestCase):

    def test_contract_evidence_reports_index_derived_counts(self) -> None:
        with (
            patch.object(scanner, "_indexed_members", side_effect=indexed_members),
            patch.object(scanner, "_actual_members", side_effect=actual_members),
            patch.object(scanner, "_check_groups"),
            patch.object(scanner, "_has_any", return_value=True),
            patch("pathlib.Path.read_text", return_value=ADR_TEXT),
        ):
            failures = scanner.scan()
            evidence = scanner.contract_evidence(failures)
        self.assertEqual(failures, [])
        self.assertEqual(evidence["contract"], "axiom_document_topology")
        self.assertEqual(evidence["contract_version"], "2026-08-28")
        self.assertEqual(evidence["adr_count"], 1)
        self.assertEqual(evidence["methodology_count"], 1)
        self.assertEqual(evidence["status"], "passed")

    def test_unindexed_document_fails_closed_and_is_reported(self) -> None:
        def actual_with_extra(directory: str, prefix: str) -> set[str]:
            members = actual_members(directory, prefix)
            return members | ({"ADR-002-unindexed.md"} if directory == "ADR" else set())

        with (
            patch.object(scanner, "_indexed_members", side_effect=indexed_members),
            patch.object(scanner, "_actual_members", side_effect=actual_with_extra),
            patch.object(scanner, "_check_groups"),
            patch.object(scanner, "_has_any", return_value=True),
            patch("pathlib.Path.read_text", return_value=ADR_TEXT),
        ):
            failures = scanner.scan()
            evidence = scanner.contract_evidence(failures)
        self.assertTrue(any("unindexed" in failure for failure in failures), failures)
        self.assertEqual(evidence["status"], "failed")
        self.assertEqual(evidence["adr_count"], 2)
        self.assertEqual(evidence["failures"], failures)

    def test_index_reference_to_missing_document_fails_closed(self) -> None:
        def index_with_missing(directory: str, prefix: str) -> set[str]:
            members = indexed_members(directory, prefix)
            return members | ({"ADR-999-missing.md"} if directory == "ADR" else set())

        with (
            patch.object(scanner, "_indexed_members", side_effect=index_with_missing),
            patch.object(scanner, "_actual_members", side_effect=actual_members),
            patch.object(scanner, "_check_groups"),
            patch.object(scanner, "_has_any", return_value=True),
            patch("pathlib.Path.read_text", return_value=ADR_TEXT),
        ):
            failures = scanner.scan()
        self.assertTrue(any("missing documents" in failure for failure in failures), failures)


if __name__ == "__main__":
    unittest.main()
