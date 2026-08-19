# Example: Micro-Interaction Designer

## Input

> "Design a micro-interaction for an 'Add to Cart' button with loading and success states."

## Output

```css
/* Add to Cart Button Micro-interaction */
.btn-cart {
  position: relative;
  transition: transform 150ms cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 150ms ease,
              background-color 200ms ease;
}

.btn-cart:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.btn-cart:active {
  transform: translateY(0) scale(0.98);
}

.btn-cart.is-success {
  background-color: #10b981;
  animation: success-pulse 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@media (prefers-reduced-motion: reduce) {
  .btn-cart {
    transition: none;
    animation: none;
  }
}
```
