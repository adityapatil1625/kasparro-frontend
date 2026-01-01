import React from 'react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  label: string;
  value: string | number | React.ReactNode;
  icon?: React.ReactNode;
  trend?: { direction: 'up' | 'down' | 'stable'; percentage: number };
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

export function StatCard({ label, value, icon, trend, description, className, children }: StatCardProps) {
  return (
    <div className={cn('p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-card hover:shadow-md transition-shadow', className)}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{label}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{value}</p>
          {description && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{description}</p>
          )}
        </div>
        {icon && <div className="text-gray-400 dark:text-gray-600 ml-4">{icon}</div>}
      </div>
      {trend && (
        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center gap-2">
          <span className="text-xs text-gray-500 dark:text-gray-400">vs. last audit:</span>
          <span
            className={cn('text-sm font-semibold', {
              'text-green-600 dark:text-green-400': trend.direction === 'up',
              'text-red-600 dark:text-red-400': trend.direction === 'down',
              'text-gray-600 dark:text-gray-400': trend.direction === 'stable',
            })}
          >
            {trend.direction === 'up' && '↑'}
            {trend.direction === 'down' && '↓'}
            {trend.direction === 'stable' && '→'} {Math.abs(trend.percentage)}%
          </span>
        </div>
      )}
      {children}
    </div>
  );
}
