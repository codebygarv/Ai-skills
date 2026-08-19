# Example: Data Table UX Designer

## Input

> "Design a data table layout for an e-commerce orders view with 50,000 records."

## Output

### Recommended Layout Structure
1. **Filter & Action Toolbar (Top)**:
   - Global search input + Saved filter views dropdown ("Needs Shipping", "Refunded").
   - Bulk selection badge (shows "12 selected" with "Print Shipping Labels", "Mark as Shipped" actions).
2. **Table Header (Sticky)**:
   - Tri-state sort indicators (None $ightarrow$ Asc $ightarrow$ Desc) with column resize handles.
   - Pinned Columns: Left (Checkbox, Order #), Right (Actions menu).
3. **Virtualization Strategy**:
   - Fixed row height (44px) rendered via `@tanstack/react-virtual` (only ~25 DOM nodes at a time).
4. **Mobile Fallback**:
   - Automatically transform table rows into structured summary cards on screens < 768px.
