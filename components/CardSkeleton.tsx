export function CardSkeleton() {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm animate-pulse">
      <div className="h-6 bg-gray-200 rounded-md w-3/4 mb-2"></div>
      <div className="h-8 bg-gray-200 rounded-md w-1/2"></div>
    </div>
  );
}
