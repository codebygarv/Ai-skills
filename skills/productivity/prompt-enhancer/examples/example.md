# Example: Prompt Enhancer

## Input

> "Raw prompt: Write a script to scrape product prices from Amazon."

## Output

### Enhanced Prompt
```markdown
You are a Senior Python Automation Engineer specializing in web scraping resilience and anti-bot compliance.

### Task
Write a Python script using `playwright` (async) to extract product prices, titles, ratings, and availability status from an Amazon search results URL.

### Requirements & Constraints
1. **Stealth & Resilience**: Configure realistic browser headers, viewport, and user-agent.
2. **Selector Strategy**: Use fallback CSS/XPath selectors to handle dynamic A/B test layouts.
3. **Rate Limiting**: Include random jitter delays (2-5s) between pagination requests.
4. **Output Schema**: Export extracted records directly to a structured JSON file matching this format:
   `[ { "asin": "string", "title": "string", "price": float, "in_stock": boolean } ]`
5. **Do NOT**: Use plain `requests` or `urllib` (will be blocked immediately).
6. **Error Handling**: Gracefully handle missing price elements without throwing unhandled exceptions.
```
