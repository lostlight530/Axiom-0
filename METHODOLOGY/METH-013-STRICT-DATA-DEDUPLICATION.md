# METHODOLOGY-013: Strict Data Deduplication Protocol

## 1. Overview
This document defines the strict data deduplication protocol implemented within the Axiom-0 system, specifically as it pertains to telemetry and analytics payloads. Data deduplication ensures that duplicate copies of repeating data are eliminated, improving storage efficiency, reducing cognitive load on downstream models, and guaranteeing that metric aggregations remain algebraically pure.

## 2. Problem Statement
In distributed edge environments, data packets may be transmitted multiple times due to network retries, misconfigured caches, or temporal overlaps. Without strict deduplication, these duplicate payloads introduce entropy into the system, distorting the DAG (Directed Acyclic Graph) topology and resulting in a higher Kullback-Leibler (KL) divergence during the `test_entropy_spike.py` verification steps.

## 3. Strict Deduplication Logic
Our deduplication logic operates on the principle of **Cryptographic Payload Fingerprinting**:

1. **Deterministic Serialization**: The payload is serialized into a normalized JSON structure where keys are strictly alphabetized (e.g., via `json.dumps(data, sort_keys=True)`).
2. **Cryptographic Hashing**: A SHA-256 hash is computed over the normalized string. This serves as the unforgeable identity (fingerprint) of the data chunk.
3. **Collision Rejection**: The ingestion layer (e.g., `T-01 Ingestion`) checks this fingerprint against a temporal bloom filter or a rigid Redis/Memcached cache. If the fingerprint exists, the payload is immediately dropped with a `409 Conflict` or silently absorbed without updating state (depending on endpoint semantics).
4. **Time-Bound Anchoring**: Hashes are bound to a temporal window (e.g., a specific timestamp or period like "03/21"). Identical payloads outside this temporal window are treated as distinct events if the architecture demands it, or they are universally rejected if global uniqueness is required.

## 4. Frontend Representation & Examples
In the frontend dashboard, strict deduplication must be explicitly visualized to maintain operational transparency.

**Example Scenario**:
If the `welcome-to-github` repository reports 1500 clones, but 100 of those clone events share identical payload hashes due to retry loops, the system must display:
- **Raw Clones**: 1500
- **Deduplicated (Unique) Events**: 1400

The frontend is required to support multi-language (English/Chinese) explanations of this logic directly in the UI to satisfy global operational teams.

## 5. Justification
Relying strictly on cryptographic hashes ensures absolute mathematical certainty (entropy=0) when identifying duplicates, aligning perfectly with ADR-003-ALGEBRAIC-POLLUTION-REJECTION and METH-002-KL-DIVERGENCE-DEFENSE.
