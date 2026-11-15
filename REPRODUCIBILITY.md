> [!NOTE]
> **Current architecture interpretation — 2026-09-18**
> - **Subject class:** `METHOD / PROVENANCE CONTRACT`
> - **Role:** Current reproducibility contract: **Reproducibility**
> - **Authority:** Repository-native authority for separating publication identity, Git revision, environment, input, execution and actual reproduction evidence
> - **Current meaning:** Reproducibility is revision- and execution-bound. Archive/DOI identity, code identity and a declared procedure are distinct from an observed rerun and comparison
> - **Evidence / implementation boundary:** DOI, archive presence, commit identity, configuration, checker definition or later success cannot self-award historical execution or independent reproduction
> - **Cross-document relation:** Specification owns behavior; Methodology owns procedures; dated evidence owns observed runs; release metadata owns publication identity without upgrading validation
> - **Update trigger:** Update when run identity, comparison criteria, environment requirements or archive/revision semantics materially change
> - **Preservation rule:** Historical execution states remain historical even when later revisions become more reproducible

# Reproducibility

> **Current bilingual reading note / 当前双语阅读说明（2026-11-13）**  
> **中文**：复现以提交、环境、输入、步骤和结果对照为边界，原始 Jules 与新增 GPT Native 证据不得混为一次运行；本段是文档解释补充，不替代当前实现、具体测试或历史证据  
> **English**: Reproduction requires a pinned revision, environment, input, procedure and result comparison; Jules and later GPT Native evidence are separate runs. This is an interpretive guide, not a replacement for current code, individual tests, or dated evidence


A result is reproducible only within its recorded input, revision, environment, configuration, and tolerance.

## Minimum record

Retain the Git commit SHA; Python major/minor/patch and operating system; command argument array; sanitized fixture or canonical SHA-256 digest; threshold/configuration version; UTC start/end time; exit code; artifact digest; and untested boundary. Never retain credentials or unnecessary private payloads.

### 长期科研实验的可比较条件 / Comparable conditions for longitudinal research

同一 repo 或同一天的结果并不自动可比较；应固定 commit、运行器／Python 版本、fixture digest、命令、作用域、时间、失败及未验证范围；研究 A1–A6、Independent GPT 审计与软件 version DOI 是不同层，重放应给出可核对的差异，不能以历史成功直接背书新的 `main`

Same repository or calendar date does not make results comparable. Pin commit, runner/Python version, fixture digest, command, scope, time, failure and untested range. Research A1–A6, independent audits and software version DOIs are separate objects; replay must show comparable differences rather than using historical success to certify new `main`

## Verification matrix

The repository currently has no GitHub Actions workflow that compiles or tests the Python implementation. Python 3.12 and 3.14 may be compatibility targets, but an environment is **verified** only when a retained run records its exact interpreter version, revision, command, and exit code. Local verification is not GitHub CI. The Pages workflow builds the presentation surface and is not evidence for Python/runtime, research, or document semantics.

Historical Jules entry paths remain compatibility surfaces, but a path being invoked does not establish that its contract is current. Retain the contract identity emitted by `scan_consistency.py` with each run. `test_100.sh` repeats a bounded fixture; it checks stable canonical state, not byte-identical wall-clock events or model determinism.

## Archived software publication and exact revision identity

The repository has a public Zenodo software publication identified by DOI `10.5281/zenodo.22791103` and publication date 2026-09-16.

That DOI is a stable identifier for the archived software publication. It is not, by itself, a substitute for the exact Git commit, interpreter, environment, fixture, command, and tolerance needed to reproduce a revision-specific result.

Keep these identities distinct:

```text
Zenodo publication identity != current main revision
Git commit identity != successful execution
successful execution != scientific validity
archive presence != reproduction
later main state != archived publication contents
```

When a result depends on exact implementation state, cite or record the Git revision in addition to the DOI. Do not infer an exact archive-to-commit mapping unless that mapping is explicitly retained and verified by the publication or repository metadata.

## Interpreting failure

First reproduce at the failing commit. Separate environment drift, invalid fixture, flaky external dependency, contract regression, and an outdated expectation. This reference code performs no network calls; a network-dependent extension must capture service/model version and retry/budget policy separately.

Passing evidence does not establish performance, security, or correctness outside the tested cases. Record all skipped or unavailable checks.

## Current reference-run replay calibration — 2026-11-15

This section describes the source currently on merged \`main\` at the inspection cut. It is a forward interpretation of the reference implementation, **not** a restatement of an August execution result or a new scanner run.

### The T-09 data path is narrower than its name

In \`CODE/nexus_core.py\`, \`AxiomOrchestrator._dehydration_pipeline(raw_input)\` returns \`canonical_payload\` and \`input_digest\`. It does **not** insert a \`distribution\` field into the returned state. The T-09 branch then obtains \`state.get("distribution", [0.1, 0.2, 0.7])\`, compares it with \`[0.1, 0.2, 0.7]\`, and records the resulting KL value.

Consequently, the currently composed ten-stage \`run_continuum(input_payload)\` path does not demonstrate that arbitrary caller-supplied distributions are checked at T-09. A passing run can establish that the **fixed identity fixture** passed this comparison; it is not evidence of input-sensitive divergence gating for caller data. This applies even if the original input object contains a key named \`distribution\`.

The separately exposed \`calculate_kl_divergence(p, q)\` delegates to the real \`kl_divergence\` implementation for explicit vectors. Evidence from that direct path, the named \`scan_kl_divergence.py\` fixture cases, and the composed T-09 path must be attributed separately. An intended future input-aware T-09 contract would require an explicit implementation change and regression coverage, not documentary promotion.

### Replay identity and comparison dimensions

| Surface | What can be compared | What cannot be inferred |
| --- | --- | --- |
| \`canonical_payload\` and \`input_digest\` | Canonical serialization and digest for a specified input | Input authority, semantic validity, external effects |
| \`state.coherence.kl_nats\` | T-09 reference fixture comparison under a named source revision | Arbitrary input-sensitive KL enforcement |
| \`events\` | Node sequence, per-node status and the recorded observation values | Byte-identical events across reruns |
| \`run_id\` | Identity of the returned event-bearing object | A stable input-only run key, because events include \`observed_at\` timestamps |
| \`test_100.sh\` | The exact fixed-fixture assertions exercised by the script | Universal determinism, scheduler execution or distributed convergence |
| Separate scanners | Their own inputs, exit codes and declared output contracts | A completed native A2/A3/A4 pipeline by mere invocation of another check |

For a meaningful replay comparison, pin the code commit, interpreter, fixture bytes, configuration and actual command; compare invariant fields separately from timestamp-bearing events; record the command's exit code and any observed mismatch. Do not merge local \`unittest\`, scanner evidence and Native Plasma stages into one PASS label.

### Targeted verification entry points

From a checkout of the exact revision under review, relevant available commands include \`python -m unittest discover -s tests -v\`, \`python scan_kl_divergence.py\`, \`python scan_consistency.py\`, and \`bash test_100.sh\`. Their presence here is a **procedure**, not a statement that they were executed for this documentary update. Record \`NOT_EXECUTED\` for every unrun check, preserve failing outputs, and retain the original Native manifest state separately.

The only artifact changed by this calibration is this current reproducibility document. No reference-code behavior, automation contract, historical Daily record, or published archive is amended.
