import React from 'react';
import { cn } from '@/lib/utils';

interface TrendIndicatorProps {
  direction: 'up' | 'down' | 'stable';
  percentage?: number;
  className?: string;
}

export function TrendIndicator({ direction, percentage, className }: TrendIndicatorProps) {
  const getIcon = () => {
    if (direction === 'up') {
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4" />
        </svg>
      );
    }
    if (direction === 'down') {
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      );
    }
    return (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4v12zm10-12v12V4z" />
      </svg>
    );
  };

  const getColor = () => {
    if (direction === 'up') return 'text-green-600 dark:text-green-400';
    if (direction === 'down') return 'text-red-600 dark:text-red-400';
    return 'text-gray-600 dark:text-gray-400';
  };

  return (
    <span className={cn('inline-flex items-center gap-1 text-sm font-medium', getColor(), className)}>
      {getIcon()}
      {percentage && <span>{percentage > 0 ? '+' : ''}{percentage}%</span>}
    </span>
  );
}
