# Example: UI Auditor

## Input

> A new "Team Settings" page: a card with a heading ("Team Settings", 14px), a save button (custom-styled, 6px border-radius, blue #2563eb), and a form with inputs that have 4px gaps between them. The rest of the app uses 16px headings for card titles, a shared `<Button variant="primary">` component (8px border-radius, brand blue token), and 12px gaps between form fields.

## Output

**Hierarchy**
- The "Team Settings" heading is 14px, smaller than the 16px used for every other card title in the app. At this size it reads closer to body text than a section heading, undermining the page's scan order.
  - Fix: use the existing 16px card-title style.

**Consistency**
- The save button is custom-styled (6px radius, hardcoded `#2563eb`) instead of using the shared `<Button variant="primary">` component. This means it'll silently drift from the rest of the app's buttons the next time the design system's button styling changes.
  - Fix: replace with `<Button variant="primary">Save</Button>`.
- Form field gaps are 4px versus the app's standard 12px elsewhere, making this form read as noticeably more cramped than every other form in the product.
  - Fix: match the existing 12px field-gap spacing.

**State Coverage**
- No error state shown for the form (e.g. invalid team name) and no loading state on the save button while the request is in flight — worth confirming both are handled, since neither appeared in the reviewed implementation.

**Note:** the color and component-reuse issues above are also flaggable at the token level — run [Design System Guardian](../../design-system-guardian/) for a deeper pass if this pattern shows up elsewhere in the codebase too.
