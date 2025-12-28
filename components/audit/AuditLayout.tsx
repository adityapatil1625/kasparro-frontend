"use client";

import React from "react";
import { AuditData, AuditModule } from "@/types";
import { AuditModuleList } from "./AuditModuleList"; // Will create this
import { AuditModuleDetail } from "./AuditModuleDetail"; // Will create this
import { useStore } from "@/store/useStore";

interface AuditLayoutProps {
  auditData: AuditData;
}

export function AuditLayout({ auditData }: AuditLayoutProps) {
  const { selectedModule } = useStore();
  const modules = Object.values(auditData);

  const currentModule: AuditModule | undefined = modules.find(
    (module) => module.id === selectedModule
  );

  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <aside className="w-64 bg-secondary p-6 border-r">
        <h2 className="text-xl font-bold mb-4">Audit Modules</h2>
        <AuditModuleList modules={modules} />
      </aside>

      {/* Main Content Panel */}
      <main className="flex-1 p-6">
        {currentModule ? (
          <AuditModuleDetail module={currentModule} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Select a module to view details.
          </div>
        )}
      </main>
    </div>
  );
}
