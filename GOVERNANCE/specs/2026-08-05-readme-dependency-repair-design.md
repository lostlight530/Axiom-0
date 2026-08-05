# Axiom README and Dependency Repair Design

Date: 2026-08-05
Status: approved design baseline
Base: `main@4f878de230e4f790d93ce530fa7662517816fe5f`

## Objective

Replace the obsolete root narrative with a bilingual, evidence-scoped description of the implemented reference contracts, and repair dependency maintenance without changing frontend source, Pages output, Jules research paths, or historical entrypoints.

## Verified starting point

The engineering specification defines a dependency-free Python reference for canonical serialization, distribution validation, KL divergence, transactional adaptation, and a ten-stage fixture. The root README instead claims physical irreversibility, absolute convergence, cryptographic signing, and industrial safety properties that the repository does not implement.

Seven Dependabot pull requests were closed without merge. The three action updates passed both Python jobs. The four frontend updates failed only because `scope_guard.py` rejects every `FRONTEND/**` change before any npm build runs. There is therefore no evidence that those npm changes are incompatible.

## README design

The replacement README will contain:

1. repository purpose and explicit non-goals;
2. implemented capability matrix with exact paths;
3. ten-stage reference-flow summary without cognition or safety claims;
4. verification commands and supported Python versions;
5. frontend/Pages boundary;
6. evidence, reproducibility, security, and specification links;
7. limitations stating that passing fixtures do not establish semantic truth, agent alignment, performance, or production safety.

Chinese and English sections must make equivalent claims. Mathematical terms retain units, definitions, and caller-controlled thresholds.

## Dependency design

Update immutable action references to the verified official tags:

- `actions/checkout` 7.0.1 at `3d3c42e5aac5ba805825da76410c181273ba90b1`;
- `actions/setup-python` 7.0.0 at `5fda3b95a4ea91299a34e894583c3862153e4b97`;
- `actions/setup-node` 7.0.0 at `820762786026740c76f36085b0efc47a31fe5020`.

Combine the closed Dependabot npm patches into one lockfile-consistent update:

- Recharts 3.10.1;
- globals 17.8.0;
- `@vitejs/plugin-react` 6.0.5;
- PostCSS 8.5.25.

No React major migration or frontend source edit is included.

## Ownership and automation design

`scope_guard.py` gains repeatable exact-file allowances. Default behavior remains deny. The workflow may grant:

- `README.md` only when the PR carries the maintainer-applied `scope:approved-readme` label;
- `FRONTEND/package.json` and `FRONTEND/package-lock.json` only for `dependabot[bot]` or this approved maintenance PR.

No prefix-wide frontend exemption is permitted. A dedicated frontend job runs `npm ci`, `npm run lint`, and `npm run build` on relevant PRs. Dependabot groups compatible minor/patch updates by ecosystem to reduce duplicate PRs while leaving major updates separate.

## Verification and acceptance

Python 3.12 and 3.14 compile, contract tests, historical entrypoints, and scope-guard tests must pass. The frontend must install from the committed lockfile, lint, type-check, and build on Node 24. Action pins must resolve to the declared official tags. The README must pass link/path checks and contain none of the superseded absolute claims.

## Non-goals and rollback

No homepage, `FRONTEND/src/**`, `docs/**`, `RESEARCH/**`, Jules task, package publication, or runtime Python dependency change. Delivery uses one PR from `codex/scientific-closure-20260805`. Rollback is a merge-commit revert; the prior dependency and README states remain in Git history.
