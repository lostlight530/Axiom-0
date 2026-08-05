"""Fail-closed structural consistency scan kept for Jules compatibility."""
from __future__ import annotations
from pathlib import Path

ROOT = Path(__file__).resolve().parent
ADR_HEADINGS = ("## 状态 / Status", "## 背景 / Context", "## 决策 / Decision", "## 后果 / Consequences", "## 验证 / Verification")
METH_HEADINGS = ("## 输入 / Inputs", "## 步骤 / Procedure", "## 输出 / Outputs", "## 失败条件 / Failure conditions")


def scan() -> list[str]:
    errors: list[str] = []
    adrs = sorted((ROOT / "ADR").glob("ADR-*.md"))
    methods = sorted((ROOT / "METHODOLOGY").glob("METH-*.md"))
    if len(adrs) != 15:
        errors.append(f"ADR count is {len(adrs)}, expected 15")
    if len(methods) != 14:
        errors.append(f"methodology count is {len(methods)}, expected 14")
    for path, headings in [(p, ADR_HEADINGS) for p in adrs] + [(p, METH_HEADINGS) for p in methods]:
        text = path.read_text(encoding="utf-8")
        for heading in headings:
            if heading not in text:
                errors.append(f"{path.relative_to(ROOT)} missing {heading}")
    return errors


if __name__ == "__main__":
    failures = scan()
    if failures:
        print("\n".join(failures))
        raise SystemExit(1)
    print("repository consistency: passed")