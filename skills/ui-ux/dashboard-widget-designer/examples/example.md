# Example: Dashboard Widget Designer

## Input

> "Design a modern KPI card for Monthly Recurring Revenue (MRR) with a trend badge and 30-day sparkline."

## Output

```jsx
export function KpiCard({ title, value, deltaPercent, isPositive, sparklineData }) {
  return (
    <div className="p-5 bg-white border border-neutral-200 rounded-xl shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">{title}</span>
        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${
          isPositive ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
        }`}>
          {isPositive ? '↑' : '↓'} {Math.abs(deltaPercent)}%
        </span>
      </div>
      
      <div className="flex items-baseline justify-between mt-3">
        <span className="text-2xl font-bold text-neutral-900 tracking-tight">{value}</span>
        <span className="text-xs text-neutral-400">vs. last month</span>
      </div>

      <div className="mt-4 h-9">
        <SparklineSvg data={sparklineData} strokeColor={isPositive ? '#10b981' : '#f43f5e'} />
      </div>
    </div>
  );
}
```
