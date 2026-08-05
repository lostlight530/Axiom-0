"""Reject pull-request changes to separately owned paths."""
from __future__ import annotations
import argparse
import subprocess

PROTECTED_FILES = {"README.md", "INDEX.md", "PATCH_INDEX.md", "LICENSE"}
PROTECTED_PREFIXES = ("FRONTEND/", "docs/", "RESEARCH/")


def changed_paths(base_ref: str) -> list[str]:
    result = subprocess.run(["git", "diff", "--name-only", f"{base_ref}...HEAD"], check=True, capture_output=True, text=True, encoding="utf-8")
    return [line.strip().replace("\\", "/") for line in result.stdout.splitlines() if line.strip()]


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--base-ref", required=True)
    args = parser.parse_args()
    blocked = [path for path in changed_paths(args.base_ref) if path in PROTECTED_FILES or path.startswith(PROTECTED_PREFIXES)]
    if blocked:
        print("protected path changes:\n" + "\n".join(blocked))
        return 1
    print("protected path scope: passed")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())