# Historical Independent Audit Archive

This directory archives historical External Independent GPT audit, correction, evidence-accounting, reconciliation, and maintenance records for Axiom-0. Archived bodies are moved with their original Git blobs; archive placement does not rewrite their historical observations or verification state.

## Scope boundaries

Not archived here:
- Plasma Jules Daily A1-A4, Weekly A5, or Monthly A6 task artifacts/manifests
- active governance contracts, ADRs, Methodologies, indexes, schemas, checkers, or workflows
- current external-maintenance procedure/templates
- the current maintenance entry point `RESEARCH/monthly/2026-09-13-full-sop-reconciliation.md`

## Legacy index proposal (not an independent audit)

- [`legacy-index/PATCH_INDEX.md`](legacy-index/PATCH_INDEX.md) — preserved byte-for-byte as a historical root-level INDEX patch proposal; it is **not** a second current index, a maintenance run, or an execution receipt. Its original relative links were written for the root path and may not resolve in the archived copy; use [the pinned original root file](https://github.com/lostlight530/Axiom-0/blob/e7adc0a92559945079379733cb8b33fff5c996fb/PATCH_INDEX.md) for location-correct historical navigation. Current authority belongs to [`INDEX.md`](../INDEX.md).

## Archive classes

1. `01-corrections-and-errata/` — dated corrections to prior interpretations or evidence identity
2. `02-document-audits/` — independent audits of canonical document corpora
3. `03-stage-and-period-audits/` — provisional/as-of period-state audits
4. `04-evidence-and-closure-ledgers/` — evidence accounting and natural-period closure records
5. `05-maintenance-and-reconciliation/` — cross-period cadence/content reconciliation and maintenance predecessors

## Relocation map

| Historical purpose | Archived path | Previous path |
| --- | --- | --- |
| July-August Jules execution/content correction | `01-corrections-and-errata/2026-09-07--july-august-content--correction.md` | `RESEARCH/monthly/2026-09-07-jules-july-august-content-correction.md` |
| ADR/Methodology semantic audit | `02-document-audits/2026-08-28--canonical-documents--document-audit.md` | `GOVERNANCE/2026-08-28-DOCUMENT-AUDIT.md` |
| August through-23 stage audit | `03-stage-and-period-audits/2026-08-23--august-through-23--stage-audit.md` | `RESEARCH/monthly/2026-08-through-23-stage-audit.md` |
| August through-27 stage audit | `03-stage-and-period-audits/2026-08-27--august-through-27--stage-audit.md` | `RESEARCH/monthly/2026-08-through-27-stage-audit.md` |
| August through-30 stage audit | `03-stage-and-period-audits/2026-08-30--august-through-30--stage-audit.md` | `RESEARCH/monthly/2026-08-through-30-stage-audit.md` |
| W33 evidence reconciliation | `04-evidence-and-closure-ledgers/2026-W33--plasma-evidence--reconciliation.md` | `RESEARCH/weekly/2026-W33-evidence-reconciliation.md` |
| August final natural-month reconciliation | `04-evidence-and-closure-ledgers/2026-08-31--august--closure-reconciliation.md` | `RESEARCH/monthly/2026-08-final-stage-audit.md` |
| Cross-period Jules cadence reconciliation | `05-maintenance-and-reconciliation/2026-09-06--jules-cadence--reconciliation.md` | `RESEARCH/monthly/2026-09-06-jules-cadence-reconciliation.md` |
| Jules content/provenance contract reconciliation | `05-maintenance-and-reconciliation/2026-09-06--jules-content-contract--reconciliation.md` | `RESEARCH/monthly/2026-09-06-jules-content-contract-reconciliation.md` |
| September ten-day successor reconciliation | `05-maintenance-and-reconciliation/2026-09-10--sep-01-10--cadence-reconciliation.md` | `RESEARCH/monthly/2026-09-10-ten-day-cadence-reconciliation.md` |
| October 28 SOP minimal acceptance audit | `03-stage-and-period-audits/2026-10-28-sop-minimal-acceptance-audit.md` | `historical-audits/2026-10/2026-10-28-sop-minimal-acceptance-audit.md` |
| November 8–9 Plasma A1/A2 source adjudication | `05-maintenance-and-reconciliation/2026-11-10-strict-nov08-nov09-plasma-a1a2-source-adjudication.md` | `historical-audits/2026-11/2026-11-10-strict-nov08-nov09-plasma-a1a2-source-adjudication.md` |

The old paths remain recoverable through Git history. The archive is historical storage and does not supersede current repository authority or the current maintenance record.


## Successor maintenance records

- `05-maintenance-and-reconciliation/2026-09-19--sep-19--maintenance-reconciliation.md` — 2026-09-19 bounded Daily pipeline reconciliation

As of 2026-09-19 this is the latest completed independent periodic-maintenance record in the archive. Current implementation, specification, evidence baseline, methodology, and the 2026-09-18 current research reconciliation remain higher authority for present interpretation.

## 2026-10-28 classification-only relocation

The following dated records retain their original Git blob contents and their original observation/producer boundaries. The original paths are recoverable from Git history, and this routing change creates no new audit, A1/A2, Native task, or acceptance credit.

- `historical-audits/03-stage-and-period-audits/2026-10-28--sop-minimal-acceptance--audit.md` — moved from `historical-audits/2026-10/2026-10-28-sop-minimal-acceptance-audit.md`; retained historical blob `00bfbd113de68f14851d183a96a8e248a157d1ae`.
- `historical-audits/05-maintenance-and-reconciliation/2026-10-28--october-native-weekly-gap-recovery--register.md` — moved from `historical-audits/2026-10/2026-10-28-october-native-weekly-gap-recovery-register.md`; retained historical blob `a4b841490729db1bc708d43f70cf4ca0e0d6b69a`.

The SOP acceptance is a derived cross-task audit, not the original A1/A2. The gap-recovery register is a maintenance evidence inventory, not a Periodic Audit or Native pipeline run.

### 2026-11-19 post-merge erratum filename normalization

- `historical-audits/01-corrections-and-errata/2026-10-28--a1-a2-tree-oid--erratum.md` — normalized from `historical-audits/01-corrections-and-errata/2026-10-28-a1-a2-tree-oid-erratum.md`, original blob `4fb4a880920f4116cafc9fdb85e1c7ff13bb125b`; this source corrects a historical OID label, not original A1/A2 or a native task
- The two above October 28 relocated paths use the shared `YYYY-MM-DD--subject--record-kind.md` naming format; original source blobs and old paths are preserved in historical Git versions
- Indexed inbound-code lookup for these three original names returned no file results in this repository at review time; this does not certify external backlinks

## Current navigation for retained duplicate paths

The preferred links below are for navigation. The retained paths point to the same Git blobs and are not separate audits or additional evidence. This section supersedes conflicting path labels in earlier entries of this index without changing their historical provenance.

| Record | Preferred archive path | Retained same-blob path |
| --- | --- | --- |
| October 28 SOP minimal acceptance audit | [Preferred](03-stage-and-period-audits/2026-10-28--sop-minimal-acceptance--audit.md) | [Retained](03-stage-and-period-audits/2026-10-28-sop-minimal-acceptance-audit.md) |

## Archive filename normalization

Only the paths changed; the historical document bodies and original task records are unchanged.

| Previous revision | Current path | Unchanged Git blob |
| --- | --- | --- |
| [Previous path at pre-rename main](https://github.com/lostlight530/Axiom-0/blob/72d979de77eaa87336e57d0119f0aeeacda98217/historical-audits/04-evidence-and-closure-ledgers/2026-W33--evidence-reconciliation.md) | [2026-W33--plasma-evidence--reconciliation.md](04-evidence-and-closure-ledgers/2026-W33--plasma-evidence--reconciliation.md) | `d0f648b223253835dfa00f886ffe3264192a6853` |

## 2026-11-20 independent Plasma source-lineage document audit

- [A1/A2 source roles and formal-stage boundary](02-document-audits/2026-11-20--plasma-a1-a2-source-lineage--document-audit.md) — forward correction applied at canonical A1/A2 paths, original PR identity unchanged

## 2026-11-24 retained archive navigation additions

These existing records were not explicitly linked by path in the preceding index. This is a navigation supplement, not a new audit, a new producer run, or a reclassification. The directory column reports the retained physical location; original record content and provenance govern interpretation. Path-sensitive references and legacy locations remain intact. Existing same-blob aliases are not additional evidence.

| Retained record | Existing directory | Blob at inspected main |
| --- | --- | --- |
| [2026-10-01--external-review-source-scope--correction.md](01-corrections-and-errata/2026-10-01--external-review-source-scope--correction.md) | `01-corrections-and-errata/` | `59d56f84f3501b8786ed1791a91be86e0bd3bd44` |
| [2026-10-31--plasma-a1-source-coverage--post-merge-erratum.md](01-corrections-and-errata/2026-10-31--plasma-a1-source-coverage--post-merge-erratum.md) | `01-corrections-and-errata/` | `742e26bf7b9e82ec57f4af114c42fac67a39e69d` |
| [2026-11-01--a2-successor-retention-and-acceptance--reconciliation.md](01-corrections-and-errata/2026-11-01--a2-successor-retention-and-acceptance--reconciliation.md) | `01-corrections-and-errata/` | `d104724181d9018a2ba67f9efe5e8ea394ae288e` |
| [2026-09-13--sep-01-13--maintenance-reconciliation.md](05-maintenance-and-reconciliation/2026-09-13--sep-01-13--maintenance-reconciliation.md) | `05-maintenance-and-reconciliation/` | `93f2d15074155f9eacc65fabc15463b1d50d46be` |

## 2026-11-25 cloud acceptance navigation

Dated documentary review at [inspected main](https://github.com/lostlight530/Axiom-0/commit/a19463604a73a728c75a397993bd00af3ea46ddf); navigation only, not a new original A1/A2, Native, or D-task submission. The historical archive classes above remain unchanged. Original task owners are linked, not relocated or reclassified.

| Identity | Original GitHub delivery | Cloud evidence / disposition |
| --- | --- | --- |
| Independent A1 (Nov 1–24) | [#562](https://github.com/lostlight530/Axiom-0/pull/562), 131 additions, merged | [canonical file](https://github.com/lostlight530/Axiom-0/blob/a19463604a73a728c75a397993bd00af3ea46ddf/historical-audits/2026-11/2026-11-25-a1-source-content-review.md) retained; numeric gate met; 96/96 listed source SHA rows match the later inspected main (cutoff/shared-owner changes are not automatically errors) |
| Independent A2 (Nov 1–25) | [#563](https://github.com/lostlight530/Axiom-0/pull/563), 152 additions, merged | [canonical file](https://github.com/lostlight530/Axiom-0/blob/a19463604a73a728c75a397993bd00af3ea46ddf/historical-audits/2026-11/2026-11-25-a2-month-relations.md) retained; numeric gate met; 98/98 listed first source SHA rows match inspected main; PR base is the original A1 merge and creation follows that merge |
| Oct 31 original A2 | [#448](https://github.com/lostlight530/Axiom-0/pull/448), 84 additions, merged | Original numeric gate NOT_MET; delivery and numeric acceptance remain separate |
| Oct 31 successor | [#450](https://github.com/lostlight530/Axiom-0/pull/450), 158 additions, merged | Successor numeric gate MET; no retroactive credit to original A2 |
| Oct 31 cleanup | [#452](https://github.com/lostlight530/Axiom-0/pull/452), merged | Separate cleanup, not original task or successor credit |
| Nov 1 forward reconciliation | [#455](https://github.com/lostlight530/Axiom-0/pull/455), merged | [Retained correction](01-corrections-and-errata/2026-11-01--a2-successor-retention-and-acceptance--reconciliation.md); correction class, not a new original A2 |

Native evidence: Plasma [#561](https://github.com/lostlight530/Axiom-0/pull/561) records a BLOCKED formal pipeline; formal A2 scanner/KL were not executed/computed, A3/A4 remain blocked. Independent bounded controls do not replace the formal stages.

D7/D10/D14 retain their separate original identities; D14 is an as-of partial observation, not a full-day closure. D30 is not due at this observation. November remains open. Cloud delivery, numeric acceptance, dependency and retention are confirmed at the inspected revision; source-row custody does not by itself establish full semantic validity or a new runtime execution. Existing archive aliases are navigation only, not additional evidence or task credit.
