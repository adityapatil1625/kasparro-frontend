import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number;
  maxValue?: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

export function ProgressBar({
  value,
  maxValue = 100,
  size = 'md',
  showLabel = true,
  className,
}: ProgressBarProps) {
  const percentage = Math.min((value / maxValue) * 100, 100);

  const getProgressColor = () => {
    if (percentage >= 80) return 'bg-green-500';
    if (percentage >= 60) return 'bg-blue-500';
    if (percentage >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const heightClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };

  return (
    <div className={cn('w-full', className)}>
      <div className={cn('w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden', heightClasses[size])}>
        <div
          className={cn('h-full rounded-full transition-all duration-300', getProgressColor())}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {value} / {maxValue}
        </p>
      )}
    </div>
  );
}
