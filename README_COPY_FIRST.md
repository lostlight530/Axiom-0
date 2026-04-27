# Axiom-0 Context Absorption Pack  Non Automation Slice

## 用途

> **[CN]**: 这个单文件总包用于把当前对话中形成的稳定共识 直接吸收进 Axiom-0 仓库
> **[EN]**: This single-file turnkey is used to absorb the stable consensus formed in the current dialogue directly into the Axiom-0 repository.
> **[CN]**: 本版本 **不包含** 你提供的 Gemini 自动化流程 以及从该流程直接派生的自动化文档
> **[EN]**: This version **does not include** the Gemini automation process you provided and the automation documents derived directly from that process

> **[CN]**: 复制方式建议
> **[EN]**: Recommendations for copying

> **[CN]**: 1  先备份仓库当前分支
> **[EN]**: 1 Back up the current branch of the warehouse first
> **[CN]**: 2  将本文件中各节内容 按 `Target Path` 复制到仓库对应位置
> **[EN]**: 2 Copy the contents of each section in this file to the corresponding location in the warehouse according to `Target Path`
> **[CN]**: 3  根据 `PATCH_INDEX.md` 和 `PATCH_SPECIFICATION.md` 更新仓库入口文档
> **[EN]**: 3 Update the warehouse entry document according to `PATCH_INDEX.md` and `PATCH_SPECIFICATION.md`
> **[CN]**: 4  提交为单独 commit 方便回滚
> **[EN]**: 4 Submit as a separate commit to facilitate rollback

## 本包包含

- **[CN]**: `ADR/ADR-061`
  - **[EN]**: `ADR/ADR-061`
- **[CN]**: `ADR/ADR-062`
  - **[EN]**: `ADR/ADR-062`
- **[CN]**: `ADR/ADR-063`
  - **[EN]**: `ADR/ADR-063`
- **[CN]**: `ADR/ADR-066` 到 `ADR/ADR-070`
  - **[EN]**: `ADR/ADR-066` to `ADR/ADR-070`
- **[CN]**: `METHODOLOGY/` 3 个方法论文档
  - **[EN]**: `METHODOLOGY/` 3 methodology documents
- **[CN]**: `研究/每日/README.md`
  - **[EN]**: `RESEARCH/daily/README.md`
- **[CN]**: `PATCH_INDEX.md`
  - **[EN]**: `PATCH_INDEX.md`
- **[CN]**: `PATCH_SPECIFICATION.md`
  - **[EN]**: `PATCH_SPECIFICATION.md`

## 本包刻意排除

- **[CN]**: `AUTOMATION/` 全部文档
  - **[EN]**: `AUTOMATION/` All documents
- **[CN]**: `ADR-064-daily-10-node-automation-schedule.md`
  - **[EN]**: `ADR-064-daily-10-node-automation-schedule.md`
- **[CN]**: `ADR-065-每日白皮书-输出-合约.md`
  - **[EN]**: `ADR-065-daily-whitepaper-output-contract.md`
- **[CN]**: `研究/每日/DAILY_WHITEPAPER_TEMPLATE.md`
  - **[EN]**: `RESEARCH/daily/DAILY_WHITEPAPER_TEMPLATE.md`

## 边界

> **[CN]**: 这不是聊天纪要
> **[EN]**: This is not a chat record
> **[CN]**: 这是将上下文转译为仓库可长期维护的知识资产
> **[EN]**: This is the translation of context into knowledge assets that can be maintained by the warehouse over the long term.
> **[CN]**: 本切片只保留适合沉淀进仓库主干的非自动化部分
> **[EN]**: This slice only retains the non-automated parts suitable for settling into the warehouse trunk.

## 推荐提交信息

> **[CN]**: `壮举：将非自动化背景吸收到 Axiom-0 方法和 ADR 层中`
> **[EN]**: `feat: absorb non-automation context into Axiom-0 methodology and ADR layers`
