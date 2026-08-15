# Example: Test Generator

## Input

```js
function splitFullName(fullName) {
  if (!fullName || typeof fullName !== 'string') throw new Error('Invalid name');
  const parts = fullName.trim().split(/\s+/);
  return { first: parts[0], last: parts.length > 1 ? parts[parts.length - 1] : '' };
}
```

Framework: Vitest (inferred from existing `*.test.ts` files in the project using `import { describe, it, expect } from 'vitest'`).

## Output

```ts
import { describe, it, expect } from 'vitest';
import { splitFullName } from './splitFullName';

describe('splitFullName', () => {
  it('splits a normal two-part name into first and last', () => {
    expect(splitFullName('Jane Doe')).toEqual({ first: 'Jane', last: 'Doe' });
  });

  it('returns an empty last name when only one name part is given', () => {
    expect(splitFullName('Cher')).toEqual({ first: 'Cher', last: '' });
  });

  it('uses the last token as the last name when more than two parts are given', () => {
    expect(splitFullName('Mary Jane Watson')).toEqual({ first: 'Mary', last: 'Watson' });
  });

  it('collapses extra internal whitespace between name parts', () => {
    expect(splitFullName('Jane    Doe')).toEqual({ first: 'Jane', last: 'Doe' });
  });

  it('trims leading and trailing whitespace', () => {
    expect(splitFullName('  Jane Doe  ')).toEqual({ first: 'Jane', last: 'Doe' });
  });

  it('throws for an empty string', () => {
    expect(() => splitFullName('')).toThrow('Invalid name');
  });

  it('throws for non-string input', () => {
    expect(() => splitFullName(null)).toThrow('Invalid name');
    expect(() => splitFullName(undefined)).toThrow('Invalid name');
  });
});
```

**Not covered:** internationalized names with non-Latin scripts or multi-word surnames (e.g. "van der Berg") — the current implementation's "last token wins" logic will mis-split these, but that's an existing behavior/requirements question, not something to silently paper over with a test that assumes it's correct. Worth flagging to the requester rather than writing a test that locks in a possibly-unintended behavior.
