"""Fail-closed structural consistency scan for the current public ADR/methodology contract.

This scanner validates documentation topology and minimum structural sections only. It does
not validate architecture semantics, implementation correctness, external evidence, or runtime
behavior.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent
CONTRACT_VERSION = "2026-08-28"

_INDEX_LINK = re.compile(r"\]\(\./((?:ADR|METH)-\d{3}-[^)]+\.md)\)")

ADR_REQUIRED_GROUPS = (
    ("## Context", "## 背景 / Context"),
    ("## Decision", "## 决策 / Decision"),
)
ADR_EVIDENCE_HEADINGS = (
    "## Evidence boundary",
    "## Verification",
    "## 验证 / Verification",
)

METH_REQUIRED_GROUPS = (
    ("## Inputs", "## 输入 / Inputs"),
    ("## Procedure", "## 步骤 / Procedure"),
    ("## Outputs", "## 输出 / Outputs"),
)
METH_EVIDENCE_HEADINGS = (
    "## Evidence boundary",
    "## Verification",
    "## 验证 / Verification",
)


def _indexed_members(directory: str, prefix: str) -> set[str]:
    index_path = ROOT / directory / "INDEX.md"
    if not index_path.is_file():
        return set()
    text = index_path.read_text(encoding="utf-8")
    return {
        name
        for name in _INDEX_LINK.findall(text)
        if name.startswith(prefix)
    }


def _actual_members(directory: str, prefix: str) -> set[str]:
    return {path.name for path in (ROOT / directory).glob(f"{prefix}*.md")}


def _has_any(text: str, headings: tuple[str, ...]) -> bool:
    return any(heading in text for heading in headings)


def _check_groups(path: Path, text: str, groups: tuple[tuple[str, ...], ...], errors: list[str]) -> None:
    for alternatives in groups:
        if not _has_any(text, alternatives):
            errors.append(
                f"{path.relative_to(ROOT)} missing required section group: "
                + " OR ".join(alternatives)
            )


def scan() -> list[str]:
    errors: list[str] = []

    for directory, prefix, groups, evidence_headings in (
        ("ADR", "ADR-", ADR_REQUIRED_GROUPS, ADR_EVIDENCE_HEADINGS),
        ("METHODOLOGY", "METH-", METH_REQUIRED_GROUPS, METH_EVIDENCE_HEADINGS),
    ):
        indexed = _indexed_members(directory, prefix)
        actual = _actual_members(directory, prefix)

        if not indexed:
            errors.append(f"{directory}/INDEX.md contains no indexed {prefix} documents")
        else:
            missing_from_index = sorted(actual - indexed)
            missing_from_directory = sorted(indexed - actual)
            if missing_from_index:
                errors.append(f"{directory} unindexed documents: {missing_from_index}")
            if missing_from_directory:
                errors.append(f"{directory} index points to missing documents: {missing_from_directory}")

        for name in sorted(actual):
            path = ROOT / directory / name
            text = path.read_text(encoding="utf-8")
            _check_groups(path, text, groups, errors)
            if not _has_any(text, evidence_headings):
                errors.append(
                    f"{path.relative_to(ROOT)} missing an evidence/verification boundary section"
                )

    return errors


def contract_evidence(failures: list[str]) -> dict[str, object]:
    """Return the scanner identity and index-derived observation surface.

    Counts describe files present in the current checkout. They are deliberately derived at
    execution time so the scanner cannot silently retain an obsolete document-count contract.
    """
    return {
        "contract": "axiom_document_topology",
        "contract_version": CONTRACT_VERSION,
        "adr_index": "ADR/INDEX.md",
        "methodology_index": "METHODOLOGY/INDEX.md",
        "adr_count": len(_actual_members("ADR", "ADR-")),
        "methodology_count": len(_actual_members("METHODOLOGY", "METH-")),
        "failures": failures,
        "status": "failed" if failures else "passed",
    }


if __name__ == "__main__":
    failures = scan()
    evidence = contract_evidence(failures)
    print("AXIOM_CONSISTENCY_EVIDENCE=" + json.dumps(evidence, sort_keys=True))
    if failures:
        print("\n".join(failures))
        raise SystemExit(1)
    print("repository structural consistency: passed within documented scope")
