# Axiom-0

A dependency-free Python reference for explicit data contracts, measurable transitions, and reproducible repository checks. / 一个以显式数据契约、可度量状态转换和可复现仓库检查为核心的无第三方运行时依赖 Python 参考实现。

## 1. 仓库目的与非目标 / Repository purpose and non-goals

**[CN]** Axiom-0 演示规范化 JSON、SHA-256 摘要、概率分布校验、以 nat 为单位的 KL 散度、带校验钩子的事务式状态转换，以及一个十阶段事件记录样例。它是可检查的参考实现，不是基础模型、自主智能体、安全系统、授权层、沙箱、分布式调度器或数据库。

**[EN]** Axiom-0 demonstrates canonical JSON, SHA-256 digests, probability-distribution validation, KL divergence measured in nats, transactional state transitions with validation hooks, and a ten-stage event-recorded fixture. It is an inspectable reference implementation, not a foundation model, autonomous agent, safety system, authorization layer, sandbox, distributed scheduler, or database.

## 2. 已实现能力 / Implemented capabilities

| 能力 / Capability | 实现路径 / Implementation | 可执行契约 / Executable contract |
| --- | --- | --- |
| 规范化与摘要 / Canonicalization and digests | [`CODE/contracts.py`](CODE/contracts.py), [`tests/test_contracts.py`](tests/test_contracts.py) | 排序映射键、保留 Unicode、拒绝非有限数，并对 UTF-8 规范字节计算 SHA-256。 / Sorts mapping keys, preserves Unicode, rejects non-finite numbers, and computes SHA-256 over canonical UTF-8 bytes. |
| 分布与 KL 散度 / Distributions and KL divergence | [`CODE/contracts.py`](CODE/contracts.py), [`tests/test_contracts.py`](tests/test_contracts.py) | 校验非空、非负、有限且总质量大于零的序列；计算 D_KL(P||Q)，单位为 nat。 / Validates non-empty, non-negative, finite sequences with positive mass and computes D_KL(P||Q) in nats. |
| 状态适配 / State adaptation | [`CODE/liquid_morphing.py`](CODE/liquid_morphing.py), [`tests/test_morphing.py`](tests/test_morphing.py) | 串行化并发转换，仅在准备和校验成功后提交状态，失败时保留原状态。 / Serializes concurrent transitions, commits only after preparation and validation succeed, and preserves prior state on failure. |
| 十阶段样例 / Ten-stage fixture | [`CODE/nexus_core.py`](CODE/nexus_core.py), [`tests/test_nexus.py`](tests/test_nexus.py) | 成功运行按顺序产生 T-01 至 T-10，并返回运行标识、状态、事件和限制。 / A successful run emits T-01 through T-10 in order and returns a run ID, state, events, and limitations. |
| 仓库边界 / Repository boundaries | [`scope_guard.py`](scope_guard.py), [`tests/test_scope_guard.py`](tests/test_scope_guard.py) | 默认拒绝受保护路径，并仅接受调用方显式传入的精确文件例外。 / Denies protected paths by default and accepts only exact-file exceptions explicitly supplied by the caller. |

## 3. 十阶段参考流程 / Ten-stage reference flow

**[CN]** `AxiomOrchestrator.run_continuum(input)` 的成功样例按 T-01 到 T-10 记录有序事件。T-04 使用注入的指标，T-09 将声明的分布与样例基线比较，并按调用方配置的限制失败关闭。输出时间戳会变化；规范化输入摘要可用于比较相同输入字节。阶段名称是项目词汇，不表示认知、对齐或安全保证。

**[EN]** A successful `AxiomOrchestrator.run_continuum(input)` fixture records ordered events from T-01 through T-10. T-04 uses injected metrics; T-09 compares a declared distribution with the fixture baseline and fails closed at the caller-configured limit. Output timestamps vary, while canonical input digests can compare identical input bytes. Stage names are project vocabulary and do not imply cognition, alignment, or safety guarantees.

## 4. 验证与运行环境 / Verification and runtime

**[CN]** 以下命令是本地可运行的标准库验证入口。仓库当前没有自动执行 Python 测试的 GitHub Actions 工作流；只有实际记录了提交、解释器版本、命令和退出码的运行，才构成该环境的验证证据。成功结果只适用于被测提交、环境与样例。

**[EN]** The commands below are locally runnable verification entry points for the standard-library implementation. The repository currently has no GitHub Actions workflow that automatically runs the Python tests; only a run that retains its revision, interpreter version, command, and exit code is evidence for that environment. A successful result applies only to the tested revision, environment, and fixtures.

```bash
python -m compileall -q CODE tests *.py
python -m unittest discover -s tests -v
```

## 5. 前端与 Pages 边界 / Frontend and Pages boundary

**[CN]** [`FRONTEND/`](FRONTEND/) 是独立的 React/Vite 展示层，不是 Python 参考库的运行时依赖。当前 Pages deployment workflow 使用 Node 24 和已提交锁文件执行安装与构建，并将构建产物写入 [`docs/`](docs/) 后上传 Pages；这个 deployment build 不是 Python runtime 或研究结论的测试证据。

**[EN]** [`FRONTEND/`](FRONTEND/) is a separate React/Vite presentation layer and is not a runtime dependency of the Python reference library. The current Pages deployment workflow uses Node 24 and the committed lockfile, writes the build output to [`docs/`](docs/), and uploads that output to Pages. This deployment build is not test evidence for the Python runtime or research claims.

```bash
cd FRONTEND
npm ci
npm run lint
npm run build
```

## 6. 规范、证据、安全与复现 / Specification, evidence, security, and reproducibility

- [工程规范 / Engineering specification](SPECIFICATION.md)：实现接口、错误行为与仓库兼容边界。 / Implemented interfaces, error behavior, and repository compatibility boundaries.
- [证据基线 / Evidence baseline](EVIDENCE_BASELINE.md)：外部资料、检索日期与本地结论的适用范围。 / External sources, retrieval dates, and the scope of local conclusions.
- [复现要求 / Reproducibility](REPRODUCIBILITY.md)：提交、环境、命令、样例摘要和未测试边界的最小记录。 / Minimum records for revisions, environments, commands, fixture digests, and untested boundaries.
- [安全策略 / Security policy](SECURITY.md)：私密报告流程、受支持代码与调用方责任。 / Private reporting, supported code, and caller responsibilities.
- [长期维护契约 / Long-term maintenance contract](GOVERNANCE/MAINTENANCE.md)：证据继承、失败关闭、历史批注与责任边界。 / Evidence inheritance, fail-closed behavior, historical calibration, and ownership boundaries.

## 7. 限制 / Limitations

**[CN]** 通过样例和检查不能证明语义真值、模型或智能体对齐、性能、通用正确性或生产安全。规范化摘要证明字节级契约，不证明语义等价；KL 散度描述声明分布之间的差异，不判断事实真伪；阈值属于调用方策略。身份、授权、隔离、网络策略、配额、密钥管理、持久幂等和事件响应必须由集成方提供并单独验证。

**[EN]** Passing fixtures and checks do not establish semantic truth, model or agent alignment, performance, general correctness, or production safety. Canonical digests establish a byte-level contract, not semantic equivalence; KL divergence describes differences between declared distributions, not factual truth; thresholds are caller policy. Integrators must provide and separately verify identity, authorization, isolation, network policy, quotas, secret management, durable idempotency, and incident response.
