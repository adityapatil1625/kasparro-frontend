"use client";

import { AuditModule } from "@/types";
import { useStore } from "@/store/useStore";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ScoreBadge } from "@/components/ScoreBadge";
import { memo } from "react";

interface AuditModuleListProps {
  modules: AuditModule[];
}

const ModuleItem = memo(
  ({
    module,
    isSelected,
    onSelect,
    index,
  }: {
    module: AuditModule;
    isSelected: boolean;
    onSelect: (id: string) => void;
    index: number;
  }) => {
    const formatModuleName = (id: string) => {
      return id
        .replace(/-/g, ' ')
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    };

    return (
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
      >
        <button
          onClick={() => onSelect(module.id)}
          className={cn(
            'w-full p-3 rounded-lg text-left transition-all duration-200 flex items-center justify-between group',
            isSelected
              ? 'bg-primary text-primary-foreground shadow-lg'
              : 'hover:bg-secondary/50 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
          )}
        >
          <span className="font-medium">{formatModuleName(module.id)}</span>
          <ScoreBadge
            score={module.score}
            size="sm"
            className={cn(
              isSelected
                ? 'bg-primary-foreground/20 text-primary-foreground'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            )}
          />
        </button>
      </motion.div>
    );
  }
);

ModuleItem.displayName = 'ModuleItem';

export function AuditModuleList({ modules }: AuditModuleListProps) {
  const { selectedModule, setModule } = useStore();

  return (
    <nav className="space-y-2">
      {modules.map((module, index) => (
        <ModuleItem
          key={module.id}
          module={module}
          isSelected={selectedModule === module.id}
          onSelect={setModule}
          index={index}
        />
      ))}
    </nav>
  );
}
