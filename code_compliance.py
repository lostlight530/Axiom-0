"""Fail-closed source checks kept at the historical Jules entry path."""
from __future__ import annotations
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent
TARGETS = [ROOT / "CODE", ROOT / "tests"]
RULES = {
    "unstable builtin hash": re.compile(r"(?<![\w.])hash\("),
    "wall-clock epoch": re.compile(r"\btime\.time\("),
    "exception detail leak": re.compile(r"\bstr\(\s*(?:e|exc|error)\s*\)"),
    "global logging configuration": re.compile(r"logging\.basicConfig\("),
    "simulated transition sleep": re.compile(r"asyncio\.sleep\("),
}


def violations() -> list[str]:
    found: list[str] = []
    for directory in TARGETS:
        for path in sorted(directory.rglob("*.py")):
            for number, line in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
                for label, pattern in RULES.items():
                    if pattern.search(line):
                        found.append(f"{path.relative_to(ROOT)}:{number}: {label}")
    return found


if __name__ == "__main__":
    errors = violations()
    if errors:
        print("\n".join(errors))
        raise SystemExit(1)
    print("code compliance: passed")