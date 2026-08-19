# Example: Empty and Error State Designer

## Input

> "Design the empty state for a new user who just opened their 'Team Invoices' tab."

## Output

```jsx
export function EmptyInvoicesState({ onGenerateSample, onCreateInvoice }) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center border-2 border-dashed border-neutral-200 rounded-2xl bg-neutral-50/50">
      <div className="w-14 h-14 mb-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
        <ReceiptIcon className="w-7 h-7" />
      </div>
      <h3 className="text-lg font-semibold text-neutral-900">No invoices yet</h3>
      <p className="max-w-sm mt-1 text-sm text-neutral-500">
        Create and send professional invoices to your clients in under two minutes.
      </p>
      <div className="flex items-center gap-3 mt-6">
        <button onClick={onCreateInvoice} className="btn-primary">
          + Create New Invoice
        </button>
        <button onClick={onGenerateSample} className="btn-secondary">
          Load Sample Data
        </button>
      </div>
    </div>
  );
}
```
