# ADR and Methodology semantic audit — 2026-08-28

Scope: all 16 ADRs, all 15 Methodologies, and both indexes on current `main`. This audit records disposition without manufacturing changes where current text is already bounded.

| Corpus | Disposition | Result |
| --- | --- | --- |
| ADR-001–012, ADR-014–016 | `NO_CHANGE_REQUIRED` | Current text separates documentary/metaphorical vocabulary from implemented `CODE/**` behavior and states verification limits. |
| ADR-013 | `CALIBRATION_NOTE_REQUIRED` | Historical scanner drift remains evidence; current repair and missing post-repair Jules run must be distinguished. |
| ADR index | `CALIBRATION_NOTE_REQUIRED` | Canonical membership remains 16; maintenance and scanner-contract authority are linked. |
| METH-001, 004–006, 008–009, 013–014 | `NO_CHANGE_REQUIRED` | Inputs/procedure/outputs/failure boundaries were already implementation-mapped or explicitly documentary/reference-only. |
| METH-002–003, 007, 010–012, 015 | `STRUCTURAL_REWRITE_REQUIRED` | Missing canonical section identities were added without changing identifiers; the content remains executable or explicitly claim-control/documentary-only. |
| Methodology index | `CALIBRATION_NOTE_REQUIRED` | Canonical membership remains 15; maintenance authority is linked. |

No identifier or historical path changed. No document was promoted into evidence of production isolation, distributed transactions, global convergence, authorization, or security proof. Authority order: executable code for runtime behavior; canonical indexes for membership; the maintenance contract for lifecycle rules; dated research artifacts for point-in-time observations.
