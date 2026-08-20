# Example: SDK Getting Started Writer

## Input

> "Write a quickstart guide for our Vector Search API in Python and cURL."

## Output

```markdown
# ⚡ Quickstart: Vector Search API

Get up and running in under 3 minutes.

## 1. Install SDK
```bash
pip install vector-api-client
```

## 2. Set Your API Key
```bash
export VECTOR_API_KEY="vtr_live_xxxxxxxxxxxx"
```

## 3. Query Your First Index

**Python:**
```python
import os
from vector_client import VectorClient

client = VectorClient(api_key=os.environ["VECTOR_API_KEY"])
results = client.search(
    collection="articles",
    query="distributed systems consensus",
    limit=3
)

for match in results.matches:
    print(f"[{match.score:.2f}] {match.metadata['title']}")
```

**cURL:**
```bash
curl https://api.vector.example.com/v1/search \
  -H "Authorization: Bearer $VECTOR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"collection":"articles","query":"distributed systems consensus","limit":3}'
```
```
