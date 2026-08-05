# Contributing

Axiom accepts small, reviewable changes that make contracts, evidence, and execution behavior more precise.

## Before changing code

1. Identify the affected ADR or methodology and its explicit boundary.
2. Define inputs, outputs, error behavior, and compatibility.
3. Add or update a regression test before changing a critical path.
4. Keep README, `FRONTEND/**`, `docs/**`, `RESEARCH/**`, Jules indexes, and `LICENSE` outside the change unless separately approved.

## Local verification

Use Python 3.12 or 3.14 and run:

```text
python -m unittest discover -s tests -v
python code_compliance.py
python scan_consistency.py
python scan_kl_divergence.py
```

The project intentionally has no runtime third-party Python dependency. Do not add a dependency without documenting ownership, threat surface, alternatives, and rollback.

## Claims and generated content

State whether material is observed, externally supported, proposed, or hypothetical. Cite primary sources with retrieval dates. AI-assisted contributions must follow `AI_USE_DISCLOSURE.md`; the contributor remains responsible for every line and verification result.

## Pull requests

Use a feature branch and the template. Include exact commands and results, security/privacy impact, and a reversible rollback. A failing or unrun required check prevents completion claims.