# AI Use Disclosure

AI assistance may be used for drafting, code suggestions, translation, test ideas, source discovery, summarization, and review. The human contributor remains accountable for scope, sources, licenses, security, correctness, and every completion claim.

## Required disclosure

For a material AI-assisted change, the pull request states the affected artifacts, assistance category, model/service and date when known, whether repository/private data was supplied, primary-source checks performed, commands and results, and unresolved uncertainty. Do not paste secrets, personal data, embargoed vulnerabilities, or third-party confidential material into a model.

## Verification boundary

Generated output is untrusted input. Review diffs line by line; verify citations against primary sources; reproduce calculations; run relevant tests when executable behavior changes; scan dependency/license impact; and keep unsupported proposals labelled. A model assertion or model-agreement count is not evidence. Sensitive security decisions, releases, permissions, destructive operations, and external commitments require accountable human review.

AI assistance must not upgrade evidence merely by restating it. In particular:

- a secondary source does not become primary because a model summarizes it confidently
- an ingestion or retrieval success does not become semantic verification
- a paper mechanism does not become a repository capability without executable local evidence
- a formula copied from a paper is not independently verified unless its source location, notation, assumptions, and transcription are checked
- an explicit source version must be paired with that version's date or labelled `VERSION_DATE_NOT_VERIFIED`
- uncertainty, missing fields, rejected evidence, and source conflicts survive summarization

## Derived reports

AI-generated Daily, Weekly, or Monthly summaries inherit the uncertainty of their inputs. A higher-level summary may downgrade evidence but must not silently strengthen it.

If a Weekly report adds new external evidence not present in Daily artifacts, label it as a new Weekly observation rather than retroactively inserting it into the Daily lifecycle.

Repeated sources must be identified as revalidation, control signals, new claims from an existing source, or duplicates when research novelty matters.

## Provenance and correction

Preserve useful run or conversation identifiers when policy permits, not full prompts by default. Correct materially false generated content through an ordinary reviewed change and record why prior evidence was insufficient.

When an erroneous generated artifact is itself part of the historical execution record, prefer a visible reconciliation or erratum over a silent rewrite. The correction should state which prior interpretation it supersedes and what remains uncertain.