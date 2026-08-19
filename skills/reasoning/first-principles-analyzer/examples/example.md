# Example: First Principles Analyzer

## Input

> "We are building a telemetry ingest system. Team wants to set up Kafka + Flink + Cassandra + Elastic for 5,000 events/sec peak from 100 IoT devices."

## Output

### 1. Fundamental Reality vs Assumed Conventions
- **Data Volume**: 5,000 events/sec * 500 bytes = 2.5 MB/sec (20 Mbps network bandwidth, ~216 GB/day).
- **Physical Reality**: 2.5 MB/sec is well within the memory bus and single-disk write throughput of a single low-end server (NVMe writes at 3,000+ MB/sec).
- **Received Assumption**: "Distributed streaming with Kafka and Flink cluster is required for stream processing."

### 2. Hard Constraints
- Must not lose events during temporary network drops (require durable queue).
- Must query by device ID and timestamp over a 30-day window.

### 3. Reconstructed First-Principles Solution
- Single ClickHouse instance with an in-memory buffer or Redis Stream queue.
- Write in batches directly to ClickHouse (handles 100,000+ rows/sec effortlessly on a single node).
- Cost difference: $50/mo single node vs $1,800/mo 12-node distributed cluster.
