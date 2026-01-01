import { cn } from "@/lib/utils";

interface CardSkeletonProps {
  className?: string;
}

export function CardSkeleton({ className }: CardSkeletonProps) {
  return (
    <div className={cn("rounded-xl border bg-card p-6 shadow-sm", className)}>
      <div className="space-y-4">
        {/* Title skeleton */}
        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded-md w-3/4 animate-pulse"></div>
        
        {/* Value skeleton */}
        <div className="space-y-2">
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-md w-1/2 animate-pulse"></div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full w-full animate-pulse"></div>
        </div>
        
        {/* Stats skeleton */}
        <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-1/3 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
