"use client";

import { AuditModule } from "@/types";
import { Card } from "@/components/Card"; // Assuming a Card component exists
import { SectionTitle } from "@/components/SectionTitle";

interface AuditModuleDetailProps {
  module: AuditModule;
}

export function AuditModuleDetail({ module }: AuditModuleDetailProps) {
  return (
    <div className="space-y-8">
      <SectionTitle
        pill={`Score: ${module.score}/100`}
        title={`${module.id.replace(/-/g, ' ').toUpperCase()} Overview`}
        description={`Detailed analysis and recommendations for ${module.id.replace(/-/g, ' ')}.`}
        className="text-left"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Key Insights" content={module.insights.map((insight, index) => <p key={index}>{insight}</p>)} />
        <Card title="Issues / Flags" content={module.issues.map((issue, index) => <p key={index}>{issue}</p>)} />
      </div>

      <Card title="Recommendations" content={module.recommendations.map((rec, index) => <p key={index}>{rec}</p>)} />
    </div>
  );
}
