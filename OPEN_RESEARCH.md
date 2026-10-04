# Open Research / 开放科研

Status: durable open-research production guide
Scope: repository-level research positioning, research-production method, scholarly-metadata boundaries, and semantic-drift governance

## Authority

This file owns the durable open-research method. It does not replace implementation, active specification, ADRs, methodology, evidence, maintenance, release, or historical authority.

```text
current repository truth
→ implementation / specification / methodology / evidence
→ OPEN_RESEARCH.md
→ RESEARCH_TEMPLATE.md
→ prospective research records
→ scholarly metadata / downstream indexes
```

A stricter repository-native contract wins.

## Canonical positioning

**Canonical Type:** Executable reference architecture and bounded-evaluation research software

**One-line positioning:** Dependency-free Python reference research software for explicit data contracts, canonicalization, measurable state transitions, validation, and reproducible repository checks

**Primary domains:** research software; data contracts; canonicalization; state transitions; software validation; reproducibility

**Non-goals:** mathematical axiom system; foundation model; autonomous agent; universal truth engine; general safety proof

```text
External Classification != Repository Identity
Inferred Topic != Canonical Research Domain
Keyword Match != Project Purpose
Scholarly Graph Representation != Repository Self-Definition
```

## Research-production method

The ten-repository system shares an epistemic skeleton, not a single implementation or research method. A substantive research unit should make recoverable, where applicable: research question; falsifiable hypothesis/bounded judgment; source/evidence identity; fixed revision/environment/object identity; procedure actually executed; raw observation; counterexample/disconfirming evidence; bounded conclusion; research increment; and retest condition.

Cadence completion does not imply scientific progress. Negative, partial, degraded, unknown, or refuted results remain valid research outputs when evidenced.

## Repository-specific method

Record when relevant
- contract or implementation surface
- canonical input and fixture identity
- Git revision and branch/ref snapshot
- Python/environment identity
- transition or divergence metric identity
- executed command and raw result
- validation boundary and explicit non-claim

A method or checker can support only the property it actually observes

Executable behavior remains owned by implementation and active specification/methodology contracts. Periodic research artifacts do not override those authorities.

## Evidence and execution discipline

```text
source code != executed behavior
test source != test execution
fixture result != global convergence
specification != runtime evidence
raw observation != interpretation
```

Unknown, unavailable, unexecuted, and unobserved states stay explicit. Do not promote bounded evaluation into universal correctness, safety, convergence, or deployment claims.

## Open-science file responsibilities

- `README.md` — public orientation and stable entry points.
- `OPEN_RESEARCH.md` — durable open-research method and positioning.
- `RESEARCH_TEMPLATE.md` — prospective bounded research-record template.
- `AUTHORS`, `LICENSE`, `CITATION.cff`, `codemeta.json` — authorship, reuse, and scholarly/software metadata.
- `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md` — contribution, community, and security governance.
- `RELEASE_POLICY.md` — release/archive semantics.
- `.github/ISSUE_TEMPLATE/**` and pull-request template — reviewable change intake.

These support openness and reuse; they do not establish scientific validity.

## Scholarly metadata discipline

Before future scholarly-metadata publication or revision, preserve Canonical Type, One-line Positioning, Primary Domains, Non-goals, accurate structured subjects where supported, and 5–7 defining keywords. Do not rewrite precise technical descriptions for classifier optimization or keyword stuffing.

## Shadow classification

A pre-publication shadow check may compare candidate title + abstract/description against downstream topic/keyword inference.

```text
ALIGNED
PARTIALLY_ALIGNED
MISCLASSIFIED
CLASSIFIER_NOISE
```

Execution state is separately `RUN` or `NOT_RUN`.

Repair owning metadata only when repository wording is genuinely ambiguous. Otherwise record downstream noise without changing repository identity.

## Semantic drift audit

Compare repository canonical positioning with `CITATION.cff`, CodeMeta, archive/DOI metadata, OpenAIRE, and OpenAlex representations.

- **CANONICAL_DRIFT** — repository-owned positioning surfaces disagree.
- **TRANSPORT_DRIFT** — archival/DOI projection alters coherent repository metadata.
- **DERIVATION_DRIFT** — downstream inference drifts despite coherent upstream metadata.
- **VERSION_SKEW** — archived/versioned scholarly representations are confused with later current `main`.

`DERIVATION_DRIFT != REPOSITORY_DEFECT`.

## History and correction

```text
CURRENT_STATE != TASK_TIME_STATE
LATER_SUCCESS != EARLIER_SUCCESS
PUBLICATION_IDENTITY != CURRENT_MAIN
RESEARCH_PRODUCTION != MAINTENANCE != PERIODIC_AUDIT
```

Preserve point-in-time history. Correct current interpretation through explicit correction, reconciliation, or a new timepoint record.

## Contribution and review

Use `OPEN_RESEARCH.md` for method/positioning changes and `RESEARCH_TEMPLATE.md` for new bounded research records. State the owning surface, evidence actually inspected or executed, unresolved boundaries, and historical impact. Do not retrofit historical artifacts merely to match the current template.

## Permanent boundary

```text
research record != capability claim
publication != validation
usage != adoption
citation != reproduction
metadata consistency != scientific correctness
external indexing != repository self-definition
```
