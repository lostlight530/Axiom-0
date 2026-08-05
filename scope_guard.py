"""Reject pull-request changes to separately owned paths."""
from __future__ import annotations
import argparse
import subprocess

PROTECTED_FILES = {"README.md", "INDEX.md", "PATCH_INDEX.md", "LICENSE"}
PROTECTED_PREFIXES = ("FRONTEND/", "docs/", "RESEARCH/")


def changed_paths(base_ref: str) -> list[str]:
    result = subprocess.run(["git", "diff", "--name-only", f"{base_ref}...HEAD"], check=True, capture_output=True, text=True, encoding="utf-8")
    return [line.strip().replace("\\", "/") for line in result.stdout.splitlines() if line.strip()]


def blocked_paths(paths: list[str], allowed_files: set[str] | None = None) -> list[str]:
    allowed = {path.replace("\\", "/") for path in (allowed_files or set())}
    normalized = [path.replace("\\", "/") for path in paths]
    return [
        path for path in normalized
        if path not in allowed
        and (path in PROTECTED_FILES or path.startswith(PROTECTED_PREFIXES))
    ]


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--base-ref", required=True)
    parser.add_argument("--allow-file", action="append", default=[])
    args = parser.parse_args()
    blocked = blocked_paths(changed_paths(args.base_ref), set(args.allow_file))
    if blocked:
        print("protected path changes:\n" + "\n".join(blocked))
        return 1
    print("protected path scope: passed")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())