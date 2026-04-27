# ADR-007: 无锁原生协议网关 / ADR-007: Lock-Free Native Protocol Gateway

---

## 状态 / Status
**已采纳 (Accepted)**

---

## 背景 / Context
> **[CN]**: 尽管底层的 SQLite 使用了 WAL（Write-Ahead Logging）模式支持读写并发，但在超高并发的高负载 API 场景下，多线程 HTTP 服务器（如传统框架）仍会引发 SQLite 的锁竞争（Lock Contention），导致数据库写入阻塞，进而引发系统性延迟。
>
> **[EN]**: Although the underlying SQLite database utilizes WAL (Write-Ahead Logging) to support read/write concurrency, under extreme high-concurrency API loads, standard multithreaded HTTP servers still trigger SQLite lock contention. This causes database write blocking, leading to cascading systemic latency.

---

## 决策 / Decision
> **[CN]**: 拒绝引入 Redis 或 RabbitMQ 等外部中间件。在 `src/kernel/protocol/nexus.py` 中手搓原生多线程 HTTP 服务器。核心突破是引入“环形缓冲区（Ring Buffer）”和“单写者队列（Single-Writer Queue）”。
>
> **[EN]**: Refuse the introduction of external middleware like Redis or RabbitMQ. Hand-roll a native multithreaded HTTP server in `src/kernel/protocol/nexus.py`. The core breakthrough is the implementation of a "Ring Buffer" and a "Single-Writer Queue".

---

## 架构层级 / Architectural Details

### 1. 单写者原则 (Single-Writer Principle)
- **[CN]**: 无论 HTTP 前端有多少个并发请求，所有针对 SQLite 的 `INSERT`/`UPDATE` 操作都被丢入一个无锁环形队列，由唯一的一个专属后台线程负责物理写入。
- **[EN]**: Regardless of the number of concurrent HTTP requests, all SQLite `INSERT`/`UPDATE` operations are pushed into a lock-free ring queue. A single, dedicated background thread handles all physical writes.

### 2. 原生 HTTP 处理 (Native HTTP Handling)
- **[CN]**: 抛弃 Flask/FastAPI 等庞大的第三方框架，使用 Python 原生的 `http.server` 并在底层注入无锁队列逻辑。
- **[EN]**: Abandon bloated third-party frameworks like Flask or FastAPI. Utilize Python's native `http.server`, injecting the lock-free queue logic at the lowest level.

---

## 后果 / Consequences

### 正面影响 (Positive)
- **绝对的零外部依赖**: 不依赖任何内存数据库或消息队列软件。 / Absolute zero external dependency: operates without any external in-memory databases or message brokers.
- **消除锁竞争**: 写入操作的吞吐量达到 SQLite 单线程物理极限，读操作完全无阻塞。 / Eliminates lock contention. Write throughput reaches the physical single-thread limit of SQLite, while read operations are completely non-blocking.

### 负面影响 (Negative)
- **异步回调复杂**: HTTP 线程在将任务丢入队列后，需处理极其复杂的异步等待与结果映射。 / Complex asynchronous callbacks: HTTP threads must handle highly complex async waiting and result mapping after pushing tasks to the queue.

---
*"Build it Brutally, Run it Deterministically"*
