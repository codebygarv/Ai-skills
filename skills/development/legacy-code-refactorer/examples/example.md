# Example: Legacy Code Refactorer

## Input

> "We have a 2,500-line `OrderProcessor.php` that directly queries MySQL, charges Stripe, sends emails, and writes to files in a single static function. How do we refactor it safely?"

## Output

### 1. Step 1: Characterization Safety Net
Record 50 real production order inputs and resulting DB/Stripe payloads into a Golden Master test fixture to assert identical output behavior throughout the refactoring.

### 2. Mikado Refactoring Graph
```
Goal: Extract pure `PricingCalculator` from `OrderProcessor`
  └── Prerequisite: Separate tax calculation from MySQL query
        └── Prerequisite: Inject `TaxRateRepositoryInterface`
              └── Leaf Step: Wrap direct SQL call in a class (Deployable PR #1)
```

### 3. Incremental PR Strategy
- **PR 1**: Introduce `TaxRateProvider` interface and default legacy implementation (0 logic change).
- **PR 2**: Extract pure mathematical pricing logic into `PricingCalculator` with 100% unit test coverage.
- **PR 3**: Swap `OrderProcessor` to call new `PricingCalculator`.
