# Example: Fuzz Testing Designer

## Input

> "Write a property-based fuzz test for a URL parser function in TypeScript using fast-check."

## Output

```typescript
import { test, expect } from 'vitest';
import * as fc from 'fast-check';
import { parseCustomUrl, formatCustomUrl } from './url-parser';

test('URL Parser Invariants: Roundtrip & Safety', () => {
  fc.assert(
    fc.property(
      fc.webUrl({ withQueryParameters: true, withFragments: true }),
      (urlStr) => {
        // Property 1: Must never throw unhandled exception on valid web URLs
        const parsed = parseCustomUrl(urlStr);
        expect(parsed).toBeDefined();

        // Property 2: Idempotent roundtrip formatting
        const formatted = formatCustomUrl(parsed);
        expect(parseCustomUrl(formatted)).toEqual(parsed);
      }
    ),
    { numRuns: 5000 } // Execute 5,000 randomized mutations
  );
});
```
