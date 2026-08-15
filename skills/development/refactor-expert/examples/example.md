# Example: Refactor Expert

## Before

```js
function getDiscount(user) {
  if (user.type === 'premium') {
    if (user.yearsActive > 5) {
      return 0.3;
    } else {
      if (user.yearsActive > 1) {
        return 0.2;
      } else {
        return 0.1;
      }
    }
  } else {
    if (user.type === 'standard') {
      return 0.05;
    } else {
      return 0;
    }
  }
}
```

## After

```js
const PREMIUM_TIERS = [
  { minYears: 5, rate: 0.3 },
  { minYears: 1, rate: 0.2 },
  { minYears: 0, rate: 0.1 },
];

function getDiscount(user) {
  if (user.type === 'standard') return 0.05;
  if (user.type !== 'premium') return 0;
  return PREMIUM_TIERS.find(t => user.yearsActive > t.minYears).rate;
}
```

## Why it's simpler

The original nests four levels deep to express what's really a flat lookup: user type, then (for premium users) a tenure tier. Pulling the tier thresholds into a data table removes the nested `if/else` entirely and makes adding a new tier a one-line data change instead of a new nested branch.

## Behavior preserved

Verified against all four original branches: `premium` + `>5 years` → `0.3`; `premium` + `1–5 years` → `0.2`; `premium` + `≤1 year` → `0.1`; `standard` → `0.05`; anything else → `0`. The `PREMIUM_TIERS.find` uses `user.yearsActive > t.minYears`, matching the original's strict `>` comparisons exactly — care was taken here since a `>=` would have silently shifted the boundary at year 1 and year 5.
