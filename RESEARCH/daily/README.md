# Daily pipeline records

The canonical Daily artifact is `YYYY-MM-DD-pipeline-manifest.md`. Earlier whitepaper/archive/hypotheses files are historical formats, not the current SOP.

## A1–A4 contract

| Stage | Required evidence | Failure/absence state |
| --- | --- | --- |
| A1 — source and input | source identity, version/date, retrieval time, input identity or digest | `NOT_VERIFIED`, `MISSING_DATA`, or a named provenance conflict |
| A2 — independent scans | KL evidence and structural evidence recorded separately, including command, exit code, and scanner contract identity | `NOT_COMPUTED` when not run; any non-zero result fails closed |
| A3 — bounded executions | actual execution, success, and failure counts plus environment | `NOT_EXECUTED` after A2 failure; never infer `100 / 100` |
| A4 — repository/index check | exact checked surface and result | `NOT_EXECUTED` after an earlier failure |

Evidence types are independent: KL evidence does not prove document topology; topology does not prove execution; execution does not prove source truth; path coverage does not prove evidence completeness. A non-zero A2 result stops A3 and A4. A template success sentence cannot override an explicit stop or missing result. Historical template text may remain only when a calibration marks it `NON_EVIDENTIARY_TEMPLATE_TEXT`.

KL values must include their input identity and unit. If KL was not computed, record a missing state instead of a number. Every consistency run must retain the `axiom_document_topology` JSON contract evidence emitted by `scan_consistency.py`.

Weekly A5 may inherit, aggregate, or downgrade Daily evidence; it cannot promote missing or failed evidence. Monthly A6 closes only after the natural month ends and its evidence is retained. See the [August 1–27 ledger](../monthly/2026-08-through-27-stage-audit.md) and [maintenance contract](../../GOVERNANCE/MAINTENANCE.md).
