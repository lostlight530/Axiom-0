# Axiom README and Dependency Repair Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace Axiom's obsolete narrative, repair exact dependency versions, and make protected-path automation test the dependencies it maintains.

**Architecture:** Preserve the dependency-free Python reference and stable frontend source. Add exact-file ownership exceptions, a real frontend verification job, immutable action upgrades, one combined npm lock update, and an evidence-scoped bilingual README.

**Tech Stack:** Python 3.12/3.14, unittest, GitHub Actions, Node 24, npm, React/Vite, Markdown.

## Global Constraints

- Do not modify `FRONTEND/src/**`, `docs/**`, `RESEARCH/**`, Pages content, or Jules entrypoints.
- Keep Python runtime dependencies empty.
- Permit protected files by exact path only; never permit all `FRONTEND/**`.
- Use full immutable action SHAs.
- Implement on `codex/scientific-closure-20260805`; do not restore deleted Dependabot PRs.

---

### Task 1: Exact-file protected-path allowances

**Files:**
- Modify: `scope_guard.py`
- Create: `tests/test_scope_guard.py`

**Interfaces:**
- Produces: `blocked_paths(paths: list[str], allowed_files: set[str]) -> list[str]`
- Produces: repeatable CLI option `--allow-file PATH`

- [ ] **Step 1: Write failing unit tests**

Test default denial for `README.md` and both package files, exact allowance for each, denial for `FRONTEND/src/App.tsx`, and slash normalization.

- [ ] **Step 2: Run the focused tests**

Run: `python -m unittest tests.test_scope_guard -v`  
Expected: FAIL because `blocked_paths` and `--allow-file` do not exist.

- [ ] **Step 3: Implement the pure decision function and CLI option**

Use:
```python
def blocked_paths(paths: list[str], allowed_files: set[str] | None = None) -> list[str]:
    allowed = {p.replace("\\", "/") for p in (allowed_files or set())}
    normalized = [p.replace("\\", "/") for p in paths]
    return [
        p for p in normalized
        if p not in allowed
        and (p in PROTECTED_FILES or p.startswith(PROTECTED_PREFIXES))
    ]
```
Parse `--allow-file` with `action="append"`; allowances do not change the protected constants.

- [ ] **Step 4: Re-run focused and repository tests**

Run: `python -m unittest tests.test_scope_guard tests.test_repository_contract -v`  
Expected: PASS.

- [ ] **Step 5: Commit through the cloud branch**

Commit message: `test: enforce exact protected-path allowances`.

### Task 2: Workflow dependency and frontend verification

**Files:**
- Modify: `.github/workflows/verify.yml`
- Modify: `.github/workflows/deploy.yml`

**Interfaces:**
- Consumes: `scope_guard.py --allow-file`
- Produces: Python matrix and independent `frontend` job

- [ ] **Step 1: Add a repository-contract test for action SHAs and workflow commands**

Assert checkout `3d3c42e5aac5ba805825da76410c181273ba90b1`, setup-python `5fda3b95a4ea91299a34e894583c3862153e4b97`, setup-node `820762786026740c76f36085b0efc47a31fe5020`, and the commands `npm ci`, `npm run lint`, `npm run build`.

- [ ] **Step 2: Verify the test fails on the old workflows**

Run: `python -m unittest tests.test_repository_contract -v`  
Expected: FAIL on old SHAs and missing frontend PR verification.

- [ ] **Step 3: Update immutable actions and add label/actor allowances**

The scope step builds an argument array. `scope:approved-readme` allows only `README.md`; `scope:approved-dependencies` or `dependabot[bot]` allows only `FRONTEND/package.json` and `FRONTEND/package-lock.json`.

Add a Node 24 job that checks out with credentials disabled, runs `npm ci`, lint, and build in `FRONTEND`.

- [ ] **Step 4: Run contract tests**

Run: `python -m unittest tests.test_repository_contract tests.test_scope_guard -v`  
Expected: PASS.

- [ ] **Step 5: Commit**

Commit message: `ci: verify owned dependency updates`.

### Task 3: Consolidated npm update

**Files:**
- Modify: `FRONTEND/package.json`
- Modify: `FRONTEND/package-lock.json`

**Interfaces:**
- Produces: one lockfile-consistent dependency set

- [ ] **Step 1: Set exact requested ranges**

Set Recharts `^3.10.1`, globals `^17.8.0`, `@vitejs/plugin-react` `^6.0.5`, and PostCSS `^8.5.25`.

- [ ] **Step 2: Reconstruct the lockfile from the closed PR head blobs**

Merge only the package records affected by PRs 179–182: root dependency entries, Recharts/Immer/Reselect, globals, Vite plugin/Rolldown pluginutils, PostCSS/Nanoid. Remove the superseded nested Immer and pluginutils records exactly as their generated lockfiles did.

- [ ] **Step 3: Validate in cloud**

Run in Actions: `npm ci && npm run lint && npm run build` from `FRONTEND`.  
Expected: exit 0 with no lockfile rewrite.

- [ ] **Step 4: Commit**

Commit message: `chore(deps): consolidate verified frontend updates`.

### Task 4: Dependabot grouping

**Files:**
- Modify: `.github/dependabot.yml`
- Test: `tests/test_repository_contract.py`

- [ ] **Step 1: Add a failing YAML text-contract test**

Require one GitHub Actions group and one npm minor/patch group; major npm updates remain separate.

- [ ] **Step 2: Update the configuration and run the test**

Run: `python -m unittest tests.test_repository_contract -v`  
Expected: PASS.

- [ ] **Step 3: Commit**

Commit message: `chore: group compatible dependency updates`.

### Task 5: Evidence-scoped root README

**Files:**
- Modify: `README.md`
- Test: `tests/test_repository_contract.py`

- [ ] **Step 1: Add failing narrative/path tests**

Reject the obsolete phrases `physical shackles`, `absolute convergent`, `cryptographically signed ADRs`, `物理枷锁`, `绝对收敛`, and `密码学签名`. Require links to `SPECIFICATION.md`, `EVIDENCE_BASELINE.md`, `REPRODUCIBILITY.md`, and `SECURITY.md`.

- [ ] **Step 2: Rewrite the bilingual README**

Use the design's seven-section structure. Describe only implemented contracts, current test commands, frontend boundary, and explicit non-goals.

- [ ] **Step 3: Run all Python checks**

Run: `python -m compileall -q CODE tests *.py && python -m unittest discover -s tests -v`  
Expected: PASS.

- [ ] **Step 4: Commit**

Commit message: `docs: align Axiom README with executable evidence`.

### Task 6: Cloud PR and final evidence

**Files:**
- No product file changes.

- [ ] **Step 1: Create labels and one PR**

Create `scope:approved-readme` and `scope:approved-dependencies`, apply both, and open one PR from the implementation branch.

- [ ] **Step 2: Wait for all checks**

Required evidence: Python 3.12/3.14 PASS, frontend PASS, CodeQL non-failing, and diff contains no out-of-scope path.

- [ ] **Step 3: Merge and verify main**

Merge only after checks pass; verify the main push and Pages deployment succeed. Roll back with one merge-commit revert if either main workflow fails.
