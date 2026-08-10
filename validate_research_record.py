#!/usr/bin/env python3
"""Validate Axiom-0 daily and weekly research records on demand.

The validator is intentionally local and explicit: Jules can call it after writing a
manifest, but nothing in the repository schedules or auto-triggers it.
"""

from __future__ import annotations

import re
import sys
from datetime import date, timedelta
from pathlib import Path

ROOT = Path(__file__).resolve().parent

DAILY_RE = re.compile(r"^(\d{4}-\d{2}-\d{2})-pipeline-manifest\.md$")
WEEKLY_RE = re.compile(r"^(\d{4}-W\d{2})-weekly-manifest\.md$")

DAILY_SECTIONS = (
    "## ZECP Metadata",
    "## A1 Digital Archaeology",
    "## A2 Algebraic Audit",
    "## A3 Sandbox Stress Test",
    "## A4 Topology and Index Alignment",
)

WEEKLY_SECTIONS = (
    "## 审计窗口",
    "## 缺失 Daily Manifest",
    "## Top 5 Hard Signals",
    "## 假设生命周期表",
    "## 代码与规范对齐",
    "## 方法论覆盖",
    "## ADR 引用状态",
    "## Weekly D_KL",
    "## 污染节点",
    "## 未决问题",
    "## 禁止区域未修改声明",
    "## PR 合同",
)

A5_STATES = {
    "OBSERVED",
    "SUPPORTED_ONCE",
    "REPEATED",
    "COUNTEREXAMPLE_TESTED",
    "CANDIDATE",
    "UNRESOLVED",
    "DOWNGRADED",
    "REJECTED",
    "SOLIDIFIED",
}


def iso_week_window(week: str) -> tuple[date, date]:
    year_text, week_text = week.split("-W")
    start = date.fromisocalendar(int(year_text), int(week_text), 1)
    return start, start + timedelta(days=6)


def check_sections(path: Path, text: str, sections: tuple[str, ...]) -> list[str]:
    return [f"{path.name}: missing section {section}" for section in sections if section not in text]


def validate_daily(path: Path, identity: str, text: str) -> list[str]:
    errors = check_sections(path, text, DAILY_SECTIONS)
    if f"**Date (UTC):** {identity}" not in text:
        errors.append(f"{path.name}: ZECP Date (UTC) does not match filename")

    if "CONSISTENCY_CHECK_PASS_WITHIN_SCOPE" not in text:
        errors.append(f"{path.name}: A2 result is not scope-bounded")

    if "100 / 100 specified executions passed" not in text:
        errors.append(f"{path.name}: A3 does not preserve the bounded 100-run statement")

    if "Protected Paths" in text and "Unmodified" not in text:
        errors.append(f"{path.name}: protected-path status is not explicitly unmodified")

    dkl_lines = [line.strip() for line in text.splitlines() if "D_KL" in line]
    if dkl_lines and not any(re.search(r"D_KL[^\n]*[-+]?\d+(?:\.\d+)?", line) for line in dkl_lines):
        errors.append(f"{path.name}: D_KL is mentioned without an explicit numeric value")

    return errors


def validate_weekly(path: Path, identity: str, text: str) -> list[str]:
    errors = check_sections(path, text, WEEKLY_SECTIONS)
    start, end = iso_week_window(identity)
    window = f"{start} to {end}"
    if window not in text:
        errors.append(f"{path.name}: audit window must match {window}")

    if "PROTECTED_PATHS_UNMODIFIED" not in text:
        errors.append(f"{path.name}: protected-path declaration is missing")

    hypothesis_section = text.split("## 假设生命周期表", 1)
    if len(hypothesis_section) == 2:
        block = hypothesis_section[1].split("\n## ", 1)[0]
        for line in block.splitlines():
            if not line.startswith("- ") or ":" not in line:
                continue
            state = line.rsplit(":", 1)[-1].strip()
            if state and state not in A5_STATES:
                errors.append(f"{path.name}: invalid A5 hypothesis state {state!r}")

    if "Weekly D_KL" in text and "Explicit numeric D_KL" not in text and "NOT_COMPUTED" not in text and "MISSING_DATA" not in text:
        errors.append(f"{path.name}: Weekly D_KL lacks numeric evidence or an approved missing state")

    return errors


def validate(path: Path) -> list[str]:
    try:
        path.resolve().relative_to(ROOT)
    except ValueError:
        return [f"{path}: outside repository"]

    text = path.read_text(encoding="utf-8")
    daily = DAILY_RE.match(path.name)
    if daily:
        return validate_daily(path, daily.group(1), text)
    weekly = WEEKLY_RE.match(path.name)
    if weekly:
        return validate_weekly(path, weekly.group(1), text)
    return [f"{path.name}: unsupported research-record filename"]


def main(argv: list[str]) -> int:
    if len(argv) < 2:
        print("usage: python validate_research_record.py <manifest.md> [manifest.md ...]", file=sys.stderr)
        return 2

    errors: list[str] = []
    checked = 0
    for raw in argv[1:]:
        path = (ROOT / raw).resolve() if not Path(raw).is_absolute() else Path(raw).resolve()
        if not path.exists():
            errors.append(f"missing file: {raw}")
            continue
        checked += 1
        errors.extend(validate(path))

    if errors:
        print("Axiom research record validation failed:")
        for error in errors:
            print(f"- {error}")
        return 1

    print(f"Axiom research record validation passed for {checked} path(s).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
