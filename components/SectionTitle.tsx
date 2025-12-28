import { cn } from "@/lib/utils";
import React from "react";

interface SectionTitleProps {
  pill?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionTitle({
  pill,
  title,
  description,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn("flex flex-col items-center space-y-4", className)}>
      {pill && (
        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
          {pill}
        </div>
      )}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
