from __future__ import annotations

import unittest
from pathlib import Path

import validate_research_record as validator


def daily_record(a3: str, *, pipeline: str = "SUCCESS", calibration: str = "") -> str:
    return f"""# Daily

{calibration}
## ZECP Metadata
- **Date (UTC):** 2026-08-28
- **Pipeline Status:** {pipeline}

## A1 Digital Archaeology
- Source: fixture

## A2 Algebraic Audit
- Audit Status: CONSISTENCY_CHECK_PASS_WITHIN_SCOPE
- D_KL: 0.0

## A3 Sandbox Stress Test
{a3}

## A4 Topology and Index Alignment
- Status: {"COMPLETED" if pipeline == "SUCCESS" else "Halted due to A2 failure"}
"""


class DailyExecutionEvidenceTests(unittest.TestCase):
    def test_success_requires_matching_execution_counts(self) -> None:
        text = daily_record(
            "- Executions: 100\n- Successes: 100\n- Failures: 0\n"
            "- Result: 100 / 100 specified executions passed"
        )
        self.assertEqual(validator.validate_daily(Path("record.md"), "2026-08-28", text), [])

    def test_not_executed_does_not_require_success_phrase(self) -> None:
        text = daily_record(
            "- Execution Command: NOT_EXECUTED\n- Executions: NOT_COMPUTED\n"
            "- Status: NOT_EXECUTED",
            pipeline="FAILED",
        ).replace("CONSISTENCY_CHECK_PASS_WITHIN_SCOPE", "DRIFT_DETECTED")
        self.assertEqual(validator.validate_daily(Path("record.md"), "2026-08-28", text), [])

    def test_not_executed_rejects_unqualified_success_phrase(self) -> None:
        text = daily_record(
            "- Executions: NOT_COMPUTED\n- Status: NOT_EXECUTED\n"
            "- Result: 100 / 100 specified executions passed",
            pipeline="FAILED",
        ).replace("CONSISTENCY_CHECK_PASS_WITHIN_SCOPE", "DRIFT_DETECTED")
        errors = validator.validate_daily(Path("record.md"), "2026-08-28", text)
        self.assertTrue(any("unqualified 100 / 100" in error for error in errors), errors)

    def test_historical_calibration_can_mark_template_success_non_evidentiary(self) -> None:
        calibration = """> **Post-hoc calibration — 2026-08-28**
> - Current disposition: `NON_EVIDENTIARY_TEMPLATE_TEXT`
> - Execution replayed for this annotation: `NO`
"""
        text = daily_record(
            "- Executions: NOT_COMPUTED\n- Status: NOT_EXECUTED\n"
            "- Historical template: 100 / 100 specified executions passed",
            pipeline="FAILED",
            calibration=calibration,
        ).replace("CONSISTENCY_CHECK_PASS_WITHIN_SCOPE", "DRIFT_DETECTED")
        self.assertEqual(validator.validate_daily(Path("record.md"), "2026-08-28", text), [])

    def test_computed_dkl_requires_a_number_or_approved_missing_state(self) -> None:
        text = daily_record(
            "- Executions: 100\n- Successes: 100\n- Failures: 0\n"
            "- Result: 100 / 100 specified executions passed"
        ).replace("- D_KL: 0.0", "- D_KL: computed")
        errors = validator.validate_daily(Path("record.md"), "2026-08-28", text)
        self.assertTrue(any("D_KL" in error for error in errors), errors)

    def test_conflicting_structural_record_can_retain_separate_a3_evidence(self) -> None:
        calibration = """> **Post-hoc calibration — 2026-08-28**
> - Current disposition: `HISTORICAL_COMMAND_RESULT_CONFLICT / A3_EXECUTION_EVIDENCE_RETAINED`
> - Execution replayed for this annotation: `NO`
"""
        text = daily_record(
            "- Executions: 100\n- Successes: 100\n- Failures: 0\n"
            "- Result: 100 / 100 specified executions passed\n- A3 status: MISSING_DATA",
            calibration=calibration,
        )
        self.assertEqual(validator.validate_daily(Path("record.md"), "2026-08-28", text), [])


class WeeklyHistoricalCalibrationTests(unittest.TestCase):
    def test_complete_post_hoc_block_can_preserve_legacy_weekly_shape(self) -> None:
        text = """# Legacy weekly
> **Post-hoc calibration — 2026-08-28**
> - Original record: `PRESERVED`
> - Original execution state: `WEEKLY_RESULT_RETAINED`
> - Current disposition: `HISTORICAL_ONLY / SUPERSEDED_FOR_CURRENT_INTERPRETATION`
> - Reason: legacy structure predates the current A5 contract.
> - Evidence boundary: no evidence promotion.
> - Canonical authority: `stage-audit`
> - Execution replayed for this annotation: `NO`
"""
        self.assertEqual(validator.validate_weekly(Path("record.md"), "2026-W31", text), [])


if __name__ == "__main__":
    unittest.main()
