## Outcome and exact scope

- Base `main` SHA:
- Head SHA:
- Owning surface / logical period:
- Overlapping PR/branch check:

## Change classification
- [ ] implementation repair
- [ ] maintenance / governance repair
- [ ] automation contract / schedule repair
- [ ] evidence / documentation correction
- [ ] other bounded repository change

## Evidence classification
- [ ] repository observation
- [ ] revision-matched execution / runner evidence
- [ ] automation/scheduler execution evidence
- [ ] primary-source support
- [ ] proposal/hypothesis explicitly labelled
- [ ] unknown / unresolved state retained where evidence is insufficient

## Contract impact

Inputs, outputs, failure behavior, compatibility, machine-readable contracts, and directly synchronized projections.

## Changed and deliberately unchanged boundaries

## Verification actually executed

List exact commands, scanners, schema checks, schedulers, or workflows and their observed results. Do not treat contract review as execution.

## Verification not executed

Use `NOT_EXECUTED` for checks that were not run and `EXECUTION_NOT_OBSERVED` when a claimed external/scheduled run cannot be recovered.

## Concurrency and delivery
- [ ] Fresh `main` and open PR/branch state were rechecked before delivery
- [ ] Aggregate `main...branch` diff was reviewed
- [ ] No activity-only change was created where `NO_CHANGE_REQUIRED` was appropriate
- [ ] No direct `main` write, force-push, or auto-merge is requested by this PR

## Security, privacy, permissions, and retention

## Historical / evidence boundary
- [ ] Historical point-in-time records were not silently rewritten
- [ ] Failure, missing, rejected, provisional, blocked, and unknown states were preserved
- [ ] Private Jules prompts / hidden memory / credentials were not exposed
- [ ] Schedule or workflow presence was not presented as execution evidence

## Rollback

## Maintainer review

Final doctrine and merge authority remains with the maintainer.
