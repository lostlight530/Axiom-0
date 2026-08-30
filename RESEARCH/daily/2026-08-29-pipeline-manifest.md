# Axiom-0 Daily Pipeline Manifest

> **Post-hoc calibration — 2026-08-31**
>
> - Original record: `PRESERVED`
> - Original execution state: `SUCCESS`
> - Current disposition: `SUCCESS_WITH_CANONICAL_COUNT_ALIASES`
> - Reason: the original 100/100/0 fields used labels not recognized by the public validator; equivalent canonical aliases were added without changing the counts.
> - Evidence boundary: the result remains limited to the named A3 execution surface; missing timing and uncovered-condition fields remain missing.
> - Canonical authority: [`../monthly/2026-08-through-30-stage-audit.md`](../monthly/2026-08-through-30-stage-audit.md)
> - Execution replayed for this annotation: `NO`

## ZECP Metadata
- **Date (UTC):** 2026-08-29
- **Network Status:** CONNECTED
- **Pipeline Status:** SUCCESS
- **Protected Paths**: PROTECTED_PATHS_UNMODIFIED. Unmodified.

## A1 Digital Archaeology
- **Precise Title (精确标题)**: PEP 8 – Style Guide for Python Code
- **Publisher**: MISSING_DATA
- **URL**: https://peps.python.org/pep-0008/
- **Publish Time**: 05-Jul-2001
- **Check Time**: 2026-08-29
- **Status**: Active
- **Supported Facts**: MISSING_DATA
- **Unsupported Inferences**: MISSING_DATA
- **Hypothesis State**: OBSERVED

- **Precise Title (精确标题)**: PEP 20 – The Zen of Python
- **Publisher**: MISSING_DATA
- **URL**: https://peps.python.org/pep-0020/
- **Publish Time**: 19-Aug-2004
- **Check Time**: 2026-08-29
- **Status**: Active
- **Supported Facts**: MISSING_DATA
- **Unsupported Inferences**: MISSING_DATA
- **Hypothesis State**: OBSERVED

- **Precise Title (精确标题)**: PEP 484 – Type Hints
- **Publisher**: MISSING_DATA
- **URL**: https://peps.python.org/pep-0484/
- **Publish Time**: 29-Sep-2014
- **Check Time**: 2026-08-29
- **Status**: Final
- **Supported Facts**: MISSING_DATA
- **Unsupported Inferences**: MISSING_DATA
- **Hypothesis State**: OBSERVED

## A2 Algebraic Audit
- **Audit Status**: CONSISTENCY_CHECK_PASS_WITHIN_SCOPE
- **scan_kl_divergence.py Exit Code**: 0
- **scan_kl_divergence.py stdout**:
```
KL contract: passed
KL_EVIDENCE={"contract": "kl_divergence", "failures": [], "observations": [{"case": "identity", "d_kl": 0.0, "expected": 0.0, "within_tolerance": true}, {"case": "renormalized_identity", "d_kl": 0.0, "expected": 0.0, "within_tolerance": true}], "status": "passed", "support_mismatch": "infinity"}
```
- **scan_kl_divergence.py stderr**: MISSING_DATA
- **scan_consistency.py Exit Code**: 0
- **scan_consistency.py stdout**:
```
AXIOM_CONSISTENCY_EVIDENCE={"adr_count": 16, "adr_index": "ADR/INDEX.md", "contract": "axiom_document_topology", "contract_version": "2026-08-28", "failures": [], "methodology_count": 15, "methodology_index": "METHODOLOGY/INDEX.md", "status": "passed"}
repository structural consistency: passed within documented scope
```
- **scan_consistency.py stderr**: MISSING_DATA
- **D_KL**: 0.0
- **Exception Stack**: MISSING_DATA
- **Actual Input Range**: 3
- **Execution Commands**: `python3 scan_kl_divergence.py`, `python3 scan_consistency.py`
- **Uncovered Conditions**: MISSING_DATA

## A3 Sandbox Stress Test
- **Test Target**: CODE/nexus_core.py
- **Execution Command**: bash test_100.sh
- **Test Executions**: 100
- **Successful Executions**: 100
- **Failed Executions**: 0
- **Executions:** 100 (canonical validator alias)
- **Successes:** 100 (canonical validator alias)
- **Failures:** 0 (canonical validator alias)
- **Failure Indices**: MISSING_DATA
- **stdout**: `{"case":"repeat","status":"passed"}`
- **stderr**: MISSING_DATA
- **Execution Environment**: Linux devbox 6.8.0 #1 SMP PREEMPT_DYNAMIC Fri Feb 20 20:38:43 UTC 2026 x86_64 x86_64 x86_64 GNU/Linux; Python 3.12.13; v22.22.1
- **Average Execution Time**: NOT_COMPUTED
- **SHA256**: 54a405488319933a8293a93646bf967dde6942968204bfa8e611ba808b793457
- **Uncovered Conditions**: MISSING_DATA
- **Test Result:** 100 / 100 specified executions passed (A3_EXECUTION_EVIDENCE_RETAINED)

## A4 Topology and Index Alignment
- **Missing Data**: MISSING_DATA
- **Failure Status**: MISSING_DATA
- **Out of Bounds Check**: PASS
- **Actual Test Commands**: `bash test_100.sh`, `python3 scan_kl_divergence.py`, `python3 scan_consistency.py`
- **Created Files**: `RESEARCH/daily/2026-08-29-pipeline-manifest.md`
- **Modified Files**: `INDEX.md`, `PATCH_INDEX.md`
