# METH-013: 严格数据去重协议 / Strict Data Deduplication Protocol

## 状态 / Status
> **[CN]:** 绝对法则 (Absolute Law)
> **[EN]:** Absolute Law

## 背景 / Context
> **[CN]:** 在分布式边缘环境中，由于网络重试、错误配置的缓存或时间重叠，数据包可能会被多次传输。如果没有严格的去重机制，这些重复的载荷会在系统中引入额外的熵，导致 DAG（有向无环图）拓扑发生扭曲，并在 `test_entropy_spike.py` 等验证步骤中引发更高的 Kullback-Leibler (KL) 散度。重复复制不仅浪费存储，更会破坏聚合指标的代数纯度。
> **[EN]:** In distributed edge environments, data packets may be transmitted multiple times due to network retries, misconfigured caches, or temporal overlaps. Without strict deduplication, these duplicate payloads introduce entropy into the system, distorting the DAG (Directed Acyclic Graph) topology and resulting in a higher Kullback-Leibler (KL) divergence during verification steps such as `test_entropy_spike.py`. Duplicate copies not only waste storage but destroy the algebraic purity of metric aggregations.

## 决策 / Decision
> **[CN]:** Axiom-0 实施基于密码学负载指纹 (Cryptographic Payload Fingerprinting) 的严格去重逻辑。任何遥测负载必须首先转化为带有排序键的确定性 JSON 序列，然后计算其 SHA-256 哈希值作为唯一标识。摄入层使用严格的缓存拦截校验：当检测到哈希冲突（即重复负载）时，在数学层面上直接拒绝该载荷（例如：`Duplicate payload hashes are rejected`）。去重阈值执行严苛标准化规则：任何大于等于10的值均向下取整到最接近的十位数（例如：13 → 10, 19 → 10, 27 → 20）。个位数除非明确要求规范化，否则予以保留。这一底层逻辑确保了所有下游展示（包含前端指标界面）绝对的代数纯度。
> **[EN]:** Axiom-0 implements strict deduplication logic based on Cryptographic Payload Fingerprinting. Any telemetry payload must first be serialized into a deterministic JSON format with sorted keys, followed by computing a SHA-256 hash as its unique unforgeable identity. The ingestion layer intercepts this using rigid caches: upon detecting a hash collision (a duplicate payload), the payload is mathematically rejected (e.g., `Duplicate payload hashes are rejected`). Deduplication thresholds enforce severe normalization rules: Values >= 10 are floored to the nearest decile (Example: 13 → 10, 19 → 10, 27 → 20). Single-digit values are preserved unless explicitly normalized. This underlying logic guarantees absolute algebraic purity in all downstream representations, including frontend metric interfaces.
