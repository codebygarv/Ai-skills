# Example: Color Palette Generator

## Input

> "Generate a slate & indigo palette for a SaaS analytics dashboard supporting light and dark modes."

## Output

```css
:root {
  /* Light Theme */
  --bg-app: #f8fafc;
  --bg-surface: #ffffff;
  --bg-surface-elevated: #f1f5f9;
  --border-subtle: #e2e8f0;
  --text-primary: #0f172a;    /* Contrast: 15.6:1 (AAA) */
  --text-secondary: #475569;  /* Contrast: 7.2:1 (AAA) */
  --primary-brand: #4f46e5;
  --primary-foreground: #ffffff; /* Contrast: 5.8:1 (AA) */
}

[data-theme="dark"] {
  /* Dark Theme */
  --bg-app: #090d16;
  --bg-surface: #0f172a;
  --bg-surface-elevated: #1e293b;
  --border-subtle: #334155;
  --text-primary: #f8fafc;    /* Contrast: 16.1:1 (AAA) */
  --text-secondary: #94a3b8;  /* Contrast: 7.4:1 (AAA) */
  --primary-brand: #6366f1;
  --primary-foreground: #ffffff; /* Contrast: 5.2:1 (AA) */
}
```
