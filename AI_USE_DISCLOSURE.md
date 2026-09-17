# AI Use Disclosure

AI assistance may be used for drafting, code suggestions, translation, test ideas, source discovery, summarization, and repository review. The human contributor remains accountable for scope, sources, licenses, security, correctness, merge decisions, and every completion claim.

## Control-plane boundary

This file governs accountable AI-assisted repository work, including Independent GPT maintenance review. It does not reveal or replace private Jules task prompts, repository memory, credentials, hidden reasoning, or unrelated operator context.

Jules-generated Daily/Weekly/Monthly artifacts may be reviewed after generation, but post-hoc review is not evidence that Jules consumed this file or followed its rules. Private Jules controls remain private unless the maintainer explicitly publishes them.

The repository currently has no public `AGENTS.md`; AI assistance must not infer one from private automation, prior conversations, or model memory.

## Repository truth first

Before an AI-assisted maintenance change, recover the current default branch, latest merged `main`, relevant open pull requests, active maintenance branches, recent merged changes, and the current owning contract. A stale clone, prior handoff SHA, old chat, or model recollection is not current repository truth.

When no confirmed maintenance defect exists, the correct maintenance action is `NO_CHANGE_REQUIRED`. Do not create activity-only edits, branches, or pull requests merely to demonstrate that an AI agent acted.

## Required disclosure

For a material AI-assisted pull request, state when known and relevant:

- affected repository surfaces;
- assistance category;
- model/service and date;
- whether repository or private data was supplied;
- primary-source checks performed;
- commands/checkers/schedulers/workflows actually executed and their outcomes;
- checks not executed;
- unresolved uncertainty or coordination state.

Do not paste secrets, personal data, embargoed vulnerabilities, private prompts, credentials, hidden memory, or third-party confidential material into a model unless an explicit authorized workflow requires it.

## Verification boundary

Generated output is untrusted input. Review the aggregate diff; verify citations against primary sources; reproduce calculations; run relevant tests when executable behavior changes; and keep unsupported proposals labelled.

Keep these distinctions explicit:

```text
contract review != checker execution
schedule declared != schedule executed
workflow file exists != workflow ran
passing test != universal correctness
model agreement != independent evidence
current path presence != earlier execution
later success != earlier success
correction != history rewrite
```

If a check, scheduler run, or workflow was not observed, record `NOT_EXECUTED` or `EXECUTION_NOT_OBSERVED` as appropriate. Do not convert document inspection into PASS.

AI assistance must not upgrade evidence merely by restating it. In particular:

- a secondary source does not become primary because a model summarizes it confidently;
- an ingestion or retrieval success does not become semantic verification;
- a paper mechanism does not become a repository capability without executable local evidence;
- a formula copied from a paper is not independently verified unless source location, notation, assumptions, and transcription are checked;
- an explicit source version must be paired with that version's date or labelled `VERSION_DATE_NOT_VERIFIED`;
- uncertainty, missing fields, rejected evidence, source conflicts, and failed executions survive summarization.

## Derived reports and historical evidence

AI-generated Daily, Weekly, or Monthly summaries inherit the uncertainty of their inputs when this review framework is applied. This is a post-hoc review rule, not a claim about Jules task behavior.

A higher-level summary may downgrade evidence but must not silently strengthen it. A later successful run does not erase an earlier failure. A current file does not prove an earlier execution.

Historical research and archived audits are point-in-time evidence. Maintenance corrections should normally update the current owning maintenance/control source or an explicit successor; they should not silently rewrite historical execution.

## Concurrency and delivery

For a justified AI-assisted maintenance repair:

1. branch from exact fresh `main`;
2. inspect overlapping live PRs/branches and use `COORDINATE` when another change owns the same surface or logical period;
3. change only the owning file(s) and direct synchronized projections;
4. run available targeted validation and preserve the real result;
5. refresh `main` and overlap state before delivery;
6. inspect the aggregate `main...branch` diff;
7. open one Draft PR and stop for maintainer review.

Do not push directly to `main`, force-push history, auto-merge, or claim a checker/CI PASS that was not actually observed.

Final merge, doctrine, releases, destructive operations, permission changes, and external commitments remain accountable human decisions.
