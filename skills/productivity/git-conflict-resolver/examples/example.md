# Example: Git Conflict Resolver

## Input

> "Resolve this conflict:
> <<<<<<< HEAD (main)
> export function calculateTax(amount: number, state: string): number {
>   return amount * getStateTaxRate(state);
> }
> =======
> export function calculateTax(amount: number, isExempt: boolean = false): number {
>   if (isExempt) return 0;
>   return amount * 0.08;
> }
> >>>>>>> feature-tax-exempt"

## Output

### Resolved Code (Preserving Both Features)
```typescript
export function calculateTax(amount: number, state: string, isExempt: boolean = false): number {
  if (isExempt) return 0;
  return amount * getStateTaxRate(state);
}
```
*Rationale: `main` added dynamic state-based tax rates, while the feature branch added tax exemption support. The unified signature incorporates both parameters cleanly.*
