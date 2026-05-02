# ADR-063 Human AI Postprocessing Boundary

## 状态 / Status
**已采纳 (Accepted)**

- **[CN]**: 日期：2026-04-18
  - **[EN]**: Date: 2026-04-18
- **[CN]**: 决策者：lostlight530 + AI副驾驶
  - **[EN]**: Deciders: lostlight530 + AI copilot
- **[CN]**: 范围：Axiom-0 工作流治理
  - **[EN]**: Scope: Axiom-0 workflow governance

## 背景 / Context

> **[CN]**: 当前工作流并不追求第一步就得到保守的可引用报告
> **[EN]**: Current workflows do not pursue conservative, citable reports as a first step
> **[CN]**: 而是追求灵感密度
> **[EN]**: Instead, pursue the density of inspiration
> **[CN]**: 这意味着生成层与定型层必须明确分开
> **[EN]**: This means that the generation layer must be clearly separated from the training layer

## 决策 / Decision

> **[CN]**: 采用双相工作流
> **[EN]**: Adopt a biphasic workflow

> **[CN]**: A阶段神话一代
> **[EN]**: Phase A  Mythic Generation
> **[CN]**: B相后处理和脱水
> **[EN]**: Phase B  Postprocessing and Dehydration

> **[CN]**: 职责划分如下
> **[EN]**: The responsibilities are divided as follows

### Phase A
> **[CN]**: 由自动化系统负责
> **[EN]**: Responsible for the automation system

- **[CN]**: 搜索与混合拼装
  - **[EN]**: Search and mix and assemble
- **[CN]**: 命名与抽象
  - **[EN]**: Naming and abstraction
- **[CN]**: 日度白皮书草拟
  - **[EN]**: Daily white paper drafting
- **[CN]**: 假说生成
  - **[EN]**: hypothesis generation
- **[CN]**: 工程映射喷流
  - **[EN]**: Engineering Mapping Jets

### Phase B
> **[CN]**: 由人类与 AI 协同负责
> **[EN]**: A collaborative effort between humans and AI

- **[CN]**: 纠错
  - **[EN]**: Correction
- **[CN]**: 去冗余
  - **[EN]**: Remove redundancy
- **[CN]**: 可执行化
  - **[EN]**: Executable
- **[CN]**: 归档
  - **[EN]**: Archive
- **[CN]**: 编号化
  - **[EN]**: Numbering
- **[CN]**: 索引化
  - **[EN]**: Indexing

## Rationale

- **[CN]**: 灵感喷流与文档定稿是两种不同任务
  - **[EN]**: Streaming ideas and finalizing documents are two different tasks
- **[CN]**: 强行合并只会同时损失速度和质量
  - **[EN]**: Forced merging will only lose both speed and quality
- **[CN]**: Axiom-0 需要让生成与收敛两条链同时存在
  - **[EN]**: Axiom-0 requires both generation and convergence chains to exist at the same time

## Consequences

> **[CN]**: 正向结果
> **[EN]**: positive result

- **[CN]**: 人机分工清晰
  - **[EN]**: Clear division of labor between man and machine
- **[CN]**: 能保留灵感爆发强度
  - **[EN]**: Can retain the intensity of inspiration burst
- **[CN]**: 能逐步形成稳定资产
  - **[EN]**: Can gradually form stable assets

> **[CN]**: 代价
> **[EN]**: cost

- **[CN]**: 需要维护 Phase A 与 Phase B 的接口
  - **[EN]**: The interface between Phase A and Phase B needs to be maintained
- **[CN]**: 某些内容会以中间态存在一段时间
  - **[EN]**: Some content will exist in an intermediate state for a while

## Follow-up

- **[CN]**: 在 `AUTOMATION/output-contracts.md` 中写清中间态格式
  - **[EN]**: Write the intermediate format in `AUTOMATION/output-contracts.md`
- **[CN]**: 在 `METHODOLOGY/post-processing-and-dehydration.md` 中写清后处理规则
  - **[EN]**: Write the post-processing rules in `METHODOLOGY/post-processing-and-dehydration.md`
