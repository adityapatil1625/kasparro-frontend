"use client";

import { AuditModule } from "@/types";
import { useStore } from "@/store/useStore";
import { Button } from "@/components/ui/button"; // shadcn/ui Button component
import { cn } from "@/lib/utils";

interface AuditModuleListProps {
  modules: AuditModule[];
}

export function AuditModuleList({ modules }: AuditModuleListProps) {
  const { selectedModule, setModule } = useStore();

  return (
    <nav className="space-y-2">
      {modules.map((module) => (
        <Button
          key={module.id}
          variant="ghost"
          className={cn(
            "w-full justify-start capitalize",
            selectedModule === module.id && "bg-muted hover:bg-muted"
          )}
          onClick={() => setModule(module.id)}
        >
          {module.id.replace(/-/g, ' ')}
        </Button>
      ))}
    </nav>
  );
}
