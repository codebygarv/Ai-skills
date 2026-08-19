# Example: Mutation Testing Advisor

## Input

> "Why is our test for `calculateDiscount()` passing even when the boundary logic is broken?
> test('applies discount', () => {
>   const total = calculateDiscount(100, 0.1);
>   expect(total).toBeGreaterThan(0);
> });"

## Output

### Surviving Mutants
1. **Mutant 1 (Arithmetic Swap)**: `price * (1 + discount)` $ightarrow$ Result is 110. `110 > 0` is TRUE. Test passes!
2. **Mutant 2 (Zero Discount)**: `price * 1` $ightarrow$ Result is 100. `100 > 0` is TRUE. Test passes!

### Diagnosis
`expect(total).toBeGreaterThan(0)` is a weak assertion that verifies sign, not mathematical correctness.

### Hardened Test
```javascript
test('applies exact 10% discount to price', () => {
  expect(calculateDiscount(100, 0.1)).toBe(90);
  expect(calculateDiscount(0, 0.1)).toBe(0);
  expect(() => calculateDiscount(100, -0.1)).toThrow(/Invalid discount rate/);
});
```
