# Example: Form UX Optimizer

## Input

> "Our credit card payment form shows 'Invalid card number' the moment a user types the first digit."

## Output

### Diagnosis: Premature Validation Friction
Validating on every keystroke before input completion frustrates users and creates anxiety.

### Solution: "Reward Early, Punish Late" Pattern
1. **Initial State (Clean)**: No validation until the user tabs away (`onBlur`) or completes expected 16 digits.
2. **Error State (Touched & Invalid)**: Display clear inline error: `"Please enter a 16-digit card number"` connected via `aria-describedby="card-error"`.
3. **Correction State**: As soon as the 16th valid digit is typed, immediately remove the error message without waiting for blur.

### Optimized HTML Input
```html
<label for="cc-num" class="form-label">Card Number</label>
<input
  id="cc-num"
  type="text"
  inputmode="numeric"
  autocomplete="cc-number"
  placeholder="1234 5678 9012 3456"
  aria-describedby="cc-error"
  class="input-field"
/>
<span id="cc-error" role="alert" class="error-msg">Please enter a valid card number</span>
```
